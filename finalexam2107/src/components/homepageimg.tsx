import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Typography } from '@mui/material'
import styles from '../styles/header.module.css'
import Header from '../components/header';
import scarfLady from '../public/scarflady.png';
import { Box } from '@mui/system'


const ScarfImage = () => {
    return (
        <Image
            src={scarfLady}
            height={400}
            width={1590}
            objectPosition='relative' />

            

        

      
    ) 
}


export default ScarfImage;

