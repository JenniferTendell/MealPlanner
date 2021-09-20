import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

export default function GoBackButton() {
    const style = styles();
    const history = useHistory();
    
    return (
        <Button
            variant='text'
            size='large'
            className={style.button}
            onClick={() => history.goBack()}
        >
            Tillbaka
        </Button>

    )
};

const styles = makeStyles((theme) => ({
    button: {
        height: '3rem',
        width: '8rem',
        color: '#112121',
        fontSize: '1.2rem',
        margin: '1rem 0 0 .5rem',
    },
}))
