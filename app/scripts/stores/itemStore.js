/**
 * ItemStore example
 *
 * @exports ItemStore singleton
 */

import AbstractStore from '../stores/AbstractStore';

/**
 * @inheritdoc
 */
export default class ItemStore extends AbstractStore {
  /**
   * @inheritdoc
   */
  getActionListeners() {
    return {
      'items:loadStart': data => {
        this
          .set('loading', true)
          .trigger('change');
      },
      'items:loadSuccess': data => {
        this
          .set('loading', false)
          .set('items', data)
          .trigger('change');
      },
      'items:loadError': data => {
        this
          .reset()
          .trigger('change');
      },
    };
  }
}

const instance = new ItemStore();

export default instance;
