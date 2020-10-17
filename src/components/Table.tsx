import React from "react";
import { HotTable } from "@handsontable/react";
import { Tickers } from "../api/agent";

export default function Table() {
  const [data, setData] = React.useState<any>([]);
  const [ticker, setTicker] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  React.useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      try {
        const result = await Tickers.get(ticker);
        var x = getData(result);

        setData(x);
        setErrorMessage("");
      } catch (e) {
        setErrorMessage("Not Found");
      }
    };

    fetchData();
  }, [ticker]);

  const getData = (jsonObj: any[]) => {
    return jsonObj.reduce((acc, cur) => {
      var current = Object.keys(cur).map((x) => cur[x]);

      return [...acc, current];
    }, []);
  };

  return (
    <div id="hot-app">
      <input onChange={(e: any) => setTicker(e.target.value)} />
      {errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        <HotTable
          data={data}
          colHeaders={true}
          rowHeaders={false}
          width="100%"
          licenseKey="non-commercial-and-evaluation"
        />
      )}
    </div>
  );
}
