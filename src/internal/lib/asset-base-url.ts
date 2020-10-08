import getGateway from "../../internal/lib/get-gateway";
import { options } from "../../internal/lib/options";
import version from "../../lib/version";

export default () => {
  let result = `https://api2.heartlandportico.com/SecureSubmit.v1/token/gp-${version}/`;

  const gateway = getGateway();
  if (!gateway) {
    return result;
  }

  if (gateway.urls.assetBaseUrl) {
    return gateway.urls.assetBaseUrl(result);
  }

  result =
    gateway.getEnv(options) === "sandbox"
      ? `https://hps.github.io/token/gp-${version}/`
      : result;
  return result;
};
