import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {
  @Input() root: User | null = null;
  isContentVisible = false; // Un solo estado para controlar la visibilidad

  // Método para alternar la visibilidad
  toggleContentVisibility(): void {
    this.isContentVisible = !this.isContentVisible;
  }
}
