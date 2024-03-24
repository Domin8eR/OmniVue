import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ...theme.spread,
  dialogStyle: {
    position: "relative",
    top: "10%",
    left: "10%",
    overflow: "scroll",
    height: "100%",
    display: "block",
  },
  selectOpt: {
    minWidth: 200,
    width: "100%",
  },
  assignTo:{
    display:"inline-block",
    float:"right",
    width:"30%",
  },
  value:{
    display:"inline-block",
    float:"left",
  },
  emergency: {
    display: "inline-block",
    float:"left",
  },
  
  priority: {
    display: "inline-block",
    float: "right",
  },
  status: {
    display: "inline-block",
    marginRight: "10px",
  },
  type: {
    display: "inline-block",
    float: "right",
  },
  formTitle: {
    display: "inline-block",
    marginRight: "10px",
  },
  datePicker: {
    display: "inline-block",
    float: "right",
  },
}));

export { useStyles };
