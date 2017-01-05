import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Category } from '../bean/categories';
import 'rxjs/add/operator/map'

@Component({
    selector: 'simple-http',
    templateUrl: 'SimpleHTTP.html'})
export class SimpleHTTPComponent {
    data: Object;
    loading: boolean;
    categoryList: Category[] = [];
    constructor(public http: Http) {
    }
    makeRequest(): void {
        this.loading = true;
        //this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        this.http.request('http://localhost:8080/shop-restful-service/categories')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });

            //Category
    }
    ngOnInit() {
        // get users from secure api end point
        this.getCategory()
            .subscribe(categoryList => {
                this.categoryList = categoryList;
            });
    }
    getCategory(): Observable<Category[]> {
        // add authorization header with jwt token
        
        // get users from api
        return this.http.get('http://localhost:8080/shop-restful-service/categories')
            .map((response: Response) => response.json());
    }
}