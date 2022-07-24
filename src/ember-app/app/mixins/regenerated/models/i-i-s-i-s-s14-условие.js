import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  видПоддержки: DS.belongsTo('i-i-s-i-s-s14-вид-поддержки', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s14-условие.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s14-условие.validations.видПоддержки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УсловиеE', 'i-i-s-i-s-s14-условие', {
    наименование: attr('Наименование', { index: 0 }),
    видПоддержки: belongsTo('i-i-s-i-s-s14-вид-поддержки', 'Вид поддержки', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('УсловиеL', 'i-i-s-i-s-s14-условие', {
    наименование: attr('Наименование', { index: 0 }),
    видПоддержки: belongsTo('i-i-s-i-s-s14-вид-поддержки', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
