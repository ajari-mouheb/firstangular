import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  serviceslists = [
    {icon : 'fa-shopping-cart',Title :'E-commerce',description: 'prestashop, woocommerce'},
    {icon : 'fa-laptop',Title :'E-commerce',description:'ui/ux using bootstrap and poper.js'},
    {icon : 'fa-lock', Title:'web security',description:'ISO 9001,cybersecurity'}
  ]
}
