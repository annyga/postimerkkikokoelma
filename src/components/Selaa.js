import { Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from "react";
import postiMerkit from "../data/postimerkit.json";
import Merkki from "./Merkki";
import Napit from "./Napit";

const useStyles = makeStyles( {
    comps :{
        marginTop : "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    picc : {
        height :"100px"
    },
    btn : {
        margin: "10px"
    }
})

function Selaa(props){

    const tyyli = useStyles();

    
    const [naytaNama, setNaytaNama] = useState([]);

    function makeList(){
        let lista =[];
        for (let i = props.indx; i < props.indx + 20; i++){
            lista.push(postiMerkit[i]);
        }

        setNaytaNama(lista);
    }

    function setForward(){
        props.setIndx(props.indx + 20);

                
    }

    function setBack(){
        props.setIndx(props.indx - 20);

        
    }

    useEffect( () => {
        makeList()
    }, [props.indx])


    return(
        <Grid container className={tyyli.comps}>
            {naytaNama.map( (item, index)=> {
                return(
                    <Grid item key={index} xs={3}> 
                        <Merkki  merkki={item}/>
                    </Grid>
                )
            } )}
            <Napit setForward={setForward} setBack={setBack} indx={props.indx} listanPituus={postiMerkit.length}/>      
        </Grid>
    )
}

export default Selaa;