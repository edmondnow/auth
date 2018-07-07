//Import libraries for making the component
import React from 'react';
import { Text, View } from 'react-native';


//Make the component

const Header = (props) => {
  const { textStyle, viewStyle } = styles; 
  const { headerText } = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText }</Text>
    </View> 
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, 
    paddingTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
    position: 'relative',
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of app
export { Header };
