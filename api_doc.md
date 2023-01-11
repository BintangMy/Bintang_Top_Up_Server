# Bintang Top Up API Documentation

## Endpoints :


List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /google-login-auth`
- `GET /game`
- `GET /game/comming-soon`
- `GET /game/:id`
- `POST /cekId/freefire`
- `POST /cekId/genshinImpact`
- `POST /cekId/mobilelegends`
- `POST /cekId/dominohight`
- `POST /cekId/cod`
- `POST /cekId/aov`
- `POST /payment/get-payment-token`
- `PATCH /payment/statusPayment`

## 1. POST /login

- `POST /login`

Description:

- Cek data user for login


```json
{
  "email" : "String", 
  "password" : "String"
  }
```

_Response (200 - OK)_

```json
{
    "access_token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "user": "string",
    "email": "string",
    "role": "string"
}
```
_Response (401 - Unauthorized)_

```json
{
    "message": "Email or Password Invalid"
}
```

_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```



## 2. POST /register

- `POST /register`

Description:

- Post data register

Request:

- body:

```json
{
  "username": "String", 
  "email" : "String", 
  "password" : "String", 
  "referalCode": "String", 
  }
```

_Response (201 - Update)_

```json
{
    "message": "succsess create account username"
}
```
& nodemailer message


_Response (400 - Bad Request)_

```json
  "message": [
        {
            "path": "email",
            "message": "e-mail already registered"
        }
    ]
```

_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```



## 3. POST /google-login-auth

- `POST /google-login-auth`

Description:

- Cek data google-login-auth


```json
{
  "email" : "String", 
  "password" : "String"
  }
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY3MjExNTgyMX0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "user": "name",
    "role": "role"
}
```

_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 4. GET /game

- `GET /game`

Description:

- Get all game where status active


_Response (200 - OK)_

```json
[
   {
        "id": 1,
        "name": "Free Fire",
        "logoUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/product-1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672032574102",
        "backgroundCardUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/bg-prk1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672032569301",
        "bannerUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/detailProduct/FFbanner.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672034124668",
        "description": "Metode pembayaran ShopeePay hanya tersedia untuk Pengguna Handphone (HP/Mobile). Harap pastikan bahwa aplikasi Shopee Anda telah diperbarui dan tengah memiliki saldo ShopeePay yang mencukupi sebelum melakukan top up.Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah ! Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
        "status": "Active",
        "createdAt": "2023-01-11T10:24:56.578Z",
        "updatedAt": "2023-01-11T10:24:56.578Z",
        "max": 10000000,
        "min": 980
    },
    ...
    ...
    ...
    ...
]

_Response (404 - Data Not Found)_

```json
  {
    "message":  "Data not found" 
  }
```

_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 5. GET /game/comming-soon

- `GET /game/comming-soon`

Description:

- Get all game where status inActive


_Response (200 - OK)_

```json
[
    {
        "id": 15,
        "name": "shadow fight",
        "logoUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/shadow_logo_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310836990",
        "backgroundCardUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/shadowfight_bg_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310385806",
        "bannerUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/dragonrajaBANNER.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673311406059",
        "description": "Comming Soon",
        "status": "inActive",
        "createdAt": "2023-01-10T04:48:12.301Z",
        "updatedAt": "2023-01-10T04:48:12.301Z",
        "Items": []
    },
    {
        "id": 13,
        "name": "Pou",
        "logoUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/pou_logo_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310830140",
        "backgroundCardUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/pou_bg_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310376095",
        "bannerUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/dragonrajaBANNER.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673311406059",
        "description": "Comming Soon",
        "status": "inActive",
        "createdAt": "2023-01-10T04:48:12.301Z",
        "updatedAt": "2023-01-10T04:48:12.301Z",
        "Items": []
    }
]

_Response (404 - Data Not Found)_

```json
  {
    "message":  "Data not found" 
  }
```

_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 6. GET /game/top-game

- `GET /game/top-game`

Description:

- Get all game where status Active top 5


_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "shadow fight",
        "logoUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/shadow_logo_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310836990",
        "backgroundCardUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/shadowfight_bg_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310385806",
        "bannerUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/dragonrajaBANNER.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673311406059",
        "description": "Comming Soon",
        "status": "Active",
        "createdAt": "2023-01-10T04:48:12.301Z",
        "updatedAt": "2023-01-10T04:48:12.301Z",
        "Items": []
    },
    {
        "id": 2,
        "name": "Pou",
        "logoUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/pou_logo_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310830140",
        "backgroundCardUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/pou_bg_card.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673310376095",
        "bannerUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/card/dragonrajaBANNER.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673311406059",
        "description": "Comming Soon",
        "status": "Active",
        "createdAt": "2023-01-10T04:48:12.301Z",
        "updatedAt": "2023-01-10T04:48:12.301Z",
        "Items": []
    }
]

_Response (404 - Data Not Found)_

```json
  {
    "message":  "Data not found" 
  }
```

_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```


## 7. GET /game/:id

- `GET /game/:id`

Description:

- Get one detail game 

_Response (200 - OK)_

