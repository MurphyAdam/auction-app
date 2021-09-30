import React, { useState, useEffect, lazy } from 'react'
import {
  Box, Grid, Typography, Select,
  InputLabel, MenuItem, Slider,
  FormGroup, FormControlLabel, Checkbox
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { CircularLoader } from "../components/Common/Loaders"
import {
  fetchProductsService,
  fetchCategoriesService
} from "../services/products-api";
import { useSnackbar } from 'notistack';
import { useCurrentUser } from "../contexts/CurrentUserContext";

const ProductCard = lazy(() => import('../components/Product/ProductCard'));

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(0, 4)
  },
  heading: {
    fontSize: theme.spacing(4.5),
    padding: theme.spacing(1, 0)
  },
  filtersTypo: {
    padding: theme.spacing(1, 0),
    fontWeight: 'bold',
    fontSize: theme.spacing(2.2)
  },
  inputLabel: {
    paddingTop: theme.spacing(4),
  }
}))


function Products() {
  const classes = useStyle()
  const { enqueueSnackbar } = useSnackbar();
  const { currentUser, isAuthenticated,
    isLoading, error: currentUserError,
    loadCurrentUser } = useCurrentUser();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [arrange, setArrange] = useState('popular');
  const [minBid, setMinBid] = useState(8);
  const [error, setError] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(false);


  useEffect(() => {
    loadCurrentUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(currentUser, isAuthenticated,
    isLoading, currentUserError,
    loadCurrentUser)

  const fetchProducts = () => {
    setProductsLoading(true);
    setProductsLoaded(false);
    const q = {
      categories: selectedCategories,
      arrange: arrange,
      min_bid: minBid,
    }
    fetchProductsService(q)
      .then(response => {
        console.log(response)
        setProducts(response.data.results);
      })
      .catch(error => {
        console.log('error ', error)
        setError(true)
        let message = `Could not load products. Please try again later.`;
        if (error?.response?.data?.detail) {
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
        setProductsLoading(false);
        setProductsLoaded(true);
      })
  }

  const fetchCategories = () => {
    setCategoriesLoading(true);
    fetchCategoriesService()
      .then(response => {
        setCategories(response.data.results);
      })
      .catch(error => {
        let message = `Could not load categories. Please try again later.`;
        if (error?.response?.data?.detail) {
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
        setCategoriesLoading(false);
      })
  }

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrange, selectedCategories])


  return (
    <div className={classes.root}>
      <Box pt={3}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Typography className={classes.filtersTypo}>
              Filters
            </Typography>
            <InputLabel className={classes.inputLabel}
              id="Arrange-select-standard-label">
              Arrange
            </InputLabel>
            <Select
              labelId="Arrange-select-standard-label"
              id="Arrange-select-standard"
              value={arrange}
              onChange={e => setArrange(e.target.value)}
              label="Arrange"
            >
              <MenuItem value={'popular'}>Popular</MenuItem>
              <MenuItem value={'latest'}>Latest</MenuItem>
              <MenuItem value={'old'}>Old</MenuItem>
            </Select>
            <InputLabel className={classes.inputLabel}
              id="bid-standard-label">
              Minimum bid (${minBid})
            </InputLabel>
            <Slider
              defaultValue={8}
              value={minBid}
              onChange={(e, v) => setMinBid(v)}
              classes={{ colorSecondary: { color: 'white' } }}
              valueLabelDisplay="auto" />
            <InputLabel className={classes.inputLabel}
              id="bid-standard-label">
              Category
            </InputLabel>
            <FormGroup>
              {categoriesLoading &&
                (
                  <Typography>
                    Loading categories...
                  </Typography>
                )
              }
              {categories.length > 0 ? categories.map(cat => {
                return (
                  <FormControlLabel
                    key={cat.id}
                    control={<Checkbox defaultChecked />}
                    label={cat.name} />
                )
              }
              )
                :
                (
                  <FormControlLabel
                    disabled
                    key='nocat'
                    control={<Checkbox defaultChecked />}
                    label="No categories" />
                )
              }
            </FormGroup>
          </Grid>
          {productsLoading &&
            (
              <Grid item xs={9} md={9}>
                <CircularLoader />
              </Grid>
            )
          }
          {productsLoaded && !!error &&
            (
              <Grid item xs={9} md={9}>
                <Typography
                  component="p"
                  variant="body1"
                  color="secondary"
                  align="center"
                >
                  {'Something went wrong.'}
                </Typography>
              </Grid>
            )
          }
          {products.map(prod => {
            return (
              <React.Suspense fallback={<CircularLoader />}>
                <ProductCard key={prod.id}
                  product={prod} />
              </React.Suspense>
            )
          })
          }
        </Grid>
      </Box>
    </div>
  )
}

export default Products;
