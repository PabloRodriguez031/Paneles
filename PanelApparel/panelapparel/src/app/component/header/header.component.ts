import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

import { Home } from '../../modelo/home';
import { HomeService } from '../../servicios/home.service';

import { Show } from '../../modelo/show';
import { ShowService } from '../../servicios/show.service';

import { Resources } from '../../modelo/resources';
import { ResourcesService } from '../../servicios/resources.service';

import { Registration } from '../../modelo/registration';
import { RegistrationService } from '../../servicios/registration.service';


import { Contact } from '../../modelo/contact';
import { ContactService } from '../../servicios/contact.service';

import { Sponsor } from '../../modelo/sponsor';
import { SponsorService } from '../../servicios/sponsor.service';

import { Navbar } from '../../modelo/navbar';
import { NavbarService } from '../../servicios/navbar.service';

import { Footer } from '../../modelo/footer';
import { FooterService } from '../../servicios/footer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthService, 
    public homeService: HomeService, 
    public showService: ShowService, 
    public resourcesService: ResourcesService,
    public registrationService: RegistrationService,
    public contactService: ContactService,
    public sponsorService: SponsorService,
    public navbarService: NavbarService,
    public footerService: FooterService
    ) {}

  @Output() featureSelected = new EventEmitter<string>();
    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }

    logout() {
      this.authService.logout();
    }

    homeList: Home[];
    showList: Show[];
    resourcesList: Resources[];
    registrationList: Registration[];
    contactList: Contact[];
    sponsorList: Sponsor[];
    navbarList: Navbar[];
    footerList: Footer[];
  
    ngOnInit() {
      this.MostrarHome();
      this.MostrarShow();
      this.MostrarResources();
      this.MostrarRegistration();
      this.MostrarContact();
      this.MostrarSponsor();
      this.MostrarNavbar();
      this.MostrarFooter();
    }

    MostrarHome() {
      this.homeService.getHome().snapshotChanges().subscribe(item => {
        this.homeList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.homeList.push(x as Home);
        });
      });
    }
  
    onEditHome(home: Home) {
      this.homeService.selectedHome = home;
    }

    MostrarShow() {
      this.showService.getShow().snapshotChanges().subscribe(item => {
        this.showList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.showList.push(x as Show);
        });
      });
    }
  
    onEditShow(show: Show) {
      this.showService.selectedShow = show;
    }

    MostrarResources() {
      this.resourcesService.getResources().snapshotChanges().subscribe(item => {
        this.resourcesList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.resourcesList.push(x as Resources);
        });
      });
    }
  
    onEditResources(resources: Resources) {
      this.resourcesService.selectedResources = resources;
    }

    MostrarRegistration() {
      this.registrationService.getRegistration().snapshotChanges().subscribe(item => {
        this.registrationList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.registrationList.push(x as Registration);
        });
      });
    }
  
    onEditRegistration(registration: Registration) {
      this.registrationService.selectedRegistration = registration;
    }
  
    MostrarContact() {
      this.contactService.getContact().snapshotChanges().subscribe(item => {
        this.contactList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.contactList.push(x as Contact);
        });
      });
    }
  
    onEditContact(contact: Contact) {
      this.contactService.selectedContact = contact;
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
  
    onEditSponsor(sponsor: Sponsor) {
      this.sponsorService.selectedSponsor = sponsor;
    }

    MostrarNavbar() {
      this.navbarService.getNavbar().snapshotChanges().subscribe(item => {
        this.navbarList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.navbarList.push(x as Navbar);
        });
      });
    }
  
    onEditNavbar(navbar: Navbar) {
      this.navbarService.selectedNavbar = navbar;
    }    

    MostrarFooter() {
      this.footerService.getFooter().snapshotChanges().subscribe(item => {
        this.footerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.footerList.push(x as Footer);
        });
      });
    }
  
    onEditFooter(footer: Footer) {
      this.footerService.selectedFooter = footer;
    }        

}
