import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>
          {this.props.users && this.props.users.map(user=><li>{user.username} from {user.hometown}</li>)/* Write code here that displays the usernames of all users in the Redux store */}
          </ul>
          {this.props.userCount && `There are ${this.props.userCount} users `/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state)=>{
  return { users: state.users, userCount: state.users.length}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
