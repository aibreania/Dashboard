import CSSModules from 'react-css-modules';
import styles from "./styles/circle.css";

var React = require('react');
var percents = [58, 8, 18, 23, 34, 42];
var colors = ['orange', '', 'yellow', 'red', 'green', 'purple'];

var Circle = React.createClass({
  render: function () {
    var cirs = [];
    for(var i = 0; i < percents.length; i++) {
      var tmp = 'c100 p' + percents[i] + ' ' + colors[i];
      cirs[i] = <div className={tmp}>
                  <span>{percents[i]}%</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                </div>;
    }
    return <div className="perCircle"><ul>{cirs}</ul></div>;
  }
});

module.exports = CSSModules(Circle, styles);
