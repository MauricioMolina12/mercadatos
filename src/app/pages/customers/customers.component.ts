import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomersService } from '../../shared/services/customers.service';
import { ThemeService } from '../../shared/services/theme.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor(
    private customersService: CustomersService,
    private themeService: ThemeService
  ) {}

  categoriesCustomers: { name: string; customers: string[] }[] = [];
  activeCategory: string = '';
  currentPage: number = 0;
  itemsPerPage: number = 5;
  currentPageItems: any[] = [];
  totalPages: number = 0;

  isDark: boolean = false;
  searchCustomer = new FormControl('');

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

    console.log(this.categoriesCustomers);

    this.themeService.darkMode$.subscribe((theme) => {
      this.isDark = theme;
    });
  }

  filterCategory(key: string) {
    this.activeCategory = key;

    const categoryFound = this.categoriesCustomers.find(
      (category) => category.name === key
    );

    if (key === 'all') {
      this.updatePagination();
    } else if (categoryFound) {
      this.currentPageItems = categoryFound.customers;
    } else {
      this.currentPageItems = [];
    }
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
        map(query => query?.trim() || '') 
      )
      .subscribe((query) => {
        if (query === '') {
          this.filterCategory('all'); 
        } else {
          this.activeCategory = '';
          this.currentPageItems = allCustomers.filter((customer) =>
            customer.toLowerCase().includes(query.toLowerCase())
          );
        }
      });
  }
  
  groupedCustomers: { letter: string, customers: string[] }[] = [];

  updatePagination() {
    const allCustomers = this.categoriesCustomers.flatMap(
      (category) => category.customers
    );
  
    const grouped = allCustomers.reduce((acc, customer) => {
      const letter = customer.charAt(0).toUpperCase();
      if (!acc[letter]) {
        acc[letter] = [];
      }
      acc[letter].push(customer);
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
