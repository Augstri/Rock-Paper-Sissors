// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.i18n');
goog.require('cljs.core');
goog.require('untangled.i18n.core');
goog.require('untangled.client.logging');
untangled.i18n.current_locale = (function untangled$i18n$current_locale(){
return cljs.core.deref.call(null,untangled.i18n.core._STAR_current_locale_STAR_);
});
untangled.i18n.translations_for_locale = (function untangled$i18n$translations_for_locale(){
return cljs.core.get.call(null,cljs.core.deref.call(null,untangled.i18n.core._STAR_loaded_translations_STAR_),untangled.i18n.current_locale.call(null));
});
tr = (function (msg){
var msg_key = [cljs.core.str("|"),cljs.core.str(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trc = (function (ctxt,msg){
var msg_key = [cljs.core.str(ctxt),cljs.core.str("|"),cljs.core.str(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trf = (function() { 
var G__43568__delegate = function (fmt,p__43564){
var map__43565 = p__43564;
var map__43565__$1 = ((((!((map__43565 == null)))?((((map__43565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43565):map__43565);
var argmap = map__43565__$1;
try{var msg_key = [cljs.core.str("|"),cljs.core.str(fmt)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale.call(null)));
return formatter.format(cljs.core.clj__GT_js.call(null,argmap));
}catch (e43567){var e = e43567;
untangled.client.logging.error.call(null,"Failed to format ",fmt," args: ",argmap," exception: ",e);

return "???";
}};
var G__43568 = function (fmt,var_args){
var p__43564 = null;
if (arguments.length > 1) {
var G__43569__i = 0, G__43569__a = new Array(arguments.length -  1);
while (G__43569__i < G__43569__a.length) {G__43569__a[G__43569__i] = arguments[G__43569__i + 1]; ++G__43569__i;}
  p__43564 = new cljs.core.IndexedSeq(G__43569__a,0);
} 
return G__43568__delegate.call(this,fmt,p__43564);};
G__43568.cljs$lang$maxFixedArity = 1;
G__43568.cljs$lang$applyTo = (function (arglist__43570){
var fmt = cljs.core.first(arglist__43570);
var p__43564 = cljs.core.rest(arglist__43570);
return G__43568__delegate(fmt,p__43564);
});
G__43568.cljs$core$IFn$_invoke$arity$variadic = G__43568__delegate;
return G__43568;
})()
;

//# sourceMappingURL=i18n.js.map?rel=1487610717833