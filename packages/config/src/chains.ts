import {
  AnyChain,
  Ecosystem,
  EvmParachain,
  Parachain,
} from '@moonbeam-network/xcm-types';
import {
  aca,
  alan,
  ampe,
  aseed,
  astr,
  atom,
  auq,
  betaDEV,
  bnc,
  bncs,
  cfg,
  crab,
  csm,
  dai,
  ded,
  dev,
  dot,
  eq,
  eqd,
  fil,
  ftmwh,
  glmr,
  hdx,
  hko,
  ibtc,
  intr,
  kar,
  kbtc,
  kint,
  kma,
  ksm,
  ldot,
  lit,
  manta,
  mgx,
  movr,
  neuro,
  nodl,
  otp,
  para,
  paring,
  pen,
  pha,
  pica,
  pink,
  ring,
  rmrk,
  sdn,
  sub,
  teer,
  tt1,
  tur,
  unit,
  usdc,
  usdcwh,
  usdt,
  usdtwh,
  vastr,
  vbnc,
  vdot,
  vfil,
  vglmr,
  vksm,
  vmanta,
  vmovr,
  wbtc,
  weth,
  xrt,
  ztg,
} from './assets';

export const acala = new Parachain({
  assetsData: [
    {
      asset: aca,
      id: { Token: aca.originSymbol },
      metadataId: { NativeAssetId: { Token: aca.originSymbol } },
    },
    {
      asset: aseed,
      id: { Token: 'AUSD' },
      metadataId: { NativeAssetId: { Token: 'AUSD' } },
      minId: { NativeAssetId: { Token: 'AUSD' } },
    },
    {
      asset: glmr,
      id: { ForeignAsset: 0 },
      metadataId: { ForeignAssetId: 0 },
      minId: { ForeignAssetId: 0 },
    },
    {
      asset: ldot,
      id: { Token: ldot.originSymbol },
      metadataId: { NativeAssetId: { Token: ldot.originSymbol } },
      minId: { NativeAssetId: { Token: ldot.originSymbol } },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c',
  key: 'acala',
  name: 'Acala',
  parachainId: 2000,
  ss58Format: 10,
  ws: 'wss://acala-rpc.aca-api.network',
});

export const alphanetAssetHub = new Parachain({
  assetsData: [
    {
      asset: tt1,
      id: 2,
      palletInstance: 50,
    },
    // NOTE: no meta for native token
    {
      asset: unit,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0x2c63baa36880c9cf820d5ccfc4e49841bfd714e93ede2bebc4abc4531dd4e8a0',
  isTestChain: true,
  key: 'alphanet-asset-hub',
  name: 'Alphanet Asset Hub',
  parachainId: 1001,
  ss58Format: 42,
  ws: 'wss://frag-moonbase-sm-rpc-ws.g.moonbase.moonbeam.network/',
});

export const alphanetRelay = new Parachain({
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0xe1ea3ab1d46ba8f4898b6b4b9c54ffc05282d299f89e84bd0fd08067758c9443',
  isTestChain: true,
  key: 'alphanet-relay',
  name: 'Alphanet Relay',
  parachainId: 0,
  ss58Format: 42,
  ws: 'wss://frag-moonbase-relay-rpc-ws.g.moonbase.moonbeam.network',
});

export const astar = new Parachain({
  assetsData: [
    {
      asset: glmr,
      id: 18446744073709551619n,
    },
    // NOTE: no meta for native token
    {
      asset: astr,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6',
  key: 'astar',
  name: 'Astar',
  parachainId: 2006,
  ss58Format: 5,
  ws: 'wss://rpc.astar.network',
});

export const bifrostKusama = new Parachain({
  assetsData: [
    {
      asset: movr,
      id: { Token: movr.originSymbol },
    },
    {
      asset: bnc,
      id: { Native: bnc.originSymbol },
    },
    {
      asset: vbnc,
      id: { VToken: 'BNC' },
    },
    {
      asset: vksm,
      id: { VToken: 'KSM' },
    },
    {
      asset: vmovr,
      id: { VToken: 'MOVR' },
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed',
  key: 'bifrost-kusama',
  name: 'Bifrost',
  parachainId: 2001,
  ss58Format: 6,
  ws: 'wss://bifrost-rpc.dwellir.com',
});

export const bifrostPolkadot = new Parachain({
  assetsData: [
    {
      asset: glmr,
      id: { Token2: 1 },
    },
    {
      asset: bnc,
      id: { Native: bnc.originSymbol },
    },
    {
      asset: bncs,
      id: { Token2: 9 },
    },
    {
      asset: fil,
      id: { Token2: 4 },
    },
    {
      asset: vastr,
      id: { VToken2: 3 },
    },
    {
      asset: vdot,
      id: { VToken2: 0 },
      metadataId: { VToken2: 0 },
    },
    {
      asset: vfil,
      id: { VToken2: 4 },
    },
    {
      asset: vglmr,
      id: { VToken2: 1 },
    },
    {
      asset: vmanta,
      id: { VToken2: 8 },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b',
  key: 'bifrost-polkadot',
  name: 'Bifrost',
  parachainId: 2030,
  ss58Format: 6,
  ws: 'wss://bifrost-polkadot-rpc.dwellir.com',
});

export const calamari = new Parachain({
  assetsData: [
    {
      asset: movr,
      balanceId: 11,
      id: { MantaCurrency: 11 },
    },
    {
      asset: kma,
      id: { MantaCurrency: 1 },
      // NOTE: no meta for native token
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x4ac80c99289841dd946ef92765bf659a307d39189b3ce374a92b5f0415ee17a1',
  key: 'calamari',
  name: 'Calamari',
  parachainId: 2084,
  ss58Format: 78,
  ws: 'wss://calamari.systems',
});

export const centrifuge = new Parachain({
  assetsData: [
    {
      asset: cfg,
      id: 'Native',
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82',
  key: 'centrifuge',
  name: 'Centrifuge',
  parachainId: 2031,
  ss58Format: 36,
  ws: 'wss://fullnode.centrifuge.io',
});

export const crustShadow = new Parachain({
  assetsData: [
    {
      asset: movr,
      balanceId: 232263652204149413431520870009560565298n,
      id: { OtherReserve: 232263652204149413431520870009560565298n },
    },
    // NOTE: no meta for native token
    {
      asset: csm,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xd4c0c08ca49dc7c680c3dac71a7c0703e5b222f4b6c03fe4c5219bb8f22c18dc',
  key: 'crust-shadow',
  name: 'Crust Shadow',
  parachainId: 2012,
  ss58Format: 66,
  ws: 'wss://rpc2-shadow.crust.network',
});

export const darwinia = new EvmParachain({
  assetsData: [
    {
      // NOTE: no meta for native token
      asset: ring,
      metadataId: 0,
      palletInstance: 5,
    },
    {
      // NOTE: no meta for movr
      asset: glmr,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xf0b8924b12e8108550d28870bc03f7b45a947e1b2b9abf81bfb0b89ecb60570e',
  id: 46,
  key: 'darwinia',
  name: 'Darwinia',
  nativeCurrency: {
    decimals: 18,
    name: ring.originSymbol,
    symbol: ring.originSymbol,
  },
  parachainId: 2046,
  rpc: 'https://rpc.darwinia.network',
  ss58Format: 18,
  ws: 'wss://parachain-rpc.darwinia.network',
});

export const darwiniaCrab = new EvmParachain({
  assetsData: [
    {
      // NOTE: no meta for native token
      asset: crab,
      metadataId: 0,
      palletInstance: 5,
    },
    {
      // NOTE: no meta for movr
      asset: movr,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x86e49c195aeae7c5c4a86ced251f1a28c67b3c35d8289c387ede1776cdd88b24',
  id: 44,
  key: 'darwinia-crab',
  name: 'Darwinia Crab',
  nativeCurrency: {
    decimals: 18,
    name: crab.originSymbol,
    symbol: crab.originSymbol,
  },
  parachainId: 2105,
  rpc: 'https://crab-rpc.darwinia.network',
  ss58Format: 18,
  ws: 'wss://crab-parachain-rpc.darwinia.network',
});

export const equilibrium = new Parachain({
  assetsData: [
    {
      asset: glmr,
      decimals: 9,
      id: 1_735_159_154,
    },
    {
      asset: eq,
      id: 25_969,
    },
    {
      asset: eqd,
      id: 6_648_164,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x89d3ec46d2fb43ef5a9713833373d5ea666b092fa8fd68fbc34596036571b907',
  key: 'equilibrium',
  name: 'Equilibrium',
  parachainId: 2011,
  ss58Format: 68,
  ws: 'wss://node.pol.equilibrium.io',
});

export const hydraDX = new Parachain({
  assetsData: [
    {
      asset: hdx,
      id: 0,
    },
    {
      asset: glmr,
      id: 16,
    },
    {
      asset: dai,
      id: 18,
    },
    {
      asset: usdcwh,
      id: 21,
    },
    {
      asset: usdtwh,
      id: 23,
    },
    {
      asset: wbtc,
      id: 19,
    },
    {
      asset: weth,
      id: 20,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d',
  key: 'hydra-dx',
  name: 'HydraDX',
  parachainId: 2034,
  ss58Format: 63,
  ws: 'wss://hydradx-rpc.dwellir.com',
});

export const hydraDxAlphanet = new Parachain({
  assetsData: [
    {
      asset: hdx,
      decimals: 12,
      id: 0,
    },
    {
      asset: usdcwh,
      decimals: 6,
      id: 1000001,
    },
    {
      asset: ftmwh,
      decimals: 18,
      id: 1000002,
    },
    {
      asset: usdtwh,
      decimals: 6,
      id: 2,
    },
    {
      asset: dev,
      decimals: 18,
      id: 1,
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0x025980095be141a99f983631c49271af15cab61c4ce0d73db73192443932669a',
  isTestChain: true,
  key: 'hydra-dx-Alphanet',
  name: 'HydraDX Alphanet',
  parachainId: 2034,
  ss58Format: 63,
  ws: 'wss://hydradx-moonbase-rpc.play.hydration.cloud',
});

export const interlay = new Parachain({
  assetsData: [
    {
      asset: glmr,
      id: { ForeignAsset: 10 },
    },
    {
      asset: intr,
      decimals: 10,
      id: { Token: intr.originSymbol },
    },
    {
      asset: ibtc,
      decimals: 8,
      id: { Token: ibtc.originSymbol },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72',
  key: 'interlay',
  name: 'Interlay',
  parachainId: 2032,
  ss58Format: 2032,
  ws: 'wss://api.interlay.io/parachain',
});

export const integritee = new Parachain({
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xcdedc8eadbfa209d3f207bba541e57c3c58a667b05a2e1d1e86353c9000758da',
  key: 'integritee',
  name: 'Integritee',
  parachainId: 2015,
  ss58Format: 13,
  ws: 'wss://kusama.api.integritee.network',
});

export const karura = new Parachain({
  assetsData: [
    {
      asset: movr,
      id: { ForeignAsset: 3 },
      metadataId: { ForeignAssetId: 3 },
      minId: { ForeignAssetId: 3 },
    },
    {
      asset: kar,
      id: { Token: kar.originSymbol },
      metadataId: { NativeAssetId: { Token: kar.originSymbol } },
    },
    {
      asset: aseed,
      id: { Token: 'KUSD' },
      metadataId: { NativeAssetId: { Token: 'KUSD' } },
      minId: { NativeAssetId: { Token: 'KUSD' } },
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b',
  key: 'karura',
  name: 'Karura',
  parachainId: 2000,
  ss58Format: 8,
  ws: 'wss://karura-rpc-0.aca-api.network',
});

export const khala = new Parachain({
  assetsData: [
    {
      asset: movr,
      id: 6,
      palletInstance: 10,
    },
    // NOTE: no meta for native token
    {
      asset: pha,
      metadataId: 99999999,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d',
  key: 'khala',
  name: 'Khala',
  parachainId: 2004,
  ss58Format: 30,
  ws: 'wss://khala-rpc.dwellir.com',
});

export const kintsugi = new Parachain({
  // no meta for native tokens
  assetsData: [
    {
      asset: kint,
      id: { Token: kint.originSymbol },
      metadataId: 0,
    },
    {
      asset: kbtc,
      decimals: 8,
      id: { Token: kbtc.originSymbol },
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x9af9a64e6e4da8e3073901c3ff0cc4c3aad9563786d89daf6ad820b6e14a0b8b',
  key: 'kintsugi',
  name: 'Kintsugi',
  parachainId: 2092,
  ss58Format: 2092,
  ws: 'wss://api-kusama.interlay.io/parachain',
});

export const kusama = new Parachain({
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
  key: 'kusama',
  name: 'Kusama',
  parachainId: 0,
  ss58Format: 2,
  ws: 'wss://kusama-rpc.dwellir.com',
});

export const kusamaAssetHub = new Parachain({
  assetsData: [
    {
      asset: usdt,
      id: 1984,
      palletInstance: 50,
    },
    {
      asset: rmrk,
      id: 8,
      palletInstance: 50,
    },
    {
      asset: ksm,
      // NOTE: no meta for native token
      metadataId: 9999999,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
  key: 'kusama-asset-hub',
  name: 'Kusama Asset Hub',
  parachainId: 1000,
  ss58Format: 2,
  ws: 'wss://kusama-asset-hub-rpc.polkadot.io',
});

export const litmus = new Parachain({
  assetsData: [
    {
      asset: lit,
      id: 'SelfReserve',
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xda5831fbc8570e3c6336d0d72b8c08f8738beefec812df21ef2afc2982ede09c',
  key: 'litmus',
  name: 'Litmus',
  parachainId: 2106,
  ss58Format: 131,
  ws: 'wss://rpc.litmus-parachain.litentry.io',
});

export const mangataKusama = new Parachain({
  assetsData: [
    {
      asset: mgx,
      id: 0,
    },
    {
      asset: movr,
      id: 39,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xd611f22d291c5b7b69f1e105cca03352984c344c4421977efaa4cbdd1834e2aa',
  key: 'mangata-kusama',
  name: 'Mangata',
  parachainId: 2110,
  ss58Format: 42,
  ws: 'wss://kusama-archive.mangata.online',
});

export const mantaParachain = new Parachain({
  assetsData: [
    {
      asset: manta,
      id: { MantaCurrency: 1 },
    },
    {
      asset: glmr,
      id: { MantaCurrency: 10 },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xf3c7ad88f6a80f366c4be216691411ef0622e8b809b1046ea297ef106058d4eb',
  key: 'manta',
  name: 'Manta',
  parachainId: 2104,
  ss58Format: 77,
  ws: 'wss://ws.manta.systems',
});

export const moonbaseAlpha = new EvmParachain({
  assetsData: [
    {
      asset: alan,
      id: '0x9133c5a22024118804089f1fB752b7B2ce2a6351',
      metadataId: 0, // no metadata for ERC20 tokens
    },
    {
      asset: ampe,
      id: '170050401128744171791743427490841452054',
    },
    {
      asset: atom,
      id: '244316754493307480955066032215622931381',
    },
    // {
    //   asset: auq,
    //   id: '69536036667157951501899290870203586130',
    // },
    {
      asset: dev,
      id: '0x0000000000000000000000000000000000000802',
      metadataId: 0,
      min: 0.01,
    },
    {
      asset: lit,
      id: '65216491554813189869575508812319036608',
    },
    {
      asset: otp,
      id: '238111524681612888331172110363070489924',
    },
    {
      asset: paring,
      id: '173481220575862801646329923366065693029',
    },
    {
      asset: pica,
      id: '22417088946346045371238623691600461855',
    },
    {
      asset: tt1,
      id: '156305701417244550631956600137082963628',
    },
    {
      asset: tur,
      id: '133300872918374599700079037156071917454',
    },
    {
      asset: unit,
      id: '42259045809535163221576417993425387648',
    },
    {
      asset: ftmwh,
      id: '0x566c1cebc6A4AFa1C122E039C4BEBe77043148Ee',
      metadataId: 0, // no metadata for ERC20 tokens
    },
    {
      asset: hdx,
      id: '69606720909260275826784788104880799692',
    },
    {
      asset: usdcwh,
      id: '0xE5dE10C4b744bac6b783fAF8d9B9fDFF14Acc3c9',
      metadataId: 0, // no metadata for ERC20 tokens
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0x91bc6e169807aaa54802737e1c504b2577d4fafedd5a02c10293b1cd60e39527',
  id: 1287,
  isTestChain: true,
  key: 'moonbase-alpha',
  name: 'Moonbase Alpha',
  nativeCurrency: {
    decimals: 18,
    name: dev.originSymbol,
    symbol: dev.originSymbol,
  },
  parachainId: 1000,
  rpc: 'https://rpc.api.moonbase.moonbeam.network',
  ss58Format: 1287,
  ws: 'wss://wss.api.moonbase.moonbeam.network',
});

export const moonbaseBeta = new EvmParachain({
  assetsData: [
    {
      asset: betaDEV,
      metadataId: 0, // no metadata for native tokens
    },
    {
      asset: dev,
      balanceId: '222902676330054289648817870329963141953',
      id: { ForeignAsset: '222902676330054289648817870329963141953' },
    },
    {
      asset: alan,
      balanceId: '85534404031760856987006367174489651085',
      id: { ForeignAsset: '85534404031760856987006367174489651085' },
    },
    {
      asset: usdcwh,
      balanceId: '319794858556516669238969276945382613133',
      id: { ForeignAsset: '319794858556516669238969276945382613133' },
    },
    {
      asset: ftmwh,
      balanceId: '198801030527939140930753142903035039136',
      id: { ForeignAsset: '198801030527939140930753142903035039136' },
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0xeebb5d05763801e54d6a7a60a4b7998ac125c4d050dcec418dd07ea959a54464',
  id: 1282,
  isTestChain: true,
  key: 'moonbase-beta',
  name: 'Moonbase Beta',
  nativeCurrency: {
    decimals: 18,
    name: dev.originSymbol,
    symbol: dev.originSymbol,
  },
  parachainId: 888,
  rpc: 'https://frag-moonbase-beta-rpc.g.moonbase.moonbeam.network',
  ss58Format: 1287,
  ws: 'wss://deo-moon-rpc-1-moonbase-beta-rpc-1.moonbase.ol-infra.network',
});

export const moonbeam = new EvmParachain({
  assetsData: [
    {
      asset: aca,
      id: '224821240862170613278369189818311486111',
    },
    {
      asset: astr,
      id: '224077081838586484055667086558292981199',
    },
    {
      asset: aseed,
      id: '110021739665376159354538090254163045594',
    },
    {
      asset: bnc,
      id: '165823357460190568952172802245839421906',
    },
    {
      asset: bncs,
      id: '142155548796783636521833385094843759961',
    },
    {
      asset: cfg,
      id: '91372035960551235635465443179559840483',
    },
    {
      asset: dai,
      id: '0x06e605775296e851FF43b4dAa541Bb0984E9D6fD',
      metadataId: 0, // no metadata for ERC20 tokens
    },
    {
      asset: ded,
      id: '124463719055550872076363892993240202694',
    },
    {
      asset: dot,
      id: '42259045809535163221576417993425387648',
    },
    {
      asset: eq,
      id: '190590555344745888270686124937537713878',
    },
    {
      asset: eqd,
      id: '187224307232923873519830480073807488153',
    },
    {
      asset: fil,
      id: '0xfFFfFFFF6C57e17D210DF507c82807149fFd70B2',
      metadataId: 0, // no metadata for ERC20 tokens
    },
    {
      asset: glmr,
      id: '0x0000000000000000000000000000000000000802',
      min: 0.1,
    },
    {
      asset: hdx,
      id: '69606720909260275826784788104880799692',
    },
    {
      asset: ibtc,
      id: '120637696315203257380661607956669368914',
    },
    {
      asset: intr,
      id: '101170542313601871197860408087030232491',
    },
    {
      asset: ldot,
      id: '225719522181998468294117309041779353812',
    },
    {
      asset: manta,
      id: '166446646689194205559791995948102903873',
    },
    {
      asset: nodl,
      id: '309163521958167876851250718453738106865',
    },
    {
      asset: neuro,
      id: '238111524681612888331172110363070489924',
    },
    {
      asset: para,
      id: '32615670524745285411807346420584982855',
    },
    {
      asset: pha,
      id: '132685552157663328694213725410064821485',
    },
    {
      asset: pen,
      id: '45647473099451451833602657905356404688',
    },
    {
      asset: ring,
      id: '125699734534028342599692732320197985871',
    },
    {
      asset: sub,
      id: '89994634370519791027168048838578580624',
    },
    {
      asset: usdc,
      id: '0xFFfffffF7D2B0B761Af01Ca8e25242976ac0aD7D',
      metadataId: '166377000701797186346254371275954761085', // registered XC20 id for ERC20 tokens
    },
    {
      asset: usdcwh,
      id: '0x931715FEE2d06333043d11F658C8CE934aC61D0c',
      metadataId: 0, // no metadata for ERC20 tokens
    },
    {
      asset: usdtwh,
      id: '0xc30E9cA94CF52f3Bf5692aaCF81353a27052c46f',
      metadataId: 0,
    },
    {
      asset: usdt,
      id: '311091173110107856861649819128533077277',
    },
    {
      asset: vastr,
      id: '0xFffFffff55C732C47639231a4C4373245763d26E',
      metadataId: '114018676402354620972806895487280206446', // registered XC20 id for ERC20 tokens
    },
    {
      asset: vdot,
      id: '0xFFFfffFf15e1b7E3dF971DD813Bc394deB899aBf',
      metadataId: '29085784439601774464560083082574142143', // registered XC20 id for ERC20 tokens
    },
    {
      asset: vfil,
      id: '0xFffffFffCd0aD0EA6576B7b285295c85E94cf4c1',
      metadataId: '272547899416482196831721420898811311297', // registered XC20 id for ERC20 tokens
    },
    {
      asset: vglmr,
      id: '0xFfFfFFff99dABE1a8De0EA22bAa6FD48fdE96F6c',
      metadataId: '204507659831918931608354793288110796652', // registered XC20 id for ERC20 tokens
    },
    {
      asset: vmanta,
      id: '0xFFfFFfFfdA2a05FB50e7ae99275F4341AEd43379',
      metadataId: '289989900872525819559124583375550296953', // registered XC20 id for ERC20 tokens
    },
    {
      asset: wbtc,
      id: '0xE57eBd2d67B462E9926e04a8e33f01cD0D64346D',
      metadataId: 0, // no metadata for ERC20 tokens
    },
    {
      asset: weth,
      id: '0xab3f0245B83feB11d15AAffeFD7AD465a59817eD',
      metadataId: 0, // no metadata for ERC20 tokens
    },
    {
      asset: ztg,
      id: '150874409661081770150564009349448205842',
    },
    {
      asset: pink,
      id: '64174511183114006009298114091987195453',
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d',
  id: 1284,
  key: 'moonbeam',
  name: 'Moonbeam',
  nativeCurrency: {
    decimals: 18,
    name: glmr.originSymbol,
    symbol: glmr.originSymbol,
  },
  parachainId: 2004,
  rpc: 'https://rpc.api.moonbeam.network',
  ss58Format: 1284,
  ws: 'wss://wss.api.moonbeam.network',
});

export const moonriver = new EvmParachain({
  assetsData: [
    {
      asset: aseed,
      id: '214920334981412447805621250067209749032',
    },
    {
      asset: bnc,
      id: '319623561105283008236062145480775032445',
    },
    {
      asset: crab,
      id: '173481220575862801646329923366065693029',
    },
    {
      asset: csm,
      id: '108457044225666871745333730479173774551',
    },
    {
      asset: hko,
      id: '76100021443485661246318545281171740067',
    },
    {
      asset: kar,
      id: '10810581592933651521121702237638664357',
    },
    {
      asset: kbtc,
      id: '328179947973504579459046439826496046832',
    },
    {
      asset: kint,
      id: '175400718394635817552109270754364440562',
    },
    {
      asset: kma,
      id: '213357169630950964874127107356898319277',
    },
    {
      asset: ksm,
      id: '42259045809535163221576417993425387648',
    },
    {
      asset: lit,
      id: '65216491554813189869575508812319036608',
    },
    {
      asset: mgx,
      id: '118095707745084482624853002839493125353',
    },
    {
      asset: movr,
      id: '0x0000000000000000000000000000000000000802',
      min: 0.01,
    },
    {
      asset: pha,
      id: '189307976387032586987344677431204943363',
    },
    {
      asset: pica,
      id: '167283995827706324502761431814209211090',
    },
    {
      asset: rmrk,
      id: '182365888117048807484804376330534607370',
    },
    {
      asset: sdn,
      id: '16797826370226091782818345603793389938',
    },
    {
      asset: teer,
      id: '105075627293246237499203909093923548958',
    },
    {
      asset: tur,
      id: '133300872918374599700079037156071917454',
    },
    {
      asset: usdt,
      id: '311091173110107856861649819128533077277',
    },
    {
      asset: xrt,
      id: '108036400430056508975016746969135344601',
    },
    {
      asset: vbnc,
      id: '0xFFffffff3646A00f78caDf8883c5A2791BfCDdc4',
      metadataId: '72145018963825376852137222787619937732',
    },
    {
      asset: vksm,
      id: '0xFFffffFFC6DEec7Fc8B11A2C8ddE9a59F8c62EFe',
      metadataId: '264344629840762281112027368930249420542',
    },
    {
      asset: vmovr,
      id: '0xfFfffFfF98e37bF6a393504b5aDC5B53B4D0ba11',
      metadataId: '203223821023327994093278529517083736593',
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x401a1f9dca3da46f5c4091016c8a2f26dcea05865116b286f60f668207d1474b',
  id: 1285,
  key: 'moonriver',
  name: 'Moonriver',
  nativeCurrency: {
    decimals: 18,
    name: movr.originSymbol,
    symbol: movr.originSymbol,
  },
  parachainId: 2023,
  rpc: 'https://rpc.api.moonriver.moonbeam.network',
  ss58Format: 1285,
  ws: 'wss://wss.api.moonriver.moonbeam.network',
});

export const nodle = new Parachain({
  assetsData: [
    {
      asset: nodl,
      id: 'NodleNative',
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x97da7ede98d7bad4e36b4d734b6055425a3be036da2a332ea5a7037656427a21',
  key: 'nodle',
  name: 'Nodle',
  parachainId: 2026,
  ss58Format: 37,
  ws: 'wss://nodle-rpc.dwellir.com',
});

export const neuroweb = new Parachain({
  assetsData: [
    {
      asset: neuro,
      metadataId: 0,
      palletInstance: 10,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174',
  key: 'neuroweb',
  name: 'NeuroWeb',
  parachainId: 2043,
  ss58Format: 101,
  ws: 'wss://origintrail-rpc.dwellir.com',
});

export const originTrailAlphanet = new Parachain({
  assetsData: [
    {
      asset: otp,
      metadataId: 0,
      palletInstance: 10,
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0xe23ee00b26d1cdc7939d83dfe829c4f970cd26071f90d237cb2aded2b23214bf',
  isTestChain: true,
  key: 'origin-trail-alphanet',
  name: 'OriginTrail Alphanet',
  parachainId: 2043,
  ss58Format: 101,
  ws: 'wss://otp-lunaris-alpha-node-02.origin-trail.network',
});

export const parallel = new Parachain({
  assetsData: [
    {
      asset: glmr,
      id: 114,
    },
    // NOTE: no meta for native token
    {
      asset: para,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97',
  key: 'parallel',
  name: 'Parallel',
  parachainId: 2012,
  ss58Format: 172,
  ws: 'wss://parallel-rpc.dwellir.com',
});

export const parallelHeiko = new Parachain({
  assetsData: [
    {
      asset: movr,
      id: 113,
    },
    // NOTE: no meta for native token
    {
      asset: hko,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x64a1c658a48b2e70a7fb1ad4c39eea35022568c20fc44a6e2e3d0a57aee6053b',
  key: 'parallel-heiko',
  name: 'Parallel Heiko',
  parachainId: 2085,
  ss58Format: 110,
  ws: 'wss://heiko-rpc.parallel.fi',
});

export const pendulum = new Parachain({
  assetsData: [
    {
      asset: pen,
      id: 'Native',
      metadataId: 0,
    },
    {
      asset: glmr,
      decimals: 18,
      id: { XCM: 6 },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86',
  key: 'pendulum',
  name: 'Pendulum',
  parachainId: 2094,
  ss58Format: 56,
  ws: 'wss://rpc-pendulum.prd.pendulumchain.tech',
});

export const pendulumAlphanet = new Parachain({
  assetsData: [
    {
      asset: ampe,
      id: 'Native',
      metadataId: 0,
    },
    {
      asset: dev,
      decimals: 18,
      id: { XCM: 1 },
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0xe83b546ddeccf999d4b7fef4d83271034e82bb5db538e769c242c2731f61e8d6',
  isTestChain: true,
  key: 'pendulum-alphanet',
  name: 'Foucoco',
  parachainId: 2124,
  ss58Format: 57,
  ws: 'wss://moonbeam-00.pendulumchain.tech:443',
});

export const phala = new Parachain({
  assetsData: [
    {
      asset: glmr,
      id: 1,
      palletInstance: 10,
    },
    // NOTE: no meta for native token
    {
      asset: pha,
      metadataId: 99999999,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736',
  key: 'phala',
  name: 'Phala',
  parachainId: 2035,
  ss58Format: 30,
  ws: 'wss://phala-rpc.dwellir.com',
});

export const picasso = new Parachain({
  assetsData: [
    {
      asset: pica,
      id: 1,
    },
    {
      asset: movr,
      id: 23,
      min: 0.0041,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc',
  key: 'picasso',
  name: 'Picasso',
  parachainId: 2087,
  ss58Format: 49,
  ws: 'wss://picasso-rpc.dwellir.com',
});

export const picassoAlphanet = new Parachain({
  assetsData: [
    {
      asset: pica,
      id: 1,
    },
    {
      asset: atom,
      id: 7,
    },
    {
      asset: dev,
      id: 10,
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0x3db2074093ab964732631d842b99d6612a6dc75a379738a660642b05ccad59c8',
  isTestChain: true,
  key: 'picasso-alphanet',
  name: 'Picasso Alphanet',
  parachainId: 2019,
  ss58Format: 49,
  ws: 'wss://boot-01.picasso2270.composablenodes.tech/',
});

export const polkadot = new Parachain({
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
  key: 'polkadot',
  name: 'Polkadot',
  parachainId: 0,
  ss58Format: 0,
  ws: 'wss://polkadot-rpc.dwellir.com',
});

export const polkadotAssetHub = new Parachain({
  assetsData: [
    {
      asset: usdt,
      id: 1984,
      palletInstance: 50,
    },
    {
      asset: ded,
      id: 30,
      palletInstance: 50,
    },
    {
      asset: dot,
      // NOTE: no meta for native token
      metadataId: 9999999,
    },
    {
      asset: usdc,
      id: 1337,
      palletInstance: 50,
    },
    {
      asset: pink,
      id: 23,
      palletInstance: 50,
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
  key: 'Polkadot-asset-hub',
  name: 'Polkadot Asset Hub',
  parachainId: 1000,
  ss58Format: 42,
  ws: 'wss://polkadot-asset-hub-rpc.polkadot.io',
});

export const robonomics = new Parachain({
  assetsData: [
    {
      asset: xrt,
      // NOTE: no meta for native token
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x631ccc82a078481584041656af292834e1ae6daab61d2875b4dd0c14bb9b17bc',
  key: 'robonomics',
  name: 'Robonomics',
  parachainId: 2048,
  ss58Format: 32,
  ws: 'wss://kusama.rpc.robonomics.network/',
});

export const shiden = new Parachain({
  assetsData: [
    {
      asset: movr,
      id: 18446744073709551620n,
    },
    // NOTE: no meta for native token
    {
      asset: sdn,
      metadataId: 0,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0xf1cf9022c7ebb34b162d5b5e34e705a5a740b2d0ecc1009fb89023e62a488108',
  key: 'shiden',
  name: 'Shiden',
  parachainId: 2007,
  ss58Format: 5,
  ws: 'wss://shiden-rpc.dwellir.com',
});

export const subsocial = new Parachain({
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x4a12be580bb959937a1c7a61d5cf24428ed67fa571974b4007645d1886e7c89f',
  key: 'subsocial',
  name: 'Subsocial',
  parachainId: 2101,
  ss58Format: 28,
  ws: 'wss://para.subsocial.network',
});

export const turing = new Parachain({
  assetsData: [
    {
      asset: tur,
      // NOTE: no meta for native token
      metadataId: 0,
    },
    {
      asset: movr,
      id: 9,
    },
  ],
  ecosystem: Ecosystem.Kusama,
  genesisHash:
    '0x0f62b701fb12d02237a33b84818c11f621653d2b1614c777973babf4652b535d',
  key: 'turing',
  name: 'Turing',
  parachainId: 2114,
  ss58Format: 51,
  ws: 'wss://rpc.turing.oak.tech',
});

export const turingAlphanet = new Parachain({
  assetsData: [
    {
      asset: tur,
      // NOTE: no meta for native token
      metadataId: 0,
    },
    {
      asset: dev,
      id: 1,
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0x8288e57b61337833eb48e731c498e3c14652d15ead2abe5b86ba8b0fb51e917d',
  isTestChain: true,
  key: 'turing-alphanet',
  name: 'Turing Alphanet',
  parachainId: 2114,
  ss58Format: 51,
  ws: 'wss://turing-moonbase.rpc.oak.tech/',
});

export const uniqueAlpha = new Parachain({
  assetsData: [
    {
      asset: auq,
      id: { NativeAssetId: 'Here' },
    },
  ],
  ecosystem: Ecosystem.AlphanetRelay,
  genesisHash:
    '0xbdf55f33d9f0b390f56413ec803c693af348edae64a659760248974b48b9a99e',
  isTestChain: true,
  key: 'unique-alphanet',
  name: 'Unique Alphanet',
  parachainId: 2095,
  ss58Format: 255,
  ws: 'wss://unique-alpha.unique.network',
});

export const zeitgeist = new Parachain({
  assetsData: [
    {
      asset: usdcwh,
      id: { ForeignAsset: 1 },
    },
    {
      asset: glmr,
      id: { ForeignAsset: 3 },
    },
  ],
  ecosystem: Ecosystem.Polkadot,
  genesisHash:
    '0x1bf2a2ecb4a868de66ea8610f2ce7c8c43706561b6476031315f6640fe38e060',
  key: 'zeitgeist',
  name: 'Zeitgeist',
  parachainId: 2092,
  ss58Format: 73,
  usesChainDecimals: true,
  ws: 'wss://zeitgeist-rpc.dwellir.com',
});

export const chainsList: AnyChain[] = [
  acala,
  alphanetRelay,
  astar,
  bifrostKusama,
  bifrostPolkadot,
  calamari,
  centrifuge,
  crustShadow,
  darwinia,
  darwiniaCrab,
  equilibrium,
  hydraDX,
  hydraDxAlphanet,
  integritee,
  interlay,
  karura,
  khala,
  kintsugi,
  kusama,
  litmus,
  mangataKusama,
  mantaParachain,
  moonbaseAlpha,
  moonbaseBeta,
  moonbeam,
  moonriver,
  neuroweb,
  nodle,
  originTrailAlphanet,
  parallel,
  parallelHeiko,
  pendulum,
  pendulumAlphanet,
  phala,
  picasso,
  picassoAlphanet,
  polkadot,
  robonomics,
  shiden,
  kusamaAssetHub,
  alphanetAssetHub,
  polkadotAssetHub,
  subsocial,
  turing,
  turingAlphanet,
  uniqueAlpha,
  zeitgeist,
];

export const chainsMap = new Map<string, AnyChain>(
  chainsList.map((chain) => [chain.key, chain]),
);
