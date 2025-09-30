import Image from "next/image";
import { PiArrowRight, PiCaretUpDown, PiLockSimple } from "react-icons/pi";

export function HomeContent() {
    return(
        <>
            <div className="container py-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 bg-[#F9F9F9] cursor-pointer max-w-72 w-full p-4">
                        <div className="relative flex flex-col items-center">
                            <div className="w-12 h-12 border-4 border-blue-200 rounded-full grid place-items-center">
                                <div className="w-10 h-10 border-2 border-[#1E90FF] rounded-full grid place-items-center">
                                <span className="w-3 h-3 rounded-full bg-[#1E90FF]" />
                                </div>
                            </div>

                            <div className="absolute top-12 w-px h-8 bg-gray-300"></div>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#2E3D50] font-medium">Passo 1</h2>
                            <p className="font-normal text-[#475569] text-sm">Escolha o programa</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
                        <div className="relative flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full grid place-items-center">
                                <div className="w-10 h-10 border-2 border-[#F0F0F0] rounded-full grid place-items-center">
                                <span className="w-3 h-3 rounded-full bg-[#F0F0F0]" />
                                </div>
                            </div>

                            <div className="absolute top-12 w-px h-8 bg-gray-300"></div>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#CBD5E1] font-medium">Passo 2</h2>
                            <p className="font-normal text-[#CBD5E1] text-sm">Oferte suas milhas</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
                        <div className="relative flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full grid place-items-center">
                                <div className="w-10 h-10 border-2 border-[#F0F0F0] rounded-full grid place-items-center">
                                <span className="w-3 h-3 rounded-full bg-[#F0F0F0]" />
                                </div>
                            </div>

                            <div className="absolute top-12 w-px h-8 bg-gray-300"></div>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#CBD5E1] font-medium">Passo 3</h2>
                            <p className="font-normal text-[#CBD5E1] text-sm">Insira os dados do programa</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
                        <div className="relative flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full grid place-items-center">
                                <div className="w-10 h-10 border-2 border-[#F0F0F0] rounded-full grid place-items-center">
                                <span className="w-3 h-3 rounded-full bg-[#F0F0F0]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#CBD5E1] font-medium">Passo 4</h2>
                            <p className="font-normal text-[#CBD5E1] text-sm">Pedido finalizado</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="w-full h-fit rounded-lg border border-[#E2E2E2]">
                        <div className="p-4 border-b border-[#E2E2E2]">
                            <h2 className="font-medium text-[#2E3D50] text-lg"><span className="primary-color">01.</span>  Escolha o programa de fidelidade</h2>
                        </div>
                        <div className="p-4 flex justify-between gap-3">
                            <div className="cursor-pointer border-2 border-[#1E90FF] rounded-full  w-full p-2 grid place-items-center">
                                <Image src="/images/tudoAzul-logo.png" className="w-13 object-contain" width={200} height={200} alt="logo do tudo azul" />
                            </div>
                            <div className="cursor-pointer border border-gray-300 opacity-40 rounded-full  w-full p-2 grid place-items-center">
                                <Image src="/images/smiles-logo.png" className="w-13 object-contain" width={200} height={200} alt="logo do tudo azul" />
                            </div>
                            <div className="cursor-pointer border border-gray-300 opacity-40 rounded-full  w-full p-2 grid place-items-center">
                                <Image src="/images/latamPass-logo.png" className="w-16 object-contain" width={200} height={200} alt="logo do tudo azul" />
                            </div>
                            <div className="cursor-pointer border border-gray-300 opacity-40 rounded-full  w-full p-2 grid place-items-center">
                                <Image src="/images/airPortugal-logo.png" className="w-20 object-contain" width={200} height={200} alt="logo do tudo azul" />
                            </div>
                        </div>
                        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">Produto</label>
                                <div className="relative w-full">
                                    <select
                                        name="product"
                                        id="product"
                                        className="outline-none text-[#2E3D50] font-medium border border-[#E2E2E2] rounded-full p-3 w-full appearance-none pr-10"
                                    >
                                        <option value="Liminar">Liminar</option>
                                    </select>
                                    <PiCaretUpDown className="absolute right-2 top-1/2 -translate-y-1/2 primary-color text-lg pointer-events-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">CPF&#39;s Disponíveis</label>
                                <div className="flex justify-between items-center gap-3 text-[#2E3D50] font-medium border bg-[#F9F9F9] border-[#E2E2E2] rounded-full py-3 w-full">
                                    <input type="text" className="outline-none px-3" placeholder="Ilimitado" />
                                    <PiLockSimple className="mr-3 text-[#8F8F8F] text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="ml-auto font-medium mt-4 p-3 max-w-40 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">Prosseguir <PiArrowRight className="text-lg" /></button>
                </div>
                <div className="border border-gray-300 p-3 rounded-lg h-fit">
                    <h3 className="text-[#2E3D50] font-medium text-lg">Selecione o programa</h3>
                    <p className="font-normal text-sm text-[#475569]">Escolha de qual programa de fidelidade você quer vender suas milhas. Use apenas contas em seu nome.</p>
                </div>
            </div>
        </>
    )
}