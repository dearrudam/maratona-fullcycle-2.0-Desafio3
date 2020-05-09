import { Controller, Get, Redirect, Logger } from '@nestjs/common';

@Controller()
export class AppController {
  
  @Get()
  @Redirect('index.html', 302)
  goToIndex(): void {
    Logger.log('redirect to /index.html', AppController.name);
  }
  @Get('receiver')
  @Redirect('receiver.html', 302)
  goToReceiver(): void {
    Logger.log('redirect to /receiver.html', AppController.name);
  }

  @Get('send')
  @Redirect('send.html', 302)
  goToSend(): void {
    Logger.log('redirect to /send.html', AppController.name);
  }

}
