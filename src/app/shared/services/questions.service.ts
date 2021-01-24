import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question';
import { ServiceResult } from '../models/service-result';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public questions: Question[] = [];

  constructor(private http: HttpClient) { }

  getQuestions(amount: number, category?: string, difficulty?: string): Observable<Question[]> {
    let params = new HttpParams();

    params = params.append('amount', amount.toString());

    if (category) {
      params = params.append('category', category);
    }

    if (difficulty) {
      params = params.append('difficulty', difficulty.toLowerCase());
    }

    return this.http.get<ServiceResult<Question[]>>('https://opentdb.com/api.php', {params: params})
      .pipe(map(response => response.results));
  }

  setQuestions(questions: Question[]) {
   this.questions = questions;
   console.log(this.questions);
  }
}
