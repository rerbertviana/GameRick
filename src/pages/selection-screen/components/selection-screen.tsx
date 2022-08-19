import { useEffect, useState } from "react";
import Box from "../../../components/atoms/character-box";
import CharacterLine from "../../../components/atoms/character-line";
import CharacterScreen from "../../../components/atoms/character-screen";
import ScreenSize from "../../../components/atoms/screen-size";
import api from "../../../services/api/api";

const Bg = require("../../../assets/videos/bg.mp4");

const SelectionScreen = () => {
  // let characters: any = [];

  const [characters, setCharacters]: any = useState([]);

  // const getCharacters = async () => {
  //   for (let i = 1; i < 3; i++) {
  //     await api.get(`${i}`).then(({ data }) => {
  //       characters.push({
  //         name: data.name,
  //         gender: data.gender,
  //         species: data.species,
  //         image: data.image,
  //       });
  //     });
  //   }
  // };

  const getBox = () => {
    return characters.map((data: any) => (
      data.id <8 ?  <Box key={data.id} src={data.image}></Box> : <></>
    ));
  };

  const getBox2 = () => {
    return characters.map((data: any) => (
      data.id >7 && data.id <15 ?  <Box key={data.id} src={data.image}></Box> : <></>
    ));
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
        <CharacterLine>{getBox()}</CharacterLine>
        <CharacterLine>{getBox2()}</CharacterLine>
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
