import { Injectable } from '@angular/core';
import { Sponsor } from '../modelo/sponsor';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  selectedSponsor: Sponsor = new Sponsor();
  sponsorList: AngularFireList<any>;

  constructor(public firebase: AngularFireDatabase) { }

  getSponsor() {
    return this.sponsorList = this.firebase.list('sponsor_es');
  }

  insertSponsor(sponsor: Sponsor) {
    this.sponsorList.push({
        titulo: sponsor.titulo
    });
  }

  updateSponsor(sponsor: Sponsor) {
    this.sponsorList.update(sponsor.$keyRegistro, {       
      titulo: sponsor.titulo,

      image1: sponsor.image1,
      image2: sponsor.image2,
      image3: sponsor.image3,
      image4: sponsor.image4,
      image5: sponsor.image5,
      image6: sponsor.image6,
      image7: sponsor.image7,
      image8: sponsor.image8,
      image9: sponsor.image9,
      image10: sponsor.image10,
      image11: sponsor.image11,
      image12: sponsor.image12,
      image13: sponsor.image13,
      image14: sponsor.image14
    });
  }
}
