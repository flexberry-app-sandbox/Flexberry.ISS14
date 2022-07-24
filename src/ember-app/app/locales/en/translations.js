import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS14ВидПоддержкиLForm from './forms/i-i-s-i-s-s14-вид-поддержки-l';
import IISISS14ПользовательLForm from './forms/i-i-s-i-s-s14-пользователь-l';
import IISISS14УсловиеLForm from './forms/i-i-s-i-s-s14-условие-l';
import IISISS14ВидПоддержкиEForm from './forms/i-i-s-i-s-s14-вид-поддержки-e';
import IISISS14ПользовательEForm from './forms/i-i-s-i-s-s14-пользователь-e';
import IISISS14УсловиеEForm from './forms/i-i-s-i-s-s14-условие-e';
import IISISS14ВидПоддержкиModel from './models/i-i-s-i-s-s14-вид-поддержки';
import IISISS14ПользовательModel from './models/i-i-s-i-s-s14-пользователь';
import IISISS14УсловиеModel from './models/i-i-s-i-s-s14-условие';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s14-вид-поддержки': IISISS14ВидПоддержкиModel,
    'i-i-s-i-s-s14-пользователь': IISISS14ПользовательModel,
    'i-i-s-i-s-s14-условие': IISISS14УсловиеModel
  },

  'application-name': 'I s s14',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s14',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s14',
          title: 'I s s14'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s14': {
          caption: 'ISS14',
          title: 'ISS14',
          'i-i-s-i-s-s14-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-i-s-s14-условие-l': {
            caption: 'Условие',
            title: ''
          },
          'i-i-s-i-s-s14-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s14-вид-поддержки-l': IISISS14ВидПоддержкиLForm,
    'i-i-s-i-s-s14-пользователь-l': IISISS14ПользовательLForm,
    'i-i-s-i-s-s14-условие-l': IISISS14УсловиеLForm,
    'i-i-s-i-s-s14-вид-поддержки-e': IISISS14ВидПоддержкиEForm,
    'i-i-s-i-s-s14-пользователь-e': IISISS14ПользовательEForm,
    'i-i-s-i-s-s14-условие-e': IISISS14УсловиеEForm
  },

});

export default translations;
