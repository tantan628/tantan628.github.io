//IMPORTS - Mui
import { Link, Toolbar, Typography, Box, IconButton, Grid } from '@mui/material';

//----------COMPONENT---------
const Header = () => {

    return (
        <Grid container alignItems="left">
            <Grid item xs={12}>
                <Typography variant="h1" >
                    Tanis Holt
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2">
                    Junior Software Developer
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href="https://github.com/tantan628" underline="hover">
                    Github
                </Link>
                <Link href="https://www.linkedin.com/in/tanis-holt-34475922a" underline="hover">
                    LinkedIn
                </Link>
            </Grid>
        </Grid>
    )
};

export default Header;