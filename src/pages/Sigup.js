import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';
import {FiMail, FiLock, FiUser, FiPhone} from 'react-icons/fi';

import TextInput from './../components/FormLib';

import { StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from './../components/Styles';
import Logo1 from './../assets/logo1.png';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// import {connect} from 'react-redux';
// import {signupUser} from './../auth/actions/userActions';
// import {useHistore} from 'react-router-dom'; 

const Signup = ({signupUser}) =>{
    // const history = useHistore();
    return(
        <div>
            <StyledFormArea>
                <Avatar image={Logo1} />
                <StyledTitle color={colors.theme} size={30}>Member Signup</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        name: "",
                        mobileNo: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(20, "Password is too long").required('Required'),
                            name: Yup.string().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match"),
                            mobileNo: Yup.string().required("Required").matches(phoneRegExp, 'Phone number is not valid').min(8, "Invalid Phone Number").max(10, "Invalid Phone Number")
                        })
                    }
                    // onSubmit={(values, {setSubmitting, setFieldError})=>{
                    //     signupUser(values, history, setFieldError, setSubmitting)
                    // }}
                    onSubmit={(values, {setSubmitting, setFieldError})=>{
                        signupUser(values, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput 
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Full Name"
                                icon={<FiUser />}
                            />
                            <TextInput 
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="test@example.com"
                                icon={<FiMail />}
                            />
                            <TextInput 
                                name="mobileNo"
                                type="numeric"
                                label="Phone Number"
                                placeholder="Phone Number"
                                icon={<FiPhone />}
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <TextInput 
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit" to="/dashboard">
                                    Signup
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
                <ExtraText>Already have an account? <TextLink to="/login">Login</TextLink></ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2021
            </CopyrightText>
        </div>
    )
}

// export default connect(null, {signupUser})(Signup);
export default Signup;