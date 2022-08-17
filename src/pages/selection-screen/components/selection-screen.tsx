import { url } from "inspector";
import ScreenSize from "../../../components/atoms/screen-size";

const Bg = require("../../../assets/videos/bg.mp4");

const SelectionScreen = () => {
  return (
    <ScreenSize>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "auto",
          borderRadius: "15px",
          height: "90%",
          boxShadow: "2px 2px 4px 1px rgba(0, 0, 0, 0.25)",
        }}
      >
        <source src={Bg} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          // alignSelf: "flex-end",
          // marginBottom: "20px",
          width: "65%",
          height: "90%",
          backgroundColor: "white",
        }}
      >
        <div style={{
          width: "100%",
          height: "30%",
          backgroundColor: "red"
        }}></div>
      </div>
    </ScreenSize>
  );
};

export default SelectionScreen;
