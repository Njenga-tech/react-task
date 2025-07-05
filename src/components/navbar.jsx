import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

    <nav className="bg-gray-100 p-4 flex gap-4 shadow   flex justify-end space-x-4">
      <Link to="/" className="text-blue-600 font-medium">Home</Link>
      <Link to="/about" className="text-blue-600 font-medium">About</Link>
      <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
    </nav>
    
  );
}
