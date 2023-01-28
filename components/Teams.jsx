export default function Teams() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="team">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Dream Team
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                    <span className="relative">Talented </span>
                    Individuals behind Solderse


                </h2>
            </div>
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="./images/teams/andrew_jackson.jpg"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Andrew Jackson</p>
                        <p className="text-sm text-gray-800">CEO & Founder</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="./images/teams/james_door.jpg"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">James Door</p>
                        <p className="text-sm text-gray-800">Product Manager</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="images/teams/louis_j.jpg"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Louis J.</p>
                        <p className="text-sm text-gray-800">CTO & Lead Innovation</p>
                    </div>
                </div>

                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="images/teams/sly_l.jpg"
                        alt="Sly L"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Sly L</p>
                        <p className="text-sm text-gray-800">Head Marketing</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Andrew Larkin</p>
                        <p className="text-sm text-gray-800">Backend Developer</p>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                        src="./images/teams/samantha_rose.jpg"
                        alt="Samantha Rose"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-bold">Samantha Rose</p>
                        <p className="text-sm text-gray-800">Head Content Creation</p>
                    </div>
                </div>

            </div>
        </div>
    );
};