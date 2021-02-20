import {Button, Typography, Card, CardHeader, CardMedia} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"


const useStyles = makeStyles( {
    comps :{
        marginTop : "60px"
    },
    picc : {
        height :"100px"
    }
})

function Merkki(props){

    const tyyli = useStyles();
    let reitti = `postimerkki/${props.merkki.postimerkki_id}`;

    return(

    <Card>
        <CardHeader title={props.merkki.merkin_nimi}/>
        <Button component={Link} to={reitti}>
            <CardMedia component="img" alt="postimerkit" className={tyyli.picc} image={props.merkki.kuvan_url}/> 
        </Button>        
        <Typography>Ilmestymispäivämäärä: {props.merkki.ilmestymispaiva}</Typography>
        <Typography>Arvo: {props.merkki.nimellisarvo} {props.merkki.valuutta}</Typography>                   
    </Card>
    )
}

export default Merkki;