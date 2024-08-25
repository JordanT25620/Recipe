import { Grid } from "@mui/material";
import HoverTip from "../HoverTip/HoverTip";

const FieldWithTooltip = ({ field, toolTipText } : {field : string, toolTipText : string} ) => (
    <Grid container spacing={2} alignItems="center" style={{ marginLeft: "2%" }}>
      <Grid item xs={10}>
        {field}
      </Grid>
      <Grid item xs={2} style={{ marginTop: "5%" }}>
        <HoverTip text={toolTipText} />
      </Grid>
    </Grid>
  );

export default FieldWithTooltip