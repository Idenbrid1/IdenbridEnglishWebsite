import React, { Fragment } from 'react';
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';
import './RemoteHouse.css';
class RemoteHouse extends React.Component {
    state = {}
    componentDidMount() {
        document.body.classList.value = 'single single-services hub';
    }
    render() {
        return (
            <Fragment>
                <Header />
                <section className="container" id="container">
                    <main className="main">
                        <section className="default-banner" style={{ backgroundImage: 'url("/assets/img/romote-house-banner.png")' }}>
                            <div className="banner-text remote-banner">
                                <h1>「Remote House」 </h1>
                                <h3><em>We fuel your company's</em><br />
                                    <em>growth by providing talented <br /> remote developers and software engineers.</em></h3>
                            </div>
                        </section>
                        <div className="overview fh-section">
                            <figure className="overview-image" style={{ backgroundImage: 'url("/assets/img/platform.png")' }} />
                            <div className="overview-text text-section">
                                <h2>PROVIDING SPECIALISED HUMAN RESOURCES TO UK BUSINESSES</h2>
                                <p><strong>Remote House: An Overview</strong></p>
                                <p>
                                Remote House is a remote hiring service that builds a bridge between 
                                growing businesses in the UK and talented software engineers in Pakistan.
                                Our service streamlines and simplifies the hiring process,
                                connecting your business with our team of candidates who
                                have passed internationally recognised tests (?) for world-class software engineers.
                                </p>
                            </div>
                        </div>
                   
                        <div className="OurStoryContainer">
                            <div className="OurStoryInnerContainer column-6">
                                <div className="OurStoryInnerBlock">
                                    <p className="ourStoryTitle">OUR<br />Story</p>

                                    <p>
                                        <p className="title">Total Revenue</p>
                                        <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quibusdam ducimus accusantium eum aperiam vitae, consectetur
                                        in culpa, corporis eius, nihil blanditiis maiores magni.
                                        Ut reprehenderit, eum vero ipsum in neque corrupti itaque
                                        doloribus adipisci repellat fuga temporibus quos asperiores
                                        quaerat ad? Ea ratione totam obcaecati excepturi possimus
                                        dolores repellat nobis magni ipsam aut impedit ab explicabo
                                        dolorem quia minus perferendis placeat voluptatem porro beatae,
                                        harum saepe doloribus modi? Qui laborum dicta inventore, harum
                                        distinctio earum sint temporibus dolorem labore debitis nobis magni,
                                        amet quibusdam? Deleniti perspiciatis aliquid repellendus vitae eos
                                        ad ullam odio quae veritatis odit officiis, consequatur repellat
                                        animi id similique iste quod sapiente quidem facere natus illum
                                        ratione laboriosam architecto? Perspiciatis earum molestias enim
                                        magnam dicta libero officia, aperiam odio non exercitationem asperiores
                                        repudiandae debitis optio, veniam nulla iste provident corrupti illum
                                        officiis aliquam explicabo dolores distinctio ea ipsa? Architecto
                                        praesentium dolorum perferendis repellendus saepe ut voluptatibus
                                        alias facere qui necessitatibus corrupti asperiores sunt placeat vel,
                                        impedit velit inventore fugit vero temporibus. Dignissimos architecto
                                        nulla ipsam ab? Accusantium dicta fugiat aliquid, quas dolores hic
                                        repellat nulla doloribus dolorum unde ut id molestias veritatis ipsum
                                        cumque omnis officia? Id voluptatum rerum ipsam ab ullam officia delectus
                                        dicta maxime voluptatibus!
                                    </p>
                                </div>
                                <div className="OurStoryInnerBlock">
                                    <p className="ourStoryTitle">OUR<br />Story</p>
                                    <p>
                                        <p className="title">Total Revenue</p>
                                        <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quibusdam ducimus accusantium eum aperiam vitae, consectetur
                                        in culpa, corporis eius, nihil blanditiis maiores magni.
                                        Ut reprehenderit, eum vero ipsum in neque corrupti itaque
                                        doloribus adipisci repellat fuga temporibus quos asperiores
                                        quaerat ad? Ea ratione totam obcaecati excepturi possimus
                                        dolores repellat nobis magni ipsam aut impedit ab explicabo
                                        dolorem quia minus perferendis placeat voluptatem porro beatae,
                                        harum saepe doloribus modi? Qui laborum dicta inventore, harum
                                        distinctio earum sint temporibus dolorem labore debitis nobis magni,
                                        amet quibusdam? Deleniti perspiciatis aliquid repellendus vitae eos
                                        ad ullam odio quae veritatis odit officiis, consequatur repellat
                                        animi id similique iste quod sapiente quidem facere natus illum
                                        ratione laboriosam architecto? Perspiciatis earum molestias enim
                                        magnam dicta libero officia, aperiam odio non exercitationem asperiores
                                        repudiandae debitis optio, veniam nulla iste provident corrupti illum
                                        officiis aliquam explicabo dolores distinctio ea ipsa? Architecto
                                        praesentium dolorum perferendis repellendus saepe ut voluptatibus
                                        alias facere qui necessitatibus corrupti asperiores sunt placeat vel,
                                        impedit velit inventore fugit vero temporibus. Dignissimos architecto
                                        nulla ipsam ab? Accusantium dicta fugiat aliquid, quas dolores hic
                                        repellat nulla doloribus dolorum unde ut id molestias veritatis ipsum
                                        cumque omnis officia? Id voluptatum rerum ipsam ab ullam officia delectus
                                        dicta maxime voluptatibus!
                                    </p>
                                </div>
                            </div>
                            <div className="OurStoryInnerContainerImage column-6" style={{ backgroundImage: "url('/assets/img/story.png')" }}></div>
                        </div>
                        <div className="stats-wrapper fh-section">
                            <div className="stats-inner">
                                <figure className="stats-image" style={{ backgroundImage: 'url("/assets/img/specializing.png")' }}>
                                </figure>
                                <ul className="stats">
                                    <li className="stat">
                                        <span className="value">1.</span>
                                        <h3>Recruitment made Simple</h3>
                                        <p>From the first email to the first day of work,
                                           we take the pain out of hiring and bring only the most qualified and specialized candidates to you.
                                        </p>
                                    </li>
                                    <li className="stat">
                                        <span className="value">2.</span>
                                        <h3>Streamlined and Efficient</h3>
                                        <p>With Remote House, we streamline and accelerate the hiring process bringing 
                                           you talented candidates within days of your initial consultation.
                                        </p>
                                    </li>
                                    <li className="stat">
                                        <span className="value">3.</span>
                                        <h3>Affordable Rates for Growing Businesses</h3>
                                        <p>Grow your business without compromise as affordable rates mean you can dramatically 
                                           save on hiring and monthly expenses without ever compromising on quality.
                                        </p>
                                    </li>
                                    <li className="stat">
                                        <span className="value">4.</span>
                                        <h3>Globalize your Team</h3>
                                        <p>Transcend your business’s geographical limits, 
                                           and access the diverse skillsets and specializations of a global workforce.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="quote-section fh-section" style={{ backgroundImage: 'url("/assets/img/special-banner.png")' }}>
                            <div className="quote">
                                <p>The landscape of the contemporary workforce is going through an evolution like no other in history: remote work
                                    is tearing down geographical barriers and building a future of unprecedented global collaboration.</p>
                                <p>&nbsp;</p>
                                <h4><strong>Tyler Warner</strong></h4>
                                <h5>BUSINESS DEVELOPMENT EXECUTIVE</h5>
                                {/* <h5><strong>Santander</strong></h5> */}
                            </div>
                        </div>
                        <div className="detail-section fh-section">
                            <div className="detail-inner">
                                <div className="detail-left text-section">
                                    <h2>What is "Remote House"?<em>Service details</em></h2>
                                    <p>&nbsp;</p>
                                    <p>
                                        <strong>
                                        Remote House is a matching service that allows you to hire talented IT personnel remotely. We provide employers with the following services:<br/>
(1) We have an in-depth discussion to establish requirements of the role.<br/>
(2) We gather candidates based on these established employment conditions. <br/>
(3) A three-way interview will be held between a representative from your business, the candidate, and a Remote House representative.<br/>
(4) Once a candidate has been chosen, we work with your business to establish an employment contract. <br/>
(5) Once the contract is signed, your new team member may begin working remotely from the Remote House office (?) <br/>
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
                <Footer />
            </Fragment>
        );
    }
}

export default RemoteHouse;