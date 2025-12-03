export default function Card({ title, subtitle }) {
    return (
      <div className="p-10 bg-white rounded-xl shadow text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <button className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
          Botón con tailwindcss
        </button>
        <br />  <br />
        <button>
          Botón con shadcn/ui
        </button>
      </div>
    );
  }