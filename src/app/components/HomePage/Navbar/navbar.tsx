
import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import PlanSavedLinks from './PlanSavedLinks';
import NavLinks from './NavLinks';

const NavbarPage = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-t border-white/10 bg-neutral-950">
            <div className="navbar container mx-auto min-h-16 gap-2 px-3 sm:px-6 lg:px-8">


                <div className="navbar-start">


                    <div className="dropdown lg:hidden">
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-xl bg-black p-3 shadow-xl"
                        >
                            <li>
                                <Link href="/Workouts">
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link href="/MyPlan">
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <Link
                        href="/"
                        className="ml-1 flex items-center gap-2 sm:ml-2"
                    >
                        <Image
                            src={logo}
                            alt="FitLog"
                            width={28}
                            height={28}
                            priority
                            className="h-7 w-7 sm:h-8 sm:w-8"
                        />

                        <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                            FITLOG
                        </span>
                    </Link>
                </div>


                <div className="hidden lg:flex">
                    <NavLinks />
                </div>


                <div className="navbar-end gap-2 sm:gap-3 md:gap-5">
                    <PlanSavedLinks />
                </div>

            </div>
        </nav>
    );
};

export default NavbarPage;

