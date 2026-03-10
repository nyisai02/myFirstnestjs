import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [UserModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
