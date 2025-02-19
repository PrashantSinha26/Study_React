//It's a Class based component

import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        Name: 'Dummy',
        ID: 'Default',
        avatar_url: 'http://dummy-photo.com',
      },
    };
    // console.log(this.props.name + 'Child Constructor');
  }

  async componentDidMount() {
    // console.log(this.props.name + 'Child Component Did Mount');

    //API calls

    const data = await fetch('https://api.github.com/users/PrashantSinha26');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    // it will update when the component lifecycle end. 
  }

  componentWillUnmount(){
    // it will call when the component is unmount.
    // Unmount - When the component is disappear from the html/webpage/API 
  }

  render() {
    // console.log(this.props.name + 'Child Render');
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className='user-card'>
        <img src={avatar_url} />
        <h3>Name: {login}</h3>
        <h3>ID: {id}</h3>
        <h3>Contact: sinhaprashant2016</h3>
      </div>
    );
  }
}

export default UserClass;
