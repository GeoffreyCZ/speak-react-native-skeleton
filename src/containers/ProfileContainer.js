// @flow
import React from "react"
import { SafeAreaView, StyleSheet, Image, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// components
import { Title } from "../components"
import { Colors, Images } from "../themes"
import RoundedButton from "../components/RoundedButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 40,
    marginBottom: 40,
  },
  icon: {
    height: 20,
    width: 20,
  },
  contactsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
})

export default class ProfileContainer extends React.PureComponent<null> {
  render() {
    const iconSize = 40
    return (
      <SafeAreaView style={styles.container}>
        <Image source={Images.profilePhoto} style={styles.image} />
        <Title>Michal Kroupa</Title>

        <View style={styles.contactsContainer}>
          <RoundedButton onPress={console.log("mail")}>
            <Icon name="email" size={iconSize} />
          </RoundedButton>
          <RoundedButton onPress={console.log("slack")}>
            <Icon name="slack" size={iconSize} />
          </RoundedButton>
          <RoundedButton onPress={console.log("phone")}>
            <Icon name="cellphone" size={iconSize} />
          </RoundedButton>
        </View>
      </SafeAreaView>
    )
  }
}
