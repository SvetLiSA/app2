import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

import { DgroupsService } from './services/dgroups.service';
import { DokladsService } from './services/doklads.service';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AllgroupsComponent } from './allgroups/allgroups.component';
import { AllformsComponent } from './allforms/allforms.component';
import { EditdokladComponent } from './editdoklad/editdoklad.component';
import { FormsingrComponent } from './formsingr/formsingr.component';
import { NewdokladComponent } from './newdoklad/newdoklad.component';
import { NotauthComponent } from './notauth/notauth.component';
import { ProsmotrComponent } from './prosmotr/prosmotr.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AppComponent,
    AllgroupsComponent,
    AllformsComponent,
    EditdokladComponent,
    FormsingrComponent,
    NewdokladComponent,
    NotauthComponent,
    ProsmotrComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule, 
    CardModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputNumberModule,
    PanelModule,
    PickListModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule
  ],
  providers: [ DgroupsService, DokladsService, DatePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
