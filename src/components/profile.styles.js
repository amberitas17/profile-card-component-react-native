import styled from "styled-components/native";

export const Background = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: "center" },
})`
  background-color: ${(props) => props.theme.colors.bg.dark};
`;

export const Heading = styled.ImageBackground.attrs({
    source: require("../../assets/bg.png"),
  })`
  width: 100%;
  height: 175px;
  border-radius: 50px;
  margin-top: ${(props) => props.theme.space[3]};
  bottom: 85px;
`;

export const ProfileCard = styled.View`
  position: relative;
  width: 90%;
  max-width: 90%;
  height: 400px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-top: ${(props) => props.theme.space[5]};
  padding-top: ${(props) => props.theme.space[5]};
  align-items: center;
  overflow: hidden;
`;

export const ProfilePicture = styled.Image`
  position: relative;
  top: 130px;
  left: 125px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  border-color: white;
  background-color: lightgrey;
  border-width: 3px;
`;

export const BackgroundIMG = styled.ImageBackground.attrs({
  source: require("../../assets/bg-pattern-top.png"),
})`
  position: absolute;
	top: 0px;
	right: 150px;
	width: 100%;
	height: 200px;
	z-index: -1;
`;
export const BackgroundIMG2 = styled.ImageBackground.attrs({
  source: require("../../assets/bg-pattern-top.png"),
})`
  position: absolute;
  margin-top: 320px;
	top: 170px;
	left: 100px;
	width: 100%;
	height: 1000px;
	z-index: -1;
`;