```json

{
    "id": 1,
    "name": "Free Fire",
    "logoUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/product-1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672032574102",
    "backgroundCardUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/bg-prk1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672032569301",
    "bannerUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/detailProduct/FFbanner.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672034124668",
    "description": "Metode pembayaran ShopeePay hanya tersedia untuk Pengguna Handphone (HP/Mobile). Harap pastikan bahwa aplikasi Shopee Anda telah diperbarui dan tengah memiliki saldo ShopeePay yang mencukupi sebelum melakukan top up.Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah ! Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
    "status": "Active",
    "createdAt": "2023-01-10T04:48:12.301Z",
    "updatedAt": "2023-01-10T04:48:12.301Z",
    "Items": [
        {
            "id": 1,
            "nominal": 5,
            "price": 980,
            "type": "Diamonds",
            "itemIconUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/detailProduct/FFitemsIcon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672034006485",
            "gameId": 1,
            "createdAt": "2023-01-10T04:48:12.328Z",
            "updatedAt": "2023-01-10T04:48:12.328Z"
        },
        {
            "id": 2,
            "nominal": 12,
            "price": 1960,
            "type": "Diamonds",
            "itemIconUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/detailProduct/FFitemsIcon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672034006485",
            "gameId": 1,
            "createdAt": "2023-01-10T04:48:12.328Z",
            "updatedAt": "2023-01-10T04:48:12.328Z"
        },
        {
            "id": 3,
            "nominal": 50,
            "price": 7840,
            "type": "Diamonds",
            "itemIconUrl": "https://ik.imagekit.io/bintangtopup/bintangtopup/detailProduct/FFitemsIcon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672034006485",
            "gameId": 1,
            "createdAt": "2023-01-10T04:48:12.328Z",
            "updatedAt": "2023-01-10T04:48:12.328Z"
        }
    ]
}
```


_Response (404 - Data Not Found)_

```json
  {
    "message":  "Data not found" 
  }
```

_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 8. POST /cekId/freefire

- `POST /cekId/freefire`

Description:

- Get data player in game freefire

Request
- body:

```json
{
  "id" : "integer",
}
```


_Response (200 - OK)_

```json
{
    "success": true,
    "data": {
        "id_ff": "4012975855",
        "username": "ROBIYANSH",
        "country": "Indonesia",
        "server": "",
        "product": "Free Fire Top-up"
    }
}
````


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```



## 9. POST /cekId/freefire

- `POST /cekId/freefire`

Description:

- Get data player in game freefire

Request
- body:

```json
{
  "id" : "integer",
}
```


_Response (200 - OK)_

```json
{
    "success": true,
    "data": {
        "id_ff": "1234567",
        "username": "USER",
        "country": "Indonesia",
        "server": "empety",
        "product": "Free Fire Top-up"
    }
}
````


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```


## 10. POST /cekId/genshinImpact

- `POST /cekId/genshinImpact`

Description:

- Get data player in game genshinImpact

Request
- body:

```json
{
  "id" : "integer",
  "region": "string"
}
```


_Response (200 - OK)_

```json
{
    "success": true,
    "data": {
        "id_genshin": "1234567",
        "username": "u**r",
        "country": "Indonesia",
        "server": "os_asia",
        "product": "Genshin Impact"
    }
}
````


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 11. POST /cekId/mobilelegends

- `POST /cekId/mobilelegends`

Description:

- Get data player in game mobilelegends

Request
- body:

```json
{
  "id" : "integer",
  "region": "integer"
}
```


_Response (200 - OK)_

```json
{
    "success": true,
    "data": {
        "Userid_and_Zone": "123456(12222)",
        "username": "user",
        "country": "Indonesia",
        "product": "Mobile Legends: Bang Bang"
    }
}
````


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```



## 12. POST /cekId/aov

- `POST /cekId/cod`

Description:

- Get data player in game arena of valor

Request
- body:

```json
{
  "id" : "integer",
}
```


_Response (200 - OK)_

```json
{
    "success": true,
    "data": {
        "id_cod": "123456789",
        "username": "USER",
        "country": "Indonesia",
        "server": "Live server/正式伺服器/Server INDONESIA/เลือกเซิร์ฟเวอร์นี้",
        "product": "Call of Duty Mobile"
    }
}
````


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 13. POST /cekId/cod

- `POST /cekId/cod`

Description:

- Get data player in game call of duty

Request
- body:

```json
{
  "id" : "integer",
}
```


_Response (200 - OK)_

```json
{
    "success": true,
    "data": {
        "id_aov": "12345678",
        "username": "user",
        "country": "Indonesia",
        "server": "Baratayuda",
        "product": "Arena of Valor"
    }
}
````


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```


## 14. POST /cekId/dominohight
- `POST /cekId/dominohight`

Description:

- Get data player in game dominohight
Request
- body:

```json
{
  "id" : "integer",
}
```


_Response (200 - OK)_

```json
{
    "success": true,
    "data": {
        "id_domino": "1234567",
        "username": "tobat"
    }
}
````


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 15. POST /payment/get-payment-token

Description:

- POST data price for get payment token midtrans
Request
- headers:

```json
{
  "access_token" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
}
```
_Response (200 - OK)_
```json
{
  "token": {
    "token": "xxxxxxxxxxxxxxxxxxxxxxxxx",
    "redirect_url": "string"
  },
  "orderId": "integer"
}
```


_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```

## 16. PATCH /payment/statusPayment

Description:

- PATCH update status data payment
Request
- headers:

```json
{
  "access_token" : "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
}
```

_Response (200 - OK)_
```json
{
"message":
"berhasil membayar dari server"
}
```
& nodemailer message




_Response (500 - server error)_

```json
{
  "message": "Internal server error"
}
```