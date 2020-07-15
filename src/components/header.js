import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Redirect} from 'react-router'; 
 
class Header extends React.Component {
    
    
    render() {
        
        return (
            <>
            <header>
                    
                    <nav class="navigation">
                        <ul class="nav-list">
                            <li><a class="active" href="#">HOME</a></li>
                            <li><a href="/about">ABOUT</a></li>
                            <div class="dropdown">
                            <li><a href="#">SERVICES<i class='fa fa-caret-down'></i></a><div class="dropdown-content">
                            <a href="/inter">Intergrated Waste Management</a>
                           <a href="#">Off Site Waste Management</a>
                          <a href="#">Wet Waste Management</a>
                          <a href="#">Recyclable Waste Management</a>
                          <a href="#">Reject Waste Management</a></div></li></div>
                          <div class="dropdown">
                            <li><a href="#">CONSULTANCY<i class='fa fa-caret-down'></i></a>

                            <div class="dropdown-content">
                            <a href="#">Solutions For Commercial Spaces</a>
                            <a href="#">Solutions For Industries and Manufactures</a>
                            <a href="#">Solutions For Residential Homes And Gated Communities</a>
                            <a href="#">Solutions for Managing Resource Recover Centre ( RRC)</a>
                            <a href="#">Solutions For Educational Instituion</a>
                        </div></li></div>
                            <li><a href="#">EPR</a></li>
                            <li><a href="#">BIOMINING</a></li>
                            <li><a href="#">ZERO WASTE EVENTS</a></li>
                            <li><a href="#">PRODUCTS</a></li>
                            <li><a href="/login" class="a-btn">LOGIN</a></li>
                            <li><a href="#" class="a-btn">CONTACT US</a></li>
                            <li><a href="#" class="a-btn">CAREERS</a></li>
                            
                            
                        </ul>
                    </nav>
                    
                </header>
                
            </>
        );
    }
}
export default Header;        