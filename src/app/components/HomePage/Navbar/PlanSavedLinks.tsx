"use client";

import Link from "next/link";
import { useContext } from "react";
import { WorkoutContext } from "@/context/workoutProvidor";

const PlanSavedLinks = () => {
    const { planWorkouts, savedWorkouts } = useContext(WorkoutContext);

    return (
        <div className="flex items-center navbar-end gap-5">
            <Link href="/my-plan/Plan">
                Plan <span className="h-5 w-5 p-1.5 items-center justify-center rounded-full bg-lime-500 text-xs font-bold text-black">{planWorkouts.length}</span>
            </Link>

            <Link href="/my-plan/Saved">


                Saved
                <span className=" h-5 w-5 p-1.5 gap-5.5 items-center justify-center rounded-full bg-neutral-700 text-xs ml-0.5 font-bold text-white">
                    {savedWorkouts.length}
                </span>
            </Link>
        </div>
    );
};

export default PlanSavedLinks;