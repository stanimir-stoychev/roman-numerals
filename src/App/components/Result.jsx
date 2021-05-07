import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import RomanNumerals from '../../RomanNumerals';

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

/**
 * A helper function that will safely try to get a Roman Numeral from a plain number.
 *
 * @param {number} number - The number which should be converted to a Roman Numeral
 * @returns {string} Either the Roman Numeral or a friendly message that it's out of bounds.
 */
const safeToRomanConverter = (number) => {
    const [base, { value: adjustment, power }] = RomanNumerals.boundlessToRoman(number);
    let result = base;

    if (adjustment) {
        if (power < 2) result += ` + ${adjustment}`;
        else result += ` + (${adjustment} x ${power})`;
    }

    return result;
};

function Result({ from = -1, roman = false, to = [] }) {
    const convertToTooltip = roman ? RomanNumerals.fromRoman : safeToRomanConverter;
    const [evaluatedResult, { value: adjustment, power } = {}] = to;

    let toValue = (
        <Tooltip arrow title={convertToTooltip(evaluatedResult)}>
            <Card>
                <Typography component="span">{evaluatedResult}</Typography>
            </Card>
        </Tooltip>
    );

    if (power > 0) {
        let Wrapper = React.Fragment;
        let wrapperProps = {};
        let wrapperTooltip = convertToTooltip(adjustment);

        if (power > 1) {
            Wrapper = Badge;
            wrapperProps = {
                badgeContent: `x ${power}`,
                color: 'secondary',
                component: 'div',
                overlap: 'circle',
            };

            wrapperTooltip = `${wrapperTooltip} x ${power} = ${wrapperTooltip * power}`;
        }

        toValue = (
            <>
                <Tooltip arrow title={convertToTooltip(evaluatedResult)}>
                    <Card>
                        <Typography component="span">{evaluatedResult}</Typography>
                    </Card>
                </Tooltip>
                <Typography component="span">+</Typography>
                <Wrapper {...wrapperProps}>
                    <Tooltip arrow title={wrapperTooltip}>
                        <Card>
                            <Typography component="span">{adjustment}</Typography>
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

Result.displayName = '"Fun with numbers" result';
Result.propTypes = {
    roman: PropTypes.bool,
    from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    to: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                power: PropTypes.number.isRequired,
                value: PropTypes.string.isRequired,
            }),
        ]),
    ).isRequired,
};

export { StyledResult };
export default Result;
