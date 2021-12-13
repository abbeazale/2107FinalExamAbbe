import Header from '../components/header';
import styles from '../styles/header.module.css';
import { TextField } from '@mui/material';

export default function Upload(){
    return (
        <div>
            <Header/>
            <h1 className={styles.producttxt}>Upload a scarf</h1>
            <form>
                <TextField placeholder='Name of your scarf'
                />
                <TextField placeholder='Name of witch'/>
                <TextField placeholder='Material'/>
                <TextField placeholder='Length'/>
                <TextField placeholder='Width'/>
                <TextField placeholder='Weight'/>
                <TextField placeholder='Price'/>
                <TextField placeholder='Location'/>
                <TextField placeholder='description'/>

            </form>
        </div>
    )
}