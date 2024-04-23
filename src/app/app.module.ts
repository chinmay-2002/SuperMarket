import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalHorizontalCenterDirective } from './vertical-horizontal-center.directive';

@NgModule({
  declarations: [AppComponent, VerticalHorizontalCenterDirective],
  imports: [BrowserModule, AppRoutingModule],
  exports: [VerticalHorizontalCenterDirective],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
