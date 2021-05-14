import { useState, useEffect, useRef } from "react";
import s from "./DeviceCard.module.scss";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import TextUtils from "../../utils/TextUtils";

import TypeManagement from "./components/TypeManagement";

const DeviceCard = ({
  device,
  onSelect,
  isSelected,
  onToggleDevice,
  onChangeName,
  onChangeType,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(device.name);
  const inputEl = useRef();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setIsEditing(false);
  }, [isSelected]);

  useEffect(() => {
    if (isEditing) {
      inputEl.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeName({ ...device, name: name });
    setIsEditing(false);
  };

  const handleChangeType = (event) => {
    onChangeType({ ...device, type: event.target.value });
    setIsEditing(false);
  };

  return (
    <div
      className={`${s.root} ${isSelected ? s.selected : ""}`}
      onClick={() => {
        onSelect(device.mac);
      }}
    >
      <TypeManagement
        device={device}
        handleChangeType={handleChangeType}
        isSelected={isSelected}
      />
      <form onSubmit={handleSubmit}>
        {!isEditing && (
          <div className={s.infoSection}>
            <h2
              onClick={
                isSelected
                  ? () => {
                      setIsEditing(true);
                    }
                  : undefined
              }
            >
              {TextUtils.capitalize(device.name)}
            </h2>
            <span className={s.littleText}>{device.ip}</span>
          </div>
        )}
        {isEditing && (
          <TextField
            id="standard-basic"
            label="Nombre"
            value={name}
            inputRef={inputEl}
            onChange={handleChangeName}
            variant="outlined"
            size="small"
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
          color="accent"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <span className={s.littleText}>
          {TextUtils.getReadableFileSizeString(device.speed)}
        </span>
      </div>
    </div>
  );
};

export default DeviceCard;
