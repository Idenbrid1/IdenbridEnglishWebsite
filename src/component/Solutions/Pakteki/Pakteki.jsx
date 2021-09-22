import { Component, Fragment } from "react";
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import { Link } from "react-router-dom";
class Pakteki extends Component {
  state = {
    data: [],
    splice: 50,
    mounted: false,
  }

  componentDidMount(){
    document.body.classList.value='single single-services hub';
  }

  render() {
    return (
      <Fragment>
      <Header />
      <section className="container" id="container">
          <main className="main">
              <section className="default-banner" style={{ backgroundImage: 'url("/assets/img/bizblanca-img-01.jpg")' }}>
                  <div className="banner-text">
                      <h1>Get scouted for better</h1>
                      <h3><em>job opportunities…</em><br />
                          <em>Top quality IT career <br/> changes for life-winners</em></h3>
                  </div>
              </section>
              <div className="overview fh-section">
                  <figure className="overview-image" style={{ backgroundImage: 'url("/assets/img/bizblanca-img-22.png")' }} />
                  <div className="overview-text text-section">
                      <h2>BizBlanca Platform <em>Overview</em>.</h2>
                      <p>
                          BizBlanca is a job-changing platform, specializing in IT human resources. 
                          Using our extenisive database, we help job-seekers recieve headhunting and 
                          scout offers, supporting the transition to a better career. BizBlanca also
                          supports businesses by helping to recruit the right human resources and finding 
                          talented people who are ready to work.
                      </p>
                  </div>
              </div>
              <figure className="service-feature" style={{ backgroundImage: 'url("/assets/img/bizblanca-02.jpg")' }} />
              <div className="stats-wrapper fh-section">
                  <div className="stats-inner">
                      <figure className="stats-image" style={{ backgroundImage: 'url("/assets/img/bizblanca-img-04.png")' }}>
                      </figure>
                      <ul className="stats">
                          <li className="stat">
                              <span className="value">1.</span>
                              <h3>Specializing in top quality, ready to work IT human resources</h3>
                              <p>Time is money and our human resources contribute to business growth 
                                  with fast and efficient results.
                              </p>
                          </li>
                          <li className="stat">
                              <span className="value">2.</span>
                              <h3>Choose from an extenisve databse - hire someone new in as little as 5 days</h3>
                              <p>Carefully selected and excellent human resources can be sourced, 
                                  contacted and hired in the shortest possible time.
                              </p>
                          </li>
                          <li className="stat">
                              <span className="value">3.</span>
                              <h3>Reliable payment system</h3>
                              <p>We boast low market prices, without scrimping on quality. 
                                  Use our platform with confidence, pay in installments and 
                                  experience the benefits of our services without having to 
                                  pay upfront. 
                              </p>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="quote-section fh-section" style={{ backgroundImage: 'url("/assets/img/bizblanca-img-8.jpg")' }}>
                  <div className="quote">
                      <p>Pakistani IT companies are in fierce competition to acquire more talented people in the face of 
                          intensifying international competition. 
                          At BizBlanca, we have excellent human resources that are indispensable to company growth. </p>
                      <p>&nbsp;</p>
                      <h4><strong>Mujtaba Tariq</strong></h4>
                      <h5>Business Manager</h5>
                      {/* <h5><strong>Santander</strong></h5> */}
                  </div>
              </div>
              <div className="detail-section fh-section">
                  <div className="detail-inner">
                      <div className="detail-left text-section">
                          <h2>BizBlanca <em>Platfrom</em></h2>
                          <p>&nbsp;</p>
                          <p>
                              <strong>
                              In it's simplest form, BizBlanca is a smart way for companies and IT employees to seek each other quickly and effectively. 
                              We are a matching databse that connects high-class IT human resources with immediate capabilities,
                              to high-end client companies. We firmly hold a vision to "eliminate unmatched recruitment,"
                              thus saving the time, effort and money wasted on hiring and changing jobs. 
                              </strong>
                          </p>
                          <p>
                              We believe there is a current imbalance in the job hiring market and BizBlanca seeks to
                              resolve this by reducing the number of "bad matches" using our platform. 
                              Hiring new talent is not difficult in and of itself but companies are struggling to find and
                              hire employees that have the right experience and skills to contribute to effective business
                              growth. Furthermore, in many instances, employees who are eventually hired quickly quit or 
                              transition to another job, bringing all players back to square one.  
                          </p>
                          <p>
                              What we propose is a balanced system based on an efficient matching service which ensures 
                              that each individual hired contributes positvely to company growth, feeling fulfilled in their 
                              employment and thus creating what we call, a balanced match.
                          </p>
                      </div>
                      <div className="detail-right">
                          <div className="detail-tabs">
                              <ul className="tab-titles">
                                  <li className="tab_1" data-tab="tab_1">FOR JOB SEEKERS</li>
                                  <li className="tab_2" data-tab="tab_2">FOR COMPANY</li>
                              </ul>
                              <ul className="tabs">
                                  <li className="tab_1">
                                      <div className="text-section">
                                          <p>
                                              <strong>
                                              Get scouted or headhunted by company you never imagined you could work for. 
                                              With BizBlanca, it's not just a dream. 
                                              </strong>
                                          </p>
                                          <p>
                                              BizBlanca is an indispensable platform for reliable career advancement.
                                              We carefully select candidates who have certain qualifications and do not compromise on quality. 
                                              We call these candidates, "Bizers," who then go on to receive unexpected offers from the most 
                                              succesful and well-known companies in Pakistan. 
                                     
                                          </p>
                                      </div>
                                  </li>
                                  <li className="tab_2">
                                      <div className="text-section">
                                          <p>
                                              <strong>
                                               BizBlanca offers a direct scouting system that allows you to handpick
                                               the right employees for your team. Using our databse, you will have 
                                               access to the top-ranking employees of Pakistan who will not only work 
                                               for your compnay, but will also work with your company, for sustained, 
                                               positive and qualitative growth. 
                                              </strong>
                                          </p>
                                          <p>
                                          People who can work, people who the team wants to work with, 
                                          leadership people who can pull around. If you're looking for them, 
                                          BizBlanca. You can directly approach the people you are looking for
                                          </p>
                                          
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="page-footer">
                  <div className="contact-inner">
                      <div className="contact-text">
                      </div>
                      <div className="contact-right">
                          <ul className="location-titles">
                              <li className="location-title location_1" data-location="location_1">
                              Tokyo
                              </li>
                              <li className="location-title location_2" data-location="location_2">
                              Japan
                              </li>
                              <li className="location-title location_3" data-location="location_3">
                              Lahore
                              </li>
                              <li className="location-title location_4" data-location="location_4">
                              Pakistan
                              </li>
                             
                          </ul>
                          <ul className="locations">
                              <li className="location location_1">
                              <p>........</p>
                              <p>........</p>
                              <p>........</p>
                              <p>........</p>
                              <p>........</p>
                              </li>
                              <li className="location location_2">
                                  <p>........<br />........<br />........<br />........<br />........</p>      
                              </li>
                              <li className="location location_3">
                              <p>176 Y block</p>
                              <p>DHA Phase 3</p>
                              <p>Lahore Cantt</p>
                              <p>Pakistan</p>
                              </li>
                              <li className="location location_4">
                              <p>........<br />........<br />..........<br />........<br />........</p>
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
                  <div className="footer-text">
                      <p className="left">© 2021 Idenbrid Inc.</p>
                  </div>
              </div>
          </main>
      </section>
      <Footer/>
  </Fragment>
    );
  }
}

export default Pakteki;