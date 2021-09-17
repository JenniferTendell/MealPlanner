import { Button } from "@material-ui/core";

export default function PinkButton(props) {
    return (
        <Button
            variant='contained'
            color='primary'
            size='large'
            style={{
                color: 'white',
            }}
        >
            {props.buttonText}
        </Button>
    )
}
