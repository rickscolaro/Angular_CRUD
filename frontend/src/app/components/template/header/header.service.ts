import { Injectable } from '@angular/core';
import { title } from 'process';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from '../header//header-data-model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
 

  headerData?: new BehaviorSubject<HeaderData>  ({
    title: 'Inicio',
    icon: 'home',
    routeUrl:''
  });
  

  constructor() { }
}
