import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';

@Component({
  selector: 'app-tropico6',
  templateUrl: './tropico6.component.html',
  styleUrls: ['./tropico6.component.scss']
})
export class Tropico6Component implements OnInit {

  keys: Array<Key>;

  constructor(private keysService: KeysService) {
    this.keys = []
   }

  ngOnInit(): void {
    this.keysService.listartrpc().subscribe(
      keysobs => this.keys = keysobs
    );

  }

}