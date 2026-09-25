const MyPlanSkeleton = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="h-8 w-40 animate-pulse rounded bg-neutral-800" />
            <div className="mt-2 h-3 w-72 animate-pulse rounded bg-neutral-800" />

            <div className="mt-6 grid grid-cols-3 gap-6 rounded-xl bg-neutral-900 p-6">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index}>
                        <div className="h-3 w-14 animate-pulse rounded bg-neutral-800" />
                        <div className="mt-2 h-7 w-8 animate-pulse rounded bg-neutral-800" />
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-1 rounded-full bg-neutral-900 p-1">
                    <div className="h-7 w-24 animate-pulse rounded-full bg-neutral-800" />
                    <div className="h-7 w-16 animate-pulse rounded-full bg-neutral-800" />
                </div>
                <div className="h-7 w-28 animate-pulse rounded-md bg-neutral-800" />
            </div>

            <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-white/15 py-20">
                <div className="h-3 w-52 animate-pulse rounded bg-neutral-800" />
                <div className="mt-6 h-9 w-40 animate-pulse rounded-md bg-neutral-800" />
            </div>
        </div>
    );
};

export default MyPlanSkeleton;