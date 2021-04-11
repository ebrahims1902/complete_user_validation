import {StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors} from "./../components/Styles";

import Logo1 from './../assets/logo1.png'

const Dashboard = () => {
    return(
        <div>
            <div style={{
                position: 'absolute',
                top:0,
                left:0,
                backgroundColor: 'transparent',
                width: '100%',
                padding: '15px',
                display: 'flex',
                justifyContent: 'flex-start',
            }}>
                <Avatar image={Logo1} /> 
            </div>
            <StyledFormArea  bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome, User
                </StyledTitle>
                <StyledSubTitle size={27}>
                    Sample Page
                </StyledSubTitle>
                <ButtonGroup>
                    <StyledButton to='#'>Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            
        </div>
    )
}
export default Dashboard;