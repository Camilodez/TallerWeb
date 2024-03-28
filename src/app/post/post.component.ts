import { Component, Input } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input () raiz: Post | null = null;
}
