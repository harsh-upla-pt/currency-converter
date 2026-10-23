import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
  <header className=" bg-[#355550] w-full flex">
    <nav className="p-1 flex items-center w-full justify-around text-white text-2xl">
        <Link to="/" className="">
            <img width={72} src="/logo.png" alt="logo" />
        </Link>
        <div className="list-none flex gap-16">
            <li className=""><NavLink to="/" className={({isActive})=>`hover:text-amber-400 ${isActive && `text-amber-400`}`} >Home</NavLink></li>
            <li className=""><NavLink to="/about" className={({isActive})=>`hover:text-amber-400 ${isActive && `text-amber-400`}`} >About</NavLink></li>
            <li className=""><NavLink to="/github" className={({isActive})=>`hover:text-amber-400 ${isActive && `text-amber-400`}`} >Github</NavLink></li>
        </div>
        <div className="">
            <button className="cursor-pointer bg-white rounded-xl text-amber-400 px-3 py-1 font-bold">Login</button>
        </div>
    </nav>
  </header>
  );
}

export default Navbar;
