import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 220,
  },
  subheader: {
    padding: theme.spacing(1, 0)
  },
  description: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem !important',
    },
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  },
  title: {
    textDecoration: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  }
}));

export default function ProductCard(props) {
  const { product } = props;
  console.log("product\n", product)
  const classes = useStyles();
  const history = useHistory();

  const gotoProduct = () => {
    history.push(`/products/${product.slug}`)
  }

  return (
    <Grid item xl={3} md={3} sm={6} xs={12} >
      <Card>
        <CardMedia
          className={classes.media}
          image={product.poster}
          title={product.title}
          onClick={gotoProduct}
        />
        <CardContent>
          <Typography variant="h5"
            color='secondary'
            component={RouterLink}
            className={classes.title}
            to={`/products/${product.slug}`}
            gutterBottom>
            {product.title}
          </Typography>

          <Typography variant="body2"
            color="textSecondary"
            className={classes.description}
            component="p" >
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" >
            Bid Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
