import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    // 在本地环境下为了测试暂停使用csrf防护
    security: {
      csrf: false,
    },
  };
  return config;
};
