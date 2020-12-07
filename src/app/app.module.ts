import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionAreaComponent } from './question-area/question-area.component';
import { ScorecardComponent } from './question-area/scorecard/scorecard.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionAreaComponent,
    ScorecardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
