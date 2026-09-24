import { IExercise } from '@/type/type';
import { Clock3, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SavedPage = ({
    savedWorkouts,
    activeTab,
    onTabChange,
    onRemoveWorkout,
}: {
    savedWorkouts: IExercise[];
    activeTab: 'plan' | 'saved';
    onTabChange: () => void;
    onRemoveWorkout: (workoutId: number) => void;
}) => {
    return (
        <>
            <input
                type="radio"
                name="my_tabs_3"
                className={`tab ${activeTab === 'saved' ? 'tab-active' : ''}`}
                aria-label="Saved"
                checked={activeTab === 'saved'}
                onChange={onTabChange}
                readOnly
            />
            <div className="tab-content border-base-300 bg-[#0d1015] p-0 md:p-2">
                {savedWorkouts.length === 0 ? (
                    <div className="flex min-h-32 items-center justify-center rounded-2xl border border-dashed border-[#2b3139] bg-[#121821] text-sm text-gray-400">
                        No saved workouts yet.
                        
                    </div>
                ) : (
                    savedWorkouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="mb-4 flex items-center justify-between gap-4 rounded-[22px] border border-[#2a313d] bg-[#10141b] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
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
                                    <p className="mt-1 text-sm text-gray-400">{workout.description}</p>

                                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-300">
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

                            <div className="flex shrink-0 items-center gap-3">
                                <Link
                                    href={`/Workouts/${workout.id}`}
                                    className="rounded-full border border-[#dfe7ef] bg-transparent px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
                                >
                                    View Details
                                </Link>


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
                    ))
                )}
            </div>
        </>
    );
};

export default SavedPage;