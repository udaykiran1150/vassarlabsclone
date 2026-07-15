import { Component } from '@angular/core';
import { ImageGallery } from "../../components/imagegallery/imagegallery";
import { Clients } from "../../components/clients/clients";
import { TechnologyPowerhouse } from "../../components/technologypowerhouse/technologypowerhouse";

@Component({
  selector: 'app-home',
  imports: [ImageGallery, Clients, TechnologyPowerhouse],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
