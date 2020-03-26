import React from 'react';
import './App.css';
import gsap from 'gsap';
//import { Controller, Scene } from 'react-scrollmagic';
import {ReactComponent as Anim} from './img/in.svg';
import {Link} from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import {Container, Row, Col} from 'react-bootstrap';
import Typist from 'react-typist';
import { Tween} from 'react-gsap';
import logo from './img/program.png';
import htmlcss from './img/htcss.png';
import reactlogo from './img/logo.svg';
import rboot from './img/rboot.png';
import python from './img/python.png';
import git from './img/git.png';
import js from './img/js.png';
import ghl from './img/githublogo.png';
import lnked from './img/lnked.png';


const Imgur = () =>{
  return(
  <div>
  <Tween from={{ x: '50px', rotation: -360,duration:20,scaleX: 0.3,scaleY:0.3, opacity: 0,delay:3}}>
      <img src={logo} alt="img" className="imganimation"/>
  </Tween>
  </div>
  )
}

class Main extends React.Component{
  render(){
    return(
      <div className="me">
        <div className="hvh">
          Hej,<br /> nazywam się <span className="name">Marcin Niemyjski</span>.
        </div>
        <div className="hvh">
          <Typist>
            Programuję strony z użyciem <span className="react">React.js</span>
          </Typist>
        </div>
        <div className="imgi">
          <Imgur />
        </div>
      </div>
    )
  }
}

class Start extends React.Component{
  render(){
    return(
      <div className="content" id="home">
          <div className="nav">
            <Navbar bg="darking" variant="dark" expand="lg" className="navig" fixed="top">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={600}
                >Home</Link></Nav.Link>
                <Nav.Link>
                <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={600}
                >About me</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={600}
                >Skills</Link></Nav.Link>
                <Nav.Link>
                <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={600}
                >Contact</Link>
                </Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <Main />
      </div>
    )
  }
}

class About extends React.Component{
  constructor(props){
    super(props);
    this.wrapper = null;
    this.tl1 = gsap.timeline({default: {ease: 'power3.inOut'},paused: true});
    
    this.content = null;
    this.textOne = null;
    this.textTwo = null;
    this.textThree = null;
  
    }
   
  componentDidMount(){
    
    const [elements] = this.wrapper.children;
    const computer = elements.getElementById('computer');
    const person = elements.getElementById('person');
    const clock = elements.getElementById('clock');
    const rplant = elements.getElementById('right_plant');
    const lplant = elements.getElementById('left_plant');
    
    gsap.set([computer,person,clock,lplant,rplant],{autoAlpha: 0});
    gsap.set([this.content,this.textOne,this.textTwo,this.textThree],{autoAlpha: 0});


    this.tl1
      .fromTo(computer,{x: '-=300'},{duration: 1 ,x: 0 ,autoAlpha: 1})
      .to(this.content,{duration: 1,autoAlpha: 1},'-=0.5')
      .fromTo(person,{x: '-=300'},{duration: 2,x: 0,autoAlpha: 1}, '-= 1')
      .fromTo(this.textOne,{x: '-=120'},{duration:1.5,x: 0,autoAlpha:1}, '-=1')
      .fromTo(lplant,{x: '-=300'},{x: 0 ,duration: 1, autoAlpha: 1}, '-=1')
      .fromTo(this.textTwo,{x: '-=150'},{duration:1.5,x: 0,autoAlpha:1}, '-=1')
      .fromTo(rplant,{x: '-=300'},{x: 0 ,duration: 1, autoAlpha: 1}, '-=0.1')
      .fromTo(this.textThree,{x: '-=170'},{duration:1.5,x: 0,autoAlpha:1}, '-=1')
      .fromTo(clock,{rotation: '-90'},{rotation: 0 ,autoAlpha: 1})
  
  }
  render(){
    return(
      <div className="content" id="about"
      onWheel={() => this.tl1.play()}>
            <div ref={ div => this.wrapper = div }  className="aboutme">
              <Anim />
            </div>
            <div className="aboutme">
                <div className="textcontent">
                  <div ref={ div => this.content = div } >
                    <div className="txt" ref={ div => this.textOne = div } >
                      Nazywam się <span className="name">Marcin Nimyjski</span>,
                      na codzień mieszkam w Białymstoku.
                    </div>
                  <div className="txt" ref={ div => this.textTwo = div }>
                    Skończyłem Technikum Elektryczne o profilu Technik informatyk,<br />
                    podczas nauki w tej szkole zrodziła się we mnie pasja do programowania.<br />
                  </div>
                  <div className="txt" ref={ div => this.textThree = div }>
                    Podczas tworzenia jednego projektu w zaciszu domowym polubiłem prace jako Front-end.<br/>
                    Pozwala ona mi spełniać się jako programista i esteta.
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
  }
}

class Skills extends React.Component{
  
  render(){
    return(
          <div className="content" id="skills">
              <div className="logos">
                  <div className="logotext">
                    HTML5/CSS3
                    <img src={htmlcss} alt="img" width="15%"/>
                  </div>
                  <div className="logotext">
                    JavaScript ES6
                    <img src={js} alt="img" width="15%"/>
                  </div>
                  <div className="logotext">
                    React.js
                    <img src={reactlogo} alt="img" width="15%"/>
                  </div>
                  <div className="logotext">
                    React bootstrap
                    <img src={rboot} alt="img" width="15%"/>
                  </div>
                  <div className="logotext">
                    Python 3
                    <img src={python} alt="img" width="15%"/>
                  </div>
                  <div className="logotext">
                    Git
                    <img src={git} alt="img" width="15%"/>
                  </div>
              </div>
          </div>
    )
  }
}
class Contact extends React.Component{
  render(){
    return(
      <div className="content" id="contact">
        <div className="logos">
          <h2>You can find me and contact by:</h2>
        </div>
        <div className="logos">
          <a href="https://www.linkedin.com/in/marcin-niemyjski-2ab761194">
             <img src={lnked} alt="img" width="50%"/>
          </a>
          <a href="https://github.com/Raicram">
             <img src={ghl} alt="img" width="50%"/>
          </a>
        </div>
      </div>
    )
  }
}

function App() {
  return (
      <div className="App">
        <Start />
        <About />
        <Skills />
        <Contact />
      </div>
  );
}

export default App;
