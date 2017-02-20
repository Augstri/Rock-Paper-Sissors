// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('clojure.set');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.om_plumbing');
goog.require('om.next.impl.parser');
goog.require('om.next.protocols');
goog.require('untangled.dom');
goog.require('untangled.client.mutations');
goog.require('om.util');
goog.require('om.next');
goog.require('clojure.walk');








/**
 * Test if the given bit of state is a data fetch state-tracking marker
 */
untangled.client.impl.data_fetch.data_state_QMARK_ = (function untangled$client$impl$data_fetch$data_state_QMARK_(state){
return cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040));
});
var is_kind_QMARK_ = (function untangled$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state))){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040).cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
untangled.client.impl.data_fetch.ready_QMARK_ = (function untangled$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795));
});

/**
 * Test if the given item is a data state marker in the loading state
 */
untangled.client.impl.data_fetch.loading_QMARK_ = (function untangled$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
});

/**
 * Test if the given item is a data state marker in the failed state
 */
untangled.client.impl.data_fetch.failed_QMARK_ = (function untangled$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762));
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
untangled.client.impl.data_fetch.place_load_markers = (function untangled$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
var seq__43695 = cljs.core.seq.call(null,items_to_load);
var chunk__43696 = null;
var count__43697 = (0);
var i__43698 = (0);
while(true){
if((i__43698 < count__43697)){
var item = cljs.core._nth.call(null,chunk__43696,i__43698);
var i_43699 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_43700 = ((function (seq__43695,chunk__43696,count__43697,i__43698,i_43699,item){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_43699))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_43699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_43699], null));
} else {
return state;
}
});})(seq__43695,chunk__43696,count__43697,i__43698,i_43699,item))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__43695,chunk__43696,count__43697,i__43698,i_43699,place_marker_43700,item){
return (function (s){
return cljs.core.update.call(null,place_marker_43700.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_43699));
});})(seq__43695,chunk__43696,count__43697,i__43698,i_43699,place_marker_43700,item))
);

var G__43701 = seq__43695;
var G__43702 = chunk__43696;
var G__43703 = count__43697;
var G__43704 = (i__43698 + (1));
seq__43695 = G__43701;
chunk__43696 = G__43702;
count__43697 = G__43703;
i__43698 = G__43704;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43695);
if(temp__4657__auto__){
var seq__43695__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43695__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__43695__$1);
var G__43705 = cljs.core.chunk_rest.call(null,seq__43695__$1);
var G__43706 = c__31798__auto__;
var G__43707 = cljs.core.count.call(null,c__31798__auto__);
var G__43708 = (0);
seq__43695 = G__43705;
chunk__43696 = G__43706;
count__43697 = G__43707;
i__43698 = G__43708;
continue;
} else {
var item = cljs.core.first.call(null,seq__43695__$1);
var i_43709 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_43710 = ((function (seq__43695,chunk__43696,count__43697,i__43698,i_43709,item,seq__43695__$1,temp__4657__auto__){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_43709))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_43709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_43709], null));
} else {
return state;
}
});})(seq__43695,chunk__43696,count__43697,i__43698,i_43709,item,seq__43695__$1,temp__4657__auto__))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__43695,chunk__43696,count__43697,i__43698,i_43709,place_marker_43710,item,seq__43695__$1,temp__4657__auto__){
return (function (s){
return cljs.core.update.call(null,place_marker_43710.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_43709));
});})(seq__43695,chunk__43696,count__43697,i__43698,i_43709,place_marker_43710,item,seq__43695__$1,temp__4657__auto__))
);

var G__43711 = cljs.core.next.call(null,seq__43695__$1);
var G__43712 = null;
var G__43713 = (0);
var G__43714 = (0);
seq__43695 = G__43711;
chunk__43696 = G__43712;
count__43697 = G__43713;
i__43698 = G__43714;
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
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_parallel_loading = (function untangled$client$impl$data_fetch$mark_parallel_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var queued_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var items_to_load = cljs.core.filter.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),queued_items);
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292)),queued_items));

