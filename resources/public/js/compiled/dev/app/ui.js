// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.ui');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.i18n');
goog.require('yahoo.intl_messageformat_with_locales');
goog.require('untangled.client.data_fetch');
if(typeof app.ui.User !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.User = (function app$ui$User(){
var this__35710__auto__ = this;
React.Component.apply(this__35710__auto__,arguments);

if(!((this__35710__auto__.initLocalState == null))){
this__35710__auto__.state = this__35710__auto__.initLocalState();
} else {
this__35710__auto__.state = {};
}

return this__35710__auto__;
});

app.ui.User.prototype = goog.object.clone(React.Component.prototype);
}

var x46796_46807 = app.ui.User.prototype;
x46796_46807.componentWillUpdate = ((function (x46796_46807){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
if(((!((this__35628__auto__ == null)))?(((false) || (this__35628__auto__.om$next$Ident$))?true:false):false)){
var ident__35632__auto___46808 = om.next.ident.call(null,this__35628__auto__,om.next.props.call(null,this__35628__auto__));
var next_ident__35633__auto___46809 = om.next.ident.call(null,this__35628__auto__,om.next._next_props.call(null,next_props__35629__auto__,this__35628__auto__));
if(cljs.core.not_EQ_.call(null,ident__35632__auto___46808,next_ident__35633__auto___46809)){
var idxr__35634__auto___46810 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__35634__auto___46810 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__35634__auto___46810),((function (idxr__35634__auto___46810,ident__35632__auto___46808,next_ident__35633__auto___46809,this__35628__auto__,x46796_46807){
return (function (indexes__35635__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__35635__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__35632__auto___46808], null),cljs.core.disj,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__35633__auto___46809], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35628__auto__);
});})(idxr__35634__auto___46810,ident__35632__auto___46808,next_ident__35633__auto___46809,this__35628__auto__,x46796_46807))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__35628__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__35628__auto__);
});})(x46796_46807))
;

x46796_46807.shouldComponentUpdate = ((function (x46796_46807){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
var next_children__35631__auto__ = next_props__35629__auto__.children;
var next_props__35629__auto____$1 = goog.object.get(next_props__35629__auto__,"omcljs$value");
var next_props__35629__auto____$2 = (function (){var G__46798 = next_props__35629__auto____$1;
if((next_props__35629__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__46798);
} else {
return G__46798;
}
})();
var or__30987__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__35628__auto__),next_props__35629__auto____$2);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = (function (){var and__30975__auto__ = this__35628__auto__.state;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__35628__auto__.state,"omcljs$state"),goog.object.get(next_state__35630__auto__,"omcljs$state"));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(or__30987__auto____$1)){
return or__30987__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__35628__auto__.props.children,next_children__35631__auto__);
}
}
});})(x46796_46807))
;

