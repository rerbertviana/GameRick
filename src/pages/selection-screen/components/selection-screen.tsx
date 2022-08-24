import { useEffect, useState } from "react";
import Box from "../../../components/atoms/character-box";
import CharacterLine from "../../../components/atoms/character-line";
import CharacterScreen from "../../../components/atoms/character-screen";
import Character from "../../../components/atoms/character-selected";
import ScreenSize from "../../../components/atoms/screen-size";
import api from "../../../services/api/api";

const Bg = require("../../../assets/videos/bg.mp4");
const Rick = require("../../../assets/imgs/characters/character01.png");
const Morty = require("../../../assets/imgs/characters/character02.png");
const Summer = require("../../../assets/imgs/characters/character03.png");
const Beth = require("../../../assets/imgs/characters/character04.png");
const Jerry = require("../../../assets/imgs/characters/character05.png");

const SelectionScreen = () => {
  const [characters, setCharacters]: any = useState([]);
  const imgs = [
    { src: Rick },
    { src: Morty },
    { src: Summer },
    { src: Beth },
    { src: Jerry },
  ];

  const getBox = () => {
    return characters.map((data: any) =>
      data.id < 13 ? (
        <Box
          key={data.id}
          src={data.image}
          className={"box" + data.id + " box"}
        ></Box>
      ) : (
        <></>
      )
    );
  };

  const getImg = () => {
    return characters.map((data: any) =>
      data.id < 6 ? (
        <Character
          src={imgs[data.id - 1].src}
          className={"character" + data.id}
        ></Character>
      ) : (
        <></>
      )
    );
  };

  const getCharacters = async () => {
    await api.get("character").then((data: any) => {
      setCharacters(data.data.results);
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <ScreenSize>
      <CharacterScreen>
        <CharacterLine>
          {getBox()}
          {getImg()}
        </CharacterLine>
      </CharacterScreen>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "auto",
          borderRadius: "15px",
          height: "90%",
          minHeight: "500px",
          boxShadow: "2px 2px 4px 1px rgba(0, 0, 0, 0.25)",
          zIndex: "0",
        }}
      >
        <source src={Bg} type="video/mp4" />
      </video>
    </ScreenSize>
  );
};

export default SelectionScreen;
