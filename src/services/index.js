import auth from "@react-native-firebase/auth";
import BASE_URL, { CRONICA_ID } from "../utils/constants/baseUrl";
import { getIdToken } from "firebase/auth";

export const createUserFreemoniDb = async (dataUser) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/newconsumerfromthirdparty`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "post",
        body: JSON.stringify({
          dni: dataUser.dni,
          email: dataUser.email,
          lastName: dataUser.lastname,
          firstName: dataUser.name,
          password: dataUser.password,
          acceptTermsCond: true,
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createUserSocialAuthFreemoniDb = async (dataUser) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/newconsumerfromsocialnetapps`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "post",
        body: JSON.stringify({
          email: dataUser.email,
          displayName: dataUser.displayName,
          isNewUser: true,
          userId: dataUser.uid,
          acceptTermsCond: true,
          notificationReadingDate: "",
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getWalletAccounts = async (user) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/users/walletaccounts`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAuthAccounts = async (user, userId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v2/accounts/authaccounts/${userId}?onlyEnabledAccounts=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAccountsByUser = async (user, userId, destinationUserId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v3/accounts/byuser/${userId}?destinationUserId=${destinationUserId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const validateDestinatary = async (
  user,
  accountFromId,
  userFromId,
  userToId
) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v1/orders/validatedestinatary?accountFromId=${accountFromId}&userFromId=${userFromId}&userToId=${userToId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (res.status >= 400) {
      throw { data };
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const createInmediateOrder = async (user, body) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/orders/createinmediateorder`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ ...body }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkIfUserExist = async (user, body) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/users/checkifuserexist`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ ...body }),
    });
    const data = await res.json();
    if (res.status >= 400) {
      throw { data };
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAuthorizedWallets = async (user, dataUser) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v1/users/${dataUser.userId}/authorized_wallets`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDataUser = async (user) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/users/${user.uid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "patch",
        body: JSON.stringify({}),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAccountData = async (dataUser) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v3/accounts/byuser/${dataUser.userId}?destinationShopId=${dataUser.shopsWhereIHaveAccount[0]}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
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
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoreNotifications = async (lastId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/notifications/listwithfilters?limit=10&lastNotificationId=${lastId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByShop = async (user, shopId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byshop/${shopId}?limit=15`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getOrdersByAccount = async (user, accountId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v1/orders/byaccount/${accountId}?state=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByUser = async (user, userId, accountId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${userId}?accountId=${accountId}&limit=15`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByTimestamp = async (user, userId) => {
  try {
    const token = await getIdToken(user);
    const date = Date.now();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${userId}?dateFrom=${date - 86400000
      }&dateTo=${date}&onlyPersonalAccounts=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (user, orderId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPartnerShops = async (user, shopId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v1/shops/getpartnershops/${shopId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllShops = async (user) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(
      `${BASE_URL}/api/v1/shops/shopsgeolocation?latitude=27.7834&limit=50&longitude=64.2642&radius=1000000&unit=km`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createOrderSchedule = async (user, body) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/orders/createscheduledorder`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(body)
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
  trxId
) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${dataUser.userId}?accountId=${dataAccount[0].accountId}&lastTrxId=${trxId}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
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
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
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
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCouponsAvailable = async (posId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/availablecoupons/${CRONICA_ID}?posId=${posId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getGenerateCodeCoupon = async (posId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/assign/${CRONICA_ID}/${posId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "post",
        body: JSON.stringify({}),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserCoupon = async (trxId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/userCoupon/${CRONICA_ID}/${trxId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const setDni = async (dni) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/setdni`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        appname: "club-cronica-app",
      },
      method: "post",
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

export const getDataSender = async (user, userId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const executeOrder = async (user, orderId) => {
  try {
    const token = await getIdToken(user);
    const res = await fetch(`${BASE_URL}/api/v1/orders/execute`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ orderId }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};