import React from 'react';
import {
  View, Image,
  ImageSourcePropType,
  ViewStyle
} from 'react-native';

export interface PictureProps {
  radius: number;
  source: ImageSourcePropType;
  style?: ViewStyle;
}

const Picture = ({ radius, source, style }: PictureProps) => {
  const diameter = radius * 2;
  return (
    <View style={{ height: diameter, width: diameter, borderRadius: 500, overflow: 'hidden', ...style }} >
      <Image style={{ flex: 1, width: undefined, height: undefined }} source={source} />
    </View >
  );
}

export default Picture;