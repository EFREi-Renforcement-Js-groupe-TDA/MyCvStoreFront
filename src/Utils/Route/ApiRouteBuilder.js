import { getApiUrl } from "../Misc/EnvReader.js";

export const getApiRoute = (endpoint) => {
    return `${getApiUrl()}/api/${endpoint}`;
};
