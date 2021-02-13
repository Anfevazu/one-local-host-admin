import {
  useSelector,
  useDispatch
} from 'react-redux';

import {
  getAction,
  SHOW_MESSAGE, HIDE_MESSAGE,
  ON_SHOW_LOADER, ON_HIDE_LOADER,
} from '../store/actions/type.actions';

const useSettings = () => {

  const {
    error,
    width,
    loading,
    message,
    pathname,
    navCollapsed,
  } = useSelector(({ common }) => common);
  const dispatch = useDispatch();

  const setMessage = (msg) => {
    dispatch(getAction(SHOW_MESSAGE, msg));
    setTimeout(() => {
      dispatch(getAction(HIDE_MESSAGE));
    }, 400);
  }

  const toogleLoading = () => {
    dispatch(getAction(loading ? ON_HIDE_LOADER : ON_SHOW_LOADER));
  }

  return {
    error,
    width,
    loading,
    toogleLoading,
    message,
    setMessage,
    pathname,
    navCollapsed,
  }
}

export default useSettings;
