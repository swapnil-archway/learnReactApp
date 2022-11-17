// Reactotron Configurations Here
import Reactotron from "reactotron-react-native";

let reactotron = null;
if (__DEV__) {
  reactotron = Reactotron.configure({
    host: "192.168.1.12",
    name: "Inshort App",
  })
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
  // console.warn = Reactotron.log;
  // console.log = Reactotron.log;
}

export default reactotron;
