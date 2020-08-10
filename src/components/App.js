import React, { Component } from "react";
import $ from "jquery";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      
        <div className="App">
          <Header data={this.state.resumeData.main} />
          <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/service" component={Service}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Redirect to="/" />
          </Switch>
          <Footer data={this.state.resumeData.main} />
        </div>
      
    );
  }
}

export default App;
