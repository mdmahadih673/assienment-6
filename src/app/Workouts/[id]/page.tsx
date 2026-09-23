import { IExercise } from '@/type/type';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarPlus, Bookmark } from 'lucide-react';

export interface PageProps {
    params: Promise<{ id: string }>;
}

const getWorkout = async (id: string): Promise<IExercise> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const data = await res.json();
    return data;
}

const infoRow = (label: string, value: string | number) => (
    <div className="flex items-center justify-between px-4 py-3 text-sm even:bg-white/[0.03]">
        <span className="text-xs font-bold tracking-widest text-gray-400">
            {label.toUpperCase()}
        </span>
        <span className="font-semibold text-white">{value}</span>
    </div>
);

const WorkoutDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const workout = await getWorkout(id);

    if (!workout) {
        notFound();
    }

    return (
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-2">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl lg:h-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div>
                <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                    {workout.name}
                </h1>
                <p className="mt-2 text-sm text-gray-400">{workout.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                <div className="mt-6 overflow-hidden rounded-xl bg-neutral-900">
                    {infoRow('Equipment', workout.equipment)}
                    {infoRow('Difficulty', workout.difficulty)}
                    {infoRow('Sets', workout.sets)}
                    {infoRow('Reps', workout.reps)}
                    {infoRow('Duration', `${workout.duration} min`)}
                    {infoRow('Calories', `${workout.caloriesBurned} kcal`)}
                    {infoRow('Rating', workout.rating)}
                </div>

                <h2 className="mt-8 text-lg font-extrabold uppercase tracking-tight text-white">
                    Instructions
                </h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-300">
                    {workout.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                    <button className="btn gap-2 rounded-md border-none bg-lime-400 font-bold text-black hover:bg-lime-500">
                        <CalendarPlus className="h-4 w-4" />
                        Add to today&apos;s plan
                    </button>
                    <button className="btn gap-2 rounded-md border border-white/20 bg-transparent font-bold text-white hover:bg-white/10">
                        <Bookmark className="h-4 w-4" />
                        Save for later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;