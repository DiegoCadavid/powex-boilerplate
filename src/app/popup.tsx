import React from "react";
import { Count } from "../components/count";
import powexIcon from "../assets/powex-logo.png";

interface Props {}

const Popup = ({}: Props) => {
  
  return (
    <div className="w-[280px] bg-[#121212] text-zinc-100 p-8 ">
      <img src={powexIcon} alt="power brand" className="w-8 h-8" />

      <h1 className="text-3xl font-semibold mt-3">Powex</h1>

      <ol className="list-decimal ml-4 mt-6 mb-7">
        <li className="text-sm text-zinc-200">
          Get started by editing{" "}
          <span className="bg-zinc-800">app/popup.tsx</span>
        </li>
        <li className="text-sm mt-3 text-zinc-200">
          Save and see your changes instantly
        </li>
      </ol>

      <Count />
    </div>
  );
};

export default Popup;
