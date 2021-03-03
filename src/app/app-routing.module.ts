import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SliderComponent } from './layout/slider/slider.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FooterTopComponent } from './layout/footer-top/footer-top.component';
import { ServicesListComponent } from './layout/services-list/services-list.component';

import { OurServicesService } from './app-service/our-services.service';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { CareersComponent } from './careers/careers.component';
import { OpenPositionsComponent } from './open-positions/open-positions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RequestAQuoteComponent } from './request-a-quote/request-a-quote.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'methodology', component: MethodologyComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:tid', component: ServicesDetailComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'open-positions', component: OpenPositionsComponent },
  { path: 'request-a-quote', component: RequestAQuoteComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OurServicesService]
})

export class AppRoutingModule { }

export const RoutingComponents = [
  HeaderComponent,
  NavigationComponent,
  SliderComponent,
  FooterComponent,
  FooterTopComponent,
  ServicesListComponent,

  HomeComponent,
  AboutUsComponent,
  MethodologyComponent,
  OurTeamComponent,
  ServicesComponent,
  ServicesDetailComponent,
  CareersComponent,
  OpenPositionsComponent,
  ContactUsComponent,
  RequestAQuoteComponent,
  SitemapComponent,
  PagenotfoundComponent
]