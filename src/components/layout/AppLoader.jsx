import React, { useState, useEffect } from 'react';

const LOGO_IMG_SRC = "/assets/transparent_main_logo_(2).png";

const AppLoader = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        setTimeout(() => setStage(1), 500);
        setTimeout(() => setStage(2), 2000);
        setTimeout(onComplete, 2600);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050A18] transition-opacity duration-700 ${stage === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className={`transition-all duration-1000 transform ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex flex-col items-center justify-center gap-6 mb-8">
                    <img
                        src={LOGO_IMG_SRC}
                        alt="Insyver Technologies"
                        className="w-24 h-auto object-contain animate-pulse"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {/* Brand Name for Loader */}
                    {/* <div className="flex flex-col items-center justify-center gap-3">
                        <span className="text-white text-3xl font-extrabold tracking-tight leading-none">Insyver</span>
                        <span className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase">Technologies</span>
                    </div> */}

                    {/* Brand Name for Loader */}
                    <div className="flex flex-col items-center justify-center -space-y-1">
                        <span className="text-white text-3xl font-extrabold tracking-tight leading-none font-old-standard mb-2">
                            Insyver Technologies
                        </span>
                        <span className="text-slate-400 text-xs font-bold tracking-[0.2em] font-joly-text">
                            (OPC) Pvt. Ltd.
                        </span>
                    </div>
                </div>
                <div className="h-1 w-48 bg-slate-800 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-blue-500 w-full animate-[loaderReveal_1.5s_infinite_ease-in-out]"></div>
                </div>
            </div>
        </div>
    );
};

export default AppLoader;