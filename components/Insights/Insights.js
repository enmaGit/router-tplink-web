import s from "./Insights.module.scss";
import TextUtils from "../../utils/TextUtils";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export function Insights({ devices }) {
  const numActivos = devices.filter((d) => d.enable).length;
  const numInactivos = devices.filter((d) => !d.enable).length;
  const totalSpeed = devices.reduce((acum, cur) => {
    return acum + cur.speed;
  }, 0);
  return (
    <div className={s.root}>
      <div className={s.insights}>
        <div>
          <label>Activos</label>
          <span>{numActivos}</span>
        </div>
        <div>
          <label>Inactivos</label>
          <span>{numInactivos}</span>
        </div>
        <div>
          <label>Wifi</label>
          <span>{0}</span>
        </div>
      </div>
      <div className={s.total}>
        <span>
          <ArrowDownwardIcon />
          {TextUtils.getReadableFileSizeString(totalSpeed)}
        </span>
      </div>
    </div>
  );
}
