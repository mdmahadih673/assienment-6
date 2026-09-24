import { IExercise } from '@/type/type';
import { Check, Clock3, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const PlanPage = ({
    planWorkouts,
    activeTab,
    onTabChange,
    onRemoveWorkout,
}: {
    planWorkouts: IExercise[];
    activeTab: 'plan' | 'saved';
    onTabChange: () => void;
    onRemoveWorkout: (workoutId: number) => void;
}) => {
    const [doneIds, setDoneIds] = useState<number[]>([]);

    const handleDone = (workoutId: number) => {
        setDoneIds((prev) => (prev.includes(workoutId) ? prev : [...prev, workoutId]));
        
        
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
                {planWorkouts.length === 0 ? (
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
                    planWorkouts.map((workouts) => {
                        const isDone = doneIds.includes(workouts.id);

                        return (
                            <div
                                key={workouts.id}
                                className="mb-4 flex items-center justify-between gap-4 rounded-[22px] border border-[#2a313d] bg-[#10141b] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                            >
                                <div className="flex min-w-0 flex-1 items-center gap-4">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#2a313d] bg-[#171d26]">
                                        <Image
                                            src={workouts.image}
                                            alt={workouts.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="truncate text-xl font-black uppercase tracking-tight text-white">
                                            {workouts.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-400">{workouts.description}</p>

                                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-300">
                                            <span className="flex items-center gap-1.5">
                                                <Clock3 className="h-3.5 w-3.5 text-[#c7d6e5]" />
                                                {workouts.duration} min
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Flame className="h-3.5 w-3.5 text-[#ffb84d]" />
                                                {workouts.caloriesBurned} kcal
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Star className="h-3.5 w-3.5 fill-[#facc15] text-[#facc15]" />
                                                {workouts.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-3">
                                    <Link
                                        href={`/Workouts/${workouts.id}`}
                                        className="rounded-full border border-[#dfe7ef] bg-transparent px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() => handleDone(workouts.id)}
                                        className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${isDone
                                            ? 'bg-[#d9ff38] text-[#111827]'
                                            : 'bg-[#d9ff38] text-[#111827]'
                                            }`}
                                    >
                                        <Check className="h-4 w-4" />
                                        {isDone ? 'Done' : 'Mark as Done'}
                                    </button>

                                    <button
                                        type="button"
                                        aria-label={`Remove ${workouts.name}`}
                                        onClick={() => onRemoveWorkout(workouts.id)}
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