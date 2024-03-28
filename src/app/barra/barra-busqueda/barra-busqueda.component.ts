import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {

  @Input() root: User | null = null;
  

}
