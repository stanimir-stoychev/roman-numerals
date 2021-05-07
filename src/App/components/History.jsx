import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

const StyledHistoryLabel = styled(Typography)`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: ${({ theme: { spacing } }) => spacing(2, 0)};
`;

function History() {
    const [showMore, setShowMore] = useState(false);
    const [history] = useContext(Context).history;
    const [latest] = history;

    const toggleShowMore = () => setShowMore((show) => !show);

    if (history.length < 1) return null;

    return (
        <StyledHistory maxWidth="md">
            <Grid container direction="column" justify="center" spacing={2}>
                {latest && (
                    <Grid item key={latest.id} xs={12}>
                        <Result roman={latest.type === ROMAN_NUMERAL_ENTRY} {...latest} />
                    </Grid>
                )}
            </Grid>

            {history.length > 1 && (
                <>
                    <StyledHistoryLabel align="center" onClick={toggleShowMore}>
                        History
                        {showMore ? <ExpandLess /> : <ExpandMore />}
                    </StyledHistoryLabel>
                    <Collapse in={showMore} timeout="auto" unmountOnExit>
                        <Grid container direction="column" justify="center" spacing={2}>
                            {history.map((entry, index) => {
                                const { id, type, ...rest } = entry;
                                return (
                                    !!index && (
                                        <Grid item key={id} xs={12}>
                                            <Result roman={type === ROMAN_NUMERAL_ENTRY} {...rest} />
                                        </Grid>
                                    )
                                );
                            })}
                        </Grid>
                    </Collapse>
                </>
            )}
        </StyledHistory>
    );
}

export default History;
