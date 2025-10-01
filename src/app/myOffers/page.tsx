import Image from "next/image";
import Link from "next/link";
import { PiCaretDownBold, PiMagnifyingGlass } from "react-icons/pi";

export default function MyOffers() {
    const ofertas = [
    {
      programa: "Smiles",
      tipo: "Comum",
      logo: "/images/smiles-logo.png",
      status: "Ativa",
      statusColor: "text-[#10B981]",
      statusBg: "bg-[#D1FAE5] text-[#065F46]",
      id: "Q2455",
      login: "coucouli@gmail.com",
      milhas: "100.000.000",
      data: "21 jun 2025",
      cor: "text-[#F57921]",
    },
    {
      programa: "Tudo Azul",
      tipo: "Liminar",
      logo: "/images/smiles-logo.png",
      status: "Em utilização",
      statusColor: "text-[#1E90FF]",
      statusBg: "bg-[#C1D8EE] text-[#002040]",
      id: "Q2455",
      login: "coucouli@gmail.com",
      milhas: "100.000.000",
      data: "21 jun 2025",
      cor: "text-[#40B6E6]",
    },
  ];

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
                                {ofertas.map((oferta, i) => (
                                    <tr key={i} className="border-b border-gray-300">
                                    <td className="p-3 flex items-center gap-2">
                                        <Image
                                        width={40}
                                        height={40}
                                        src={oferta.logo}
                                        alt={oferta.programa}
                                        className="w-10 h-10 object-contain"
                                        />
                                        <div>
                                            <p className={`font-bold ${oferta.cor}`}>{oferta.programa}</p>
                                            <span className="text-xs text-[#121212]">{oferta.tipo}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                        className={`px-3 py-1 rounded-full text-xs ${oferta.statusBg}`}
                                        >
                                        <span className={oferta.statusColor}>●</span>{" "}
                                        {oferta.status}
                                        </span>
                                    </td>
                                        <td>{oferta.id}</td>
                                        <td>{oferta.login}</td>
                                        <td>{oferta.milhas}</td>
                                        <td>{oferta.data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="block md:hidden space-y-4">
                            {ofertas.map((oferta, i) => (
                            <div
                                key={i}
                                className="border border-gray-300 rounded-xl space-y-2"
                            >
                                <div className="flex items-center p-3 justify-between">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            width={40}
                                            height={40}
                                            src={oferta.logo}
                                            alt={oferta.programa}
                                            className="w-10 h-10 object-contain"
                                        />
                                        <p className={`font-bold ${oferta.cor}`}>
                                            {oferta.programa}{" "}
                                            <span className="text-[#121212] font-normal">
                                                {oferta.tipo}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 items-end">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs ${oferta.statusBg}`}
                                        >
                                        <span className={oferta.statusColor}>●</span>{" "}
                                            {oferta.status}
                                        </span>
                                        <span className="text-xs text-gray-500">{oferta.data}</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-300 p-3 pt-2 text-sm">
                                    <p className="w-full flex justify-between">
                                        <span className="font-semibold">ID da oferta:</span>{" "}
                                        {oferta.id}
                                    </p>
                                    <p className="w-full flex justify-between">
                                        <span className="font-semibold">Login:</span> {oferta.login}
                                    </p>
                                    <p className="w-full flex justify-between">
                                        <span className="font-semibold">Milhas ofertadas:</span>{" "}
                                        {oferta.milhas}
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