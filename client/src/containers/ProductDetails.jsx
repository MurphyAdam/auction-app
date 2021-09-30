import React, { useState, useEffect } from 'react'
import {
  makeStyles, Grid, Typography,
} from '@material-ui/core';
import ProductCardDetails from '../components/Product/ProductCardDetails';
import { CircularLoader } from '../components/Common/Loaders'
import { useParams } from 'react-router-dom';
import { fetchProductBySlugService } from '../services/products-api';
import { useSnackbar } from 'notistack';
import { Helmet } from 'react-helmet';


export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  mainFeaturedPost: {
    margin: theme.spacing(1)
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing(4)}px`,
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  chip: {
    display: 'flex',
    color: theme.palette.common.white,
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  menuList: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  blogTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem !important',
    },
  }
}));


export default function ProductDetails(props) {

  const classes = useStyles();
  const { slug } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [product, setService] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const fetchProduct = () => {
    setIsLoading(true)
    fetchProductBySlugService(slug).then(response => {
      setService(response.data);
    }).catch(error => {
      setError(true)
      let message = `Could not load product. Please try again later.`;
      if (error?.response?.data) {
        message = error.response.data.detail
      }
      enqueueSnackbar(message, {
        anchorOrigin: {
          horizontal: 'left',
          vertical: 'bottom'
        },
        variant: 'warning'
      });
    }).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <div className={classes.root} >
      <Helmet>
        <title> {product?.title || 'View product'} </title>
        <meta name="description" content={product?.short_description || 'View product'} />
      </Helmet>
      <Grid spacing={0} >
        {isLoading &&
          (
            <Grid item xs={9} md={9}>
              <CircularLoader />
            </Grid>
          )
        }
        {(error || !isLoading) && !product
          ?
          (
            <Grid item xs={9} md={9}>
              <Typography align="center"
                variant="h5">
                Product not found.
              </Typography>
            </Grid>
          )
          : !!product &&
          (
            <React.Fragment>
              <Grid item xs={12} md={12}>
                <ProductCardDetails product={product} />
              </Grid>
            </React.Fragment>
          )
        }
      </Grid>
    </div>
  )
}
