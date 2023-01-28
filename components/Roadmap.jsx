export default function Roadmap() {
    return (
        <div class="bg-deep-purple-300 shadow-slate-500 shadow-2xl" id="roadmap">
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        <span className="relative px-1">
                            <span className="relative inline-block text-gray-900">
                                RoadMap - Timeline
                            </span>
                        </span>
                    </h2>

                </div>
                <div class="grid max-w-md gap-2 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-4 xl:max-w-screen-lg sm:mx-auto">
                    <div class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                        <div class="text-center">
                            <div class="text-lg font-semibold">Brainstorming</div>
                            <div class="flex items-center justify-center mt-2">
                                <div class="mr-1 text-5xl font-bold">Jan 23</div>
                            </div>
                            <div class="mt-4 space-y-2">
                                <div class="text-gray-700">✓ Conceptualization of idea</div>
                                <div class="text-gray-700">✓ Smart Contract Development</div>
                                <div class="text-gray-700">✓ Establish Legal Structure</div>
                                <div class="text-gray-700">✓ Developed Solderse Merch</div>
                            </div>
                        </div>
                    </div>
                    <div class="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                        <div class="absolute inset-x-0 top-0 flex justify-center -mt-3">
                            <div class="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
                                Launchpad
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="text-lg font-semibold">Launching ICO</div>
                            <div class="flex items-center justify-center mt-2">
                                <div class="mr-1 text-5xl font-bold">Feb 23</div>
                            </div>
                            <div class="mt-4 space-y-2">
                                <div class="text-gray-700">✓ Launching ICO</div>
                                <div class="text-gray-700">✓ Whitepaper Update</div>
                                <div class="text-gray-700">✓ LP lock 1 year</div>
                                <div class="text-gray-700">✓ PR and Multisocial Campaign</div>
                                <div class="text-gray-700">✓ Cross Chain Development</div>


                            </div>
                        </div>

                    </div>
                    <div class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                        <div class="text-center">
                            <div class="text-lg font-semibold">Launching APP</div>
                            <div class="flex items-center justify-center mt-2">
                                <div class="mr-1 text-5xl font-bold">Mar, 23</div>
                            </div>
                            <div class="mt-4 space-y-2">
                                <div class="text-gray-700">✓ Updating changes</div>
                                <div class="text-gray-700">✓ Marketing Fund allocation</div>
                                <div class="text-gray-700">✓ Launching APP for testnet</div>
                                <div class="text-gray-700">✓ Core changes beta testing</div>


                            </div>
                        </div>

                    </div>
                    <div class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                        <div class="text-center">
                            <div class="text-lg font-semibold">Mainnet</div>
                            <div class="flex items-center justify-center mt-2">
                                <div class="mr-1 text-5xl font-bold">Apr, 23</div>
                            </div>
                            <div class="mt-4 space-y-2">
                                <div class="text-gray-700">✓ Changes Implement</div>
                                <div class="text-gray-700">✓ Launch on Mainnet</div>
                                <div class="text-gray-700">✓ Design Improvement</div>
                                <div class="text-gray-700">✓ Feedback Implementation</div>
                                <div class="text-gray-700">✓ Round 2 of Sale</div>
                                <div class="text-gray-700">✓ Distribution</div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};