import s from "./Insights.module.scss";

export function Insights({ devices }) {
  const numActivos = devices.filter((d) => d.enable).length;
  const numInactivos = devices.filter((d) => !d.enable).length;
  return (
    <div className={s.root}>
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
  );
}
