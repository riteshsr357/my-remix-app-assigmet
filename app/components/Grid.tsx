// components/Grid.tsx
import React, { useState } from "react";
import { useDrop } from "react-dnd";

const gridItems = [
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

interface GridItem {
  id: string;
  name: string;
  x: number;
  y: number;
}

export const Grid = () => {
  const [items, setItems] = useState<GridItem[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: GridItem, monitor) => {
      const delta = monitor.getClientOffset();
      setItems((prev) => [...prev, { ...item, x: delta.x, y: delta.y }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="grid grid-cols-4 gap-4 bg-gray-100 p-4 min-h-screen"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 bg-blue-500 text-white rounded"
          style={{ position: "absolute", top: item.y, left: item.x }}
        >
          {item.name}
        </div>
      ))}
      {isOver && <div className="absolute bg-green-500 opacity-50 w-full h-full"></div>}
    </div>
  );
};
