import { Injectable } from '@angular/core';
import { Trade } from '../modelo/trade';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  selectedTrade: Trade = new Trade();
  tradeList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getTrade() {
    return this.tradeList = this.firebase.list('trade');
  }

  insertTrade(trade: Trade) {
    this.tradeList.push({

        titulo1: trade.titulo1,
        titulo2: trade.titulo2,
        titulo3: trade.titulo3,
        titulo4: trade.titulo4,
        titulo5: trade.titulo5,
        titulo6: trade.titulo6,
        titulo7: trade.titulo7,
        titulo8: trade.titulo8,
        titulo9: trade.titulo9

    });
  }
  
  updateTrade(trade: Trade) {
    this.tradeList.update(trade.$keyRegistro, {

        titulo1: trade.titulo1,
        desc1: trade.desc1,

        titulo2: trade.titulo2,
        desc2: trade.desc2,

        titulo3: trade.titulo3,
        desc3: trade.desc3,

        titulo4: trade.titulo4,
        desc4: trade.desc4,

        titulo5: trade.titulo5,
        desc5: trade.desc5,

        titulo6: trade.titulo6,
        desc6: trade.desc6,

        titulo7: trade.titulo7,
        desc7: trade.desc7,

        titulo8: trade.titulo8,
        desc8: trade.desc8,

        titulo9: trade.titulo9,
        desc9: trade.desc9
        
    });
  }

}
