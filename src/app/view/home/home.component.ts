import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo_banner! : string;
  texto_corpo! : string;
  constructor() { }

  ngOnInit(): void {
    this.titulo_banner! = "venha conhecer nosso diferencial!!!";
    this.texto_corpo! = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatem, excepturi consequuntur suscipit"+
    "totam culpa sapiente necessitatibus, quaerat delectus modi veniam alias quo molestiae ratione id beatae facere"+
    "quasi magni!"
  }

}
