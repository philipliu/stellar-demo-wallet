import { Horizon } from "@stellar/stellar-sdk";
import { BalanceMap } from "../types/types";

type CheckAssetExistsProps = {
  assetCode: string;
  assetIssuer: string;
  networkUrl: string;
  accountBalances?: BalanceMap;
};

export const checkAssetExists = async ({
  assetCode,
  assetIssuer,
  networkUrl,
  accountBalances,
}: CheckAssetExistsProps) => {
  const asset = `${assetCode}:${assetIssuer}`;

  if (accountBalances && accountBalances?.[asset]) {
    throw new Error(`Asset \`${asset}\` is already trusted`);
  }

  const server = new Horizon.Server(networkUrl);
  const assetResponse = await server
    .assets()
    .forCode(assetCode)
    .forIssuer(assetIssuer)
    .call();

  if (!assetResponse.records.length) {
    throw new Error(`Asset \`${asset}\` does not exist`);
  }
};
