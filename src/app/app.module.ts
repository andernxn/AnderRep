import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateComponent } from './create/create.component';

const routes: Route[] = [
  { path: '', component: IndexComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  declarations: [AppComponent, IndexComponent, ShowComponent, NavbarComponent, FooterComponent, CreateComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
