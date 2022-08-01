import './index.scss'
import { NavLink } from 'react-router-dom'

import Logo from '../../asstes/images/khayalbagslogo.png'
function SiteNavbar() {
  let activeStyle = {
    backgroundColor: '#E2B33A',
    color: '#313131',
  }

  //   let activeClassName = "activeStyle";
  return (
    <>
      <div className="siteNavbar">
        <div className="left">
          <ul>
            <li>
              <NavLink
                to="mehsullar"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Məhsullar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="endirimde_olanlar"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Endirimdə olanlar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="yeni_kolleksiya"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Yeni kolleksiya
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="img">
          <img src={Logo} alt="" />
        </div>

        <div className="right">
          <ul>
            <li>
              <NavLink
                to="sifaris"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Sifariş
              </NavLink>
            </li>
            <li>
              <NavLink
                to="elaqe"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Əlaqə
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SiteNavbar
