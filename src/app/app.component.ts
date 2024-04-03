import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TallerWeb';
  ROOT_URL = "https://dummyjson.com";
  txtuser: string = "";
  user$: Observable<any> = new Observable();
  usuario: User | null = null;
  isInputExpanded: boolean = false;

  constructor(private http: HttpClient) {}

  // Llamado cuando se hace clic en el botón de búsqueda
  buscarUsuario() {
    if (!this.isInputExpanded) {
      this.toggleInput(); // Si el input está contraído, simplemente lo expande
    } else if (this.txtuser) {
      this.realizarBusqueda(); // Si ya está expandido y hay texto, realiza la búsqueda
    }
  }

  // Cambia la visibilidad del input
  toggleInput() {
    this.isInputExpanded = !this.isInputExpanded;
  }

  // Método para realizar la búsqueda
  realizarBusqueda() {
    this.user$ = this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtuser}`);
    this.user$.subscribe(data => {
      this.usuario = data.users[0];
      console.log(this.usuario);
      // Opcional: resetea el input después de la búsqueda
      // this.isInputExpanded = false;
      // this.txtuser = "";
    });
  }

  // Llamado cuando el mouse entra en el área del botón
  expandInput() {
    if (!this.isInputExpanded) {
      this.isInputExpanded = true;
    }
  }
}
