/// <reference path="../../typings/index.d.ts" />

var db = require('seraph')({
  server: 'http://localhost:7474',
  user: 'neo4j',
  pass: 'password'
})

var model = require('seraph-model');

class World{
  data:any = {}

  constructor(data:any){
    this.data = data 
  }

  public static find(id:number, after:(w:World)=>void){
    var SWorld = model(db, 'World');
    var SChunk = model(db, 'Chunk');

    SWorld.compose(SChunk, "chunks", "In")

    SWorld.query('MATCH (w:World) WHERE ID(w) = ' + id, {}, {varName: "w", include: {chunks: { many:true, model: SChunk, rel: 'In', direction: 'in' }}}  ,  function(err, world_data) {
      after(new World(world_data))
    });
  }

  public toJSON():any{
    return this.data
  }
}

export default World

