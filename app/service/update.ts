import { Service, FileStream } from 'egg';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as uuid from 'uuid';

/** 获取文件名中后缀 */
function getPostfix(filename: string) {
  const regex = /(\.\w+)$/;
  const match = filename.match(regex);
  return match ? match[0] : '';
}

export default class UploadService extends Service {
  /**
   * 根据日期创建 dir, 并返回 dir 目录
   * @returns dir
   */
  async mkdir(): Promise<string> {
    const { config } = this;
    const now = new Date();
    const dir = path.join(
      now.getFullYear().toString(),
      (now.getMonth() + 1).toString(),
      now.getDate().toString(),
    );

    // 确认 dir 是否存在，不存在则创建
    return new Promise((resolve, reject) => {
      const dirPath = path.join(config.publicDir, dir);
      mkdirp(dirPath, err => {
        if (err) reject(err);
        resolve(dir);
      });
    });
  }

  /**
   * 以 MD5 值为文件名保存 file
   * @param dir 保存文件的相对目录
   * @param fileStream 文读取流
   * @returns 本地保存的文件名
   */
  async saveFile(dir: string, fileStream: FileStream): Promise<string> {
    const { config } = this;
    // 临时文件路径
    const tbaPath = path.join(config.publicDir, dir, uuid.v1());
    const fileWriteStream = fs.createWriteStream(tbaPath);
    const md5Hash = crypto.createHash('md5');

    return new Promise((resolve, reject) => {
      fileStream.on('data', chunk => {
        md5Hash.update(chunk);
        fileWriteStream.write(chunk);
      });

      fileStream.on('end', () => {
        const fileMd5 = md5Hash.digest('hex');
        const localName = fileMd5 + getPostfix(fileStream.filename);
        const localPath = path.join(config.publicDir, dir, localName);

        // 将文件名修改成对应的 md5 名
        fs.rename(tbaPath, localPath, error => {
          if (error) reject(error);
          resolve(localName);
        });
      });

      fileStream.on('error', error => {
        reject(error);
      });
    });
  }
}
