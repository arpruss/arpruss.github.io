var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["flags"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/flags.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/flags.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* #4C97FF */ /* #3373CC */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* #9966FF */ /* #774DCB */ /* 35% transparent version of looks-primary */ /* 15% transparent version of looks-primary */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* #0FBD8C */ /* #0B8E69 */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ /* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */ /* layout contants from `layout-constants.js` */ body {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n} h2 {\n    font-size: 1.5rem;\n    font-weight: bold;\n} p {\n    font-size: 1rem;\n    line-height: 1.5em;\n} /*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are \"inside\" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/ /* Toolbox z-index: 40; set in scratch-blocks */ /* tooltips should go over add buttons if they overlap */ /* monitors go over add buttons */ /* \"ask\" block text input goes above monitors */ /* menu-bar should go over monitors, alerts and tutorials */ /* Block drag z-index: 1000; default 50 is overriden in blocks.css */ /* so it is draggable into other panes */ /* in most interfaces, the context menu is always on top */ html,\nbody,\n.flags_app_3V-Cb {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%;\n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n} /* @todo: move globally? Safe / side FX, for blocks particularly? */ * { -webkit-box-sizing: border-box; box-sizing: border-box; } .flags_page-wrapper_3zr4a {\n    height: 100%;\n} .flags_body-wrapper_3K1Hu {\n    height: calc(100% - 3rem);\n    background-color: hsla(215, 100%, 95%, 1);\n} .flags_body-wrapper_3K1Hu * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n} .flags_flex-wrapper_2Qlls {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n\n    /*\n        Make 2 columns:\n        a) for the blocks + workspace panes, and\n        b) for combined stage menu + stage + sprite/stage selectors\n    */\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 100%;\n\n    /*\n        Stop scrollbar popping in and out from scratch-blocks border issue\n        https://github.com/LLK/scratch-gui/issues/318\n    */\n    overflow-y: hidden;\n} .flags_editor-wrapper_2IKYR {\n    /*\n        This is carefully balanced--  the minimum width at which the GUI will be displayed is 1024px.\n        At that size, the stage pane is 408px wide, with $space of padding to each side.\n        However, we must also add the border width to the stage pane. All-in-all, the stage pane's final width is\n        408px + ($space + $stage-standard-border-width * 2) (one border & padding per left/right side).\n\n        @todo This is in place to prevent \"doubling up\" of horizontal scrollbars in narrow windows, but there are likely\n        much better ways to solve that (e.g. undo #2124, remove this flex-basis entirely). However, they run their own\n        risks of breaking things, so let's just leave this as-is for the time being.\n    */\n    /* flex-basis: calc(1024px - 408px - (($space + $stage-standard-border-width) * 2)); */\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n    position: relative;\n\n    display: -webkit-box;\n\n    display: -webkit-flex;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n} .flags_tab-list_hYkut {\n    height: 2.75rem;\n    width: 250px; /* Match width of the toolbox */\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-weight: 500;\n    font-size: 0.80rem;\n\n    /* Overrides for react-tabs styling */\n    margin: 0 !important;\n    border-bottom: 0 !important;\n} .flags_tab_2c7wP {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    height: 80%;\n    margin-bottom: 0;\n\n    border-radius: 1rem 1rem 0 0;\n    border: 1px solid hsla(0, 0%, 0%, 0.15);\n\n    padding: 0.125rem 1.25rem 0;\n    font-size: 0.75rem;\n\n    background-color: hsla(215, 50%, 90%, 1);\n    color: hsla(225, 15%, 40%, 0.75);\n\n    display: -webkit-box;\n\n    display: -webkit-flex;\n\n    display: -ms-flexbox;\n\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n\n    -webkit-user-select: none;\n\n       -moz-user-select: none;\n\n        -ms-user-select: none;\n\n            user-select: none;\n    white-space: nowrap;\n} [dir=\"ltr\"] .flags_tab_2c7wP {\n    margin-left: -0.5rem;\n} [dir=\"rtl\"] .flags_tab_2c7wP {\n    margin-right: -0.5rem;\n} [dir=\"ltr\"] .flags_tab_2c7wP:nth-of-type(1) {\n    margin-left: 0;\n} [dir=\"rtl\"] .flags_tab_2c7wP:nth-of-type(1) {\n    margin-right: 0;\n} /* Use z-indices to force left-on-top for tabs */ .flags_tab_2c7wP:nth-of-type(1) {\n    z-index: 3;\n} .flags_tab_2c7wP:nth-of-type(2) {\n    z-index: 2;\n} .flags_tab_2c7wP:nth-of-type(3) {\n    z-index: 1;\n} .flags_tab_2c7wP:hover {\n  background-color: hsla(215, 100%, 95%, 1);\n} .flags_tab_2c7wP.flags_is-selected_144dR {\n    height: 90%;\n    color: hsla(215, 100%, 65%, 1);\n    background-color: hsla(0, 100%, 100%, 1);\n    z-index: 4; /* Make sure selected is always above */\n} .flags_tab_2c7wP img {\n    width: 1.375rem;\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%);\n} [dir=\"ltr\"] .flags_tab_2c7wP img {\n    margin-right: 0.125rem;\n} [dir=\"rtl\"] .flags_tab_2c7wP img {\n    margin-left: 0.125rem;\n} /* mirror blocks and sound tab icons */ [dir=\"rtl\"] .flags_tab_2c7wP:nth-of-type(1) img {\n    -webkit-transform: scaleX(-1);\n        -ms-transform: scaleX(-1);\n            transform: scaleX(-1);\n} [dir=\"rtl\"] .flags_tab_2c7wP:nth-of-type(3) img {\n    -webkit-transform: scaleX(-1);\n        -ms-transform: scaleX(-1);\n            transform: scaleX(-1);\n} .flags_tab_2c7wP.flags_is-selected_144dR img {\n    -webkit-filter: none;\n            filter: none;\n} /* Tab style overrides from react-tabs */ .flags_tab_2c7wP.flags_is-selected_144dR:after {\n    display: none;\n} .flags_tab_2c7wP.flags_is-selected_144dR:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-color: hsla(0, 0%, 0%, 0.15);\n} .flags_tab_2c7wP.flags_is-selected_144dR:focus:after {\n    display: none;\n} /* Body of the tabs */ .flags_tabs_JWQ-M {\n    position: relative;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n} .flags_tab-panel_3DOBT {\n    position: relative;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: none;\n} .flags_tab-panel_3DOBT.flags_is-selected_144dR {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n} .flags_blocks-wrapper_XhzwJ {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    position: relative;\n} .flags_stage-and-target-wrapper_2OFmB {\n    /*\n        Makes rows for children:\n          1) stage menu\n          2) stage\n          3) sprite/stage selectors\n        Only reason we need this, is so .targetWrapper, which holds the selectors,\n        goes to full vertical height of the window\n    */\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    /* pad entire wrapper to the left and right; allow children to fill width */\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n\n    /* this will only ever be as wide as the stage */\n    /* flex-basis: 0; */\n} .flags_target-wrapper_3HfTD {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-flex-basis: 0;\n        -ms-flex-preferred-size: 0;\n            flex-basis: 0;\n\n    padding-top: 0.5rem;\n    min-height: 0; /* this makes it work in Firefox */\n\n    /*\n        For making the sprite-selector a scrollable pane\n        @todo: Not working in Safari\n    */\n    /* TODO this also breaks the thermometer menu */\n    /* overflow: hidden; */\n} .flags_extension-button-container_1wpS0 {\n    width: 3.75rem;\n    height: 3.25rem;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 42;\n    background: hsla(215, 100%, 65%, 1);\n\n    border: 1px solid hsla(215, 100%, 65%, 1);\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; /* To match scratch-block vertical toolbox borders */\n} .flags_extension-button-container_1wpS0:before {\n    content: \"\";\n    position: absolute;\n    top: calc(calc(-1 * 15px) - 1px);\n    left: -1px;\n    background: -webkit-gradient(linear,left top, left bottom,from(rgba(0, 0, 0, 0)),to(rgba(0, 0, 0, 0.15)));\n    background: -o-linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15));\n    background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15));\n    height: 15px;\n    width: calc(100% + 0.5px);\n} .flags_extension-button_bYi8s {\n    background: none;\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n} .flags_extension-button-icon_gLDUg {\n    width: 1.75rem;\n    height: 1.75rem;\n} [dir=\"rtl\"] .flags_extension-button-icon_gLDUg {\n    -webkit-transform: scaleX(-1);\n        -ms-transform: scaleX(-1);\n            transform: scaleX(-1);\n} .flags_extension-button_bYi8s > div {\n    margin-top: 0;\n} /* Sprite Selection Watermark */ .flags_watermark_6utye {\n    position: absolute;\n    top: 1.25rem;\n    pointer-events: none;\n} [dir=\"ltr\"] .flags_watermark_6utye {\n    right: 1.25rem;\n} [dir=\"rtl\"] .flags_watermark_6utye {\n    left: 1.25rem;\n} /* Menu */ .flags_menu-bar-position_2GTee {\n    position: relative;\n    z-index: 491;\n} /* Alerts */ .flags_alerts-container_3KHSz {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%;\n    z-index: 490;\n    position: absolute;\n    margin-top: 53px;\n    pointer-events: none;\n} /*\n    Make the (background) page not scrollable when modals are open\n    This CSS class is automatically added to the body when react-modal is open\n*/ .ReactModal__Body--open {\n    overflow: hidden;\n} /* Taken from src/components/webgl-modal/webgl-modal.css */ .flags_content_1jujc {\n    margin: 100px auto;\n    padding: 1.5rem 2.25rem;\n    border-radius: 0.5rem;\n    width: 500px;\n\n    color: hsla(225, 15%, 40%, 1);\n} .flags_faq-link-text_3V_VV {\n    margin: 2rem 0 .5rem 0;\n    font-size: .875rem;\n    color: hsla(225, 15%, 40%, 1);\n} .flags_faq-link_BrUCN {\n    color: hsla(215, 100%, 65%, 1);\n    text-decoration: none;\n} /* Confirmation buttons at the bottom of the modal */ .flags_button-row_1R76W {\n    margin: 1.5rem 0;\n    font-weight: bolder;\n    text-align: right;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n} .flags_button-row_1R76W button {\n    border: 1px solid hsla(215, 100%, 65%, 1);\n    border-radius: 0.25rem;\n    padding: 0.5rem 2rem;\n    background: hsla(215, 100%, 65%, 1);\n    color: white;\n    font-weight: bold;\n    font-size: 0.875rem;\n    cursor: pointer;\n} .flags_label_1XOOh {\n    margin-right: 0.5rem;\n} .flags_default_3s9Mi {\n    margin-left: 0.5rem;\n    color: hsla(225, 15%, 40%, 0.75);\n} .flags_monitor-container_37kLz {\n    z-index: 48;\n    border: 1px solid hsla(0, 0%, 0%, 0.15);\n    border-radius: calc(0.5rem / 2);\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 0.75rem;\n    -webkit-transition: -webkit-box-shadow 0.2s;\n    transition: -webkit-box-shadow 0.2s;\n    -o-transition: box-shadow 0.2s;\n    transition: box-shadow 0.2s;\n    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;\n    pointer-events: all;\n    overflow: hidden;\n    margin: 1em 0;\n}\n", ""]);

// exports
exports.locals = {
	"app": "flags_app_3V-Cb",
	"page-wrapper": "flags_page-wrapper_3zr4a",
	"pageWrapper": "flags_page-wrapper_3zr4a",
	"body-wrapper": "flags_body-wrapper_3K1Hu",
	"bodyWrapper": "flags_body-wrapper_3K1Hu",
	"flex-wrapper": "flags_flex-wrapper_2Qlls",
	"flexWrapper": "flags_flex-wrapper_2Qlls",
	"editor-wrapper": "flags_editor-wrapper_2IKYR",
	"editorWrapper": "flags_editor-wrapper_2IKYR",
	"tab-list": "flags_tab-list_hYkut",
	"tabList": "flags_tab-list_hYkut",
	"tab": "flags_tab_2c7wP",
	"is-selected": "flags_is-selected_144dR",
	"isSelected": "flags_is-selected_144dR",
	"tabs": "flags_tabs_JWQ-M",
	"tab-panel": "flags_tab-panel_3DOBT",
	"tabPanel": "flags_tab-panel_3DOBT",
	"blocks-wrapper": "flags_blocks-wrapper_XhzwJ",
	"blocksWrapper": "flags_blocks-wrapper_XhzwJ",
	"stage-and-target-wrapper": "flags_stage-and-target-wrapper_2OFmB",
	"stageAndTargetWrapper": "flags_stage-and-target-wrapper_2OFmB",
	"target-wrapper": "flags_target-wrapper_3HfTD",
	"targetWrapper": "flags_target-wrapper_3HfTD",
	"extension-button-container": "flags_extension-button-container_1wpS0",
	"extensionButtonContainer": "flags_extension-button-container_1wpS0",
	"extension-button": "flags_extension-button_bYi8s",
	"extensionButton": "flags_extension-button_bYi8s",
	"extension-button-icon": "flags_extension-button-icon_gLDUg",
	"extensionButtonIcon": "flags_extension-button-icon_gLDUg",
	"watermark": "flags_watermark_6utye",
	"menu-bar-position": "flags_menu-bar-position_2GTee",
	"menuBarPosition": "flags_menu-bar-position_2GTee",
	"alerts-container": "flags_alerts-container_3KHSz",
	"alertsContainer": "flags_alerts-container_3KHSz",
	"content": "flags_content_1jujc",
	"faq-link-text": "flags_faq-link-text_3V_VV",
	"faqLinkText": "flags_faq-link-text_3V_VV",
	"faq-link": "flags_faq-link_BrUCN",
	"faqLink": "flags_faq-link_BrUCN",
	"button-row": "flags_button-row_1R76W",
	"buttonRow": "flags_button-row_1R76W",
	"label": "flags_label_1XOOh",
	"default": "flags_default_3s9Mi",
	"monitor-container": "flags_monitor-container_37kLz",
	"monitorContainer": "flags_monitor-container_37kLz"
};

/***/ }),

