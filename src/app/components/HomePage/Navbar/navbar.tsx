import Link from 'next/link';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const NavbarPage = () => {
    return (
        <nav className="w-full bg-black">
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={"/Workouts"}>Workouts</Link></li>
                            <li><Link href={"/MyPlan"}>My Plan</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="FitLog" width={28} height={28} priority />
                        <span className="text-xl font-extrabold tracking-tight text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        <li>
                            <Link
                                href={"/Workouts"}
                                className="rounded-full bg-lime-500/20 px-4 py-1.5 font-semibold text-lime-400 hover:bg-lime-500/20"
                            >
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/MyPlan"}
                                className="px-4 py-1.5 text-gray-400 hover:bg-transparent hover:text-gray-200"
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end gap-5">
                    <Link href={"/MyPlan"} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                        Plan
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-500 text-xs font-bold text-black">
                            0
                        </span>
                    </Link>
                    <Link href={"/MyPlan"} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                        Saved
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-700 text-xs font-bold text-white">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarPage;