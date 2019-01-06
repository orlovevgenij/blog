import {Component, Inject, OnInit} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  appConfig: any;
  progressBarMode: string;

  constructor(@Inject(APP_CONFIG) appConfig: any) {
    this.appConfig = appConfig;
  }

  ngOnInit() {
  }
}
