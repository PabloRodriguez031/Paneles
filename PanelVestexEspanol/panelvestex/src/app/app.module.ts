import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//WYSIWYG
import { EditorModule } from '@tinymce/tinymce-angular';


//firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './servicios/auth.service';

import { environment } from '../environments/environment.prod';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { HomelistComponent } from './component/homelist/homelist.component';
import { HomevistaComponent } from './component/homevista/homevista.component';
import { AboutComponent } from './component/about/about/about.component';
import { AboutlistComponent } from './component/about/aboutlist/aboutlist.component';
import { ServiceComponent } from './component/service/service/service.component';
import { ServicelistComponent } from './component/service/servicelist/servicelist.component';
import { AcademyComponent } from './component/academy/academy/academy.component';
import { AcademylistComponent } from './component/academy/academylist/academylist.component';
import { NewsComponent } from './component/news/news/news.component';
import { NewslistComponent } from './component/news/newslist/newslist.component';
import { ContactComponent } from './component/contact/contact/contact.component';
import { ContactlistComponent } from './component/contact/contactlist/contactlist.component';
import { ProductsComponent } from './component/products/products/products.component';
import { ProductslistComponent } from './component/products/productslist/productslist.component';
import { StatisticsComponent } from './component/statistics/statistics/statistics.component';
import { StatisticslistComponent } from './component/statistics/statisticslist/statisticslist.component';
import { FuntejerComponent } from './component/funtejer/funtejer/funtejer.component';
import { FuntejerlistComponent } from './component/funtejer/funtejerlist/funtejerlist.component';
import { DirectoryComponent } from './component/directory/directory.component';
import { DirectorylistComponent } from './component/directory/directorylist/directorylist.component';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { NavbarlistComponent } from './component/navbar/navbarlist/navbarlist.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { FooterlistComponent } from './component/footer/footerlist/footerlist.component';
import { SponsorComponent } from './component/sponsor/sponsor.component';
import { TradeComponent } from './component/trade/trade.component';
import { LibraryComponent } from './component/library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomelistComponent,
    HomevistaComponent,
    AboutComponent,
    AboutlistComponent,
    ServiceComponent,
    ServicelistComponent,
    AcademyComponent,
    AcademylistComponent,
    NewsComponent,
    NewslistComponent,
    ContactComponent,
    ContactlistComponent,
    ProductsComponent,
    ProductslistComponent,
    StatisticsComponent,
    StatisticslistComponent,
    FuntejerComponent,
    FuntejerlistComponent,
    DirectoryComponent,
    DirectorylistComponent,
    NavbarComponent,
    NavbarlistComponent,
    FooterComponent,
    FooterlistComponent,
    SponsorComponent,
    TradeComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),FormsModule, ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    EditorModule 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
