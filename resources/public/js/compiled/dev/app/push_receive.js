// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.push_receive');
goog.require('cljs.core');
goog.require('untangled.websockets.networking');
goog.require('untangled.client.core');
goog.require('untangled.dom');
goog.require('untangled.client.data_fetch');
goog.require('app.ui');
goog.require('om.next');
cljs.core._add_method.call(null,untangled.websockets.networking.push_received,new cljs.core.Keyword("user","left","user/left",-395778676),(function (p__46953,p__46954){
var map__46955 = p__46953;
var map__46955__$1 = ((((!((map__46955 == null)))?((((map__46955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46955):map__46955);
var app__$1 = map__46955__$1;
var reconciler = cljs.core.get.call(null,map__46955__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__46956 = p__46954;
var map__46956__$1 = ((((!((map__46956 == null)))?((((map__46956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46956):map__46956);
var msg = cljs.core.get.call(null,map__46956__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return om.next.transact_BANG_.call(null,reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("push","user-left","push/user-left",-1136543234,null)),(function (){var x__31821__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
}));
cljs.core._add_method.call(null,untangled.websockets.networking.push_received,new cljs.core.Keyword("user","new","user/new",-2084328791),(function (p__46959,p__46960){
var map__46961 = p__46959;
var map__46961__$1 = ((((!((map__46961 == null)))?((((map__46961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46961):map__46961);
var app__$1 = map__46961__$1;
var reconciler = cljs.core.get.call(null,map__46961__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__46962 = p__46960;
var map__46962__$1 = ((((!((map__46962 == null)))?((((map__46962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46962):map__46962);
var msg = cljs.core.get.call(null,map__46962__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return om.next.transact_BANG_.call(null,reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("push","user-new","push/user-new",492017865,null)),(function (){var x__31821__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
}));
cljs.core._add_method.call(null,untangled.websockets.networking.push_received,new cljs.core.Keyword("message","new","message/new",-897073555),(function (p__46965,p__46966){
var map__46967 = p__46965;
var map__46967__$1 = ((((!((map__46967 == null)))?((((map__46967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46967):map__46967);
var app__$1 = map__46967__$1;
var reconciler = cljs.core.get.call(null,map__46967__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__46968 = p__46966;
var map__46968__$1 = ((((!((map__46968 == null)))?((((map__46968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46968):map__46968);
var msg = cljs.core.get.call(null,map__46968__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return om.next.transact_BANG_.call(null,reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("push","message-new","push/message-new",293086511,null)),(function (){var x__31821__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
}));

//# sourceMappingURL=push_receive.js.map?rel=1487610721705