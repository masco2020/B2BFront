/* eslint-disable max-len */
import * as mime from 'react-native-mime-types'
import * as FileSystem from 'expo-file-system'
import { CameraRoll } from 'react-native'
import qs from 'qs'

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

// function serializeQuery(params) {
//   let paramsEncoded = []
//   for (const key in params) {
//     const encodedKey = encodeURIComponent(key)
//     const encodedValue = encodeURIComponent(params[key])
//     paramsEncoded.push(encodedKey + '=' + encodedValue)
//   }

//   return paramsEncoded.join('&')
// }

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

    const expectsJSON = headers.Accept === 'application/json'

    let urlToFetch, data
    if (method === 'GET') {
      const paramsEncoded = qs.stringify(params)

      urlToFetch = `${url}?${paramsEncoded}`
      data = { method, headers }
    } else {
      urlToFetch = url
      data = { body: JSON.stringify(params), method, headers }
    }

    fetch(urlToFetch, data)
      .then(response => {
        if (expectsJSON) {
          return response.json()
        } else {
          return response.blob()
        }
      })
      //If response is in json then in success
      .then(response => {
        if (expectsJSON && !response.success) {
          console.info('>>>', data)
          return reject(response)
        }
        return resolve(response)
      })
      //If response is not in json then in error
      .catch(reject)
  })
}

function requestFormdata({ url, headers, params }) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    let formdata = new FormData()

    const { file, ...others } = params
    if (file) {
      const uriParts = file.split('.')
      const fileExtension = uriParts[uriParts.length - 1]
      let fileType = mime.lookup(`file.${fileExtension}`)

      formdata.append('', {
        uri: file,
        name: `file.${fileExtension}`,
        type: fileType,
      })
    }

    Object.keys(others).forEach(key => {
      formdata.append(key, params[key])
    })

    let urlToFetch = url
    let data = { body: formdata, method: 'POST', headers }

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
        // }).catch(err => {
        //   console.info(
        //     'Ha habido un error de lado del servidor',
        //     params,
        //     err.message
        //   )
        //   Alert.alert('Error', 'Ha habido un error de lado del servidor')
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
      this.token = res.data.token
    }
    return res
  }

  setToken(token) {
    this.token = token
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

    return this.signedRequest({
      url,
      params,
      requiredParams,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    })
  }

  downloadMedia(params) {
    const url = this.baseUrl + paths.historico + 'DescargarContenidoHistorico'

    return FileSystem.downloadAsync(
      url + `?NombreArchivo=${params.NombreArchivo}`,
      FileSystem.cacheDirectory + params.NombreArchivo,
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    ).then(({ uri }) => {
      return CameraRoll.saveToCameraRoll(uri, 'photo')
    })
  }

  historicoCreate(params) {
    const url = this.baseUrl + paths.historico
    const requiredParams = ['idEmpresa', 'idTipoContenido', 'idUsuario']

    return requestFormdata({
      url,
      params,
      requiredParams,
      headers: {
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'multipart/form-data',
      },
    })
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
