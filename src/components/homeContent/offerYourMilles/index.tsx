'use client';

import { AllData, StepTwo } from "@/@types/StepsTypes";
import { Loading } from "@/components/loading";
import { handleMoneyChange } from "@/utils/masks/money_mask";
import { stepTwoSchema } from "@/utils/validations/stepTwo";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiAirplaneInFlightBold, PiArrowLeft, PiArrowRight, PiCaretDoubleDown, PiPlus } from "react-icons/pi";

interface OfferYourMillesProps {
    setSteps: React.Dispatch<React.SetStateAction<string>>
    formData: StepTwo;
    setFormData:React.Dispatch<React.SetStateAction<AllData>>
}

type RankingData = {
    mile_value: number;
    description: string;
    position: number
}

export function OfferYourMilles({ setSteps, formData }:OfferYourMillesProps) {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } , setValue } = useForm<StepTwo>(
        { 
            defaultValues: formData ,
            resolver: zodResolver(stepTwoSchema)
        }
    );

    const [toogleMidia, setToogleMidia] = useState(false);
    const [rankingData, setRankingData] = useState<RankingData[]>([]);
    const [selectHowToReceive, setSelectHowToReceive] = useState('Imediato')

    const value = watch('milesValue');

    const fetchRanking = async (value: string) => {
        if(!value) return;

        try {
            const response = await fetch(`https://api.milhaspix.com/simulate-ranking?mile_value=${value}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            setRankingData(data);
        } catch (error) {
            console.error("Erro ao buscar ranking:", error);
        }
    };

    const handleProceed = async (formData: StepTwo) => {
        const existingFormData = JSON.parse(localStorage.getItem('formData') || '{}');
        const updatedFormData = { ...existingFormData, ...formData };

        localStorage.setItem('formData', JSON.stringify(updatedFormData));

        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        console.log("Dados", formData);
        setSteps('loyalty');
    };

    useEffect(() => {
        fetchRanking(value);
    }, [value]);

    useGSAP(() => {
        gsap.fromTo('.toogleContent', 
            { opacity:0, y:30 }, 
            { opacity:1, y:0, duration:0.4, ease:'power1' }
        );
    }, [toogleMidia]);

    return (
        <>
            <form onSubmit={handleSubmit(handleProceed)} className="form col-span-1 lg:col-span-2 px-4 lg:px-0">
                <div className="w-full rounded-lg border border-[#E2E2E2]">
                    <div className="p-3 border-b border-[#E2E2E2] flex justify-between items-center">
                        <h2 className="font-medium text-[#2E3D50] text-lg"><span className="primary-color">02.</span>  Oferte suas milhas</h2>
                        {errors.milesValue && <span className="hidden lg:block px-4 py-1 bg-red-100 rounded-full text-[#DC2B2B] font-medium">Escolha entre <span className="font-bold">R$ 14,00</span> e <span className="font-bold">R$ 16,56</span></span>}
                    </div>
                    <div className="p-3">
                        <h2 className="mb-2 font-medium text-[#2E3D50]">Quero receber</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            <div onClick={() => {setSelectHowToReceive('Imediato'); setValue("howToReceive", "Imediato")}} className={`cursor-pointer ${selectHowToReceive === 'Imediato' ? 'border-2 border-[#1E90FF]' : 'border border-gray-300 opacity-40'} font-medium rounded-full  w-full p-2 grid place-items-center`}>
                                Imediato
                            </div>
                            <div onClick={() => {setSelectHowToReceive('em 2 dias'); setValue("howToReceive", "em 2 dias")}} className={`cursor-pointer ${selectHowToReceive === 'em 2 dias' ? 'border-2 border-[#1E90FF]' : 'border border-gray-300 opacity-40'} font-medium rounded-full  w-full p-2 grid place-items-center`}>
                                em 2 dias
                            </div>
                            <div onClick={() => {setSelectHowToReceive('em 7 dias'); setValue("howToReceive", "em 7 dias")}} className={`cursor-pointer ${selectHowToReceive === 'em 7 dias' ? 'border-2 border-[#1E90FF]' : 'border border-gray-300 opacity-40'} font-medium rounded-full  w-full p-2 grid place-items-center`}>
                                em 7 dias
                            </div>
                            <div onClick={() => {setSelectHowToReceive('Depois do voo'); setValue("howToReceive", "Depois do voo")}} className={`cursor-pointer ${selectHowToReceive === 'Depois do voo' ? 'border-2 border-[#1E90FF]' : 'border border-gray-300 opacity-40'} font-medium rounded-full  w-full p-2 grid place-items-center`}>
                                Depois do voo
                            </div>
                        </div>
                    </div>
                    <input type="hidden" {...register("howToReceive", { required: true })} />
                    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="milhas" className="font-medium text-[#2E3D50] text-lg">Milhas ofertadas</label>
                            <div className="flex justify-between items-center gap-3 font-medium border border-[#E2E2E2] rounded-full py-2 w-full">
                                <input 
                                    type="text"
                                    className="outline-none px-3 placeholder-[#2E3D50]"
                                    onInput={(e:React.FormEvent<HTMLInputElement>) => {
                                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                                    }}
                                     {...register("milesToOffer", { required: true })}
                                    placeholder="10.000" />
                                <PiAirplaneInFlightBold className="mr-3 text-[#1E90FF] text-lg" />
                            </div>
                            {errors.milesToOffer && (
                                <p className="text-red-500 text-sm mt-1">{errors.milesToOffer.message}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="milhas" className="font-medium text-[#2E3D50] text-lg">Valor a cada 1.000 milhas</label>
                            <div className={`relative border ${errors.milesValue ? 'border-red-500' : 'border-[#E2E2E2]'} rounded-full px-3 py-2 w-full`}>
                                <div className="flex items-center pr-2">
                                    <span className={`${errors.milesValue ? 'bg-red-100 text-[#DC2B2B]' : 'bg-[#E2E2E2] text-[#2E3D50]'} px-2 py-1 rounded-full text-sm font-semibold`}>
                                        R$
                                    </span>
                                    <input
                                        type="text" 
                                        className="outline-none px-3 placeholder-[#2E3D50]" 
                                        placeholder="0,00" 
                                        onInput={handleMoneyChange}
                                        {...register("milesValue", { required: true })}
                                    />
                                </div>
                                <PiCaretDoubleDown className={`${errors.milesValue ? 'text-[#DC2B2B]' : 'text-gray-600'} text-lg shrink-0 absolute right-3 top-3`} />
                            </div>
                            {errors.milesValue &&
                                <span className="block lg:hidden text-[#DC2B2B] font-medium">Escolha entre <span className="font-bold">R$ 14,00</span> e <span className="font-bold">R$ 16,56</span></span>
                            }
                            <div className="lg:hidden flex gap-2 mt-3 flex-wrap">
                                <span className="primary-color border border-gray-300 rounded-full py-1 px-2">1º R$ 15,23</span>
                                <span className="primary-color border border-gray-300 rounded-full py-1 px-2">2º R$ 15,23</span>
                                <span className="primary-color border border-gray-300 rounded-full py-1 px-2">3º R$ 15,23</span>
                                <span className="text-[#12A19A] bg-[#12A19A1A] border-2 border-[#12A19A] rounded-full py-1 px-2">Você 4º R$ 15,23</span>
                                <span className="primary-color border border-gray-300 rounded-full py-1 px-2">5º R$ 15,23</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 flex items-center gap-3">
                            <div onClick={() => setToogleMidia(!toogleMidia)} className={`cursor-pointer w-14 h-8 rounded-full ${toogleMidia ? 'bg-[#1E90FF]' : 'bg-[#E2E2E2]'} flex items-center p-1`}>
                                <div className={`bg-white h-6 w-6 rounded-full shadow-md transition-all duration-500 ${toogleMidia ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </div>
                            <h3 className="text-[#8F8F8F] font-medium">Definir média de milhas por passageiro</h3>
                        </div>
                        {toogleMidia &&
                            <div className="toogleContent p-3 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                                <div className="font-medium border border-[#E2E2E2] text-[#2E3D50] rounded-full py-2 px-3 w-full">
                                    10.000
                                </div>
                                <div className="px-3 md:text-xs text-lg flex gap-1 justify-center items-center font-medium bg-transparent lg:bg-[#12A19A1A] text-[#12A19A] rounded-full py-2 w-full">
                                    Melhor média para a sua oferta: <span className="font-bold">27.800</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="hidden lg:flex justify-between mt-4 mb-0 lg:mb-4">
                    <button onClick={() => setSteps('program')} className="font-medium p-3 max-w-28 w-full rounded-full border border-gray-300 text-[#2E3D50] flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:bg-[#1E90FF] hover:text-white"><PiArrowLeft className="text-lg" /> Voltar</button>
                    <button type="submit" className="font-medium p-3 max-w-40 h-[50px] w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">
                        {isSubmitting ? <Loading /> : <>Prosseguir <PiArrowRight className="text-lg" /></>}
                    </button>
                </div>

                <div className="absolute -bottom-[180px] left-0 right-0 w-full flex justify-between items-center lg:hidden border-t border-gray-300 p-4">
                    <button onClick={() => setSteps('program')} className={`w-10 h-10 border border-gray-300 rounded-full grid place-items-center text-[#2E3D50] text-lg`}>
                        <PiArrowLeft />
                    </button>
                    <div className="flex items-center gap-4 justify-end flex-1">
                        <p className="text-[#475569] font-medium">
                            <span className="primary-color">2</span> de 4
                        </p>

                        <button
                            type="submit"
                            className="font-medium p-3 max-w-40 w-full rounded-full bg-[#1E90FF] text-white flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90 disabled:opacity-50"
                            >
                            {isSubmitting ? <Loading /> : 
                            <>
                                Prosseguir <PiArrowRight className="text-lg" />
                            </>}
                        </button>
                    </div>
                </div>
            </form>
            <div className="box">
                <div className="px-4 lg:px-0">
                    <div className="border border-gray-300 p-3 rounded-lg h-fit">
                        <div className="flex items-center">
                            <h3 className="text-[#2E3D50] font-medium text-lg">Média de milhas</h3>
                            <PiPlus className="ml-auto block primary-color text-xl lg:hidden" />
                        </div>
                        <p className="font-normal text-sm text-[#475569]">Ao vender mais de 20.000 milhas, ative as Opções Avançadas para definir a média de milhas por emissão.</p>
                    </div>
                    <div className="hidden lg:block mt-3">
                        <h3 className="text-[#2E3D50] font-medium text-lg">Ranking de ofertas</h3>
                        <div className="mt-3 border border-gray-300 rounded-lg">
                            {rankingData?.map((rank, index:number) => (
                                <div key={index} className="font-medium flex gap-4 border-b border-gray-300 text-[#2E3D50] p-3">
                                    <span className="primary-color">{rank.position}º</span>
                                    {Intl.NumberFormat('pt-br', {
                                        style:'currency',
                                        currency: 'BRL'
                                    }).format(rank.mile_value)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="hidden lg:block text-[#2E3D50] font-medium text-lg">Receba até:</h3>
                        <div className="hidden lg:flex justify-between p-3 w-full bg-[#12A19A1A] text-[#12A19A] font-medium text-lg">
                            <span>R$</span>
                            24.325,23
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden justify-between p-3 w-full bg-[#12A19A1A] text-[#12A19A] font-bold text-lg">
                    <span className="font-medium">Receba até</span>
                    R$24.325,23
                </div>
            </div>
        </>
    )
}