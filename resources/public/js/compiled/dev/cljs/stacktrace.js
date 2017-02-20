// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__31912__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31913__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31916__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__,hierarchy__31916__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__,hierarchy__31916__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31916__auto__,method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__30987__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__41767 = cljs.core.reduce.call(null,((function (xs){
return (function (p__41769,p__41770){
var vec__41771 = p__41769;
var pre = cljs.core.nth.call(null,vec__41771,(0),null);
var post = cljs.core.nth.call(null,vec__41771,(1),null);
var vec__41772 = p__41770;
var x = cljs.core.nth.call(null,vec__41772,(0),null);
var i = cljs.core.nth.call(null,vec__41772,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__41767,(0),null);
var vec__41768 = cljs.core.nth.call(null,vec__41767,(1),null);
var line = cljs.core.nth.call(null,vec__41768,(0),null);
var column = cljs.core.nth.call(null,vec__41768,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41773 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__41773,"(","");
} else {
return G__41773;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__41774 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__41774,")","");
} else {
return G__41774;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__41775 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__41775,")","");
} else {
return G__41775;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__41776,file,p__41777){
var map__41782 = p__41776;
var map__41782__$1 = ((((!((map__41782 == null)))?((((map__41782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41782):map__41782);
var repl_env = map__41782__$1;
var host = cljs.core.get.call(null,map__41782__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__41782__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__41782__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__41783 = p__41777;
var map__41783__$1 = ((((!((map__41783 == null)))?((((map__41783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41783):map__41783);
var opts = map__41783__$1;
var asset_path = cljs.core.get.call(null,map__41783__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__30987__auto__ = host_port;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__30987__auto__ = (function (){var and__30975__auto__ = asset_path;
if(cljs.core.truth_(and__30975__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4655__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var asset_root = temp__4655__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__41788 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__41788,(0),null);
var flc = cljs.core.nth.call(null,vec__41788,(1),null);
var vec__41789 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41789,(0),null);
var line = cljs.core.nth.call(null,vec__41789,(1),null);
var column = cljs.core.nth.call(null,vec__41789,(2),null);
if(cljs.core.truth_((function (){var and__30975__auto__ = file;
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = function$;
if(cljs.core.truth_(and__30975__auto____$1)){
var and__30975__auto____$2 = line;
if(cljs.core.truth_(and__30975__auto____$2)){
return column;
} else {
return and__30975__auto____$2;
}
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41792_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__41792_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__41791_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__41791_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__41790_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41790_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__41795 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__41795,(0),null);
var flc = cljs.core.nth.call(null,vec__41795,(1),null);
var vec__41796 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41796,(0),null);
var line = cljs.core.nth.call(null,vec__41796,(1),null);
var column = cljs.core.nth.call(null,vec__41796,(2),null);
if(cljs.core.truth_((function (){var and__30975__auto__ = file;
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = function$;
if(cljs.core.truth_(and__30975__auto____$1)){
var and__30975__auto____$2 = line;
if(cljs.core.truth_(and__30975__auto____$2)){
return column;
} else {
return and__30975__auto____$2;
}
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41799_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__41799_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__41798_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__41798_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__41797_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41797_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__41802 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__41802,(0),null);
var flc = cljs.core.nth.call(null,vec__41802,(1),null);
var vec__41803 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41803,(0),null);
var line = cljs.core.nth.call(null,vec__41803,(1),null);
var column = cljs.core.nth.call(null,vec__41803,(2),null);
if(cljs.core.truth_((function (){var and__30975__auto__ = file;
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = function$;
if(cljs.core.truth_(and__30975__auto____$1)){
var and__30975__auto____$2 = line;
if(cljs.core.truth_(and__30975__auto____$2)){
return column;
} else {
return and__30975__auto____$2;
}
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41806_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__41806_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__41805_SHARP_){
return cljs.core._EQ_.call(null,p1__41805_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__41804_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41804_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__41807){
var map__41808 = p__41807;
var map__41808__$1 = ((((!((map__41808 == null)))?((((map__41808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41808):map__41808);
var opts = map__41808__$1;
var output_dir = cljs.core.get.call(null,map__41808__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__41808,map__41808__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__41816 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__41816,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__41816,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__41817 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__41817,(0),null);
var function$ = cljs.core.nth.call(null,vec__41817,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__30975__auto__ = line;
if(cljs.core.truth_(and__30975__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__30975__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__41808,map__41808__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__41818){
var map__41819 = p__41818;
var map__41819__$1 = ((((!((map__41819 == null)))?((((map__41819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41819):map__41819);
var opts = map__41819__$1;
var output_dir = cljs.core.get.call(null,map__41819__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__41819,map__41819__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__41827 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__41827,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__41827,(1),null);
var vec__41828 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__41828,(0),null);
var line_part = cljs.core.nth.call(null,vec__41828,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__30975__auto__ = line_part;
if(cljs.core.truth_(and__30975__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__30975__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__41819,map__41819__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__30987__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__41829_SHARP_){
return (p1__41829_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__41830_SHARP_,p2__41831_SHARP_){
return p1__41830_SHARP_.call(null,p2__41831_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4655__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__4655__auto__)){
var columns = temp__4655__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__41832,sms,opts){
var map__41836 = p__41832;
var map__41836__$1 = ((((!((map__41836 == null)))?((((map__41836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41836):map__41836);
var function$ = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41836__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__41838 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__41838,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__41838,(1),null);
var call = cljs.core.nth.call(null,vec__41838,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args41841 = [];
var len__32057__auto___41844 = arguments.length;
var i__32058__auto___41845 = (0);
while(true){
if((i__32058__auto___41845 < len__32057__auto___41844)){
args41841.push((arguments[i__32058__auto___41845]));

var G__41846 = (i__32058__auto___41845 + (1));
i__32058__auto___41845 = G__41846;
continue;
} else {
}
break;
}

var G__41843 = args41841.length;
switch (G__41843) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41841.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__41839_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__41839_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__41840_SHARP_){
return cljs.core.dissoc.call(null,p1__41840_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;
/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args41848 = [];
var len__32057__auto___41861 = arguments.length;
var i__32058__auto___41862 = (0);
while(true){
if((i__32058__auto___41862 < len__32057__auto___41861)){
args41848.push((arguments[i__32058__auto___41862]));

var G__41863 = (i__32058__auto___41862 + (1));
i__32058__auto___41862 = G__41863;
continue;
} else {
}
break;
}

var G__41850 = args41848.length;
switch (G__41850) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41848.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__31973__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41851_41865 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41852_41866 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41851_41865,_STAR_print_fn_STAR_41852_41866,sb__31973__auto__){
return (function (x__31974__auto__){
return sb__31973__auto__.append(x__31974__auto__);
});})(_STAR_print_newline_STAR_41851_41865,_STAR_print_fn_STAR_41852_41866,sb__31973__auto__))
;

try{var seq__41853_41867 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__41854_41868 = null;
var count__41855_41869 = (0);
var i__41856_41870 = (0);
while(true){
if((i__41856_41870 < count__41855_41869)){
var map__41857_41871 = cljs.core._nth.call(null,chunk__41854_41868,i__41856_41870);
var map__41857_41872__$1 = ((((!((map__41857_41871 == null)))?((((map__41857_41871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41857_41871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41857_41871):map__41857_41871);
var function_41873 = cljs.core.get.call(null,map__41857_41872__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_41874 = cljs.core.get.call(null,map__41857_41872__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_41875 = cljs.core.get.call(null,map__41857_41872__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41876 = cljs.core.get.call(null,map__41857_41872__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_41873)?[cljs.core.str(function_41873),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_41874),cljs.core.str((cljs.core.truth_(line_41875)?[cljs.core.str(":"),cljs.core.str(line_41875)].join(''):null)),cljs.core.str((cljs.core.truth_(column_41876)?[cljs.core.str(":"),cljs.core.str(column_41876)].join(''):null)),cljs.core.str(")")].join(''));

var G__41877 = seq__41853_41867;
var G__41878 = chunk__41854_41868;
var G__41879 = count__41855_41869;
var G__41880 = (i__41856_41870 + (1));
seq__41853_41867 = G__41877;
chunk__41854_41868 = G__41878;
count__41855_41869 = G__41879;
i__41856_41870 = G__41880;
continue;
} else {
var temp__4657__auto___41881 = cljs.core.seq.call(null,seq__41853_41867);
if(temp__4657__auto___41881){
var seq__41853_41882__$1 = temp__4657__auto___41881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41853_41882__$1)){
var c__31798__auto___41883 = cljs.core.chunk_first.call(null,seq__41853_41882__$1);
var G__41884 = cljs.core.chunk_rest.call(null,seq__41853_41882__$1);
var G__41885 = c__31798__auto___41883;
var G__41886 = cljs.core.count.call(null,c__31798__auto___41883);
var G__41887 = (0);
seq__41853_41867 = G__41884;
chunk__41854_41868 = G__41885;
count__41855_41869 = G__41886;
i__41856_41870 = G__41887;
continue;
} else {
var map__41859_41888 = cljs.core.first.call(null,seq__41853_41882__$1);
var map__41859_41889__$1 = ((((!((map__41859_41888 == null)))?((((map__41859_41888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41859_41888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41859_41888):map__41859_41888);
var function_41890 = cljs.core.get.call(null,map__41859_41889__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_41891 = cljs.core.get.call(null,map__41859_41889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_41892 = cljs.core.get.call(null,map__41859_41889__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41893 = cljs.core.get.call(null,map__41859_41889__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_41890)?[cljs.core.str(function_41890),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_41891),cljs.core.str((cljs.core.truth_(line_41892)?[cljs.core.str(":"),cljs.core.str(line_41892)].join(''):null)),cljs.core.str((cljs.core.truth_(column_41893)?[cljs.core.str(":"),cljs.core.str(column_41893)].join(''):null)),cljs.core.str(")")].join(''));

var G__41894 = cljs.core.next.call(null,seq__41853_41882__$1);
var G__41895 = null;
var G__41896 = (0);
var G__41897 = (0);
seq__41853_41867 = G__41894;
chunk__41854_41868 = G__41895;
count__41855_41869 = G__41896;
i__41856_41870 = G__41897;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41852_41866;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41851_41865;
}
return [cljs.core.str(sb__31973__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=stacktrace.js.map?rel=1487610715717