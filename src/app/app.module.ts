import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NavbarComponentComponent,
    GalleryComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
