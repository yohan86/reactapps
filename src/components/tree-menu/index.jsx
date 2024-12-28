import data from "./data";
import MenuList from "./menu-list";
import "./style.css";

export default function TreeMenu(){

    return <div className="tree-menu-wrapper"><MenuList list={data}  /></div>
}