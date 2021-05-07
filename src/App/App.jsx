import { useState } from 'react';
import debounce from 'lodash/debounce';

import { ThemeProvider } from 'styled-components';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Context from './context';
import AppBar from './components/AppBar';
import ConvertingNumber from './components/ConvertingNumber';
import Hero from './components/Hero';
import History from './components/History';

const theme = createMuiTheme();

function App() {
    const [converting, setConverting] = useState(false);
    const [history, setHistory] = useState([]);

    const addToHistory = debounce((next) => {
        setHistory((current) => [next, ...current]);
        setConverting(false);
    }, 500);

    const contextState = {
        history: [
            history,
            (next) => {
                setConverting(true);
                addToHistory(next);
            },
        ],
    };

    return (
        <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Context.Provider value={contextState}>
                    <AppBar />
                    <main>
                        <Hero />
                        {converting && <ConvertingNumber />}
                        <History />
                    </main>
                </Context.Provider>
            </MuiThemeProvider>
        </ThemeProvider>
    );
}

export default App;
