import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { USER_STATE_CHANGE } from "../constants"; // Adjust the import based on your actual constants path

export function fetchUser() {
  return async (dispatch) => {
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        dispatch({ type: USER_STATE_CHANGE, currentUser: userDocSnap.data() });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
    }
  };
}
