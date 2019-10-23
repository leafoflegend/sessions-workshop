const styles = {
  pageContainer: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    textAlign: 'center',
    color: 'gold',
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  formContainer: {
    minWidth: '400px',
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    width: '100px',
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: '1em',
    textAlign: 'center',
    padding: '1em',
  },
  input: {
    flexGrow: 1,
  },
  buttonContainer: {
    padding: '1em',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: '1.5em',
    width: '150px',
    height: '50px',
  },
  errorContainer: {
    width: '400px',
    padding: '1em',
    fontSize: '2em',
    backgroundColor: 'darkred',
    border: 'solid 2px red',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
};

export default styles;
