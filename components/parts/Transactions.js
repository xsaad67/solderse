import { contractAddresses, sale, solderse } from '../../constants'
import { ConnectButton } from '@web3uikit/web3'
import { useMoralis, useWeb3Contract, useChain, useNativeBalance } from "react-moralis";
import { useForm } from "react-hook-form";
import truncateEthAddress from 'truncate-eth-address';
import { env } from '../../next.config';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';


export default function Transactions() {
    const { register, handleSubmit, setError, formState: { isSubmitting, errors } } = useForm();
    const { isWeb3Enabled, account, chainId: chainIdHex, Moralis } = useMoralis();
    const chainId = Number(chainIdHex);
    console.log(chainIdHex);
    const { switchNetwork } = useChain();
    const saleAddress = chainId in contractAddresses ? contractAddresses[chainId]['sale'].toString() : null




    const [amountToBuy, setAmountToBuy] = useState("0");
    const [buttonClicked, setButtonClicked] = useState("0");

    const {
        runContractFunction: buyTokens,
        error,
        data: enterTxResponse,
        isLoading,
        isFetching
    } = useWeb3Contract({
        abi: sale,
        contractAddress: saleAddress,
        functionName: "buyTokens",
        msgValue: amountToBuy,
        params: {},
    }
    )


    const onSubmit = async (data) => {

        if (isWeb3Enabled) {
            if (chainIdHex === env.BASE_CHAIN) {
                setAmountToBuy(Moralis.Units.ETH(data.amount.toString()));
                setButtonClicked(1);
            } else {
                switchNetwork(env.BASE_CHAIN);
            }

        }
    }


    useEffect(() => {

        if (buttonClicked === 1) {
            const fetchData = async () => {
                try {
                    const transReciept = await buyTokens({ throwOnError: true });
                    const transactionHashMsg = (transReciept?.hash !== undefined) ? "Transaction Hash is: " + transReciept?.hash : '';


                    toast.info("Transaction has been successfully posted, " + transactionHashMsg);

                } catch (error) {

                    if (error === null) {
                        toast.error("An unexpected error encountered. Please make sure you're using the BSC chain, having Balance and putting the limit with accordance to the minimum and maximum");
                    } else {
                        console.log(error);
                        if (error?.data?.message !== undefined) {
                            toast.error(error.data.message);
                        } else if (error?.message !== undefined) {
                            toast.error(error.message);
                        } else {
                            toast.error("An unexpected error encountered. Please make sure you're using the BSC chain, having Balance and putting the limit with accordance to the minimum and maximum");
                        }

                    }
                }
            }
            fetchData();
            setButtonClicked(0);

        }

    }, [buttonClicked]);




    return (
        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="text-xl font-semibold sm:text-center sm:text-2xl">
                    Private Sale
                </h3>


                <a className="block mb-4 text-center text-xl font-bold text-deep-purple-accent-700 hover:text-deep-purple-500">
                    1 BNB = {env.RATE.toLocaleString()} SOLD
                </a>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="firstName"
                            className="inline-block mb-1 font-medium"
                        >
                            Wallet

                        </label>
                        <input
                            placeholder={isWeb3Enabled ? truncateEthAddress(account) : "0x....…..FH"}

                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="wallet"
                            name="wallet"
                            disabled
                        />
                    </div>
                    <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="amount"
                            className="inline-block mb-1 font-medium"
                        >
                            {env.BASE_COIN} Amount *
                        </label>
                        <input
                            placeholder="Enter Amount in BNB"
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="amount"
                            {...register("amount", {

                                required: 'Please input an amount between 0.1 to 5',
                                validate: {
                                    value: (value) => value > 0 || 'Please input an amount between 0.1 to 5',

                                },
                                min: {
                                    value: (env.MIN_VALUE),
                                    message: env.BASE_COIN + ' amount should not be less than ' + env.MIN_VALUE
                                },
                                max: {
                                    value: env.MAX_VALUE,
                                    message: env.BASE_COIN + ' amount should not be greater than ' + env.MAX_VALUE
                                },
                                valueAsNumber: true

                            })}
                        />
                        {
                            errors.amount ? <div class="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 mb-3" role="alert">{errors.amount.message}</div> : ''
                        }
                    </div>
                    <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="email"
                            className="inline-block mb-1 font-medium"
                        >
                            E-mail
                        </label>
                        <input
                            placeholder="john.doe@example.org"
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="email"
                            {...register("email", {
                                required: false,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        {
                            errors.email ? <div class="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 mb-3" role="alert">{errors.email.message}</div> : ''
                        }
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">

                        {isWeb3Enabled ?
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                {isSubmitting ? "Loading" : "Purchase "}
                            </button>

                            : ""

                        }
                    </div>
                </form>
                {!isWeb3Enabled ? < div id="c-connectButton"> <ConnectButton></ConnectButton></div> : ''}
                <p className="text-xs text-gray-600 sm:text-sm text-center mt-4">
                    {contractAddresses[56]['sale'].toString()}
                </p>



            </div>
        </div>

    )
}