// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.impl.application');
goog.require('cljs.core');
goog.require('untangled.client.logging');
goog.require('untangled.i18n.core');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('cljs.core.async');
goog.require('untangled.client.impl.data_fetch');
goog.require('om.next');
/**
 * This internal function is responsible for generating and returning a function that can accomplish calling the fallbacks that
 *   appear in an incoming Om transaction, which is in turn used by the error-handling logic of the plumbing.
 */
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__43927,query){
var map__43930 = p__43927;
var map__43930__$1 = ((((!((map__43930 == null)))?((((map__43930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43930):map__43930);
var reconciler = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__43930,map__43930__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.call(null,om.next.app_state.call(null,reconciler),cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var temp__4655__auto__ = untangled.client.impl.om_plumbing.fallback_query.call(null,query,error);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
untangled.client.logging.warn.call(null,untangled.client.logging.value_message.call(null,"Transaction failed. Running fallback.",q));

return om.next.transact_BANG_.call(null,reconciler,q);
} else {
return untangled.client.logging.warn.call(null,"Fallback triggered, but no fallbacks were defined.");
}
});
;})(map__43930,map__43930__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_43947){
var state_val_43948 = (state_43947[(1)]);
if((state_val_43948 === (1))){
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43947__$1,(2),q,v);
} else {
if((state_val_43948 === (2))){
var inst_43945 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43947__$1,inst_43945);
} else {
return null;
}
}
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__37462__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__37462__auto____0 = (function (){
var statearr_43952 = [null,null,null,null,null,null,null];
(statearr_43952[(0)] = untangled$client$impl$application$enqueue_$_state_machine__37462__auto__);

(statearr_43952[(1)] = (1));

return statearr_43952;
});
var untangled$client$impl$application$enqueue_$_state_machine__37462__auto____1 = (function (state_43947){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_43947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e43953){if((e43953 instanceof Object)){
var ex__37465__auto__ = e43953;
var statearr_43954_43956 = state_43947;
(statearr_43954_43956[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43957 = state_43947;
state_43947 = G__43957;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__37462__auto__ = function(state_43947){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__37462__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__37462__auto____1.call(this,state_43947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__37462__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__37462__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_43955 = f__37477__auto__.call(null);
(statearr_43955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_43955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_load,on_error){
return untangled.client.impl.network.send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_load,on_error);
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue.
 */
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__43959,remote_tx_map,cb){
var map__43962 = p__43959;
var map__43962__$1 = ((((!((map__43962 == null)))?((((map__43962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43962):map__43962);
var app__$1 = map__43962__$1;
var queue = cljs.core.get.call(null,map__43962__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app__$1,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__43962,map__43962__$1,app__$1,queue){
return (function (p1__43958_SHARP_){
return fallback.call(null,p1__43958_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__43962,map__43962__$1,app__$1,queue))
], null);
if(has_mutations_QMARK_){
return untangled.client.impl.application.enqueue.call(null,queue,payload);
} else {
return null;
}
});
/**
 * Finds any loads marked `parallel` and triggers real network requests immediately. Remaining loads
 *   are pulled into a single fetch payload (combined into one query) and enqueued behind any prior mutations/reads that
 *   were already requested in a prior UI/event cycle. Thus non-parallel reads are processed in clusters grouped due to UI
 *   events (a single event might trigger many reads which will all go to the server as a single combined request).
 *   Further UI events that trigger remote interaction will end up waiting until prior network request(s) are complete.
 * 
 *   This ensures that default reasoning is simple and sequential in the face of optimistic UI updates (real network
 *   traffic characteristics could cause out of order processing, and you would not want
 *   a 'create list' to be processed on the server *after* an 'add an item to the list'). 
 */
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__43966){
var map__43977 = p__43966;
var map__43977__$1 = ((((!((map__43977 == null)))?((((map__43977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43977):map__43977);
var queue = cljs.core.get.call(null,map__43977__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__43977__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__43977__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__43979_43987 = cljs.core.seq.call(null,parallel_payload);
var chunk__43980_43988 = null;
var count__43981_43989 = (0);
var i__43982_43990 = (0);
while(true){
if((i__43982_43990 < count__43981_43989)){
var map__43983_43991 = cljs.core._nth.call(null,chunk__43980_43988,i__43982_43990);
var map__43983_43992__$1 = ((((!((map__43983_43991 == null)))?((((map__43983_43991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43983_43991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43983_43991):map__43983_43991);
var query_43993 = cljs.core.get.call(null,map__43983_43992__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_43994 = cljs.core.get.call(null,map__43983_43992__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_43995 = cljs.core.get.call(null,map__43983_43992__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_43996 = cljs.core.get.call(null,map__43983_43992__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__43997 = ((function (seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,map__43983_43991,map__43983_43992__$1,query_43993,on_load_43994,on_error_43995,callback_args_43996,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking){
return (function (p1__43964_SHARP_){
return on_load_43994.call(null,p1__43964_SHARP_,callback_args_43996);
});})(seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,map__43983_43991,map__43983_43992__$1,query_43993,on_load_43994,on_error_43995,callback_args_43996,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__43998 = ((function (seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,on_load_SINGLEQUOTE__43997,map__43983_43991,map__43983_43992__$1,query_43993,on_load_43994,on_error_43995,callback_args_43996,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking){
return (function (p1__43965_SHARP_){
return on_error_43995.call(null,p1__43965_SHARP_,callback_args_43996);
});})(seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,on_load_SINGLEQUOTE__43997,map__43983_43991,map__43983_43992__$1,query_43993,on_load_43994,on_error_43995,callback_args_43996,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_43993,on_load_SINGLEQUOTE__43997,on_error_SINGLEQUOTE__43998);

var G__43999 = seq__43979_43987;
var G__44000 = chunk__43980_43988;
var G__44001 = count__43981_43989;
var G__44002 = (i__43982_43990 + (1));
seq__43979_43987 = G__43999;
chunk__43980_43988 = G__44000;
count__43981_43989 = G__44001;
i__43982_43990 = G__44002;
continue;
} else {
var temp__4657__auto___44003 = cljs.core.seq.call(null,seq__43979_43987);
if(temp__4657__auto___44003){
var seq__43979_44004__$1 = temp__4657__auto___44003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43979_44004__$1)){
var c__31798__auto___44005 = cljs.core.chunk_first.call(null,seq__43979_44004__$1);
var G__44006 = cljs.core.chunk_rest.call(null,seq__43979_44004__$1);
var G__44007 = c__31798__auto___44005;
var G__44008 = cljs.core.count.call(null,c__31798__auto___44005);
var G__44009 = (0);
seq__43979_43987 = G__44006;
chunk__43980_43988 = G__44007;
count__43981_43989 = G__44008;
i__43982_43990 = G__44009;
continue;
} else {
var map__43985_44010 = cljs.core.first.call(null,seq__43979_44004__$1);
var map__43985_44011__$1 = ((((!((map__43985_44010 == null)))?((((map__43985_44010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43985_44010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43985_44010):map__43985_44010);
var query_44012 = cljs.core.get.call(null,map__43985_44011__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_44013 = cljs.core.get.call(null,map__43985_44011__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_44014 = cljs.core.get.call(null,map__43985_44011__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_44015 = cljs.core.get.call(null,map__43985_44011__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__44016 = ((function (seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,map__43985_44010,map__43985_44011__$1,query_44012,on_load_44013,on_error_44014,callback_args_44015,seq__43979_44004__$1,temp__4657__auto___44003,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking){
return (function (p1__43964_SHARP_){
return on_load_44013.call(null,p1__43964_SHARP_,callback_args_44015);
});})(seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,map__43985_44010,map__43985_44011__$1,query_44012,on_load_44013,on_error_44014,callback_args_44015,seq__43979_44004__$1,temp__4657__auto___44003,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__44017 = ((function (seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,on_load_SINGLEQUOTE__44016,map__43985_44010,map__43985_44011__$1,query_44012,on_load_44013,on_error_44014,callback_args_44015,seq__43979_44004__$1,temp__4657__auto___44003,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking){
return (function (p1__43965_SHARP_){
return on_error_44014.call(null,p1__43965_SHARP_,callback_args_44015);
});})(seq__43979_43987,chunk__43980_43988,count__43981_43989,i__43982_43990,on_load_SINGLEQUOTE__44016,map__43985_44010,map__43985_44011__$1,query_44012,on_load_44013,on_error_44014,callback_args_44015,seq__43979_44004__$1,temp__4657__auto___44003,parallel_payload,map__43977,map__43977__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_44012,on_load_SINGLEQUOTE__44016,on_error_SINGLEQUOTE__44017);

var G__44018 = cljs.core.next.call(null,seq__43979_44004__$1);
var G__44019 = null;
var G__44020 = (0);
var G__44021 = (0);
seq__43979_43987 = G__44018;
chunk__43980_43988 = G__44019;
count__43981_43989 = G__44020;
i__43982_43990 = G__44021;
continue;
}
} else {
}
}
break;
}

var fetch_payload = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload)){
untangled.client.impl.application.enqueue.call(null,queue,cljs.core.assoc.call(null,fetch_payload,new cljs.core.Keyword(null,"networking","networking",586110628),networking));

var G__44022 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__44022;
continue;
} else {
return null;
}
break;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app__$1,remote_tx_map,cb){
untangled.client.impl.application.enqueue_mutations.call(null,app__$1,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads.call(null,app__$1);
});
/**
 * Starts a async go loop that sends network requests on a networking object's request queue. Must be called once and only
 *   once for each active networking object on the UI. Each iteration of the loop pulls off a
 *   single request, sends it, waits for the response, and then repeats. Gives the appearance of a separate networking
 *   'thread' using core async.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__44023){
var map__44141 = p__44023;
var map__44141__$1 = ((((!((map__44141 == null)))?((((map__44141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44141):map__44141);
var networking = cljs.core.get.call(null,map__44141__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__44141__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__44141__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__44141,map__44141__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__44141,map__44141__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__37476__auto___44258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___44258,map__44141,map__44141__$1,networking,queue,response_channel){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___44258,map__44141,map__44141__$1,networking,queue,response_channel){
return (function (state_44182){
var state_val_44183 = (state_44182[(1)]);
if((state_val_44183 === (1))){
var state_44182__$1 = state_44182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44182__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_44183 === (2))){
var inst_44180 = (state_44182[(2)]);
var state_44182__$1 = state_44182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44182__$1,inst_44180);
} else {
return null;
}
}
});})(c__37476__auto___44258,map__44141,map__44141__$1,networking,queue,response_channel))
;
return ((function (switch__37461__auto__,c__37476__auto___44258,map__44141,map__44141__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null];
(statearr_44187[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto____1 = (function (state_44182){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_44182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e44188){if((e44188 instanceof Object)){
var ex__37465__auto__ = e44188;
var statearr_44189_44259 = state_44182;
(statearr_44189_44259[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44260 = state_44182;
state_44182 = G__44260;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto__ = function(state_44182){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto____1.call(this,state_44182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___44258,map__44141,map__44141__$1,networking,queue,response_channel))
})();
var state__37478__auto__ = (function (){var statearr_44190 = f__37477__auto__.call(null);
(statearr_44190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___44258);

return statearr_44190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___44258,map__44141,map__44141__$1,networking,queue,response_channel))
);

}});
;})(map__44141,map__44141__$1,networking,queue,response_channel))
});})(map__44141,map__44141__$1,networking,queue,response_channel))
;
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,map__44141,map__44141__$1,networking,queue,response_channel){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,map__44141,map__44141__$1,networking,queue,response_channel){
return (function (state_44231){
var state_val_44232 = (state_44231[(1)]);
if((state_val_44232 === (7))){
var inst_44210 = (state_44231[(2)]);
var state_44231__$1 = state_44231;
if(cljs.core.truth_(inst_44210)){
var statearr_44233_44261 = state_44231__$1;
(statearr_44233_44261[(1)] = (11));

} else {
var statearr_44234_44262 = state_44231__$1;
(statearr_44234_44262[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (1))){
var state_44231__$1 = state_44231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44231__$1,(2),queue);
} else {
if((state_val_44232 === (4))){
var inst_44229 = (state_44231[(2)]);
var state_44231__$1 = state_44231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44231__$1,inst_44229);
} else {
if((state_val_44232 === (15))){
var inst_44226 = (state_44231[(2)]);
var inst_44193 = inst_44226;
var state_44231__$1 = (function (){var statearr_44235 = state_44231;
(statearr_44235[(7)] = inst_44193);

return statearr_44235;
})();
var statearr_44236_44263 = state_44231__$1;
(statearr_44236_44263[(2)] = null);

(statearr_44236_44263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (13))){
var inst_44215 = (state_44231[(2)]);
var inst_44216 = cljs.core.get.call(null,inst_44215,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_44217 = cljs.core.get.call(null,inst_44215,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_44218 = cljs.core.get.call(null,inst_44215,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_44219 = cljs.core.get.call(null,inst_44215,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_44220 = make_process_response.call(null,inst_44217,inst_44219);
var inst_44221 = make_process_response.call(null,inst_44218,inst_44219);
var inst_44222 = untangled.client.impl.application.real_send.call(null,networking,inst_44216,inst_44220,inst_44221);
var state_44231__$1 = (function (){var statearr_44237 = state_44231;
(statearr_44237[(8)] = inst_44222);

return statearr_44237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44231__$1,(14),response_channel);
} else {
if((state_val_44232 === (6))){
var state_44231__$1 = state_44231;
var statearr_44238_44264 = state_44231__$1;
(statearr_44238_44264[(2)] = false);

(statearr_44238_44264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (3))){
var inst_44193 = (state_44231[(7)]);
var inst_44197 = (inst_44193 == null);
var inst_44198 = cljs.core.not.call(null,inst_44197);
var state_44231__$1 = state_44231;
if(inst_44198){
var statearr_44239_44265 = state_44231__$1;
(statearr_44239_44265[(1)] = (5));

} else {
var statearr_44240_44266 = state_44231__$1;
(statearr_44240_44266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (12))){
var inst_44193 = (state_44231[(7)]);
var state_44231__$1 = state_44231;
var statearr_44241_44267 = state_44231__$1;
(statearr_44241_44267[(2)] = inst_44193);

(statearr_44241_44267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (2))){
var inst_44192 = (state_44231[(2)]);
var inst_44193 = inst_44192;
var state_44231__$1 = (function (){var statearr_44242 = state_44231;
(statearr_44242[(7)] = inst_44193);

return statearr_44242;
})();
var statearr_44243_44268 = state_44231__$1;
(statearr_44243_44268[(2)] = null);

(statearr_44243_44268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (11))){
var inst_44193 = (state_44231[(7)]);
var inst_44212 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44193);
var state_44231__$1 = state_44231;
var statearr_44244_44269 = state_44231__$1;
(statearr_44244_44269[(2)] = inst_44212);

(statearr_44244_44269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (9))){
var state_44231__$1 = state_44231;
var statearr_44245_44270 = state_44231__$1;
(statearr_44245_44270[(2)] = false);

(statearr_44245_44270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (5))){
var inst_44193 = (state_44231[(7)]);
var inst_44200 = inst_44193.cljs$lang$protocol_mask$partition0$;
var inst_44201 = (inst_44200 & (64));
var inst_44202 = inst_44193.cljs$core$ISeq$;
var inst_44203 = (inst_44201) || (inst_44202);
var state_44231__$1 = state_44231;
if(cljs.core.truth_(inst_44203)){
var statearr_44246_44271 = state_44231__$1;
(statearr_44246_44271[(1)] = (8));

} else {
var statearr_44247_44272 = state_44231__$1;
(statearr_44247_44272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (14))){
var inst_44224 = (state_44231[(2)]);
var state_44231__$1 = (function (){var statearr_44248 = state_44231;
(statearr_44248[(9)] = inst_44224);

return statearr_44248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44231__$1,(15),queue);
} else {
if((state_val_44232 === (10))){
var inst_44207 = (state_44231[(2)]);
var state_44231__$1 = state_44231;
var statearr_44249_44273 = state_44231__$1;
(statearr_44249_44273[(2)] = inst_44207);

(statearr_44249_44273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44232 === (8))){
var state_44231__$1 = state_44231;
var statearr_44250_44274 = state_44231__$1;
(statearr_44250_44274[(2)] = true);

(statearr_44250_44274[(1)] = (10));


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
});})(c__37476__auto__,map__44141,map__44141__$1,networking,queue,response_channel))
;
return ((function (switch__37461__auto__,c__37476__auto__,map__44141,map__44141__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto____0 = (function (){
var statearr_44254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44254[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto__);

(statearr_44254[(1)] = (1));

return statearr_44254;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto____1 = (function (state_44231){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_44231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e44255){if((e44255 instanceof Object)){
var ex__37465__auto__ = e44255;
var statearr_44256_44275 = state_44231;
(statearr_44256_44275[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44276 = state_44231;
state_44231 = G__44276;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto__ = function(state_44231){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto____1.call(this,state_44231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,map__44141,map__44141__$1,networking,queue,response_channel))
})();
var state__37478__auto__ = (function (){var statearr_44257 = f__37477__auto__.call(null);
(statearr_44257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_44257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,map__44141,map__44141__$1,networking,queue,response_channel))
);

return c__37476__auto__;
});
/**
 * Configure a re-render when the locale changes. During startup this function will be called once for each
 *   reconciler that is running on a page.
 */
untangled.client.impl.application.initialize_internationalization = (function untangled$client$impl$application$initialize_internationalization(reconciler){
cljs.core.remove_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697));

return cljs.core.add_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697),(function (k,r,o,n){
if(om.next.mounted_QMARK_.call(null,om.next.app_root.call(null,reconciler))){
return om.next.force_root_render_BANG_.call(null,reconciler);
} else {
return null;
}
}));
});
/**
 * Remove not-found keys from m (non-recursive)
 */
untangled.client.impl.application.sweep_one = (function untangled$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__44279){
var vec__44280 = p__44279;
var k = cljs.core.nth.call(null,vec__44280,(0),null);
var v = cljs.core.nth.call(null,vec__44280,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep_one,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
untangled.client.impl.application.sweep = (function untangled$client$impl$application$sweep(m){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,m))){
return untangled.client.impl.application.sweep_one.call(null,m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__44283){
var vec__44284 = p__44283;
var k = cljs.core.nth.call(null,vec__44284,(0),null);
var v = cljs.core.nth.call(null,vec__44284,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,untangled$client$impl$application$sweep.call(null,v));
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled$client$impl$application$sweep,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target, but remove any target data that is marked as missing in the response. The
 *   missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess')
 */
untangled.client.impl.application.sweep_merge = (function untangled$client$impl$application$sweep_merge(target,source){
return cljs.core.reduce.call(null,(function (acc,p__44287){
var vec__44288 = p__44287;
var k = cljs.core.nth.call(null,vec__44288,(0),null);
var v = cljs.core.nth.call(null,vec__44288,(1),null);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494))){
return cljs.core.dissoc.call(null,acc,k);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,v))){
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep_one.call(null,v));
} else {
if((cljs.core.map_QMARK_.call(null,cljs.core.get.call(null,acc,k))) && (cljs.core.map_QMARK_.call(null,v))){
return cljs.core.update.call(null,acc,k,untangled$client$impl$application$sweep_merge,v);
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));

}
}
}
}),target,source);
});
untangled.client.impl.application.merge_handler = (function untangled$client$impl$application$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__44293){
var vec__44294 = p__44293;
var k = cljs.core.nth.call(null,vec__44294,(0),null);
var _ = cljs.core.nth.call(null,vec__44294,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__44295){
var vec__44296 = p__44295;
var k = cljs.core.nth.call(null,vec__44296,(0),null);
var v = cljs.core.nth.call(null,vec__44296,(1),null);
if(cljs.core.truth_((function (){var and__30975__auto__ = mutation_merge;
if(cljs.core.truth_(and__30975__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__30975__auto__;
}
})())){
var temp__4655__auto__ = mutation_merge.call(null,acc,k,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"tempids","tempids",1767509089)));
if(cljs.core.truth_(temp__4655__auto__)){
var updated_state = temp__4655__auto__;
return updated_state;
} else {
untangled.client.logging.info.call(null,"Return value handler for",k,"returned nil. Ignored.");

return acc;
}
} else {
return acc;
}
});})(source_to_merge,merged_state))
,merged_state,source);
});
/**
 * The reconciler's send method calls UntangledApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__44297,initial_state,parser,p__44298){
var map__44303 = p__44297;
var map__44303__$1 = ((((!((map__44303 == null)))?((((map__44303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44303):map__44303);
var app__$1 = map__44303__$1;
var queue = cljs.core.get.call(null,map__44303__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__44303__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__44304 = p__44298;
var map__44304__$1 = ((((!((map__44304 == null)))?((((map__44304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44304):map__44304);
var pathopt = cljs.core.get.call(null,map__44304__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__44304__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__44304__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__30987__auto__ = migrate;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__44303,map__44303__$1,app__$1,queue,mutation_merge,map__44304,map__44304__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__44303,map__44303__$1,app__$1,queue,mutation_merge,map__44304,map__44304__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = ((cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,initial_state)))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44303,map__44303__$1,app__$1,queue,mutation_merge,map__44304,map__44304__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44303,map__44303__$1,app__$1,queue,mutation_merge,map__44304,map__44304__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__30987__auto__ = migrate;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44303,map__44303__$1,app__$1,queue,mutation_merge,map__44304,map__44304__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44303,map__44303__$1,app__$1,queue,mutation_merge,map__44304,map__44304__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app__$1){
var cb_atom = cljs.core.get_in.call(null,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__44307_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__44307_SHARP_)){
return cljs.core.partial.call(null,p1__44307_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app__$1)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1487610718904