import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          Block Explorer
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-300">
            Recent Blocks
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Whale Tracker
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;