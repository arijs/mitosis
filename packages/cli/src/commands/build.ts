import { GluegunCommand } from 'gluegun';
import { build } from '../build/build';
import { getMitosisConfig } from '../helpers/get-mitosis-config';

const command: GluegunCommand = {
  name: 'build',
  alias: 'b',
  run: async (toolbox) => {
    const mc = getMitosisConfig();
    const mcList = mc instanceof Array ? mc : mc ? [mc] : [];
    return await Promise.all(mcList.map((config) => build(config)));
  },
};

module.exports = command;
