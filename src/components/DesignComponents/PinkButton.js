import { Button, makeStyles } from "@material-ui/core";

export default function PinkButton(props) {
    const style = styles();
    return (
        <Button
            variant='contained'
            color='primary'
            className={style.button}
        >
            {props.buttonText}
        </Button>
    )
};

const styles = makeStyles((theme) => ({
    button: {
        height: '3rem',
        width: '14rem',
        color: 'white',
        fontSize: '1.2rem',
    }
}))
