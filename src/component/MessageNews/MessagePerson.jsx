import React, { Fragment } from 'react';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
class MessagePerson extends React.Component {
    state = {
        data: {}
    }
    componentDidMount() {
        document.body.classList.value = 'page-template page careers';
    }
    render() {

        return (
            <Fragment>
                <Header />
                <section className="container" id="container">
                    <main className="main">
                        <style
                            dangerouslySetInnerHTML={{ __html: "\nhtml{\noverflow-y: hidden !important;\n}\n\n@media only screen and (max-width: 770px) {\nhtml{\n  overflow-y: auto !important;\n-webkit-overflow-scrolling: touch !important;\n}\n}\n" }}
                        />
                        <article className="article-page">
                            <div className="article-page-left">
                                <div id="canvas" />
                                <div className="plane" style={{ backgroundImage: `url(/assets/img/ceo_img.png)` }}>
                                    <img src="/assets/img/ceo_img.png" alt="img" crossOrigin="anonymous" />
                                </div>
                                <div className="entry-date">
                                    <time className="updated" dateTime="2020-04-16T11:53:16+00:00">
                                        <span className="date-day">28 </span>
                                        <span className="date-month">September </span>
                                        <span className="date-year">2021</span>
                                    </time>
                                </div>
                            </div>
                            <div className="article-page-right">
                                <span className="articles-back">
                                    <img height="8px" width="15px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                    <Link to="/">Back to Articles</Link>
                                </span>
                                <div className="entry-category">
                                    <ul className="post-categories">
                                        <li>
                                            <span>A Message from</span>
                                        </li>
                                    </ul>
                                </div>
                                <h1 className="entry-title">CEO of IDENBRID INC.</h1>
                                <div className="entry-author">
                                    <p className="byline author vcard">
                                        Written By
                                        <span rel="author" className="fn">
                                            &nbsp;<u>CEO of IDENBRID INC.</u>
                                        </span>
                                    </p>
                                </div>
                                <div className="entry-content text-section">
                                    <h3>
                                        <strong>Many people ask me why I would move to Pakistan and work in the IT business. It's a valid question. </strong>
                                    </h3>
                                    <p>
                                        "I first visited Pakistan in the winter of 2013. I didn't really understand South Asia at the time and I was overwhelmed by the enthusiasm of the Pakistani people and the rich culture I knew nothing about. I remember when I first arrived in Pakistan, a large group of people were waiting in the arrival lobby of the airport, enthusiastically welcoming the people coming out of Arrivals. The atmosphere was almost festive. The sight and voice of some of them yelling "Pakistan Zindabad, Pakistan Zindabad" still clings to my memory today.
                                    </p>
                                    <p>I remember getting into the car and asking, "What does that mean? "Translated literally, it means, "Long Live Pakistan". The point of contact between me and Pakistan began here.</p>
                                    <p>What we have noticed in the IT business in Pakistan is that the potential for growth in this country is endless. The population is increasing year by year, and as of 2020, it has exceeded 2.2 million people, making it the fifth largest country in the world.
                                        The population with access to the internet is also increasing rapidly year by year.</p>
                                    <blockquote className="wp-block-quote">
                                        <p>
                                            <strong>“Unfortunately, however, the GDP per capita of Pakistan is USD 1400, categorizing it in dire need of extensive growth. To me, this reads as the there being no other option but to grow. The only way is up.
                                                I see Pakistan as a dark horse and one of the countries with the highest growth potential in the future- possibly more than any other country in Asia.
                                            </strong>
                                        </p>
                                    </blockquote>
                                    <blockquote className="wp-block-quote">
                                        <p>
                                            <strong>“Economic revitalization and technological development are indispensable for the growth of the country, as can be seen with China's great leap forward in recent years. Among these developments, the IT field is an important software field that is directly connected to various industries, both within the country and also, worldwide.
                                                As the number of people who can access the Internet is increasing rapidly, sites with a huge number of users such as EC sites and search portal sites are being created and accessed everyday.
                                            </strong>
                                        </p>
                                    </blockquote>
                                    <blockquote className="wp-block-quote">
                                        <p>‘Despite this, Pakistani internet users often voice their concern that there is little reliable data and information on the internet- and that there is a sense of discomfort in using it- especially when there is a high resistance to internet payments.
                                            While internet services are becoming an infrastructure in our daily lives, the data provided must reliable and each company must manage that data responsibly, in order to become a convenient service that people can utilize with peace of mind and security. ”.</p>
                                    </blockquote>
                                    <p>We aim to build IT platforms, solutions and services that people can use with confidence in Pakistan.</p>
                                    <p>
                                        <strong>The company name "IDENBRID" is a combination of the two words, "Identity" and "Hybrid". We are aiming for an unprecended upgrade in user experience like never before, by hybridizing Pakistani culture with our extenive business experience from all parts of the world. And I have no doubt that we will achieve it. </strong>
                                    </p>
                                    <p>
                                        <strong>
                                            "For enquiries contact Mujtaba Tariq (PK office Project Manager)
                                           <br/> 0306 404 1221 | mujtabatariq@idenbrid.com"
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </main>
                </section>
            </Fragment>
        );
    }
}

export default MessagePerson;