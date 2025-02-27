import { CallType, SubstrateQueryConfig } from '@moonbeam-network/xcm-builder';
import { AssetConfig } from '@moonbeam-network/xcm-config';
import { AnyChain, Asset } from '@moonbeam-network/xcm-types';
import { convertDecimals, toBigInt } from '@moonbeam-network/xcm-utils';
import { BalanceContractInterface, createContract } from '../contract';
import { PolkadotService } from '../polkadot';
import { EvmSigner } from '../sdk.interfaces';

export interface GetBalancesParams {
  address: string;
  asset?: Asset;
  chain: AnyChain;
  config: AssetConfig;
  decimals: number;
  evmSigner?: EvmSigner;
  polkadot: PolkadotService;
}

export type GetDecimalsParams = Omit<GetBalancesParams, 'decimals'>;

export async function getBalance({
  address,
  chain,
  config,
  decimals,
  evmSigner,
  polkadot,
}: GetBalancesParams) {
  const cfg = config.balance.build({
    address,
    asset: polkadot.chain.getBalanceAssetId(config.asset),
  });
  if (cfg.type === CallType.Substrate) {
    const balance = await polkadot.query(cfg as SubstrateQueryConfig);
    return chain.usesChainDecimals
      ? convertDecimals(balance, polkadot.decimals, decimals)
      : balance;
  }

  const contract = createContract(
    cfg,
    evmSigner,
    chain,
  ) as BalanceContractInterface;

  const balance = await contract.getBalance();

  return balance;
}

export async function getDecimals({
  address,
  asset,
  config,
  polkadot,
  evmSigner,
  chain,
}: GetDecimalsParams) {
  const cfg = config.balance.build({
    address,
    asset: polkadot.chain.getBalanceAssetId(asset || config.asset),
  });
  if (cfg.type === CallType.Substrate) {
    return polkadot.getAssetDecimals(asset || config.asset);
  }

  const contract = createContract(
    cfg,
    evmSigner,
    chain,
  ) as BalanceContractInterface;

  return contract.getDecimals();
}

export async function getMin(config: AssetConfig, polkadot: PolkadotService) {
  if (config.min) {
    return polkadot.query(
      config.min.build({ asset: polkadot.chain.getMinAssetId(config.asset) }),
    );
  }

  const min = polkadot.chain.getAssetMin(config.asset);

  if (min) {
    const decimals = await polkadot.getAssetDecimals(config.asset);

    return toBigInt(min, decimals);
  }

  return 0n;
}
