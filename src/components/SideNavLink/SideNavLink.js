import './SideNavLink.css'


function SideNavLink(props) {
const {name, click, idnum} = props
    return (
        <li className="sidenav-link nav-item">
            <a className="nav-link active" onClick={click} aria-current="page" idnum= {idnum} href="#" key={ name }>{ name }</a>
        </li>
             
)}

export default SideNavLink