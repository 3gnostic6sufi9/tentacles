import { CRTEffects } from "../ui/crt-effects";

type IntroScreenProps = {
  onChoice: (choice: "story" | "info") => void;
};

export function IntroScreen({ onChoice }: IntroScreenProps) {
  return (
    <div className="min-h-[100svh] bg-black text-green-500 p-4 flex flex-col items-center justify-center font-mono relative overflow-hidden">
      {/* CRT Effects Layer */}
      <CRTEffects />

      <div className="text-center mb-8 z-10">
        {/* Extra small screens (smallest iPhones) */}
        <pre className="sm:hidden whitespace-pre text-[0.45rem]">
          {`
▄▄▄█████▓█████ ███▄    █▄▄▄█████▓▄▄▄      ▄████▄  ██▓   ▓█████  ██████  
▓  ██▒ ▓▓█   ▀ ██ ▀█   █▓  ██▒ ▓▒████▄   ▒██▀ ▀█ ▓██▒   ▓█   ▀▒██    ▒  
▒ ▓██░ ▒▒███  ▓██  ▀█ ██▒ ▓██░ ▒▒██  ▀█▄ ▒▓█    ▄▒██░   ▒███  ░ ▓██▄    
░ ▓██▓ ░▒▓█  ▄▓██▒  ▐▌██░ ▓██▓ ░░██▄▄▄▄██▒▓▓▄ ▄██▒██░   ▒▓█  ▄  ▒   ██▒ 
  ▒██▒ ░░▒████▒██░   ▓██░ ▒██▒ ░ ▓█   ▓██▒ ▓███▀ ░██████░▒████▒██████▒▒ 
  ▒ ░░  ░░ ▒░ ░ ▒░   ▒ ▒  ▒ ░░   ▒▒   ▓▒█░ ░▒ ▒  ░ ▒░▓  ░░ ▒░ ▒ ▒▓▒ ▒ ░ 
    ░    ░ ░  ░ ░░   ░ ▒░   ░     ▒   ▒▒ ░ ░  ▒  ░ ░ ▒  ░░ ░  ░ ░▒  ░ ░ 
  ░        ░     ░   ░ ░  ░       ░   ▒  ░         ░ ░     ░  ░  ░  ░   
           ░  ░        ░              ░  ░ ░         ░  ░  ░  ░     ░   
                                     ░                                  
`}
        </pre>

        {/* Small/Medium screens (larger phones/tablets) */}
        <pre className="hidden sm:block lg:hidden whitespace-pre text-[0.5rem] sm:text-xs">
          {`
////////////////////////////////////////////////////////////////////////////
▄▄▄█████▓█████ ███▄    █▄▄▄█████▓▄▄▄      ▄████▄  ██▓   ▓█████  ██████  
▓  ██▒ ▓▓█   ▀ ██ ▀█   █▓  ██▒ ▓▒████▄   ▒██▀ ▀█ ▓██▒   ▓█   ▀▒██    ▒  
▒ ▓██░ ▒▒███  ▓██  ▀█ ██▒ ▓██░ ▒▒██  ▀█▄ ▒▓█    ▄▒██░   ▒███  ░ ▓██▄    
░ ▓██▓ ░▒▓█  ▄▓██▒  ▐▌██░ ▓██▓ ░░██▄▄▄▄██▒▓▓▄ ▄██▒██░   ▒▓█  ▄  ▒   ██▒ 
  ▒██▒ ░░▒████▒██░   ▓██░ ▒██▒ ░ ▓█   ▓██▒ ▓███▀ ░██████░▒████▒██████▒▒ 
  ▒ ░░  ░░ ▒░ ░ ▒░   ▒ ▒  ▒ ░░   ▒▒   ▓▒█░ ░▒ ▒  ░ ▒░▓  ░░ ▒░ ▒ ▒▓▒ ▒ ░ 
    ░    ░ ░  ░ ░░   ░ ▒░   ░     ▒   ▒▒ ░ ░  ▒  ░ ░ ▒  ░░ ░  ░ ░▒  ░ ░ 
  ░        ░     ░   ░ ░  ░       ░   ▒  ░         ░ ░     ░  ░  ░  ░   
           ░  ░        ░              ░  ░ ░         ░  ░  ░  ░     ░   
                                         ░                              
////////////////////////////////////////////////////////////////////////////
`}
        </pre>

        {/* Large screens (desktops) */}
        <pre className="hidden lg:block whitespace-pre text-sm lg:text-base">
          {`
////////////////////////////////////////////////////////////////////////////
▄▄▄█████▓█████ ███▄    █▄▄▄█████▓▄▄▄      ▄████▄  ██▓   ▓█████  ██████  
▓  ██▒ ▓▓█   ▀ ██ ▀█   █▓  ██▒ ▓▒████▄   ▒██▀ ▀█ ▓██▒   ▓█   ▀▒██    ▒  
▒ ▓██░ ▒▒███  ▓██  ▀█ ██▒ ▓██░ ▒▒██  ▀█▄ ▒▓█    ▄▒██░   ▒███  ░ ▓██▄    
░ ▓██▓ ░▒▓█  ▄▓██▒  ▐▌██░ ▓██▓ ░░██▄▄▄▄██▒▓▓▄ ▄██▒██░   ▒▓█  ▄  ▒   ██▒ 
  ▒██▒ ░░▒████▒██░   ▓██░ ▒██▒ ░ ▓█   ▓██▒ ▓███▀ ░██████░▒████▒██████▒▒ 
  ▒ ░░  ░░ ▒░ ░ ▒░   ▒ ▒  ▒ ░░   ▒▒   ▓▒█░ ░▒ ▒  ░ ▒░▓  ░░ ▒░ ▒ ▒▓▒ ▒ ░ 
    ░    ░ ░  ░ ░░   ░ ▒░   ░     ▒   ▒▒ ░ ░  ▒  ░ ░ ▒  ░░ ░  ░ ░▒  ░ ░ 
  ░        ░     ░   ░ ░  ░       ░   ▒  ░         ░ ░     ░  ░  ░  ░   
           ░  ░        ░              ░  ░ ░         ░  ░  ░  ░     ░   
                                         ░                              
////////////////////////////////////////////////////////////////////////////
`}
        </pre>
      </div>

      <div className="space-y-6 text-center z-10 px-4 w-full max-w-md">
        <div className="relative">
          <button
            onClick={() => onChoice("story")}
            className="w-full px-6 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-200"
          >
            ENTER THE ToT ARCHIVE
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => onChoice("info")}
            className="w-full px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-200"
          >
            SKIP TO NETWORK INFO
          </button>
        </div>
      </div>

      {/* Scanlines overlay */}
      <div className="pointer-events-none fixed inset-0 z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50" />
      </div>
    </div>
  );
}
