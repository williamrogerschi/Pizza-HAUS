import { useLocation } from 'react-router-dom'


const Header = () => {

    const location = useLocation()


    let headerImage
    let headerImageStyle = {}

    if( location.pathname === '/') {
        headerImage = 'pizzaheader.jpg'
        headerImageStyle = {
            height: '40vh',
            width: '100%',
            backgroundImage: `url(${headerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 70%',
        }
    } else if (location.pathname === '/CYOP') {
        headerImage = 'CYOP.jpg'
        headerImageStyle = {
            height: '40vh',
            width: '100%',
            backgroundImage: `url(${headerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    } else if(location.pathname === '/Pizza') {
        headerImage = 'pizzas.webp'
        headerImageStyle = {
            height: '40vh',
            width: '100%',
            backgroundImage: `url(${headerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    } else {
        null
    }


    return (
        <div className="header" style={{ height: headerImageStyle.height}}>
            <div className='header-image' style={headerImageStyle}></div>
        </div>
    )
}

export default Header