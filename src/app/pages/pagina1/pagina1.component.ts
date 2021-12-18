import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Alejandro';

  constructor() {
    console.warn('1. constructor')
    console.log('Crea la nueva instancia de este componente, especial para inyectar servicios')
    console.log('---')
  }

  /**
   * Los ciclos de vida son métodos que deben ser implementados para lanzar cierta lógica durante la creación, cambio o destrucción de un componente
   * No se requiere implementar todos ellos dentro de un componente
   * Va a depender de la necesidad el usarlos o no.
   */

  ngOnChanges(changes: SimpleChanges): void {
    console.error('** ngOnChanges **')
    console.log('Se ejecuta cuando cambia un valor de un input control dentro de un componente (@Input), o cuando cambia el valor de una propiedad vinculada. Siempre recibe un mapa de datos con el valor actual y anterior de la propiedad que ha cambiado su valor en cuestión')
    console.log(SimpleChange)
    console.log('---')
  }

  ngOnInit(): void {
    console.warn('2. ngOnInit')
    console.log('El componente ha sido inicializado, especial para hacer peticiones http o inicializar la data del componente')
    console.log('---')
  }

  ngDoCheck(): void {
    console.warn('3. ngDoCheck')
    console.log('Se ejecuta cada vez que se verifican las propiedades de entrada en el componente')
    console.log('---')
  }

  ngAfterContentInit(): void {
    console.warn('4. ngAfterContentInit')
    console.log('Se ejecuta cuando se muestra el contenido dentro de las vistas del componente "componentes hijo"')
    console.log('---')
  }

  ngAfterContentChecked(): void {
    console.warn('5. ngAfterContentChecked')
    console.log('Se ejecuta cuando el contenido de los componentes hijos ha sido verificado por el mecanismo de detección de cambios de Angular')
    console.log('---')
  }

  ngAfterViewInit(): void {
    console.warn('6. ngAfterViewInit')
    console.log('Se ejecuta cuando la vista completa del componente (hijos y contenido directo) se ha inicializado por completo')
    console.log('---')
  }

  ngAfterViewChecked(): void {
    console.warn('7. ngAfterViewChecked')
    console.log('Se ejecuta cada vez que la vista del componente verifique cambios, es útil cuando el componente espera algún valor que proviene de sus componentes secundario (custom event)')
    console.log('---')
  }

  ngOnDestroy(): void {
    console.warn('8. ngOnDestroy')
    console.log('Se ejecuta cuando el componente se destruye, útil para dar de baja a suscripción de onbservables y desconectar controladores de eventos para evitar fugas de memoria')
    console.log('---')
  }

}
