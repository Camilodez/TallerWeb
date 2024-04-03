import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { Post } from './models/Post';

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
  posts: Post | null = null;
  isInputExpanded: boolean = false; // Agregado para controlar la expansión del input

  constructor(private http: HttpClient) {}

  buscarUsuario() {
    if (!this.isInputExpanded) {
      // Si el input no está expandido, expandirlo y no realizar la búsqueda
      this.isInputExpanded = true;
      return;
    }

    this.user$ = this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtuser}`);
    this.user$.subscribe(data => {
      this.usuario = data.users[0];
      console.log(this.usuario);
    });
  }

  toggleInput() {
    this.isInputExpanded = !this.isInputExpanded;
  }

  expandInput() {
    this.isInputExpanded = true;
  }
}
