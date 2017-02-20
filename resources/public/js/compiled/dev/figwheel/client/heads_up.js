// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__32064__auto__ = [];
var len__32057__auto___45713 = arguments.length;
var i__32058__auto___45714 = (0);
while(true){
if((i__32058__auto___45714 < len__32057__auto___45713)){
args__32064__auto__.push((arguments[i__32058__auto___45714]));

var G__45715 = (i__32058__auto___45714 + (1));
i__32058__auto___45714 = G__45715;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__45705_45716 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__45706_45717 = null;
var count__45707_45718 = (0);
var i__45708_45719 = (0);
while(true){
if((i__45708_45719 < count__45707_45718)){
var k_45720 = cljs.core._nth.call(null,chunk__45706_45717,i__45708_45719);
e.setAttribute(cljs.core.name.call(null,k_45720),cljs.core.get.call(null,attrs,k_45720));

var G__45721 = seq__45705_45716;
var G__45722 = chunk__45706_45717;
var G__45723 = count__45707_45718;
var G__45724 = (i__45708_45719 + (1));
seq__45705_45716 = G__45721;
chunk__45706_45717 = G__45722;
count__45707_45718 = G__45723;
i__45708_45719 = G__45724;
continue;
} else {
var temp__4657__auto___45725 = cljs.core.seq.call(null,seq__45705_45716);
if(temp__4657__auto___45725){
var seq__45705_45726__$1 = temp__4657__auto___45725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45705_45726__$1)){
var c__31798__auto___45727 = cljs.core.chunk_first.call(null,seq__45705_45726__$1);
var G__45728 = cljs.core.chunk_rest.call(null,seq__45705_45726__$1);
var G__45729 = c__31798__auto___45727;
var G__45730 = cljs.core.count.call(null,c__31798__auto___45727);
var G__45731 = (0);
seq__45705_45716 = G__45728;
chunk__45706_45717 = G__45729;
count__45707_45718 = G__45730;
i__45708_45719 = G__45731;
continue;
} else {
var k_45732 = cljs.core.first.call(null,seq__45705_45726__$1);
e.setAttribute(cljs.core.name.call(null,k_45732),cljs.core.get.call(null,attrs,k_45732));

var G__45733 = cljs.core.next.call(null,seq__45705_45726__$1);
var G__45734 = null;
var G__45735 = (0);
var G__45736 = (0);
seq__45705_45716 = G__45733;
chunk__45706_45717 = G__45734;
count__45707_45718 = G__45735;
i__45708_45719 = G__45736;
continue;
}
} else {
}
}
break;
}

