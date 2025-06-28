const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#feature">Our Solution</a>
      </li>
      <li>
        <a href="#inAction">In Action</a>
      </li>
      <li>
        <a href="#technology">Technology</a>
      </li>
      <li>
        <a href="#benefits">Benefits</a>
      </li>
      <li>
        <a href="#case-use">Case Use</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-slate-900/90">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900/90 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Clin</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
