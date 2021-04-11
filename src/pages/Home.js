import {StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup} from "./../components/Styles";

import Logo1 from './../assets/logo1.png'

const Home = () => {
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
            <StyledTitle size={65}>
                Hello World
            </StyledTitle>
            <StyledSubTitle size={27}>
                Sample Page
            </StyledSubTitle>
            <ButtonGroup>
                <StyledButton to='/login'>Login</StyledButton>
                <StyledButton to='/signup'>sign up</StyledButton>
            </ButtonGroup>
        </div>
    )
}
export default Home;