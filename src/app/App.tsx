import './App.css';
import HeaderApp from '../components/header-app';
import SideBar from '../components/sidebar';
import { RxDotsHorizontal } from 'react-icons/rx';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiAdobexd } from 'react-icons/si';

function App() {
  const CardApps = ({title,toUpdate,icon}:any)=>{
    return(
      <div className='cardApp flex flex-col gap-6'>
        <div className='head-card flex flex-row items-center'>
          {icon}
          <p>{title}</p>
        </div>
        <p className='description-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className='flex flex-row justify-end items-center gap-5'>
          {toUpdate==true?(
              <button className='btn update'>Update</button>
            ):(<button className='btn'>install</button>)}
          <RxDotsHorizontal/>
        </div>
      </div>
    );
  }

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

          <div className='main-body bg-(--color-background-strong) '>
            {/* banner free trial */}
            <div className='flex flex-1 banner w-full'>
              <div>
                <div>
                  <SiAdobeillustrator/>
                  <p>Adobe Illustrator</p>
                </div>
                <p></p>
                <div>
                  <button></button>
                </div>
              </div>
            </div>

            {/* apps */}
            <div className='flex flex-col gap-2'>
              <span className='title'>Instalado</span>
              
                <ul className='content'>
                  
                  <li className='main-item '>
                    <div className='flex items-center gap-2'>
                      <SiAdobephotoshop />
                      <p>Photoshop</p>
                    </div>
                    <div className='status'>updated</div>
                    <div className='flex items-center gap-4'>
                      <button>open</button>
                      <RxDotsHorizontal/>
                    </div>
                  </li>

                  <li className='update main-item '>
                    {/* icon */}
                    <div className='flex items-center gap-2 '>
                      <SiAdobeillustrator />
                      <p>Ilustrator</p>
                    </div>

                    {/* status */}
                    <div className='status'>update available</div>

                    {/* button e 3dots */}
                    <div className='flex items-center gap-4'>
                      <button>Update this app</button>
                      <RxDotsHorizontal/>
                    </div>
                  </li>

                  <li className='bottom main-item '>
                    {/* icon */}
                    <div className='flex items-center gap-2'>
                      <SiAdobexd />
                      <p>XD</p>
                    </div>

                    {/* status */}
                    <div className='status'>updated</div>

                    {/* button e 3 dots */}
                    <div className='flex items-center gap-4'>
                      <button>open</button>
                      <RxDotsHorizontal/>
                    </div>
                  </li>

                </ul>
            </div>

            {/* cards */}
            <div className='cards flex-1'>
              <span className='title'>Apps no seu plano</span>
              <div className='flex flex-row gap-5 justify-between'>
                <CardApps title={"Premiere"} toUpdate={true} icon ={<SiAdobepremierepro className=' border-2 border-purple-400 rounded-lg'/>}/>
                <CardApps title={"After effects"} toUpdate={false} icon ={<SiAdobeaftereffects className=' border-2 border-purple-400 rounded-lg'/>}/>
                <CardApps title={"InDesign"} toUpdate={false} icon ={<SiAdobeindesign className=' border-2 border-red-400 rounded-lg'/>}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
