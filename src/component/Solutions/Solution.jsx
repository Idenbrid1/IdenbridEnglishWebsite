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
                                    <h1>Idenbrid Software Development</h1>
                                </li>
                                <li className="service_1">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/solutions_bizblanca.jpg")' }} />
                                    <Link to="/solutions/bizblanca">Bizblanca Provide Jobs </Link>
                                </li>
                                <li className="service_2">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/solutions_pakteki.jpg")' }} />
                                    <Link to="/solutions/pakteki">Pakteki News Hub </Link>
                                </li>
                                {/*<li className="service_3">
                                    <figure className="service-image" style={{ backgroundImage: 'url("assets/img/cartax.jpg")' }} />
                                    <Link to="/">Cartax vehicle Import Platform</Link>
        </li>*/}
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