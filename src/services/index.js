import auth from '@react-native-firebase/auth';
import BASE_URL, {CRONICA_ID} from '../utils/constants/baseUrl';

export const createUserFreemoniDb = async dataUser => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/newconsumerfromthirdparty`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
        method: 'post',
        body: JSON.stringify({
          dni: dataUser.dni,
          email: dataUser.email,
          lastName: dataUser.lastname,
          firstName: dataUser.name,
          password: dataUser.password,
          acceptTermsCond: true,
        }),
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createUserFreemoniDDBB = async dataUser => {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/users/newconsumer`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        confirmEmail: dataUser.email,
        email: dataUser.email,
        displayName: dataUser.name + dataUser.lastname,
        password: dataUser.password,
        confirmPassword: dataUser.password,
        acceptTermsCond: true,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createUserSocialAuthFreemoniDb = async dataUser => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/newconsumerfromsocialnet`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify({
          email: dataUser.email,
          displayName: dataUser.displayName,
          isNewUser: true,
          userId: dataUser.uid,
          acceptTermsCond: true,
          notificationReadingDate: '',
        }),
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getWalletAccounts = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/walletaccounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAuthAccounts = async userId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v2/accounts/authaccounts/${userId}?onlyEnabledAccounts=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAccountsByUser = async (userId, destinationUserId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v3/accounts/byuser/${userId}?destinationUserId=${destinationUserId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const validateDestinatary = async (
  accountFromId,
  userFromId,
  userToId,
) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/orders/validatedestinatary?accountFromId=${accountFromId}&userFromId=${userFromId}&userToId=${userToId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    if (res.status >= 400) {
      throw {data};
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const createInmediateOrder = async body => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/orders/createinmediateorder`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({...body}),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkIfUserExist = async body => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/checkifuserexist`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({...body}),
    });
    const data = await res.json();
    if (res.status >= 400) {
      throw {data};
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAuthorizedWallets = async dataUser => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/${dataUser.userId}/authorized_wallets`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDataUser = async user => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/${user.uid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateNotifications = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/updatenotificationreadingdate`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
        method: 'patch',
        body: JSON.stringify({}),
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAccountData = async dataUser => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v3/accounts/byuser/${dataUser.userId}?destinationShopId=${dataUser?.shopsWhereIHaveAccount[0]}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getNotifications = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    console.log(token);
    const res = await fetch(
      `${BASE_URL}/api/v1/notifications/listwithfilters?limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoreNotifications = async lastId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/notifications/listwithfilters?limit=10&lastNotificationId=${lastId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByShop = async shopId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byshop/${shopId}?limit=15`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getOrdersByAccount = async accountId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/orders/byaccount/${accountId}?state=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByUser = async (userId, accountId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${userId}?accountId=${accountId}&limit=15`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByTimestamp = async userId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const date = Date.now();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${userId}?dateFrom=${
        date - 86400000
      }&dateTo=${date}&onlyPersonalAccounts=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByTimestampBusiness = async userId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const date = Date.now();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${userId}?dateFrom=${
        date - 86400000
      }&dateTo=${date}&onlySharedAccounts=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrder = async orderId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const signInFreemoni = async dataUser => {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/users/signin`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        email: dataUser.email,
        password: dataUser.password,
      }),
    });
    const data = await res.json();
    if (res.status >= 400) {
      throw data;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPartnerShops = async shopId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/shops/getpartnershops/${shopId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    console.log('data', data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllShops = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/shops/shopsgeolocation?latitude=27.7834&limit=50&longitude=64.2642&radius=1000000&unit=km`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createOrderSchedule = async body => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/orders/createscheduledorder`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoreTransactionsByUser = async (
  dataUser,
  dataAccount,
  trxId,
) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${dataUser.userId}?accountId=${dataAccount[0].accountId}&lastTrxId=${trxId}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSalePoints = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/salepoints/${CRONICA_ID}/listwithfilters?onlyHome=true&onlyMainPos=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllCouponsAvailable = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/availablecoupons/${CRONICA_ID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCouponsAvailable = async posId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/availablecoupons/${CRONICA_ID}?posId=${posId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getGenerateCodeCoupon = async posId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/assign/${CRONICA_ID}/${posId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
        method: 'post',
        body: JSON.stringify({}),
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserCoupon = async trxId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/userCoupon/${CRONICA_ID}/${trxId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          appname: 'club-cronica-app',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const setDni = async dni => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/setdni`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        appname: 'club-cronica-app',
      },
      method: 'post',
      body: JSON.stringify({
        dni,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDataSender = async userId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const executeOrder = async orderId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/orders/execute`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({orderId}),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteOrder = async orderId => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'delete',
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
