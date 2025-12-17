import { FaBars, FaBell, FaCloud, FaSearch } from "react-icons/fa";
import './style.css';
import the_rock2 from './../../assets/the-rock.jpg';
import { useState } from "react";
export default function HeaderApp(){
    const [section,setSection] = useState<string>("app")
    return(
        <div className="header">
            <div className="circles">
                <div className="circle c-r"></div>
                <div className="circle c-y"></div>
                <div className="circle c-g"></div>
            </div>
            
            <div className="others ">
                <ul className="sections">
                    <li onClick={()=>{setSection("app")}} className={`op ${section == "app"?"active":""}`}>Apps</li>
                    <li onClick={()=>{setSection("work")}} className={`op badge ${section == "work"?"active":""}`} >Seus trabalhos</li>
                    <li onClick={()=>{setSection("discover")}} className={`op ${section == "discover"?"active":""}`}>Explorar</li>
                    <li onClick={()=>{setSection("store")}} className={`op badge ${section == "store"?"active":""}`}>Loja</li>
                </ul>

                <div className="flex lg:gap-5">
                    <div className="searchbar">
                        {/* icone e input */}
                        <FaSearch/>
                        <input  type="text" placeholder="Pesquise" />
                    </div>
                    <div className="options">
                        {/*  icone notificacao cloud e perfil */}
                        <div className="block md:hidden">
                        <FaBars />
                        </div>

                        <div className="badge block max-md:hidden">
                        <FaBell />
                        </div>

                        <div className="block max-md:hidden">
                        <FaCloud />
                        </div>
                        <div className="user-profile"><img src={the_rock2} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}