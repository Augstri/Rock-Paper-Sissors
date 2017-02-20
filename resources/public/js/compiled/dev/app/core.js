// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('untangled.websockets.networking');
goog.require('app.mutations');
goog.require('untangled.i18n');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('app.ui');
goog.require('om.next');
goog.require('app.push_receive');
app.core.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"abc",new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-channel","current-channel",-14577945),cljs.core.PersistentArrayMap.EMPTY], null);
if(typeof app.core.app !== 'undefined'){
} else {
app.core.app = cljs.core.atom.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"networking","networking",586110628),untangled.websockets.networking.make_channel_client.call(null,"/chsk",new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),cljs.core.constantly.call(null,null)),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),app.core.initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__46973){
var map__46974 = p__46973;
var map__46974__$1 = ((((!((map__46974 == null)))?((((map__46974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46974):map__46974);
var reconciler = cljs.core.get.call(null,map__46974__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
untangled.client.data_fetch.load_data.call(null,reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","channels","app/channels",1132662439),om.next.get_query.call(null,app.ui.Channel)], null)], null),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","channels","app/channels",1132662439)], null));

untangled.client.data_fetch.load_data.call(null,reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","users","app/users",-713520992),om.next.get_query.call(null,app.ui.User)], null)], null));


return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","users","app/users",-713520992)], null);
})));
}

//# sourceMappingURL=core.js.map?rel=1487610721750