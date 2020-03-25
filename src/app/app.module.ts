import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {QuickNotesComponent} from './quick-notes/quick-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickNotesComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
