import { Component } from '@angular/core';
import{CepService} from '../services/cep.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public mensagem: AlertController,
    public nav: NavController,
    private cep: CepService
    ) {}

    searchCep(evento){
      const cepDig = evento.detail.value;
    }

}
