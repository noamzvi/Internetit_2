import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import "./DetailsPopup.css";

function DetailsPopup(props) {
  return (
    <Dialog open={props.isOpen} onClose={props.handleClose} fullWidth>
      <DialogTitle
        sx={{
          alignSelf: "center",
          "&.MuiDialogTitle-root": {
            fontSize: "1.5rem",
            fontWeight: "600",
          },
        }}
      >
        {`More details on ${props.selected ? props.selected.title : "food"}`}
      </DialogTitle>
      <DialogContent>
        <div className="popup__content">
          <div className="popup__details">
            <p className="popup__info">
              <b>Where to buy:</b> {props.selected && props.selected.shop}
            </p>
            <p className="popup__info">
              <b>Description:</b> {props.selected && props.selected.description}
            </p>
          </div>
          <img
            className="popup__img"
            src={props.selected && props.selected.second_img}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <button className="popup__close-button" onClick={props.handleClose}>
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
}

export default DetailsPopup;
