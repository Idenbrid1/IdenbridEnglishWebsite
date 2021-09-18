import React, { Fragment } from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
class Experience extends React.Component {
    state = {}
    componentDidMount(){
        document.body.classList.value='archive tax-categories';
      }
    render() {
        return (
            <Fragment>
                <Header/>
                <section className="container" id="container">
                    <main className="main">
                        <span className="side-text">Experiences</span>
                        <div className="services fh-section">
                            <ul className="services-list">
                                <li className="service-category">
                                    <h1>Experiences</h1>
                                </li>
                                <li className="service_1">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/experience.jpg")' }} />
                                    <Link to="experiences/business">Business</Link>
                                </li>
                                <li className="service_2">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/experience_web_mobile.jpg")' }} />
                                    <Link to="experiences/website-mobile-platforms/">Web &amp; Mobile Platforms</Link>
                                </li>
                                <li className="service_3">
                                    <figure className="service-image" style={{ backgroundImage: 'url("https://dblx.co.uk/app/uploads/2020/01/5-3.jpg")' }} />
                                    <Link href="solutions/topbizer">Remote House</Link>
                                </li>
                                <li className="service_4">
                                    <figure className="service-image" style={{ backgroundImage: 'url("https://dblx.co.uk/app/uploads/2020/01/5-1-1.jpg")' }} />
                                    <Link href="solutions/bizer">Bizer Local Employes
                                        Platform</Link>
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

export default Experience;