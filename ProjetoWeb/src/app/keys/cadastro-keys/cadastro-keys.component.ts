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
  inserida = true;
  nomeBotao = "Cadastrar Key"


  constructor(private keyService: KeysService, private routerOn: ActivatedRoute, private mensagemService: MensagemService) {
    this.key = new Key('', 0, '', '', '')
    if (routerOn.snapshot.paramMap.has('id')) {
      const idEdicao = routerOn.snapshot.paramMap.get('id');
      if (idEdicao) {
        this.inserida = false;
        this.nomeBotao = 'Atualizar Key';
        const userFind = this.keyService.pesquisarPorId(idEdicao).subscribe(
          keyFind => this.key = keyFind
        );
      }
    }


  }

  ngOnInit(): void {
  }



  InserirouAtualizarKey(): void {
    if (this.inserida) {
      this.keyService.inserir(this.key).subscribe(
        keyinserida => this.mensagemService.success("Key Cadastrada!"));
      this.key = new Key('', 0, '', '', '');
    } else {
      this.keyService.atualizar(this.key).subscribe(
        keyatualizada => this.mensagemService.info("Key Atualizada!")
      )
    }

    //   this.keyService.inserir(this.key).subscribe(
    //     keyobs => this.mensagemService.success("Key Cadastrada com sucesso"));
    //     this.key = new Key('', 0, '', '')
    // }






  }
}