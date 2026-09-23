'use client';

import { IExercise } from '@/type/type';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';
import { Workoutcontext } from '@/context/workoutProvidor';

const PlanButton = ({ workout }: { workout: IExercise }) => {
    const { setWorkout } = useContext(Workoutcontext);

    const handleWorkout = () => {
        setWorkout((workouts) => {
            if (workouts.some((item) => item.id === workout.id)) {
                return workouts;
            }

            return [...workouts, workout];
        });
    };

    return (
        <div>
            <button
                type="button"
                onClick={() => handleWorkout()}
                className="btn gap-2 rounded-md border-none bg-lime-400 font-bold text-black hover:bg-lime-500"
            >
                <CalendarPlus className="h-4 w-4" />
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default PlanButton;