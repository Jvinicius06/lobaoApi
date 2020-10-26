import React from 'react';
import {
  Container,
  Panel,
} from 'rsuite';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.location.replace('lobao://lobao');
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  render() {
    return (
      <div>
        <iframe title="Lobao Teste" src="lobao://lobao" width="1px" height="1px" scrolling="no" frameBorder="0" />
        <a href="lobao://lobao">
          <h1>Redirecionandoo em 1 seg</h1>
        </a>
      </div>
    );
  }
}

export default Login;
