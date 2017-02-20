// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__45947 = cljs.core._EQ_;
var expr__45948 = (function (){var or__30987__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e45951){if((e45951 instanceof Error)){
var e = e45951;
return false;
} else {
throw e45951;

}
}})();
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45947.call(null,"true",expr__45948))){
return true;
} else {
if(cljs.core.truth_(pred__45947.call(null,"false",expr__45948))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45948)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e45953){if((e45953 instanceof Error)){
var e = e45953;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e45953;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__32064__auto__ = [];
var len__32057__auto___45955 = arguments.length;
var i__32058__auto___45956 = (0);
while(true){
if((i__32058__auto___45956 < len__32057__auto___45955)){
args__32064__auto__.push((arguments[i__32058__auto___45956]));

var G__45957 = (i__32058__auto___45956 + (1));
i__32058__auto___45956 = G__45957;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq45954){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45954));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45958){
var map__45961 = p__45958;
var map__45961__$1 = ((((!((map__45961 == null)))?((((map__45961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45961):map__45961);
var message = cljs.core.get.call(null,map__45961__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45961__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30987__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30975__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30975__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30975__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37476__auto___46123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___46123,ch){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___46123,ch){
return (function (state_46092){
var state_val_46093 = (state_46092[(1)]);
if((state_val_46093 === (7))){
var inst_46088 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46094_46124 = state_46092__$1;
(statearr_46094_46124[(2)] = inst_46088);

(statearr_46094_46124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (1))){
var state_46092__$1 = state_46092;
var statearr_46095_46125 = state_46092__$1;
(statearr_46095_46125[(2)] = null);

(statearr_46095_46125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (4))){
var inst_46045 = (state_46092[(7)]);
var inst_46045__$1 = (state_46092[(2)]);
var state_46092__$1 = (function (){var statearr_46096 = state_46092;
(statearr_46096[(7)] = inst_46045__$1);

return statearr_46096;
})();
if(cljs.core.truth_(inst_46045__$1)){
var statearr_46097_46126 = state_46092__$1;
(statearr_46097_46126[(1)] = (5));

} else {
var statearr_46098_46127 = state_46092__$1;
(statearr_46098_46127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (15))){
var inst_46052 = (state_46092[(8)]);
var inst_46067 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46052);
var inst_46068 = cljs.core.first.call(null,inst_46067);
var inst_46069 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46068);
var inst_46070 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46069)].join('');
var inst_46071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46070);
var state_46092__$1 = state_46092;
var statearr_46099_46128 = state_46092__$1;
(statearr_46099_46128[(2)] = inst_46071);

(statearr_46099_46128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (13))){
var inst_46076 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46100_46129 = state_46092__$1;
(statearr_46100_46129[(2)] = inst_46076);

(statearr_46100_46129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (6))){
var state_46092__$1 = state_46092;
var statearr_46101_46130 = state_46092__$1;
(statearr_46101_46130[(2)] = null);

(statearr_46101_46130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (17))){
var inst_46074 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46102_46131 = state_46092__$1;
(statearr_46102_46131[(2)] = inst_46074);

(statearr_46102_46131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (3))){
var inst_46090 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46092__$1,inst_46090);
} else {
if((state_val_46093 === (12))){
var inst_46051 = (state_46092[(9)]);
var inst_46065 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46051,opts);
var state_46092__$1 = state_46092;
if(cljs.core.truth_(inst_46065)){
var statearr_46103_46132 = state_46092__$1;
(statearr_46103_46132[(1)] = (15));

} else {
var statearr_46104_46133 = state_46092__$1;
(statearr_46104_46133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (2))){
var state_46092__$1 = state_46092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46092__$1,(4),ch);
} else {
if((state_val_46093 === (11))){
var inst_46052 = (state_46092[(8)]);
var inst_46057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46058 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46052);
var inst_46059 = cljs.core.async.timeout.call(null,(1000));
var inst_46060 = [inst_46058,inst_46059];
var inst_46061 = (new cljs.core.PersistentVector(null,2,(5),inst_46057,inst_46060,null));
var state_46092__$1 = state_46092;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46092__$1,(14),inst_46061);
} else {
if((state_val_46093 === (9))){
var inst_46052 = (state_46092[(8)]);
var inst_46078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46079 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46052);
var inst_46080 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46079);
var inst_46081 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46080)].join('');
var inst_46082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46081);
var state_46092__$1 = (function (){var statearr_46105 = state_46092;
(statearr_46105[(10)] = inst_46078);

return statearr_46105;
})();
var statearr_46106_46134 = state_46092__$1;
(statearr_46106_46134[(2)] = inst_46082);

(statearr_46106_46134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (5))){
var inst_46045 = (state_46092[(7)]);
var inst_46047 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46048 = (new cljs.core.PersistentArrayMap(null,2,inst_46047,null));
var inst_46049 = (new cljs.core.PersistentHashSet(null,inst_46048,null));
var inst_46050 = figwheel.client.focus_msgs.call(null,inst_46049,inst_46045);
var inst_46051 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46050);
var inst_46052 = cljs.core.first.call(null,inst_46050);
var inst_46053 = figwheel.client.autoload_QMARK_.call(null);
var state_46092__$1 = (function (){var statearr_46107 = state_46092;
(statearr_46107[(9)] = inst_46051);

(statearr_46107[(8)] = inst_46052);

return statearr_46107;
})();
if(cljs.core.truth_(inst_46053)){
var statearr_46108_46135 = state_46092__$1;
(statearr_46108_46135[(1)] = (8));

} else {
var statearr_46109_46136 = state_46092__$1;
(statearr_46109_46136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (14))){
var inst_46063 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46110_46137 = state_46092__$1;
(statearr_46110_46137[(2)] = inst_46063);

(statearr_46110_46137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (16))){
var state_46092__$1 = state_46092;
var statearr_46111_46138 = state_46092__$1;
(statearr_46111_46138[(2)] = null);

(statearr_46111_46138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (10))){
var inst_46084 = (state_46092[(2)]);
var state_46092__$1 = (function (){var statearr_46112 = state_46092;
(statearr_46112[(11)] = inst_46084);

return statearr_46112;
})();
var statearr_46113_46139 = state_46092__$1;
(statearr_46113_46139[(2)] = null);

(statearr_46113_46139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (8))){
var inst_46051 = (state_46092[(9)]);
var inst_46055 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46051,opts);
var state_46092__$1 = state_46092;
if(cljs.core.truth_(inst_46055)){
var statearr_46114_46140 = state_46092__$1;
(statearr_46114_46140[(1)] = (11));

} else {
var statearr_46115_46141 = state_46092__$1;
(statearr_46115_46141[(1)] = (12));

}

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
});})(c__37476__auto___46123,ch))
;
return ((function (switch__37461__auto__,c__37476__auto___46123,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37462__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37462__auto____0 = (function (){
var statearr_46119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46119[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37462__auto__);

(statearr_46119[(1)] = (1));

return statearr_46119;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37462__auto____1 = (function (state_46092){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_46092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e46120){if((e46120 instanceof Object)){
var ex__37465__auto__ = e46120;
var statearr_46121_46142 = state_46092;
(statearr_46121_46142[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46143 = state_46092;
state_46092 = G__46143;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37462__auto__ = function(state_46092){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37462__auto____1.call(this,state_46092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37462__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37462__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___46123,ch))
})();
var state__37478__auto__ = (function (){var statearr_46122 = f__37477__auto__.call(null);
(statearr_46122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___46123);

return statearr_46122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___46123,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46144_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46144_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_46151 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46151){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_46149 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_46150 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46150;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46149;
}}catch (e46148){if((e46148 instanceof Error)){
var e = e46148;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46151], null));
} else {
var e = e46148;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_46151))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46152){
var map__46159 = p__46152;
var map__46159__$1 = ((((!((map__46159 == null)))?((((map__46159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46159):map__46159);
var opts = map__46159__$1;
var build_id = cljs.core.get.call(null,map__46159__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46159,map__46159__$1,opts,build_id){
return (function (p__46161){
var vec__46162 = p__46161;
var map__46163 = cljs.core.nth.call(null,vec__46162,(0),null);
var map__46163__$1 = ((((!((map__46163 == null)))?((((map__46163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46163):map__46163);
var msg = map__46163__$1;
var msg_name = cljs.core.get.call(null,map__46163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46162,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46162,map__46163,map__46163__$1,msg,msg_name,_,map__46159,map__46159__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46162,map__46163,map__46163__$1,msg,msg_name,_,map__46159,map__46159__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46159,map__46159__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46169){
var vec__46170 = p__46169;
var map__46171 = cljs.core.nth.call(null,vec__46170,(0),null);
var map__46171__$1 = ((((!((map__46171 == null)))?((((map__46171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46171):map__46171);
var msg = map__46171__$1;
var msg_name = cljs.core.get.call(null,map__46171__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46170,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46173){
var map__46183 = p__46173;
var map__46183__$1 = ((((!((map__46183 == null)))?((((map__46183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46183):map__46183);
var on_compile_warning = cljs.core.get.call(null,map__46183__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46183__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46183,map__46183__$1,on_compile_warning,on_compile_fail){
return (function (p__46185){
var vec__46186 = p__46185;
var map__46187 = cljs.core.nth.call(null,vec__46186,(0),null);
var map__46187__$1 = ((((!((map__46187 == null)))?((((map__46187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46187):map__46187);
var msg = map__46187__$1;
var msg_name = cljs.core.get.call(null,map__46187__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46186,(1));
var pred__46189 = cljs.core._EQ_;
var expr__46190 = msg_name;
if(cljs.core.truth_(pred__46189.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46190))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46189.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46190))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46183,map__46183__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,msg_hist,msg_names,msg){
return (function (state_46406){
var state_val_46407 = (state_46406[(1)]);
if((state_val_46407 === (7))){
var inst_46330 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46330)){
var statearr_46408_46454 = state_46406__$1;
(statearr_46408_46454[(1)] = (8));

} else {
var statearr_46409_46455 = state_46406__$1;
(statearr_46409_46455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (20))){
var inst_46400 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46410_46456 = state_46406__$1;
(statearr_46410_46456[(2)] = inst_46400);

(statearr_46410_46456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (27))){
var inst_46396 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46411_46457 = state_46406__$1;
(statearr_46411_46457[(2)] = inst_46396);

(statearr_46411_46457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (1))){
var inst_46323 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46323)){
var statearr_46412_46458 = state_46406__$1;
(statearr_46412_46458[(1)] = (2));

} else {
var statearr_46413_46459 = state_46406__$1;
(statearr_46413_46459[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (24))){
var inst_46398 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46414_46460 = state_46406__$1;
(statearr_46414_46460[(2)] = inst_46398);

(statearr_46414_46460[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (4))){
var inst_46404 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46406__$1,inst_46404);
} else {
if((state_val_46407 === (15))){
var inst_46402 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46415_46461 = state_46406__$1;
(statearr_46415_46461[(2)] = inst_46402);

(statearr_46415_46461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (21))){
var inst_46361 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46416_46462 = state_46406__$1;
(statearr_46416_46462[(2)] = inst_46361);

(statearr_46416_46462[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (31))){
var inst_46385 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46385)){
var statearr_46417_46463 = state_46406__$1;
(statearr_46417_46463[(1)] = (34));

} else {
var statearr_46418_46464 = state_46406__$1;
(statearr_46418_46464[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (32))){
var inst_46394 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46419_46465 = state_46406__$1;
(statearr_46419_46465[(2)] = inst_46394);

(statearr_46419_46465[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (33))){
var inst_46383 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46420_46466 = state_46406__$1;
(statearr_46420_46466[(2)] = inst_46383);

(statearr_46420_46466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (13))){
var inst_46344 = figwheel.client.heads_up.clear.call(null);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(16),inst_46344);
} else {
if((state_val_46407 === (22))){
var inst_46365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46366 = figwheel.client.heads_up.append_message.call(null,inst_46365);
var state_46406__$1 = state_46406;
var statearr_46421_46467 = state_46406__$1;
(statearr_46421_46467[(2)] = inst_46366);

(statearr_46421_46467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (36))){
var inst_46392 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46422_46468 = state_46406__$1;
(statearr_46422_46468[(2)] = inst_46392);

(statearr_46422_46468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (29))){
var inst_46376 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46423_46469 = state_46406__$1;
(statearr_46423_46469[(2)] = inst_46376);

(statearr_46423_46469[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (6))){
var inst_46325 = (state_46406[(7)]);
var state_46406__$1 = state_46406;
var statearr_46424_46470 = state_46406__$1;
(statearr_46424_46470[(2)] = inst_46325);

(statearr_46424_46470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (28))){
var inst_46372 = (state_46406[(2)]);
var inst_46373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46374 = figwheel.client.heads_up.display_warning.call(null,inst_46373);
var state_46406__$1 = (function (){var statearr_46425 = state_46406;
(statearr_46425[(8)] = inst_46372);

return statearr_46425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(29),inst_46374);
} else {
if((state_val_46407 === (25))){
var inst_46370 = figwheel.client.heads_up.clear.call(null);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(28),inst_46370);
} else {
if((state_val_46407 === (34))){
var inst_46387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(37),inst_46387);
} else {
if((state_val_46407 === (17))){
var inst_46352 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46426_46471 = state_46406__$1;
(statearr_46426_46471[(2)] = inst_46352);

(statearr_46426_46471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (3))){
var inst_46342 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46342)){
var statearr_46427_46472 = state_46406__$1;
(statearr_46427_46472[(1)] = (13));

} else {
var statearr_46428_46473 = state_46406__$1;
(statearr_46428_46473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (12))){
var inst_46338 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46429_46474 = state_46406__$1;
(statearr_46429_46474[(2)] = inst_46338);

(statearr_46429_46474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (2))){
var inst_46325 = (state_46406[(7)]);
var inst_46325__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46406__$1 = (function (){var statearr_46430 = state_46406;
(statearr_46430[(7)] = inst_46325__$1);

return statearr_46430;
})();
if(cljs.core.truth_(inst_46325__$1)){
var statearr_46431_46475 = state_46406__$1;
(statearr_46431_46475[(1)] = (5));

} else {
var statearr_46432_46476 = state_46406__$1;
(statearr_46432_46476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (23))){
var inst_46368 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46368)){
var statearr_46433_46477 = state_46406__$1;
(statearr_46433_46477[(1)] = (25));

} else {
var statearr_46434_46478 = state_46406__$1;
(statearr_46434_46478[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (35))){
var state_46406__$1 = state_46406;
var statearr_46435_46479 = state_46406__$1;
(statearr_46435_46479[(2)] = null);

(statearr_46435_46479[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (19))){
var inst_46363 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46363)){
var statearr_46436_46480 = state_46406__$1;
(statearr_46436_46480[(1)] = (22));

} else {
var statearr_46437_46481 = state_46406__$1;
(statearr_46437_46481[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (11))){
var inst_46334 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46438_46482 = state_46406__$1;
(statearr_46438_46482[(2)] = inst_46334);

(statearr_46438_46482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (9))){
var inst_46336 = figwheel.client.heads_up.clear.call(null);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(12),inst_46336);
} else {
if((state_val_46407 === (5))){
var inst_46327 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46406__$1 = state_46406;
var statearr_46439_46483 = state_46406__$1;
(statearr_46439_46483[(2)] = inst_46327);

(statearr_46439_46483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (14))){
var inst_46354 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46354)){
var statearr_46440_46484 = state_46406__$1;
(statearr_46440_46484[(1)] = (18));

} else {
var statearr_46441_46485 = state_46406__$1;
(statearr_46441_46485[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (26))){
var inst_46378 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46406__$1 = state_46406;
if(cljs.core.truth_(inst_46378)){
var statearr_46442_46486 = state_46406__$1;
(statearr_46442_46486[(1)] = (30));

} else {
var statearr_46443_46487 = state_46406__$1;
(statearr_46443_46487[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (16))){
var inst_46346 = (state_46406[(2)]);
var inst_46347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46348 = figwheel.client.format_messages.call(null,inst_46347);
var inst_46349 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46350 = figwheel.client.heads_up.display_error.call(null,inst_46348,inst_46349);
var state_46406__$1 = (function (){var statearr_46444 = state_46406;
(statearr_46444[(9)] = inst_46346);

return statearr_46444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(17),inst_46350);
} else {
if((state_val_46407 === (30))){
var inst_46380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46381 = figwheel.client.heads_up.display_warning.call(null,inst_46380);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(33),inst_46381);
} else {
if((state_val_46407 === (10))){
var inst_46340 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46445_46488 = state_46406__$1;
(statearr_46445_46488[(2)] = inst_46340);

(statearr_46445_46488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (18))){
var inst_46356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46357 = figwheel.client.format_messages.call(null,inst_46356);
var inst_46358 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46359 = figwheel.client.heads_up.display_error.call(null,inst_46357,inst_46358);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(21),inst_46359);
} else {
if((state_val_46407 === (37))){
var inst_46389 = (state_46406[(2)]);
var state_46406__$1 = state_46406;
var statearr_46446_46489 = state_46406__$1;
(statearr_46446_46489[(2)] = inst_46389);

(statearr_46446_46489[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46407 === (8))){
var inst_46332 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46406__$1 = state_46406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46406__$1,(11),inst_46332);
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
});})(c__37476__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37461__auto__,c__37476__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto____0 = (function (){
var statearr_46450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46450[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto__);

(statearr_46450[(1)] = (1));

return statearr_46450;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto____1 = (function (state_46406){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_46406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e46451){if((e46451 instanceof Object)){
var ex__37465__auto__ = e46451;
var statearr_46452_46490 = state_46406;
(statearr_46452_46490[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46491 = state_46406;
state_46406 = G__46491;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto__ = function(state_46406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto____1.call(this,state_46406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,msg_hist,msg_names,msg))
})();
var state__37478__auto__ = (function (){var statearr_46453 = f__37477__auto__.call(null);
(statearr_46453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_46453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,msg_hist,msg_names,msg))
);

return c__37476__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37476__auto___46554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___46554,ch){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___46554,ch){
return (function (state_46537){
var state_val_46538 = (state_46537[(1)]);
if((state_val_46538 === (1))){
var state_46537__$1 = state_46537;
var statearr_46539_46555 = state_46537__$1;
(statearr_46539_46555[(2)] = null);

(statearr_46539_46555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46538 === (2))){
var state_46537__$1 = state_46537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46537__$1,(4),ch);
} else {
if((state_val_46538 === (3))){
var inst_46535 = (state_46537[(2)]);
var state_46537__$1 = state_46537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46537__$1,inst_46535);
} else {
if((state_val_46538 === (4))){
var inst_46525 = (state_46537[(7)]);
var inst_46525__$1 = (state_46537[(2)]);
var state_46537__$1 = (function (){var statearr_46540 = state_46537;
(statearr_46540[(7)] = inst_46525__$1);

return statearr_46540;
})();
if(cljs.core.truth_(inst_46525__$1)){
var statearr_46541_46556 = state_46537__$1;
(statearr_46541_46556[(1)] = (5));

} else {
var statearr_46542_46557 = state_46537__$1;
(statearr_46542_46557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46538 === (5))){
var inst_46525 = (state_46537[(7)]);
var inst_46527 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46525);
var state_46537__$1 = state_46537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46537__$1,(8),inst_46527);
} else {
if((state_val_46538 === (6))){
var state_46537__$1 = state_46537;
var statearr_46543_46558 = state_46537__$1;
(statearr_46543_46558[(2)] = null);

(statearr_46543_46558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46538 === (7))){
var inst_46533 = (state_46537[(2)]);
var state_46537__$1 = state_46537;
var statearr_46544_46559 = state_46537__$1;
(statearr_46544_46559[(2)] = inst_46533);

(statearr_46544_46559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46538 === (8))){
var inst_46529 = (state_46537[(2)]);
var state_46537__$1 = (function (){var statearr_46545 = state_46537;
(statearr_46545[(8)] = inst_46529);

return statearr_46545;
})();
var statearr_46546_46560 = state_46537__$1;
(statearr_46546_46560[(2)] = null);

(statearr_46546_46560[(1)] = (2));


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
});})(c__37476__auto___46554,ch))
;
return ((function (switch__37461__auto__,c__37476__auto___46554,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37462__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37462__auto____0 = (function (){
var statearr_46550 = [null,null,null,null,null,null,null,null,null];
(statearr_46550[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37462__auto__);

(statearr_46550[(1)] = (1));

return statearr_46550;
});
var figwheel$client$heads_up_plugin_$_state_machine__37462__auto____1 = (function (state_46537){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_46537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e46551){if((e46551 instanceof Object)){
var ex__37465__auto__ = e46551;
var statearr_46552_46561 = state_46537;
(statearr_46552_46561[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46562 = state_46537;
state_46537 = G__46562;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37462__auto__ = function(state_46537){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37462__auto____1.call(this,state_46537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37462__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37462__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___46554,ch))
})();
var state__37478__auto__ = (function (){var statearr_46553 = f__37477__auto__.call(null);
(statearr_46553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___46554);

return statearr_46553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___46554,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_46583){
var state_val_46584 = (state_46583[(1)]);
if((state_val_46584 === (1))){
var inst_46578 = cljs.core.async.timeout.call(null,(3000));
var state_46583__$1 = state_46583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46583__$1,(2),inst_46578);
} else {
if((state_val_46584 === (2))){
var inst_46580 = (state_46583[(2)]);
var inst_46581 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46583__$1 = (function (){var statearr_46585 = state_46583;
(statearr_46585[(7)] = inst_46580);

return statearr_46585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46583__$1,inst_46581);
} else {
return null;
}
}
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37462__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37462__auto____0 = (function (){
var statearr_46589 = [null,null,null,null,null,null,null,null];
(statearr_46589[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37462__auto__);

(statearr_46589[(1)] = (1));

return statearr_46589;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37462__auto____1 = (function (state_46583){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_46583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e46590){if((e46590 instanceof Object)){
var ex__37465__auto__ = e46590;
var statearr_46591_46593 = state_46583;
(statearr_46591_46593[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46594 = state_46583;
state_46583 = G__46594;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37462__auto__ = function(state_46583){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37462__auto____1.call(this,state_46583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37462__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37462__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_46592 = f__37477__auto__.call(null);
(statearr_46592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_46592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46595){
var map__46602 = p__46595;
var map__46602__$1 = ((((!((map__46602 == null)))?((((map__46602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46602):map__46602);
var ed = map__46602__$1;
var formatted_exception = cljs.core.get.call(null,map__46602__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46602__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46602__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46604_46608 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46605_46609 = null;
var count__46606_46610 = (0);
var i__46607_46611 = (0);
while(true){
if((i__46607_46611 < count__46606_46610)){
var msg_46612 = cljs.core._nth.call(null,chunk__46605_46609,i__46607_46611);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46612);

var G__46613 = seq__46604_46608;
var G__46614 = chunk__46605_46609;
var G__46615 = count__46606_46610;
var G__46616 = (i__46607_46611 + (1));
seq__46604_46608 = G__46613;
chunk__46605_46609 = G__46614;
count__46606_46610 = G__46615;
i__46607_46611 = G__46616;
continue;
} else {
var temp__4657__auto___46617 = cljs.core.seq.call(null,seq__46604_46608);
if(temp__4657__auto___46617){
var seq__46604_46618__$1 = temp__4657__auto___46617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46604_46618__$1)){
var c__31798__auto___46619 = cljs.core.chunk_first.call(null,seq__46604_46618__$1);
var G__46620 = cljs.core.chunk_rest.call(null,seq__46604_46618__$1);
var G__46621 = c__31798__auto___46619;
var G__46622 = cljs.core.count.call(null,c__31798__auto___46619);
var G__46623 = (0);
seq__46604_46608 = G__46620;
chunk__46605_46609 = G__46621;
count__46606_46610 = G__46622;
i__46607_46611 = G__46623;
continue;
} else {
var msg_46624 = cljs.core.first.call(null,seq__46604_46618__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46624);

var G__46625 = cljs.core.next.call(null,seq__46604_46618__$1);
var G__46626 = null;
var G__46627 = (0);
var G__46628 = (0);
seq__46604_46608 = G__46625;
chunk__46605_46609 = G__46626;
count__46606_46610 = G__46627;
i__46607_46611 = G__46628;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46629){
var map__46632 = p__46629;
var map__46632__$1 = ((((!((map__46632 == null)))?((((map__46632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46632):map__46632);
var w = map__46632__$1;
var message = cljs.core.get.call(null,map__46632__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30975__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30975__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30975__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46640 = cljs.core.seq.call(null,plugins);
var chunk__46641 = null;
var count__46642 = (0);
var i__46643 = (0);
while(true){
if((i__46643 < count__46642)){
var vec__46644 = cljs.core._nth.call(null,chunk__46641,i__46643);
var k = cljs.core.nth.call(null,vec__46644,(0),null);
var plugin = cljs.core.nth.call(null,vec__46644,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46646 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46640,chunk__46641,count__46642,i__46643,pl_46646,vec__46644,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46646.call(null,msg_hist);
});})(seq__46640,chunk__46641,count__46642,i__46643,pl_46646,vec__46644,k,plugin))
);
} else {
}

var G__46647 = seq__46640;
var G__46648 = chunk__46641;
var G__46649 = count__46642;
var G__46650 = (i__46643 + (1));
seq__46640 = G__46647;
chunk__46641 = G__46648;
count__46642 = G__46649;
i__46643 = G__46650;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46640);
if(temp__4657__auto__){
var seq__46640__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46640__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__46640__$1);
var G__46651 = cljs.core.chunk_rest.call(null,seq__46640__$1);
var G__46652 = c__31798__auto__;
var G__46653 = cljs.core.count.call(null,c__31798__auto__);
var G__46654 = (0);
seq__46640 = G__46651;
chunk__46641 = G__46652;
count__46642 = G__46653;
i__46643 = G__46654;
continue;
} else {
var vec__46645 = cljs.core.first.call(null,seq__46640__$1);
var k = cljs.core.nth.call(null,vec__46645,(0),null);
var plugin = cljs.core.nth.call(null,vec__46645,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46655 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46640,chunk__46641,count__46642,i__46643,pl_46655,vec__46645,k,plugin,seq__46640__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46655.call(null,msg_hist);
});})(seq__46640,chunk__46641,count__46642,i__46643,pl_46655,vec__46645,k,plugin,seq__46640__$1,temp__4657__auto__))
);
} else {
}

var G__46656 = cljs.core.next.call(null,seq__46640__$1);
var G__46657 = null;
var G__46658 = (0);
var G__46659 = (0);
seq__46640 = G__46656;
chunk__46641 = G__46657;
count__46642 = G__46658;
i__46643 = G__46659;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args46660 = [];
var len__32057__auto___46663 = arguments.length;
var i__32058__auto___46664 = (0);
while(true){
if((i__32058__auto___46664 < len__32057__auto___46663)){
args46660.push((arguments[i__32058__auto___46664]));

var G__46665 = (i__32058__auto___46664 + (1));
i__32058__auto___46664 = G__46665;
continue;
} else {
}
break;
}

var G__46662 = args46660.length;
switch (G__46662) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46660.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46671 = arguments.length;
var i__32058__auto___46672 = (0);
while(true){
if((i__32058__auto___46672 < len__32057__auto___46671)){
args__32064__auto__.push((arguments[i__32058__auto___46672]));

var G__46673 = (i__32058__auto___46672 + (1));
i__32058__auto___46672 = G__46673;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46668){
var map__46669 = p__46668;
var map__46669__$1 = ((((!((map__46669 == null)))?((((map__46669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46669):map__46669);
var opts = map__46669__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46667){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46667));
});

//# sourceMappingURL=client.js.map?rel=1487610720944