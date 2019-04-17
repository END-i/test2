import { firestore } from "../../firebase";

const fillTheCart = purchase => ({
  type: "ADD_TO_CART",
  payload: purchase || null
});

export const addToCart = (purchase, user) => {
  return async dispatch => {
    await firestore.collection(user.uid).add(purchase);
    const docRef = await firestore.collection(user.uid).get();
    const data = await docRef.docs.map(item => {
      return { ...item.data() };
    });
    dispatch(fillTheCart(data));
  };
};

export const getCartPurchase = user => {
  return async dispatch => {
    const docRef = await firestore.collection(user.uid).get();
    const data = await docRef.docs.map(item => {
      return { ...item.data() };
    });

    dispatch(fillTheCart(data));
  };
};

export const removePurchaseFromCart = (key, user) => {
  return async dispatch => {
    const docRef = await firestore.collection(user.uid).get();
    const data = await docRef.docs.map((item, idx) => {
      if (idx === key) {
        firestore
          .collection(user.uid)
          .doc(item.id)
          .delete();
      }
      return { ...item.data() };
    });

    data.splice(key, 1);
    dispatch(fillTheCart(data));
  };
};

export const cleareCart = user => {
  
  return async dispatch => {
    const docRef = await firestore.collection(user.uid).get();
    await docRef.docs.forEach(element => {
      firestore
        .collection(user.uid)
        .doc(element.id)
        .delete();
    });

    dispatch(fillTheCart([]));
  };

};
