import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppView from "./common/AppView";
import styles from "./styles/homePage";

export default function Index() {
  return (
    <AppView>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.optionsContainer}>
        <Link href="/sign-in" asChild>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => console.log("SignIn")}
          >
            <Text style={styles.optionText}>Sign In</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/create-account" asChild>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => console.log("CreateAccount")}
          >
            <Text style={styles.optionText}>Create Account</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/budget-and-distance" asChild>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => console.log("Skip")}
          >
            <Text style={styles.optionText}>Skip</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </AppView>
  );
}
