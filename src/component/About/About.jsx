import React, { Fragment } from 'react';
import Header from '../Header/Header';
// import { Link } from 'react-router-dom';
class About extends React.Component {
  state = {}
  componentDidMount(){
    document.body.classList.value='page-template page studio';  
  }
  render() {
    return (
      <Fragment>
      <Header/>
      <section className="container" id="container">
        <main className="main">
          <span className="side-text">About Us</span>
          <section className="default-banner" style={{backgroundColor: '#0f0f0f', backgroundImage: 'url("assets/img/about.jpg")'}}>
            <div className="banner-text">
              <h2>We <em>focus</em> on what you CAN do,<br /> not what you can't. </h2>
              <p>0 ⇨ 1 BUSINESS DEVELOMENT</p>
            </div>
          </section>
          <div className="about-intro">
            <figure className="about-intro_image" style={{backgroundImage: 'url("assets/img/landing-image4.jpg")'}} />
            <div className="about-intro_text text-section">
              {/* wp:heading */}
              <h2>We are committed to the growth of your <em>business</em><strong style={{color: '#fe9900'}}>.</strong></h2>
              {/* /wp:heading */}
              {/* wp:paragraph */}
              <p>IDENBRID uses the power of digital technology, working with clients to develop
                 and expand their businesses more efficiently. We aim to provide solutions that
                 allow you to achieve results with target-driven precision. In addition to our
                 impeccable engineering team, we also pride ourselves in the success rate of
                 our clients. With us, you will be confidently led through 0-1 and 10-100 
                 deployments, achieving end-to-end business growth quickly and effortlessly. 
              </p>
              {/* /wp:paragraph */}
            </div>
          </div>
          <div className="about-video">
            <div className="about-video_inner">
              <figure className="about-video_thumbnail" style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2020/01/Video.jpg")'}} />
              <video className="about-video_video" src="https://myclevergroup.com/video/dblx-keep-up.mp4">
              </video>
              <span className="about-video_play">Play Now</span>
              <span className="about-video_pause">Pause</span>
              <h3>Our clients</h3>
            </div>
          </div>
          <div className="about-awards">
            <div className="about-awards_inner">
              <span className="about-awards_count">10</span>
              <div className="about-awards_text text-section">
                <h2>Countries worldwide.</h2>
                <h3><em>All connected online.</em></h3>
                <p>We connect with clients all over the worldd online from our offices 
                  in Tokyo and Lahore. It's not just about the growth of your business- 
                  it's about adopting the IT lifestyle. And we are here to show you how
                   it's done. 
                </p>
              </div>
              <ul className="about-awards_logos">
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/japan-flag.svg")'}}>
                  </figure>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/pakistan-flag.svg")'}}>
                  </figure>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/uk-flag.svg")'}}>
                  </figure>
                </li>
                
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/china-flag.svg")'}}>
                  </figure>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/usa-flag.svg")'}}>
                  </figure>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/phillippine-flag.svg")'}}>
                  </figure>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/thai-flag.svg")'}}>
                  </figure>
                </li>
                
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/malayisia-flag.svg")'}}>
                  </figure>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/australia-flag.svg")'}}>
                  </figure>
                </li>
                
                <li>
                  <figure style={{backgroundImage: 'url("/assets/img/country-flags/vitenam-flag.svg")'}}>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
          <div className="team fh-section">
            <ul className="team-departments">
          
            <li className="department leaders" data-department="leaders">
              Team Members
              </li>
              {/* <li className="department accounts" data-department="accounts">
                Accounts
              </li> */}
              {/* <li className="department developers" data-department="developers">
              Developers Team
              </li>
              <li className="department creative" data-department="creative">
                Business Team
              </li>*/}
              
            </ul>
            <ul className="team-members">
             
              {/*--leader --*/}
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/ceo_img.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/nakamura-charactor.png")'}}>
                </figure>
                <h3>Souga Nakamura</h3>
                <span className="role">Chief Executive Officer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/sir-aska.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/aska-charactor.jpg")'}}>
                </figure>
                <h3>Aska Ikeda</h3>
                <span className="role">Chief Digital Officer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/Suzuki.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Suzuki-charactor.png")'}}>
                </figure>
                <h3>Ken Suzuki</h3>
                <span className="role">Head of Development</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/Nishimura.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Nishimura-charactor.png")'}}>
                </figure>
                <h3>Nishimura</h3>
                <span className="role">Project Manager</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/Mujhtba.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Mujhtba-charactor.jpg")'}}>
                </figure>
                <h3>Mujtaba Tariq</h3>
                <span className="role">Project Manager</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/Sir-Hamza.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/loki-tv-show-ddb01c2.jpg")'}}>
                </figure>
                <h3>Hamza Saqib</h3>
                <span className="role">Head Architect</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/ahmad-frontend-dev.JPG")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/elon.jpg")'}}>
                </figure>
                <h3>Ahmad</h3>
                <span className="role">Senior Full Stack Developer</span>
              </li>
              
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/hannah-scaled.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/samad-charactor.jpg")'}}>
                </figure>
                <h3>Abdul Samad</h3>
                <span className="role">Back End developer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/Hamza-malik.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/turgut.jpg")'}}>
                </figure>
                <h3>Hamza Malik</h3>
                <span className="role">Developer</span>
              </li>
            
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/kashif-zia.jpeg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/eik-thi-maryam.jpg")'}}>
                </figure>
                <h3>Kashif Zia</h3>
                <span className="role">WordPress Developer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/Sir-Tariq.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/tariq-charactor.jpg")'}}>
                </figure>
                <h3>Muhammad Tariq</h3>
                <span className="role">Apprentice Developer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/ali-yousof.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/ali-yousof-charactor.jpeg")'}}>
                </figure>
                <h3>Ali Yousaf</h3>
                <span className="role">Apprentice Developer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/waleed.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Quaid-e-Azam_Jinnah.jpg")'}}>
                </figure>
                <h3>Waleed</h3>
                <span className="role">Brand Officer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/Fahad.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/musharaf.jpg")'}}>
                </figure>
                <h3>Fahad</h3>
                <span className="role">Apprentic bussiness Developer</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/shahnwaz.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/shahnwaz-charactor.jpg")'}}>
                </figure>
                <h3>Shah Nawaz</h3>
                <span className="role">CEO Assistant</span>
              </li>
              <li className="member  leaders" data-slug style={{backgroundImage: 'url("/assets/img/abdullah.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/")'}}>
                </figure>
                <h3>Abdullah Nasir</h3>
                <span className="role">UIUX Designer / Creative Designer</span>
            
              </li>
              {/* <li className="member  central" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/suzi-scaled.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/Suzie-Dark-phoenix.jpg")'}}>
                </figure>
                <h3>Suzie Archer</h3>
                <span className="role">Head of People and Talent</span>
              </li> */}
           
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/Suzuki.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Suzuki-charactor.png")'}}>
                </figure>
                <h3>Ken Suzuki</h3>
                <span className="role">Head of Development</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/Nishimura.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Nishimura-charactor.png")'}}>
                </figure>
                <h3>Nishimura</h3>
                <span className="role">Project Manager</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/Mujhtba.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Mujhtba-charactor.jpg")'}}>
                </figure>
                <h3>Mujtaba Tariq</h3>
                <span className="role">Project Manager</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/Sir-Hamza.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/loki-tv-show-ddb01c2.jpg")'}}>
                </figure>
                <h3>Hamza Saqib</h3>
                <span className="role">Head Architect</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/ahmad-frontend-dev.JPG")',backgroundSize:"35vw 100%"}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/elon.jpg")'}}>
                </figure>
                <h3>Ahmad</h3>
                <span className="role">Senior Full Stack Developer</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/dan_c-scaled.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/Dan-Paper-Luigi.jpg")'}}>
                </figure>
                <h3>Oyama</h3>
                <span className="role">Senior Back End developer</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/hannah-scaled.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/samad-charactor.jpg")'}}>
                </figure>
                <h3>Abdul Samad</h3>
                <span className="role">Back End developer</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/Hamza-malik.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/turgut.jpg")'}}>
                </figure>
                <h3>Hamza Malik</h3>
                <span className="role">Developer</span>
              </li>
            
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/kashif-zia.jpeg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/eik-thi-maryam.jpg")'}}>
                </figure>
                <h3>Kashif Zia</h3>
                <span className="role">WordPress Developer</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/Sir-Tariq.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/tariq-charactor.jpg")'}}>
                </figure>
                <h3>Muhammad Tariq</h3>
                <span className="role">Apprentice Developer</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/ali-yousof.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/ali-yousof-charactor.jpeg")'}}>
                </figure>
                <h3>Ali Yousaf</h3>
                <span className="role">Apprentice Developer</span>
              </li>
              <li className="member  developers" data-slug style={{backgroundImage: 'url("/assets/img/Ali-Tahir.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/ali-tahir-characto.jpeg")'}}>
                </figure>
                <h3>Ali Tahir</h3>
                <span className="role">Apprentice Developer</span>
              </li>
                <li className="member  developers" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/lee-scaled.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/Lee-Unicorn.jpg")'}}>
                </figure>
                <h3>Muhammad Tariq</h3>
                <span className="role">Apprentice Developer</span>
              </li>
                <li className="member  developers" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/lee-scaled.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/Lee-Unicorn.jpg")'}}>
                </figure>
                <h3>Muhammad Hamza</h3>
                <span className="role">Apprentice Developer</span>
              </li>
              <li className="member  creative" data-slug style={{backgroundImage: 'url("/assets/img/waleed.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Quaid-e-Azam_Jinnah.jpg")'}}>
                </figure>
                <h3>Waleed</h3>
                <span className="role">Brand Officer</span>
              </li>
              <li className="member  creative" data-slug style={{backgroundImage: 'url("/assets/img/Fahad.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/Quaid-e-Azam_Jinnah.jpg")'}}>
                </figure>
                <h3>Fahad</h3>
                <span className="role">Apprentic bussiness Developer</span>
              </li>
              <li className="member  creative" data-slug style={{backgroundImage: 'url("/assets/img/shahnwaz.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/shahnwaz-charactor.jpg")'}}>
                </figure>
                <h3>Shah Nawaz</h3>
                <span className="role">CEO Assistant</span>
              </li>
              <li className="member  creative" data-slug style={{backgroundImage: 'url("/assets/img/abdullah.png")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("/assets/img/")'}}>
                </figure>
                <h3>Abdullah Nasir</h3>
                <span className="role">UIUX Designer / Creative Designer</span>
                {/*  */}
              </li>
              {/* <li className="member  accounts" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/Hannah-M.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2019/12/Hannah-Harley-2.jpg")'}}>
                </figure>
                <h3>Hannah Molloy</h3>
                <span className="role">Head of Accounts</span>
              </li> */}
             
            
              {/* <li className="member  creative developers central" data-slug style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2020/01/Leo-1.jpg")'}}>
                <figure className="superhero" style={{backgroundImage: 'url("https://dblx.co.uk/app/uploads/2020/01/Leo-2.jpg")'}} />
                <h3>Join the Wolfpack</h3>
                <span className="role">Get in touch today</span>
              </li> */}
            </ul>
          </div>
          <div className="about-culture horizontal fh-section">
            <span id="progress" />
            <div className="sideways">
              <ul className="culture-sections">
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture0.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />A culture of innovation</div>
                  <div className="text">
                    <span className="count">00</span>
                    <h3>The Culture of Innovation</h3>
                    <p><strong>Corporate culture is the most important thing we have to help create an IT lifestyle</strong></p>
                    <p>The only mistake is giving up.</p>
                  </div>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture1.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />The only mistake is giving up </div>
                  <div className="text">
                    <span className="count">01</span>
                    <h3>Upgrade customer's User Experience (UX)</h3>
                    <p><strong>Transform the User's lifestyle</strong></p>
                    <p>Creating a solid customer experience is the true meaning of a UX Upgrade.
                       In order to prioritize the customer, it is important to recognize where and
                        when a customer is having trouble, how to effectively solve it. At Idenbrid,
                         we heavily focus on updating the customer experience, taking it to the next
                          level. 
                    </p>
                  </div>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture2.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />Be Creative</div>
                  <div className="text">
                    <span className="count">02</span>
                    <h3>Be Creative</h3>
                    <p><strong>Your input advances the creative spark</strong></p>
                    <p>To work passively means to simply complete the tasks at hand.
                       We encourage active work, embodying creativity, pushing boundaries 
                       and achieving targets through passion, motivation and drive.
                        We might be an IT company, but we do not want robots to work for us.
                    </p>
                  </div>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture3.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />Work is Entertainment</div>
                  <div className="text">
                    <span className="count">03</span>
                    <h3>Work is Entertainment</h3>
                    <p><strong>A job that isn't fun isn't worth it</strong><br />
                    The work environment is highly dependent on the team. 
                    It is important to us that each member of the team recognizes 
                    their indivudual value and believes themselves to be an impactful
                     member of the group; to feel rewarded by working together and 
                     fostering true team spirit,
                    </p>
                  </div>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture4.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />Commit to results</div>
                  <div className="text">
                    <span className="count">04</span>
                    <h3>Commit to results</h3>
                    <p><strong>Everyone works hard- but is it worth it? </strong><br />
                    It is natural to feel that your past working month was a busy one- but 
                    was it worth it? You can only feel a sense of accomplishment when you produce 
                    results that matter. It's not about how long you work, its how effectively you
                     work. 
                    </p>
                  </div>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture5.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />Where legends are forged.</div>
                  <div className="text">
                    <span className="count">05</span>
                    <h3>Never give up on the client.</h3>
                    <p><strong>Code with your brain</strong><br />
                    Repeat the basic procedures to ensure that the river's waters keep flowing, 
                    but go beyond that to breathe life and beauty to the final architecture. 
                    The tougher the project, the higher the potential to create a transformative
                     experience. Now THAT is how you should code. 
                    </p>
                  </div>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture6.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />Make impossible a reality.</div>
                  <div className="text">
                    <span className="count">06</span>
                    <h3>Visualize. Verbalize. Repeat. </h3>
                    <p><strong>Speak your truth. </strong><br />
                      If you can't explain your job, your role or your brand,
                      then you will never get people to truly understand you. 
                      The first step to effectively convey your ideas to others
                      is to firmly visualize, then verbalize your work to those 
                      around you.  
                    </p>
                  </div>
                </li>
                <li>
                  <figure style={{backgroundImage: 'url("assets/img/about culture7.png")'}}>
                  </figure>
                  <div className="prev-title"><span className="arrow" />Take care of them...</div>
                  <div className="text">
                    <span className="count">07</span>
                    <h3>Update the Future</h3>
                    <p><strong>It starts and ends with the client. </strong><br />
                    Create services that do not currently exist and build infrastructure
                     that is one step ahead of the technology game today. Our mission at Idenbrid
                      is simple: create for tomorrow- not for today. We will continue to update our
                       user experiences and provide services that will make us an indispensable member
                        of tomorrow's world. 
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>

      </Fragment>);
  }
}

export default About;