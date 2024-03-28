import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {

  ROOT_URL = "https://dummyjson.com";

  txtuser: string = "";

  constructor(private http: HttpClient) { }

  user$: Observable<any> = new Observable();

  usuario: User | null = null;
    
  

  buscarUsuario() {
    this.user$ = this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtuser}`);
    
    this.user$.subscribe( data => {
      const userData = data.users[0]
      this.usuario = userData;
    })
  }

}
