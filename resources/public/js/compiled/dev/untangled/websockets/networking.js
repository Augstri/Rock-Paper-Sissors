// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.websockets.networking');
goog.require('cljs.core');
goog.require('om.transit');
goog.require('untangled.websockets.transit_packer');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
goog.require('untangled.client.logging');
goog.require('cognitect.transit');
goog.require('untangled.client.impl.network');
goog.require('cljs.core.async');
goog.require('om.next');
if(typeof untangled.websockets.networking.router_ !== 'undefined'){
} else {
untangled.websockets.networking.router_ = cljs.core.atom.call(null,null);
}
untangled.websockets.networking.stop_router_BANG_ = (function untangled$websockets$networking$stop_router_BANG_(){
var temp__4657__auto__ = cljs.core.deref.call(null,untangled.websockets.networking.router_);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_f = temp__4657__auto__;
return stop_f.call(null);
} else {
return null;
}
});
untangled.websockets.networking.start_router_BANG_ = (function untangled$websockets$networking$start_router_BANG_(ch_recv,msg_handler){
untangled.client.logging.info.call(null,"Starting websocket router.");

untangled.websockets.networking.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,untangled.websockets.networking.router_,taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,msg_handler));
});
if(typeof untangled.websockets.networking.message_received !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
untangled.websockets.networking.message_received = (function (){var method_table__31912__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31913__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31916__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.websockets.networking","message-received"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31916__auto__,method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__));
})();
}
if(typeof untangled.websockets.networking.push_received !== 'undefined'){
} else {
/**
 * Multimethod to handle push events
 */
untangled.websockets.networking.push_received = (function (){var method_table__31912__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31913__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31916__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.websockets.networking","push-received"),((function (method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__,hierarchy__31916__auto__){
return (function (app,msg){
return new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__,hierarchy__31916__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31916__auto__,method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__));
})();
}
cljs.core._add_method.call(null,untangled.websockets.networking.push_received,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,msg){
return untangled.client.logging.error.call(null,[cljs.core.str("Received and unhandled message: "),cljs.core.str(msg)].join(''));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.websockets.networking.ChannelClient = (function (url,send_fn,callback,global_error_callback,req_params,server_push,parse_queue,completed_app,__meta,__extmap,__hash){
this.url = url;
this.send_fn = send_fn;
this.callback = callback;
this.global_error_callback = global_error_callback;
this.req_params = req_params;
this.server_push = server_push;
this.parse_queue = parse_queue;
this.completed_app = completed_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
untangled.websockets.networking.ChannelClient.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31609__auto__,k__31610__auto__){
var self__ = this;
var this__31609__auto____$1 = this;
return cljs.core._lookup.call(null,this__31609__auto____$1,k__31610__auto__,null);
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31611__auto__,k41630,else__31612__auto__){
var self__ = this;
var this__31611__auto____$1 = this;
var G__41632 = (((k41630 instanceof cljs.core.Keyword))?k41630.fqn:null);
switch (G__41632) {
case "url":
return self__.url;

break;
case "send-fn":
return self__.send_fn;

break;
case "callback":
return self__.callback;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "req-params":
return self__.req_params;

break;
case "server-push":
return self__.server_push;

break;
case "parse-queue":
return self__.parse_queue;

break;
case "completed-app":
return self__.completed_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41630,else__31612__auto__);

}
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31623__auto__,writer__31624__auto__,opts__31625__auto__){
var self__ = this;
var this__31623__auto____$1 = this;
var pr_pair__31626__auto__ = ((function (this__31623__auto____$1){
return (function (keyval__31627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,cljs.core.pr_writer,""," ","",opts__31625__auto__,keyval__31627__auto__);
});})(this__31623__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,pr_pair__31626__auto__,"#untangled.websockets.networking.ChannelClient{",", ","}",opts__31625__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"callback","callback",-705136228),self__.callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"req-params","req-params",2117077454),self__.req_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server-push","server-push",-1185884073),self__.server_push],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),self__.parse_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),self__.completed_app],null))], null),self__.__extmap));
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IIterable$ = true;

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41629){
var self__ = this;
var G__41629__$1 = this;
return (new cljs.core.RecordIter((0),G__41629__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"req-params","req-params",2117077454),new cljs.core.Keyword(null,"server-push","server-push",-1185884073),new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),new cljs.core.Keyword(null,"completed-app","completed-app",-635152970)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31607__auto__){
var self__ = this;
var this__31607__auto____$1 = this;
return self__.__meta;
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31603__auto__){
var self__ = this;
var this__31603__auto____$1 = this;
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,self__.__hash));
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31613__auto__){
var self__ = this;
var this__31613__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31604__auto__){
var self__ = this;
var this__31604__auto____$1 = this;
var h__31422__auto__ = self__.__hash;
if(!((h__31422__auto__ == null))){
return h__31422__auto__;
} else {
var h__31422__auto____$1 = cljs.core.hash_imap.call(null,this__31604__auto____$1);
self__.__hash = h__31422__auto____$1;

return h__31422__auto____$1;
}
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31605__auto__,other__31606__auto__){
var self__ = this;
var this__31605__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30975__auto__ = other__31606__auto__;
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = (this__31605__auto____$1.constructor === other__31606__auto__.constructor);
if(and__30975__auto____$1){
return cljs.core.equiv_map.call(null,this__31605__auto____$1,other__31606__auto__);
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.websockets.networking.ChannelClient.prototype.untangled$client$impl$network$UntangledNetwork$ = true;

untangled.websockets.networking.ChannelClient.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
self__.callback.call(null,ok,err);

return self__.send_fn.call(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("api","parse","api/parse",-1162064757)),(function (){var x__31821__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"send-message","send-message",185030731),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"send-om-request","send-om-request",-1867228457),new cljs.core.Keyword(null,"content","content",15833224),edn], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
});

