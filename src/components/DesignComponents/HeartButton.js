import { IconButton, Box } from "@material-ui/core";
import { FavoriteBorder } from "@mui/icons-material";

export default function HeartButton() {
    return (
        <Box>
            <IconButton size='large'>
                <FavoriteBorder/>
            </IconButton>
        </Box>
    )
}
