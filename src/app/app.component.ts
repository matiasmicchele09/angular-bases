import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string = 'Hola Mundo';
}
/*cualquier cambio que sufra el counter (desde el app.component.html) al presionar el botón +
Angular va a mantener sincronizado el HTML con el ciclo de detección de cambios.
Angular está pendiente de saber "Ah, ok, esto cambió" entonces tengo que actualizar sus referencias y actualizar las referencias. */

