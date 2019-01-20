import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { SocialsComponent } from './components/header/socials/socials.component';

@NgModule({
  imports: [
    TranslateModule.forRoot(),
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SocialsComponent
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule {
}
