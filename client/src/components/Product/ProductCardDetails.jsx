import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

  return (
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
                  {product?.last_bid ? product.last_bid.amount : 'None yet'

                  }
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Available Until
                <br />
                  {new Date(product.expires_in).toDateString()}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained"
            color="secondary"
            className={classes.bidButton}
            fullWidth>
            Place a Bid
          </Button>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox defaultChecked={false} />} label="Activate the auto-bidding"
            />
          </FormGroup>
        </Box>
      </Grid>
    </Grid>
  );
}
