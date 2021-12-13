import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Data from "../utils/data";


const Detailpage = () => {
    const router = useRouter();
    const { name } = router.query;
    const product = Data.products.find((a) => a.name === name)

    return (
        <div>
            <Header/>
            <div>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <Image src={product.image} alt={product.name} width={640} height={640}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}