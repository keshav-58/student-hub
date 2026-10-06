export function Input({ answer }) {
  return (
    <div className="flex items-center justify-center mb-4">
      <input
        readOnly
        placeholder="2+2=4"
        value={answer}
        type="text"
        className="bg-slate-900 text-white rounded-2xl border border-slate-700 w-full h-20 sm:h-24 px-6 
        outline-none text-2xl sm:text-3xl text-right"
      />
    </div>
  );
}
