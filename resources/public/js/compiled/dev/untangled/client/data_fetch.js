// Compiled by ClojureScript 1.8.51 {}
goog.provide('untangled.client.data_fetch');
goog.require('cljs.core');
goog.require('untangled.client.impl.data_fetch');
goog.require('om.dom');
goog.require('untangled.i18n');
goog.require('untangled.client.core');
goog.require('om.util');
goog.require('om.next');
goog.require('clojure.walk');
/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
untangled.client.data_fetch.load_params_STAR_ = (function untangled$client$data_fetch$load_params_STAR_(server_property_or_ident,SubqueryClass,p__46712){
var map__46716 = p__46712;
var map__46716__$1 = ((((!((map__46716 == null)))?((((map__46716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46716):map__46716);
var target = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"target","target",253001721));
var params = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"params","params",710516235));
var marker = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var refresh = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false);
var post_mutation = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var post_mutation_params = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var fallback = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var without = cljs.core.get.call(null,map__46716__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
if(((target == null)) || (cljs.core.vector_QMARK_.call(null,target))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if(((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if(((fallback == null)) || ((fallback instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? fallback) (symbol? fallback))"));
}

if(((post_mutation_params == null)) || (cljs.core.map_QMARK_.call(null,post_mutation_params))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if(cljs.core.vector_QMARK_.call(null,refresh)){
} else {
throw (new Error("Assert failed: (vector? refresh)"));
}

if(((params == null)) || (cljs.core.map_QMARK_.call(null,params))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(cljs.core.set_QMARK_.call(null,without)){
} else {
throw (new Error("Assert failed: (set? without)"));
}

if((om.util.ident_QMARK_.call(null,server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (util/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

if(((!((SubqueryClass == null)))?(((false) || (SubqueryClass.om$next$IQuery$))?true:false):false)){
} else {
throw (new Error("Assert failed: (implements? om/IQuery SubqueryClass)"));
}

var query = ((cljs.core.map_QMARK_.call(null,params))?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = server_property_or_ident;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = om.next.get_query.call(null,SubqueryClass);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([server_property_or_ident,om.next.get_query.call(null,SubqueryClass)], true, false)], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510)],[refresh,parallel,fallback,marker,post_mutation,without,post_mutation_params,target,query]);
});
/**
 * Generates an Om transaction expression for a load mutation. It includes a follow-on read for :ui/loading-data. The args
 *   must be a map of the parameters usable from `load`. Returns a complete Om expression (vector), not just the mutation
 *   since follow-on reads are part of the mutation. You may use `concat` to join this with additional expressions.
 */
untangled.client.data_fetch.load_mutation = (function untangled$client$data_fetch$load_mutation(load_args){
if(((new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args) == null)) || (cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args)))){
} else {
throw (new Error("Assert failed: (or (nil? (:refresh load-args)) (vector? (:refresh load-args)))"));
}

var refresh = (function (){var or__30987__auto__ = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__31821__auto__ = load_args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)], null),refresh);
});
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive an Om query of the form: [({server-property (om/get-query SubqueryClass)} params)], which
 *   the Om parser will correctly parse as a Join on server-property with the given subquery and params. See Om AST and
 *   instructions on parsing Om queries.
 * 
 *   Parameters:
 *   - `app-or-comp-or-reconciler` : An Om component instance, Untangled application, or Om reconciler
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `SubqueryClass` : An Om component that implements IQuery. This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery. If supplied, the data AND load marker will appear
 *  at this path. If not supplied the data and marker will appear at `server-property` in the top-level of the client app state
 *  database. Ignored if you're loading via ident (the ident is your target).
 *   - `params` - Optional parameters to add to the generated query
 *   - `marker` - Boolean to determine if you want a fetch-state marker in your app state. Defaults to true. Add `:ui/fetch-state` to the
 *   target component in order to see this data in your component.
 *   - `refresh` - A vector of keywords that will cause component re-renders after the final load/mutations. Same as follow-on
 *   reads in normal `transact!`
 *   - `parallel` - If true, indicates that this load does not have to go through the sequential network queue. Defaults to false.
 *   - `post-mutation` - A mutation (symbol) to run after the data is merged. Note, if target is supplied be sure your post mutation
 *   should expect the data at the targeted location.
 *   - `post-mutation-params` - An optional map  that will be passed to the post-mutation when it is called. May only contain raw data, not code!
 *   - `fallback` - A mutation (symbol) to run if there is a server/network error.
 *   - `without` - An optional set of keywords that should (recursively) be removed from the query.
 *   
 */
untangled.client.data_fetch.load = (function untangled$client$data_fetch$load(var_args){
var args46719 = [];
var len__32057__auto___46726 = arguments.length;
var i__32058__auto___46727 = (0);
while(true){
if((i__32058__auto___46727 < len__32057__auto___46726)){
args46719.push((arguments[i__32058__auto___46727]));

var G__46728 = (i__32058__auto___46727 + (1));
i__32058__auto___46727 = G__46728;
continue;
} else {
}
break;
}

var G__46721 = args46719.length;
switch (G__46721) {
case 3:
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46719.length)].join('')));

}
});

untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass){
return untangled.client.data_fetch.load.call(null,app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,config){
if((function (){var or__30987__auto__ = om.next.component_QMARK_.call(null,app_or_comp_or_reconciler);
if(or__30987__auto__){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = om.next.reconciler_QMARK_.call(null,app_or_comp_or_reconciler);
if(or__30987__auto____$1){
return or__30987__auto____$1;
} else {
if(!((app_or_comp_or_reconciler == null))){
if((false) || (app_or_comp_or_reconciler.untangled$client$core$UntangledApplication$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
}
})()){
} else {
throw (new Error("Assert failed: (or (om/component? app-or-comp-or-reconciler) (om/reconciler? app-or-comp-or-reconciler) (implements? uc/UntangledApplication app-or-comp-or-reconciler))"));
}

var config__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config);
var reconciler = ((((!((app_or_comp_or_reconciler == null)))?(((false) || (app_or_comp_or_reconciler.untangled$client$core$UntangledApplication$))?true:false):false))?cljs.core.get.call(null,app_or_comp_or_reconciler,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)):app_or_comp_or_reconciler);
var mutation_args = untangled.client.data_fetch.load_params_STAR_.call(null,server_property_or_ident,SubqueryClass,config__$1);
return om.next.transact_BANG_.call(null,reconciler,untangled.client.data_fetch.load_mutation.call(null,mutation_args));
});

untangled.client.data_fetch.load.cljs$lang$maxFixedArity = 4;
/**
 * 
 *   See `load` for descriptions of parameters and config.
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load`, but usable from
 *   within a mutation.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  :action (fn []
 *     (load-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_action = (function untangled$client$data_fetch$load_action(var_args){
var args46730 = [];
var len__32057__auto___46733 = arguments.length;
var i__32058__auto___46734 = (0);
while(true){
if((i__32058__auto___46734 < len__32057__auto___46733)){
args46730.push((arguments[i__32058__auto___46734]));

var G__46735 = (i__32058__auto___46734 + (1));
i__32058__auto___46734 = G__46735;
continue;
} else {
}
break;
}

var G__46732 = args46730.length;
switch (G__46732) {
case 3:
return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46730.length)].join('')));

}
});

untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3 = (function (state_atom,server_property_or_ident,SubqueryClass){
return untangled.client.data_fetch.load_action.call(null,state_atom,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,server_property_or_ident,SubqueryClass,config){
var config__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config);
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,untangled.client.data_fetch.load_params_STAR_.call(null,server_property_or_ident,SubqueryClass,config__$1),new cljs.core.Keyword(null,"state","state",-1988618099),state_atom));
});

untangled.client.data_fetch.load_action.cljs$lang$maxFixedArity = 4;
/**
 * Load a field of the current component. Runs `om/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load.
 * 
 *   Named Parameters:
 *   - `without`: See `load-data`
 *   - `params`: See `load-data`
 *   - `post-mutation`: See `load-data`
 *   - `parallel`: See `load-data`
 *   - `fallback`: See `load-data`
 *   - `marker`: See `load-data`
 *   - `refresh`: See `load-data`
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using an Om link (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because Om will not have to run a full root query.
 *   
 */
untangled.client.data_fetch.load_field = (function untangled$client$data_fetch$load_field(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46743 = arguments.length;
var i__32058__auto___46744 = (0);
while(true){
if((i__32058__auto___46744 < len__32057__auto___46743)){
args__32064__auto__.push((arguments[i__32058__auto___46744]));

var G__46745 = (i__32058__auto___46744 + (1));
i__32058__auto___46744 = G__46745;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__46740){
var map__46741 = p__46740;
var map__46741__$1 = ((((!((map__46741 == null)))?((((map__46741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46741):map__46741);
var without = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var marker = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Fallback must be a mutation symbol."),cljs.core.str("\n"),cljs.core.str("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.call(null,component,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__31821__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[refresh,parallel,fallback,marker,params,field,post_mutation,without,om.next.get_ident.call(null,component),om.next.focus_query.call(null,om.next.get_query.call(null,component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),om.next.get_ident.call(null,component)], null),refresh));
});

untangled.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq46737){
var G__46738 = cljs.core.first.call(null,seq46737);
var seq46737__$1 = cljs.core.next.call(null,seq46737);
var G__46739 = cljs.core.first.call(null,seq46737__$1);
var seq46737__$2 = cljs.core.next.call(null,seq46737__$1);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(G__46738,G__46739,seq46737__$2);
});
/**
 * 
 *   Load data from the remote. Runs `om/transact!`. See also `load-field`.
 * 
 *   Parameters
 *   - `comp-or-reconciler`: A component or reconciler (not a class)
 *   - `query`: The query for the element(s) attributes. Use defui to generate arbitrary queries so normalization will work.
 * 
 *   Optional Named parameters
 *   - `post-mutation`: A mutation (symbol) invoked after the load succeeds.
 *   - `fallback`: A mutation (symbol) invoked after the load fails. App state is in env, server error is in the params under :error.
 *   - `parallel`: Boolean to indicate that this load should happen in the parallel on the server (non-blocking load). Any loads marked this way will happen in parallel.
 *   - `marker`: A boolean (default true). If true, a marker is placed in the app state in place of the target data during the load. If false, no marker is produced.
 *   - `refresh`: A vector of keywords indicating data that will be changing. If any of the listed keywords are queried by on-screen
 *  components, then those components will be re-rendered after the load has finished and post mutations have run.
 *   - `without`: A set of keywords. Any keyword appearing in this set will be recursively removed from the query (in a proper AST-preserving fashion).
 *   - `params`: A parameter map to augment onto the first element of the query
 * 
 *   
 */
untangled.client.data_fetch.load_data = (function untangled$client$data_fetch$load_data(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46752 = arguments.length;
var i__32058__auto___46753 = (0);
while(true){
if((i__32058__auto___46753 < len__32057__auto___46752)){
args__32064__auto__.push((arguments[i__32058__auto___46753]));

var G__46754 = (i__32058__auto___46753 + (1));
i__32058__auto___46753 = G__46754;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic = (function (comp_or_reconciler,query,p__46749){
var map__46750 = p__46749;
var map__46750__$1 = ((((!((map__46750 == null)))?((((map__46750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46750):map__46750);
var ident = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var without = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.call(null,map__46750__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Fallback must be a mutation symbol."),cljs.core.str("\n"),cljs.core.str("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.call(null,comp_or_reconciler,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__31821__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[refresh,parallel,fallback,marker,params,post_mutation,without,ident,query]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)], null),refresh));
});

untangled.client.data_fetch.load_data.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data.cljs$lang$applyTo = (function (seq46746){
var G__46747 = cljs.core.first.call(null,seq46746);
var seq46746__$1 = cljs.core.next.call(null,seq46746);
var G__46748 = cljs.core.first.call(null,seq46746__$1);
var seq46746__$2 = cljs.core.next.call(null,seq46746__$1);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic(G__46747,G__46748,seq46746__$2);
});
/**
 * Queue up a remote load of a component's field from within an already-running mutation. Similar to `load-field`
 *   but usable from within a mutation. Note the `:refresh` parameter is supported, and defaults to nothing, even for
 *   fields, in actions. If you want anything to refresh other than the targeted component you will want to use the
 *   :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  :action (fn []
 *     (load-field-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_field_action = (function untangled$client$data_fetch$load_field_action(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46763 = arguments.length;
var i__32058__auto___46764 = (0);
while(true){
if((i__32058__auto___46764 < len__32057__auto___46763)){
args__32064__auto__.push((arguments[i__32058__auto___46764]));

var G__46765 = (i__32058__auto___46764 + (1));
i__32058__auto___46764 = G__46765;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((4) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((4)),(0),null)):null);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__32065__auto__);
});

untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,component_class,ident,field,p__46760){
var map__46761 = p__46760;
var map__46761__$1 = ((((!((map__46761 == null)))?((((map__46761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46761):map__46761);
var without = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var marker = cljs.core.get.call(null,map__46761__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[refresh,parallel,fallback,marker,params,field,app_state,post_mutation,without,ident,om.next.focus_query.call(null,om.next.get_query.call(null,component_class),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]));
});

untangled.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

untangled.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq46755){
var G__46756 = cljs.core.first.call(null,seq46755);
var seq46755__$1 = cljs.core.next.call(null,seq46755);
var G__46757 = cljs.core.first.call(null,seq46755__$1);
var seq46755__$2 = cljs.core.next.call(null,seq46755__$1);
var G__46758 = cljs.core.first.call(null,seq46755__$2);
var seq46755__$3 = cljs.core.next.call(null,seq46755__$2);
var G__46759 = cljs.core.first.call(null,seq46755__$3);
var seq46755__$4 = cljs.core.next.call(null,seq46755__$3);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic(G__46756,G__46757,G__46758,G__46759,seq46755__$4);
});
/**
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load-data`, but usable from
 *   within a mutation.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  :action (fn []
 *     (load-data-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_data_action = (function untangled$client$data_fetch$load_data_action(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46772 = arguments.length;
var i__32058__auto___46773 = (0);
while(true){
if((i__32058__auto___46773 < len__32057__auto___46772)){
args__32064__auto__.push((arguments[i__32058__auto___46773]));

var G__46774 = (i__32058__auto___46773 + (1));
i__32058__auto___46773 = G__46774;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,query,p__46769){
var map__46770 = p__46769;
var map__46770__$1 = ((((!((map__46770 == null)))?((((map__46770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46770):map__46770);
var ident = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var without = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.call(null,map__46770__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[refresh,parallel,fallback,marker,params,app_state,post_mutation,without,ident,query]));
});

untangled.client.data_fetch.load_data_action.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data_action.cljs$lang$applyTo = (function (seq46766){
var G__46767 = cljs.core.first.call(null,seq46766);
var seq46766__$1 = cljs.core.next.call(null,seq46766);
var G__46768 = cljs.core.first.call(null,seq46766__$1);
var seq46766__$2 = cljs.core.next.call(null,seq46766__$1);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic(G__46767,G__46768,seq46766__$2);
});
/**
 * Returns the correct value for the `:remote` side of a mutation that should act as a
 *   trigger for remote loads. Must be used in conjunction with running `load-data-action` or
 *   `load-data-field` in the `:action` side of the mutation (which queues the exact things to
 *   load).
 */
untangled.client.data_fetch.remote_load = (function untangled$client$data_fetch$remote_load(parsing_env){
var ast = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(parsing_env);
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null));
});
untangled.client.data_fetch.data_state_QMARK_ = (function untangled$client$data_fetch$data_state_QMARK_(state){
return untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state);
});
untangled.client.data_fetch.ready_QMARK_ = (function untangled$client$data_fetch$ready_QMARK_(state){
return untangled.client.impl.data_fetch.ready_QMARK_.call(null,state);
});
untangled.client.data_fetch.loading_QMARK_ = (function untangled$client$data_fetch$loading_QMARK_(state){
return untangled.client.impl.data_fetch.loading_QMARK_.call(null,state);
});
untangled.client.data_fetch.failed_QMARK_ = (function untangled$client$data_fetch$failed_QMARK_(state){
return untangled.client.impl.data_fetch.failed_QMARK_.call(null,state);
});
/**
 * Custom rendering for use while data is being lazily loaded using the data fetch methods
 *   load-collection and load-field.
 * 
 *   `data-render` : the render method to call once the data has been successfully loaded from
 *   the server. Can be an Om factory method or a React rendering function.
 * 
 *   `props` : the React properties for the element to be loaded.
 * 
 *   Optional:
 * 
 *   `ready-render` : the render method to call when the desired data has been marked as ready
 *   to load, but the server request has not yet been sent.
 * 
 *   `loading-render` : render method once the server request has been sent, and UI is waiting
 *   on the response
 * 
 *   `failed-render` : render method when the server returns a failure state for the requested data
 * 
 *   `not-present-render` : called when props is nil (helpful for differentiating between a nil and
 *   empty response from the server).
 * 
 *   Example Usage:
 * 
 *   ```
 *   (defui Thing
 *  static om/IQuery
 *  (query [this] [{:thing2 (om/get-query Thing2)}])
 *  Object
 *  (componentDidMount [this]
 *     (load-field this :thing2))
 * 
 *  (render [this]
 *    (let [thing2 (:thing2 (om/props this))]
 *      (lazily-loaded ui-thing2 thing2))))
 * 
 *   (defui Thing2
 *  static om/IQuery
 *  (query [this] [:ui/fetch-state])
 *  Object
 *  (render [this]
 *    (display-thing-2))
 * 
 *   (def ui-thing2 (om/factory Thing2))
 *   ```
 */
untangled.client.data_fetch.lazily_loaded = (function untangled$client$data_fetch$lazily_loaded(var_args){
var args__32064__auto__ = [];
var len__32057__auto___46787 = arguments.length;
var i__32058__auto___46788 = (0);
while(true){
if((i__32058__auto___46788 < len__32057__auto___46787)){
args__32064__auto__.push((arguments[i__32058__auto___46788]));

var G__46789 = (i__32058__auto___46788 + (1));
i__32058__auto___46788 = G__46789;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((2) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32065__auto__);
});

untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__46778){
var map__46779 = p__46778;
var map__46779__$1 = ((((!((map__46779 == null)))?((((map__46779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46779):map__46779);
var ready_render = cljs.core.get.call(null,map__46779__$1,new cljs.core.Keyword(null,"ready-render","ready-render",-1421004936),((function (map__46779,map__46779__$1){
return (function (_){
return React.DOM.div((function (){var obj46782 = {"className":"lazy-loading-ready"};
return obj46782;
})(),om.util.force_children.call(null,"Queued"));
});})(map__46779,map__46779__$1))
);
var loading_render = cljs.core.get.call(null,map__46779__$1,new cljs.core.Keyword(null,"loading-render","loading-render",-1821208169),((function (map__46779,map__46779__$1,ready_render){
return (function (_){
return React.DOM.div((function (){var obj46784 = {"className":"lazy-loading-load"};
return obj46784;
})(),om.util.force_children.call(null,"Loading..."));
});})(map__46779,map__46779__$1,ready_render))
);
var failed_render = cljs.core.get.call(null,map__46779__$1,new cljs.core.Keyword(null,"failed-render","failed-render",-433071277),((function (map__46779,map__46779__$1,ready_render,loading_render){
return (function (_){
return React.DOM.div((function (){var obj46786 = {"className":"lazy-loading-failed"};
return obj46786;
})(),om.util.force_children.call(null,"Loading error!"));
});})(map__46779,map__46779__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.call(null,map__46779__$1,new cljs.core.Keyword(null,"not-present-render","not-present-render",-946766938));
var state = new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(untangled.client.data_fetch.ready_QMARK_.call(null,state))){
return ready_render.call(null,props);
} else {
if(cljs.core.truth_(untangled.client.data_fetch.loading_QMARK_.call(null,state))){
return loading_render.call(null,props);
} else {
if(cljs.core.truth_(untangled.client.data_fetch.failed_QMARK_.call(null,state))){
return failed_render.call(null,props);
} else {
if(cljs.core.truth_((function (){var and__30975__auto__ = not_present_render;
if(cljs.core.truth_(and__30975__auto__)){
return (props == null);
} else {
return and__30975__auto__;
}
})())){
return not_present_render.call(null,props);
} else {
return data_render.call(null,props);

}
}
}
}
});

untangled.client.data_fetch.lazily_loaded.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq46775){
var G__46776 = cljs.core.first.call(null,seq46775);
var seq46775__$1 = cljs.core.next.call(null,seq46775);
var G__46777 = cljs.core.first.call(null,seq46775__$1);
var seq46775__$2 = cljs.core.next.call(null,seq46775__$1);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic(G__46776,G__46777,seq46775__$2);
});

//# sourceMappingURL=data_fetch.js.map?rel=1487610721259