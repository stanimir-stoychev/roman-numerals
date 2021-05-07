import { useContext } from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import RomanNumerals from '../../RomanNumerals';
import Context from '../context';
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
        const from = Number.parseInt(event.target.value);
        const to = RomanNumerals.boundlessToRoman(from);
        if (typeof to !== 'undefined')
            pushToHistory({ id: uniqueId(ROMAN_NUMERAL_ENTRY), type: ROMAN_NUMERAL_ENTRY, from, to });
    };

    const handleFromRomanChange = (event) => {
        const from = event.target.value?.toUpperCase();
        const to = RomanNumerals.fromRoman(from);
        if (typeof to !== 'undefined')
            pushToHistory({ id: uniqueId(ARABIC_NUMERAL_ENTRY), type: ARABIC_NUMERAL_ENTRY, from, to: [to] });
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
