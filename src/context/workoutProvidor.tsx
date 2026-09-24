"use client";

import { IExercise } from '@/type/type';
import React, { createContext, ReactNode, useState } from 'react';


export interface IWorkoutContext {
    planWorkouts: IExercise[]
    setPlanWorkout: React.Dispatch<React.SetStateAction<IExercise[]>>
    savedWorkouts: IExercise[]
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IExercise[]>>
}


export const WorkoutContext = createContext<IWorkoutContext>({
    planWorkouts: [],
    setPlanWorkout: () => { },
    savedWorkouts: [],
    setSavedWorkouts: () => { },
});


const WorkoutProvidor = ({ children }: { children: ReactNode }) => {

    const [planWorkouts, setPlanWorkout] = useState<IExercise[]>([])
    const [savedWorkouts, setSavedWorkouts] = useState<IExercise[]>([])

    const shareData = {
        planWorkouts,
        setPlanWorkout,
        savedWorkouts,
        setSavedWorkouts,
    }


    return <WorkoutContext.Provider value={shareData}> {children}  </WorkoutContext.Provider>
};

export default WorkoutProvidor; 