import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef();

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />

                <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 max-w-3xl items-center">
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow w-full focus:outline-none"
                        defaultValue={router.query.term}
                    />
                    <XIcon
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar
                    className="ml-auto"
                    url="https://lh3.googleusercontent.com/-wQYHI33mVAQ/XmXUp_24_wI/AAAAAAAACuA/72WPSi3PUbsvfgShBf_63bRUuBl3Jra4gCEwYBhgLKtQDAL1OcqxV-HfK8oksF63JWjymuNui_K62AUZGxtN9ivQdXoNl6q3Que2TviReHrNxdu6dNnVBVIQhNCVK0QhuyKND5L4OpGY9lYrRv_7Ww3ny8J-EWeyLevBuAdBzVewLEW6E8B1cpEqNLylUqqqFxq6WOl7CiciUfx_TxhRxM8rrgVVrNL_G1BM39yur56B0mjGJMxpl9KnLsuR4CVfr6HnuRHzbqJLScbGKpUsFuTuDYRfa4SwrFGBncVOT7OU3tkhNwHh12GwegkHsrSmznt7B7AQ1nUS2VuSGDCzZUbMeLvFIK5tZ_jUFy9My3uOa6otXHLH07q4ObiUQJEjdxN-pC2Iq2VDNPMZMuBwGTE26BsaeRaTSxMum29xRl9ww7Im5I7eugKqcBJwCI6iilnKKViGD0FXKvm7hQg4tJoIOm0SnRXOxfNsp6C6LWR-SyewoBeFQzyO9AftJXCEElt1n1gNbMtvsc6cNVdkgXnfslbO8kB_ZcwhU5FE3j-2WoafSeXiElAceA0_ZrhsF-lkgtsKOLXCr4f4Uxf6QvQOI_3KnCGGgiTjDKH86GUJ5fZA_KsuTMBaoLaboFpdvh8ddiXp7nu_Zs2LqplP6WGF4AuVrMKP334QG/w140-h140-p/2020-03-08.jpg"
                />
            </div>

            {/* Header options */}
            <HeaderOptions />
        </header>
    );
}

export default Header;
