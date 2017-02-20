// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("push","user-left","push/user-left",-1136543234,null),(function (p__43501,_,p__43502){
var map__43503 = p__43501;
var map__43503__$1 = ((((!((map__43503 == null)))?((((map__43503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43503):map__43503);
var env = map__43503__$1;
var state = cljs.core.get.call(null,map__43503__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__43503__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__43504 = p__43502;
var map__43504__$1 = ((((!((map__43504 == null)))?((((map__43504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43504):map__43504);
var msg = cljs.core.get.call(null,map__43504__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg){
return (function (){
var channel_ident = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"current-channel","current-channel",-14577945));
var user_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(msg)], null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),cljs.core.dissoc,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(msg));

cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("app","users","app/users",-713520992),((function (channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg){
return (function (users){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg){
return (function (p1__43499_SHARP_){
return cljs.core._EQ_.call(null,user_ident,p1__43499_SHARP_);
});})(channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg))
),users);
});})(channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,channel_ident,new cljs.core.Keyword("channel","users","channel/users",-1585281602)),((function (channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg){
return (function (users){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg){
return (function (p1__43500_SHARP_){
return cljs.core._EQ_.call(null,user_ident,p1__43500_SHARP_);
});})(channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg))
),users);
});})(channel_ident,user_ident,map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg))
);
});})(map__43503,map__43503__$1,env,state,ast,map__43504,map__43504__$1,msg))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("push","user-new","push/user-new",492017865,null),(function (p__43507,_,p__43508){
var map__43509 = p__43507;
var map__43509__$1 = ((((!((map__43509 == null)))?((((map__43509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43509):map__43509);
var env = map__43509__$1;
var state = cljs.core.get.call(null,map__43509__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__43509__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__43510 = p__43508;
var map__43510__$1 = ((((!((map__43510 == null)))?((((map__43510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43510):map__43510);
var msg = cljs.core.get.call(null,map__43510__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43509,map__43509__$1,env,state,ast,map__43510,map__43510__$1,msg){
return (function (){
var channel_ident = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"current-channel","current-channel",-14577945));
var user_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(msg)], null);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,user_ident,msg);

cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("app","users","app/users",-713520992),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),user_ident);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,channel_ident,new cljs.core.Keyword("channel","users","channel/users",-1585281602)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),user_ident);
});})(map__43509,map__43509__$1,env,state,ast,map__43510,map__43510__$1,msg))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("push","message-new","push/message-new",293086511,null),(function (p__43513,_,p__43514){
var map__43515 = p__43513;
var map__43515__$1 = ((((!((map__43515 == null)))?((((map__43515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43515):map__43515);
var env = map__43515__$1;
var state = cljs.core.get.call(null,map__43515__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__43515__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__43516 = p__43514;
var map__43516__$1 = ((((!((map__43516 == null)))?((((map__43516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43516):map__43516);
var msg = cljs.core.get.call(null,map__43516__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43515,map__43515__$1,env,state,ast,map__43516,map__43516__$1,msg){
return (function (){
var channel_ident = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"current-channel","current-channel",-14577945));
var message_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message","by-id","message/by-id",-668086722),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(msg)], null);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,message_ident,msg);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,channel_ident,new cljs.core.Keyword("channel","messages","channel/messages",-930411405)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),message_ident);
});})(map__43515,map__43515__$1,env,state,ast,map__43516,map__43516__$1,msg))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("channel","set","channel/set",-1612390140,null),(function (p__43519,_,params){
var map__43520 = p__43519;
var map__43520__$1 = ((((!((map__43520 == null)))?((((map__43520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43520):map__43520);
var env = map__43520__$1;
var state = cljs.core.get.call(null,map__43520__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__43520__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43520,map__43520__$1,env,state,ast){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-channel","current-channel",-14577945),params);
});})(map__43520,map__43520__$1,env,state,ast))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("user","add","user/add",1862637407,null),(function (p__43522,_,params){
var map__43523 = p__43522;
var map__43523__$1 = ((((!((map__43523 == null)))?((((map__43523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43523):map__43523);
var env = map__43523__$1;
var state = cljs.core.get.call(null,map__43523__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__43523__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),ast,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43523,map__43523__$1,env,state,ast){
return (function (){
var map__43525_43527 = params;
var map__43525_43528__$1 = ((((!((map__43525_43527 == null)))?((((map__43525_43527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43525_43527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43525_43527):map__43525_43527);
var id_43529 = cljs.core.get.call(null,map__43525_43528__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ident_43530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),id_43529], null);
var def_chan_43531 = cljs.core.first.call(null,new cljs.core.Keyword("app","channels","app/channels",1132662439).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,ident_43530,params);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-channel","current-channel",-14577945),def_chan_43531,new cljs.core.Keyword(null,"current-user","current-user",-868792091),ident_43530);

cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("app","users","app/users",-713520992),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),ident_43530);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("channel","by-id","channel/by-id",-1391505086),cljs.core.second.call(null,def_chan_43531)], null),((function (map__43525_43527,map__43525_43528__$1,id_43529,ident_43530,def_chan_43531,map__43523,map__43523__$1,env,state,ast){
return (function (chan,ident__$1){
return cljs.core.update.call(null,chan,new cljs.core.Keyword("channel","users","channel/users",-1585281602),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),ident__$1);
});})(map__43525_43527,map__43525_43528__$1,id_43529,ident_43530,def_chan_43531,map__43523,map__43523__$1,env,state,ast))
,ident_43530);

return cljs.core.PersistentArrayMap.EMPTY;
});})(map__43523,map__43523__$1,env,state,ast))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("message","add","message/add",684833563,null),(function (p__43532,_,params){
var map__43533 = p__43532;
var map__43533__$1 = ((((!((map__43533 == null)))?((((map__43533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43533):map__43533);
var env = map__43533__$1;
var state = cljs.core.get.call(null,map__43533__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__43533__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),ast,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__43533,map__43533__$1,env,state,ast){
return (function (){
var channel_ident_43537 = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"current-channel","current-channel",-14577945));
var map__43535_43538 = params;
var map__43535_43539__$1 = ((((!((map__43535_43538 == null)))?((((map__43535_43538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43535_43538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43535_43538):map__43535_43538);
var id_43540 = cljs.core.get.call(null,map__43535_43539__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var ident_43541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message","by-id","message/by-id",-668086722),id_43540], null);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,ident_43541,params);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,channel_ident_43537,new cljs.core.Keyword("channel","messages","channel/messages",-930411405)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),ident_43541);

return cljs.core.PersistentArrayMap.EMPTY;
});})(map__43533,map__43533__$1,env,state,ast))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("app","subscribe","app/subscribe",2055714724,null),(function (p__43542,_,___$1){
var map__43543 = p__43542;
var map__43543__$1 = ((((!((map__43543 == null)))?((((map__43543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43543):map__43543);
var ast = cljs.core.get.call(null,map__43543__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),ast], null);
}));

//# sourceMappingURL=mutations.js.map?rel=1487610717735