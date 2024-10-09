import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { menu } from 'src/app/common/enums/menu';
import { WebSocketService } from 'src/app/common/services/websocker-services/websocket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu: any[] = menu;
  language: string = 'VN';
  constructor(
    private router: Router,
    private translate: TranslateService,
    public webSocketService: WebSocketService
  ) {
    this.webSocketService.startConnection();
    this.webSocketService.addReceiveMessageListener();
    this.webSocketService.ConfirmClientName();
    this.translate.setDefaultLang('vi');
  }

  navigateTo(route: string) {
    console.log('url: ', route);
  }

  onTabChange(route: any) {
    const item = menu.find((x) => x.id == route.index);
    this.router.navigate([item?.routing]);
  }

  handleChangeMenu(event: any) {
    this.translate.use(event);
    this.language = event == 'vi' ? 'VN' : 'EN';
  }

  handleSignalR(){
    this.webSocketService.sendMessage("Cshop", "Confirm SignalR");
  }
}
