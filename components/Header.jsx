//import Transactions from "./parts/Transactions";

export default function Header() {

    return (
        <div className=" bg-indigo-50">
            <div className="relative bg-deep-purple-700">
                <div className="absolute inset-x-0 bottom-0">
                    <svg
                        viewBox="0 0 224 12"
                        fill="rgb(232 234 246 / var(--tw-bg-opacity))"
                        className="w-full -mb-1 text-white"
                        preserveAspectRatio="none"


                    >
                        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                    </svg>
                </div>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Solderse an innovative <br className="hidden md:block" />
                                launchpad aims to make web3 global.
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                Solderse is a communtiy driven innovative launchpad aimed to make blockchain community more welcoming through it&apos;s AI driven platform.
                            </p>

                            <a
                                href="#about"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        {/* <Transactions></Transactions> */}
                    </div>
                </div>

            </div>
        </div>
    );
};