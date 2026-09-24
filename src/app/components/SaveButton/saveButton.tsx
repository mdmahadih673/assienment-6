'use client';

import { IExercise } from '@/type/type';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/workoutProvidor';
import { Bounce, toast } from 'react-toastify';

const SaveButton = ({ workout }: { workout: IExercise }) => {
    const { setSavedWorkouts, savedWorkouts } = useContext(WorkoutContext);
    const alreadySaved = savedWorkouts.some((item) => item.id === workout.id);

    const handleWorkout = () => {
        if (alreadySaved) return;

        setSavedWorkouts((prev) => [...prev, workout]);
        toast.success(`Successfully saved ${workout.name}`, {
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
                disabled={alreadySaved}
                className={`btn gap-2 rounded-md font-bold ${alreadySaved ? 'bg-gray-600 text-gray-200 cursor-not-allowed' : 'bg-transparent text-white hover:border-lime-500'}`}
            >
                
                {alreadySaved ? 'Saved' : 'Save'}
            </button>
        </div>
    );
};

export default SaveButton;