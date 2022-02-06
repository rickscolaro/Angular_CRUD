

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar"; 
import { EMPTY, Observable } from "rxjs";
import { Product } from "./product.model";

import {
  catchError,
  map,
} from "rxjs/operators"; 

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = " http://localhost:3005/products";

  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: Boolean = false): void {
    
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError
        ? ["msg-error"]
        : ["msg-success"] ,
    });
  }

  

  /* Função responsavel por inserir no backend o novo produto */
  create(product: Product): Observable<Product> {
    

    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  /* Método para ler o Backend. vai ler um array de produtos <Product[]> */
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  /* método para ler por Id */
  /*ex: http://localhost:3005/products/nºId" */
  /*Concatenado em string pois vai ser uma Url */
  readById(id: any): Observable<Product> {
    
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); 
  }

  
  delete(id: any): Observable<Product> {
   
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  
  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
