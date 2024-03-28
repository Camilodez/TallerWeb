import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  user$: Observable<any> = new Observable();
  post$: Observable<any> = new Observable();

  usuario: User | null = null;

  posts: Post | null = null;

  buscarUsuario() {
    this.user$ = this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtuser}`);
    this.user$.subscribe( data => {
      this.usuario = data.users[0];
      console.log(this.usuario)
    })

    /*this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtuser}`).subscribe((data: any) => {
        if(data) {
          this.usuario = data.users[0];
          console.log(this.usuario)
        }else{
          this.usuario = null
          console.log("No")
        }
    })*/

    //this.obtenerPost();
  }

  obtenerPost() {

    /*this.http.get<User>(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtuser}`).pipe(
      mergeMap((userInfo : any ) => {
        if(userInfo != null) {
          this.usuario = userInfo[0];
          return this.http.get<Post>(this.ROOT_URL + '/post/user/' + this.usuario!.id);
        }
        else{
          this.usuario = null;
          return of(0);
        }
      })
    ).subscribe((postInfo: any) => {
      this.posts = postInfo[0];
    })

  }*/
  }

}
