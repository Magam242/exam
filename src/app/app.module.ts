import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TableComponent } from './layout/table/table.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactsComponent } from './layout/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    FooterComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    RouterModule.forRoot([
      { path: '', component: TableComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
