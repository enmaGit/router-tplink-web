import { useState } from "react";
import BasicModal from "../../BasicModal/BasicModal";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import DeviceTypes from "../../../constants/DeviceTypes";
import s from "./TypeManagement.module.scss";

const TypeManagement = ({ isSelected, device, handleChangeType }) => {
  const [isSelectTypeOpen, setIsSelectTypeOpen] = useState(false);
  const [typeSelected, setTypeSelected] = useState(device.type || "unknown");
  const Icon = DeviceTypes.find(
    (type) => type.code === (device.type || "unknown")
  ).icon;
  return (
    <>
      <div
        onClick={
          isSelected
            ? () => {
                setIsSelectTypeOpen(true);
              }
            : undefined
        }
        className={s.root}
      >
        <Icon />
      </div>
      <BasicModal
        onClose={() => {
          setIsSelectTypeOpen(false);
        }}
        title="Selecciona un tipo"
        isOpen={isSelectTypeOpen}
        onOk={() => {
          handleChangeType(typeSelected);
          setIsSelectTypeOpen(false);
        }}
        onCancel={() => {
          setIsSelectTypeOpen(false);
        }}
      >
        <form className={s.typeSelector}>
          <FormControl>
            <InputLabel htmlFor="demo-dialog-native">Tipo</InputLabel>
            <Select
              native
              value={typeSelected}
              onChange={(e) => {
                setTypeSelected(e.target.value);
              }}
              input={<Input id="demo-dialog-native" />}
            >
              {DeviceTypes.map((type) => (
                <option value={type.code}>{type.label}</option>
              ))}
            </Select>
          </FormControl>
        </form>
      </BasicModal>
    </>
  );
};

export default TypeManagement;
