import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppView from "./common/AppView";
import styles from "./styles/styles";

export default function signIn() {
  return (
    <AppView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </AppView>
  );
}
