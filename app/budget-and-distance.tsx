import React, { useState } from "react";
import { Text, View } from "react-native";
import AppView from "./common/AppView";
import Slider from "./common/components/slider";
import styles from "./styles/budgetAndDistance";

export default function BudgetAndDistance() {
  const [cost, setCost] = useState(100);
  const [distance, setDistance] = useState(50);

  return (
    <AppView>
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Text style={styles.preferenceText}>Cost: ${cost}</Text>
          <Slider style={styles.slider} minValue={1} maxValue={200} currentValue={cost} onValueChange={setCost} />
          <Text style={styles.preferenceText}>Distance: {distance}km</Text>
          <Slider style={styles.slider} minValue={0} maxValue={100} currentValue={distance} onValueChange={setDistance} />
        </View>
      </View>
    </AppView>
  );
}
