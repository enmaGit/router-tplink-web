const fakeData = [
  {
    name: "DESKTOP-K9V6R3K",
    mac: "E4-02-9B-F5-29-90",
    ip: "192.168.0.198",
    lastConnection: "Permanent",
    enable: true,
    hostId: -1,
  },
  {
    name: "LGwebOSTV",
    mac: "D0-05-2A-01-FE-CA",
    ip: "192.168.0.109",
    lastConnection: "25:15:49",
    enable: true,
    hostId: -1,
  },
  {
    name: "amazon-996ea8348",
    mac: "68-9A-87-25-19-7D",
    ip: "192.168.0.108",
    lastConnection: "45:47:51",
    enable: true,
    hostId: -1,
  },
  {
    name: "AmazonPlug7A9N",
    mac: "5C-41-5A-0D-3F-B8",
    ip: "192.168.0.107",
    lastConnection: "21:23:08",
    enable: true,
    hostId: 1,
  },
  {
    name: "Unknown",
    mac: "38-80-DF-20-E4-86",
    ip: "192.168.0.106",
    lastConnection: "24:31:07",
    enable: true,
    hostId: 3,
  },
  {
    name: "Developers-MBP",
    mac: "A4-83-E7-D1-3F-CD",
    ip: "192.168.0.199",
    lastConnection: "Permanent",
    enable: true,
    hostId: -1,
  },
  {
    name: "amazon-49fbb4f22",
    mac: "CC-F7-35-41-24-00",
    ip: "192.168.0.105",
    lastConnection: "44:29:15",
    enable: true,
    hostId: -1,
  },
  {
    name: "M2004J19C-Redmi9",
    mac: "94-17-00-61-D9-49",
    ip: "192.168.0.104",
    lastConnection: "13:10:05",
    enable: true,
    hostId: 2,
  },
  {
    name: "G6",
    mac: "04-1B-6D-CA-3D-A6",
    ip: "192.168.0.103",
    lastConnection: "24:34:05",
    enable: true,
    hostId: 0,
  },
  {
    name: "ZTE-Blade-L8",
    mac: "B4-1C-30-64-DA-D8",
    ip: "192.168.0.102",
    lastConnection: "13:02:33",
    enable: true,
    hostId: -1,
  },
  {
    name: "ZTE-Blade-L8",
    mac: "60-14-66-EE-5F-44",
    ip: "192.168.0.101",
    lastConnection: "19:12:20",
    enable: true,
    hostId: -1,
  },
  {
    name: "Philips-hue",
    mac: "00-17-88-6A-92-B1",
    ip: "192.168.0.100",
    lastConnection: "37:02:13",
    enable: true,
    hostId: -1,
  },
];

class DevicesService {
  getDevices = () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/devices`).then(
      (res) => res.json()
    );
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(fakeData);
    //   }, 2000);
    // });
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

  changeDeviceName = (newDeviceInfo, newName) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/devices/${newDeviceInfo.mac}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name: newName,
        }),
      }
    );
  };
}

export default new DevicesService();
