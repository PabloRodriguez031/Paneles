import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../../../modelo/sponsor';
import { SponsorService } from '../../../servicios/sponsor.service';
@Component({
  selector: 'app-sponsorlist',
  templateUrl: './sponsorlist.component.html',
  styleUrls: ['./sponsorlist.component.css']
})
export class SponsorlistComponent implements OnInit {

  sponsorList: Sponsor[];

  mostrarForm = false;

  constructor(public sponsorService: SponsorService) { }

  ngOnInit() {
    this.MostrarSponsor();
  }

  MostrarSponsor() {
    this.sponsorService.getSponsor().snapshotChanges().subscribe(item => {
      this.sponsorList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.sponsorList.push(x as Sponsor);
      });
    });
  }

  
  onEdit(sponsor: Sponsor) {
    this.mostrarForm = true;
    this.sponsorService.selectedSponsor = sponsor;
  }


}
