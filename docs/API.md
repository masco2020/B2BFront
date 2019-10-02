Proyecto base

WS:

# LOGIN

    [HOST]/login/Authenticate

Request:

```json
{
  "usuario": "",
  "clave": ""
}
```

Response:

```json
{
  "idUsuario": "",
  "nombre": "",
  "cargo": "" || null,
  "listaPermisos": [{ idPermiso, descripcion }],
  "token": "",
  "activo": bool
}
```

# LOGOUT

Request

```json
{
  "idUsuario": "",
  "token": ""
}
```

# ListaExportadores

    [HOST]/api/empresa/ListarEmpresa

Request

```json
{
  "empresa": "",
  "producto": "papa",
  "ciudad": "",
  "listaProductos": [{ "id": 9 }],
  "listaTipoNegocio": [{ "id": 12 }, { "id": 13 }],
  "listaTamanio": [{ "id": 12 }, { "id": 13 }],
  "idCiudad": 71263,
  "esExportador": true | false,
  "pagina": 1,
  "cantidad": 10
}
```

Response:

```json
{
  "listaEmpresas": [
    {
      "idEmpresa": 123,
      "nombreEmpresa": "",
      "nombreComercial": "",
      "razonSocial": "",
      "listaSectores": [
        {
          "idSector": 1,
          "nombre": "Camote",
          "letra": "C",
          "listaProductos": [{ "nombre": "papa" }]
        }
      ],
      "ruc": "",
      "direccion": "av lima 123",
      "latitud": 1.12312331,
      "longitud": 1.12312331,
      "email": "info@peri.pc",
      "telefono": "234234324243",
      "listaContactos": [
        {
          "idContacto": 123,
          "nombres": "",
          "apellidoPaterno": "",
          "apellidoMaterno": "",
          "tipoDocumento": { "id": 2 },
          "nroDocumento": "234234234",
          "email": "asdsd@sdfd.es",
          "telefono": "123123",
          "celular": "987938724",
          "tipoCargo": { "id": 2 },
          "skype": "@sdfsdf"
        }
      ]
    }
  ]
}
```

# Nuevo contacto (post)

    [HOST]/api/contacto/

```json
{
  "idEmpresa": 123,
  "idContacto": 123 | null,
  "nombres": "elías jonathan",
  "apellidoPaterno": "vega",
  "apellidoMaterno": "garcía",
  "idTipoDocumento": 2,
  "nroDocumento": "234234234",
  "email": "asdsd@sdfd.es",
  "telefono": "123123",
  "celular": "987938724",
  "idTipoCargo": 3,
  "skype": "@sdfsdf",
  "idUsuario": 123546
}
```

# Tipo doc (GET)

    [HOST]/api/listas/ListarTipoDocumento

# Tipo cargo (GET)

    [HOST]/api/listas/ListarTipoCargo

Response:

```json
{
  "tipoDocumento": [
    {
      "id": 1,
      "nombre": "DNI"
    },
    {
      "id": 1,
      "nombre": "DNI"
    },
    {
      "id": 1,
      "nombre": "DNI"
    }
  ]
}
```

Response:

```json
{
  "tipoCargo": [
    {
      "id": 1,
      "nombre": "gerente"
    }
  ]
}
```

# UpdateGeoubicacion (POST)

    [HOST]/api/empresa/GrabarGeoLocalizacion

Request

```json
{
    "idEmpresa": 123,,
    "latitud": 1.12312331,
    "longitud": 1.12312331,
	"idUsuario": 3
}
```

# ListadoFiltros (GET)

    [HOST]/api/listas/ListarFiltrosBusquedaEmpresa

Request

```json
{
  "esExportador": true | false
}
```

Response:

```json
{
  "listaSectores": [
    {
      "id": 12,
      "nombre": "",
      "listaProductos": [
        { "id": 22, "nombre": "" },
        { "id": 23, "nombre": "" },
        { "id": 24, "nombre": "" }
      ]
    },
    { "id": 13, "nombre": "" }
  ],
  "listaTipoNegocio": [
    { "id": 12, "nombre": "" },
    { "id": 13, "nombre": "" }
  ],
  "listaTamanio": [
    { "id": 12, "nombre": "" },
    { "id": 13, "nombre": "" }
  ],
  "listaUbigeo": [
    { "id": 12, "nombre": "ANCASH - SANTA - SANTA" },
    { "id": 12, "nombre": "AREQUIPA - CAYLLOMA - CAYLLOMA" }
  ]
}
```

# Historico

```json
{
  "mensaje": 1,
  "imagen": 2,
  "audio": 3,
  "documento": 4,
  "ubicacion": 5
}
```

Request

```json
{
  "idUsuario": 32,
  "idEmpresa": 321,
  "idTipoContenido": 2,
  "mensaje": "hola",
  "archivo": file,
  "latitud": 0,
  "longitud": 0
}
```

Response

```json
{
  "idHistorico": 21345,
  "idEmpresa": 321,
  "idTipoContenido": 2,
  "mensaje": "hola",
  "url": "http://gfdgfd.es/jhgjh.jpg",
  "latitud": 0,
  "longitud": 0,
  "fechaRegistro": "sfdghjk",
  "usuario"; {
    "id":1234,
    "nombre": "Julio Roldan"
  }
}
```

# Lista idHistorico

```json
{
  "idEmpresa": 123,
  "pagina": 1,
  "cantidad": 3
}
```
