import React from 'react';

require('./styles/header.scss');
var icons = ['Alert', 'Card', 'Message', 'Settings', 'User'];
var prefix = "https://s3-us-west-2.amazonaws.com/react-dashboard-images/";

class Header extends React.Component {
  render() {
    var Notification = [];
    for(var i = 0; i < icons.length; i++) {
      Notification[i] = <li><img src={prefix+icons[i]+".png"}/></li>;
    }
    return <div className="header"><table>
      <tr>
        <td><img src={prefix+"Globe.png"} className="header-img"/></td>
        <td><p>Perfectum Dashboard</p></td>
        <td><ul>{Notification}</ul></td>
      </tr>
    </table></div>;
  }
}

export default Header
