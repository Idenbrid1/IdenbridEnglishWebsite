import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    data: [],
    loading: true
  }
  componentDidMount() {
    document.body.classList.value = 'home';
    this.setState({
      loading: false,
    })
  }
  render() {
    return (
      <Fragment>
        {/* <!-- navigation-bar which is show onclick of menu-button end *idenbrid*--> */}
        {this.state.loading ? <h1>Loading</h1> :
          <Fragment>
            <Header />
            <section className="container" id="container">
              <main className="main">
                <div className="homepage-sections">
                  {/* <!-- Home Introduction section *idenbrid* --> */}
                  <div className="homepage-section landing make-header-light darken fp-auto-height-responsive" style={{ backgroundImage: "url('assets/img/landing-1.jpg')" }}>
                    <p className="section-name"><span>I. </span>Introduction</p>
                    <div className="text">
                      <h1>Work is Our Entertainment <br />
                        {/* <em className="text-color-blue">it solutions</em> */}
                      </h1>
                      <p>By creating boutique Software &amp; Digital Experiences</p>
                      <p><a href="#solutions">WHAT WE DO</a></p>
                    </div>
                  </div>
                  {/* <!-- Home Introduction section end *idenbrid* --> */}
                  {/* <!-- Home About section *idenbrid* --> */}
                  <div className="homepage-section about fp-auto-height-responsive">
                    <div className="about-inner">
                      {/* <!-- UL - List *idenbrid* --> */}
                      <ul className="about-tab-titles">
                        <li className="tab_1" data-tab="tab_1">Overview</li>
                        <li className="tab_2" data-tab="tab_2">Culture</li>
                        <li className="tab_3" data-tab="tab_3">Career</li>
                      </ul>
                      {/* <!-- UL - List end *idenbrid* --> */}
                      {/* <!-- UL - List *idenbrid* --> */}
                      <ul className="about-tabs">
                        {/* <!-- Tab 1 --> */}
                        <li className="tab_1" data-tab="tab_1">
                          <div className="text">
                            <h2>We create bespoke websites, apps, software and digital experiences that elevate your business to the next level.</h2>
                            <p>
                              Our work is fun beacuse we are commited to results. Whatever the mission, we work as a team and set our sights on the bigger goal. We don't want to look back on "another busy week", but rather, want to maintian a conscious awareness of the each step we are taking to reach and surpass our targets.
                            </p>
                            <p><Link to="/">EXPLORE IDENBRID INC.</Link></p>
                            <span className="play-video-mobile">Play Video</span>
                          </div>
                        </li>
                        {/* <!-- Tab 2 --> */}
                        <li className="tab_2" data-tab="tab_2">
                          <div className="text">
                            <h2>The creative spark lies in the differences. </h2>
                            <p>Creativity is our first, middle and last name. And what does it mean to be creative? Creativity is not just about design- it also means to consistently go against comfort and passivity; to reflect on ideas and thoughts throughout each step of the process</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p><Link to="/">EXPLORE THE IDENBRID CULTURE</Link></p>
                            <span className="play-video-mobile">Play Video</span>
                          </div>
                        </li>
                        {/* <!-- Tab 3 --> */}
                        <li className="tab_3" data-tab="tab_3">
                          <div className="text">
                            <h2>Recognising the movers and shakers.</h2>
                            <p>We are always on the lookout for individuals who contribute to the growth of our business. To us, maintaining the status quo is the greatest risk and we welcome those who seek to utilize technology to improve lives and experiences. We are actively hiring HR that will breathe fresh air into our business.</p>
                            <p><Link to="/">JOIN THE TEAM.</Link></p>
                            <span className="play-video-mobile">Play Video</span>
                          </div>
                        </li>
                      </ul>
                      {/* <!-- UL - List *idenbrid* --> */}
                    </div>
                    {/* <!-- Video Section *idenbrid* --> */}
                    <p className="section-name"><span>II. </span>About Us</p>
                    <figure className="fingerprint"></figure>
                    <div className="video-modal">
                      <span className="close"></span>
                      <video src="https://myclevergroup.com/video/dblx-keep-up.mp4" controls></video>
                    </div>
                    {/* <!-- Video Section end *idenbrid* --> */}
                  </div>
                  {/* <!-- About section end *idenbrid* --> */}
                  {/* <!-- Projects section *idenbrid* --> */}
                  <div className="homepage-section projects fp-auto-height-responsive">
                    <ul className="project-grid">

                      <li className="project project_1" style={{ backgroundImage: "url('assets/img/idenbrid-hub-img.jpg')" }}>
                        <Link className="fill-link" to="/solutions"></Link>
                        <div className="text">
                          <p className="project-type">SOLUTIONS</p>
                          <h2>Pakteki</h2>
                          <Link to="/solutions">FIND OUT MORE</Link>
                        </div>
                      </li>

                      <li className="project project_2" style={{ backgroundImage: "url('assets/img/idenbrid-mentoring-img.jpg')" }}>
                        <Link className="fill-link" to="/solutions"></Link>
                        <div className="text">
                          <p className="project-type">SOLUTIONS</p>
                          <h2>BizBlanca</h2>
                          <Link to="/solutions">FIND OUT MORE</Link>
                        </div>
                      </li>

                      <li className="project project_3" style={{ backgroundImage: "url('assets/img/idenbrid-experience-img.jpg')" }}>
                        <Link className="fill-link" to="/experiences"></Link>
                        <div className="text">
                          <p className="project-type">CLIENT</p>
                          <h2>Ms.Waribashi</h2>
                          <Link to="/experiences">FIND OUT MORE</Link>
                        </div>
                      </li>

                      <li className="project project_4" style={{ backgroundImage: "url('assets/img/idenbrid-solution-img.jpg')" }}>
                        <Link className="fill-link" to="/experience/remote-house"></Link>
                        <div className="text">
                          <p className="project-type">EXPERIENCES</p>
                          <h2>Remote House</h2>
                          <Link to="/experience/remote-house">FIND OUT MORE</Link>
                        </div>
                      </li>
                    </ul>
                    <p className="section-name"><span>III. </span>Projects</p>
                  </div>
                  {/* <!-- Projects section end *idenbrid* --> */}
                  {/* <!-- Clients section  *idenbrid* --> */}
                  <div className="homepage-section clients-page fp-auto-height-responsive">
                    <div className="clients-inner">
                      <div className="text">
                        <h3>Growing <br />together with<br /> our clients <br />through unique <br />experiences. </h3>
                        <p>Our mission is take our client where <br /> they have never even imagined</p>
                      </div>
                      {/* <!-- clients section --> */}
                      <div className="clients">
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-42.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-45.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-47.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-48.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-49.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-50.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-51.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-52.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-53.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-54.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-55.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-56.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-57.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-58.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-59.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-60.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-61.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-62.png')", height: "50px" }}></figure>
                        <figure style={{ backgroundImage: "url('assets/img/client-logo/Artboard-64.png')", height: "50px" }}></figure>
                      </div>
                      {/* <!-- clients section end--> */}
                    </div>
                    <p className="section-name"><span>IV. </span>Clients</p>
                  </div>
                  {/* <!-- Solutions section  *idenbrid* --> */}
                  <div className="homepage-section solutions fp-auto-height-responsive">
                    <ul>
                      <li className="service">
                        <figure style={{ backgroundImage: "url('assets/img/idenbrid-office-img-meeting.jpg')", }} className="service-image"></figure>
                        <Link className="fill-link" to="/solutions"></Link>
                        <div className="text">
                          <h3>SOLUTIONS</h3>
                          <p>BizBlanca, Pakteki </p>
                          <Link to="/solutions">EXPLORE</Link>
                        </div>
                      </li>

                      <li className="service">
                        <figure style={{ backgroundImage: "url('assets/img/idenbrid-img-experience-img.jpg')" }} className="service-image"></figure>
                        <Link className="fill-link" to="/experiences"></Link>
                        <div className="text">
                          <h3>EXPERIENCES</h3>
                          {/* <p>LX, Motion, Web &amp; Branding</p> */}
                          <p>Web/Mobile Platforms & Offshore development</p>
                          <Link to="/experiences">Explore</Link>
                        </div>
                      </li>

                    </ul>
                    <p className="section-name"><span>V. </span>Solutions</p>
                  </div>
                  {/* <!-- Solutions section end  *idenbrid* --> */}
                  {/* <!-- Contact section end  *idenbrid* --> */}
                  <div className="homepage-section contact fp-auto-height-responsive">
                    <div className="contact-inner">
                      <div className="contact-text">
                        <h3>We&#8217;d love to build something amazing together.</h3>
                        <p>Get in touch with us today.</p>
                      </div>
                      <div className="contact-right">
                        <ul className="location-titles">
                          {/* <li className="location-title location_1" data-location="location_1">Tokyo</li>*/}
                          <li className="location-title location_3 is-active" data-location="location_3">Tokyo<br />JAPAN</li>
                          {/*  <li className="location-title location_2" data-location="location_2">Lahore</li>*/}
                          <li className="location-title location_4" data-location="location_4">Lahore<br />PAKISTAN</li>
                        </ul>
                        <ul className="locations">
                          {/*  <li className="location location_1">
                        <p>........</p>
                        <p>........</p>
                        <p>........</p>
                        <p>........</p>
                        <p>........</p>
                          </li>*/}
                          <li className="location location_3 is-active">
                            <p>176 Y block</p>
                            <p>DHA Phase 3</p>
                            <p>Lahore Cantt</p>
                            <p>Pakistan</p>
                          </li>

                          {/* <li className="location location_2">
                        <p>176 Y block</p>
                        <p>DHA Phase 3</p>
                        <p>Lahore Cantt</p>
                        <p>Pakistan</p>
                      </li>*/}

                          <li className="location location_4">
                            <p>176 Y block</p>
                            <p>DHA Phase 3.</p>
                            <p>Lahore Cantt</p>
                            <p>Pakistan</p>
                          </li>
                        </ul>

                        <div className="contact-info">
                          <div>
                            <span>Telephone</span>
                            <p>+92-306 4041 221</p>
                          </div>
                          <div>
                            <span>Email</span>
                            <p>helloworld@idenbrid.com</p>
                          </div>
                        </div>
                        <Link className="message-us arrow-link" to="/">Message us</Link>
                      </div>
                    </div>
                    <p className="section-name"><span>VI. </span>Contact</p>
                    <div className="footer-text">
                      <p className="left">© 2021 Idenbrid Inc.</p>
                    </div>
                  </div>
                </div>
              </main>
            </section>
            <Footer />
          </Fragment>
        }

      </Fragment>

    );
  }
}

export default Home;