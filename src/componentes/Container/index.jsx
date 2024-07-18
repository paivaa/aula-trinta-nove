import { useContext } from "react";
import { DarkModeContext } from "../../contexto/DarkModeContext";
import styles from './container.module.css';
import { LanguageContext } from "../../contexto/LanguageModeContext";

const Container = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { language, changeLanguage } = useContext(LanguageContext);

    const obj_light = {
        'pt-br': 'Modo Claro',
        'en': 'Light Mode',
        'jp': 'ライトモード' 
    }

    const obj_dark = {
        'pt-br': 'Modo Escuro',
        'en': 'Dark Mode',
        'jp': 'ダークモード'
    }

    return (
        <>
            <div className={darkMode ? `${styles.container} ${styles.containerDark}` : `${styles.container} ${styles.containerLight}`}>
                <button onClick={() => toggleDarkMode()}>{darkMode ? `${obj_light[language]}` : `${obj_dark[language]}`}</button>
                <br />
                <select  onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="pt-br" selected>pt-br</option>
                    <option value="en">en</option>
                    <option value="jp">jp</option>
                </select>
            </div>
        </>
    )
}


export default Container;