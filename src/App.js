import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "./pages/NavBar"
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ParticleComponent from "./components/Particle";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Pratibha Shejwal",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Amplify Hope",
        subTitle: "Learn Earn fun !! ",
        text: "Site under maintinance",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar {...this.state}/>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
        <ParticleComponent />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />

          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
