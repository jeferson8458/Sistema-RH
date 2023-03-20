export const API_URL = 'https://app.codespace.net.br/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/api/usuario',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + token,
      },
    },
  };
}

export function SOCIO_GET() {
  return {
    url: API_URL + '/api/socio/',
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function SOCIO_POST(formData, token) {
  return {
    url: API_URL + '/api/socio',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
      },
      body: formData,
    },
  };
}
