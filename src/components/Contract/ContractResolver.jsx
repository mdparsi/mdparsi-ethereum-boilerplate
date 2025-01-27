/* eslint-disable react-hooks/exhaustive-deps */
import { InboxOutlined } from "@ant-design/icons";
import { message } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useEffect, useMemo } from "react";
import contractInfo from "contracts/contractInfo.json";

export default function ContractResolver({ contract, setContract }) {
  useEffect(() => {
    /** Tries to load local contract JSON file or get
     * it from browser localStorage(works only if file was uploaded previosly by drag&drop component) */
    if (contractInfo?.name) {
      setContract(contractInfo);
    } else if (window.localStorage.getItem("contract"))
      setContract(JSON.parse(window.localStorage.getItem("contract")));
    else
      message.error(
        "No contract found. Upload it manually or deploy the contract again",
      );
  }, [contractInfo]);

  // Props for drag and drop uploader
  const uploadProps = useMemo(() => {
    return {
      name: "file",
      accept: ".JSON",
      multiple: false,
      maxCount: 1,
      fileList: contract?.contractName
        ? [{ name: `${contract?.contractName}.json`, contract }]
        : [],
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
      },
      onRemove() {
        setContract();
        window.localStorage.removeItem("contract");
      },
      beforeUpload: (file) => {
        async function fileToJSON(file) {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (event) =>
              resolve(JSON.parse(event.target.result));
            fileReader.onerror = (error) => reject(error);
            fileReader.readAsText(file);
          });
        }
        fileToJSON(file).then((resolvedContract) => {
          window.localStorage.setItem(
            "contract",
            JSON.stringify(resolvedContract),
          );
          setContract(resolvedContract);
        });
        return false;
      },
    };
  }, [contract]);

  return (
    <Dragger {...uploadProps}>
      {!contract && (
        <>
          {" "}
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            برای بارگذاری ، پرونده قرارداد را به این منطقه کلیک یا بکشید
          </p>
          <p className="ant-upload-hint">
            از داده های قرارداد JSON تولید شده توسط Truffle | ترافل و Hardhat |
            هاردهت پشتیبانی می کند.json پرونده باید حاوی ABI ، آدرس و نام
            قرارداد باشد
          </p>
        </>
      )}
    </Dragger>
  );
}
