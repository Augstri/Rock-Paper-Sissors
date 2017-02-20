// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__40478 = x;
var ev_id = cljs.core.nth.call(null,vec__40478,(0),null);
var _ = cljs.core.nth.call(null,vec__40478,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_fmt = [cljs.core.str((function (){var G__40480 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__40480) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__30975__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__30975__auto__){
var and__30975__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__30975__auto____$1)){
var map__40484 = x;
var map__40484__$1 = ((((!((map__40484 == null)))?((((map__40484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40484):map__40484);
var ch_recv = cljs.core.get.call(null,map__40484__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__40484__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__40484__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__40484__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__30975__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__30975__auto____$2)){
var and__30975__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__30975__auto____$3){
var and__30975__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__30975__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__30975__auto____$4;
}
} else {
return and__30975__auto____$3;
}
} else {
return and__30975__auto____$2;
}
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__30975__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__30975__auto__){
var and__30975__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__30975__auto____$1)){
var map__40488 = x;
var map__40488__$1 = ((((!((map__40488 == null)))?((((map__40488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40488):map__40488);
var ch_recv = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__40488__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__30975__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__30975__auto____$2)){
var and__30975__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__30975__auto____$3){
var and__30975__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__30975__auto____$4)){
var and__30975__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__30975__auto____$5){
var and__30975__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__30975__auto____$6)){
var and__30975__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__30975__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__30975__auto____$7;
}
} else {
return and__30975__auto____$6;
}
} else {
return and__30975__auto____$5;
}
} else {
return and__30975__auto____$4;
}
} else {
return and__30975__auto____$3;
}
} else {
return and__30975__auto____$2;
}
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__40490){
var map__40494 = p__40490;
var map__40494__$1 = ((((!((map__40494 == null)))?((((map__40494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40494):map__40494);
var ev_msg = map__40494__$1;
var event = cljs.core.get.call(null,map__40494__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__40494__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__40496 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__40496,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__40496,(1),null);
var valid_event = vec__40496;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__40496,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__40494,map__40494__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__40496,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__40494,map__40494__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40500){if((e40500 instanceof Error)){
var __t = e40500;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e40500;

}
}})());
}catch (e40499){var t = e40499;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args40501 = [];
var len__32057__auto___40504 = arguments.length;
var i__32058__auto___40505 = (0);
while(true){
if((i__32058__auto___40505 < len__32057__auto___40504)){
args40501.push((arguments[i__32058__auto___40505]));

var G__40506 = (i__32058__auto___40505 + (1));
i__32058__auto___40505 = G__40506;
continue;
} else {
}
break;
}

var G__40503 = args40501.length;
switch (G__40503) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40501.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__32064__auto__ = [];
var len__32057__auto___40509 = arguments.length;
var i__32058__auto___40510 = (0);
while(true){
if((i__32058__auto___40510 < len__32057__auto___40509)){
args__32064__auto__.push((arguments[i__32058__auto___40510]));

var G__40511 = (i__32058__auto___40510 + (1));
i__32058__auto___40510 = G__40511;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq40508){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40508));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_40518 = prefixed_pstr;
try{if(typeof __x_40518 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40515){if((e40515 instanceof Error)){
var __t_40519 = e40515;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_40518,__t_40519,null);
} else {
throw e40515;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__40517 = prefix;
switch (G__40517) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__40516 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__40516,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__40516,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__40516,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__40516,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___40690 = arguments.length;
var i__32058__auto___40691 = (0);
while(true){
if((i__32058__auto___40691 < len__32057__auto___40690)){
args__32064__auto__.push((arguments[i__32058__auto___40691]));

var G__40692 = (i__32058__auto___40691 + (1));
i__32058__auto___40691 = G__40692;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__40524){
var vec__40525 = p__40524;
var map__40526 = cljs.core.nth.call(null,vec__40525,(0),null);
var map__40526__$1 = ((((!((map__40526 == null)))?((((map__40526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40526):map__40526);
var recv_buf_or_n = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__30987__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__30987__auto____$1)){
return or__30987__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40528){if((e40528 instanceof Error)){
var __t = e40528;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e40528;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40529){if((e40529 instanceof Error)){
var __t = e40529;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e40529;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__40521_SHARP_){
if(!((p1__40521_SHARP_ == null))){
if((false) || (p1__40521_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__40521_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__40521_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__40521_SHARP_);
}
});})(__x,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40530){if((e40530 instanceof Error)){
var __t = e40530;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__40521#] (satisfies? interfaces/IServerChanAdapter p1__40521#)) web-server-adapter)",__x,__t,null);
} else {
throw e40530;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__40521#] (satisfies? interfaces/IServerChanAdapter p1__40521#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__30987__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40532){if((e40532 instanceof Error)){
var __t = e40532;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e40532;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__40533){
var map__40534 = p__40533;
var map__40534__$1 = ((((!((map__40534 == null)))?((((map__40534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40534):map__40534);
var old_m = map__40534__$1;
var ws = cljs.core.get.call(null,map__40534__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__40534__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__40534__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__40536 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40536) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40537){if((e40537 instanceof Error)){
var __t = e40537;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e40537;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__40538){
var map__40539 = p__40538;
var map__40539__$1 = ((((!((map__40539 == null)))?((((map__40539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40539):map__40539);
var old_m = map__40539__$1;
var ws = cljs.core.get.call(null,map__40539__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__40539__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__40539__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__40694__delegate = function (user_id,ev,p__40541){
var vec__40542 = p__40541;
var map__40543 = cljs.core.nth.call(null,vec__40542,(0),null);
var map__40543__$1 = ((((!((map__40543 == null)))?((((map__40543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40543):map__40543);
var opts = map__40543__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__40543__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_40695 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __40696 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_40695,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_40695,ev], null);
});})(uid_40695,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __40697__$1 = (cljs.core.truth_(uid_40695)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __40698__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_40699 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__40700 = ((function (uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__40545 = cljs.core.get.call(null,m,uid_40695);
var ___$3 = cljs.core.nth.call(null,vec__40545,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__40545,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_40699)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_40695),cljs.core.get.call(null,m,uid_40695));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__40546 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__40546,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__40546,(1),null);
var __x_40701 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_40701)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40547){if((e40547 instanceof Error)){
var __t_40702 = e40547;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_40701,__t_40702,null);
} else {
throw e40547;

}
}
var __x_40703 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_40703)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40548){if((e40548 instanceof Error)){
var __t_40704 = e40548;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_40703,__t_40704,null);
} else {
throw e40548;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__40546,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__40546,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__40549 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40549) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_40695,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_40695,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_40695], null);
});})(uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__40550_40706 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__40551_40707 = null;
var count__40552_40708 = (0);
var i__40553_40709 = (0);
while(true){
if((i__40553_40709 < count__40552_40708)){
var type_40710 = cljs.core._nth.call(null,chunk__40551_40707,i__40553_40709);
flush_buffer_BANG__40700.call(null,type_40710);

var G__40711 = seq__40550_40706;
var G__40712 = chunk__40551_40707;
var G__40713 = count__40552_40708;
var G__40714 = (i__40553_40709 + (1));
seq__40550_40706 = G__40711;
chunk__40551_40707 = G__40712;
count__40552_40708 = G__40713;
i__40553_40709 = G__40714;
continue;
} else {
var temp__4657__auto___40715 = cljs.core.seq.call(null,seq__40550_40706);
if(temp__4657__auto___40715){
var seq__40550_40716__$1 = temp__4657__auto___40715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40550_40716__$1)){
var c__31798__auto___40717 = cljs.core.chunk_first.call(null,seq__40550_40716__$1);
var G__40718 = cljs.core.chunk_rest.call(null,seq__40550_40716__$1);
var G__40719 = c__31798__auto___40717;
var G__40720 = cljs.core.count.call(null,c__31798__auto___40717);
var G__40721 = (0);
seq__40550_40706 = G__40718;
chunk__40551_40707 = G__40719;
count__40552_40708 = G__40720;
i__40553_40709 = G__40721;
continue;
} else {
var type_40722 = cljs.core.first.call(null,seq__40550_40716__$1);
flush_buffer_BANG__40700.call(null,type_40722);

var G__40723 = cljs.core.next.call(null,seq__40550_40716__$1);
var G__40724 = null;
var G__40725 = (0);
var G__40726 = (0);
seq__40550_40706 = G__40723;
chunk__40551_40707 = G__40724;
count__40552_40708 = G__40725;
i__40553_40709 = G__40726;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__40554_40727 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_40695], null))));
var chunk__40555_40728 = null;
var count__40556_40729 = (0);
var i__40557_40730 = (0);
while(true){
if((i__40557_40730 < count__40556_40729)){
var server_ch_40731 = cljs.core._nth.call(null,chunk__40555_40728,i__40557_40730);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_40731);

var G__40732 = seq__40554_40727;
var G__40733 = chunk__40555_40728;
var G__40734 = count__40556_40729;
var G__40735 = (i__40557_40730 + (1));
seq__40554_40727 = G__40732;
chunk__40555_40728 = G__40733;
count__40556_40729 = G__40734;
i__40557_40730 = G__40735;
continue;
} else {
var temp__4657__auto___40736 = cljs.core.seq.call(null,seq__40554_40727);
if(temp__4657__auto___40736){
var seq__40554_40737__$1 = temp__4657__auto___40736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40554_40737__$1)){
var c__31798__auto___40738 = cljs.core.chunk_first.call(null,seq__40554_40737__$1);
var G__40739 = cljs.core.chunk_rest.call(null,seq__40554_40737__$1);
var G__40740 = c__31798__auto___40738;
var G__40741 = cljs.core.count.call(null,c__31798__auto___40738);
var G__40742 = (0);
seq__40554_40727 = G__40739;
chunk__40555_40728 = G__40740;
count__40556_40729 = G__40741;
i__40557_40730 = G__40742;
continue;
} else {
var server_ch_40743 = cljs.core.first.call(null,seq__40554_40737__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_40743);

var G__40744 = cljs.core.next.call(null,seq__40554_40737__$1);
var G__40745 = null;
var G__40746 = (0);
var G__40747 = (0);
seq__40554_40727 = G__40744;
chunk__40555_40728 = G__40745;
count__40556_40729 = G__40746;
i__40557_40730 = G__40747;
continue;
}
} else {
}
}
break;
}

var seq__40558_40748 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_40695], null))));
var chunk__40559_40749 = null;
var count__40560_40750 = (0);
var i__40561_40751 = (0);
while(true){
if((i__40561_40751 < count__40560_40750)){
var vec__40562_40752 = cljs.core._nth.call(null,chunk__40559_40749,i__40561_40751);
var _QMARK_server_ch_40753 = cljs.core.nth.call(null,vec__40562_40752,(0),null);
var __40754__$3 = cljs.core.nth.call(null,vec__40562_40752,(1),null);
var temp__4657__auto___40755 = _QMARK_server_ch_40753;
if(cljs.core.truth_(temp__4657__auto___40755)){
var server_ch_40756 = temp__4657__auto___40755;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_40756);
} else {
}

var G__40757 = seq__40558_40748;
var G__40758 = chunk__40559_40749;
var G__40759 = count__40560_40750;
var G__40760 = (i__40561_40751 + (1));
seq__40558_40748 = G__40757;
chunk__40559_40749 = G__40758;
count__40560_40750 = G__40759;
i__40561_40751 = G__40760;
continue;
} else {
var temp__4657__auto___40761 = cljs.core.seq.call(null,seq__40558_40748);
if(temp__4657__auto___40761){
var seq__40558_40762__$1 = temp__4657__auto___40761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40558_40762__$1)){
var c__31798__auto___40763 = cljs.core.chunk_first.call(null,seq__40558_40762__$1);
var G__40764 = cljs.core.chunk_rest.call(null,seq__40558_40762__$1);
var G__40765 = c__31798__auto___40763;
var G__40766 = cljs.core.count.call(null,c__31798__auto___40763);
var G__40767 = (0);
seq__40558_40748 = G__40764;
chunk__40559_40749 = G__40765;
count__40560_40750 = G__40766;
i__40561_40751 = G__40767;
continue;
} else {
var vec__40563_40768 = cljs.core.first.call(null,seq__40558_40762__$1);
var _QMARK_server_ch_40769 = cljs.core.nth.call(null,vec__40563_40768,(0),null);
var __40770__$3 = cljs.core.nth.call(null,vec__40563_40768,(1),null);
var temp__4657__auto___40771__$1 = _QMARK_server_ch_40769;
if(cljs.core.truth_(temp__4657__auto___40771__$1)){
var server_ch_40772 = temp__4657__auto___40771__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_40772);
} else {
}

var G__40773 = cljs.core.next.call(null,seq__40558_40762__$1);
var G__40774 = null;
var G__40775 = (0);
var G__40776 = (0);
seq__40558_40748 = G__40773;
chunk__40559_40749 = G__40774;
count__40560_40750 = G__40775;
i__40561_40751 = G__40776;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40564_40777 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__40565_40778 = null;
var count__40566_40779 = (0);
var i__40567_40780 = (0);
while(true){
if((i__40567_40780 < count__40566_40779)){
var type_40781 = cljs.core._nth.call(null,chunk__40565_40778,i__40567_40780);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_40781,uid_40695], null),((function (seq__40564_40777,chunk__40565_40778,count__40566_40779,i__40567_40780,type_40781,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_40699], true)], null);
} else {
var vec__40568 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__40568,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__40568,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_40699)], null);
}
});})(seq__40564_40777,chunk__40565_40778,count__40566_40779,i__40567_40780,type_40781,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__40782 = seq__40564_40777;
var G__40783 = chunk__40565_40778;
var G__40784 = count__40566_40779;
var G__40785 = (i__40567_40780 + (1));
seq__40564_40777 = G__40782;
chunk__40565_40778 = G__40783;
count__40566_40779 = G__40784;
i__40567_40780 = G__40785;
continue;
} else {
var temp__4657__auto___40786 = cljs.core.seq.call(null,seq__40564_40777);
if(temp__4657__auto___40786){
var seq__40564_40787__$1 = temp__4657__auto___40786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40564_40787__$1)){
var c__31798__auto___40788 = cljs.core.chunk_first.call(null,seq__40564_40787__$1);
var G__40789 = cljs.core.chunk_rest.call(null,seq__40564_40787__$1);
var G__40790 = c__31798__auto___40788;
var G__40791 = cljs.core.count.call(null,c__31798__auto___40788);
var G__40792 = (0);
seq__40564_40777 = G__40789;
chunk__40565_40778 = G__40790;
count__40566_40779 = G__40791;
i__40567_40780 = G__40792;
continue;
} else {
var type_40793 = cljs.core.first.call(null,seq__40564_40787__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_40793,uid_40695], null),((function (seq__40564_40777,chunk__40565_40778,count__40566_40779,i__40567_40780,type_40793,seq__40564_40787__$1,temp__4657__auto___40786,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_40699], true)], null);
} else {
var vec__40569 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__40569,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__40569,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_40699)], null);
}
});})(seq__40564_40777,chunk__40565_40778,count__40566_40779,i__40567_40780,type_40793,seq__40564_40787__$1,temp__4657__auto___40786,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__40794 = cljs.core.next.call(null,seq__40564_40787__$1);
var G__40795 = null;
var G__40796 = (0);
var G__40797 = (0);
seq__40564_40777 = G__40794;
chunk__40565_40778 = G__40795;
count__40566_40779 = G__40796;
i__40567_40780 = G__40797;
continue;
}
} else {
}
}
break;
}

