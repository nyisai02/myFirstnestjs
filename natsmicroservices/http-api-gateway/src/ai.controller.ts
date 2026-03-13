import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('ai')
export class AiController {
  constructor(@Inject('NATS_SERVICE') private readonly client: ClientProxy) {}

  @Post('process')
  async processData(@Body() data: any) {
    return this.client.send({ cmd: 'ai_process' }, data);
  }
}
