'use strict';

/**
 * unique-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unique-item.unique-item');
