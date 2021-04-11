import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';
import {FiMail, FiLock} from 'react-icons/fi';
import TextInput from './../components/FormLib';

import {  StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from './../components/Styles';
import Logo1 from './../assets/logo1.png';


const Login = () =>{
    return(
        <div>
            <StyledFormArea>
                <Avatar image={Logo1} />
                <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(20, "Password is too long").required('Required')
                        })
                    }
                    onSubmit={(values, {setSubmitting})=>{
                        console.log(values);
                    }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="test@example.com"
                                icon={<FiMail />}
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>}
                                {isSubmitting && (
                                    <Loader 
                                        type="ThreeDots"
                                        color={colors.theme}
                                        height={40}
                                        width={75}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>New here? <TextLink to="/signup">Signup</TextLink></ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2021
            </CopyrightText>
        </div>
    )
}

export default Login;