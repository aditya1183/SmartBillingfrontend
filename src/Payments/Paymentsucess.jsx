import React from "react";
import { useSearchParams } from "react-router-dom";
function Paymentsucess() {
  const seachQuery = useSearchParams()[0];
  const referenceNum = seachQuery.get("reference");
  return (
    <div>
      <h1>Paymentsucess</h1>
      <h3>Reference No.{referenceNum}</h3>
    </div>
  );
}

export default Paymentsucess;
