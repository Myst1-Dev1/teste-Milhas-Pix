'use client';

import { useState } from "react";
import { ShowYourProgram } from "./showYourProgram";
import { OfferYourMilles } from "./offerYourMilles";
import { LoyaltyProgram } from "./loyaltyProgram";
import { FinishOrder } from "./finishOrder";

export function HomeContent() {
    const [steps, setSteps] = useState('program');

    return(
        <>
            <div className="container py-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="hidden lg:flex flex-col">
                    <div onClick={() => setSteps('program')} className="flex items-center gap-4 bg-[#F9F9F9] cursor-pointer max-w-72 w-full p-4">
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
                    <div onClick={() => setSteps('miles')} className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
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
                    <div onClick={() => setSteps('loyalty')} className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
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
                    <div onClick={() => setSteps('finish')} className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
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
                {steps === 'program' && <ShowYourProgram setSteps={setSteps} />}
                {steps === 'miles' && <OfferYourMilles setSteps={setSteps} />}
                {steps === 'loyalty' && <LoyaltyProgram setSteps={setSteps} />}
                {steps === 'finish' && <FinishOrder />}
            </div>
        </>
    )
}