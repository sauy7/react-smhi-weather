/**
 * Axios instance for using the Nominatim Open Street Map API
 * @see https://wiki.openstreetmap.org/wiki/Nominatim
 */
import axios from 'axios';

let OSMAxios = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org'
});

export default OSMAxios;