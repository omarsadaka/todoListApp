
import Snackbar from 'react-native-snackbar';
import {Colors} from '../../theme';
import {I18nManager} from 'react-native';

export const showInfo = message => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.yellow,
    numberOfLines: 6,
    action: {
      ttitle: I18nManager.isRTL?'إغلاق':'close',
      color: Colors.white,
    },
  });
};

export const showSuccess = (message) => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.green,
    numberOfLines: 6,
    action: {
      title: I18nManager.isRTL?'إغلاق':'close',
      color: Colors.white,
    },
  });
};

export const showError = (message) => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.red,
    numberOfLines: 6,
    action: {
      title: I18nManager.isRTL?'إغلاق':'close',
      color: Colors.white,
    },
  });
};
