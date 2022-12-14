import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  currentSlide = 0;
  ngOnInit(): void {
    this.slides[0] = { src: '../../assets/images/1.jpeg' }
    this.slides[1] = { src: '../../assets/images/2.jpeg' }
    this.slides[2] = { src: '../../assets/images/3.jpg' }
    this.slides[3] = { src: '../../assets/images/4.jpg' }
    this.slides[4] = { src: '../../assets/images/5.jpg' }
    this.slides[5] = { src: '../../assets/images/6.jpg' }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
