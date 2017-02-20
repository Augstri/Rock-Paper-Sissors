// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33952_33966 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33953_33967 = null;
var count__33954_33968 = (0);
var i__33955_33969 = (0);
while(true){
if((i__33955_33969 < count__33954_33968)){
var f_33970 = cljs.core._nth.call(null,chunk__33953_33967,i__33955_33969);
cljs.core.println.call(null,"  ",f_33970);

var G__33971 = seq__33952_33966;
var G__33972 = chunk__33953_33967;
var G__33973 = count__33954_33968;
var G__33974 = (i__33955_33969 + (1));
seq__33952_33966 = G__33971;
chunk__33953_33967 = G__33972;
count__33954_33968 = G__33973;
i__33955_33969 = G__33974;
continue;
} else {
var temp__4657__auto___33975 = cljs.core.seq.call(null,seq__33952_33966);
if(temp__4657__auto___33975){
var seq__33952_33976__$1 = temp__4657__auto___33975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33952_33976__$1)){
var c__31798__auto___33977 = cljs.core.chunk_first.call(null,seq__33952_33976__$1);
var G__33978 = cljs.core.chunk_rest.call(null,seq__33952_33976__$1);
var G__33979 = c__31798__auto___33977;
var G__33980 = cljs.core.count.call(null,c__31798__auto___33977);
var G__33981 = (0);
seq__33952_33966 = G__33978;
chunk__33953_33967 = G__33979;
count__33954_33968 = G__33980;
i__33955_33969 = G__33981;
continue;
} else {
var f_33982 = cljs.core.first.call(null,seq__33952_33976__$1);
cljs.core.println.call(null,"  ",f_33982);

var G__33983 = cljs.core.next.call(null,seq__33952_33976__$1);
var G__33984 = null;
var G__33985 = (0);
var G__33986 = (0);
seq__33952_33966 = G__33983;
chunk__33953_33967 = G__33984;
count__33954_33968 = G__33985;
i__33955_33969 = G__33986;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33987 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30987__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33987);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33987)))?cljs.core.second.call(null,arglists_33987):arglists_33987));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33957 = null;
var count__33958 = (0);
var i__33959 = (0);
while(true){
if((i__33959 < count__33958)){
var vec__33960 = cljs.core._nth.call(null,chunk__33957,i__33959);
var name = cljs.core.nth.call(null,vec__33960,(0),null);
var map__33961 = cljs.core.nth.call(null,vec__33960,(1),null);
var map__33961__$1 = ((((!((map__33961 == null)))?((((map__33961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33961):map__33961);
var doc = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33961__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33988 = seq__33956;
var G__33989 = chunk__33957;
var G__33990 = count__33958;
var G__33991 = (i__33959 + (1));
seq__33956 = G__33988;
chunk__33957 = G__33989;
count__33958 = G__33990;
i__33959 = G__33991;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33956);
if(temp__4657__auto__){
var seq__33956__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33956__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__33956__$1);
var G__33992 = cljs.core.chunk_rest.call(null,seq__33956__$1);
var G__33993 = c__31798__auto__;
var G__33994 = cljs.core.count.call(null,c__31798__auto__);
var G__33995 = (0);
seq__33956 = G__33992;
chunk__33957 = G__33993;
count__33958 = G__33994;
i__33959 = G__33995;
continue;
} else {
var vec__33963 = cljs.core.first.call(null,seq__33956__$1);
var name = cljs.core.nth.call(null,vec__33963,(0),null);
var map__33964 = cljs.core.nth.call(null,vec__33963,(1),null);
var map__33964__$1 = ((((!((map__33964 == null)))?((((map__33964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33964):map__33964);
var doc = cljs.core.get.call(null,map__33964__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33964__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33996 = cljs.core.next.call(null,seq__33956__$1);
var G__33997 = null;
var G__33998 = (0);
var G__33999 = (0);
seq__33956 = G__33996;
chunk__33957 = G__33997;
count__33958 = G__33998;
i__33959 = G__33999;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1487610703130