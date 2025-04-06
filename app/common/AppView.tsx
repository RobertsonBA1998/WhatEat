import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  baseView: {
    flex: 1,
    margin: "2%"
  }
});

type AppViewProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function AppView({ children, style }: AppViewProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.baseView, style]}>
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
