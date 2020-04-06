import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { UserLogout } from '../../actions/user';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  componentWillMount() {
    console.log('Enter Home')
  }

  handleLogout = () => {
    this.props.UserLogout()
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <Button variant="primary" onClick={this.handleLogout}> Logout </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = ({
  UserLogout: UserLogout
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));