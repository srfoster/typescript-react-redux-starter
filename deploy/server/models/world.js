/// <reference path="../../typings/index.d.ts" />
"use strict";
var db = require('seraph')({
    server: 'http://localhost:7474',
    user: 'neo4j',
    pass: 'password'
});
var model = require('seraph-model');
class World {
    constructor(data) {
        this.data = {};
        this.data = data;
    }
    static find(id, after) {
        var SWorld = model(db, 'World');
        var SChunk = model(db, 'Chunk');
        SWorld.compose(SChunk, "chunks", "In");
        SWorld.query('MATCH (w:World) WHERE ID(w) = ' + id, {}, { varName: "w", include: { chunks: { many: true, model: SChunk, rel: 'In', direction: 'in' } } }, function (err, world_data) {
            after(new World(world_data));
        });
    }
    toJSON() {
        return this.data;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = World;
