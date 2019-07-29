import { Controller } from 'egg';
import sendToWormhole from 'stream-wormhole';
import * as path from 'path';

export default class UploadController extends Controller {
  async uploadFiles() {
    const { ctx, service, config } = this;
    const parts = ctx.multipart();
    const dir = await service.update.mkdir();

    const result: Array<{
      name: string;
      url: string;
    }> = [];

    let isHandleAll = false;
    while (!isHandleAll) {
      const part = await parts();
      if (!part) {
        isHandleAll = true;
        break;
      }
      if (part.filename) {
        try {
          const fileName = part.fieldname || part.filename;
          const localName = await service.update.saveFile(dir, part);
          const urlPath = path.join(config.publicDir, dir, localName);
          result.push({
            name: fileName,
            url: urlPath,
          });
        } catch (error) {
          // 必须消费上传文件
          await sendToWormhole(part);
        }
      }
    }

    ctx.helper.success({ data: result });
  }
}
