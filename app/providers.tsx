'use client';

import { MenuProvider } from "@/src/context/menuContext";

interface ProvidersProps { 
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) { 
    return (
        <MenuProvider>
            {children}
        </MenuProvider>
    )
}
