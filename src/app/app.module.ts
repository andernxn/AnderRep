import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [{ path: '', component: IndexComponent }];

@NgModule({
  declarations: [AppComponent, IndexComponent],
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
