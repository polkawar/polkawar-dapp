import React, { Component } from "react";
import { CSVReader, CSVDownloader, jsonToCSV } from "react-papaparse";
import { Button } from "@material-ui/core";
import { toChecksumAddress } from "ethereum-checksum-address";
const buttonRef = React.createRef();

export default class CheckSum extends Component {
  constructor(props) {
    super(props);
    this.state = { inputData: [], outputData: [], errorAddress: [] };
  }
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (data) => {
    let finalData = data.map((singleData) => {
      return {
        address: singleData.data[0],
        amount: singleData.data[1],
      };
    });
    this.setState({ inputData: finalData });
    console.log(finalData);
  };

  handleOnError = (err, file, inputElem, reason) => {};

  handleOnRemoveFile = (data) => {};

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  getHoldings = async () => {
    let data = this.state.inputData;

    let newData = [];
    data.map((singleAddress, index) => {
      let checkSumAddress = this.getCheckSum(
        singleAddress["address"].toString()
      );
      console.log("index: " + index);
      if (checkSumAddress !== null && checkSumAddress !== undefined) {
        let tempObject = {
          checkSumAddress: checkSumAddress,
          amount: singleAddress["amount"],
        };
        newData = [...newData, tempObject];
      } else {
        this.setState({
          errorAddress: [...this.state.errorAddress, singleAddress["address"]],
        });
      }

      return 121;
    });
    this.setState({
      outputData: [...newData],
    });
    console.log("Printing before");
  };

  // getAddressHolding = async () => {
  //   let address = "0x9D7117a07fca9F22911dd5118A5FA4F448";
  //   let totalPBR = await checkPBRStakingAndHolding(address.toString());
  //   console.log(totalPBR);
  // };
  getCheckSum = (address) => {
    try {
      let newAddress = toChecksumAddress(address);
      return newAddress;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  render() {
    return (
      <div>
        {" "}
        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}
        >
          {({ file }) => (
            <aside
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
              }}
            >
              <button
                type="button"
                onClick={this.handleOpenDialog}
                style={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  width: "40%",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Browse file
              </button>
              <div
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#ccc",
                  height: 45,
                  lineHeight: 2.5,
                  marginTop: 5,
                  marginBottom: 5,
                  paddingLeft: 13,
                  paddingTop: 3,
                  width: "60%",
                }}
              >
                {file && file.name}
              </div>
              <button
                style={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                onClick={this.handleRemoveFile}
              >
                Remove
              </button>
            </aside>
          )}
        </CSVReader>
        <div className="text-center">
          {" "}
          <Button
            variant="contained"
            style={{ backgroundColor: "yellow" }}
            onClick={this.getHoldings}
          >
            Get Holding
          </Button>
        </div>
        <CSVDownloader
          filename={"corgib_airdrop"}
          config={{
            download: true,
          }}
          data={() => {
            return this.state.outputData.map((singleRow, index) => {
              let final = {
                No: index + 1,
                Address: singleRow.checkSumAddress,
                Amount: singleRow.amount,
              };
              console.log(final);
              return final;
            });
          }}
        >
          Download
        </CSVDownloader>
      </div>
    );
  }
}
