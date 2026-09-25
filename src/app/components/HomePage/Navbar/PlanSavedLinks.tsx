"use client";

import Link from "next/link";
import { useContext } from "react";
import { WorkoutContext } from "@/context/workoutProvidor";

const PlanSavedLinks = () => {
    const { planWorkouts, savedWorkouts } = useContext(WorkoutContext);

    return (
        <div className="flex items-center gap-2 text-xs sm:gap-5 sm:text-sm">
            <Link href="/MyPlan" className="flex items-center gap-1 whitespace-nowrap">
                Plan <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-500 px-1 text-xs font-bold text-black">{planWorkouts.length}</span>
            </Link>

            <Link href="/MyPlan" className="flex items-center gap-1 whitespace-nowrap">
                Saved
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-neutral-700 px-1 text-xs font-bold text-white">
                    {savedWorkouts.length}
                </span>
            </Link>
        </div>
    );
};

export default PlanSavedLinks;