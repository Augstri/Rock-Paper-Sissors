// Compiled by ClojureScript 1.8.51 {}
goog.provide('devtools.dirac');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('devtools.prefs');
goog.require('clojure.string');
goog.require('goog.labs.userAgent.browser');
devtools.dirac.available_QMARK_ = (function devtools$dirac$available_QMARK_(){
var and__30975__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__30975__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__30975__auto__;
}
});
if(typeof devtools.dirac._STAR_installed_QMARK__STAR_ !== 'undefined'){
} else {
devtools.dirac._STAR_installed_QMARK__STAR_ = false;
}
if(typeof devtools.dirac.api_version !== 'undefined'){
} else {
devtools.dirac.api_version = (2);
}
devtools.dirac.default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"weasel-auto-reconnect","weasel-auto-reconnect",-1029132223),new cljs.core.Keyword(null,"eval-time-limit","eval-time-limit",1470179717),new cljs.core.Keyword(null,"agent-verbose","agent-verbose",714204005),new cljs.core.Keyword(null,"agent-response-timeout","agent-response-timeout",-104323929),new cljs.core.Keyword(null,"agent-host","agent-host",-544377515),new cljs.core.Keyword(null,"weasel-verbose","weasel-verbose",613531446),new cljs.core.Keyword(null,"weasel-pre-eval-delay","weasel-pre-eval-delay",1053650811),new cljs.core.Keyword(null,"install-check-next-trial-waiting-time","install-check-next-trial-waiting-time",1679580093),new cljs.core.Keyword(null,"install-check-eval-time-limit","install-check-eval-time-limit",-1484307459),new cljs.core.Keyword(null,"agent-port","agent-port",1866425630),new cljs.core.Keyword(null,"agent-auto-reconnect","agent-auto-reconnect",-416343458),new cljs.core.Keyword(null,"install-check-total-time-limit","install-check-total-time-limit",-912454882)],[false,(10000),false,(5000),"localhost",false,(100),(500),(300),"8231",true,(5000)]);
if(typeof devtools.dirac.static_config !== 'undefined'){
} else {
devtools.dirac.static_config = cljs.core.PersistentArrayMap.EMPTY;
}
devtools.dirac.console_tunnel = (function devtools$dirac$console_tunnel(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34108 = arguments.length;
var i__32058__auto___34109 = (0);
while(true){
if((i__32058__auto___34109 < len__32057__auto___34108)){
args__32064__auto__.push((arguments[i__32058__auto___34109]));

var G__34110 = (i__32058__auto___34109 + (1));
i__32058__auto___34109 = G__34110;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.into_array.call(null,args));
});

devtools.dirac.console_tunnel.cljs$lang$maxFixedArity = (1);

devtools.dirac.console_tunnel.cljs$lang$applyTo = (function (seq34106){
var G__34107 = cljs.core.first.call(null,seq34106);
var seq34106__$1 = cljs.core.next.call(null,seq34106);
return devtools.dirac.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__34107,seq34106__$1);
});
devtools.dirac.dirac_msg_args = (function devtools$dirac$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
devtools.dirac.dirac_log_args = (function devtools$dirac$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
devtools.dirac.call_dirac = (function devtools$dirac$call_dirac(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34113 = arguments.length;
var i__32058__auto___34114 = (0);
while(true){
if((i__32058__auto___34114 < len__32057__auto___34113)){
args__32064__auto__.push((arguments[i__32058__auto___34114]));

var G__34115 = (i__32058__auto___34114 + (1));
i__32058__auto___34114 = G__34115;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"log",devtools.dirac.dirac_msg_args.call(null,name,args));
});

devtools.dirac.call_dirac.cljs$lang$maxFixedArity = (1);

devtools.dirac.call_dirac.cljs$lang$applyTo = (function (seq34111){
var G__34112 = cljs.core.first.call(null,seq34111);
var seq34111__$1 = cljs.core.next.call(null,seq34111);
return devtools.dirac.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__34112,seq34111__$1);
});
devtools.dirac.log = (function devtools$dirac$log(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34119 = arguments.length;
var i__32058__auto___34120 = (0);
while(true){
if((i__32058__auto___34120 < len__32057__auto___34119)){
args__32064__auto__.push((arguments[i__32058__auto___34120]));

var G__34121 = (i__32058__auto___34120 + (1));
i__32058__auto___34120 = G__34121;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"log",devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.log.cljs$lang$maxFixedArity = (2);

devtools.dirac.log.cljs$lang$applyTo = (function (seq34116){
var G__34117 = cljs.core.first.call(null,seq34116);
var seq34116__$1 = cljs.core.next.call(null,seq34116);
var G__34118 = cljs.core.first.call(null,seq34116__$1);
var seq34116__$2 = cljs.core.next.call(null,seq34116__$1);
return devtools.dirac.log.cljs$core$IFn$_invoke$arity$variadic(G__34117,G__34118,seq34116__$2);
});
devtools.dirac.warn = (function devtools$dirac$warn(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34125 = arguments.length;
var i__32058__auto___34126 = (0);
while(true){
if((i__32058__auto___34126 < len__32057__auto___34125)){
args__32064__auto__.push((arguments[i__32058__auto___34126]));

var G__34127 = (i__32058__auto___34126 + (1));
i__32058__auto___34126 = G__34127;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"warn",devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.warn.cljs$lang$maxFixedArity = (2);

devtools.dirac.warn.cljs$lang$applyTo = (function (seq34122){
var G__34123 = cljs.core.first.call(null,seq34122);
var seq34122__$1 = cljs.core.next.call(null,seq34122);
var G__34124 = cljs.core.first.call(null,seq34122__$1);
var seq34122__$2 = cljs.core.next.call(null,seq34122__$1);
return devtools.dirac.warn.cljs$core$IFn$_invoke$arity$variadic(G__34123,G__34124,seq34122__$2);
});
devtools.dirac.error = (function devtools$dirac$error(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34131 = arguments.length;
var i__32058__auto___34132 = (0);
while(true){
if((i__32058__auto___34132 < len__32057__auto___34131)){
args__32064__auto__.push((arguments[i__32058__auto___34132]));

var G__34133 = (i__32058__auto___34132 + (1));
i__32058__auto___34132 = G__34133;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,"error",devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.error.cljs$lang$maxFixedArity = (2);

devtools.dirac.error.cljs$lang$applyTo = (function (seq34128){
var G__34129 = cljs.core.first.call(null,seq34128);
var seq34128__$1 = cljs.core.next.call(null,seq34128);
var G__34130 = cljs.core.first.call(null,seq34128__$1);
var seq34128__$2 = cljs.core.next.call(null,seq34128__$1);
return devtools.dirac.error.cljs$core$IFn$_invoke$arity$variadic(G__34129,G__34130,seq34128__$2);
});
devtools.dirac.group_STAR_ = (function devtools$dirac$group_STAR_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34138 = arguments.length;
var i__32058__auto___34139 = (0);
while(true){
if((i__32058__auto___34139 < len__32057__auto___34138)){
args__32064__auto__.push((arguments[i__32058__auto___34139]));

var G__34140 = (i__32058__auto___34139 + (1));
i__32058__auto___34139 = G__34140;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((3) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((3)),(0),null)):null);
return devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32065__auto__);
});

devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.call(null,devtools.dirac.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),devtools.dirac.dirac_log_args.call(null,request_id,kind,args));
});

devtools.dirac.group_STAR_.cljs$lang$maxFixedArity = (3);

devtools.dirac.group_STAR_.cljs$lang$applyTo = (function (seq34134){
var G__34135 = cljs.core.first.call(null,seq34134);
var seq34134__$1 = cljs.core.next.call(null,seq34134);
var G__34136 = cljs.core.first.call(null,seq34134__$1);
var seq34134__$2 = cljs.core.next.call(null,seq34134__$1);
var G__34137 = cljs.core.first.call(null,seq34134__$2);
var seq34134__$3 = cljs.core.next.call(null,seq34134__$2);
return devtools.dirac.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__34135,G__34136,G__34137,seq34134__$3);
});
devtools.dirac.group_collapsed = (function devtools$dirac$group_collapsed(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34142 = arguments.length;
var i__32058__auto___34143 = (0);
while(true){
if((i__32058__auto___34143 < len__32057__auto___34142)){
args__32064__auto__.push((arguments[i__32058__auto___34143]));

var G__34144 = (i__32058__auto___34143 + (1));
i__32058__auto___34143 = G__34144;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,devtools.dirac.group_STAR_,true,args);
});

devtools.dirac.group_collapsed.cljs$lang$maxFixedArity = (0);

devtools.dirac.group_collapsed.cljs$lang$applyTo = (function (seq34141){
return devtools.dirac.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34141));
});
devtools.dirac.group = (function devtools$dirac$group(var_args){
var args__32064__auto__ = [];
var len__32057__auto___34146 = arguments.length;
var i__32058__auto___34147 = (0);
while(true){
if((i__32058__auto___34147 < len__32057__auto___34146)){
args__32064__auto__.push((arguments[i__32058__auto___34147]));

var G__34148 = (i__32058__auto___34147 + (1));
i__32058__auto___34147 = G__34148;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,devtools.dirac.group_STAR_,false,args);
});

devtools.dirac.group.cljs$lang$maxFixedArity = (0);

devtools.dirac.group.cljs$lang$applyTo = (function (seq34145){
return devtools.dirac.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34145));
});
devtools.dirac.group_end = (function devtools$dirac$group_end(){
return console.groupEnd();
});
devtools.dirac.detect_and_strip = (function devtools$dirac$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count.call(null,prefix);
var s = cljs.core.subs.call(null,text,(0),prefix_len);
if(cljs.core._EQ_.call(null,s,prefix)){
return clojure.string.triml.call(null,cljs.core.subs.call(null,text,prefix_len));
} else {
return null;
}
});
devtools.dirac.present_java_trace = (function devtools$dirac$present_java_trace(request_id,text){
var lines = clojure.string.split.call(null,text,/\n/);
var first_line = cljs.core.first.call(null,lines);
var rest_content = clojure.string.join.call(null,"\n",cljs.core.rest.call(null,lines));
if(cljs.core.empty_QMARK_.call(null,rest_content)){
return devtools.dirac.error.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),first_line);
} else {
devtools.dirac.group_collapsed.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"%c%s",devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239)),first_line);

devtools.dirac.log.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),rest_content);

return devtools.dirac.group_end.call(null);
}
});
devtools.dirac.build_effective_config = (function devtools$dirac$build_effective_config(default_config,static_config){
var static_keys = cljs.core.keys.call(null,default_config);
var _STAR_ = ((function (static_keys){
return (function (key){
var temp__4655__auto__ = devtools.prefs.pref.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
} else {
return null;
}
});})(static_keys))
;
var dynamic_config = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,_STAR_,static_keys));
return cljs.core.merge.call(null,default_config,static_config,dynamic_config);
});
devtools.dirac.get_effective_config = (function devtools$dirac$get_effective_config(){
return cljs.core.clj__GT_js.call(null,devtools.dirac.build_effective_config.call(null,devtools.dirac.default_config,devtools.dirac.static_config));
});
goog.exportSymbol('devtools.dirac.get_effective_config', devtools.dirac.get_effective_config);
devtools.dirac.get_api_version = (function devtools$dirac$get_api_version(){
return devtools.dirac.api_version;
});
goog.exportSymbol('devtools.dirac.get_api_version', devtools.dirac.get_api_version);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation result.
 */
