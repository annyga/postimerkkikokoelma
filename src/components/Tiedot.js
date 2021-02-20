import {CardActionArea, CardContent, CardActions, Typography, Card, CardMedia, Button, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link} from "react-router-dom";
import postiMerkit from "../data/postimerkit.json";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 100
      },
    media: {
        height: 250,
      },
    rid :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})

function Tiedot(props){

    const tyyli = useStyles();
    //find witch stamp to show
    let haettuMerkki = postiMerkit.filter( (postimerkki) =>{
        return postimerkki.postimerkki_id === props.match.params.id;
    })

    


    return(
        <Grid container>
          <Grid item xs={12} className={tyyli.rid}>
            <Card className={tyyli.root}>
              <CardActionArea>
                <CardMedia
                  className={tyyli.media}
                  image={haettuMerkki[0].kuvan_url}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {haettuMerkki[0].merkin_nimi}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Merkin ilmestymispäivä on {haettuMerkki[0].ilmestymispaiva} ja se otettiin 
                    käytöstä {haettuMerkki[0].kayton_paattyminen}
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                      Merkin nimellisarvo on {haettuMerkki[0].nimellisarvo} {haettuMerkki[0].valuutta}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Merkin suunnitteli: {haettuMerkki[0].taiteilija}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Merkin painopaikka: {haettuMerkki[0].painopaikka}
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button component={Link} to="/selaa" size="small" color="primary"> 
                  Palaa
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

    )
}

 export default Tiedot;