import { Schema, Document } from 'mongoose';

export const PhleboOrderFeedbackSchema = new Schema({
  order_id: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },  // Ensure 'first_name' is required
  last_name: { type: String, required: true },   // Ensure 'last_name' is required
  responsiveness: { type: String, enum: ['good', 'excellent', 'average', 'poor'], required: true },
  accessibility: { type: String, enum: ['good', 'excellent', 'average', 'poor'], required: true },
  waiting_time: { type: String, enum: ['good', 'excellent', 'average', 'poor'], required: true },
  venipuncture_collection: { type: String, enum: ['good', 'excellent', 'average', 'poor'], required: true },
  patient_care: { type: String, enum: ['good', 'excellent', 'average', 'poor'], required: true },
  scheduling_and_coordination: { type: String, enum: ['good', 'excellent', 'average', 'poor'], required: true },
  suggestions: { type: String, enum: ['good', 'excellent', 'average', 'poor'], required: true },
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt
});

export interface PhleboOrderFeedback extends Document {
  order_id: string;
  first_name: string;
  last_name: string;
  responsiveness: string;
  accessibility: string;
  waiting_time: string;
  venipuncture_collection: string;
  patient_care: string;
  scheduling_and_coordination: string;
  suggestions: string;
}
