import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/usrs`;

export const userStore = {

}