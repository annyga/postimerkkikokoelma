import {AppBar, Toolbar, Button, Link} from "@material-ui/core";

function Valikko(){
    return(
        <AppBar>
            <Toolbar>
                <Link color="inherit" href="/">
                    <Button color="inherit">Etusivu</Button>
                </Link>
                <Link color="inherit"  href="/selaa">
                    <Button color="inherit">Selaa</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Valikko