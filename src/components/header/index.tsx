import Image from "next/image";

export function Header() {
    return (
        <>
            <header className="w-full bg-[#1E90FF] text-white">
                <div className="container flex justify-between items-center py-3">
                    <Image className="w-32 object-contain" src="/images/logo.png" width={200} height={200} alt="foto da logo" />
                    <span className="rounded-full border border-white py-3 px-4 font-normal">
                        R$ 283,12
                    </span>
                </div>
            </header>
        </>
    )
}