/***/ "./src/playground/flags.css":
/*!**********************************!*\
  !*** ./src/playground/flags.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./flags.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/flags.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/flags.jsx":
/*!**********************************!*\
  !*** ./src/playground/flags.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menu-bar/menu-bar.jsx */ "./src/components/menu-bar/menu-bar.jsx");
/* harmony import */ var _components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/box/box.jsx */ "./src/components/box/box.jsx");
/* harmony import */ var _components_forms_input_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/input.jsx */ "./src/components/forms/input.jsx");
/* harmony import */ var _components_webgl_modal_webgl_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/webgl-modal/webgl-modal.jsx */ "./src/components/webgl-modal/webgl-modal.jsx");
/* harmony import */ var _components_monitor_list_monitor_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/monitor/list-monitor.jsx */ "./src/components/monitor/list-monitor.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _reducers_project_title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/project-title */ "./src/reducers/project-title.js");
/* harmony import */ var _parse_url_options_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parse-url-options.js */ "./src/playground/parse-url-options.js");
/* harmony import */ var _components_menu_bar_scratch_logo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/menu-bar/scratch-logo.svg */ "./src/components/menu-bar/scratch-logo.svg");
/* harmony import */ var _components_menu_bar_scratch_logo_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_menu_bar_scratch_logo_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _flags_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./flags.css */ "./src/playground/flags.css");
/* harmony import */ var _flags_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_flags_css__WEBPACK_IMPORTED_MODULE_14__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















