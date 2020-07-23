import React from 'react';
class Home extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(document.getElementsByTagName("body")[0]);
        document.getElementsByTagName("body")[0].className="home";
    }
    render() {
        return (
            <>

            <div class="im">
            <img src="assets/img/home.jpg"/>
           
        </div>
        </>
            );
        }
    }
    export default Home; 