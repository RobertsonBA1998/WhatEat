import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppView from "./common/AppView";
import styles from "./styles/styles";

export default function CreateAccount() {
  return (
    <AppView>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Full Name" />
        </View>
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </AppView>
  );
}
