import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SildeComponent } from './silde/silde.component';

@NgModule({
  declarations: [AppComponent, SildeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SildeComponent
  ],
})
export class AppModule {}
