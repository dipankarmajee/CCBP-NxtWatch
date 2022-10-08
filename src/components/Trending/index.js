import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'

import Cookies from 'js-cookie'

import './index.css'

import Header from '../Header'
import NxtWatchContext from '../../context/nxtWatchContext'
import Sidebar from '../Sidebar'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  setTrendingVideosDataIntoState = data => {
    const updatedData = data.videos.map(eachItem => ({
      channel: eachItem.channel,
      id: eachItem.id,
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    }))
    this.setState({trendingVideos: updatedData})
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      this.setTrendingVideosDataIntoState(data)
      this.setState({apiStatus: apiStatusConstant.success})
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderTrendingVideos = activeTheme => {
    const {trendingVideos} = this.state
    if (trendingVideos.length === 0) {
      return this.renderNoVideoes()
    }
    return (
      <div className={`home-video-rander-container ${activeTheme}`}>
        {trendingVideos.map(eachVideo => (
          <Link
            key={eachVideo.id}
            className={`nav-link-text ${activeTheme}`}
            to={`videos/${eachVideo.id}`}
          >
            <img className="trending-thumnail" src={eachVideo.thumbnailUrl} />
            <div className={`each-video-container ${activeTheme}`}>
              <img
                className="trending-profile-image"
                src={eachVideo.channel.profile_image_url}
              />
              <div className="trending-video-container">
                <p className={`trending-video-title ${activeTheme} `}>
                  {eachVideo.title}
                </p>
                <p className="trending-video-description">
                  {eachVideo.channel.name} {eachVideo.viewCount}{' '}
                  {eachVideo.publishedAt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  renderNoVideoes = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no video"
      />
      <h2>No Search results found</h2>
      <p>Try different key words or remove search filter</p>
    </>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const activeTheme = isDark ? 'dark-mode' : 'light-mode'
          return (
            <>
              <Header />
              <div className={`container-lg ${activeTheme}`}>
                <div className="sidebar-container-lg">
                  <Sidebar />
                </div>
                <div className={`trending-container ${activeTheme}`}>
                  <div className={`trending-icon-container ${activeTheme}`}>
                    <AiFillFire className="trending-fire-icon" />
                    <h2>Trending</h2>
                  </div>
                  <div>{this.renderTrendingVideos(activeTheme)}</div>
                </div>
              </div>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
