// import React, {
//   StyleSheet,
//   PropTypes,
//   View,
//   Text,
// } from 'react-native';

import React from 'react';

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Subcomponent />
        <Subcomponent 
          testProp={true}
          ref="second"
        />
      </div>
    );
  }
}

export class Subcomponent extends React.Component {
  getInitialProps() {
    return {
      'kikoo': true,
    }
  }

  render() {
    return (
      <span>
        Kikoo
      </span>
    )
  }
}