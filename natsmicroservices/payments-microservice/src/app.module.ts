import { Module } from '@nestjs/common';

import { PaymentModule } from './payments/controllers/payment/payment.module';

@Module({
  imports: [PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