x46796_46807.componentWillUnmount = ((function (x46796_46807){
return (function (){
var this__35628__auto__ = this;
var r__35639__auto__ = om.next.get_reconciler.call(null,this__35628__auto__);
var cfg__35640__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__35639__auto__);
var st__35641__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
var indexer__35638__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
if(cljs.core.truth_((function (){var and__30975__auto__ = !((st__35641__auto__ == null));
if(and__30975__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__35641__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__35628__auto__], null));
} else {
return and__30975__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__35641__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__35628__auto__);
} else {
}

if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46796_46807))
;

x46796_46807.componentDidUpdate = ((function (x46796_46807){
return (function (prev_props__35636__auto__,prev_state__35637__auto__){
var this__35628__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__35628__auto__);
});})(x46796_46807))
;

x46796_46807.isMounted = ((function (x46796_46807){
return (function (){
var this__35628__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__35628__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46796_46807))
;

x46796_46807.componentWillMount = ((function (x46796_46807){
return (function (){
var this__35628__auto__ = this;
var indexer__35638__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46796_46807))
;


app.ui.User.prototype.constructor = app.ui.User;

app.ui.User.prototype.constructor.displayName = "app.ui/User";

app.ui.User.prototype.om$isComponent = true;

var x46799_46811 = app.ui.User;
/** @nocollapse */
x46799_46811.om$next$IQuery$ = true;

/** @nocollapse */
x46799_46811.om$next$IQuery$query$arity$1 = ((function (x46799_46811){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("user","name","user/name",1848814598)], null);
});})(x46799_46811))
;

/** @nocollapse */
x46799_46811.om$next$Ident$ = true;

/** @nocollapse */
x46799_46811.om$next$Ident$ident$arity$2 = ((function (x46799_46811){
return (function (_,p__46800){
var map__46801 = p__46800;
var map__46801__$1 = ((((!((map__46801 == null)))?((((map__46801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46801):map__46801);
var id = cljs.core.get.call(null,map__46801__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x46799_46811))
;


var x46803_46812 = app.ui.User.prototype;

x46803_46812.om$next$IQuery$ = true;


x46803_46812.om$next$IQuery$query$arity$1 = ((function (x46803_46812){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("user","name","user/name",1848814598)], null);
});})(x46803_46812))
;


x46803_46812.om$next$Ident$ = true;


x46803_46812.om$next$Ident$ident$arity$2 = ((function (x46803_46812){
return (function (_,p__46804){
var map__46805 = p__46804;
var map__46805__$1 = ((((!((map__46805 == null)))?((((map__46805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46805):map__46805);
var id = cljs.core.get.call(null,map__46805__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id], null);
});})(x46803_46812))
;


app.ui.User.cljs$lang$type = true;

app.ui.User.cljs$lang$ctorStr = "app.ui/User";

app.ui.User.cljs$lang$ctorPrWriter = (function (this__35713__auto__,writer__35714__auto__,opt__35715__auto__){
return cljs.core._write.call(null,writer__35714__auto__,"app.ui/User");
});
app.ui.ui_user = om.next.factory.call(null,app.ui.User,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(typeof app.ui.Message !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Message = (function app$ui$Message(){
var this__35710__auto__ = this;
React.Component.apply(this__35710__auto__,arguments);

if(!((this__35710__auto__.initLocalState == null))){
this__35710__auto__.state = this__35710__auto__.initLocalState();
} else {
this__35710__auto__.state = {};
}

return this__35710__auto__;
});

app.ui.Message.prototype = goog.object.clone(React.Component.prototype);
}

var x46817_46835 = app.ui.Message.prototype;
x46817_46835.componentWillUpdate = ((function (x46817_46835){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
if(((!((this__35628__auto__ == null)))?(((false) || (this__35628__auto__.om$next$Ident$))?true:false):false)){
var ident__35632__auto___46836 = om.next.ident.call(null,this__35628__auto__,om.next.props.call(null,this__35628__auto__));
var next_ident__35633__auto___46837 = om.next.ident.call(null,this__35628__auto__,om.next._next_props.call(null,next_props__35629__auto__,this__35628__auto__));
if(cljs.core.not_EQ_.call(null,ident__35632__auto___46836,next_ident__35633__auto___46837)){
var idxr__35634__auto___46838 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__35634__auto___46838 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__35634__auto___46838),((function (idxr__35634__auto___46838,ident__35632__auto___46836,next_ident__35633__auto___46837,this__35628__auto__,x46817_46835){
return (function (indexes__35635__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__35635__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__35632__auto___46836], null),cljs.core.disj,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__35633__auto___46837], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35628__auto__);
});})(idxr__35634__auto___46838,ident__35632__auto___46836,next_ident__35633__auto___46837,this__35628__auto__,x46817_46835))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__35628__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__35628__auto__);
});})(x46817_46835))
;

x46817_46835.shouldComponentUpdate = ((function (x46817_46835){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
var next_children__35631__auto__ = next_props__35629__auto__.children;
var next_props__35629__auto____$1 = goog.object.get(next_props__35629__auto__,"omcljs$value");
var next_props__35629__auto____$2 = (function (){var G__46819 = next_props__35629__auto____$1;
if((next_props__35629__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__46819);
} else {
return G__46819;
}
})();
var or__30987__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__35628__auto__),next_props__35629__auto____$2);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = (function (){var and__30975__auto__ = this__35628__auto__.state;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__35628__auto__.state,"omcljs$state"),goog.object.get(next_state__35630__auto__,"omcljs$state"));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(or__30987__auto____$1)){
return or__30987__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__35628__auto__.props.children,next_children__35631__auto__);
}
}
});})(x46817_46835))
;

