import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {
  @Input() root: User | null = null;
  showInfo = false; // Variable para controlar la visibilidad de la información

  // Método para alternar la visibilidad de la información
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
