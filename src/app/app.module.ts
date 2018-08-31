import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { ImageHighlightComponent } from './image-highlight/image-highlight.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FullWidthImageComponent } from './full-width-image/full-width-image.component';
import { QuoteComponent } from './quote/quote.component';
import { PageComponent } from './page/page.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TextSectionComponent,
    ImageHighlightComponent,
    ImageGalleryComponent,
    FullWidthImageComponent,
    QuoteComponent,
    PageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
