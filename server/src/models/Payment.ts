import mongoose, { Document, Schema } from 'mongoose';

export interface IPayment extends Document {
  user: mongoose.Types.ObjectId;
  provider: 'stripe' | 'razorpay';
  transactionId: string;
  amount: number;
  currency: string;
  plan: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: Date;
}

const PaymentSchema = new Schema<IPayment>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  provider: {
    type: String,
    enum: ['stripe', 'razorpay'],
    required: [true, 'Please specify a payment provider'],
  },
  transactionId: {
    type: String,
    required: [true, 'Please add a transaction ID'],
    unique: true,
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  currency: {
    type: String,
    required: [true, 'Please add a currency'],
    default: 'USD',
  },
  plan: {
    type: String,
    required: [true, 'Please specify a plan'],
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = mongoose.model<IPayment>('Payment', PaymentSchema);
