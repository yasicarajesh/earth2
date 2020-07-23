import React from 'react';
class School extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(document.getElementsByTagName("body")[0]);
        document.getElementsByTagName("body")[0].className="house";
    }
   
    render() {
       
        return (
            <>
     
             <div class="sch1">
           <div class="sc"><img src="assets/img/edu.png"/></div>
             <div class="sch2"><h6>EDUCATIONAL INSTITUTIONS</h6></div>
              <div class="indus12"><p>Why Choose Us</p><div class="line2"></div>
              <div class="indus9">
              <div class="indus10"><img src="assets/img/school.png"></img></div><div class="indus11">Earth Recycler helps manage the waste generated in schools, colleges and universities. Our waste management services to educational institutions are dependable, efficient and environmentally responsible.
           </div></div></div>
           <div class="sch9">
           <div class="sch10">Our systematic approach to sustainable waste  management model is based on best practices derived from our expertise of serving various organisations in Chennai.
           </div></div>
           <div class="sch11"><p>Implementation and Inculcating Essence of Green Goals</p><div class="line3"></div>
           </div></div>
              
            </>
        );
    }
}
export default School;        