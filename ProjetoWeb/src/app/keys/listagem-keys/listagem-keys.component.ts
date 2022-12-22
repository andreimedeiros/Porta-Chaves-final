import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';
import { MensagemService } from 'src/app/shared/services/mensagem/mensagem.service';

@Component({
  selector: 'app-listagem-keys',
  templateUrl: './listagem-keys.component.html',
  styleUrls: ['./listagem-keys.component.scss']
})
export class ListagemKeysComponent implements OnInit {


  keys: Array<Key>;

  constructor(private keyService: KeysService, private roteador: Router, private mensagemService: MensagemService) { 
    this.keys = []
  }

  ngOnInit(): void {
    this.keyService.listar().subscribe(
      keysobs => this.keys = keysobs
    );
  }



  removerKey(key: Key): void {
    const id = key.id || '';
    this.keyService.removerKey(id).subscribe(
      keyremovida => {
        console.log(keyremovida);
        const indxKey = this.keys.findIndex(k => k.id === key.id);
        this.mensagemService.warning("Key removida com Sucesso.")


        if (indxKey > -1) {
          this.keys.splice(indxKey, 1);
        }

      }
    );
  }



}
