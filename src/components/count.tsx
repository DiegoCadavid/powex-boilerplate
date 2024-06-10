import React, { useState } from "react";

interface Props {}

export const Count = ({}: Props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => ++c);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 h-9 rounded-full bg-zinc-100 text-zinc-800 text-sm font-medium">
      count {count}
    </button>
  );
};
