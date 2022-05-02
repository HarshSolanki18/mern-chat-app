import {createContext,useState,useContext} from 'react';

export const themes={
    light:'light',
    dark:'dark'
}
export const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('light');

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const ThemeState=()=>{
    return useContext(ThemeContext);
}