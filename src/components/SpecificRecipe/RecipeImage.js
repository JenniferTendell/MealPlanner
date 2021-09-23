import { makeStyles } from "@material-ui/core";

export default function RecipeImage(props) {
    const style = styles();
    const { title, image, } = props.recipe;

    return (
        <img src={image} className={style.image} alt={title} />
    )
};

const styles = makeStyles((theme) => ({
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '.3rem',
    }
}))
