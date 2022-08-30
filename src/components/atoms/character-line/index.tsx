import styled from "styled-components";

const CharacterLine = styled.div`
  display: flex;
  align-items: flex-end;
  width: 690px;
  min-width: 690px;
  flex-wrap: wrap;
  height: auto;
  /* background-color: red; */
  z-index: 2;
  .box:hover {
    box-shadow: 0px 0px 2px 1px #beff00;
    animation: pulse; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
  .box1:hover ~ .character1 {
    display: flex;
  }
  .box2:hover ~ .character2 {
    display: flex;
  }
  .box3:hover ~ .character3 {
    display: flex;
  }
  .box4:hover ~ .character4 {
    display: flex;
  }
  .box5:hover ~ .character5 {
    display: flex;
  }
`;

export default CharacterLine;
