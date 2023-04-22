import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white relative">
      <nav className="h-14 flex items-center sticky top-0 right-0">
        <ul className="flex space-x-10 px-8">
          <Link className="font-semibold" to="/">
            Home
          </Link>
          <Link className="font-semibold" to="/login">
            Login
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
