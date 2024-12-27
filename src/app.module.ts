import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { OrderSchema } from './items/order.schema';
import { PhleboOrderFeedbackSchema } from './items/phlebo-order-feedback.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://harshakusalmayuri:Kp68V7gCMfKeVlT3@cluster0.b8nas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([
      { name: 'Order', schema: OrderSchema },
      { name: 'PhleboOrderFeedback', schema: PhleboOrderFeedbackSchema },
    ]),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
