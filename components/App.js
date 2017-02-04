import React from 'react';


var icons = ['Alert', 'Card', 'Message', 'Settings', 'User'];

class App extends React.Component {
    render() {
        var Notification = [];
        for(var i = 0; i < icons.length; i++) {
            Notification[i] = <li><img src={'images/'+icons[i]+'.png'}/></li>;
        }
        return <div className="header"><table>
            <tr>
                <td><img src='images/Globe.png' className="header-img"/></td>
                <td><p>Perfectum Dashboard</p></td>
                <td><ul>{Notification}</ul></td>
            </tr>
        </table></div>;
    }
}

export default App
