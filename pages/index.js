import Head from "next/head";
import { useState } from "react";
import DeviceCard from "../components/DeviceCard/DeviceCard";
import { Insights } from "../components/Insights/Insights";
import s from "../styles/Home.module.scss";
import useDeviceFetch from "./useDeviceFetch";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function Home() {
  const { loading, devices, toggleDevice, getDevices, changeName } = useDeviceFetch();
  const [macSelected, setSelected] = useState("");

  return (
    <div className={s.container}>
      <main className={s.main}>
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
        <section className={`${s.noPadding} ${s.devicesContainer}`}>
          {devices.map((device) => (
            <DeviceCard
              device={device}
              isSelected={device.mac === macSelected}
              onToggleDevice={toggleDevice}
              onSelect={setSelected}
              onChangeName={changeName}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
