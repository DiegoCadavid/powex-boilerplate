import React, { useState } from "react";
import powexIcon from "../assets/powex-logo.png";
import { Count } from "../components/count";
interface Props {}

const SidePanel = ({}: Props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => ++c);
  };

  return (
    <div className=" bg-[#121212] min-h-screen text-zinc-100 p-8 pb-10">
      <img src={powexIcon} alt="power brand" className="w-8 h-8" />

      <h1 className="text-3xl font-semibold mt-3">Powex</h1>

      <ol className="list-decimal ml-4 mt-6 mb-8 ">
        <li className="text-sm  text-zinc-200">
          Get started by editing{" "}
          <span className="bg-zinc-800">app/side-panel.tsx</span>
        </li>
        <li className="text-sm mt-3 text-zinc-200">
          Save and see your changes instantly
        </li>
      </ol>

      <Count />
    </div>
  );
};

export default SidePanel;
