require('./styles/nav.scss');

var React = require('react');
var pages = ['Dashboard', 'UI Features', 'Forms', 'Charts', 'Typography', 'Gallery', 'Tables', 'Calendar', 'Grid', 'File Manager', 'Icons', 'Login Page'];
var prefix = "https://s3-us-west-2.amazonaws.com/react-dashboard-images/";

var Nav = React.createClass({
    render: function () {
        var navLinks = [];
        for(var i = 0; i < pages.length; i++) {
            navLinks[i] = <li>
                <a href={'/' + pages[i]}>
                    <img src={prefix+pages[i]+".png"} />
                    <p>{pages[i]}</p>
                </a>
            </li>;
        }

        return <div className="nav"><ul>{navLinks}</ul></div>;

    }
});

module.exports = Nav;

