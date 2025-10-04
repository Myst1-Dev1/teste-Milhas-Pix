'use client';

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Header() {
    
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { stagger: 0.3, duration: 0.4, ease: 'power1.out' } });

        tl.fromTo('.logo', { opacity: 0, y: 60 }, { opacity: 1, y: 0 });
        tl.fromTo('.priceValueBox', { opacity: 0, y: 60 }, { opacity: 1, y: 0 });

        gsap.utils.toArray<HTMLSpanElement>('.priceValue').forEach((el) => {
            const finalValue = parseFloat(el.dataset.value!.replace(',', '.'));

            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: finalValue,
                    duration: 2,
                    delay:0.7,
                    ease: 'power',
                    onUpdate: () => {
                        el.innerText = Number(el.innerText)
                            .toFixed(2)
                            .replace('.', ',');
                    },
                }
            );
        });
    }, []);
    
    return (
        <>
            <header className="w-full bg-[#1E90FF] text-white">
                <div className="container px-4 lg:px-0 flex justify-between items-center py-3">
                    <Image className="logo w-32 h-10 object-contain" src="/images/logo.png" quality={75} width={200} height={200} alt="foto da logo" />
                    <span className="priceValueBox rounded-full border border-white py-3 px-4 font-normal">
                        R$ <span className="priceValue" data-value="283,12"> 0,00</span>
                    </span>
                </div>
            </header>
        </>
    )
}