import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import styles from "./styles/home_page";
import { Picker } from "@react-native-picker/picker";

export default function Index() {
 const [selectedEatOption, setSelectedEatOption] = useState("");

 return (
  <SafeAreaProvider>
   <SafeAreaView style={styles.home_page_view}>
    <View style={styles.container}>
     <View style={styles.logoContainer}>
      <Image
       source={require("../assets/images/logo.png")}
       style={styles.logo}
      />
     </View>

     <View style={styles.optionsContainer}>
      <Link href="/signIn" asChild>
       <TouchableOpacity
        style={styles.optionButton}
        onPress={() => console.log("SignIn")}
       >
        <Text style={styles.optionText}>Sign In</Text>
       </TouchableOpacity>
      </Link>

      <Link href="/createAccount" asChild>
       <TouchableOpacity
        style={styles.optionButton}
        onPress={() => console.log("CreateAccount")}
       >
        <Text style={styles.optionText}>Create Account</Text>
       </TouchableOpacity>
      </Link>

      <TouchableOpacity
       style={styles.optionButton}
       onPress={() => console.log("Skip")}
      >
       <Text style={styles.optionText}>Skip</Text>
      </TouchableOpacity>
     </View>
    </View>
   </SafeAreaView>
  </SafeAreaProvider>
 );
}
