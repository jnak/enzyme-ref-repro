import React, {
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native';

export class MyComponent extends React.Component {
  render() {
    return (
      <View>
        <Subcomponent />
        <Subcomponent 
          testProp={true}
          ref={(ref) => this.second = ref}
        />
      </View>
    );
  }
}

export class Subcomponent extends React.Component {
  render() {
    <Text>
      Kikoo
    </Text>
  }
}