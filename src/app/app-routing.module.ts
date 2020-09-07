import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AllformsComponent } from './allforms/allforms.component';
import { AllgroupsComponent } from './allgroups/allgroups.component';
import { EditdokladComponent } from './editdoklad/editdoklad.component';
import { FormsingrComponent } from './formsingr/formsingr.component';
import { NewdokladComponent } from './newdoklad/newdoklad.component';
import { ProsmotrComponent } from './prosmotr/prosmotr.component';
import { NotauthComponent } from './notauth/notauth.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'allforms', component: AllformsComponent },
  { path: 'allgroups', component: AllgroupsComponent },
  { path: 'formsingr/:id', component: FormsingrComponent },
  { path: 'newdoklad', component: NewdokladComponent },
  { path: 'newdoklad/:id', component: NewdokladComponent },
  { path: 'editdoklad/:id', component: EditdokladComponent },
  { path: 'prosmotr/:id', component:ProsmotrComponent },
  { path: 'formsingr', redirectTo: '/home'  },
  { path: 'editdoklad', redirectTo: '/home' },
  { path: 'prosmotr', redirectTo: '/home' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'notauth', component: NotauthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
