import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AiService } from './ai.service';

@Controller()
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @MessagePattern({ cmd: 'ai_process' })
  handleAiProcess(data: any) {
    return this.aiService.processData(data);
  }
}
