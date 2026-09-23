import { IExercise } from '@/type/type';
import { notFound } from 'next/navigation';
import React from 'react';

export interface PageProps {
    params: Promise<{ id: string }>;
}

const getWorkoutsPage = async (): Promise<IExercise[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog/:id")
    const data = await res.json();
    return data;
}

const WorkoutDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const workouts = await getWorkoutsPage()
    const workout = workouts.find((item) => item.id === Number(id));

    if (!workout) {
        notFound();
    }
    return (
        <div>

        </div>
    );
};

export default WorkoutDetailsPage;