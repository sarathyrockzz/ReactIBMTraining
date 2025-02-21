import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
class Main extends React.Component {
  render() {
    return (
      <>
        <title>Communications Application</title>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mx-auto">
            Communications Application
          </span>
        </nav>
        <Nav />
       
      </>
    );
  }
}

export default Main;
