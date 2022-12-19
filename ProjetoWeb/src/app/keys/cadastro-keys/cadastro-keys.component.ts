import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';

@Component({
  selector: 'app-cadastro-keys',
  templateUrl: './cadastro-keys.component.html',
  styleUrls: ['./cadastro-keys.component.scss']
})
export class CadastroKeysComponent implements OnInit {

  key: Key;


  constructor(private keyService: KeysService) {
    this.key = new Key('', 0, '', '')


  }

  ngOnInit(): void {
  }



  AdiconarKey(): void {
    this.keyService.inserir(this.key).subscribe(
      keyobs => console.log(keyobs));

      this.key = new Key('', 0, '', '')
  }


}