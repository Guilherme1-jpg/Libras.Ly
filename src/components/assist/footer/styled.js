import styled from 'styled-components'
import wave from '../../assets/waveSvg.svg'

export const FooterArea = styled.div`
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: 100%;
`

export const FooterContent = styled.div`
  padding: 48px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterTextArea = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 568px) {
    flex-direction: column;
  }
`
