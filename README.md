# `mdparsi-ethereum-boilerplate`
>"قالب استارتر ری‌اکت اتریوم متریال دیزاین پارسی" با ارائه کامپوننت‌های جامع فارسی و راستچین به شما جهت ساخت برنامه های غیرمتمرکز( دپ )  با سرعت بالا و منعطف با کتابخانه ری‌اکت کمک میکند. در صورت تمایل میتوانید پروژه را فورک و در آن مشارکت کنید!بسازید و لذت ببرید! 👷‍♂️


> کامپوننت ها و هوک‌های فارسی و راستچین ری‌اکت برای ساختن سریع انواع برنامه غیرمتمرکز (Dapp)  بدون نیاز به کد نویسی بک اند
> Persian RTL React components and hooks for fast building dApps without running own backend

🚀DEMO: https://mdparsi.site/web3/mdparsi-ethereum-boilerplate

این استارتر به کمک [react-moralis](https://github.com/MoralisWeb3/react-moralis) و [Moralis](https://moralis.io?utm_source=github&utm_medium=readme&utm_campaign=ethereum-boilerplate) ساخته شده است. همچنین ارائه دهنده زمینه سازی برای دسترسی سریع به `chainId` یا `ethAddress`

در این استارتر بسیاری از مؤلفه ها وجود دارد که نیازی به ارائه دهنده فعال Web3 ندارند ، آنها از API Moralis Web3 استفاده می کنند.

مورالس از محبوب ترین بلاکچین‌ها و بلاکچین‌های آزمایشی آنها پشتیبانی می کند.

می توانید لیستی از بلاکچین‌های موجود را در اینجا پیدا کنید [بلاکچین‌های مورد پشتیبانی مورالس](https://docs.moralis.io/moralis-server/web3-sdk/intro#supported-chains)

لطفا برای دیدن همه ویژگی های مورالس [مستندات رسمی مورالس](https://docs.moralis.io/#user)  ... را چک کنید.

![daPPdemo](https://mdparsi.site/assets/mdpeth.gif)

# ⭐️ `به ما امتیاز دهید`

اگر این استارتر به شما در ساخت سریعتر برنامه های تحت بلاک چین کمک می کند - لطفا به این پروژه امتیاز دهید ، هر ستاره شما آسمانمان را روشنتر میکند!

# 🤝 `کمک لازم داری؟`

اگر در تنظیم استارتر یا سوالات دیگری به کمک نیاز دارید. با ما از طریق وبسایت تماس بگیرید


# 🚀 شروع سریع

📄 پروژه را از آدرس زیر کلون یا فورک کنید `mdparsi-ethereum-boilerplate`:

```sh
git clone https://github.com/mdparsi/mdparsi-ethereum-boilerplate.git
```

💿 همه وابستگی ها را نصب کنید:

```sh
cd mdparsi-ethereum-boilerplate
yarn install
```

✏  فایل `.env.example` را به `.env` تغییر نام دهید و شناسه `appId` و آدرس سرور `serverUrl` مورالس خود را وارد کنید ([چگونه سرور مورالس خود را راه‌اندازی کنید](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server))
مثال:

```jsx
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```

🚴‍♂️ برنامه خود را با دستور زیر اجرا کنید:

```sh
yarn start
```

# 🧭 فهرست مطالب

- [`mdparsi-ethereum-boilerplate`](#mdparsi-ethereum-boilerplate)
- [🚀 Quick Start](#-quick-start)
- [🧭 Table of contents](#-table-of-contents)
- [🏗 Ethereum Components](#-ethereum-components)
- - [`<Account />`](#account-)
  - [`<AddressInput />`](#addressinput-)
  - [`<Chains />`](#chains-)
  - [`<CoinPrice />`](#coinprice-)
  - [`<ERC20Balance />`](#erc20balance-)
  - [`<ERC20Transfers />`](#erc20transfers-)
  - [`<DEX />`](#dex-)
  - [`<Wallet />`](#wallet-)
  - [`<Blockie />`](#blockie-)
  - [`<NativeBalance />`](#nativebalance-)
  - [`<NFTBalance />`](#nftbalance)
  - [`<Contract />`](#contract-)
- [🧰 Ethereum Hooks](#-ethereum-hooks)
  - [`useAPIContract()`](#useapicontract)
  - [`useWeb3Contract()`](#useweb3contract)
  - [`useERC20Balance()`](#useerc20balance)
  - [`useERC20Transfers()`](#useerc20transfers)
  - [`useNativeBalance()`](#usenativebalance)
  - [`useNativeTransactions()`](#usenativetransactions)
  - [`useNFTBalances()`](#usenftbalances)
  - [`useNFTTransfers()`](#usenfttransfers)
  - [`useIPFS()`](#useipfs)
  - [`useChain()`](#usechain)
  - [`useTokenPrice()`](#usetokenprice)
  - [`DEX Hooks`](#dexhooks)
    - [`useOneInchQuote()`](#useoneinchquote)
    - [`useInchDex()`](#useinchdex)

# 🏗 اجزای اتریوم

🛠 کامپوننت‌های ری‌اکت برای استفاده در فایل `src/components` قرار گرفته‌اند. آنها به گونه ای طراحی شده اند که در هر نقطه از DAPP شما استفاده شوند.

> ⚡ توجه داشته باشید که بسیاری از مؤلفه ها ممکن است پارامترهایی داشته باشند مانند `chain`, `address`, `size` و غیره.

### `<Account />`

![Account](https://soroush.tech/img/mdparsi/ethbp/walletconnect.gif)

📒 `<Account />` : احراز هویت آسان web3 از طریق متامسک.

```jsx
<Account />
```

### `<Address />`

![address](https://soroush.tech/img/mdparsi/ethbp/account.gif)

📨 `<Address />` : آدرس اتریوم با [Blockie](https://www.npmjs.com/package/react-blockies) آواتار.

**گزینه ها**:

- copyable (اختیاری): نمایش آیکون برای کپی کردن.
- avatar (اختیاری): نمایش آیکون بلوک.
- size (اختیاری): اندازه متن

```jsx
<Address />
<Address avatar />
<Address avatar copyable />
<Address avatar copyable size="4"  />
```

### `<AddressInput />`

![input](https://user-images.githubusercontent.com/78314301/143021458-e3510069-c980-453f-8215-7943b4a0239b.gif)

📫 `<AddressInput />` : ورودی برای آدرس ETH.نمایش [Blockie](https://www.npmjs.com/package/react-blockies) آواتار برای کیف پول وارد شده.به اعتبارسنجی آدرس کمک می کند.پس از ورود 42 نویسه (0x... wallet length) یا دامنه انفتی معتبر ورودی و تماس ها را ثبت میکند `setValidatedAddress`.
دامنه های پشتیبانی شده: `[".eth", ".crypto", ".coin", ".wallet", ".bitcoin", ".x", ".888", ".nft", ".dao", ".blockchain"]`

**گزینه ها**:

- autoFocus (اختیاری): پس از ارائه مؤلفه ، شی را متمرکز می کند.
- placeholder (اختیاری): متن برای نمایش قبل از وارد کردن آدرس.
- onChange (ضروری): مشخص کردن setState hook.

```jsx
const [address, setAddress] = useState();

<AddressInput
  autoFocus
  placeholder="Input your Address"
  onChange={setAddress}
/>;
```

### `<Chains />`

![network](https://soroush.tech/img/mdparsi/ethbp/chains.gif)

⛓ `<Chains />` :تغییر بلاکچین.از بلاکچین های اتریوم ، پالیگان ، بایننس اسمارت چین و آوالانچ پشتیبانی می کند.فقط با بلاکچین‌هایی که قبلاً به کیف پول اضافه شده اند ، کار می کند.راهنمای اضافه کردن بلاکچین جدید(https://docs.moralis.io/moralis-server/web3/web3#addnetwork). به راحتی قابل تنظیم است ، می توانید بلاکچین های دیگر را اضافه کنید

**گزینه ها**:

- Chains (اختیاری): بلاکچین‌هایی که برای نمایش.به طور پیش فرض اضافه شده است: Polygon ، ETH ، BSC و Avalanch

```jsx
<Chains polygon eth bsc avalanche />
```

### `<CoinPrice />`

![price](https://soroush.tech/img/mdparsi/ethbp/coinp.gif)

💵 `<CoinPrice />` : ارزش توکن مشخص شده در تنظیمات را نشان می دهد.از Moralis Web3API استفاده می کند (به ارائه دهنده فعال Web3 احتیاج ندارد).

**گزینه ها**:

- address (لازم): آدرس قرارداد توکن
- chain (اختیاری): بلاکچینی که توکن برروی آن ساخته شده است.پیش فرض: ETH
- image (اختیاری): مسیر محلی یا لینک به لوگو توکن
- size (اختیاری): اندازه لوگو

```jsx
<CoinPrice address="0x1...3" chain="eth" image="https://img.png" size="40px" />
```

### `<ERC20Balance />`

![image](https://soroush.tech/img/mdparsi/ethbp/balance.gif)

💰 `<ERC20Balance />` : موجودی یک آدرس ERC20 را نشان می دهد.از Moralis Web3API استفاده می کند (به ارائه دهنده فعال وب 3 نیاز ندارد).

**گزینه ها**:

- chain (اختیاری): پارامتر بلاکچین برای نمایش موجودی.اگر خودتان بلاکچین را مشخص نکنید ، از بلاکچین کیف پول وصل شده به مرورگر استفاده خواهید کرد

```jsx
<ERC20Balance chain="polygon" />
```

### `<ERC20Transfers />`

![image](https://soroush.tech/img/mdparsi/ethbp/tara.png)

💸 `<ERC20Transfers />` : نقل و انتقالات ERC20 یک آدرس را نشان می دهد.از moralis web3api استفاده می کند (به ارائه دهنده فعال وب 3 نیاز ندارد).

**گزینه ها**:

- chain (اختیاری): بلاکچین برای نمایش نقل و انتقالات.اگر خودتان بلاکچین را مشخص نکنید ، از بلاکچین کیف پول وصل شده به مرورگر استفاده خواهید کرد

```jsx
<ERC20Transfers chain="polygon" />
```

### `<DEX />`

![dex](https://soroush.tech/img/mdparsi/ethbp/dex.gif)

💱 `<DEX />` : رابط برای اتصال [افزونه مورالس 1 اینچ](https://moralis.io/plugins/1inch?utm_source=github&utm_medium=readme&utm_campaign=ethereum-boilerplate). این افزونه DeFi / DEX Aggregator 1Inch را با هر پروژه ای که از مورالس استفاده می کند یکپارچه می کند.

**گزینه ها**:

- chain (اختیاری): بلاکچین‌های موجود: اتریوم ("eth")، بایننس اسمارت چین ("bsc")، پالیگان ("polygon")
- customTokens("customToken") (اختیاری): مورد توکن سفارشی. نمونه زیر را می توانید ببینید.

```jsx
<DEX chain="eth" />
```

```jsx
// اضافه کردن توکن سقارشی

const customTokens = {
  "0x2180F5cC1ddf117640963AE91868948bd3EF6838": {
    address: "0x2180F5cC1ddf117640963AE91868948bd3EF6838",
    decimals: 9,
    logoURI:
      "https://assets.coingecko.com/coins/images/20985/small/_VoQPDDs_400x400.jpg?1638168643",
    name: "AscensionArcade",
    symbol: "AAT",
  },
};

<DEX chain="eth" customTokens={customTokens} />;
```

### `<Wallet />`

![wallet](https://soroush.tech/img/mdparsi/ethbp/walletex.gif)

💼 `<Wallet />` : نمونه اتصال برای تعامل با کیف پول.از اجزای موجود در استارتر استفاده می کند: `<Blockie />`, `<Address />`, `<NativeBalance />`, `<AddressInput />`. قابلیت ارسال توکن‌ها را دارد

```jsx
<Wallet />
```

### `<Blockie />`

### `<NativeBalance />`

### `<NFTBalance />`

### `<Contract />`

# 🧰 هوک‌های اتریوم

### `useAPIContract()`

📋 قرارداد ABI داده شده را انجام می دهد و آنرا به صورت غیر قابل تغییر نمایش میدهد. از Web3API مورالس استفاده می کند (به ارائه دهنده Web3 فعال نیاز ندارد).

**گزینه ها**:

- `chain` (اختیاری): بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض اتریوم("Eth").
- `functionName` (ضروری): نام تابع
- `address` (ضروری): یک آدرس قرارداد هوشمند
- `abi` (ضروری): قرارداد یا عملکرد ABI (باید به عنوان آرایه ارائه شود)
- `params` (اختیاری): پارامترهای مورد نیاز برای عملکرد خاص شما

**نمونه**:

```jsx
import { useAPIContract } from "react-moralis"

const ShowUniswapObserveValues = () => {
  const { runContractFunction, data, error, isLoading, isFetching } = useAPIContract({
    abi: usdcEthPoolAbi,
    address: usdcEthPoolAddress,
    functionName: "observe",
    params: {
      secondsAgos: [0, 10],
    },
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => runContractFunction()} disabled={isLoading}>اعمال مقادیر</button>
    {contractResponse && JSON.stringify(contractResponse)}
    </pre>}
  </div>)
}
```

### `useWeb3Contract()`

📋 عملکردهای زنجیره ای را اجرا می کند.به ارائه دهنده فعال وب 3 نیاز دارد.

**گزینه ها**:

- `chain` (اختیاری): بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض ETH.
- `functionName` (ضروری): نام تابع
- `contractAddress` (ضروری): یک آدرس قرارداد هوشمند
- `abi` (ضروری): قرارداد یا عملکرد ABI (باید به عنوان آرایه ارائه شود)
- `params` (اختیاری): پارامترهای مورد نیاز برای عملکرد خاص شما

**نمونه**:

```jsx
import { useWeb3Contract } from "react-moralis"

const ShowUniswapObserveValues = () => {
  const { runContractFunction, contractResponse, error, isRunning, isLoading } = useWeb3Contract({
    abi: usdcEthPoolAbi,
    contractAddress: usdcEthPoolAddress,
    functionName: "observe",
    params: {
      secondsAgos: [0, 10],
    },
  });

  return (<div>
    {error && <ErrorMessage error={error} />}
    <button onClick={() => runContractFunction()} disabled={isLoading}>Fetch data واکشی دیتا </button>
    {contractResponse && JSON.stringify(contractResponse)}
    </pre>}
  </div>)
}
```

### `useERC20Balances()`

💰 موجودی کلی توکن کاربر فعلی یا آدرس داده شده را دریافت و نمایش میدهد.

**گزینه ها**:

- `chain` (اختیاری): بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض: زنجیره فعلی.
- `address` (اختیاری):آدرس کاربر(i.e. 0x1a2b3x...).در صورت مشخص کردن ، کاربر متصل به سرور نادیده گرفته می شود و به جای آن از آدرس استفاده می شود.
- `to_block` (اختیاری): شماره بلوکی که میخواهید بررسی شود

**نمونه**

```jsx
import { useERC20Balances } from "react-moralis";

const { fetchERC20Balances, data, isLoading, isFetching, error } =
  useERC20Balances();

const ERC20Balances = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetchERC20Balances({ params: { chain: "0x1" } })}>
        اجرای دستور
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**یک نمونه** (شئ)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "name": "Kylin Network",
      "symbol": "KYL",
      "logo": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
      "thumbnail": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png",
      "decimals": "18",
      "balance": "123456789"
    }
  ]
}
```

### `useERC20Transfers()`

🧾 سوابق انتقال توکن ERC20 کاربر فعلی یا آدرس مشخص شده را دریافت می کند.

**گزینه ها**:

- `chain` (اختیاری): زنجیره بلوکی که باید بررسی شود. موارد در قسمت مقدمه در قسمت معاملات و مانده ها ذکر شده است. مقدار پیش فرض: زنجیره فعلی.
- `address` (اختیاری):آدرس کاربر(i.e. 0x1a2b3x...).در صورت مشخص کردن ، کاربر متصل به سرور نادیده گرفته می شود و به جای آن از آدرس استفاده می شود.
- `from_date` (اختیاری):تاریخ از کجا می توان معاملات را دریافت کرد (هر فرمی که توسط MomentJS پذیرفته شود).اگر از "from_date" استفاده کنید ، اگر از "از_دیت" و "از_بلاک" تهیه شده ، از_بلوک استفاده می شود.
- `to_date` (اختیاری): معاملات را تا این تاریخ دریافت کنید (هر فرمی که توسط MomentJS پذیرفته شود).اگر "to_date" و "to_block" ارائه شود ، از "to_date" استفاده می شود ، از "to_block" استفاده می شود.
- `from_block` (اختیاری): حداقل شماره بلوک از کجا می توان معاملات را دریافت کرد ، از param "from_block" یا "from_date" در صورت ارائه "from_date" و "from_block" استفاده می شود ، "از_Block" استفاده می شود.
- `to_block` (اختیاری): حداکثر تعداد بلوک از کجا می توان معاملات را دریافت کرد.اگر "to_date" و "to_block" ارائه شود ، از "to_date" استفاده می شود ، از "to_block" استفاده می شود.
- `offset` (اختیاری): جابجا سازی.
- `limit` (اختیاری): حدود.

**نمونه**

```jsx
import { useERC20Transfers } from "react-moralis";

const { fetchERC20Transfers, data, error, isLoading, isFetching } =
  useERC20Transfers();

const ERC20Transfers = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetchERC20Transfers({ params: { chain: "0x1" } })}>
        اجرای دستور
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**یک نمونه** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "transaction_hash": "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09",
      "address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "block_number": "12526958",
      "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86",
      "to_address": "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044",
      "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
      "value": "650000000000000000"
    }
  ]
}
```

### `useNativeBalance()`

💰 موجودی آدرس متصل شده(بومی) را برای کاربر فعلی یا آدرس مشخص شده دریافت می‌کند.

**گزینه ها**:

- `chain` (اختیاری): بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض: زنجیره فعلی.
- `address` (اختیاری):آدرس کاربر(i.e. 0x1a2b3x...).در صورت مشخص کردن ، کاربر متصل به سرور نادیده گرفته می شود و به جای آن از آدرس استفاده می شود.
- `to_block` (اختیاری): شماره بلوکی که میخواهید بررسی شود

**نمونه**:

```jsx
import { useNativeBalance } from "react-moralis";

function NativeBalance() {
  const {
    getBalance,
    data: balance,
    nativeToken,
    error,
    isLoading,
  } = useNativeBalance({ chain: "ropsten" });

  return <div>{balance.formatted}</div>;
}
```

**مثال نمایش موجودی** (Object)

```jsx
{
  balance: '996869309795359886',
  formatted: '0.9969 ROP'
}
```

**به نمونه نمایش Nativetoken** (Object)

```jsx
{
  name: 'Ropsten Ether',
  symbol: 'ROP',
  decimals: 18
}
```

### `useNativeTransactions()`

🧾 تراکنش ها را از کاربر فعلی یا آدرس مشخص شده دریافت می کند. یک آبجکت با تعداد تراکنش ها و آرایه تراکنش های بومی برمی گرداند

**گزینه ها**:

- `chain` (اختیاری): بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض: زنجیره فعلی.
- `address` (اختیاری):آدرس کاربر(i.e. 0x1a2b3x...).در صورت مشخص کردن ، کاربر متصل به سرور نادیده گرفته می شود و به جای آن از آدرس استفاده می شود.
- `from_date` (اختیاری): تاریخ از کجا می توان معاملات را دریافت کرد (هر فرمی که توسط MomentJS پذیرفته شود).اگر از "from_date" استفاده کنید ، اگر از "از_دیت" و "از_بلاک" تهیه شده ، از_بلوک استفاده می شود.
- `to_date` (اختیاری): معاملات را تا این تاریخ دریافت کنید (هر فرمی که توسط MomentJS پذیرفته شود).اگر "to_date" و "to_block" ارائه شود ، از "to_date" استفاده می شود ، از "to_block" استفاده می شود.
- `from_block` (اختیاری): حداقل شماره بلوک از کجا می توان معاملات را دریافت کرد ، از param "from_block" یا "from_date" در صورت ارائه "from_date" و "from_block" استفاده می شود ، "از_Block" استفاده می شود.
- `to_block` (اختیاری):حداکثر تعداد بلوک از کجا می توان معاملات را دریافت کرد.اگر "to_date" و "to_block" ارائه شود ، از "to_date" استفاده می شود ، از "to_block" استفاده می شود.
- `offset` (اختیاری): Offset.
- `limit` (اختیاری): Limit.

**نمونه**

```jsx
import { useNativeTransactions } from "react-moralis";

const { getNativeTransations, data, chainId, error, isLoading, isFetching } =
  useNativeTransactions();

const NativeTransactions = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
        onClick={() => getNativeTransations({ params: { chain: "0x1" } })}
      >
        اجرای دستور
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**نمونه نمایش تراکنش‌ها** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "hash": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "nonce": "326595425",
      "transaction_index": "25",
      "from_address": "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
      "to_address": "0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef",
      "value": "650000000000000000",
      "gas": "6721975",
      "gas_price": "20000000000",
      "input": "string",
      "receipt_cumulative_gas_used": "1340925",
      "receipt_gas_used": "1340925",
      "receipt_contract_address": "0x1d6a4cf64b52f6c73f201839aded7379ce58059c",
      "receipt_root": "string",
      "receipt_status": "1",
      "block_timestamp": "2021-04-02T10:07:54.000Z",
      "block_number": "12526958",
      "block_hash": "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"
    }
  ]
}
```

### `useNFTBalances()`

🎨 همه انفتی‌های کاربر یا آدرس فعلی را دریافت و نمایش میدهد. از ERC721 و ERC1155 پشتیبانی می کند.تعداد انفتی‌ها را برمیگرداند و آنها را به صورت گروهی نمایش میدهد.

**گزینه ها**:

- `chain` (اختیاری): بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض: زنجیره فعلی (اگر زنجیره ای پشتیبانی نشود ، از زنجیره ETH استفاده می کند).
- `address` (اختیاری):آدرس کاربر(i.e. 0x1a2b3x...).در صورت مشخص کردن ، کاربر متصل به سرور نادیده گرفته می شود و به جای آن از آدرس استفاده می شود.

**نمونه**

```jsx
import { useNFTBalances } from "react-moralis";

const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

const NFTBalances = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => getNFTBalances({ params: { chain: "0x1" } })}>
        نمایش انفتی‌ها
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**نمونه نمایش لیست انفتی‌ها** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "token_id": "15",
      "contract_type": "ERC721",
      "owner_of": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "block_number": "88256",
      "block_number_minted": "88256",
      "token_uri": "string",
      "metadata": "string",
      "synced_at": "string",
      "amount": "1",
      "name": "CryptoKitties",
      "symbol": "RARI"
    }
  ]
}
```

### `useNFTTransfers()`

🎨 سوابق نقل و انتقالات انفتی داده شده را دریافت به صورت آرایه ای متشکل از تعداد و مقادیر انتقالات برمیگرداند 

**گزینه ها**:

- `chain` (اختیاری):بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض: زنجیره فعلی (اگر زنجیره ای پشتیبانی نشود ، از زنجیره ETH استفاده می کند).
- `address` (اختیاری):آدرس کاربر(i.e. 0x1a2b3x...).در صورت مشخص کردن ، کاربر متصل به سرور نادیده گرفته می شود و به جای آن از آدرس استفاده می شود.
- `offset` (اختیاری): Offset.
- `direction` (اختیاری): جهت انتقال مقادیر موجود: هر دو ، از.مقدار پیش فرض : both.
- `format` (اختیاری): قالب شناسه توکن را دارد.مقادیر موجود: اعشاری ، هگز. واحد پیش فرض : decimal.
- `limit` (اختیاری): بیشترین مقدار.

**نمونه**

```jsx
import { useNFTTransfers } from "react-moralis";

const { fetch, data, error, isLoading, isFetching } = useNFTTransfers();

const NFTTransfers = () => {
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => fetch({ params: { chain: "0x1" } })}>
        اجرای دستور
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**نمونه** (Object)

```json
{
  "total": 1,
  "page": 0,
  "page_size": 500,
  "result": [
    {
      "token_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "token_id": "15",
      "from_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "to_address": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "amount": "1",
      "contract_type": "ERC721",
      "block_number": "88256",
      "block_timestamp": "2021-06-04T16:00:15",
      "block_hash": "string",
      "transaction_hash": "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
      "transaction_type": "string",
      "transaction_index": "string",
      "log_index": 0
    }
  ]
}
```

### `useChain()`

⛓ برای تغییر سریع بلاکچین یا دریافت اطلاعات در مورد بلاکچین فعلی میتوانید از این هوک استفاده کنید. برای تغییر بلاکچین فعلی، chainId هدف را روی تابع «switchNetwork» تنظیم کنید. اگر کاربر بلاکچین هدف را در کیف پول نداشته باشد، به طور خودکار درخواست اضافه کردن آن را به کیف پول می‌فرستد.

**نمونه**:

```jsx
import { useChain } from "react-moralis";

function Chains() {
  const { switchNetwork, chainId, chain, account } = useChain();
  return (
    <>
      <button onClick={() => switchNetwork("0x1")}>تغییر به اتریوم</button>
      <p>زنجیره فعلی: {chainId}</p>
    </>
  );
}
```

### `useTokenPrice()`

💰 ارزش قیمت توکن داده شده یا توکن داخلی را به دلار نمایش میدهد

**گزینه ها**:

- `chain` (اختیاری): بلاکچینی که میخواهید بررسی شود.مقادیر معتبر در بخش مقدمه در بخش معاملات و مانده ها ذکر شده است.مقدار پیش فرض: زنجیره برای دریافت اطلاعات.
- `address` (اختیاری):آدرس کاربر(i.e. 0x1a2b3x...).در صورت مشخص کردن ، کاربر متصل به سرور نادیده گرفته می شود و به جای آن از آدرس استفاده می شود.
- `exchange` (اختیاری): نام مبدل یا آدرس صرافی توکن. تبادلات احتمالی برای زنجیره‌های مختلف عبارتند از: شبکه اصلی ("ETH") اتریوم: «uniswap-v3»، «sushiswap»، «uniswap-v2»، شبکه اصلی بایننس اسمارت چین "(BSC)": «pancakeswap-v2»، «pancakeswap-v1». شبکه اصلی پالیگان ("Polygon") : «quickswap». _اگر صرافی مشخص نشده باشد، تمام صرافی ها (به ترتیب ذکر شده در بالا) بررسی می شوند تا زمانی که یک Pool معتبر پیدا شود. توجه داشته باشید که این درخواست زمان بیشتری می برد. بنابراین مشخص کردن مبادله در اکثر مواقع منجر به پاسخ‌های سریع‌تر می‌شود._
- `to_block` (اختیاری): قیمت بلاک مشخص شده را برمیگرداند سوابق قیمت در زمان ضرب بلاک : (historical price-data).

**نمونه**

```jsx
import { useTokenPrice } from "react-moralis";

const TokenPrice = () => {
  const {
    fetchTokenPrice,
    data: formattedData,
    error,
    isLoading,
    isFetching,
  } = useTokenPrice({ address: "0x1f9840...1f984", chain: "eth" });

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button
        onClick={() =>
          fetchTokenPrice({ params: { address: "0x6...361", chain: "bsc" } })
        }
      >
        اجرای دستور
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

**نمونه نمایش قیمت** (Object)

```json
{
  "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
  "exchangeName": "Uniswap v3",
  "formattedNative": "0.004695 ETH",
  "formattedUsd": "$20.38",
  "nativePrice": {
    "decimals": 18,
    "name": "Ether",
    "symbol": "ETH",
    "value": "4695118425598734"
  },
  "usdPrice": 20.37791922835578
}
```

### `DEX Hooks`

### `useOneInchQuote()`

💸 هوک برای دریافت اطلاعات مبادله.

**نمونه**:

```jsx
import { useOneInchQuote } from "react-moralis";

function Quote() {
  const { getQuote, data, isFetching, isLoading, error } = useOneInchQuote({
    chain: "bsc", // بلاکچینی که می خواهید استفاده کنید (ETH/BSC/Polygon)
    fromTokenAddress: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4", // رمزارزی که می خواهید مبادله کنید
    toTokenAddress: "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", // رمزارزی که می خواهید دریافت کنید
    amount: 1000,
  });
  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### `useOneInchQuote()`

💸 هوک برای مبادله

**نمونه**:

```jsx
import { useOneInchQuote } from "react-moralis";

function Swap() {
  const { swap, data, isFetching, isLoading, error } = useOneInchSwap();

  const options = {
    chain: "bsc", // بلاکچینی که می خواهید استفاده کنید (ETH/BSC/Polygon)
    fromTokenAddress: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4", // رمزارزی که می خواهید مبادله کنید
    toTokenAddress: "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4", // رمزارزی که می خواهید دریافت کنید
    amount: 1000,
    fromAddress: "0x6217e65d864d77DEcbFF0CFeFA13A93f7C1dD064", // آدرس کیف پول شما
    slippage: 1,
  };

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => swap(options)}>مبادله</button>
    </div>
  );
}
```

### `useOneInchTokens()`

💸 هوک برای دریافت لیست مورد قبول برای مبادله

**نمونه**:

```jsx
import { useOneInchQuote } from "react-moralis";

const SupportedTokens = () => {
  const { getSupportedTokens, data, isFetching, isLoading, error } =
    useOneInchTokens({ chain: "bsc" });

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```
