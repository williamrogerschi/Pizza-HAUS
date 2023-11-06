import { useLocation } from 'react-router-dom'


const Header = () => {

    const location = useLocation()


    let headerImage
    let headerImageStyle = {}

    if( location.pathname === '/') {
        headerImage = 'pizza-header.jpg'
        headerImageStyle = {
            height: '50vh',
            width: '100%',
            maxWidth: '100%',
            backgroundSize: 'contain',
            backgroundPosition: '40% 60%',
            borderBottom: '1px solid black',
            overflow: 'hidden'
        }
    } else if (location.pathname === '/CYOP') {
        headerImage = 'CYOP.jpg'
        headerImageStyle = {
            height: '50vh',
            width: '100%',
            maxWidth: '100%',
            backgroundSize: 'contain',
            backgroundPosition: '40% 60%',
            // border-bottom: '1px solid black',
            overflow: 'hidden'
        }
    } else {
        null
    }


    return (
        <div className="header">
            <img src={headerImage} alt='Header'  style={headerImageStyle}/>
        </div>
    )
}

export default Header