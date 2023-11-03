import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Pizza from './Pizza'
import CYOP from './CYOP'

//import components


const Main = () => {

    return (
        
    <div className="main">
        <div className='header-container'>
            <Header/>
            <Nav/>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Pizza' element={<Pizza/>}/>
            {/* <Route path='/Drinks/:id' element={<DrinkDetails/>}/> */}
            <Route path='/CYOP' element={<CYOP/>}/>
        </Routes>
    </div>
)
}

export default Main