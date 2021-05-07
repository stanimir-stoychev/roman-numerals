import React, { useContext } from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Context from '../context';
import { ROMAN_NUMERAL_ENTRY } from '../constants';
import Result from './Result';

const StyledHistory = styled(Container)`
    padding: ${({ theme: { spacing } }) => spacing(2, 0, 4)};

    .MuiGrid-item {
        word-break: break-all;

        &:first-child span {
            font-weight: 500;
        }
    }
`;

function History() {
    const [history] = useContext(Context).history;

    return (
        <StyledHistory maxWidth="md">
            <Grid container direction="column" justify="center" spacing={2}>
                {history.map((entry) => {
                    const { id, type, ...rest } = entry;
                    return (
                        <Grid item key={id} xs={12}>
                            <Result roman={type === ROMAN_NUMERAL_ENTRY} {...rest} />
                        </Grid>
                    );
                })}
            </Grid>
        </StyledHistory>
    );
}

export default History;
