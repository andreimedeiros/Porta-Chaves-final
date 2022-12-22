import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';
import { MensagemService } from 'src/app/shared/services/mensagem/mensagem.service';

@Component({
  selector: 'app-compra-game',
  templateUrl: './compra-game.component.html',
  styleUrls: ['./compra-game.component.scss']
})
export class CompraGameComponent implements OnInit {


  key: Key;
  toDisplay = false;
  keys: Array<Key>

  constructor(private keyService: KeysService, private mensagemService: MensagemService, private routerOn: ActivatedRoute) {
    this.key = new Key('', 0, '', '', '');
    this.keys = [];
    if (routerOn.snapshot.paramMap.has('id')) {
      const idkey = routerOn.snapshot.paramMap.get('id');
      if (idkey) {
        const keyfind = this.keyService.pesquisarPorId(idkey).subscribe(
          keyfinded => this.key = keyfinded);
        }
    }
  }


  ngOnInit(): void {
  }

  toggleData() {
    this.toDisplay = !this.toDisplay;
  }



  removerKey(key: Key): void {
    const id = key.id || '';
    this.keyService.removerKey(id).subscribe(
      keyremovida => {
        console.log(keyremovida);
        const indxKey = this.keys.findIndex(k => k.id === key.id);
        if (indxKey > -1) {
          this.keys.splice(indxKey, 1);
        }
        this.mensagemService.info("Compra realizada com sucesso!")
      }
    );
  }
}
