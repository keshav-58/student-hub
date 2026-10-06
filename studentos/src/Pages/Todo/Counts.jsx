export function Counts({ tasks }) {
  let count = 0;
  tasks.forEach((item) => {
    if (item.completed === true) count++;
  });
  let total = tasks.length;

  return (
    <div className="flex flex-row-reverse max-w-4xl mx-auto gap-4 ">
      <div>
        <button
          className="w-8 h-8 rounded-full border border-2 border-red-600 bg-red-500 shadow-sm
                hover:bg-red-600 hover:border-red-400 hover:-translate-y-1 hover:shadow-md text-white
                "
        >
          {total - count}
        </button>
        <span className="p-2 font-semibold text-lg">Left</span>
      </div>
      <div>
        <button
          className="w-8 h-8 rounded-full border border-2 border-green-600 bg-green-500 shadow-sm
                hover:bg-green-600 hover:border-green-400 hover:-translate-y-1 hover:shadow-md text-white
                "
        >
          {count}
        </button>
        <span className="p-2 font-semibold text-lg">Completed</span>
      </div>
      <div>
        <button
          className="w-8 h-8 rounded-full border border-2 border-blue-600 bg-blue-500 shadow-sm
                hover:bg-blue-600 hover:border-blue-400 hover:-translate-y-1 hover:shadow-md text-white
                "
        >
          {total}
        </button>
        <span className="p-2 font-semibold text-lg">Total</span>
      </div>
    </div>
  );
}
