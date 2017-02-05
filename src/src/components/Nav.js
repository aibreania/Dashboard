var React = require('react');

var pages = ['Dashboard', 'UI Features', 'Forms', 'Charts', 'Typography', 'Gallery', 'Tables', 'Calendar', 'Grid', 'File Manager', 'Icons', 'Login Page'];


var Nav = React.createClass({
    render: function () {
        var navLinks = [];
        for(var i = 0; i < pages.length; i++) {
            navLinks[i] = <li>
                <a href={'/' + pages[i]}>
                    <img src={'images/'+pages[i]+'.png'} />
                    <p>{pages[i]}</p>
                </a>
            </li>;
        }

        return <div className="nav"><ul>{navLinks}</ul></div>;

    }
});

module.exports = Nav;

