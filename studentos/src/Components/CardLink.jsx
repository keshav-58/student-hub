import { Link } from "react-router-dom";

export function CardLink({ item, To, children }) {
  return (
    <Link
      to={To}
      className="rounded-xl border py-6 px-5 
                    shadow-sm bg-white border-gray-200 
                    hover:border-blue-500 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1
                    active:scale-95  active:translate-y-1"
    >
      <span className="text-2xl mb-2 block">{item.icon}</span>
      <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
      <p className="mt-2 text-sm text-gray-500">{item.description}</p>
      {children}
    </Link>
  );
}
