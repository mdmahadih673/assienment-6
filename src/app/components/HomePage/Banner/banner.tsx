import Image from 'next/image';
import Link from 'next/link';
import banner from '@/assets/banner.png'

const BannerPage = () => {
    return (
        <div className="container mx-auto px-4 mt-4">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900 px-8 py-16 sm:px-12 lg:px-16">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
                    <div className="max-w-xl">
                        <p className="text-xs font-bold tracking-widest text-lime-400">
                            WORKOUT LIBRARY
                        </p>

                        <h1 className="mt-3 text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
                            Train with intent. Log every set.
                        </h1>

                        <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link
                            href="/Workouts"
                            className="btn mt-7 rounded-md border-none bg-lime-400 px-6 font-bold tracking-wide text-black hover:bg-lime-500"
                        >
                            BROWSE WORKOUTS
                        </Link>
                    </div>

                    <div className="shrink-0">
                        <Image
                            src={banner}
                            alt="FitLog workout"
                            width={320}
                            height={320}
                            priority
                            className="h-auto w-64 sm:w-80"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPage;