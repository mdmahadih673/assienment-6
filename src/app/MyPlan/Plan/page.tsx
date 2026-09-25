'use client';

import { IExercise } from '@/type/type';
import { Check, Clock3, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const PlanPage = ({
    planWorkouts,
    activeTab,
    onTabChange,
    onRemoveWorkout,
}: {
    planWorkouts: IExercise[];
    activeTab: 'plan' | 'saved';
    onTabChange: () => IExercise;
    onRemoveWorkout: (workoutId: number) => IExercise;
}) => {
    const [doneIds, setDoneIds] = useState<number[]>([]);
    const workouts = planWorkouts ?? [];

    const handleDone = (workoutId: number) => {
        if (doneIds.includes(workoutId)) return;

        setDoneIds((prev) => (prev.includes(workoutId) ? prev : [...prev, workoutId]));
        toast.success(`Workout marked as done`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });


    };

    return (
        <>
            <input
                type="radio"
                name="my_tabs_3"
                className={`tab ${activeTab === 'plan' ? 'tab-active' : ''}`}
                aria-label="Today's Plan"
                checked={activeTab === 'plan'}
                onChange={onTabChange}
                readOnly
            />
            <div className="tab-content border-base-300 bg-[#0d1015] md:p-2">
                {workouts.length === 0 ? (
                    <div className="grid grid-rows-2  text-center justify-center items-center rounded-2xl border border-dashed border-[#2b3139] bg-[#121821] text-sm text-gray-400">
                        <p>No workout plan selected yet.</p>
                        <div className='pb-18'>

                            <Link
                                href="/Workouts"
                                className="btn   rounded-md border-none bg-lime-400 px-6 font-bold tracking-wide text-black hover:bg-lime-500"
                            >
                                BROWSE WORKOUTS
                            </Link>
                        </div>
                    </div>

                ) : (
                    workouts.map((workout) => {
                        const isDone = doneIds.includes(workout.id);

                        return (
                            <div
                                key={workout.id}
                                className="mb-4 flex flex-col items-stretch gap-4 rounded-[22px] border border-[#2a313d] bg-[#10141b] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex min-w-0 flex-1 items-center gap-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#2a313d] bg-[#171d26]">
                                        <Image
                                            src={workout.image}
                                            alt={workout.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="truncate text-xl font-black uppercase tracking-tight text-white">
                                            {workout.name}
                                        </h3>
                                        <p className="mt-1 wrap-break-word text-sm text-gray-400">{workout.description}</p>

                                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300">
                                            <span className="flex items-center gap-1.5">
                                                <Clock3 className="h-3.5 w-3.5 text-[#c7d6e5]" />
                                                {workout.duration} min
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Flame className="h-3.5 w-3.5 text-[#ffb84d]" />
                                                {workout.caloriesBurned} kcal
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Star className="h-3.5 w-3.5 fill-[#facc15] text-[#facc15]" />
                                                {workout.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:shrink-0">
                                    <Link
                                        href={`/Workouts/${workout.id}`}
                                        className="flex-1 whitespace-nowrap rounded-full border border-[#dfe7ef] bg-transparent px-3 py-2 text-center text-sm font-medium text-white transition hover:border-white hover:bg-white/5 sm:flex-none sm:px-5"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() => handleDone(workout.id)}
                                        className={`btn flex-1 gap-2 rounded-md font-bold sm:flex-none ${isDone ? 'bg-gray-600 text-gray-200 cursor-not-allowed' : 'bg-transparent text-white hover:border-lime-500'}`}
                                    >
                                        <Check className="h-4 w-4" />
                                        {isDone ? 'Done' : 'Mark as Done'}

                                    </button>

                                    <button
                                        type="button"
                                        aria-label={`Remove ${workout.name}`}
                                        onClick={() => onRemoveWorkout(workout.id)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a313d] bg-transparent text-xl text-gray-300 transition hover:border-gray-500 hover:text-white"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default PlanPage;