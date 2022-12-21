import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  

  botaonome = "Iniciar Sessão"
  logado= false


  constructor(private routerOn: ActivatedRoute) { 
    if (window.localStorage.getItem("token")) {
    this.botaonome = "Log out"
    this.logado = true
  }
  }
  ngOnInit(): void {
  }

}
