// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__44310,_,p__44311){
var map__44312 = p__44310;
var map__44312__$1 = ((((!((map__44312 == null)))?((((map__44312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44312):map__44312);
var state = cljs.core.get.call(null,map__44312__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__44313 = p__44311;
var map__44313__$1 = ((((!((map__44313 == null)))?((((map__44313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44313):map__44313);
var config = map__44313__$1;
var post_mutation = cljs.core.get.call(null,map__44313__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
if(cljs.core.truth_((function (){var and__30975__auto__ = post_mutation;
if(cljs.core.truth_(and__30975__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__30975__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__44312,map__44312__$1,state,map__44313,map__44313__$1,config,post_mutation){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__44312,map__44312__$1,state,map__44313,map__44313__$1,config,post_mutation))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__44317,_,p__44318){
var map__44319 = p__44317;
var map__44319__$1 = ((((!((map__44319 == null)))?((((map__44319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44319):map__44319);
var state = cljs.core.get.call(null,map__44319__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__44320 = p__44318;
var map__44320__$1 = ((((!((map__44320 == null)))?((((map__44320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44320):map__44320);
var lang = cljs.core.get.call(null,map__44320__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__44319,map__44319__$1,state,map__44320,map__44320__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__44319,map__44319__$1,state,map__44320,map__44320__$1,lang){
return (function (p1__44316_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__44316_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__44319,map__44319__$1,state,map__44320,map__44320__$1,lang))
);
});})(map__44319,map__44319__$1,state,map__44320,map__44320__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__44323){
var map__44324 = p__44323;
var map__44324__$1 = ((((!((map__44324 == null)))?((((map__44324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44324):map__44324);
var params = map__44324__$1;
var action = cljs.core.get.call(null,map__44324__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__44324__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__44324,map__44324__$1,params,action,execute){
return (function (){
var G__44326 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__44326__$1 = (((G__44326 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__44326));
if((G__44326__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__44326__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__44324,map__44324__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__44327,_,params){
var map__44328 = p__44327;
var map__44328__$1 = ((((!((map__44328 == null)))?((((map__44328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44328):map__44328);
var state = cljs.core.get.call(null,map__44328__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__44328__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__44328,map__44328__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__44328,map__44328__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__44328,map__44328__$1,state,ref))
);
});})(map__44328,map__44328__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__44330,_,p__44331){
var map__44332 = p__44330;
var map__44332__$1 = ((((!((map__44332 == null)))?((((map__44332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44332):map__44332);
var state = cljs.core.get.call(null,map__44332__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__44332__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__44333 = p__44331;
var map__44333__$1 = ((((!((map__44333 == null)))?((((map__44333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44333):map__44333);
var field = cljs.core.get.call(null,map__44333__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__44332,map__44332__$1,state,ref,map__44333,map__44333__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__44332,map__44332__$1,state,ref,map__44333,map__44333__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__44336,k,_){
var map__44337 = p__44336;
var map__44337__$1 = ((((!((map__44337 == null)))?((((map__44337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44337):map__44337);
var target = cljs.core.get.call(null,map__44337__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1487610719004