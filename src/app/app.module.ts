import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PsGuideModule } from 'porto-seguro-guide';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './components/organisms/basic-form/basic-form.component';
import { GuideFormComponent } from './components/organisms/guide-form/guide-form.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { GuidePageComponent } from './components/pages/guide-page/guide-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    GuideFormComponent,
    HomePageComponent,
    GuidePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PsGuideModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
