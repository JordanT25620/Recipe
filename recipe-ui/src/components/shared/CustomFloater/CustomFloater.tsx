import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CustomFloater = () => {
  return (
    <div className="floater">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default CustomFloater