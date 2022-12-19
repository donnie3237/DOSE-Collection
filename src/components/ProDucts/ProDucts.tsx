import React from 'react'
import { Link } from 'react-router-dom'
import HProducts from './HProducts/HProducts.tsx'
import './prod.scss'
const Prod1 = require('./MyProd/DosE-LIB Setup 1.0.0.exe')

type Props = {}

const ProDucts = (props: Props) => {
  return (
    <div>
        <HProducts/>    
        <div className="Product-contents">
            <div className="Prod-Title">
                <h1>DosE-Collection And MoRE!!</h1>
                <div className="AllCard">
                  <div className="card1 card"><img src={require('./img/lib.png')} alt="" /><div className="text">-- DosE-LIB --</div></div>
                  <div className="card2 card"><img src={require('./img/crud.png')} alt="" /><div className="text">-- DosE-CRUD --</div></div>
                  <div className="card3 card"><img src={require('./img/ml.png')} alt="" /><div className="text">-- DosE-ML --</div></div>
                  <div className="card4 card"><img src={require('./img/iot.png')} alt="" /><div className="text">-- DosE-IOT --</div></div>
                </div>
                <div className="mark" id='dose-lib'></div>
            </div>
            <div className="dose-lib prodchild" >
              <div className="tutorial">
                <img src={require('./img/lib.png')} alt="" />
              </div>
              <div className="download">
                <h2>DosE-LIB</h2>
                <div className="phone">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  <div className="load">
                    <p>Mobile Phone</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div> 
                </div>
                <div className="desk">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
                </svg>
                <div className="load">
                    <p>Windows,MAcOS,Linux</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div>
                </div>
              </div>
              <div className="mark" id='dose-ml'></div>
            </div>
            <div className="dose-ml prodchild">
              <div className="download">
                <h2>DosE-ML</h2>
                <div className="phone">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  <div className="load">
                    <p>Mobile Phone</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div> 
                </div>
                <div className="desk">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
                </svg>
                <div className="load">
                    <p>Windows,MAcOS,Linux</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div>
                </div>
              </div>
              <div className="tutorial">
                <img src={require('./img/ml.png')} alt="" />
              </div>
              <div className="mark" id='dose-crud'></div>
            </div>
            <div className="dose-crud prodchild">
              <div className="tutorial">
                <img src={require('./img/crud.png')} alt="" />
              </div>
              <div className="download">
                <h2>DosE-CRUD</h2>
                <div className="phone">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  <div className="load">
                    <p>Mobile Phone</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div> 
                </div>
                <div className="desk">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
                </svg>
                <div className="load">
                    <p>Windows,MAcOS,Linux</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div>
                </div>
              </div>
              <div className="mark" id='dose-iot'></div>
            </div>
            <div className="dose-iot prodchild" id='dose-iot'>
              <div className="download">
                <h2>DosE-IOT</h2>
                <div className="phone">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  <div className="load">
                    <p>Mobile Phone</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div> 
                </div>
                <div className="desk">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
                </svg>
                <div className="load">
                    <p>Windows,MAcOS,Linux</p>
                    <a href={require('./MyProd/DosE-LIB Setup 1.0.0.exe')}>Download!!</a>
                  </div>
                </div>
              </div>
              <div className="tutorial">
                <img src={require('./img/iot.png')} alt="" />
              </div>
              <div className="mark" id='dose-more'></div>
            </div>
            <div className="more prodchild">MORE SOON!!</div>
        </div>
    </div>
  )
}

export default ProDucts