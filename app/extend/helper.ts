import { IHelper } from 'egg';

export default {
  /** 设置请求成功的返回内容 */
  success(
    this: IHelper,
    { data = true, code = 200 }: { data?: any; code?: number } = {},
  ) {
    const { ctx } = this;
    ctx.status = code;
    ctx.body = data;
  },

  /** 设置请求失败的返回内容 */
  error(
    this: IHelper,
    { msg = '请求失败', code = 404 }: { msg?: string; code?: number } = {},
  ) {
    const { ctx } = this;
    ctx.status = code;
    ctx.body = {
      msg,
    };
  },
};
