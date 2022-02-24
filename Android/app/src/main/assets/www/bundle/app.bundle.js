/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 961:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/jss/dist/jss.esm.js + 5 modules
var jss_esm = __webpack_require__(917);
// EXTERNAL MODULE: ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js + 20 modules
var jss_preset_default_esm = __webpack_require__(121);
// EXTERNAL MODULE: ./node_modules/react-onsenui/dist/react-onsenui.js
var react_onsenui = __webpack_require__(57);
;// CONCATENATED MODULE: ./src/components/Toolbar.jsx



var MyToolbar = function MyToolbar(_ref) {
  var title = _ref.title,
      _ref$onBackButton = _ref.onBackButton,
      onBackButton = _ref$onBackButton === void 0 ? null : _ref$onBackButton,
      modifier = _ref.modifier,
      _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? null : _ref$buttons;
  return /*#__PURE__*/react.createElement(react_onsenui.Toolbar, {
    modifier: modifier
  }, onBackButton ? /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement(react_onsenui.BackButton, {
    onClick: onBackButton
  })) : null, /*#__PURE__*/react.createElement("div", {
    className: "center"
  }, title), buttons);
};

/* harmony default export */ const Toolbar = (MyToolbar);
;// CONCATENATED MODULE: ./src/views/AboutActivity.jsx




var AboutActivty = function AboutActivty(_ref) {
  var pushPage = _ref.pushPage,
      popPage = _ref.popPage;
  return /*#__PURE__*/react.createElement(react_onsenui.Page, {
    renderToolbar: function renderToolbar() {
      return /*#__PURE__*/react.createElement(Toolbar, {
        title: "Über",
        onBackButton: popPage
      });
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react.createElement(react_onsenui.Card, null, /*#__PURE__*/react.createElement("article", {
    className: "markdown-body"
  }, /*#__PURE__*/react.createElement("p", null, "Dieses Projekt f\xE4llt unter die", " ", /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/DerGoogler/FPL/blob/master/LICENSE"
  }, "BSL-1.0"), " ", "Lizenz Text k\xF6nnen frei verwendet werden."), /*#__PURE__*/react.createElement("p", null, "Diese App wurde in meiner Freizeit entwickelt. Ich m\xF6chte mit dieser App das allgemeine \"Lernkateikarten schreiben\" abnehmen, diese App funktioniert komplett offline und kann \xFCberall mit hingenommen werden. Du kannst dir bei der Zugfahrt entspannt dein Stoff reinziehen, den du brauchst :)"), /*#__PURE__*/react.createElement("p", null, "Solltest du einen Fehler finden kannst du dies in den", " ", /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/DerGoogler/FPL/issues"
  }, "Issues"), " ", "mitteilen (Konto erforderlich). Andernfalls kannst du mir das \xFCber Instagram mitteilen, aber Instagram werde ich aber gr\xF6\xDFtenteils nicht antworten."), /*#__PURE__*/react.createElement("p", null, "Viel Spa\xDF mit der App!")))));
};

/* harmony default export */ const AboutActivity = (AboutActivty);
// EXTERNAL MODULE: ./node_modules/markdown-to-jsx/dist/index.modern.js
var index_modern = __webpack_require__(243);
;// CONCATENATED MODULE: ./src/views/AntwortActivity.jsx





var AntwortActivity = function AntwortActivity(_ref) {
  var pushPage = _ref.pushPage,
      popPage = _ref.popPage,
      antwort = _ref.antwort,
      nr = _ref.nr;
  return /*#__PURE__*/react.createElement(react_onsenui.Page, {
    renderToolbar: function renderToolbar() {
      return /*#__PURE__*/react.createElement(Toolbar, {
        title: "Antwort zu #" + nr,
        onBackButton: popPage
      });
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react.createElement(react_onsenui.Card, null, /*#__PURE__*/react.createElement("div", {
    className: "markdown-body"
  }, /*#__PURE__*/react.createElement(index_modern/* default */.Z, null, antwort)))));
};

/* harmony default export */ const views_AntwortActivity = (AntwortActivity);
;// CONCATENATED MODULE: ./src/hooks/useOnScreen.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useOnScreen(ref) {
  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isIntersecting = _useState2[0],
      setIntersecting = _useState2[1];

  var observer = new IntersectionObserver(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        entry = _ref2[0];

    return setIntersecting(entry.isIntersecting);
  });
  (0,react.useEffect)(function () {
    observer.observe(ref.current); // Remove the observer as soon as the component is unmounted

    return function () {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
}
;// CONCATENATED MODULE: ./src/views/LfActivity.jsx







var LfActivity = function LfActivity(_ref) {
  var pushPage = _ref.pushPage,
      popPage = _ref.popPage,
      lfData = _ref.lfData;
  var ref = (0,react.useRef)();
  var titleHeaderRef = (0,react.useRef)();
  var isVisible = useOnScreen(ref);
  var isTitleHeaderVisible = useOnScreen(titleHeaderRef);
  var fragen = lfData.fragen.map(function (item) {
    return /*#__PURE__*/react.createElement(react_onsenui.Card, {
      key: item.nr
    }, /*#__PURE__*/react.createElement("div", {
      className: "title"
    }, "Frage #", item.nr), /*#__PURE__*/react.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        display: "block"
      }
    }, /*#__PURE__*/react.createElement(index_modern/* default */.Z, null, item.frage)), " ", /*#__PURE__*/react.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react.createElement(react_onsenui.Button, {
      modifier: "quiet",
      onClick: function onClick() {
        pushPage(views_AntwortActivity, lfData.config.key, name, item.antwort, item.nr);
      }
    }, "Antwort anzeigen"))));
  });
  return /*#__PURE__*/react.createElement(react_onsenui.Page, {
    key: lfData.config.key,
    renderToolbar: function renderToolbar() {
      return /*#__PURE__*/react.createElement(Toolbar, {
        modifier: isVisible && "noshadow",
        title: !isTitleHeaderVisible && lfData.config.title,
        onBackButton: popPage
      });
    }
  }, /*#__PURE__*/react.createElement("div", {
    ref: ref,
    style: {
      padding: "50px",
      paddingTop: "6px",
      textAlign: "center",
      backgroundColor: "rgb(245, 86, 19)",
      color: "white",
      fontSize: "30px",
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 5px"
    }
  }, /*#__PURE__*/react.createElement("span", {
    ref: titleHeaderRef
  }, lfData.config.title)), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, fragen));
};

/* harmony default export */ const views_LfActivity = (LfActivity);
// EXTERNAL MODULE: ./src/data/lf1.yaml
var lf1 = __webpack_require__(644);
var lf1_default = /*#__PURE__*/__webpack_require__.n(lf1);
// EXTERNAL MODULE: ./src/data/lf2.yaml
var lf2 = __webpack_require__(997);
var lf2_default = /*#__PURE__*/__webpack_require__.n(lf2);
// EXTERNAL MODULE: ./src/data/lf3.yaml
var lf3 = __webpack_require__(332);
var lf3_default = /*#__PURE__*/__webpack_require__.n(lf3);
// EXTERNAL MODULE: ./src/data/lf4.yaml
var lf4 = __webpack_require__(922);
var lf4_default = /*#__PURE__*/__webpack_require__.n(lf4);
// EXTERNAL MODULE: ./src/data/lf5.yaml
var lf5 = __webpack_require__(589);
var lf5_default = /*#__PURE__*/__webpack_require__.n(lf5);
// EXTERNAL MODULE: ./src/data/lf6.yaml
var lf6 = __webpack_require__(335);
var lf6_default = /*#__PURE__*/__webpack_require__.n(lf6);
// EXTERNAL MODULE: ./src/data/lf7.yaml
var lf7 = __webpack_require__(830);
var lf7_default = /*#__PURE__*/__webpack_require__.n(lf7);
// EXTERNAL MODULE: ./src/data/lf8.yaml
var lf8 = __webpack_require__(854);
var lf8_default = /*#__PURE__*/__webpack_require__.n(lf8);
;// CONCATENATED MODULE: ./src/data/lists.js








var lists = [{
  fach: (lf1_default()),
  title: "Lernfeld 1",
  content: "Güter annehmen und kontrollieren",
  options: {
    display: true
  }
}, {
  fach: (lf2_default()),
  title: "Lernfeld 2",
  content: "Güter lagern",
  options: {
    display: true
  }
}, {
  fach: (lf3_default()),
  title: "Lernfeld 3",
  content: "Güter bearbeiten",
  options: {
    display: true
  }
}, {
  fach: (lf4_default()),
  title: "Lernfeld 4",
  content: "Güter im Betrieb transportieren",
  options: {
    display: true
  }
}, {
  fach: (lf5_default()),
  title: "Lernfeld 5",
  content: "Güter kommissionieren",
  options: {
    display: false
  }
}, {
  fach: (lf6_default()),
  title: "Lernfeld 6",
  content: "Güter verpacken",
  options: {
    display: false
  }
}, {
  fach: (lf7_default()),
  title: "Lernfeld 7",
  content: "Touren planen",
  options: {
    display: false
  }
}, {
  fach: (lf8_default()),
  title: "Lernfeld 8",
  content: "Güter verladen",
  options: {
    display: false
  }
}];
/* harmony default export */ const data_lists = (lists);
;// CONCATENATED MODULE: ./src/views/MainActivity.jsx








var MainActivity = function MainActivity(_ref) {
  var pushPage = _ref.pushPage;
  var ref = (0,react.useRef)();
  var titleHeaderRef = (0,react.useRef)();
  var isVisible = useOnScreen(ref);
  var isTitleHeaderVisible = useOnScreen(titleHeaderRef);
  var cards = data_lists.map(function (item) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, function () {
      if (item.options.display) {
        return /*#__PURE__*/react.createElement(react_onsenui.Card, {
          onClick: function onClick() {
            return pushPage(views_LfActivity, item.title, item.fach);
          },
          style: {
            boxShadow: "none",
            border: "2px solid #f55613"
          }
        }, /*#__PURE__*/react.createElement("div", {
          className: "title",
          style: {
            textAlign: "center"
          }
        }, item.title), /*#__PURE__*/react.createElement("div", {
          className: "content",
          style: {
            textAlign: "center"
          }
        }, item.content));
      } else {
        return;
      }
    }());
  });
  return /*#__PURE__*/react.createElement(react_onsenui.Page, {
    renderToolbar: function renderToolbar() {
      return /*#__PURE__*/react.createElement(Toolbar, {
        modifier: isVisible && "noshadow",
        title: !isTitleHeaderVisible && "FPL",
        buttons: /*#__PURE__*/react.createElement("div", {
          className: "right"
        }, /*#__PURE__*/react.createElement(react_onsenui.ToolbarButton, {
          onClick: function onClick() {
            pushPage(AboutActivity, "about", "", "");
          }
        }, "\uD83D\uDDE8"))
      });
    }
  }, /*#__PURE__*/react.createElement("div", {
    ref: ref,
    style: {
      padding: "50px",
      paddingTop: "6px",
      textAlign: "center",
      backgroundColor: "rgb(245, 86, 19)",
      color: "white",
      fontSize: "30px",
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 5px"
    }
  }, /*#__PURE__*/react.createElement("span", {
    ref: titleHeaderRef
  }, "Fachpraktiker Lager")), /*#__PURE__*/react.createElement(react_onsenui.Card, null, cards));
};

