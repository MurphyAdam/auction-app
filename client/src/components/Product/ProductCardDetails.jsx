import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { formatDuration, intervalToDuration } from 'date-fns'
import MakeBidModal from '../Bid/MakeBidModal';
import { CircularLoader } from '../Common/Loaders';

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
  }
}));

export default function ProductCardDetails(props) {
  const { product } = props;
  const classes = useStyles();
  const [countdown, setCountdown] = useState(null);
  const [autoBid, setAutoBid] = useState(false);
  const [makeBidDialogOpen, setMakeBidDialogOpen] = useState(false);

  // start date of the bid is set by admin
  let duration = intervalToDuration({
    start: new Date(product.expires_in),
    end: new Date(),
  })

  const updateCountdown = () => {
    // we call this function every 1000 ms to update the countdown
    const cd = formatDuration(duration, {
      delimiter: ', '
    });
    setCountdown(cd);
  }

  useEffect(
    () => {
      const id = setInterval(updateCountdown, 1000);
      // we get the id od the pointer to setInterval so 
      // we can clear it up on unmount
      return () => clearInterval(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [countdown]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <img className={classes.image} src={product.poster} alt={product.title} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box padding={2}>
            <Typography component="h1"
              className={classes.productTitle}>
              {product.title}
            </Typography>
            <Typography variant="body1"
              color="secondary">
              Minimum bid ${product.min_bid}
            </Typography>
            <Typography variant="body1"
              style={{ paddingTop: '1rem', fontWeight: 'bold' }}
              color="secondary">
              Details
          </Typography>
            <Typography variant="body2"
              style={{ paddingTop: '1rem' }}
              color="secondary">
              {product.description}
            </Typography>
            <Box padding={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>
                    Last bid made
                  <br />
                    {product?.last_bid ? `$${product.last_bid.amount}` : 'None yet'

                    }
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    Available Until
                <br />
                    {product.expired ? '[EXPIRED]'
                      : countdown
                    }
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Button variant="contained"
              color="secondary"
              disabled={product.expired}
              onClick={() => setMakeBidDialogOpen(true)}
              className={classes.bidButton}
              fullWidth>
              Place a Bid
          </Button>
            <FormGroup>
              <FormControlLabel control={
                <Checkbox defaultChecked={autoBid}
                  value={autoBid}
                  onChange={e => setAutoBid(e.target.value)}
                  disabled={product.expired} />}
                label="Activate the auto-bidding"
              />
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
      {makeBidDialogOpen ?
        (
          <React.Suspense fallback={<CircularLoader />}>
            <MakeBidModal open={makeBidDialogOpen}
              setOpen={setMakeBidDialogOpen}
              product={product}
              autoBid={autoBid}
              minBid={product.min_bid} />
          </React.Suspense>
        )
        : null
      }
    </>
  );
}
