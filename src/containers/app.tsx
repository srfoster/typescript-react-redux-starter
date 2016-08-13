import * as React from 'react';
const connect = require('react-redux').connect;

interface IAppProps extends React.Props<any> {
};

class App extends React.Component<IAppProps, void> {
  render() {
    return (
      <div>
       <h1>Hi</h1>
      </div>
    );
  };
};

export default connect()(App);
