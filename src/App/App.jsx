import { useState } from 'react';
import debounce from 'lodash/debounce';

import { ThemeProvider } from 'styled-components';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import AppBar from './components/AppBar';
import Context from './context';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hero from './components/Hero';
import History from './components/History';

const theme = createMuiTheme();

function App() {
    const [history, setHistory] = useState([]);
    const contextState = {
        history: [history, debounce((next) => setHistory((current) => [...current, next]), 250)],
    };

    return (
        <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Context.Provider value={contextState}>
                    <AppBar />
                    <main>
                        <Hero />
                        <History />
                    </main>
                </Context.Provider>
            </MuiThemeProvider>
        </ThemeProvider>
    );
}

export default App;
