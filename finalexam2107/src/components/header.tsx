import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link'
import Menu from '@mui/material/Menu';
import Image from 'next/image'
import styles from '../styles/header.module.css'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import userimg from '../public/sampleuser.png';
import MenuItem from '@mui/material/MenuItem';


const Header = () => {


    return (
      <AppBar position="static" style={{backgroundColor: '#C4A484'}}>
        <Toolbar color='light brown' className={styles.menuitems}>
            <Typography>
                <a href='/upload'>Upload</a> <a href='/'>Shopping</a> <a href='/aboutus'>About Us</a>
            </Typography>
        
        <Image className={styles.imagespot}
              src={userimg}
              objectPosition='flex'
              justify-content='right'
              alt="user img"
              height={23}
              width={30}>
  
          </Image>
        </Toolbar> 
      </AppBar>
      
    );
  };
  export default Header;