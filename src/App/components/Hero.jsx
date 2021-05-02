import { useContext } from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Context from '../context';
import fromRoman from '../helpers/fromRoman';
import toRoman from '../helpers/toRoman';
import { ARABIC_NUMERAL_ENTRY, ROMAN_NUMERAL_ENTRY } from '../constants';

const StyledHero = styled.div`
    background-color: ${({ theme: { palette } }) => palette.background.paper};
    padding: ${({ theme: { spacing } }) => spacing(8, 0, 3)};

    .UserInputs {
        margin: ${({ theme: { spacing } }) => spacing(4, 0)};
    }
`;

function Hero() {
    const [, pushToHistory] = useContext(Context).history;

    const handleToRomanChange = (event) => {
        const values = toRoman(Number.parseInt(event.target.value));
        if (values) pushToHistory({ type: ROMAN_NUMERAL_ENTRY, values });
    };

    const handleFromRomanChange = (event) => {
        const values = fromRoman(event.target.value?.toUpperCase());
        if (values) pushToHistory({ type: ARABIC_NUMERAL_ENTRY, values });
    };

    return (
        <StyledHero>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Fun with "numerals"
                </Typography>
                <Typography variant="h5" align="justify" color="textSecondary" paragraph>
                    Inspired by the great show "Fun with flags", this app intends to demonstrate the difference between
                    Roman numerals and the Hindu-Arabic numbering system.
                </Typography>
                <div className="UserInputs">
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <TextField
                                id="to-roman"
                                label="To Roman numeral"
                                onChange={handleToRomanChange}
                                type="number"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="from-roman"
                                label="From Roman numeral"
                                onChange={handleFromRomanChange}
                                type="text"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>
                </div>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Feel free to change any input to see some action.
                </Typography>
            </Container>
        </StyledHero>
    );
}

export default Hero;
