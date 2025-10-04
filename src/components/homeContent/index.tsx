'use client';

import { useState } from "react";
import { ShowYourProgram } from "./showYourProgram";
import { OfferYourMilles } from "./offerYourMilles";
import { LoyaltyProgram } from "./loyaltyProgram";
import { FinishOrder } from "./finishOrder";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function HomeContent() {
    const [steps, setSteps] = useState('program');
    const [formData, setFormData] = useState(
        { 
            product: "Liminar", 
            cpf: "",
            program: "",
            milesValue: '',
            milesToOffer: '',
            howToReceive: 'Imediato',
            cpfOfTheHolder: '',
            accessLogin: '',
            password: '',
            phone: ''
        }
    );

    const stepsOrder = ["program", "miles", "loyalty", "finish"];
    const currentIndex = stepsOrder.indexOf(steps);

    useGSAP(() => {
        gsap.fromTo('.stepsBar', { scaleX: 0, transformOrigin: "top center", opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.7, ease: "sine"});
    },[]);

    useGSAP(() => {
        const tl = gsap.timeline({defaults: {stagger:0.4, delay:0.2, duration: 0.6, ease: 'power1.out'}});

        tl.fromTo('.form', { opacity:0, y:30 }, { opacity:1, y:0 });
        tl.fromTo('.box', { opacity:0, x:30 }, { opacity:1, x:0 });
    }, [steps]);

    useGSAP(() => {
        switch(currentIndex) {
            case 1:
                gsap.fromTo('.lineOne', {opacity:0, height:0}, {opacity:1, height: '32px', duration:0.4, ease:'power2.out'});
            break;
            case 2:
                gsap.fromTo('.lineTwo', {opacity:0, height:0}, {opacity:1, height: '32px', duration:0.4, ease:'power2.out'});
            break;
            case 3:
                gsap.fromTo('.lineThree', {opacity:0, height:0}, {opacity:1, height: '32px', duration:0.4, ease:'power2.out'});
            break;
        }
    }, [currentIndex]);

    return(
        <>
            <div className="container mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="hidden stepsBar lg:flex flex-col">
                    <div className={`flex items-center gap-4 ${currentIndex > 0 ? 'bg-transparent' : 'bg-[#F9F9F9]'} cursor-pointer max-w-72 w-full p-4`}>
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 ${currentIndex > 0 ? 'bg-[#1E90FF]' : 'border-4 border-blue-200'} rounded-full grid place-items-center`}>
                                <div className="w-10 h-10 border-2 border-[#1E90FF] rounded-full grid place-items-center">
                                    <span className={`w-3 h-3 rounded-full ${currentIndex > 0 ? 'bg-white' : 'bg-[#1E90FF] animate-ping'}`} />
                                </div>
                            </div>

                            <div className={`absolute top-12 w-[2px] h-8 lineOne ${currentIndex > 0 ? 'bg-[#1E90FF]' : 'bg-gray-300'}`}></div>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#2E3D50] font-medium">Passo 1</h2>
                            <p className="font-normal text-[#475569] text-sm">Escolha o programa</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer transition-all duration-500 ${currentIndex > 1 || currentIndex === 0 ? 'bg-transparent' : 'bg-[#F9F9F9]'}`}>
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full grid place-items-center transition-all duration-500 ${currentIndex > 1 ? 'bg-[#1E90FF]' : currentIndex === 0 ? 'border-none' : 'border-4 border-blue-200'}`}>
                                <div className={`w-10 h-10 border-2 transition-all duration-500 ${currentIndex === 0 ? 'border-[#F0F0F0]' : 'border-[#1E90FF]'} rounded-full grid place-items-center`}>
                                    <span className={`w-3 h-3 rounded-full transition-all duration-500 ${currentIndex === 0 ? 'bg-[#F0F0F0]' : currentIndex > 1 ? 'bg-white' : 'bg-[#1E90FF] animate-ping'}`} />
                                </div>
                            </div>

                            <div className={`absolute top-12 w-[2px] h-8 lineTwo ${currentIndex > 1 ? 'bg-[#1E90FF]' : 'bg-gray-300'}`}></div>
                        </div>
                        <div>
                            <h2 className={`text-xl ${currentIndex > 0 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} font-medium`}>Passo 2</h2>
                            <p className={`font-normal ${currentIndex > 0 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} text-sm`}>Oferte suas milhas</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer ${currentIndex < 2 || currentIndex === 3 ? 'bg-transparent' : 'bg-[#F9F9F9]'}`}>
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full grid place-items-center transition-all duration-500 ${currentIndex > 2 ? 'bg-[#1E90FF]' : currentIndex < 2 ? 'border-none' : 'border-4 border-blue-200'}`}>
                                <div className={`w-10 h-10 border-2 transition-all duration-500 ${currentIndex < 2 ? 'border-[#F0F0F0]' : 'border-[#1E90FF]'} rounded-full grid place-items-center`}>
                                    <span className={`w-3 h-3 rounded-full transition-all duration-500 ${currentIndex < 2 ? 'bg-[#F0F0F0]' : currentIndex > 2 ? 'bg-white' : 'bg-[#1E90FF] animate-ping'}`} />
                                </div>
                            </div>

                            <div className={`absolute top-12 w-[2px] h-8 lineThree ${currentIndex > 2 ? 'bg-[#1E90FF]' : 'bg-gray-300'}`}></div>
                        </div>
                        <div>
                            <h2 className={`text-xl ${currentIndex > 1 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} font-medium`}>Passo 3</h2>
                            <p className={`font-normal ${currentIndex > 1 ? 'text-[#2E3D50]' : 'text-[#CBD5E1]'} text-sm`}>Insira os dados do programa</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-w-72 w-full p-4 cursor-pointer">
                        <div className="relative flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full grid place-items-center transition-all duration-500 ${currentIndex > 2 ? 'bg-[#1E90FF]' : currentIndex < 3 ? 'border-none' : ''}`}>
                                <div className={`w-10 h-10 border-2 transition-all duration-500 ${currentIndex < 3 ? 'border-[#F0F0F0]' : 'border-[#1E90FF]'} rounded-full grid place-items-center`}>
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
                    {steps === 'program' && <ShowYourProgram setSteps={setSteps} formData={formData} setFormData={setFormData} />}
                    {steps === 'miles' && <OfferYourMilles setSteps={setSteps} formData={formData} setFormData={setFormData} />}
                    {steps === 'loyalty' && <LoyaltyProgram setSteps={setSteps} formData={formData} setFormData={setFormData} />}
                    {steps === 'finish' && <FinishOrder setSteps={setSteps} />}
            </div>
        </>
    )
}