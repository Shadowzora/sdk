import { Chain } from '../../constants';
import { ChainsConfigs } from '../config.interfaces';
// eslint-disable-next-line import/no-cycle
import { MoonbeamChains } from './moonbeam.interfaces';

export const MOONBEAM_CHAINS = <const>[
  Chain.Acala,
  Chain.Interley,
  Chain.Parallel,
  Chain.Phala,
  Chain.Polkadot,
];

export const MOONBEAM_CHAINS_CONFIGS: ChainsConfigs<MoonbeamChains> = {
  [Chain.Acala]: {
    chain: Chain.Acala,
    name: 'Acala',
    ws: 'wss://acala-polkadot.api.onfinality.io/public-ws',
    weight: 1_000_000_000,
    parachainId: 2000,
    moonAssetId: 0,
  },
  [Chain.Interley]: {
    chain: Chain.Interley,
    name: 'Interley',
    ws: 'wss://interlay.api.onfinality.io/public-ws',
    weight: 1_000_000_000,
    parachainId: 2032,
  },
  [Chain.Parallel]: {
    chain: Chain.Parallel,
    name: 'Parallel',
    ws: 'wss://rpc.parallel.fi',
    weight: 1_000_000_000,
    parachainId: 2012,
    moonAssetId: 114,
  },
  [Chain.Phala]: {
    chain: Chain.Phala,
    name: 'Phala',
    ws: 'wss://api.phala.network/ws',
    weight: 1_000_000_000,
    parachainId: 2035,
    moonAssetId: 1,
  },
  [Chain.Polkadot]: {
    chain: Chain.Polkadot,
    name: 'Polkadot',
    ws: 'wss://rpc.polkadot.io',
    weight: 1_000_000_000,
    parachainId: 0,
  },
};
