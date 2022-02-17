import React, { Component } from "react";
import jss from "jss";
import preset from "jss-preset-default";
import {
  Page,
  Toolbar,
  BackButton,
  RouterNavigator,
  RouterUtil,
} from "react-onsenui";
import MainActivity from "./views/MainActivity";
import styles from "./styles/styles";
import addtionalStyles from "./styles/addtional";
import markdownStyles from "./styles/markdown";

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

    this.state = { routeConfig, currentPage: "main" };
  }

  componentDidMount = () => {
    window.addEventListener("load", this.windowLoadPush);

    jss.setup(preset());

    jss.createStyleSheet(styles).attach();
    jss.createStyleSheet(addtionalStyles).attach();
    jss.createStyleSheet(markdownStyles).attach();
  };

  componentWillUnmount = () => {
    window.removeEventListener("load", this.windowLoadPush);
  };

  windowLoadPush = () => {
    if (typeof history.pushState === "function") {
      history.pushState("jibberish", null, null);
      window.onpopstate = () => {
        history.pushState("newjibberish", null, null);
        if (this.state.currentPage === "main") {
          if ((window, navigator.userAgent === "FPL")) {
            window.Android.close();
          } else {
            window.close();
          }
        } else {
          this.popPage();
        }
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

  pushPage(page, key, lfData, antwort, nr) {
    const route = {
      component: page,
      props: {
        key: key,
        lfData: lfData,
        antwort: antwort,
        nr: nr,
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
    this.setState({ currentPage: key });
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
    this.setState({ currentPage: "main" });
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
