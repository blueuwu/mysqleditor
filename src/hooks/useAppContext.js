import AppContext from "context/AppContext";
import { useContext } from "react";

/**
 * Accepts a selector function which can be used to select a value at any
 * level of the App context, like the `useSelector` hook from redux
 *
 * @param {(context) => {}} callback
 */

function useAppContext(callback = (context) => context) {

  const ctx = useContext(AppContext);   // App Context

  return callback(ctx);      // Return the up-to-date selected value
}

export default useAppContext;
