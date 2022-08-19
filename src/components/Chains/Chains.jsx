import { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";
import { useChain, useMoralis } from "react-moralis";

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    height: "36px",
    fontWeight: "500",
    fontFamily: "Vazirmatn, sans-serif",
    fontSize: "12px",
    padding: "0 5px",
  },
  button: {
    border: "1px solid #13e6bc",
    // background: "#13132b",
    background: "#fff",
    borderRadius: "8px",
    color: "#6495ed",
    fontSize: "12px",
  },
};

const menuItems = [
  {
    key: "0x1",
    value: "اتریوم",
    icon: <ETHLogo />,
  },
  {
    key: "0x539",
    value: "بلاکچین خصوصی",
    icon: <ETHLogo />,
  },
  {
    key: "0x3",
    value: "تست نت رپستن",
    icon: <ETHLogo />,
  },
  {
    key: "0x4",
    value: "تست نت رینکبی",
    icon: <ETHLogo />,
  },
  {
    key: "0x2a",
    value: "تست نت کووان",
    icon: <ETHLogo />,
  },
  {
    key: "0x5",
    value: "تست نت گلوری",
    icon: <ETHLogo />,
  },
  {
    key: "0x38",
    value: "بایننس",
    icon: <BSCLogo />,
  },
  {
    key: "0x61",
    value: "تست نت بایننس",
    icon: <BSCLogo />,
  },
  {
    key: "0x89",
    value: "پالیگان",
    icon: <PolygonLogo />,
  },
  {
    key: "0x13881",
    value: "بمبئی",
    icon: <PolygonLogo />,
  },
  {
    key: "0xa86a",
    value: "آوالانچ",
    icon: <AvaxLogo />,
  },
  {
    key: "0xa869",
    value: "تست نت آوالانچ",
    icon: <AvaxLogo />,
  },
];

function Chains() {
  const { switchNetwork, chainId, chain } = useChain();
  const { isAuthenticated } = useMoralis();
  const [selected, setSelected] = useState({});

  console.log("بلاکچین", chain);

  useEffect(() => {
    if (!chainId) return null;
    const newSelected = menuItems.find((item) => item.key === chainId);
    setSelected(newSelected);
    console.log("بلاکچین", chainId);
  }, [chainId]);

  const handleMenuClick = (e) => {
    console.log("تغییر : ", e.key);
    switchNetwork(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} style={styles.item}>
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>
            {item.value}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );

  if (!chainId || !isAuthenticated) return null;

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button
          key={selected?.key}
          icon={selected?.icon}
          style={{ ...styles.button, ...styles.item }}
        >
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>
            {selected?.value}
          </span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Chains;
