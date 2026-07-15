import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class Footer {

  platforms = [
    "Water Management",
    "Climate Smart Agriculture",
    "Land Use Intelligence",
    "Urban Water Management",
    "Flood Early Warning System",
    "Flood Risk Assessment",
    "Smart City Services",
    "Disaster Management System",
    "Renewable Energy Management"
  ];

  industries = [
    "Water",
    "Agriculture",
    "Oil and Gas",
    "Energy"
  ];

  resources = [
    "Climate Technology Blog",
    "Case Studies",
    "Technologies"
  ];

  links = [
    "About Us",
    "Contact Us"
  ];

}