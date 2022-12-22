import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';

@Component({
  selector: 'app-sekiro',
  templateUrl: './sekiro.component.html',
  styleUrls: ['./sekiro.component.scss']
})
export class SekiroComponent implements OnInit {

  keys: Array<Key>;

  constructor(private keysService: KeysService) {
    this.keys = []
   }

  ngOnInit(): void {
    this.keysService.listarskr().subscribe(
      keysobs => this.keys = keysobs
    );

  }

}