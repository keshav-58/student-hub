import { useState, useEffect } from "react";
import { DataCards } from "./DataCards";
import { ToDoCard } from "./ToDoCard.jsx";
import { Loader } from "../../Components/Loader.jsx";

export function ProgressCards() {
  const cardCss = `bg-white shadow-sm p-3 border border-4 rounded-4xl border-blue-200
        hover:border-blue-400 hover:scale-105`;
  
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 ">
        <ToDoCard />
      </div>
      
  );
}
