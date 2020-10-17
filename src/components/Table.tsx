import React from "react";
import { HotTable } from "@handsontable/react";

export default function Table() {
  const [data, setData] = React.useState<any>([]);
  const [headers, setHeaders] = React.useState<any>([]);
  const [ticker, setTicker] = React.useState<string>("movi3");

  React.useEffect(() => {
    fetch(`./data/${ticker}.json`)
      .then((res) => res.json())
      .then((data) => {
        var dd: any[] = [];

        data.forEach((el: any) => {
          var keys = Object.keys(el);

          //setHeaders(keys);

          var d: any[] = [];

          keys.forEach((x) => {
            d.push(el[x]);
          });

          dd.push(d);
        });

        setData(dd);
      });
  });

  return (
    <div id="hot-app">
      <input onChange={(e: any) => setTicker(e.target.value)} />
      <HotTable
        data={data}
        colHeaders={true}
        rowHeaders={false}
        width="100%"
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
}
