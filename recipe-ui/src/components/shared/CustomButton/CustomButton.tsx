import { Button } from "@mui/material";

const CustomButton = ({ text } : { text: string }) => {
    return (
      <div>
        <Button type="submit" variant="contained" color="primary">
          {text}
        </Button>
      </div>
    );
  };

export default CustomButton