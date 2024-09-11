import Search from './Search';
import Hamburger from './Hamburger';
import Navigation from './Navigation';
import Container from '../Container';
import Logo from './Logo';
import { useState } from 'react';
import HoveredItem from './HoveredItem';

export default function Header() {
    const [hoverItem, setHoverItem] = useState(null);
    return (
        <header className='mt-6'>
            <Container>
                <Logo />
                <div className='bg-LightGray h-[1px] w-full'></div>
                <div className='flex justify-between items-center my-3 relative'>
                    <Hamburger />
                    <Navigation setHoverItem={setHoverItem} />
                    <Search />
                </div>
                <div className='bg-DarkGray h-[2px] w-full'></div>
            </Container>
        </header>
    )
}