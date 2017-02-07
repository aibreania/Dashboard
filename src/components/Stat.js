import React from 'react';
require('./styles/stat.scss');

class Stat extends React.Component {
    render() {
        return <div className="stat">
            <img src="http://www.profitconfidential.com/wp-content/uploads/2017/01/alpha2.png"/>
            <img src="https://s3-us-west-2.amazonaws.com/react-dashboard-images/weekly-stat.png" />
        </div>;
    }
}

export default Stat
