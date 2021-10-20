import { Checkbox, FormControlLabel } from "@material-ui/core";

export default function CheckBoxItem({ shoppingItem }) {
    return (
        <FormControlLabel control={<Checkbox />} label={`${shoppingItem.quantity} ${shoppingItem.value} ${shoppingItem.ingredient}`} />
    )
}
