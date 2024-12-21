import MenuItem from './menu-item'

export default function MenuList({list =[]}){
    return (
    <ul className='menu-container'>
            {
                list && list.length > 0 ? 
                    list.map((menuitem,index) => 
                        <MenuItem item={menuitem}  key={index} />
                    )
                :null
            }
    </ul>
    );
}