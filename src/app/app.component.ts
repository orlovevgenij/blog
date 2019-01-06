import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {AppConfig} from './configs/app.config';

declare const require;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  isOnline: boolean;
  showHead: boolean;
  showFooter: boolean;
  constructor(private translateService: TranslateService,
              private title: Title,
              private meta: Meta,
              private router: Router) {
    this.isOnline = navigator.onLine;
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'].indexOf('lx_admin') >= 0) {
          this.showHead = false;
          this.showFooter = true;
        } else if (event['url'].indexOf('lx_login') >= 0) {
          this.showHead = false;
          this.showFooter = false;
        } else {
          this.showHead = true;
          this.showFooter = true;
        }
      }
    });
  }

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    // With this we load the default language in the main bundle (cache busting)
    this.translateService.setTranslation('en', require('../assets/i18n/en.json'));

   // this.title.setTitle('lexical analysis text and poems');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.meta.updateTag({
              name: 'description',
              //content: 'lexical analysis text and poems'
            });
            break;
         // case '/' + AppConfig.routes.poems:
         //   this.title.setTitle('Poems list');
         //   this.meta.updateTag({
         //     name: 'description',
         //     content: 'List of Poem'
         //   });
         //   break;
        }
      }
    });
  }
}
