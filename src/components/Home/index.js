import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'

import Header from '../Header'
import NxtWatchContext from '../../context/nxtWatchContext'
import Sidebar from '../Sidebar'
import {
  Container,
  HomeContainer,
  HomeBanner,
  HomeImageIcon,
  HomeParagraph,
  HomeButton,
  SearchContainer,
  SearchInputElement,
  SearchButton,
  NoVideoImage,
  HomeHeading,
  ThumbnailUrlImage,
  ProfileUrlImage,
  HomeVideoTitle,
  EachVideoContainer,
  HomeVideoDescription,
  HomeVideoContainer,
} from './styledComponents'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInputValue: '',
    homeVideos: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onChangeSearchInput = event => {
    // this.setState({searchInputValue: event.target.value}, this.getHomeVideos)

    console.log(event.key)
    if (event.key === 'Enter') {
      this.setState({searchInputValue: event.target.value})
    }
  }

  setHomeVideosDataIntoState = data => {
    const updatedData = data.videos.map(eachItem => ({
      channel: eachItem.channel,
      id: eachItem.id,
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    }))
    this.setState({homeVideos: updatedData})
  }

  getHomeVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {searchInputValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.setHomeVideosDataIntoState(data)
      this.setState({apiStatus: apiStatusConstant.success})
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderNoVideoes = () => (
    <>
      <NoVideoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no video"
      />
      <HomeHeading>No Search results found</HomeHeading>
      <HomeParagraph>
        Try different key words or remove search filter
      </HomeParagraph>
    </>
  )

  renderHomeVideos = activeTheme => {
    const {homeVideos} = this.state
    if (homeVideos.length === 0) {
      return this.renderNoVideoes()
    }
    return (
      <div className={`home-video-rander-container ${activeTheme}`}>
        {homeVideos.map(eachVideo => (
          <Link
            key={eachVideo.id}
            className={`nav-link-text ${activeTheme}`}
            to={`videos/${eachVideo.id}`}
          >
            <ThumbnailUrlImage src={eachVideo.thumbnailUrl} />
            <EachVideoContainer className={activeTheme}>
              <ProfileUrlImage src={eachVideo.channel.profile_image_url} />
              <HomeVideoContainer>
                <HomeVideoTitle className={activeTheme}>
                  {eachVideo.title}
                </HomeVideoTitle>
                <HomeVideoDescription>
                  {eachVideo.channel.name} {eachVideo.viewCount}{' '}
                  {eachVideo.publishedAt}
                </HomeVideoDescription>
              </HomeVideoContainer>
            </EachVideoContainer>
          </Link>
        ))}
      </div>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const activeTheme = isDark ? 'dark-mode' : 'ligth-mode'
          return (
            <>
              <Header />
              <div className={`container-lg ${activeTheme}`}>
                <div className="sidebar-container-lg">
                  <Sidebar />
                </div>

                <HomeContainer>
                  <HomeBanner className="banner-container">
                    <HomeImageIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                    <HomeParagraph>
                      Buy Nxt Watch Premium plans with UPI
                    </HomeParagraph>
                    <HomeButton>Get Now</HomeButton>
                  </HomeBanner>
                  <SearchContainer className={activeTheme}>
                    <SearchInputElement
                      type="text"
                      onChange={this.onChangeSearchInput}
                      placeholder="Search"
                    />
                    <SearchButton type="button">
                      <AiOutlineSearch />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderHomeVideos(activeTheme)}
                </HomeContainer>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
