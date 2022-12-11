import React from 'react'
import HProducts from './HProducts/HProducts.tsx'
import './prod.scss'

type Props = {}

const ProDucts = (props: Props) => {
  return (
    <div>
        <HProducts/>    
        <div className="Product-contents">
            <div className="Prod-Title">
                <h1>Hello</h1>
            </div>
            <div className="dose-lib prodchild" id='dose-lib'>lib
            <a href="./MyProd/DosE-LIB Setup 1.0.0.exe" download>download</a></div>
            <div className="dose-ml prodchild" id='dose-ml'>ml</div>
            <div className="dose-crud prodchild" id='dose-crud'>crud</div>
            <div className="dose-iot prodchild" id='dose-iot'>iot</div>
            <div className="more prodchild" id='dose-more'>more</div>
        </div>
    </div>
  )
}

export default ProDucts