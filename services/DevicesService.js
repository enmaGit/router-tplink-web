class DevicesService {
  getDevices = () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/devices`).then(
      (res) => res.json()
    );
  };

  toggleDeviceStatus = (newDeviceInfo, newStatus) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/devices/${newDeviceInfo.mac}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          enable: newStatus,
        }),
      }
    );
  };
}

export default new DevicesService();
