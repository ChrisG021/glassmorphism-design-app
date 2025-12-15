import { PiDotsNineBold, PiFunction } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import "./style.css";
import { FaBrush, FaCamera, FaVideo } from "react-icons/fa";
import { FaComputer, FaMessage } from "react-icons/fa6";
import { SiAppstore } from "react-icons/si";
import { BsFillMortarboardFill } from "react-icons/bs";
import { useState } from "react";
export default function SideBar(){
    const [section,setSection] = useState<string>("all-apps");

    return(
        <div className="sidebar">
            <div className="sections-sidebar">
                <p className="title">Apps</p>
                <ul className="apps flex flex-col">
                    <li onClick={()=>{setSection("all-apps")}} className={`flex flex-row ${section == "all-apps"?"active":""}`}>
                        <div className="icon-container">
                            <PiDotsNineBold />
                        </div>
                        <p className="description">Todos os Aplicativos</p>
                    </li>
                    <li onClick = {()=>{setSection("update")}} className={`flex flex-row badge-update ${section == "update"?"active":""}`}>
                        <div className="icon-container">
                            <TbReload />
                        </div>
                        <p className="description">Atualizações</p>
                    </li>
                </ul>
            </div>
{/* categories */}
            <div className="sections-sidebar">
                <p className="title">Categorias</p>
                <ul className="apps flex flex-col">
                    <li onClick = {()=>{setSection("photos")}} className={`flex flex-row ${section == "photos"?"active":""}`}>
                        <div className="icon-container">
                            <FaCamera />
                        </div>
                        <p className="description">Fotografia</p>
                    </li>
                    <li onClick = {()=>{setSection("design")}} className={`flex flex-row ${section == "design"?"active":""}`}>
                        <div className="icon-container">
                            <SiAppstore />
                        </div>
                        <p className="description">Design Gráfico</p>
                    </li>
                    <li onClick = {()=>{setSection("videos")}} className={`flex flex-row ${section == "videos"?"active":""}`}>
                        <div className="icon-container">
                            <FaVideo />
                        </div>
                        <p className="description">Vídeo</p>
                    </li>
                    <li onClick = {()=>{setSection("ilustration")}} className={`flex flex-row ${section == "ilustration"?"active":""}`}>
                        <div className="icon-container">
                            <FaBrush />
                        </div>
                        <p className="description">Ilustrações</p>
                    </li>
                    <li onClick = {()=>{setSection("ui/ux")}} className={`flex flex-row ${section == "ui/ux"?"active":""}`}>
                        <div className="icon-container">
                            <FaComputer />
                        </div>
                        <p className="description">UI/UX</p>
                    </li>
                    <li onClick = {()=>{setSection("3d")}} className={`flex flex-row ${section == "3d"?"active":""}`}>
                        <div className="icon-container">
                            <TbReload />
                        </div>
                        <p className="description">3D / AR</p>
                    </li>
                </ul>
            </div>
{/* fontes */}
            <div className="sections-sidebar">
                <p className="title">Fontes</p>
                <ul className="apps flex flex-col">
                    <li onClick = {()=>{setSection("fonts")}} className={`flex flex-row ${section == "fonts"?"active":""}`}>
                        <div className="icon-container">
                            <PiFunction />
                        </div>
                        <p className="description">Gerenciar fontes</p>
                    </li>
                </ul>
            </div>
{/*  categorias 2 */}
            <div className="sections-sidebar">
                <p className="title">Categorias</p>
                <ul className="apps flex flex-col">
                    <li onClick = {()=>{setSection("st")}} className={`flex flex-row ${section == "st"?"active":""}`}>
                        <div className="st icon-container">
                            <span className="st-icon">St</span>
                        </div>
                        <p className="description">stock</p>
                    </li>
                    <li onClick = {()=>{setSection("tutorials")}} className={`flex flex-row ${section == "tutorials"?"active":""}`}>
                        <div className="icon-container">
                           <BsFillMortarboardFill />
                        </div>
                        <p className="description">Tutorials</p>
                    </li>
                        <li onClick = {()=>{setSection("pt")}} className={`flex flex-row ${section == "pt"?"active":""}`}>
                        <div className="icon-container">
                            <span>Pt</span>
                        </div>
                        <p className="description">Portifolio</p>
                    </li>
                    <li onClick = {()=>{setSection("be")}} className={`flex flex-row ${section == "be"?"active":""}`}>
                        <div className="icon-container">
                            <span>Be</span>
                        </div>
                        <p className="description">Behance</p>
                    </li>
                    <li onClick = {()=>{setSection("social")}} className={`flex flex-row ${section == "social"?"active":""}`}>
                        <div className="icon-container">
                            <FaMessage />
                        </div>
                        <p className="description">Social forum</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}