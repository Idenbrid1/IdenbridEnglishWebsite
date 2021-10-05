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
                                <div className="plane" style={{ backgroundImage: `url(/assets/img/sir-aska.png )` }}>
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
                           
                                <span className="articles-back" >
                                    <img height="8px" width="15px" alt="img" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                   <Link to="/">Back to Articles</Link>
                                </span>
                                <div className="entry-category">
                                    <ul className="post-categories">
                                        <li>
                                            <span>Representative interview</span>
                                        </li>
                                    </ul>
                                </div>
                                <h1 className="entry-title">IDENBRID CDO</h1>
                                <div className="entry-author">
                                    <p className="byline author vcard">
                                    CDO with experience as a DX engineer at 
                                        <span rel="author" className="fn">
                                            &nbsp;<u>Hitachi / Softbank in Japan</u>
                                        </span>
                                    </p>
                                </div>
                                <div className="entry-content text-section">
                                    
                                    <p>
                                    A data story scientist who changes the world with the power of data.
Business strategy using data, data engineering to prepare the necessary data environment, data science dealing with data.
Has strengths in three areas.
                                    </p>
                                    <p>When I was a college student, I envisioned a service that focused on the social issues of school refusal in Japan.
From my own experience and my family’s experience, I was dissatisfied with the structure of Japanese society where it was difficult to get off the rails and return, and I built a matching service that would help me as much as possible.
The annual sales scale has grown to about 500 million yen, and eventually the service is sold.
After that, I decided to solve social issues with the power of data as my own personal affairs.</p>
                                    <blockquote className="wp-block-quote">
                                        <p>
                                            <strong>Taking advantage of his experience in college, he joined Hitachi to learn “”How can I grow into a company with a scale of 10 billion yen?
                                            </strong>
                                        </p>
                                    </blockquote>
                                    <blockquote className="wp-block-quote">
                                        <p>‘Despite this, Pakistani internet users often voice their concern that there is little reliable data and information on the internet- and that there is a sense of discomfort in using it- especially when there is a high resistance to internet payments.
                                            While internet services are becoming an infrastructure in our daily lives, the data provided must reliable and each company must manage that data responsibly, in order to become a convenient service that people can utilize with peace of mind and security. ”.</p>
                                    </blockquote>
                                    <p>After that, he was transferred to Softbank when he was asked to have data business personnel.
He is engaged in data management and new businesses.
Data management builds a mechanism to realize metadata management and data governance for cloud-native data infrastructures such as Azure and AWS.
For new businesses, we planned new services using data within SoftBank and external sales of the data itself.</p>
                                    <p>
                                        <strong>Through the two companies </strong>
                                    </p>
                                    <p>
                                        <strong>
                                        Strategy to move people
                                  <br/> Mechanism for anyone to easily use data
                                  <br/> 
                                  Experienced the importance of, and ready to create a big company.
Joined idenbrid as a CDO from 2020 to create a strong service / team that solves social issues in the Middle East using the data business.
<br/>For enquiries contact Aska Ikeda (Group CDO)<br/>
+8170-1448-5966 | askaikeda@idenbrid.com
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