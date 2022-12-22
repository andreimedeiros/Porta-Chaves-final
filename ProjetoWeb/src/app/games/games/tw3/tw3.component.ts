import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';

@Component({
  selector: 'app-tw3',
  templateUrl: './tw3.component.html',
  styleUrls: ['./tw3.component.scss']
})
export class Tw3Component implements OnInit {

  keys: Array<Key>;

  constructor(private keysService: KeysService) {
    this.keys = []
   }

  ngOnInit(): void {
    this.keysService.listartw3().subscribe(
      keysobs => this.keys = keysobs
    );

  }

}
