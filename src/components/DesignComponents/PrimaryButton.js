import { Button, makeStyles } from "@material-ui/core";

export default function PrimaryButton(props) {
    const style = styles();
    const { text, color } = props;
    
    return (
        <Button
            variant='contained'
            color={ color }
            className={style.button}
        >
            { text }
        </Button>
    )
};

const styles = makeStyles((theme) => ({
    button: {
        height: '3rem',
        width: '14rem',
        color: 'white',
        fontSize: '1.2rem',
        margin: '0 auto',
    }
}))