x46817_46835.componentWillUnmount = ((function (x46817_46835){
return (function (){
var this__35628__auto__ = this;
var r__35639__auto__ = om.next.get_reconciler.call(null,this__35628__auto__);
var cfg__35640__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__35639__auto__);
var st__35641__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
var indexer__35638__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
if(cljs.core.truth_((function (){var and__30975__auto__ = !((st__35641__auto__ == null));
if(and__30975__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__35641__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__35628__auto__], null));
} else {
return and__30975__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__35641__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__35628__auto__);
} else {
}

if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46817_46835))
;

x46817_46835.componentDidUpdate = ((function (x46817_46835){
return (function (prev_props__35636__auto__,prev_state__35637__auto__){
var this__35628__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__35628__auto__);
});})(x46817_46835))
;

x46817_46835.isMounted = ((function (x46817_46835){
return (function (){
var this__35628__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__35628__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46817_46835))
;

x46817_46835.componentWillMount = ((function (x46817_46835){
return (function (){
var this__35628__auto__ = this;
var indexer__35638__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46817_46835))
;

x46817_46835.render = ((function (x46817_46835){
return (function (){
var this__35627__auto__ = this;
var this$ = this__35627__auto__;
var _STAR_reconciler_STAR_46820 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46821 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46822 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46823 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46824 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__35627__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__35627__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__35627__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__35627__auto__);

om.next._STAR_parent_STAR_ = this__35627__auto__;

try{var map__46825 = om.next.props.call(null,this$);
var map__46825__$1 = ((((!((map__46825 == null)))?((((map__46825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46825):map__46825);
var id = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var text = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword("message","text","message/text",743256678));
var user = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword("message","user","message/user",409734145));
return React.DOM.li({},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,React.DOM.strong(null,om.util.force_children.call(null,new cljs.core.Keyword("user","name","user/name",1848814598).cljs$core$IFn$_invoke$arity$1(user)))),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str(" - "),cljs.core.str(text)].join('')))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46824;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46823;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46822;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46821;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46820;
}});})(x46817_46835))
;


app.ui.Message.prototype.constructor = app.ui.Message;

app.ui.Message.prototype.constructor.displayName = "app.ui/Message";

app.ui.Message.prototype.om$isComponent = true;

var x46827_46839 = app.ui.Message;
/** @nocollapse */
x46827_46839.om$next$IQuery$ = true;

/** @nocollapse */
x46827_46839.om$next$IQuery$query$arity$1 = ((function (x46827_46839){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("message","text","message/text",743256678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("message","user","message/user",409734145),om.next.get_query.call(null,app.ui.User)], null)], null);
});})(x46827_46839))
;

/** @nocollapse */
x46827_46839.om$next$Ident$ = true;

/** @nocollapse */
x46827_46839.om$next$Ident$ident$arity$2 = ((function (x46827_46839){
return (function (_,p__46828){
var map__46829 = p__46828;
var map__46829__$1 = ((((!((map__46829 == null)))?((((map__46829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46829):map__46829);
var id = cljs.core.get.call(null,map__46829__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message","by-id","message/by-id",-668086722),id], null);
});})(x46827_46839))
;


var x46831_46840 = app.ui.Message.prototype;

x46831_46840.om$next$IQuery$ = true;


x46831_46840.om$next$IQuery$query$arity$1 = ((function (x46831_46840){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("message","text","message/text",743256678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("message","user","message/user",409734145),om.next.get_query.call(null,app.ui.User)], null)], null);
});})(x46831_46840))
;


x46831_46840.om$next$Ident$ = true;


x46831_46840.om$next$Ident$ident$arity$2 = ((function (x46831_46840){
return (function (_,p__46832){
var map__46833 = p__46832;
var map__46833__$1 = ((((!((map__46833 == null)))?((((map__46833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46833):map__46833);
var id = cljs.core.get.call(null,map__46833__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message","by-id","message/by-id",-668086722),id], null);
});})(x46831_46840))
;


app.ui.Message.cljs$lang$type = true;

app.ui.Message.cljs$lang$ctorStr = "app.ui/Message";

app.ui.Message.cljs$lang$ctorPrWriter = (function (this__35713__auto__,writer__35714__auto__,opt__35715__auto__){
return cljs.core._write.call(null,writer__35714__auto__,"app.ui/Message");
});
app.ui.ui_message = om.next.factory.call(null,app.ui.Message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.identity], null));
if(typeof app.ui.Channel !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Channel = (function app$ui$Channel(){
var this__35710__auto__ = this;
React.Component.apply(this__35710__auto__,arguments);

if(!((this__35710__auto__.initLocalState == null))){
this__35710__auto__.state = this__35710__auto__.initLocalState();
} else {
this__35710__auto__.state = {};
}

return this__35710__auto__;
});

app.ui.Channel.prototype = goog.object.clone(React.Component.prototype);
}

var x46846_46868 = app.ui.Channel.prototype;
x46846_46868.componentWillUpdate = ((function (x46846_46868){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
if(((!((this__35628__auto__ == null)))?(((false) || (this__35628__auto__.om$next$Ident$))?true:false):false)){
var ident__35632__auto___46869 = om.next.ident.call(null,this__35628__auto__,om.next.props.call(null,this__35628__auto__));
var next_ident__35633__auto___46870 = om.next.ident.call(null,this__35628__auto__,om.next._next_props.call(null,next_props__35629__auto__,this__35628__auto__));
if(cljs.core.not_EQ_.call(null,ident__35632__auto___46869,next_ident__35633__auto___46870)){
var idxr__35634__auto___46871 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__35634__auto___46871 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__35634__auto___46871),((function (idxr__35634__auto___46871,ident__35632__auto___46869,next_ident__35633__auto___46870,this__35628__auto__,x46846_46868){
return (function (indexes__35635__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__35635__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__35632__auto___46869], null),cljs.core.disj,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__35633__auto___46870], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35628__auto__);
});})(idxr__35634__auto___46871,ident__35632__auto___46869,next_ident__35633__auto___46870,this__35628__auto__,x46846_46868))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__35628__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__35628__auto__);
});})(x46846_46868))
;

