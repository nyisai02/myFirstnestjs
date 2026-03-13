import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentService } from '../../services/payment/payment.service';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern({ cmd: 'create_payment' })
  createPayment(@Payload() data: any) {
    return this.paymentService.createPayment(data);
  }
}
