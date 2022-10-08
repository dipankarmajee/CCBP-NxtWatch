import styled from 'styled-components'
import {CustomButton} from '../Header/styledComponents'
import {LoginParagraph} from '../Login/styledComponents'

export const Container = styled.div`
  display: flex;
`

export const HomeContainer = styled(Container)`
  flex-direction: column;
`

export const HomeBanner = styled(Container)`
  flex-direction: column;
  padding: 10px;
  background-color: white;
`
export const HomeImageIcon = styled.img`
  width: 150px;
  margin-bottom: 20px;
`

export const HomeParagraph = styled(LoginParagraph)`
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  color: black;
`

export const HomeButton = styled(CustomButton)`
  border: 2px solid black;
  width: fit-content;
  padding: 8px 20px 8px 20px;
  font-weight: 500;
`
export const SearchContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  padding: 20px;
  margin-top: 30px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`
export const SearchInputElement = styled.input`
  outline: none;
  padding: 5px;
  border: 2px solid gray;
  width: 100%;
  height: 40px;
  @media (min-width: 768px) {
    width: 400px;
  }
`
export const SearchButton = styled(CustomButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px 8px 20px;
  background-color: inherit;
  border: 2px solid gray;
  height: 40px;
  font-size: 20px;
`
export const NoVideoImage = styled.img`
  width: 60vw;
`
export const HomeHeading = styled.h1`
  font-family: Roboto;
`

export const EachVideoContainer = styled(Container)`
  align-items: center;
  background-color: lightgray;
  padding: 0px 20px 20px 20px;
  margin: 0px;
  @media (min-width: 768px) {
    justify-content: space-evenly;
    width: 350px;
    height: 120px;
    min-height: fit-content;
  }
`

export const ThumbnailUrlImage = styled.img`
  width: 100vw;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    width: 350px;
  }
`

export const ProfileUrlImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`
export const HomeVideoTitle = styled(LoginParagraph)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  color: black;
  padding-bottom: 0px;
  margin-bottom: 0px;
`
export const HomeVideoDescription = styled(LoginParagraph)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: gray;
  padding-top: 0px;
  margin-top: 5px;
`
export const HomeVideoContainer = styled(Container)`
  flex-direction: column;
`