var c__37476__auto___40798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___40798,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___40798,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_40579){
var state_val_40580 = (state_40579[(1)]);
if((state_val_40580 === (1))){
var state_40579__$1 = state_40579;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_40581_40799 = state_40579__$1;
(statearr_40581_40799[(1)] = (2));

} else {
var statearr_40582_40800 = state_40579__$1;
(statearr_40582_40800[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40580 === (2))){
var state_40579__$1 = state_40579;
var statearr_40583_40801 = state_40579__$1;
(statearr_40583_40801[(2)] = null);

(statearr_40583_40801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40580 === (3))){
var inst_40572 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_40579__$1 = state_40579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40579__$1,(5),inst_40572);
} else {
if((state_val_40580 === (4))){
var inst_40576 = (state_40579[(2)]);
var inst_40577 = flush_buffer_BANG__40700.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_40579__$1 = (function (){var statearr_40584 = state_40579;
(statearr_40584[(7)] = inst_40576);

return statearr_40584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40579__$1,inst_40577);
} else {
if((state_val_40580 === (5))){
var inst_40574 = (state_40579[(2)]);
var state_40579__$1 = state_40579;
var statearr_40585_40802 = state_40579__$1;
(statearr_40585_40802[(2)] = inst_40574);

(statearr_40585_40802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__37476__auto___40798,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__37461__auto__,c__37476__auto___40798,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__37462__auto__ = null;
var taoensso$sente$state_machine__37462__auto____0 = (function (){
var statearr_40589 = [null,null,null,null,null,null,null,null];
(statearr_40589[(0)] = taoensso$sente$state_machine__37462__auto__);

(statearr_40589[(1)] = (1));

return statearr_40589;
});
var taoensso$sente$state_machine__37462__auto____1 = (function (state_40579){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40590){if((e40590 instanceof Object)){
var ex__37465__auto__ = e40590;
var statearr_40591_40803 = state_40579;
(statearr_40591_40803[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40804 = state_40579;
state_40579 = G__40804;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
taoensso$sente$state_machine__37462__auto__ = function(state_40579){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__37462__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__37462__auto____1.call(this,state_40579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__37462__auto____0;
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__37462__auto____1;
return taoensso$sente$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___40798,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__37478__auto__ = (function (){var statearr_40592 = f__37477__auto__.call(null);
(statearr_40592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___40798);

return statearr_40592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___40798,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__37476__auto___40805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___40805,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___40805,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_40602){
var state_val_40603 = (state_40602[(1)]);
if((state_val_40603 === (1))){
var state_40602__$1 = state_40602;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_40604_40806 = state_40602__$1;
(statearr_40604_40806[(1)] = (2));

} else {
var statearr_40605_40807 = state_40602__$1;
(statearr_40605_40807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (2))){
var state_40602__$1 = state_40602;
var statearr_40606_40808 = state_40602__$1;
(statearr_40606_40808[(2)] = null);

(statearr_40606_40808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (3))){
var inst_40595 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_40602__$1 = state_40602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40602__$1,(5),inst_40595);
} else {
if((state_val_40603 === (4))){
var inst_40599 = (state_40602[(2)]);
var inst_40600 = flush_buffer_BANG__40700.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_40602__$1 = (function (){var statearr_40607 = state_40602;
(statearr_40607[(7)] = inst_40599);

return statearr_40607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40602__$1,inst_40600);
} else {
if((state_val_40603 === (5))){
var inst_40597 = (state_40602[(2)]);
var state_40602__$1 = state_40602;
var statearr_40608_40809 = state_40602__$1;
(statearr_40608_40809[(2)] = inst_40597);

(statearr_40608_40809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__37476__auto___40805,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__37461__auto__,c__37476__auto___40805,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__37462__auto__ = null;
var taoensso$sente$state_machine__37462__auto____0 = (function (){
var statearr_40612 = [null,null,null,null,null,null,null,null];
(statearr_40612[(0)] = taoensso$sente$state_machine__37462__auto__);

(statearr_40612[(1)] = (1));

return statearr_40612;
});
var taoensso$sente$state_machine__37462__auto____1 = (function (state_40602){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40613){if((e40613 instanceof Object)){
var ex__37465__auto__ = e40613;
var statearr_40614_40810 = state_40602;
(statearr_40614_40810[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40811 = state_40602;
state_40602 = G__40811;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
taoensso$sente$state_machine__37462__auto__ = function(state_40602){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__37462__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__37462__auto____1.call(this,state_40602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__37462__auto____0;
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__37462__auto____1;
return taoensso$sente$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___40805,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__37478__auto__ = (function (){var statearr_40615 = f__37477__auto__.call(null);
(statearr_40615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___40805);

return statearr_40615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___40805,uid_40695,__40696,__40697__$1,__40698__$2,ev_uuid_40699,flush_buffer_BANG__40700,vec__40542,map__40543,map__40543__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__40694 = function (user_id,ev,var_args){
var p__40541 = null;
if (arguments.length > 2) {
var G__40812__i = 0, G__40812__a = new Array(arguments.length -  2);
while (G__40812__i < G__40812__a.length) {G__40812__a[G__40812__i] = arguments[G__40812__i + 2]; ++G__40812__i;}
  p__40541 = new cljs.core.IndexedSeq(G__40812__a,0);
} 
return G__40694__delegate.call(this,user_id,ev,p__40541);};
G__40694.cljs$lang$maxFixedArity = 2;
G__40694.cljs$lang$applyTo = (function (arglist__40813){
var user_id = cljs.core.first(arglist__40813);
arglist__40813 = cljs.core.next(arglist__40813);
var ev = cljs.core.first(arglist__40813);
var p__40541 = cljs.core.rest(arglist__40813);
return G__40694__delegate(user_id,ev,p__40541);
});
G__40694.cljs$core$IFn$_invoke$arity$variadic = G__40694__delegate;
return G__40694;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__40616 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__40616,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__40616,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__40616,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__40616,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__40616,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__40616,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__40616,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__40616,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__40814__delegate = function (event,p__40617){
var vec__40618 = p__40617;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__40618,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__40814 = function (event,var_args){
var p__40617 = null;
if (arguments.length > 1) {
var G__40815__i = 0, G__40815__a = new Array(arguments.length -  1);
while (G__40815__i < G__40815__a.length) {G__40815__a[G__40815__i] = arguments[G__40815__i + 1]; ++G__40815__i;}
  p__40617 = new cljs.core.IndexedSeq(G__40815__a,0);
} 
return G__40814__delegate.call(this,event,p__40617);};
G__40814.cljs$lang$maxFixedArity = 1;
G__40814.cljs$lang$applyTo = (function (arglist__40816){
var event = cljs.core.first(arglist__40816);
var p__40617 = cljs.core.rest(arglist__40816);
return G__40814__delegate(event,p__40617);
});
G__40814.cljs$core$IFn$_invoke$arity$variadic = G__40814__delegate;
return G__40814;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__30987__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_.call(null,server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__40619 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__40619,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__40619,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__40619,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__40619,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__40619,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__40619,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_40633){
var state_val_40634 = (state_40633[(1)]);
if((state_val_40634 === (1))){
var inst_40620 = cljs.core.async.timeout.call(null,(5000));
var state_40633__$1 = state_40633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40633__$1,(2),inst_40620);
} else {
if((state_val_40634 === (2))){
var inst_40622 = (state_40633[(2)]);
var inst_40623 = upd_connected_uid_BANG_.call(null,uid);
var state_40633__$1 = (function (){var statearr_40635 = state_40633;
(statearr_40635[(7)] = inst_40622);

return statearr_40635;
})();
if(cljs.core.truth_(inst_40623)){
var statearr_40636_40817 = state_40633__$1;
(statearr_40636_40817[(1)] = (3));

} else {
var statearr_40637_40818 = state_40633__$1;
(statearr_40637_40818[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (3))){
var inst_40625 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40626 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_40627 = (new cljs.core.PersistentVector(null,1,(5),inst_40625,inst_40626,null));
var inst_40628 = receive_event_msg_BANG_.call(null,inst_40627);
var state_40633__$1 = state_40633;
var statearr_40638_40819 = state_40633__$1;
(statearr_40638_40819[(2)] = inst_40628);

(statearr_40638_40819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (4))){
var state_40633__$1 = state_40633;
var statearr_40639_40820 = state_40633__$1;
(statearr_40639_40820[(2)] = null);

(statearr_40639_40820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (5))){
var inst_40631 = (state_40633[(2)]);
var state_40633__$1 = state_40633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40633__$1,inst_40631);
} else {
return null;
}
}
}
}
}
});})(c__37476__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__37461__auto__,c__37476__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__37462__auto__ = null;
var taoensso$sente$state_machine__37462__auto____0 = (function (){
var statearr_40643 = [null,null,null,null,null,null,null,null];
(statearr_40643[(0)] = taoensso$sente$state_machine__37462__auto__);

(statearr_40643[(1)] = (1));

return statearr_40643;
});
var taoensso$sente$state_machine__37462__auto____1 = (function (state_40633){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40644){if((e40644 instanceof Object)){
var ex__37465__auto__ = e40644;
var statearr_40645_40821 = state_40633;
(statearr_40645_40821[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40822 = state_40633;
state_40633 = G__40822;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
taoensso$sente$state_machine__37462__auto__ = function(state_40633){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__37462__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__37462__auto____1.call(this,state_40633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__37462__auto____0;
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__37462__auto____1;
return taoensso$sente$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__37478__auto__ = (function (){var statearr_40646 = f__37477__auto__.call(null);
(statearr_40646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_40646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__37476__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__40647){
var vec__40648 = p__40647;
var server_ch__$1 = cljs.core.nth.call(null,vec__40648,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__40648,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_40671){
var state_val_40672 = (state_40671[(1)]);
if((state_val_40672 === (1))){
var inst_40649 = cljs.core.async.timeout.call(null,(5000));
var state_40671__$1 = state_40671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40671__$1,(2),inst_40649);
} else {
if((state_val_40672 === (2))){
var inst_40651 = (state_40671[(2)]);
var inst_40652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40653 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_40654 = (new cljs.core.PersistentVector(null,2,(5),inst_40652,inst_40653,null));
var inst_40655 = (function (){return ((function (inst_40651,inst_40652,inst_40653,inst_40654,state_val_40672,c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__40673 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__40673,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__40673,(1),null);
var disconnected_QMARK_ = (function (){var and__30975__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__30975__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__30975__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_40651,inst_40652,inst_40653,inst_40654,state_val_40672,c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_40656 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_40654,inst_40655);
var state_40671__$1 = (function (){var statearr_40674 = state_40671;
(statearr_40674[(7)] = inst_40651);

return statearr_40674;
})();
if(cljs.core.truth_(inst_40656)){
var statearr_40675_40823 = state_40671__$1;
(statearr_40675_40823[(1)] = (3));

} else {
var statearr_40676_40824 = state_40671__$1;
(statearr_40676_40824[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (3))){
var inst_40658 = upd_connected_uid_BANG_.call(null,uid);
var state_40671__$1 = state_40671;
if(cljs.core.truth_(inst_40658)){
var statearr_40677_40825 = state_40671__$1;
(statearr_40677_40825[(1)] = (6));

} else {
var statearr_40678_40826 = state_40671__$1;
(statearr_40678_40826[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (4))){
var state_40671__$1 = state_40671;
var statearr_40679_40827 = state_40671__$1;
(statearr_40679_40827[(2)] = null);

(statearr_40679_40827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (5))){
var inst_40669 = (state_40671[(2)]);
var state_40671__$1 = state_40671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40671__$1,inst_40669);
} else {
if((state_val_40672 === (6))){
var inst_40660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40661 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_40662 = (new cljs.core.PersistentVector(null,1,(5),inst_40660,inst_40661,null));
var inst_40663 = receive_event_msg_BANG_.call(null,inst_40662);
var state_40671__$1 = state_40671;
var statearr_40680_40828 = state_40671__$1;
(statearr_40680_40828[(2)] = inst_40663);

(statearr_40680_40828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (7))){
var state_40671__$1 = state_40671;
var statearr_40681_40829 = state_40671__$1;
(statearr_40681_40829[(2)] = null);

(statearr_40681_40829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (8))){
var inst_40666 = (state_40671[(2)]);
var state_40671__$1 = state_40671;
var statearr_40682_40830 = state_40671__$1;
(statearr_40682_40830[(2)] = inst_40666);

(statearr_40682_40830[(1)] = (5));


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
});})(c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__37461__auto__,c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__37462__auto__ = null;
var taoensso$sente$state_machine__37462__auto____0 = (function (){
var statearr_40686 = [null,null,null,null,null,null,null,null];
(statearr_40686[(0)] = taoensso$sente$state_machine__37462__auto__);

(statearr_40686[(1)] = (1));

return statearr_40686;
});
var taoensso$sente$state_machine__37462__auto____1 = (function (state_40671){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40687){if((e40687 instanceof Object)){
var ex__37465__auto__ = e40687;
var statearr_40688_40831 = state_40671;
(statearr_40688_40831[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40832 = state_40671;
state_40671 = G__40832;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
taoensso$sente$state_machine__37462__auto__ = function(state_40671){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__37462__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__37462__auto____1.call(this,state_40671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__37462__auto____0;
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__37462__auto____1;
return taoensso$sente$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__37478__auto__ = (function (){var statearr_40689 = f__37477__auto__.call(null);
(statearr_40689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_40689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__37476__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__40525,map__40526,map__40526__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq40522){
var G__40523 = cljs.core.first.call(null,seq40522);
var seq40522__$1 = cljs.core.next.call(null,seq40522);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40523,seq40522__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__40837 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__40838 = null;
var count__40839 = (0);
var i__40840 = (0);
while(true){
if((i__40840 < count__40839)){
var server_ch = cljs.core._nth.call(null,chunk__40838,i__40840);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__40841 = seq__40837;
var G__40842 = chunk__40838;
var G__40843 = count__40839;
var G__40844 = (i__40840 + (1));
seq__40837 = G__40841;
chunk__40838 = G__40842;
count__40839 = G__40843;
i__40840 = G__40844;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40837);
if(temp__4657__auto__){
var seq__40837__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40837__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__40837__$1);
var G__40845 = cljs.core.chunk_rest.call(null,seq__40837__$1);
var G__40846 = c__31798__auto__;
var G__40847 = cljs.core.count.call(null,c__31798__auto__);
var G__40848 = (0);
seq__40837 = G__40845;
chunk__40838 = G__40846;
count__40839 = G__40847;
i__40840 = G__40848;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__40837__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__40849 = cljs.core.next.call(null,seq__40837__$1);
var G__40850 = null;
var G__40851 = (0);
var G__40852 = (0);
seq__40837 = G__40849;
chunk__40838 = G__40850;
count__40839 = G__40851;
i__40840 = G__40852;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___40942 = arguments.length;
var i__32058__auto___40943 = (0);
while(true){
if((i__32058__auto___40943 < len__32057__auto___40942)){
args__32064__auto__.push((arguments[i__32058__auto___40943]));

var G__40944 = (i__32058__auto___40943 + (1));
i__32058__auto___40943 = G__40944;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((3) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32065__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__40857){
var vec__40858 = p__40857;
var map__40859 = cljs.core.nth.call(null,vec__40858,(0),null);
var map__40859__$1 = ((((!((map__40859 == null)))?((((map__40859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40859):map__40859);
var nmax_attempts = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__40859__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_40908){
var state_val_40909 = (state_40908[(1)]);
if((state_val_40909 === (7))){
var inst_40863 = (state_40908[(7)]);
var inst_40862 = (state_40908[(8)]);
var inst_40869 = (state_40908[(9)]);
var inst_40880 = (function (){var n = inst_40862;
var client_ids_satisfied = inst_40863;
var _QMARK_pulled = inst_40869;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_40863,inst_40862,inst_40869,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__40879){
var vec__40910 = p__40879;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__40910,(0),null);
var _ = cljs.core.nth.call(null,vec__40910,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_40863,inst_40862,inst_40869,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_40881 = cljs.core.PersistentHashSet.EMPTY;
var inst_40882 = cljs.core.reduce_kv.call(null,inst_40880,inst_40881,inst_40869);
var state_40908__$1 = state_40908;
var statearr_40911_40945 = state_40908__$1;
(statearr_40911_40945[(2)] = inst_40882);

(statearr_40911_40945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (1))){
var inst_40861 = cljs.core.PersistentHashSet.EMPTY;
var inst_40862 = (0);
var inst_40863 = inst_40861;
var state_40908__$1 = (function (){var statearr_40912 = state_40908;
(statearr_40912[(7)] = inst_40863);

(statearr_40912[(8)] = inst_40862);

return statearr_40912;
})();
var statearr_40913_40946 = state_40908__$1;
(statearr_40913_40946[(2)] = null);

(statearr_40913_40946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (4))){
var state_40908__$1 = state_40908;
var statearr_40914_40947 = state_40908__$1;
(statearr_40914_40947[(2)] = true);

(statearr_40914_40947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (15))){
var inst_40904 = (state_40908[(2)]);
var state_40908__$1 = state_40908;
var statearr_40915_40948 = state_40908__$1;
(statearr_40915_40948[(2)] = inst_40904);

(statearr_40915_40948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (13))){
var inst_40895 = cljs.core.rand_int.call(null,ms_rand);
var inst_40896 = (ms_base + inst_40895);
var inst_40897 = cljs.core.async.timeout.call(null,inst_40896);
var state_40908__$1 = state_40908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40908__$1,(16),inst_40897);
} else {
if((state_val_40909 === (6))){
var inst_40869 = (state_40908[(9)]);
var inst_40877 = (state_40908[(2)]);
var state_40908__$1 = (function (){var statearr_40916 = state_40908;
(statearr_40916[(10)] = inst_40877);

return statearr_40916;
})();
if(cljs.core.truth_(inst_40869)){
var statearr_40917_40949 = state_40908__$1;
(statearr_40917_40949[(1)] = (7));

} else {
var statearr_40918_40950 = state_40908__$1;
(statearr_40918_40950[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (3))){
var inst_40906 = (state_40908[(2)]);
var state_40908__$1 = state_40908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40908__$1,inst_40906);
} else {
if((state_val_40909 === (12))){
var inst_40893 = (state_40908[(2)]);
var state_40908__$1 = state_40908;
if(cljs.core.truth_(inst_40893)){
var statearr_40919_40951 = state_40908__$1;
(statearr_40919_40951[(1)] = (13));

} else {
var statearr_40920_40952 = state_40908__$1;
(statearr_40920_40952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (2))){
var inst_40863 = (state_40908[(7)]);
var inst_40862 = (state_40908[(8)]);
var inst_40869 = (state_40908[(9)]);
var inst_40865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40866 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_40867 = (new cljs.core.PersistentVector(null,2,(5),inst_40865,inst_40866,null));
var inst_40868 = (function (){var n = inst_40862;
var client_ids_satisfied = inst_40863;
return ((function (n,client_ids_satisfied,inst_40863,inst_40862,inst_40869,inst_40865,inst_40866,inst_40867,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_40863,inst_40862,inst_40869,inst_40865,inst_40866,inst_40867,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__40921 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__40921,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__40921,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_40863,inst_40862,inst_40869,inst_40865,inst_40866,inst_40867,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_40863,inst_40862,inst_40869,inst_40865,inst_40866,inst_40867,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_40869__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_40867,inst_40868);
var inst_40870 = (function (){var n = inst_40862;
var client_ids_satisfied = inst_40863;
var _QMARK_pulled = inst_40869__$1;
var __x = inst_40869__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_40863,inst_40862,inst_40869,inst_40865,inst_40866,inst_40867,inst_40868,inst_40869__$1,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__30987__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_40863,inst_40862,inst_40869,inst_40865,inst_40866,inst_40867,inst_40868,inst_40869__$1,state_val_40909,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_40871 = inst_40870.call(null,inst_40869__$1);
var state_40908__$1 = (function (){var statearr_40922 = state_40908;
(statearr_40922[(9)] = inst_40869__$1);

return statearr_40922;
})();
if(cljs.core.truth_(inst_40871)){
var statearr_40923_40953 = state_40908__$1;
(statearr_40923_40953[(1)] = (4));

} else {
var statearr_40924_40954 = state_40908__$1;
(statearr_40924_40954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (11))){
var inst_40887 = (state_40908[(11)]);
var state_40908__$1 = state_40908;
var statearr_40925_40955 = state_40908__$1;
(statearr_40925_40955[(2)] = inst_40887);

(statearr_40925_40955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (9))){
var inst_40863 = (state_40908[(7)]);
var inst_40887 = (state_40908[(11)]);
var inst_40862 = (state_40908[(8)]);
var inst_40885 = (state_40908[(2)]);
var inst_40886 = cljs.core.into.call(null,inst_40863,inst_40885);
var inst_40887__$1 = (inst_40862 < nmax_attempts);
var state_40908__$1 = (function (){var statearr_40926 = state_40908;
(statearr_40926[(11)] = inst_40887__$1);

(statearr_40926[(12)] = inst_40886);

return statearr_40926;
})();
if(cljs.core.truth_(inst_40887__$1)){
var statearr_40927_40956 = state_40908__$1;
(statearr_40927_40956[(1)] = (10));

} else {
var statearr_40928_40957 = state_40908__$1;
(statearr_40928_40957[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (5))){
var inst_40869 = (state_40908[(9)]);
var inst_40874 = "([:or nil? map?] ?pulled)";
var inst_40875 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_40874,inst_40869,null,null);
var state_40908__$1 = state_40908;
var statearr_40929_40958 = state_40908__$1;
(statearr_40929_40958[(2)] = inst_40875);

(statearr_40929_40958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (14))){
var state_40908__$1 = state_40908;
var statearr_40930_40959 = state_40908__$1;
(statearr_40930_40959[(2)] = null);

(statearr_40930_40959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (16))){
var inst_40862 = (state_40908[(8)]);
var inst_40886 = (state_40908[(12)]);
var inst_40899 = (state_40908[(2)]);
var inst_40900 = (inst_40862 + (1));
var inst_40862__$1 = inst_40900;
var inst_40863 = inst_40886;
var state_40908__$1 = (function (){var statearr_40931 = state_40908;
(statearr_40931[(7)] = inst_40863);

(statearr_40931[(8)] = inst_40862__$1);

(statearr_40931[(13)] = inst_40899);

return statearr_40931;
})();
var statearr_40932_40960 = state_40908__$1;
(statearr_40932_40960[(2)] = null);

(statearr_40932_40960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (10))){
var inst_40886 = (state_40908[(12)]);
var inst_40889 = cljs.core.complement.call(null,inst_40886);
var inst_40890 = cljs.core.some.call(null,inst_40889,client_ids_unsatisfied);
var state_40908__$1 = state_40908;
var statearr_40933_40961 = state_40908__$1;
(statearr_40933_40961[(2)] = inst_40890);

(statearr_40933_40961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40909 === (8))){
var state_40908__$1 = state_40908;
var statearr_40934_40962 = state_40908__$1;
(statearr_40934_40962[(2)] = null);

(statearr_40934_40962[(1)] = (9));


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
});})(c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__37461__auto__,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__37462__auto__ = null;
var taoensso$sente$state_machine__37462__auto____0 = (function (){
var statearr_40938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40938[(0)] = taoensso$sente$state_machine__37462__auto__);

(statearr_40938[(1)] = (1));

return statearr_40938;
});
var taoensso$sente$state_machine__37462__auto____1 = (function (state_40908){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40939){if((e40939 instanceof Object)){
var ex__37465__auto__ = e40939;
var statearr_40940_40963 = state_40908;
(statearr_40940_40963[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40964 = state_40908;
state_40908 = G__40964;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
taoensso$sente$state_machine__37462__auto__ = function(state_40908){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__37462__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__37462__auto____1.call(this,state_40908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__37462__auto____0;
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__37462__auto____1;
return taoensso$sente$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__37478__auto__ = (function (){var statearr_40941 = f__37477__auto__.call(null);
(statearr_40941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_40941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,client_ids_unsatisfied,vec__40858,map__40859,map__40859__$1,nmax_attempts,ms_base,ms_rand))
);

return c__37476__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq40853){
var G__40854 = cljs.core.first.call(null,seq40853);
var seq40853__$1 = cljs.core.next.call(null,seq40853);
var G__40855 = cljs.core.first.call(null,seq40853__$1);
var seq40853__$2 = cljs.core.next.call(null,seq40853__$1);
var G__40856 = cljs.core.first.call(null,seq40853__$2);
var seq40853__$3 = cljs.core.next.call(null,seq40853__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40854,G__40855,G__40856,seq40853__$3);
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__31650__auto__ = (((chsk == null))?null:chsk);
var m__31651__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,chsk);
} else {
var m__31651__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__31650__auto__ = (((chsk == null))?null:chsk);
var m__31651__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,chsk,ev,opts);
} else {
var m__31651__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__31650__auto__ = (((chsk == null))?null:chsk);
var m__31651__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,chsk);
} else {
var m__31651__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__31650__auto__ = (((chsk == null))?null:chsk);
var m__31651__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,chsk);
} else {
var m__31651__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__31650__auto__ = (((chsk == null))?null:chsk);
var m__31651__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,chsk);
} else {
var m__31651__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args40965 = [];
var len__32057__auto___40968 = arguments.length;
var i__32058__auto___40969 = (0);
while(true){
if((i__32058__auto___40969 < len__32057__auto___40968)){
args40965.push((arguments[i__32058__auto___40969]));

var G__40970 = (i__32058__auto___40969 + (1));
i__32058__auto___40969 = G__40970;
continue;
} else {
}
break;
}

var G__40967 = args40965.length;
switch (G__40967) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40965.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__30987__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__30987__auto__){
return or__30987__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__30987__auto__ = (_QMARK_cb == null);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__30987__auto____$1){
return or__30987__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__40972,merge_state){
var map__40976 = p__40972;
var map__40976__$1 = ((((!((map__40976 == null)))?((((map__40976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40976):map__40976);
var chsk = map__40976__$1;
var chs = cljs.core.get.call(null,map__40976__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__40976__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__40978 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__40976,map__40976__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__30975__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__30975__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__40976,map__40976__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__40978,(0),null);
var new_state = cljs.core.nth.call(null,vec__40978,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_40983 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_40983))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40981){if((e40981 instanceof Error)){
var __t_40984 = e40981;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_40983,__t_40984,null);
} else {
throw e40981;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__40982 = ev;
var ev_id = cljs.core.nth.call(null,vec__40982,(0),null);
var _ = cljs.core.nth.call(null,vec__40982,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__40982,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__40982,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e40990){if((e40990 instanceof Error)){
var __t = e40990;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e40990;

}
}})();
var seq__40991 = cljs.core.seq.call(null,buffered_evs);
var chunk__40992 = null;
var count__40993 = (0);
var i__40994 = (0);
while(true){
if((i__40994 < count__40993)){
var ev = cljs.core._nth.call(null,chunk__40992,i__40994);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__40995 = seq__40991;
var G__40996 = chunk__40992;
var G__40997 = count__40993;
var G__40998 = (i__40994 + (1));
seq__40991 = G__40995;
chunk__40992 = G__40996;
count__40993 = G__40997;
i__40994 = G__40998;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40991);
if(temp__4657__auto__){
var seq__40991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40991__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__40991__$1);
var G__40999 = cljs.core.chunk_rest.call(null,seq__40991__$1);
var G__41000 = c__31798__auto__;
var G__41001 = cljs.core.count.call(null,c__31798__auto__);
var G__41002 = (0);
seq__40991 = G__40999;
chunk__40992 = G__41000;
count__40993 = G__41001;
i__40994 = G__41002;
continue;
} else {
var ev = cljs.core.first.call(null,seq__40991__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__41003 = cljs.core.next.call(null,seq__40991__$1);
var G__41004 = null;
var G__41005 = (0);
var G__41006 = (0);
seq__40991 = G__41003;
chunk__40992 = G__41004;
count__40993 = G__41005;
i__40994 = G__41006;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__41009 = clj;
var _ = cljs.core.nth.call(null,vec__41009,(0),null);
var vec__41010 = cljs.core.nth.call(null,vec__41009,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__41010,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__41010,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__41010,(2),null);
var handshake_ev = vec__41009;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__41009,_,vec__41010,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__41009,_,vec__41010,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31609__auto__,k__31610__auto__){
var self__ = this;
var this__31609__auto____$1 = this;
return cljs.core._lookup.call(null,this__31609__auto____$1,k__31610__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31611__auto__,k41012,else__31612__auto__){
var self__ = this;
var this__31611__auto____$1 = this;
var G__41014 = (((k41012 instanceof cljs.core.Keyword))?k41012.fqn:null);
switch (G__41014) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41012,else__31612__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31623__auto__,writer__31624__auto__,opts__31625__auto__){
var self__ = this;
var this__31623__auto____$1 = this;
var pr_pair__31626__auto__ = ((function (this__31623__auto____$1){
return (function (keyval__31627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,cljs.core.pr_writer,""," ","",opts__31625__auto__,keyval__31627__auto__);
});})(this__31623__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,pr_pair__31626__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__31625__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});


taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41011){
var self__ = this;
var G__41011__$1 = this;
return (new cljs.core.RecordIter((0),G__41011__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31607__auto__){
var self__ = this;
var this__31607__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31603__auto__){
var self__ = this;
var this__31603__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31613__auto__){
var self__ = this;
var this__31613__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31604__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31605__auto__,other__31606__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31618__auto__,k__31619__auto__){
var self__ = this;
var this__31618__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__31619__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31618__auto____$1),self__.__meta),k__31619__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31619__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31616__auto__,k__31617__auto__,G__41011){
var self__ = this;
var this__31616__auto____$1 = this;
var pred__41015 = cljs.core.keyword_identical_QMARK_;
var expr__41016 = k__31617__auto__;
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__41016))){
return (new taoensso.sente.ChWebSocket(G__41011,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__41011,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__41011,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__41011,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__41011,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__41011,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__41011,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__41011,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__41011,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__41011,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__41011,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__41011,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__41011,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41015.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__41016))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__41011,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31617__auto__,G__41011),null));
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
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31621__auto__){
var self__ = this;
var this__31621__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31608__auto__,G__41011){
var self__ = this;
var this__31608__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__41011,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31614__auto__,entry__31615__auto__){
var self__ = this;
var this__31614__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31615__auto__)){
return cljs.core._assoc.call(null,this__31614__auto____$1,cljs.core._nth.call(null,entry__31615__auto__,(0)),cljs.core._nth.call(null,entry__31615__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31614__auto____$1,entry__31615__auto__);
}
});


taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__41018){
var self__ = this;
var map__41019 = p__41018;
var map__41019__$1 = ((((!((map__41019 == null)))?((((map__41019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41019):map__41019);
var opts = map__41019__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__41019__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__41019__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__41019__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___41055 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___41055)){
var cb_uuid_41056 = temp__4657__auto___41055;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_41056], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41021){if((e41021 instanceof Error)){
var __t = e41021;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e41021;

}
}})());

var temp__4657__auto___41057__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___41057__$1)){
var timeout_ms_41058 = temp__4657__auto___41057__$1;
var c__37476__auto___41059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___41059,timeout_ms_41058,temp__4657__auto___41057__$1,cb_uuid_41056,temp__4657__auto___41055,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___41059,timeout_ms_41058,temp__4657__auto___41057__$1,cb_uuid_41056,temp__4657__auto___41055,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_41032){
var state_val_41033 = (state_41032[(1)]);
if((state_val_41033 === (1))){
var inst_41022 = cljs.core.async.timeout.call(null,timeout_ms_41058);
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41032__$1,(2),inst_41022);
} else {
if((state_val_41033 === (2))){
var inst_41025 = (state_41032[(7)]);
var inst_41024 = (state_41032[(2)]);
var inst_41025__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_41032__$1 = (function (){var statearr_41034 = state_41032;
(statearr_41034[(7)] = inst_41025__$1);

(statearr_41034[(8)] = inst_41024);

return statearr_41034;
})();
if(cljs.core.truth_(inst_41025__$1)){
var statearr_41035_41060 = state_41032__$1;
(statearr_41035_41060[(1)] = (3));

} else {
var statearr_41036_41061 = state_41032__$1;
(statearr_41036_41061[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (3))){
var inst_41025 = (state_41032[(7)]);
var inst_41027 = inst_41025.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_41032__$1 = state_41032;
var statearr_41037_41062 = state_41032__$1;
(statearr_41037_41062[(2)] = inst_41027);

(statearr_41037_41062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (4))){
var state_41032__$1 = state_41032;
var statearr_41038_41063 = state_41032__$1;
(statearr_41038_41063[(2)] = null);

(statearr_41038_41063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41033 === (5))){
var inst_41030 = (state_41032[(2)]);
var state_41032__$1 = state_41032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41032__$1,inst_41030);
} else {
return null;
}
}
}
}
}
});})(c__37476__auto___41059,timeout_ms_41058,temp__4657__auto___41057__$1,cb_uuid_41056,temp__4657__auto___41055,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__37461__auto__,c__37476__auto___41059,timeout_ms_41058,temp__4657__auto___41057__$1,cb_uuid_41056,temp__4657__auto___41055,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__37462__auto__ = null;
var taoensso$sente$state_machine__37462__auto____0 = (function (){
var statearr_41042 = [null,null,null,null,null,null,null,null,null];
(statearr_41042[(0)] = taoensso$sente$state_machine__37462__auto__);

(statearr_41042[(1)] = (1));

return statearr_41042;
});
var taoensso$sente$state_machine__37462__auto____1 = (function (state_41032){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_41032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e41043){if((e41043 instanceof Object)){
var ex__37465__auto__ = e41043;
var statearr_41044_41064 = state_41032;
(statearr_41044_41064[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41065 = state_41032;
state_41032 = G__41065;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
taoensso$sente$state_machine__37462__auto__ = function(state_41032){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__37462__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__37462__auto____1.call(this,state_41032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__37462__auto____0;
taoensso$sente$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__37462__auto____1;
return taoensso$sente$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___41059,timeout_ms_41058,temp__4657__auto___41057__$1,cb_uuid_41056,temp__4657__auto___41055,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__37478__auto__ = (function (){var statearr_41045 = f__37477__auto__.call(null);
(statearr_41045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___41059);

return statearr_41045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___41059,timeout_ms_41058,temp__4657__auto___41057__$1,cb_uuid_41056,temp__4657__auto___41055,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e41046){if((e41046 instanceof Error)){
var e = e41046;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__41019,map__41019__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4657__auto___41066 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___41066)){
var cb_uuid_41067 = temp__4657__auto___41066;
var cb_fn_STAR__41068 = (function (){var or__30987__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_41067);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41047){if((e41047 instanceof Error)){
var __t = e41047;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e41047;

}
}}
})();
cb_fn_STAR__41068.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e41046;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___41069 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto___41069)){
var s_41070 = temp__4657__auto___41069;
s_41070.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__30987__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e41051){if((e41051 instanceof Error)){
var e = e41051;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e41051;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__41052 = _QMARK_socket;
(G__41052["onerror"] = ((function (G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
});})(G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__41052["onmessage"] = ((function (G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__41053 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__41053,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__41053,(1),null);
var or__30987__auto__ = (function (){var and__30975__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__30987__auto__,ppstr,vec__41053,clj,_QMARK_cb_uuid,G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__30987__auto__,ppstr,vec__41053,clj,_QMARK_cb_uuid,G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__41052["onopen"] = ((function (G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__41052["onclose"] = ((function (G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__41052,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__41052;
})());
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__31643__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__31643__auto__,writer__31644__auto__){
return cljs.core._write.call(null,writer__31644__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__41013){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__41013),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__41013),null,cljs.core.dissoc.call(null,G__41013,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31609__auto__,k__31610__auto__){
var self__ = this;
var this__31609__auto____$1 = this;
return cljs.core._lookup.call(null,this__31609__auto____$1,k__31610__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31611__auto__,k41072,else__31612__auto__){
var self__ = this;
var this__31611__auto____$1 = this;
var G__41074 = (((k41072 instanceof cljs.core.Keyword))?k41072.fqn:null);
switch (G__41074) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41072,else__31612__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31623__auto__,writer__31624__auto__,opts__31625__auto__){
var self__ = this;
var this__31623__auto____$1 = this;
var pr_pair__31626__auto__ = ((function (this__31623__auto____$1){
return (function (keyval__31627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,cljs.core.pr_writer,""," ","",opts__31625__auto__,keyval__31627__auto__);
});})(this__31623__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,pr_pair__31626__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__31625__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41071){
var self__ = this;
var G__41071__$1 = this;
return (new cljs.core.RecordIter((0),G__41071__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31607__auto__){
var self__ = this;
var this__31607__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31603__auto__){
var self__ = this;
var this__31603__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31613__auto__){
var self__ = this;
var this__31613__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31604__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31605__auto__,other__31606__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31618__auto__,k__31619__auto__){
var self__ = this;
var this__31618__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__31619__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31618__auto____$1),self__.__meta),k__31619__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31619__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31616__auto__,k__31617__auto__,G__41071){
var self__ = this;
var this__31616__auto____$1 = this;
var pred__41075 = cljs.core.keyword_identical_QMARK_;
var expr__41076 = k__31617__auto__;
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(G__41071,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__41071,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__41071,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__41071,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__41071,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__41071,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__41071,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__41071,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__41071,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__41071,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41075.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__41076))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__41071,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31617__auto__,G__41071),null));
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
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31621__auto__){
var self__ = this;
var this__31621__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31608__auto__,G__41071){
var self__ = this;
var this__31608__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__41071,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31614__auto__,entry__31615__auto__){
var self__ = this;
var this__31614__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31615__auto__)){
return cljs.core._assoc.call(null,this__31614__auto____$1,cljs.core._nth.call(null,entry__31615__auto__,(0)),cljs.core._nth.call(null,entry__31615__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31614__auto____$1,entry__31615__auto__);
}
});


taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__41078){
var self__ = this;
var map__41079 = p__41078;
var map__41079__$1 = ((((!((map__41079 == null)))?((((map__41079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41079):map__41079);
var opts = map__41079__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__41079__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__41079__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__41079__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__41079,map__41079__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__41079,map__41079__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__41079,map__41079__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__41081){
var map__41085 = p__41081;
var map__41085__$1 = ((((!((map__41085 == null)))?((((map__41085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41085):map__41085);
var _QMARK_error = cljs.core.get.call(null,map__41085__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__41085__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__41087 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__41087,(0),null);
var _ = cljs.core.nth.call(null,vec__41087,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__41087,resp_clj,_,map__41085,map__41085__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__41079,map__41079__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__41087,resp_clj,_,map__41085,map__41085__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__41079,map__41079__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__41079,map__41079__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___41103 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto___41103)){
var x_41104 = temp__4657__auto___41103;
x_41104.abort();
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__41095){
var map__41099 = p__41095;
var map__41099__$1 = ((((!((map__41099 == null)))?((((map__41099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41099):map__41099);
var _QMARK_error = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__41101 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__41101,(0),null);
var _ = cljs.core.nth.call(null,vec__41101,(1),null);
var or__30987__auto___41105 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__30987__auto___41105)){
} else {
var buffered_evs_41106 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_41106);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$poll_fn.call(null,(0));
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__31643__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__31643__auto__,writer__31644__auto__){
return cljs.core._write.call(null,writer__31644__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__41073){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__41073),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__41073),null,cljs.core.dissoc.call(null,G__41073,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__41108 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41108) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___41124 = arguments.length;
var i__32058__auto___41125 = (0);
while(true){
if((i__32058__auto___41125 < len__32057__auto___41124)){
args__32064__auto__.push((arguments[i__32058__auto___41125]));

var G__41126 = (i__32058__auto___41125 + (1));
i__32058__auto___41125 = G__41126;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__41113){
var vec__41114 = p__41113;
var map__41115 = cljs.core.nth.call(null,vec__41114,(0),null);
var map__41115__$1 = ((((!((map__41115 == null)))?((((map__41115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41115):map__41115);
var opts = map__41115__$1;
var ajax_opts = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__30987__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__41115__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__41114,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41117){if((e41117 instanceof Error)){
var __t = e41117;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e41117;

}
}})())){
} else {
throw (new Error("Assert failed: (have? [:in #{:ws :ajax :auto}] type)"));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41118){if((e41118 instanceof Error)){
var __t = e41118;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e41118;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__30987__auto__ = host;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__30987__auto__ = path;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__30987__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__30987__auto__){
return or__30987__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__41119 = ev;
var id = cljs.core.nth.call(null,vec__41119,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__41119,(1),null);
var __x_41127 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e41120){if((e41120 instanceof Error)){
var __t = e41120;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__41110#] (not= p1__41110# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e41120;

}
}})();
try{if(((function (__x_41127,vec__41119,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__41110_SHARP_){
return cljs.core.not_EQ_.call(null,p1__41110_SHARP_,"chsk");
});})(__x_41127,vec__41119,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_41127)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41121){if((e41121 instanceof Error)){
var __t_41128 = e41121;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__41110#] (not= p1__41110# \"chsk\")) (namespace id))",__x_41127,__t_41128,null);
} else {
throw e41121;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__30987__auto__ = (function (){var and__30975__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__30975__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
var and__30975__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__30975__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__30975__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__41123 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__41123,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__41123,(1),null);
var ev__$1 = vec__41123;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__41114,map__41115,map__41115__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq41111){
var G__41112 = cljs.core.first.call(null,seq41111);
var seq41111__$1 = cljs.core.next.call(null,seq41111);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41112,seq41111__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__41335 = opts;
var map__41335__$1 = ((((!((map__41335 == null)))?((((map__41335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41335):map__41335);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__41335__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__41335__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__37476__auto___41541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_41466){
var state_val_41467 = (state_41466[(1)]);
if((state_val_41467 === (7))){
var inst_41462 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
var statearr_41468_41542 = state_41466__$1;
(statearr_41468_41542[(2)] = inst_41462);

(statearr_41468_41542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (20))){
var inst_41344 = (state_41466[(7)]);
var inst_41371 = (state_41466[(8)]);
var inst_41346 = (state_41466[(9)]);
var inst_41370 = (state_41466[(10)]);
var inst_41345 = (state_41466[(11)]);
var inst_41343 = (state_41466[(12)]);
var inst_41381 = (function (){var vec__41338 = inst_41343;
var v = inst_41344;
var p = inst_41345;
var stop_QMARK_ = inst_41346;
var map__41349 = inst_41370;
var event_msg = inst_41370;
var event = inst_41371;
return ((function (vec__41338,v,p,stop_QMARK_,map__41349,event_msg,event,inst_41344,inst_41371,inst_41346,inst_41370,inst_41345,inst_41343,state_val_41467,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__41338,v,p,stop_QMARK_,map__41349,event_msg,event,inst_41344,inst_41371,inst_41346,inst_41370,inst_41345,inst_41343,state_val_41467,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_41382 = (new cljs.core.Delay(inst_41381,null));
var inst_41383 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_41382,null);
var state_41466__$1 = state_41466;
var statearr_41469_41543 = state_41466__$1;
(statearr_41469_41543[(2)] = inst_41383);

(statearr_41469_41543[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (27))){
var inst_41370 = (state_41466[(10)]);
var inst_41388 = (state_41466[(2)]);
var inst_41389 = "(server-event-msg? event-msg)";
var inst_41390 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_41389,inst_41370,inst_41388,null);
var state_41466__$1 = state_41466;
var statearr_41470_41544 = state_41466__$1;
(statearr_41470_41544[(2)] = inst_41390);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (1))){
var state_41466__$1 = state_41466;
var statearr_41471_41545 = state_41466__$1;
(statearr_41471_41545[(2)] = null);

(statearr_41471_41545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (24))){
var state_41466__$1 = state_41466;
var statearr_41472_41546 = state_41466__$1;
(statearr_41472_41546[(2)] = null);

(statearr_41472_41546[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (39))){
var state_41466__$1 = state_41466;
var statearr_41473_41547 = state_41466__$1;
(statearr_41473_41547[(2)] = null);

(statearr_41473_41547[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (46))){
var inst_41435 = (state_41466[(13)]);
var inst_41443 = (state_41466[(2)]);
var inst_41444 = [inst_41443,null];
var inst_41445 = (new cljs.core.PersistentVector(null,2,(5),inst_41435,inst_41444,null));
var state_41466__$1 = state_41466;
var statearr_41474_41548 = state_41466__$1;
(statearr_41474_41548[(2)] = inst_41445);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (4))){
var inst_41346 = (state_41466[(9)]);
var inst_41345 = (state_41466[(11)]);
var inst_41343 = (state_41466[(12)]);
var inst_41343__$1 = (state_41466[(2)]);
var inst_41344 = cljs.core.nth.call(null,inst_41343__$1,(0),null);
var inst_41345__$1 = cljs.core.nth.call(null,inst_41343__$1,(1),null);
var inst_41346__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_41345__$1,ch_ctrl);
var state_41466__$1 = (function (){var statearr_41475 = state_41466;
(statearr_41475[(7)] = inst_41344);

(statearr_41475[(9)] = inst_41346__$1);

(statearr_41475[(11)] = inst_41345__$1);

(statearr_41475[(12)] = inst_41343__$1);

return statearr_41475;
})();
if(cljs.core.truth_(inst_41346__$1)){
var statearr_41476_41549 = state_41466__$1;
(statearr_41476_41549[(1)] = (5));

} else {
var statearr_41477_41550 = state_41466__$1;
(statearr_41477_41550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (15))){
var inst_41344 = (state_41466[(7)]);
var state_41466__$1 = state_41466;
var statearr_41478_41551 = state_41466__$1;
(statearr_41478_41551[(2)] = inst_41344);

(statearr_41478_41551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (48))){
var state_41466__$1 = state_41466;
var statearr_41479_41552 = state_41466__$1;
(statearr_41479_41552[(2)] = null);

(statearr_41479_41552[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (21))){
var state_41466__$1 = state_41466;
var statearr_41480_41553 = state_41466__$1;
(statearr_41480_41553[(2)] = null);

(statearr_41480_41553[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (31))){
var inst_41399 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
var statearr_41481_41554 = state_41466__$1;
(statearr_41481_41554[(2)] = inst_41399);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (32))){
var inst_41416 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
var statearr_41482_41555 = state_41466__$1;
(statearr_41482_41555[(2)] = inst_41416);

(statearr_41482_41555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (40))){
var inst_41459 = (state_41466[(2)]);
var state_41466__$1 = (function (){var statearr_41483 = state_41466;
(statearr_41483[(14)] = inst_41459);

return statearr_41483;
})();
var statearr_41484_41556 = state_41466__$1;
(statearr_41484_41556[(2)] = null);

(statearr_41484_41556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (33))){
var inst_41370 = (state_41466[(10)]);
var inst_41403 = (state_41466[(2)]);
var inst_41404 = "(client-event-msg? event-msg)";
var inst_41405 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_41404,inst_41370,inst_41403,null);
var state_41466__$1 = state_41466;
var statearr_41485_41557 = state_41466__$1;
(statearr_41485_41557[(2)] = inst_41405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (13))){
var inst_41362 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
var statearr_41486_41558 = state_41466__$1;
(statearr_41486_41558[(2)] = inst_41362);

(statearr_41486_41558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (22))){
var inst_41386 = (state_41466[(2)]);
var state_41466__$1 = (function (){var statearr_41487 = state_41466;
(statearr_41487[(15)] = inst_41386);

return statearr_41487;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_41488_41559 = state_41466__$1;
(statearr_41488_41559[(1)] = (23));

} else {
var statearr_41489_41560 = state_41466__$1;
(statearr_41489_41560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (36))){
var inst_41412 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_41466__$1 = state_41466;
var statearr_41490_41561 = state_41466__$1;
(statearr_41490_41561[(2)] = inst_41412);

(statearr_41490_41561[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (41))){
var inst_41449 = (state_41466[(16)]);
var inst_41447 = (state_41466[(17)]);
var inst_41447__$1 = (state_41466[(2)]);
var inst_41448 = cljs.core.nth.call(null,inst_41447__$1,(0),null);
var inst_41449__$1 = cljs.core.nth.call(null,inst_41447__$1,(1),null);
var state_41466__$1 = (function (){var statearr_41491 = state_41466;
(statearr_41491[(16)] = inst_41449__$1);

(statearr_41491[(17)] = inst_41447__$1);

(statearr_41491[(18)] = inst_41448);

return statearr_41491;
})();
if(cljs.core.truth_(inst_41449__$1)){
var statearr_41492_41562 = state_41466__$1;
(statearr_41492_41562[(1)] = (47));

} else {
var statearr_41493_41563 = state_41466__$1;
(statearr_41493_41563[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41466,(42),Error,null,(41));
var inst_41435 = cljs.core.PersistentVector.EMPTY_NODE;
var state_41466__$1 = (function (){var statearr_41494 = state_41466;
(statearr_41494[(13)] = inst_41435);

return statearr_41494;
})();
if(cljs.core.truth_(error_handler)){
var statearr_41495_41564 = state_41466__$1;
(statearr_41495_41564[(1)] = (44));

} else {
var statearr_41496_41565 = state_41466__$1;
(statearr_41496_41565[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (29))){
var inst_41370 = (state_41466[(10)]);
var state_41466__$1 = state_41466;
var statearr_41497_41566 = state_41466__$1;
(statearr_41497_41566[(2)] = inst_41370);

(statearr_41497_41566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (44))){
var inst_41370 = (state_41466[(10)]);
var inst_41425 = (state_41466[(19)]);
var inst_41437 = error_handler.call(null,inst_41425,inst_41370);
var state_41466__$1 = state_41466;
var statearr_41498_41567 = state_41466__$1;
(statearr_41498_41567[(2)] = inst_41437);

(statearr_41498_41567[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (6))){
var inst_41344 = (state_41466[(7)]);
var inst_41352 = (inst_41344 == null);
var inst_41353 = cljs.core.not.call(null,inst_41352);
var state_41466__$1 = state_41466;
if(inst_41353){
var statearr_41499_41568 = state_41466__$1;
(statearr_41499_41568[(1)] = (8));

} else {
var statearr_41500_41569 = state_41466__$1;
(statearr_41500_41569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (28))){
var inst_41370 = (state_41466[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41466,(27),Error,null,(26));
var inst_41394 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_41370);
var state_41466__$1 = state_41466;
if(cljs.core.truth_(inst_41394)){
var statearr_41501_41570 = state_41466__$1;
(statearr_41501_41570[(1)] = (29));

} else {
var statearr_41502_41571 = state_41466__$1;
(statearr_41502_41571[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (25))){
var inst_41379 = (state_41466[(20)]);
var inst_41418 = (state_41466[(2)]);
var inst_41419 = event_msg_handler.call(null,inst_41418);
var inst_41420 = [inst_41419,null];
var inst_41421 = (new cljs.core.PersistentVector(null,2,(5),inst_41379,inst_41420,null));
var state_41466__$1 = state_41466;
var statearr_41503_41572 = state_41466__$1;
(statearr_41503_41572[(2)] = inst_41421);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (34))){
var inst_41370 = (state_41466[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41466,(33),Error,null,(32));
var inst_41409 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_41370);
var state_41466__$1 = state_41466;
if(cljs.core.truth_(inst_41409)){
var statearr_41504_41573 = state_41466__$1;
(statearr_41504_41573[(1)] = (35));

} else {
var statearr_41505_41574 = state_41466__$1;
(statearr_41505_41574[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (17))){
var inst_41423 = (state_41466[(21)]);
var inst_41425 = (state_41466[(19)]);
var inst_41423__$1 = (state_41466[(2)]);
var inst_41424 = cljs.core.nth.call(null,inst_41423__$1,(0),null);
var inst_41425__$1 = cljs.core.nth.call(null,inst_41423__$1,(1),null);
var state_41466__$1 = (function (){var statearr_41506 = state_41466;
(statearr_41506[(22)] = inst_41424);

(statearr_41506[(21)] = inst_41423__$1);

(statearr_41506[(19)] = inst_41425__$1);

return statearr_41506;
})();
if(cljs.core.truth_(inst_41425__$1)){
var statearr_41507_41575 = state_41466__$1;
(statearr_41507_41575[(1)] = (38));

} else {
var statearr_41508_41576 = state_41466__$1;
(statearr_41508_41576[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (3))){
var inst_41464 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41466__$1,inst_41464);
} else {
if((state_val_41467 === (12))){
var state_41466__$1 = state_41466;
var statearr_41509_41577 = state_41466__$1;
(statearr_41509_41577[(2)] = false);

(statearr_41509_41577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (2))){
var inst_41339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41340 = [ch_recv,ch_ctrl];
var inst_41341 = (new cljs.core.PersistentVector(null,2,(5),inst_41339,inst_41340,null));
var state_41466__$1 = state_41466;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41466__$1,(4),inst_41341);
} else {
if((state_val_41467 === (23))){
var state_41466__$1 = state_41466;
var statearr_41510_41578 = state_41466__$1;
(statearr_41510_41578[(2)] = null);

(statearr_41510_41578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (47))){
var inst_41449 = (state_41466[(16)]);
var inst_41344 = (state_41466[(7)]);
var inst_41447 = (state_41466[(17)]);
var inst_41371 = (state_41466[(8)]);
var inst_41448 = (state_41466[(18)]);
var inst_41423 = (state_41466[(21)]);
var inst_41346 = (state_41466[(9)]);
var inst_41370 = (state_41466[(10)]);
var inst_41345 = (state_41466[(11)]);
var inst_41425 = (state_41466[(19)]);
var inst_41343 = (state_41466[(12)]);
var inst_41451 = (function (){var p = inst_41345;
var _QMARK_error = inst_41425;
var map__41349 = inst_41370;
var v = inst_41344;
var vec__41350 = inst_41423;
var _ = inst_41448;
var e2 = inst_41449;
var vec__41427 = inst_41447;
var _QMARK_error2 = inst_41449;
var event_msg = inst_41370;
var e = inst_41425;
var temp__4657__auto__ = inst_41449;
var event = inst_41371;
var vec__41338 = inst_41343;
var stop_QMARK_ = inst_41346;
return ((function (p,_QMARK_error,map__41349,v,vec__41350,_,e2,vec__41427,_QMARK_error2,event_msg,e,temp__4657__auto__,event,vec__41338,stop_QMARK_,inst_41449,inst_41344,inst_41447,inst_41371,inst_41448,inst_41423,inst_41346,inst_41370,inst_41345,inst_41425,inst_41343,state_val_41467,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,map__41349,v,vec__41350,_,e2,vec__41427,_QMARK_error2,event_msg,e,temp__4657__auto__,event,vec__41338,stop_QMARK_,inst_41449,inst_41344,inst_41447,inst_41371,inst_41448,inst_41423,inst_41346,inst_41370,inst_41345,inst_41425,inst_41343,state_val_41467,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_41452 = (new cljs.core.Delay(inst_41451,null));
var inst_41453 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_41452,null);
var state_41466__$1 = state_41466;
var statearr_41511_41579 = state_41466__$1;
(statearr_41511_41579[(2)] = inst_41453);

(statearr_41511_41579[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (35))){
var inst_41370 = (state_41466[(10)]);
var state_41466__$1 = state_41466;
var statearr_41512_41580 = state_41466__$1;
(statearr_41512_41580[(2)] = inst_41370);

(statearr_41512_41580[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41466,(18),Error,null,(17));
var inst_41379 = cljs.core.PersistentVector.EMPTY_NODE;
var state_41466__$1 = (function (){var statearr_41513 = state_41466;
(statearr_41513[(20)] = inst_41379);

return statearr_41513;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_41514_41581 = state_41466__$1;
(statearr_41514_41581[(1)] = (20));

} else {
var statearr_41515_41582 = state_41466__$1;
(statearr_41515_41582[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (11))){
var state_41466__$1 = state_41466;
var statearr_41516_41583 = state_41466__$1;
(statearr_41516_41583[(2)] = true);

(statearr_41516_41583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (9))){
var state_41466__$1 = state_41466;
var statearr_41517_41584 = state_41466__$1;
(statearr_41517_41584[(2)] = false);

(statearr_41517_41584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (5))){
var state_41466__$1 = state_41466;
var statearr_41518_41585 = state_41466__$1;
(statearr_41518_41585[(2)] = null);

(statearr_41518_41585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (14))){
var inst_41344 = (state_41466[(7)]);
var inst_41367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41344);
var state_41466__$1 = state_41466;
var statearr_41519_41586 = state_41466__$1;
(statearr_41519_41586[(2)] = inst_41367);

(statearr_41519_41586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (45))){
var inst_41344 = (state_41466[(7)]);
var inst_41424 = (state_41466[(22)]);
var inst_41371 = (state_41466[(8)]);
var inst_41423 = (state_41466[(21)]);
var inst_41346 = (state_41466[(9)]);
var inst_41370 = (state_41466[(10)]);
var inst_41345 = (state_41466[(11)]);
var inst_41425 = (state_41466[(19)]);
var inst_41343 = (state_41466[(12)]);
var inst_41439 = (function (){var p = inst_41345;
var _QMARK_error = inst_41425;
var map__41349 = inst_41370;
var v = inst_41344;
var temp__4655__auto__ = error_handler;
var vec__41350 = inst_41423;
var _ = inst_41424;
var event_msg = inst_41370;
var e = inst_41425;
var temp__4657__auto__ = inst_41425;
var event = inst_41371;
var vec__41338 = inst_41343;
var stop_QMARK_ = inst_41346;
return ((function (p,_QMARK_error,map__41349,v,temp__4655__auto__,vec__41350,_,event_msg,e,temp__4657__auto__,event,vec__41338,stop_QMARK_,inst_41344,inst_41424,inst_41371,inst_41423,inst_41346,inst_41370,inst_41345,inst_41425,inst_41343,state_val_41467,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,map__41349,v,temp__4655__auto__,vec__41350,_,event_msg,e,temp__4657__auto__,event,vec__41338,stop_QMARK_,inst_41344,inst_41424,inst_41371,inst_41423,inst_41346,inst_41370,inst_41345,inst_41425,inst_41343,state_val_41467,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_41440 = (new cljs.core.Delay(inst_41439,null));
var inst_41441 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/michaelgough/game/script/figwheel.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_41440,null);
var state_41466__$1 = state_41466;
var statearr_41520_41587 = state_41466__$1;
(statearr_41520_41587[(2)] = inst_41441);

(statearr_41520_41587[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (26))){
var inst_41401 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
var statearr_41521_41588 = state_41466__$1;
(statearr_41521_41588[(2)] = inst_41401);

(statearr_41521_41588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (16))){
var inst_41370 = (state_41466[(10)]);
var inst_41370__$1 = (state_41466[(2)]);
var inst_41371 = cljs.core.get.call(null,inst_41370__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_41466__$1 = (function (){var statearr_41522 = state_41466;
(statearr_41522[(8)] = inst_41371);

(statearr_41522[(10)] = inst_41370__$1);

return statearr_41522;
})();
var statearr_41523_41589 = state_41466__$1;
(statearr_41523_41589[(2)] = null);

(statearr_41523_41589[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (38))){
var state_41466__$1 = state_41466;
var statearr_41524_41590 = state_41466__$1;
(statearr_41524_41590[(2)] = null);

(statearr_41524_41590[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (30))){
var inst_41397 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_41466__$1 = state_41466;
var statearr_41525_41591 = state_41466__$1;
(statearr_41525_41591[(2)] = inst_41397);

(statearr_41525_41591[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (10))){
var inst_41365 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
if(cljs.core.truth_(inst_41365)){
var statearr_41526_41592 = state_41466__$1;
(statearr_41526_41592[(1)] = (14));

} else {
var statearr_41527_41593 = state_41466__$1;
(statearr_41527_41593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (18))){
var inst_41372 = (state_41466[(2)]);
var inst_41373 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41374 = [null,inst_41372];
var inst_41375 = (new cljs.core.PersistentVector(null,2,(5),inst_41373,inst_41374,null));
var state_41466__$1 = state_41466;
var statearr_41528_41594 = state_41466__$1;
(statearr_41528_41594[(2)] = inst_41375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (42))){
var inst_41428 = (state_41466[(2)]);
var inst_41429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41430 = [null,inst_41428];
var inst_41431 = (new cljs.core.PersistentVector(null,2,(5),inst_41429,inst_41430,null));
var state_41466__$1 = state_41466;
var statearr_41529_41595 = state_41466__$1;
(statearr_41529_41595[(2)] = inst_41431);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (37))){
var inst_41414 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
var statearr_41530_41596 = state_41466__$1;
(statearr_41530_41596[(2)] = inst_41414);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (8))){
var inst_41344 = (state_41466[(7)]);
var inst_41355 = inst_41344.cljs$lang$protocol_mask$partition0$;
var inst_41356 = (inst_41355 & (64));
var inst_41357 = inst_41344.cljs$core$ISeq$;
var inst_41358 = (inst_41356) || (inst_41357);
var state_41466__$1 = state_41466;
if(cljs.core.truth_(inst_41358)){
var statearr_41531_41597 = state_41466__$1;
(statearr_41531_41597[(1)] = (11));

} else {
var statearr_41532_41598 = state_41466__$1;
(statearr_41532_41598[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41467 === (49))){
var inst_41456 = (state_41466[(2)]);
var state_41466__$1 = state_41466;
var statearr_41533_41599 = state_41466__$1;
(statearr_41533_41599[(2)] = inst_41456);

(statearr_41533_41599[(1)] = (40));


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
});})(c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__37461__auto__,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto____0 = (function (){
var statearr_41537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41537[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto__);

(statearr_41537[(1)] = (1));

return statearr_41537;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto____1 = (function (state_41466){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_41466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e41538){if((e41538 instanceof Object)){
var ex__37465__auto__ = e41538;
var statearr_41539_41600 = state_41466;
(statearr_41539_41600[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41601 = state_41466;
state_41466 = G__41601;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto__ = function(state_41466){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto____1.call(this,state_41466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__37478__auto__ = (function (){var statearr_41540 = f__37477__auto__.call(null);
(statearr_41540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___41541);

return statearr_41540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___41541,map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__41335,map__41335__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___41609 = arguments.length;
var i__32058__auto___41610 = (0);
while(true){
if((i__32058__auto___41610 < len__32057__auto___41609)){
args__32064__auto__.push((arguments[i__32058__auto___41610]));

var G__41611 = (i__32058__auto___41610 + (1));
i__32058__auto___41610 = G__41611;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__41605){
var vec__41606 = p__41605;
var map__41607 = cljs.core.nth.call(null,vec__41606,(0),null);
var map__41607__$1 = ((((!((map__41607 == null)))?((((map__41607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41607):map__41607);
var opts = map__41607__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__41607__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__41607__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq41602){
var G__41603 = cljs.core.first.call(null,seq41602);
var seq41602__$1 = cljs.core.next.call(null,seq41602);
var G__41604 = cljs.core.first.call(null,seq41602__$1);
var seq41602__$2 = cljs.core.next.call(null,seq41602__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41603,G__41604,seq41602__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___41619 = arguments.length;
var i__32058__auto___41620 = (0);
while(true){
if((i__32058__auto___41620 < len__32057__auto___41619)){
args__32064__auto__.push((arguments[i__32058__auto___41620]));

var G__41621 = (i__32058__auto___41620 + (1));
i__32058__auto___41620 = G__41621;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__41615){
var vec__41616 = p__41615;
var map__41617 = cljs.core.nth.call(null,vec__41616,(0),null);
var map__41617__$1 = ((((!((map__41617 == null)))?((((map__41617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41617):map__41617);
var opts = map__41617__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__41617__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__41617__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq41612){
var G__41613 = cljs.core.first.call(null,seq41612);
var seq41612__$1 = cljs.core.next.call(null,seq41612);
var G__41614 = cljs.core.first.call(null,seq41612__$1);
var seq41612__$2 = cljs.core.next.call(null,seq41612__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41613,G__41614,seq41612__$2);
});
taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__41622,websocket_QMARK_){
var map__41625 = p__41622;
var map__41625__$1 = ((((!((map__41625 == null)))?((((map__41625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41625):map__41625);
var location = map__41625__$1;
var adjusted_protocol = cljs.core.get.call(null,map__41625__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__41625__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__41625__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__30987__auto__ = path;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1487610715090