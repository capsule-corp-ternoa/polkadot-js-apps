// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        AccountDataOf: 'AccountData',
        Address: 'MultiAddress',
        NFTId: 'u32',
        NFTIdOf: 'NFTId',
        NFTSeriesId: 'u32',
        NFTData: {
          owner: 'AccountId',
          details: 'NFTDetails',
          sealed: 'bool',
          locked: 'bool'
        },
        NFTDetails: {
          offchain_uri: 'Vec<u8>',
          series_id: 'NFTSeriesId',
          is_capsule: 'bool'
        },
        LookupSource: 'MultiAddress',
        NFTSeriesDetails: {
          owner: 'AccountId',
          nfts: 'Vec<NFTId>'
        },
        NFTCurrencyCombined: {
          caps: 'Balance',
          tiime: 'Balance'
        },
        NFTCurrency: {
          _enum: {
            CAPS: 'Balance',
            TIIME: 'Balance',
            COMBINED: 'NFTCurrencyCombined'
          }
        },
        NFTCurrencyId: {
          _enum: [
            'CAPS',
            'TIIME'
          ]
        }
      }
    }
  ]
};

export default definitions;