x46846_46868.shouldComponentUpdate = ((function (x46846_46868){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
var next_children__35631__auto__ = next_props__35629__auto__.children;
var next_props__35629__auto____$1 = goog.object.get(next_props__35629__auto__,"omcljs$value");
var next_props__35629__auto____$2 = (function (){var G__46848 = next_props__35629__auto____$1;
if((next_props__35629__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__46848);
} else {
return G__46848;
}
})();
var or__30987__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__35628__auto__),next_props__35629__auto____$2);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = (function (){var and__30975__auto__ = this__35628__auto__.state;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__35628__auto__.state,"omcljs$state"),goog.object.get(next_state__35630__auto__,"omcljs$state"));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(or__30987__auto____$1)){
return or__30987__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__35628__auto__.props.children,next_children__35631__auto__);
}
}
});})(x46846_46868))
;

x46846_46868.componentWillUnmount = ((function (x46846_46868){
return (function (){
var this__35628__auto__ = this;
var r__35639__auto__ = om.next.get_reconciler.call(null,this__35628__auto__);
var cfg__35640__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__35639__auto__);
var st__35641__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
var indexer__35638__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
if(cljs.core.truth_((function (){var and__30975__auto__ = !((st__35641__auto__ == null));
if(and__30975__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__35641__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__35628__auto__], null));
} else {
return and__30975__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__35641__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__35628__auto__);
} else {
}

if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46846_46868))
;

x46846_46868.componentDidUpdate = ((function (x46846_46868){
return (function (prev_props__35636__auto__,prev_state__35637__auto__){
var this__35628__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__35628__auto__);
});})(x46846_46868))
;

x46846_46868.isMounted = ((function (x46846_46868){
return (function (){
var this__35628__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__35628__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46846_46868))
;

x46846_46868.componentWillMount = ((function (x46846_46868){
return (function (){
var this__35628__auto__ = this;
var indexer__35638__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46846_46868))
;

x46846_46868.initLocalState = ((function (x46846_46868){
return (function (){
var this$ = this;
var ret__35606__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-message","new-message",1599844061),""], null);
var obj46850 = {"omcljs$state":ret__35606__auto__};
return obj46850;
});})(x46846_46868))
;

x46846_46868.render = ((function (x46846_46868){
return (function (){
var this__35627__auto__ = this;
var this$ = this__35627__auto__;
var _STAR_reconciler_STAR_46851 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46852 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46853 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46854 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46855 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__35627__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__35627__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__35627__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__35627__auto__);

om.next._STAR_parent_STAR_ = this__35627__auto__;

try{var map__46856 = om.next.props.call(null,this$);
var map__46856__$1 = ((((!((map__46856 == null)))?((((map__46856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46856):map__46856);
var title = cljs.core.get.call(null,map__46856__$1,new cljs.core.Keyword("channel","title","channel/title",165991146));
var users = cljs.core.get.call(null,map__46856__$1,new cljs.core.Keyword("channel","users","channel/users",-1585281602));
var messages = cljs.core.get.call(null,map__46856__$1,new cljs.core.Keyword("channel","messages","channel/messages",-930411405));
var current_user = cljs.core.get.call(null,map__46856__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
var map__46857 = om.next.get_state.call(null,this$);
var map__46857__$1 = ((((!((map__46857 == null)))?((((map__46857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46857):map__46857);
var new_message = cljs.core.get.call(null,map__46857__$1,new cljs.core.Keyword(null,"new-message","new-message",1599844061));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,[cljs.core.str("Channel - "),cljs.core.str(title)].join('')))),om.util.force_children.call(null,React.DOM.h5(null,om.util.force_children.call(null,clojure.string.join.call(null," ",cljs.core.conj.call(null,cljs.core.map.call(null,new cljs.core.Keyword("user","name","user/name",1848814598),users),"Active users: "))))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,cljs.core.map.call(null,app.ui.ui_message,messages)))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,om.dom.input.call(null,{"type": "text", "value": new_message, "onChange": ((function (map__46856,map__46856__$1,title,users,messages,current_user,map__46857,map__46857__$1,new_message,_STAR_reconciler_STAR_46851,_STAR_depth_STAR_46852,_STAR_shared_STAR_46853,_STAR_instrument_STAR_46854,_STAR_parent_STAR_46855,this$,this__35627__auto__,x46846_46868){
return (function (p1__46841_SHARP_){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"new-message","new-message",1599844061),p1__46841_SHARP_.target.value);
});})(map__46856,map__46856__$1,title,users,messages,current_user,map__46857,map__46857__$1,new_message,_STAR_reconciler_STAR_46851,_STAR_depth_STAR_46852,_STAR_shared_STAR_46853,_STAR_instrument_STAR_46854,_STAR_parent_STAR_46855,this$,this__35627__auto__,x46846_46868))
})),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__46856,map__46856__$1,title,users,messages,current_user,map__46857,map__46857__$1,new_message,_STAR_reconciler_STAR_46851,_STAR_depth_STAR_46852,_STAR_shared_STAR_46853,_STAR_instrument_STAR_46854,_STAR_parent_STAR_46855,this$,this__35627__auto__,x46846_46868){
return (function (){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"new-message","new-message",1599844061),"");

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("message","add","message/add",684833563,null)),(function (){var x__31821__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),om.next.tempid.call(null),new cljs.core.Keyword("message","text","message/text",743256678),new_message,new cljs.core.Keyword("message","user","message/user",409734145),current_user], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
});})(map__46856,map__46856__$1,title,users,messages,current_user,map__46857,map__46857__$1,new_message,_STAR_reconciler_STAR_46851,_STAR_depth_STAR_46852,_STAR_shared_STAR_46853,_STAR_instrument_STAR_46854,_STAR_parent_STAR_46855,this$,this__35627__auto__,x46846_46868))
},om.util.force_children.call(null,"Send"))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46855;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46854;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46853;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46852;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46851;
}});})(x46846_46868))
;


app.ui.Channel.prototype.constructor = app.ui.Channel;

app.ui.Channel.prototype.constructor.displayName = "app.ui/Channel";

app.ui.Channel.prototype.om$isComponent = true;

var x46860_46872 = app.ui.Channel;
/** @nocollapse */
x46860_46872.om$next$IQuery$ = true;

/** @nocollapse */
x46860_46872.om$next$IQuery$query$arity$1 = ((function (x46860_46872){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("channel","title","channel/title",165991146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("channel","users","channel/users",-1585281602),om.next.get_query.call(null,app.ui.User)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("channel","messages","channel/messages",-930411405),om.next.get_query.call(null,app.ui.Message)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),om.next.get_query.call(null,app.ui.User)], true, false)], null);
});})(x46860_46872))
;

