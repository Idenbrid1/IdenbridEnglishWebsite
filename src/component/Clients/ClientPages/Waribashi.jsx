import React, { Fragment } from 'react';
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
// import { Link } from 'react-router-dom';
class WaribashiClient extends React.Component {
    state = {}
    componentDidMount() {
        document.body.classList.value = 'projects-template-default';
    }
    render() {
        return (
            <Fragment>
                <Header />
                <section class="container" id="container">
                    <main class="main">
                        <section class="default-banner project-banner" style={{backgroundCcolor: "#0f0f0f",backgroundImage: "url('/assets/img/waribashi-banner.png')"}}>
                            <div class="banner-side-text">Ms. Waribashi Kitchen</div>
                            <ul class="solution-icons">
                                <li>Client</li>
                                <li>
                                    <a href="https://dblx.co.uk/talents/solutions/authoring-tool/">
                                        <img src="https://dblx.co.uk/app/uploads/2020/01/Solution-Icons-05.svg" alt="img"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://dblx.co.uk/talents/experiences/learning-experiences/">
                                        <img src="https://dblx.co.uk/app/uploads/2020/01/Solution-Icons-04.svg" alt="img"/>
                                    </a>
                                </li>
                            </ul>
                            <div class="banner-text blur-in" data-blur-delay="0">
                                <h1>Ms. Waribashi Kitchen</h1>
                                <p>Website for Japanese Youtube Cooking Channel</p>
                            </div>
                            <div class="projects-description blur-in"></div>
                        </section>
                        <div class="project-section fh-section">
                            <div class="project-section-inner">
                                <div class="project-aims-title" data-aos="fade-up">
                                    <h2>Project <em>Aims.</em></h2>
                                </div>
                                <div class="project-aims-wrapper" data-aos="fade-up">
                                    <div class="project-aims-left">
                                        <h2 class="p1"><span class="s1">Ms. Waribashi Kitchen is a project started in the spring of 2021 to disseminate Japanese cooking recipes to the world in English through YouTube.</span></h2>
                                    </div>
                                    <div class="project-aims-right">
                                        <p>
                                            <span class="s1">
                                            One of the unique points of their branding is that there are no narrators or faces seen on screen, 
                                            maintining a strong focus on delivering delicious food through visual beauty alone. 
                                            As the title and brand name suggests, the charming cat character of "Ms. Waribashi" plays a central role 
                                            in the branding of the website.
                                            </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project-section-two fh-section">
                            <div class="project-section-two-inner">
                                <div class="project-approach-wrapper">
                                    <div class="project-approach-left" style={{backgroundImage: "url('/assets/img/waribashi-09.jpg')"}}>
                                    </div>
                                    <div class="project-approach-right">
                                        <div class="project-approach-text" data-aos="fade-up">
                                            <div class="project-approach-title">
                                                <h2>Our <em>Approach.</em></h2>
                                            </div>
                                            <h2 class="p1"><span class="s1">By creating this website, we designed a platform that maximizes the visual content that Ms. Waribashi Kitchen is known for in Japan.</span><span class="s1">.</span></h2>
                                            <p class="p1"><span class="s1"> </span></p>
                                            <p class="p1"><span class="s1">Assuming that the content and engagement from English-speaking countries will increase in the future, we designed each category so that it is easy to see, allowing users to reach the articles they want to view in the shortest possible time..</span></p>
                                            <p class="p1"><span class="s1"> </span></p>
                                        </div>
                                        <div class="project-approach-sub-image" style={{backgroundImage: "url('/assets/img/waribashi-img-07.png')"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project-section-three fh-section" style={{backgroundImage: "url('/assets/img/waribashi-img-03.jpg')"}}></div>
                        <div class="project-section-two fh-section">
                            <div class="project-section-two-inner">
                                <div class="project-approach-wrapper">
                                    <div class="project-approach-right">
                                        <div class="project-approach-text" data-aos="fade-up">
                                            <h2 class="p1"><span class="s1">In Japan, a branding method using characters called "Yuru-chara" has successfully been implemented for mnay decades. Ms. Waribashi Kitchen is also promoting a similar branding strategy.</span></h2>
                                            <p class="p1"><span class="s1"> </span></p>
                                            <p class="p1"><span class="s1">In the future, we have a system in place on the website to support the character-led branding strategy, which will be ready for when clients develop more culinary visual content on their English channel and the website.</span></p>
                                        </div>
                                        <div class="project-approach-sub-image" style={{backgroundImage: "url('/assets/img/MsWaribashilogo.png')"}}>
                                        </div>
                                    </div>
                                    <div class="project-approach-left" style={{backgroundImage: "url('/assets/img/waribashi-img-06.jpg')"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project-section-three fh-section" style={{backgroundImage: "url('/assets/img/waribashi-banne-04r.png')"}}></div>
                        <div class="project-section-six fh-section">
                            <div class="project-section-six-inner">
                                <div class="project-result-title" data-aos="fade-up">
                                    <h2>Their <em>Journey.</em></h2>
                                </div>
                                <div class="project-result-wrapper">
                                    <div class="project-result-left" data-aos="fade-up">
                                        <h2 class="p1">
                                            <span class="s1">
                                            They have launched a website, YouTube channel and Instagram account targeting an English-speaking audience and regularly update and create content while maintinaing high visual quality and overall branding. 
                                            </span></h2>
                                        <p class="p1"><span class="s1"> </span></p>
                                        <p class="p1"><span class="s1">Japan is known for creating content for a Japnese audience- that is, for domestic use only. Ms. Waribashi Kitchen has assumed adifferent and proactive strategy to reach a global audience in English. In addition, since a professional photographer and videographer is taking the lead in creating the brand's visual content, it is a powerful weapon that can convey the heart of Japanese food without language barriers.</span></p>
                                    </div>
                                    <div class="project-result-right" data-aos="fade-up">
                                        <ul class="stats">
                                            <li class="stat">
                                                <span class="stats-top">
                                                    <span data-amount="20 " class="value"></span>
                                                    <span class="stats-head"><h3>20 Posts </h3></span>
                                                </span>
                                                <p class="result-text">AND GROWING</p>
                                            </li>
                                            <li class="stat">
                                                <span class="stats-top">
                                                    <span data-amount="15 " class="value"></span>
                                                    <span class="stats-head"><h3>15 Countries</h3></span>
                                                </span>
                                                <p class="result-text">2021 Project KIckoff</p>
                                            </li>
                                            <li class="stat">
                                                <span class="stats-top">
                                                    <span data-amount="2020 " class="value"></span>
                                                    <span class="stats-head"><h3>Verified</h3></span>
                                                </span>
                                                <p class="result-text">Website, YouTube, Instagram</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project-section-seven fh-section">
                            <div class="project-section-seven-inner">
                                <div class="project-testimonial-wrapper">
                                    <div class="project-testimonial-left">
                                        <div class="project-testimonial-title">
                                            <h2>"</h2>
                                        </div>
                                        <h2 class="p1"><span class="s1">YouTube is the main platform for Ms. Waribashi Kitchen and it was imperative to create a website that successfully supports the brand's business strategy</span></h2>
                                        <p class="p1"><span class="s1"><br />
                                        The Idenbrid team is flexible to the needs of a growing brand and is focused on the business growth in line with Ms. Waribashi Kitchen's YouTube strategy.</span></p>
                                        {/* <p>&nbsp;</p>
                                        <p><strong>Sarah Bailey </strong></p>
                                        <p><strong>HR Development Manager, Corporate Development</strong></p> */}
                                    </div>
                                    <div class="project-testimonial-right" style={{backgroundImage: "url('/assets/img/waribashi-image-09.jpg')"}}></div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
                <Footer />
            </Fragment>
        );
    }
}

export default WaribashiClient;