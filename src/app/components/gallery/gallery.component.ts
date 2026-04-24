import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

products = [
  {
    title: 'Box Packaging',
    description: 'High quality corrugated box',
    image: 'assets/CORRUGATED-BOARDS.jpg'
  },
   {
    title: 'Die-Cut-Box',
    description: 'Attractive design',
    image: 'assets/Die-Cut-Box.jpg'
  },
  {
    title: 'PRINTED-CORRUGATED-BOXES',
    description: 'Attractive design',
    image: 'assets/PRINTED-CORRUGATED-BOXES.jpg'
  },
   {
    title: 'Partition-Corrugated-Box',
    description: 'Attractive design',
    image: 'assets/Partition-Corrugated-Box.jpg'
  },
   {
    title: 'Pallet-Type-Boxing',
    description: 'Attractive design',
    image: 'assets/Pallet-Type-Boxing.jpg'
  },
  
   {
    title: 'Die-Cut-Box',
    description: 'Attractive design',
    image: 'assets/SLEEVES-CAPS.jpg'
  },

  {
    title: 'REGULAR-SLOTTED-BOXES',
    description: 'Attractive design',
    image: 'assets/REGULAR-SLOTTED-BOXES.jpg'
  },
   {
    title: 'FARM-FRESH-BOXES',
    description: 'Attractive design',
    image: 'assets/FARM-FRESH-BOXES.jpg'
  },

   {
    title: 'Paper Bags',
    description: 'Attractive design',
    image: 'assets/paper-bags.jpg'
  },
   
  {
    title: 'Custom Packaging',
    description: 'Strong and durable',
    image: 'assets/Corrugated-Pallets.jpg'
  },
 

  {
    title: 'Paper Bags',
    description: 'Attractive design',
    image: 'assets/wooden pallets.jpg'
  },

   {
    title: 'pvc-printing',
    description: 'Attractive design',
    image: 'assets/pvc-printing.jpeg'
  },
];
}
