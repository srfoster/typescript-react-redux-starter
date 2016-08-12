'use strict';

const path = require('path');
const express = require('express');

var db = require('seraph')({
  server: 'http://localhost:7474',
  user: 'neo4j',
  pass: 'password'
})
var model = require('seraph-model');

/**
 * Installs routes that serve production-bundled client-side assets.
 * It is set up to allow for HTML5 mode routing (404 -> /dist/index.html).
 * This should be the last router in your express server's chain.
 */
module.exports = (app) => {
  const distPath = path.join(__dirname, '../dist');
  const indexFileName = 'index.html';
  app.use(express.static(distPath));

  app.get('/api/worlds/:id', (req, res) => {
    var World = model(db, 'World');
    var Chunk = model(db, 'Chunk');

    World.compose(Chunk, "chunks", "In")

    World.query('MATCH (w:World) WHERE ID(w) = ' + req.params.id, {}, {varName: "w", include: {chunks: { many:true, model: Chunk, rel: 'In', direction: 'in' }}}  ,  function(err, world) {
      //res.send(err)
      res.send({world: world})
    });

  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, indexFileName))
  });
};

