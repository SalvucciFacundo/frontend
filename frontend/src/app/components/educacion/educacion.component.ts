import { Component, OnInit } from '@angular/core';

export interface Cursos {
  nombre: string;
  logo: string;
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educ:Cursos[]=[
    {nombre:'Técnico Mecánico Industrial, Escuela Técnico Industrial Emilio Civit Maipu Mendoza 2001-2008', logo:'assets/img/educacion/etiec.jpg'},
    {nombre:'Técnico Superior en Programacion, UTN Facultad Regional Mendoza 2010-2018',logo:'assets/img/educacion/Utn.png'},
    {nombre:'Curso de NodeJS Codigo CódigoFacilito 2020',logo:'assets/img/educacion/codigoFacilito.png'},
    {nombre:'Curso Profesional de Angular CódigoFacilito 2020',logo:'assets/img/educacion/codigoFacilito.png'},
    {nombre:'Stack MEAN Fazt Code 2021',logo:'assets/img/educacion/mean2.png'},
    {nombre:'Argentina Programa 2022',logo:'assets/img/educacion/ApLogo.png'}
];
usuarioLogeado:any;
  constructor() { }

  ngOnInit(): void {
    this.usuarioLogeado=localStorage.getItem('logeado');
  }

}