var seq__45709_45737 = cljs.core.seq.call(null,children);
var chunk__45710_45738 = null;
var count__45711_45739 = (0);
var i__45712_45740 = (0);
while(true){
if((i__45712_45740 < count__45711_45739)){
var ch_45741 = cljs.core._nth.call(null,chunk__45710_45738,i__45712_45740);
e.appendChild(ch_45741);

var G__45742 = seq__45709_45737;
var G__45743 = chunk__45710_45738;
var G__45744 = count__45711_45739;
var G__45745 = (i__45712_45740 + (1));
seq__45709_45737 = G__45742;
chunk__45710_45738 = G__45743;
count__45711_45739 = G__45744;
i__45712_45740 = G__45745;
continue;
} else {
var temp__4657__auto___45746 = cljs.core.seq.call(null,seq__45709_45737);
if(temp__4657__auto___45746){
var seq__45709_45747__$1 = temp__4657__auto___45746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45709_45747__$1)){
var c__31798__auto___45748 = cljs.core.chunk_first.call(null,seq__45709_45747__$1);
var G__45749 = cljs.core.chunk_rest.call(null,seq__45709_45747__$1);
var G__45750 = c__31798__auto___45748;
var G__45751 = cljs.core.count.call(null,c__31798__auto___45748);
var G__45752 = (0);
seq__45709_45737 = G__45749;
chunk__45710_45738 = G__45750;
count__45711_45739 = G__45751;
i__45712_45740 = G__45752;
continue;
} else {
var ch_45753 = cljs.core.first.call(null,seq__45709_45747__$1);
e.appendChild(ch_45753);

var G__45754 = cljs.core.next.call(null,seq__45709_45747__$1);
var G__45755 = null;
var G__45756 = (0);
var G__45757 = (0);
seq__45709_45737 = G__45754;
chunk__45710_45738 = G__45755;
count__45711_45739 = G__45756;
i__45712_45740 = G__45757;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq45702){
var G__45703 = cljs.core.first.call(null,seq45702);
var seq45702__$1 = cljs.core.next.call(null,seq45702);
var G__45704 = cljs.core.first.call(null,seq45702__$1);
var seq45702__$2 = cljs.core.next.call(null,seq45702__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__45703,G__45704,seq45702__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__31912__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31913__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31914__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31915__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31916__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__,hierarchy__31916__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__,hierarchy__31916__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31916__auto__,method_table__31912__auto__,prefer_table__31913__auto__,method_cache__31914__auto__,cached_hierarchy__31915__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_45758 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_45758.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_45758.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_45758.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_45758);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__45759,st_map){
var map__45764 = p__45759;
var map__45764__$1 = ((((!((map__45764 == null)))?((((map__45764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45764):map__45764);
var container_el = cljs.core.get.call(null,map__45764__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__45764,map__45764__$1,container_el){
return (function (p__45766){
var vec__45767 = p__45766;
var k = cljs.core.nth.call(null,vec__45767,(0),null);
var v = cljs.core.nth.call(null,vec__45767,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__45764,map__45764__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__45768,dom_str){
var map__45771 = p__45768;
var map__45771__$1 = ((((!((map__45771 == null)))?((((map__45771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45771):map__45771);
var c = map__45771__$1;
var content_area_el = cljs.core.get.call(null,map__45771__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__45773){
var map__45776 = p__45773;
var map__45776__$1 = ((((!((map__45776 == null)))?((((map__45776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45776):map__45776);
var content_area_el = cljs.core.get.call(null,map__45776__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_45819){
var state_val_45820 = (state_45819[(1)]);
if((state_val_45820 === (1))){
var inst_45804 = (state_45819[(7)]);
var inst_45804__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45805 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45806 = ["10px","10px","100%","68px","1.0"];
var inst_45807 = cljs.core.PersistentHashMap.fromArrays(inst_45805,inst_45806);
var inst_45808 = cljs.core.merge.call(null,inst_45807,style);
var inst_45809 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45804__$1,inst_45808);
var inst_45810 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45804__$1,msg);
var inst_45811 = cljs.core.async.timeout.call(null,(300));
var state_45819__$1 = (function (){var statearr_45821 = state_45819;
(statearr_45821[(8)] = inst_45810);

(statearr_45821[(9)] = inst_45809);

(statearr_45821[(7)] = inst_45804__$1);

return statearr_45821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45819__$1,(2),inst_45811);
} else {
if((state_val_45820 === (2))){
var inst_45804 = (state_45819[(7)]);
var inst_45813 = (state_45819[(2)]);
var inst_45814 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_45815 = ["auto"];
var inst_45816 = cljs.core.PersistentHashMap.fromArrays(inst_45814,inst_45815);
var inst_45817 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45804,inst_45816);
var state_45819__$1 = (function (){var statearr_45822 = state_45819;
(statearr_45822[(10)] = inst_45813);

return statearr_45822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45819__$1,inst_45817);
} else {
return null;
}
}
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto____0 = (function (){
var statearr_45826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45826[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto__);

(statearr_45826[(1)] = (1));

return statearr_45826;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto____1 = (function (state_45819){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_45819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e45827){if((e45827 instanceof Object)){
var ex__37465__auto__ = e45827;
var statearr_45828_45830 = state_45819;
(statearr_45828_45830[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45831 = state_45819;
state_45819 = G__45831;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto__ = function(state_45819){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto____1.call(this,state_45819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_45829 = f__37477__auto__.call(null);
(statearr_45829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_45829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__45833 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__45833,(0),null);
var ln = cljs.core.nth.call(null,vec__45833,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__45836 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__45836,(0),null);
var file_line = cljs.core.nth.call(null,vec__45836,(1),null);
var file_column = cljs.core.nth.call(null,vec__45836,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__45836,file_name,file_line,file_column){
return (function (p1__45834_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__45834_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__45836,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__30987__auto__ = file_line;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
var and__30975__auto__ = cause;
if(cljs.core.truth_(and__30975__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__30975__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__45839 = figwheel.client.heads_up.ensure_container.call(null);
var map__45839__$1 = ((((!((map__45839 == null)))?((((map__45839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45839):map__45839);
var content_area_el = cljs.core.get.call(null,map__45839__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_45887){
var state_val_45888 = (state_45887[(1)]);
if((state_val_45888 === (1))){
var inst_45870 = (state_45887[(7)]);
var inst_45870__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45871 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45872 = ["0.0"];
var inst_45873 = cljs.core.PersistentHashMap.fromArrays(inst_45871,inst_45872);
var inst_45874 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45870__$1,inst_45873);
var inst_45875 = cljs.core.async.timeout.call(null,(300));
var state_45887__$1 = (function (){var statearr_45889 = state_45887;
(statearr_45889[(8)] = inst_45874);

(statearr_45889[(7)] = inst_45870__$1);

return statearr_45889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45887__$1,(2),inst_45875);
} else {
if((state_val_45888 === (2))){
var inst_45870 = (state_45887[(7)]);
var inst_45877 = (state_45887[(2)]);
var inst_45878 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_45879 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_45880 = cljs.core.PersistentHashMap.fromArrays(inst_45878,inst_45879);
var inst_45881 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45870,inst_45880);
var inst_45882 = cljs.core.async.timeout.call(null,(200));
var state_45887__$1 = (function (){var statearr_45890 = state_45887;
(statearr_45890[(9)] = inst_45877);

(statearr_45890[(10)] = inst_45881);

return statearr_45890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45887__$1,(3),inst_45882);
} else {
if((state_val_45888 === (3))){
var inst_45870 = (state_45887[(7)]);
var inst_45884 = (state_45887[(2)]);
var inst_45885 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45870,"");
var state_45887__$1 = (function (){var statearr_45891 = state_45887;
(statearr_45891[(11)] = inst_45884);

return statearr_45891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45887__$1,inst_45885);
} else {
return null;
}
}
}
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__37462__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__37462__auto____0 = (function (){
var statearr_45895 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45895[(0)] = figwheel$client$heads_up$clear_$_state_machine__37462__auto__);

(statearr_45895[(1)] = (1));

return statearr_45895;
});
var figwheel$client$heads_up$clear_$_state_machine__37462__auto____1 = (function (state_45887){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_45887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e45896){if((e45896 instanceof Object)){
var ex__37465__auto__ = e45896;
var statearr_45897_45899 = state_45887;
(statearr_45897_45899[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45900 = state_45887;
state_45887 = G__45900;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__37462__auto__ = function(state_45887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__37462__auto____1.call(this,state_45887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__37462__auto____0;
figwheel$client$heads_up$clear_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__37462__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_45898 = f__37477__auto__.call(null);
(statearr_45898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_45898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_45932){
var state_val_45933 = (state_45932[(1)]);
if((state_val_45933 === (1))){
var inst_45922 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_45932__$1 = state_45932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45932__$1,(2),inst_45922);
} else {
if((state_val_45933 === (2))){
var inst_45924 = (state_45932[(2)]);
var inst_45925 = cljs.core.async.timeout.call(null,(400));
var state_45932__$1 = (function (){var statearr_45934 = state_45932;
(statearr_45934[(7)] = inst_45924);

return statearr_45934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45932__$1,(3),inst_45925);
} else {
if((state_val_45933 === (3))){
var inst_45927 = (state_45932[(2)]);
var inst_45928 = figwheel.client.heads_up.clear.call(null);
var state_45932__$1 = (function (){var statearr_45935 = state_45932;
(statearr_45935[(8)] = inst_45927);

return statearr_45935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45932__$1,(4),inst_45928);
} else {
if((state_val_45933 === (4))){
var inst_45930 = (state_45932[(2)]);
var state_45932__$1 = state_45932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45932__$1,inst_45930);
} else {
return null;
}
}
}
}
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto____0 = (function (){
var statearr_45939 = [null,null,null,null,null,null,null,null,null];
(statearr_45939[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto__);

(statearr_45939[(1)] = (1));

return statearr_45939;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto____1 = (function (state_45932){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_45932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e45940){if((e45940 instanceof Object)){
var ex__37465__auto__ = e45940;
var statearr_45941_45943 = state_45932;
(statearr_45941_45943[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45944 = state_45932;
state_45932 = G__45944;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto__ = function(state_45932){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto____1.call(this,state_45932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_45942 = f__37477__auto__.call(null);
(statearr_45942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_45942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1487610720509