untangled.websockets.networking.ChannelClient.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
var this$__$2 = cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),app);
untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),((function (this$__$2,this$__$1){
return (function (p__41633){
var map__41634 = p__41633;
var map__41634__$1 = ((((!((map__41634 == null)))?((((map__41634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41634):map__41634);
var ch_recv = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn__$1 = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var command = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(_QMARK_data);
return untangled.client.logging.error.call(null,"Message Routed to default handler ",command);
});})(this$__$2,this$__$1))
);

untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("api","parse","api/parse",-1162064757),((function (this$__$2,this$__$1){
return (function (p__41636){
var map__41637 = p__41636;
var map__41637__$1 = ((((!((map__41637 == null)))?((((map__41637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41637):map__41637);
var _QMARK_data = cljs.core.get.call(null,map__41637__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return cljs.core.async.put_BANG_.call(null,self__.parse_queue,_QMARK_data);
});})(this$__$2,this$__$1))
);

untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("api","server-push","api/server-push",-1185983895),((function (this$__$2,this$__$1){
return (function (p__41639){
var map__41640 = p__41639;
var map__41640__$1 = ((((!((map__41640 == null)))?((((map__41640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41640):map__41640);
var msg = map__41640__$1;
var _QMARK_data = cljs.core.get.call(null,map__41640__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var app__$1 = new cljs.core.Keyword(null,"completed-app","completed-app",-635152970).cljs$core$IFn$_invoke$arity$1(this$__$2);
return untangled.websockets.networking.push_received.call(null,app__$1,_QMARK_data);
});})(this$__$2,this$__$1))
);

untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),((function (this$__$2,this$__$1){
return (function (message){
return untangled.client.logging.debug.call(null,"Message Routed to handshake handler ");
});})(this$__$2,this$__$1))
);

return untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),((function (this$__$2,this$__$1){
return (function (message){
return untangled.client.logging.debug.call(null,"Message Routed to state handler");
});})(this$__$2,this$__$1))
);
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31618__auto__,k__31619__auto__){
var self__ = this;
var this__31618__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),null,new cljs.core.Keyword(null,"req-params","req-params",2117077454),null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),null,new cljs.core.Keyword(null,"server-push","server-push",-1185884073),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null,new cljs.core.Keyword(null,"callback","callback",-705136228),null], null), null),k__31619__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31618__auto____$1),self__.__meta),k__31619__auto__);
} else {
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31619__auto__)),null));
}
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31616__auto__,k__31617__auto__,G__41629){
var self__ = this;
var this__31616__auto____$1 = this;
var pred__41642 = cljs.core.keyword_identical_QMARK_;
var expr__41643 = k__31617__auto__;
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(G__41629,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(self__.url,G__41629,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"callback","callback",-705136228),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,G__41629,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,G__41629,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"req-params","req-params",2117077454),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,G__41629,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"server-push","server-push",-1185884073),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,G__41629,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,G__41629,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41642.call(null,new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),expr__41643))){
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,G__41629,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31617__auto__,G__41629),null));
}
}
}
}
}
}
}
}
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31621__auto__){
var self__ = this;
var this__31621__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"callback","callback",-705136228),self__.callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"req-params","req-params",2117077454),self__.req_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server-push","server-push",-1185884073),self__.server_push],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),self__.parse_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),self__.completed_app],null))], null),self__.__extmap));
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31608__auto__,G__41629){
var self__ = this;
var this__31608__auto____$1 = this;
return (new untangled.websockets.networking.ChannelClient(self__.url,self__.send_fn,self__.callback,self__.global_error_callback,self__.req_params,self__.server_push,self__.parse_queue,self__.completed_app,G__41629,self__.__extmap,self__.__hash));
});

