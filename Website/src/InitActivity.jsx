import React, { Component } from "react";
import {
  Page,
  Toolbar,
  Button,
  BackButton,
  RouterNavigator,
  RouterUtil,
} from "react-onsenui";
import MainActivity from "./views/MainActivity";

class InitActivity extends Component {
  constructor(props) {
    super(props);

    const routeConfig = RouterUtil.init([
      {
        component: MainActivity,
        props: {
          key: "main",
          pushPage: (...args) => this.pushPage(...args),
        },
      },
    ]);

    this.state = { routeConfig };
  }

  componentDidMount = () => {
    window.addEventListener("load", this.windowLoadPush);
  };

  componentWillUnmount = () => {
    window.removeEventListener("load", this.windowLoadPush);
  };

  windowLoadPush = () => {
    if (typeof history.pushState === "function") {
      history.pushState("jibberish", null, null);
      window.onpopstate = () => {
        history.pushState("newjibberish", null, null);
        this.popPage();
      };
    } else {
      var ignoreHashChange = true;
      window.onhashchange = () => {
        if (!ignoreHashChange) {
          ignoreHashChange = true;
          window.location.hash = Math.random();
        } else {
          ignoreHashChange = false;
        }
      };
    }
  };

  pushPage(page, key, lfData, antwort) {
    const route = {
      component: page,
      props: {
        key: key,
        lfData: lfData,
        antwort: antwort,
        popPage: () => this.popPage(),
        pushPage: (...args) => this.pushPage(...args),
      },
    };

    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.push({
      routeConfig,
      route,
    });

    this.setState({ routeConfig });
  }

  popPage(options = {}) {
    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.pop({
      routeConfig,
      options: {
        ...options,
        animationOptions: {
          duration: 0.2,
          timing: "ease-in",
          animation: "fade-md",
        },
      },
    });

    this.setState({ routeConfig });
  }

  onPostPush() {
    const routeConfig = RouterUtil.postPush(this.state.routeConfig);
    this.setState({ routeConfig });
  }

  onPostPop() {
    const routeConfig = RouterUtil.postPop(this.state.routeConfig);
    this.setState({ routeConfig });
  }

  renderPage(route) {
    const props = route.props || {};
    return <route.component {...props} />;
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <BackButton />
        </div>
        <div className="center">Stateless Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page>
        <RouterNavigator
          swipeable={true}
          swipePop={(options) => this.popPage(options)}
          routeConfig={this.state.routeConfig}
          renderPage={this.renderPage}
          onPostPush={() => this.onPostPush()}
          onPostPop={() => this.onPostPop()}
        />
      </Page>
    );
  }
}

export default InitActivity;
