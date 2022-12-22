import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';

@Component({
  selector: 'app-mountandblade',
  templateUrl: './mountandblade.component.html',
  styleUrls: ['./mountandblade.component.scss']
})
export class MountandbladeComponent implements OnInit {

  keys: Array<Key>;

  constructor(private keysService: KeysService) {
    this.keys = []
   }

  ngOnInit(): void {
    this.keysService.listarMB().subscribe(
      keysobs => this.keys = keysobs
    );

  }

}
