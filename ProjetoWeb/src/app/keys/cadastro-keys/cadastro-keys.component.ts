import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';
import { MensagemService } from 'src/app/shared/services/mensagem/mensagem.service';

@Component({
  selector: 'app-cadastro-keys',
  templateUrl: './cadastro-keys.component.html',
  styleUrls: ['./cadastro-keys.component.scss']
})
export class CadastroKeysComponent implements OnInit {

  key: Key;


  constructor(private keyService: KeysService, private mensagemService: MensagemService) {
    this.key = new Key('', 0, '', '')


  }

  ngOnInit(): void {
  }



  AdiconarKey(): void {
    this.keyService.inserir(this.key).subscribe(
      keyobs => this.mensagemService.success("Key Cadastrada com sucesso"));

      this.key = new Key('', 0, '', '')
  }


}