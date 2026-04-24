import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  // }

images = [
  'assets/home_page1.jpeg',
  'assets/home_page2.jpg',
  'assets/home_page3.jpg',

  'assets/Home-page1.jpg',
  'assets/Home-page2.jpg',
  'assets/Home-page3.jpg',
  'assets/CORRUGATED-BOARDS.jpg'
];

currentIndex = 0;

ngOnInit() {
  setInterval(() => {
    this.nextSlide();
  }, 3000); // 🔥 4 seconds (change to 3000 if needed)
}

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

goToSlide(index: number) {
  this.currentIndex = index;
}

}
