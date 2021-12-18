import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit {

  constructor() {
    console.log('constructor - especial para inicializar las propiedades de este componente, así como inyectar servicios')
  }

  ngOnInit(): void {
    console.log('ngOnInit - especial para hacer peticiones http')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - Detectar cambios en alguna propiedad del componente')

  }

  ngDoCheck(): void {
    console.log('ngDoCheck - detecta camnios en las propiedades de entrada')

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - Llamado cuando la vista se ha inicializado')

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - llamado despues de que se haya checado que cargaron bien las vistas o componentes hijos de este componente')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - llamado despues de ngonInit al proyectar contenido externo en el componente')

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - responde despues del contenido proyectado ')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - tareas de limpieza')

  }

}