var Field = function Field(_ref) {
  var children = _ref.children,
      defaultDescription = _ref.default,
      props = _objectWithoutProperties(_ref, ["children", "default"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.label
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forms_input_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], props), defaultDescription && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.default
  }, "(default: ".concat(defaultDescription, ")"))));
};

var Toggle = function Toggle(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "checkbox"
  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.label
  }, children)));
};

var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _super.call(this, props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(_assertThisInitialized(_this), ['handleActivate', 'handleDeactivate', 'handleInput', 'handleRemove', 'handleKeyPress', 'handleFocus', 'handleAdd']);
    _this.state = {
      activeIndex: null,
      activeValue: null
    };
    return _this;
  }

  _createClass(List, [{
    key: "handleActivate",
    value: function handleActivate(index) {
      // Do nothing if activating the currently active item
      if (this.state.activeIndex === index) {
        return;
      }

      this.setState({
        activeIndex: index,
        activeValue: this.props.value[index]
      });
    }
  }, {
    key: "handleDeactivate",
    value: function handleDeactivate() {
      // Submit any in-progress value edits on blur
      if (this.state.activeIndex !== null) {
        var newListValue = this.props.value.slice();
        newListValue[this.state.activeIndex] = this.state.activeValue;
        this.props.onChange(newListValue);
        this.setState({
          activeIndex: null,
          activeValue: null
        });
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      // Select all the text in the input when it is focused.
      e.target.select();
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      // Special case for tab, arrow keys and enter.
      // Tab / shift+tab navigate down / up the list.
      // Arrow down / arrow up navigate down / up the list.
      // Enter / shift+enter insert new blank item below / above.
      var previouslyActiveIndex = this.state.activeIndex;
      var _this$props = this.props,
          vm = _this$props.vm,
          targetId = _this$props.targetId,
          variableId = _this$props.id;
      var navigateDirection = 0;
      if (e.key === 'Tab') navigateDirection = e.shiftKey ? -1 : 1;else if (e.key === 'ArrowUp') navigateDirection = -1;else if (e.key === 'ArrowDown') navigateDirection = 1;

      if (navigateDirection) {
        this.handleDeactivate(); // Submit in-progress edits

        var newIndex = this.wrapListIndex(previouslyActiveIndex + navigateDirection, this.props.value.length);
        this.setState({
          activeIndex: newIndex,
          activeValue: this.props.value[newIndex]
        });
        e.preventDefault(); // Stop default tab behavior, handled by this state change
      } else if (e.key === 'Enter') {
        // Submit in-progress edits
        var listValue = this.props.value.slice();
        listValue[this.state.activeIndex] = this.state.activeValue;
        var newListItemValue = ''; // Enter adds a blank item

        var newValueOffset = e.shiftKey ? 0 : 1; // Shift-enter inserts above

        var newListValue = listValue.slice(0, previouslyActiveIndex + newValueOffset).concat([newListItemValue]).concat(listValue.slice(previouslyActiveIndex + newValueOffset));
        this.props.onChange(newListValue);

        var _newIndex = this.wrapListIndex(previouslyActiveIndex + newValueOffset, newListValue.length);

        this.setState({
          activeIndex: _newIndex,
          activeValue: newListItemValue
        });
        e.preventDefault();
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      this.setState({
        activeValue: e.target.value
      });
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(e) {
      e.preventDefault(); // Default would blur input, prevent that.

      e.stopPropagation(); // Bubbling would activate, which will be handled here

      var newListValue = this.props.value.slice(0, this.state.activeIndex).concat(this.props.value.slice(this.state.activeIndex + 1));
      this.props.onChange(newListValue);
      var newActiveIndex = Math.min(newListValue.length - 1, this.state.activeIndex);
      this.setState({
        activeIndex: newActiveIndex,
        activeValue: newListValue[newActiveIndex]
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd() {
      // Add button appends a blank value and switches to it
      var newListValue = this.props.value.concat(['']);
      this.props.onChange([].concat(_toConsumableArray(this.props.value), ['']));
      this.setState({
        activeIndex: newListValue.length - 1,
        activeValue: ''
      });
    }
  }, {
    key: "wrapListIndex",
    value: function wrapListIndex(index, length) {
      return (index + length) % length;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.monitorContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_monitor_list_monitor_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
        activeIndex: this.state.activeIndex,
        activeValue: this.state.activeValue,
        onActivate: this.handleActivate,
        onAdd: this.handleAdd,
        onDeactivate: this.handleDeactivate,
        onFocus: this.handleFocus,
        onInput: this.handleInput,
        onKeyPress: this.handleKeyPress,
        onRemove: this.handleRemove,
        categoryColor: "#9966ff",
        width: 428,
        draggable: true
      }, this.props)));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Flags = /*#__PURE__*/function (_React$Component2) {
  _inherits(Flags, _React$Component2);

  var _super2 = _createSuper(Flags);

  function Flags(props) {
    var _this2;

    _classCallCheck(this, Flags);

    _this2 = _super2.call(this, props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(_assertThisInitialized(_this2), ['handleSubmit', 'handleClickLogo', 'handleClickAbout', 'handleChangeLoadGriffpatch', 'handleChangeLoadPlugins', 'handleChangeCloudHost', 'handleChangeUsername', 'handleChangeCompatibilityMode', 'handleChangeExtensionURLs', 'handleChangeImposeLimits', 'handleChangeWidth', 'handleChangeHeight']);

    _this2.props.setTitle('E羊icques URL settings');

    var _parseOptionsFromUrl = Object(_parse_url_options_js__WEBPACK_IMPORTED_MODULE_12__["default"])(),
        _parseOptionsFromUrl$ = _parseOptionsFromUrl.loadGriffpatch,
        loadGriffpatch = _parseOptionsFromUrl$ === void 0 ? false : _parseOptionsFromUrl$,
        _parseOptionsFromUrl$2 = _parseOptionsFromUrl.loadPlugins,
        loadPlugins = _parseOptionsFromUrl$2 === void 0 ? [] : _parseOptionsFromUrl$2,
        _parseOptionsFromUrl$3 = _parseOptionsFromUrl.cloudHost,
        cloudHost = _parseOptionsFromUrl$3 === void 0 ? '' : _parseOptionsFromUrl$3,
        _parseOptionsFromUrl$4 = _parseOptionsFromUrl.username,
        username = _parseOptionsFromUrl$4 === void 0 ? 'username' : _parseOptionsFromUrl$4,
        _parseOptionsFromUrl$5 = _parseOptionsFromUrl.compatibilityMode,
        compatibilityMode = _parseOptionsFromUrl$5 === void 0 ? true : _parseOptionsFromUrl$5,
        _parseOptionsFromUrl$6 = _parseOptionsFromUrl.extensionURLs,
        extensionURLs = _parseOptionsFromUrl$6 === void 0 ? [] : _parseOptionsFromUrl$6,
        _parseOptionsFromUrl$7 = _parseOptionsFromUrl.imposeLimits,
        imposeLimits = _parseOptionsFromUrl$7 === void 0 ? true : _parseOptionsFromUrl$7,
        _parseOptionsFromUrl$8 = _parseOptionsFromUrl.width,
        width = _parseOptionsFromUrl$8 === void 0 ? 480 : _parseOptionsFromUrl$8,
        _parseOptionsFromUrl$9 = _parseOptionsFromUrl.height,
        height = _parseOptionsFromUrl$9 === void 0 ? 360 : _parseOptionsFromUrl$9;

    _this2.state = {
      loadGriffpatch: loadGriffpatch,
      loadPlugins: loadPlugins,
      cloudHost: cloudHost,
      username: username,
      compatibilityMode: compatibilityMode,
      extensionURLs: extensionURLs,
      imposeLimits: imposeLimits,
      width: width,
      height: height
    };
    return _this2;
  }

  _createClass(Flags, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var _this$state = this.state,
          loadGriffpatch = _this$state.loadGriffpatch,
          loadPlugins = _this$state.loadPlugins,
          cloudHost = _this$state.cloudHost,
          username = _this$state.username,
          compatibilityMode = _this$state.compatibilityMode,
          extensionURLs = _this$state.extensionURLs,
          imposeLimits = _this$state.imposeLimits,
          width = _this$state.width,
          height = _this$state.height;
      var params = "?width=".concat(width, "&height=").concat(height) + "&username=".concat(encodeURIComponent(username)) + "&cloud_host=".concat(encodeURIComponent(cloudHost.replace(/^ws?s:\/\//, ''))) + "&compatibility_mode=".concat(compatibilityMode, "&limits=").concat(imposeLimits) + "&load_griffpatch=".concat(loadGriffpatch) + extensionURLs.map(function (url) {
        return "&extension=".concat(encodeURIComponent(url));
      }).join('') + loadPlugins.map(function (url) {
        return "&load_plugin=".concat(encodeURIComponent(url));
      }).join('');
      window.location.href = './' + params + window.location.hash;
    }
  }, {
    key: "handleClickLogo",
    value: function handleClickLogo() {
      window.location.href = window.location.href.replace(/flags(\.html)?/, '');
    }
  }, {
    key: "handleClickAbout",
    value: function handleClickAbout() {
      window.location.href = 'https://github.com/SheepTester/scratch-gui#readme';
    }
  }, {
    key: "handleChangeLoadGriffpatch",
    value: function handleChangeLoadGriffpatch(e) {
      this.setState({
        loadGriffpatch: e.target.value
      });
    }
  }, {
    key: "handleChangeLoadPlugins",
    value: function handleChangeLoadPlugins(list) {
      this.setState({
        loadPlugins: list
      });
    }
  }, {
    key: "handleChangeCloudHost",
    value: function handleChangeCloudHost(e) {
      this.setState({
        cloudHost: e.target.value
      });
    }
  }, {
    key: "handleChangeUsername",
    value: function handleChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: "handleChangeCompatibilityMode",
    value: function handleChangeCompatibilityMode(e) {
      this.setState({
        compatibilityMode: e.target.checked
      });
    }
  }, {
    key: "handleChangeExtensionURLs",
    value: function handleChangeExtensionURLs(list) {
      this.setState({
        extensionURLs: list
      });
    }
  }, {
    key: "handleChangeImposeLimits",
    value: function handleChangeImposeLimits(e) {
      this.setState({
        imposeLimits: e.target.checked
      });
    }
  }, {
    key: "handleChangeWidth",
    value: function handleChangeWidth(e) {
      this.setState({
        width: +e.target.value
      });
    }
  }, {
    key: "handleChangeHeight",
    value: function handleChangeHeight(e) {
      this.setState({
        height: +e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isRtl = _this$props2.isRtl,
          projectTitle = _this$props2.projectTitle,
          setTitle = _this$props2.setTitle,
          componentProps = _objectWithoutProperties(_this$props2, ["isRtl", "projectTitle", "setTitle"]);

      var _this$state2 = this.state,
          loadGriffpatch = _this$state2.loadGriffpatch,
          loadPlugins = _this$state2.loadPlugins,
          cloudHost = _this$state2.cloudHost,
          username = _this$state2.username,
          compatibilityMode = _this$state2.compatibilityMode,
          extensionURLs = _this$state2.extensionURLs,
          imposeLimits = _this$state2.imposeLimits,
          width = _this$state2.width,
          height = _this$state2.height;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.pageWrapper,
        dir: isRtl ? 'rtl' : 'ltr'
      }, componentProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        accountNavOpen: false,
        authorId: "what do I put here lol",
        authorThumbnailUrl: "static/favicon.svg",
        authorUsername: "SheepTester",
        canChangeLanguage: false,
        canCreateCopy: false,
        canCreateNew: false,
        canEdit: false,
        canEditTitle: false,
        canManageFiles: false,
        canRemix: false,
        canSave: false,
        canShare: false,
        className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.menuBarPosition,
        enableCommunity: false,
        isShared: false,
        logo: _components_menu_bar_scratch_logo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        renderLogin: console.log,
        showComingSoon: false,
        onClickAbout: this.handleClickAbout,
        onClickLogo: this.handleClickLogo
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.content,
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "URL settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        value: width,
        onChange: this.handleChangeWidth,
        default: "480",
        type: "number",
        name: "width"
      }, "Stage width"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        value: height,
        onChange: this.handleChangeHeight,
        default: "360",
        type: "number",
        name: "height"
      }, "Stage height"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toggle, {
        checked: imposeLimits,
        onChange: this.handleChangeImposeLimits,
        name: "limits"
      }, "Enforce reasonable limits?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "[1]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toggle, {
        checked: compatibilityMode,
        onChange: this.handleChangeCompatibilityMode,
        name: "compatibility_mode"
      }, "Compatibility mode?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "[2]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        label: "Extensions",
        value: extensionURLs,
        onChange: this.handleChangeExtensionURLs
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toggle, {
        checked: loadGriffpatch,
        onChange: this.handleChangeLoadGriffpatch,
        name: "load_griffpatch"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Load Griffpatch's {previewFaqLink}?",
        id: "gui.aaab.zz",
        values: {
          previewFaqLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.faqLink,
            href: "https://github.com/griffpatch/Scratch3-Dev-Tools"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            defaultMessage: "Scratch 3 Dev Tools",
            id: "gui.aaab.z1"
          }))
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        value: username,
        onChange: this.handleChangeUsername,
        default: '"username"',
        type: "text",
        name: "username"
      }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        label: "Custom editor scripts",
        value: loadPlugins,
        onChange: this.handleChangeLoadPlugins
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, {
        value: cloudHost,
        onChange: this.handleChangeCloudHost,
        default: "saves cloud variables to localStorage",
        type: "text",
        name: "cloud_host"
      }, "Custom cloud host", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "[3]")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.buttonRow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.backButton
      }, "Done")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "More information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "[1]"), "The following limits are removed if the limits option is disabled:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Fencing of a sprite's position and size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Maximum clone count"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "List length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Pen size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Sound effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Mouse X/Y"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Say/think bubble length"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Simultaneous sounds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Tempo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "[2]"), "Compatibility mode makes projects run at 30 fps. When disabled, projects will run at 60 fps."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "[3]"), "Use a custom cloud host instead of the default behaviour, which is to save cloud variables to localStorage. Note that for some reason, Scratch doesn't want you to include the protocol (ie, omit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ws://"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "wss://"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.faqLinkText
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "See {previewFaqLink} for a list of additional features in E\u7F8Aicques.",
        id: "gui.aaaa.previewfaq",
        values: {
          previewFaqLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: _flags_css__WEBPACK_IMPORTED_MODULE_14___default.a.faqLink,
            href: "https://github.com/SheepTester/scratch-gui#other-features"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            defaultMessage: "Github",
            id: "gui.aaaa.previewfaqlinktext"
          }))
        }
      }))));
    }
  }]);

  return Flags;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    projectTitle: state.scratchGui.projectTitle
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setTitle: function setTitle(title) {
      return dispatch(Object(_reducers_project_title__WEBPACK_IMPORTED_MODULE_11__["setProjectTitle"])(title));
    }
  };
};

var WrappedFlags = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Flags));
var appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedFlags, null), appTarget);

/***/ })

},[["./src/playground/flags.jsx","lib.min"]]]);
//# sourceMappingURL=flags.js.map