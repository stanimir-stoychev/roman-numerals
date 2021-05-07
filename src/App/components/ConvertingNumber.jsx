import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

const StyledConvertingNumber = styled(Container)`
    padding: ${({ theme: { spacing } }) => spacing(2, 0)};
`;

function ConvertingNumber() {
    return (
        <StyledConvertingNumber>
            <LinearProgress />
        </StyledConvertingNumber>
    );
}

export default ConvertingNumber;
