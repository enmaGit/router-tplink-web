import { useState, useEffect } from "react";
import s from "./DeviceCard.module.scss";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import DeviceUnknownIcon from "@material-ui/icons/DeviceUnknown";
import TextUtils from "../../utils/TextUtils";

const DeviceCard = ({ device, onSelect, isSelected, onToggleDevice }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(device.name);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setIsEditing(false);
  }, [isSelected]);

  return (
    <div
      className={`${s.root} ${isSelected ? s.selected : ""}`}
      onClick={() => {
        onSelect(device.mac);
      }}
    >
      <div className={s.typeContainer}>
        <DeviceUnknownIcon />
      </div>
      <form>
        {!isEditing && (
          <div className={s.infoSection}>
            <h2
              onClick={() => {
                setIsEditing(true);
              }}
            >
              {TextUtils.capitalize(device.name)}
            </h2>
            <span>{device.ip}</span>
          </div>
        )}
        {isEditing && (
          <TextField
            id="standard-basic"
            label="Standard"
            value={name}
            onChange={handleChangeName}
          />
        )}
      </form>
      <div className={`${s.infoSection} ${s.speedContainer}`}>
        <Switch
          checked={device.enable}
          onChange={() => {
            if (isSelected) {
              onToggleDevice(device);
            }
          }}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <span>32 Kbps</span>
      </div>
    </div>
  );
};

export default DeviceCard;
