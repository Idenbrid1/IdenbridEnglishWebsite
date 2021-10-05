import React, { Fragment } from 'react';
import  Header  from "../Header/Header";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
class Career extends React.Component {
    state = {}
    componentDidMount(){
        document.body.classList.value='page-template page careers';
      }
    render() {
        return (
            <Fragment>
                <Header/>
                <section className="container" id="container">
                    <main className="main">
                        <span className="side-text">Careers</span>
                        <section className="default-banner" style={{ backgroundColor: '#0f0f0f', backgroundImage: 'url("assets/img/careers.jpg")' }}>
                            <div className="banner-text">
                                <h1>Where would<br />you like to
                                    <em> go?</em></h1>
                                <p>TEAM IDENBRID Needs You</p>
                            </div>
                        </section>
                        <div className="careers-tabs fh-section">
                            <div className="careers-tabs__wrapper" data-aos="fade-up">
                                <div className="careers-tabs__left">
                                    <div className="careers-tabs-left">
                                        <figure className="tab_1" data-tab="tab_1" style={{ backgroundImage: 'url("/assets/img/mission.png")' }}>
                                        </figure>
                                        <figure className="tab_2" data-tab="tab_2" style={{ backgroundImage: 'url("/assets/img/culture.png")' }}>
                                        </figure>
                                    </div>
                                </div>
                                <div className="careers-tabs__right">
                                    <ul className="careers-tabs__titles">
                                        <li className="careers-tabs__titles__title tab_1" data-tab="tab_1">Mission</li>
                                        <li className="careers-tabs__titles__title tab_2" data-tab="tab_2">Culture</li>
                                    </ul>
                                    <ul className="careers-tabs__tabs">
                                        <li className="careers-tabs__tabs__tab tab_1" data-tab="tab_1">
                                            <div className="tab-text">
                                                <h2>Play a major role in one of Pakistan’s fastest growing tech<em>companies</em>.
                                                </h2>
                                                <p>We are working on a daily mission to provide the IT infrastructure that is
                                                     indispensable to the Pakistani market of over 200 million people. In order
                                                      to make a big impact on the population, excellent human resources with various 
                                                      backgrounds are imperative. Guided by our core values, intend to meet these 
                                                      challenges creatively and positively. 
                                                </p>
                                            </div>
                                        </li>
                                        <li className="careers-tabs__tabs__tab tab_2" data-tab="tab_2">
                                            <div className="tab-text">
                                                <h2><span className="s1">Unique market challenge</span></h2>
                                                <p className="p1">
                                                    <span className="s1">
                                                        We focus on how much we can offer values
                                                        that are different from the current market. And even if the challenge becomes
                                                        very difficult, we will continue to accept it and continue to strive to further
                                                        solidify our growth. The biggest challenge is to differentiate yourself from
                                                        other companies in the market and remain unique.
                                                    </span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="careers-values fh-section">
                            <div className="careers-values__text">
                                <div className="text-section">
                                    <h2>Our team <em>Values</em>.</h2>
                                    <p>Our team value is "Work as Entertainment", and even though we are result-driven,
                                         we make sure that to love what we do, otherwise it's just not worth it. 
                                    </p>
                                    <p>We define work with the following three points and if these three are achieved,
                                         then success and satisfaction is also guaranteed: Together we work hard. 
                                    </p>
                                    <p>Together we laugh a lot. Together we innovate constantly and never stop learning.</p>
                                </div>
                            </div>
                            <div className="careers-values__slider glide">
                                <div className="glide__track" data-glide-el="track">
                                    <ul className="glide__slides">
                                        <li className="careers-values__slider__slide glide__slide">
                                            <img alt="img" src="/assets/img/upgrade.png" />
                                        </li>
                                        <li className="careers-values__slider__slide glide__slide">
                                            <img alt="img" src="/assets/img/creative.png" />
                                        </li>
                                        <li className="careers-values__slider__slide glide__slide">
                                            <img alt="img" src="/assets/img/entertainment.png" />
                                        </li>
                                        <li className="careers-values__slider__slide glide__slide">
                                            <img alt="img" src="/assets/img/never-give-up.png" />
                                        </li>
                                        <li className="careers-values__slider__slide glide__slide">
                                            <img alt="img" src="/assets/img/visualize.png" />
                                        </li>
                                        <li className="careers-values__slider__slide glide__slide">
                                            <img alt="img" src="/assets/img/update-feature.png" />
                                        </li>
                                        <li className="careers-values__slider__slide glide__slide">
                                            <img alt="img" src="/assets/img/commit to results.png" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="careers-benefits fh-section">
                            <div className="careers-benefits-wrapper" data-aos="fade-up">
                                <div className="careers-benefits-left">
                                    <div className="benefits-text">
                                        <h1>If these values sound like you, <br/> and describe the people you want to work with,"</h1>
                                        <h2><em>then IDENBRID is the place for you.</em></h2>
                                        <p>&nbsp;</p>
                                        <p>Idenbrid takes pride in its workforce and we want you to live your best life so you can show up each and every time. </p>
                                        <p>We appreciate there is a life outside of work and it is important for us to value that with our ever-growing list of perks and benefits. </p>
                                    </div>
                                </div>
                                <div className="careers-benefits-right">
                                    <div className="benefits-grid-wrapper">
                                    <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 2.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                            Learning &amp; Development
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 3.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                            Great office environment
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 4.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                            Free tea and coffee
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 5.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                            No overwork
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 6.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                            Full weekends off
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 7.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                                Creative &amp; Awesome Studio
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 8.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                                Interactive &amp; fun team
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 9.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                            Great internship programmes
                                            </div>
                                        </div>
                                        <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 10.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                             Tackling various international projects
                                            </div>
                                        </div>
                                       {/* <div className="benefit-card">
                                            <div className="benefit-icon" style={{ backgroundImage: 'url("/assets/img/company-icons/Artboard 11.svg")' }}>
                                            </div>
                                            <div className="benefit-card-text">
                                                Latest Technology &amp; Equipment
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div id="jobs">
                            <div className="job-container fh-section" data-aos="fade-up">
                                <div className="job-title">
                                    <h1>Our latest <i>careers.</i></h1>
                                </div>
                                <div className="job-sub-titles">
                                    <div>Job</div>
                                    <div>Type</div>
                                    <div>Location</div>
                                </div>
                                <div className="job-row view-job">
                                    <span className="job-title" />
                                    <span className="job-type">
                                        <b className="main-type" />
                                        <b className="sub-type" />
                                    </span>
                                    <span className="job-location">
                                        <b className="main-location" />
                                        <b className="sub-location" />
                                    </span>
                                    <div className="view-job job-row-careers-arrow">
                                        <img height="8px" width="15px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="fh-section careers-info">
                            <ul className="careers-info__posts">
                                <li className="careers-info__posts__post post-1 tilt" style={{ backgroundImage: 'url("/assets/img/ceo_img.png")' }}>
                                    <Link to="/careers/message" className="fill-link" />
                                    <div className="card-bottom">
                                        <span className="blog-category">
                                        NEWS
                                        </span>
                                        <span className="blog-name">CEO Souga Nakamura</span>
                                        <Link to="/careers/message" className="blog-more">
                                            <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                            Read more
                                        </Link>
                                    </div>
                                    <Link/>
                                </li>
                                <li className="careers-info__posts__post post-2 tilt" style={{ backgroundImage: 'url("/assets/img/sir-aska-career.png")' }}>
                                    <Link to="/careers/siraskaMessage" className="fill-link" />
                                    <div className="card-bottom">
                                        <span className="blog-category">
                                        NEWS
                                        </span>
                                        <span className="blog-name">CTO Aska Ikeda</span>
                                        <Link to="/careers/message" className="blog-more">
                                            <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                            Read more
                                        </Link>
                                    </div>
                                    <Link/>
                                </li>
                                <li className="careers-info__posts__post post-3 tilt" style={{ backgroundImage: 'url("/assets/img/contact-top.jpg")' }}>
                                    <Link to="/contact" className="fill-link" />
                                    <div className="card-bottom">
                                        <span className="blog-name">Contact</span>
                                        <Link to="/contact" className="blog-more">
                                            <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                            Read more
                                        </Link>
                                    </div>
                                    <Link/>
                                </li>
                                <li className="careers-info__posts__post post-4 tilt" style={{ backgroundImage: 'url("/assets/img/about.jpg")' }}>
                                    <Link to="/about" className="fill-link" />
                                    <div className="card-bottom">
                                        <span className="blog-name">About</span>
                                        <Link to="/about" className="blog-more">
                                            <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                            Read more
                                        </Link>
                                    </div>
                                    <Link/>
                                </li>
                            </ul>
                        </div>
                    </main>
                </section>
                <Footer/>
            </Fragment>
        );
    }
}

export default Career;
