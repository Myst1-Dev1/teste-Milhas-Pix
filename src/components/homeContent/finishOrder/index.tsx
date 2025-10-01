import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";

export function FinishOrder() {
    return (
        <>
            <div className="col-span-3 mb-12 lg:mb-0 w-full flex justify-center items-center rounded-lg lg:border border-none border-transparent lg:border-[#E2E2E2]">
                <div className="flex flex-col justify-center items-center gap-3 px-4 lg:px-0">
                    <Image src="/images/congratulations-icon.png" className="w-15 h-15 object-cover" width={200} height={200} alt="icone de conclusão" />
                    <h2 className="primary-color font-medium text-xl">Ordem de venda criada com sucesso!</h2>
                    <p className="font-medium text-center text-[#2E3D50] max-w-md text-sm">Agora é só aguardar — assim que suas milhas forem vendidas, o valor será transferido direto para sua conta via Pix.</p>
                    <Link href="/myOffers" className="hidden font-medium px-4 py-3 w-fit rounded-full bg-[#1E90FF] text-white lg:flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">Ver minhas ofertas <PiArrowRight className="text-lg" /></Link>
                </div>
            </div>
        </>
    )
}