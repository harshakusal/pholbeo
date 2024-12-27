import { Controller, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('feedback')
  async getOrderAndSubmitFeedback(@Body() body: any) {
    const { first_name, last_name, dob } = body;

    if (!first_name || !last_name || !dob) {
      return {
        message: 'Please provide first_name, last_name, and dob to find the order.',
      };
    }

    const order_id = "123k4";  // Hardcoded order_id for now

    if (!order_id) {
      return {
        message: 'Order not found for the given details.',
      };
    }

    try {
      const feedbackData = {
        order_id,
        first_name,
        last_name,
        dob: new Date(dob),  // Ensure dob is a Date
        responsiveness: body.responsiveness,
        accessibility: body.accessibility,
        waiting_time: body.waiting_time,
        venipuncture_collection: body.venipuncture_collection,
        patient_care: body.patient_care,
        scheduling_and_coordination: body.scheduling_and_coordination,
        suggestions: body.suggestions,
      };

      console.log("Feedback data being saved:", feedbackData);  // Log feedback data

      const feedback = await this.itemsService.storeFeedback(order_id, feedbackData);

      return {
        message: 'Feedback successfully stored',
        feedback,
      };
    } catch (error) {
      console.error('Error saving feedback:', error);
      return {
        message: 'Error saving feedback',
        error: error.message,
      };
    }
  }
}
