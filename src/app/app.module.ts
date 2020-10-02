import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmationService } from 'primeng/api';
//import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
//import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';

import { DgroupsService } from './services/dgroups.service';
import { DokladsService } from './services/doklads.service';
import { JwtInterceptor } from './jwt.interceptor';

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
    CalendarModule,
    CardModule,
    //ConfirmDialogModule, 
    ContextMenuModule,
    DropdownModule,
    DialogModule,
    FieldsetModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    MultiSelectModule,
    PanelModule,
    PickListModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ScrollPanelModule,
    TableModule,
    ToolbarModule,
    TooltipModule,
    TreeModule
  ],
  providers: [ DgroupsService, DokladsService, DatePipe, ConfirmationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
