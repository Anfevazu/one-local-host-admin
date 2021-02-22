import { useSelector, useDispatch } from 'react-redux';

import { getAction, SWITCH_LANGUAGE } from '../store/actions/type.actions';

const useSettings = () => {
  const {locale, navStyle, layoutType} = useSelector(({settings}) => settings);
  const dispatch = useDispatch();

  const setLocale = (lang) => dispatch(getAction(SWITCH_LANGUAGE, lang));

  return {
    locale,
    setLocale,
    navStyle,
    layoutType,
  }
}

export default useSettings;
