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
      <div className="navbar fixed bg-slate-900 top-0 left-0 w-full h-[60px] bg-[rgba(15,23,42,0.95)] backdrop-blur-[12px] z-[100] flex items-center px-10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-slate-400 no-underline text-base tracking-[0.01em] transition-all duration-300 ease-in-out relative cursor-pointer bg-transparent border-none font-medium"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold text-[#ffffff]">
            Clin
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-400 no-underline text-base font-medium tracking-[0.01em] transition-all duration-300 ease-in-out relative cursor-pointer bg-transparent border-none">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
