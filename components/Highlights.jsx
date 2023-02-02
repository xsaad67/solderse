export default function Highlights() {
    return (
        <div class="bg-deep-purple-600 shadow-slate-500 shadow-2xl">

            <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        <span className="relative px-1">
                            <span className="relative inline-block text-gray-300">
                                Chain Availability
                            </span>
                        </span>
                    </h2>

                </div>
                <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class=" object-contain p-5 pt-10 max-w-40 max-h-40 mx-auto"
                            src="./images/logos/ethereum-eth-logo-full-horizontal.svg" alt="Ethereum" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class="object-cover p-5 mx-auto max-w-40 max-h-40" src="./images/logos/bnb-bnb-logo.svg" alt="BSC" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class="object-cover p-5 mx-auto max-w-40 max-h-40" src="./images/logos/polygon-matic-logo.svg" alt="Polygon" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class="object-cover p-5 mx-auto max-w-40 max-h-40" src="./images/logos/neo-neo-logo-full.svg" alt="Neo" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class="object-cover p-5 mx-auto max-w-40 max-h-40" src="./images/logos/optimism-ethereum-op-logo.svg" alt="Optimism" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class="object-cover p-5 mx-auto max-w-40 max-h-40" src="./images/logos/fantom-ftm-logo.svg" alt="Fantom" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class="object-cover p-5 mx-auto max-w-40 max-h-40" src="./images/logos/vechain-vet-logo-full-vertical.svg" alt="VeChain" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                    <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl hover:bg-deep-purple-100">
                        <img class="object-cover p-5 mx-auto max-w-40 max-h-40" src="./images/logos/avalanche-avax-logo.svg" alt="Avalanche" />
                        <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}