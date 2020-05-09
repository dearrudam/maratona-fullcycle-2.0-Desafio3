import { Controller, Get, Redirect, Logger, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get(['receive', 'receive.html', 'receive.htm'])
  @Render('receive')
  goToReceive(): void {
    Logger.log('rendering views/receive.hbs', AppController.name);
  }

  @Get(['send', 'send.html', 'send.htm'])
  @Render('send')
  goToSend(): void {
    Logger.log('rendering views/send.hbs', AppController.name);
  }

}
