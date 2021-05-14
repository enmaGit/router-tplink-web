import { useState, useEffect } from "react";
import DeviceCard from "../components/DeviceCard/DeviceCard";
import { Insights } from "../components/Insights/Insights";
import s from "../styles/Home.module.scss";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useDeviceFetch } from "../utils/useDeviceFetch";
import SeoComponent from "../components/SeoComponent/Seocomponent";

export default function Home() {
  const { loading, devices, toggleDevice, getDevices, changeName, changeType } =
    useDeviceFetch();
  const [macSelected, setSelected] = useState("");

  return (
    <div className={s.container}>
      <SeoComponent />
      <main className={s.main}>
        <div className={s.fixedUp}>
          <section className={s.header}>
            <h1 className={s.title}>Dispositivos</h1>
            <RefreshIcon
              className={loading ? s.loading : ""}
              onClick={getDevices}
            />
          </section>
          <section className={s.insights}>
            <Insights devices={devices} />
          </section>
        </div>
        <section className={`${s.noPadding} ${s.devicesContainer}`}>
          {devices.map((device) => (
            <DeviceCard
              device={device}
              isSelected={device.mac === macSelected}
              onToggleDevice={toggleDevice}
              onSelect={setSelected}
              onChangeName={changeName}
              onChangeType={changeType}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
