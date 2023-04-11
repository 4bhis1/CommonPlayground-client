import Provider from "./Utils/provider";
import LeftNavBar from "./Pages/LeftNavBar/LeftNavBar";
import Code from "./Pages/Code/Code";
import View from "./Components/View";

function App() {
  return (
    <Provider>
      <View style={{ height: "100vh" }}>
        <LeftNavBar />
        <Code />
      </View>
    </Provider>
  );
}

export default App;
/* 
 <div
      contentEditable={true}
      onInput={(e) => {
        updateText(e.target.textContent);
      }}
    >{}</div>
        <LihtAndDarkModeSwitch />

*/

/* 
Provider
  User 
  Theme
  Route
  File
  Toast
  Modal

Component
  Avatar
  Form
  Modal 
  Multi cursor textInput
  Switch
  TextInput
  View

Constants
  Colors
  FontTheme
*/

/* {text.split("").map((value, index) => {
        console.log("\n@@@  file: App.js:22  value:", value, index);
        if (value === "if") {
          console.log("green");
          return <span style={{ color: "green" }}>{value}</span>;
        } else {
          return <span>{value}</span>;
        }
      })} */
