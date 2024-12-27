import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhleboOrderFeedback } from './phlebo-order-feedback.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('PhleboOrderFeedback') private readonly feedbackModel: Model<PhleboOrderFeedback>,
  ) {}

  async storeFeedback(order_id: string, body: any) {
    console.log('Received feedback data:', body);  // Log the received data

    const feedbackData = {
      order_id,
      first_name: body.first_name,
      last_name: body.last_name,
      responsiveness: body.responsiveness,
      accessibility: body.accessibility,
      waiting_time: body.waiting_time,
      venipuncture_collection: body.venipuncture_collection,
      patient_care: body.patient_care,
      scheduling_and_coordination: body.scheduling_and_coordination,
      suggestions: body.suggestions,
    };

    console.log('Saving feedback data:', feedbackData);  // Log feedback data before saving

    const newFeedback = new this.feedbackModel(feedbackData);
    try {
      const savedFeedback = await newFeedback.save();
      console.log('Feedback successfully saved:', savedFeedback);
      return savedFeedback;  // Return saved feedback
    } catch (error) {
      console.error('Error saving feedback:', error);
      throw error;  // Rethrow the error to be caught in the controller
    }
  }
}