import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-technology-powerhouse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologypowerhouse.html',

})
export class TechnologyPowerhouse {



  technologies = [
    {
      number: '01/06',
      title: 'Internet of Things',
      icon: 'fa-solid fa-file-lines',
      description:
        'IoT sensors installed across water infrastructure provides real-time data on water flow, quality, and usage.',
      active: true,
    },
    {
      number: '02/06',
      title: 'Artificial intelligence',
      icon: 'fa-solid fa-magnifying-glass-chart',
      description:
        'AI algorithms analyze vast datasets from sensors and satellites to predict water availability, quality, and demand.',
      active: true,
    },
    {
      number: '03/06',
      title: 'Remote Sensing',
      icon: 'fa-solid fa-screwdriver-wrench',
      description:
        'Satellite imagery provides comprehensive insights into water bodies, aiding assessment of water levels and land use.',
      active: false,
    },
    {
      number: '04/06',
      title: 'Cloud Computing',
      icon: 'fa-solid fa-cloud',
      description:
        'Integrate data from various sources, enabling centralized storage, processing and analysis of vast datasets.',
      active: false,
    },
    {
      number: '05/06',
      title: 'Geospatial Intelligence',
      icon: 'fa-solid fa-wallet',
      description:
        'Visualise water infrastructure networks, optimise distribution design, geotag assets and enable efficient routing.',
      active: false,
    },
    {
      number: '06/06',
      title: 'Digital Twins',
      icon: 'fa-solid fa-helmet-safety',
      description:
        'Replicate physical water systems in a virtual environment for real-time monitoring, simulation and optimisation.',
      active: false,
    },
  ];

}