var iter__31767__auto__ = ((function (state,queued_items,items_to_load){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__43719(s__43720){
return (new cljs.core.LazySeq(null,((function (state,queued_items,items_to_load){
return (function (){
var s__43720__$1 = s__43720;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43720__$1);
if(temp__4657__auto__){
var s__43720__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43720__$2)){
var c__31765__auto__ = cljs.core.chunk_first.call(null,s__43720__$2);
var size__31766__auto__ = cljs.core.count.call(null,c__31765__auto__);
var b__43722 = cljs.core.chunk_buffer.call(null,size__31766__auto__);
if((function (){var i__43721 = (0);
while(true){
if((i__43721 < size__31766__auto__)){
var item = cljs.core._nth.call(null,c__31765__auto__,i__43721);
cljs.core.chunk_append.call(null,b__43722,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__43723 = (i__43721 + (1));
i__43721 = G__43723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43722),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__43719.call(null,cljs.core.chunk_rest.call(null,s__43720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43722),null);
}
} else {
var item = cljs.core.first.call(null,s__43720__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__43719.call(null,cljs.core.rest.call(null,s__43720__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,items_to_load))
,null,null));
});})(state,queued_items,items_to_load))
;
return iter__31767__auto__.call(null,items_to_load);
}
});
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
untangled.client.impl.data_fetch.dedupe_by = (function untangled$client$impl$data_fetch$dedupe_by(var_args){
var args43724 = [];
var len__32057__auto___43727 = arguments.length;
var i__32058__auto___43728 = (0);
while(true){
if((i__32058__auto___43728 < len__32057__auto___43727)){
args43724.push((arguments[i__32058__auto___43728]));

var G__43729 = (i__32058__auto___43728 + (1));
i__32058__auto___43728 = G__43729;
continue;
} else {
}
break;
}

var G__43726 = args43724.length;
switch (G__43726) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43724.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__43731 = null;
var G__43731__0 = (function (){
return rf.call(null);
});
var G__43731__1 = (function (result){
return rf.call(null,result);
});
var G__43731__2 = (function (result,input){
var input_keys = cljs.core.set.call(null,keys_fn.call(null,input));
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.deref.call(null,keys_seen),input_keys))){
cljs.core._vreset_BANG_.call(null,keys_seen,clojure.set.union.call(null,cljs.core._deref.call(null,keys_seen),input_keys));

return rf.call(null,result,input);
} else {
return result;
}
});
G__43731 = function(result,input){
switch(arguments.length){
case 0:
return G__43731__0.call(this);
case 1:
return G__43731__1.call(this,result);
case 2:
return G__43731__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43731.cljs$core$IFn$_invoke$arity$0 = G__43731__0;
G__43731.cljs$core$IFn$_invoke$arity$1 = G__43731__1;
G__43731.cljs$core$IFn$_invoke$arity$2 = G__43731__2;
return G__43731;
})()
;})(keys_seen))
});
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,keys_fn),coll);
});

