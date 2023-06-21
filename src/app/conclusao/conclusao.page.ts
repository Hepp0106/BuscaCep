import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { EnderecosService } from '../services/enderecos.service';

@Component({
  selector: 'app-conclusao',
  templateUrl: './conclusao.page.html',
  styleUrls: ['./conclusao.page.scss'],
})
export class ConclusaoPage implements OnInit {
  endereco = {
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
  };
  public enderecos: any[] = [];
  constructor(
    public alerta: AlertController,
    public nav: NavController,
    public servicos: EnderecosService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.carregaDados();
  }

  async voltar() {
    const voltando = await this.alerta.create({
      header: 'ATENÇÃO!',
      message: 'Deseja um novo endereco',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            localStorage.clear();

            this.nav.navigateForward('/');
          },
        },
      ],
    });
    await voltando.present();
  }

  editar() {
    this.nav.navigateForward('/');
  }

  carregaDados() {
    if(this.servicos.listar()){
      this.enderecos = this.servicos.listar()!;
    }
  }
}
