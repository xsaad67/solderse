import { PieChart, pieChartDefaultProps, } from 'react-minimal-pie-chart';

const dataMock = [
    { title: 'Marketing', value: 6, color: '#AA422F' },
    { title: 'Private Sale', value: 15, color: '#AF851A' },
    { title: 'ICO Public Sale', value: 24, color: '#F64747' },
    { title: 'Dev', value: 3, color: '#E73C70' },
    { title: 'Deflation(Burning)', value: 9, color: '#7462E0' },
    { title: 'Locked', value: 40, color: '#D25852' },
    { title: 'Expenditure', value: 3, color: '#AE59B6' },
];
const shiftSize = 4;
const defaultLabelStyle = {
    fontSize: '0.2rem',
    fontFamily: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
};



export default function Tokenomics() {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="tokenomics">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                    <span className="relative px-1">
                        <span className="relative inline-block text-gray-900">
                            Tokenomics - Distribution
                        </span>
                    </span>
                </h2>
            </div>
            <div class="grid gap-6 row-gap-10 lg:grid-cols-2">
                <div class="lg:py-6 lg:pr-16">

                    <div class="flex">
                        <div class="flex flex-col items-center mr-4">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-lime-200">
                                    <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-px h-full bg-gray-300"></div>
                        </div>
                        <div class="pt-1 pb-8">
                            <p class="mb-2 text-lg font-bold">40% - Liquidity Locked</p>
                            <p class="text-gray-700">
                                40% Liquidity is locked to utilize after the 6 months in two tranches for exchanges.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex flex-col items-center mr-4">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-lime-200">
                                    <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-px h-full bg-gray-300"></div>
                        </div>
                        <div class="pt-1 pb-8">
                            <p class="mb-2 text-lg font-bold">15% - Private Sale</p>
                            <p class="text-gray-700">
                                15% Liquidity has been reserved for the private sale. which will be completed in three tranches.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex flex-col items-center mr-4">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-lime-200">
                                    <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-px h-full bg-gray-300"></div>
                        </div>
                        <div class="pt-1 pb-8">
                            <p class="mb-2 text-lg font-bold">9% - Deflationary Burn</p>
                            <p class="text-gray-700">
                                9% Liquidity will be burn in a period of 2 years as part of the Deflationionary mechanism.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex flex-col items-center mr-4">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-lime-200">
                                    <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-px h-full bg-gray-300"></div>
                        </div>
                        <div class="pt-1 pb-8">
                            <p class="mb-2 text-lg font-bold">23% - Public Sale</p>
                            <p class="text-gray-700">
                                23% Liquidity will be utilized for public sale, airdrops, and rewards over the period of time.
                            </p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex flex-col items-center mr-4">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-lime-200">
                                    <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-px h-full bg-gray-300"></div>
                        </div>
                        <div class="pt-1 pb-8">
                            <p class="mb-2 text-lg font-bold">12% - Developers, Marketing, Admin Expenses</p>
                            <p class="text-gray-700">
                                12% liquidity is reserved for the following goals.
                            </p>
                            <ul className='pt-3 md:list-disc px-7'>
                                <li>3% for the Developers</li>
                                <li>6% for the Marketing Cost including airdrops, and rewards.</li>
                                <li>3% to cover the admin and maintainence costs</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="flex flex-col items-center mr-4">
                            <div>
                                <div class="flex items-center justify-center w-10 h-10 border rounded-full bg-lime-200 ">
                                    <svg class="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                                        <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="pt-1">
                            <p class="mb-2 text-lg font-bold">Total Supply: 15,000,000.00</p>
                            <p class="text-gray-700"></p>
                        </div>
                    </div>
                </div>
                <div class="relative">

                    <PieChart
                        data={dataMock}
                        radius={pieChartDefaultProps.radius - shiftSize}
                        segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                        labelStyle={{
                            ...defaultLabelStyle,
                        }}
                    />
                </div>
            </div>
        </div>

    )
}

