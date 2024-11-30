// components/DraggableItem.tsx
import React from "react";
import { useDrag } from "react-dnd";

interface DraggableItemProps {
  name: string;
}

export const DraggableItem: React.FC<DraggableItemProps> = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 bg-blue-300 rounded cursor-pointer ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {name}
    </div>
  );
};
