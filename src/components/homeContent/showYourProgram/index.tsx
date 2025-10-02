import React, { useState } from "react";

import Image from "next/image";
import { PiArrowRight, PiArrowsCounterClockwise, PiCaretUpDown, PiLockSimple, PiMinus, PiPlus } from "react-icons/pi";
import { handleCpfChange } from "@/utils/masks/cpf_mask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema } from "@/utils/validations/stepOne";
import { Loading } from "@/components/loading";
import { StepOne } from "@/@types/StepsTypes";

interface ShowYourProgramProps {
    setSteps: React.Dispatch<React.SetStateAction<string>>
    formData: StepOne;
}

export function ShowYourProgram({ setSteps, formData }:ShowYourProgramProps) {
    const { register, handleSubmit, formState: { errors, isSubmitting } , setValue } = useForm<StepOne>(
        { 
            defaultValues: formData ,
            resolver: zodResolver(stepOneSchema)
        });

    const [selectedProgram, setSelectedProgram] = useState('Tudo Azul')

    const handleProceed = async (formData: StepOne) => {
        console.log("Dados", formData);

        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        setSteps('miles');
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleProceed)} className="col-span-1 lg:col-span-2 px-4 lg:px-0">
                <div className="w-full h-fit rounded-lg border border-[#E2E2E2]">
                    <div className="p-4 border-b border-[#E2E2E2]">
                        <h2 className="font-medium text-[#2E3D50] text-lg"><span className="primary-color">01.</span>  Escolha o programa de fidelidade</h2>
                    </div>
                    <div className="mt-3 px-4 block lg:hidden">
                        <div className="flex justify-between items-center outline-none text-[#2E3D50] font-medium border border-[#E2E2E2] rounded-full p-3 w-full appearance-none pr-10">
                            <div className="flex items-center gap-3">
                                <PiArrowsCounterClockwise className="primary-color" />
                                Tudo Azul
                            </div>
                            <Image src="/images/tudoAzul-logo.png" className="w-13 object-cover" width={200} height={200} alt="logo do tudo azul" />
                        </div>
                    </div>
                    <div className="p-4 hidden lg:flex justify-between gap-3">
                        <div onClick={() => {setSelectedProgram('Tudo Azul'); setValue("program", "Tudo Azul")}} className={`cursor-pointer border-2 ${selectedProgram === 'Tudo Azul' ? 'border-[#1E90FF]' : 'border-gray-300 opacity-50'} rounded-full  w-full p-2 grid place-items-center`}>
                            <Image src="/images/tudoAzul-logo.png" className="w-13 object-contain" width={200} height={200} alt="logo do tudo azul" />
                        </div>
                        <div onClick={() => {setSelectedProgram('Smiles'); setValue("program", "Smiles")}} className={`cursor-pointer border-2 ${selectedProgram === 'Smiles' ? 'border-[#1E90FF]' : 'border-gray-300 opacity-50'} rounded-full  w-full p-2 grid place-items-center`}>
                            <Image src="/images/smiles-logo.png" className="w-13 object-contain" width={200} height={200} alt="logo do smiles" />
                        </div>
                        <div onClick={() => {setSelectedProgram('Latam Pass'); setValue("program", "Latam Pass")}} className={`cursor-pointer border-2 ${selectedProgram === 'Latam Pass' ? 'border-[#1E90FF]' : 'border-gray-300 opacity-50'} rounded-full  w-full p-2 grid place-items-center`}>
                            <Image src="/images/latamPass-logo.png" className="w-16 object-contain" width={200} height={200} alt="logo do latam pass" />
                        </div>
                        <div onClick={() => {setSelectedProgram('Air Portugal'); setValue("program", "Air Portugal")}} className={`cursor-pointer border-2 ${selectedProgram === 'Air Portugal' ? 'border-[#1E90FF]' : 'border-gray-300 opacity-50'} rounded-full  w-full p-2 grid place-items-center`}>
                            <Image src="/images/airPortugal-logo.png" className="w-20 object-contain" width={200} height={200} alt="logo do air portugal" />
                        </div>
                    </div>
                    <input type="hidden" {...register("program", { required: true })} />
                    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">Produto</label>
                            <div className="relative w-full">
                                <select
                                    {...register("product", { required: true })}
                                    id="product"
                                    className="outline-none text-[#2E3D50] font-medium border border-[#E2E2E2] rounded-full p-3 w-full appearance-none pr-10"
                                >
                                    <option value="Liminar">Liminar</option>
                                    <option value="Comum">Comum</option>
                                </select>
                                <PiCaretUpDown className="absolute right-2 top-1/2 -translate-y-1/2 primary-color text-lg pointer-events-none" />
                            </div>
                            {errors.product && (
                                <p className="text-red-500 text-sm mt-1">{errors.product.message}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="product" className="text-[#2E3D50] font-medium text-lg">CPF&#39;s Disponíveis</label>
                            <div className="flex justify-between items-center gap-3 text-[#2E3D50] font-medium border border-[#E2E2E2] rounded-full py-3 w-full">
                                <input type="text" {...register("cpf", { required: true })}
                                    onInput={(e) => handleCpfChange(e)} 
                                    maxLength={14} 
                                    className="outline-none px-3" 
                                    placeholder="Ilimitado" 
                                />
                                <PiLockSimple className="mr-3 text-[#8F8F8F] text-lg" />
                            </div>
                            {errors.cpf && (
                                <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>
                            )}
                        </div>
                    </div>
                </div>
                <button type="submit" className="hidden ml-auto font-medium mt-4 p-3 max-w-40 w-full rounded-full bg-[#1E90FF] text-white lg:flex justify-center items-center gap-3 cursor-pointer transition-all duration-500 hover:brightness-90">
                    {isSubmitting ? <Loading /> : <>Prosseguir <PiArrowRight className="text-lg" /></>}
                </button>
            </form>
            <div className="w-full px-4 lg:px-0">
                <div className="block lg:hidden border border-gray-300 p-3 rounded-lg h-fit mb-4">
                    <div className="flex items-center">
                        <h3 className="text-[#2E3D50] font-medium text-lg">Selecione o programa</h3>
                        <PiPlus className="ml-auto block primary-color text-xl lg:hidden" />
                    </div>
                </div>
                <div className="border border-gray-300 p-3 rounded-lg h-fit mb-8">
                    <div className="flex items-center">
                        <h3 className="text-[#2E3D50] font-medium text-lg">Selecione o programa</h3>
                        <PiMinus className="ml-auto block lg:hidden" />
                    </div>
                    <p className="font-normal text-sm text-[#475569]">Escolha de qual programa de fidelidade você quer vender suas milhas. Use apenas contas em seu nome.</p>
                </div>
            </div>
        </>
    )
}