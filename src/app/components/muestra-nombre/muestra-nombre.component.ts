import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.error('** ngOnChanges **')
    console.log('Se ejecuta cuando cambia un valor de un input control dentro de un componente (@Input), o cuando cambia el valor de una propiedad vinculada. Siempre recibe un mapa de datos con el valor actual y anterior de la propiedad que ha cambiado su valor en cuestión')
    console.log(changes)
    console.log('---')
  }

  ngOnInit(): void {

  }

}
