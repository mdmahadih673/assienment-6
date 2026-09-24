import FooterLogo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
const FooterPage = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-neutral-950">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={FooterLogo} alt="FitLog" width={22} height={22} />
                        <span className="text-sm font-extrabold tracking-tight text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <p className="text-xs text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default FooterPage;