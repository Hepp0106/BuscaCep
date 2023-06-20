import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

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

  constructor(public alerta: AlertController, public nav: NavController) {}

  ngOnInit() {  
  }

  ionViewDidEnter(){
    this.carregaDados();
  }

  async voltar() {
    const voltando = await this.alerta.create({
      header: 'ATENÇÃO!',
      message: 'Deseja retornar? Perderá todos od dados',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        },
        {
          text: 'Retornar',
          handler: () => {
            localStorage.clear();

            this.nav.navigateBack('/');
            
          },
        },
      ],
    });
    await voltando.present();
  }

  carregaDados() {
    this.endereco.endereco = localStorage.getItem('endereco')!;
    this.endereco.numero = localStorage.getItem('numero')!;
    this.endereco.complemento = localStorage.getItem('comp')!;
    this.endereco.bairro = localStorage.getItem('bairro')!;
    this.endereco.cep = localStorage.getItem('cep')!;
    this.endereco.cidade = localStorage.getItem('cidade')!;
    this.endereco.estado = localStorage.getItem('estado')!;
  }
}
