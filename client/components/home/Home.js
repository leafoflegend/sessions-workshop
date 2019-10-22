import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFormField, onLogin } from '../../actions/index.js';
import styles from './styles.js';

class Home extends Component {
  render() {
    const {
      onUpdateField,
      onLogin,
      username,
      password,
      err,
    } = this.props;

    return (
      <div
        style={styles.pageContainer}
      >
        {
          err &&
          <div
            style={styles.errorContainer}
          >
            <span>
              {err}
            </span>
          </div>
        }
        <form
          onSubmit={e => e.preventDefault()}
          style={styles.formContainer}
        >
          <div
            style={styles.inputContainer}
          >
            <label
              style={styles.label}
            >
              Username:
            </label>
            <input
              style={styles.input}
              name={"username"}
              onChange={onUpdateField}
              value={username}
            />
          </div>
          <div
            style={styles.inputContainer}
          >
            <label
              style={styles.label}
            >
              Password:
            </label>
            <input
              style={styles.input}
              name={"password"}
              onChange={onUpdateField}
              type={"password"}
              value={password}
            />
          </div>
          <div
            style={styles.buttonContainer}
          >
            <button
              style={styles.button}
              onClick={onLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Home.propTypes = {
  onUpdateField: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  err: PropTypes.string.isRequired,
};

const mapStateToProps = ({ username, password, err }) => ({
  username,
  password,
  err: err || '',
});

const mapDispatchToProps = dispatch => ({
  onUpdateField: ({ target: { value, name } }) => dispatch(
    changeFormField(name, value),
  ),
  onLogin: () => dispatch(onLogin),
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
