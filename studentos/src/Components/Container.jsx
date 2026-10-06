export function Container({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto p-6 mb-8">{children}</div>
    </div>
  );
}
