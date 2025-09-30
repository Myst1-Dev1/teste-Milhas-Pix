import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";

export default function MyOffers() {
    return (
        <>
            <div className="py-8 container">
                <div className="flex justify-between">
                    <h2 className="text-[#6B7280] text-xl font-medium">Minhas ofertas</h2>
                    <button className="font-medium p-3 max-w-40 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">
                        <span className="text-2xl">+</span> Nova oferta
                    </button>
                </div>
                <div className="mt-8 border border-gray-300 rounded-lg">
                    <div className="p-3 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center">
                        <h3 className="text-lg text-[#6B7280]">Todas as ofertas</h3>
                        <div className="flex ml-auto flex-col lg:flex-row gap-5">
                            <div className="lg:min-w-60 w-full p-2 border border-gray-300 rounded-full flex gap-3 items-center">
                                <input
                                type="text"
                                className="w-full outline-none placeholder-[#D9D9D9]"
                                placeholder="Login de acesso, ID da oferta..."
                                />
                                <FaSearch className="primary-color text-lg" />
                            </div>
                            <div className="lg:min-w-40 w-full relative">
                                <select className="text-[#6B7280] outline-none w-full p-2 border border-gray-300 rounded-full appearance-none">
                                <option value="Filtros">Filtros</option>
                                </select>
                                <PiCaretDownBold className="absolute top-3 right-2 primary-color text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 overflow-x-auto">
                        <table className=" w-full text-left border-collapse">
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
                                <tr className="border-b border-gray-300">
                                    <td className="p-3 flex items-center gap-2">
                                        <Image width={200} height={200} src="/images/smiles-logo.png" alt="Smiles" className="w-10 h-10 object-contain" />
                                        <div>
                                            <p className="font-bold text-[#F57921]">Smiles</p>
                                            <span className="text-xs text-[#121212]">Comum</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="px-3 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] text-xs">
                                            <span className="text-[#10B981]">●</span>  Ativa
                                        </span>
                                    </td>
                                    <td>Q2455</td>
                                    <td>coucouli@gmail.com</td>
                                    <td>100.000.000</td>
                                    <td>21 jun 2025</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-3 flex items-center gap-2">
                                        <Image width={200} height={200} src="/images/smiles-logo.png" alt="Smiles" className="w-10 h-10 object-contain" />
                                        <div>
                                            <p className="font-bold text-[#40B6E6]">Tudo Azul</p>
                                            <span className="text-xs text-[#121212]">Liminar</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="px-3 py-1 rounded-full bg-[#C1D8EE] text-[#002040] text-xs">
                                            <span className="text-[#1E90FF]">●</span>  Ativa
                                        </span>
                                    </td>
                                    <td>Q2455</td>
                                    <td>coucouli@gmail.com</td>
                                    <td>100.000.000</td>
                                    <td>21 jun 2025</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-3 flex items-center gap-2">
                                        <Image width={200} height={200} src="/images/smiles-logo.png" alt="Smiles" className="w-10 h-10 object-contain" />
                                        <div>
                                            <p className="font-bold text-[#F57921]">Smiles</p>
                                            <span className="text-xs text-[#121212]">Liminar</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="px-3 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] text-xs">
                                            <span className="text-[#10B981]">●</span>  Ativa
                                        </span>
                                    </td>
                                    <td>Q2455</td>
                                    <td>coucouli@gmail.com</td>
                                    <td>100.000.000</td>
                                    <td>21 jun 2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}