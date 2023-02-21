import React from 'react'
import {Container, Grid, Typography} from '@mui/material'
import DashboardTextImage from '../../static/assets/hero.jpg'

function DashboardText(){

    return(
        <Container fullWidth>
            <Grid container>
                <Grid item md={6}>
                    <Typography fontSize = 'large'>
                        Lorem ipsum
                    </Typography>
                </Grid>
                <Grid md={3}>
                    <img src={DashboardTextImage} alt="" style={{width: '400px'}} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DashboardText