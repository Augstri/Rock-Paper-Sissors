// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(36),(2)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__32882 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__32882,(0),null);
var yc = cljs.core.nth.call(null,vec__32882,(1),null);
var zc = cljs.core.nth.call(null,vec__32882,(2),null);
var vec__32883 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__32883,(0),null);
var ym = cljs.core.nth.call(null,vec__32883,(1),null);
var zm = cljs.core.nth.call(null,vec__32883,(2),null);
var vec__32884 = cljs.core.mapv.call(null,((function (vec__32882,xc,yc,zc,vec__32883,xm,ym,zm){
return (function (p1__32878_SHARP_){
var or__30987__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__32878_SHARP_);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return (0);
}
});})(vec__32882,xc,yc,zc,vec__32883,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__32884,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__32884,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__32884,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient com.taoensso/encore version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__32887 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__32887,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__32887,(1),null);
var vec__32888 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__32888,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__32888,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});

/**
 * Experimental. Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a bit of a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args32889 = [];
var len__32057__auto___32892 = arguments.length;
var i__32058__auto___32893 = (0);
while(true){
if((i__32058__auto___32893 < len__32057__auto___32892)){
args32889.push((arguments[i__32058__auto___32893]));

var G__32894 = (i__32058__auto___32893 + (1));
i__32058__auto___32893 = G__32894;
continue;
} else {
}
break;
}

var G__32891 = args32889.length;
switch (G__32891) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32889.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(!(typeof s === 'string')){
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
} else {
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?readers:taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
var default$__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?default$:cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], null));
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args32896 = [];
var len__32057__auto___32901 = arguments.length;
var i__32058__auto___32902 = (0);
while(true){
if((i__32058__auto___32902 < len__32057__auto___32901)){
args32896.push((arguments[i__32058__auto___32902]));

var G__32903 = (i__32058__auto___32902 + (1));
i__32058__auto___32902 = G__32903;
continue;
} else {
}
break;
}

var G__32898 = args32896.length;
switch (G__32898) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32896.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_32899 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_32900 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_32900;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_32899;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__30987__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore._QMARK_as_throw = (function taoensso$encore$_QMARK_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil as-?"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str(" against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if(!((_QMARK_b == null))){
return _QMARK_b;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__30987__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args32909 = [];
var len__32057__auto___32915 = arguments.length;
var i__32058__auto___32916 = (0);
while(true){
if((i__32058__auto___32916 < len__32057__auto___32915)){
args32909.push((arguments[i__32058__auto___32916]));

var G__32917 = (i__32058__auto___32916 + (1));
i__32058__auto___32916 = G__32917;
continue;
} else {
}
break;
}

var G__32914 = args32909.length;
switch (G__32914) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__32076__auto__ = (new cljs.core.IndexedSeq(args32909.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__30975__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__30975__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__30975__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__30975__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq32910){
var G__32911 = cljs.core.first.call(null,seq32910);
var seq32910__$1 = cljs.core.next.call(null,seq32910);
var G__32912 = cljs.core.first.call(null,seq32910__$1);
var seq32910__$2 = cljs.core.next.call(null,seq32910__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32911,G__32912,seq32910__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
/**
 * Like `name` but includes keyword namespaces in name string
 */
