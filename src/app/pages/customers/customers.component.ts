import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomersService } from '../../shared/services/customers.service';
import { ThemeService } from '../../shared/services/theme.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { Entity } from '../../shared/models/customers';


@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor(
    public customersService: CustomersService,
    private themeService: ThemeService
  ) {}

  categoriesCustomers: { name: string; customers: Entity[] }[] = [];
  customersByDepartments: { name: string; image: string; customers: Entity[] }[] = [];
  activeCategory: string = '';
  currentPage: number = 0;
  itemsPerPage: number = 5;
  currentPageItems: any[] = [];
  totalPages: number = 0;

  isDark: boolean = false;
  searchCustomer = new FormControl('');
  switchfilter: number = 1;
  departmentSelected: { [key: string]: { name: string, image: string } } = {};
  nameDepartmentSelected: string = ''

  ngOnInit(): void {
    this.activeCategory = 'all';

    this.searchCustomers();

    this.customersService.getCategoriesCustomers().subscribe((categories) => {
      this.categoriesCustomers = Object.entries(categories).map(
        ([name, customers]) => ({
          name,
          customers,
        })
      );

      if (this.activeCategory === 'all') {
        this.currentPageItems = this.categoriesCustomers.flatMap(
          (category) => category.customers
        );
        this.updatePagination();
      }
    });

    this.filterEntityByDepartment('ATLÁNTICO')

    // Set the theme
    this.themeService.darkMode$.subscribe((theme) => {
      this.isDark = theme;
    });

  }

  filterCategory(key: string) {
    this.activeCategory = key;

    const categoryFound = this.categoriesCustomers.find(
      (category) => category.name === key
    );

    console.log(key);
    console.log(categoryFound);
    

    if (key === 'all') {
      this.updatePagination();
    } else if (categoryFound) {
      this.currentPageItems = categoryFound.customers;
    } else {
      this.currentPageItems = [];
    }
  }

  filterEntityByDepartment(e: Event | string = '') {
    this.nameDepartmentSelected = typeof e === 'string' ? e : (e.target as HTMLSelectElement)?.value;
  
    if (!this.nameDepartmentSelected) {
      console.error('No se seleccionó un departamento.');
      return; 
    }
    
    this.customersService.getEntityByDepartment(this.nameDepartmentSelected).subscribe((result) => {
      if (result) {
        this.customersByDepartments = Object.entries(result).map(([name, { image, customers }]) => ({
          name,
          image,
          customers,
        }));
        const selectedDepartmentData = this.customersByDepartments.find(
          (dept) => dept.name === this.nameDepartmentSelected
        );
  
        if (selectedDepartmentData) {
          this.departmentSelected[this.nameDepartmentSelected] = {
            name: selectedDepartmentData.name,
            image: selectedDepartmentData.image,
          };
        }
      }
    });
  
  }
  
  
  
  searchCustomers() {
    const allCustomers = this.categoriesCustomers.flatMap(
      (category) => category.customers
    );

    this.searchCustomer.valueChanges
      .pipe(
        // startWith(''),
        debounceTime(200),
        distinctUntilChanged(),
        map((query) => query?.trim() || '')
      )
      .subscribe((query) => {
        if (query === '') {
          this.filterCategory('all');
        } else {
          this.activeCategory = '';
          this.currentPageItems = allCustomers.filter((customer) =>
            customer.name.toLowerCase().includes(query.toLowerCase())
          );
        }
      });
  }

  groupedCustomers: { letter: string; customers: string[] }[] = [];

  updatePagination() {
    const allCustomers = this.categoriesCustomers.flatMap(
      (category) => category.customers
    );

    const grouped = allCustomers.reduce((acc, customer) => {
      const letter = customer.name.charAt(0).toUpperCase();
      if (!acc[letter]) {
        acc[letter] = [];
      }
      acc[letter].push(customer.name);
      return acc;
    }, {} as Record<string, string[]>);

    this.groupedCustomers = Object.keys(grouped)
      .sort()
      .map((letter) => ({
        letter,
        customers: grouped[letter],
      }));

    this.currentPageItems = allCustomers;
    this.totalPages = Math.ceil(allCustomers.length / this.itemsPerPage);
    this.changePage(0);
  }



  changePage(direction: number) {
    const newPage = this.currentPage + direction;
    if (newPage >= 0 && newPage < this.totalPages) {
      this.currentPage = newPage;
      this.updateCurrentPageItems();
    }
  }

  updateCurrentPageItems() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.currentPageItems = this.categoriesCustomers
      .flatMap((c) => c.customers)
      .slice(start, end);
  }

  typeOfValue(value: any) {
    if (value && Array.isArray(value)) {
      return 'array';
    }
    return typeof value;
  }
}
