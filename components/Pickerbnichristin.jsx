// remove tailwind css classes if you don't want to use them.
import React, { useState } from "react";

export default function Pickerbnichristin({ textToCopy = '0507296037' }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  const btnStyle = copied ? "bg-red-500 text-white" : "";

  return (
    <div className="text-center my-5 bg-orange-500 text-white font-bold">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          " text-sm border-2 w-70 border-white rounded p-2 transition"
        }
      >
        {copied ? "Copied" : "BNI | 0507296037 | Christin Putri Daly"}
      </button>
    </div>
  );
}
