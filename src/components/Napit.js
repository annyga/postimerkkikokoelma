import {Box, Grid, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( {
    btn : {
        margin: "10px"
    },
    bx :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})


function Napit(props){

    const tyyli = useStyles();
    
    return(
        <Grid item xs={12}>
            <Box className={tyyli.bx}>
                {props.indx < 20 ? 

                <Button 
                variant="contained" 
                color="primary" 
                className={tyyli.btn} 
                onClick={props.setBack} 
                disabled>Edelliset 20</Button> : 

                <Button 
                variant="contained" 
                color="primary" 
                className={tyyli.btn} 
                onClick={props.setBack}
                >Edelliset 20</Button>} 

                {props.indx > (props.listanPituus - 39) ? 
                <Button 
                variant="contained" 
                color="primary" 
                className={tyyli.btn} 
                onClick={props.setForward}
                disabled>Seuraavat 20</Button> :

                <Button 
                variant="contained" 
                color="primary" 
                className={tyyli.btn} 
                onClick={props.setForward}
                >Seuraavat 20</Button>}
            </Box>
        </Grid>
    )
}

export default Napit;