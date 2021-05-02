import styled from 'styled-components';
import MuiAppBar from '@material-ui/core/AppBar';
import ClassIcon from '@material-ui/icons/Class';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledAppBar = styled(MuiAppBar)`
    svg {
        margin-right: ${({ theme: { spacing } }) => spacing(2)}px;
    }
`;

function AppBar() {
    return (
        <StyledAppBar position="relative">
            <Toolbar>
                <ClassIcon />
                <Typography variant="h6" color="inherit" noWrap>
                    Fun with "numerals"
                </Typography>
            </Toolbar>
        </StyledAppBar>
    );
}

export default AppBar;
