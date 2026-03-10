import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('chat')
  async chat(@Body('prompt') prompt: string) {
    return { response: await this.aiService.getResponse(prompt) };
  }
}
