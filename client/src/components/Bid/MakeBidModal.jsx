import React, { useState } from 'react';
import {
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField, Button,
  Divider,
} from "@material-ui/core";
import { Transition } from '../Common/Transition';
import { makeBidService } from '../../services/products-api';
import { useSnackbar } from 'notistack';

export default function MakeBidModal(props) {

  const { open, setOpen, product, minBid, autoBid } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [bid, setBid] = useState(minBid);
  const [isLoading, setIsLoading] = useState(false);

  const amountNeeded = product.last_bid?.amount ? product.last_bid.amount : minBid;

  const handleClose = () => {
    setOpen(false);
  };

  const handlePlaceBid = () => {
    setIsLoading(true);
    if (bid < minBid) {
      enqueueSnackbar(`Bid must be larger than ${minBid}`, {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        variant: 'success'
      });
      return false;
    }
    if (bid > 9999999.999) {
      enqueueSnackbar(`Bid must be smaller than 9999999.999`, {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        variant: 'success'
      });
      return false;
    }
    makeBidService(
      {
        product_id: product.id,
        amount: bid,
        version: product.last_bid?.version,
        auto_bid: autoBid,
      }
    )
      .then(response => {
        const message = `Your bid of $${bid} has been placed.`;
        enqueueSnackbar(message, {
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          },
          variant: 'success'
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(error => {
        let message = `Could not place your bid. Please check your input.`;
        if (error.response.data.message) {
          message = error.response.data.message;
        }
        enqueueSnackbar(message, {
          anchorOrigin: {
            horizontal: 'left',
            vertical: 'bottom'
          },
          variant: 'error'
        });
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth
        maxWidth={"md"}
      >
        <DialogTitle id="form-dialog-title">Place Bid</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Please place an amount larger than the previous Bid of {amountNeeded}, and be
            smaller than 9999999.999
          </DialogContentText>
          <Grid container>
            <Grid item xs={7}>
              <TextField
                autoFocus
                margin="dense"
                variant="filled"
                id="bid"
                label="Bid Amount"
                type="text"
                fullWidth
                value={bid}
                onChange={({ target: { value } }) => setBid(value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePlaceBid}
            disabled={isLoading || product.expired}
            variant="outlined"
            color="secondary">
            {/* when loading, disable, otherwise enable */}
            {isLoading ? 'Submitting...' : 'Submit Bid'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
