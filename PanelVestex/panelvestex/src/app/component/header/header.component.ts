import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

import { Home } from '../../modelo/home';
import { HomeService } from '../../servicios/home.service';

import { About } from '../../modelo/about';
import { AboutService } from '../../servicios/about.service';

import { Service } from '../../modelo/service';
import { ServiceService } from '../../servicios/service.service';

import { Academy } from '../../modelo/academy';
import { AcademyService } from '../../servicios/academy.service';

import { Library } from '../../modelo/library';
import { LibraryService } from '../../servicios/library.service';

import { Directory } from '../../modelo/directory';
import { DirectoryService } from '../../servicios/directory.service';

import { News } from '../../modelo/news';
import { NewsService } from '../../servicios/news.service';

import { Contact } from '../../modelo/contact';
import { ContactService } from '../../servicios/contact.service';

import { Products } from '../../modelo/products';
import { ProductsService } from '../../servicios/products.service';

import { Statistics } from '../../modelo/statistics';
import { StatisticsService } from '../../servicios/statistics.service';

import { Trade } from '../../modelo/trade';
import { TradeService } from '../../servicios/trade.service';

import { Funtejer } from '../../modelo/funtejer';
import { FuntejerService } from '../../servicios/funtejer.service';

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
    public aboutService: AboutService,
    public serviceService: ServiceService,
    public academyService: AcademyService,
    public libraryService: LibraryService,
    public directoryService: DirectoryService,
    public newsService: NewsService,
    public contactService: ContactService,
    public productsService: ProductsService,
    public statisticsService: StatisticsService,
    public tradeService: TradeService,
    public funtejerService: FuntejerService,
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
    aboutList: About[];
    serviceList: Service[];
    academyList: Academy[];
    libraryList: Library[];
    directoryList: Directory[];
    newsList: News[];
    contactList: Contact[];
    productsList: Products[];
    statisticsList: Statistics[];
    tradeList: Trade[];
    funtejerList: Funtejer[];
    sponsorList: Sponsor[];
    navbarList: Navbar[];
    footerList: Footer[];

    ngOnInit(){
      this.MostrarHome();
      this.MostrarAbout();
      this.MostrarService();
      this.MostrarAcademy();
      this.MostrarLibrary();
      this.MostrarDirectory();
      this.MostrarNews();
      this.MostrarContact();
      this.MostrarProducts();
      this.MostrarStatistics();
      this.MostrarTrade();
      this.MostrarFuntejer();
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

    MostrarAbout() {
      this.aboutService.getAbout().snapshotChanges().subscribe(item => {
        this.aboutList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.aboutList.push(x as About);
        });
      });
    }
  
    onEditAbout(about: About) {      
      this.aboutService.selectedAbout = about;
    }

    MostrarService() {
      this.serviceService.getService().snapshotChanges().subscribe(item => {
        this.serviceList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.serviceList.push(x as Service);
        });
      });
    }
  
    onEditService(service: Service) {
      this.serviceService.selectedService = service;
    }
  
    MostrarAcademy() {
      this.academyService.getAcademy().snapshotChanges().subscribe(item => {
        this.academyList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.academyList.push(x as Academy);
        });
      });
    }
  
    onEditAcademy(academy: Academy) {
      this.academyService.selectedAcademy = academy;
    }

    MostrarLibrary() {
      this.libraryService.getLibrary().snapshotChanges().subscribe(item => {
        this.libraryList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.libraryList.push(x as Library);
        });
      });
    }
  
    onEditLibrary(library: Library) {
      this.libraryService.selectedLibrary = library;
    }

    MostrarDirectory() {
      this.directoryService.getDirectory().snapshotChanges().subscribe(item => {
        this.directoryList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.directoryList.push(x as Directory);
        });
      });
    }
  
  
    onEditDirectory(directory: Directory) {      
      this.directoryService.selectedDirectory = directory;
    }

    MostrarNews() {
      this.newsService.getNews().snapshotChanges().subscribe(item => {
        this.newsList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.newsList.push(x as News);
        });
      });
    }
  
  
    onEditNews(news: News) {
      this.newsService.selectedNews = news;
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
  
    MostrarProducts() {
      this.productsService.getProducts().snapshotChanges().subscribe(item => {
        this.productsList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.productsList.push(x as Products);
        });
      });
    }
  
  
    onEditProducts(products: Products) {    
      this.productsService.selectedProducts = products;
    }
  
    MostrarStatistics() {
      this.statisticsService.getStatistics().snapshotChanges().subscribe(item => {
        this.statisticsList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.statisticsList.push(x as Statistics);
        });
      });
    }
  
    onEditStatistics(statistics: Statistics) {
      this.statisticsService.selectedStatistics = statistics;
    }

    MostrarTrade() {
      this.tradeService.getTrade().snapshotChanges().subscribe(item => {
        this.tradeList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.tradeList.push(x as Trade);
        });
      });
    }
    
    onEditTrade(trade: Trade) {
      this.tradeService.selectedTrade = trade;
    }

    MostrarFuntejer() {
      this.funtejerService.getFuntejer().snapshotChanges().subscribe(item => {
        this.funtejerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$keyRegistro"] = element.key;
          this.funtejerList.push(x as Funtejer);
        });
      });
    }
  
    onEditFuntejer(funtejer: Funtejer) {      
      this.funtejerService.selectedFuntejer = funtejer;
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
