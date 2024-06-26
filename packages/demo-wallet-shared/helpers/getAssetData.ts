import { omit } from "lodash";
import { getAssetSettingsFromToml } from "./getAssetSettingsFromToml";
import { normalizeAssetProps } from "./normalizeAssetProps";
import { Asset, AssetBalance, BalanceMap } from "../types/types";

export const getAssetData = async ({
  balances,
  networkUrl,
  overrideIds,
}: {
  balances: BalanceMap | undefined;
  networkUrl: string;
  overrideIds: string[];
}) => {
  const allAssets = Object.entries(omit(balances || {}, overrideIds));
  const assets: Asset[] = [];

  if (!allAssets?.length) {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < allAssets.length; i++) {
    const [assetId, data] = allAssets[i];

    // eslint-disable-next-line no-await-in-loop
    const { homeDomain, supportedActions } = await getAssetSettingsFromToml({
      assetId,
      networkUrl,
    });

    assets.push(
      normalizeAssetProps({
        source: data as AssetBalance,
        homeDomain,
        supportedActions,
      }),
    );
  }

  return assets;
};