/** @nocollapse */
x46860_46872.om$next$Ident$ = true;

/** @nocollapse */
x46860_46872.om$next$Ident$ident$arity$2 = ((function (x46860_46872){
return (function (_,p__46861){
var map__46862 = p__46861;
var map__46862__$1 = ((((!((map__46862 == null)))?((((map__46862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46862):map__46862);
var id = cljs.core.get.call(null,map__46862__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("channel","by-id","channel/by-id",-1391505086),id], null);
});})(x46860_46872))
;


var x46864_46873 = app.ui.Channel.prototype;

x46864_46873.om$next$IQuery$ = true;


x46864_46873.om$next$IQuery$query$arity$1 = ((function (x46864_46873){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("channel","title","channel/title",165991146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("channel","users","channel/users",-1585281602),om.next.get_query.call(null,app.ui.User)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("channel","messages","channel/messages",-930411405),om.next.get_query.call(null,app.ui.Message)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),om.next.get_query.call(null,app.ui.User)], true, false)], null);
});})(x46864_46873))
;


x46864_46873.om$next$Ident$ = true;


x46864_46873.om$next$Ident$ident$arity$2 = ((function (x46864_46873){
return (function (_,p__46865){
var map__46866 = p__46865;
var map__46866__$1 = ((((!((map__46866 == null)))?((((map__46866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46866):map__46866);
var id = cljs.core.get.call(null,map__46866__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("channel","by-id","channel/by-id",-1391505086),id], null);
});})(x46864_46873))
;


app.ui.Channel.cljs$lang$type = true;

app.ui.Channel.cljs$lang$ctorStr = "app.ui/Channel";

app.ui.Channel.cljs$lang$ctorPrWriter = (function (this__35713__auto__,writer__35714__auto__,opt__35715__auto__){
return cljs.core._write.call(null,writer__35714__auto__,"app.ui/Channel");
});
app.ui.ui_channel = om.next.factory.call(null,app.ui.Channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(typeof app.ui.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(){
var this__35710__auto__ = this;
React.Component.apply(this__35710__auto__,arguments);

if(!((this__35710__auto__.initLocalState == null))){
this__35710__auto__.state = this__35710__auto__.initLocalState();
} else {
this__35710__auto__.state = {};
}

return this__35710__auto__;
});

app.ui.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x46880_46896 = app.ui.Root.prototype;
x46880_46896.componentWillUpdate = ((function (x46880_46896){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
if(((!((this__35628__auto__ == null)))?(((false) || (this__35628__auto__.om$next$Ident$))?true:false):false)){
var ident__35632__auto___46897 = om.next.ident.call(null,this__35628__auto__,om.next.props.call(null,this__35628__auto__));
var next_ident__35633__auto___46898 = om.next.ident.call(null,this__35628__auto__,om.next._next_props.call(null,next_props__35629__auto__,this__35628__auto__));
if(cljs.core.not_EQ_.call(null,ident__35632__auto___46897,next_ident__35633__auto___46898)){
var idxr__35634__auto___46899 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__35634__auto___46899 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__35634__auto___46899),((function (idxr__35634__auto___46899,ident__35632__auto___46897,next_ident__35633__auto___46898,this__35628__auto__,x46880_46896){
return (function (indexes__35635__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__35635__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__35632__auto___46897], null),cljs.core.disj,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__35633__auto___46898], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__35628__auto__);
});})(idxr__35634__auto___46899,ident__35632__auto___46897,next_ident__35633__auto___46898,this__35628__auto__,x46880_46896))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__35628__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__35628__auto__);
});})(x46880_46896))
;

