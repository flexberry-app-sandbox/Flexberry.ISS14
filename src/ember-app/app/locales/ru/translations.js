import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s14',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s14',
          title: 'I s s14'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
