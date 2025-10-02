'use server';

import { Offer } from "@/@types/Offer";
import Image from "next/image";
import Link from "next/link";
import { PiCaretDownBold, PiMagnifyingGlass } from "react-icons/pi";

export default async function MyOffers() {

    const res = await fetch('https://api.milhaspix.com/simulate-offers-list',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();

    return (
        <>
            <div className="py-8 container">
                <div className="flex justify-between items-center px-4 lg:px-0">
                    <h2 className="text-[#6B7280] text-xl font-medium">Minhas ofertas</h2>
                    <Link href="/" className="font-medium p-3 max-w-40 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">
                        <span className="text-2xl">+</span> Nova oferta
                    </Link>
                </div>
                <div className="mt-8 border border-transparent lg:border-gray-300 rounded-lg px-4 lg:px-0">
                    <div className="pb-3 lg:p-3 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center">
                        <h3 className="text-lg text-[#6B7280] hidden lg:block">Todas as ofertas</h3>
                        <div className="grid grid-cols-3 lg:flex gap-4 w-full lg:w-auto ml-0 lg:ml-auto">
                            <div className="col-span-2 lg:w-60 p-2 border border-gray-300 rounded-full flex gap-3 items-center">
                                <input
                                type="text"
                                className="w-full outline-none placeholder-[#D9D9D9]"
                                placeholder="Login de acesso, ID da oferta..."
                                />
                                <PiMagnifyingGlass className="text-[#1E90FF] text-lg" />
                            </div>

                            <div className="lg:w-40 relative">
                                <select className="text-[#6B7280] outline-none w-full p-2 border border-gray-300 rounded-full appearance-none">
                                <option value="Filtros">Filtros</option>
                                </select>
                                <PiCaretDownBold className="absolute top-3 right-2 text-[#1E90FF] text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <table className="hidden md:table w-full text-left border-collapse">
                            <thead className="border-b border-t border-gray-300">
                                <tr className="text-[#6B7280] text-sm border-b border-gray-300">
                                    <th className="py-3 px-3 text-[#121212]">Programa</th>
                                    <th className="text-[#121212]">Status</th>
                                    <th className="text-[#121212]">ID da oferta</th>
                                    <th className="text-[#121212]">Login</th>
                                    <th className="text-[#121212]">Milhas ofertadas</th>
                                    <th className="text-[#121212]">Data</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {data?.offers?.map((offer: Offer, i:number) => (
                                    <tr key={i} className="border-b border-gray-300">
                                    <td className="p-3 flex items-center gap-2">
                                        <Image
                                            width={400}
                                            height={400}
                                            src={`/images/${offer.loyaltyProgram}-img.png` || "/images/smiles-logo.png"}
                                            alt={offer.loyaltyProgram}
                                            className="w-10 h-10 rounded-full aspect-square object-cover"
                                        />
                                        <div>
                                            <p className={`font-bold ${offer.loyaltyProgram === 'Smiles' ? 'text-[#F57921]' : 'text-[#40B6E6]'}`}>{offer.loyaltyProgram}</p>
                                            <span className="text-xs text-[#121212]">{offer.offerType}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs ${offer.offerStatus === 'Em Utilizacao' ? 'bg-[#C1D8EE]' : 'bg-[#D1FAE5]'}`}
                                        >
                                        <span className={`${offer.offerStatus === 'Em Utilizacao' ? 'primary-color' : 'text-[#10B981]'}`}>●</span>{" "}
                                            {offer.offerStatus}
                                        </span>
                                    </td>
                                        <td>{offer.offerId}</td>
                                        <td>{offer.accountLogin}</td>
                                        <td>10.0000</td>
                                        <td>{offer.createdAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="block md:hidden space-y-4">
                            {data?.offers?.map((offer:Offer, i:number) => (
                            <div
                                key={i}
                                className="border border-gray-300 rounded-xl space-y-2"
                            >
                                <div className="flex items-center p-3 justify-between">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            width={40}
                                            height={40}
                                            src={`/images/${offer.loyaltyProgram}-img.png` || "/images/smiles-logo.png"}
                                            alt={offer.loyaltyProgram}
                                            className="w-10 h-10 object-contain"
                                        />
                                        <p className={`font-bold ${offer.loyaltyProgram === 'Smiles' ? 'text-[#F57921]' : 'text-[#40B6E6]'}`}>
                                            {offer.loyaltyProgram}{" "}
                                            <span className="text-[#121212] font-normal">
                                                {offer.offerType}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 items-end">
                                        <span
                                            className={`text-xs px-2 rounded-md font-medium ${
                                            offer.offerStatus === "Em Utilizacao"
                                                ? "primary-color bg-[#C1D8EE]"
                                                : "text-[#10B981] bg-[#D1FAE5]"
                                            }`}
                                        >
                                            ● {offer.offerStatus}
                                        </span>
                                        <span className="text-xs text-gray-500">{offer.createdAt}</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-300 p-3 pt-2 text-sm">
                                    <p className="w-full flex justify-between">
                                        <span className="font-semibold">ID da oferta:</span>{" "}
                                        {offer.offerId}
                                    </p>
                                    <p className="w-full flex justify-between">
                                        <span className="font-semibold">Login:</span> {offer.accountLogin}
                                    </p>
                                    <p className="w-full flex justify-between">
                                        <span className="font-semibold">Milhas ofertadas:</span>{" "}
                                        {10.000}
                                    </p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}