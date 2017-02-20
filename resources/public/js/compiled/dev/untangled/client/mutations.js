// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__31912__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31913__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31916__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31916__auto__,method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__31912__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31913__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31916__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","post-mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31916__auto__,method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__));
})();
}
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
untangled.client.mutations.toggle_BANG_ = (function untangled$client$mutations$toggle_BANG_(comp,field){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null)),(function (){var x__31821__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field","field",-1302436500)),(function (){var x__31821__auto__ = field;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data).
 */
untangled.client.mutations.set_value_BANG_ = (function untangled$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null)),(function (){var x__31821__auto__ = cljs.core.PersistentArrayMap.fromArray([field,value], true, false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.ensure_integer = (function untangled$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_integer_BANG_ = (function untangled$client$mutations$set_integer_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___43485 = arguments.length;
var i__32058__auto___43486 = (0);
while(true){
if((i__32058__auto___43486 < len__32057__auto___43485)){
args__32064__auto__.push((arguments[i__32058__auto___43486]));

var G__43487 = (i__32058__auto___43486 + (1));
i__32058__auto___43486 = G__43487;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__43482){
var map__43483 = p__43482;
var map__43483__$1 = ((((!((map__43483 == null)))?((((map__43483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43483):map__43483);
var event = cljs.core.get.call(null,map__43483__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__43483__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__30975__auto__ = (function (){var or__30987__auto__ = event;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not.call(null,(function (){var and__30975__auto____$1 = event;
if(cljs.core.truth_(and__30975__auto____$1)){
return value;
} else {
return and__30975__auto____$1;
}
})());
} else {
return and__30975__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = untangled.client.mutations.ensure_integer.call(null,(cljs.core.truth_(event)?event.target.value:value));
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq43479){
var G__43480 = cljs.core.first.call(null,seq43479);
var seq43479__$1 = cljs.core.next.call(null,seq43479);
var G__43481 = cljs.core.first.call(null,seq43479__$1);
var seq43479__$2 = cljs.core.next.call(null,seq43479__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43480,G__43481,seq43479__$2);
});
/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_string_BANG_ = (function untangled$client$mutations$set_string_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___43494 = arguments.length;
var i__32058__auto___43495 = (0);
while(true){
if((i__32058__auto___43495 < len__32057__auto___43494)){
args__32064__auto__.push((arguments[i__32058__auto___43495]));

var G__43496 = (i__32058__auto___43495 + (1));
i__32058__auto___43495 = G__43496;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__43491){
var map__43492 = p__43491;
var map__43492__$1 = ((((!((map__43492 == null)))?((((map__43492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43492):map__43492);
var event = cljs.core.get.call(null,map__43492__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__43492__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__30975__auto__ = (function (){var or__30987__auto__ = event;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not.call(null,(function (){var and__30975__auto____$1 = event;
if(cljs.core.truth_(and__30975__auto____$1)){
return value;
} else {
return and__30975__auto____$1;
}
})());
} else {
return and__30975__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Supply either :event or :value"),cljs.core.str("\n"),cljs.core.str("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = (cljs.core.truth_(event)?event.target.value:value);
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq43488){
var G__43489 = cljs.core.first.call(null,seq43488);
var seq43488__$1 = cljs.core.next.call(null,seq43488);
var G__43490 = cljs.core.first.call(null,seq43488__$1);
var seq43488__$2 = cljs.core.next.call(null,seq43488__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43489,G__43490,seq43488__$2);
});

//# sourceMappingURL=mutations.js.map?rel=1487610717637