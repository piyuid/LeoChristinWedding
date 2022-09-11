// remove tailwind css classes if you don't want to use them.
import React, { useState } from "react";

export default function Pickerbcachristin({ textToCopy = '6030286306' }) {
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
    <div className="text-center my-5 bg-blue-800 text-white font-bold">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          " text-sm border-2 w-70 border-white rounded p-2 transition"
        }
      >
        {copied ? "Copied" : "BCA | 6030286306 | Christin Putri Daly"}
      </button>
    </div>
  );
}
