import mongoose, { Schema, Document } from 'mongoose';

// 项目文档接口
export interface IProject extends Document {
  title: string;
  type: 'website' | 'programming' | 'webapp' | 'custom';
  createdAt: Date;
  updatedAt: Date;
}

// 项目模式定义
const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, '项目标题是必填的'],
      trim: true,
      maxlength: [100, '项目标题不能超过100个字符'],
    },
    type: {
      type: String,
      required: [true, '项目类型是必填的'],
      enum: {
        values: ['website', 'programming', 'webapp', 'custom'],
        message: '{VALUE} 不是有效的项目类型',
      },
    },
  },
  { timestamps: true }
);

// 避免在开发模式下重复编译模型
export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema); 