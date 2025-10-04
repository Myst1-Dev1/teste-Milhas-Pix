import React, { useTransition } from "react";

import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Loading } from "@/components/loading";

interface FinishOrderProps {
    setSteps: React.Dispatch<React.SetStateAction<string>>
}

export function FinishOrder({ setSteps }:FinishOrderProps) {
    const [isPending, startTransition] = useTransition();

    useGSAP(() => {
        const tl = gsap.timeline({defaults: { duration:0.7, stagger:0.3, ease:'power1.out'}})
    
        tl.fromTo('.finishContent', { opacity:0 }, { opacity:1 });
        tl.fromTo('.finishBox', { opacity:0, y:30 }, { opacity:1, y:0 });
    }, []);

    return (
        <>
            <div className="finishContent col-span-1 lg:col-span-3 mb-12 lg:mb-0 w-full flex justify-center min-h-[60vh] lg:min-h-0 items-center rounded-lg lg:border border-transparent lg:border-[#E2E2E2]">
                <div className="flex flex-col justify-center items-center gap-3 px-4 lg:px-0">
                    <Image src="/images/congratulations-icon.png" className="w-15 h-15 object-cover" width={200} height={200} alt="icone de conclusão" />
                    <h2 className="primary-color font-medium text-xl">Ordem de venda criada com sucesso!</h2>
                    <p className="font-medium text-center text-[#2E3D50] max-w-md text-sm">Agora é só aguardar — assim que suas milhas forem vendidas, o valor será transferido direto para sua conta via Pix.</p>
                    <Link 
                        href="/myOffers" 
                        className="hidden font-medium px-4 py-3 w-fit rounded-full bg-[#1E90FF] text-white lg:flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90"
                        onClick={(e) => {
                                e.preventDefault();
                                startTransition(() => {
                                window.location.href = "/myOffers";
                            });
                        }}
                    >
                       {isPending ? <Loading /> : 
                       <>
                             Ver minhas ofertas <PiArrowRight className="text-lg" />
                        </>
                       }
                    </Link>
                </div>
            </div>
            <div className="finishBox w-full flex justify-between items-center lg:hidden border-t border-gray-300 p-4">
                <button onClick={() => setSteps('program')} className={`w-16 h-10 border border-gray-300 rounded-full grid place-items-center text-[#2E3D50] text-lg`}>
                    Sair
                </button>
                <Link
                    href="/myOffers"
                    className="font-medium p-3 max-w-52 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90 disabled:opacity-50"
                    >
                    Ver minhas ofertas <PiArrowRight className="text-lg" />
                </Link>
            </div>
        </>
    )
}