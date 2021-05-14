const { useState, useEffect } = require("react");
const { default: DevicesService } = require("../services/DevicesService");

export function useDeviceFetch() {
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);

  const getDevices = async () => {
    setLoading(true);
    const devices = await DevicesService.getDevices();
    setDevices(
      devices.sort((a, b) => {
        if (a.speed > b.speed) {
          return -1;
        } else if (a.speed < b.speed) {
          return 1;
        }
        return 0;
      })
    );
    setLoading(false);
  };

  const toggleDevice = async (device) => {
    setLoading(true);
    await DevicesService.toggleDeviceStatus(device, !device.enable);
    getDevices();
  };

  const changeName = async (device) => {
    setLoading(true);
    await DevicesService.changeDeviceName(device, device.name);
    getDevices();
  };

  const changeType = async (device) => {
    setLoading(true);
    await DevicesService.changeDeviceType(device, device.type);
    getDevices();
  };

  useEffect(() => {
    getDevices();
  }, []);

  return { loading, devices, toggleDevice, getDevices, changeName, changeType };
}
