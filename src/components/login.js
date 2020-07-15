import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,Redirect
  } from "react-router-dom";
  import About from './about';
class Login extends React.Component {
    render() {
        
        return (
            <>   
            <img src="assets/img/loginbg.jpg"/>
             <div className="parent">
                <div className="sidenav">
                    <div className="login-main-text">
                   <i className="fas fa-user-circle"></i>
                        <h2><center>Login</center></h2>
                    </div>
                    <div className="main">
                        <div className="col-md-6 col-sm-12">
                            <div className="login-form">
                                <form>
                                <div className="form-group">
                                       <i className="fa fa-user"/>
                                        <input type="text" className="form-control" placeholder="User Name"/>
                                        </div>
                                      
                                        <div className="form-group">
                                        <i className='fas fa-lock'></i>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    
                                    <button type="submit">Login</button>
                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                
             
            </>
        );
    }
}


export default Login;