import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../component/Home/Home";
import About from '../component/About/About';
import Solution from '../component/Solutions/Solution';
import BizBlanca from '../component/Solutions/BizBlanca/BizBlanca';
import Experience from '../component/Experiences/Experience';
import Client from '../component/Clients/Client';
import WaribashiClient from '../component/Clients/ClientPages/Waribashi';
import ExperienceOffShoreClient from '../component/Clients/ClientPages/ExperienceOffShore';
import UsaClient from '../component/Clients/ClientPages/ClientUsa';
import Career from '../component/Careers/Career';
import Contact from '../component/Contact/Contact';
import  MessageNews  from "../component/MessageNews/MessageNews";
import MessagePerson from "../component/MessageNews/MessagePerson";
import SiraskaMessage from "../component/MessageNews/SiraskaMessage";
import PrivacyPolicy from "../component/PrivacyPolicy/PrivacyPolicy";
import Pakteki from "../component/Solutions/Pakteki/Pakteki";
import CommingSoon from '../component/commingSoon/CommingSoon';
import RemoteHouse from '../component/Experiences/RemoteHouse/RemoteHouse';
import loadjs from "loadjs";

class App extends React.Component {
  componentDidMount(){
    loadjs('/assets/js/jquery.min.js');
  }
  render() {
    return (
      <Fragment>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/comming-soon" component={CommingSoon}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/solutions" component={Solution}/>
            <Route exact path="/solutions/bizblanca" component={BizBlanca}/>
            <Route exact path="/solutions/pakteki" component={Pakteki}/>
            <Route exact path="/experiences" component={Experience}/>
            <Route exact path="/experience/remote-house" component={RemoteHouse}/>
            <Route exact path="/clients" component={Client}/>
            <Route exact path="/careers" component={Career}/>
            <Route exact path="/careers/message" component={MessagePerson}/>
            <Route exact path="/careers/siraskaMessage" component={SiraskaMessage}/>
            <Route exact path="/paketki/detail-news/:id" component={MessageNews}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/privacy-policy" component={PrivacyPolicy}/>     
            <Route exact path="/clients/waribashi" component={WaribashiClient}/>     
            <Route exact path="/clients/usa" component={UsaClient}/>     
            <Route exact path="/clients/experience-uk-off-shore" component={ExperienceOffShoreClient}/>     
          </Switch>
          </Suspense>
      </Fragment>
    );
  }
}
export default App;