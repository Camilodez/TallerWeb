import { Component, Input } from '@angular/core';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';
import axios, { AxiosResponse } from 'axios';
import { Comentario } from '../models/Comentario';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input () id?: number ;

  ROOT_URL = "https://dummyjson.com"

  constructor(private http: HttpClient) { }

  publicaciones: Post[] = []

  comentarios: Comentario[] = []

  ngOnChanges() {
    if(this.id) {
      setTimeout(() => this.buscarPosts(), 50);

    }
  }

  async buscarPosts() {
    
    try {
      const response: AxiosResponse = await axios.get(`${this.ROOT_URL}/posts/user/${this.id}`)
      console.log(response)
      this.publicaciones = response.data.posts

      this.publicaciones.forEach((post) => {
        this.buscarComentarios(post.id)
      })

    } catch (error) {
      console.log(error)
    }
  }

  async buscarComentarios(idcomment: number) {

    this.comentarios = []
    try {
    const response = await axios.get(`${this.ROOT_URL}/comments/post/${idcomment}`)
    console.log(response)

    this.comentarios = response.data.comments
    } catch (error) {
      console.log(error)
    }
  }
}
