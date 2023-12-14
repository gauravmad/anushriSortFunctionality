/* import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {
  rowData,
  allItemNos,
  allJewelarytype,
  allbrand,
  allsize,
  alldetails,
  allparticulars,
  allmetal,
  allgrosswt,
  allstartprice,
  allremarks,
} from "../constants/Data";

const GridExample = () => {
  const [gridApi, setGridApi] = useState([]);
  const [itemNos, setItemNos] = useState([]);
  const [Jewelarytype, setJewelarytype] = useState([]);
  const [brand, setbrand] = useState([]);
  const [size, setsize] = useState([]);
  const [details, setdetails] = useState([]);
  const [particulars, setparticulars] = useState([]);
  const [metal, setmetal] = useState([]);
  const [grosswt, setgrosswt] = useState([]);
  const [startprice, setstartprice] = useState([]);
  const [remarks, setremarks] = useState([]);
  

  const  colDefs=[
    { field: 'Item Nos'},
    {field: 'Jewelarytype'},
    { field: 'BRAND'},
    { field: 'Size '},
    { field: 'Details'},
    {field: 'Particulars'},
    { field: 'Metal'},
    { field: 'Gross Wt.'},
    { field: 'Start Price in US $'},
    {field: 'Remarks'}
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
    animateRows: true,
  };

  const condition = (row) =>
    (!itemNos.length || itemNos.includes(row.itemNos)) &&
    (!Jewelarytype.length || Jewelarytype.includes(row.jewelarytype)) &&
    (!brand.length || brand.includes(row.brand)) &&
    (!size.length || size.includes(row.size)) &&
    (!details.length || details.includes(row.details)) &&
    (!particulars.length || particulars.includes(row.particulars)) &&
    (!metal.length || metal.includes(row.Metal)) &&
    (!startprice.length || startprice.includes(row.startprice)) &&
    (!remarks.length || remarks.includes(row.remarks)) ;

  return (
    <div className="bg-pink-900 min-h-[100vh] flex flex-col justify-center items-center gap-5">
      <div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">Item Nos</h1>
        <div className="flex gap-5">
          {allItemNos.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setItemNos([...itemNos, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">
          Sorting Nos
        </h1>
        <div className="flex gap-5">
          {Jewelarytype.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setJewelarytype([...Jewelarytype, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">brand</h1>
        <div className="flex gap-5">
          {allbrand.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setbrand([...brand, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">size</h1>
        <div className="flex gap-5">
          {allsize.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setsize([...size, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">particulars</h1>
        <div className="flex gap-5">
          {allparticulars.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setparticulars([...particulars, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">Details</h1>
        <div className="flex gap-5">
          {details.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setdetails([...details, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">Metal</h1>
        <div className="flex gap-5">
          {allmetal.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setmetal([...metal, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">
          startprice
        </h1>
        <div className="flex gap-5">
          {startprice.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setstartprice([...startprice, val])}
            >
              {val}
            </button>
          ))}
        </div>
        <h1 className="font-bold text-lg mb-2 mt-10 text-center">
          Remarks
        </h1>
        <div className="flex gap-5">
          {remarks.map((val) => (
            <button
              className="bg-white px-1"
              onClick={() => setremarks([...remarks, val])}
            >
              {val}
            </button>
          ))}
        </div>
       
      </div>
      <div className="ag-theme-quartz h-[50vh] w-[80vw]">
        <AgGridReact
          rowData={rowData.filter((row) => condition(row))}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onGridReady={({ api }) => setGridApi(api)}
        />
      </div>
      <button
        className="bg-white px-5 py-2 rounded-lg font-bold text-lg"
        onClick={() => gridApi.exportDataAsCsv()}
      >
        Export
      </button>
    </div>
  );
};

export default GridExample; */