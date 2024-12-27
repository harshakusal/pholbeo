import { Schema, Document } from 'mongoose';

export const OrderSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  dob: { type: Date, required: true },
  order_id: { type: String, required: true, unique: true },
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt
});

export interface Order extends Document {
  first_name: string;
  last_name: string;
  dob: Date;
  order_id: string;
}
