"use strict";
var React = require('react');
var LogoImage = require('../../assets/rangleio-logo.svg');
var styles = { width: 128 };
function Logo() {
    return (<div className="flex items-center">
      <img style={styles} src={LogoImage} alt="Rangle.io"/>
    </div>);
}
exports.__esModule = true;
exports["default"] = Logo;
