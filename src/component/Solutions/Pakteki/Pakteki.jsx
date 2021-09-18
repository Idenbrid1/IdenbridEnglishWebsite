import { Component, Fragment } from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import axios from 'axios';
class Pakteki extends Component {
  state = {
    data: [],
    splice: 50,
    mounted: false,
  }

  componentDidMount() {
    document.body.classList.value = 'page-template';
    axios.get('http://3.141.18.62:5000/api/news/all').then((res) => {
      this.setState({
        data: res.data,
        mounted:true
      })
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section className="container" id="container">
          <main className="main">
            <div>
              <div className="categories-nav">
                <span className="categories-filter">Filter by</span>
                <span className='all active'>All</span>
                <span className='News'>News</span>
                <span className='Culture'>Culture</span>
                <span className='Technology'>Technology</span>
                <span className='Creative'>Creative</span>
              </div>
              <div id="blog-overview">
                {this.state.mounted === false ? <h1 className="display-1 text-dark dardk">loading...</h1> : this.state.data.splice(1, this.state.splice).map((ele, index) => {
                  return (
                    <div key={index} className="blog-card js-tilt" style={{ backgroundImage: `url(${ele.image})` }}>
                      <Link key={index} to={`/paketki/detail-news/${ele._id}`}>
                        <div className="card-bottom" style={{ width: "100%", }}>
                          <span className="blog-category">{ele.category}</span>
                          <span className="blog-name">{ele.title}</span>
                          <div className="blog-more">
                            <img height="10px" width="20px" src="https://dblx.co.uk/app/themes/digitalbalance/dist/images/arrow-right-gold.svg" alt="img" style={{ marginRight: '10px' }} />
                            Read more
                          </div>
                        </div>
                        <span className="blog-date" />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
        </section>
      </Fragment>
    );
  }
}

export default Pakteki;