x46880_46896.shouldComponentUpdate = ((function (x46880_46896){
return (function (next_props__35629__auto__,next_state__35630__auto__){
var this__35628__auto__ = this;
var next_children__35631__auto__ = next_props__35629__auto__.children;
var next_props__35629__auto____$1 = goog.object.get(next_props__35629__auto__,"omcljs$value");
var next_props__35629__auto____$2 = (function (){var G__46882 = next_props__35629__auto____$1;
if((next_props__35629__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__46882);
} else {
return G__46882;
}
})();
var or__30987__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__35628__auto__),next_props__35629__auto____$2);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = (function (){var and__30975__auto__ = this__35628__auto__.state;
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__35628__auto__.state,"omcljs$state"),goog.object.get(next_state__35630__auto__,"omcljs$state"));
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(or__30987__auto____$1)){
return or__30987__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__35628__auto__.props.children,next_children__35631__auto__);
}
}
});})(x46880_46896))
;

x46880_46896.componentWillUnmount = ((function (x46880_46896){
return (function (){
var this__35628__auto__ = this;
var r__35639__auto__ = om.next.get_reconciler.call(null,this__35628__auto__);
var cfg__35640__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__35639__auto__);
var st__35641__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
var indexer__35638__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__35640__auto__);
if(cljs.core.truth_((function (){var and__30975__auto__ = !((st__35641__auto__ == null));
if(and__30975__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__35641__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__35628__auto__], null));
} else {
return and__30975__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__35641__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__35628__auto__);
} else {
}

if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46880_46896))
;

x46880_46896.componentDidUpdate = ((function (x46880_46896){
return (function (prev_props__35636__auto__,prev_state__35637__auto__){
var this__35628__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__35628__auto__);
});})(x46880_46896))
;

