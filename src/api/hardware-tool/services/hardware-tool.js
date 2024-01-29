'use strict';

/**
 * hardware-tool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hardware-tool.hardware-tool');
