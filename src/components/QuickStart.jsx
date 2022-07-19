import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>لیست کارهای لازم</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text delete style={styles.text}>
              پروژه را از آدرس زیر کلون یا فورک کنید{" "}
              <a
                href="https://github.com/soroushtech/mdparsi/mdpweb3#-quick-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                قالب استارتر ری‌اکت اتریوم متریال دیزاین پارسی
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete style={styles.text}>
              وابستگی ها را نصب کنید: <Text code>npm install</Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🧰">
            <Text delete={isServerInfo} style={styles.text}>
              ساختن یک حساب کاربری رایگان در{" "}
              <a
                href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=mdparsi-ethereum-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                مرالس
              </a>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💾">
            <Text delete={isServerInfo} style={styles.text}>
              یک سرور مرالس ایجاد کنید (
              <a
                href="https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                آموزش ساختن سرور مرالس
              </a>
              )
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔏">
            <Text delete={isServerInfo} style={styles.text}>
              فایل‌ <Text code>.env.example</Text> را به <Text code>.env</Text>
              تغییر نام دهید و <Text strong>شناسه </Text> و{" "}
              <Text strong>آدرس سرور </Text>{" "}
              <a
                href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=mdparsi-ethereum-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                مرالس{" "}
              </a>
              خود را در فایل جایگزین کنید{" "}
            </Text>
            <Text code delete={isServerInfo} style={{ display: "block" }}>
              REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
            </Text>
            <Text code delete={isServerInfo} style={{ display: "block" }}>
              REACT_APP_MORALIS_SERVER_URL =
              https://xxxxxx.grandmoralis.com:2053/server
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔁">
            <Text delete={isServerInfo} style={styles.text}>
              برنامه را متوقف کنید و دوباره آن را با دستور :{" "}
              <Text code>npm run start</Text> استارت کنید.
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete={isInchDex} style={styles.text}>
              برای کارایی کامل برنامه مولفه{" "}
              <a
                href="https://moralis.io/plugins/1inch/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=mdparsi-ethereum-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                یک اینچ مرالس
              </a>{" "}
              (اختیاری) کد زیر را به صفحه اصلی برنامه اضافه کنید.
            </Text>
            <br />
            <Text code>{"<InchDex />"}</Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>برنامه را تولید کنید!!!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>مقدمه راه اندازی زنجیره محلی (اختیاری)</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                از طریق کد زیر نصب{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/package/truffle"
                >
                  Truffle | ترافل
                </a>{" "}
                و{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/package/ganache-cli"
                >
                  ganache-cli | گاناش کلاینت
                </a>{" "}
                را انجام دهید.
                <br />
                <Text code>npm install -g ganache-cli truffle</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                توسعه زنجیره محلی خود را در پنجره ترمینال دیگری اجرا کنید
                <br />
              </Text>
              <Text code>npm run devchain</Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                اجرای اسمارت کانترکت آزمایشی با کد{" "}
                <Text code>npm run deploy</Text> در پنجره ترمینال دیگری
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                باز کردن زبانه <Text strong> کانترکت 📄</Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡{"  "}
              <Text strong> اتصال زنجیره محلی خود به دیتابیس مرالس</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                با دانلود{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fatedier/frp/releases"
                >
                  frpc
                </a>{" "}
                پارامترهای مورد نیاز در فایل <Text code>.env</Text> را پر کنید
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                دیتابیس مورالس و زنجیره محلی خود را به هم وصل کنید{" "}
                <Text code>npm run connect</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                مواردی که در کانترکت میخواهید رسد کنید را اضافه کنید{" "}
                <Text code>npm run watch:events</Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
