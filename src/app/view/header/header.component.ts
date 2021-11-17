import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onclickMenuMobile(){
    let menuSlide = document.querySelector("#menu-slide");
    if (menuSlide?.classList.contains("show")){
      menuSlide.classList.remove("show");
    } else {
      menuSlide?.classList.add("show");
    }
  }

}
