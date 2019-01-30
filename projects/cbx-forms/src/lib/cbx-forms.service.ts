import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CbxFormsService {

  constructor() { }

  doAlert() {
    alert('aqui');
  }
}
