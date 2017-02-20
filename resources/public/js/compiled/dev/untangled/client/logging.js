// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__36546 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__36546) {
case "all":
return "ALL";

break;
case "debug":
return "FINE";

break;
case "info":
return "INFO";

break;
case "warn":
return "WARNING";

break;
case "error":
return "SEVERE";

break;
case "none":
return "OFF";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(log_level)].join('')));

}
})()));
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str(msg),cljs.core.str(":\n"),cljs.core.str((function (){var sb__31973__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36550_36552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36551_36553 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36550_36552,_STAR_print_fn_STAR_36551_36553,sb__31973__auto__){
return (function (x__31974__auto__){
return sb__31973__auto__.append(x__31974__auto__);
});})(_STAR_print_newline_STAR_36550_36552,_STAR_print_fn_STAR_36551_36553,sb__31973__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36551_36553;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36550_36552;
}
return [cljs.core.str(sb__31973__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *   Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args36554 = [];
var len__32057__auto___36557 = arguments.length;
var i__32058__auto___36558 = (0);
while(true){
if((i__32058__auto___36558 < len__32057__auto___36557)){
args36554.push((arguments[i__32058__auto___36558]));

var G__36559 = (i__32058__auto___36558 + (1));
i__32058__auto___36558 = G__36559;
continue;
} else {
}
break;
}

var G__36556 = args36554.length;
switch (G__36556) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36554.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,"DEBUG",value));

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,msg,value));

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;
/**
 * output an INFO level message to the Om logger
 */
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__32064__auto__ = [];
var len__32057__auto___36562 = arguments.length;
var i__32058__auto___36563 = (0);
while(true){
if((i__32058__auto___36563 < len__32057__auto___36562)){
args__32064__auto__.push((arguments[i__32058__auto___36563]));

var G__36564 = (i__32058__auto___36563 + (1));
i__32058__auto___36563 = G__36564;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq36561){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36561));
});
/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__32064__auto__ = [];
var len__32057__auto___36566 = arguments.length;
var i__32058__auto___36567 = (0);
while(true){
if((i__32058__auto___36567 < len__32057__auto___36566)){
args__32064__auto__.push((arguments[i__32058__auto___36567]));

var G__36568 = (i__32058__auto___36567 + (1));
i__32058__auto___36567 = G__36568;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq36565){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36565));
});
/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__32064__auto__ = [];
var len__32057__auto___36570 = arguments.length;
var i__32058__auto___36571 = (0);
while(true){
if((i__32058__auto___36571 < len__32057__auto___36570)){
args__32064__auto__.push((arguments[i__32058__auto___36571]));

var G__36572 = (i__32058__auto___36571 + (1));
i__32058__auto___36571 = G__36572;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((0) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__32065__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq36569){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36569));
});

//# sourceMappingURL=logging.js.map?rel=1487610709643