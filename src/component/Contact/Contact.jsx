import React, { Fragment } from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
class Contact extends React.Component {
    state = {}
    componentDidMount() {
        document.body.classList.value = 'archive tax-categories';
        
    }
    submitFormEmail = (e)=> {
        e.preventDefault();
        console.log(e.target.last_name.value, e.target.name.value);
        if (e.target.first_name.value !== '' && e.target.last_name.value !== ''
            && e.target.phone_number.value !== '' && e.target.your_message.value !== ''
            && e.target.your_email.value !== '' && e.target.company_name.value !== ''
            && e.target.your_budget.value !== '' && e.target.your_message.value !== '') {
                if(e.target.privacy_check_box !== ""){
                    emailjs.sendForm('idenbridMail', 'template_4n2mh34', e.target, 'user_GvouIX22EIJLWMKVCtTAR')
                    .then((result) => {
                        // console.log(result.text);
                        // document.querySelector('.notification').style.display = `block`;
                        // document.querySelector('.notification').innerHTML = `Thanks For Contact us Your Email has been sent`;
                        // setInterval((e) => {
                        //     document.querySelector('.notification').innerHTML = ``;
                        // }, 3000)
                    }, (error) => {
                        console.log(error.text);
    
                    });
                e.target.reset();
                }
                else{
                    alert("please allow privacy")
                }
        }
        else {

            // document.querySelector('.notification').style.display = `block`;
            // document.querySelector('.notification').innerHTML = `Please fill fields`;
            // setInterval((e) => {
            //     document.querySelector('.notification').style.display = `none`;
            //     document.querySelector('.notification').innerHTML = ``;
            // }, 2000)
        }
    }
    
