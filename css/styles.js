import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "backgroundColor": "#f7d9d9"
    },
    "body": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "#fff",
        "font": "Arial, Helvetica, sans-serif",
        "color": "#532c4c"
    },
    "img": {
        "height": "auto",
        "width": "100%"
    },
    "a": {
        "textDecoration": "none",
        "color": "#534c4c"
    },
    "logo": {
        "textAlign": "center",
        "fontSize": 1.4,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "highlighted": {
        "color": "#c158ad",
        "fontSize": 0.8
    },
    "header ul": {
        "width": "100%",
        "textAlign": "center",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header li": {
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "#eee"
    },
    "fa": {
        "marginLeft": 5
    },
    "menu-collapser": {
        "backgroundColor": "#aaa",
        "textAlign": "center"
    },
    "nav a": {
        "backgroundColor": "#50657b"
    },
    "slimmenu ul > li a": {
        "backgroundColor": "#fcfcfc"
    },
    "ulslimmenu li >ul": {
        "backgroundColor": "#fff"
    },
    "sale-text": {
        "color": "#dd5454"
    },
    "form": {
        "textAlign": "center"
    },
    "input[type=search]": {
        "height": 2,
        "width": "70%"
    },
    "input[type=button]": {
        "height": 2
    },
    "input[type=email]": {
        "height": 2,
        "width": "60%"
    },
    "sub-nav p": {
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 40,
        "lineHeight": 40,
        "border": "1px solid #aaa"
    },
    "feature": {
        "position": "relative"
    },
    "gallery p": {
        "position": "absolute",
        "bottom": 5,
        "color": "#c158ad",
        "textAlign": "center",
        "width": "100%",
        "fontSize": 1.5,
        "paddingTop": "2%",
        "paddingRight": 0,
        "paddingBottom": "2%",
        "paddingLeft": 0,
        "backgroundColor": "#ddd",
        "opacity": 0.7,
        "filter": "alpha(opacity=70)"
    },
    "about-us": {
        "textAlign": "center",
        "lineHeight": 1.5
    },
    "footer ul": {
        "width": "100%",
        "textAlign": "center",
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer li": {
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "#eee",
        "borderTop": "1px dotted #aaa"
    },
    "footer li:last-child": {
        "borderBottom": "1px dotted #aaa"
    }
});