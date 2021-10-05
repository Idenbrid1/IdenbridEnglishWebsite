import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
class Solution extends React.Component {
    state = {}
    componentDidMount(){
        document.body.classList.value='archive tax-categories';
      }
    render() {
        return (
            <Fragment>
                <Header />
                <section className="container" id="container">
                    <main className="main">
                        <span className="side-text">Bespoke Software Development</span>
                        <div className="services fh-section">
                            <ul className="services-list">
                                <li className="service-category">
                                    <h1>Idenbrid Inhouse Online Services</h1>
                                </li>
                                <li className="service_1">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/solutions_bizblanca.jpg")' }} />
                                    <h3>IT jobs ke liye</h3>
                                    <Link to="/solutions/bizblanca">BizBlanca : IT HR Database Community </Link>
                                </li>
                                <li className="service_2">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/solutions_pakteki.jpg")' }} />
                                    <h3>Update Pakistan</h3>
                                    <Link to="/solutions/pakteki">PAKTEKI : News Curation Hub </Link>
                                </li>
                                <li className="service_3">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/solutions_zindawork.jpg")' }} />
                                    <h3>Your Best Career The Best You</h3>
                                    <Link to="/comming-soon">ZINDAWORK : Online Recruitment Platform </Link>
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

export default Solution;