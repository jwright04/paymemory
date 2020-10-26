import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from './components/card/card.module';
import { CardService } from './services/card.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CardModule],
  providers: [CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
