import './index.scss'
import { Phone, Mail, WhatsApp, Instagram } from '@mui/icons-material/'

function SiteHeader() {
  return (
    <>
      <div className="site_header">
        <div className="contactHeader">
          <div className="left">
            <ul>
              <li>
                <Phone className="icon" />
                <a href="tel:+994504778898">+994 50 477 88 98</a>
              </li>
              <li>
                <Mail className="icon" />
                <a href="mailto:ilkinguluzzada@gmail.com">
                  khayalmammadov@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
                <li>
                    <a href="https://wa.me/994504778898" target="_blank" rel="noopener noreferrer"><WhatsApp className='icon w'/></a>
                </li>
                <li>
                    <a href="https://instagram.com/xayalbags" target="_blank" rel="noopener noreferrer"><Instagram className='icon i'/></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
    // #313131
  )
}

export default SiteHeader
