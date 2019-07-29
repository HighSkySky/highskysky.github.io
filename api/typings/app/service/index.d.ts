// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportUpdate from '../../../app/service/update';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    update: ExportUpdate;
  }
}
