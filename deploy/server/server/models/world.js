var db = require('seraph')({
    server: 'http://localhost:7474',
    user: 'neo4j',
    pass: 'password'
});
var model = require('seraph-model');
var World = (function () {
    function World() {
    }
    World.find = function (id) {
        var World = model(db, 'World');
        var Chunk = model(db, 'Chunk');
        World.compose(Chunk, "chunks", "In");
        World.query('MATCH (w:World) WHERE ID(w) = ' + 19, {}, { varName: "w", include: { chunks: { many: true, model: Chunk, rel: 'In', direction: 'in' } } }, function (err, world) {
            //res.send(err)
            res.send({ world: world });
        });
    };
    return World;
}());
