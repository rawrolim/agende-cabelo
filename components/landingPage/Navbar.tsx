import React from 'react';
import { PiScissors, PiScissorsFill } from 'react-icons/pi';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-4 pe-4">
            <a className="navbar-brand" href="#">Barbearias RL</a>
            <PiScissorsFill color={'white'} size={30} />
        </nav>
    );
}

export default Navbar;
