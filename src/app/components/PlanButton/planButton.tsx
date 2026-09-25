'use client';

import { IExercise } from '@/type/type';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/workoutProvidor';
import { Bounce, toast } from 'react-toastify';

const PlanButton = ({ workout }: { workout: IExercise }) => {
    const { setPlanWorkout, planWorkouts } = useContext(WorkoutContext);
    const alreadyAdded = planWorkouts.some((item) => item.id === workout.id);

    const handleWorkout = () => {
        if (alreadyAdded) return;

        setPlanWorkout((prev) => [...prev, workout]);
        toast.success(`Successfully added ${workout.name}`, {
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
    }
    return (
        <div>
            <button
                type="button"
                onClick={handleWorkout}
                disabled={alreadyAdded}
                aria-pressed={alreadyAdded}
                className={`btn flex-1 gap-2 rounded-md font-bold sm:flex-none ${alreadyAdded ? 'bg-gray-600 text-gray-200 cursor-not-allowed' : 'bg-transparent text-white hover:border-lime-500'}`}
            >
                {alreadyAdded ? 'Added to plan' : "Add to today's plan"}
            </button>
        </div>
    );
};

export default PlanButton;