import { Injectable, signal } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface News {
  id?: string;
  title: string;
  summary: string;
  imageUrl?: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news = signal<News[]>([]); 

  constructor(private firestore: AngularFirestore) {}

  getNews(): Observable<News[]> {
    return this.firestore
      .collection<News>('news')
      .valueChanges({ idField: 'id' }) as Observable<News[]>;
  }

  addNews(news: News): Promise<any> {
    return this.firestore.collection('news').add(news);
  }

  deleteNews(id: string): Promise<void> {
    return this.firestore.collection('news').doc(id).delete();
  }

  updateNews(id: string, data: Partial<News>): Promise<void> {
    return this.firestore.collection('news').doc(id).update(data);
  }
}
