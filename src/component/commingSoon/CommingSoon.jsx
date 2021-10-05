import React, { Fragment } from 'react';
// import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './CommingSoon.css';
class CommingSoon extends React.Component {
    state = {}
    componentDidMount() {
        document.body.classList.value = '';
        let comingDate = new Date('Oct 10, 2021 13:12:00')

        let d = document.getElementById('days')
        let h = document.getElementById('hours')
        let m = document.getElementById('minutes')
        let s = document.getElementById('seconds')

        let x = setInterval(function () {
            let now = new Date()
            let selisih = comingDate.getTime() - now.getTime()

            let days = Math.floor(selisih / (1000 * 60 * 60 * 24))
            let hours = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            let minutes = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
            let seconds = Math.floor(selisih % (1000 * 60) / 1000)

            d.innerHTML = getTrueNumber(days)
            h.innerHTML = getTrueNumber(hours)
            m.innerHTML = getTrueNumber(minutes)
            s.innerHTML = getTrueNumber(seconds)

            if (selisih < 0) {
                clearInterval(x)
                d.innerHTML = '00'
                h.innerHTML = '00'
                m.innerHTML = '00'
                s.innerHTML = '00'
            }
        }, 1000)

        function getTrueNumber(x) {
            if (x < 10) return '0' + x
            else return x
        }
    }
    render() {
        return (
            <Fragment>
                <div className="page-comming">
                    <div className="countdown-col col" style={{ background: "url('https://fadzrinmadu.github.io/hosted-assets/responsive-coming-soon-page-with-awesome-newsletter-html-css-and-js/bg.png') no-repeat",backgroundSize:"cover" }}>
                       
                        <Link to="/">
                        <h1 className="CompanyTitle">Idenbrid</h1>
                        <img className="white-logo CompanyImage" style={{width:'50px',}} src="/assets/img/fav-teal.png" alt="" />
                        </Link>
                        <div className="time middle">
                            <span><div id="days">12</div> Days</span>
                            <span><div id="hours">06</div> Hours</span>
                            <span><div id="minutes">35</div> Minutes</span>
                            <span><div id="seconds">54</div> Seconds</span>
                        </div>
                        <h2 className="CommingSoonTitle">We'll Surprise you comming soon!</h2>
                        <h3 className="CommingSoonDesc">Thank you for your patience!</h3>
                        <h3 className="reservedTitle">All Rights reserved by &copy; Idenbrid INC</h3>
                    </div>
                </div>
                <Link to="/">
                    <Footer />
                </Link>
            </Fragment>
        );
    }
}

export default CommingSoon;