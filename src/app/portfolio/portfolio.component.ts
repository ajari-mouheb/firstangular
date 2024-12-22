import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 
  tab = [
    {image : 'assets/img/portfolio/1.jpg' , Title :  "smart watch"        ,category:'illustration', description : 'sport'  ,client:'mouheb'},
    {image: 'assets/img/portfolio/2.jpg'   , Title:   "running shoe"      ,category:'sport gear'  ,description:'sport iteam',client:'aziz'},
    {image: 'assets/img/portfolio/3.jpg'   , Title: "sdfds"             , category:'identity',description:'dfqd'},
  ]

  fixedtab = [
    {image : 'assets/img/portfolio/1.jpg' , Title :  "smart watch"        ,category:'illustration', description : 'sport'  ,client:'mouheb'},
    {image: 'assets/img/portfolio/2.jpg'   , Title:   "running shoe"      ,category:'sport gear'  ,description:'sport iteam',client:'aziz'},
    {image: 'assets/img/portfolio/3.jpg'   , Title: "sdfds"             , category:'identity',description:'dfqd'},
  ]
  filtrer(categ :string){
  
  
      if(categ=='all'){
        this.tab=this.fixedtab;
      }else{
        this.tab=this.fixedtab.filter((prod)=>prod.category == categ);
      }
  
    

  }
  
}
