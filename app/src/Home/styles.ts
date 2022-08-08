import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerContainer: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#3221531'
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6C6C80'
  },
  map: {
    flex: 1,
  },
  categoryContainer: {
    padding: 10,
  },
  categoryItem: {
    height: 110,
    backgroundColor: '#f0f0f5',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: 'center',
    color: '#6C6C80'
  }

})