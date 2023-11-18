import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getData } from "../utils/asyncStorage";

export default function HistoryScreen() {
  const [userCities, setUserCities] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchUserCities() {
      try {
        // Получаем данные из AsyncStorage
        const cities = await getData("cityHistory");

        console.log("Содержимое cityHistory в AsyncStorage:", cities); // Вывод данных в консоль

        if (cities) {
          // Преобразуем данные в массив и устанавливаем в state
          setUserCities(JSON.parse(cities));
        }
      } catch (error) {
        console.log("Ошибка при получении списка городов: ", error);
      }
    }
    fetchUserCities();
  }, []);

  // Функция для обработки нажатия на город и перехода на главный экран
  const handleCityPress = (city) => {
    navigation.navigate("Home", { city });
  };

  return (
    <View style={styles.container}>
      <Text>Список городов:</Text>
      {userCities.map((city, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCityPress(city)}
          style={styles.cityItem}
        >
          <Text>{city}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cityItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});
