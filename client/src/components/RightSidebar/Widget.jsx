import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blackLogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1' >
            <div className='right-sidebar-div-2' >
                <img src={pen} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            <div className='right-sidebar-div-2' >
                <img src={pen} alt="pen" width='18'/>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            </div>
            <h4>Feature on Meta</h4>
            <div className='right-sidebar-div-1' >
            <div className='right-sidebar-div-2' >
                <img src={comment} alt="comment" width='18'/>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            <div className='right-sidebar-div-2' >
                <img src={comment} alt="comment" width='18'/>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            <div className='right-sidebar-div-2' >
                <img src={blackLogo} alt="blackLogo" width='18'/>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            </div>
            <h4>hot Meta Post</h4>
            <div className='right-sidebar-div-1' >
            <div className='right-sidebar-div-2' >
                <p>38</p>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            <div className='right-sidebar-div-2' >
                <p>20</p>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            <div className='right-sidebar-div-2' >
                <p>14</p>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolorum quo q</p>
            </div>
            </div>
    </div>
  )
}

export default Widget