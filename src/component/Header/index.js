import React from 'react';
import style from'./Header.module.scss';
import { Link } from 'react-router-dom';
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';

const Header=()=>{

   const handleChange=()=>{
        
}
    
    return <div className={style.HeaderNav}>
        <div className={style.HeaderFirst}>
            <h1>Developer Guru</h1>
        </div>
        <div className={style.HeaderSecond}>
            <ul className={style.Nav}>
                <li><Link to='/' className={`link ${style.link}`}>HOME</Link></li>
                <li><Link to='/About' className={`link ${style.link}`}>ABOUT</Link></li>
                <li><Link to='/Service' className={`link ${style.link}`}>SERIVCE</Link></li>
                <li><Link to='/Probuct' className={`link ${style.link}`}>PROBUCT</Link></li>

 <Switch
      size="lg"
      slotProps={{
          input: { 'aria-label': 'Dark mode' },
          thumb: {
              children: <DarkMode />,
            },
        }}
        sx={{ '--Switch-thumbSize': '16px',margin:'30px 20px' }}
    OnClick={handleChange()}
        />
        </ul>
        </div>
    </div>
}

export default Header;