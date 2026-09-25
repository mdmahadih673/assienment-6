import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-black px-4">
            <div className="text-center">

                <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#ccff00]">
                    ERROR 404
                </p>

                <h1 className="text-6xl font-black text-white sm:text-7xl">
                    PAGE NOT FOUND
                </h1>

                <p className="mx-auto mt-4 max-w-md text-gray-400">
                    The workout page you are looking for does not exist
                    or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:scale-105"
                >
                    ← BACK TO HOME
                </Link>

            </div>
        </div>
    );
};

export default NotFound;
