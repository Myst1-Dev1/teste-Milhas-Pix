import React from "react";

import Image from "next/image";
import { PiArrowLeft, PiArrowRight, PiLockSimple, PiUserCircle } from "react-icons/pi";
import Link from "next/link";

interface LoyaltyProgramProps {
    setSteps: React.Dispatch<React.SetStateAction<string>>
}

export function LoyaltyProgram({ setSteps }:LoyaltyProgramProps) {
    return (
        <>
            <div className="col-span-2">
                <div className="w-full h-fit rounded-lg border border-[#E2E2E2]">
                    <div className="p-4 border-b border-[#E2E2E2] flex justify-between items-center">
                        <h2 className="font-medium text-[#2E3D50] text-lg"><span className="primary-color">03.</span>  Insira os dados do programa de fidelidade</h2>
                        <Image src="/images/tudoAzul-logo.png" className="shrink-0 w-14 object-cover" width={200} height={200} alt="logo do tudo azul" />
                    </div>
                    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">CPF do Titular</label>
                            <div className="flex justify-between items-center gap-3 text-[#2E3D50] font-medium border border-[#E2E2E2] rounded-full py-3 w-full">
                                <input type="tel" className="outline-none px-3" placeholder="123.456.798-00" />
                                <PiUserCircle className="mr-3 primary-color text-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">Login de acesso</label>
                            <input type="text" className="outline-none px-3 flex justify-between items-center gap-3 text-[#2E3D50] font-medium border border-[#E2E2E2] rounded-full py-3 w-full" placeholder="Ilimitado" />
                        </div>
                    </div>
                    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">Senha de acesso</label>
                            <div className="flex justify-between items-center gap-3 text-[#2E3D50] font-medium border border-[#E2E2E2] rounded-full py-3 w-full">
                                <input type="number" className="outline-none px-3" placeholder="******" />
                                <PiLockSimple className="mr-3 primary-color text-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">Telefone para autenticação</label>
                            <div className="flex items-center justify-between border border-gray-300 rounded-full px-3 py-2 w-full">
                                <div className="flex items-center pr-2">
                                    <span className="bg-[#F3F3F3] text-[#2E3D50] flex items-center gap-1 px-[10px] py-1 rounded-full text-sm font-semibold">
                                        R$
                                        <Image src="/images/brasilFlag.png" className="w-4 h-4 object-cover" width={200} height={200} alt="bandeira do Brasil" />
                                    </span>
                                    <input type="number" className="outline-none px-3 placeholder-[#2E3D50] w-full" placeholder="(00)00000-0000" />
                                </div>
                                <Image src="/images/whatsapp-logo.png" className="w-5 h-5 object-cover shrink-0 -ml-3" width={200} height={200} alt="logo do whatsapp" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col lg:flex-row gap-4 lg:gap-0 mt-4">
                    <button onClick={() => setSteps('miles')} className="font-medium p-3 w-fit rounded-full border border-gray-300 text-[#2E3D50] flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:bg-[#1E90FF] hover:text-white"><PiArrowLeft className="text-lg" /> Voltar</button>
                    <div className="flex items-center flex-col lg:flex-row gap-3">
                        <p className="font-medium text-[#2E3D50] text-xs">Ao prosseguir você concorda com os <Link href="" className="border-b border-gray-400 transition-all duration-500 hover:text-[#1E90FF] hover:border-[#1E90FF]">Termos de uso</Link></p>
                        <button onClick={() => setSteps('finish')} className="font-medium px-4 py-3 w-fit rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">Concluir <PiArrowRight className="text-lg" /></button>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 p-3 rounded-lg h-fit">
                <h3 className="text-[#2E3D50] font-medium text-lg">Dados da conta</h3>
                <p className="font-normal text-sm text-[#475569]">Por favor, insira os dados da conta que deseja cadastrar e verifique se estão corretos.</p>
            </div>
        </>
    )
}