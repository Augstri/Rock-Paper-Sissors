// Compiled by ClojureScript 1.8.51 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.sanity_hints');
goog.require('devtools.dirac');
goog.require('devtools.custom_formatters');
goog.require('devtools.util');
goog.require('goog.userAgent');
devtools.core.known_features = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779),new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327),new cljs.core.Keyword(null,"dirac","dirac",1785994033),new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649),new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858),new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)], null);
devtools.core.missing_feature_warning = (function devtools$core$missing_feature_warning(feature,known_features){
return [cljs.core.str("No such feature '"),cljs.core.str(feature),cljs.core.str("' is currently available in cljs-devtools. "),cljs.core.str("List of supported features:"),cljs.core.str(cljs.core.keys.call(null,known_features))].join('');
});
devtools.core.warn_feature_not_available = (function devtools$core$warn_feature_not_available(feature){
return console.warn([cljs.core.str("Feature '"),cljs.core.str(cljs.core.name.call(null,feature)),cljs.core.str("' cannot be installed. Unsupported browser "),cljs.core.str(goog.userAgent.getUserAgentString()),cljs.core.str(".")].join(''));
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
devtools.util.display_banner.call(null,"Installing cljs-devtools:",devtools.core.known_features);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-custom-formatters","install-custom-formatters",-1653731327)))){
if(cljs.core.truth_(devtools.custom_formatters.available_QMARK_.call(null))){
devtools.custom_formatters.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"custom-formatters","custom-formatters",-863243779));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145)))){
if(cljs.core.truth_(devtools.sanity_hints.available_QMARK_.call(null))){
devtools.sanity_hints.install_BANG_.call(null);
} else {
devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
}
} else {
}

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"install-dirac-support","install-dirac-support",-949928649)))){
if(cljs.core.truth_(devtools.dirac.available_QMARK_.call(null))){
return devtools.dirac.install_BANG_.call(null);
} else {
return devtools.core.warn_feature_not_available.call(null,new cljs.core.Keyword(null,"dirac","dirac",1785994033));
}
} else {
return null;
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.custom_formatters.uninstall_BANG_.call(null);

devtools.sanity_hints.uninstall_BANG_.call(null);

return devtools.dirac.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(feature,val){
var temp__4655__auto__ = feature.call(null,devtools.core.known_features);
if(cljs.core.truth_(temp__4655__auto__)){
var feature_installation_key = temp__4655__auto__;
return devtools.core.set_pref_BANG_.call(null,feature_installation_key,val);
} else {
return console.warn(devtools.core.missing_feature_warning.call(null,feature,devtools.core.known_features));
}
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,true);
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(feature){
return devtools.core.set_single_feature_BANG_.call(null,feature,false);
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46909 = arguments.length;
var i__32058__auto___46910 = (0);
while(true){
if((i__32058__auto___46910 < len__32057__auto___46909)){
args__32064__auto__.push((arguments[i__32058__auto___46910]));

var G__46911 = (i__32058__auto___46910 + (1));
i__32058__auto___46910 = G__46911;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__46905 = cljs.core.seq.call(null,features);
var chunk__46906 = null;
var count__46907 = (0);
var i__46908 = (0);
while(true){
if((i__46908 < count__46907)){
var feature = cljs.core._nth.call(null,chunk__46906,i__46908);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__46912 = seq__46905;
var G__46913 = chunk__46906;
var G__46914 = count__46907;
var G__46915 = (i__46908 + (1));
seq__46905 = G__46912;
chunk__46906 = G__46913;
count__46907 = G__46914;
i__46908 = G__46915;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46905);
if(temp__4657__auto__){
var seq__46905__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46905__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__46905__$1);
var G__46916 = cljs.core.chunk_rest.call(null,seq__46905__$1);
var G__46917 = c__31798__auto__;
var G__46918 = cljs.core.count.call(null,c__31798__auto__);
var G__46919 = (0);
seq__46905 = G__46916;
chunk__46906 = G__46917;
count__46907 = G__46918;
i__46908 = G__46919;
continue;
} else {
var feature = cljs.core.first.call(null,seq__46905__$1);
devtools.core.enable_single_feature_BANG_.call(null,feature);

var G__46920 = cljs.core.next.call(null,seq__46905__$1);
var G__46921 = null;
var G__46922 = (0);
var G__46923 = (0);
seq__46905 = G__46920;
chunk__46906 = G__46921;
count__46907 = G__46922;
i__46908 = G__46923;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq46904){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46904));
});
devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46929 = arguments.length;
var i__32058__auto___46930 = (0);
while(true){
if((i__32058__auto___46930 < len__32057__auto___46929)){
args__32064__auto__.push((arguments[i__32058__auto___46930]));

var G__46931 = (i__32058__auto___46930 + (1));
i__32058__auto___46930 = G__46931;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
var seq__46925 = cljs.core.seq.call(null,features);
var chunk__46926 = null;
var count__46927 = (0);
var i__46928 = (0);
while(true){
if((i__46928 < count__46927)){
var feature = cljs.core._nth.call(null,chunk__46926,i__46928);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__46932 = seq__46925;
var G__46933 = chunk__46926;
var G__46934 = count__46927;
var G__46935 = (i__46928 + (1));
seq__46925 = G__46932;
chunk__46926 = G__46933;
count__46927 = G__46934;
i__46928 = G__46935;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46925);
if(temp__4657__auto__){
var seq__46925__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46925__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__46925__$1);
var G__46936 = cljs.core.chunk_rest.call(null,seq__46925__$1);
var G__46937 = c__31798__auto__;
var G__46938 = cljs.core.count.call(null,c__31798__auto__);
var G__46939 = (0);
seq__46925 = G__46936;
chunk__46926 = G__46937;
count__46927 = G__46938;
i__46928 = G__46939;
continue;
} else {
var feature = cljs.core.first.call(null,seq__46925__$1);
devtools.core.disable_single_feature_BANG_.call(null,feature);

var G__46940 = cljs.core.next.call(null,seq__46925__$1);
var G__46941 = null;
var G__46942 = (0);
var G__46943 = (0);
seq__46925 = G__46940;
chunk__46926 = G__46941;
count__46927 = G__46942;
i__46928 = G__46943;
continue;
}
} else {
return null;
}
}
break;
}
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq46924){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46924));
});
devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(feature){
var G__46945 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__46945) {
case "custom-formatters":
return devtools.custom_formatters.available_QMARK_.call(null);

break;
case "dirac":
return devtools.dirac.available_QMARK_.call(null);

break;
case "sanity-hints":
return devtools.sanity_hints.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46948 = arguments.length;
var i__32058__auto___46949 = (0);
while(true){
if((i__32058__auto___46949 < len__32057__auto___46948)){
args__32064__auto__.push((arguments[i__32058__auto___46949]));

var G__46950 = (i__32058__auto___46949 + (1));
i__32058__auto___46949 = G__46950;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (features){
return cljs.core.every_QMARK_.call(null,devtools.core.single_feature_available_QMARK_,features);
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq46947){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46947));
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was deprecated "),cljs.core.str("and has no effect in current version of cljs-devtools "),cljs.core.str("=> remove the call")].join(''));
});

//# sourceMappingURL=core.js.map?rel=1487610721663