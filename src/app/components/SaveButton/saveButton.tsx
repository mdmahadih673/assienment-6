'use client';

import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useContext } from 'react';
import { IExercise } from '@/type/type';
import { Workoutcontext } from '@/context/workoutProvidor';

const SaveButton = ({ workout }: { workout: IExercise }) => {
    const { savedWorkouts, setSavedWorkouts } = useContext(Workoutcontext);
    const isSaved = savedWorkouts.some((item) => item.id === workout.id);

    const toggleSaved = () => {
        setSavedWorkouts((current) => (
            current.some((item) => item.id === workout.id)
                ? current.filter((item) => item.id !== workout.id)
                : [...current, workout]
        ));
    };

    return (
        <button
            type="button"
            onClick={toggleSaved}
            className="btn gap-2 rounded-md border border-white/20 bg-transparent font-bold text-white hover:bg-white/10"
        >
            {isSaved ? <BookmarkCheck className="h-4 w-4 text-lime-400" /> : <Bookmark className="h-4 w-4" />}
            {isSaved ? 'Saved' : 'Save for later'}
        </button>
    );
};

export default SaveButton;