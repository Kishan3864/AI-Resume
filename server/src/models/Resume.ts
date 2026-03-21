import mongoose, { Document, Schema } from 'mongoose';

export interface IResume extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  template: string;
  data: any;
  isPublic: boolean;
  downloads: number;
  lastEdited: Date;
  createdAt: Date;
}

const ResumeSchema = new Schema<IResume>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please add a resume name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters'],
  },
  template: {
    type: String,
    required: [true, 'Please select a template'],
  },
  data: {
    type: Schema.Types.Mixed,
    default: {},
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  lastEdited: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Resume = mongoose.model<IResume>('Resume', ResumeSchema);
