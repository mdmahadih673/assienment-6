const SkeletonCard = () => {
    return (
        <div className="overflow-hidden rounded-2xl bg-neutral-900">
            <div className="h-40 w-full animate-pulse bg-neutral-800" />

            <div className="p-4">
                <div className="mb-3 flex gap-2">
                    <div className="h-5 w-14 animate-pulse rounded-full bg-neutral-800" />
                    <div className="h-5 w-14 animate-pulse rounded-full bg-neutral-800" />
                </div>

                <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-800" />
                <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-neutral-800" />

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                    <div className="h-3 w-10 animate-pulse rounded bg-neutral-800" />
                    <div className="h-3 w-10 animate-pulse rounded bg-neutral-800" />
                    <div className="h-3 w-8 animate-pulse rounded bg-neutral-800" />
                </div>
            </div>
        </div>
    );
};

const LibrarySkeleton = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="my-14 flex flex-col items-center text-center">
                <div className="h-3 w-16 animate-pulse rounded bg-neutral-800" />
                <div className="mt-3 h-9 w-64 animate-pulse rounded bg-neutral-800" />
                <div className="mt-3 h-3 w-72 animate-pulse rounded bg-neutral-800" />
            </div>

            <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 12 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default LibrarySkeleton;