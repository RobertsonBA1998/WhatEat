import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "./styles/home_page";
import { Picker } from '@react-native-picker/picker';

export default function Index() {
  const [selectedEatOption, setSelectedEatOption] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.home_page_view}>
        {/* <View style={styles.title_view}>
          <Text style={styles.title_text}>WHAT EAT?</Text>
        </View>
        <View style={styles.main_content_view}>
          <View style={styles.eat_option_dropdown}>
            <Picker
              selectedValue={selectedEatOption}
              onValueChange={(value, index) =>
                setSelectedEatOption(value)
              }>
              <Picker.Item label="I want to EAT" value="eat" />
              <Picker.Item label="I don't want to EAT" value="not eat" />
            </Picker>
          </View>

          <Text style={styles.cusine_textbox}>Select cusine</Text>
        </View> */}
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/images/logo.png")} style={styles.logo} />
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => console.log("SignIn")}>
              <Text style={styles.optionText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => console.log("CreateAccount")}>
              <Text style={styles.optionText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => console.log("Skip")}>
              <Text style={styles.optionText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}