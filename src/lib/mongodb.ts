import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:iuvBjQTZrqxuOakiQaaOvLqnBPeqKZgN@shinkansen.proxy.rlwy.net:31460';

if (!MONGODB_URI) {
  throw new Error('请提供有效的MongoDB连接URI');
}

/**
 * 全局变量用于缓存MongoDB连接
 */
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// 确保在开发环境中不会重复连接
global.mongoose = global.mongoose || {
  conn: null,
  promise: null,
};

/**
 * 连接到MongoDB数据库
 * @returns mongoose连接实例
 */
export async function connectToDatabase() {
  if (global.mongoose.conn) {
    console.log('使用已有的数据库连接');
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('正在连接到MongoDB...');
    global.mongoose.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('MongoDB连接成功');
        return mongoose.connection;
      })
      .catch((err) => {
        console.error('MongoDB连接失败:', err);
        throw err;
      });
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
  } catch (e) {
    global.mongoose.promise = null;
    throw e;
  }

  return global.mongoose.conn;
} 