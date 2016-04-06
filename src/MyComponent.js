import React from 'react';

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Subcomponent 
          ref="oldStyle"
        />
        <Subcomponent 
          ref={(ref) => this.newStyle = ref}
        />
      </div>
    );
  }
}

export class Subcomponent extends React.Component {
  render() {
    return (
      <span>
        Kikoo
      </span>
    )
  }
}