const { useState, useEffect } = require("react");
const { default: DevicesService } = require("../services/DevicesService");

const useDeviceFetch = () => {
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);

  const getDevices = async () => {
    setLoading(true);
    const devices = await DevicesService.getDevices();
    setDevices(devices);
    setLoading(false);
  };

  const toggleDevice = async (device) => {
    setLoading(true);
    await DevicesService.toggleDeviceStatus(device, !device.enable);
    getDevices();
  };

  useEffect(() => {
    getDevices();
  }, []);

  return { loading, devices, toggleDevice, getDevices };
};

export default useDeviceFetch;
