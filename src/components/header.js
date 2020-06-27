
import React from 'react';
class Header extends React.Component {
    render() {
        return (
            <>

           
            <header>
                    <div class="logo-section">
                        <img class="logo" src="assets/img/Earth-Recycler-Logo.png"/>
                    </div>
                    <nav class="navigation">
                        <ul class="nav-list">
                            <li><a class="active" href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <div class="dropdown">
                            <li><a href="#">Services<i class='fa fa-caret-down'></i></a><div class="dropdown-content">
                            <a href="#">Waste Collections</a>
                           <a href="#">Food Waste Organic</a>
                          <a href="#">Recycle Your Trash</a>
                          <a href="#">Confedential Paper Shredding</a>
                          <a href="#">Biogas</a>
                          <a href="#">Clearance Of Landfill – Bio Mining</a></div></li></div>
                          <div class="dropdown">
                            <li><a href="#">Solution<i class='fa fa-caret-down'></i></a>

                            <div class="dropdown-content">
                            <a href="#">Solutions For Commercial Spaces</a>
                            <a href="#">Solutions For Industries and Manufactures</a>
                            <a href="#">Solutions For Residential Homes And Gated Communities</a>
                            <a href="#">Solutions for Managing Resource Recover Centre ( RRC)</a>
                            <a href="#">Solutions For Educational Instituion</a>
                        </div></li></div>
                            <li><a href="#">Consultancy</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    
                </header>
                
            </>
        );
    }
}
export default Header;        
