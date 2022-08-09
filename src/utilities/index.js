export const isEmpty = (value) => {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  )
    return true;
  return false;
};

export const getParamsFromUrl = (url) => {
  const Params = url.split("?")[1];
  if(Params.startsWith("k=")) {
    const ParamK = Params.split("&")[0];
    const res = ParamK.split("=")[1].replace("+", " ");
    return res;
  } 
  return null;
}