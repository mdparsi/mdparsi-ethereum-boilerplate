import Metamask from "./WalletIcons/metamaskWallet.png";
import Coin98 from "./WalletIcons/Coin98.png";
import WalletConnect from "./WalletIcons/wallet-connect.svg";
import MathWallet from "./WalletIcons/MathWallet.svg";
import TokenPocket from "!file-loader!./WalletIcons/TokenPocket.svg";
import SafePal from "!file-loader!./WalletIcons/SafePal.svg";
import TrustWallet from "./WalletIcons/TrustWallet.png";

export const connectors = [
  {
    title: "متامسک",
    icon: Metamask,
    connectorId: "injected",
    priority: 1,
  },
  {
    title: "ولت کانکت",
    icon: WalletConnect,
    connectorId: "walletconnect",
    priority: 2,
  },
  {
    title: "تراست ولت",
    icon: TrustWallet,
    connectorId: "injected",
    priority: 3,
  },
  {
    title: "مَت ولت",
    icon: MathWallet,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "توکن پاکت",
    icon: TokenPocket,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "سیف پال",
    icon: SafePal,
    connectorId: "injected",
    priority: 999,
  },
  {
    title: "کوین 98",
    icon: Coin98,
    connectorId: "injected",
    priority: 999,
  },
];
