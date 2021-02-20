import {Box, Grid, Typography, Card, CardMedia} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import kuva from "../images/merkit.jpg"; 

const useStyles = makeStyles( {
    comps :{
        marginTop : "60px"
    },
    otsikko :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"20px"
    },
    picc : {
        height :"300px"
    }
})



function Etusivu(){

    const tyyli = useStyles();

    return(
        
        <Grid container className={tyyli.comps}>
            <Grid item xs={12} >             
                <Box className={tyyli.otsikko}>
                    <Typography variant="h2">POSTIMERKKIKOKOELMA</Typography>
                </Box>                              
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardMedia component="img" alt="postimerkit" className={tyyli.picc} image={kuva}/>
                </Card>
            </Grid>
            <Grid item xs={12}>             
                <Box className={tyyli.otsikko}>
                    <Typography variant="subtitle1">Täällä voit selata erilaisia postimerkkejä</Typography>
                </Box>                              
            </Grid>        
        </Grid>
        
    )
}

export default Etusivu;