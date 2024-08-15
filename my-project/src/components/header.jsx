import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <h1>Blog Platform</h1>
        <Link to="/" className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
        <Link to="/createpost" className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ml-4'>Create Post</Link>
        <Link to="/signin" className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ml-4'>register</Link>
        <Link to="/signup" className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ml-4'>login</Link>
        <Link to="/profile" className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ml-4'>profile</Link>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