devtools.dirac.present_repl_result = (function devtools$dirac$present_repl_result(request_id,value){
devtools.dirac.log.call(null,request_id,"result",value);

return value;
});
goog.exportSymbol('devtools.dirac.present_repl_result', devtools.dirac.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture REPL evaluation exception.
 */
devtools.dirac.present_repl_exception = (function devtools$dirac$present_repl_exception(request_id,exception){
return devtools.dirac.error.call(null,request_id,"exception",exception);
});
goog.exportSymbol('devtools.dirac.present_repl_exception', devtools.dirac.present_repl_exception);
devtools.dirac.present_in_dirac_repl = (function devtools$dirac$present_in_dirac_repl(request_id,value){
try{return devtools.dirac.present_repl_result(request_id,value);
}catch (e34150){var e = e34150;
devtools.dirac.present_repl_exception(request_id,e);

throw e;
}});
goog.exportSymbol('devtools.dirac.present_in_dirac_repl', devtools.dirac.present_in_dirac_repl);
devtools.dirac.present_output = (function devtools$dirac$present_output(request_id,kind,text){
var G__34152 = kind;
switch (G__34152) {
case "java-trace":
return devtools.dirac.present_java_trace.call(null,request_id,text);

break;
default:
var temp__4655__auto__ = devtools.dirac.detect_and_strip.call(null,"WARNING:",text);
if(cljs.core.truth_(temp__4655__auto__)){
var warning_msg = temp__4655__auto__;
return devtools.dirac.warn.call(null,request_id,"warning",warning_msg);
} else {
var temp__4655__auto____$1 = devtools.dirac.detect_and_strip.call(null,"ERROR:",text);
if(cljs.core.truth_(temp__4655__auto____$1)){
var error_msg = temp__4655__auto____$1;
return devtools.dirac.error.call(null,request_id,"error",error_msg);
} else {
return devtools.dirac.log.call(null,request_id,kind,text);
}
}

}
});
goog.exportSymbol('devtools.dirac.present_output', devtools.dirac.present_output);
/**
 * This is a postprocessing function wrapping weasel javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length.
 */
devtools.dirac.postprocess_successful_eval = (function devtools$dirac$postprocess_successful_eval(value){
var _STAR_print_level_STAR_34156 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_34157 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-level","dirac-print-level",1233865961));

cljs.core._STAR_print_length_STAR_ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dirac-print-length","dirac-print-length",1240393954));

try{return {"status": "success", "value": [cljs.core.str(value)].join('')};
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_34157;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_34156;
}});
goog.exportSymbol('devtools.dirac.postprocess_successful_eval', devtools.dirac.postprocess_successful_eval);
devtools.dirac.postprocess_unsuccessful_eval = (function devtools$dirac$postprocess_unsuccessful_eval(ex){

return {"status": "exception", "value": cljs.core.pr_str.call(null,ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?ex.stack:"No stacktrace available.")};
});
goog.exportSymbol('devtools.dirac.postprocess_unsuccessful_eval', devtools.dirac.postprocess_unsuccessful_eval);
devtools.dirac.installed_QMARK_ = (function devtools$dirac$installed_QMARK_(){
return devtools.dirac._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('devtools.dirac.installed_QMARK_', devtools.dirac.installed_QMARK_);
devtools.dirac.install_BANG_ = (function devtools$dirac$install_BANG_(){
if(cljs.core.truth_((function (){var and__30975__auto__ = cljs.core.not.call(null,devtools.dirac.installed_QMARK_.call(null));
if(and__30975__auto__){
return devtools.dirac.available_QMARK_.call(null);
} else {
return and__30975__auto__;
}
})())){
clojure.browser.repl.bootstrap.call(null);

devtools.dirac._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
goog.exportSymbol('devtools.dirac.install_BANG_', devtools.dirac.install_BANG_);
devtools.dirac.uninstall_BANG_ = (function devtools$dirac$uninstall_BANG_(){
if(cljs.core.truth_(devtools.dirac.installed_QMARK_.call(null))){
return devtools.dirac._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('devtools.dirac.uninstall_BANG_', devtools.dirac.uninstall_BANG_);

//# sourceMappingURL=dirac.js.map?rel=1487610703458