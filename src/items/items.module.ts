import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { OrderSchema } from './order.schema'; // Import Order schema
import { PhleboOrderFeedbackSchema } from './phlebo-order-feedback.schema'; // Import Feedback schema

@Module({
  imports: [
    // Register the schemas here so they can be used in the service
    MongooseModule.forFeature([
      { name: 'Order', schema: OrderSchema },
      { name: 'PhleboOrderFeedback', schema: PhleboOrderFeedbackSchema },
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService], // ItemsService is now aware of the Order model
})
export class ItemsModule {}
