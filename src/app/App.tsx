import './App.css';
import HeaderApp from '../components/header-app';
import SideBar from '../components/sidebar';
import { RxDotsHorizontal } from 'react-icons/rx';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from 'react-icons/si';

function App() {

  return (
    <div className='app flex flex-col'>
      <HeaderApp/>
      <main className='flex  flex-row '>
        {/*  sidebar */}
          <SideBar/>
        {/* Main content */}
        <div className='main-content flex flex-col flex-4'>
          <div className='main-header flex  w-full'>
            <span>Todos os aplicativos</span>
            <ul className='flex discover'>
              <li className='active'>Desktop</li>
              <li>Mobile</li>
              <li>Web</li>
            </ul>
            <span className='opacity-0'>Todos os aplicativos</span>
          </div>
          <div className='main-body flex-1 bg-(--color-background-strong) '>
            <div className='flex flex-col gap-2'>
              <span className='title'>Instalado</span>
              
                <ul className='content'>
                  <li className='main-item flex flex-row justify-between'>
                    <div className='flex items-center gap-2'>
                      <SiAdobephotoshop />
                      <p>Photoshop</p>
                    </div>
                    <div>updated</div>
                    <div className='flex items-center gap-4'>
                      <button>open</button>
                      <RxDotsHorizontal/>
                    </div>
                  </li>
                  <li className='main-item flex flex-row justify-between'>
                    {/* icon */}
                    <div className='flex items-center gap-2'>
                      <SiAdobeillustrator />
                      <p>Ilustrator</p>
                    </div>
                    <div>update available</div>
                    <div className='flex items-center gap-4'>
                      <button>open</button>
                      <RxDotsHorizontal/>
                    </div>
                  </li>
                  <li className='bottom main-item flex flex-row justify-between'>
                    <div className='flex items-center gap-2'>
                      <SiAdobexd />
                      <p>XD</p>
                    </div>
                    <div>updated</div>
                    <div className='flex items-center gap-4'>
                      <button>open</button>
                      <RxDotsHorizontal/>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
