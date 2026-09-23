"use client";

import { IExercise } from '@/type/type';
import React, { createContext, ReactNode, useState } from 'react';


export interface IWorkoutContext {
    workouts: IExercise[]
    setWorkout: React.Dispatch<React.SetStateAction<IExercise[]>>
    savedWorkouts: IExercise[]
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>
}


export const Workoutcontext = createContext<IWorkoutContext>({
    workouts: [],
    setWorkout: () => { },
    savedWorkouts: [],
    setSavedWorkouts: () => { },
});


const WorkoutProvidor = ({ children }: { children: ReactNode }) => {

    const [workouts, setWorkout] = useState<IExercise[]>([])
    const [savedWorkouts, setSavedWorkouts] = useState<IExercise[]>([])

    const shareData = {
        workouts,
        setWorkout,
        savedWorkouts,
        setSavedWorkouts,
    }


    return <Workoutcontext.Provider value={shareData}> {children}  </Workoutcontext.Provider>
};

export default WorkoutProvidor; 