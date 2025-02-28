import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import PlayerList from '../components/Player/PlayerList';
import AddPlayerModal from '../components/AddPlayer/AddPlayerModal';

const Dashboard = ({ toggleDarkMode }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Customer Support Tool
          </Typography>
          <Button color="inherit" onClick={toggleDarkMode}>
            Toggle Theme
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <AddPlayerModal />
        <PlayerList />
      </Container>
    </>
  );
};

export default Dashboard;
