import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import mdpLogo from "mdparsi-logo.png";
const { Header, Footer } = Layout;
const polygonColor = "#8247e5";
const polygonColor2 = "#4d2197";
const etherColor = "#627eea";
const etherColor2 = "#304bb2";
const bscColor = "#f3ba2f";
const bscColor2 = "#d09d21";
const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Vazirmatn, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Vazirmatn, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
  etherButton: {
    background: `linear-gradient(to right,  ${etherColor} 20%,${etherColor2} 90%)`,
    padding: "6px 20px ",
    borderWidth: "0px",
    borderStyle: "solid",
    borderColor: "#627eea",
    borderRadius: "0.6rem",
    color: "#fff",
    fontWeight: "700",
  },
  bscButton: {
    background: `linear-gradient(to right,  ${bscColor} 20%,${bscColor2} 90%)`,
    padding: "6px 20px ",
    borderWidth: "0px",
    borderStyle: "solid",
    borderColor: "#f3ba2f",
    borderRadius: "0.5rem",
    color: "#fff",
    fontWeight: "700",
  },
  polygonButton: {
    background: `linear-gradient(to right,  ${polygonColor} 20%,${polygonColor2} 90%)`,
    padding: "6px 20px ",
    borderWidth: "0px",
    borderStyle: "solid",
    borderColor: "#8247e5",
    borderRadius: "0.6rem",
    color: "#fff",
    fontWeight: "700",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
              chain="eth"
              image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
              size="40px"
            />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/quickstart">
              <QuickStart isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <Tabs type="card" size="large" centered>
                <Tabs.TabPane
                  tab={<span style={styles.etherButton}>اتریوم</span>}
                  key="1"
                >
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={<span style={styles.bscButton}>بایننس اسمارت چین</span>}
                  key="2"
                >
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={<span style={styles.polygonButton}>پالیگان</span>}
                  key="3"
                >
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/mdparsi-ethereum-boilerplate">
              <Redirect to="/quickstart" />
            </Route>
            <Route path="/nonauthenticated">
              <>لطفاً با کلید روی دکمه "اعتبار سنجی" وارد شوید شوید</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text
          style={{
            display: "block",
            color: "#fff",
            lineHeight: "2em",
            fontSize: "14px",
          }}
        >
          <Text
            style={{
              fontWeight: "bolder",
              fontSize: "16px",
              paddingBottom: "3em",
              color: "#14b8f4",
            }}
            href="https://github.com/mdparsi/mdparsi-ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            قالب استارتر ری‌اکت اتریوم متریال دیزاین پارسی
          </Text>
          <br />
          هر امتیاز شما باعث دلگرمی و کمکی بزرگ است که ادامه ساخت و کار روی
          پروژه‌های رایگان و متن باز را،
          <br />
          برای من و دیگر برنامه نویسان میسر میسازد!
          <br />
          <a
            href="https://github.com/mdparsi/mdparsi-ethereum-boilerplate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐️ لطفا جهت امتیازدهی و حمایت از پروژه کلید کنید. {""}
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          🙋 جواب پرسشهای خود درباره کار با مورالس را در {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
          >
            فروم مورالس پیدا کنید
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 اطلاعات بیشتر در مورد{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mdparsi.site/web3/mdparsi-ethereum-boilerplate"
          >
            متریال دیزاین پارسی
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <img src={mdpLogo} alt="MDParsi" style={{ width: "60", height: "38" }} />
  </div>
);

export default App;
