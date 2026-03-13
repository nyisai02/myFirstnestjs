import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  createPayment(data: any) {
    console.log('PaymentService: Creating payment', data);
    return { status: 'success', ...data };
  }
}
