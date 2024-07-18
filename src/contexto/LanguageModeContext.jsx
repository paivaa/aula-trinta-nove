import { createContext, useState } from "react";

const LanguageContext = createContext();


const LanguageProvider = (props) => {
    const [ language, setLanguage ] = useState("pt-br");
    
    const changeLanguage = (idioma) => {
        setLanguage(idioma);
    };

    return (
        <>
        <LanguageContext.Provider value={ {language, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
        </>
    )
};


export {LanguageContext, LanguageProvider };