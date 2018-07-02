import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Post } from '../models/post';
import { AppConstants } from '../models/appConstant';



@Injectable()
export class GetDataService {

  constructor(private httpClient: HttpClient) { }

  public getPollAftertimout(): Observable<Post[]> {
    let url = `${AppConstants.search_by_date_story_Url}`;
    return this.httpClient.get<Post[]>(url);  

  }
}
