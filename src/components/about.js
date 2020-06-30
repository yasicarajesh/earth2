import React from 'react';
class About extends React.Component {
  render() {
    return (
      <>
        <section id="about" class="about">
          <div class="about-img">
            <img src="/assets/img/recycle.gif"/>
          </div>
          <div class="about-content">
            <h3>About Us</h3>
            <p>
              At Earth Recycler, the concept of solid waste management is redefined through professional and systematic process incorporating awareness program on source segregation, collection, transportation, recycling and scientific disposal of waste to ensure clean and hygienic surroundings.
              For us, waste is considered to be a resource that can fetch a higher value beyond their first use phase by applying recycling process that are more robust and environmental friendly.
              From low grade polythene bag, used tissue paper to paper cups we have solutions to recycle them all.
            </p>
            <div class="row">
              <div class="row-content">
             
                <h4> <i class="fa fa-recycle"/>  What We Do</h4>
                <p>Earth Recycler work towards ‘Zero Landfill’.All the scrap that is given to us is recycled, diverted and becomes a useful product.</p>
              </div>
              <div class="row-content">
                
                <h4><i class='fas fa-cubes'></i>  Vision</h4>
                <p>Engaging us will make it a win-win combination not only for both you and us, but also for the environment</p>
              </div>
            </div>
            <div class="row">
              <div class="row-content">
                
                <h4><i class='fas fa-user-shield'/>  Mission</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
              <div class="row-content">
                
                <h4><i class='fas fa-file-contract'/>  Beatae veritatis</h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>
            </div>
          </div>
        </section>


      </>
    );
  }
}
export default About;

