import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {IntlProvider} from "react-intl";
import {LOCALES} from "../i18n/locale";
import {message} from "../i18n/message";
import {useState} from "react";

const App = () => {

    function getInitialLocale() {
        const savedLocale = JSON.parse(localStorage.getItem('locale'))
        return savedLocale || locale
    }

    const locale = LOCALES.RUSSIAN
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale())
    const hangeChange = ({target: {value}}) => {
        setCurrentLocale(value)
        localStorage.setItem('locale', JSON.stringify(value))
    }

    return (
        <IntlProvider defaultLocale='en'
                      locale={currentLocale}
                      messages={message[currentLocale]}
        >
            <div>
                <Header
                    currentLocale={currentLocale}
                    hangeChange={hangeChange}
                />
                <Content/>
                <Footer/>
            </div>
        </IntlProvider>

    );
};

export default App;
