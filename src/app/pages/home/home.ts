import { Component } from '@angular/core';
import { ImageGallery } from "../../components/imagegallery/imagegallery";

@Component({
  selector: 'app-home',
  imports: [ImageGallery],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
