import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google Clone</title>
                <meta name="description" content="google clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="flex w-full p-5 justify-between text-sm text-gray-700">
                {/* left */}
                <div className="flex space-x-4 items-center">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>

                {/* right */}
                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>

                    {/* Icon */}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-300 cursor-pointer" />

                    <Avatar url="https://lh3.googleusercontent.com/-wQYHI33mVAQ/XmXUp_24_wI/AAAAAAAACuA/72WPSi3PUbsvfgShBf_63bRUuBl3Jra4gCEwYBhgLKtQDAL1OcqxV-HfK8oksF63JWjymuNui_K62AUZGxtN9ivQdXoNl6q3Que2TviReHrNxdu6dNnVBVIQhNCVK0QhuyKND5L4OpGY9lYrRv_7Ww3ny8J-EWeyLevBuAdBzVewLEW6E8B1cpEqNLylUqqqFxq6WOl7CiciUfx_TxhRxM8rrgVVrNL_G1BM39yur56B0mjGJMxpl9KnLsuR4CVfr6HnuRHzbqJLScbGKpUsFuTuDYRfa4SwrFGBncVOT7OU3tkhNwHh12GwegkHsrSmznt7B7AQ1nUS2VuSGDCzZUbMeLvFIK5tZ_jUFy9My3uOa6otXHLH07q4ObiUQJEjdxN-pC2Iq2VDNPMZMuBwGTE26BsaeRaTSxMum29xRl9ww7Im5I7eugKqcBJwCI6iilnKKViGD0FXKvm7hQg4tJoIOm0SnRXOxfNsp6C6LWR-SyewoBeFQzyO9AftJXCEElt1n1gNbMtvsc6cNVdkgXnfslbO8kB_ZcwhU5FE3j-2WoafSeXiElAceA0_ZrhsF-lkgtsKOLXCr4f4Uxf6QvQOI_3KnCGGgiTjDKH86GUJ5fZA_KsuTMBaoLaboFpdvh8ddiXp7nu_Zs2LqplP6WGF4AuVrMKP334QG/w140-h140-p/2020-03-08.jpg" />
                </div>
            </header>

            {/* Body */}
            <form className="flex flex-col items-center mt-28 flex-grow w-4/5">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width={300}
                    height={100}
                />

                <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 rounded-full py-3 px-5 items-center sm:max-w-xl lg:max-w-2xl">
                    <SearchIcon className="h-5 mr-3 text-gray-500" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow focus:outline-none"
                    />
                    <MicrophoneIcon className="h-5" />
                </div>

                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 mb-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button onClick={search} className="btn">
                        Google Search
                    </button>

                    <button onClick={search} className="btn">
                        I'm Feeling Lucky
                    </button>
                </div>
            </form>

            {/* Footer */}
            <Footer />
        </div>
    );
}
