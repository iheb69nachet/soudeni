import React,{ Component }   from 'react';
import {Carousel, Navbar, Button,Form, NavDropdown, FormControl, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import './App.css';
import img1 from './1.jpeg';
import img2 from './2.jpeg';
import img3 from './3.jpeg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
function App() {
  return (

<div className="App">
            <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    
            

<AwesomeSlider className='aws-btn 'bullets={false} >
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
  </AwesomeSlider>
  <br></br>

 

   
   
<section class='container'>
<section class="row one-col mb-5">
      <section class="col-md-8">
        <section class="tile-wrapper">
          <section class="left">
            <img src={img1} alt="img-1" class="w-100"/>
          </section>
          <section class="content-wrapper">
            <span class="eyebrow">Thoughts on the Market</span>
              <section class="main-content">
                <h3>A Change of Fortune for the U.S. Dollar?</h3>
                <span class="date">Apr 30, 2020</span>
                <p>Consensus on the dollar has been bearish for years, only to be proven wrong time after time. But Global Head of Macro Strategy Matthew Hornbach says the mechanics of supply and demand could change that outcome.</p>
              </section>
            </section>
        </section> 
      </section>

      <section class="col-md-4">
        <section class="tile-wrapper">
          <img src={img2} alt="video" class="w-100"/>
          <section class="box-2">
            <span class="msm">We are Morgan Stanley</span>
            <h3><span>The</span> Morgan Stanley <span>Minute</span></h3>
            <p>Explore our 1-minute investment insights videos, in this on-going series, from our firm’s leading thinkers.</p>
          </section>
        </section>
      </section>
      <br></br>
      <section class="col-md-4">
        <section class="tile-wrapper">
          <img src={img2} alt="video" class="w-100"/>
          <section class="box-2">
            <span class="msm">We are Morgan Stanley</span>
            <h3><span>The</span> Morgan Stanley <span>Minute</span></h3>
            <p>Explore our 1-minute investment insights videos, in this on-going series, from our firm’s leading thinkers.</p>
          </section>
        </section>
      </section>
      <section class="col-md-8">
        <section class="tile-wrapper">
          <section class="left">
            <img src={img1} alt="img-1" class="w-100"/>
          </section>
          <section class="content-wrapper">
            <span class="eyebrow">Thoughts on the Market</span>
              <section class="main-content">
                <h3>A Change of Fortune for the U.S. Dollar?</h3>
                <span class="date">Apr 30, 2020</span>
                <p>Consensus on the dollar has been bearish for years, only to be proven wrong time after time. But Global Head of Macro Strategy Matthew Hornbach says the mechanics of supply and demand could change that outcome.</p>
              </section>
            </section>
        </section> 
      </section>
      <br></br>
      <section class="row three-col mb-5">
      <section class="col-md-4">
        <section class="tile-wrapper">
          <img src={img1} alt="img-4" class="w-100" />
          <section class="box-4">
            <span class="eyebrow blue-color">Wealth Management</span>
              <section class="main-content">
                <h3>Don't Follow the Investing Pack </h3>
                <span class="date">Apr 27, 2020</span>
                <p>A handful of familiar large-cap stocks continue to lead the market, but that pattern is likely to shift in the coming months. </p>
              </section>
          </section>
        </section>
      </section>
      <section class="col-md-4">
        <section class="tile-wrapper">
          <img src={img1} alt="img1.6" class="w-100" />
          <section class="box-4">
            <span class="eyebrow blue-color">Institute for Sustainable Investing</span>
              <section class="main-content">
                <h3>Uncharted Waters: A Ganges River Expedition to Study Plastic Waste</h3>
                <span class="date">Apr 21, 2020</span>
                <p>How scientists, communities in India and Bangladesh and one citizen science mobile app are helping mitigate plastic waste in the Ganges.</p>
              </section>
          </section>
        </section>
      </section>
      <section class="col-md-4">
        <section class="tile-wrapper">
          <img src={img1} alt="img1.6" class="w-100" />
          <section class="box-4">
            <span class="eyebrow blue-color">Institute for Sustainable Investing</span>
              <section class="main-content">
                <h3>Uncharted Waters: A Ganges River Expedition to Study Plastic Waste</h3>
                <span class="date">Apr 21, 2020</span>
                <p>How scientists, communities in India and Bangladesh and one citizen science mobile app are helping mitigate plastic waste in the Ganges.</p>
              </section>
          </section>
        </section>
      </section>
     </section>
      
      <br></br>
      <section class="col-md-8">
        <section class="tile-wrapper">
          <section class="left">
            <img src={img1} alt="img-1" class="w-100"/>
          </section>
          <section class="content-wrapper">
            <span class="eyebrow">Thoughts on the Market</span>
              <section class="main-content">
                <h3>A Change of Fortune for the U.S. Dollar?</h3>
                <span class="date">Apr 30, 2020</span>
                <p>Consensus on the dollar has been bearish for years, only to be proven wrong time after time. But Global Head of Macro Strategy Matthew Hornbach says the mechanics of supply and demand could change that outcome.</p>
              </section>
            </section>
        </section> 
      </section>

      <section class="col-md-4">
        <section class="tile-wrapper">
          <img src={img2} alt="video" class="w-100"/>
          <section class="box-2">
            <span class="msm">We are Morgan Stanley</span>
            <h3><span>The</span> Morgan Stanley <span>Minute</span></h3>
            <p>Explore our 1-minute investment insights videos, in this on-going series, from our firm’s leading thinkers.</p>
          </section>
        </section>
      </section>
      <br></br>
 {
   /*
   fgdfgdfg
   */
 }

</section>

</section>

<footer>
  <section class="container">
    <section class="main-foter pt-5">
      <ul class="ft-menu pt-5 pb-5">
        <li><a href="#">Disclosures</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Corporate Governance</a></li>
        <li><a href="#">Newsroom</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
      <ul class="ft-menu-1 pt-4 pb-4">
        <li><a href="https://ms-investmentmanagement.com/privacy-pledge.html">Privacy &amp; Cookies</a></li>
        <li><a href="https://ms-investmentmanagement.com/terms.html">Terms of Use</a></li>
        <li><a href="https://ms-investmentmanagement.com/contact-us.html">Contact Us</a></li>
        <li><a href="https://ms-investmentmanagement.com/global-offices.html">Global Offices</a></li>
        <li><a href="https://ms-investmentmanagement.com/eeo.html">Equal Employment Opportunity</a></li>
      </ul>
      <p class="copy-right pt-4 pb-4 text-center">© 2020 TERRAFORM Tunisia. All rights reserved.</p>
    </section>
  </section>
</footer>
</div>


  );
}

export default App;



