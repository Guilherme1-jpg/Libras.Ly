import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { rgba } from 'polished'
import { colors } from './colors'

const CardHeadingSpan = styled.span`
  padding: 1rem 1.5rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background-image: ${(props) => `
  linear-gradient(
    to right bottom,
    ${rgba(props.theme.colorLight, 0.85)},
    ${rgba(props.theme.colorDark, 0.85)}
  )
  `};
`

const CardHeading = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-align: right;
  text-transform: uppercase;
  color: ${colors.white};
  position: absolute;
  top: 12rem;
  width: 75%;
  right: 2rem;
`

const CardSideWrapper = styled.div`
  transition: all 0.8s ease;
  height: 52rem;
  font-size: 5rem;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  box-shadow: 0 1.5rem 4rem ${rgba(colors.black, 0.15)};
  width: 100%;
  top: 50px;
  margin-left: 80px;
  overflow-y: scroll;
  backface-visibility: hidden;
`

const CardSideFront = styled(CardSideWrapper)`
  background-color: ${colors.white};
  ::-webkit-scrollbar {
    display: none;
  }
`

const CardSideBack = styled(CardSideWrapper)`
  ::-webkit-scrollbar {
    display: none;
  }
  transform: rotateY(-180deg);
  color: ${colors.white};
  background-image: ${(props) => `
      linear-gradient(to right bottom,
      ${props.theme.colorLight},
      ${props.theme.colorDark}
    )`};
`

export const CardWrapper = styled.div`
  height: 52rem;
  width: 35rem;
`
export const CardPicture = styled.div`
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: ${(props) => `
      linear-gradient(
      to right bottom,
      ${props.theme.colorLight},
      ${props.theme.colorDark}
    ),
    url(${props.src})`};
`

export const CardDetails = styled.div`
  padding: 3rem;
  font-size: 2rem;
`

export const CardSide = (props) =>
  props.side && props.side === 'back' ? (
    <CardSideBack>{props.children}</CardSideBack>
  ) : (
    <CardSideFront>{props.children}</CardSideFront>
  )

export const CardTitle = (props) => (
  <CardHeading>
    <CardHeadingSpan>{props.children}</CardHeadingSpan>
  </CardHeading>
)

const CardContainer = styled.div`
  perspective: 150rem;

  max-height: 52rem;

  &:hover ${CardSideFront} {
    transform: rotateY(180deg);
  }

  &:hover ${CardSideBack} {
    transform: rotateY(0deg);
  }
`

export const Card = ({ colorLight, colorDark, children }) => (
  <ThemeProvider theme={{ colorLight, colorDark }}>
    <CardContainer>{children}</CardContainer>
  </ThemeProvider>
)
