"use strict";
// Generated by CoffeeScript 1.10.0
(function() {
  let base;
  (base = process.env).NODE_ENV || (base.NODE_ENV = "development");

  const ES_HOST = process.env.ES_HOST || "fixture-elasticsearch";
  const ES_PORT = process.env.ES_PORT || "9200";
  const ES_API_VERSION = process.env.ES_API_VERSION || "2.2";

  module.exports = {
    test: {
      host: `${ES_HOST}:${ES_PORT}`,
      indexName: "local-test",
      typeName: "business",
      apiVersion: ES_API_VERSION,
      log: []
    },
    development: {
      host: `${ES_HOST}:${ES_PORT}`,
      indexName: "local-dev",
      typeName: "business",
      apiVersion: ES_API_VERSION
    },
    production: {
      host: `${ES_HOST}:${ES_PORT}`,
      indexName: "local-prod",
      typeName: "business",
      apiVersion: ES_API_VERSION
    }
  };

}).call(this);