untangled.websockets.networking.ChannelClient.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31614__auto__,entry__31615__auto__){
var self__ = this;
var this__31614__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31615__auto__)){
return cljs.core._assoc.call(null,this__31614__auto____$1,cljs.core._nth.call(null,entry__31615__auto__,(0)),cljs.core._nth.call(null,entry__31615__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31614__auto____$1,entry__31615__auto__);
}
});

untangled.websockets.networking.ChannelClient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"send-fn","send-fn",1991533568,null),new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.Symbol(null,"global-error-callback","global-error-callback",-1753008138,null),new cljs.core.Symbol(null,"req-params","req-params",-537358315,null),new cljs.core.Symbol(null,"server-push","server-push",454647454,null),new cljs.core.Symbol(null,"parse-queue","parse-queue",-725824080,null),new cljs.core.Symbol(null,"completed-app","completed-app",1005378557,null)], null);
});

untangled.websockets.networking.ChannelClient.cljs$lang$type = true;

untangled.websockets.networking.ChannelClient.cljs$lang$ctorPrSeq = (function (this__31643__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.websockets.networking/ChannelClient");
});

untangled.websockets.networking.ChannelClient.cljs$lang$ctorPrWriter = (function (this__31643__auto__,writer__31644__auto__){
return cljs.core._write.call(null,writer__31644__auto__,"untangled.websockets.networking/ChannelClient");
});

untangled.websockets.networking.__GT_ChannelClient = (function untangled$websockets$networking$__GT_ChannelClient(url,send_fn,callback,global_error_callback,req_params,server_push,parse_queue,completed_app){
return (new untangled.websockets.networking.ChannelClient(url,send_fn,callback,global_error_callback,req_params,server_push,parse_queue,completed_app,null,null,null));
});

untangled.websockets.networking.map__GT_ChannelClient = (function untangled$websockets$networking$map__GT_ChannelClient(G__41631){
return (new untangled.websockets.networking.ChannelClient(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__41631),new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__41631),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(G__41631),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631).cljs$core$IFn$_invoke$arity$1(G__41631),new cljs.core.Keyword(null,"req-params","req-params",2117077454).cljs$core$IFn$_invoke$arity$1(G__41631),new cljs.core.Keyword(null,"server-push","server-push",-1185884073).cljs$core$IFn$_invoke$arity$1(G__41631),new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689).cljs$core$IFn$_invoke$arity$1(G__41631),new cljs.core.Keyword(null,"completed-app","completed-app",-635152970).cljs$core$IFn$_invoke$arity$1(G__41631),null,cljs.core.dissoc.call(null,G__41631,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"req-params","req-params",2117077454),new cljs.core.Keyword(null,"server-push","server-push",-1185884073),new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),new cljs.core.Keyword(null,"completed-app","completed-app",-635152970)),null));
});

