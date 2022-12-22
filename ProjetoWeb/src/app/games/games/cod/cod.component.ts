import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.scss']
})
export class CodComponent implements OnInit {

  keys: Array<Key>;

  constructor(private keysService: KeysService) {
    this.keys = []
   }

  ngOnInit(): void {
    this.keysService.listarcod().subscribe(
      keysobs => this.keys = keysobs
    );

  }

}

