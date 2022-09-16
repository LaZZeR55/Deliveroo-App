import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 7000);
  }, []);

  return (
    <SafeAreaView className="bg-[#f6f6f6] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/preparingfood.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center text-[#00CCBB]"
      >
        Waiting For Restaurant to accept yor order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#00CCBB" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
