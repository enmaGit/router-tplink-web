class TextUtils {
  capitalize([fl, ...rest]) {
    return `${fl.toUpperCase()}${rest.join("").toLowerCase()}`;
  }

  getReadableFileSizeString(fileSizeInBytes) {
    let i = -1;
    const byteUnits = [
      " Kbps",
      " Mbps",
      " Gbps",
      " Tbps",
      " Pbps",
      " Ebps",
      " Zbps",
      " Ybps",
    ];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  }
}

export default new TextUtils();