/* harmony default export */ const views_MainActivity = (MainActivity);
;// CONCATENATED MODULE: ./src/styles/styles.js
var styles = {
  "@global": {
    ":root": {
      backgroundColor: "#efeff4",
      textColor: "#1f1f21",
      subTextColor: "#999",
      highlightColor: "#f55613",
      secondHighlightColor: "rgba(232, 135, 94, 1)",
      borderColor: "#ccc",
      buttonBackgroundColor: "var(--highlight-color)",
      buttonCtaBackgroundColor: "var(--second-highlight-color)",
      toolbarBackgroundColor: "#fafafa",
      toolbarButtonColor: "var(--highlight-color)",
      toolbarTextColor: "#1f1f21",
      toolbarBorderColor: "#b2b2b2",
      buttonBarColor: "var(--highlight-color)",
      buttonBarActiveTextColor: "#fff",
      buttonBarActiveBackgroundColor: "color-mod(\r\n    var(--button-bar-color) tint(70%)\r\n  )",
      buttonLightColor: "black",
      segmentColor: "var(--highlight-color)",
      segmentActiveTextColor: "#fff",
      segmentActiveBackgroundColor: "color-mod(var(--segment-color) tint(70%))",
      listBackgroundColor: "#fff",
      listHeaderBackgroundColor: "#eee",
      listTapActiveBackgroundColor: "#d9d9d9",
      listItemChevronColor: "#c7c7cc",
      progressBarColor: "var(--highlight-color)",
      progressBarSecondaryColor: "#65adff",
      progressBarBackgroundColor: "transparent",
      progressCirclePrimaryColor: "var(--highlight-color)",
      progressCircleSecondaryColor: "#65adff",
      progressCircleBackgroundColor: "transparent",
      tabbarBackgroundColor: "#fafafa",
      tabbarTextColor: "#999",
      tabbarHighlightTextColor: "var(--highlight-color)",
      tabbarBorderColor: "#ccc",
      switchHighlightColor: "#44db5e",
      switchBorderColor: "#e5e5e5",
      switchBackgroundColor: "white",
      rangeTrackBackgroundColor: "#a4aab3",
      rangeTrackBackgroundColorActive: "var(--highlight-color)",
      rangeThumbBackgroundColor: "#fff",
      modalBackgroundColor: "rgba(0, 0, 0, 0.7)",
      modalTextColor: "#fff",
      alertDialogBackgroundColor: "#f4f4f4",
      alertDialogTextColor: "#1f1f21",
      alertDialogButtonColor: "var(--highlight-color)",
      alertDialogSeparatorColor: "#ddd",
      dialogBackgroundColor: "#f4f4f4",
      dialogTextColor: "var(--text-color)",
      popoverBackgroundColor: "white",
      popoverTextColor: "#1f1f21",
      actionSheetTitleColor: "#8f8e94",
      actionSheetButtonSeparatorColor: "rgba(0, 0, 0, 0.1)",
      actionSheetButtonColor: "var(--highlight-color)",
      actionSheetButtonDestructiveColor: "#fe3824",
      actionSheetButtonBackgroundColor: "rgba(255, 255, 255, 0.9)",
      actionSheetButtonActiveBackgroundColor: "#e9e9e9",
      actionSheetCancelButtonBackgroundColor: "#fff",
      notificationBackgroundColor: "#fe3824",
      notificationColor: "white",
      searchInputBackgroundColor: "rgba(3, 3, 3, 0.09)",
      fabTextColor: "#ffffff",
      fabBackgroundColor: "var(--highlight-color)",
      fabActiveBackgroundColor: "color-mod(var(--fab-background-color) a(70%))",
      cardBackgroundColor: "white",
      cardTextColor: "#030303",
      toastBackgroundColor: "rgba(0, 0, 0, 0.8)",
      toastTextColor: "white",
      toastButtonTextColor: "white",
      selectInputColor: "var(--text-color)",
      selectInputBorderColor: "var(--border-color)",
      materialBackgroundColor: "#eceff1",
      materialTextColor: "var(--text-color)",
      materialNotificationBackgroundColor: "rgba(255, 255, 255, 1)",
      materialNotificationColor: "#f55613",
      materialSwitchActiveThumbColor: "#f55613",
      materialSwitchActiveBackgroundColor: "#e8875e",
      materialSwitchInactiveThumbColor: "#f1f1f1",
      materialSwitchInactiveBackgroundColor: "#b0afaf",
      materialRangeTrackColor: "#bdbdbd",
      materialRangeThumbColor: "#f55613",
      materialRangeDisabledThumbColor: "#b0b0b0",
      materialRangeDisabledThumbBorderColor: "#eeeeee",
      materialRangeZeroThumbColor: "#f2f2f2",
      materialToolbarBackgroundColor: "#f55613",
      materialToolbarTextColor: "rgba(255, 255, 255, 1)",
      materialToolbarButtonColor: "rgba(255, 255, 255, 1)",
      materialSegmentBackgroundColor: "#fafafa",
      materialSegmentActiveBackgroundColor: "#c8c8c8",
      materialSegmentTextColor: "color-mod(black a(38%))",
      materialSegmentActiveTextColor: "#353535",
      materialButtonBackgroundColor: "#f55613",
      materialButtonTextColor: "#ffffff",
      materialButtonDisabledBackgroundColor: "color-mod(#4f4f4f a(26%))",
      materialButtonDisabledColor: "color-mod(black a(26%))",
      materialFlatButtonActiveBackgroundColor: "color-mod(#999 a(20%))",
      materialListBackgroundColor: "#fff",
      materialListItemSeparatorColor: "#eee",
      materialListHeaderTextColor: "#757575",
      materialCheckboxActiveColor: "#f55613",
      materialCheckboxInactiveColor: "#717171",
      materialCheckboxCheckmarkColor: "#ffffff",
      materialRadioButtonActiveColor: "#f55613",
      materialRadioButtonInactiveColor: "#717171",
      materialRadioButtonDisabledColor: "#afafaf",
      materialTextInputTextColor: "#212121",
      materialTextInputActiveColor: "#f55613",
      materialTextInputInactiveColor: "#afafaf",
      materialSearchBackgroundColor: "#fafafa",
      materialDialogBackgroundColor: "#ffffff",
      materialDialogTextColor: "var(--material-text-color)",
      materialAlertDialogBackgroundColor: "#ffffff",
      materialAlertDialogTitleColor: "#31313a",
      materialAlertDialogContentColor: "rgba(49, 49, 58, 0.85)",
      materialAlertDialogButtonColor: "#37474f",
      materialProgressBarPrimaryColor: "#f55613",
      materialProgressBarSecondaryColor: "#e8875e",
      materialProgressBarBackgroundColor: "transparent",
      materialProgressCirclePrimaryColor: "var(\r\n    --material-progress-bar-primary-color\r\n  )",
      materialProgressCircleSecondaryColor: "var(\r\n    --material-progress-bar-secondary-color\r\n  )",
      materialProgressCircleBackgroundColor: "transparent",
      materialTabbarBackgroundColor: "#f55613",
      materialTabbarTextColor: "rgba(255, 255, 255, 1)",
      materialTabbarHighlightTextColor: "rgba(255, 255, 255, 1)",
      materialTabbarHighlightColor: "rgba(49, 49, 58, 0.1)",
      materialFabTextColor: "rgba(255, 255, 255, 1)",
      materialFabBackgroundColor: "#f55613",
      materialFabActiveBackgroundColor: "rgba(255, 255, 255, 0.75)",
      materialCardBackgroundColor: "white",
      materialCardTextColor: "rgba(0, 0, 0, 0.54)",
      materialToastBackgroundColor: "rgba(0, 0, 0, 0.8)",
      materialToastTextColor: "white",
      materialToastButtonTextColor: "#f55613",
      materialSelectInputColor: "var(--material-text-color)",
      materialSelectInputActiveColor: "rgba(0, 0, 0, 0.15)",
      materialSelectInputInactiveColor: "rgba(0, 0, 0, 0.81)",
      materialSelectBorderColor: "color-mod(black a(12%))",
      materialPopoverBackgroundColor: "#fafafa",
      materialPopoverTextColor: "var(--material-text-color)",
      materialActionSheetTextColor: "#686868",
      tapHighlightColor: "transparent"
    },
    html: {
      height: "100%",
      width: "100%"
    },
    body: {
      position: "absolute",
      overflow: "hidden",
      top: "0",
      right: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      margin: "0",
      webkitTextSizeAdjust: "100%",
      touchAction: "manipulation"
    },
    "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      webkitTapHighlightColor: "transparent",
      webkitTouchCallout: "none"
    },
    "input, textarea, select": {
      webkitUserSelect: "auto",
      msUserSelect: "auto",
      userSelect: "auto",
      mozUserSelect: "text",
      webkitTouchCallout: "none"
    },
    "a, button, input, textarea, select": {
      touchAction: "manipulation"
    },
    "input:active, input:focus, textarea:active, textarea:focus, select:active, select:focus": {
      outline: "none"
    },
    h1: {
      fontSize: "36px"
    },
    h2: {
      fontSize: "30px"
    },
    h3: {
      fontSize: "24px"
    },
    "h4, h5, h6": {
      fontSize: "18px"
    },
    ".page": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      backgroundColor: "#efeff4",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      overflowX: "visible",
      overflowY: "hidden",
      color: "#1f1f21",
      msOverflowStyle: "none",
      fallbacks: [{
        webkitFontSmoothing: "antialiased"
      }]
    },
    ".page::-webkit-scrollbar": {
      display: "none"
    },
    ".page__content": {
      backgroundColor: "#efeff4",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      boxSizing: "border-box",
      fallbacks: [{
        bottom: "0"
      }, {
        top: "0"
      }],
      paddingTop: "0"
    },
    ".page__background": {
      backgroundColor: "#efeff4",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      boxSizing: "border-box"
    },
    ".page--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      backgroundColor: "#eceff1"
    },
    ".page--material__content": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      fallbacks: [{
        fontWeight: "400"
      }]
    },
    ".page__content h1, .page__content h2, .page__content h3, .page__content h4, .page__content h5": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      fallbacks: [{
        fontWeight: "400"
      }],
      margin: "0.6em 0",
      padding: "0"
    },
    ".page__content h1": {
      fontSize: "28px"
    },
    ".page__content h2": {
      fontSize: "24px"
    },
    ".page__content h3": {
      fontSize: "20px"
    },
    ".page--material__content h1, .page--material__content h2, .page--material__content h3, .page--material__content h4, .page--material__content h5": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      fallbacks: [{
        fontWeight: "400"
      }],
      margin: "0.6em 0",
      padding: "0"
    },
    ".page--material__content h1": {
      fontSize: "28px"
    },
    ".page--material__content h2": {
      fontSize: "24px"
    },
    ".page--material__content h3": {
      fontSize: "20px"
    },
    ".page--material__background": {
      backgroundColor: "#eceff1"
    },
    ".switch": {
      display: "inline-block",
      verticalAlign: "top",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      position: "relative",
      minWidth: "51px",
      fontSize: "17px",
      padding: "0 20px",
      border: "none",
      overflow: "visible",
      width: "51px",
      height: "32px",
      zIndex: "0",
      textAlign: "left"
    },
    ".switch__input": {
      position: "absolute",
      right: "0",
      top: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      border: "0",
      backgroundColor: "transparent",
      zIndex: "0",
      verticalAlign: "top",
      outline: "none",
      width: "100%",
      height: "100%",
      margin: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      fallbacks: [{
        zIndex: "1"
      }]
    },
    ".switch__toggle": {
      backgroundColor: "white",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      borderRadius: "30px",
      transitionProperty: "all",
      transitionDuration: "0.35s",
      transitionTimingFunction: "ease-out",
      boxShadow: "inset 0 0 0 2px #e5e5e5"
    },
    ".switch__handle": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      position: "absolute",
      content: '""',
      borderRadius: "28px",
      height: "28px",
      width: "28px",
      backgroundColor: "white",
      left: "1px",
      top: "2px",
      transitionProperty: "all",
      transitionDuration: "0.35s",
      transitionTimingFunction: "cubic-bezier(0.59, 0.01, 0.5, 0.99)",
      boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)"
    },
    ".switch--active__handle": {
      transition: "none"
    },
    ":checked + .switch__toggle": {
      boxShadow: "inset 0 0 0 2px #44db5e",
      backgroundColor: "#44db5e"
    },
    ":checked + .switch__toggle > .switch__handle": {
      left: "21px",
      boxShadow: "0 3px 2px rgba(0, 0, 0, 0.25)"
    },
    ":disabled + .switch__toggle": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".switch__touch": {
      position: "absolute",
      top: "-5px",
      bottom: "-5px",
      left: "-10px",
      right: "-10px"
    },
    ".switch--material": {
      width: "36px",
      height: "24px",
      padding: "0 10px",
      minWidth: "36px"
    },
    ".switch--material__toggle": {
      backgroundColor: "#b0afaf",
      marginTop: "5px",
      height: "14px",
      boxShadow: "none"
    },
    ".switch--material__input": {
      position: "absolute",
      right: "0",
      top: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      border: "0",
      backgroundColor: "transparent",
      zIndex: "0",
      verticalAlign: "top",
      outline: "none",
      width: "100%",
      height: "100%",
      margin: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      fallbacks: [{
        zIndex: "1"
      }]
    },
    ".switch--material__handle": {
      backgroundColor: "#f1f1f1",
      left: "0",
      marginTop: "-5px",
      width: "20px",
      height: "20px",
      boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)"
    },
    ":checked + .switch--material__toggle": {
      backgroundColor: "#e8875e",
      boxShadow: "none"
    },
    ":checked + .switch--material__toggle > .switch--material__handle": {
      left: "16px",
      backgroundColor: "#f55613",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)"
    },
    ":disabled + .switch--material__toggle": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".switch--material__handle:before": {
      background: "transparent",
      content: '""',
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      zIndex: "0",
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.12)",
      transition: "box-shadow 0.1s linear"
    },
    ".switch--material__toggle > .switch--active__handle:before": {
      boxShadow: "0 0 0 14px rgba(0, 0, 0, 0.12)"
    },
    ":checked + .switch--material__toggle > .switch--active__handle:before": {
      boxShadow: "0 0 0 14px color-mod(#f55613 alpha(20%))"
    },
    ".switch--material__touch": {
      position: "absolute",
      top: "-10px",
      bottom: "-10px",
      left: "-15px",
      right: "-15px"
    },
    ".range": {
      display: "inline-block",
      position: "relative",
      width: "100px",
      height: "30px",
      margin: "0",
      padding: "0",
      backgroundImage: "linear-gradient(#a4aab3, #a4aab3)",
      backgroundPosition: "left center",
      backgroundSize: "100% 2px",
      backgroundRepeat: "no-repeat",
      backgroundColor: "transparent"
    },
    ".range__input": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      verticalAlign: "top",
      outline: "none",
      lineHeight: "1",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      backgroundImage: "linear-gradient(#f55613, #f55613)",
      backgroundPosition: "left center",
      backgroundSize: "0% 2px",
      backgroundRepeat: "no-repeat",
      height: "30px",
      position: "relative",
      zIndex: "1",
      width: "100%"
    },
    ".range__input::-moz-range-track": {
      position: "relative",
      border: "none",
      background: "none",
      boxShadow: "none",
      top: "0",
      margin: "0",
      padding: "0"
    },
    ".range__input::-ms-track": {
      position: "relative",
      border: "none",
      backgroundColor: "#a4aab3",
      height: "0",
      borderRadius: "50%"
    },
    ".range__input::-webkit-slider-thumb": {
      cursor: "pointer",
      position: "relative",
      height: "28px",
      width: "28px",
      backgroundColor: "#fff",
      border: "none",
      boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
      borderRadius: "50%",
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      webkitAppearance: "none",
      appearance: "none",
      top: "0",
      zIndex: "1"
    },
    ".range__input::-moz-range-thumb": {
      cursor: "pointer",
      position: "relative",
      height: "28px",
      width: "28px",
      backgroundColor: "#fff",
      border: "none",
      boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
      borderRadius: "50%",
      margin: "0",
      padding: "0"
    },
    ".range__input::-ms-thumb": {
      cursor: "pointer",
      position: "relative",
      height: "28px",
      width: "28px",
      backgroundColor: "#fff",
      border: "none",
      boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
      borderRadius: "50%",
      margin: "0",
      padding: "0",
      top: "0"
    },
    ".range__input::-ms-fill-lower": {
      height: "2px",
      backgroundColor: "#f55613"
    },
    ".range__input::-ms-tooltip": {
      display: "none"
    },
    ".range__input:disabled": {
      opacity: "1",
      pointerEvents: "none"
    },
    ".range__focus-ring": {
      pointerEvents: "none",
      top: "0",
      left: "0",
      display: "none",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "none",
      border: "none",
      verticalAlign: "top",
      outline: "none",
      lineHeight: "1",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      fallbacks: [{
        background: "transparent"
      }],
      height: "30px",
      position: "absolute",
      zIndex: "0",
      width: "100%"
    },
    ".range--disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none",
      fallbacks: [{
        pointerEvents: "none"
      }]
    },
    ".range--material": {
      position: "relative",
      backgroundImage: "linear-gradient(#bdbdbd, #bdbdbd)"
    },
    ".range--material__input": {
      backgroundImage: "linear-gradient(#f55613, #f55613)",
      backgroundPosition: "center left",
      backgroundSize: "0% 2px"
    },
    ".range--material__focus-ring": {
      display: "block"
    },
    ".range--material__focus-ring::-webkit-slider-thumb": {
      webkitAppearance: "none",
      appearance: "none",
      width: "14px",
      height: "14px",
      border: "none",
      boxShadow: "0 0 0 9px #f55613",
      backgroundColor: "#f55613",
      borderRadius: "50%",
      opacity: "0",
      transition: "opacity 0.25s ease-out, transform 0.25s ease-out,\r\n    -webkit-transform 0.25s ease-out",
      fallbacks: [{
        transition: "opacity 0.25s ease-out, transform 0.25s ease-out"
      }, {
        transition: "opacity 0.25s ease-out, -webkit-transform 0.25s ease-out"
      }]
    },
    ".range--material__input.range__input--active\r\n  + .range--material__focus-ring::-webkit-slider-thumb": {
      opacity: "0.2",
      webkitTransform: "scale(1.5, 1.5, 1.5)",
      transform: "scale(1.5, 1.5, 1.5)"
    },
    ".range--material__input::-webkit-slider-thumb": {
      position: "relative",
      boxSizing: "border-box",
      border: "none",
      backgroundColor: "transparent",
      width: "14px",
      height: "32px",
      borderRadius: "0",
      boxShadow: "none",
      backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #f55613 0%,\r\n    #f55613 6.6px,\r\n    transparent 7px\r\n  )",
      transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
      fallbacks: [{
        transition: "transform 0.1s linear"
      }, {
        transition: "-webkit-transform 0.1s linear"
      }],
      overflow: "visible"
    },
    ".range--material__input[_zero]::-webkit-slider-thumb": {
      backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #f2f2f2 0%,\r\n    #f2f2f2 4px,\r\n    #bdbdbd 4px,\r\n    #bdbdbd 6.4px,\r\n    transparent 7px\r\n  )"
    },
    ".range--material__input[_zero]\r\n  + .range--material__focus-ring::-webkit-slider-thumb": {
      boxShadow: "0 0 0 9px #bdbdbd"
    },
    ".range--material__input::-moz-range-track": {
      background: "none"
    },
    ".range--material__input::-moz-range-thumb, .range--material__input:focus::-moz-range-thumb": {
      boxSizing: "border-box",
      border: "none",
      width: "14px",
      height: "32px",
      borderRadius: "0",
      backgroundColor: "transparent",
      backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #f55613 0%,\r\n    #f55613 6.6px,\r\n    transparent 7px\r\n  )",
      boxShadow: "none"
    },
    ".range--material__input:active::-webkit-slider-thumb, .range--material__input.range__input--active::-webkit-slider-thumb": {
      webkitTransform: "scale(1.5)",
      transform: "scale(1.5)",
      transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
      fallbacks: [{
        transition: "transform 0.1s linear"
      }, {
        transition: "-webkit-transform 0.1s linear"
      }]
    },
    ".range--disabled.range--material": {
      opacity: "1"
    },
    ".range--disabled > .range--material__input": {
      backgroundImage: "none"
    },
    ".range--material__input:disabled::-webkit-slider-thumb": {
      backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
      transition: "none"
    },
    ".range--material__input:disabled::-moz-range-thumb": {
      backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
      transition: "none"
    },
    ".notification": {
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      font: "inherit",
      border: "none",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0 4px",
      margin: "0",
      fallbacks: [{
        fontWeight: "400"
      }, {
        lineHeight: "normal"
      }, {
        color: "inherit"
      }, {
        padding: "0"
      }, {
        margin: "0"
      }, {
        border: "none"
      }, {
        font: "inherit"
      }],
      color: "white",
      background: "transparent",
      lineHeight: "19px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textDecoration: "none",
      width: "auto",
      height: "19px",
      borderRadius: "19px",
      backgroundColor: "#fe3824",
      textAlign: "center",
      fontSize: "16px",
      minWidth: "19px"
    },
    ".notification:empty": {
      display: "none"
    },
    ".notification--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      backgroundColor: "rgba(255, 255, 255, 1)",
      fallbacks: [{
        fontWeight: "400"
      }, {
        backgroundColor: "#ffffff"
      }],
      fontSize: "16px",
      color: "#f55613"
    },
    ".toolbar": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      whiteSpace: "nowrap",
      overflow: "hidden",
      wordSpacing: "0",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "#fafafa",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      zIndex: "2",
      display: "flex",
      fallbacks: [{
        boxSizing: "border-box"
      }, {
        whiteSpace: "nowrap"
      }, {
        fontWeight: "400"
      }, {
        color: "inherit"
      }, {
        background: "transparent"
      }, {
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitBoxAlign: "stretch",
      webkitAlignItems: "stretch",
      alignItems: "stretch",
      webkitFlexWrap: "nowrap",
      flexWrap: "nowrap",
      height: "44px",
      paddingLeft: "0",
      paddingRight: "0",
      boxShadow: "none",
      width: "100%",
      borderBottom: "none",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 100%)",
      top: "0",
      paddingTop: "0"
    },
    "@media (-webkit-min-device-pixel-ratio: 2),\r\n  (min-resolution: 192dpi),\r\n  (min-resolution: 2dppx)": {
      ".toolbar": {
        backgroundImage: "linear-gradient(\r\n      0deg,\r\n      #b2b2b2,\r\n      #b2b2b2 50%,\r\n      transparent 50%\r\n    )"
      },
      ".bottom-bar": {
        backgroundImage: "linear-gradient(\r\n      180deg,\r\n      #b2b2b2,\r\n      #b2b2b2 50%,\r\n      transparent 50%\r\n    )"
      },
      ".tabbar": {
        borderTop: "none",
        backgroundSize: "100% 1px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".tabbar__button": {
        borderTop: "none"
      },
      ".tabbar--top": {
        borderBottom: "none",
        backgroundSize: "100% 1px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".list": {
        backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%),\r\n      linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".list-item--expandable": {
        backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".list-item__center": {
        backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".list-item__right": {
        backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".list-header": {
        backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".list-item--material__left:empty, .list-item--material__center": {
        backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)"
      },
      ".list-item--material__right": {
        backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)"
      },
      ".list-item--material.list-item--expandable": {
        backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)"
      },
      ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
        backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)"
      },
      ".list-header--material:not(:first-of-type)": {
        backgroundImage: "linear-gradient(180deg, #eee, #eee 50%, transparent 50%)"
      },
      ".list-item--longdivider": {
        backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)"
      },
      ".alert-dialog-button": {
        borderTop: "none",
        backgroundSize: "100% 1px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundImage: "linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%)"
      },
      ".alert-dialog-button--rowfooter": {
        borderTop: "none",
        borderLeft: "none",
        backgroundSize: "100% 1px, 1px 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top, left",
        backgroundImage: "linear-gradient(\r\n        0deg,\r\n        transparent,\r\n        transparent 50%,\r\n        #ddd 50%\r\n      ),\r\n      linear-gradient(90deg, transparent, transparent 50%, #ddd 50%)"
      },
      ".alert-dialog-button--rowfooter:first-child": {
        borderTop: "none",
        backgroundSize: "100% 1px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top, left",
        backgroundImage: "linear-gradient(\r\n      0deg,\r\n      transparent,\r\n      transparent 50%,\r\n      #ddd 50%\r\n    )"
      },
      ".alert-dialog-button--material": {
        background: "none"
      },
      ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
        background: "none"
      },
      ".alert-dialog-button--primal--material": {
        background: "none"
      },
      ".action-sheet-button": {
        backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )"
      },
      ".action-sheet-title": {
        backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )"
      }
    },
    ".toolbar__bg": {
      background: "#fafafa"
    },
    ".toolbar__item": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      height: "44px",
      overflow: "visible",
      display: "block",
      verticalAlign: "middle"
    },
    ".toolbar__left": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "44px",
      maxWidth: "50%",
      width: "27%",
      textAlign: "left",
      fallbacks: [{
        lineHeight: "normal"
      }]
    },
    ".toolbar__right": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "44px",
      maxWidth: "50%",
      width: "27%",
      textAlign: "right",
      fallbacks: [{
        lineHeight: "normal"
      }]
    },
    ".toolbar__center": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      lineHeight: "44px",
      width: "46%",
      textAlign: "center",
      fallbacks: [{
        color: "inherit"
      }, {
        lineHeight: "normal"
      }],
      fontSize: "17px",
      fontWeight: "500"
    },
    ".toolbar__title": {
      lineHeight: "44px",
      fontSize: "17px",
      fontWeight: "500",
      color: "#1f1f21",
      margin: "0",
      padding: "0",
      overflow: "visible"
    },
    ".toolbar__center:first-child:last-child": {
      width: "100%"
    },
    ".bottom-bar": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      whiteSpace: "nowrap",
      overflow: "hidden",
      wordSpacing: "0",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "#fafafa",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      zIndex: "2",
      display: "block",
      height: "44px",
      paddingLeft: "0",
      paddingRight: "0",
      fallbacks: [{
        boxSizing: "border-box"
      }, {
        bottom: "0"
      }, {
        borderTop: "1px solid #b2b2b2"
      }, {
        fontWeight: "400"
      }, {
        color: "inherit"
      }, {
        background: "transparent"
      }],
      boxShadow: "none",
      borderBottom: "none",
      borderTop: "none",
      position: "absolute",
      bottom: "0",
      right: "0",
      left: "0",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 100%)",
      paddingBottom: "0"
    },
    ".bottom-bar__line-height": {
      lineHeight: "44px",
      paddingBottom: "0",
      paddingTop: "0"
    },
    ".bottom-bar--aligned": {
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitFlexWrap: "nowrap",
      flexWrap: "nowrap",
      lineHeight: "44px"
    },
    ".bottom-bar--transparent": {
      backgroundColor: "transparent",
      backgroundImage: "none",
      border: "none"
    },
    ".toolbar--material": {
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitFlexWrap: "nowrap",
      flexWrap: "nowrap",
      webkitBoxPack: "justify",
      webkitJustifyContent: "space-between",
      justifyContent: "space-between",
      height: "56px",
      borderBottom: "0",
      boxShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
      padding: "0",
      backgroundColor: "#f55613",
      backgroundSize: "0"
    },
    ".toolbar--noshadow": {
      boxShadow: "none",
      backgroundImage: "none",
      borderBottom: "none"
    },
    ".toolbar--material__left, .toolbar--material__right": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      fontSize: "20px",
      fallbacks: [{
        color: "#ffffff"
      }, {
        fontWeight: "400"
      }],
      color: "rgba(255, 255, 255, 1)",
      height: "56px",
      minWidth: "72px",
      width: "auto",
      lineHeight: "56px"
    },
    ".toolbar--material__center": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      fontSize: "20px",
      fallbacks: [{
        color: "#ffffff"
      }, {
        fontWeight: "400"
      }],
      color: "rgba(255, 255, 255, 1)",
      height: "56px",
      width: "auto",
      webkitBoxFlex: "1",
      webkitFlexGrow: "1",
      flexGrow: "1",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "left",
      lineHeight: "56px"
    },
    ".toolbar--material__center:first-child": {
      marginLeft: "16px"
    },
    ".toolbar--material__center:last-child": {
      marginRight: "16px"
    },
    ".toolbar--material__left:empty, .toolbar--material__right:empty": {
      minWidth: "16px"
    },
    ".toolbar--transparent": {
      backgroundColor: "transparent",
      boxShadow: "none",
      backgroundImage: "none",
      borderBottom: "none"
    },
    ".button": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "4px 10px",
      margin: "0",
      font: "inherit",
      color: "white",
      background: "transparent",
      border: "0 solid currentColor",
      lineHeight: "32px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      textDecoration: "none",
      fallbacks: [{
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        padding: "0"
      }],
      fontSize: "17px",
      letterSpacing: "0",
      verticalAlign: "middle",
      backgroundColor: "#f55613",
      borderRadius: "3px",
      transition: "none"
    },
    ".button::-moz-focus-inner": {
      outline: "0"
    },
    ".button:hover": {
      transition: "none"
    },
    ".button:active": {
      backgroundColor: "#f55613",
      transition: "none",
      opacity: "0.2"
    },
    ".button:focus": {
      outline: "0"
    },
    ".button:disabled, .button[disabled]": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".button--outline": {
      backgroundColor: "transparent",
      border: "1px solid #f55613",
      color: "#f55613"
    },
    ".button--outline:active": {
      backgroundColor: "color-mod(#f55613 tint(70%))",
      border: "1px solid #f55613",
      color: "#f55613",
      opacity: "1"
    },
    ".button--outline:hover": {
      border: "1px solid #f55613",
      transition: "0"
    },
    ".button--light": {
      backgroundColor: "transparent",
      color: "color-mod(black a(40%))",
      border: "1px solid color-mod(black a(20%))"
    },
    ".button--light:active": {
      backgroundColor: "color-mod(black a(5%))",
      color: "color-mod(black a(40%))",
      border: "1px solid color-mod(black a(20%))",
      opacity: "1"
    },
    ".button--quiet": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "4px 10px",
      margin: "0",
      font: "inherit",
      color: "#f55613",
      background: "transparent",
      border: "none",
      lineHeight: "32px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      textDecoration: "none",
      fallbacks: [{
        border: "1px solid transparent"
      }, {
        color: "white"
      }, {
        background: "transparent"
      }, {
        border: "0 solid currentColor"
      }, {
        background: "transparent"
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        padding: "0"
      }],
      fontSize: "17px",
      letterSpacing: "0",
      verticalAlign: "middle",
      backgroundColor: "#f55613",
      borderRadius: "3px",
      transition: "none",
      boxShadow: "none"
    },
    ".button--quiet:disabled, .button--quiet[disabled]": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none",
      border: "none"
    },
    ".button--quiet:hover": {
      transition: "none"
    },
    ".button--quiet:focus": {
      outline: "0"
    },
    ".button--quiet:active": {
      backgroundColor: "transparent",
      border: "none",
      transition: "none",
      opacity: "0.2",
      color: "#f55613"
    },
    ".button--cta": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "4px 10px",
      margin: "0",
      font: "inherit",
      color: "white",
      background: "transparent",
      border: "none",
      lineHeight: "32px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      textDecoration: "none",
      fallbacks: [{
        color: "white"
      }, {
        backgroundColor: "#e8875e"
      }, {
        backgroundColor: "#f55613"
      }, {
        border: "0 solid currentColor"
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        padding: "0"
      }],
      fontSize: "17px",
      letterSpacing: "0",
      verticalAlign: "middle",
      backgroundColor: "rgba(232, 135, 94, 1)",
      borderRadius: "3px",
      transition: "none"
    },
    ".button--cta:hover": {
      transition: "none"
    },
    ".button--cta:focus": {
      outline: "0"
    },
    ".button--cta:active": {
      color: "white",
      backgroundColor: "rgba(232, 135, 94, 1)",
      fallbacks: [{
        backgroundColor: "#e8875e"
      }],
      transition: "none",
      opacity: "0.2"
    },
    ".button--cta:disabled, .button--cta[disabled]": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".button--large": {
      fontSize: "17px",
      fontWeight: "500",
      lineHeight: "36px",
      padding: "4px 12px",
      display: "block",
      width: "100%",
      textAlign: "center"
    },
    ".button--large:active": {
      backgroundColor: "#f55613",
      transition: "none",
      opacity: "0.2",
      fallbacks: [{
        transition: "none"
      }]
    },
    ".button--large:disabled, .button--large[disabled]": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".button--large:hover": {
      transition: "none"
    },
    ".button--large:focus": {
      outline: "0"
    },
    ".button--large--quiet": {
      position: "relative",
      display: "block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "4px 12px",
      margin: "0",
      font: "inherit",
      color: "#f55613",
      background: "transparent",
      border: "1px solid transparent",
      lineHeight: "36px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "500",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      textDecoration: "none",
      fallbacks: [{
        color: "white"
      }, {
        border: "0 solid currentColor"
      }, {
        background: "transparent"
      }, {
        display: "inline-block"
      }, {
        padding: "4px 10px"
      }, {
        lineHeight: "32px"
      }, {
        fontWeight: "400"
      }, {
        fontSize: "17px"
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        padding: "0"
      }],
      fontSize: "17px",
      letterSpacing: "0",
      verticalAlign: "middle",
      backgroundColor: "#f55613",
      borderRadius: "3px",
      transition: "none",
      width: "100%",
      boxShadow: "none",
      textAlign: "center"
    },
    ".button--large--quiet:active": {
      transition: "none",
      opacity: "0.2",
      color: "#f55613",
      background: "transparent",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    ".button--large--quiet:disabled, .button--large--quiet[disabled]": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".button--large--quiet:hover": {
      transition: "none"
    },
    ".button--large--quiet:focus": {
      outline: "0"
    },
    ".button--large--cta": {
      position: "relative",
      display: "block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "4px 12px",
      margin: "0",
      font: "inherit",
      color: "white",
      background: "transparent",
      border: "none",
      lineHeight: "36px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "500",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      textDecoration: "none",
      fallbacks: [{
        display: "inline-block"
      }, {
        padding: "4px 10px"
      }, {
        lineHeight: "32px"
      }, {
        fontWeight: "400"
      }, {
        fontSize: "17px"
      }, {
        color: "white"
      }, {
        backgroundColor: "#e8875e"
      }, {
        backgroundColor: "#f55613"
      }, {
        border: "0 solid currentColor"
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        padding: "0"
      }],
      fontSize: "17px",
      letterSpacing: "0",
      verticalAlign: "middle",
      backgroundColor: "rgba(232, 135, 94, 1)",
      borderRadius: "3px",
      transition: "none",
      width: "100%",
      textAlign: "center"
    },
    ".button--large--cta:hover": {
      transition: "none"
    },
    ".button--large--cta:focus": {
      outline: "0"
    },
    ".button--large--cta:active": {
      color: "white",
      backgroundColor: "rgba(232, 135, 94, 1)",
      fallbacks: [{
        backgroundColor: "#e8875e"
      }],
      transition: "none",
      opacity: "0.2"
    },
    ".button--large--cta:disabled, .button--large--cta[disabled]": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".button--material": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0 16px",
      margin: "0",
      font: "inherit",
      color: "#ffffff",
      background: "transparent",
      border: "0 solid currentColor",
      lineHeight: "36px",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "500",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      textDecoration: "none",
      fallbacks: [{
        transition: "background-color 0.25s linear"
      }, {
        transition: "none"
      }, {
        fontWeight: "400"
      }, {
        color: "white"
      }, {
        backgroundColor: "#f55613"
      }, {
        fontSize: "17px"
      }, {
        padding: "4px 10px"
      }, {
        lineHeight: "32px"
      }, {
        fontWeight: "400"
      }, {
        webkitFontSmoothing: "antialiased"
      }, {
        fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif'
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        padding: "0"
      }],
      fontSize: "14px",
      letterSpacing: "0",
      verticalAlign: "middle",
      backgroundColor: "#f55613",
      borderRadius: "3px",
      transition: "all 0.25s linear",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
      minHeight: "36px",
      textAlign: "center",
      webkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      textTransform: "uppercase",
      opacity: "1"
    },
    ".button--material:hover": {
      transition: "all 0.25s linear"
    },
    ".button--material:active": {
      boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 5px -1px rgba(0, 0, 0, 0.4)",
      backgroundColor: "#f55613",
      opacity: "0.9",
      transition: "all 0.25s linear"
    },
    ".button--material:focus": {
      outline: "0"
    },
    ".button--material:disabled, .button--material[disabled]": {
      transition: "none",
      boxShadow: "none",
      backgroundColor: "color-mod(#4f4f4f a(26%))",
      color: "color-mod(black a(26%))",
      opacity: "1"
    },
    ".button--material--flat": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0 16px",
      margin: "0",
      font: "inherit",
      color: "#f55613",
      background: "transparent",
      border: "0 solid currentColor",
      lineHeight: "36px",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "500",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      height: "auto",
      textDecoration: "none",
      fallbacks: [{
        transition: "background-color 0.25s linear"
      }, {
        color: "#ffffff"
      }, {
        backgroundColor: "#f55613"
      }, {
        boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)"
      }, {
        transition: "none"
      }, {
        fontWeight: "400"
      }, {
        color: "white"
      }, {
        backgroundColor: "#f55613"
      }, {
        fontSize: "17px"
      }, {
        padding: "4px 10px"
      }, {
        lineHeight: "32px"
      }, {
        fontWeight: "400"
      }, {
        webkitFontSmoothing: "antialiased"
      }, {
        fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif'
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        padding: "0"
      }],
      fontSize: "14px",
      letterSpacing: "0",
      verticalAlign: "middle",
      backgroundColor: "transparent",
      borderRadius: "3px",
      transition: "all 0.25s linear",
      boxShadow: "none",
      minHeight: "36px",
      textAlign: "center",
      webkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      textTransform: "uppercase"
    },
    ".button--material--flat:hover": {
      transition: "all 0.25s linear"
    },
    ".button--material--flat:focus": {
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "#f55613",
      outline: "0",
      opacity: "1",
      border: "none"
    },
    ".button--material--flat:active": {
      boxShadow: "none",
      outline: "0",
      opacity: "1",
      border: "none",
      backgroundColor: "color-mod(#999 a(20%))",
      color: "#f55613",
      transition: "all 0.25s linear"
    },
    ".button--material--flat:disabled, .button--material--flat[disabled]": {
      transition: "none",
      opacity: "1",
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "color-mod(black a(26%))"
    },
    ".button-bar": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      display: "inline-flex",
      fallbacks: [{
        display: "-webkit-inline-flex"
      }, {
        display: "-webkit-inline-box"
      }],
      webkitBoxAlign: "stretch",
      webkitAlignItems: "stretch",
      alignItems: "stretch",
      webkitAlignContent: "stretch",
      alignContent: "stretch",
      webkitFlexWrap: "nowrap",
      flexWrap: "nowrap",
      margin: "0",
      padding: "0",
      border: "none"
    },
    ".button-bar__item": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      borderRadius: "0",
      width: "100%",
      padding: "0",
      margin: "0",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box"
    },
    ".button-bar__button": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      borderRadius: "0",
      backgroundColor: "transparent",
      color: "#f55613",
      border: "1px solid #f55613",
      borderTopWidth: "1px",
      borderBottomWidth: "1px",
      borderRightWidth: "1px",
      borderLeftWidth: "0",
      fallbacks: [{
        fontWeight: "400"
      }],
      padding: "0",
      fontSize: "13px",
      height: "27px",
      lineHeight: "27px",
      width: "100%",
      transition: "background-color 0.2s linear, color 0.2s linear",
      boxSizing: "border-box"
    },
    ".button-bar__button:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".button-bar__button:hover": {
      transition: "none"
    },
    ".button-bar__button:focus": {
      outline: "0"
    },
    ":checked + .button-bar__button": {
      backgroundColor: "#f55613",
      color: "#fff",
      transition: "none"
    },
    ".button-bar__button:active, :active + .button-bar__button": {
      backgroundColor: "color-mod(#f55613 tint(70%))",
      border: "0 solid #f55613",
      borderTop: "1px solid #f55613",
      borderBottom: "1px solid #f55613",
      borderRight: "1px solid #f55613",
      fontSize: "13px",
      width: "100%",
      transition: "none"
    },
    ".button-bar__item:first-child > .button-bar__button": {
      borderLeftWidth: "1px",
      borderRadius: "4px 0 0 4px"
    },
    ".button-bar__item:last-child > .button-bar__button": {
      borderRightWidth: "1px",
      borderRadius: "0 4px 4px 0"
    },
    ".segment": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      display: "inline-flex",
      fallbacks: [{
        display: "-webkit-inline-flex"
      }, {
        display: "-webkit-inline-box"
      }],
      webkitBoxAlign: "stretch",
      webkitAlignItems: "stretch",
      alignItems: "stretch",
      webkitAlignContent: "stretch",
      alignContent: "stretch",
      webkitFlexWrap: "nowrap",
      flexWrap: "nowrap",
      margin: "0",
      padding: "0",
      border: "none"
    },
    ".segment__item": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      borderRadius: "0",
      width: "100%",
      padding: "0",
      margin: "0",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
      display: "block",
      backgroundColor: "transparent",
      border: "none"
    },
    ".segment__input": {
      position: "absolute",
      right: "0",
      top: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      border: "0",
      backgroundColor: "transparent",
      zIndex: "1",
      verticalAlign: "top",
      outline: "none",
      width: "100%",
      height: "100%",
      margin: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none"
    },
    ".segment__button": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      borderRadius: "0",
      backgroundColor: "transparent",
      color: "#f55613",
      border: "1px solid #f55613",
      borderTopWidth: "1px",
      borderBottomWidth: "1px",
      borderRightWidth: "1px",
      borderLeftWidth: "0",
      fallbacks: [{
        fontWeight: "400"
      }],
      padding: "0",
      fontSize: "13px",
      height: "29px",
      lineHeight: "29px",
      width: "100%",
      transition: "background-color 0.2s linear, color 0.2s linear",
      boxSizing: "border-box",
      textAlign: "center"
    },
    ".segment__item:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".segment__button:hover": {
      transition: "none"
    },
    ".segment__button:focus": {
      outline: "0"
    },
    ":active + .segment__button": {
      backgroundColor: "color-mod(#f55613 tint(70%))",
      border: "0 solid #f55613",
      borderTop: "1px solid #f55613",
      borderBottom: "1px solid #f55613",
      borderRight: "1px solid #f55613",
      fontSize: "13px",
      width: "100%",
      transition: "none"
    },
    ":checked + .segment__button": {
      backgroundColor: "#f55613",
      color: "#fff",
      transition: "none"
    },
    ".segment__item:first-child > .segment__button": {
      borderLeftWidth: "1px",
      borderRadius: "4px 0 0 4px"
    },
    ".segment__item:last-child > .segment__button": {
      borderRightWidth: "1px",
      borderRadius: "0 4px 4px 0"
    },
    ".segment--material": {
      borderRadius: "2px",
      overflow: "hidden",
      boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
    },
    ".segment--material__button": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      fontSize: "14px",
      height: "32px",
      lineHeight: "32px",
      borderWidth: "0",
      color: "color-mod(black a(38%))",
      borderRadius: "0",
      backgroundColor: "#fafafa"
    },
    ":active + .segment--material__button": {
      backgroundColor: "#fafafa",
      borderRadius: "0",
      borderWidth: "0",
      fontSize: "14px",
      transition: "none",
      color: "color-mod(black a(38%))"
    },
    ":checked + .segment--material__button": {
      backgroundColor: "#c8c8c8",
      color: "#353535",
      borderRadius: "0",
      borderWidth: "0"
    },
    ".segment--material__item:first-child > .segment--material__button, .segment--material__item:last-child > .segment--material__button": {
      borderRadius: "0",
      borderWidth: "0"
    },
    ".tabbar": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      whiteSpace: "nowrap",
      margin: "0",
      padding: "0",
      height: "49px",
      backgroundColor: "#fafafa",
      borderTop: "1px solid #ccc",
      width: "100%"
    },
    ".tabbar__item": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      position: "relative",
      webkitBoxFlex: "1",
      webkitFlexGrow: "1",
      flexGrow: "1",
      webkitFlexBasis: "0",
      flexBasis: "0",
      width: "auto",
      borderRadius: "0"
    },
    ".tabbar__item > input": {
      position: "absolute",
      right: "0",
      top: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      border: "0",
      backgroundColor: "transparent",
      zIndex: "1",
      verticalAlign: "top",
      outline: "none",
      width: "100%",
      height: "100%",
      margin: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none"
    },
    ".tabbar__button": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#999",
      background: "transparent",
      border: "none",
      lineHeight: "49px",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
      textDecoration: "none",
      fallbacks: [{
        lineHeight: "normal"
      }, {
        fontWeight: "400"
      }, {
        color: "inherit"
      }, {
        padding: "0"
      }],
      height: "49px",
      letterSpacing: "0",
      verticalAlign: "top",
      backgroundColor: "transparent",
      borderTop: "none",
      width: "100%"
    },
    ".tabbar__icon": {
      fontSize: "24px",
      padding: "0",
      margin: "0",
      lineHeight: "26px",
      display: "block !important",
      height: "28px"
    },
    ".tabbar__label": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      display: "inline-block"
    },
    ".tabbar__badge.notification": {
      verticalAlign: "text-bottom",
      top: "-1px",
      marginLeft: "5px",
      zIndex: "10",
      fontSize: "12px",
      height: "16px",
      minWidth: "16px",
      lineHeight: "16px",
      borderRadius: "8px"
    },
    ".tabbar__icon ~ .tabbar__badge.notification": {
      position: "absolute",
      top: "5px",
      marginLeft: "0"
    },
    ".tabbar__icon + .tabbar__label": {
      display: "block",
      fontSize: "10px",
      lineHeight: "1",
      margin: "0",
      fontWeight: "400"
    },
    ".tabbar__label:first-child": {
      fontSize: "16px",
      lineHeight: "49px",
      margin: "0",
      padding: "0"
    },
    ":checked + .tabbar__button": {
      color: "#f55613",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderTop: "none"
    },
    ".tabbar__button:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".tabbar__button:focus": {
      zIndex: "1",
      borderTop: "none",
      boxShadow: "none",
      outline: "0"
    },
    ".tabbar__content": {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "49px",
      zIndex: "0"
    },
    ".tabbar--autogrow .tabbar__item": {
      webkitFlexBasis: "auto",
      flexBasis: "auto"
    },
    ".tabbar--top": {
      position: "relative",
      top: "0",
      left: "0",
      right: "0",
      bottom: "auto",
      borderTop: "none",
      borderBottom: "1px solid #ccc",
      paddingTop: "0"
    },
    ".tabbar--top__content": {
      top: "49px",
      left: "0",
      right: "0",
      bottom: "0",
      zIndex: "0"
    },
    ".tabbar--top-border__button": {
      backgroundColor: "transparent",
      borderBottom: "4px solid transparent"
    },
    ":checked + .tabbar--top-border__button": {
      backgroundColor: "transparent",
      borderBottom: "4px solid #f55613"
    },
    ".tabbar__border": {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "0",
      height: "4px",
      backgroundColor: "#f55613"
    },
    ".tabbar--material": {
      background: "none",
      backgroundColor: "#f55613",
      borderBottomWidth: "0",
      boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.14),\r\n    0 3px 5px -2px rgba(0, 0, 0, 0.12), 0 5px 1px -4px rgba(0, 0, 0, 0.2)"
    },
    ".tabbar--material__button": {
      backgroundColor: "transparent",
      color: "rgba(255, 255, 255, 1)",
      fallbacks: [{
        fontWeight: "500"
      }, {
        color: "#ffffff"
      }],
      textTransform: "uppercase",
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased"
    },
    ".tabbar--material__button:after": {
      content: '""',
      display: "block",
      width: "0",
      height: "2px",
      bottom: "0",
      position: "absolute",
      marginTop: "-2px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      fallbacks: [{
        backgroundColor: "#ffffff"
      }]
    },
    ":checked + .tabbar--material__button:after": {
      width: "100%",
      transition: "width 0.2s ease-in-out"
    },
    ":checked + .tabbar--material__button": {
      backgroundColor: "transparent",
      color: "rgba(255, 255, 255, 1)",
      fallbacks: [{
        color: "#ffffff"
      }]
    },
    ".tabbar--material__item:not([ripple]):active": {
      backgroundColor: "rgba(49, 49, 58, 0.1)",
      fallbacks: [{
        backgroundColor: "#31313a"
      }]
    },
    ".tabbar--material__border": {
      height: "2px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      fallbacks: [{
        backgroundColor: "#ffffff"
      }]
    },
    ".tabbar--material__icon": {
      fontSize: "22px !important",
      lineHeight: "36px"
    },
    ".tabbar--material__label": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400"
    },
    ".tabbar--material__label:first-child": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      letterSpacing: "0.015em",
      fallbacks: [{
        fontWeight: "400"
      }],
      fontSize: "14px"
    },
    ".tabbar--material__icon + .tabbar--material__label": {
      fontSize: "10px"
    },
    ".toolbar-button": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      padding: "4px 10px",
      letterSpacing: "0",
      color: "#f55613",
      backgroundColor: "rgba(0, 0, 0, 0)",
      fallbacks: [{
        fontWeight: "400"
      }, {
        backgroundColor: "#000000"
      }],
      borderRadius: "2px",
      border: "1px solid transparent",
      fontSize: "17px",
      transition: "none"
    },
    ".toolbar-button:active": {
      backgroundColor: "rgba(0, 0, 0, 0)",
      fallbacks: [{
        backgroundColor: "#000000"
      }],
      transition: "none",
      opacity: "0.2"
    },
    ".toolbar-button:disabled, .toolbar-button[disabled]": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".toolbar-button:focus": {
      outline: "0",
      transition: "none"
    },
    ".toolbar-button:hover": {
      transition: "none"
    },
    ".toolbar-button--outline": {
      border: "1px solid #f55613",
      margin: "auto 8px",
      paddingLeft: "6px",
      paddingRight: "6px"
    },
    ".toolbar-button--material": {
      fontSize: "22px",
      color: "rgba(255, 255, 255, 1)",
      fallbacks: [{
        verticalAlign: "baseline"
      }, {
        color: "#ffffff"
      }],
      display: "inline-block",
      padding: "0 12px",
      height: "100%",
      margin: "0",
      border: "none",
      borderRadius: "0",
      verticalAlign: "initial",
      transition: "background-color 0.25s linear"
    },
    ".toolbar-button--material:first-of-type": {
      marginLeft: "4px"
    },
    ".toolbar-button--material:last-of-type": {
      marginRight: "4px"
    },
    ".toolbar-button--material:active": {
      opacity: "1",
      transition: "background-color 0.25s linear"
    },
    ".back-button": {
      height: "44px",
      lineHeight: "44px",
      paddingLeft: "8px",
      color: "#f55613",
      backgroundColor: "rgba(0, 0, 0, 0)",
      fallbacks: [{
        backgroundColor: "#000000"
      }],
      display: "inline-block"
    },
    ".back-button:active": {
      opacity: "0.2"
    },
    ".back-button__label": {
      display: "inline-block",
      height: "100%",
      verticalAlign: "top",
      lineHeight: "44px",
      fontSize: "17px",
      fontWeight: "500"
    },
    ".back-button__icon": {
      marginRight: "6px",
      display: "inline-flex",
      fallbacks: [{
        display: "-webkit-inline-flex"
      }, {
        display: "-webkit-inline-box"
      }],
      fill: "#f55613",
      webkitBoxAlign: "center",
      webkitAlignItems: "center",
      alignItems: "center",
      height: "100%"
    },
    ".back-button--material": {
      fontSize: "22px",
      color: "rgba(255, 255, 255, 1)",
      fallbacks: [{
        verticalAlign: "baseline"
      }, {
        color: "#ffffff"
      }],
      display: "inline-block",
      padding: "0 12px",
      height: "100%",
      margin: "0 0 0 4px",
      border: "none",
      borderRadius: "0",
      verticalAlign: "initial",
      lineHeight: "56px"
    },
    ".back-button--material__label": {
      display: "none",
      fontSize: "20px"
    },
    ".back-button--material__icon": {
      display: "inline-flex",
      fallbacks: [{
        display: "-webkit-inline-flex"
      }, {
        display: "-webkit-inline-box"
      }],
      fill: "rgba(255, 255, 255, 1)",
      webkitBoxAlign: "center",
      webkitAlignItems: "center",
      alignItems: "center",
      height: "100%"
    },
    ".back-button--material:active": {
      opacity: "1"
    },
    ".checkbox": {
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      lineHeight: "22px"
    },
    ".checkbox__checkmark": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      fallbacks: [{
        position: "relative"
      }],
      height: "22px",
      width: "22px",
      pointerEvents: "none"
    },
    ".checkbox__input, .checkbox__input:checked": {
      position: "absolute",
      right: "0",
      top: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      border: "0",
      backgroundColor: "transparent",
      zIndex: "1",
      verticalAlign: "top",
      outline: "none",
      width: "100%",
      height: "100%",
      margin: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none"
    },
    ".checkbox__checkmark:before": {
      content: '""',
      position: "absolute",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      width: "22px",
      height: "22px",
      background: "transparent",
      border: "1px solid #c7c7cd",
      borderRadius: "22px",
      left: "0"
    },
    ".checkbox__checkmark:after": {
      content: '""',
      position: "absolute",
      top: "7px",
      left: "5px",
      width: "11px",
      height: "5px",
      background: "transparent",
      border: "2px solid #fff",
      borderWidth: "1px",
      borderTop: "none",
      borderRight: "none",
      borderRadius: "0",
      webkitTransform: "rotate(-45deg)",
      transform: "rotate(-45deg)",
      opacity: "0"
    },
    ":checked + .checkbox__checkmark:before": {
      background: "#f55613",
      border: "none"
    },
    ":checked + .checkbox__checkmark:after": {
      opacity: "1"
    },
    ":disabled + .checkbox__checkmark": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ":disabled:active + .checkbox__checkmark:before": {
      background: "transparent"
    },
    ".checkbox--noborder": {
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      lineHeight: "22px",
      fallbacks: [{
        position: "relative"
      }]
    },
    ".checkbox--noborder__input": {
      position: "absolute",
      right: "0",
      top: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      border: "0",
      backgroundColor: "transparent",
      zIndex: "1",
      verticalAlign: "top",
      outline: "none",
      width: "100%",
      height: "100%",
      margin: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none"
    },
    ".checkbox--noborder__checkmark": {
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      width: "22px",
      height: "22px",
      background: "transparent",
      border: "none"
    },
    ".checkbox--noborder__checkmark:before": {
      content: '""',
      position: "absolute",
      width: "22px",
      height: "22px",
      background: "transparent",
      border: "none",
      borderRadius: "22px",
      left: "0"
    },
    ".checkbox--noborder__checkmark:after": {
      content: '""',
      position: "absolute",
      top: "7px",
      left: "4px",
      opacity: "0",
      width: "11px",
      height: "4px",
      background: "transparent",
      border: "2px solid #f55613",
      borderTop: "none",
      borderRight: "none",
      borderRadius: "0",
      webkitTransform: "rotate(-45deg)",
      transform: "rotate(-45deg)"
    },
    ":checked + .checkbox--noborder__checkmark:before": {
      background: "transparent",
      border: "none"
    },
    ":checked + .checkbox--noborder__checkmark:after": {
      opacity: "1"
    },
    ":focus + .checkbox--noborder__checkmark:before": {
      border: "none"
    },
    ":disabled + .checkbox--noborder__checkmark": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ":disabled:active + .checkbox--noborder__checkmark:before": {
      background: "transparent",
      border: "none"
    },
    ".checkbox--material": {
      lineHeight: "18px",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      overflow: "visible"
    },
    ".checkbox--material__checkmark": {
      width: "18px",
      height: "18px"
    },
    ".checkbox--material__checkmark:before": {
      borderRadius: "2px",
      height: "18px",
      width: "18px",
      border: "2px solid #717171",
      transition: "background-color 0.1s linear 0.2s, border-color 0.1s linear 0.2s",
      backgroundColor: "transparent"
    },
    ":checked + .checkbox--material__checkmark:before": {
      border: "2px solid #f55613",
      backgroundColor: "#f55613",
      transition: "background-color 0.1s linear, border-color 0.1s linear"
    },
    ".checkbox--material__checkmark:after": {
      borderColor: "#ffffff",
      transition: "transform 0.2s ease 0, -webkit-transform 0.2s ease 0",
      fallbacks: [{
        transition: "transform 0.2s ease 0"
      }, {
        transition: "-webkit-transform 0.2s ease 0"
      }],
      width: "10px",
      height: "5px",
      top: "4px",
      left: "3px",
      webkitTransform: "scale(0) rotate(-45deg)",
      transform: "scale(0) rotate(-45deg)",
      borderWidth: "2px"
    },
    ":checked + .checkbox--material__checkmark:after": {
      transition: "transform 0.2s ease 0.2s, -webkit-transform 0.2s ease 0.2s",
      fallbacks: [{
        transition: "transform 0.2s ease 0.2s"
      }, {
        transition: "-webkit-transform 0.2s ease 0.2s"
      }],
      width: "10px",
      height: "5px",
      top: "4px",
      left: "3px",
      webkitTransform: "scale(1) rotate(-45deg)",
      transform: "scale(1) rotate(-45deg)",
      borderWidth: "2px"
    },
    ".checkbox--material__input:before": {
      content: '""',
      opacity: "0",
      position: "absolute",
      top: "0",
      left: "0",
      width: "18px",
      height: "18px",
      boxShadow: "0 0 0 11px #717171",
      boxSizing: "border-box",
      borderRadius: "50%",
      backgroundColor: "#717171",
      pointerEvents: "none",
      display: "block",
      webkitTransform: "scale3d(0.2, 0.2, 0.2)",
      transform: "scale3d(0.2, 0.2, 0.2)",
      transition: "opacity 0.25s ease-out, transform 0.1s ease-out,\r\n    -webkit-transform 0.1s ease-out",
      fallbacks: [{
        transition: "opacity 0.25s ease-out, transform 0.1s ease-out"
      }, {
        transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out"
      }]
    },
    ".checkbox--material__input:checked:before": {
      boxShadow: "0 0 0 11px #f55613",
      backgroundColor: "#f55613"
    },
    ".checkbox--material__input:active:before": {
      opacity: "0.15",
      webkitTransform: "scale3d(1, 1, 1)",
      transform: "scale3d(1, 1, 1)"
    },
    ":disabled + .checkbox--material__checkmark": {
      opacity: "1"
    },
    ":disabled + .checkbox--material__checkmark:before": {
      borderColor: "#afafaf"
    },
    ":disabled:checked + .checkbox--material__checkmark:before": {
      backgroundColor: "#afafaf"
    },
    ":disabled:checked + .checkbox--material__checkmark:after": {
      borderColor: "#ffffff"
    },
    ".radio-button__input": {
      position: "absolute",
      right: "0",
      top: "0",
      left: "0",
      bottom: "0",
      padding: "0",
      border: "0",
      backgroundColor: "transparent",
      zIndex: "1",
      verticalAlign: "top",
      outline: "none",
      width: "100%",
      height: "100%",
      margin: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none"
    },
    ".radio-button__input:active, .radio-button__input:focus": {
      outline: "0",
      webkitTapHighlightColor: "rgba(0, 0, 0, 0)"
    },
    ".radio-button": {
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fallbacks: [{
        position: "relative"
      }],
      lineHeight: "24px",
      textAlign: "left"
    },
    ".radio-button__checkmark:before": {
      content: '""',
      position: "absolute",
      borderRadius: "22px",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      width: "22px",
      height: "22px",
      background: "transparent",
      border: "none",
      fallbacks: [{
        borderRadius: "100%"
      }],
      left: "0"
    },
    ".radio-button__checkmark": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      position: "relative",
      display: "inline-block",
      verticalAlign: "top",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      fallbacks: [{
        position: "relative"
      }, {
        position: "relative"
      }],
      width: "24px",
      height: "24px",
      background: "transparent",
      pointerEvents: "none"
    },
    ".radio-button__checkmark:after": {
      content: '""',
      position: "absolute",
      top: "7px",
      left: "4px",
      opacity: "0",
      width: "11px",
      height: "4px",
      background: "transparent",
      border: "2px solid #f55613",
      borderTop: "none",
      borderRight: "none",
      borderRadius: "0",
      webkitTransform: "rotate(-45deg)",
      transform: "rotate(-45deg)"
    },
    ":checked + .radio-button__checkmark": {
      background: "rgba(0, 0, 0, 0)",
      fallbacks: [{
        background: "#000000"
      }]
    },
    ":checked + .radio-button__checkmark:after": {
      opacity: "1"
    },
    ":checked + .radio-button__checkmark:before": {
      background: "transparent",
      border: "none"
    },
    ":disabled + .radio-button__checkmark": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".radio-button--material": {
      lineHeight: "22px",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400"
    },
    ".radio-button--material__input:before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      opacity: "0",
      width: "20px",
      height: "20px",
      boxShadow: "0 0 0 14px #717171",
      border: "none",
      boxSizing: "border-box",
      borderRadius: "50%",
      backgroundColor: "#717171",
      pointerEvents: "none",
      display: "block",
      webkitTransform: "scale3d(0.2, 0.2, 0.2)",
      transform: "scale3d(0.2, 0.2, 0.2)",
      transition: "opacity 0.25s ease-out, transform 0.1s ease-out,\r\n    -webkit-transform 0.1s ease-out",
      fallbacks: [{
        transition: "opacity 0.25s ease-out, transform 0.1s ease-out"
      }, {
        transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out"
      }]
    },
    ".radio-button--material__input:checked:before": {
      boxShadow: "0 0 0 14px #f55613",
      backgroundColor: "#f55613"
    },
    ".radio-button--material__input:active:before": {
      opacity: "0.15",
      webkitTransform: "scale3d(1, 1, 1)",
      transform: "scale3d(1, 1, 1)"
    },
    ".radio-button--material__checkmark": {
      width: "20px",
      height: "20px",
      overflow: "visible"
    },
    ".radio-button--material__checkmark:before": {
      background: "transparent",
      border: "2px solid #717171",
      boxSizing: "border-box",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      transition: "border 0.2s ease"
    },
    ".radio-button--material__checkmark:after": {
      transition: "background 0.2s ease, transform 0.2s ease,\r\n    -webkit-transform 0.2s ease",
      fallbacks: [{
        transition: "background 0.2s ease, transform 0.2s ease"
      }, {
        transition: "background 0.2s ease, -webkit-transform 0.2s ease"
      }],
      top: "5px",
      left: "5px",
      width: "10px",
      height: "10px",
      border: "none",
      borderRadius: "50%",
      webkitTransform: "scale(0)",
      transform: "scale(0)"
    },
    ":checked + .radio-button--material__checkmark:before": {
      background: "transparent",
      border: "2px solid #f55613"
    },
    ".radio-button--material__input + .radio-button__checkmark:after": {
      background: "#717171",
      opacity: "1",
      webkitTransform: "scale(0)",
      transform: "scale(0)"
    },
    ":checked + .radio-button--material__checkmark:after": {
      opacity: "1",
      background: "#f55613",
      webkitTransform: "scale(1)",
      transform: "scale(1)"
    },
    ":disabled + .radio-button--material__checkmark": {
      opacity: "1"
    },
    ":disabled + .radio-button--material__checkmark:after": {
      backgroundColor: "#afafaf",
      borderColor: "#afafaf"
    },
    ":disabled + .radio-button--material__checkmark:before": {
      borderColor: "#afafaf"
    },
    ".list": {
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      listStyleType: "none",
      textAlign: "left",
      display: "block",
      webkitOverflowScrolling: "touch",
      overflow: "hidden",
      backgroundImage: "linear-gradient(#ccc, #ccc), linear-gradient(#ccc, #ccc)",
      backgroundSize: "100% 1px, 100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom, top",
      fallbacks: [{
        border: "none"
      }],
      backgroundColor: "#fff"
    },
    ".list-item": {
      position: "relative",
      width: "100%",
      listStyle: "none",
      boxSizing: "border-box",
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitBoxOrient: "horizontal",
      webkitBoxDirection: "normal",
      webkitFlexDirection: "row",
      flexDirection: "row",
      webkitBoxPack: "start",
      webkitJustifyContent: "flex-start",
      justifyContent: "flex-start",
      webkitBoxAlign: "center",
      webkitAlignItems: "center",
      alignItems: "center",
      padding: "0 0 0 14px",
      margin: "0 0 -1px 0",
      color: "#1f1f21",
      transition: "background-color 0.2s linear"
    },
    ".list-item__top": {
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitBoxOrient: "horizontal",
      webkitBoxDirection: "normal",
      webkitFlexDirection: "row",
      flexDirection: "row",
      webkitBoxPack: "start",
      webkitJustifyContent: "flex-start",
      justifyContent: "flex-start",
      webkitBoxAlign: "center",
      webkitAlignItems: "center",
      alignItems: "center",
      webkitBoxOrdinalGroup: "1",
      webkitOrder: "0",
      order: "0",
      width: "100%"
    },
    ".list-item--expandable": {
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitBoxOrient: "vertical",
      webkitBoxDirection: "normal",
      webkitFlexDirection: "column",
      flexDirection: "column",
      borderBottom: "none",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
      backgroundPositionX: "14px"
    },
    ".list-item__expandable-content": {
      display: "none",
      width: "100%",
      padding: "12px 14px 12px 0",
      boxSizing: "border-box",
      webkitBoxOrdinalGroup: "2",
      webkitOrder: "1",
      order: "1",
      overflow: "hidden"
    },
    ".list-item.expanded > .list-item__expandable-content": {
      display: "block",
      height: "auto"
    },
    ".list-item__left": {
      boxSizing: "border-box",
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      padding: "12px 14px 12px 0",
      webkitBoxOrdinalGroup: "1",
      webkitOrder: "0",
      order: "0",
      webkitBoxAlign: "center",
      webkitAlignItems: "center",
      alignItems: "center",
      webkitAlignSelf: "stretch",
      alignSelf: "stretch",
      lineHeight: "1.2em",
      minHeight: "44px"
    },
    ".list-item__left:empty": {
      width: "0",
      minWidth: "0",
      padding: "0",
      margin: "0"
    },
    ".list-item__center": {
      boxSizing: "border-box",
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitBoxFlex: "1",
      webkitFlexGrow: "1",
      flexGrow: "1",
      webkitFlexWrap: "wrap",
      flexWrap: "wrap",
      webkitBoxOrient: "horizontal",
      webkitBoxDirection: "normal",
      webkitFlexDirection: "row",
      flexDirection: "row",
      webkitBoxOrdinalGroup: "2",
      webkitOrder: "1",
      order: "1",
      marginRight: "auto",
      webkitBoxAlign: "center",
      webkitAlignItems: "center",
      alignItems: "center",
      webkitAlignSelf: "stretch",
      alignSelf: "stretch",
      marginLeft: "0",
      borderBottom: "none",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
      padding: "12px 6px 12px 0",
      lineHeight: "1.2em",
      minHeight: "44px"
    },
    ".list-item__right": {
      boxSizing: "border-box",
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      marginLeft: "auto",
      padding: "12px 12px 12px 0",
      webkitBoxOrdinalGroup: "3",
      webkitOrder: "2",
      order: "2",
      webkitBoxAlign: "center",
      webkitAlignItems: "center",
      alignItems: "center",
      webkitAlignSelf: "stretch",
      alignSelf: "stretch",
      borderBottom: "none",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
      lineHeight: "1.2em",
      minHeight: "44px"
    },
    ".list-header": {
      margin: "0",
      listStyle: "none",
      textAlign: "left",
      display: "block",
      boxSizing: "border-box",
      padding: "0 0 0 15px",
      fontSize: "12px",
      fontWeight: "500",
      color: "#1f1f21",
      minHeight: "24px",
      lineHeight: "25px",
      textTransform: "uppercase",
      position: "relative",
      backgroundColor: "#eee",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)"
    },
    ".list--noborder": {
      borderTop: "none",
      borderBottom: "none",
      backgroundImage: "none"
    },
    ".list-item--tappable:active": {
      transition: "none",
      backgroundColor: "#d9d9d9"
    },
    ".list--inset": {
      margin: "0 8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundImage: "none"
    },
    ".list-item__label": {
      fontSize: "14px",
      padding: "0 4px",
      opacity: "0.6"
    },
    ".list-item__title": {
      webkitFlexBasis: "100%",
      flexBasis: "100%",
      webkitAlignSelf: "flex-end",
      alignSelf: "flex-end",
      webkitBoxOrdinalGroup: "1",
      webkitOrder: "0",
      order: "0"
    },
    ".list-item__subtitle": {
      opacity: "0.75",
      fontSize: "14px",
      webkitBoxOrdinalGroup: "2",
      webkitOrder: "1",
      order: "1",
      webkitFlexBasis: "100%",
      flexBasis: "100%",
      webkitAlignSelf: "flex-start",
      alignSelf: "flex-start"
    },
    ".list-item__thumbnail": {
      width: "40px",
      height: "40px",
      borderRadius: "6px",
      display: "block",
      margin: "0"
    },
    ".list-item__icon": {
      fontSize: "22px",
      padding: "0 6px"
    },
    ".list--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      backgroundImage: "none",
      backgroundColor: "#fff"
    },
    ".list-item--material": {
      border: "0",
      padding: "0 0 0 16px",
      lineHeight: "normal"
    },
    ".list-item--material__subtitle": {
      marginTop: "4px"
    },
    ".list-item--material:first-child": {
      boxShadow: "none"
    },
    ".list-item--material__left": {
      padding: "14px 0",
      minWidth: "56px",
      lineHeight: "1",
      minHeight: "48px"
    },
    ".list-item--material__left:empty, .list-item--material__center": {
      padding: "14px 6px 14px 0",
      borderColor: "#eee",
      borderBottom: "none",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
      minHeight: "48px"
    },
    ".list-item--material__right": {
      padding: "14px 16px 14px 0",
      lineHeight: "1",
      borderColor: "#eee",
      borderBottom: "none",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
      minHeight: "48px"
    },
    ".list-item--material.list-item--expandable": {
      borderBottom: "none",
      fallbacks: [{
        borderBottom: "1px solid #eee"
      }],
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
      backgroundPositionX: "16px"
    },
    ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
      borderBottom: "none",
      fallbacks: [{
        borderBottom: "1px solid #eee"
      }],
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)"
    },
    ".list-header--material": {
      background: "#fff",
      border: "none",
      fontSize: "14px",
      textTransform: "none",
      margin: "-1px 0 0 0",
      color: "#757575",
      fontWeight: "500",
      padding: "8px 16px"
    },
    ".list-header--material:not(:first-of-type)": {
      borderTop: "none",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundImage: "linear-gradient(180deg, #eee, #eee 100%)",
      paddingTop: "16px"
    },
    ".list-item--material__thumbnail": {
      width: "40px",
      height: "40px",
      borderRadius: "100%"
    },
    ".list-item--material__icon": {
      fontSize: "20px",
      padding: "0 4px"
    },
    ".list-item--chevron:before, .list-item__expand-chevron": {
      borderRight: "2px solid #c7c7cc",
      borderBottom: "2px solid #c7c7cc",
      width: "7px",
      height: "7px",
      backgroundColor: "transparent",
      zIndex: "5"
    },
    ".list-item--chevron:before": {
      position: "absolute",
      content: '""',
      right: "16px",
      top: "50%",
      webkitTransform: "translateY(-50%) rotate(-45deg)",
      transform: "translateY(-50%) rotate(-45deg)"
    },
    ".list-item__expand-chevron": {
      webkitTransform: "rotate(45deg)",
      transform: "rotate(45deg)",
      margin: "1px"
    },
    ".list-item--expandable.expanded .list-item__expand-chevron": {
      webkitTransform: "rotate(225deg)",
      transform: "rotate(225deg)"
    },
    ".list-item--chevron__right": {
      paddingRight: "30px"
    },
    ".list-item--nodivider__center, .list-item--nodivider__right, .list-item--nodivider.list-item--expandable, .list-item--expandable .list-item__center, .list-item--expandable .list-item__right": {
      border: "none",
      backgroundImage: "none"
    },
    ".list-item--longdivider": {
      borderBottom: "none",
      fallbacks: [{
        borderBottom: "1px solid #ccc"
      }],
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)"
    },
    ".list-item--longdivider:last-of-type": {
      border: "none",
      backgroundImage: "none"
    },
    ".list-item--longdivider__center": {
      border: "none",
      backgroundImage: "none"
    },
    ".list-item--longdivider__right": {
      border: "none",
      backgroundImage: "none"
    },
    ".list-title": {
      padding: "0 0 0 16px",
      margin: "0",
      font: "inherit",
      color: "#6d6d72",
      background: "transparent",
      border: "none",
      lineHeight: "24px",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "500",
      display: "block",
      fallbacks: [{
        lineHeight: "normal"
      }, {
        fontWeight: "400"
      }, {
        margin: "0"
      }, {
        padding: "0"
      }, {
        color: "inherit"
      }],
      textAlign: "left",
      boxSizing: "border-box",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    },
    ".list-title--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      color: "#757575",
      fontSize: "14px",
      margin: "0",
      padding: "12px 0 12px 16px",
      fallbacks: [{
        fontWeight: "400"
      }],
      lineHeight: "24px"
    },
    ".search-input": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0 8px 0 28px",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      verticalAlign: "top",
      outline: "none",
      lineHeight: "1.3",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      webkitAppearance: "textfield",
      mozAppearance: "textfield",
      appearance: "textfield",
      fallbacks: [{
        fontWeight: "400"
      }, {
        margin: "0"
      }, {
        padding: "0"
      }, {
        lineHeight: "1"
      }, {
        color: "inherit"
      }, {
        backgroundColor: "#030303"
      }, {
        boxSizing: "border-box"
      }],
      height: "28px",
      fontSize: "14px",
      backgroundColor: "rgba(3, 3, 3, 0.09)",
      boxShadow: "none",
      borderRadius: "5.5px",
      backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW9zLXNlYXJjaC1pbnB1dC1pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbXBvbmVudHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpb3Mtc2VhcmNoLWlucHV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNDMuMDAwMDAwKSIgZmlsbD0iIzdBNzk3QiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi45OTcyNDgyLDE1LjUwNDE0NjYgQzE3LjA3NzM2NTcsMTUuNTQwNTkzOCAxNy4xNTIyNzMxLDE1LjU5MTYxMjkgMTcuMjE3NzUxNiwxNS42NTcwOTE0IEwyMC42NDk5OTEsMTkuMDg5MzMwOCBDMjAuOTQ0ODQ0OSwxOS4zODQxODQ3IDIwLjk0ODQ3NjQsMTkuODU4NjA2IDIwLjY1MzU0MTIsMjAuMTUzNTQxMiBDMjAuMzYwNjQ4LDIwLjQ0NjQzNDQgMTkuODgxMjcxNiwyMC40NDE5MzE3IDE5LjU4OTMzMDgsMjAuMTQ5OTkxIEwxNi4xNTcwOTE0LDE2LjcxNzc1MTYgQzE2LjA5MTM3LDE2LjY1MjAzMDEgMTYuMDQwMTE3MSwxNi41NzczODc0IDE2LjAwMzQxNDEsMTYuNDk3Nzk5NSBDMTUuMTY3MTY5NCwxNy4xMjcwNDExIDE0LjEyNzEzOTMsMTcuNSAxMywxNy41IEMxMC4yMzg1NzYzLDE3LjUgOCwxNS4yNjE0MjM3IDgsMTIuNSBDOCw5LjczODU3NjI1IDEwLjIzODU3NjMsNy41IDEzLDcuNSBDMTUuNzYxNDIzNyw3LjUgMTgsOS43Mzg1NzYyNSAxOCwxMi41IEMxOCwxMy42Mjc0Njg1IDE3LjYyNjgyMzIsMTQuNjY3Nzc2OCAxNi45OTcyNDgyLDE1LjUwNDE0NjYgWiBNMTMsMTYuNSBDMTUuMjA5MTM5LDE2LjUgMTcsMTQuNzA5MTM5IDE3LDEyLjUgQzE3LDEwLjI5MDg2MSAxNS4yMDkxMzksOC41IDEzLDguNSBDMTAuNzkwODYxLDguNSA5LDEwLjI5MDg2MSA5LDEyLjUgQzksMTQuNzA5MTM5IDEwLjc5MDg2MSwxNi41IDEzLDE2LjUgWiIgaWQ9Imlvcy1zZWFyY2gtaW5wdXQtaWNvbiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
      backgroundPosition: "8px center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "13px",
      display: "inline-block",
      textIndent: "0"
    },
    ".search-input::-webkit-search-cancel-button": {
      webkitAppearance: "textfield",
      appearance: "textfield",
      display: "none"
    },
    ".search-input::-webkit-search-decoration": {
      display: "none"
    },
    ".search-input:focus": {
      outline: "none"
    },
    ".search-input::-webkit-input-placeholder": {
      color: "#7a797b",
      fontSize: "14px",
      textIndent: "0"
    },
    ".search-input:-ms-input-placeholder": {
      color: "#7a797b",
      fontSize: "14px",
      textIndent: "0"
    },
    ".search-input::-ms-input-placeholder": {
      color: "#7a797b",
      fontSize: "14px",
      textIndent: "0"
    },
    ".search-input::placeholder": {
      color: "#7a797b",
      fontSize: "14px",
      textIndent: "0"
    },
    ".search-input:placeholder-shown": {},
    ".search-input:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".search-input--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      borderRadius: "2px",
      height: "48px",
      backgroundColor: "#fafafa",
      backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbmRyb2lkLXNlYXJjaC1pbnB1dC1pY29uIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM4OTg5ODkiPgogICAgICAgICAgICA8ZyBpZD0iY29tcG9uZW50cyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibWF0ZXJpYWwtc2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hdGVyaWFsL0ljb25zLWJsYWNrL3NlYXJjaCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTAyLDYuNDkxIEwxMS43MDgsNi40OTEgTDExLjQzMiw2Ljc2NSBDMTIuNDA3LDcuOTAyIDEzLDkuMzc2IDEzLDEwLjk5MSBDMTMsMTQuNTgxIDEwLjA5LDE3LjQ5MSA2LjUsMTcuNDkxIEMyLjkxLDE3LjQ5MSAwLDE0LjU4MSAwLDEwLjk5MSBDMCw3LjQwMSAyLjkxLDQuNDkxIDYuNSw0LjQ5MSBDOC4xMTUsNC40OTEgOS41ODgsNS4wODMgMTAuNzI1LDYuMDU3IEwxMS4wMDEsNS43ODMgTDExLjAwMSw0Ljk5MSBMMTUuOTk5LDAgTDE3LjQ5LDEuNDkxIEwxMi41MDIsNi40OTEgTDEyLjUwMiw2LjQ5MSBaIE02LjUsNi40OTEgQzQuMDE0LDYuNDkxIDIsOC41MDUgMiwxMC45OTEgQzIsMTMuNDc2IDQuMDE0LDE1LjQ5MSA2LjUsMTUuNDkxIEM4Ljk4NSwxNS40OTEgMTEsMTMuNDc2IDExLDEwLjk5MSBDMTEsOC41MDUgOC45ODUsNi40OTEgNi41LDYuNDkxIEw2LjUsNi40OTEgWiIgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc0NTAwMCwgOC43NDU1MDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC43NDUwMDAsIC04Ljc0NTUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")',
      backgroundSize: "18px",
      backgroundPosition: "18px center",
      fontSize: "14px",
      padding: "0 24px 0 64px",
      boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24),\r\n    0 1px 0 0 rgba(255, 255, 255, 0.06) inset"
    },
    ".text-input": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      verticalAlign: "top",
      outline: "none",
      lineHeight: "1",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      fallbacks: [{
        boxSizing: "border-box"
      }, {
        fontWeight: "400"
      }, {
        margin: "0"
      }, {
        padding: "0"
      }, {
        color: "inherit"
      }, {
        border: "none"
      }],
      backgroundColor: "transparent",
      letterSpacing: "0",
      boxShadow: "none",
      width: "auto",
      fontSize: "16px",
      height: "31px"
    },
    ".text-input::-ms-clear": {
      display: "none"
    },
    ".text-input:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".text-input::-webkit-input-placeholder": {
      color: "#999"
    },
    ".text-input:-ms-input-placeholder": {
      color: "#999"
    },
    ".text-input::-ms-input-placeholder": {
      color: "#999"
    },
    ".text-input::placeholder": {
      color: "#999"
    },
    ".text-input:disabled::-webkit-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".text-input:disabled:-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".text-input:disabled::-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".text-input:disabled::placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".text-input:invalid": {
      border: "none",
      backgroundColor: "transparent",
      color: "#1f1f21"
    },
    ".text-input--underbar": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      verticalAlign: "top",
      outline: "none",
      lineHeight: "1",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }, {
        boxSizing: "border-box"
      }, {
        fontWeight: "400"
      }, {
        margin: "0"
      }, {
        padding: "0"
      }, {
        color: "inherit"
      }, {
        border: "none"
      }],
      backgroundColor: "transparent",
      letterSpacing: "0",
      boxShadow: "none",
      width: "auto",
      fontSize: "16px",
      height: "31px",
      borderBottom: "1px solid #ccc",
      borderRadius: "0"
    },
    ".text-input--underbar:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none",
      border: "none",
      backgroundColor: "transparent",
      borderBottom: "1px solid #ccc"
    },
    ".text-input--underbar:disabled::-webkit-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".text-input--underbar:disabled:-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".text-input--underbar:disabled::-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".text-input--underbar:disabled::placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".text-input--underbar:invalid": {
      border: "none",
      backgroundColor: "transparent",
      color: "#1f1f21",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }],
      borderBottom: "1px solid #ccc"
    },
    ".text-input--material": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#212121",
      background: "transparent",
      border: "none",
      verticalAlign: "middle",
      outline: "none",
      lineHeight: "1",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      fallbacks: [{
        verticalAlign: "top"
      }, {
        border: "none"
      }, {
        fontWeight: "400"
      }, {
        color: "inherit"
      }, {
        fontWeight: "400"
      }, {
        webkitFontSmoothing: "antialiased"
      }, {
        fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif'
      }],
      backgroundImage: "linear-gradient(to top, transparent 1px, #afafaf 1px)",
      backgroundSize: "100% 2px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundColor: "transparent",
      fontSize: "16px",
      paddingBottom: "2px",
      borderRadius: "0",
      height: "24px",
      webkitTransform: "translate3d(0, 0, 0)"
    },
    ".text-input--material__label": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      color: "#afafaf",
      position: "absolute",
      left: "0",
      top: "2px",
      fontSize: "16px",
      fallbacks: [{
        fontWeight: "400"
      }],
      pointerEvents: "none"
    },
    ".text-input--material__label--active": {
      color: "#f55613",
      webkitTransform: "translate(0, -75%) scale(0.75)",
      transform: "translate(0, -75%) scale(0.75)",
      webkitTransformOrigin: "left top",
      transformOrigin: "left top",
      transition: "transform 0.1s ease-in, color 0.1s ease-in,\r\n    -webkit-transform 0.1s ease-in",
      fallbacks: [{
        transition: "transform 0.1s ease-in, color 0.1s ease-in"
      }, {
        transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in"
      }]
    },
    ".text-input--material:focus": {
      backgroundImage: "linear-gradient(#f55613, #f55613),\r\n    linear-gradient(to top, transparent 1px, #afafaf 1px)",
      webkitAnimation: "material-text-input-animate 0.3s forwards",
      animation: "material-text-input-animate 0.3s forwards"
    },
    ".text-input--material::-webkit-input-placeholder": {
      color: "#afafaf",
      lineHeight: "20px"
    },
    ".text-input--material:-ms-input-placeholder": {
      color: "#afafaf",
      lineHeight: "20px"
    },
    ".text-input--material::-ms-input-placeholder": {
      color: "#afafaf",
      lineHeight: "20px"
    },
    ".text-input--material::placeholder": {
      color: "#afafaf",
      lineHeight: "20px"
    },
    "@keyframes material-text-input-animate": {
      "0%": {
        backgroundSize: "0% 2px, 100% 2px"
      },
      "100%": {
        backgroundSize: "100% 2px, 100% 2px"
      }
    },
    ".textarea": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "5px 5px 5px 5px",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "1px solid #ccc",
      lineHeight: "normal",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      verticalAlign: "top",
      resize: "none",
      outline: "none",
      fallbacks: [{
        color: "inherit"
      }, {
        border: "none"
      }, {
        fontWeight: "400"
      }, {
        padding: "0"
      }],
      fontSize: "16px",
      borderRadius: "4px",
      backgroundColor: "#efeff4",
      letterSpacing: "0",
      boxShadow: "none",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      width: "auto"
    },
    ".textarea:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".textarea::-webkit-input-placeholder": {
      color: "#999"
    },
    ".textarea:-ms-input-placeholder": {
      color: "#999"
    },
    ".textarea::-ms-input-placeholder": {
      color: "#999"
    },
    ".textarea::placeholder": {
      color: "#999"
    },
    ".textarea--transparent": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "5px 5px 5px 5px",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      verticalAlign: "top",
      resize: "none",
      outline: "none",
      fallbacks: [{
        color: "inherit"
      }, {
        border: "none"
      }, {
        fontWeight: "400"
      }, {
        padding: "0"
      }],
      paddingLeft: "0",
      paddingRight: "0",
      fontSize: "16px",
      borderRadius: "4px",
      backgroundColor: "transparent",
      letterSpacing: "0",
      boxShadow: "none",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      width: "auto"
    },
    ".textarea--transparent:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    ".textarea--transparent::-webkit-input-placeholder": {
      color: "#999"
    },
    ".textarea--transparent:-ms-input-placeholder": {
      color: "#999"
    },
    ".textarea--transparent::-ms-input-placeholder": {
      color: "#999"
    },
    ".textarea--transparent::placeholder": {
      color: "#999"
    },
    ".dialog": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "auto auto",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      position: "absolute",
      top: "50%",
      left: "50%",
      webkitTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      fallbacks: [{
        margin: "0"
      }],
      overflow: "hidden",
      minWidth: "270px",
      minHeight: "100px",
      textAlign: "left"
    },
    ".dialog-container": {
      height: "inherit",
      minHeight: "inherit",
      overflow: "hidden",
      borderRadius: "4px",
      backgroundColor: "#f4f4f4",
      webkitMaskImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC")',
      color: "#1f1f21"
    },
    ".dialog-mask": {
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      position: "absolute",
      top: "0",
      right: "0",
      left: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      fallbacks: [{
        backgroundColor: "#000000"
      }]
    },
    ".dialog--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      textAlign: "left",
      boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14),\r\n    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)"
    },
    ".dialog-container--material": {
      borderRadius: "2px",
      backgroundColor: "#ffffff",
      color: "#1f1f21"
    },
    ".dialog-mask--material": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      fallbacks: [{
        backgroundColor: "#000000"
      }]
    },
    ".alert-dialog": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "auto",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      position: "absolute",
      top: "50%",
      left: "50%",
      webkitTransform: "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      width: "270px",
      fallbacks: [{
        color: "inherit"
      }, {
        margin: "0"
      }],
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      overflow: "visible",
      maxWidth: "95%"
    },
    ".alert-dialog-container": {
      height: "inherit",
      paddingTop: "16px",
      overflow: "hidden"
    },
    ".alert-dialog-title": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "500",
      fontSize: "17px",
      fallbacks: [{
        fontWeight: "400"
      }],
      padding: "0 8px",
      textAlign: "center",
      color: "#1f1f21"
    },
    ".alert-dialog-content": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "4px 12px 8px",
      fontSize: "14px",
      minHeight: "36px",
      textAlign: "center",
      color: "#1f1f21"
    },
    ".alert-dialog-footer": {
      width: "100%"
    },
    ".alert-dialog-button": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0 8px",
      margin: "0",
      font: "inherit",
      color: "#f55613",
      background: "transparent",
      border: "none",
      lineHeight: "44px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textDecoration: "none",
      letterSpacing: "0",
      verticalAlign: "middle",
      fallbacks: [{
        color: "inherit"
      }, {
        lineHeight: "normal"
      }, {
        margin: "0"
      }, {
        padding: "0"
      }, {
        border: "none"
      }],
      borderTop: "1px solid #ddd",
      fontSize: "16px",
      display: "block",
      width: "100%",
      backgroundColor: "transparent",
      textAlign: "center",
      height: "44px",
      outline: "none"
    },
    ".alert-dialog-button:active": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fallbacks: [{
        backgroundColor: "#000000"
      }]
    },
    ".alert-dialog-button--primal": {
      fontWeight: "500"
    },
    ".alert-dialog-footer--rowfooter": {
      whiteSpace: "nowrap",
      display: "flex",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }],
      webkitFlexWrap: "wrap",
      flexWrap: "wrap"
    },
    ".alert-dialog-button--rowfooter": {
      webkitBoxFlex: "1",
      webkitFlex: "1",
      flex: "1",
      display: "block",
      width: "100%",
      borderLeft: "1px solid #ddd"
    },
    ".alert-dialog-button--rowfooter:first-child": {
      borderLeft: "none"
    },
    ".alert-dialog-mask": {
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      position: "absolute",
      top: "0",
      right: "0",
      left: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      fallbacks: [{
        backgroundColor: "#000000"
      }]
    },
    ".alert-dialog--material": {
      borderRadius: "2px",
      backgroundColor: "#ffffff"
    },
    ".alert-dialog-container--material": {
      padding: "22px 0 0 0",
      boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14),\r\n    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)"
    },
    ".alert-dialog-title--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      textAlign: "left",
      fontSize: "20px",
      fallbacks: [{
        fontWeight: "400"
      }],
      padding: "0 24px",
      color: "#31313a"
    },
    ".alert-dialog-content--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      textAlign: "left",
      fontSize: "16px",
      fallbacks: [{
        color: "#31313a"
      }, {
        fontWeight: "400"
      }],
      lineHeight: "20px",
      padding: "0 24px",
      margin: "24px 0 10px 0",
      minHeight: "0",
      color: "rgba(49, 49, 58, 0.85)"
    },
    ".alert-dialog-footer--material": {
      display: "block",
      padding: "0",
      height: "52px",
      boxSizing: "border-box",
      margin: "0",
      lineHeight: "1"
    },
    ".alert-dialog-button--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "500",
      textTransform: "uppercase",
      display: "inline-block",
      width: "auto",
      "float": "right",
      background: "none",
      border: "none",
      borderRadius: "2px",
      fontSize: "14px",
      fallbacks: [{
        fontWeight: "400"
      }],
      outline: "none",
      height: "36px",
      lineHeight: "36px",
      padding: "0 8px",
      margin: "8px 8px 8px 0",
      boxSizing: "border-box",
      minWidth: "50px",
      color: "#37474f"
    },
    ".alert-dialog-button--material:active": {
      backgroundColor: "initial",
      fallbacks: [{
        backgroundColor: "transparent"
      }]
    },
    ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
      border: "0"
    },
    ".alert-dialog-button--primal--material": {
      fontWeight: "500"
    },
    ".alert-dialog-mask--material": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      fallbacks: [{
        backgroundColor: "#000000"
      }]
    },
    ".popover": {
      position: "absolute",
      zIndex: "20001"
    },
    ".popover--bottom": {
      bottom: "0"
    },
    ".popover--top": {
      top: "0"
    },
    ".popover--left": {
      left: "0"
    },
    ".popover--right": {
      right: "0"
    },
    ".popover-mask": {
      left: "0",
      right: "0",
      top: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      fallbacks: [{
        backgroundColor: "#000000"
      }],
      position: "absolute",
      zIndex: "19999"
    },
    ".popover__content": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      display: "block",
      width: "220px",
      overflow: "auto",
      minHeight: "100px",
      maxHeight: "100%",
      backgroundColor: "white",
      borderRadius: "8px",
      fallbacks: [{
        color: "inherit"
      }],
      pointerEvents: "auto"
    },
    ".popover--top__content": {},
    ".popover--bottom__content": {},
    ".popover--left__content": {},
    ".popover--right__content": {},
    ".popover__arrow": {
      position: "absolute",
      width: "18px",
      height: "18px",
      webkitTransformOrigin: "50% 50% 0",
      transformOrigin: "50% 50% 0",
      backgroundColor: "transparent",
      backgroundImage: "linear-gradient(45deg, white, white 50%, transparent 50%)",
      borderRadius: "0 0 0 4px",
      margin: "0",
      zIndex: "20001"
    },
    ".popover--bottom__arrow": {
      webkitTransform: "translateY(6px) translateX(-9px) rotate(-45deg)",
      transform: "translateY(6px) translateX(-9px) rotate(-45deg)",
      bottom: "0",
      marginRight: "-18px"
    },
    ".popover--top__arrow": {
      webkitTransform: "translateY(-6px) translateX(-9px) rotate(135deg)",
      transform: "translateY(-6px) translateX(-9px) rotate(135deg)",
      top: "0",
      marginRight: "-18px"
    },
    ".popover--left__arrow": {
      webkitTransform: "translateX(-6px) translateY(-9px) rotate(45deg)",
      transform: "translateX(-6px) translateY(-9px) rotate(45deg)",
      left: "0",
      marginBottom: "-18px"
    },
    ".popover--right__arrow": {
      webkitTransform: "translateX(6px) translateY(-9px) rotate(225deg)",
      transform: "translateX(6px) translateY(-9px) rotate(225deg)",
      right: "0",
      marginBottom: "-18px"
    },
    ".popover--material": {},
    ".popover-mask--material": {
      backgroundColor: "transparent"
    },
    ".popover--material__content": {
      backgroundColor: "#fafafa",
      borderRadius: "2px",
      color: "#1f1f21",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)"
    },
    ".popover--material__arrow": {
      display: "none"
    },
    ".progress-bar": {
      position: "relative",
      height: "2px",
      display: "block",
      width: "100%",
      backgroundColor: "transparent",
      backgroundClip: "padding-box",
      margin: "0",
      overflow: "hidden",
      borderRadius: "4px"
    },
    ".progress-bar__primary, .progress-bar__secondary": {
      position: "absolute",
      backgroundColor: "#f55613",
      top: "0",
      bottom: "0",
      transition: "width 0.3s linear",
      zIndex: "100",
      borderRadius: "4px"
    },
    ".progress-bar__secondary": {
      backgroundColor: "#65adff",
      zIndex: "0"
    },
    ".progress-bar--indeterminate:before": {
      content: '""',
      position: "absolute",
      backgroundColor: "#f55613",
      top: "0",
      left: "0",
      bottom: "0",
      willChange: "left, right",
      webkitAnimation: "progress-bar__indeterminate 2.1s\r\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
      animation: "progress-bar__indeterminate 2.1s\r\n    cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
      borderRadius: "4px"
    },
    ".progress-bar--indeterminate:after": {
      content: '""',
      position: "absolute",
      backgroundColor: "#f55613",
      top: "0",
      left: "0",
      bottom: "0",
      willChange: "left, right",
      webkitAnimation: "progress-bar__indeterminate-short 2.1s\r\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
      animation: "progress-bar__indeterminate-short 2.1s\r\n    cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
      webkitAnimationDelay: "1.15s",
      animationDelay: "1.15s",
      borderRadius: "4px"
    },
    "@keyframes progress-bar__indeterminate": {
      "0%": {
        left: "-35%",
        right: "100%"
      },
      "60%": {
        left: "100%",
        right: "-90%"
      },
      "100%": {
        left: "100%",
        right: "-90%"
      }
    },
    "@keyframes progress-bar__indeterminate-short": {
      "0%": {
        left: "-200%",
        right: "100%"
      },
      "60%": {
        left: "107%",
        right: "-8%"
      },
      "100%": {
        left: "107%",
        right: "-8%"
      }
    },
    ".progress-bar--material": {
      height: "4px",
      backgroundColor: "transparent",
      borderRadius: "0"
    },
    ".progress-bar--material__primary, .progress-bar--material__secondary": {
      backgroundColor: "#f55613",
      borderRadius: "0"
    },
    ".progress-bar--material__secondary": {
      backgroundColor: "#e8875e",
      zIndex: "0"
    },
    ".progress-bar--material.progress-bar--indeterminate:before": {
      backgroundColor: "#f55613",
      borderRadius: "0"
    },
    ".progress-bar--material.progress-bar--indeterminate:after": {
      backgroundColor: "#f55613",
      borderRadius: "0"
    },
    ".progress-circular": {
      height: "32px",
      position: "relative",
      width: "32px",
      webkitTransform: "rotate(270deg)",
      transform: "rotate(270deg)",
      webkitAnimation: "none",
      animation: "none"
    },
    ".progress-circular__background, .progress-circular__primary, .progress-circular__secondary": {
      cx: "50%",
      cy: "50%",
      r: "40%",
      webkitAnimation: "none",
      animation: "none",
      fill: "none",
      strokeWidth: "5%",
      strokeMiterlimit: "10"
    },
    ".progress-circular__background": {
      stroke: "transparent"
    },
    ".progress-circular__primary": {
      strokeDasharray: "1, 200",
      strokeDashoffset: "0",
      stroke: "#f55613",
      transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".progress-circular__secondary": {
      stroke: "#65adff"
    },
    ".progress-circular--indeterminate": {
      webkitAnimation: "progress__rotate 2s linear infinite",
      animation: "progress__rotate 2s linear infinite",
      webkitTransform: "none",
      transform: "none"
    },
    ".progress-circular--indeterminate__primary": {
      webkitAnimation: "progress__dash 1.5s ease-in-out infinite",
      animation: "progress__dash 1.5s ease-in-out infinite"
    },
    ".progress-circular--indeterminate__secondary": {
      display: "none"
    },
    "@keyframes progress__rotate": {
      "100%": {
        webkitTransform: "rotate(360deg)",
        transform: "rotate(360deg)"
      }
    },
    "@keyframes progress__dash": {
      "0%": {
        strokeDasharray: "10%, 241.32%",
        strokeDashoffset: "0"
      },
      "50%": {
        strokeDasharray: "201%, 50.322%",
        strokeDashoffset: "-100%"
      },
      "100%": {
        strokeDasharray: "10%, 241.32%",
        strokeDashoffset: "-251.32%"
      }
    },
    ".progress-circular--material__background, .progress-circular--material__primary, .progress-circular--material__secondary": {
      strokeWidth: "9%"
    },
    ".progress-circular--material__background": {
      stroke: "transparent"
    },
    ".progress-circular--material__primary": {
      stroke: "#f55613"
    },
    ".progress-circular--material__secondary": {
      stroke: "#e8875e"
    },
    "ons-fab.fab, ons-speed-dial-item.fab, button.fab": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#ffffff",
      background: "transparent",
      border: "0 solid currentColor",
      lineHeight: "56px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      width: "56px",
      height: "56px",
      textDecoration: "none",
      fontSize: "25px",
      fallbacks: [{
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }],
      letterSpacing: "0",
      verticalAlign: "middle",
      textAlign: "center",
      backgroundColor: "#f55613",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
      transition: "all 0.1s linear"
    },
    "ons-fab.fab:active, ons-speed-dial-item.fab:active, button.fab:active": {
      boxShadow: "0 0 6 rgba(0, 0, 0, 0.12)",
      backgroundColor: "color-mod(#f55613 a(70%))",
      transition: "all 0.2s ease",
      fallbacks: [{
        boxShadow: "0 3px 6 rgba(0, 0, 0, 0.12)"
      }]
    },
    "ons-fab.fab:focus, ons-speed-dial-item.fab:focus, button.fab:focus": {
      outline: "0"
    },
    "ons-fab.fab:disabled, ons-fab.fab[disabled], ons-speed-dial-item.fab:disabled, ons-speed-dial-item.fab[disabled], button.fab:disabled, button.fab[disabled]": {
      backgroundColor: "color-mod(black alpha(50%))",
      boxShadow: "none",
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    "ons-fab.fab__icon, ons-speed-dial-item.fab__icon, button.fab__icon": {
      position: "relative",
      overflow: "hidden",
      height: "100%",
      width: "100%",
      display: "block",
      borderRadius: "100%",
      padding: "0",
      zIndex: "100",
      lineHeight: "56px"
    },
    "ons-fab.fab--material, ons-speed-dial-item.fab--material, button.fab--material": {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "rgba(255, 255, 255, 1)",
      background: "transparent",
      border: "0 solid currentColor",
      lineHeight: "56px",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      width: "56px",
      height: "56px",
      textDecoration: "none",
      fontSize: "25px",
      fallbacks: [{
        transition: "all 0.1s linear"
      }, {
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)"
      }, {
        backgroundColor: "#f55613"
      }, {
        color: "#ffffff"
      }, {
        color: "#ffffff"
      }, {
        lineHeight: "56px"
      }, {
        fontSize: "25px"
      }, {
        textDecoration: "none"
      }, {
        height: "56px"
      }, {
        width: "56px"
      }, {
        fontWeight: "400"
      }, {
        webkitFontSmoothing: "antialiased"
      }, {
        fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif'
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "normal"
      }],
      letterSpacing: "0",
      verticalAlign: "middle",
      textAlign: "center",
      backgroundColor: "#f55613",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
      transition: "all 0.2s ease-in-out"
    },
    "ons-fab.fab--material:active, ons-speed-dial-item.fab--material:active, button.fab--material:active": {
      boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4)",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      fallbacks: [{
        backgroundColor: "#ffffff"
      }],
      transition: "all 0.2s ease"
    },
    "ons-fab.fab--material:focus, ons-speed-dial-item.fab--material:focus, button.fab--material:focus": {
      outline: "0"
    },
    "ons-fab.fab--material__icon, ons-speed-dial-item.fab--material__icon, button.fab--material__icon": {
      position: "relative",
      overflow: "hidden",
      height: "100%",
      width: "100%",
      display: "block",
      borderRadius: "100%",
      padding: "0",
      zIndex: "100",
      lineHeight: "56px"
    },
    "ons-fab.fab--material:disabled, ons-fab.fab--material[disabled], ons-speed-dial-item.fab--material:disabled, ons-speed-dial-item.fab--material[disabled], button.fab--material:disabled, button.fab--material[disabled]": {
      backgroundColor: "color-mod(black alpha(50%))",
      boxShadow: "none",
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    },
    "ons-fab.fab--mini, ons-speed-dial-item.fab--mini, button.fab--mini": {
      width: "40px",
      height: "40px",
      lineHeight: "40px"
    },
    "ons-fab.fab--mini__icon, ons-speed-dial-item.fab--mini__icon, button.fab--mini__icon": {
      lineHeight: "40px"
    },
    "ons-fab.speed-dial__item, ons-speed-dial-item.speed-dial__item, button.speed-dial__item": {
      position: "absolute",
      webkitTransform: "scale(0)",
      transform: "scale(0)"
    },
    "ons-fab.fab--top__right, button.fab--top__right, .speed-dial.fab--top__right": {
      top: "20px",
      bottom: "auto",
      right: "20px",
      left: "auto",
      position: "absolute"
    },
    "ons-fab.fab--bottom__right, button.fab--bottom__right, .speed-dial.fab--bottom__right": {
      top: "auto",
      bottom: "20px",
      right: "20px",
      left: "auto",
      position: "absolute"
    },
    "ons-fab.fab--top__left, button.fab--top__left, .speed-dial.fab--top__left": {
      top: "20px",
      bottom: "auto",
      right: "auto",
      left: "20px",
      position: "absolute"
    },
    "ons-fab.fab--bottom__left, button.fab--bottom__left, .speed-dial.fab--bottom__left": {
      top: "auto",
      bottom: "20px",
      right: "auto",
      left: "20px",
      position: "absolute"
    },
    "ons-fab.fab--top__center, button.fab--top__center, .speed-dial.fab--top__center": {
      top: "20px",
      bottom: "auto",
      marginLeft: "-28px",
      left: "50%",
      right: "auto",
      position: "absolute"
    },
    "ons-fab.fab--bottom__center, button.fab--bottom__center, .speed-dial.fab--bottom__center": {
      top: "auto",
      bottom: "20px",
      marginLeft: "-28px",
      left: "50%",
      right: "auto",
      position: "absolute"
    },
    ".modal": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      whiteSpace: "nowrap",
      overflow: "hidden",
      wordSpacing: "0",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "inherit",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      fallbacks: [{
        backgroundColor: "#000000"
      }, {
        overflow: "hidden"
      }, {
        backgroundClip: "padding-box"
      }, {
        boxSizing: "border-box"
      }],
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      position: "absolute",
      left: "0",
      right: "0",
      top: "0",
      bottom: "0",
      width: "100%",
      height: "100%",
      display: "table",
      zIndex: "2147483647"
    },
    ".modal__content": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      whiteSpace: "normal",
      overflow: "hidden",
      wordSpacing: "0",
      padding: "0",
      margin: "0",
      font: "inherit",
      color: "#fff",
      background: "transparent",
      border: "none",
      lineHeight: "normal",
      fallbacks: [{
        whiteSpace: "nowrap"
      }, {
        color: "inherit"
      }, {
        backgroundClip: "padding-box"
      }, {
        boxSizing: "border-box"
      }],
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      display: "table-cell",
      verticalAlign: "middle",
      textAlign: "center"
    },
    ".select-input": {
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      padding: "0 20px 0 0",
      margin: "0",
      font: "inherit",
      color: "#1f1f21",
      background: "transparent",
      border: "none",
      verticalAlign: "top",
      outline: "none",
      lineHeight: "32px",
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        padding: "0"
      }, {
        border: "none"
      }, {
        color: "inherit"
      }, {
        lineHeight: "1"
      }, {
        border: "none"
      }],
      backgroundColor: "transparent",
      position: "relative",
      fontSize: "17px",
      height: "32px",
      borderColor: "#ccc",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      display: "inline-block",
      borderRadius: "0",
      backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right center",
      borderBottom: "none"
    },
    ".select-input::-ms-clear": {
      display: "none"
    },
    ".select-input::-webkit-input-placeholder": {
      color: "#999"
    },
    ".select-input:-ms-input-placeholder": {
      color: "#999"
    },
    ".select-input::-ms-input-placeholder": {
      color: "#999"
    },
    ".select-input::placeholder": {
      color: "#999"
    },
    ".select-input:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none",
      border: "none",
      backgroundColor: "transparent"
    },
    ".select-input:disabled::-webkit-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".select-input:disabled:-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".select-input:disabled::-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".select-input:disabled::placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999"
    },
    ".select-input:invalid": {
      border: "none",
      backgroundColor: "transparent",
      color: "#1f1f21"
    },
    ".select-input[multiple]": {
      height: "64px"
    },
    ".select-input--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      color: "#1f1f21",
      fontSize: "15px",
      backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="),\r\n    linear-gradient(\r\n      to top,\r\n      color-mod(black a(12%)) 50%,\r\n      color-mod(black a(12%)) 50%\r\n    )',
      backgroundSize: "auto, 100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right center, left bottom",
      border: "none",
      fallbacks: [{
        fontWeight: "400"
      }],
      webkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)"
    },
    ".select-input--material__label": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      color: "rgba(0, 0, 0, 0.81)",
      fallbacks: [{
        color: "#000000"
      }],
      position: "absolute",
      left: "0",
      top: "2px",
      fontSize: "16px",
      pointerEvents: "none"
    },
    ".select-input--material__label--active": {
      color: "rgba(0, 0, 0, 0.15)",
      fallbacks: [{
        transition: "transform 0.1s ease-in, color 0.1s ease-in"
      }, {
        transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in"
      }, {
        color: "#000000"
      }],
      webkitTransform: "translate(0, -75%) scale(0.75)",
      transform: "translate(0, -75%) scale(0.75)",
      webkitTransformOrigin: "left top",
      transformOrigin: "left top",
      transition: "transform 0.1s ease-in, color 0.1s ease-in,\r\n    -webkit-transform 0.1s ease-in"
    },
    ".select-input--material::-webkit-input-placeholder": {
      color: "rgba(0, 0, 0, 0.81)",
      fallbacks: [{
        color: "#000000"
      }],
      lineHeight: "20px"
    },
    ".select-input--material:-ms-input-placeholder": {
      color: "rgba(0, 0, 0, 0.81)",
      fallbacks: [{
        color: "#000000"
      }],
      lineHeight: "20px"
    },
    ".select-input--material::-ms-input-placeholder": {
      color: "rgba(0, 0, 0, 0.81)",
      fallbacks: [{
        color: "#000000"
      }],
      lineHeight: "20px"
    },
    ".select-input--material::placeholder": {
      color: "rgba(0, 0, 0, 0.81)",
      fallbacks: [{
        color: "#000000"
      }],
      lineHeight: "20px"
    },
    "@keyframes material-select-input-animate": {
      "0%": {
        backgroundSize: "0% 2px, 100% 2px"
      },
      "100%": {
        backgroundSize: "100% 2px, 100% 2px"
      }
    },
    ".select-input--underbar": {
      border: "none",
      borderBottom: "1px solid #ccc"
    },
    ".select-input--underbar:disabled": {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none",
      border: "none",
      backgroundColor: "transparent",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }],
      borderBottom: "1px solid #ccc"
    },
    ".select-input--underbar:disabled::-webkit-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".select-input--underbar:disabled:-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".select-input--underbar:disabled::-ms-input-placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".select-input--underbar:disabled::placeholder": {
      border: "none",
      backgroundColor: "transparent",
      color: "#999",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }]
    },
    ".select-input--underbar:invalid": {
      border: "none",
      backgroundColor: "transparent",
      color: "#1f1f21",
      fallbacks: [{
        backgroundColor: "transparent"
      }, {
        border: "none"
      }],
      borderBottom: "1px solid #ccc"
    },
    ".action-sheet": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      cursor: "default",
      position: "absolute",
      left: "10px",
      right: "10px",
      bottom: "10px",
      zIndex: "2"
    },
    ".action-sheet-button": {
      boxSizing: "border-box",
      height: "56px",
      fontSize: "20px",
      textAlign: "center",
      color: "#f55613",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      fallbacks: [{
        backgroundColor: "#ffffff"
      }],
      borderRadius: "0",
      lineHeight: "56px",
      border: "none",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      display: "block",
      width: "100%",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(\r\n    0deg,\r\n    rgba(0, 0, 0, 0.1),\r\n    rgba(0, 0, 0, 0.1) 100%\r\n  )"
    },
    ".action-sheet-button:first-child": {
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px"
    },
    ".action-sheet-button:active": {
      backgroundColor: "#e9e9e9",
      backgroundImage: "none"
    },
    ".action-sheet-button:focus": {
      outline: "none"
    },
    ".action-sheet-button:nth-last-of-type(2)": {
      borderBottomRightRadius: "12px",
      borderBottomLeftRadius: "12px",
      backgroundImage: "none"
    },
    ".action-sheet-button:last-of-type": {
      borderRadius: "12px",
      margin: "8px 0 0 0",
      backgroundColor: "#fff",
      backgroundImage: "none",
      fontWeight: "600"
    },
    ".action-sheet-button:last-of-type:active": {
      backgroundColor: "#e9e9e9"
    },
    ".action-sheet-button--destructive": {
      color: "#fe3824"
    },
    ".action-sheet-title": {
      boxSizing: "border-box",
      height: "56px",
      fontSize: "13px",
      color: "#8f8e94",
      textAlign: "center",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      fallbacks: [{
        backgroundColor: "#ffffff"
      }],
      lineHeight: "56px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      backgroundSize: "100% 1px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundImage: "linear-gradient(\r\n    0deg,\r\n    rgba(0, 0, 0, 0.1),\r\n    rgba(0, 0, 0, 0.1) 100%\r\n  )"
    },
    ".action-sheet-title:first-child": {
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px"
    },
    ".action-sheet-icon": {
      display: "none"
    },
    ".action-sheet-mask": {
      position: "absolute",
      left: "0",
      top: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      fallbacks: [{
        backgroundColor: "#000000"
      }],
      zIndex: "1"
    },
    ".action-sheet--material": {
      left: "0",
      right: "0",
      bottom: "0",
      boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14),\r\n    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)"
    },
    ".action-sheet-title--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      borderRadius: "0",
      backgroundImage: "none",
      textAlign: "left",
      height: "56px",
      lineHeight: "56px",
      fontSize: "16px",
      padding: "0 0 0 16px",
      color: "#686868",
      backgroundColor: "white",
      fallbacks: [{
        fontWeight: "400"
      }]
    },
    ".action-sheet-title--material:first-child": {
      borderRadius: "0"
    },
    ".action-sheet-button--material": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      borderRadius: "0",
      backgroundImage: "none",
      height: "52px",
      lineHeight: "52px",
      textAlign: "left",
      fontSize: "16px",
      padding: "0 0 0 16px",
      color: "#686868",
      fallbacks: [{
        fontWeight: "400"
      }],
      backgroundColor: "white"
    },
    ".action-sheet-button--material:first-child": {
      borderRadius: "0"
    },
    ".action-sheet-button--material:nth-last-of-type(2)": {
      borderRadius: "0"
    },
    ".action-sheet-button--material:last-of-type": {
      margin: "0",
      borderRadius: "0",
      fontWeight: "400",
      backgroundColor: "white"
    },
    ".action-sheet-icon--material": {
      display: "inline-block",
      "float": "left",
      height: "52px",
      lineHeight: "52px",
      marginRight: "32px",
      fontSize: "26px",
      width: "0.8em",
      textAlign: "center"
    },
    ".action-sheet-mask--material": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      fallbacks: [{
        backgroundColor: "#000000"
      }]
    },
    ".card": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.12)",
      borderRadius: "8px",
      backgroundColor: "white",
      boxSizing: "border-box",
      display: "block",
      margin: "8px",
      padding: "16px",
      textAlign: "left",
      wordWrap: "break-word"
    },
    ".card__content": {
      margin: "0",
      fontSize: "14px",
      lineHeight: "1.4",
      color: "#030303"
    },
    ".card__title": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      fallbacks: [{
        fontWeight: "400"
      }],
      fontSize: "20px",
      margin: "4px 0 8px 0",
      padding: "0",
      display: "block",
      boxSizing: "border-box"
    },
    ".card--material": {
      backgroundColor: "white",
      borderRadius: "2px",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400"
    },
    ".card--material__content": {
      fontSize: "14px",
      lineHeight: "1.4",
      color: "rgba(0, 0, 0, 0.54)",
      fallbacks: [{
        color: "#000000"
      }]
    },
    ".card--material__title": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      fontSize: "24px",
      margin: "8px 0 12px 0"
    },
    ".toast": {
      fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial",\r\n    "Lucida Grande", sans-serif',
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      fontWeight: "400",
      position: "absolute",
      zIndex: "2",
      left: "8px",
      right: "8px",
      bottom: "0",
      margin: "8px 0",
      borderRadius: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      fallbacks: [{
        display: "-webkit-flex"
      }, {
        display: "-webkit-box"
      }, {
        backgroundColor: "#000000"
      }],
      display: "flex",
      minHeight: "48px",
      lineHeight: "1.5",
      boxSizing: "border-box",
      padding: "16px 16px"
    },
    ".toast__message": {
      fontSize: "14px",
      color: "white",
      webkitBoxFlex: "1",
      webkitFlexGrow: "1",
      flexGrow: "1",
      textAlign: "left",
      margin: "0 16px 0 0",
      whiteSpace: "normal"
    },
    ".toast__button": {
      fontSize: "14px",
      color: "white",
      webkitBoxFlex: "0",
      webkitFlexGrow: "0",
      flexGrow: "0",
      webkitAppearance: "none",
      mozAppearance: "none",
      appearance: "none",
      border: "none",
      backgroundColor: "transparent",
      cursor: "default",
      textTransform: "uppercase"
    },
    ".toast__button:focus": {
      outline: "none"
    },
    ".toast__button:active": {
      opacity: "0.4"
    },
    ".toast--material": {
      left: "0",
      right: "0",
      bottom: "0",
      margin: "0",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      fallbacks: [{
        backgroundColor: "#000000"
      }],
      borderRadius: "0",
      padding: "16px 24px"
    },
    ".toast--material__message": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      margin: "0 24px 0 0"
    },
    ".toast--material__button": {
      fontFamily: '"Roboto", "Noto", sans-serif',
      webkitFontSmoothing: "antialiased",
      fontWeight: "400",
      color: "#f55613"
    },
    ".toolbar + .page__background": {
      top: "44px"
    },
    ".toolbar + .page__background + .page__content": {
      top: "44px",
      paddingTop: "0"
    },
    ".page-with-bottom-toolbar > .page__content": {
      bottom: "44px"
    },
    ".toolbar.toolbar--material + .page__background": {
      top: "56px"
    },
    ".toolbar.toolbar--material + .page__background + .page__content": {
      top: "56px",
      paddingTop: "0"
    },
    ".toolbar.toolbar--transparent + .page__background": {
      top: "0"
    },
    ".toolbar.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content, .toolbar.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
      top: "0",
      paddingTop: "44px"
    },
    ".toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content, .toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
      top: "0",
      paddingTop: "56px"
    },
    ".tabbar:not(.tabbar--top)": {
      paddingBottom: "0"
    },
    "@media (orientation: landscape)": {
      "html[onsflag-iphonex-landscape] .page__content": {
        paddingLeft: "44px",
        paddingRight: "44px",
        bottom: "0",
        paddingBottom: "21px"
      },
      "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .modal .page__content": {
        paddingLeft: "0",
        paddingRight: "0"
      },
      "html[onsflag-iphonex-landscape] .toolbar__left": {
        paddingLeft: "44px"
      },
      "html[onsflag-iphonex-landscape] .toolbar__right": {
        paddingRight: "44px"
      },
      "html[onsflag-iphonex-landscape] .bottom-bar": {
        paddingRight: "44px",
        paddingLeft: "44px",
        bottom: "0",
        boxSizing: "content-box",
        paddingBottom: "21px"
      },
      "html[onsflag-iphonex-landscape] .tabbar": {
        paddingLeft: "44px",
        paddingRight: "44px",
        width: "calc(100% - 88px)"
      },
      "html[onsflag-iphonex-landscape] .fab--bottom__left, html[onsflag-iphonex-landscape] .fab--bottom__center, html[onsflag-iphonex-landscape] .fab--bottom__right": {
        bottom: "21px"
      },
      "html[onsflag-iphonex-landscape] .fab--top__left, html[onsflag-iphonex-landscape] .fab--bottom__left": {
        left: "44px"
      },
      "html[onsflag-iphonex-landscape] .fab--top__right, html[onsflag-iphonex-landscape] .fab--bottom__right": {
        right: "44px"
      },
      "html[onsflag-iphonex-landscape] .action-sheet": {
        left: "calc((100vw - 100vh + 20px) / 2)",
        right: "calc((100vw - 100vh + 20px) / 2)",
        bottom: "33px"
      },
      "html[onsflag-iphonex-landscape] .toast": {
        left: "52px",
        right: "52px",
        bottom: "21px"
      },
      "html[onsflag-iphonex-landscape] .dialog .bottom-bar, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
        bottom: "0",
        boxSizing: "border-box",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
        bottom: "0",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
        bottom: "65px",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-landscape] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
        bottom: "44px",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-landscape] .tabbar:not(.tabbar--top)": {
        paddingBottom: "21px"
      },
      "html[onsflag-iphonex-landscape] .dialog .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content)": {
        bottom: "70px"
      },
      "html[onsflag-iphonex-landscape] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
        bottom: "49px"
      },
      "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset)": {
        marginLeft: "-44px",
        marginRight: "-44px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-header": {
        paddingLeft: "59px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item": {
        paddingLeft: "58px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
        right: "60px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
        paddingRight: "50px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
        paddingRight: "56px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
        paddingRight: "74px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)": {
        marginLeft: "0",
        marginRight: "0"
      },
      "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-header": {
        paddingLeft: "15px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item": {
        paddingLeft: "14px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
        right: "16px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
        paddingRight: "6px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
        paddingRight: "12px"
      },
      "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
        paddingRight: "30px"
      }
    },
    "@media (orientation: portrait)": {
      "html[onsflag-iphonex-portrait] .fab--top__left, html[onsflag-iphonex-portrait] .fab--top__center, html[onsflag-iphonex-portrait] .fab--top__right": {
        top: "64px"
      },
      "html[onsflag-iphonex-portrait] .fab--bottom__left, html[onsflag-iphonex-portrait] .fab--bottom__center, html[onsflag-iphonex-portrait] .fab--bottom__right": {
        bottom: "34px"
      },
      "html[onsflag-iphonex-portrait] .action-sheet": {
        bottom: "48px"
      },
      "html[onsflag-iphonex-portrait] .toast": {
        bottom: "34px"
      },
      "html[onsflag-iphonex-portrait] .toolbar": {
        top: "0",
        boxSizing: "content-box",
        paddingTop: "44px"
      },
      "html[onsflag-iphonex-portrait] .dialog .toolbar, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar": {
        top: "0",
        boxSizing: "border-box",
        paddingTop: "0"
      },
      "html[onsflag-iphonex-portrait] .bottom-bar": {
        bottom: "0",
        boxSizing: "content-box",
        paddingBottom: "34px"
      },
      "html[onsflag-iphonex-portrait] .dialog .bottom-bar, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
        bottom: "0",
        boxSizing: "border-box",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-portrait] .page__content": {
        top: "0",
        paddingTop: "44px",
        bottom: "0",
        paddingBottom: "34px"
      },
      "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
        top: "0",
        paddingTop: "0"
      },
      "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
        bottom: "0",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content": {
        top: "88px",
        paddingTop: "0"
      },
      "html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
        top: "44px",
        paddingTop: "0"
      },
      "html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
        bottom: "78px",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-portrait] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
        bottom: "44px",
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page_content": {
        top: "0",
        paddingTop: "88px"
      },
      "html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content": {
        top: "0",
        paddingTop: "44px"
      },
      "html[onsflag-iphonex-portrait] .tabbar--top": {
        paddingTop: "44px"
      },
      "html[onsflag-iphonex-portrait] .dialog .tabbar--top, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top": {
        paddingTop: "0"
      },
      "html[onsflag-iphonex-portrait] .tabbar--top__content": {
        top: "93px"
      },
      "html[onsflag-iphonex-portrait] .dialog .tabbar--top__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top__content, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top__content": {
        top: "49px"
      },
      "html[onsflag-iphonex-portrait] .tabbar:not(.tabbar--top):not(.tabbar--top)": {
        paddingBottom: "34px"
      },
      "html[onsflag-iphonex-portrait] .dialog .tabbar:not(.tabbar--top):not(.tabbar--top), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
        paddingBottom: "0"
      },
      "html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content)": {
        bottom: "83px"
      },
      "html[onsflag-iphonex-portrait] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
        bottom: "49px"
      }
    }
  }
};
/* harmony default export */ const styles_styles = (styles);
;// CONCATENATED MODULE: ./src/InitActivity.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var InitActivity = /*#__PURE__*/function (_Component) {
  _inherits(InitActivity, _Component);

  var _super = _createSuper(InitActivity);

  function InitActivity(props) {
    var _this;

    _classCallCheck(this, InitActivity);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      window.addEventListener("load", _this.windowLoadPush);
      jss_esm/* default.setup */.ZP.setup((0,jss_preset_default_esm/* default */.Z)());
      jss_esm/* default.createStyleSheet */.ZP.createStyleSheet(styles_styles).attach();
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      window.removeEventListener("load", _this.windowLoadPush);
    });

    _defineProperty(_assertThisInitialized(_this), "windowLoadPush", function () {
      if (typeof history.pushState === "function") {
        history.pushState("jibberish", null, null);

        window.onpopstate = function () {
          history.pushState("newjibberish", null, null);

          if (_this.state.currentPage === "main") {
            if (window, navigator.userAgent === "FPL") {
              window.Android.close();
            } else {
              window.close();
            }
          } else {
            _this.popPage();
          }
        };
      } else {
        var ignoreHashChange = true;

        window.onhashchange = function () {
          if (!ignoreHashChange) {
            ignoreHashChange = true;
            window.location.hash = Math.random();
          } else {
            ignoreHashChange = false;
          }
        };
      }
    });

    var routeConfig = react_onsenui.RouterUtil.init([{
      component: views_MainActivity,
      props: {
        key: "main",
        pushPage: function pushPage() {
          var _this2;

          return (_this2 = _this).pushPage.apply(_this2, arguments);
        }
      }
    }]);
    _this.state = {
      routeConfig: routeConfig,
      currentPage: "main"
    };
    return _this;
  }

  _createClass(InitActivity, [{
    key: "pushPage",
    value: function pushPage(page, key, lfData, antwort, nr) {
      var _this3 = this;

      var route = {
        component: page,
        props: {
          key: key,
          lfData: lfData,
          antwort: antwort,
          nr: nr,
          popPage: function popPage() {
            return _this3.popPage();
          },
          pushPage: function pushPage() {
            return _this3.pushPage.apply(_this3, arguments);
          }
        }
      };
      var routeConfig = this.state.routeConfig;
      routeConfig = react_onsenui.RouterUtil.push({
        routeConfig: routeConfig,
        route: route
      });
      this.setState({
        routeConfig: routeConfig
      });
      this.setState({
        currentPage: key
      });
    }
  }, {
    key: "popPage",
    value: function popPage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var routeConfig = this.state.routeConfig;
      routeConfig = react_onsenui.RouterUtil.pop({
        routeConfig: routeConfig,
        options: _objectSpread(_objectSpread({}, options), {}, {
          animationOptions: {
            duration: 0.2,
            timing: "ease-in",
            animation: "fade-md"
          }
        })
      });
      this.setState({
        routeConfig: routeConfig
      });
      this.setState({
        currentPage: "main"
      });
    }
  }, {
    key: "onPostPush",
    value: function onPostPush() {
      var routeConfig = react_onsenui.RouterUtil.postPush(this.state.routeConfig);
      this.setState({
        routeConfig: routeConfig
      });
    }
  }, {
    key: "onPostPop",
    value: function onPostPop() {
      var routeConfig = react_onsenui.RouterUtil.postPop(this.state.routeConfig);
      this.setState({
        routeConfig: routeConfig
      });
    }
  }, {
    key: "renderPage",
    value: function renderPage(route) {
      var props = route.props || {};
      return /*#__PURE__*/react.createElement(route.component, props);
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return /*#__PURE__*/react.createElement(react_onsenui.Toolbar, null, /*#__PURE__*/react.createElement("div", {
        className: "left"
      }, /*#__PURE__*/react.createElement(react_onsenui.BackButton, null)), /*#__PURE__*/react.createElement("div", {
        className: "center"
      }, "Stateless Navigator"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react.createElement(react_onsenui.Page, null, /*#__PURE__*/react.createElement(react_onsenui.RouterNavigator, {
        swipeable: true,
        swipePop: function swipePop(options) {
          return _this4.popPage(options);
        },
        routeConfig: this.state.routeConfig,
        renderPage: this.renderPage,
        onPostPush: function onPostPush() {
          return _this4.onPostPush();
        },
        onPostPop: function onPostPop() {
          return _this4.onPostPop();
        }
      }));
    }
  }]);

  return InitActivity;
}(react.Component);

