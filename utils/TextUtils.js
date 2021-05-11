class TextUtils {

  capitalize([fl, ...rest]) {
    return `${fl.toUpperCase()}${rest.join("").toLowerCase()}`;
  };
}

export default new TextUtils();
