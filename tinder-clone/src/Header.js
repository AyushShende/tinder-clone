import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css"
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" alt='' />
           
           <IconButton>
             <ForumIcon fontSize='large' className='header_icon'/>
           </IconButton>
            
            
        </div>
    )
}

export default Header;
