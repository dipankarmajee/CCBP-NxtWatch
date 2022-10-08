import {Link} from 'react-router-dom'

import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/nxtWatchContext'
import './index.css'

const Sidebar = props => (
  <>
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <>
            <div className="sidebar-container">
              <div className="sidebar-inside-container">
                <Link to="/" className="nav-link link-container">
                  <HiHome className="sidebar-icon" />
                  <p className="sidebar-text">Home</p>
                </Link>
                <Link to="/trending" className="nav-link link-container">
                  <AiFillFire className="sidebar-icon" />
                  <p className="sidebar-text">Trending</p>
                </Link>
                <Link to="/gaming" className="nav-link link-container">
                  <SiYoutubegaming className="sidebar-icon" />
                  <p className="sidebar-text">Gaming</p>
                </Link>
                <Link to="/saved-videos" className="nav-link link-container">
                  <MdPlaylistAdd className="sidebar-icon" />
                  <p className="sidebar-text">Saved Videos</p>
                </Link>
              </div>
              <div className="sidebar-inside-container">
                <h1>CONTACT US</h1>
              </div>
            </div>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  </>
)

export default Sidebar