untangled.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;
untangled.client.impl.data_fetch.join_key_or_nil = (function untangled$client$impl$data_fetch$join_key_or_nil(expr){
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var join_key_or_ident = om.util.join_key.call(null,expr);
if(om.util.ident_QMARK_.call(null,join_key_or_ident)){
return cljs.core.first.call(null,join_key_or_ident);
} else {
return join_key_or_ident;
}
} else {
return null;
}
});
untangled.client.impl.data_fetch.split_items_ready_to_load = (function untangled$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var items_to_load_now = cljs.core.set.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,(function (item){
return cljs.core.map.call(null,untangled.client.impl.data_fetch.join_key_or_nil,untangled.client.impl.data_fetch.data_query.call(null,item));
}),items_ready_to_load));
var items_to_defer = cljs.core.vec.call(null,cljs.core.remove.call(null,items_to_load_now,items_ready_to_load));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_to_load_now,items_to_defer], null);
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_loading = (function untangled$client$impl$data_fetch$mark_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var items_ready_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var vec__43733 = untangled.client.impl.data_fetch.split_items_ready_to_load.call(null,items_ready_to_load);
var items_to_load_now = cljs.core.nth.call(null,vec__43733,(0),null);
var items_to_defer = cljs.core.nth.call(null,vec__43733,(1),null);
if(cljs.core.empty_QMARK_.call(null,items_to_load_now)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load_now);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),items_to_defer);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,items_to_load_now),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),items_to_load_now], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args43734 = [];
var len__32057__auto___43737 = arguments.length;
var i__32058__auto___43738 = (0);
while(true){
if((i__32058__auto___43738 < len__32057__auto___43737)){
args43734.push((arguments[i__32058__auto___43738]));

var G__43739 = (i__32058__auto___43738 + (1));
i__32058__auto___43738 = G__43739;
continue;
} else {
}
break;
}

