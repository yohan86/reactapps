import { useState } from 'react';
import MenuList from "./menu-list";

export default function MenuItem({ item, index }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    return <li key={index} className='menu-item-wrapper'>

        {
            item && item.children && item.children.length > 0 ?
                (
                    <div className='sub-menu-wrapper'>
                        <div className='menu-item' onClick={() => setToggleMenu(!toggleMenu)}>
                            <span className='menu-label' >
                                {item.label}
                            </span>
                            {
                                toggleMenu === true ? (<span className='menu-minus'>-</span>) : (<span className='menu-plus'>+</span>)
                            }
                        </div>
                        {toggleMenu && <MenuList list={item.children} />}
                    </div>
                )
                : (<div className='menu-item'>{item.label}</div>)
        }
    </li>
}