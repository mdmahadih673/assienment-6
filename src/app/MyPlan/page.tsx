"use client";

import { WorkoutContext } from '@/context/workoutProvidor';
import React, { useContext, useMemo, useState } from 'react';
import PlanPage from './Plan/page';
import SavedPage from './Saved/page';
import { IExercise } from '@/type/type';

const MyPlanPage = () => {
    const { planWorkouts, setPlanWorkout, savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);
    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

    const handleRemovePlanWorkout = (workoutId: number) => {
        setPlanWorkout((prev) => prev.filter((workout) => workout.id !== workoutId));
    };

    const handleRemoveSavedWorkout = (workoutId: number) => {
        setSavedWorkouts((prev) => prev.filter((workout) => workout.id !== workoutId));
    };

    const displayedWorkouts = useMemo(
        () => (activeTab === 'plan' ? planWorkouts : savedWorkouts),
        [activeTab, planWorkouts, savedWorkouts]
    );

    const totalExercises = displayedWorkouts.length;

    const totalMinutes = displayedWorkouts.reduce(
        (total: number, workout: IExercise) => total + Number(workout.duration || 0),
        0
    );

    const totalCalories = displayedWorkouts.reduce(
        (total: number, workout: IExercise) => total + Number(workout.caloriesBurned || 0),
        0
    );

    return (
        <div className="min-h-screen bg-[#0d0f12] py-10 text-white">
            <div className="container mx-auto max-w-285 px-4">

                <div className="mb-6">
                    <h1 className="font-display text-4xl font-black uppercase leading-none sm:text-5xl">
                        MY PLAN
                    </h1>

                    <p className="mt-3 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#272b32] bg-[#13161c] px-5 py-7 sm:px-8">

                    <div className="grid grid-cols-3">

                        <div className="border-r border-[#242830] px-3 sm:px-5">
                            <p className="text-xs text-gray-400">
                                Exercises
                            </p>

                            <h2 className="mt-2 font-display text-4xl font-black text-[#ccff00] sm:text-5xl">
                                {totalExercises}
                            </h2>
                        </div>

                        <div className="border-r border-[#242830] px-3 sm:px-5">
                            <p className="text-xs text-gray-400">
                                Minutes
                            </p>

                            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
                                {totalMinutes}
                            </h2>
                        </div>

                        <div className="px-3 sm:px-5">
                            <p className="text-xs text-gray-400">
                                Calories
                            </p>

                            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
                                {totalCalories}
                            </h2>
                        </div>

                    </div>
                </div>

                <div className="tabs tabs-border">
                    <PlanPage
                        planWorkouts={planWorkouts}
                        activeTab={activeTab}
                        onTabChange={() => setActiveTab('plan')}
                        onRemoveWorkout={handleRemovePlanWorkout}
                    />
                    <SavedPage
                        savedWorkouts={savedWorkouts}
                        activeTab={activeTab}
                        onTabChange={() => setActiveTab('saved')}
                        onRemoveWorkout={handleRemoveSavedWorkout}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;



