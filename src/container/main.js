import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  AsyncStorage,
  Switch,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SpeechAndroid from "react-native-android-voice";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      on: "false"
    };
  }

  _openMic = () => {
    this.setState({
      on: "true"
    });
  };

  _offMic = () => {
    this.setState({
      on: "false"
    });
  };

  renderDisplay = () => {
    if (this.state.on === "false") {
      return (
        <View>
          <View style={styles.headerContainer}>
            <Icon name="ios-settings" size={25} />
            <Text style={{ fontSize: 18 }}>SIGN IN</Text>
            <Icon name="ios-photos-outline" size={25} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={require("../image/logo2.jpg")} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => this._openMic()}>
              <View style={styles.micStyle}>
                <Icon name="ios-mic" size={40} color="#4285f4" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.txtContainer}>
            <Text style={styles.txtStyle}>Speak Now</Text>
          </View>
          <View style={styles.mic2Container}>
            <TouchableWithoutFeedback>
              <View style={styles.mic2Style}>
                <Icon name="ios-mic" size={40} color="#fff" />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{ paddingLeft: 30, paddingTop: 150 }}>
            <TouchableWithoutFeedback onPress={() => this._offMic()}>
              <Icon name="ios-close" size={50} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        {this.renderDisplay()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  },
  logoStyle: {
    height: 20,
    width: 30,
    resizeMode: "contain"
  },
  mainContainer: {
    backgroundColor: "#fff"
  },
  headerContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  micStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderWidth: 1
  },
  mic2Style: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#fff"
  },
  txtStyle: {
    fontSize: 28
  },
  txtContainer: {
    padding: 30,
    flex: 1
  },
  mic2Container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  }
});

export default Main;
