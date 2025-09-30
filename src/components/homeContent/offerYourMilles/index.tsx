import { PiAirplaneInFlightBold, PiArrowLeft, PiArrowRight, PiCaretDoubleDown } from "react-icons/pi";

export function OfferYourMilles() {
    return (
        <>
            <div className="col-span-2">
                <div className="w-full rounded-lg border border-[#E2E2E2]">
                    <div className="p-3 border-b border-[#E2E2E2] flex justify-between items-center">
                        <h2 className="font-medium text-[#2E3D50] text-lg"><span className="primary-color">02.</span>  Oferte suas milhas</h2>
                        <span className="hidden lg:block px-4 py-1 bg-red-100 rounded-full text-[#DC2B2B] font-medium">Escolha entre <span className="font-bold">R$ 14,00</span> e <span className="font-bold">R$ 16,56</span></span>
                    </div>
                    <div className="p-3">
                        <h2 className="mb-2 font-medium text-[#2E3D50]">Quero receber</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            <div className="cursor-pointer border-2 border-[#1E90FF] font-medium rounded-full  w-full p-2 grid place-items-center">
                                Imediato
                            </div>
                            <div className="cursor-pointer border border-gray-300 font-medium opacity-40 rounded-full  w-full p-2 grid place-items-center">
                                em 2 dias
                            </div>
                            <div className="cursor-pointer border border-gray-300 font-medium opacity-40 rounded-full  w-full p-2 grid place-items-center">
                                em 7 dias
                            </div>
                            <div className="cursor-pointer border border-gray-300 font-medium opacity-40 rounded-full  w-full p-2 grid place-items-center">
                                Depois do voo
                            </div>
                        </div>
                    </div>
                    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="milhas" className="font-medium text-[#2E3D50] text-lg">Milhas ofertadas</label>
                            <div className="flex justify-between items-center gap-3 font-medium border border-[#E2E2E2] rounded-full py-2 w-full">
                                <input type="number" className="outline-none px-3 placeholder-[#2E3D50]" placeholder="10.000" />
                                <PiAirplaneInFlightBold className="mr-3 text-[#1E90FF] text-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="milhas" className="font-medium text-[#2E3D50] text-lg">Valor a cada 1.000 milhas</label>
                            <div className="flex items-center justify-between border border-red-500 rounded-full px-3 py-2 w-full">
                                <div className="flex items-center pr-2">
                                    <span className="bg-red-100 text-[#DC2B2B] px-2 py-1 rounded-full text-sm font-semibold">
                                        R$
                                    </span>
                                    <input type="number" className="outline-none px-3 placeholder-[#2E3D50]" placeholder="25,00" />
                                </div>
                                <PiCaretDoubleDown className="text-[#DC2B2B] text-lg shrink-0 -ml-5" />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 flex items-center gap-3">
                        <div className="w-14 h-8 rounded-full bg-[#E2E2E2] flex items-center p-1 cursor-pointer">
                            <div className="bg-white h-6 w-6 rounded-full shadow-md"></div>
                        </div>
                        <h3 className="text-[#8F8F8F] font-medium">Definir média de milhas por passageiro</h3>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button className="font-medium p-3 max-w-28 w-full rounded-full border border-gray-300 text-[#2E3D50] flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:bg-[#1E90FF] hover:text-white"><PiArrowLeft className="text-lg" /> Voltar</button>
                    <button className="font-medium p-3 max-w-40 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">Prosseguir <PiArrowRight className="text-lg" /></button>
                </div>
            </div>
            <div>
                <div className="border border-gray-300 p-3 rounded-lg h-fit">
                    <h3 className="text-[#2E3D50] font-medium text-lg">Média de milhas</h3>
                    <p className="font-normal text-sm text-[#475569]">Ao vender mais de 20.000 milhas, ative as Opções Avançadas para definir a média de milhas por emissão.</p>
                </div>
                <div className="mt-3">
                    <h3 className="text-[#2E3D50] font-medium text-lg">Ranking de ofertas</h3>
                    <div className="mt-3 border border-gray-300 rounded-lg">
                        <div className="font-medium flex gap-4 border-b border-gray-300 text-[#2E3D50] p-3">
                            <span className="primary-color">1º</span>
                            R$ 15,23
                        </div>
                        <div className="font-medium flex gap-4 border-b border-gray-300 text-[#2E3D50] p-3">
                            <span className="primary-color">2º</span>
                            R$ 15,23
                        </div>
                        <div className="font-medium flex gap-4 border-b border-gray-300 text-[#2E3D50] p-3">
                            <span className="primary-color">3º</span>
                            R$ 15,23
                        </div>
                        <div className="font-medium flex gap-4 border-b border-gray-300 text-[#2E3D50] p-3">
                            <span className="primary-color">4º</span>
                            R$ 15,23
                        </div>
                        <div className="font-medium flex gap-4 border-b border-gray-300 text-[#12A19A] p-3">
                            <span>5º</span>
                            R$ 15,23
                            <span className="bg-[#12A19A1A] px-3 ml-auto rounded-full">Você</span>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="text-[#2E3D50] font-medium text-lg">Receba até:</h3>
                    <div className="flex justify-between p-3 w-full bg-[#12A19A1A] text-[#12A19A] font-medium text-lg">
                        <span>R$</span>
                        24.325,23
                    </div>
                </div>
            </div>
        </>
    )
}