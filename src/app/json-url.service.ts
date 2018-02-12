import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonUrlService {
  private url: string = 'http://www.mocky.io/v2/5a80124d2f00005a00a4c04b';
  constructor(private http: Http) { }

  getInfoUrlJson() {
    return this.http.get(this.url).map(response => {
      return response.json();
    });
  }

}
