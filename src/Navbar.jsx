import { Route, NavLink } from 'react-router-dom'
import Home from './component/Home'
import Register from './component/Register'
import Login from './component/Login'
import Account from './component/Account'

import styled from 'styled-components'

const Drawer = styled.div`
    width : 100%;
    height : 50px;
    background-color : rgb(117, 110, 109,0.12);
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
                0 2px 2px rgba(0,0,0,0.12),
                0 4px 4px rgba(0,0,0,0.12),
                0 8px 8px rgba(0,0,0,0.12),
                0 16x 16px rgba(0,0,0,0.12);
    display : grid;
    grid-template-columns : 50% 50%
`;

const Title = styled.b`
    font-size:1.5em;
    text-align : center;
    color : black;
`;

const HomeLink = styled.div`
    height :50px;
    text-align : left;
    padding : 10px 0px 10px 30px
`;

const RightLink = styled.div`
    height : 50px;
    text-align : right;
    padding : 10px;
    display : grid;
    grid-template-columns : 75% 25%
`;

const RegisterLink = styled.div`
    height : 50px;
    text-align: right;
`;

const LogInLink = styled.div`
    padding-left: 40px;
    height : 50px;
    text-align : left
`;



const Navbar = () => {

    return (
        <div>
            <>
                <Drawer>

                    <HomeLink><NavLink style={{ textDecoration: 'none' }} to='/'><Title>Home</Title></NavLink></HomeLink>

                    {/* <NavLink style={{ textDecoration: 'none' }} to='/account'><Title>Account</Title></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/logout'><Title>Logout</Title></NavLink> */}


                    <RightLink>

                        <RegisterLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/register'><Title>Register</Title></NavLink>
                        </RegisterLink>

                        <LogInLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/login'><Title>Login</Title></NavLink>
                        </LogInLink>
                    </RightLink>

                </Drawer>

            </>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/account' component={Account} />
        </div>
    )
}

export default Navbar