import { IExercise } from "@/type/type"
import Image from "next/image"
import { Clock, Flame, Star } from "lucide-react"
import Link from "next/link"

export interface WorkoutsCardProps {
    workout: IExercise
}

export default function WorkoutsCard({ workout }: WorkoutsCardProps) {

    return (
        <Link href={`/workouts/${workout.id}`}>

            <div className="overflow-hidden cursor-pointer rounded-2xl bg-neutral-900">
                <div className="relative h-48 w-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4">
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-lg font-extrabold uppercase tracking-tight text-white">
                        {workout.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-400">{workout.equipment}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-gray-300">
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-gray-400" />
                            {workout.duration} min
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Flame className="h-3.5 w-3.5 text-gray-400" />
                            {workout.caloriesBurned} kcal
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            {workout.rating}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}