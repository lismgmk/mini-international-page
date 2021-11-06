import {FormattedMessage} from "react-intl";
import {LOCALES} from "../i18n/locale";

const Header = ({currentLocale, hangeChange}) => {
    const languages = [
        {name: 'English', code: LOCALES.ENGLISH},
        {name: 'Русский', code: LOCALES.RUSSIAN},
        {name: '日本語', code: LOCALES.JAPANESE},
        {name: 'Français', code: LOCALES.FRENCH},
        {name: 'Deutsche', code: LOCALES.GERMAN}
    ]

    const menu = [
        {
            key: "contact_us",
            path: "#",
        },
        {
            key: "about_project",
            path: "#",
        },
    ];

    return (
        <header>
            <div className="container header_content">
                <div className="brand">ReactIntl</div>
                <nav>
                    <ul>
                        {menu.map(({key, path}) => (
                            <li key={key}>
                                <a href={path}>
                                    <FormattedMessage id={key}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="spacer"></div>
                <div className="switcher">
                    Languages
                    <select
                        value={currentLocale}
                        onChange={hangeChange}
                    >{
                        languages.map(({name, code}) => (
                            <option key={code} value={code}>
                                {name}
                            </option>
                        ))
                    }</select>
                </div>
            </div>
        </header>
    );
};

export default Header;
