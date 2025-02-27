import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);

    //console.log('Parent Constructor ');
  }

  componentDidMount() {
    //console.log('Parent DidMount');
  }

  render() {
    //console.log('Parent Render');
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React</h2>
        <UserClass
          name={'Prashant Sinha(class)'}
          location={'Lucknow(class)'}
          contact={'sinhaprashant2016@gmail.com'}
        />
      </div>
    );
  };
};

export default About;
