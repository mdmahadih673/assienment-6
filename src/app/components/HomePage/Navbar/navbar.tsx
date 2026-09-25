import Link from 'next/link';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import PlanSavedLinks from './PlanSavedLinks';
import NavLinks from './NavLinks';

const NavbarPage = () => {
    return (
        <nav className="w-full sticky top-0 z-50 bg-black">
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
                        <Image
                            
                            src={logo}
                            alt="FitLog"
                            width={26}
                            height={26}
                            priority />
                        <span className="text-xl font-extrabold tracking-tight  text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <NavLinks />
                <div className="navbar-end  gap-5">
                    <PlanSavedLinks />
                </div>
            </div>
        </nav>
    );
};

export default NavbarPage;