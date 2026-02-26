import { Link, NavLink } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { navbarLinks } from '../../Constant/links';

export const Navbar = () => {
    return (
        <header className="bg-white text-black p-4 flex items-center justify-between border-b border-slate-200 lg:px-12">
            {/* Logo */}
            <div className="font-bold text-xl">
                <Link to="/">Kueri</Link>
            </div>

            <nav className="flex gap-6">  
                {
                navbarLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.href}
                        className={({ isActive }) => `${isActive ? 'text-cyan-600 underline' : ''} transition-all duration-300 font-medium hover:text-cyan-600 hover:underline`}
                    >   
                        {link.title}
                    </NavLink>
                ))
                }
            </nav>

            <div className="flex gap-5 items-center">
                <button>
                    <HiOutlineSearch size={25} />
                </button>
                <div className="relative">
                    {/* User Nav */}
                    <Link to='/account'
                     className='border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold'>
                        R
                    </Link>
                </div>
                <button className='relative'>
                    <span className='absolute -bottom-2 -right-2 h-5 w-5 flex items-center justify-center bg-black text-white text-xs rounded-full'>0</span>
                    <HiOutlineSearch size={25} />
                </button>

                <button className="md:hidden">
                    <FaBars size={25} />
                </button>
            </div>
        </header>
    )
}