import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PublishIcon from "@material-ui/icons/Publish";
import { DEFAULT_STRINGS, noop } from "utils/constants/common";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

// Navbar styles
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    borderRadius: 0,
    marginRight: theme.spacing(1),
  },
  navLogo: {
    flexGrow: 0,
  },
}));

const Navbar = ({ onMenuButtonClick = noop, onImportButtonClick = noop }) => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <IconButton
          className={classes.menuButton} //menu button
          onClick={onMenuButtonClick}
          disableRipple
          edge="start"
          aria-label="sidebar menu"
        >
          <MenuIcon />
        </IconButton>

          
          <Box //logo
          component="img"
          className={classes.navLogo}
          display="flex" justifyContent="center" alignItems="center"
          sx={{
            height: 40,
            width: 150,
            mr: 113,
            ml: 0,
          }}
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Atlan-logo-full.svg"
          />

        <Button //upload button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<PublishIcon />}
          onClick={onImportButtonClick}
        >
          {DEFAULT_STRINGS.IMPORT_DATA}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

Navbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
  onImportButtonClick: PropTypes.func.isRequired,
};
