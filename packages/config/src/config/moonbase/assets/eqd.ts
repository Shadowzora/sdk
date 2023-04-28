import { AssetSymbol, ChainKey } from '../../../constants';
import { EqBalancesSuccessEvent } from '../../../extrinsic/eqBalances';
import {
  assets,
  balance,
  chains,
  extrinsic,
  withdraw,
} from '../moonbase.common';
import { MoonbaseXcmConfig } from '../moonbase.interfaces';

const asset = assets[AssetSymbol.EQD];
const feeAsset = assets[AssetSymbol.EQ];
const origin = chains[ChainKey.EquilibriumAlphanet];
const eqId = 25_969;
const eqdId = 6_648_164;

export const EQD: MoonbaseXcmConfig = {
  asset,
  origin,
  deposit: {
    [origin.key]: {
      source: origin,
      balance: balance.systemEquilibrium(eqdId),
      sourceFeeBalance: balance.systemEquilibrium(eqId),
      xcmFeeAsset: {
        asset: feeAsset,
        balance: balance.systemEquilibrium(eqId),
      },
      extrinsic: extrinsic
        .eqBalances()
        .transferXcm()
        .successEvent(EqBalancesSuccessEvent.ExtrinsicSuccess)
        .asset(eqdId)
        .feeAsset(eqId),
    },
  },
  withdraw: {
    [origin.key]: withdraw.xTokens({
      balance: balance.systemEquilibrium(eqdId),
      destination: origin,
      feePerWeight: 1,
    }),
  },
};
