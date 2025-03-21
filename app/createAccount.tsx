import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./styles/styles";

function CreateAccount() {
 return (
  <SafeAreaProvider>
   <SafeAreaView>
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
   </SafeAreaView>
  </SafeAreaProvider>
 );
}

export default CreateAccount;
