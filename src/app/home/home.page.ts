import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: Array<any> = [
    { icon: 'barcode-outline', text: 'Pagar' },
    { icon: 'wallet-outline', text: 'Pegar emprestado' },
    { icon: 'cash-outline', text: 'Depositar' },
    { icon: 'globe-outline', text: 'Transferir' },
    { icon: 'phone-portrait-outline', text: 'Recarga telefone' },
    { icon: 'heart-outline', text: 'Pagar' },
    { icon: 'send-outline', text: 'Pagar' },
  ];

  public promos: any = [
    { text: 'Você tem até 10000 disponível para empréstimo.' },
    { text: 'Você tem até 10000 disponível para empréstimo.' },
    { text: 'Você tem até 10000 disponível para empréstimo.' },
    { text: 'Você tem até 10000 disponível para empréstimo.' },
  ];

  public slidesOptions: any = { slidesPerView: 5.75, freeMode: true };
  public slidesPromo: any = { slidesPerView: 1.5, freeMode: true };

  constructor() {}
}
