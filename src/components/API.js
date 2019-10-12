/* eslint-disable max-len */
import { Alert } from 'react-native'

const urlAPI = 'http://190.117.249.6/Rutex/api'
const paths = {
  contacto: '/contacto/',
  empresa: '/empresa/',
  historico: '/historico/',
  listas: '/listas/',
  login: '/login/',
}

/**
 * Login Params
 * @typedef {Object} LoginParams
 * @property {string} usuario - username
 * @property {string} clave - password
 */

/**
 *  EmpresaList Params
 * @typedef {Object} EmpresaListParams
 * @property {number} Pagina - username
 * @property {number} Cantidad - password
 * @property {boolean} EsExportador - password
 *
 * @typedef {Object} LoginResponse
 * @property {number} idUsuario
 * @property {string} nombre
 * @property {string} cargo
 * @property {[{id: number, nombre: string}]} listaPermisos - Listado de permisos
 * @property {string} token
 * @property {string} activo
 * @property {string} idTipoUsuario
 *
 * @typedef {Object} requestParams
 * @property {string} url
 * @property {string} [method='GET']
 * @property {Object.<number>} headers
 * @property {object} params
 * @property {string[]} requiredParams
 *
 */

/**
 * Serializar con url encode JSON params
 * @param {object} params
 * @returns {string}
 */

function serializeQuery(params) {
  let paramsEncoded = []
  for (const key in params) {
    const encodedKey = encodeURIComponent(key)
    const encodedValue = encodeURIComponent(params[key])
    paramsEncoded.push(encodedKey + '=' + encodedValue)
  }

  return paramsEncoded.join('&')
}

/**
 * @typedef {Object} RequestResponse
 * @property {Object} data
 * @property {string} message
 * @property {boolean} success
 *
 * @param {requestParams} params
 * @returns {Promise<RequestResponse>} Devuelve prop data
 */
function request({ url, method = 'GET', headers, params, requiredParams }) {
  return new Promise((resolve, reject) => {
    if (requiredParams && params) {
      const keys = Object.keys(params)
      for (let i in requiredParams) {
        if (keys.indexOf(requiredParams[i]) === -1) {
          return reject({
            type: 'error',
            message: 'Missing parameters ' + requiredParams[i],
          })
        }
      }
    }

    let urlToFetch, data
    if (method === 'GET') {
      const paramsEncoded = serializeQuery(params)

      urlToFetch = `${url}?${paramsEncoded}`
      data = { method, headers }
    } else {
      urlToFetch = url
      data = { body: JSON.stringify(params), method, headers }
    }

    fetch(urlToFetch, data)
      .then(response => response.json())
      //If response is in json then in success
      .then(response => {
        if (!response.success) {
          return reject(response)
        }
        return resolve(response)
      })
      //If response is not in json then in error
      .catch(reject)
  })
}

/**
 * Clase para acceder a endpoint Rutex
 */
class API {
  privateHeaders = null

  constructor() {
    this.baseUrl = urlAPI
  }

  /**
   * Verifica que tenga Authorization header antes de hacer llamada
   * @param {requestParams} params
   */
  signedRequest = params => {
    if (this.privateHeaders) {
      return request({
        headers: this.privateHeaders,
        ...params,
      }).catch(err => {
        console.info('Ha habido un error de lado del servidor', err)
        Alert.alert('Error', 'Ha habido un error de lado del servidor')
      })
    }
    console.info('Missing property privateHeaders')
  }

  /**
   * @param {LoginParams} params
   */
  async login(params) {
    const url = this.baseUrl + paths.login + 'authenticate'
    const requiredParams = ['usuario', 'clave']
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    try {
      const res = await request({
        url,
        method: 'POST',
        headers,
        params,
        requiredParams,
      })

      if (res && res.success) {
        this.privateHeaders = {
          Authorization: 'Bearer ' + res.data.token,
          ...headers,
        }
      }
      return res
    } catch (error) {
      console.info(error)
    }
  }

  setToken(token) {
    this.privateHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    }
  }

  logout(params) {
    const url = this.baseUrl + paths.login + 'Logout'
    const requiredParams = ['IdUsuario']
    return this.signedRequest({ url, params, method: 'POST', requiredParams })
  }

  /**
   * @param {EmpresaListParams} params
   */
  empresasList(params) {
    const url = this.baseUrl + paths.empresa + 'listarEmpresa'
    const requiredParams = ['Pagina', 'Cantidad', 'EsExportador']

    return this.signedRequest({ url, params, requiredParams })
  }

  empresasGeoUpdate(params) {
    const url = this.baseUrl + paths.empresa + 'grabarGeoLocalizacion'
    const requiredParams = ['idEmpresa', 'Latitud', 'Longitud']

    return this.signedRequest({ url, params, method: 'POST', requiredParams })
  }

  historicoList(params) {
    const url = this.baseUrl + paths.historico + 'listarHistoricoEmpresa'
    const requiredParams = ['idEmpresa', 'Pagina', 'Cantidad']

    return this.signedRequest({ url, params, requiredParams })
  }

  historicoMedia(params) {
    const url = this.baseUrl + paths.historico + 'DescargarContenidoHistorico'
    const requiredParams = ['NombreArchivo']

    return this.signedRequest({ url, params, requiredParams })
  }

  historicoCreate(params) {
    const url = this.baseUrl + paths.historico
    const requiredParams = ['idEmpresa', 'idTipoContenido', 'idUsuario']

    return this.signedRequest({ url, params, method: 'POST', requiredParams })
  }

  contactoCreate(params) {
    const url = this.baseUrl + paths.contacto
    const requiredParams = [
      'idUsuario',
      'idEmpresa',
      'nombres',
      'apellidoPaterno',
      'apellidoMaterno',
      'idTipoDocumento',
      'nroDocumento',
      'email',
      'telefono',
      'celular',
      'idTipoCargo',
      'skype',
    ]

    return this.signedRequest({ url, params, method: 'POST', requiredParams })
  }

  contactoUpdate(params) {
    const url = this.baseUrl + paths.contacto
    const requiredParams = [
      'idUsuario',
      'idEmpresa',
      'idContacto',
      'nombres',
      'apellidoPaterno',
      'apellidoMaterno',
      'idTipoDocumento',
      'nroDocumento',
      'email',
      'telefono',
      'celular',
      'idTipoCargo',
      'skype',
    ]

    return this.signedRequest({ url, params, method: 'POST', requiredParams })
  }

  configuracionList() {
    const url = this.baseUrl + paths.listas + 'listarConfiguracionInicial'
    return this.signedRequest({ url })
  }
}

export default API