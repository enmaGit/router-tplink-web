
import DeviceUnknownIcon from "@material-ui/icons/DeviceUnknown";
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import TvIcon from '@material-ui/icons/Tv';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const DeviceTypes = [
  {
    code: "unknown",
    label: "Desconocido",
    icon: DeviceUnknownIcon
  },
  {
    code: "tv",
    label: "Tv",
    icon: TvIcon
  },
  {
    code: "phone",
    label: "Teléfono",
    icon: SmartphoneIcon
  },
  {
    code: "smart_thing",
    label: "Inteligente",
    icon: DeviceHubIcon
  },
  {
    code: "laptop",
    label: "Laptop",
    icon: LaptopMacIcon
  },
  {
    code: "desktop",
    label: "Escritorio",
    icon: DesktopWindowsIcon
  },
];

export default DeviceTypes;
