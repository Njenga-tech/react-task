// src/components/Card.jsx
export default function Card({ title, content, image, buttonText }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      {buttonText && (
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {buttonText}
        </button>
      )}
    </div>
  );
}
