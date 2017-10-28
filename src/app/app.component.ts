import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Eduardo Lopez';
  textosiempre = 'Holi :v';
  colores = ['rojo', 'azul', 'amrillo'];
  addcolor(color) {
    this.colores.push(color.value);
    console.log(color.value);
    color.value = '';
    return false;
  }
}

