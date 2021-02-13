import { useSelector, useDispatch } from 'react-redux';

const useSettings = () => {
  const {locale, navStyle, layoutType} = useSelector(({settings}) => settings);

  return {
    locale,
    navStyle,
    layoutType,
  }
}

export default useSettings;
