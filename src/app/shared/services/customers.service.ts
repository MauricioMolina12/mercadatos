import { Injectable } from '@angular/core';
import { delay, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { department, Entity } from '../models/customers';
import { customers } from '../data/customers';
import { departments } from '../data/departments';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor() {}

  categoriesCustomers: String[] = [];
  departments = departments;

  getCustomers() {
    return of(customers);
  }

  getDepartments() {
    return of(departments);
  }

  getCategoriesCustomers(): Observable<{ [key: string]: Entity[] }> {
    const keyWords: { name: string; pattern: string[] }[] = [
      { name: 'GOBERNACIONES', pattern: ['GOBERNA'] },
      { name: 'ALCALDÍAS', pattern: ['ALCALD', 'SECRETA'] },
      { name: 'HOSPITALES', pattern: ['HOSPI'] },
      { name: 'INSTITUTOS', pattern: ['INSTIT'] },
      { name: 'FUNDACIONES', pattern: ['FUNDAC'] },
      { name: 'CAJAS DE COMPENSACIONES', pattern: ['CAJA'] },
    ];

    return this.getCustomers().pipe(
      map((customers) => {
        const categories: { [key: string]: Entity[] } = {};

        keyWords.forEach(({ name, pattern }) => {
          categories[name] = customers.filter((c) =>
            pattern.some((p) => c.name.toUpperCase().includes(p.toUpperCase()))
          );
        });

        const allCategorized = Object.values(categories).flat();
        categories['OTROS'] = customers.filter(
          (customer) => !allCategorized.includes(customer)
        );

        return categories;
      })
    );
  }

  getEntitiesByDepartment(): Observable<{
    [department: string]: { image: string; customers: Entity[] };
  }> {
    return forkJoin({
      departments: this.getDepartments(),
      entities: this.getCustomers(),
    }).pipe(
      map(({ departments, entities }) => {
        const result: {
          [key: string]: { name: string; image: string; customers: Entity[] };
        } = {};
        departments.forEach((dept) => {
          const deptEntities = entities.filter(
            (entity) => entity.department.toUpperCase() === dept.name
          );
          result[dept.name] = {
            name: dept.name,
            image: dept.image,
            customers: deptEntities,
          };
        });

        return result;
      })
    );
  }

  getEntityByDepartment(department: string): Observable<{
    [department: string]: { image: string; customers: Entity[] };
  }> {
    return this.getEntitiesByDepartment().pipe(
      map((entitiesByDepartment) => {
        const deptData = entitiesByDepartment[department];
        return deptData ? { [department]: deptData } : {};
      })
    );
  }

  // getEntitiesByDepartment(): Observable<{ [department: string]: Entity[] }> {
  //   const publicKeywords = [
  //     'GOBERNACIÓN',
  //     'ALCALDÍA',
  //     'HOSPITAL',
  //     'SECRETARÍA',
  //     'INSTITUTO',
  //     'CONCEJO',
  //     'PERSONERÍA',
  //     'FONDO',
  //     'DEPARTAMENTO',
  //     'INSPECCION',
  //     'ESE',
  //     'SENA',
  //   ];

  //   return this.getCustomers().pipe(
  //     map((customers: any) => {
  //       const result: { [department: string]: Entity[] } = {};

  //       customers.forEach((customer: Entity) => {
  //         const upperCustomer = customer.name.toUpperCase();
  //         const department =
  //           this.departments.find((dep) => upperCustomer.includes(dep)) ||
  //           'SIN DEPARTAMENTO';

  //         const isPublic = publicKeywords.some((keyword) =>
  //           upperCustomer.includes(keyword)
  //         );

  //         const entity: Entity = {
  //           name: customer.name,
  //           department,
  //           type: isPublic ? 'PÚBLICA' : 'PRIVADA',
  //         };

  //         if (!result[department]) {
  //           result[department] = [];
  //         }
  //         result[department].push(entity);
  //       });

  //       return result;
  //     })
  //   );
  // }
}
