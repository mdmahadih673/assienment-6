"use client";

import { WorkoutContext } from "@/context/workoutProvidor";
import React, { useContext, useMemo, useState } from "react";
import PlanPage from "./Plan/page";
import SavedPage from "./Saved/page";
import { IExercise } from "@/type/type";
import { Bounce, toast } from "react-toastify";

const MyPlanClient = () => {
    const {
        planWorkouts,
        setPlanWorkout,
        savedWorkouts,
        setSavedWorkouts,
    } = useContext(WorkoutContext);

    const [activeTab, setActiveTab] =
        useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState<"duration" | "caloriesBurned" | "rating">("duration");


    const handleRemovePlanWorkout = (workoutId: number): IExercise => {

        const removedWorkout = planWorkouts.find(
            (workout) => workout.id === workoutId
        ) as IExercise;

        setPlanWorkout((prev) =>
            prev.filter((workout) => workout.id !== workoutId)
        );

        toast.error("Workout removed from plan", {
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

        return removedWorkout;
    };


    const handleRemoveSavedWorkout = (workoutId: number) => {

        setSavedWorkouts((prev) =>
            prev.filter((workout) => workout.id !== workoutId)
        );

        toast.error("Workout removed from saved", {
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



    const displayedWorkouts = useMemo(() => {
        const workouts = activeTab === "plan" ? planWorkouts : savedWorkouts;

        return [...workouts].sort(
            (firstWorkout, secondWorkout) =>
                Number(secondWorkout[sortBy] || 0) - Number(firstWorkout[sortBy] || 0)
        );
    }, [activeTab, planWorkouts, savedWorkouts, sortBy]);



    const totalExercises = displayedWorkouts.length;



    const totalMinutes = displayedWorkouts.reduce(
        (total: number, workout: IExercise) =>
            total + Number(workout.duration || 0),
        0
    );



    const totalCalories = displayedWorkouts.reduce(
        (total: number, workout: IExercise) =>
            total + Number(workout.caloriesBurned || 0),
        0
    );


    return (
        <>

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




            <div className="relative mt-8">
                <div className="tabs tabs-border">
                    <PlanPage
                        planWorkouts={activeTab === "plan" ? displayedWorkouts : planWorkouts}
                        activeTab={activeTab}
                        onTabChange={() => {
                            setActiveTab("plan");
                            return planWorkouts[0] as IExercise;
                        }}
                        onRemoveWorkout={handleRemovePlanWorkout}
                    />

                    <SavedPage
                        savedWorkouts={activeTab === "saved" ? displayedWorkouts : savedWorkouts}
                        activeTab={activeTab}
                        onTabChange={() => setActiveTab("saved")}
                        onRemoveWorkout={handleRemoveSavedWorkout}
                    />
                </div>

                <label className="relative mb-3 flex justify-end items-center gap-2 whitespace-nowrap text-xs text-gray-400 sm:absolute sm:right-0 sm:top-0 sm:z-10 sm:mb-0">
                    <span className="whitespace-nowrap">Sort By</span>
                    <select
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value as "duration" | "caloriesBurned" | "rating")}
                        className="select select-sm select-bordered border-[#2a313d] bg-[#13161c] text-white"
                    >
                        <option value="duration">Duration</option>
                        <option value="caloriesBurned">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </label>
            </div>

        </>
    );
};

export default MyPlanClient;