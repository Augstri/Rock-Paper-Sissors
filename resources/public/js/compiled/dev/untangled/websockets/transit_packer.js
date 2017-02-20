// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.websockets.transit_packer');
goog.require('cljs.core');
goog.require('om.transit');
goog.require('taoensso.sente.packers.transit');
goog.require('om.tempid');
/**
 * A json packer for use with sente.
 */
untangled.websockets.transit_packer.packer = taoensso.sente.packers.transit.__GT_TransitPacker.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.fromArray([om.tempid.TempId,om.transit.__GT_TempIdHandler.call(null)], true, false)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["om/id",(function (id){
return om.tempid.tempid.call(null,id);
})], null)], null));

//# sourceMappingURL=transit_packer.js.map?rel=1487610702318