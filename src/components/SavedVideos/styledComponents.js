import styled from 'styled-components'

export const SavedVideosMainDiv = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  padding-bottom: 50px;
  //   height: fit-content;
  height: 100%;
  @media (max-width: 767px) {
    // height: fit-content;
    height: 100%;
  }
`
export const MainHeader = styled.h1`
  background-color: ${props => props.bgColor};
  padding: 20px;
`

export const UnSavedVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  height: 100%;
  @media (max-width: 767px) {
    padding-left: 20px;
    height: 100%;
  }
`

export const SavedVideosDiv = styled.div`
  color: ${props => props.color};
  display: flex;
  @media (min-width: 768px) {
    padding: 30px 30px;
    padding-bottom: 0px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  @media (max-width: 767px) {
    align-self: baseline;
    padding: 10px;
  }
`

export const ListItems = styled.li`
  padding: 10px;
  font-size: ${props => props.fs};
  @media (max-width: 767px) {
    padding: 5px;
    font-size: 15px;
  }
`

export const VideosImageEl = styled.img`
  @media (min-width: 768px) {
    width: 320px;
    height: 180px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 180px;
  }
`

export const NoVideosImageEl = styled.img`
  @media (max-width: 767px) {
    width: 100%;
    object-fit: contain;
    padding-top: 5%;
  }
  @media (min-width: 768px) {
    width: 50%;
    object-fit: contain;
    padding: 30px 40px;
  }
`
export const NotFoundHead = styled.h2``

export const NotFoundPara = styled.p``
