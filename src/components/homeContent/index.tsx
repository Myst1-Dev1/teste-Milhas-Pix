'use client';

import { useState } from "react";
import { ShowYourProgram } from "./showYourProgram";
import { OfferYourMilles } from "./offerYourMilles";
import { LoyaltyProgram } from "./loyaltyProgram";
import { FinishOrder } from "./finishOrder";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import Link from "next/link";

export function HomeContent() {
    const [steps, setSteps] = useState('program');
    const [formData, setFormData] = useState(
        { 
            product: "Liminar", 
            cpf: "",
            program: "",
            milesValue: '',
            milesToOffer: '',
            howToReceive: '',
            cpfOfTheHolder: '',
            accessLogin: '',
            password: '',
            phone: ''
        }
    );

    const stepsOrder = ["program", "miles", "loyalty", "finish"];
    const currentIndex = stepsOrder.indexOf(steps);

    return(
        <>
            <div className="container mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="hidden lg:flex flex-col">
                    <div onClick={() => setSteps('program')} className={`flex items-center gap-4 ${currentIndex > 0 ? 'bg-transparent' : 'bg-[#F9F9F9]'} cursor-pointer max-w-72 w-full p-4`}>
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 ${currentIndex > 0 ? 'bg-[#1E90FF]' : 'border-4 border-blue-200'} rounded-full grid place-items-center`}>
                                <div className="w-10 h-10 border-2 border-[#1E90FF] rounded-full grid place-items-center">
                                    <span className={`w-3 h-3 rounded-full ${currentIndex > 0 ? 'bg-white' : 'bg-[#1E90FF]'}`} />
                                </div>
                            </div>

                            <div className={`absolute top-12 w-[2px] h-8 ${currentIndex > 0 ? 'bg-[#1E90FF]' : 'bg-gray-300'}`}></div>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#2E3D50] font-medium">Passo 1</h2>
                            <p className="font-normal text-[#475569] text-sm">Escolha o programa</p>
                        </div>
                    </div>
                    <div onClick={() => setSteps('miles')} className={`flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer ${currentIndex > 1 || currentIndex === 0 ? 'bg-transparent' : 'bg-[#F9F9F9]'}`}>
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full grid place-items-center ${currentIndex > 1 ? 'bg-[#1E90FF]' : currentIndex === 0 ? 'border-none' : 'border-4 border-blue-200'}`}>
                                <div className={`w-10 h-10 border-2 ${currentIndex === 0 ? 'border-[#F0F0F0]' : 'border-[#1E90FF]'} rounded-full grid place-items-center`}>
                                    <span className={`w-3 h-3 rounded-full ${currentIndex === 0 ? 'bg-[#F0F0F0]' : currentIndex > 1 ? 'bg-white' : 'bg-[#1E90FF]'}`} />
                                </div>
                            </div>

                            <div className={`absolute top-12 w-[2px] h-8 ${currentIndex > 1 ? 'bg-[#1E90FF]' : 'bg-gray-300'}`}></div>
                        </div>
                        <div>
                            <h2 className={`text-xl ${currentIndex > 0 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} font-medium`}>Passo 2</h2>
                            <p className={`font-normal ${currentIndex > 0 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} text-sm`}>Oferte suas milhas</p>
                        </div>
                    </div>
                    <div onClick={() => setSteps('loyalty')} className={`flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer ${currentIndex < 2 || currentIndex === 3 ? 'bg-transparent' : 'bg-[#F9F9F9]'}`}>
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full grid place-items-center ${currentIndex > 2 ? 'bg-[#1E90FF]' : currentIndex < 2 ? 'border-none' : 'border-4 border-blue-200'}`}>
                                <div className={`w-10 h-10 border-2 ${currentIndex < 2 ? 'border-[#F0F0F0]' : 'border-[#1E90FF]'} rounded-full grid place-items-center`}>
                                    <span className={`w-3 h-3 rounded-full ${currentIndex < 2 ? 'bg-[#F0F0F0]' : currentIndex > 2 ? 'bg-white' : 'bg-[#1E90FF]'}`} />
                                </div>
                            </div>

                            <div className={`absolute top-12 w-[2px] h-8 ${currentIndex > 2 ? 'bg-[#1E90FF]' : 'bg-gray-300'}`}></div>
                        </div>
                        <div>
                            <h2 className={`text-xl ${currentIndex > 1 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} font-medium`}>Passo 3</h2>
                            <p className={`font-normal ${currentIndex > 1 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} text-sm`}>Insira os dados do programa</p>
                        </div>
                    </div>
                    <div onClick={() => setSteps('finish')} className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full grid place-items-center ${currentIndex > 2 ? 'bg-[#1E90FF]' : currentIndex < 3 ? 'border-none' : ''}`}>
                                <div className={`w-10 h-10 border-2 ${currentIndex < 3 ? 'border-[#F0F0F0]' : 'border-[#1E90FF]'} rounded-full grid place-items-center`}>
                                <span className="w-3 h-3 rounded-full bg-[#F0F0F0]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className={`text-xl ${currentIndex > 2 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} font-medium`}>Passo 4</h2>
                            <p className={`font-normal ${currentIndex > 2 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} text-sm`}>Pedido finalizado</p>
                        </div>
                    </div>
                </div>
                    {steps === 'program' && <ShowYourProgram setSteps={setSteps} formData={formData} />}
                    {steps === 'miles' && <OfferYourMilles setSteps={setSteps} formData={formData} />}
                    {steps === 'loyalty' && <LoyaltyProgram setSteps={setSteps} formData={formData} />}
                    {steps === 'finish' && <FinishOrder />}
            </div>
            <div className="lg:hidden border-t border-gray-300 p-4">
                {currentIndex === 3 ? 
                    <div className="flex justify-between w-full">
                        <button onClick={() => setSteps('program')} className={`border p-2 border-gray-300 rounded-full text-center max-w-20 w-full text-[#2E3D50] text-lg`}>
                            Sair
                        </button>
                        <Link
                            href="/myOffers"
                            className="font-medium p-3 max-w-60 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90 disabled:opacity-50"
                            >
                            Ver minhas ofertas <PiArrowRight className="text-lg" />
                        </Link>
                    </div>
                        :
                    <div className="w-full flex justify-between">
                        <button onClick={() => setSteps(stepsOrder[currentIndex - 1])} className={`${currentIndex === 1 || currentIndex === 2 ? '' : 'hidden'} w-10 h-10 border border-gray-300 rounded-full grid place-items-center text-[#2E3D50] text-lg`}>
                            <PiArrowLeft />
                        </button>
                        <div className="flex-1 flex items-center gap-4 justify-end">
                            <p className="text-[#475569] font-medium">
                                <span className="primary-color">{currentIndex + 1}</span> de {stepsOrder.length}
                            </p>

                            <button
                                onClick={() => setSteps(stepsOrder[currentIndex + 1])}
                                className="font-medium p-3 max-w-40 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90 disabled:opacity-50"
                                >
                                Prosseguir <PiArrowRight className="text-lg" />
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}