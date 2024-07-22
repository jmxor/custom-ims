import {Menu} from '@mui/icons-material';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';

export default function Header() {
  return (
    <AppBar position="fixed" elevation={0} color="inherit" sx={{borderBottom: 1}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{mr: 2}}
        >
          <Menu/>
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          IMS
        </Typography>


        <Box sx={{flexGrow: 1}}/>
        {/* Search Box */}
      </Toolbar>
    </AppBar>
  );
}