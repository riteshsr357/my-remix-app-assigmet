// components/Sidebar.tsx
import React from "react";
import { DraggableItem } from "./DraggableItem";

export const Sidebar = () => {
  const items = [
    "Progress Bar",
    "Question Number",
    "Timer",
    "Question Text",
    "Image",
    "Option A",
    "Option B",
    "Option C",
    "Option D",
  ];

  return (
    <div className="w-64 bg-gray-200 p-4">
      {items.map((item, index) => (
        <DraggableItem key={index} name={item} />
      ))}
    </div>
  );
};
