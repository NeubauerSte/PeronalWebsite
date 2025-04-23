import * as React from "react";
import Headline from "../components/ui/Headline.tsx";

export default function TextSection({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <div className="relative rounded-b-4xl rounded-t-[3.5rem] overflow-hidden border-[0.5px] border-[#63E] bg-black/30">
            {/* Inhalt */}
            <div className="relative z-10 p-12 text-center">
                <Headline
                    className="text-5xl text-white tracking-wide"
                    style={{ textShadow: "0 0 1px white, 0 0 12px rgba(255,255,255,0.4)" }}
                >
                    {title}
                </Headline>

                <div className="text-gray-200 text-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
