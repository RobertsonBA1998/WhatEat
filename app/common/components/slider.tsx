import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type SliderProps = {
  onValueChange: (value: number) => void;
  minValue: number,
  maxValue: number,
  currentValue: number,
  style?: StyleProp<ViewStyle>;
};

export default function CustomSlider({ style, minValue, maxValue, currentValue, onValueChange }: SliderProps) {
  return (
    <Slider
      style={[{ width: '100%' }, style]}
      minimumValue={minValue}
      maximumValue={maxValue}
      step={1}
      value={currentValue}
      onValueChange={onValueChange}
    />
  );
};
