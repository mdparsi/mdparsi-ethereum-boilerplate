import { Card, Form, notification } from "antd";
import { useMemo, useState } from "react";
import Address from "components/Address/Address";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import ContractMethods from "./ContractMethods";
import ContractResolver from "./ContractResolver";

export default function Contract() {
  const { Moralis, chainId } = useMoralis();
  const [responses, setResponses] = useState({});
  const [contract, setContract] = useState();

  /**Moralis Live query for displaying contract's events*/
  const { data } = useMoralisQuery("Events", (query) => query, [], {
    live: true,
  });

  /** Automatically builds write and read components for interacting with contract*/
  const displayedContractFunctions = useMemo(() => {
    if (!contract?.abi) return [];
    return contract.abi.filter((method) => method["type"] === "function");
  }, [contract]);

  /** Returns true in case if contract is deployed to active chain in wallet */
  const isDeployedToActiveChain = useMemo(() => {
    if (!contract?.networks) return undefined;
    return [parseInt(chainId, 16)] in contract.networks;
  }, [contract, chainId]);

  const contractAddress = useMemo(() => {
    if (!isDeployedToActiveChain) return null;
    return contract.networks[parseInt(chainId, 16)]?.["address"] || null;
  }, [chainId, contract, isDeployedToActiveChain]);

  /** Default function for showing notifications*/
  const openNotification = ({ message, description }) => {
    notification.open({
      placement: "bottomRight",
      message,
      description,
    });
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        gap: "20px",
        marginTop: "25",
        width: "70vw",
      }}
    >
      <Card
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            قرارداد هوشمند شما: {contract?.contractName}
            <Address
              avatar="left"
              copyable
              address={contractAddress}
              size={8}
            />
          </div>
        }
        size="large"
        style={{
          width: "60%",
          boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
          border: "1px solid #e7eaf3",
          borderRadius: "0.5rem",
        }}
      >
        <ContractResolver setContract={setContract} contract={contract} />

        {isDeployedToActiveChain === true && (
          <Form.Provider
            onFormFinish={async (name, { forms }) => {
              const params = forms[name].getFieldsValue();

              let isView = false;
              /*eslint no-unsafe-optional-chaining: "error"*/
              // eslint-disable-next-line no-unsafe-optional-chaining
              for (let method of contract?.abi) {
                if (method.name !== name) continue;
                console.log(method);
                if (method.stateMutability === "view") isView = true;
              }

              const options = {
                contractAddress,
                functionName: name,
                abi: contract?.abi,
                params,
              };

              if (!isView) {
                const tx = await Moralis.executeFunction({
                  awaitReceipt: false,
                  ...options,
                });
                tx.on("transactionHash", (hash) => {
                  setResponses({
                    ...responses,
                    [name]: { result: null, isLoading: true },
                  });
                  openNotification({
                    message: "🔊 معامله جدید",
                    description: `${hash}`,
                  });
                  console.log("🔊 معامله جدید ", hash);
                })
                  .on("receipt", (receipt) => {
                    setResponses({
                      ...responses,
                      [name]: { result: null, isLoading: false },
                    });
                    openNotification({
                      message: "📃 رسید جدید",
                      description: `${receipt.transactionHash}`,
                    });
                    console.log("🔊 رسید جدید: ", receipt);
                  })
                  .on("error", (error) => {
                    console.error(error);
                  });
              } else {
                console.log("options22", options);
                Moralis.executeFunction(options).then((response) =>
                  setResponses({
                    ...responses,
                    [name]: { result: response, isLoading: false },
                  }),
                );
              }
            }}
          >
            <ContractMethods
              displayedContractFunctions={displayedContractFunctions}
              responses={responses}
            />
          </Form.Provider>
        )}
        {isDeployedToActiveChain === false && (
          <>{`کانترکت در زنجیره صحیح خود نیست ${chainId} زنجیره فعال خود را تغییر دهید یا بعداً دوباره امتحان کنید.`}</>
        )}
      </Card>
      <Card
        title={"سوابق کانترکت"}
        size="large"
        style={{
          width: "40%",
          boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
          border: "1px solid #e7eaf3",
          borderRadius: "0.5rem",
        }}
      >
        {data.map((event, key) => (
          <Card
            title={"سوابق انتقال"}
            size="small"
            style={{ marginBottom: "20px" }}
            key={key}
          >
            {getEllipsisTxt(event.attributes.transaction_hash, 14)}
          </Card>
        ))}
      </Card>
    </div>
  );
}
