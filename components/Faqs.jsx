import { useState } from "react";
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-deep-purple-300  rounded shadow-2xl shadow-deep-purple-300">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 "
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-deep-purple-300">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-white transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export default function Faqs() {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="faqs">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="flex flex-col mb-16 sm:text-center">

                    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                            Frequently Asked Questions
                        </h2>

                    </div>
                </div>
            </div>
            <div class="max-w-screen-xl sm:mx-auto">
                <div class="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div class="space-y-4 ">
                        <Item title="Why Solderse?" class="shadow-2xl">
                            Solderse is an AI driven launchpad which eases the whole process of launching new smart tokens and perform various of tasks easily through it&apos;s smart system.
                        </Item>
                        <Item title="What are we trying to solve?">
                            Solderse aims to make it super easy for everyone to launch their own smart tokens and turn blockchain industry into a newbie friendly industry with the lowest cost.
                        </Item>
                        <Item title="How it is revolutionary?">
                            Solderse doesn&apos;t charge a single money in term of any Base fees. It revolutionize the whole industry through it&apos;s ecosystem, gamification, and 0 base pool fee.
                        </Item>
                        <Item title="Why deflationary?">
                            Solderse aims to return the best for it&apos;s investors through burning, rewards, and the governance.
                        </Item>
                    </div>
                    <div class="space-y-4">
                        <Item title="What is 0 base fee launchpad?">
                            0 base fee means you don&apos;t pay a single penny to Solderse for launching your own token, with a 0 fee you can launch instantly in no time.
                        </Item>
                        <Item title="How solderse will earn?">
                            Solderse will only hold 3-5% of liquidity of any newly launched token through it&apos;s smart system. which will be locked till 3-6 months and will be sold upon the voting.
                        </Item>
                        <Item title="Benefits of holding projects?">
                            In blockchain only one thing is certain, which is good projects, once we hold the liquidity of newly created tokens. We&apos;re investing ourselves into their efforts, and will be part of different of governance.
                        </Item>
                        <Item title="Why liquidity is being locked?">
                            Liquidity for newly created token through Solderse will only be locked to not rug and pull. As we firmly believe the blockchain space has to be simple and easy rather than manipulative and deceitful.
                        </Item>
                    </div>
                </div>
            </div>
        </div>






    );
};