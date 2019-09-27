import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './navigation-bar/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';
import { SideBarItemsComponent } from './navigation-bar/side-bar-items/side-bar-items.component';
import { ComponentsComponent } from './components/components/components.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarItemsComponent,
    ComponentsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
