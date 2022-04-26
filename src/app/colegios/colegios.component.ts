import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent {

  colegios: string[] = [];

  constructor(private colegiosService: ColegiosService) {
    this.cargarColegios();
  }


  cargarColegios() {
    this.colegios = this.colegiosService.getColegios();
  }

  agregarColegio(): void  {
      this.colegiosService.agregarColegio();
      this.cargarColegios();
  }

  borrarColegio(): void  {
      this.colegiosService.borrarColegio();
      this.cargarColegios();
     
  }

}
