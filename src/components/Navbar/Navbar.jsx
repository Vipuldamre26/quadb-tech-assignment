import React, { useState } from 'react'
import './Navbar.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const Navbar = () => {

    const [open, openChange] = useState(false);

    const openPopUp = () => {
        openChange(true);
    }

    const closePopUp = () => {
        openChange(false);
    }


    return (
        <div className='navbar'>
            <div className="navbar-main">
                <h2>To do List</h2>
                <div className="btn">
                    <Button
                        onClick={openPopUp}
                        color='primary'
                        variant='contained'
                    >
                        Add Item
                    </Button>
                </div>
            </div>


            <Dialog open={open} onClose={closePopUp} fullWidth>
                <DialogTitle>Add To Do</DialogTitle>

                <DialogContent>
                    <TextField variant='outlined' label='To do' fullWidth ></TextField>
                </DialogContent>

                <DialogActions>
                    <Button color='error' onClick={closePopUp}
                        variant='contained'>Close</Button>
                    <Button color='success' onClick={closePopUp}
                        variant='contained'>Add</Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default Navbar