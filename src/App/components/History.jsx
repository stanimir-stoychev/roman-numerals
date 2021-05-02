import React, { useContext } from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';

import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import RomanNumerals from '../../RomanNumerals';
import Context from '../context';
import { ROMAN_NUMERAL_ENTRY } from '../constants';

const StyledResult = styled(Container)`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: ${({ theme: { spacing } }) => spacing(2)}px;

    .MuiCard-root {
        display: flex;
        justify-content: center;
        margin: ${({ theme: { spacing } }) => spacing(0, 3)};
        max-width: ${({ theme: { spacing } }) => spacing(9)}px;
        padding: ${({ theme: { spacing } }) => spacing(1)}px;

        ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
            max-width: 150px;
        }
    }
`;

const StyledHistory = styled(Container)`
    padding: ${({ theme: { spacing } }) => spacing(2, 0, 4)};

    .MuiGrid-item {
        word-break: break-all;

        &:last-child span {
            font-weight: 500;
        }
    }
`;

function Result({ from = -1, roman = false, to = [] }) {
    const convertToTooltip = roman ? RomanNumerals.fromRoman : RomanNumerals.toRoman;
    const resultValueConfig = {
        adjustment: to[0], // Either the MAX RN or the actual value
        multiplier: to.length - 2, // How many times does it go over the limit
        value: to[to.length - 1], // The last item in the stack is always the user's result
    };

    let toValue = (
        <Tooltip arrow title={convertToTooltip(resultValueConfig.adjustment)}>
            <Card>
                <Typography component="span">{resultValueConfig.value}</Typography>
            </Card>
        </Tooltip>
    );

    if (resultValueConfig.multiplier > 0) {
        let Wrapper = React.Fragment;
        let wrapperProps = {};
        let wrapperTooltip = convertToTooltip(resultValueConfig.adjustment);

        if (resultValueConfig.multiplier > 1) {
            Wrapper = Badge;
            wrapperProps = {
                badgeContent: `x${resultValueConfig.multiplier}`,
                color: 'secondary',
                component: 'div',
                overlap: 'circle',
            };

            wrapperTooltip = `${wrapperTooltip} x ${resultValueConfig.multiplier} = ${
                wrapperTooltip * resultValueConfig.multiplier
            }`;
        }

        toValue = (
            <>
                <Tooltip arrow title={convertToTooltip(resultValueConfig.value)}>
                    <Card>
                        <Typography component="span">{resultValueConfig.value}</Typography>
                    </Card>
                </Tooltip>
                <Typography component="span">+</Typography>
                <Wrapper {...wrapperProps}>
                    <Tooltip arrow title={wrapperTooltip}>
                        <Card>
                            <Typography component="span">{resultValueConfig.adjustment}</Typography>
                        </Card>
                    </Tooltip>
                </Wrapper>
            </>
        );
    }

    return (
        <StyledResult>
            <Card>
                <Typography component="span">{from}</Typography>
            </Card>
            <Typography component="span"> = </Typography>
            {toValue}
        </StyledResult>
    );
}

function History() {
    const [history] = useContext(Context).history;

    return (
        <StyledHistory maxWidth="md">
            <Grid container direction="column-reverse" justify="center" spacing={2}>
                {history.reverse().map((entry) => {
                    const { type, values } = entry;
                    const key = values[0];
                    const toValue = type === ROMAN_NUMERAL_ENTRY ? values[1] : [values[1]];

                    return (
                        <Grid item key={uniqueId(key)} xs={12}>
                            <Result from={values[0]} roman={type === ROMAN_NUMERAL_ENTRY} to={toValue} />
                        </Grid>
                    );
                })}
            </Grid>
        </StyledHistory>
    );
}

export default History;
