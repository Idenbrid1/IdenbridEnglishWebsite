import React, { Fragment } from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
class Client extends React.Component {
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
                        <div className="projects-overview-grid">
                            <div className="projects-overview-grid__project" style={{ backgroundImage: 'url("assets/img/clients.jpg")' }}>
                                <Link className="fill-link" to="/coming-soon" />
                                <div className="text">
                                    <h2>Mobile App </h2>
                                </div>
                                <div className="projects-explore">
                                    <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                    Explore
                                </div>
                                <Link/>
                            </div>
                            <div className="projects-overview-grid__project" style={{ backgroundImage: 'url("/assets/img/client_usa anmarie.jpg")' }}>
                                <Link className="fill-link" to="clients/usa" />
                                <div className="text">
                                    <h2>Anmarie Uber</h2>
                                </div>
                                <div className="projects-explore">
                                    <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                    Explore
                                </div>
                                <Link/>
                            </div>
                            <div className="projects-overview-grid__project" style={{ backgroundImage: 'url("/assets/img/client_ms.waribashi.jpg")' }}>
                                <Link className="fill-link" to="/clients/waribashi" />
                                <div className="text">
                                    <h2>Ms. Waribashi Kitchen</h2>
                                </div>
                                <div className="projects-explore">
                                    <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                    Explore
                                </div>
                                <Link/>
                            </div>
                            <div className="projects-overview-grid__project" style={{ backgroundImage: 'url("/assets/img/client_aution.jpg")' }}>
                                <Link className="fill-link" to="/coming-soon" />
                                <div className="text">
                                    <h2>Web Application</h2>
                                </div>
                                <div className="projects-explore">
                                    <img height="10px" width="20px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                    Explore
                                </div>
                                <Link/>
                            </div>
                        </div>
                    </main>
                </section>
                <Footer/>
            </Fragment>
        );
    }
}

export default Client;