x46880_46896.isMounted = ((function (x46880_46896){
return (function (){
var this__35628__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__35628__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46880_46896))
;

x46880_46896.componentWillMount = ((function (x46880_46896){
return (function (){
var this__35628__auto__ = this;
var indexer__35638__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__35628__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__35638__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__35638__auto__,this__35628__auto__);
}
});})(x46880_46896))
;

x46880_46896.initLocalState = ((function (x46880_46896){
return (function (){
var this$ = this;
var ret__35606__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),""], null);
var obj46884 = {"omcljs$state":ret__35606__auto__};
return obj46884;
});})(x46880_46896))
;

x46880_46896.render = ((function (x46880_46896){
return (function (){
var this__35627__auto__ = this;
var this$ = this__35627__auto__;
var _STAR_reconciler_STAR_46885 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46886 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46887 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46888 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46889 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__35627__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__35627__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__35627__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__35627__auto__);

om.next._STAR_parent_STAR_ = this__35627__auto__;

try{var map__46890 = om.next.props.call(null,this$);
var map__46890__$1 = ((((!((map__46890 == null)))?((((map__46890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46890):map__46890);
var react_key = cljs.core.get.call(null,map__46890__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"ROOT");
var data = cljs.core.get.call(null,map__46890__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var channels = cljs.core.get.call(null,map__46890__$1,new cljs.core.Keyword("app","channels","app/channels",1132662439));
var users = cljs.core.get.call(null,map__46890__$1,new cljs.core.Keyword("app","users","app/users",-713520992));
var current_user = cljs.core.get.call(null,map__46890__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
var current_channel = cljs.core.get.call(null,map__46890__$1,new cljs.core.Keyword(null,"current-channel","current-channel",-14577945));
var map__46891 = om.next.get_state.call(null,this$);
var map__46891__$1 = ((((!((map__46891 == null)))?((((map__46891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46891):map__46891);
var new_user = cljs.core.get.call(null,map__46891__$1,new cljs.core.Keyword(null,"new-user","new-user",1575436062));
var validUserName = cljs.core.some.call(null,((function (map__46890,map__46890__$1,react_key,data,channels,users,current_user,current_channel,map__46891,map__46891__$1,new_user,_STAR_reconciler_STAR_46885,_STAR_depth_STAR_46886,_STAR_shared_STAR_46887,_STAR_instrument_STAR_46888,_STAR_parent_STAR_46889,this$,this__35627__auto__,x46880_46896){
return (function (p1__46874_SHARP_){
return cljs.core._EQ_.call(null,new_user,new cljs.core.Keyword("user","name","user/name",1848814598).cljs$core$IFn$_invoke$arity$1(p1__46874_SHARP_));
});})(map__46890,map__46890__$1,react_key,data,channels,users,current_user,current_channel,map__46891,map__46891__$1,new_user,_STAR_reconciler_STAR_46885,_STAR_depth_STAR_46886,_STAR_shared_STAR_46887,_STAR_instrument_STAR_46888,_STAR_parent_STAR_46889,this$,this__35627__auto__,x46880_46896))
,users);
return React.DOM.div({"key": react_key},om.util.force_children.call(null,((cljs.core.empty_QMARK_.call(null,current_user))?React.DOM.div({},om.util.force_children.call(null,React.DOM.header(null,om.util.force_children.call(null,"Get signed in: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "text", "value": new_user, "onChange": ((function (map__46890,map__46890__$1,react_key,data,channels,users,current_user,current_channel,map__46891,map__46891__$1,new_user,validUserName,_STAR_reconciler_STAR_46885,_STAR_depth_STAR_46886,_STAR_shared_STAR_46887,_STAR_instrument_STAR_46888,_STAR_parent_STAR_46889,this$,this__35627__auto__,x46880_46896){
return (function (p1__46875_SHARP_){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"new-user","new-user",1575436062),p1__46875_SHARP_.target.value);
});})(map__46890,map__46890__$1,react_key,data,channels,users,current_user,current_channel,map__46891,map__46891__$1,new_user,validUserName,_STAR_reconciler_STAR_46885,_STAR_depth_STAR_46886,_STAR_shared_STAR_46887,_STAR_instrument_STAR_46888,_STAR_parent_STAR_46889,this$,this__35627__auto__,x46880_46896))
})),om.util.force_children.call(null,React.DOM.button({"disabled": validUserName, "onClick": ((function (map__46890,map__46890__$1,react_key,data,channels,users,current_user,current_channel,map__46891,map__46891__$1,new_user,validUserName,_STAR_reconciler_STAR_46885,_STAR_depth_STAR_46886,_STAR_shared_STAR_46887,_STAR_instrument_STAR_46888,_STAR_parent_STAR_46889,this$,this__35627__auto__,x46880_46896){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("user","add","user/add",1862637407,null)),(function (){var x__31821__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),om.next.tempid.call(null),new cljs.core.Keyword("user","name","user/name",1848814598),new_user], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))));
});})(map__46890,map__46890__$1,react_key,data,channels,users,current_user,current_channel,map__46891,map__46891__$1,new_user,validUserName,_STAR_reconciler_STAR_46885,_STAR_depth_STAR_46886,_STAR_shared_STAR_46887,_STAR_instrument_STAR_46888,_STAR_parent_STAR_46889,this$,this__35627__auto__,x46880_46896))
},om.util.force_children.call(null,"Sign in")))):React.DOM.div({},om.util.force_children.call(null,React.DOM.h3({},om.util.force_children.call(null,[cljs.core.str("Untangled Chat - "),cljs.core.str(new cljs.core.Keyword("user","name","user/name",1848814598).cljs$core$IFn$_invoke$arity$1(current_user))].join('')))),om.util.force_children.call(null,app.ui.ui_channel.call(null,current_channel))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46889;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46888;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46887;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46886;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46885;
}});})(x46880_46896))
;


app.ui.Root.prototype.constructor = app.ui.Root;

app.ui.Root.prototype.constructor.displayName = "app.ui/Root";

app.ui.Root.prototype.om$isComponent = true;

var x46894_46900 = app.ui.Root;
/** @nocollapse */
x46894_46900.om$next$IQuery$ = true;

/** @nocollapse */
x46894_46900.om$next$IQuery$query$arity$1 = ((function (x46894_46900){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),om.next.get_query.call(null,app.ui.User)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-channel","current-channel",-14577945),om.next.get_query.call(null,app.ui.Channel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","users","app/users",-713520992),om.next.get_query.call(null,app.ui.User)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","channels","app/channels",1132662439),om.next.get_query.call(null,app.ui.Channel)], null)], null);
});})(x46894_46900))
;


var x46895_46901 = app.ui.Root.prototype;

x46895_46901.om$next$IQuery$ = true;


x46895_46901.om$next$IQuery$query$arity$1 = ((function (x46895_46901){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),om.next.get_query.call(null,app.ui.User)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-channel","current-channel",-14577945),om.next.get_query.call(null,app.ui.Channel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","users","app/users",-713520992),om.next.get_query.call(null,app.ui.User)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","channels","app/channels",1132662439),om.next.get_query.call(null,app.ui.Channel)], null)], null);
});})(x46895_46901))
;


app.ui.Root.cljs$lang$type = true;

app.ui.Root.cljs$lang$ctorStr = "app.ui/Root";

app.ui.Root.cljs$lang$ctorPrWriter = (function (this__35713__auto__,writer__35714__auto__,opt__35715__auto__){
return cljs.core._write.call(null,writer__35714__auto__,"app.ui/Root");
});

//# sourceMappingURL=ui.js.map?rel=1487610721575