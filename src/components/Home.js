import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
       var project = "Test";
      var name ="Test";
      var description= "Test";
      var city= "Test";
      var networks= [];
    }

    return (
      <header id="home">
     
      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
