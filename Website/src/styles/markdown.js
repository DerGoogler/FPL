const markdownStyles = {
  "@global": {
    ".markdown-body": {
      msTextSizeAdjust: "100%",
      webkitTextSizeAdjust: "100%",
      margin: "0",
      color: "#24292f",
      backgroundColor: "#ffffff",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
      fontSize: "16px",
      lineHeight: "1.5",
      wordWrap: "break-word",
    },
    ".markdown-body .octicon": {
      display: "inline-block",
      fill: "currentColor",
      verticalAlign: "text-bottom",
      fallbacks: [
        {
          fill: "currentColor",
        },
        {
          verticalAlign: "text-bottom",
        },
        {
          display: "inline-block",
        },
      ],
      overflow: "visible !important",
    },
    ".markdown-body h1:hover .anchor .octicon-link:before, .markdown-body h2:hover .anchor .octicon-link:before, .markdown-body h3:hover .anchor .octicon-link:before, .markdown-body h4:hover .anchor .octicon-link:before, .markdown-body h5:hover .anchor .octicon-link:before, .markdown-body h6:hover .anchor .octicon-link:before":
      {
        width: "16px",
        height: "16px",
        content: "' '",
        display: "inline-block",
        backgroundColor: "currentColor",
        webkitMaskImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\")",
        maskImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\")",
      },
    ".markdown-body details, .markdown-body figcaption, .markdown-body figure":
      {
        display: "block",
      },
    ".markdown-body summary": {
      display: "list-item",
    },
    ".markdown-body [hidden]": {
      display: "none !important",
    },
    ".markdown-body a": {
      backgroundColor: "transparent",
      color: "#0969da",
      textDecoration: "none",
    },
    ".markdown-body a:active, .markdown-body a:hover": {
      outlineWidth: "0",
    },
    ".markdown-body abbr[title]": {
      borderBottom: "none",
      textDecoration: "underline dotted",
    },
    ".markdown-body b, .markdown-body strong": {
      fontWeight: "600",
    },
    ".markdown-body dfn": {
      fontStyle: "italic",
    },
    ".markdown-body h1": {
      margin: ".67em 0",
      fontWeight: "600",
      paddingBottom: ".3em",
      fontSize: "2em",
      borderBottom: "1px solid hsla(210,18%,87%,1)",
    },
    ".markdown-body mark": {
      backgroundColor: "#fff8c5",
      color: "#24292f",
    },
    ".markdown-body small": {
      fontSize: "90%",
    },
    ".markdown-body sub, .markdown-body sup": {
      fontSize: "75%",
      lineHeight: "0",
      position: "relative",
      verticalAlign: "baseline",
    },
    ".markdown-body sub": {
      bottom: "-0.25em",
    },
    ".markdown-body sup": {
      top: "-0.5em",
    },
    ".markdown-body img": {
      borderStyle: "none",
      maxWidth: "100%",
      boxSizing: "content-box",
      backgroundColor: "#ffffff",
    },
    ".markdown-body code, .markdown-body kbd, .markdown-body pre, .markdown-body samp":
      {
        fontFamily: "monospace,monospace",
        fontSize: "1em",
      },
    ".markdown-body figure": {
      margin: "1em 40px",
    },
    ".markdown-body hr": {
      boxSizing: "content-box",
      overflow: "hidden",
      background: "transparent",
      borderBottom: "1px solid hsla(210,18%,87%,1)",
      height: ".25em",
      padding: "0",
      margin: "24px 0",
      backgroundColor: "#d0d7de",
      border: "0",
    },
    ".markdown-body input": {
      font: "inherit",
      margin: "0",
      overflow: "visible",
      fontFamily: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
    },
    ".markdown-body [type=button], .markdown-body [type=reset], .markdown-body [type=submit]":
      {
        webkitAppearance: "button",
      },
    ".markdown-body [type=button]::-moz-focus-inner, .markdown-body [type=reset]::-moz-focus-inner, .markdown-body [type=submit]::-moz-focus-inner":
      {
        borderStyle: "none",
        padding: "0",
      },
    ".markdown-body [type=button]:-moz-focusring, .markdown-body [type=reset]:-moz-focusring, .markdown-body [type=submit]:-moz-focusring":
      {
        outline: "1px dotted ButtonText",
      },
    ".markdown-body [type=checkbox], .markdown-body [type=radio]": {
      boxSizing: "border-box",
      padding: "0",
    },
    ".markdown-body [type=number]::-webkit-inner-spin-button, .markdown-body [type=number]::-webkit-outer-spin-button":
      {
        height: "auto",
      },
    ".markdown-body [type=search]": {
      webkitAppearance: "textfield",
      outlineOffset: "-2px",
    },
    ".markdown-body [type=search]::-webkit-search-cancel-button, .markdown-body [type=search]::-webkit-search-decoration":
      {
        webkitAppearance: "none",
      },
    ".markdown-body ::-webkit-input-placeholder": {
      color: "inherit",
      opacity: ".54",
    },
    ".markdown-body ::-webkit-file-upload-button": {
      webkitAppearance: "button",
      font: "inherit",
    },
    ".markdown-body a:hover": {
      textDecoration: "underline",
    },
    ".markdown-body hr::before": {
      display: "table",
      content: '""',
    },
    ".markdown-body hr::after": {
      display: "table",
      clear: "both",
      content: '""',
    },
    ".markdown-body table": {
      borderSpacing: "0",
      borderCollapse: "collapse",
      display: "block",
      width: "max-content",
      maxWidth: "100%",
      overflow: "auto",
    },
    ".markdown-body td, .markdown-body th": {
      padding: "0",
    },
    ".markdown-body details summary": {
      cursor: "pointer",
    },
    ".markdown-body details:not([open])>*:not(summary)": {
      display: "none !important",
    },
    ".markdown-body kbd": {
      display: "inline-block",
      padding: "3px 5px",
      font: "11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
      lineHeight: "10px",
      color: "#24292f",
      verticalAlign: "middle",
      backgroundColor: "#f6f8fa",
      border: "solid 1px rgba(175,184,193,0.2)",
      borderBottomColor: "rgba(175,184,193,0.2)",
      borderRadius: "6px",
      boxShadow: "inset 0 -1px 0 rgba(175,184,193,0.2)",
    },
    ".markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6":
      {
        marginTop: "24px",
        marginBottom: "16px",
        fontWeight: "600",
        lineHeight: "1.25",
      },
    ".markdown-body h2": {
      fontWeight: "600",
      paddingBottom: ".3em",
      fontSize: "1.5em",
      borderBottom: "1px solid hsla(210,18%,87%,1)",
    },
    ".markdown-body h3": {
      fontWeight: "600",
      fontSize: "1.25em",
    },
    ".markdown-body h4": {
      fontWeight: "600",
      fontSize: "1em",
    },
    ".markdown-body h5": {
      fontWeight: "600",
      fontSize: ".875em",
    },
    ".markdown-body h6": {
      fontWeight: "600",
      fontSize: ".85em",
      color: "#57606a",
    },
    ".markdown-body p": {
      marginTop: "0",
      marginBottom: "10px",
    },
    ".markdown-body blockquote": {
      margin: "0",
      padding: "0 1em",
      color: "#57606a",
      borderLeft: ".25em solid #d0d7de",
    },
    ".markdown-body ul, .markdown-body ol": {
      marginTop: "0",
      marginBottom: "0",
      paddingLeft: "2em",
    },
    ".markdown-body ol ol, .markdown-body ul ol": {
      listStyleType: "lower-roman",
    },
    ".markdown-body ul ul ol, .markdown-body ul ol ol, .markdown-body ol ul ol, .markdown-body ol ol ol":
      {
        listStyleType: "lower-alpha",
      },
    ".markdown-body dd": {
      marginLeft: "0",
    },
    ".markdown-body tt, .markdown-body code": {
      fontFamily:
        "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
      fontSize: "12px",
    },
    ".markdown-body pre": {
      marginTop: "0",
      marginBottom: "0",
      fontFamily:
        "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
      fontSize: "12px",
      wordWrap: "normal",
    },
    ".markdown-body ::placeholder": {
      color: "#6e7781",
      opacity: "1",
    },
    ".markdown-body input::-webkit-outer-spin-button, .markdown-body input::-webkit-inner-spin-button":
      {
        margin: "0",
        webkitAppearance: "none",
        appearance: "none",
      },
    ".markdown-body .pl-c": {
      color: "#6e7781",
    },
    ".markdown-body .pl-c1, .markdown-body .pl-s .pl-v": {
      color: "#0550ae",
    },
    ".markdown-body .pl-e, .markdown-body .pl-en": {
      color: "#8250df",
    },
    ".markdown-body .pl-smi, .markdown-body .pl-s .pl-s1": {
      color: "#24292f",
    },
    ".markdown-body .pl-ent": {
      color: "#116329",
    },
    ".markdown-body .pl-k": {
      color: "#cf222e",
    },
    ".markdown-body .pl-s, .markdown-body .pl-pds, .markdown-body .pl-s .pl-pse .pl-s1, .markdown-body .pl-sr, .markdown-body .pl-sr .pl-cce, .markdown-body .pl-sr .pl-sre, .markdown-body .pl-sr .pl-sra":
      {
        color: "#0a3069",
      },
    ".markdown-body .pl-v, .markdown-body .pl-smw": {
      color: "#953800",
    },
    ".markdown-body .pl-bu": {
      color: "#82071e",
    },
    ".markdown-body .pl-ii": {
      color: "#f6f8fa",
      backgroundColor: "#82071e",
    },
    ".markdown-body .pl-c2": {
      color: "#f6f8fa",
      backgroundColor: "#cf222e",
    },
    ".markdown-body .pl-sr .pl-cce": {
      fontWeight: "bold",
      color: "#116329",
    },
    ".markdown-body .pl-ml": {
      color: "#3b2300",
    },
    ".markdown-body .pl-mh, .markdown-body .pl-mh .pl-en, .markdown-body .pl-ms":
      {
        fontWeight: "bold",
        color: "#0550ae",
      },
    ".markdown-body .pl-mi": {
      fontStyle: "italic",
      color: "#24292f",
    },
    ".markdown-body .pl-mb": {
      fontWeight: "bold",
      color: "#24292f",
    },
    ".markdown-body .pl-md": {
      color: "#82071e",
      backgroundColor: "#FFEBE9",
    },
    ".markdown-body .pl-mi1": {
      color: "#116329",
      backgroundColor: "#dafbe1",
    },
    ".markdown-body .pl-mc": {
      color: "#953800",
      backgroundColor: "#ffd8b5",
    },
    ".markdown-body .pl-mi2": {
      color: "#eaeef2",
      backgroundColor: "#0550ae",
    },
    ".markdown-body .pl-mdr": {
      fontWeight: "bold",
      color: "#8250df",
    },
    ".markdown-body .pl-ba": {
      color: "#57606a",
    },
    ".markdown-body .pl-sg": {
      color: "#8c959f",
    },
    ".markdown-body .pl-corl": {
      textDecoration: "underline",
      color: "#0a3069",
    },
    ".markdown-body [data-catalyst]": {
      display: "block",
    },
    ".markdown-body g-emoji": {
      fontFamily: '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontSize: "1em",
      fontStyle: "normal !important",
      fontWeight: "400",
      lineHeight: "1",
      verticalAlign: "-0.075em",
    },
    ".markdown-body g-emoji img": {
      width: "1em",
      height: "1em",
    },
    ".markdown-body::before": {
      display: "table",
      content: '""',
    },
    ".markdown-body::after": {
      display: "table",
      clear: "both",
      content: '""',
    },
    ".markdown-body>*:first-child": {
      marginTop: "0 !important",
    },
    ".markdown-body>*:last-child": {
      marginBottom: "0 !important",
    },
    ".markdown-body a:not([href])": {
      color: "inherit",
      textDecoration: "none",
    },
    ".markdown-body .absent": {
      color: "#cf222e",
    },
    ".markdown-body .anchor": {
      float: "left",
      paddingRight: "4px",
      marginLeft: "-20px",
      lineHeight: "1",
    },
    ".markdown-body .anchor:focus": {
      outline: "none",
    },
    ".markdown-body p, .markdown-body blockquote, .markdown-body ul, .markdown-body ol, .markdown-body dl, .markdown-body table, .markdown-body pre, .markdown-body details":
      {
        marginTop: "0",
        marginBottom: "16px",
      },
    ".markdown-body blockquote>:first-child": {
      marginTop: "0",
    },
    ".markdown-body blockquote>:last-child": {
      marginBottom: "0",
    },
    ".markdown-body sup>a::before": {
      content: '"["',
    },
    ".markdown-body sup>a::after": {
      content: '"]"',
    },
    ".markdown-body h1 .octicon-link, .markdown-body h2 .octicon-link, .markdown-body h3 .octicon-link, .markdown-body h4 .octicon-link, .markdown-body h5 .octicon-link, .markdown-body h6 .octicon-link":
      {
        color: "#24292f",
        verticalAlign: "middle",
        visibility: "hidden",
      },
    ".markdown-body h1:hover .anchor, .markdown-body h2:hover .anchor, .markdown-body h3:hover .anchor, .markdown-body h4:hover .anchor, .markdown-body h5:hover .anchor, .markdown-body h6:hover .anchor":
      {
        textDecoration: "none",
      },
    ".markdown-body h1:hover .anchor .octicon-link, .markdown-body h2:hover .anchor .octicon-link, .markdown-body h3:hover .anchor .octicon-link, .markdown-body h4:hover .anchor .octicon-link, .markdown-body h5:hover .anchor .octicon-link, .markdown-body h6:hover .anchor .octicon-link":
      {
        visibility: "visible",
      },
    ".markdown-body h1 tt, .markdown-body h1 code, .markdown-body h2 tt, .markdown-body h2 code, .markdown-body h3 tt, .markdown-body h3 code, .markdown-body h4 tt, .markdown-body h4 code, .markdown-body h5 tt, .markdown-body h5 code, .markdown-body h6 tt, .markdown-body h6 code":
      {
        padding: "0 .2em",
        fontSize: "inherit",
      },
    ".markdown-body ul.no-list, .markdown-body ol.no-list": {
      padding: "0",
      listStyleType: "none",
    },
    '.markdown-body ol[type="1"]': {
      listStyleType: "decimal",
    },
    ".markdown-body ol[type=a]": {
      listStyleType: "lower-alpha",
    },
    ".markdown-body ol[type=i]": {
      listStyleType: "lower-roman",
    },
    ".markdown-body div>ol:not([type])": {
      listStyleType: "decimal",
    },
    ".markdown-body ul ul, .markdown-body ul ol, .markdown-body ol ol, .markdown-body ol ul":
      {
        marginTop: "0",
        marginBottom: "0",
      },
    ".markdown-body li>p": {
      marginTop: "16px",
    },
    ".markdown-body li+li": {
      marginTop: ".25em",
    },
    ".markdown-body dl": {
      padding: "0",
    },
    ".markdown-body dl dt": {
      padding: "0",
      marginTop: "16px",
      fontSize: "1em",
      fontStyle: "italic",
      fontWeight: "600",
    },
    ".markdown-body dl dd": {
      padding: "0 16px",
      marginBottom: "16px",
    },
    ".markdown-body table th": {
      fontWeight: "600",
    },
    ".markdown-body table th, .markdown-body table td": {
      padding: "6px 13px",
      border: "1px solid #d0d7de",
    },
    ".markdown-body table tr": {
      backgroundColor: "#ffffff",
      borderTop: "1px solid hsla(210,18%,87%,1)",
    },
    ".markdown-body table tr:nth-child(2n)": {
      backgroundColor: "#f6f8fa",
    },
    ".markdown-body table img": {
      backgroundColor: "transparent",
    },
    ".markdown-body img[align=right]": {
      paddingLeft: "20px",
    },
    ".markdown-body img[align=left]": {
      paddingRight: "20px",
    },
    ".markdown-body .emoji": {
      maxWidth: "none",
      verticalAlign: "text-top",
      backgroundColor: "transparent",
    },
    ".markdown-body span.frame": {
      display: "block",
      overflow: "hidden",
    },
    ".markdown-body span.frame>span": {
      display: "block",
      float: "left",
      width: "auto",
      padding: "7px",
      margin: "13px 0 0",
      overflow: "hidden",
      border: "1px solid #d0d7de",
    },
    ".markdown-body span.frame span img": {
      display: "block",
      float: "left",
    },
    ".markdown-body span.frame span span": {
      display: "block",
      padding: "5px 0 0",
      clear: "both",
      color: "#24292f",
    },
    ".markdown-body span.align-center": {
      display: "block",
      overflow: "hidden",
      clear: "both",
    },
    ".markdown-body span.align-center>span": {
      display: "block",
      margin: "13px auto 0",
      overflow: "hidden",
      textAlign: "center",
    },
    ".markdown-body span.align-center span img": {
      margin: "0 auto",
      textAlign: "center",
    },
    ".markdown-body span.align-right": {
      display: "block",
      overflow: "hidden",
      clear: "both",
    },
    ".markdown-body span.align-right>span": {
      display: "block",
      margin: "13px 0 0",
      overflow: "hidden",
      textAlign: "right",
    },
    ".markdown-body span.align-right span img": {
      margin: "0",
      textAlign: "right",
    },
    ".markdown-body span.float-left": {
      display: "block",
      float: "left",
      marginRight: "13px",
      overflow: "hidden",
    },
    ".markdown-body span.float-left span": {
      margin: "13px 0 0",
    },
    ".markdown-body span.float-right": {
      display: "block",
      float: "right",
      marginLeft: "13px",
      overflow: "hidden",
    },
    ".markdown-body span.float-right>span": {
      display: "block",
      margin: "13px auto 0",
      overflow: "hidden",
      textAlign: "right",
    },
    ".markdown-body code, .markdown-body tt": {
      padding: ".2em .4em",
      margin: "0",
      fontSize: "85%",
      backgroundColor: "rgba(175,184,193,0.2)",
      borderRadius: "6px",
    },
    ".markdown-body code br, .markdown-body tt br": {
      display: "none",
    },
    ".markdown-body del code": {
      textDecoration: "inherit",
    },
    ".markdown-body pre code": {
      fontSize: "100%",
    },
    ".markdown-body pre>code": {
      padding: "0",
      margin: "0",
      wordBreak: "normal",
      whiteSpace: "pre",
      background: "transparent",
      border: "0",
    },
    ".markdown-body .highlight": {
      marginBottom: "16px",
    },
    ".markdown-body .highlight pre": {
      marginBottom: "0",
      wordBreak: "normal",
    },
    ".markdown-body .highlight pre, .markdown-body pre": {
      padding: "16px",
      overflow: "auto",
      fontSize: "85%",
      lineHeight: "1.45",
      backgroundColor: "#f6f8fa",
      borderRadius: "6px",
    },
    ".markdown-body pre code, .markdown-body pre tt": {
      display: "inline",
      maxWidth: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      lineHeight: "inherit",
      wordWrap: "normal",
      backgroundColor: "transparent",
      border: "0",
    },
    ".markdown-body .csv-data td, .markdown-body .csv-data th": {
      padding: "5px",
      overflow: "hidden",
      fontSize: "12px",
      lineHeight: "1",
      textAlign: "left",
      whiteSpace: "nowrap",
    },
    ".markdown-body .csv-data .blob-num": {
      padding: "10px 8px 9px",
      textAlign: "right",
      background: "#ffffff",
      border: "0",
    },
    ".markdown-body .csv-data tr": {
      borderTop: "0",
    },
    ".markdown-body .csv-data th": {
      fontWeight: "600",
      background: "#f6f8fa",
      borderTop: "0",
    },
    ".markdown-body .footnotes": {
      fontSize: "12px",
      color: "#57606a",
      borderTop: "1px solid #d0d7de",
    },
    ".markdown-body .footnotes ol": {
      paddingLeft: "16px",
    },
    ".markdown-body .footnotes li": {
      position: "relative",
    },
    ".markdown-body .footnotes li:target::before": {
      position: "absolute",
      top: "-8px",
      right: "-8px",
      bottom: "-8px",
      left: "-24px",
      pointerEvents: "none",
      content: '""',
      border: "2px solid #0969da",
      borderRadius: "6px",
    },
    ".markdown-body .footnotes li:target": {
      color: "#24292f",
    },
    ".markdown-body .footnotes .data-footnote-backref g-emoji": {
      fontFamily: "monospace",
    },
    ".markdown-body .task-list-item": {
      listStyleType: "none",
    },
    ".markdown-body .task-list-item label": {
      fontWeight: "400",
    },
    ".markdown-body .task-list-item.enabled label": {
      cursor: "pointer",
    },
    ".markdown-body .task-list-item+.task-list-item": {
      marginTop: "3px",
    },
    ".markdown-body .task-list-item .handle": {
      display: "none",
    },
    ".markdown-body .task-list-item-checkbox": {
      margin: "0 .2em .25em -1.6em",
      verticalAlign: "middle",
    },
    ".markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox": {
      margin: "0 -1.6em .25em .2em",
    },
    ".markdown-body ::-webkit-calendar-picker-indicator": {
      filter: "invert(50%)",
    },
  },
};

export default markdownStyles;
