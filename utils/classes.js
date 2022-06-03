const classes = {
  section: {
    marginTop: 2,
    marginBottom: 3,
  },
  main: {
    marginTop: 2,
    minHeight: "100vh",
  },
  footer: {
    marginTop: 3,
    textAlign: "center",
    backgroundColor: "#312782",
    color: "white",
    backgroundImage: "url(/images/bg-footer.webp)",
    backgroundSize: "contain",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    padding: "40px",
  },
  powered: {
    marginRight: "15px",
    color: "#FFF",
    fontSize: "1.3rem",
    TextTransform: "uppercase",
  },
  appbar: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
    padding: "0px 20px",
    transition: "all 0.8s linear",
    "& a": {
      color: "#ffffff",
      marginLeft: 1,
    },
  },
  colored: {
    backgroundColor: "#312782",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  navbarContainer: {
    width: "60%",
    padding: "2px 20px",
    backgroundColor: "rgba(50, 39, 130, 0.18);",
    backdropFilter: "blur(4px)",
    borderRadius: "30px",
  },
  navbarMenu: {
    display: "flex",
    justifyContent: "left",
    width: "100%",
  },
  menuTitle: {
    color: "#FFF",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: "100",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    marginRight: "1rem",
    transition: "0.8s",
    letterSpacing: "2px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "1px solid #FFF",
    },
  },
  servicesTitle: {
    color: "#FFF",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: "100",
    fontSize: "1rem",
    textTransform: "uppercase",
    marginRight: "1rem",
    letterSpacing: "3px",
    cursor: "pointer",
    padding: "0.5rem",
    transition: "all 0.8s linear",
    "&:hover": {
      color: "#3762a0",
    },
  },
  servicesDialog: {
    "& .MuiPaper-root.MuiPaper-elevation": {
      backgroundColor: "rgba(216, 165, 238, 0.3)",
      backdropFilter: "blur(20px)",
      borderRadius: "0",
      padding: "2rem 8rem 2rem 2rem",
    },
  },
  servicesDialogMobile: {
    "& .MuiPaper-root.MuiPaper-elevation": {
      backgroundColor: "rgba(203, 150, 232, 0.9)",
      borderRadius: "0",
      padding: "1rem",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    color: "#FFF",
    cursor: "pointer",
    transition: "all 0.8s linear",
    fontSize: "2rem",
    "&:hover": {
      transform: "scale(1.2)",
      color: "#3762a0",
    },
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    //  display: "initial",
    display: "flex",
    flexDirection: "column",
  },
  hidden: {
    display: "none",
  },
  searchForm: {
    display: "flex",
    alignItems: "flex-start",
  },
  searchInput: {
    color: "#FFF",
    width: "120px",
    marginTop: "-2px",
    "& input": {
      color: "#FFF",
      background: "transparent",
      "& placeholder": {
        background: "transparent",
      },
    },
  },
  searchInputMobile: {
    color: "#333",
    width: "120px",
    marginTop: "-2px",
    "& input": {
      color: "#333",
    },
  },
  searchButton: {
    marginTop: "10px",
  },
  Icons: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "15px",
    height: "15px",
  },

  /* categories   */

  grid: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },

  /* footer*/

  items: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "100px",
    textAlign: "left",
    paddingTop: "25px",
  },
  title: {
    fontFamily: `'Lato', sans-serif`,
    textDecoration: "underline",
    fontWeight: 700,
    fontSize: "25px",
    letterSpacing: "0.015em",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },

  description: {
    fontFamily: `'Lato', sans-serif`,
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#FFFFFF",
    paddingTop: "2px",
  },

  socialMedia: {
    paddingTop: "20px",
  },
  btnInscription: {
    fontFamily: `'Lato', sans-serif`,
    fontWeight: 700,
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.015em",
    textTransform: "uppercase",
    color: "#B7572A",
    backgroundColor: "#FFFFFF",
    border: "none",
    padding: "9px 22px",
    maxWidth: "150px",
    marginTop: "15px",
  },

  socialImg: {
    paddingRight: "5px",
    cursor: "pointer",
  },
};

export default classes;
