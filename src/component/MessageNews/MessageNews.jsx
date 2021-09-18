import React, { Fragment } from 'react';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import axios from 'axios';
class MessageNews extends React.Component {
    state = {
        data: {}
    }
    componentDidMount() {
        document.body.classList.value = 'page-template page careers';
        axios.get(`http://3.141.18.62:5000/api/news/single/${this.props.match.params.id}`).then((res) => {
            this.setState({
                data: res.data
            })
        });
    }
    render() {

        return (
            <Fragment>
                <Header />
                <section className="container" id="container">
                    <main className="main">
                        <style dangerouslySetInnerHTML={{ __html: "\n                html {\n                    overflow-y: hidden !important;\n                }\n\n                @media only screen and (max-width: 770px) {\n                    html {\n                        overflow-y: auto !important;\n                        -webkit-overflow-scrolling: touch !important;\n                    }\n                }\n            " }} />
                        <article className="article-page">
                            <div className="article-page-left">
                                <div id="canvas" />
                                <div className="plane" style={{ backgroundImage: `url(${this.state.data.image})` }}>
                                    <img alt="img" src="https://dblx.co.uk/app/uploads/2020/04/Dan-M.jpg" crossOrigin="anonymous" />
                                </div>
                                <div className="entry-date">
                                    <time className="updated" dateTime="2020-04-16T11:53:16+00:00">
                                        <span className="date-day">16th</span>
                                        <span className="date-month">April</span>
                                        <span className="date-year">2020</span>
                                    </time>
                                </div>
                            </div>
                            <div className="article-page-right">
                                <span className="articles-back">
                                    <img height="8px" alt="img" width="15px" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" style={{ marginRight: '10px' }} />
                                    <Link to="/">Back to Articles</Link>
                                </span>
                                <div className="entry-category">
                                    <ul className="post-categories">
                                        <li>
                                            <span>Representative interview</span>
                                        </li>
                                    </ul>
                                </div>
                                <h1 className="entry-title">{this.state.data.title}</h1>
                                <div className="entry-author">
                                    <p className="byline author vcard">
                                        Written By
                                        <span rel="author" className="fn">
                                            &nbsp;<u>{this.state.data.chanel}</u>
                                        </span>
                                    </p>
                                </div>
                                <div className="entry-content text-section">
                                    <h3>
                                        <strong>{this.state.data.title}</strong>
                                    </h3>
                                    <p>{this.state.data === {} ? `
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita voluptatibus ipsam, laudantium praesentium recusandae itaque alias sint odio similique illo accusantium placeat in deleniti ut quas nam. Dignissimos sunt, odio eveniet fugit ea architecto sed enim quam tempora inventore?` : this.state.data.description}</p>

                                    <blockquote className="wp-block-quote">
                                        <p>‘The next steps of the journey for MCG and DBLX will shape it for many years to come. I
                                            am enjoying getting to know the passionate DBLX team and understanding how our products
                                            grow the capabilities of our customers and their employees. The world is changing and
                                            technology is shaping the future of work.&nbsp; Employee engagement will play a pivotal
                                            role in improving the productivity and enjoyment of work, especially now that millions
                                            are used to working from home”.</p>
                                    </blockquote>
                                    <p>Macklin joined DBLX at the start of April, at an exciting time for the business which has
                                        seen significant growth over the past year.</p>
                                    <p><strong>For enquiries contact Hannah Smith (Group Marketing Manager)<br />0330 133 163 |
                                        hannah.smith@myclevergroup.com&nbsp;</strong>
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

export default MessageNews;