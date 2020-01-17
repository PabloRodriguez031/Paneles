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
import { AboutComponent } from './component/about/about/about.component';
import { AboutlistComponent } from './component/about/aboutlist/aboutlist.component';

import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { NavbarlistComponent } from './component/navbar/navbarlist/navbarlist.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { FooterlistComponent } from './component/footer/footerlist/footerlist.component';
import { ShowlistComponent } from './component/show/showlist/showlist.component';
import { ShowComponent } from './component/show/show/show.component';
import { ResourcesComponent } from './component/resources/resources/resources.component';
import { ResourceslistComponent } from './component/resources/resourceslist/resourceslist.component';
import { RegistrationComponent } from './component/registration/registration/registration.component';
import { RegistrationlistComponent } from './component/registration/registrationlist/registrationlist.component';
import { ContactComponent } from './component/contact/contact/contact.component';
import { ContactlistComponent } from './component/contact/contactlist/contactlist.component';
import { SponsorComponent } from './component/sponsor/sponsor/sponsor.component';
import { SponsorlistComponent } from './component/sponsor/sponsorlist/sponsorlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomelistComponent,
    AboutComponent,
    AboutlistComponent,    
    NavbarComponent,
    NavbarlistComponent,
    FooterComponent,
    FooterlistComponent,
    ShowComponent,
    ShowlistComponent,
    ResourcesComponent,
    ResourceslistComponent,
    RegistrationComponent,
    RegistrationlistComponent,
    ContactComponent,
    ContactlistComponent,
    SponsorComponent,
    SponsorlistComponent
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
