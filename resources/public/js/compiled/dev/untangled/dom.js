// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.dom');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('untangled.client.logging');
goog.require('om.next.protocols');
goog.require('om.next');
goog.require('clojure.string');
/**
 * Get a unique string-based key. Never returns the same value.
 */
untangled.dom.unique_key = (function untangled$dom$unique_key(){
return cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null));
});
/**
 * Re-render components. If only a reconciler is supplied then it forces a full DOM re-render by updating the :ui/react-key
 *   in app state and forcing Om to re-render the entire DOM, which only works properly if you query
 *   for :ui/react-key in your Root render component and add that as the react :key to your top-level element.
 * 
 *   If you supply an additional vector of keywords and idents then it will ask Om to rerender only those components that mention
 *   those things in their queries.
 */
untangled.dom.force_render = (function untangled$dom$force_render(var_args){
var args43661 = [];
var len__32057__auto___43664 = arguments.length;
var i__32058__auto___43665 = (0);
while(true){
if((i__32058__auto___43665 < len__32057__auto___43664)){
args43661.push((arguments[i__32058__auto___43665]));

var G__43666 = (i__32058__auto___43665 + (1));
i__32058__auto___43665 = G__43666;
continue;
} else {
}
break;
}

var G__43663 = args43661.length;
switch (G__43663) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43661.length)].join('')));

}
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_.call(null,reconciler,keywords);

return om.next.protocols.schedule_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state.call(null,reconciler);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));

return om.next.force_root_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$lang$maxFixedArity = 2;
/**
 * Append a CSS class. Given a component and a local state key or keys, to be passed to `om/get-state`,
 *   returns a function that takes the `state-value` to test, a `default-class-string`,
 *   and optionaol `:when-true` and `:when-false`. The values `:when-false` and `when-true`
 *   are appended to `default-class-string` after the test against `state-value`.
 * 
 *   Parameters:
 *   `component`: The component to pass to `om/get-state`.
 *   `local-state-key`: The key or keys to pass to `om/get-state`.
 */
untangled.dom.append_class = (function untangled$dom$append_class(component,local_state_key){
return (function() { 
var G__43674__delegate = function (state_key,default_class_string,p__43671){
var map__43672 = p__43671;
var map__43672__$1 = ((((!((map__43672 == null)))?((((map__43672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43672):map__43672);
var when_true = cljs.core.get.call(null,map__43672__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__43672__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
var append_string = ((cljs.core._EQ_.call(null,state_key,om.next.get_state.call(null,component,local_state_key)))?when_true:when_false);
return [cljs.core.str(default_class_string),cljs.core.str(" "),cljs.core.str(append_string)].join('');
};
var G__43674 = function (state_key,default_class_string,var_args){
var p__43671 = null;
if (arguments.length > 2) {
var G__43675__i = 0, G__43675__a = new Array(arguments.length -  2);
while (G__43675__i < G__43675__a.length) {G__43675__a[G__43675__i] = arguments[G__43675__i + 2]; ++G__43675__i;}
  p__43671 = new cljs.core.IndexedSeq(G__43675__a,0);
} 
return G__43674__delegate.call(this,state_key,default_class_string,p__43671);};
G__43674.cljs$lang$maxFixedArity = 2;
G__43674.cljs$lang$applyTo = (function (arglist__43676){
var state_key = cljs.core.first(arglist__43676);
arglist__43676 = cljs.core.next(arglist__43676);
var default_class_string = cljs.core.first(arglist__43676);
var p__43671 = cljs.core.rest(arglist__43676);
return G__43674__delegate(state_key,default_class_string,p__43671);
});
G__43674.cljs$core$IFn$_invoke$arity$variadic = G__43674__delegate;
return G__43674;
})()
;
});
/**
 * Adds the 'visible' CSS class and removes the 'hidden' class to the pre-supplied class string based on the truthiness
 *   of the value in data at key.
 * 
 *   Parameters:
 *   `data`: A map containing the component's state.
 *   `key`: A key within `data`.
 *   `always-classes`: A string that has the CSS classes to always return in the returned string.
 * 
 *   Optional named parameters:
 * 
 *   `:when-true v` : This string to add when the key's value is true. Defaults to "active".
 *   `:when-false v` : The string to add when the key's value is false. Defaults to "".
 *   
 */
untangled.dom.toggle_class = (function untangled$dom$toggle_class(var_args){
var args__32064__auto__ = [];
var len__32057__auto___43684 = arguments.length;
var i__32058__auto___43685 = (0);
while(true){
if((i__32058__auto___43685 < len__32057__auto___43684)){
args__32064__auto__.push((arguments[i__32058__auto___43685]));

var G__43686 = (i__32058__auto___43685 + (1));
i__32058__auto___43685 = G__43686;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((3) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32065__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__43681){
var map__43682 = p__43681;
var map__43682__$1 = ((((!((map__43682 == null)))?((((map__43682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43682):map__43682);
var when_true = cljs.core.get.call(null,map__43682__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__43682__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
if(cljs.core.truth_(cljs.core.get.call(null,data,key))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq43677){
var G__43678 = cljs.core.first.call(null,seq43677);
var seq43677__$1 = cljs.core.next.call(null,seq43677);
var G__43679 = cljs.core.first.call(null,seq43677__$1);
var seq43677__$2 = cljs.core.next.call(null,seq43677__$1);
var G__43680 = cljs.core.first.call(null,seq43677__$2);
var seq43677__$3 = cljs.core.next.call(null,seq43677__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__43678,G__43679,G__43680,seq43677__$3);
});
/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e43688){if((e43688 instanceof Object)){
var e = e43688;
return untangled.client.logging.warn.call(null,"Event had no target when trying to pull text");
} else {
throw e43688;

}
}});

//# sourceMappingURL=dom.js.map?rel=1487610718171