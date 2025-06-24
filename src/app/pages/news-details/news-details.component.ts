import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  standalone: false,
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit{

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    
  }
}
