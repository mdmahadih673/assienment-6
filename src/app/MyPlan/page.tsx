import MyPlanClient from "./MyPlanClient";

const MyPlanPage = () => {
    return (
        <main className="min-h-screen bg-[#0d0f12] py-10 text-white">

            <div className="container mx-auto max-w-285 px-4">

               
                <div className="mb-6">
                    <h1 className="font-display text-4xl font-black uppercase leading-none sm:text-5xl">
                        MY PLAN
                    </h1>

                    <p className="mt-3 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>
                

               
                <MyPlanClient />


            </div>

        </main>
    );
};

export default MyPlanPage;