untangled.websockets.networking.make_channel_client = (function untangled$websockets$networking$make_channel_client(var_args){
var args__32064__auto__ = [];
var len__32057__auto___41729 = arguments.length;
var i__32058__auto___41730 = (0);
while(true){
if((i__32058__auto___41730 < len__32057__auto___41729)){
args__32064__auto__.push((arguments[i__32058__auto___41730]));

var G__41731 = (i__32058__auto___41730 + (1));
i__32058__auto___41730 = G__41731;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return untangled.websockets.networking.make_channel_client.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

untangled.websockets.networking.make_channel_client.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__41648){
var map__41649 = p__41648;
var map__41649__$1 = ((((!((map__41649 == null)))?((((map__41649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41649):map__41649);
var global_error_callback = cljs.core.get.call(null,map__41649__$1,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631));
var req_params = cljs.core.get.call(null,map__41649__$1,new cljs.core.Keyword(null,"req-params","req-params",2117077454));
var parse_queue = cljs.core.async.chan.call(null);
var map__41651 = taoensso.sente.make_channel_socket_BANG_.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"packer","packer",66077544),untangled.websockets.transit_packer.packer,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"params","params",710516235),req_params,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false], null));
var map__41651__$1 = ((((!((map__41651 == null)))?((((map__41651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41651):map__41651);
var chsk = cljs.core.get.call(null,map__41651__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.call(null,map__41651__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__41651__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__41651__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var channel_client = untangled.websockets.networking.map__GT_ChannelClient.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),cljs.core.atom.call(null,global_error_callback),new cljs.core.Keyword(null,"req-params","req-params",2117077454),req_params,new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),parse_queue,new cljs.core.Keyword(null,"callback","callback",-705136228),((function (parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params){
return (function (valid,error){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params){
return (function (state_41695){
var state_val_41696 = (state_41695[(1)]);
if((state_val_41696 === (7))){
var state_41695__$1 = state_41695;
var statearr_41697_41732 = state_41695__$1;
(statearr_41697_41732[(2)] = false);

(statearr_41697_41732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (1))){
var state_41695__$1 = state_41695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41695__$1,(2),parse_queue);
} else {
if((state_val_41696 === (4))){
var state_41695__$1 = state_41695;
var statearr_41698_41733 = state_41695__$1;
(statearr_41698_41733[(2)] = false);

(statearr_41698_41733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (15))){
var inst_41676 = (state_41695[(7)]);
var inst_41677 = (state_41695[(8)]);
var inst_41686 = cljs.core.deref.call(null,global_error_callback);
var inst_41687 = inst_41686.call(null,inst_41676,inst_41677);
var state_41695__$1 = state_41695;
var statearr_41699_41734 = state_41695__$1;
(statearr_41699_41734[(2)] = inst_41687);

(statearr_41699_41734[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (13))){
var inst_41676 = (state_41695[(7)]);
var inst_41682 = [cljs.core.str("SERVER ERROR CODE: "),cljs.core.str(inst_41676)].join('');
var inst_41683 = untangled.client.logging.debug.call(null,inst_41682);
var inst_41684 = cljs.core.deref.call(null,global_error_callback);
var state_41695__$1 = (function (){var statearr_41700 = state_41695;
(statearr_41700[(9)] = inst_41683);

return statearr_41700;
})();
if(cljs.core.truth_(inst_41684)){
var statearr_41701_41735 = state_41695__$1;
(statearr_41701_41735[(1)] = (15));

} else {
var statearr_41702_41736 = state_41695__$1;
(statearr_41702_41736[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (6))){
var state_41695__$1 = state_41695;
var statearr_41703_41737 = state_41695__$1;
(statearr_41703_41737[(2)] = true);

(statearr_41703_41737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (17))){
var inst_41677 = (state_41695[(8)]);
var inst_41690 = (state_41695[(2)]);
var inst_41691 = error.call(null,inst_41677);
var state_41695__$1 = (function (){var statearr_41704 = state_41695;
(statearr_41704[(10)] = inst_41690);

return statearr_41704;
})();
var statearr_41705_41738 = state_41695__$1;
(statearr_41705_41738[(2)] = inst_41691);

(statearr_41705_41738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (3))){
var inst_41655 = (state_41695[(11)]);
var inst_41660 = inst_41655.cljs$lang$protocol_mask$partition0$;
var inst_41661 = (inst_41660 & (64));
var inst_41662 = inst_41655.cljs$core$ISeq$;
var inst_41663 = (inst_41661) || (inst_41662);
var state_41695__$1 = state_41695;
if(cljs.core.truth_(inst_41663)){
var statearr_41706_41739 = state_41695__$1;
(statearr_41706_41739[(1)] = (6));

} else {
var statearr_41707_41740 = state_41695__$1;
(statearr_41707_41740[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (12))){
var inst_41677 = (state_41695[(8)]);
var inst_41680 = valid.call(null,inst_41677);
var state_41695__$1 = state_41695;
var statearr_41708_41741 = state_41695__$1;
(statearr_41708_41741[(2)] = inst_41680);

(statearr_41708_41741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (2))){
var inst_41655 = (state_41695[(11)]);
var inst_41655__$1 = (state_41695[(2)]);
var inst_41657 = (inst_41655__$1 == null);
var inst_41658 = cljs.core.not.call(null,inst_41657);
var state_41695__$1 = (function (){var statearr_41709 = state_41695;
(statearr_41709[(11)] = inst_41655__$1);

return statearr_41709;
})();
if(inst_41658){
var statearr_41710_41742 = state_41695__$1;
(statearr_41710_41742[(1)] = (3));

} else {
var statearr_41711_41743 = state_41695__$1;
(statearr_41711_41743[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (11))){
var inst_41676 = (state_41695[(7)]);
var inst_41675 = (state_41695[(2)]);
var inst_41676__$1 = cljs.core.get.call(null,inst_41675,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_41677 = cljs.core.get.call(null,inst_41675,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_41678 = cljs.core._EQ_.call(null,inst_41676__$1,(200));
var state_41695__$1 = (function (){var statearr_41712 = state_41695;
(statearr_41712[(7)] = inst_41676__$1);

(statearr_41712[(8)] = inst_41677);

return statearr_41712;
})();
if(inst_41678){
var statearr_41713_41744 = state_41695__$1;
(statearr_41713_41744[(1)] = (12));

} else {
var statearr_41714_41745 = state_41695__$1;
(statearr_41714_41745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (9))){
var inst_41655 = (state_41695[(11)]);
var inst_41672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41655);
var state_41695__$1 = state_41695;
var statearr_41715_41746 = state_41695__$1;
(statearr_41715_41746[(2)] = inst_41672);

(statearr_41715_41746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (5))){
var inst_41670 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
if(cljs.core.truth_(inst_41670)){
var statearr_41716_41747 = state_41695__$1;
(statearr_41716_41747[(1)] = (9));

} else {
var statearr_41717_41748 = state_41695__$1;
(statearr_41717_41748[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (14))){
var inst_41693 = (state_41695[(2)]);
var state_41695__$1 = (function (){var statearr_41718 = state_41695;
(statearr_41718[(12)] = inst_41693);

return statearr_41718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41695__$1,parse_queue);
} else {
if((state_val_41696 === (16))){
var state_41695__$1 = state_41695;
var statearr_41719_41749 = state_41695__$1;
(statearr_41719_41749[(2)] = null);

(statearr_41719_41749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (10))){
var inst_41655 = (state_41695[(11)]);
var state_41695__$1 = state_41695;
var statearr_41720_41750 = state_41695__$1;
(statearr_41720_41750[(2)] = inst_41655);

(statearr_41720_41750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41696 === (8))){
var inst_41667 = (state_41695[(2)]);
var state_41695__$1 = state_41695;
var statearr_41721_41751 = state_41695__$1;
(statearr_41721_41751[(2)] = inst_41667);

(statearr_41721_41751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37476__auto__,parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params))
;
return ((function (switch__37461__auto__,c__37476__auto__,parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params){
return (function() {
var untangled$websockets$networking$state_machine__37462__auto__ = null;
var untangled$websockets$networking$state_machine__37462__auto____0 = (function (){
var statearr_41725 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41725[(0)] = untangled$websockets$networking$state_machine__37462__auto__);

(statearr_41725[(1)] = (1));

return statearr_41725;
});
var untangled$websockets$networking$state_machine__37462__auto____1 = (function (state_41695){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_41695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e41726){if((e41726 instanceof Object)){
var ex__37465__auto__ = e41726;
var statearr_41727_41752 = state_41695;
(statearr_41727_41752[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41753 = state_41695;
state_41695 = G__41753;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
untangled$websockets$networking$state_machine__37462__auto__ = function(state_41695){
switch(arguments.length){
case 0:
return untangled$websockets$networking$state_machine__37462__auto____0.call(this);
case 1:
return untangled$websockets$networking$state_machine__37462__auto____1.call(this,state_41695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$websockets$networking$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$websockets$networking$state_machine__37462__auto____0;
untangled$websockets$networking$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$websockets$networking$state_machine__37462__auto____1;
return untangled$websockets$networking$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params))
})();
var state__37478__auto__ = (function (){var statearr_41728 = f__37477__auto__.call(null);
(statearr_41728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_41728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params))
);

return c__37476__auto__;
});})(parse_queue,map__41651,map__41651__$1,chsk,ch_recv,send_fn,state,map__41649,map__41649__$1,global_error_callback,req_params))
], null));
untangled.websockets.networking.start_router_BANG_.call(null,ch_recv,untangled.websockets.networking.message_received);

return channel_client;
});

untangled.websockets.networking.make_channel_client.cljs$lang$maxFixedArity = (1);

untangled.websockets.networking.make_channel_client.cljs$lang$applyTo = (function (seq41646){
var G__41647 = cljs.core.first.call(null,seq41646);
var seq41646__$1 = cljs.core.next.call(null,seq41646);
return untangled.websockets.networking.make_channel_client.cljs$core$IFn$_invoke$arity$variadic(G__41647,seq41646__$1);
});

//# sourceMappingURL=networking.js.map?rel=1487610715415