taoensso.encore.qname = taoensso.encore.as_qname;
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__32064__auto__ = [];
var len__32057__auto___32923 = arguments.length;
var i__32058__auto___32924 = (0);
while(true){
if((i__32058__auto___32924 < len__32057__auto___32923)){
args__32064__auto__.push((arguments[i__32058__auto___32924]));

var G__32925 = (i__32058__auto___32924 + (1));
i__32058__auto___32924 = G__32925;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32921){
var vec__32922 = p__32921;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__32922,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__32922,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__32922,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq32919){
var G__32920 = cljs.core.first.call(null,seq32919);
var seq32919__$1 = cljs.core.next.call(null,seq32919);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__32920,seq32919__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args32926 = [];
var len__32057__auto___32930 = arguments.length;
var i__32058__auto___32931 = (0);
while(true){
if((i__32058__auto___32931 < len__32057__auto___32930)){
args32926.push((arguments[i__32058__auto___32931]));

var G__32932 = (i__32058__auto___32931 + (1));
i__32058__auto___32931 = G__32932;
continue;
} else {
}
break;
}

var G__32928 = args32926.length;
switch (G__32928) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32926.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__32929 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32929) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__32064__auto__ = [];
var len__32057__auto___32941 = arguments.length;
var i__32058__auto___32942 = (0);
while(true){
if((i__32058__auto___32942 < len__32057__auto___32941)){
args__32064__auto__.push((arguments[i__32058__auto___32942]));

var G__32943 = (i__32058__auto___32942 + (1));
i__32058__auto___32942 = G__32943;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__32937){
var vec__32938 = p__32937;
var map__32939 = cljs.core.nth.call(null,vec__32938,(0),null);
var map__32939__$1 = ((((!((map__32939 == null)))?((((map__32939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32939):map__32939);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__31318__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__31319__auto__ = cljs.core.long$.call(null,time);
return ((x__31318__auto__ > y__31319__auto__) ? x__31318__auto__ : y__31319__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__31325__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__31326__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__31325__auto__ < y__31326__auto__) ? x__31325__auto__ : y__31326__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq32935){
var G__32936 = cljs.core.first.call(null,seq32935);
var seq32935__$1 = cljs.core.next.call(null,seq32935);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__32936,seq32935__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__32064__auto__ = [];
var len__32057__auto___32961 = arguments.length;
var i__32058__auto___32962 = (0);
while(true){
if((i__32058__auto___32962 < len__32057__auto___32961)){
args__32064__auto__.push((arguments[i__32058__auto___32962]));

var G__32963 = (i__32058__auto___32962 + (1));
i__32058__auto___32962 = G__32963;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__32957){
var map__32958 = p__32957;
var map__32958__$1 = ((((!((map__32958 == null)))?((((map__32958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32958):map__32958);
var opts = map__32958__$1;
var years = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__32958,map__32958__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e32960){if((e32960 instanceof Error)){
var __t = e32960;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e32960;

}
}});})(map__32958,map__32958__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq32956){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32956));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args32968 = [];
var len__32057__auto___32975 = arguments.length;
var i__32058__auto___32976 = (0);
while(true){
if((i__32058__auto___32976 < len__32057__auto___32975)){
args32968.push((arguments[i__32058__auto___32976]));

var G__32977 = (i__32058__auto___32976 + (1));
i__32058__auto___32976 = G__32977;
continue;
} else {
}
break;
}

var G__32974 = args32968.length;
switch (G__32974) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__32076__auto__ = (new cljs.core.IndexedSeq(args32968.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32076__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq32969){
var G__32970 = cljs.core.first.call(null,seq32969);
var seq32969__$1 = cljs.core.next.call(null,seq32969);
var G__32971 = cljs.core.first.call(null,seq32969__$1);
var seq32969__$2 = cljs.core.next.call(null,seq32969__$1);
var G__32972 = cljs.core.first.call(null,seq32969__$2);
var seq32969__$3 = cljs.core.next.call(null,seq32969__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__32970,G__32971,G__32972,seq32969__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__32980 = coll;
var c1 = cljs.core.nth.call(null,vec__32980,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__32982 = v;
var v1 = cljs.core.nth.call(null,vec__32982,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args32983 = [];
var len__32057__auto___32989 = arguments.length;
var i__32058__auto___32990 = (0);
while(true){
if((i__32058__auto___32990 < len__32057__auto___32989)){
args32983.push((arguments[i__32058__auto___32990]));

var G__32991 = (i__32058__auto___32990 + (1));
i__32058__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var G__32988 = args32983.length;
switch (G__32988) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__32076__auto__ = (new cljs.core.IndexedSeq(args32983.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq32984){
var G__32985 = cljs.core.first.call(null,seq32984);
var seq32984__$1 = cljs.core.next.call(null,seq32984);
var G__32986 = cljs.core.first.call(null,seq32984__$1);
var seq32984__$2 = cljs.core.next.call(null,seq32984__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__32985,G__32986,seq32984__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__32995_SHARP_,p2__32993_SHARP_,p3__32994_SHARP_){
return proc.call(null,p2__32993_SHARP_,p3__32994_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__32997_SHARP_,p2__32996_SHARP_){
return proc.call(null,p2__32996_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4657__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
/**
 * Faster `every?` based on `reduce`
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__32998_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__32998_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__33000 = ks;
var k = cljs.core.nth.call(null,vec__33000,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__33000,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__31325__auto__ = signed_idx;
var y__31326__auto__ = max_idx;
return ((x__31325__auto__ < y__31326__auto__) ? x__31325__auto__ : y__31326__auto__);
} else {
var x__31318__auto__ = (0);
var y__31319__auto__ = (signed_idx + max_idx);
return ((x__31318__auto__ > y__31319__auto__) ? x__31318__auto__ : y__31319__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33007 = arguments.length;
var i__32058__auto___33008 = (0);
while(true){
if((i__32058__auto___33008 < len__32057__auto___33007)){
args__32064__auto__.push((arguments[i__32058__auto___33008]));

var G__33009 = (i__32058__auto___33008 + (1));
i__32058__auto___33008 = G__33009;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__33004){
var map__33005 = p__33004;
var map__33005__$1 = ((((!((map__33005 == null)))?((((map__33005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33005):map__33005);
var max_len = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__33005,map__33005__$1,max_len,end_idx){
return (function (__x__$1){
var or__30987__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__33005,map__33005__$1,max_len,end_idx))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] max-len)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] max-len)"));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__19877__auto__ = (start_idx_STAR_ + max_len);
var n2__19878__auto__ = xlen;
if((n1__19877__auto__ > n2__19878__auto__)){
return n2__19878__auto__;
} else {
return n1__19877__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq33001){
var G__33002 = cljs.core.first.call(null,seq33001);
var seq33001__$1 = cljs.core.next.call(null,seq33001);
var G__33003 = cljs.core.first.call(null,seq33001__$1);
var seq33001__$2 = cljs.core.next.call(null,seq33001__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__33002,G__33003,seq33001__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33017 = arguments.length;
var i__32058__auto___33018 = (0);
while(true){
if((i__32058__auto___33018 < len__32057__auto___33017)){
args__32064__auto__.push((arguments[i__32058__auto___33018]));

var G__33019 = (i__32058__auto___33018 + (1));
i__32058__auto___33018 = G__33019;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__33013){
var vec__33014 = p__33013;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33014,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33015){if((e33015 instanceof Error)){
var __t = e33015;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e33015;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__33016 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33016,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33016,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq33010){
var G__33011 = cljs.core.first.call(null,seq33010);
var seq33010__$1 = cljs.core.next.call(null,seq33010);
var G__33012 = cljs.core.first.call(null,seq33010__$1);
var seq33010__$2 = cljs.core.next.call(null,seq33010__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33011,G__33012,seq33010__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args33024 = [];
var len__32057__auto___33027 = arguments.length;
var i__32058__auto___33028 = (0);
while(true){
if((i__32058__auto___33028 < len__32057__auto___33027)){
args33024.push((arguments[i__32058__auto___33028]));

var G__33029 = (i__32058__auto___33028 + (1));
i__32058__auto___33028 = G__33029;
continue;
} else {
}
break;
}

var G__33026 = args33024.length;
switch (G__33026) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33024.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args33033 = [];
var len__32057__auto___33036 = arguments.length;
var i__32058__auto___33037 = (0);
while(true){
if((i__32058__auto___33037 < len__32057__auto___33036)){
args33033.push((arguments[i__32058__auto___33037]));

var G__33038 = (i__32058__auto___33037 + (1));
i__32058__auto___33037 = G__33038;
continue;
} else {
}
break;
}

var G__33035 = args33033.length;
switch (G__33035) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33033.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33043 = arguments.length;
var i__32058__auto___33044 = (0);
while(true){
if((i__32058__auto___33044 < len__32057__auto___33043)){
args__32064__auto__.push((arguments[i__32058__auto___33044]));

var G__33045 = (i__32058__auto___33044 + (1));
i__32058__auto___33044 = G__33045;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq33040){
var G__33041 = cljs.core.first.call(null,seq33040);
var seq33040__$1 = cljs.core.next.call(null,seq33040);
var G__33042 = cljs.core.first.call(null,seq33040__$1);
var seq33040__$2 = cljs.core.next.call(null,seq33040__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__33041,G__33042,seq33040__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33058 = arguments.length;
var i__32058__auto___33059 = (0);
while(true){
if((i__32058__auto___33059 < len__32057__auto___33058)){
args__32064__auto__.push((arguments[i__32058__auto___33059]));

var G__33060 = (i__32058__auto___33059 + (1));
i__32058__auto___33059 = G__33060;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e33048){if((e33048 instanceof Error)){
var __t = e33048;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33048;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33049){if((e33049 instanceof Error)){
var __t = e33049;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e33049;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__30987__auto__ = m;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__31767__auto__ = (function taoensso$encore$iter__33050(s__33051){
return (new cljs.core.LazySeq(null,(function (){
var s__33051__$1 = s__33051;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33051__$1);
if(temp__4657__auto__){
var s__33051__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33051__$2)){
var c__31765__auto__ = cljs.core.chunk_first.call(null,s__33051__$2);
var size__31766__auto__ = cljs.core.count.call(null,c__31765__auto__);
var b__33053 = cljs.core.chunk_buffer.call(null,size__31766__auto__);
if((function (){var i__33052 = (0);
while(true){
if((i__33052 < size__31766__auto__)){
var vec__33056 = cljs.core._nth.call(null,c__31765__auto__,i__33052);
var k = cljs.core.nth.call(null,vec__33056,(0),null);
var v = cljs.core.nth.call(null,vec__33056,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__33053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33061 = (i__33052 + (1));
i__33052 = G__33061;
continue;
} else {
var G__33062 = (i__33052 + (1));
i__33052 = G__33062;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33053),taoensso$encore$iter__33050.call(null,cljs.core.chunk_rest.call(null,s__33051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33053),null);
}
} else {
var vec__33057 = cljs.core.first.call(null,s__33051__$2);
var k = cljs.core.nth.call(null,vec__33057,(0),null);
var v = cljs.core.nth.call(null,vec__33057,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__33050.call(null,cljs.core.rest.call(null,s__33051__$2)));
} else {
var G__33063 = cljs.core.rest.call(null,s__33051__$2);
s__33051__$1 = G__33063;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31767__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq33046){
var G__33047 = cljs.core.first.call(null,seq33046);
var seq33046__$1 = cljs.core.next.call(null,seq33046);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__33047,seq33046__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33076 = arguments.length;
var i__32058__auto___33077 = (0);
while(true){
if((i__32058__auto___33077 < len__32057__auto___33076)){
args__32064__auto__.push((arguments[i__32058__auto___33077]));

var G__33078 = (i__32058__auto___33077 + (1));
i__32058__auto___33077 = G__33078;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e33066){if((e33066 instanceof Error)){
var __t = e33066;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33066;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33067){if((e33067 instanceof Error)){
var __t = e33067;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e33067;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__30987__auto__ = m;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__31767__auto__ = (function taoensso$encore$iter__33068(s__33069){
return (new cljs.core.LazySeq(null,(function (){
var s__33069__$1 = s__33069;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33069__$1);
if(temp__4657__auto__){
var s__33069__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33069__$2)){
var c__31765__auto__ = cljs.core.chunk_first.call(null,s__33069__$2);
var size__31766__auto__ = cljs.core.count.call(null,c__31765__auto__);
var b__33071 = cljs.core.chunk_buffer.call(null,size__31766__auto__);
if((function (){var i__33070 = (0);
while(true){
if((i__33070 < size__31766__auto__)){
var vec__33074 = cljs.core._nth.call(null,c__31765__auto__,i__33070);
var k = cljs.core.nth.call(null,vec__33074,(0),null);
var v = cljs.core.nth.call(null,vec__33074,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__33071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33079 = (i__33070 + (1));
i__33070 = G__33079;
continue;
} else {
var G__33080 = (i__33070 + (1));
i__33070 = G__33080;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33071),taoensso$encore$iter__33068.call(null,cljs.core.chunk_rest.call(null,s__33069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33071),null);
}
} else {
var vec__33075 = cljs.core.first.call(null,s__33069__$2);
var k = cljs.core.nth.call(null,vec__33075,(0),null);
var v = cljs.core.nth.call(null,vec__33075,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__33068.call(null,cljs.core.rest.call(null,s__33069__$2)));
} else {
var G__33081 = cljs.core.rest.call(null,s__33069__$2);
s__33069__$1 = G__33081;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31767__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq33064){
var G__33065 = cljs.core.first.call(null,seq33064);
var seq33064__$1 = cljs.core.next.call(null,seq33064);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__33065,seq33064__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args33082 = [];
var len__32057__auto___33085 = arguments.length;
var i__32058__auto___33086 = (0);
while(true){
if((i__32058__auto___33086 < len__32057__auto___33085)){
args33082.push((arguments[i__32058__auto___33086]));

var G__33087 = (i__32058__auto___33086 + (1));
i__32058__auto___33086 = G__33087;
continue;
} else {
}
break;
}

var G__33084 = args33082.length;
switch (G__33084) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33082.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33090 = arguments.length;
var i__32058__auto___33091 = (0);
while(true){
if((i__32058__auto___33091 < len__32057__auto___33090)){
args__32064__auto__.push((arguments[i__32058__auto___33091]));

var G__33092 = (i__32058__auto___33091 + (1));
i__32058__auto___33091 = G__33092;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq33089){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33089));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33095 = arguments.length;
var i__32058__auto___33096 = (0);
while(true){
if((i__32058__auto___33096 < len__32057__auto___33095)){
args__32064__auto__.push((arguments[i__32058__auto___33096]));

var G__33097 = (i__32058__auto___33096 + (1));
i__32058__auto___33096 = G__33097;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq33093){
var G__33094 = cljs.core.first.call(null,seq33093);
var seq33093__$1 = cljs.core.next.call(null,seq33093);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__33094,seq33093__$1);
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf
);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf
));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?new cljs.core.Keyword(null,"keywordize","keywordize",1381210758):(function (k,_){
return f.call(null,k);
})),null,m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__30975__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__30975__auto__)){
return predv.call(null,v);
} else {
return and__30975__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.as_map_STAR_ = (function taoensso$encore$as_map_STAR_(kf,vf,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__33104){
var vec__33105 = p__33104;
var k = cljs.core.nth.call(null,vec__33105,(0),null);
var v = cljs.core.nth.call(null,vec__33105,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33110 = arguments.length;
var i__32058__auto___33111 = (0);
while(true){
if((i__32058__auto___33111 < len__32057__auto___33110)){
args__32064__auto__.push((arguments[i__32058__auto___33111]));

var G__33112 = (i__32058__auto___33111 + (1));
i__32058__auto___33111 = G__33112;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__33108){
var vec__33109 = p__33108;
var kf = cljs.core.nth.call(null,vec__33109,(0),null);
var vf = cljs.core.nth.call(null,vec__33109,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__33109,kf,vf){
return (function (_,v){
return v;
});})(vec__33109,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__33109,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__33109,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__33109,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__33109,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq33106){
var G__33107 = cljs.core.first.call(null,seq33106);
var seq33106__$1 = cljs.core.next.call(null,seq33106);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__33107,seq33106__$1);
});
/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__33113 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__33114 = cljs.core.next.call(null,ks__$1);
var G__33115 = cljs.core.next.call(null,vs__$1);
m = G__33113;
ks__$1 = G__33114;
vs__$1 = G__33115;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args33116 = [];
var len__32057__auto___33122 = arguments.length;
var i__32058__auto___33123 = (0);
while(true){
if((i__32058__auto___33123 < len__32057__auto___33122)){
args33116.push((arguments[i__32058__auto___33123]));

var G__33124 = (i__32058__auto___33123 + (1));
i__32058__auto___33123 = G__33124;
continue;
} else {
}
break;
}

var G__33121 = args33116.length;
switch (G__33121) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__32076__auto__ = (new cljs.core.IndexedSeq(args33116.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq33117){
var G__33118 = cljs.core.first.call(null,seq33117);
var seq33117__$1 = cljs.core.next.call(null,seq33117);
var G__33119 = cljs.core.first.call(null,seq33117__$1);
var seq33117__$2 = cljs.core.next.call(null,seq33117__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__33118,G__33119,seq33117__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args33126 = [];
var len__32057__auto___33132 = arguments.length;
var i__32058__auto___33133 = (0);
while(true){
if((i__32058__auto___33133 < len__32057__auto___33132)){
args33126.push((arguments[i__32058__auto___33133]));

var G__33134 = (i__32058__auto___33133 + (1));
i__32058__auto___33133 = G__33134;
continue;
} else {
}
break;
}

var G__33131 = args33126.length;
switch (G__33131) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__32076__auto__ = (new cljs.core.IndexedSeq(args33126.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq33127){
var G__33128 = cljs.core.first.call(null,seq33127);
var seq33127__$1 = cljs.core.next.call(null,seq33127);
var G__33129 = cljs.core.first.call(null,seq33127__$1);
var seq33127__$2 = cljs.core.next.call(null,seq33127__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__33128,G__33129,seq33127__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__33142,seen__$1){
while(true){
var vec__33143 = p__33142;
var v = cljs.core.nth.call(null,vec__33143,(0),null);
var xs__$1 = vec__33143;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__33144 = cljs.core.rest.call(null,s);
var G__33145 = seen__$1;
p__33142 = G__33144;
seen__$1 = G__33145;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args33150 = [];
var len__32057__auto___33153 = arguments.length;
var i__32058__auto___33154 = (0);
while(true){
if((i__32058__auto___33154 < len__32057__auto___33153)){
args33150.push((arguments[i__32058__auto___33154]));

var G__33155 = (i__32058__auto___33154 + (1));
i__32058__auto___33154 = G__33155;
continue;
} else {
}
break;
}

var G__33152 = args33150.length;
switch (G__33152) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33150.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__33157 = null;
var G__33157__0 = (function (){
return rf.call(null);
});
var G__33157__1 = (function (acc){
return rf.call(null,acc);
});
var G__33157__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__33157 = function(acc,input){
switch(arguments.length){
case 0:
return G__33157__0.call(this);
case 1:
return G__33157__1.call(this,acc);
case 2:
return G__33157__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33157.cljs$core$IFn$_invoke$arity$0 = G__33157__0;
G__33157.cljs$core$IFn$_invoke$arity$1 = G__33157__1;
G__33157.cljs$core$IFn$_invoke$arity$2 = G__33157__2;
return G__33157;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args33162 = [];
var len__32057__auto___33167 = arguments.length;
var i__32058__auto___33168 = (0);
while(true){
if((i__32058__auto___33168 < len__32057__auto___33167)){
args33162.push((arguments[i__32058__auto___33168]));

var G__33169 = (i__32058__auto___33168 + (1));
i__32058__auto___33168 = G__33169;
continue;
} else {
}
break;
}

var G__33164 = args33162.length;
switch (G__33164) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33162.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__33165,in$){
var vec__33166 = p__33165;
var v = cljs.core.nth.call(null,vec__33166,(0),null);
var seen = cljs.core.nth.call(null,vec__33166,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33173 = arguments.length;
var i__32058__auto___33174 = (0);
while(true){
if((i__32058__auto___33174 < len__32057__auto___33173)){
args__32064__auto__.push((arguments[i__32058__auto___33174]));

var G__33175 = (i__32058__auto___33174 + (1));
i__32058__auto___33174 = G__33175;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__30987__auto__ = m1;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq33171){
var G__33172 = cljs.core.first.call(null,seq33171);
var seq33171__$1 = cljs.core.next.call(null,seq33171);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__33172,seq33171__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((function (){var and__30975__auto__ = (n > (10));
if(and__30975__auto__){
if(!((coll == null))){
if(((coll.cljs$lang$protocol_mask$partition1$ & (4))) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__30975__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__33180 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__33181 = (idx + (1));
v = G__33180;
idx = G__33181;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx === n)){
return v;
} else {
var G__33182 = cljs.core.conj.call(null,v,f.call(null));
var G__33183 = (idx + (1));
v = G__33182;
idx = G__33183;
continue;
}
break;
}
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31609__auto__,k__31610__auto__){
var self__ = this;
var this__31609__auto____$1 = this;
return cljs.core._lookup.call(null,this__31609__auto____$1,k__31610__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31611__auto__,k33185,else__31612__auto__){
var self__ = this;
var this__31611__auto____$1 = this;
var G__33187 = (((k33185 instanceof cljs.core.Keyword))?k33185.fqn:null);
switch (G__33187) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33185,else__31612__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31623__auto__,writer__31624__auto__,opts__31625__auto__){
var self__ = this;
var this__31623__auto____$1 = this;
var pr_pair__31626__auto__ = ((function (this__31623__auto____$1){
return (function (keyval__31627__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,cljs.core.pr_writer,""," ","",opts__31625__auto__,keyval__31627__auto__);
});})(this__31623__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31624__auto__,pr_pair__31626__auto__,"#taoensso.encore.Swapped{",", ","}",opts__31625__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33184){
var self__ = this;
var G__33184__$1 = this;
return (new cljs.core.RecordIter((0),G__33184__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31607__auto__){
var self__ = this;
var this__31607__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31603__auto__){
var self__ = this;
var this__31603__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31613__auto__){
var self__ = this;
var this__31613__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31604__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31605__auto__,other__31606__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31618__auto__,k__31619__auto__){
var self__ = this;
var this__31618__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__31619__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31618__auto____$1),self__.__meta),k__31619__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31619__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31616__auto__,k__31617__auto__,G__33184){
var self__ = this;
var this__31616__auto____$1 = this;
var pred__33188 = cljs.core.keyword_identical_QMARK_;
var expr__33189 = k__31617__auto__;
if(cljs.core.truth_(pred__33188.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__33189))){
return (new taoensso.encore.Swapped(G__33184,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33188.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__33189))){
return (new taoensso.encore.Swapped(self__.new_val,G__33184,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31617__auto__,G__33184),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31621__auto__){
var self__ = this;
var this__31621__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31608__auto__,G__33184){
var self__ = this;
var this__31608__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__33184,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31614__auto__,entry__31615__auto__){
var self__ = this;
var this__31614__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31615__auto__)){
return cljs.core._assoc.call(null,this__31614__auto____$1,cljs.core._nth.call(null,entry__31615__auto__,(0)),cljs.core._nth.call(null,entry__31615__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31614__auto____$1,entry__31615__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__31643__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__31643__auto__,writer__31644__auto__){
return cljs.core._write.call(null,writer__31644__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__33186){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__33186),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__33186),null,cljs.core.dissoc.call(null,G__33186,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__33193 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__33193,(0),null);
var return_val = cljs.core.nth.call(null,vec__33193,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__33196 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__33196,(0),null);
var ks = cljs.core.nth.call(null,vec__33196,(1),null);
var valf = cljs.core.nth.call(null,vec__33196,(2),null);
var G__33197 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__33197) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if((valf == null)){
return accum;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33201 = arguments.length;
var i__32058__auto___33202 = (0);
while(true){
if((i__32058__auto___33202 < len__32057__auto___33201)){
args__32064__auto__.push((arguments[i__32058__auto___33202]));

var G__33203 = (i__32058__auto___33202 + (1));
i__32058__auto___33202 = G__33203;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq33199){
var G__33200 = cljs.core.first.call(null,seq33199);
var seq33199__$1 = cljs.core.next.call(null,seq33199);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__33200,seq33199__$1);
});
/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore.platform_cas_BANG_ = (function taoensso$encore$platform_cas_BANG_(atom_,old_val,new_val){
cljs.core.reset_BANG_.call(null,atom_,new_val);

return true;
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args33204 = [];
var len__32057__auto___33215 = arguments.length;
var i__32058__auto___33216 = (0);
while(true){
if((i__32058__auto___33216 < len__32057__auto___33215)){
args33204.push((arguments[i__32058__auto___33216]));

var G__33217 = (i__32058__auto___33216 + (1));
i__32058__auto___33216 = G__33217;
continue;
} else {
}
break;
}

var G__33210 = args33204.length;
switch (G__33210) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__32076__auto__ = (new cljs.core.IndexedSeq(args33204.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32076__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33211 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__33211,(0),null);
var return_val = cljs.core.nth.call(null,vec__33211,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33212 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__33212,(0),null);
var return_val = cljs.core.nth.call(null,vec__33212,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e33213){if((e33213 instanceof Error)){
var __t = e33213;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33213;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33214){if((e33214 instanceof Error)){
var __t = e33214;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e33214;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq33205){
var G__33206 = cljs.core.first.call(null,seq33205);
var seq33205__$1 = cljs.core.next.call(null,seq33205);
var G__33207 = cljs.core.first.call(null,seq33205__$1);
var seq33205__$2 = cljs.core.next.call(null,seq33205__$1);
var G__33208 = cljs.core.first.call(null,seq33205__$2);
var seq33205__$3 = cljs.core.next.call(null,seq33205__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33206,G__33207,G__33208,seq33205__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args33219 = [];
var len__32057__auto___33228 = arguments.length;
var i__32058__auto___33229 = (0);
while(true){
if((i__32058__auto___33229 < len__32057__auto___33228)){
args33219.push((arguments[i__32058__auto___33229]));

var G__33230 = (i__32058__auto___33229 + (1));
i__32058__auto___33229 = G__33230;
continue;
} else {
}
break;
}

var G__33225 = args33219.length;
switch (G__33225) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__32076__auto__ = (new cljs.core.IndexedSeq(args33219.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32076__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e33226){if((e33226 instanceof Error)){
var __t = e33226;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33226;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33227){if((e33227 instanceof Error)){
var __t = e33227;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e33227;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val__$1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq33220){
var G__33221 = cljs.core.first.call(null,seq33220);
var seq33220__$1 = cljs.core.next.call(null,seq33220);
var G__33222 = cljs.core.first.call(null,seq33220__$1);
var seq33220__$2 = cljs.core.next.call(null,seq33220__$1);
var G__33223 = cljs.core.first.call(null,seq33220__$2);
var seq33220__$3 = cljs.core.next.call(null,seq33220__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33221,G__33222,G__33223,seq33220__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(str_builder,s){
return str_builder.append(s);
});
/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args33236 = [];
var len__32057__auto___33239 = arguments.length;
var i__32058__auto___33240 = (0);
while(true){
if((i__32058__auto___33240 < len__32057__auto___33239)){
args33236.push((arguments[i__32058__auto___33240]));

var G__33241 = (i__32058__auto___33240 + (1));
i__32058__auto___33240 = G__33241;
continue;
} else {
}
break;
}

var G__33238 = args33236.length;
switch (G__33238) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33236.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__30975__auto__ = separator;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__30975__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__30987__auto__ = fmt;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33245 = arguments.length;
var i__32058__auto___33246 = (0);
while(true){
if((i__32058__auto___33246 < len__32057__auto___33245)){
args__32064__auto__.push((arguments[i__32058__auto___33246]));

var G__33247 = (i__32058__auto___33246 + (1));
i__32058__auto___33246 = G__33247;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq33243){
var G__33244 = cljs.core.first.call(null,seq33243);
var seq33243__$1 = cljs.core.next.call(null,seq33243);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__33244,seq33243__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides proper consistent Clojure/Script replace behaviour.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__33248__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__33248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33249__i = 0, G__33249__a = new Array(arguments.length -  0);
while (G__33249__i < G__33249__a.length) {G__33249__a[G__33249__i] = arguments[G__33249__i + 0]; ++G__33249__i;}
  args = new cljs.core.IndexedSeq(G__33249__a,0);
} 
return G__33248__delegate.call(this,args);};
G__33248.cljs$lang$maxFixedArity = 0;
G__33248.cljs$lang$applyTo = (function (arglist__33250){
var args = cljs.core.seq(arglist__33250);
return G__33248__delegate(args);
});
G__33248.cljs$core$IFn$_invoke$arity$variadic = G__33248__delegate;
return G__33248;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33258 = arguments.length;
var i__32058__auto___33259 = (0);
while(true){
if((i__32058__auto___33259 < len__32057__auto___33258)){
args__32064__auto__.push((arguments[i__32058__auto___33259]));

var G__33260 = (i__32058__auto___33259 + (1));
i__32058__auto___33259 = G__33260;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__33254){
var vec__33255 = p__33254;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33255,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33256){if((e33256 instanceof Error)){
var __t = e33256;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e33256;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__33257 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33257,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33257,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq33251){
var G__33252 = cljs.core.first.call(null,seq33251);
var seq33251__$1 = cljs.core.next.call(null,seq33251);
var G__33253 = cljs.core.first.call(null,seq33251__$1);
var seq33251__$2 = cljs.core.next.call(null,seq33251__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__33252,G__33253,seq33251__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33266 = arguments.length;
var i__32058__auto___33267 = (0);
while(true){
if((i__32058__auto___33267 < len__32057__auto___33266)){
args__32064__auto__.push((arguments[i__32058__auto___33267]));

var G__33268 = (i__32058__auto___33267 + (1));
i__32058__auto___33267 = G__33268;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__33264){
var vec__33265 = p__33264;
var start_idx = cljs.core.nth.call(null,vec__33265,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__33265,(1),null);
var start_idx__$1 = ((function (){var or__30987__auto__ = start_idx;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq33261){
var G__33262 = cljs.core.first.call(null,seq33261);
var seq33261__$1 = cljs.core.next.call(null,seq33261);
var G__33263 = cljs.core.first.call(null,seq33261__$1);
var seq33261__$2 = cljs.core.next.call(null,seq33261__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__33262,G__33263,seq33261__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33271 = arguments.length;
var i__32058__auto___33272 = (0);
while(true){
if((i__32058__auto___33272 < len__32057__auto___33271)){
args__32064__auto__.push((arguments[i__32058__auto___33272]));

var G__33273 = (i__32058__auto___33272 + (1));
i__32058__auto___33272 = G__33273;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq33269){
var G__33270 = cljs.core.first.call(null,seq33269);
var seq33269__$1 = cljs.core.next.call(null,seq33269);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__33270,seq33269__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33275 = arguments.length;
var i__32058__auto___33276 = (0);
while(true){
if((i__32058__auto___33276 < len__32057__auto___33275)){
args__32064__auto__.push((arguments[i__32058__auto___33276]));

var G__33277 = (i__32058__auto___33276 + (1));
i__32058__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq33274){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33274));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args33278 = [];
var len__32057__auto___33281 = arguments.length;
var i__32058__auto___33282 = (0);
while(true){
if((i__32058__auto___33282 < len__32057__auto___33281)){
args33278.push((arguments[i__32058__auto___33282]));

var G__33283 = (i__32058__auto___33282 + (1));
i__32058__auto___33282 = G__33283;
continue;
} else {
}
break;
}

var G__33280 = args33278.length;
switch (G__33280) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33278.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e33286){if((e33286 instanceof Error)){
var _ = e33286;
return false;
} else {
throw e33286;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args33287 = [];
var len__32057__auto___33290 = arguments.length;
var i__32058__auto___33291 = (0);
while(true){
if((i__32058__auto___33291 < len__32057__auto___33290)){
args33287.push((arguments[i__32058__auto___33291]));

var G__33292 = (i__32058__auto___33291 + (1));
i__32058__auto___33291 = G__33292;
continue;
} else {
}
break;
}

var G__33289 = args33287.length;
switch (G__33289) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33287.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(x)){
return x;
} else {
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x);
}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x)], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Experimental. For use with `if-let`s, `when-let`s, etc.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value. Specialized, fast
 *   `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `clojure.core/memoize` but faster, uses delays to avoid write races
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33294__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__30987__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__30987__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__30987__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__30987__auto__,cache_))
,null));
}
});})(or__30987__auto__,cache_))
);
}
})());
};
var G__33294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33295__i = 0, G__33295__a = new Array(arguments.length -  0);
while (G__33295__i < G__33295__a.length) {G__33295__a[G__33295__i] = arguments[G__33295__i + 0]; ++G__33295__i;}
  args = new cljs.core.IndexedSeq(G__33295__a,0);
} 
return G__33294__delegate.call(this,args);};
G__33294.cljs$lang$maxFixedArity = 0;
G__33294.cljs$lang$applyTo = (function (arglist__33296){
var args = cljs.core.seq(arglist__33296);
return G__33294__delegate(args);
});
G__33294.cljs$core$IFn$_invoke$arity$variadic = G__33294__delegate;
return G__33294;
})()
;
;})(cache_))
});
/**
 * Fastest possible 0-arg `memoize_`
 */
taoensso.encore.memoize_a0_ = (function taoensso$encore$memoize_a0_(f){
var cache_ = cljs.core.atom.call(null,null);
return ((function (cache_){
return (function (){
return cljs.core.deref.call(null,(function (){var or__30987__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__30987__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__30987__auto__,cache_){
return (function (){
return f.call(null);
});})(or__30987__auto__,cache_))
,null));
}
});})(or__30987__auto__,cache_))
);
}
})());
});
;})(cache_))
});
/**
 * Fastest possible 0/1-arg `memoize_`
 */
taoensso.encore.memoize_a1_ = (function taoensso$encore$memoize_a1_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() {
var G__33297 = null;
var G__33297__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__30987__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__30987__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__30987__auto__,cache_){
return (function (){
return f.call(null);
});})(or__30987__auto__,cache_))
,null));
}
});})(or__30987__auto__,cache_))
);
}
})());
});
var G__33297__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__30987__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__30987__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__30987__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__30987__auto__,cache_))
,null));
}
});})(or__30987__auto__,cache_))
);
}
})());
});
G__33297 = function(x){
switch(arguments.length){
case 0:
return G__33297__0.call(this);
case 1:
return G__33297__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33297.cljs$core$IFn$_invoke$arity$0 = G__33297__0;
G__33297.cljs$core$IFn$_invoke$arity$1 = G__33297__1;
return G__33297;
})()
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33298__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__30987__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__30987__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__30987__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__30987__auto__,cache_))
,null))], true, false);
}
});})(or__30987__auto__,cache_))
),args);
}
})());
};
var G__33298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33299__i = 0, G__33299__a = new Array(arguments.length -  0);
while (G__33299__i < G__33299__a.length) {G__33299__a[G__33299__i] = arguments[G__33299__i + 0]; ++G__33299__i;}
  args = new cljs.core.IndexedSeq(G__33299__a,0);
} 
return G__33298__delegate.call(this,args);};
G__33298.cljs$lang$maxFixedArity = 0;
G__33298.cljs$lang$applyTo = (function (arglist__33300){
var args = cljs.core.seq(arglist__33300);
return G__33298__delegate(args);
});
G__33298.cljs$core$IFn$_invoke$arity$variadic = G__33298__delegate;
return G__33298;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33304 = arguments.length;
var i__32058__auto___33305 = (0);
while(true){
if((i__32058__auto___33305 < len__32057__auto___33304)){
args__32064__auto__.push((arguments[i__32058__auto___33305]));

var G__33306 = (i__32058__auto___33305 + (1));
i__32058__auto___33305 = G__33306;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq33301){
var G__33302 = cljs.core.first.call(null,seq33301);
var seq33301__$1 = cljs.core.next.call(null,seq33301);
var G__33303 = cljs.core.first.call(null,seq33301__$1);
var seq33301__$2 = cljs.core.next.call(null,seq33301__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__33302,G__33303,seq33301__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Can be significantly faster (depends on opts)
 *  * Uses delays to prevent race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` option
 *  * Supports cache size limit & gc with `cache-size` option
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args33307 = [];
var len__32057__auto___33330 = arguments.length;
var i__32058__auto___33331 = (0);
while(true){
if((i__32058__auto___33331 < len__32057__auto___33330)){
args33307.push((arguments[i__32058__auto___33331]));

var G__33332 = (i__32058__auto___33331 + (1));
i__32058__auto___33331 = G__33332;
continue;
} else {
}
break;
}

var G__33309 = args33307.length;
switch (G__33309) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33307.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33334__delegate = function (p__33310){
var vec__33311 = p__33310;
var arg1 = cljs.core.nth.call(null,vec__33311,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33311,(1));
var args = vec__33311;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__30987__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__30987__auto__,fresh_QMARK_,args__$1,vec__33311,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__30975__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__30975__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__30987__auto__,fresh_QMARK_,args__$1,vec__33311,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__30987__auto__,fresh_QMARK_,args__$1,vec__33311,arg1,argn,args,cache_))
,null));
}
});})(or__30987__auto__,fresh_QMARK_,args__$1,vec__33311,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__33334 = function (var_args){
var p__33310 = null;
if (arguments.length > 0) {
var G__33335__i = 0, G__33335__a = new Array(arguments.length -  0);
while (G__33335__i < G__33335__a.length) {G__33335__a[G__33335__i] = arguments[G__33335__i + 0]; ++G__33335__i;}
  p__33310 = new cljs.core.IndexedSeq(G__33335__a,0);
} 
return G__33334__delegate.call(this,p__33310);};
G__33334.cljs$lang$maxFixedArity = 0;
G__33334.cljs$lang$applyTo = (function (arglist__33336){
var p__33310 = cljs.core.seq(arglist__33336);
return G__33334__delegate(p__33310);
});
G__33334.cljs$core$IFn$_invoke$arity$variadic = G__33334__delegate;
return G__33334;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_33337 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_33337))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33312){if((e33312 instanceof Error)){
var __t_33338 = e33312;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_33337,__t_33338,null);
} else {
throw e33312;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__30975__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__30975__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__30975__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__30975__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__30975__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__33313){
var vec__33314 = p__33313;
var dv = cljs.core.nth.call(null,vec__33314,(0),null);
var udt = cljs.core.nth.call(null,vec__33314,(1),null);
var cv = vec__33314;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__33339__delegate = function (p__33315){
var vec__33316 = p__33315;
var arg1 = cljs.core.nth.call(null,vec__33316,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33316,(1));
var args = vec__33316;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__33317 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__33316,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__30975__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__30975__auto____$1){
var vec__33319 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33319,(0),null);
var udt = cljs.core.nth.call(null,vec__33319,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__33316,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__33316,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__33316,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__33317,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__33339 = function (var_args){
var p__33315 = null;
if (arguments.length > 0) {
var G__33340__i = 0, G__33340__a = new Array(arguments.length -  0);
while (G__33340__i < G__33340__a.length) {G__33340__a[G__33340__i] = arguments[G__33340__i + 0]; ++G__33340__i;}
  p__33315 = new cljs.core.IndexedSeq(G__33340__a,0);
} 
return G__33339__delegate.call(this,p__33315);};
G__33339.cljs$lang$maxFixedArity = 0;
G__33339.cljs$lang$applyTo = (function (arglist__33341){
var p__33315 = cljs.core.seq(arglist__33341);
return G__33339__delegate(p__33315);
});
G__33339.cljs$core$IFn$_invoke$arity$variadic = G__33339__delegate;
return G__33339;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_33342 = ttl_ms;
if(cljs.core.truth_(((function (__x_33342){
return (function (__x__$1){
var or__30987__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_33342))
.call(null,__x_33342))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_33342,null,null);
}

var __x_33343 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_33343))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33320){if((e33320 instanceof Error)){
var __t_33344 = e33320;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_33343,__t_33344,null);
} else {
throw e33320;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__30987__auto__ = ttl_ms;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__30975__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__30975__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__30975__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__30975__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__30975__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_33345 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_33346 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_33345,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__33321){
var vec__33322 = p__33321;
var dv = cljs.core.nth.call(null,vec__33322,(0),null);
var udt = cljs.core.nth.call(null,vec__33322,(1),null);
var _ = cljs.core.nth.call(null,vec__33322,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__33322,(3),null);
var cv = vec__33322;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_33345,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_33345));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_33345,ks_to_gc_33346,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_33345,ks_to_gc_33346,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_33345,ks_to_gc_33346,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_33346));
});})(snapshot_33345,ks_to_gc_33346,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_33347 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_33348 = (cljs.core.count.call(null,snapshot_33347) - cache_size__$1);
if((n_to_gc_33348 > (64))){
var ks_to_gc_33349 = taoensso.encore.top.call(null,n_to_gc_33348,((function (snapshot_33347,n_to_gc_33348,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__33323 = snapshot_33347.call(null,k);
var _ = cljs.core.nth.call(null,vec__33323,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33323,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33323,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33323,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_33347,n_to_gc_33348,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_33347));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_33349,snapshot_33347,n_to_gc_33348,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_33349,snapshot_33347,n_to_gc_33348,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_33349,snapshot_33347,n_to_gc_33348,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_33349));
});})(ks_to_gc_33349,snapshot_33347,n_to_gc_33348,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((!(ttl_ms_QMARK_))?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__30975__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__30975__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__30975__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__30975__auto____$1){
var vec__33325 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33325,(0),null);
var udt = cljs.core.nth.call(null,vec__33325,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__33350__delegate = function (p__33326){
var vec__33327 = p__33326;
var arg1 = cljs.core.nth.call(null,vec__33327,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33327,(1));
var args = vec__33327;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return state_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__33328 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__33328,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__33328,dv,vec__33327,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__33329 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__33329,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__33329,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33329,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33329,(3),null);
var cv = vec__33329;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__33328,dv,vec__33327,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__33350 = function (var_args){
var p__33326 = null;
if (arguments.length > 0) {
var G__33351__i = 0, G__33351__a = new Array(arguments.length -  0);
while (G__33351__i < G__33351__a.length) {G__33351__a[G__33351__i] = arguments[G__33351__i + 0]; ++G__33351__i;}
  p__33326 = new cljs.core.IndexedSeq(G__33351__a,0);
} 
return G__33350__delegate.call(this,p__33326);};
G__33350.cljs$lang$maxFixedArity = 0;
G__33350.cljs$lang$applyTo = (function (arglist__33352){
var p__33326 = cljs.core.seq(arglist__33352);
return G__33350__delegate(p__33326);
});
G__33350.cljs$core$IFn$_invoke$arity$variadic = G__33350__delegate;
return G__33350;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__33388){
var vec__33389 = p__33388;
var _ = cljs.core.nth.call(null,vec__33389,(0),null);
var win_ms = cljs.core.nth.call(null,vec__33389,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__33389,(2),null);
var spec = vec__33389;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__33390){
var vec__33391 = p__33390;
var _ = cljs.core.nth.call(null,vec__33391,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33391,(1),null);
var id = cljs.core.nth.call(null,vec__33391,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__33392){
var vec__33408 = p__33392;
var _QMARK_a1 = cljs.core.nth.call(null,vec__33408,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__33408,(1),null);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","debug","rl/debug",-1608167914)))){
return vstates_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,vstates_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","peek","rl/peek",-291391771));
var req_id = (cljs.core.truth_(peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__30975__auto__ = req_id;
if(cljs.core.truth_(and__30975__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__30975__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__33411){
var vec__33412 = p__33411;
var ___$1 = cljs.core.nth.call(null,vec__33412,(0),null);
var udt = cljs.core.nth.call(null,vec__33412,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__33412,(2),null);
var x__31318__auto__ = acc;
var y__31319__auto__ = udt;
return ((x__31318__auto__ > y__31319__auto__) ? x__31318__auto__ : y__31319__auto__);
});})(peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__33413 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__33414 = in_vspecs;
var vec__33415 = cljs.core.nth.call(null,vec__33414,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__33415,(0),null);
var win_ms = cljs.core.nth.call(null,vec__33415,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__33415,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__33414,(1));
var vec__33416 = in_vstate;
var vec__33417 = cljs.core.nth.call(null,vec__33416,(0),null);
var ncalls = cljs.core.nth.call(null,vec__33417,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__33417,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__33416,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__30987__auto__ = (_QMARK_worst_limit_offence == null);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var vec__33419 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__33419,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33419,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__33423 = next_in_vspecs;
var G__33424 = next_in_vstate;
var G__33425 = new_out_vstate;
var G__33426 = new__QMARK_worst_limit_offence;
in_vspecs = G__33423;
in_vstate = G__33424;
out_vstate = G__33425;
_QMARK_worst_limit_offence = G__33426;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__33413,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__33413,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__33413,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__33420){
var vec__33421 = p__33420;
var ncalls = cljs.core.nth.call(null,vec__33421,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__33421,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__33413,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__33422 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__33422,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33422,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__33408,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__33392 = null;
if (arguments.length > 0) {
var G__33427__i = 0, G__33427__a = new Array(arguments.length -  0);
while (G__33427__i < G__33427__a.length) {G__33427__a[G__33427__i] = arguments[G__33427__i + 0]; ++G__33427__i;}
  p__33392 = new cljs.core.IndexedSeq(G__33427__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__33392);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__33428){
var p__33392 = cljs.core.seq(arglist__33428);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__33392);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__33429__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__33429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33430__i = 0, G__33430__a = new Array(arguments.length -  0);
while (G__33430__i < G__33430__a.length) {G__33430__a[G__33430__i] = arguments[G__33430__i + 0]; ++G__33430__i;}
  args = new cljs.core.IndexedSeq(G__33430__a,0);
} 
return G__33429__delegate.call(this,args);};
G__33429.cljs$lang$maxFixedArity = 0;
G__33429.cljs$lang$applyTo = (function (arglist__33431){
var args = cljs.core.seq(arglist__33431);
return G__33429__delegate(args);
});
G__33429.cljs$core$IFn$_invoke$arity$variadic = G__33429__delegate;
return G__33429;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = (function (){var and__30975__auto__ = typeof window !== 'undefined';
if(and__30975__auto__){
return (window["performance"]);
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__30987__auto__ = (perf["now"]);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__30987__auto____$1)){
return or__30987__auto____$1;
} else {
var or__30987__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__30987__auto____$2)){
return or__30987__auto____$2;
} else {
var or__30987__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__30987__auto____$3)){
return or__30987__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto__))
}
})();
taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__30975__auto__ = typeof console !== 'undefined';
if(and__30975__auto__){
return console.log;
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33439 = arguments.length;
var i__32058__auto___33440 = (0);
while(true){
if((i__32058__auto___33440 < len__32057__auto___33439)){
args__32064__auto__.push((arguments[i__32058__auto___33440]));

var G__33441 = (i__32058__auto___33440 + (1));
i__32058__auto___33440 = G__33441;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq33432){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33432));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33442 = arguments.length;
var i__32058__auto___33443 = (0);
while(true){
if((i__32058__auto___33443 < len__32057__auto___33442)){
args__32064__auto__.push((arguments[i__32058__auto___33443]));

var G__33444 = (i__32058__auto___33443 + (1));
i__32058__auto___33443 = G__33444;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq33433){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33433));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33445 = arguments.length;
var i__32058__auto___33446 = (0);
while(true){
if((i__32058__auto___33446 < len__32057__auto___33445)){
args__32064__auto__.push((arguments[i__32058__auto___33446]));

var G__33447 = (i__32058__auto___33446 + (1));
i__32058__auto___33446 = G__33447;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq33434){
var G__33435 = cljs.core.first.call(null,seq33434);
var seq33434__$1 = cljs.core.next.call(null,seq33434);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__33435,seq33434__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33448 = arguments.length;
var i__32058__auto___33449 = (0);
while(true){
if((i__32058__auto___33449 < len__32057__auto___33448)){
args__32064__auto__.push((arguments[i__32058__auto___33449]));

var G__33450 = (i__32058__auto___33449 + (1));
i__32058__auto___33449 = G__33450;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq33436){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33436));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33451 = arguments.length;
var i__32058__auto___33452 = (0);
while(true){
if((i__32058__auto___33452 < len__32057__auto___33451)){
args__32064__auto__.push((arguments[i__32058__auto___33452]));

var G__33453 = (i__32058__auto___33452 + (1));
i__32058__auto___33452 = G__33453;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq33437){
var G__33438 = cljs.core.first.call(null,seq33437);
var seq33437__$1 = cljs.core.next.call(null,seq33437);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__33438,seq33437__$1);
});
/**
 * Returns browser window's current location. These details can be forged!
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
if(cljs.core.truth_(((function (__x){
return (function (__x__$1){
var or__30987__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});})(__x))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__33455 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33455) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__33459,callback){
var map__33477 = p__33459;
var map__33477__$1 = ((((!((map__33477 == null)))?((((map__33477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33477):map__33477);
var opts = map__33477__$1;
var method = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__30987__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] timeout-ms)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__30987__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__33481 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33481) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__33480 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__33480,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__33480,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__33482_33495 = xhr;
goog.events.listenOnce(G__33482_33495,goog.net.EventType.READY,((function (G__33482_33495,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__33482_33495,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__33482_33495,goog.net.EventType.COMPLETE,((function (G__33482_33495,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__33488 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33482_33495,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__33458_SHARP_,p2__33457_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__33457_SHARP_,p1__33458_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33482_33495,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__33489 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__33488.call(null,"/edn",expr__33489))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__33488.call(null,"/json",expr__33489))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__33488.call(null,"/xml",expr__33489))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__33488.call(null,"/html",expr__33489))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__33492 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__33492) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e33491){if((e33491 instanceof Error)){
var e = e33491;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e33491;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__30987__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__33482_33495,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4657__auto___33497 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___33497)){
var pf_33498 = temp__4657__auto___33497;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_33498,temp__4657__auto___33497,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__30975__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__30975__auto__;
}
})())?(loaded / total):null);
return pf_33498.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_33498,temp__4657__auto___33497,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33480,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__33477,map__33477__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__33493_33499 = xhr;
var temp__4657__auto___33500 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___33500)){
var x_33501 = temp__4657__auto___33500;
G__33493_33499.setTimeoutInterval((function (){var or__30987__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___33502 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___33502)){
var x_33503 = temp__4657__auto___33502;
G__33493_33499.setWithCredentials(true);
} else {
}

var temp__4657__auto___33504 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___33504)){
var x_33505 = temp__4657__auto___33504;
G__33493_33499.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e33479){if((e33479 instanceof Error)){
var e = e33479;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e33479;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33510 = arguments.length;
var i__32058__auto___33511 = (0);
while(true){
if((i__32058__auto___33511 < len__32057__auto___33510)){
args__32064__auto__.push((arguments[i__32058__auto___33511]));

var G__33512 = (i__32058__auto___33511 + (1));
i__32058__auto___33511 = G__33512;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33508){
var vec__33509 = p__33508;
var encoding = cljs.core.nth.call(null,vec__33509,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq33506){
var G__33507 = cljs.core.first.call(null,seq33506);
var seq33506__$1 = cljs.core.next.call(null,seq33506);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__33507,seq33506__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__30987__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__31767__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__33521(s__33522){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__33522__$1 = s__33522;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33522__$1);
if(temp__4657__auto__){
var s__33522__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33522__$2)){
var c__31765__auto__ = cljs.core.chunk_first.call(null,s__33522__$2);
var size__31766__auto__ = cljs.core.count.call(null,c__31765__auto__);
var b__33524 = cljs.core.chunk_buffer.call(null,size__31766__auto__);
if((function (){var i__33523 = (0);
while(true){
if((i__33523 < size__31766__auto__)){
var vec__33527 = cljs.core._nth.call(null,c__31765__auto__,i__33523);
var k = cljs.core.nth.call(null,vec__33527,(0),null);
var v = cljs.core.nth.call(null,vec__33527,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__33524,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__30987__auto__ = cljs.core.seq.call(null,v);
if(or__30987__auto__){
return or__30987__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__33529 = (i__33523 + (1));
i__33523 = G__33529;
continue;
} else {
var G__33530 = (i__33523 + (1));
i__33523 = G__33530;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33524),taoensso$encore$format_query_string_$_iter__33521.call(null,cljs.core.chunk_rest.call(null,s__33522__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33524),null);
}
} else {
var vec__33528 = cljs.core.first.call(null,s__33522__$2);
var k = cljs.core.nth.call(null,vec__33528,(0),null);
var v = cljs.core.nth.call(null,vec__33528,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__30987__auto__ = cljs.core.seq.call(null,v);
if(or__30987__auto__){
return or__30987__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__33521.call(null,cljs.core.rest.call(null,s__33522__$2)));
} else {
var G__33531 = cljs.core.rest.call(null,s__33522__$2);
s__33522__$1 = G__33531;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__31767__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33538 = arguments.length;
var i__32058__auto___33539 = (0);
while(true){
if((i__32058__auto___33539 < len__32057__auto___33538)){
args__32064__auto__.push((arguments[i__32058__auto___33539]));

var G__33540 = (i__32058__auto___33539 + (1));
i__32058__auto___33539 = G__33540;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33534){
var vec__33535 = p__33534;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__33535,(0),null);
var encoding = cljs.core.nth.call(null,vec__33535,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__33535,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__33536 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__33536,(0),null);
var v = cljs.core.nth.call(null,vec__33536,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__33535,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33537){if((e33537 instanceof Error)){
var __t = e33537;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e33537;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq33532){
var G__33533 = cljs.core.first.call(null,seq33532);
var seq33532__$1 = cljs.core.next.call(null,seq33532);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__33533,seq33532__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__33542 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__33542,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__33542,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore.a0_memoize_ = taoensso.encore.memoize_a0_;
taoensso.encore.a1_memoize_ = taoensso.encore.memoize_a1_;
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG__STAR_;
taoensso.encore.fq_name = taoensso.encore.qname;
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33547 = arguments.length;
var i__32058__auto___33548 = (0);
while(true){
if((i__32058__auto___33548 < len__32057__auto___33547)){
args__32064__auto__.push((arguments[i__32058__auto___33548]));

var G__33549 = (i__32058__auto___33548 + (1));
i__32058__auto___33548 = G__33549;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__33545){
var vec__33546 = p__33545;
var type = cljs.core.nth.call(null,vec__33546,(0),null);
var nplaces = cljs.core.nth.call(null,vec__33546,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__30987__auto__ = type;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq33543){
var G__33544 = cljs.core.first.call(null,seq33543);
var seq33543__$1 = cljs.core.next.call(null,seq33543);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__33544,seq33543__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33554 = arguments.length;
var i__32058__auto___33555 = (0);
while(true){
if((i__32058__auto___33555 < len__32057__auto___33554)){
args__32064__auto__.push((arguments[i__32058__auto___33555]));

var G__33556 = (i__32058__auto___33555 + (1));
i__32058__auto___33555 = G__33556;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__33552){
var vec__33553 = p__33552;
var nattempt = cljs.core.nth.call(null,vec__33553,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__30987__auto__ = nattempt;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq33550){
var G__33551 = cljs.core.first.call(null,seq33550);
var seq33550__$1 = cljs.core.next.call(null,seq33550);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33551,seq33550__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__33557__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__33557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33558__i = 0, G__33558__a = new Array(arguments.length -  0);
while (G__33558__i < G__33558__a.length) {G__33558__a[G__33558__i] = arguments[G__33558__i + 0]; ++G__33558__i;}
  args = new cljs.core.IndexedSeq(G__33558__a,0);
} 
return G__33557__delegate.call(this,args);};
G__33557.cljs$lang$maxFixedArity = 0;
G__33557.cljs$lang$applyTo = (function (arglist__33559){
var args = cljs.core.seq(arglist__33559);
return G__33557__delegate(args);
});
G__33557.cljs$core$IFn$_invoke$arity$variadic = G__33557__delegate;
return G__33557;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33574 = arguments.length;
var i__32058__auto___33575 = (0);
while(true){
if((i__32058__auto___33575 < len__32057__auto___33574)){
args__32064__auto__.push((arguments[i__32058__auto___33575]));

var G__33576 = (i__32058__auto___33575 + (1));
i__32058__auto___33575 = G__33576;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq33560){
var G__33561 = cljs.core.first.call(null,seq33560);
var seq33560__$1 = cljs.core.next.call(null,seq33560);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__33561,seq33560__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33577 = arguments.length;
var i__32058__auto___33578 = (0);
while(true){
if((i__32058__auto___33578 < len__32057__auto___33577)){
args__32064__auto__.push((arguments[i__32058__auto___33578]));

var G__33579 = (i__32058__auto___33578 + (1));
i__32058__auto___33578 = G__33579;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq33562){
var G__33563 = cljs.core.first.call(null,seq33562);
var seq33562__$1 = cljs.core.next.call(null,seq33562);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__33563,seq33562__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33580 = arguments.length;
var i__32058__auto___33581 = (0);
while(true){
if((i__32058__auto___33581 < len__32057__auto___33580)){
args__32064__auto__.push((arguments[i__32058__auto___33581]));

var G__33582 = (i__32058__auto___33581 + (1));
i__32058__auto___33581 = G__33582;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq33564){
var G__33565 = cljs.core.first.call(null,seq33564);
var seq33564__$1 = cljs.core.next.call(null,seq33564);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__33565,seq33564__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33583 = arguments.length;
var i__32058__auto___33584 = (0);
while(true){
if((i__32058__auto___33584 < len__32057__auto___33583)){
args__32064__auto__.push((arguments[i__32058__auto___33584]));

var G__33585 = (i__32058__auto___33584 + (1));
i__32058__auto___33584 = G__33585;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq33566){
var G__33567 = cljs.core.first.call(null,seq33566);
var seq33566__$1 = cljs.core.next.call(null,seq33566);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__33567,seq33566__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33586 = arguments.length;
var i__32058__auto___33587 = (0);
while(true){
if((i__32058__auto___33587 < len__32057__auto___33586)){
args__32064__auto__.push((arguments[i__32058__auto___33587]));

var G__33588 = (i__32058__auto___33587 + (1));
i__32058__auto___33587 = G__33588;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq33568){
var G__33569 = cljs.core.first.call(null,seq33568);
var seq33568__$1 = cljs.core.next.call(null,seq33568);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__33569,seq33568__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33589 = arguments.length;
var i__32058__auto___33590 = (0);
while(true){
if((i__32058__auto___33590 < len__32057__auto___33589)){
args__32064__auto__.push((arguments[i__32058__auto___33590]));

var G__33591 = (i__32058__auto___33590 + (1));
i__32058__auto___33590 = G__33591;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq33570){
var G__33571 = cljs.core.first.call(null,seq33570);
var seq33570__$1 = cljs.core.next.call(null,seq33570);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__33571,seq33570__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33592 = arguments.length;
var i__32058__auto___33593 = (0);
while(true){
if((i__32058__auto___33593 < len__32057__auto___33592)){
args__32064__auto__.push((arguments[i__32058__auto___33593]));

var G__33594 = (i__32058__auto___33593 + (1));
i__32058__auto___33593 = G__33594;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq33572){
var G__33573 = cljs.core.first.call(null,seq33572);
var seq33572__$1 = cljs.core.next.call(null,seq33572);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__33573,seq33572__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33601 = arguments.length;
var i__32058__auto___33602 = (0);
while(true){
if((i__32058__auto___33602 < len__32057__auto___33601)){
args__32064__auto__.push((arguments[i__32058__auto___33602]));

var G__33603 = (i__32058__auto___33602 + (1));
i__32058__auto___33602 = G__33603;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33599){
var vec__33600 = p__33599;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33600,(0),null);
var comparator = (function (){var or__30987__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33600,_QMARK_comparator){
return (function (p1__33595_SHARP_,p2__33596_SHARP_){
if((comparator.call(null,p1__33595_SHARP_,p2__33596_SHARP_) > (0))){
return p2__33596_SHARP_;
} else {
return p1__33595_SHARP_;
}
});})(comparator,vec__33600,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq33597){
var G__33598 = cljs.core.first.call(null,seq33597);
var seq33597__$1 = cljs.core.next.call(null,seq33597);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__33598,seq33597__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__32064__auto__ = [];
var len__32057__auto___33610 = arguments.length;
var i__32058__auto___33611 = (0);
while(true){
if((i__32058__auto___33611 < len__32057__auto___33610)){
args__32064__auto__.push((arguments[i__32058__auto___33611]));

var G__33612 = (i__32058__auto___33611 + (1));
i__32058__auto___33611 = G__33612;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33608){
var vec__33609 = p__33608;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33609,(0),null);
var comparator = (function (){var or__30987__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33609,_QMARK_comparator){
return (function (p1__33604_SHARP_,p2__33605_SHARP_){
if((comparator.call(null,p1__33604_SHARP_,p2__33605_SHARP_) < (0))){
return p2__33605_SHARP_;
} else {
return p1__33604_SHARP_;
}
});})(comparator,vec__33609,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq33606){
var G__33607 = cljs.core.first.call(null,seq33606);
var seq33606__$1 = cljs.core.next.call(null,seq33606);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__33607,seq33606__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__30987__auto__ = x;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map?rel=1487610701583