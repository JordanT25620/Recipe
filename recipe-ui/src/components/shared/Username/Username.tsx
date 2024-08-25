import { TextField } from "@mui/material";

const Username = ({ name, value, onChange, error, helperText }) => {
    return (
        <>
            <TextField
                error={error}
                helperText={error ? helperText : ""}
                sx={{ width: "25ch" }}
                variant="standard"
                id={name}
                label="Username"
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="username"
            />
        </>
    );
};

export default Username