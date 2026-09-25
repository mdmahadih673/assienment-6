const infoRowSkeleton = (key: number) => (
    <div
        key={key}
        className="flex items-center justify-between px-4 py-3 even:bg-white/[0.03]"
    >
        <div className="h-3 w-20 animate-pulse rounded bg-neutral-700" />
        <div className="h-3 w-16 animate-pulse rounded bg-neutral-700" />
    </div>
);

const WorkoutDetailsSkeleton = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="h-3 w-28 animate-pulse rounded bg-neutral-800" />

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="h-72 w-full animate-pulse rounded-2xl bg-neutral-800 lg:h-full" />

                <div>
                    <div className="h-9 w-56 animate-pulse rounded bg-neutral-800" />
                    <div className="mt-3 h-3 w-full animate-pulse rounded bg-neutral-800" />
                    <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-neutral-800" />

                    <div className="mt-4 flex gap-2">
                        <div className="h-5 w-14 animate-pulse rounded-full bg-neutral-800" />
                        <div className="h-5 w-14 animate-pulse rounded-full bg-neutral-800" />
                    </div>

                    <div className="mt-6 overflow-hidden rounded-xl bg-neutral-900">
                        {Array.from({ length: 7 }).map((_, index) => infoRowSkeleton(index))}
                    </div>

                    <div className="mt-8 h-5 w-32 animate-pulse rounded bg-neutral-800" />
                    <div className="mt-3 space-y-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-3 w-full max-w-md animate-pulse rounded bg-neutral-800"
                            />
                        ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                        <div className="h-10 w-40 animate-pulse rounded-md bg-neutral-800" />
                        <div className="h-10 w-24 animate-pulse rounded-md bg-neutral-800" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsSkeleton;