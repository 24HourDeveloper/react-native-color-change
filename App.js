import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "",
      bgColor: ""
    };
  }

  upDateText = color => {
    this.setState({ color, bgColor: color });
  };

  render() {
    const {
      textContainer,
      textStyle,
      container,
      inputContainer,
      textInputStyle
    } = styles;
    return (
      <View style={[container, { backgroundColor: this.state.bgColor }]}>
        <View style={textContainer}>
          <Text style={textStyle}>Enter Desired Color</Text>
        </View>
        <View style={inputContainer}>
          <TextInput
            onChangeText={this.upDateText}
            placeholder="Enter color"
            style={textInputStyle}
            value={this.state.color}
            autoCapitalize={"none"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
  textStyle: {
    fontSize: 40,
    textAlign: "center"
  },
  inputContainer: {
    flex: 1,
    width: "100%"
  },
  textInputStyle: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    elevation: 2
  }
});
