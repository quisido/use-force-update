import RollupConfig from '@monorepo-template/rollup-config/new';

export default new RollupConfig()
  .setTSConfigPath('./tsconfig.rollup.json')
  .toJSON();
