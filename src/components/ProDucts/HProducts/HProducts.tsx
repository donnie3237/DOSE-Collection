import React from 'react'
import './hpd.scss'
import { HashLink } from 'react-router-hash-link'

type Props = {}

function HProducts({}: Props) {
  return (
    <div className='Products-Head'>
        <HashLink smooth to='#dose-lib'>DosE-LIB</HashLink>
        <HashLink smooth to='#dose-ml'>DosE-ML</HashLink>
        <HashLink smooth to='#dose-crud'>DosE-CRUD</HashLink>
        <HashLink smooth to='#dose-iot'>DosE-IOT</HashLink>
        <HashLink smooth to='#dose-more'>MORE</HashLink>
    </div>
  )
}

export default HProducts