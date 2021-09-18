import React,{ Fragment } from "react";
// import loadjs from "loadjs";
class Footer extends React.Component {
    state = {}
    render() {
        return (
            <Fragment>
                <footer>
                    <figure className="powered-by" style={{ backgroundImage: 'url("assets/img/white-text-logo.png")' }}>
                    </figure>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;