const theme = {
    palette: {
      primary: {
        main: "#0000FF",
      },
      secondary: {
        main: "#FF0000",
      },
      black: {
        main: "#000",
      },
    },
    spread: {
      container: {
        maxWidth: "210vh",
        margin: "auto",
        height: "100%",
      },
      formControl: {
        minWidth: 120,
        float: "right",
      },
      tableContainer: {
        width: "100%",
        background: "#f0f2f5",
        overflowY: "scroll",
        marginBottom: 15,
      },
  
      tableCell: {
        borderRight: "5px solid #fff",
        verticalAlign: "top",
        "&:last-child": {
          borderRight: "none",
        },
        minWidth: "220px",
      },
    },
  };
  export default theme;
  