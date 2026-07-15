import { Component, OnDestroy, OnInit } from '@angular/core';
import { Slide } from '../../models/imageGallery';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-imagegallery',
  imports: [CommonModule],
  templateUrl: './imagegallery.html',
  styleUrl: './imagegallery.css',
})
export class ImageGallery implements OnInit, OnDestroy {
  current = 0;

  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  slides: Slide[] = [
    {
      title: 'Reimagining Agriculture Through Digital Public Infrastructure',
      heading: 'Bill Gates witnesses APAIMS in action in Andhra Pradesh',
      description: `In a landmark demonstration, Bill Gates witnessed how Andhra Pradesh is operationalizing AI through APAIMS—its Agriculture Digital Public Infrastructure. Led by Hon. CM Shri N. Chandrababu Naidu, the initiative reflects a governance-first approach to AI adoption at scale.

Through unified data layers spanning land, crops, weather, and markets, APAIMS enables voice-driven, personalized farmer services. Powered by Vassar Labs, it is redefining how technology drives farmer-centric outcomes at scale.`,
      image: 'https://i.ytimg.com/vi/6SSIDKNsTBg/hqdefault.jpg',
    },
    {
      title: 'Turning Climate Intelligence into Real-World Impact',
      heading: 'Featured on ETV Telangana for Water & Climate Resilience',
      description: `Vassar Labs was featured on ETV Telangana on World Water Day, showcasing how AI, satellite data, and real-time analytics are helping governments respond to rising climate risks - from extreme rainfall and flooding to heatwaves.

Through advanced forecasting, real-time monitoring, and on-ground advisories, our platforms are enabling faster decisions, stronger resilience, and large-scale impact across water and climate systems.`,
      image:
        'https://vassarlabs.com/wp-content/uploads/2026/04/Turning-Climate-Intelligence-into-Real-World-Impact.webp',
    },
    {
      title: 'Driving AI for Disaster Resilience at Scale',
      heading: 'Shaping Global Dialogue at the India AI Impact Summit 2026',
      description: `At the India AI Impact Summit 2026, Vassar Labs joined global leaders to advance the conversation on AI-driven Disaster Risk Reduction. CEO Nikhilesh Kumar highlighted how digital twins, DPI-enabled platforms, and real-time satellite data are transforming early warning systems and enabling hyperlocal, actionable disaster intelligence.

From forecasting to last-mile response, the session underscored how AI is closing critical gaps in disaster preparedness and resilience at national scale.`,
      image: 'https://vassarlabs.com/wp-content/uploads/2026/04/AI-summit-cover-pic.webp',
    },
  ];

  next() {
    console.log('hi uday');
    this.current = (this.current + 1) % this.slides.length;
    console.log(this.current);
    this.cdr.detectChanges();
  }

  previous() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number) {
    this.current = index;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.next();
      // console.log("dslkdklfnd")
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
