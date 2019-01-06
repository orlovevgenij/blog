import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    TranslateModule.forRoot(),
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule {
}