/* harmony default export */ const src_InitActivity = (InitActivity);
// EXTERNAL MODULE: ./node_modules/onsenui/js/onsenui.js
var onsenui = __webpack_require__(394);
var onsenui_default = /*#__PURE__*/__webpack_require__.n(onsenui);
;// CONCATENATED MODULE: ./src/index.jsx
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Webpack CSS import





var Bootloader = /*#__PURE__*/function () {
  function Bootloader() {
    src_classCallCheck(this, Bootloader);

    src_defineProperty(this, "mountNode", document.querySelector("app"));

    console.log("App wird gestartet!");
  }

  src_createClass(Bootloader, [{
    key: "loadActivity",
    value: function loadActivity() {
      react_dom.render( /*#__PURE__*/react.createElement(src_InitActivity, null), this.mountNode);
    }
  }, {
    key: "init",
    value: function init() {
      onsenui_default().platform.select("android");
      this.loadActivity();
    }
  }]);

  return Bootloader;
}();

new Bootloader().init();

/***/ }),

/***/ 644:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 1", "key":"lf1"}), "fragen":[({"frage":"Was ist Logistik?", "nr":1, "antwort":"Die Logistik umfasst den Prozess der Planung, Steuerung, Durchführung und Kontrolle des gesamten Materialflusses und des dazugehörigen Informationsflusses."}), ({"frage":"Was versteht man unter einem Materialfluss in der Logistik?", "nr":2, "antwort":"Unter Materialfluss versteht man den Weg der Roh-, Hilfs-, und Betriebsstoffe, Handelswaren oder Betriebsmittel vom Lieferanten bis zum Kunden."}), ({"frage":"Was versteht man unter einem Informationsfluss in der Logistik?", "nr":3, "antwort":"Unter Informationsfluss versteht man den Weg der Weitergabe von Informationen, z.B. Daten über Lieferanten und Kunden."}), ({"frage":"Welche Informationsflüsse können unterschieden werden?", "nr":4, "antwort":"Es können vier Arten unterschieden werden\n- vorauslaufender Informationsfluss\n- begleitender Informationsfluss\n- nachlaufender Informationsfluss\n- zurücklaufender Informationsfluss"}), ({"frage":"Erläutern Sie die Aufgabe der Logistik.", "nr":5, "antwort":"Aufgabe der Logistik ist es dafür zu sorgen, dass\n- die richtige Ware\n- in der richtigen Menge\n- am richtigen Ort\n- zum richtigen Zeitpunkt\n- in der richtigen Qualität\n- zu den richtigen Kosten\n- zur Verfügung steht."}), ({"frage":"Nennen Sie die Teilbereiche der Logistik innerhalb der Unternehmenslogistik", "nr":6, "antwort":"Teilbereiche der Logistik innerhalb der Unternehmenslogistik\n- Beschaffungslogistik\n- Produktionslogistik\n- Distributionslogistik\n- Entsorgungslogistik\n- Lagerlogistik"}), ({"frage":"Nennen Sie drei Tätigkeiten im Wareneingang", "nr":7, "antwort":"z. B. \n- Ware annehmen\n- Ware kontrollieren\n- Ware sortieren\n- Ware vorverpacken\n- Ware etikettiren\n- Ware befördern\n- Lagerplatz auswählen\n- Ware einlagern"}), ({"frage":"Nennen Sie drei Tätigkeiten im Warenlager", "nr":8, "antwort":"z. B.\n- Ware kontrollieren\n- Ware pflegen\n- Ware umlagern\n- Ware sortieren\n- Auftrag kommissionen\n- Ladungseinheiten bilden\n- Ware verpacken\n- Ware befördern"}), ({"frage":"Nennen Sie drei Tätigkeiten im Warenausgang.", "nr":9, "antwort":"z.B.\n- Transportmittel beladen\n- Ladungssicherung vornehmen\n- dem Fahrer die Versandpapiere übergeben"}), ({"frage":"Nennen Sie drei Tätigkeiten in der Lagerverwaltung.", "nr":10, "antwort":"z.B.\n- Wareneingang erfassen\n- Lagerbestände verwalten\n- Kommissionierbelege erstellen\n- Lieferscheine und Frachtbriefe erstellen\n- Touren planen"}), ({"frage":"Definieren Sie den Begriff Arbeitsschutz.", "nr":11, "antwort":"Arbeitsschutz ist die Bewahrung des Menschen vor Gefahren und Beeinträchtigungen in Verbindung mit seiner Berufsarbeit."}), ({"frage":"Was regeln die DGUV Vorschriften?", "nr":12, "antwort":"Deutsche Gesetzliche Unfallversicherung, auch Unfallverhütungsvorschriften beinhalten Rechte und Pflichten des Arbeitgebers und -nehmers und regeln Anforderungen an Einrichtungen, Arbeitsmittel, Anlagen und Maschinen."}), ({"frage":"Wann muss eine Unterweisung erfolgen?", "nr":13, "antwort":"Die Unterweisung muss vor Beginn der Beschäftigung erfolgen und dann in angemessenen Abständen, aber mindestens einmal jährlich wiederholt werden."}), ({"frage":"Nennen Sie die vier wichtigen Bereiche, auf die in einer Erstunterweisung eingegangen werden sollte.", "nr":14, "antwort":"- Betriebsorganisation\n- Allgemeine Betriebsregelungen\n- Brandschutz und Erste Hilfe\n- Einweisung am Arbeitsplatz"}), ({"frage":"Welche Gliederung schlagen die Berufsgenossenschaften für die Betriebsanweisung vor?", "nr":15, "antwort":"Gliederung einer Betriebsanweisung\n- Anwendungsbereich\n- Gefahren für Mensch und Umwelt\n- Schutzmaßnahmen und Verhaltensregeln\n- Verhalten bei Störungen\n- Verhalten bei Unfällen, Erste Hilfe\n- sachgerechte Entsorgungs/Instandhaltung"}), ({"frage":"Welche Gliederung schlagen die Berufsgenossenschaften für die Betriebsanweisung vor?", "nr":16, "antwort":"Gliederung einer Betriebsanweisung:\n- Anwendungsbereich\n- Gefahren für Mensch und Umwelt\n- Schutzmaßnahmen und Verhaltensregeln\n- Verhalten bei Störungen\n- Verhalten bei Unfällen, Erste Hilfe\n- sachgerechte Entsorgung/Instandhaltung"}), ({"frage":"Nennen Sie drei Pflichtn des Arbeitnehmers zum Zwecke des Arbeitschutzes", "nr":17, "antwort":"z. B.\n- Anweisungen des Arbeitgebers einhalten\n- persönliche Schutzausrüstung (PSA) tragen\n- Arbeitsmittel und Einrichtungen nur bestimmungsgemäß verwenden\n- Meldepflicht von Arbeitsunfällen\n- Einrichtungen von Arbeitsstoffe nur mit Befugnis nutzen\n- Verbot von Alkohol- und Betäubungsmittelkonsum einhalten"}), ({"frage":"Nennen Sie drei Pflichten des Arbeitnehmers zum Zwecke des Arbeitsschutzes.", "nr":18, "antwort":"z.B.\n- Anweisungen des Arbeitsgebers einhalten\n- persönliche Schutzausrüstung tragen\n- Arbeitsmittel und Einrichtungen nur bestimmungsgemäß verwenden\n- Meldepflicht von Arbeitsunfällen einhalten\n- Einrichtungen und Arbeitsstoffe nur mit Befugnis nutzen\n- Verbot von Alkohol- und Betäubungsmittelkonsum einhalten"}), ({"frage":"Nennen Sie drei Anforderungen, die an die persönliche Schutzausrüstung (PSA) gestellt werden.", "nr":19, "antwort":"z. B.\n- Die PSA is grundsätzlich nur für den Gebrauch durch eine Person bestimmt.\n- Die PSA muss den Beschäftigten individuell passen.\n- Die PSA muss ausreichend vor der jeweiligen Gefahr schützen\n- Die PSA muss mit einer CE-Kennzeichnung versehen sein.\n- Die PSA muss sich stets in hygienisch einwandfreien befinden."}), ({"frage":"Geben Sie drei Beispiele für persönliche Schutzausrüstungen und erklären Sie, vor welchen Gefahren diese schützen", "nr":20, "antwort":"z. B.\n- Schutzschuhe: Schutz der Füße vor Überrollen, Einklemmen und das Hineintreten in spitze Gegenstände\n- Schutzhandschue: Schutz der Hände vor Verletzungen z. B. durcj Schneiden oder Quetschen\n- Schutzbrille: Schutz der Augen und des Gesichts vor Verletzungen z. B. durch wegfliegende Teile"}), ({"frage":"Geben Sie drei Beispiele für persönliche Schutzausrüstungen und erklären Sie, vor welchen Gefahren diese schützen sollen.", "nr":21, "antwort":"z.B.\n- Schutzschuhe: Schutz der Füße vor Überrollen, Einklemmen und das Hineintreten in spitze Gegenstände\n- Schutzhandschuhe: Schutz der Hände vor Verletzungen z.B. durch Schneiden und Quetschen\n- Schutzbrille: Schutz der Augen und des Gesichts vor Verletzungen z.B. durch wegfliegende Teile"}), ({"frage":"Was versteht man unter Rechtsfähigkeit?", "nr":22, "antwort":"Rechtsfähigkeit ist die Fähigkeit natürlicher und juristischer Personen, Träger von Rechten und Pflichten zu sein, wie z.B. dem Recht auf Eigentum oder der Pflicht, Steuern zu zahlen."}), ({"frage":"Wer ist eine natürliche Person; wann beginnt und wann endet die Rechtsfähigkeit?", "nr":23, "antwort":"Jeder Mensch ist eine natürliche Person. Seine Rechtsfähigkeit beginnt mit der Geburt und endet mit dem Tod."}), ({"frage":"Wann beginnt die volle Geschäftsfähigkeit von juristischen Personen?", "nr":24, "antwort":"Mit der Eintragung ist das jeweilige Register bzw. durch die staatliche Verleihung."}), ({"frage":"Geben Sie je zwei Beispiele für juristische Personen des öffentlichen Rechts und des Privatrechts.", "nr":25, "antwort":"Juristische Personen des Privatrechts sind nicht wirtschaftliche Vereine (z.B. Sportvereine), wirtschaftliche Vereinigungen (z.B. Kapitalgesellschaften) und Stiftungen.\nJuristische Personen des öffentlichen Rechts sind Kammern (z.B. IHK) oder Anstalten (z.B. Rundfunk- und Fernsehanstalten und Schulen)."}), ({"frage":"Wer ist geschäftsunfähig?", "nr":26, "antwort":"Geschäftsunfähig sind Personen im Alter von 0 bis unter 7 Jahren oder vorübergehend bzw. dauernd geistesgestörte Personen.\nRechtsgeschäfte sind nichtig (=nicht gültig)\nAusnahme: Kind handelt als Bote der Eltern"}), ({"frage":"Wer ist beschränkt geschäftsfähig?", "nr":27, "antwort":"Beschränkt geschäftsfähig sind Personen im Alter von 7 bis unter 18 Jahren.\nRechtsgeschäfte sind schwebend unwirksam, d.h. sie werden nur dann voll gültig, wenn der gesetzliche Vertreter zustimmt."}), ({"frage":"Wie erfolgt der Eigentumserwerb bei beweglichen Sachen?", "nr":28, "antwort":"Bei beweglichen Sachen erfolgt der Eigentumserwerb durch Einigung und Übergabe der Sache."}), ({"frage":"Erläutern Sie den Begriff Besitz und Eigentum.", "nr":29, "antwort":"Besitz ist die tatsächliche Herrschaft einer Person über eine Sache.\nEigentum ist die rechtliche Herrschaft einer Person über eine Sache."}), ({"frage":"Wie erfolgt der Eigentumserwerb bei beweglichen Sachen?", "nr":30, "antwort":"Bei beweglichen Sachen erfolgt der Eigentumserwerb durch Einigung und Übergabe der Sache."}), ({"frage":"Wie erfolgt der Eigentumserwerb bei unbeweglichen Sachen?", "nr":31, "antwort":"Bei unbeweglichen Sachen ist zur Eigentumsübertragung ein schriftlicher Vertrag mit notarieller Beurkundung zu verfassen. Die Übertragung des Eigentums erfolgt durch Einigung (Auflassung), bei Häusern und Grundstücken z.B. durch Eintragung des neuen Eigentümers ins Grundbuch."}), ({"frage":"Was versteht man unter einer Willenserklärung?", "nr":32, "antwort":"Unter Willenserklärung werden solche Äußerungen oder Handlungen verstanden, die darauf abzielen, ein Rechtsgeschäft herbeizuführen oder aber abzuändern."}), ({"frage":"Wie können Willenserklärungen abgegeben werden?", "nr":33, "antwort":"Willenserklärungen können durch ausdrückliche Äußerung (mündlich, schriftlich, telefonisch), schlüssiges Handeln (z.B. Einsteigen in Straßenbahn) und Schweigen abgegeben werden."}), ({"frage":"Nennen Sie zwei Beispiele für Rechtsgeschäfte, bei den denen die Abgabe der Willenserklärung an eine bestimmte Form gebunden ist.", "nr":34, "antwort":"Formgebundene Rechtsgeschäfte sind z. B. der Berufsausbildungsvertrag, des Testament oder der Grundstückskauf"}), ({"frage":"Unterscheiden Sie einseitige und mehrseitige Rechtsgeschäfte.", "nr":35, "antwort":"Einseitige Rechtsgeschäfte bestehen aus nur einer Willenserkärung.\nMehrseitige Rechtsgeschäfte kommen durch mindestens zwei übereinstimmende Willenserklärungen zustande."}), ({"frage":"Nennen Sie zwei Beipiele für Rechtsgeschäfte, bei denen die Abgabe der Willenserklärung an keine besondere Form gebunden ist.", "nr":36, "antwort":"Zu den formfreien Rechtsgeschäften zählen z.B. die Schenkung beweglicher Gegentstände und die meisten Kaufverträge des alltäglichen Lebens."}), ({"frage":"Nennen Sie zwei Beispiele für Rechtsgeschäfte, bei denen die Abgabe der Willenserklärung an eine bestimmte Form gebunden ist.", "nr":37, "antwort":"Formgebundene Rechtsgeschäfte sind z.B. der Berufsausbildungsvertrag, das Testament oder der Grundstückkauf."}), ({"frage":"Unterscheiden Sie einseitig empfangsbedürftige und einseitig nicht empfangsbedürftige Rechtsgeschäfte.", "nr":38, "antwort":"Einseitig empfangsbedürftige Rechtsgeschäfte:\nWerden erst dann rechtswirksam, wenn die Person, an die sie gerichtet sind, von ihnen Kenntnis erlangt (z.B. Kündigung).\n\nEinseitig nicht empfangsbedürftige Rechtsgeschäfte:\nPerson muss keine Kenntnis erlangen (z.B. Testament)."}), ({"frage":"Unterscheiden Sie mehrseitig einseitig verpflichtende und mehrseitig zweiseitig verpflichtende Rechtsgeschäfte.", "nr":39, "antwort":"Mehrseitig einseitig verpflichtende Rechtsgeschäfte:\nPflichten entstehen nur für eine Vertragsseite (z.B. Schenkung)\n\nMehrseitig zweiseitig verpflichtende Rechtsgeschäfte:\nPflichten entstehen für beide Vertragsseiten (z.B. Kaufvertrag, Ausbildungsvertrag)."}), ({"frage":"Unterscheiden Sie zwischen der allgemeinen und der bestimmten Anfrage.", "nr":40, "antwort":"Durch allgemeine Anfrage möchte sich der mögliche Käufer Informationen bezüglich des allgemeinen Sortiments und der gängigen Konditionen eines Anbieters einholen.\nDie bestimmte Anfrage richtet sich dagegen auf ein bestimmtes Produkt bzw. eine bestimmte Dienstleistung."}), ({"frage":"Wie kommt ein Kaufvertrag zustande?", "nr":41, "antwort":"Ein Kaufvertrag kommt durch zwei übereinstimmende Willenserklärungen zustande:\nden Antrag und dessen Annahme."}), ({"frage":"Was ist ein Angebot?", "nr":42, "antwort":"Ein Angebot ist ein Antrag auf Vertragsabschluss. Es ist eine rechtlich verbindliche Willenserklärung und an eine bestimmte Person oder Personengruppe gerichtet, jedoch nicht an die Allgemeinheit (z.B. Zeitungsanzeigen)."}), ({"frage":"Wie lange gilt ein Angebot unter Anwesenden?", "nr":43, "antwort":"Ein Angebot unter Anwesenden gilt nur so lange, wie das Gespräch dauert."}), ({"frage":"Nennen Sie zwei Beispiele für Freizeichnungsklauseln.", "nr":44, "antwort":"z.B.\n- unverbindlich (Änderung/Widerruf des Angebots ist jederzeit möglich)\n- Preis freibleibend (angegebener Preis könnte sich noch ändern)\n- Solange der Vorrat reicht (Preis und Lieferzeit stehen fest, aber nur, bis angebotene Menge ausverkauft ist)"}), ({"frage":"Welche Verpflichtungen ergeben sich aus einem Kaufvertrag für den Verkäufer?", "nr":45, "antwort":"- Lieferung einwandfreier Ware\n- pünktlich Lieferung der Ware"}), ({"frage":"Welche Verpflichtungen ergeben sich aus einem Kaufvertrag für den Käufer?", "nr":46, "antwort":"- Abnahme der Ware\n- Bezahlung der Ware"}), ({"frage":"Nennen Sie drei Warenbegleitpapiere (Transportpapiere) mit dem dazugehörigen Verkehrsträger.", "nr":47, "antwort":"z.B.\n- Lieferschein -> Lkw des Lieferanten\n- Frachtbrief/Lieferschein -> Lkw einer Spedition\n- Paketschein oder beleglos mit Barcodelabel oder Transportlabel -> KEP-Dienste und Post\n- Bahnfrachtbrief -> Bahn\n- Ladeschein -> Binnenschiff\n- Konnossement -> Seeschiff\n- Luftfrachtbrief -> Flugzeug"}), ({"frage":"Welche Prüfverfahren können bei der Warenprüfung unterschieden werden? Nennen und erläutern Sie diese", "nr":48, "antwort":"Zerstörungsfreies Prüfverfahren:\nHierbei wird die Ware nicht beschädigt, z. B. durch Zählen, Messen und Wiegen.\n\nZerstörendes Prüfverfahren:\nHierbei wird die Ware in der Regel veschädigt bzw. völlig zerstört. Durchgeführt werden z. B. Crash-, Brand-, Bruch-, und Belastungstests"}), ({"frage":"Was versteht man unter der Bildung \"logistischer Einheiten\" im Wareneingang", "nr":49, "antwort":"Die Waren werden so zusammengestellt und verpackt, dasss die Lagereinheit gleich der Kommissioniereinheiten und diese gleich der Bestelleinheit der Kunden ist."}), ({"frage":"Nennen Sie die Funktionen eines Lieferscheins.", "nr":50, "antwort":"Kontrollfunktion:\nAbgleich des der Bestellung mithilfe des Lieferscheins.\n\nBeweisfunktion:\nUnterschrift auf dem Lieferschein von Überbringer und Empfänger bestätigt ordnungsgemäße und einwandfreie Zustellung der Ware."}), ({"frage":"Welche Kaufvertragsstörungen können unterschieden werden?", "nr":51, "antwort":"Kaufvertragsstörungen\n- Mngelhafte Lieferung\n- Lieferungsverzug\n- Annahmeverzug\n- Zahlungsverzug"}), ({"frage":"Welche Mangelarten können nach der Erkennbarkeit unterschieden werden?", "nr":52, "antwort":"Mangearten nach der Erkennbarkeit\n- offender Mangel\n- versteckter Mangel\n- arglistih verschwiegerner Mangel"}), ({"frage":"Was ist ein Rechtsmangel?", "nr":53, "antwort":"Der Verkäufer kann dem Käufer nicht das Eigentum an der Ware verschaffen. Bei de gelieferten Ware handelt es sich z. B. um Hehlerware oder verpfändete Ware."}), ({"frage":"Was bedeutet **NVE**?", "nr":54, "antwort":"Nummer der Versandeinheit ist eine weltweit eindeutige Nummer zur Identifikation von Versandeinheiten."}), ({"frage":"Was ist die **GTIN**?", "nr":55, "antwort":"Die GTIN (Global Trade Item Number) ist die globale Artikelidentnummer. Sie setzt sich zusammen aus der Nummer für das Hestellungsland, der Herstellernummer, der Artikelnummer und der Prüfziffer."}), ({"frage":"Was ist ein Barcode?", "nr":56, "antwort":"Ein Barcode ist eine maschinenlesbare Schrift und besteht aus verschieden breiten, parallelen Strichen und Lücken, in denen Daten verschlüsselt sind."}), ({"frage":"Welche Barcodes können unterschieden werden?", "nr":57, "antwort":"1-D-Code:\nInformationen sind nur waagrecht codiert, als eindimensional (z.B. GTIN, Code 128)\n2-D-Codes:\nInformationen sind waagrecht und senkrecht codiert, also zweidimensional (z.B. QR-Code, Code 49)"}), ({"frage":"Was versteht man unter der Bildung „logistischer Einheiten\" im Wareneingang?", "nr":58, "antwort":"Die Waren werden so zusammengestellt und verpackt, dass die Lagereinheit gleich der Kommissionierheit und diese gleich der Bestelleinheit der Kunden ist."}), ({"frage":"Welche Arbeiten erfolgen nach der Warenkontrolle?", "nr":59, "antwort":"- Erstellung eines Wareneingangsscheins\n- Bildung logistischer Einheiten\n- Bestandserfassung\n- Freigabe der Ware"}), ({"frage":"Welche Prüfverfahren können bei der Warenprüfung unterschieden werden? Nennen und erläutern Sie diese.", "nr":60, "antwort":"Zerstörungsfreies Prüfverfahren:\nHierbei wird die Ware nicht beschädigt, z.B. durch Zählen, Messen und Wiegen.\nZerstörendes Prüfverfahren:\nHierbei wird die Ware in der Regel beschädigt bzw. völlig zerstört. Durchgeführt werden z.B. Crash-, Brand-, Bruch- und Belastungstests."}), ({"frage":"Welche Arten der Warenprüfung können unterschieden werden? Nennen und erläutern Sie diese.", "nr":61, "antwort":"Stichprobenartige Kontrolle:\nNur einzelne Packstücke werden kontrolliert.\nVollständige Kontrolle:\nDie komplette Lieferung wird kontrolliert."}), ({"frage":"Was ist die Warenkontrolle?", "nr":62, "antwort":"Die Warenkontrolle erfolgt unverzüglich nach der Warenannahme, hierbei wird die Ware auf offene Mängel überprüft:\n- Identität\n- Quantität\n- Beschaffenheit\n- Qualität"}), ({"frage":"Wie sollte mit Ware mit Transportschäden umgegangen werden?", "nr":63, "antwort":"Sie sollte separiert werden, d.h. von den anderen Waren getrennt gelagert und evtl. mit einem Sperrvermerk versehen werden, bis geklärt ist, ob die Ware selbst auch Mängel aufweist."}), ({"frage":"Welche Rügefristen gelten bei Transportschäden?", "nr":64, "antwort":"Offene Mängel müssen sofort bei der Anlieferung dem Frachtführer/Fahrer angezeigt werden.\n\nVersteckte Mängel sind unverzüglich nach Entdeckung, aber innerhalb von 7 Tagen nach Anlieferung dem Frachtführer anzuzeigen."}), ({"frage":"Nennen Sie drei Möglichkeiten zur Dokumentation festgestellter Transportschäden im Wareneingang.", "nr":65, "antwort":"z.B.\n- Eintragung im Lieferschein oder Frachtbrief\n- Tatbestandsaufnahme\n- Reklamationsmeldung\n- Fotos und Skizzen\n- Transportschadenbericht\n- Heranziehung von Zeugen"}), ({"frage":"Nennen Sie drei mögliche Beschädigungen an EUR-Paletten.", "nr":66, "antwort":"z.B.\n- abgesplittertes Boden- oder Deckenrandbrett\n- Markierungen fehlen\n- Bretter fehlen\n- Bretter sind gebrochen\n- fehlender Klotz\n- starke Absplitterungen oder morsches und faules Holz\n- starke Verunreinigungen\n- Reparaturen mit unzulässigen Bauteilen"}), ({"frage":"Wer haftet für die im Wareneingang festgestellten Transportschäden, und wer haftet für festgestellte Sachschäden?", "nr":67, "antwort":"Für Transportschäden haftet der Frachtführer, und für Sachschäden haftet der Absender."}), ({"frage":"Welche Kontrollen sind in Anwesenheit des Zustellers durchzuführen?", "nr":68, "antwort":"Folgende Kontrollen sind in Anwesenheit des Zustellers durchzuführen:\n- Kontrolle der Lieferanschrift\n- Kontrolle der Menge der Packstücke\n- Kontrolle der äußerlichen Unversehrtheit der Packstücke\n- Kontrolle der Mehrwegverpackungen auf Unversehrtheit\n- Quittierung der Warenannahme durch Unterschrift und Stempel"}), ({"frage":"Was ist der Frachtbrief?", "nr":69, "antwort":"Der Frachtbrief wird vom Absender erstellt und beweist das Zustandekommen eines Frachtvertrages zwischen Absender und Frachtführer."})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 997:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 2", "key":"lf2"}), "fragen":[({"frage":"Nennen Sie die Aufgaben der Lagerhaltung.", "nr":1, "antwort":"- Sicherungsaufgabe\n- Ausgleichsaufgabe\n- Umformungsaufgabe\n- Spekulationsaufgabe\n- Veredelungsaufgabe"}), ({"frage":"Erläutern Sie die Sicherungsaufgabe.", "nr":2, "antwort":"Güter werden gelagert, um den Produktionsprozess gegen Störungen bei der Warenbeschaffung zu sichern und eine stetige Lieferbereitschaft zu gewährleisten."}), ({"frage":"Erläutern Sie die Ausgleichsaufgabe.", "nr":3, "antwort":"Güter werden gelagert, um einen zeitlichen und mengenmäßigen Ausgleich zwischen Warenbeschaffung, Produktion und Absatz zu erreichen."}), ({"frage":"Erläutern Sie die Umformungsaufgabe.", "nr":4, "antwort":"Güter werden in großen Mengen und Behältern angeliefert und müssen dann in kleinere bedarfsgerechte Mengen und Portionen umgeformt werden."}), ({"frage":"Erläutern Sie die Spekulationsfunktion.", "nr":5, "antwort":"Güter werden gelagert, um mit Kosten- und Preisvorteilen zu spekulieren."}), ({"frage":"Erläutern Sie die Veredelungsaufgabe.", "nr":6, "antwort":"Erst durch die Lagerung gewinnen die Güter die gewünschte Reife und Qualität."}), ({"frage":"Nennen Sie die Grundsätze ordnungsgemäßer Lagerhaltung.", "nr":7, "antwort":"- Sauberkeit\n- Geräumigkeit\n- Übersichtlichkeit\n- artgerechte Lagerung\n- sachgerechte Lagerhaltung"}), ({"frage":"Nennen Sie mindestens vier Gefahren, vor denen Güter während der Lagerung geschützt werden sollten.", "nr":8, "antwort":"z.B.\n- Sonne/Licht\n- Geschmacksverlust\n- Feuchtigkeit\n- Schädlinge\n- Wärme/Kälte\n- Austrocknung"}), ({"frage":"Welche Lagerarten können entsprechend der Güterarten und Eigenschaften unterschieden werden? Nennen Sie vier Lagerarten.", "nr":9, "antwort":"z.B.\n- Verschlusslager\n- Kleinteilelager\n- Schüttgutlager\n- Stückgutlager\n- temperaturgeführtes Lager\n- Sperrigwarenlager\n- Gefahrstofflager"}), ({"frage":"Was sind Rohstoffe?", "nr":10, "antwort":"Rohstoffe sind Stoffe, die unmittelbar in das zu fertigende Produkt eingehen und dessen Hauptbestandteil bilden, z.B. Holz bei einem Kleiderschrank."}), ({"frage":"Was sind Betriebsstoffe?", "nr":null, "antwort":"Betriebsstoffe sind Stoffe, die nicht direkt in das zu fertigende Produkt eingehen, aber den Produktionsprozess in Gang halten, z.B. Benzin, Schmieröl oder Strom."}), ({"frage":"Was sind Hilfstoffe?", "nr":11, "antwort":"Hilfstoffe sind Stoffe, die in das zu fertigende Produkt eingehen, aber nur eine Hilfsfunktion haben, z.B. Schrauben, Leim, Farben und Lacke."}), ({"frage":"Nennen Sie zwei Beispiele für ein Sonderlager im Industriebetrieb.", "nr":12, "antwort":"z.B.\n- Ersatzteilelager\n- Werkzeuglager\n- Büromateriallager\n- Packmittellager"}), ({"frage":"Welche Lagerarten können im Industriebetrieb unterschieden werden?", "nr":13, "antwort":"- Roh-, Hilfs- und Betriebsstofflager\n- Zwischenlager\n- Fertigwarenlager\n- Handlager\n- Sonderlager"}), ({"frage":"Welche Lagerarten können im Großhandel unterschieden werden?", "nr":14, "antwort":"- Auslieferungslager\n- Kommissionslager"}), ({"frage":"Was ist ein Kommissionslager?", "nr":15, "antwort":"Das Kommissionslager ist ein Lager des Lieferanten beim Kunden, aus dem sich der Kunde die benötigte Ware entnimmt."}), ({"frage":"Nennen Sie drei Maßnahmen, um Diebstählen im Lager vorzubeugen.", "nr":16, "antwort":"z.B.\n- übersichtliche Lagerung\n- Unwickeln der Paletten mit Stretchfolie\n- Durchführen von Kontrollen\n- Alarmanlagen\n- elektronische Etiketten"}), ({"frage":"Welche Lagerarten können im Einzelhandel unterschieden werden?", "nr":17, "antwort":"- Verkaufslager\n- Reservelager"}), ({"frage":"Welche Lagerarten können in der Spedition unterschieden werden?", "nr":18, "antwort":"- Auslieferungslager\n- Umschlaglager"}), ({"frage":"Nennen Sie je zwei Vor- und Nachteile eines zentralen Lagers.", "nr":19, "antwort":"Vorteile sind z.B.\n- Gesamtbedarf leichter feststellbar\n- niedrigere Kapitalbindung\n- höhere Flächen-/Raumausnutzung\n- größere Einkäufe senken die Beschaffungskosten\n\nNachteile sind z.B.\n- längere Transportwege\n- höhere Transportkosten\n- längere Transportzeiten"}), ({"frage":"Nennen Sie je zwei Vor- und Nachteile eines dezentralen Lagers.", "nr":20, "antwort":"Vorteile sind z.B.\n- leichtere Abstimmung\n- schnellerer Informationsfluss\n- kürzere Transportwege\n- geringere Transportkosten\n- kürzere Transportzeiten\n\nNachteile sind z.B.\n- höhere Kosten für Einrichtung\n- höhere Kosten für Warenvorräte\n- höherer Personalbedarf"}), ({"frage":"Welche Lagerarten können nach dem Witterungsschutz unterschieden werden?", "nr":21, "antwort":"- offenes Lager\n- halboffenes Lager\n- geschlossenes Lager"}), ({"frage":"Nennen Sie drei Gründe für die Fremdlagerung bei einem gewerblichen Lagerhalter oder einer Spedition.", "nr":22, "antwort":"z.B.\n- als Spitzenausgleich bei schwankendem Bestand (z.B. Saisonware)\n- bei fehlenden Lagerkapazitäten\n- bei fehlenden besonderen Einrichtungen (z.B. Kühllager, Gefahrstofflager)\n- zur Nutzung des Know-How des Lagerhalters"}), ({"frage":"Wie lassen sich fixe Kosten und variable Kosten unterscheiden?", "nr":23, "antwort":"Fixe Kosten:\nSie sind über einen bestimmten Zeitraum gleich, unabhängig von der eingelagerten Menge, z.B. Miete, Versicherungen, Gehälter.\n\nVariable Kosten:\nSie sind abhängig von der eingelagerten Menge, z.B. Energiekosten, Instandhaltungskosten, Überstundenzuschläge."}), ({"frage":"Welche Kosten fallen bei der Eigenlagerung und welche bei der Fremdlagerung an?", "nr":24, "antwort":"Eigenlagerung:\nFixe Kosten und variable Kosten\n\nFremdlagerung:\nNur variable Kosten"}), ({"frage":"Was ist die kritische Lagermenge?", "nr":25, "antwort":"Die kritische Lagermenge ist die Menge bei der die Kosten der Eigenlagerung und die Kosten der Fremdlagerung gleich hoch sind."}), ({"frage":"Wie wird die kritische Menge berechnet?", "nr":26, "antwort":"Kosten Fremdlagerung = Kosten Eigenlagerung\nz.B. 40 x = 9000 + 25 X | - 25 x\n15 x = 9000 | : 15\nx = 600\nLiegt die geplante Lagermenge unterhalb der kritischen Lagermenge, dann ist die Fremdlagerung günstiger, liegt sie oberhalb, dann ist die Eigenlagerung günstiger."}), ({"frage":"Welche Lagerscheinarten können unterschieden werden?", "nr":27, "antwort":"- Inhaberlagerschein\n- Namenslagerschein\n- Orderlagerschein"}), ({"frage":"Was versteht man unter „Outsourcing\"?", "nr":28, "antwort":"Unter Outsourcing versteht man die Ausgliederung von Unternehmensleistungen, die bisher innerhalb des Unternehmens erbracht wurden, an Fremdfirmen, sogenannte Logistikdienstleister."}), ({"frage":"Das Lager lässt sich entsprechend dem Durchlauf der Güter in verschiedene Funktionsbereiche einteilen. Welche sind das?", "nr":29, "antwort":"- Wareneingangsbereich\n- Lagerbereich\n- Kommissionierbereich\n- Verpackungsbereich\n- Warenausgangsbereich\n- Lagerverwaltung"}), ({"frage":"Welches sind die häufigsten Anordnungsformen von Wareneingangs- und Warenausgangsbereich im Lagergebäude?", "nr":30, "antwort":"- I-Layout\n- U-Layout\n- L-Layout"}), ({"frage":"Was versteht man unter dem „I-Layout\"?", "nr":31, "antwort":"Das I-Layout ist eine Anordnungsform von Wareneingangs- und Warenausgangsbereich im Lagergebäude. Beim I-Layout durchläuft die Ware geradlinig das gesamte Lager vom Wareneingang bis zum Warenausgang."}), ({"frage":"Nach welchen Kriterien kann die Aufteilung des Lagerbeichs in Lagerzonen erfolgen? Nennen Sie drei Kriterien.", "nr":32, "antwort":"z.B.\n- nach dem Gewicht und dem Volumen der Güter\n- nach der Umschlagshäufigkeit der Güter\n- nach dem Wert der Güter\n- nach der Empfindlichkeit der Güter\n- nach der Gefährlichkeit der Güter"}), ({"frage":"Was versteht man unter einer numerischen Location nach dem dekadischen Prinzip?", "nr":33, "antwort":"Numerisch bedeutet, dass das Lagerplatznummernsystem nur aus Zahlen besteht.\nDekadisch bedeutet, dass die einzelnen Nummern immer zweistellig sind, z.B. 03 02 05"}), ({"frage":"Welche beiden Wegstrategien können unterschieden werden?", "nr":34, "antwort":"Rundgangstrategie und Stichgangstrategie"}), ({"frage":"Welche Verfahren gibt es zur Berechnung der Prüfziffer?", "nr":35, "antwort":"- Modulo-11-Verfahren (bis 10 Stellen)\n- Modulo-10-Verfahren (11 oder mehr Stellen)"}), ({"frage":"Was ist ein Doppelspiel?", "nr":36, "antwort":"Ein Regalbediengerät nimmt auf der Hinfahrt eine Einlagerung und auf der Rückfahrt gleichzeitig eine Auslagerung vor."}), ({"frage":"Erläutern Sie das Festplatzsystem und das Freiplatzsystem.", "nr":37, "antwort":"Beim Festplatz wird jedem Artikel ein eigener, fester Lagerplatz zugeordnet.\nBeim Freiplatzsystem werden die Artikel dort eingelagert, wo gerade ein freier Lagerplatz vorhanden ist."}), ({"frage":"Nennen Sie je drei Vor- und Nachteile des Festplatzsystems.", "nr":38, "antwort":"Vorteile sind z.B.\n- Mitarbeiter kennen die Einlagerungsplätze der einzelnen Artikel\n- kein EDV-System erforderlich\n- Verkürzung der Wegzeiten durch Einlagerung der Artikel nach der Gängigkeit\n\nNachteile sind z.B.\n- geringe Ausnutzung des Lagerfachvolumens bei geringem Bestand\n- hoher Änderungsaufwand bei Neubelegung von Fächern\n- Leerplätze bei Wegfall von Artikeln"}), ({"frage":"Nennen Sie je drei Vor- und Nachteile des Freiplatzsystems.", "nr":39, "antwort":"Vorteile sind z.B.\n- bessere Ausnutzung der Lagerfläche\n- Sortiments- und Mengenänderungen sind problemlos möglich\n- Mitarbeiter müssen sich keine Lagerplätze merken\n\nNachteile sind z.B.\n- EDV-System erforderlich\n- Auffinden von Lagerplätzen fast nur mithilfe von EDV möglich\n- Gefahr des völligen Stillstands bei Ausfall der EDV-Anlage"}), ({"frage":"Nennen und erläutern Sie die drei Einlagerungsgrundsätze.", "nr":40, "antwort":"FIFO-Prinzip (First-In-First-Out):\nZuerst eingelagerte Ware wird auch als erstes wieder ausgelagert.\nLIFO-Prinzip (Last-In-First-Out):\nZuletzt eingelagerte Ware wird als erstes wieder ausgelagert.\nHIFO-Prinzip (Highest-In-First-Out):\nRechnerisch wird so getan, als ob die am teuersten erworbenen Artikel als erstes verbraucht werden.\nFEFO-Prinzip (First-Expired-First-Out)"}), ({"frage":"Berechnung der Prüfziffer durch Module-11-Verfahren und Module-10-Verfahren.", "nr":41, "antwort":"Modulo-11-Verfahren:\nFaktor von rechts nach links 2, 3, 4, 5, uws.\n\nModule-10-Verfahren:\nFaktor von rechts nach links 3, 1, 3, 1, 3, usw."}), ({"frage":"Was versteht man unter dem Begriff Komplettierung?", "nr":42, "antwort":"Das Zusammenfassen von Sets bzw. Kombinationspackungen bezeichnet man als Komplettierung."}), ({"frage":"Wie können Einlagerungen dokumentiert werden?", "nr":43, "antwort":"- Lagerfachkarte und Lagerkarte\n- EDV-gestütztes Warenwirtschaftssystem im Lager"}), ({"frage":"Wie kann Schüttgut gelagert werden?", "nr":44, "antwort":"Schüttgut kann auf dem Boden (auf Halde) oder in speziellen Behältern (z.B. Silos oder Bunkern) gelagert werden."}), ({"frage":"Nennen Sie drei statische Lagersysteme.", "nr":45, "antwort":"z.B.\n- Fachbodenregal\n- Palettenregal\n- Einfahr- und Durchfahrregale\n- Kragarmregal\n- Waben- bzw. Kassettenregal\n- Turmregal\n- Kanal- bzw. Tunnelregal\n- automatische Behälterregale\n- Hochregale"}), ({"frage":"Nennen Sie drei dynamische Lagersysteme.", "nr":46, "antwort":"z.B.\n- Einschubregale\n- Durchlaufregale\n- Verschieberegale\n- Umlaufregale"}), ({"frage":"Wodurch unterscheiden sich Zeilenlagerung und Blocklagerung?", "nr":47, "antwort":"Bei der ungestapelten Zeilenlagerung ist ein direkter Zugriff auf alle Lagereinheiten jederzeit möglich.\nBei einer Blocklagerung Ist dies nicht möglich."}), ({"frage":"Nennen Sie drei Kriterien, von denen die Stapelhöhe bei der Bodenlagerung abhängt.", "nr":48, "antwort":"Nennen Sie drei Kriterien, von denen die Stapelhöhe bei der Bodenlagerung abhängt."}), ({"frage":"Nennen Sie drei Kriterien, von denen die Stapelhöhe bei der Bodenlagerung abhängt.", "nr":49, "antwort":"Die Blocklagerung eignet sich für Güter gleicher Art in großen Mengen sowie zur Lagerung von Langsamdrehern. Außerdem sollte es sich um nicht verderbliche Güter bzw. Waren mit einem langen Haltbarkeitsdatum handeln."}), ({"frage":"Nennen Sie je zwei Vor- und Nachteile der Blocklagerung.", "nr":50, "antwort":"Vorteile sind z.B.\n- keine Kosten für Lagereinrichtungen\n- hohe Flächen- und Raumausnutzung\n- einfache Organisation\n- geringe Störanfälligkeit\n        \nNachteile sind z.B.\n- LIFO-Prinzip\n- Zugriff auf jede Lagereinheit nur durch Umstapeln möglich\n- begrenzte Stapelhöhe\n- schlecht mechanisierbar"}), ({"frage":"Wie hoch ist die maximale Tragfähigkeit einer EUR-Palette?", "nr":51, "antwort":"Maximal 1000 kg bis 2000 kg"}), ({"frage":"Wie hoch ist die maximale Tragfähigkeit einer Gitterboxpalette?", "nr":52, "antwort":"Maximal 1000 kg"}), ({"frage":"Wie viele Gitterboxpaletten dürfen höchstens aufeinander gestapelt werden?", "nr":53, "antwort":"Es dürfen höchstens 5 Gitterboxpaletten aufeinander gestapelt werden."}), ({"frage":"Was ist beim Stapeln schwerer und leichter Lasten zu beachten?", "nr":54, "antwort":"Schwere Lasten sind unten, leichte Lasten oben zu stapeln."}), ({"frage":"Nennen Sie drei Zubehörteile für Fachbodenregale.", "nr":55, "antwort":"z.B.\n- ausziehbare Fachböden\n- Schubladen\n- Trennbleche\n- Seiten- und Rückwände\n- Lagersichtkästen\n- Lagerwannen\n- Flügeltüren"}), ({"frage":"Welche beiden Arten von Palettenregalen können unterschieden werden?", "nr":56, "antwort":"Längstraversenregal und Quertraversenregal"}), ({"frage":"Welches ist die maximale Höhe von Flachlagern, Hochflachlagern und Hochregallagern?", "nr":57, "antwort":"Flachlager-> bis ca. 7 m Höhe\nHochflachlager -> bis ca. 12 m Höhe\nHochregallager -> bis ca. 45 m Höhe"}), ({"frage":"Nach welchem Einlagerungsgrundsatz erfolgt die Ein- und Auslagerung bei einem Einfahrregal?", "nr":58, "antwort":"Nach dem LIFO-Prinzip"}), ({"frage":"Nach welchem Einlagerungsgrundsatz erfolgt die Ein- und Auslagerung bei einem Durchfahrregal?", "nr":59, "antwort":"Nach welchem Einlagerungsgrundsatz erfolgt die Ein- und Auslagerung bei einem Durchfahrregal?"}), ({"frage":"Was versteht man unter einem „Kuli\" in einem Kanalregal?", "nr":60, "antwort":"Kuli ist der Lastschlitten, der die Ladeeinheit im jeweiligen Kanal transportiert."}), ({"frage":"Nennen Sie je drei Vor- und Nachteile eines Durchlaufregals.", "nr":61, "antwort":"Vorteile sind z.B.\n- hohe Flächenausnutzung\n- hohe Artikelvielfalt auf engstem Raum\n- Einhaltung des FIFO-Prinzips\n- hohe Kommissionierleistung\n- Trennung von Beschickung und Entnahme\nNachteile sind z.B.\n- hohe Investitionskosten\n- durch sortenreine Kanäle sind diese nur teilweise befüllt\n- Störanfälligkeit"}), ({"frage":"Über welche Seite erfolgt die Ein- und Auslagerung bei einem Wabenregal?", "nr":62, "antwort":"Die Ein- und Auslagerung erfolgt über die Stirnseite."}), ({"frage":"Worin werden Kleinteile in einem automatischen Kleinteilelager gelagert?", "nr":63, "antwort":"Die Lagerung erfolgt in Behältern, Tablaren, Lagerwannen oder Kartons."}), ({"frage":"Nennen Sie je drei Vor- und Nachteile eines automatischen Kleinteilelagers.", "nr":64, "antwort":"Vorteile sind z.B.\n- hohe Flächen- und Raumausnutzung\n- Bereitstellung Ware zum Mann\n- vor Schmutz/Diebstahl geschützte Lagerung im geschlossenen System\n- keine Wegzeiten, da Ware zum Mann\nNachteile sind z.B.\n- hohe Investitionenskosten\n- regelmäßige Wartung\n- für große und sperrige Güter ungeeignet"}), ({"frage":"Was passiert im Hochregallager am sogenannten Identifikationspunkt?", "nr":65, "antwort":"Beim Passieren des I-Punktes werden von den einzulagernden Lagergütern bestimmte Informationen (z.B. Warenart, Artikelnummer, Gewicht, Menge usw.) mittels Sensoren oder Scannern erfasst. Überprüft werden außerdem die Konturen der Lagereinheit und der Zustand der Paletten."}), ({"frage":"Was passiert im Hochregallager am sogenannten Kontrollpunkt?", "nr":66, "antwort":"Bei der Auslagerung wird am Kontrollpunkt zum einen Überprüft, ob die richtige Lagereinheit ausgelagert wurde, und zum anderen wird die Auslagerung vom Lagerverwaltungssystem erfasst."}), ({"frage":"Welche Bauweisen für ein Hochregallager können unterschieden werden?", "nr":67, "antwort":"Betonbauweise (das Einbauhochregallager) und Silobauweise"}), ({"frage":"Wo ist das Lagern von Gegenständen grundsätzlich verboten?", "nr":68, "antwort":"Das Lagern von Gegenständen ist verboten\n- vor elektrischen Verteilern und Schaltanlagen\n- vor Einrichtungen zur Ersten Hilfe\n- vor Feuerlöschgeräten\n- in Verkehrs- und Rettungswegen."}), ({"frage":"Erläutern Sie die Begriffe Fachlast und Feldlast.", "nr":69, "antwort":"Fachlast ist diejenige Last, die von einer Regalseite in ein Regalfach eingebracht werden kann.\nFeldlast ist die Summe aller Fachlasten in einem Regalfeld, wobei eine gleichmäßige Lastverteilung zugrunde gelegt wird."}), ({"frage":"Was versteht man unter der Stützweite bei einem Regal?", "nr":70, "antwort":"Die Stützweite ist der Abstand zwischen zwei Auflagen in einem Regal."}), ({"frage":"Wie wird die maximale Durchbiegung bei Fächern berechnet?", "nr":71, "antwort":"Bei metallischen Werkstoffen:\n1/200 der Stützweite in mm\nBei Holz und Kunststoff:\n1/150 der Stützweite in mm"}), ({"frage":"Was sind Gefahrstoffe?", "nr":72, "antwort":"Gefahrstoffe sind Stoffe oder Zubereitung, die gefährliche oder schädliche Eigenschaften für Mensch und Unwelt haben."}), ({"frage":"Wie müssen Fußböden in einem Gefahrstofflager beschaffen sein?", "nr":73, "antwort":"Die Fußböden müssen für das Lagergut undurchlässig sein und aus nicht brennbarem Material bestehen."}), ({"frage":"Wer erlässt die Gesetze, Verordnungen, Vorschriften und Regeln zum Arbeits- und Unweltschutz?", "nr":74, "antwort":"Sie werden erlassen von Staat, den Berufsgenossenschaften und privaten Organisationen."}), ({"frage":"Wodurch können Gefährdungen am Arbeitsplatz entstehen? Nennen Sie zwei Möglichkeiten.", "nr":75, "antwort":"z.B.\n- durch die Gestaltung und Einrichtung des Arbeitsplatzes\n- durch die Gestaltung von und den Umgang mit Arbeitsmitteln\n- durch die Gestaltung von Arbeitsverfahren\n- durch vorhandene Gefahrstoffe\n- durch mangelhafte Qualifikation und Unterweisung der Arbeitnehmer"}), ({"frage":"Was regelt die Arbeitsstättenverordnung?", "nr":76, "antwort":"Die Arbeitsstättenverordnung regelt die Mindestanforderungen beim Einrichten und Betreiben von Arbeitsstätten."}), ({"frage":"Wie breit muss ein Verkehrsweg für einen Elektro-Gabelhubwagen sein, wenn der Elektro-Gabelhubwagen 60 cm breit ist?", "nr":77, "antwort":"Der Verkehrsweg muss mindestens 1,60 m breit sein (Breite des Fördermittels + min. 0,5 m auf beiden Seiten des Verkehrsweges)."}), ({"frage":"Nennen Sie drei mögliche Folgen einer hohen Lärmbelastung am Arbeitsplatz.", "nr":78, "antwort":"z.B.\n- Schwerhörigkeit\n- Herz-Kreislauf-Probleme\n- Magen-Darm-Beschwerden\n- psychische Probleme"}), ({"frage":"Wer vergibt das GS-Zeichen und was sagt es aus?", "nr":79, "antwort":"Das GS-Zeichen (geprüfte Sicherheit) wird von einer zugelassenen Prüf- und Zertifizierungsstelle, z.B. vom TÜV vergeben. Das Zeichen kennzeichnet technische Produkte, die den Anforderungen des Gerätesicherheitsgesetzes und den DIN- und DIN-EN-Bestimmungen entsprechen."}), ({"frage":"Welchem Zweck dient das Chemikaliengesetz?", "nr":80, "antwort":"Das Chemikaliengesetz dient dem Zweck, Mensch und Umwelt vor schädlichen Einwirkungen durch gefährliche Stoffe und Zubereitungen zu schützen. Diese Einwirkungen sollen erkennbar gemacht werden, abgewendet und ihren Entstehen vorgebeugt werden."}), ({"frage":"Welches sind die Kernpunkte der Gefahrstoffverordnung?", "nr":81, "antwort":"- Gefährdungsbeurteilung\n- arbeitsmedizinische Vorsorge"}), ({"frage":"Was ist eine Gefährdungsbeurteilung?", "nr":82, "antwort":"Der Arbeitgeber hat jeden Arbeitsplatz nach seiner Gefährdung zu beurteilen, um zu ermitteln, welche Arbeitsschutzmaßnahmen erforderlich sind."}), ({"frage":"Wer erstellt die Gefährdungsbeurteilung?", "nr":83, "antwort":"Verantwortlich für die Erstellung ist der Arbeitgeber, vorgenommen wird die Gefährdungsbeurteilung durch die Fachkräfte für Arbeitssicherheit in Zusammenarbeit mit den Betriebsärzten."}), ({"frage":"Was sind Emissionen?", "nr":84, "antwort":"Emissionen sind Luftverunreinigungen, Geräusche, Erschütterungen, Licht, Wärme, Strahlen usw., die von einer Anlage ausgehen. Anlagen sind Betriebsstätten, Maschinen, Geräte und Fahrzeuge."}), ({"frage":"Was sind Immissionen?", "nr":85, "antwort":"Immissionen sind Luftverunreinigungen, Geräusche, Erschütterungen, Licht, Wärme, Strahlen usw., die auf Menschen, Umwelt, Atmosphäre sowie Kultur- und sonstige Sachgüter einwirken."}), ({"frage":"Welchem Zweck dient das Wasserhaushaltsgesetz?", "nr":86, "antwort":"Das Wasserhaushaltsgesetz dient dem Schutz des Wassers vor Verunreinigungen."}), ({"frage":"Welche Bedingungen müssen zusammentreffen, damit ein Feuer entsteht?", "nr":87, "antwort":"Brennbarer Stoff, Sauerstoff und Zündquelle"}), ({"frage":"Nennen Sie drei Ursachen für Brände.", "nr":88, "antwort":"z.B.\n- unsachgemäßer Umgang mit Einrichtungen und Stoffen\n- Defekte in der Elektrik\n- fehlende Unterweisung der Beschäftigten\n- mangelndes Gefahrenbewusstsein beim Umgang mit Gefahrstoffen\n- Missachtung des Rauchverbotes\n- Brandstiftung"}), ({"frage":"In welche zwei Bereiche wird der Brandschutz unterteilt?", "nr":89, "antwort":"- vorbeugender Brandschutz\n- abwehrender Brandschutz"}), ({"frage":"Welche drei Bereiche gehören zum vorbeugenden Brandschutz?", "nr":90, "antwort":"- baulicher Brandschutz\n- technischer Brandschutz\n- betrieblicher Brandschutz"}), ({"frage":"Der technische Brandschutz wird in die Bereiche Vermeiden, Warnen und Löschen unterteilt. Nennen Sie zu allen drei Bereichen je ein Beispiel.", "nr":91, "antwort":"Vermeiden: Durch Reduktion der Sauerstoffkonzentration in der Luft\nWarnen: Mithilfe von Feuermelder\nLöschen: Mithilfe von Feuerlöscher"}), ({"frage":"Nennen Sie drei Brandmeldeeinrichtungen.", "nr":92, "antwort":"z.B.\n- Feuermelder\n- Rauchmelder\n- Thermo- oder Wärmemelder\n- Flammen- oder Strahlenmelder"}), ({"frage":"Nennen Sie drei verschiedene Brandbekämpfungsanlagen.", "nr":93, "antwort":"z.B.\n- Sprinkleranlagen\n- Sprühwasseranlagen\n- Berieselungsanlagen\n- Schaumlöschanlagen\n- Pulverlöschanlage\n- Kohlendioxidanlage"}), ({"frage":"Welche Gefahr ist mit einer Kohlendioxidanlage für den Menschen verbunden?", "nr":94, "antwort":"Durch das ausströmende Kohlendioxid wird dem Feuer der notwendige Sauerstoff entzogen und so das Feuer erstickt. Bei Betrieb dieser Anlage droht dem Menschen Erstickungsgefahr, und er muss diesen Bereich sofort verlassen."}), ({"frage":"Nennen Sie die verschiedenen Brandklassen und erklären Sie, für welche brennenden Stoffe sie gelten.", "nr":95, "antwort":"- Brandklasse A:\nbrennbare feste Stoffe\n- Brandklasse B:\nbrennbare Flüssigkeiten\n- Brandklasse C:\nbrennbare gasförmige Stoffe\n- Brandklasse D:\nbrennbare Metalle\n- Brandklasse F:\nBrände von Speiseöl/-fetten"}), ({"frage":"Welches Löschmittel benötigen Sie, um brennendes Fett zu löschen?", "nr":96, "antwort":"Brennendes Fett wird mit einem Speziallöschmittel gelöscht, niemals mit Wasser.\nHandelt es sich nur um ein kleines Feuer, sollte man versuchen, das Feuer zu ersticken."}), ({"frage":"Wie sollte ein Tropfbrand gelöscht werden?", "nr":97, "antwort":"Ein Tropfbrand sollte von oben nach unten gelöscht werden."}), ({"frage":"Wie lautet die Reihenfolge der Maßnahmen zur Rettungs- und Brandbekämpfung?", "nr":98, "antwort":"Melden -> Retten -> Löschen"})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 332:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 3", "key":"lf3"}), "fragen":[({"frage":"Nenen Sie eine Wiegeeinrichtung für hängende Lasten.", "nr":1, "antwort":"- Kranwaage\n- Hängewaage"}), ({"frage":"Was unterscheidet eine Gabelwaae von einer Gabelhunwaage?", "nr":2, "antwort":"Gabelwaagen sind Gabeln mit integrieter Waage, in die die Gabeln des Gabelstaplers oder Handgabelhubwagens eingeschoden werden.\nGabelhubwaagen sind Handhubwaage mit integriter Waage, es wird transportiert und gewogen."}), ({"frage":"Was bewirkt die Tara-Taste einer Waage?", "nr":3, "antwort":"Sie zieht das Gewicht der Verpackung ab, sodass die Waage vor Einfüllen der Ware auf Null steht"}), ({"frage":"Wozu benötigt man die Referrenztaste einer Zählwaage?", "nr":4, "antwort":"Die Referenztaste dient zur Eingabe der Bezugsmenge (= Referenzmenge). Wenn die Waage z. B. das Gewicht von zahn Stück kennt, kann sie das Stückgewicht errechnen und so die Anzahl der zusätzlich auf die Waage gelegten Teile ermitteln."}), ({"frage":"Nennen Sie zwei Hilfsmittel, um das Gewicht on Plaketten zu bestimmen.", "nr":5, "antwort":"z. B.\n- Plakettenwaage\n- Platformwaage\n- Gabelhubwaage\n- Gabelwaage"}), ({"frage":"Nennen Sie zwei Vorteile eines Ultraschall-Entferungsmessers gegenüber einem Maßband oder einem Zollstock", "nr":6, "antwort":"Vorteile sind z. B.\n- Messung auch an weniger gut zugänglichen Stellen möglich\n- einfache Messung langer Strecken\n- keine körperliche Belastung beim Messen"}), ({"frage":"Nennen Sie zwei Hilfsmittel zum Lesen von Barcode-Etiketten.", "nr":7, "antwort":"z. B.\n- Handscanner\n- Barcodescanner\n- Barcode-Lesestift"}), ({"frage":"Nenen Sie zwei Hilfsmittel zur Preisauszeichnung.", "nr":8, "antwort":"z. B.\n- Etikettenspender\n- Etikettendrucker\n- Barcodedrucker"}), ({"frage":"Durch welche Maßnahmen kann die Ware vor Schädlingsbefall geschützt werden? Nennen Sie drei Maßnahmen.", "nr":9, "antwort":"- Saubarkeit auf den Lagerplätzen\n- Schädlingsbekämpfung mit chemischen Mitteln\n- Ververpackung\n- Einheiten der Kühlkette\n- Lagerräume trocken halten"}), ({"frage":"Nennen Sie drei Maßnahmen der Warenpflege.", "nr":10, "antwort":"z. B.\n- Ware regelmäßig kontrolieren (Sichtkontrolle)\n- Haltbarkeitsdatum kontrolieren\n- Temperatur kontrolieren\n- Luftfeuchtigkeit kontrolieren\n- Güter entstauben\n- Güter umdrehen und belüften\n- Guter vor Lichteinwirkung schützen"}), ({"frage":"Erklären Sie den Unterschied zwischen MHD und Verfalldatum", "nr":11, "antwort":"Bei Überschreiten des Verfalldatums dürfen Medikamente nicht mehr verwendet werden.\nBei Überschreiten des Mindesthaltbarkeitsdatum dürfen Lebensmittel noch verzehrt werden."}), ({"frage":"Begründen Sie, ob Lebensmittel, die das MHD überschritten haben, noch verkauft werden dürfen oder nicht", "nr":12, "antwort":"Wenn sie nicht verdorben sind, dürfen Lebensmittel nach Ablauf des Mindesthaltbarkeitsdatum noch verkauft werden. Viele Lebensmittel halten sich etwas länger als bis zum Ablauf des Midesthaltbarkeitsdatum. Sensible Lebensmittel mit einem Verbrauchsdatum sollten nach Ablauf des Datums nicht mehr verzehrt werden."}), ({"frage":"Wer ist für die Arbeitsicherheut im Unternehmen in ertser Linie verantwortlich?", "nr":13, "antwort":"Der Unternehmer"}), ({"frage":"Wer ist fü den technischen Arbeitsschutz im Betrieb neben dem Unternehmer hauptsächlich verantwortlich?", "nr":14, "antwort":"Die Fachkraft für Arbeitssicherheit"}), ({"frage":"Nennen Sie zwei Aufgeben eines Sicherheitsbeauftragten.", "nr":15, "antwort":"- Arbeitsplätze prüfen, welche Sicherheitseinrichtungen nötig sind.\n- Prüfen, ob die Sicherheitseinrichtungen funktionieren und angewendet werden\n- Betriebsanweisungen erstellen\n- Unternehmer in allen Fragen der Arbeitssicherheit beraten"}), ({"frage":"Untersuchen Sie die Fachkraft für Arbeitssicherheit und den Sicherheitsbeauftragten hinsichtlich der Verantwortlichkeit.", "nr":16, "antwort":"Die Fachkaft für Abreitsschiheit geprüft und dabei Sicherheitsmängel übersehen hat\nDie Sicherheitsbeauftragten haften nicht und haben jein Weisungsrecht."}), ({"frage":"Welche Verpflichtugen haben die Beschäftigen selbst im Zusammenhang mit dem Arbeitsschutz? Nennen Sie zwei Verpflichtungen.", "nr":17, "antwort":"z. B.\n- Sicherheitsvorschriften einhalten\n- persönliche Schutzausrüstung (PSA) tragen\n- konzentriert und achtsam arbeiten\n- sicherheitstechnische Mängel sofort anzeigen"}), ({"frage":"Welche Verpflichtent haben die Beschäftigten selbt im Zusammenhang mit dem Arbeitsschutz? Nennen Sie zwei Verpflichtugen.", "nr":18, "antwort":"- Sicherheitsvorschriften einhalten\n- Persöhliche Schutzausrüstung tragen\n- Konzentriert und achtsam arbeiten\n- sicherheitstechnische Mängel sofort anzeigen\""}), ({"frage":"Wie setzt sich der Arbeitsscutzausschuss zusammen?", "nr":19, "antwort":"Arbeitsschutzausschuss\n- Unternehmer\n- Betriebsartz\n- Fachkraft für Arbeitssicherheit\n- Sicherheitsfachkräfte\n- Zwei Betriebsratsmitglieder"}), ({"frage":"Nenen Sie zwei Aufgaben des Betriebs in Bezug auf den Arbeitsschutz.", "nr":20, "antwort":"z. B.\n- auf Sicherheitsmängel hinweisen\n- Verbesserungen vorschlagen"}), ({"frage":"Welche Folgen kann es für einen Beschäftigen haben, wenn er gegen die Sicherheitsvorschriften verstößt? Nennen Sie zwei mögliche Folgen.", "nr":21, "antwort":"- Verletzungen\n- Verlust des Anspruches auf Lohnfortzahlung im Krankheitsfall\n\nZustatzinformation:\nHaftung, falls Dritte zu Schaden kommen"}), ({"frage":"Nenne Sie drei Gesetze und/oder Verodnugen, in denen die Abfallentsogung geregelt ist.", "nr":22, "antwort":"z. B.\n- Kreislaufwirtschaft- und Abfallgesetz\n- Batterieverordnung\n- Elektro- und Elektronikgerätegesetz\n- Altölverordnung\n- Verpackungsverordnung"}), ({"frage":"Nennen Sie die drei grundsätzlichen Ziele der Abfallentsorgung", "nr":23, "antwort":"Ziele der Abfallentsorgung\n- Vermeiden\n- Verwerten\n- Beseitigen"}), ({"frage":"NenneSie zwei Aufgaben des Abfallbeauftragten.", "nr":24, "antwort":"z. B.\n- Überwachung des Weges der Abfälle von ihrer Entscheidung bis zu ihrer Entsorgung\n- Aufklärung der Betriebsangehörigen über mögliche Gefährdung sowie Maßnahmen zu ihrer Vermeidung- Mitwirkung bei der Entwiklung/Einführung umweltfreundlicher und abfallarmer Verfahren und Erzeunisse\n- jährliche Berichterstattung"}), ({"frage":"Was versteh man unter \"Recycling\"?", "nr":25, "antwort":"Unter Recycling versteht msn die stoffliche Verwertung von Abfällen. Die im Abfall enthaltenen Rohstoffe werden ganz oder teilweise zurückgewonnen"}), ({"frage":"Unterscheiden Sie Ist-Bestand und Soll-Bestand.", "nr":26, "antwort":"Ist-Bestand ist der tatsächliche am Lagerplatz verhandene Bestand.\nSoll-Bestant ist der im PC oder auf der Lagerkarte angegebene Bestand"}), ({"frage":"Wofür ist der Mindestbestand da?", "nr":27, "antwort":"Er deckt den Bedarf bei unvorhersehnarem Mehrverbrauch oder bei Lieferungsverzögerungen ab"}), ({"frage":"Wie wird der Meldebestand berechnet?", "nr":28, "antwort":"Meldebestand = (Tagesverbrauch * Lieferzeit) + Mindestbestand"}), ({"frage":"Welche Bedeutung hat der Meldebestand?", "nr":29, "antwort":"Wird der Meldebestand erreicht, muss neue Ware bestellt werden."}), ({"frage":"Woran hängt der Höchstbestand ab?", "nr":30, "antwort":"Der Höchstbestand hängt von der Kapitalbindung, dem zur Verfügung stehenden Lagerraum, eventuellen Megenrabatten und dem Risiko des Veraltens bzw. des Verdebs der Ware ab."}), ({"frage":"Wie wird die maximale Bestellmenge bei gebgebem Höchstbestand ermittelt?", "nr":31, "antwort":"Maximale Bestellmenge = Höchstbestand - Mindestbestand"}), ({"frage":"Wie wird der verfügbare Bestand ermittelt?", "nr":32, "antwort":"Verfügbarer Bestand = tatsächlicher Bestand - Mindestbestand - reservierter Bestand"}), ({"frage":"Warum wird eine Inventur durchgeführt?", "nr":33, "antwort":"Weil es gesetzlich vergeschrieben ist, aber auch aus Eigeninteresse des Unternehmens: Nur durch eine Inventur lässt sich feststellen, ob Soll-Bestände und Ist-Bestände übereinstimmen."}), ({"frage":"Nennen Sie die vier Inventurarten.", "nr":34, "antwort":"Inventurarten\n- (zeitnahe) Stichtagsinventur\n- verlegte Inventur\n- permanente Inventur\n- Stichprobeninventur"}), ({"frage":"Wann findet bei der zeitnahen Stichtagsinventur die Zählung der Bestände statt", "nr":35, "antwort":"In einem Zeitraum von zehn Tagen vor bis zahn Tagen nach dem Bilanzstichtag"}), ({"frage":"In welchem Zeitraum kann die verlegte Inventur durchgeführt werden?", "nr":36, "antwort":"In einem Zeitraum von drei Monaten vor bis zwei Monaten nach den Bilanzstichtag"}), ({"frage":"Welche Voraussetzungen müssen für die Durchführung einer permanenten Inventur gegeben sein?", "nr":37, "antwort":"Alle Zugänge werden, denn der Bestand muss nach dem Zähltag wertmäßig und mengenmäßig fortgeschrieben werden."}), ({"frage":"Nennen Sie zwei Voruteile der permanenten Inventur", "nr":38, "antwort":"z. B.\n- Arbeiten können während des laufenden Betriebs durchgeführt werden.\n- Arbeiten können für jeden Artikel zu einem passenden Zeitpunkt durchgeführt werden, wenn der Bestand niedrig ist."}), ({"frage":"Geben Sie drei ursachen für Inventurdifferenzen an.", "nr":39, "antwort":"z. B.\n- Schwund, Verderb oder Bruch\n- Diebstahl\n- Fehler bei der Erfassung und Buchung der Wareneingänge oder Warenausgänge\n- Fehler bei der Kommissionierung\n- Einschlag in ein falsches Lagerfach"}), ({"frage":"Mit welchem Preis müssen die Bestände bewertet werden?", "nr":40, "antwort":"Mit dem Einstandspreis"}), ({"frage":"Was unterscheidet die Stichprobeninventur von den anderen Inventurverfahren?", "nr":41, "antwort":"Bei der Stichprobeninventur werden nur doe wertvollen A-Güter gezählt, von allen anderen Gütern werden nur Teilmengen (Stichproben) gezählt. Bei allen anderen Verfahren muss der gesamte Bestand gezählt werden."}), ({"frage":"Nennen Sie drei Kostenarten im Lager.", "nr":42, "antwort":"z. B.\n- Verwaltungskosten\n- Personalkosten\n- Raumkosten\n- Kapitalkosten\n- Risikokosten"}), ({"frage":"Nenne Sie drei Beispiele für Raumkosten.", "nr":43, "antwort":"- Raummiete\n- Gebäudeabschreibung\n- Reinigung\n- Energiekosten für Heizung\n- Energiekisten für Licht\n- Wartung und Instandhaltung"}), ({"frage":"Was versteht man unter gebunden Kapital?", "nr":44, "antwort":"Das in die Ware investierte Kapital ist gebunde, da es nicht anderwertig verwendet werden kann (z. B. für doe Geldanlage am Kapitalmarkt)"}), ({"frage":"Warum verursachen die im Lager liegenden Waren Zinsverlsute?", "nr":45, "antwort":"Das in den Waren gebundene Kapital kann nicht am Kapitalmark investiert werden, dadurch entgehen dem Unternehmen Zisen und andere Kapitalerträge."}), ({"frage":"Nenne Sie drei Beispiele für Risikokosten", "nr":46, "antwort":"z. B.\n- Verderb\n- Schwud\n- Alterung der Ware\n- Versicherungsprämien"}), ({"frage":"Was versteht man unter allgemeinen Verwaltungskosten?", "nr":47, "antwort":"Das sind die Kosten, die im Bereich der Lagerverwaltung anfallen, z. B. Büromaterial, IT-Kosten"}), ({"frage":"Erklären Sie den Unterschied zwichen Absatz und Umsatz", "nr":48, "antwort":"Absatz bezieht sich auf die verkaufte Menge\nUmsatz ist der durch den Verkauf eingenommene Geldbetrag"}), ({"frage":"Was versteht man unter dem Einstandspreis?", "nr":49, "antwort":"Das ist der Preis, der beim Einkauf für die Ware bezahlt wird."}), ({"frage":"Wie wird der durchschnittliche Lagerbestand auf Basis von Quartalsendbeständen berechnet?", "nr":50, "antwort":"Anfangsbestand plus vier Quartalsendbestände geteillt durch fünf."}), ({"frage":"Welches ist die einfachste, aber auch ungenauste Formel für die Berechnung des durchschnittlichen Lagerbestandes", "nr":51, "antwort":"Anfangsbestand plus Schlussbestand geteilt durch zwei."}), ({"frage":"Welche Folgen haben hohr Lagerbestände?", "nr":52, "antwort":"Große Bestände führen zu hohen Lagerkosten. Das Lagerrisiko steigt, die Güter können veralten, verderben oder verschwinden."}), ({"frage":"Welche Folgen haben niedrige Lagerbestände?", "nr":53, "antwort":"Personal und Technik sind bei niedrigen Lagerbeständen nich ausgelastet. Es kann zu Lieferengpässen oder Störungen der Produktion kommen."}), ({"frage":"Erklären Sie die Umschlagshäufigkeit mit eigene Worten.", "nr":54, "antwort":"z. B.\nDie Umschlagshäfigkeit gibt an, wie oft der durchschnittliche Lagerbestand pro Jahr ins Lager hineingeht und es wieder verlässt"}), ({"frage":"Wie wird die Umschlagshäufigkeit berechnet?", "nr":55, "antwort":"Wareneinsatz geteilt durch durchschnittlichen Lagerbestand\n- in € oder\n- in Stück"}), ({"frage":"Nenne Sie zwei Möglichkeiten, wie der Wareneinsatz ermittelt werden kann.", "nr":56, "antwort":"Anfangsbestand plus Summe aller Einkäufe minus Schlussbestand\noder\nSumme aller Warenausgänge"}), ({"frage":"Wie hoch ist die durchschnittliche Lagerdauer bei einer Umschalgshäufigkeit von 6?", "nr":57, "antwort":"360 : 6\nDie durchschnittliche Lagerdauer beträgt 60 Tage"}), ({"frage":"Nennen Sie zwei Maßnahmen zur Erhöung der Umschlagshäufigkeit.", "nr":58, "antwort":"- Senkung der durchschnittlichen Lagerbestands\n- Erhöhung des Absatzes z. B. durch Werbeaktionen, Preissenkung, Gewinnung neuer Käuferschichten"}), ({"frage":"Was ist die Lagerrichweite und wie wird sie ermittelt?", "nr":59, "antwort":"Die Lagerrichweite drückt aus, wie lange der durchschnittliche Lagerbestand ausreicht, um die Kunden zu beleifern.\nErmitteln der Lagerreichweite:\ndurchschnittlicher Ligerbestand geteilt durch durchschnittlischen Absatz pro Tag."}), ({"frage":"Wie werden die Lagerzinsen berechnet, wenn der Lagerzinssatz gegeben ist?", "nr":60, "antwort":"Durchschnittlicher Lagerbestand in € mal Lagerzinssatz"}), ({"frage":"Wie wird der Flächennutzungsgrad eines Lagers ermittelt?", "nr":61, "antwort":"Belegte Lagerfläche in Quadratmetern mal 100 geteilt durch den verfügbaren Lagerraum in Quadratmetern."})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 922:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 4", "key":"lf4"}), "fragen":[({"frage":"Nennen Sie die sechs **R** der Logistik", "nr":1, "antwort":"Sechs **R** der Logistik\n- Richtige Ware\n- Richtige Qualität\n- Richtige Menge\n- Richtiger Ort\n- Richtige Kosten"}), ({"frage":"Was versteht man unter einer Lieferkette?", "nr":2, "antwort":"Hierbei handelt es sich um einen Materialfluss, der sich vom Lieferanten bis zum Kunden durch das gesamte Unternehmen beweget"}), ({"frage":"Nennesie die vier Arten der Informationen, die zusammen den Informationsfluss bilden", "nr":3, "antwort":"Den Informationsfluss bilden\n- Nachlaufende Informationen\n- Begleitende Informationen\n- Vorlaufende Informationen\n- Zurücklaufende Informationen"}), ({"frage":"Nennen sie zwei Gründe für eine Optimierung des Materialflusses", "nr":4, "antwort":"z. B.\n- Durchlaufzeitenverkürzung\n- Ausschussreduzierung\n- Kostensenkung\n- Verringerung der Umweltbelastung"}), ({"frage":"Was versteht man unter Informationen Logistik", "nr":5, "antwort":"Bereitstellung der benötigten Informationen für alle beteiligten"}), ({"frage":"Nennen Sie ein Hilfsmittel, ohne das die heutige Informationslogistik kaum mehr denkbar ist", "nr":6, "antwort":"Rechnergeschütze Informationssysteme (PC-Netzwerke mit passenden Datenbanken und Warenwirtschaftssystemen)"}), ({"frage":"Welche Pflichten hat der Arbeitgeber in Bezug auf Hand Transporte", "nr":8, "antwort":"Manuelles heben und tragen vermeiden. Ist dies nicht möglich, muss der\nArbeitgeber geeignete Arbeitsmittel bereitstellen und die Mitarbeiter im\nrichtigen tragen und heben unterweisen"}), ({"frage":"Nenne sie zwei Gegebenheiten am Arbeitsplatz, die sich auf das manuelle haben und tragen von lasten auswirken", "nr":9, "antwort":"z. B.\n- Art der last\n- Zu erfüllende Arbeitsaufgabe\n- Beschaffenheit der Arbeitsprozesse\n- Arbeitsumgebeung"}), ({"frage":"Nennen sie zwei persönliche Faktoren, die Voraussetzung für richtiges tagen und heben sind", "nr":10, "antwort":"z. B.\n- Körperliche Eignung des beschäftigten\n- Geeignete Kleidung und Schuhe\n- Kenntnisse des beschäftigten"}), ({"frage":"Nennen sie zwei Verhaltensregeln beim Anheben und absetzen lasten", "nr":11, "antwort":"z. B.\n- Lasten nur mit geraden rücken anheben und absetzen\n- Beim Anheben und absetzen immer in die Hocke gehen\n- Ruckfreies anheben und absetzen\n- Verdrehen der Wirbelsäule vermeiden"}), ({"frage":"Nennen sie zwei Verhaltensregen beim Heben und Tragen von lasten", "nr":12, "antwort":"z. B.\n- Möglichst eine gleichmäßige Verteilung der last erreichen\n- Last nah am Körper transportieren\n- Geeignete Hilfsmittel verwenden"}), ({"frage":"Wie viel Kilogramm dürfen schwangere gelegentlich haben und tragen", "nr":13, "antwort":"Gelegentlich nicht mehr als 10 kg und häufig nicht mehr als 5kg ohne\nHilfsmittel"}), ({"frage":"Nennen sie zwei Maßnahmen zur Vorbeugung von Ermüdungserscheinungen beim Haben und tragen von lasten", "nr":14, "antwort":"z. B.\n- Verringerung der Zahl der lasten Bewegung ja Zeiteinheit\n- Ausreichende Erholungspausen\n- Korrekte Körperhaltung\n- Angemessene Arbeitsmenge bei vernünftiger Zeit Einhaltung\n- Höhe der lasten Aufnahme und ablage zwischen 70 und 100 cm."}), ({"frage":"Nenne sie zwei Hilfsmittel für leichte Hand Transporte", "nr":15, "antwort":"z. B.\n- Handsaugtragegriffe\n- Tragegurte\n- Handmagnete\n- Tragklauen"}), ({"frage":"Nenne sie zwei Hilfsmittel für das heben und tragen schwerer Lasten per Hand", "nr":16, "antwort":"z. B.\n- rollen und walzen\n- Kant Eisen\n- Rohr Schlüssel\n- wälzwagen"}), ({"frage":"Nennen sie drei handbetriebene Transportmittel", "nr":17, "antwort":"z. B.\n- Handwagen\n- Sackkarre\n- handhubwagen\n- handgabelhubwagen\n- rollprische"}), ({"frage":"Nenne sie drei Kriterien, die für die Auswahl des geeigneten Fördermittels wichtig sind", "nr":18, "antwort":"z. B.\n- Art des transportgutes\n- transportumfang\n- Art der transportstrecke\n- Transport Vorschriften\n- Verfügbarer Platz im Lager\n- Automatisierungsgrad\n- Antriebstechnik\n- Flurbindung\n- Beweglichkeit der Fördermittel"}), ({"frage":"Nennen sie drei Merkmale einen optimalen Fördermittel Einsatzes", "nr":19, "antwort":"z. B.\n- Wenige Leerfahrten\n- Kurze beförderszeiten\n- Flexibel einsetzbar\n- Hoher ausnutzungsgrad\n- Niedrige Betriebskosten\n- Umweltschonender Einsatz"}), ({"frage":"Unterscheiden sie stetig- und unstetig Förderer", "nr":20, "antwort":"Stetig Förderer sind kontinurlich in Bewegung.\nUnstetig Förderer bewegen sich nur, wenn sie im Einsatz sind"}), ({"frage":"Erklären sie, was man unter einem flurgebundenen Fördermittel verstehen", "nr":21, "antwort":"Flurgebundenene Fördermittel benötigen einen Fahrweg"}), ({"frage":"Erklären sie, was man unter einem flurfreien Fördermittel versteht", "nr":22, "antwort":"Flur feie Fördermittel benötigen keine Fahrwege"}), ({"frage":"Nenne sie zwei Vorteile von stetig Förderern", "nr":23, "antwort":"z. B.\n- Hoher Automatisierungsgrad\n- Einsatzbereitschaft rund um die Uhr\n- Geringe Betriebskosten"}), ({"frage":"Nennen sie zwei Nachteile von stetig Förderern", "nr":24, "antwort":"z. B.\n- Hohe Investitions- und wartungskosten\n- Hohe Störanfälligkeit\n- Unflexibler Einsatz, da sie eine festgelegte Transproststreckte habe"}), ({"frage":"Nenne sie zwei Hebezeuge", "nr":25, "antwort":"Krane und Aufzüge"}), ({"frage":"Nenne sie drei Kriterien, die bei Anschlagmittlen zu prüfen sind", "nr":26, "antwort":"Das Anschlagmittel ist auf Schäden zu kontrollieren, z .B. auf\n- Brauchstellen\n- Risse\n- Lockerungen\n- Verschleiß\n- Rost"}), ({"frage":"Anschlagmittel sind jährlich zu prüfen. Wer führt diese Prüfung durch?", "nr":27, "antwort":"Ein Sachkundiger z. B. vom TÜV"}), ({"frage":"Nennen Sie zwei Kennzeichungselements eines Anschlagmittels.", "nr":28, "antwort":"z. B.\n- Tragfähigkeit\n- Neigungswinkel\n- Einsatztemperatur"}), ({"frage":"Nennen Sie zwei Vorteile von Hebezeugen", "nr":29, "antwort":"z. B.\n- einsetzbar im Innen- und Außenbereich\n- große Hublasten sind möglich\n- schnelle Arbeitsgeschwindigkeit\n- variable Plattformen ermöglichen einen flexiblen Einsatz"}), ({"frage":"Nennen Sie zwei Nachteile von Habezeugen.", "nr":30, "antwort":"- relativ hohe Investitionskosten\n- sie sind ortsgebunden"}), ({"frage":"Wofür steht die Abkürzung FTS?", "nr":31, "antwort":"Fahrerlose Transportsysteme"}), ({"frage":"Nenne Sie zwei Vorteile von fahrerlosen Transport Systemen.", "nr":32, "antwort":"- Hohe Anpassungsfähigkeit\n- Einfache Integration in bestehende Systeme / gut nachrüstbar\n- Unterschiedlichste Güterarten können transportiert werden\n- Verursachen kaum Personalkosten"}), ({"frage":"Nennen Sie wie Nachteile von fahrerlosen Transportsystemen.", "nr":33, "antwort":"- Hohe Störanfälligkeit\n- Hohe Investitionskosten\n- Die benötigte Fahrspurbreite verursacht einen hohen Platzbedarf\n- Komplexe Datentechnische Vernetzung ist nötig"}), ({"frage":"Nennen Sie drei Sichtprüfungeninhalte vor der täglichen Inbetriebnahme von Flurförderfahrzeugen", "nr":34, "antwort":"- Fahrzeugzustand (Risse, Leckagen, starke Verschmutzung)\n- Fahrwerkzustand (ordnungsmäßige Reifen, Reifendruck)\n- Zustand der Hubeinrichtung\n- Zustand sonstiger Einrichtungen"}), ({"frage":"Nennen Sie drei Funktionsprüfungen, die nach der Sichtprüfung täglich durchzuführen sind", "nr":35, "antwort":"- Der Betriebs- und Feststellbremse\n- Der Sicherung gegen unbefugtes Benutzen\n- Der Warneinrichtungen (z. B. Hupe)\n- Der Beleuchtung und Bremslichter\n- Des Lenkungsspiels\n- Der Hydraulik\n- Der Lastenaufnahmemittel"}), ({"frage":"Nennen Sie drei Verhaltensregeln, die beim Beladen eines Flurförderfahrzeuges zu beachten sind.", "nr":36, "antwort":"- Maximale Höchstlast nicht überschreiben\n- Last möglichst dich Gabelrücken/Hubmast aufnehmen\n- Last vor Verschmutzung und Herunterfallen schützen\n- Nie die Sicht durch die Last einschränken"}), ({"frage":"Nennen Sie drei Fahrregeln für Flurförderzeuge.", "nr":37, "antwort":"- Angemessene Geschwindigkeit\n- Ladegabeln nur leicht anheben\n- Freie Sicht\n- Bergseitiger Transport bei Steigungen und Gefällen\n- Keine Person unter angehobener Last\n- Keine Person mitfahren lassen\n- Fahrstil an die Fahrbahnverhältnisse anpassen"}), ({"frage":"Nennen Sie die vier Voraussetzungen für das Führen von Gabelstaplern.", "nr":38, "antwort":"Voraussetzung für das Führen von Gabelstaplern:\n- Mindestalter 18 Jahre\n- Geistige und körperliche Eignung\n- Schriftliche Beauftragung von Unternehmen (innerbetrieblicher Fahrausweiß)"}), ({"frage":"Nennen Sie drei Aufgaben von Förderhilfsmitteln.", "nr":39, "antwort":"- Aufnehmen und Zusammenfassen des Lagergutes\n- Herstellen der Transportfähigkeit\n- Erleichtern des Auf- und Abladens\n- Herstellen der Lagerfähingkeit\n- Schutz des Lagergutes"}), ({"frage":"Nennen Sie drei Aufgaben der Lagerhilfsgeräte.", "nr":40, "antwort":"- Wiegen, Messen, Zählen\n- Auspreisen\n- Ein- und Auspacken\n- Um- oder Auslagern\n- Pflegen und Reinigen\n- Verwalten und Identifizieren"}), ({"frage":"Nenne Sie die Anlässe für eine Zustand Prüfung von Leitern", "nr":41, "antwort":"Vor jedem Gebrauch, bei häufiger und hoher Beanspruchung"}), ({"frage":"Wie viele ausgebildete Ersthelfer benötigt ein Produktionsunternehmen mit 100 Mitarbeiten?", "nr":42, "antwort":"10% der Mitarbeiter, d. h. zahn Mitarbeiten"}), ({"frage":"Wem muss ein Arbeitsunfall unmittelbar gemeldet werden?", "nr":43, "antwort":"Dem unmittelbaren Vorgesetzten"}), ({"frage":"Nennen Sie die 5 Ws eines Erste-Hilfe-Notrufs", "nr":44, "antwort":"- Wo?\n- Wie viele?\n- Was?\n- Welche Verletzungen?\n- Warten!"}), ({"frage":"Nenne Sie die Beteiligten der Rettungskette.", "nr":45, "antwort":"Rettungskette:\n- Ersthelfer (er sicher ab, ergreift Sofortmaßnahmen, setzt Notruf ab leistet Erste Hilfe)\n- Rettungsdienst\n- Krankenhaus"}), ({"frage":"Jede durchgeführte Erste Hilfe ist zu dokumentieren. Wo hat die Aufzeichnung zu erfolgen?", "nr":46, "antwort":"Verbandburch"}), ({"frage":"Nennen Sie drei Angaben, die zur Dokumentation eines Unfalls im Vervandbuch festzuhalten sind.", "nr":47, "antwort":"- Zeit, Ort und Hergang des Unfalls\n- Art und Umfang der Verletzung\n- Art und Weise der Erste-Hilfe-Maßnahme\n- Name des Verletzten\n- Name der beteiligten Ersthelfer"}), ({"frage":"Wann ist eine Unfallanzeige auszufüllen?", "nr":48, "antwort":"Wenn die Folgen eines Arbeitsunfalls länger als drei Kalendertage andauern oder zum Tod des Mitarbeiters führen"}), ({"frage":"In welcher First ist eine Unfallanzeige wem vorzulegen?", "nr":49, "antwort":"Binnen drei Tagen der zuständigen Berufsgenossenschaft, bei Schwerstverletzten, Massenunfällen und/oder toten sofort"})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 589:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 5", "key":"lf5"}), "fragen":[({"frage":null, "nr":1, "antwort":""}), ({"frage":null, "nr":2, "antwort":""})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 335:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 6", "key":"lf6"}), "fragen":[({"frage":"sdfsfd", "nr":1, "antwort":"sdfsdfsd"}), ({"frage":"sdfsdfs", "nr":2, "antwort":"sdfsdff"})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 830:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 7", "key":"lf7"}), "fragen":[({"frage":null, "nr":1, "antwort":""}), ({"frage":null, "nr":2, "antwort":""})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ 854:
/***/ ((module) => {

const doc = [({"config":({"title":"Lernfeld 8", "key":"lf8"}), "fragen":[({"frage":null, "nr":1, "antwort":""}), ({"frage":null, "nr":2, "antwort":""})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfpl"] = self["webpackChunkfpl"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(961)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;