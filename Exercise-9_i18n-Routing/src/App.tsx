import { IntlProvider } from 'react-intl';
import { HashRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { Numbers } from './components/Numbers';
import { Dates } from './components/Date';
import { messages, Texts } from './components/Texts';
import { NavBar } from './components/NavBar';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function useQuery(): URLSearchParams {
    return new URLSearchParams(useLocation().search);
}

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <RoutedApp />
            </Router>
        </>
    );
}

const RoutedApp = () => {
    const query = useQuery();
    const location = useLocation();
    const history = useHistory();
    const [lang, setLang] = useState(query.get('lang') || 'de');

    function setLanguage(language: string): void {
        console.log(`Switching to language: [${language}]`)
        setLang(language);
        history.push({
            pathname: location.pathname,
            search: `?lang=${language}`
        });
    }

    return (
        <IntlProvider locale={lang} messages={lang === 'de' ? messages.de : messages.en}>
            <NavBar currentLanguage={lang} setLanguage={setLanguage} />

            <Switch>
                <Route path="/numbers">
                    <Numbers />
                </Route>
                <Route path="/date">
                    <Dates />
                </Route>
                <Route path="/texts">
                    <Texts />
                </Route>
            </Switch>
        </IntlProvider>
    );
}

export default App;
