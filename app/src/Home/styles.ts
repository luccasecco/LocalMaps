import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerContainer: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  }
})