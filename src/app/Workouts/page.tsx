import { IExercise } from "@/type/type"
import WorkoutsCardPage from "./workoutsCard";

export interface PageProps {
    Workouts: IExercise
}

const getWorkoutsPage = async (): Promise<IExercise[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json();
    return data;
}

const WorkoutsPage = async () => {
    const workouts = await getWorkoutsPage();

    return (
        <div className="container mx-auto px-4">
            <div className="my-14 flex flex-col items-center text-center">

                <h2 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                    The Library
                </h2>
                <p className="mt-3 max-w-md text-sm text-gray-400 sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {workouts.map((workout) => (
                    <WorkoutsCardPage key={workout.id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default WorkoutsPage;