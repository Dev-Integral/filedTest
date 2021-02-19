import { Injectable } from '@angular/core';

import { of } from 'rxjs/internal/observable/of';

@Injectable()

export class DataStoreService {
    data
    
 constructor( ){
    
 }
  postData(data: object) {
    console.table(data);
    }   
}