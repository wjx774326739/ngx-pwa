import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-pwa';

  constructor(updates: SwUpdate) {
    console.log(updates);
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
    updates.available.subscribe(event => {
      console.log(event);
      updates.activateUpdate().then(() => {
        alert('刷新页面以更新');
        // document.location.reload()
      });
    });
  }

}
