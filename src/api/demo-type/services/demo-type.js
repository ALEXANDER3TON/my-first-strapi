'use strict';

/**
 * demo-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-type.demo-type');
