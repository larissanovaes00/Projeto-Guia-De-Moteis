import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { BannerComponent } from './component/banner/banner.component';
import { NossasSuitesComponent } from './component/nossas-suites/nossas-suites.component';
import { SobreOMotelComponent } from './component/sobre-o-motel/sobre-o-motel.component';
import { FachadaComponent } from './component/fachada/fachada.component';
import { CortesiasComponent } from './component/cortesias/cortesias.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    NossasSuitesComponent,
    SobreOMotelComponent,
    FachadaComponent,
    CortesiasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
