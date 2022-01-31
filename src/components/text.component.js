import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
    color: gray;
    top: 108px;
    left: 260px;
`;

const place = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
    color: gray;
    top: 110px;
    left: 150px;
`;

const followers = (theme) => `
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
    top: 130px;
    left: 50px;
`;

const followers2 = (theme) => `
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
color: gray;
top: 130px;
left: 35px;
`;

const likes = (theme) => `
font-size: ${theme.fontSizes.h5};
font-weight: ${theme.fontWeights.bold};
top: 76px;
left: 155px;
`;
const likes2 = (theme) => `
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
color: gray;
top: 77px;
left: 165px;
`;

const photos = (theme) => `
font-size: ${theme.fontSizes.h5};
font-weight: ${theme.fontWeights.bold};
top: 23px;
left: 265px;
`;

const photos2 = (theme) => `
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
color: gray;
top: 23px;
left: 266px;
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
    top: 140px;
    left: 75px;
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  place,
  followers,
  followers2,
  likes,
  likes2,
  photos,
  photos2,
};

//<Text variant="something" />
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
