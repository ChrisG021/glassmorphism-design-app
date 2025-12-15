import './App.css';
import HeaderApp from '../components/header-app';
import SideBar from '../components/sidebar';
import { RxDotsHorizontal } from 'react-icons/rx';
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
} from 'react-icons/si';



function CardApps({ title, toUpdate, icon }: any) {
  return (
    <div className="cardApp flex flex-col gap-6">
      <div className="head-card flex flex-row items-center">
        {icon}
        <p>{title}</p>
      </div>

      <p className="description-card">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>

      <div className="flex flex-row justify-end items-center gap-5">
        {toUpdate ? (
          <button className="btn update">Update</button>
        ) : (
          <button className="btn">Install</button>
        )}
        <RxDotsHorizontal />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app flex flex-col">
      <HeaderApp />

      <main className="flex flex-row">
        <SideBar />

        <div className="main-content flex flex-col flex-4 justify-between">
          <div className="main-header flex w-full">
            <span>Todos os aplicativos</span>

            <ul className="flex discover">
              <li className="active">Desktop</li>
              <li>Mobile</li>
              <li>Web</li>
            </ul>

            <span className="opacity-0">Todos os aplicativos</span>
          </div>

          <div className="main-body flex-2 bg-(--color-background-strong)">
            {/* Banner */}
            <div className="flex-1 w-full">
              <div className="banner flex flex-col gap-2">
                <div className="banner-head flex items-center">
                  <SiAdobeillustrator />
                  <p>Adobe Illustrator</p>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="flex banner-btn">
                  <button>Start Free Trial</button>
                </div>
              </div>
            </div>

            {/* Installed apps */}
            <div className="flex flex-1 flex-col gap-2">
              <span className="title">Instalado</span>

              <ul className="content">
                <li className="main-item">
                  <div className="flex items-center gap-2">
                    <SiAdobephotoshop />
                    <p>Photoshop</p>
                  </div>

                  <div className="status">updated</div>

                  <div className="flex items-center gap-4">
                    <button>open</button>
                    <RxDotsHorizontal />
                  </div>
                </li>

                <li className="update main-item">
                  <div className="flex items-center gap-2">
                    <SiAdobeillustrator />
                    <p>Illustrator</p>
                  </div>

                  <div className="status">update available</div>

                  <div className="flex items-center gap-4">
                    <button>Update this app</button>
                    <RxDotsHorizontal />
                  </div>
                </li>

                <li className="bottom main-item">
                  <div className="flex items-center gap-2">
                    <SiAdobexd />
                    <p>XD</p>
                  </div>

                  <div className="status">updated</div>

                  <div className="flex items-center gap-4">
                    <button>open</button>
                    <RxDotsHorizontal />
                  </div>
                </li>
              </ul>
            </div>

            {/* Cards */}
            <div className="cards flex-1">
              <span className="title">Apps no seu plano</span>

              <div className="flex flex-row gap-5 justify-between">
                <CardApps
                  title="Premiere"
                  toUpdate
                  icon={<SiAdobepremierepro className="border-2 border-purple-400 rounded-lg" />}
                />

                <CardApps
                  title="After Effects"
                  toUpdate={false}
                  icon={<SiAdobeaftereffects className="border-2 border-purple-400 rounded-lg" />}
                />

                <CardApps
                  title="InDesign"
                  toUpdate={false}
                  icon={<SiAdobeindesign className="border-2 border-red-400 rounded-lg" />}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
