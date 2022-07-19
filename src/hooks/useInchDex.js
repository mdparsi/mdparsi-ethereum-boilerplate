import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const useInchDex = (chain) => {
  const { Moralis, account } = useMoralis();
  const [tokenList, setTokenlist] = useState();

  useEffect(() => {
    if (!Moralis?.["Plugins"]?.["oneInch"]) return null;
    Moralis.Plugins.oneInch
      .getSupportedTokens({ chain })
      .then((tokens) => setTokenlist(tokens.tokens));
  }, [Moralis, Moralis.Plugins, chain]);

  const getQuote = async (params) =>
    await Moralis.Plugins.oneInch.quote({
      chain: params.chain, // بلاکچینی که می خواهید استفاده کنید (ETH/BSC/Polygon)
      fromTokenAddress: params.fromToken.address, // رمزارزی که می خواهید مبادله کنید
      toTokenAddress: params.toToken.address, // رمزارزی که می خواهید دریافت کنید
      amount: Moralis.Units.Token(
        params.fromAmount,
        params.fromToken.decimals,
      ).toString(),
    });

  async function trySwap(params) {
    const { fromToken, fromAmount, chain } = params;
    const amount = Moralis.Units.Token(
      fromAmount,
      fromToken.decimals,
    ).toString();
    if (fromToken.address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
      await Moralis.Plugins.oneInch
        .hasAllowance({
          chain, // بلاکچینی که می خواهید استفاده کنید (ETH/BSC/Polygon)
          fromTokenAddress: fromToken.address, // رمزارزی که می خواهید مبادله کنید
          fromAddress: account, // آدرس کیف پول شما
          amount,
        })
        .then(async (allowance) => {
          console.log(allowance);
          if (!allowance) {
            await Moralis.Plugins.oneInch.approve({
              chain, // بلاکچینی که می خواهید استفاده کنید (ETH/BSC/Polygon)
              tokenAddress: fromToken.address, // رمزارزی که می خواهید مبادله کنید
              fromAddress: account, // آدرس کیف پول شما
            });
          }
        })
        .catch((e) => alert(e.message));
    }

    await doSwap(params)
      .then((receipt) => {
        if (receipt.statusCode !== 400) {
          alert("انجام مبادله");
        }
        console.log(receipt);
      })
      .catch((e) => alert(e.message));
  }

  async function doSwap(params) {
    return await Moralis.Plugins.oneInch.swap({
      chain: params.chain, // بلاکچینی که می خواهید استفاده کنید (ETH/BSC/Polygon)
      fromTokenAddress: params.fromToken.address, // رمزارزی که می خواهید مبادله کنید
      toTokenAddress: params.toToken.address, // رمزارزی که می خواهید دریافت کنید
      amount: Moralis.Units.Token(
        params.fromAmount,
        params.fromToken.decimals,
      ).toString(),
      fromAddress: account, // آدرس کیف پول شما
      slippage: 1,
    });
  }

  return { getQuote, trySwap, tokenList };
};

export default useInchDex;
