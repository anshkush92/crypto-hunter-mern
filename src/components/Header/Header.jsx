// Test -------------------------- Importing the Packages ---------------------------------
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Test -------------------------- Importing the styles / other components ----------------
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import CurrencyChange from './CurrencyChange';
import AuthButton from './AuthButton';

// Test -------------------------- The current component ----------------------------------
const Header = () => {
  const { isLogin } = useSelector((state) => state.userHandler);

  return (
    <>
      {/* The Navigation Bar */}
      <AppBar sx={{ backgroundColor: '#393E46' }} position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 1, sm: 2 },
            py: 1,
          }}
        >
          {/* Name of the APP */}
          <Box>
            <Link
              to="/"
              style={{
                background: 'inherit',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: '18px', sm: '24px' }, color: '#F7F7F7' }}
              >
                Crypto Hunter
              </Typography>
            </Link>
          </Box>

          {/* Theme Changer + Auth Buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1 },
            }}
          >
            {isLogin && (
              <>
                <CurrencyChange></CurrencyChange>
                <AvatarMenu></AvatarMenu>
              </>
            )}

            {/* Auth Button */}
            {!isLogin && (
              <>
                <AuthButton link="/signup" buttonVariant="text">
                  Sign Up
                </AuthButton>
                <AuthButton link="/login">Login</AuthButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Header;
