import { useState } from 'react';
import MenuList from "./menu-list";

export default function MenuItem({ item, index }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    return <li key={index} className='menu-item-wrapper'>

        {
            item && item.children && item.children.length > 0 ?
                (
                    <div className='sub-menu-wrapper'>
                        <a className={`menu-item ${toggleMenu && 'expanded'}`} onClick={() => setToggleMenu(!toggleMenu)}>
                            <span className='menu-label' >
                                {item.label}
                            </span>
                            {
                                toggleMenu ? (<span className='menu-icon minus'>-</span>) : (<span className='menu-icon plus'>+</span>)
                            }
                        </a>
                        {toggleMenu && <MenuList list={item.children} />}
                    </div>
                )
                : (<a className='menu-item'>{item.label}</a>)
        }
    </li>
}