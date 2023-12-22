import styled from 'styled-components';

export const Title = styled.h1`
  margin: 20px 0;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  text-align: center;
`;

export const Loader = styled.h2`
  margin-top: 20px;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: #09b341;
  text-align: center;
`;
export const ErrorStyled = styled.h2`
  margin-top: 20px;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: #de200b;
  text-align: center;
`;