    render() {
        return (
            <Fragment>
                <Header />
                <section className="container" id="container">
                    <main className="main">
                        <span className="side-text">Contact Us</span>
                        <section className="default-banner" style={{ backgroundColor: '#0f0f0f', backgroundImage: 'url("assets/img/contact-top.jpg")' }}>
                            <div className="banner-text">
                                <h1>Together…<br />
                                    Let’s Make <em>Waves</em></h1>
                                <p>Get in touch</p>
                            </div>
                        </section>
                        <div className="contact-emails fh-section">
                            <div className="emails-inner">
                                <span>Let's start an awesome</span>
                                <h2>New <em>relationship</em></h2>
                                <ul className="emails">
                                    <li>
                                        <span>Have a question?</span>
                                        <Link href="">helloworld@idenbrid.com</Link>
                                    </li>
                                    <li>
                                        <span>Looking to make an impact?</span>
                                        <Link href="">careers@idenbrid.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-locations fh-section" style={{ minHeight: '40vh' }}>
                            <ul className="locations">
                                
                                <li className="location tilt">
                                    <figure style={{ backgroundImage: 'url("assets/img/contact-lahore.jpg")' }}>
                                    </figure>
                                    <div className="location-text">
                                        <h3>Lahore</h3>
                                        <p></p>
                                        <p>176 Y Block DHA Phase 3, Lahore</p>
                                        <p>
                                        Telephone
                                        </p>
                                        <p>+923014345825</p>
                                        <p>Language: English, Urdu</p>
                                        <p />
                                    </div>
                                </li>
                                 <li className="location tilt">
                                    <figure style={{ backgroundImage: 'url("assets/img/contac-tokyo.jpg")' }}>
                                    </figure>
                                    <div className="location-text">
                                        <h3>Tokyo</h3>
                                        <p>Working remotely</p>
                                        <p>
                                        Telephone
                                        </p><p>+8170-1448-5966</p>
                                        <p>Language: Japanese, English</p>
                                        <p />
                                    </div>
                                </li> 
                                <li className="location tilt">
                                    <figure style={{ backgroundImage: 'url("assets/img/contact_let.jpg")' }}>
                                    </figure>
                                    <div className="location-text">
                                        <h3>Let's Chat</h3>
                                        <p>Pop into one of our offices, or message us to start your new project</p>
                                        <p />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-form fh-section">
                            <div className="contact-form-inner">
                                <div role="form" className="wpcf7" id="" lang="en-US">
                                    <div className="screen-reader-response" />
                                    <form className="" onSubmit={this.submitFormEmail}>
                                        <p className="fullwidth"><span className="uppercase-text">More about you</span></p>
                                        <p>
                                            <label> First Name</label><br />
                                            <span className="wpcf7-form-control-wrap first-name">
                                                <input type="text" name="first_name" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" />
                                            </span>
                                        </p>
                                        <p><label> Last Name</label><br />
                                            <span className="wpcf7-form-control-wrap last-name"><input type="text" name="last_name" className="wpcf7-form-control wpcf7-text" /></span> </p>
                                        <p><label> Email </label><br />
                                            <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your_email" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" /></span></p>
                                        <p><label> Telephone </label><br />
                                            <span className="wpcf7-form-control-wrap your-tel"><input type="tel" name="phone_number" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" /></span></p>
                                        <p><label> Company Name</label><br />
                                            <span className="wpcf7-form-control-wrap company-name"><input type="text" name="company_name" className="wpcf7-form-control wpcf7-text" aria-invalid="false" /></span> </p>
                                        <p><label> Budget</label><br />
                                            <span className="wpcf7-form-control-wrap budget"><input type="text" name="your_budget" className="wpcf7-form-control wpcf7-text" aria-invalid="false" /></span>
                                        </p>
                                        <p className="fullwidth"><label> Message</label><br />
                                            <span className="wpcf7-form-control-wrap your-message"><textarea name="your_message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" /></span></p>
                                        <div className="solutions">
                                            <div className="solutions-text">
                                                <span className="uppercase-text">You're interested in</span><p />
                                                <p>As part of the project we'd love to know the solutions you'd be looking for</p>
                                            </div>
                                            <p>
                                                <span className="wpcf7-form-control-wrap services-required">
                                                    <span className="wpcf7-form-control wpcf7-checkbox">
                                                        <span className="wpcf7-list-item first">
                                                            <input type="checkbox" name="websites" defaultValue="websites" />
                                                            <span className="wpcf7-list-item-label">Websites</span>
                                                        </span>
                                                        <span className="wpcf7-list-item">
                                                            <input type="checkbox" name="web-applications" defaultValue="web-applications" />
                                                            <span className="wpcf7-list-item-label">Web applications</span>
                                                        </span>
                                                        <span className="wpcf7-list-item">
                                                            <input type="checkbox" name="mobile-apps" defaultValue="mobile-apps" />
                                                            <span className="wpcf7-list-item-label">Mobile apps</span>
                                                        </span>
                                                        <span className="wpcf7-list-item">
                                                            <input type="checkbox" name="digital-marketing-branding" defaultValue="digital-marketing-branding" />
                                                            <span className="wpcf7-list-item-label">Digital marketing / Branding</span>
                                                        </span>
                                                        <span className="wpcf7-list-item">
                                                            <input type="checkbox" name="business-consultanting" defaultValue="business-consultanting" />
                                                            <span className="wpcf7-list-item-label">Business consultanting</span>
                                                        </span>
                                                        <span className="wpcf7-list-item">
                                                            <input type="checkbox" name="others" defaultValue="others" />
                                                            <span className="wpcf7-list-item-label">Others</span>
                                                        </span>
                                                        
                                                    </span>
                                                </span>
                                            </p>
                                        </div>
                                        <p className="field fullwidth gdpr">
                                            <span className="wpcf7-form-control-wrap gdpr-accept"><span className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required"><span className="wpcf7-list-item first last">
                                                <input type="checkbox" name="privacy_check_box" defaultValue="By checking this box you have read and confirm that you agree to our privacy policy, and agree to us storing your information for the use of responding to this enquiry" /><span className="wpcf7-list-item-label">By checking this box you have read and
                                                    confirm that you agree to our privacy policy, and agree to us storing
                                                    your information for the use of responding to this
                                                    enquiry</span></span></span></span>
                                        </p>
                                        <p className="submit-button"><input type="submit" defaultValue="Send" className="wpcf7-form-control wpcf7-submit" /></p>
                                        <div className="wpcf7-response-output wpcf7-display-none" />
                                    </form>
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

export default Contact;