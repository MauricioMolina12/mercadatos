import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor() {}

  categoriesCustomers: String[] = [];

  getCustomers() {
    const customers: string[] = [
      'GOBERNACIÓN DEL DEPARTAMENTO DEL ATLÁNTICO',
      'ALCALDÍA DE BARRANQUILLA',
      'ALCALDÍA DE POLO NUEVO',
      'CONSEJO MUNICIPAL DE PUERTO COLOMBIA',
      'ESE HOSPITAL NIÑO JESÚS DE BARRANQUILLA (EN LIQUIDACIÓN)',
      'CORPORACION REGIONAL AUTONOMA DEL ATLANTICO “CRA”',
      'ESE HOSPITAL DEPARTAMENTAL DE SABANALARGA (EN LIQUIDACIÓN)',
      'SERVICIO NACIONAL DE APRENDIZAJE – SENA REGIONAL ATLANTICO',
      'ALCALDÍA DE SOLEDAD – SECRETARIA DE EDUCACION',
      'INSTITUTO MUNICIPAL TRANSPORTE Y TRANSITO DE SOLEDAD',
      'SECRETARÍA DE MOVILIDAD DE BARRANQUILLA',
      'ESE HOSPITAL UNIVERSITARIO CARI (EN LIQUIDACIÓN)',
      'HOSPITAL MATERNO INFANTIL DE SOLEDAD: CENTROS DE SALUD HMI: MANUELA BELTRAN Y METROPOLITANO',
      'ALCALDÍA MUNICIPAL DEL LURUACO',
      'SECRETARÍA DE SALUD DEL LURUACO',
      'METODOS Y SISTEMAS',
      'ELECTRICARIBE SA ESP',
      'CONCEJO DISTRITAL DE SANTA MARTA',
      'PERSONERÍA DISTRITAL DE SANTA MARTA',
      'ALCALDÍA DE ZAPAYAN (MAGDALENA)',
      'GOBERNACIÓN DEL MAGDALENA',
      'HOSPITAL LOCAL DEL PIÑON (MAGDALENA)',
      'Hospital Universitario Julio Méndez Barreneche',
      'SECRETARÍA DE TRANSPORTES Y TRANSITO DE VALLEDUPAR',
      'SECRETARÍA MUNICIPAL DE TRANSPORTES Y TRANSITO DE CODAZZI (CESAR)',
      'ALCALDÍA DE RIOHACHA (EMPRESA PIONERA EN EL PROCESO DE INTERNACION DE LOS VEHICULOS)',
      'DEPARTAMENTO ADMINISTRATIVO DE TRANSPORTE Y TRANSITO DE LA GUAJIRA',
      'INSTITUTO MUNICIPAL DE TRANSPORTE Y TRANSITO DE RIOHACHA',
      'ALCALDÍA DE EL MOLINO',
      'ALCALDÍA DE SAN ESTANISLAO DE KOSTKA – ARENAL (BOLIVAR)',
      'ALCALDÍA DE MAGANGUE',
      'FONDO MUNICIPAL DE TRANSPORTES Y TRANSITO DE MAGANGUE (BOLIVAR)',
      'INSPECCION DE TRANSITO Y TRANSPORTES DE MOMPOX (BOLIVAR)',
      'SECRETARÍA MUNICIPAL DE COROZAL (SUCRE)',
      'CAJACOPI EPS',
      'CAJA DE PREVISION SOCIAL DEL ATLANTICO',
      'IPS SANTA MARIA DE JESÚS',
      'FUNDACIÓN “FUNDESOL” – SUCURSAL ATLÁNTICO',
      'SISCO S.A.S.',
      'QUIMIOSALUD LTDA',
      'ELECTRICARIBE SA ESP (AHORA AIRE)',
      'CAJA DE COMPENSACION FAMILIAR DEL MAGDALENA “CAJAMAG”',
      'FUNDACIÓN “FUNDESOL” – SUCURSAL MAGDALENA',
      'CAJA DE PREVISION SOCIAL DE LA UNIVERSIDAD DE CARTAGENA “UNICARTAGENA”',
      'CAJA DE COMPENSACION FAMILIAR CAMPESINA “COMCAJA”',
      'ALDESARROLLO (ANTES EDURED)',
      'CAJA DE COMPENSACION FAMILIAR DEL CESAR “COMFACESAR”',
      'CAFABA EPS-S',
      'CAJA DE COMPENSACION FAMILIAR DE BARRANCABERMEJA',
    ];
    return of(customers);
  }

  getCategoriesCustomers() {
    const keyWords: string[] = [
      'GOBERNACIÓN',
      'ALCALDÍA',
      'HOSPITAL',
      'SECRETARÍA',
      'INSTITUTO',
      'FUNDACIÓN',
      'CAJA',
    ];

    const categories: { [key: string]: string[] } = {};

    this.getCustomers().subscribe((customers) => {
      keyWords.forEach((keyword) => {
        categories[keyword] = customers.filter((customer) =>
          customer.toUpperCase().includes(keyword)
        );
      });

      const categorizedCustomers = Object.values(categories).flat();
      categories['OTROS'] = customers.filter(
        (customer) => !categorizedCustomers.includes(customer)
      );
    });

    return of(categories);
  }
}
