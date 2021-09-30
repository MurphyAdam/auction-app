import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { TextField, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    maxHeight: 600,
  },
  productTitle: {
    padding: theme.spacing(2, 0),
    fontSize: theme.spacing(4),
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  bidButton: {
    margin: theme.spacing(2, 0)
  },
  paramName: {
    fontWeight: 'bold',
  }
}));

export default function Settings(props) {
  const classes = useStyles();
  const [bidAmount, setBidAmount] = useState(10);
  const [bidPercentAlert, setBidPercentAlert] = useState(10);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Box padding={2}>
          <Typography component="h1"
            className={classes.productTitle}>
            Configure the Auto-bidding
          </Typography>
          <Typography variant="body1"
            className={classes.paramName}
            color="secondary">
            Maximum bid amount
          </Typography>
          <Typography variant="caption"
            color="secondary">
            This maximum amount will be split between all items where we have activated auto-bidding
            Be mindful of the concurrency issues with auto-bidding!
          </Typography>
          <Box pt={2}>
            <TextField value={bidAmount}
              variant="filled"
              type="number"
              name="bidAmount"
              onChange={e => setBidAmount(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <br />
          <Typography variant="body1"
            className={classes.paramName}
            color="secondary">
            Bid Alert notification
          </Typography>
          <Typography variant="caption"
            color="secondary">
            Get the notification about your reserved bids
          </Typography>
          <Box pt={2}>
            <TextField value={bidPercentAlert}
              variant="filled"
              type="number"
              name="bidPercentAlert"
              onChange={e => setBidPercentAlert(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    %
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Button variant="contained"
            color="secondary"
            className={classes.bidButton}
            fullWidth>
            Save
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
