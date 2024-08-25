import { Button, Tooltip } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const HoverTip = ({ text } : { text: string } ) => {
    return (
      <div>
        <Tooltip title={text} disableInteractive arrow enterTouchDelay={0}>
          <Button
            size="small"
            variant="outlined"
            style={{
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              minWidth: "24px",
            }}
          >
            <QuestionMarkIcon
              style={{
                width: "16px",
                height: "16px",
              }}
            />
          </Button>
        </Tooltip>
      </div>
    );
  };

export default HoverTip