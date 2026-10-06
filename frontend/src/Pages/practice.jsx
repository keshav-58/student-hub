import { useState } from "react";
export function DragGrid() {
  const [items, setItems] = useState([
    { id: 1, title: "Html" },
    { id: 2, title: "css" },
    { id: 3, title: "js" },
    { id: 4, title: "react" },
    { id: 5, title: "node" },
    { id: 6, title: "mongodb" },
  ]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (dropIndex) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;
    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];

    newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDraggedIndex(null);
  };
  const handleDragEnd = () => {
    setDraggedIndex(null);
  };
  return (
    <div className="min-h-screen bg-slate-100">
      <h2 className="text-4xl font-bold">DROP and DRAG</h2>
      <div className="flex gap-2 flex-cols max-w-7xl mx-auto">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`bg-white h-20 w-20 border rounded
                                ${draggedIndex === index ? "opacity-50" : ""}`}
              draggable
              onDragStart={() => {
                handleDragStart(index);
              }}
              onDragOver={handleDragOver}
              onDrop={() => {
                handleDrop(index);
              }}
              onDragEnd={handleDragEnd}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