var G__43736 = args43734.length;
switch (G__43736) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43734.length)].join('')));

}
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return untangled.client.impl.data_fetch.make_data_state.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.call(null,untangled.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("INVALID DATA STATE TYPE: "),cljs.core.str(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

untangled.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;
/**
 * Get the query for items that are ready to load into the given app state. Can be called any number of times
 *   (side effect free).
 */
untangled.client.impl.data_fetch.get_ready_query = (function untangled$client$impl$data_fetch$get_ready_query(state){
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items-to-load","items-to-load",-1811352068),cljs.core.vec.call(null,cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_query,items_to_load))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__43742,elision_set){
var map__43745 = p__43742;
var map__43745__$1 = ((((!((map__43745 == null)))?((((map__43745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43745):map__43745);
var ast = map__43745__$1;
var key = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = cljs.core.contains_QMARK_.call(null,elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_.call(null,elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count.call(null,children) <= (2)))){
untangled.client.logging.warn.call(null,"Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.call(null,union_key));
} else {
}

return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__43745,map__43745__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (union_elision_QMARK_,map__43745,map__43745__$1,ast,key,union_key,children){
return (function (p1__43741_SHARP_){
return untangled$client$impl$data_fetch$elide_ast_nodes.call(null,p1__43741_SHARP_,elision_set);
});})(union_elision_QMARK_,map__43745,map__43745__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__43745,map__43745__$1,ast,key,union_key,children))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
untangled.client.impl.data_fetch.inject_query_params = (function untangled$client$impl$data_fetch$inject_query_params(ast,params){
var top_level_keys = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set.call(null,cljs.core.keys.call(null,params));
var unknown_keys = clojure.set.difference.call(null,param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_.call(null,unknown_keys))){
untangled.client.logging.error.call(null,[cljs.core.str("Error: You attempted to add parameters for "),cljs.core.str(cljs.core.pr_str.call(null,unknown_keys)),cljs.core.str(" to top-level key(s) of "),cljs.core.str(cljs.core.pr_str.call(null,om.next.ast__GT_query.call(null,ast)))].join(''));
} else {
}

return cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__43747_SHARP_){
return cljs.core.map.call(null,((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__4655__auto__ = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__4655__auto__)){
var new_params = temp__4655__auto__;
return cljs.core.update.call(null,c,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__43747_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__43748){
var map__43752 = p__43748;
var map__43752__$1 = ((((!((map__43752 == null)))?((((map__43752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43752):map__43752);
var target = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var refresh = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
if(cljs.core.truth_((function (){var or__30987__auto__ = field;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("You must supply a query or a field/ident pair"),cljs.core.str("\n"),cljs.core.str("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__30987__auto__ = cljs.core.not.call(null,field);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var and__30975__auto__ = field;
if(cljs.core.truth_(and__30975__auto__)){
return om.util.ident_QMARK_.call(null,ident);
} else {
return and__30975__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Field requires ident"),cljs.core.str("\n"),cljs.core.str("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast.call(null,query);
var ast = (function (){var G__43754 = old_ast;
var G__43754__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__43754,without):G__43754);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__43754__$1,params);
} else {
return G__43754__$1;
}
})();
var query_field = cljs.core.first.call(null,query);
var key = (cljs.core.truth_(om.util.join_QMARK_.call(null,query_field))?om.util.join_key.call(null,query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query.call(null,ast);
if((cljs.core.not.call(null,field)) || (cljs.core._EQ_.call(null,field,key))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Component fetch query does not match supplied field."),cljs.core.str("\n"),cljs.core.str("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971),new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083),new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382),new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555),new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536),new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519),new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083),new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213)],[post_mutation,parallel,marker,new cljs.core.Keyword(null,"ready","ready",1086465795),ident,post_mutation_params,fallback,query_SINGLEQUOTE_,field,refresh,target,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null))]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load-data` and `load-field` functions in `untangled.client.data-fetch` for the public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__43755){
var map__43758 = p__43755;
var map__43758__$1 = ((((!((map__43758 == null)))?((((map__43758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43758):map__43758);
var config = map__43758__$1;
var state = cljs.core.get.call(null,map__43758__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),untangled.client.impl.data_fetch.ready_state.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config)));
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_target = (function untangled$client$impl$data_fetch$data_target(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_ident = (function untangled$client$impl$data_fetch$data_ident(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
untangled.client.impl.data_fetch.data_query = (function untangled$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_ident.call(null,state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([untangled.client.impl.data_fetch.data_ident.call(null,state),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state)], true, false)], null);
} else {
return new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
untangled.client.impl.data_fetch.data_field = (function untangled$client$impl$data_fetch$data_field(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
untangled.client.impl.data_fetch.data_uuid = (function untangled$client$impl$data_fetch$data_uuid(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
untangled.client.impl.data_fetch.data_marker_QMARK_ = (function untangled$client$impl$data_fetch$data_marker_QMARK_(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
untangled.client.impl.data_fetch.data_refresh = (function untangled$client$impl$data_fetch$data_refresh(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
untangled.client.impl.data_fetch.data_query_key = (function untangled$client$impl$data_fetch$data_query_key(state){
var ast = om.next.query__GT_ast.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
untangled.client.impl.data_fetch.data_path = (function untangled$client$impl$data_fetch$data_path(state){
var target = untangled.client.impl.data_fetch.data_target.call(null,state);
if(cljs.core.truth_((function (){var and__30975__auto__ = cljs.core.vector_QMARK_.call(null,target);
if(and__30975__auto__){
return cljs.core.not_empty.call(null,target);
} else {
return and__30975__auto__;
}
})())){
return target;
} else {
if((cljs.core.vector_QMARK_.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state))) && ((untangled.client.impl.data_fetch.data_field.call(null,state) instanceof cljs.core.Keyword))){
return cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state),untangled.client.impl.data_fetch.data_field.call(null,state));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,state)], null);

}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
untangled.client.impl.data_fetch.data_params = (function untangled$client$impl$data_fetch$data_params(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the keywords that should be (recursively) removed from the query that will be sent to the server.
 */
untangled.client.impl.data_fetch.data_exclusions = (function untangled$client$impl$data_fetch$data_exclusions(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","without","untangled.client.impl.data-fetch/without",716864332).cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function untangled$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
untangled.client.impl.data_fetch.set_ready_BANG_ = (function untangled$client$impl$data_fetch$set_ready_BANG_(var_args){
var args43760 = [];
var len__32057__auto___43769 = arguments.length;
var i__32058__auto___43770 = (0);
while(true){
if((i__32058__auto___43770 < len__32057__auto___43769)){
args43760.push((arguments[i__32058__auto___43770]));

var G__43771 = (i__32058__auto___43770 + (1));
i__32058__auto___43770 = G__43771;
continue;
} else {
}
break;
}

var G__43762 = args43760.length;
switch (G__43762) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43760.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_ready_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795),params);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
untangled.client.impl.data_fetch.set_loading_BANG_ = (function untangled$client$impl$data_fetch$set_loading_BANG_(var_args){
var args43763 = [];
var len__32057__auto___43773 = arguments.length;
var i__32058__auto___43774 = (0);
while(true){
if((i__32058__auto___43774 < len__32057__auto___43773)){
args43763.push((arguments[i__32058__auto___43774]));

var G__43775 = (i__32058__auto___43774 + (1));
i__32058__auto___43774 = G__43775;
continue;
} else {
}
break;
}

var G__43765 = args43763.length;
switch (G__43765) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43763.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_loading_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189),params);
return cljs.core.with_meta.call(null,rv,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),rv], null));
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a marker (based on the input state) that is in the error state
 */
untangled.client.impl.data_fetch.set_failed_BANG_ = (function untangled$client$impl$data_fetch$set_failed_BANG_(var_args){
var args43766 = [];
var len__32057__auto___43777 = arguments.length;
var i__32058__auto___43778 = (0);
while(true){
if((i__32058__auto___43778 < len__32057__auto___43777)){
args43766.push((arguments[i__32058__auto___43778]));

var G__43779 = (i__32058__auto___43778 + (1));
i__32058__auto___43778 = G__43779;
continue;
} else {
}
break;
}

var G__43768 = args43766.length;
switch (G__43768) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43766.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_failed_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762),params);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Composes together the queries of a sequence of data states into a single query.
 */
untangled.client.impl.data_fetch.full_query = (function untangled$client$impl$data_fetch$full_query(items){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (item){
return untangled.client.impl.data_fetch.data_query.call(null,item);
}),items));
});
untangled.client.impl.data_fetch.set_global_loading = (function untangled$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state.call(null,reconciler);
var loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_);
});
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
untangled.client.impl.data_fetch.relocate_targeted_results = (function untangled$client$impl$data_fetch$relocate_targeted_results(state_atom,items){
var seq__43785 = cljs.core.seq.call(null,items);
var chunk__43786 = null;
var count__43787 = (0);
var i__43788 = (0);
while(true){
if((i__43788 < count__43787)){
var item = cljs.core._nth.call(null,chunk__43786,i__43788);
var default_target_43789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_43790 = cljs.core.conj.call(null,(function (){var or__30987__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_43791 = (function (){var or__30987__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__43792 = (function (){var and__30975__auto__ = cljs.core.not_empty.call(null,explicit_target_43791);
if(cljs.core.truth_(and__30975__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_43791,field_target_43790)) && (cljs.core.not_EQ_.call(null,explicit_target_43791,default_target_43789));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__43792)){
var value_43793 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_43789);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__43785,chunk__43786,count__43787,i__43788,value_43793,default_target_43789,field_target_43790,explicit_target_43791,relocate_QMARK__43792,item){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_43791,value_43793);
});})(seq__43785,chunk__43786,count__43787,i__43788,value_43793,default_target_43789,field_target_43790,explicit_target_43791,relocate_QMARK__43792,item))
);
} else {
}

var G__43794 = seq__43785;
var G__43795 = chunk__43786;
var G__43796 = count__43787;
var G__43797 = (i__43788 + (1));
seq__43785 = G__43794;
chunk__43786 = G__43795;
count__43787 = G__43796;
i__43788 = G__43797;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43785);
if(temp__4657__auto__){
var seq__43785__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43785__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__43785__$1);
var G__43798 = cljs.core.chunk_rest.call(null,seq__43785__$1);
var G__43799 = c__31798__auto__;
var G__43800 = cljs.core.count.call(null,c__31798__auto__);
var G__43801 = (0);
seq__43785 = G__43798;
chunk__43786 = G__43799;
count__43787 = G__43800;
i__43788 = G__43801;
continue;
} else {
var item = cljs.core.first.call(null,seq__43785__$1);
var default_target_43802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_43803 = cljs.core.conj.call(null,(function (){var or__30987__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_43804 = (function (){var or__30987__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__43805 = (function (){var and__30975__auto__ = cljs.core.not_empty.call(null,explicit_target_43804);
if(cljs.core.truth_(and__30975__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_43804,field_target_43803)) && (cljs.core.not_EQ_.call(null,explicit_target_43804,default_target_43802));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__43805)){
var value_43806 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_43802);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__43785,chunk__43786,count__43787,i__43788,value_43806,default_target_43802,field_target_43803,explicit_target_43804,relocate_QMARK__43805,item,seq__43785__$1,temp__4657__auto__){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_43804,value_43806);
});})(seq__43785,chunk__43786,count__43787,i__43788,value_43806,default_target_43802,field_target_43803,explicit_target_43804,relocate_QMARK__43805,item,seq__43785__$1,temp__4657__auto__))
);
} else {
}

var G__43807 = cljs.core.next.call(null,seq__43785__$1);
var G__43808 = null;
var G__43809 = (0);
var G__43810 = (0);
seq__43785 = G__43807;
chunk__43786 = G__43808;
count__43787 = G__43809;
i__43788 = G__43810;
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
 * Generates a callback that processes all of the post-processing steps once a remote load has completed. This includes:
 * 
 *   - Marking the items that were queries for but not returned as 'missing' (see documentation on mark and sweep of db)
 *   - Refreshing elements of the UI that were included in the data fetch :refresh option
 *   - Removing loading markers related to the executed loads that were not overwritten by incoming data
 *   - Merging the incoming data into the normalized database
 *   - Running post-mutations for any fetches that completed
 *   - Updating the global loading marker
 *   - Forcing a global re-render if post-mutations ran (may change in future versions)
 *   
 */
untangled.client.impl.data_fetch.loaded_callback = (function untangled$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = untangled.client.impl.data_fetch.full_query.call(null,items);
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var marked_response = untangled.client.impl.om_plumbing.mark_missing.call(null,response,query);
var app_state = om.next.app_state.call(null,reconciler);
var ran_mutations = cljs.core.atom.call(null,false);
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__43823 = cljs.core.seq.call(null,loading_items);
var chunk__43824 = null;
var count__43825 = (0);
var i__43826 = (0);
while(true){
if((i__43826 < count__43825)){
var item = cljs.core._nth.call(null,chunk__43824,i__43826);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__43823,chunk__43824,count__43825,i__43826,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__43827 = s;
var G__43827__$1 = cljs.core.update.call(null,G__43827,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__43827__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__43827__$1;
}
});})(seq__43823,chunk__43824,count__43825,i__43826,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__43835 = seq__43823;
var G__43836 = chunk__43824;
var G__43837 = count__43825;
var G__43838 = (i__43826 + (1));
seq__43823 = G__43835;
chunk__43824 = G__43836;
count__43825 = G__43837;
i__43826 = G__43838;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43823);
if(temp__4657__auto__){
var seq__43823__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43823__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__43823__$1);
var G__43839 = cljs.core.chunk_rest.call(null,seq__43823__$1);
var G__43840 = c__31798__auto__;
var G__43841 = cljs.core.count.call(null,c__31798__auto__);
var G__43842 = (0);
seq__43823 = G__43839;
chunk__43824 = G__43840;
count__43825 = G__43841;
i__43826 = G__43842;
continue;
} else {
var item = cljs.core.first.call(null,seq__43823__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__43823,chunk__43824,count__43825,i__43826,item,seq__43823__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__43828 = s;
var G__43828__$1 = cljs.core.update.call(null,G__43828,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__43828__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__43828__$1;
}
});})(seq__43823,chunk__43824,count__43825,i__43826,item,seq__43823__$1,temp__4657__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__43843 = cljs.core.next.call(null,seq__43823__$1);
var G__43844 = null;
var G__43845 = (0);
var G__43846 = (0);
seq__43823 = G__43843;
chunk__43824 = G__43844;
count__43825 = G__43845;
i__43826 = G__43846;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
;
var run_post_mutations = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers){
return (function (){
var seq__43829 = cljs.core.seq.call(null,loading_items);
var chunk__43830 = null;
var count__43831 = (0);
var i__43832 = (0);
while(true){
if((i__43832 < count__43831)){
var item = cljs.core._nth.call(null,chunk__43830,i__43832);
var temp__4657__auto___43847 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___43847)){
var mutation_symbol_43848 = temp__4657__auto___43847;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_43849 = (function (){var or__30987__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__43833_43850 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_43848,params_43849);
var G__43833_43851__$1 = (((G__43833_43850 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__43833_43850));
if((G__43833_43851__$1 == null)){
} else {
cljs.core.apply.call(null,G__43833_43851__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__43852 = seq__43829;
var G__43853 = chunk__43830;
var G__43854 = count__43831;
var G__43855 = (i__43832 + (1));
seq__43829 = G__43852;
chunk__43830 = G__43853;
count__43831 = G__43854;
i__43832 = G__43855;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43829);
if(temp__4657__auto__){
var seq__43829__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43829__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__43829__$1);
var G__43856 = cljs.core.chunk_rest.call(null,seq__43829__$1);
var G__43857 = c__31798__auto__;
var G__43858 = cljs.core.count.call(null,c__31798__auto__);
var G__43859 = (0);
seq__43829 = G__43856;
chunk__43830 = G__43857;
count__43831 = G__43858;
i__43832 = G__43859;
continue;
} else {
var item = cljs.core.first.call(null,seq__43829__$1);
var temp__4657__auto___43860__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___43860__$1)){
var mutation_symbol_43861 = temp__4657__auto___43860__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_43862 = (function (){var or__30987__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__43834_43863 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_43861,params_43862);
var G__43834_43864__$1 = (((G__43834_43863 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__43834_43863));
if((G__43834_43864__$1 == null)){
} else {
cljs.core.apply.call(null,G__43834_43864__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__43865 = cljs.core.next.call(null,seq__43829__$1);
var G__43866 = null;
var G__43867 = (0);
var G__43868 = (0);
seq__43829 = G__43865;
chunk__43830 = G__43866;
count__43831 = G__43867;
i__43832 = G__43868;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers))
;
remove_markers.call(null);

om.next.merge_BANG_.call(null,reconciler,marked_response,query);

untangled.client.impl.data_fetch.relocate_targeted_results.call(null,app_state,loading_items);

run_post_mutations.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.truth_((function (){var or__30987__auto__ = cljs.core.deref.call(null,ran_mutations);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319));
}
})())){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});
/**
 * Generates a callback that is used whenever a hard server error occurs (status code 400+ or network error).
 * 
 *   The generated callback:
 * 
 *   - Replaces affected loading markers with error markers (if :marker is true on the load item)
 *   - Runs fallbacks associated with the loads
 *   - Sets the global error marker (:untangled/server-error)
 *   - Refreshes UI
 *   
 */
untangled.client.impl.data_fetch.error_callback = (function untangled$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state.call(null,reconciler);
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var ran_fallbacks = cljs.core.atom.call(null,false);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var seq__43881 = cljs.core.seq.call(null,loading_items);
var chunk__43882 = null;
var count__43883 = (0);
var i__43884 = (0);
while(true){
if((i__43884 < count__43883)){
var item = cljs.core._nth.call(null,chunk__43882,i__43884);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__43881,chunk__43882,count__43883,i__43884,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__43885 = s;
var G__43885__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__43885,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__43885);
return cljs.core.update.call(null,G__43885__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__43881,chunk__43882,count__43883,i__43884,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__43893 = seq__43881;
var G__43894 = chunk__43882;
var G__43895 = count__43883;
var G__43896 = (i__43884 + (1));
seq__43881 = G__43893;
chunk__43882 = G__43894;
count__43883 = G__43895;
i__43884 = G__43896;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43881);
if(temp__4657__auto__){
var seq__43881__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43881__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__43881__$1);
var G__43897 = cljs.core.chunk_rest.call(null,seq__43881__$1);
var G__43898 = c__31798__auto__;
var G__43899 = cljs.core.count.call(null,c__31798__auto__);
var G__43900 = (0);
seq__43881 = G__43897;
chunk__43882 = G__43898;
count__43883 = G__43899;
i__43884 = G__43900;
continue;
} else {
var item = cljs.core.first.call(null,seq__43881__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__43881,chunk__43882,count__43883,i__43884,item,seq__43881__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__43886 = s;
var G__43886__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__43886,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__43886);
return cljs.core.update.call(null,G__43886__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__43881,chunk__43882,count__43883,i__43884,item,seq__43881__$1,temp__4657__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__43901 = cljs.core.next.call(null,seq__43881__$1);
var G__43902 = null;
var G__43903 = (0);
var G__43904 = (0);
seq__43881 = G__43901;
chunk__43882 = G__43902;
count__43883 = G__43903;
i__43884 = G__43904;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors){
return (function (){
var seq__43887 = cljs.core.seq.call(null,loading_items);
var chunk__43888 = null;
var count__43889 = (0);
var i__43890 = (0);
while(true){
if((i__43890 < count__43889)){
var item = cljs.core._nth.call(null,chunk__43888,i__43890);
var temp__4657__auto___43905 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___43905)){
var fallback_symbol_43906 = temp__4657__auto___43905;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__43891_43907 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_43906,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__43891_43908__$1 = (((G__43891_43907 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__43891_43907));
if((G__43891_43908__$1 == null)){
} else {
cljs.core.apply.call(null,G__43891_43908__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__43909 = seq__43887;
var G__43910 = chunk__43888;
var G__43911 = count__43889;
var G__43912 = (i__43890 + (1));
seq__43887 = G__43909;
chunk__43888 = G__43910;
count__43889 = G__43911;
i__43890 = G__43912;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43887);
if(temp__4657__auto__){
var seq__43887__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43887__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__43887__$1);
var G__43913 = cljs.core.chunk_rest.call(null,seq__43887__$1);
var G__43914 = c__31798__auto__;
var G__43915 = cljs.core.count.call(null,c__31798__auto__);
var G__43916 = (0);
seq__43887 = G__43913;
chunk__43888 = G__43914;
count__43889 = G__43915;
i__43890 = G__43916;
continue;
} else {
var item = cljs.core.first.call(null,seq__43887__$1);
var temp__4657__auto___43917__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4657__auto___43917__$1)){
var fallback_symbol_43918 = temp__4657__auto___43917__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__43892_43919 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_43918,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__43892_43920__$1 = (((G__43892_43919 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__43892_43919));
if((G__43892_43920__$1 == null)){
} else {
cljs.core.apply.call(null,G__43892_43920__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__43921 = cljs.core.next.call(null,seq__43887__$1);
var G__43922 = null;
var G__43923 = (0);
var G__43924 = (0);
seq__43887 = G__43921;
chunk__43888 = G__43922;
count__43889 = G__43923;
i__43890 = G__43924;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors))
;
mark_errors.call(null);

om.next.merge_BANG_.call(null,reconciler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null)], null));

run_fallbacks.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});

//# sourceMappingURL=data_fetch.js.map?rel=1487610718547