import React from "react";
import { withRouter } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentWillMount() {
      window.addEventListener('popstate', (e) => {
        console.log("popstate trigger");
        this.props.breadCrumbsLink();
      });
      this.unlisten = this.props.history.listen((location, action) => {
        console.log("history trigger");
        this.props.breadCrumbsLink();
      });
      this.props.breadCrumbsLink();
    }
    componentWillUnmount() {
        this.unlisten();
    }
  
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
export default withRouter(App);