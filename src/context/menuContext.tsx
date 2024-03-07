'use client'

import React, { createContext, useContext, useState } from 'react';

interface UserContextProps {
    isMenuMobileOpen: boolean;
    toggleMenu: () => void;
}

const MenuContext = createContext<UserContextProps | null>(null);

export const useMenu = () => {
    return useContext(MenuContext);
}

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

    const toggleMenu = () => { 
        setIsMenuMobileOpen(!isMenuMobileOpen);
    }

    return (
        <MenuContext.Provider value={{ isMenuMobileOpen, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    )
}