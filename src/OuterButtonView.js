import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  return (
    <View style={props.backgroundStyle}>
      <Text style={props.labelStyle}>{props.text}</Text>
    </View>
  );
};

OuterButtonView.propTypes = {
  backgroundStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  text: PropTypes.string
};

OuterButtonView.defaultProps = {
  backgroundStyle: {
    flex: 1,
    maxHeight: 40,
    backgrouldColor: '#00FF00',
    borderRadius: 20
  },
  labelStyle: {
    color: '#FFFFFF'
  },
  text: 'Click here'
};

export default OuterButtonView;
