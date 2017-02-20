// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30987__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30987__auto__){
return or__30987__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30987__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44683_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44683_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44688 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44689 = null;
var count__44690 = (0);
var i__44691 = (0);
while(true){
if((i__44691 < count__44690)){
var n = cljs.core._nth.call(null,chunk__44689,i__44691);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44692 = seq__44688;
var G__44693 = chunk__44689;
var G__44694 = count__44690;
var G__44695 = (i__44691 + (1));
seq__44688 = G__44692;
chunk__44689 = G__44693;
count__44690 = G__44694;
i__44691 = G__44695;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44688);
if(temp__4657__auto__){
var seq__44688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44688__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__44688__$1);
var G__44696 = cljs.core.chunk_rest.call(null,seq__44688__$1);
var G__44697 = c__31798__auto__;
var G__44698 = cljs.core.count.call(null,c__31798__auto__);
var G__44699 = (0);
seq__44688 = G__44696;
chunk__44689 = G__44697;
count__44690 = G__44698;
i__44691 = G__44699;
continue;
} else {
var n = cljs.core.first.call(null,seq__44688__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44700 = cljs.core.next.call(null,seq__44688__$1);
var G__44701 = null;
var G__44702 = (0);
var G__44703 = (0);
seq__44688 = G__44700;
chunk__44689 = G__44701;
count__44690 = G__44702;
i__44691 = G__44703;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44742_44749 = cljs.core.seq.call(null,deps);
var chunk__44743_44750 = null;
var count__44744_44751 = (0);
var i__44745_44752 = (0);
while(true){
if((i__44745_44752 < count__44744_44751)){
var dep_44753 = cljs.core._nth.call(null,chunk__44743_44750,i__44745_44752);
topo_sort_helper_STAR_.call(null,dep_44753,(depth + (1)),state);

var G__44754 = seq__44742_44749;
var G__44755 = chunk__44743_44750;
var G__44756 = count__44744_44751;
var G__44757 = (i__44745_44752 + (1));
seq__44742_44749 = G__44754;
chunk__44743_44750 = G__44755;
count__44744_44751 = G__44756;
i__44745_44752 = G__44757;
continue;
} else {
var temp__4657__auto___44758 = cljs.core.seq.call(null,seq__44742_44749);
if(temp__4657__auto___44758){
var seq__44742_44759__$1 = temp__4657__auto___44758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44742_44759__$1)){
var c__31798__auto___44760 = cljs.core.chunk_first.call(null,seq__44742_44759__$1);
var G__44761 = cljs.core.chunk_rest.call(null,seq__44742_44759__$1);
var G__44762 = c__31798__auto___44760;
var G__44763 = cljs.core.count.call(null,c__31798__auto___44760);
var G__44764 = (0);
seq__44742_44749 = G__44761;
chunk__44743_44750 = G__44762;
count__44744_44751 = G__44763;
i__44745_44752 = G__44764;
continue;
} else {
var dep_44765 = cljs.core.first.call(null,seq__44742_44759__$1);
topo_sort_helper_STAR_.call(null,dep_44765,(depth + (1)),state);

var G__44766 = cljs.core.next.call(null,seq__44742_44759__$1);
var G__44767 = null;
var G__44768 = (0);
var G__44769 = (0);
seq__44742_44749 = G__44766;
chunk__44743_44750 = G__44767;
count__44744_44751 = G__44768;
i__44745_44752 = G__44769;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44746){
var vec__44748 = p__44746;
var x = cljs.core.nth.call(null,vec__44748,(0),null);
var xs = cljs.core.nthnext.call(null,vec__44748,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44748,x,xs,get_deps__$1){
return (function (p1__44704_SHARP_){
return clojure.set.difference.call(null,p1__44704_SHARP_,x);
});})(vec__44748,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44782 = cljs.core.seq.call(null,provides);
var chunk__44783 = null;
var count__44784 = (0);
var i__44785 = (0);
while(true){
if((i__44785 < count__44784)){
var prov = cljs.core._nth.call(null,chunk__44783,i__44785);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44786_44794 = cljs.core.seq.call(null,requires);
var chunk__44787_44795 = null;
var count__44788_44796 = (0);
var i__44789_44797 = (0);
while(true){
if((i__44789_44797 < count__44788_44796)){
var req_44798 = cljs.core._nth.call(null,chunk__44787_44795,i__44789_44797);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44798,prov);

var G__44799 = seq__44786_44794;
var G__44800 = chunk__44787_44795;
var G__44801 = count__44788_44796;
var G__44802 = (i__44789_44797 + (1));
seq__44786_44794 = G__44799;
chunk__44787_44795 = G__44800;
count__44788_44796 = G__44801;
i__44789_44797 = G__44802;
continue;
} else {
var temp__4657__auto___44803 = cljs.core.seq.call(null,seq__44786_44794);
if(temp__4657__auto___44803){
var seq__44786_44804__$1 = temp__4657__auto___44803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44786_44804__$1)){
var c__31798__auto___44805 = cljs.core.chunk_first.call(null,seq__44786_44804__$1);
var G__44806 = cljs.core.chunk_rest.call(null,seq__44786_44804__$1);
var G__44807 = c__31798__auto___44805;
var G__44808 = cljs.core.count.call(null,c__31798__auto___44805);
var G__44809 = (0);
seq__44786_44794 = G__44806;
chunk__44787_44795 = G__44807;
count__44788_44796 = G__44808;
i__44789_44797 = G__44809;
continue;
} else {
var req_44810 = cljs.core.first.call(null,seq__44786_44804__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44810,prov);

var G__44811 = cljs.core.next.call(null,seq__44786_44804__$1);
var G__44812 = null;
var G__44813 = (0);
var G__44814 = (0);
seq__44786_44794 = G__44811;
chunk__44787_44795 = G__44812;
count__44788_44796 = G__44813;
i__44789_44797 = G__44814;
continue;
}
} else {
}
}
break;
}

var G__44815 = seq__44782;
var G__44816 = chunk__44783;
var G__44817 = count__44784;
var G__44818 = (i__44785 + (1));
seq__44782 = G__44815;
chunk__44783 = G__44816;
count__44784 = G__44817;
i__44785 = G__44818;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44782);
if(temp__4657__auto__){
var seq__44782__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44782__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__44782__$1);
var G__44819 = cljs.core.chunk_rest.call(null,seq__44782__$1);
var G__44820 = c__31798__auto__;
var G__44821 = cljs.core.count.call(null,c__31798__auto__);
var G__44822 = (0);
seq__44782 = G__44819;
chunk__44783 = G__44820;
count__44784 = G__44821;
i__44785 = G__44822;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44782__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44790_44823 = cljs.core.seq.call(null,requires);
var chunk__44791_44824 = null;
var count__44792_44825 = (0);
var i__44793_44826 = (0);
while(true){
if((i__44793_44826 < count__44792_44825)){
var req_44827 = cljs.core._nth.call(null,chunk__44791_44824,i__44793_44826);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44827,prov);

var G__44828 = seq__44790_44823;
var G__44829 = chunk__44791_44824;
var G__44830 = count__44792_44825;
var G__44831 = (i__44793_44826 + (1));
seq__44790_44823 = G__44828;
chunk__44791_44824 = G__44829;
count__44792_44825 = G__44830;
i__44793_44826 = G__44831;
continue;
} else {
var temp__4657__auto___44832__$1 = cljs.core.seq.call(null,seq__44790_44823);
if(temp__4657__auto___44832__$1){
var seq__44790_44833__$1 = temp__4657__auto___44832__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44790_44833__$1)){
var c__31798__auto___44834 = cljs.core.chunk_first.call(null,seq__44790_44833__$1);
var G__44835 = cljs.core.chunk_rest.call(null,seq__44790_44833__$1);
var G__44836 = c__31798__auto___44834;
var G__44837 = cljs.core.count.call(null,c__31798__auto___44834);
var G__44838 = (0);
seq__44790_44823 = G__44835;
chunk__44791_44824 = G__44836;
count__44792_44825 = G__44837;
i__44793_44826 = G__44838;
continue;
} else {
var req_44839 = cljs.core.first.call(null,seq__44790_44833__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44839,prov);

var G__44840 = cljs.core.next.call(null,seq__44790_44833__$1);
var G__44841 = null;
var G__44842 = (0);
var G__44843 = (0);
seq__44790_44823 = G__44840;
chunk__44791_44824 = G__44841;
count__44792_44825 = G__44842;
i__44793_44826 = G__44843;
continue;
}
} else {
}
}
break;
}

var G__44844 = cljs.core.next.call(null,seq__44782__$1);
var G__44845 = null;
var G__44846 = (0);
var G__44847 = (0);
seq__44782 = G__44844;
chunk__44783 = G__44845;
count__44784 = G__44846;
i__44785 = G__44847;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44852_44856 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44853_44857 = null;
var count__44854_44858 = (0);
var i__44855_44859 = (0);
while(true){
if((i__44855_44859 < count__44854_44858)){
var ns_44860 = cljs.core._nth.call(null,chunk__44853_44857,i__44855_44859);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44860);

var G__44861 = seq__44852_44856;
var G__44862 = chunk__44853_44857;
var G__44863 = count__44854_44858;
var G__44864 = (i__44855_44859 + (1));
seq__44852_44856 = G__44861;
chunk__44853_44857 = G__44862;
count__44854_44858 = G__44863;
i__44855_44859 = G__44864;
continue;
} else {
var temp__4657__auto___44865 = cljs.core.seq.call(null,seq__44852_44856);
if(temp__4657__auto___44865){
var seq__44852_44866__$1 = temp__4657__auto___44865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44852_44866__$1)){
var c__31798__auto___44867 = cljs.core.chunk_first.call(null,seq__44852_44866__$1);
var G__44868 = cljs.core.chunk_rest.call(null,seq__44852_44866__$1);
var G__44869 = c__31798__auto___44867;
var G__44870 = cljs.core.count.call(null,c__31798__auto___44867);
var G__44871 = (0);
seq__44852_44856 = G__44868;
chunk__44853_44857 = G__44869;
count__44854_44858 = G__44870;
i__44855_44859 = G__44871;
continue;
} else {
var ns_44872 = cljs.core.first.call(null,seq__44852_44866__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44872);

var G__44873 = cljs.core.next.call(null,seq__44852_44866__$1);
var G__44874 = null;
var G__44875 = (0);
var G__44876 = (0);
seq__44852_44856 = G__44873;
chunk__44853_44857 = G__44874;
count__44854_44858 = G__44875;
i__44855_44859 = G__44876;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30987__auto__ = goog.require__;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44877__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44878__i = 0, G__44878__a = new Array(arguments.length -  0);
while (G__44878__i < G__44878__a.length) {G__44878__a[G__44878__i] = arguments[G__44878__i + 0]; ++G__44878__i;}
  args = new cljs.core.IndexedSeq(G__44878__a,0);
} 
return G__44877__delegate.call(this,args);};
G__44877.cljs$lang$maxFixedArity = 0;
G__44877.cljs$lang$applyTo = (function (arglist__44879){
var args = cljs.core.seq(arglist__44879);
return G__44877__delegate(args);
});
G__44877.cljs$core$IFn$_invoke$arity$variadic = G__44877__delegate;
return G__44877;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44881 = cljs.core._EQ_;
var expr__44882 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44881.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44882))){
var path_parts = ((function (pred__44881,expr__44882){
return (function (p1__44880_SHARP_){
return clojure.string.split.call(null,p1__44880_SHARP_,/[\/\\]/);
});})(pred__44881,expr__44882))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__44881,expr__44882){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44884){if((e44884 instanceof Error)){
var e = e44884;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44884;

}
}})());
});
;})(path_parts,sep,root,pred__44881,expr__44882))
} else {
if(cljs.core.truth_(pred__44881.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44882))){
return ((function (pred__44881,expr__44882){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__44881,expr__44882){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__44881,expr__44882))
);

return deferred.addErrback(((function (deferred,pred__44881,expr__44882){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__44881,expr__44882))
);
});
;})(pred__44881,expr__44882))
} else {
return ((function (pred__44881,expr__44882){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44881,expr__44882))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44885,callback){
var map__44888 = p__44885;
var map__44888__$1 = ((((!((map__44888 == null)))?((((map__44888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44888):map__44888);
var file_msg = map__44888__$1;
var request_url = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44888,map__44888__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44888,map__44888__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_44912){
var state_val_44913 = (state_44912[(1)]);
if((state_val_44913 === (7))){
var inst_44908 = (state_44912[(2)]);
var state_44912__$1 = state_44912;
var statearr_44914_44934 = state_44912__$1;
(statearr_44914_44934[(2)] = inst_44908);

(statearr_44914_44934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44913 === (1))){
var state_44912__$1 = state_44912;
var statearr_44915_44935 = state_44912__$1;
(statearr_44915_44935[(2)] = null);

(statearr_44915_44935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44913 === (4))){
var inst_44892 = (state_44912[(7)]);
var inst_44892__$1 = (state_44912[(2)]);
var state_44912__$1 = (function (){var statearr_44916 = state_44912;
(statearr_44916[(7)] = inst_44892__$1);

return statearr_44916;
})();
if(cljs.core.truth_(inst_44892__$1)){
var statearr_44917_44936 = state_44912__$1;
(statearr_44917_44936[(1)] = (5));

} else {
var statearr_44918_44937 = state_44912__$1;
(statearr_44918_44937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44913 === (6))){
var state_44912__$1 = state_44912;
var statearr_44919_44938 = state_44912__$1;
(statearr_44919_44938[(2)] = null);

(statearr_44919_44938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44913 === (3))){
var inst_44910 = (state_44912[(2)]);
var state_44912__$1 = state_44912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44912__$1,inst_44910);
} else {
if((state_val_44913 === (2))){
var state_44912__$1 = state_44912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44912__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44913 === (11))){
var inst_44904 = (state_44912[(2)]);
var state_44912__$1 = (function (){var statearr_44920 = state_44912;
(statearr_44920[(8)] = inst_44904);

return statearr_44920;
})();
var statearr_44921_44939 = state_44912__$1;
(statearr_44921_44939[(2)] = null);

(statearr_44921_44939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44913 === (9))){
var inst_44898 = (state_44912[(9)]);
var inst_44896 = (state_44912[(10)]);
var inst_44900 = inst_44898.call(null,inst_44896);
var state_44912__$1 = state_44912;
var statearr_44922_44940 = state_44912__$1;
(statearr_44922_44940[(2)] = inst_44900);

(statearr_44922_44940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44913 === (5))){
var inst_44892 = (state_44912[(7)]);
var inst_44894 = figwheel.client.file_reloading.blocking_load.call(null,inst_44892);
var state_44912__$1 = state_44912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44912__$1,(8),inst_44894);
} else {
if((state_val_44913 === (10))){
var inst_44896 = (state_44912[(10)]);
var inst_44902 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44896);
var state_44912__$1 = state_44912;
var statearr_44923_44941 = state_44912__$1;
(statearr_44923_44941[(2)] = inst_44902);

(statearr_44923_44941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44913 === (8))){
var inst_44892 = (state_44912[(7)]);
var inst_44898 = (state_44912[(9)]);
var inst_44896 = (state_44912[(2)]);
var inst_44897 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44898__$1 = cljs.core.get.call(null,inst_44897,inst_44892);
var state_44912__$1 = (function (){var statearr_44924 = state_44912;
(statearr_44924[(9)] = inst_44898__$1);

(statearr_44924[(10)] = inst_44896);

return statearr_44924;
})();
if(cljs.core.truth_(inst_44898__$1)){
var statearr_44925_44942 = state_44912__$1;
(statearr_44925_44942[(1)] = (9));

} else {
var statearr_44926_44943 = state_44912__$1;
(statearr_44926_44943[(1)] = (10));

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
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37462__auto__ = null;
var figwheel$client$file_reloading$state_machine__37462__auto____0 = (function (){
var statearr_44930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44930[(0)] = figwheel$client$file_reloading$state_machine__37462__auto__);

(statearr_44930[(1)] = (1));

return statearr_44930;
});
var figwheel$client$file_reloading$state_machine__37462__auto____1 = (function (state_44912){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_44912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e44931){if((e44931 instanceof Object)){
var ex__37465__auto__ = e44931;
var statearr_44932_44944 = state_44912;
(statearr_44932_44944[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44945 = state_44912;
state_44912 = G__44945;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37462__auto__ = function(state_44912){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37462__auto____1.call(this,state_44912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37462__auto____0;
figwheel$client$file_reloading$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37462__auto____1;
return figwheel$client$file_reloading$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_44933 = f__37477__auto__.call(null);
(statearr_44933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_44933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44946,callback){
var map__44949 = p__44946;
var map__44949__$1 = ((((!((map__44949 == null)))?((((map__44949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44949):map__44949);
var file_msg = map__44949__$1;
var namespace = cljs.core.get.call(null,map__44949__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44949,map__44949__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44949,map__44949__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44951){
var map__44954 = p__44951;
var map__44954__$1 = ((((!((map__44954 == null)))?((((map__44954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44954):map__44954);
var file_msg = map__44954__$1;
var namespace = cljs.core.get.call(null,map__44954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30975__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__30975__auto__){
var or__30987__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
var or__30987__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30987__auto____$1)){
return or__30987__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30975__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44956,callback){
var map__44959 = p__44956;
var map__44959__$1 = ((((!((map__44959 == null)))?((((map__44959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44959):map__44959);
var file_msg = map__44959__$1;
var request_url = cljs.core.get.call(null,map__44959__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44959__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37476__auto___45047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___45047,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___45047,out){
return (function (state_45029){
var state_val_45030 = (state_45029[(1)]);
if((state_val_45030 === (1))){
var inst_45007 = cljs.core.nth.call(null,files,(0),null);
var inst_45008 = cljs.core.nthnext.call(null,files,(1));
var inst_45009 = files;
var state_45029__$1 = (function (){var statearr_45031 = state_45029;
(statearr_45031[(7)] = inst_45009);

(statearr_45031[(8)] = inst_45007);

(statearr_45031[(9)] = inst_45008);

return statearr_45031;
})();
var statearr_45032_45048 = state_45029__$1;
(statearr_45032_45048[(2)] = null);

(statearr_45032_45048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45030 === (2))){
var inst_45009 = (state_45029[(7)]);
var inst_45012 = (state_45029[(10)]);
var inst_45012__$1 = cljs.core.nth.call(null,inst_45009,(0),null);
var inst_45013 = cljs.core.nthnext.call(null,inst_45009,(1));
var inst_45014 = (inst_45012__$1 == null);
var inst_45015 = cljs.core.not.call(null,inst_45014);
var state_45029__$1 = (function (){var statearr_45033 = state_45029;
(statearr_45033[(10)] = inst_45012__$1);

(statearr_45033[(11)] = inst_45013);

return statearr_45033;
})();
if(inst_45015){
var statearr_45034_45049 = state_45029__$1;
(statearr_45034_45049[(1)] = (4));

} else {
var statearr_45035_45050 = state_45029__$1;
(statearr_45035_45050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45030 === (3))){
var inst_45027 = (state_45029[(2)]);
var state_45029__$1 = state_45029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45029__$1,inst_45027);
} else {
if((state_val_45030 === (4))){
var inst_45012 = (state_45029[(10)]);
var inst_45017 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45012);
var state_45029__$1 = state_45029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45029__$1,(7),inst_45017);
} else {
if((state_val_45030 === (5))){
var inst_45023 = cljs.core.async.close_BANG_.call(null,out);
var state_45029__$1 = state_45029;
var statearr_45036_45051 = state_45029__$1;
(statearr_45036_45051[(2)] = inst_45023);

(statearr_45036_45051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45030 === (6))){
var inst_45025 = (state_45029[(2)]);
var state_45029__$1 = state_45029;
var statearr_45037_45052 = state_45029__$1;
(statearr_45037_45052[(2)] = inst_45025);

(statearr_45037_45052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45030 === (7))){
var inst_45013 = (state_45029[(11)]);
var inst_45019 = (state_45029[(2)]);
var inst_45020 = cljs.core.async.put_BANG_.call(null,out,inst_45019);
var inst_45009 = inst_45013;
var state_45029__$1 = (function (){var statearr_45038 = state_45029;
(statearr_45038[(12)] = inst_45020);

(statearr_45038[(7)] = inst_45009);

return statearr_45038;
})();
var statearr_45039_45053 = state_45029__$1;
(statearr_45039_45053[(2)] = null);

(statearr_45039_45053[(1)] = (2));


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
});})(c__37476__auto___45047,out))
;
return ((function (switch__37461__auto__,c__37476__auto___45047,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto____0 = (function (){
var statearr_45043 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45043[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto__);

(statearr_45043[(1)] = (1));

return statearr_45043;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto____1 = (function (state_45029){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_45029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e45044){if((e45044 instanceof Object)){
var ex__37465__auto__ = e45044;
var statearr_45045_45054 = state_45029;
(statearr_45045_45054[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45055 = state_45029;
state_45029 = G__45055;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto__ = function(state_45029){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto____1.call(this,state_45029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___45047,out))
})();
var state__37478__auto__ = (function (){var statearr_45046 = f__37477__auto__.call(null);
(statearr_45046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___45047);

return statearr_45046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___45047,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45056,opts){
var map__45060 = p__45056;
var map__45060__$1 = ((((!((map__45060 == null)))?((((map__45060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45060):map__45060);
var eval_body__$1 = cljs.core.get.call(null,map__45060__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30975__auto__ = eval_body__$1;
if(cljs.core.truth_(and__30975__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__30975__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45062){var e = e45062;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45063_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45063_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45068){
var vec__45069 = p__45068;
var k = cljs.core.nth.call(null,vec__45069,(0),null);
var v = cljs.core.nth.call(null,vec__45069,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45070){
var vec__45071 = p__45070;
var k = cljs.core.nth.call(null,vec__45071,(0),null);
var v = cljs.core.nth.call(null,vec__45071,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45075,p__45076){
var map__45323 = p__45075;
var map__45323__$1 = ((((!((map__45323 == null)))?((((map__45323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45323):map__45323);
var opts = map__45323__$1;
var before_jsload = cljs.core.get.call(null,map__45323__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45323__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45323__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45324 = p__45076;
var map__45324__$1 = ((((!((map__45324 == null)))?((((map__45324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45324):map__45324);
var msg = map__45324__$1;
var files = cljs.core.get.call(null,map__45324__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45324__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45324__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45477){
var state_val_45478 = (state_45477[(1)]);
if((state_val_45478 === (7))){
var inst_45339 = (state_45477[(7)]);
var inst_45340 = (state_45477[(8)]);
var inst_45338 = (state_45477[(9)]);
var inst_45341 = (state_45477[(10)]);
var inst_45346 = cljs.core._nth.call(null,inst_45339,inst_45341);
var inst_45347 = figwheel.client.file_reloading.eval_body.call(null,inst_45346,opts);
var inst_45348 = (inst_45341 + (1));
var tmp45479 = inst_45339;
var tmp45480 = inst_45340;
var tmp45481 = inst_45338;
var inst_45338__$1 = tmp45481;
var inst_45339__$1 = tmp45479;
var inst_45340__$1 = tmp45480;
var inst_45341__$1 = inst_45348;
var state_45477__$1 = (function (){var statearr_45482 = state_45477;
(statearr_45482[(7)] = inst_45339__$1);

(statearr_45482[(8)] = inst_45340__$1);

(statearr_45482[(9)] = inst_45338__$1);

(statearr_45482[(11)] = inst_45347);

(statearr_45482[(10)] = inst_45341__$1);

return statearr_45482;
})();
var statearr_45483_45569 = state_45477__$1;
(statearr_45483_45569[(2)] = null);

(statearr_45483_45569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (20))){
var inst_45381 = (state_45477[(12)]);
var inst_45389 = figwheel.client.file_reloading.sort_files.call(null,inst_45381);
var state_45477__$1 = state_45477;
var statearr_45484_45570 = state_45477__$1;
(statearr_45484_45570[(2)] = inst_45389);

(statearr_45484_45570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (27))){
var state_45477__$1 = state_45477;
var statearr_45485_45571 = state_45477__$1;
(statearr_45485_45571[(2)] = null);

(statearr_45485_45571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (1))){
var inst_45330 = (state_45477[(13)]);
var inst_45327 = before_jsload.call(null,files);
var inst_45328 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45329 = (function (){return ((function (inst_45330,inst_45327,inst_45328,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45072_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45072_SHARP_);
});
;})(inst_45330,inst_45327,inst_45328,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45330__$1 = cljs.core.filter.call(null,inst_45329,files);
var inst_45331 = cljs.core.not_empty.call(null,inst_45330__$1);
var state_45477__$1 = (function (){var statearr_45486 = state_45477;
(statearr_45486[(14)] = inst_45328);

(statearr_45486[(15)] = inst_45327);

(statearr_45486[(13)] = inst_45330__$1);

return statearr_45486;
})();
if(cljs.core.truth_(inst_45331)){
var statearr_45487_45572 = state_45477__$1;
(statearr_45487_45572[(1)] = (2));

} else {
var statearr_45488_45573 = state_45477__$1;
(statearr_45488_45573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (24))){
var state_45477__$1 = state_45477;
var statearr_45489_45574 = state_45477__$1;
(statearr_45489_45574[(2)] = null);

(statearr_45489_45574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (39))){
var inst_45431 = (state_45477[(16)]);
var state_45477__$1 = state_45477;
var statearr_45490_45575 = state_45477__$1;
(statearr_45490_45575[(2)] = inst_45431);

(statearr_45490_45575[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (46))){
var inst_45472 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
var statearr_45491_45576 = state_45477__$1;
(statearr_45491_45576[(2)] = inst_45472);

(statearr_45491_45576[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (4))){
var inst_45375 = (state_45477[(2)]);
var inst_45376 = cljs.core.List.EMPTY;
var inst_45377 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45376);
var inst_45378 = (function (){return ((function (inst_45375,inst_45376,inst_45377,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45073_SHARP_){
var and__30975__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45073_SHARP_);
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45073_SHARP_));
} else {
return and__30975__auto__;
}
});
;})(inst_45375,inst_45376,inst_45377,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45379 = cljs.core.filter.call(null,inst_45378,files);
var inst_45380 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45381 = cljs.core.concat.call(null,inst_45379,inst_45380);
var state_45477__$1 = (function (){var statearr_45492 = state_45477;
(statearr_45492[(17)] = inst_45375);

(statearr_45492[(12)] = inst_45381);

(statearr_45492[(18)] = inst_45377);

return statearr_45492;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45493_45577 = state_45477__$1;
(statearr_45493_45577[(1)] = (16));

} else {
var statearr_45494_45578 = state_45477__$1;
(statearr_45494_45578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (15))){
var inst_45365 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
var statearr_45495_45579 = state_45477__$1;
(statearr_45495_45579[(2)] = inst_45365);

(statearr_45495_45579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (21))){
var inst_45391 = (state_45477[(19)]);
var inst_45391__$1 = (state_45477[(2)]);
var inst_45392 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45391__$1);
var state_45477__$1 = (function (){var statearr_45496 = state_45477;
(statearr_45496[(19)] = inst_45391__$1);

return statearr_45496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45477__$1,(22),inst_45392);
} else {
if((state_val_45478 === (31))){
var inst_45475 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45477__$1,inst_45475);
} else {
if((state_val_45478 === (32))){
var inst_45431 = (state_45477[(16)]);
var inst_45436 = inst_45431.cljs$lang$protocol_mask$partition0$;
var inst_45437 = (inst_45436 & (64));
var inst_45438 = inst_45431.cljs$core$ISeq$;
var inst_45439 = (inst_45437) || (inst_45438);
var state_45477__$1 = state_45477;
if(cljs.core.truth_(inst_45439)){
var statearr_45497_45580 = state_45477__$1;
(statearr_45497_45580[(1)] = (35));

} else {
var statearr_45498_45581 = state_45477__$1;
(statearr_45498_45581[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (40))){
var inst_45452 = (state_45477[(20)]);
var inst_45451 = (state_45477[(2)]);
var inst_45452__$1 = cljs.core.get.call(null,inst_45451,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45453 = cljs.core.get.call(null,inst_45451,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45454 = cljs.core.not_empty.call(null,inst_45452__$1);
var state_45477__$1 = (function (){var statearr_45499 = state_45477;
(statearr_45499[(21)] = inst_45453);

(statearr_45499[(20)] = inst_45452__$1);

return statearr_45499;
})();
if(cljs.core.truth_(inst_45454)){
var statearr_45500_45582 = state_45477__$1;
(statearr_45500_45582[(1)] = (41));

} else {
var statearr_45501_45583 = state_45477__$1;
(statearr_45501_45583[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (33))){
var state_45477__$1 = state_45477;
var statearr_45502_45584 = state_45477__$1;
(statearr_45502_45584[(2)] = false);

(statearr_45502_45584[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (13))){
var inst_45351 = (state_45477[(22)]);
var inst_45355 = cljs.core.chunk_first.call(null,inst_45351);
var inst_45356 = cljs.core.chunk_rest.call(null,inst_45351);
var inst_45357 = cljs.core.count.call(null,inst_45355);
var inst_45338 = inst_45356;
var inst_45339 = inst_45355;
var inst_45340 = inst_45357;
var inst_45341 = (0);
var state_45477__$1 = (function (){var statearr_45503 = state_45477;
(statearr_45503[(7)] = inst_45339);

(statearr_45503[(8)] = inst_45340);

(statearr_45503[(9)] = inst_45338);

(statearr_45503[(10)] = inst_45341);

return statearr_45503;
})();
var statearr_45504_45585 = state_45477__$1;
(statearr_45504_45585[(2)] = null);

(statearr_45504_45585[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (22))){
var inst_45391 = (state_45477[(19)]);
var inst_45399 = (state_45477[(23)]);
var inst_45394 = (state_45477[(24)]);
var inst_45395 = (state_45477[(25)]);
var inst_45394__$1 = (state_45477[(2)]);
var inst_45395__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45394__$1);
var inst_45396 = (function (){var all_files = inst_45391;
var res_SINGLEQUOTE_ = inst_45394__$1;
var res = inst_45395__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45391,inst_45399,inst_45394,inst_45395,inst_45394__$1,inst_45395__$1,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45074_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45074_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45391,inst_45399,inst_45394,inst_45395,inst_45394__$1,inst_45395__$1,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45397 = cljs.core.filter.call(null,inst_45396,inst_45394__$1);
var inst_45398 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45399__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45398);
var inst_45400 = cljs.core.not_empty.call(null,inst_45399__$1);
var state_45477__$1 = (function (){var statearr_45505 = state_45477;
(statearr_45505[(26)] = inst_45397);

(statearr_45505[(23)] = inst_45399__$1);

(statearr_45505[(24)] = inst_45394__$1);

(statearr_45505[(25)] = inst_45395__$1);

return statearr_45505;
})();
if(cljs.core.truth_(inst_45400)){
var statearr_45506_45586 = state_45477__$1;
(statearr_45506_45586[(1)] = (23));

} else {
var statearr_45507_45587 = state_45477__$1;
(statearr_45507_45587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (36))){
var state_45477__$1 = state_45477;
var statearr_45508_45588 = state_45477__$1;
(statearr_45508_45588[(2)] = false);

(statearr_45508_45588[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (41))){
var inst_45452 = (state_45477[(20)]);
var inst_45456 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45457 = cljs.core.map.call(null,inst_45456,inst_45452);
var inst_45458 = cljs.core.pr_str.call(null,inst_45457);
var inst_45459 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_45458)].join('');
var inst_45460 = figwheel.client.utils.log.call(null,inst_45459);
var state_45477__$1 = state_45477;
var statearr_45509_45589 = state_45477__$1;
(statearr_45509_45589[(2)] = inst_45460);

(statearr_45509_45589[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (43))){
var inst_45453 = (state_45477[(21)]);
var inst_45463 = (state_45477[(2)]);
var inst_45464 = cljs.core.not_empty.call(null,inst_45453);
var state_45477__$1 = (function (){var statearr_45510 = state_45477;
(statearr_45510[(27)] = inst_45463);

return statearr_45510;
})();
if(cljs.core.truth_(inst_45464)){
var statearr_45511_45590 = state_45477__$1;
(statearr_45511_45590[(1)] = (44));

} else {
var statearr_45512_45591 = state_45477__$1;
(statearr_45512_45591[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (29))){
var inst_45391 = (state_45477[(19)]);
var inst_45397 = (state_45477[(26)]);
var inst_45431 = (state_45477[(16)]);
var inst_45399 = (state_45477[(23)]);
var inst_45394 = (state_45477[(24)]);
var inst_45395 = (state_45477[(25)]);
var inst_45427 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45430 = (function (){var all_files = inst_45391;
var res_SINGLEQUOTE_ = inst_45394;
var res = inst_45395;
var files_not_loaded = inst_45397;
var dependencies_that_loaded = inst_45399;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45431,inst_45399,inst_45394,inst_45395,inst_45427,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45429){
var map__45513 = p__45429;
var map__45513__$1 = ((((!((map__45513 == null)))?((((map__45513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45513):map__45513);
var namespace = cljs.core.get.call(null,map__45513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45431,inst_45399,inst_45394,inst_45395,inst_45427,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45431__$1 = cljs.core.group_by.call(null,inst_45430,inst_45397);
var inst_45433 = (inst_45431__$1 == null);
var inst_45434 = cljs.core.not.call(null,inst_45433);
var state_45477__$1 = (function (){var statearr_45515 = state_45477;
(statearr_45515[(28)] = inst_45427);

(statearr_45515[(16)] = inst_45431__$1);

return statearr_45515;
})();
if(inst_45434){
var statearr_45516_45592 = state_45477__$1;
(statearr_45516_45592[(1)] = (32));

} else {
var statearr_45517_45593 = state_45477__$1;
(statearr_45517_45593[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (44))){
var inst_45453 = (state_45477[(21)]);
var inst_45466 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45453);
var inst_45467 = cljs.core.pr_str.call(null,inst_45466);
var inst_45468 = [cljs.core.str("not required: "),cljs.core.str(inst_45467)].join('');
var inst_45469 = figwheel.client.utils.log.call(null,inst_45468);
var state_45477__$1 = state_45477;
var statearr_45518_45594 = state_45477__$1;
(statearr_45518_45594[(2)] = inst_45469);

(statearr_45518_45594[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (6))){
var inst_45372 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
var statearr_45519_45595 = state_45477__$1;
(statearr_45519_45595[(2)] = inst_45372);

(statearr_45519_45595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (28))){
var inst_45397 = (state_45477[(26)]);
var inst_45424 = (state_45477[(2)]);
var inst_45425 = cljs.core.not_empty.call(null,inst_45397);
var state_45477__$1 = (function (){var statearr_45520 = state_45477;
(statearr_45520[(29)] = inst_45424);

return statearr_45520;
})();
if(cljs.core.truth_(inst_45425)){
var statearr_45521_45596 = state_45477__$1;
(statearr_45521_45596[(1)] = (29));

} else {
var statearr_45522_45597 = state_45477__$1;
(statearr_45522_45597[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (25))){
var inst_45395 = (state_45477[(25)]);
var inst_45411 = (state_45477[(2)]);
var inst_45412 = cljs.core.not_empty.call(null,inst_45395);
var state_45477__$1 = (function (){var statearr_45523 = state_45477;
(statearr_45523[(30)] = inst_45411);

return statearr_45523;
})();
if(cljs.core.truth_(inst_45412)){
var statearr_45524_45598 = state_45477__$1;
(statearr_45524_45598[(1)] = (26));

} else {
var statearr_45525_45599 = state_45477__$1;
(statearr_45525_45599[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (34))){
var inst_45446 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
if(cljs.core.truth_(inst_45446)){
var statearr_45526_45600 = state_45477__$1;
(statearr_45526_45600[(1)] = (38));

} else {
var statearr_45527_45601 = state_45477__$1;
(statearr_45527_45601[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (17))){
var state_45477__$1 = state_45477;
var statearr_45528_45602 = state_45477__$1;
(statearr_45528_45602[(2)] = recompile_dependents);

(statearr_45528_45602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (3))){
var state_45477__$1 = state_45477;
var statearr_45529_45603 = state_45477__$1;
(statearr_45529_45603[(2)] = null);

(statearr_45529_45603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (12))){
var inst_45368 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
var statearr_45530_45604 = state_45477__$1;
(statearr_45530_45604[(2)] = inst_45368);

(statearr_45530_45604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (2))){
var inst_45330 = (state_45477[(13)]);
var inst_45337 = cljs.core.seq.call(null,inst_45330);
var inst_45338 = inst_45337;
var inst_45339 = null;
var inst_45340 = (0);
var inst_45341 = (0);
var state_45477__$1 = (function (){var statearr_45531 = state_45477;
(statearr_45531[(7)] = inst_45339);

(statearr_45531[(8)] = inst_45340);

(statearr_45531[(9)] = inst_45338);

(statearr_45531[(10)] = inst_45341);

return statearr_45531;
})();
var statearr_45532_45605 = state_45477__$1;
(statearr_45532_45605[(2)] = null);

(statearr_45532_45605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (23))){
var inst_45391 = (state_45477[(19)]);
var inst_45397 = (state_45477[(26)]);
var inst_45399 = (state_45477[(23)]);
var inst_45394 = (state_45477[(24)]);
var inst_45395 = (state_45477[(25)]);
var inst_45402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45404 = (function (){var all_files = inst_45391;
var res_SINGLEQUOTE_ = inst_45394;
var res = inst_45395;
var files_not_loaded = inst_45397;
var dependencies_that_loaded = inst_45399;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45399,inst_45394,inst_45395,inst_45402,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45403){
var map__45533 = p__45403;
var map__45533__$1 = ((((!((map__45533 == null)))?((((map__45533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45533):map__45533);
var request_url = cljs.core.get.call(null,map__45533__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45399,inst_45394,inst_45395,inst_45402,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45405 = cljs.core.reverse.call(null,inst_45399);
var inst_45406 = cljs.core.map.call(null,inst_45404,inst_45405);
var inst_45407 = cljs.core.pr_str.call(null,inst_45406);
var inst_45408 = figwheel.client.utils.log.call(null,inst_45407);
var state_45477__$1 = (function (){var statearr_45535 = state_45477;
(statearr_45535[(31)] = inst_45402);

return statearr_45535;
})();
var statearr_45536_45606 = state_45477__$1;
(statearr_45536_45606[(2)] = inst_45408);

(statearr_45536_45606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (35))){
var state_45477__$1 = state_45477;
var statearr_45537_45607 = state_45477__$1;
(statearr_45537_45607[(2)] = true);

(statearr_45537_45607[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (19))){
var inst_45381 = (state_45477[(12)]);
var inst_45387 = figwheel.client.file_reloading.expand_files.call(null,inst_45381);
var state_45477__$1 = state_45477;
var statearr_45538_45608 = state_45477__$1;
(statearr_45538_45608[(2)] = inst_45387);

(statearr_45538_45608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (11))){
var state_45477__$1 = state_45477;
var statearr_45539_45609 = state_45477__$1;
(statearr_45539_45609[(2)] = null);

(statearr_45539_45609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (9))){
var inst_45370 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
var statearr_45540_45610 = state_45477__$1;
(statearr_45540_45610[(2)] = inst_45370);

(statearr_45540_45610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (5))){
var inst_45340 = (state_45477[(8)]);
var inst_45341 = (state_45477[(10)]);
var inst_45343 = (inst_45341 < inst_45340);
var inst_45344 = inst_45343;
var state_45477__$1 = state_45477;
if(cljs.core.truth_(inst_45344)){
var statearr_45541_45611 = state_45477__$1;
(statearr_45541_45611[(1)] = (7));

} else {
var statearr_45542_45612 = state_45477__$1;
(statearr_45542_45612[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (14))){
var inst_45351 = (state_45477[(22)]);
var inst_45360 = cljs.core.first.call(null,inst_45351);
var inst_45361 = figwheel.client.file_reloading.eval_body.call(null,inst_45360,opts);
var inst_45362 = cljs.core.next.call(null,inst_45351);
var inst_45338 = inst_45362;
var inst_45339 = null;
var inst_45340 = (0);
var inst_45341 = (0);
var state_45477__$1 = (function (){var statearr_45543 = state_45477;
(statearr_45543[(7)] = inst_45339);

(statearr_45543[(8)] = inst_45340);

(statearr_45543[(32)] = inst_45361);

(statearr_45543[(9)] = inst_45338);

(statearr_45543[(10)] = inst_45341);

return statearr_45543;
})();
var statearr_45544_45613 = state_45477__$1;
(statearr_45544_45613[(2)] = null);

(statearr_45544_45613[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (45))){
var state_45477__$1 = state_45477;
var statearr_45545_45614 = state_45477__$1;
(statearr_45545_45614[(2)] = null);

(statearr_45545_45614[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (26))){
var inst_45391 = (state_45477[(19)]);
var inst_45397 = (state_45477[(26)]);
var inst_45399 = (state_45477[(23)]);
var inst_45394 = (state_45477[(24)]);
var inst_45395 = (state_45477[(25)]);
var inst_45414 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45416 = (function (){var all_files = inst_45391;
var res_SINGLEQUOTE_ = inst_45394;
var res = inst_45395;
var files_not_loaded = inst_45397;
var dependencies_that_loaded = inst_45399;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45399,inst_45394,inst_45395,inst_45414,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45415){
var map__45546 = p__45415;
var map__45546__$1 = ((((!((map__45546 == null)))?((((map__45546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45546):map__45546);
var namespace = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45399,inst_45394,inst_45395,inst_45414,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45417 = cljs.core.map.call(null,inst_45416,inst_45395);
var inst_45418 = cljs.core.pr_str.call(null,inst_45417);
var inst_45419 = figwheel.client.utils.log.call(null,inst_45418);
var inst_45420 = (function (){var all_files = inst_45391;
var res_SINGLEQUOTE_ = inst_45394;
var res = inst_45395;
var files_not_loaded = inst_45397;
var dependencies_that_loaded = inst_45399;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45399,inst_45394,inst_45395,inst_45414,inst_45416,inst_45417,inst_45418,inst_45419,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45391,inst_45397,inst_45399,inst_45394,inst_45395,inst_45414,inst_45416,inst_45417,inst_45418,inst_45419,state_val_45478,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45421 = setTimeout(inst_45420,(10));
var state_45477__$1 = (function (){var statearr_45548 = state_45477;
(statearr_45548[(33)] = inst_45419);

(statearr_45548[(34)] = inst_45414);

return statearr_45548;
})();
var statearr_45549_45615 = state_45477__$1;
(statearr_45549_45615[(2)] = inst_45421);

(statearr_45549_45615[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (16))){
var state_45477__$1 = state_45477;
var statearr_45550_45616 = state_45477__$1;
(statearr_45550_45616[(2)] = reload_dependents);

(statearr_45550_45616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (38))){
var inst_45431 = (state_45477[(16)]);
var inst_45448 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45431);
var state_45477__$1 = state_45477;
var statearr_45551_45617 = state_45477__$1;
(statearr_45551_45617[(2)] = inst_45448);

(statearr_45551_45617[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (30))){
var state_45477__$1 = state_45477;
var statearr_45552_45618 = state_45477__$1;
(statearr_45552_45618[(2)] = null);

(statearr_45552_45618[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (10))){
var inst_45351 = (state_45477[(22)]);
var inst_45353 = cljs.core.chunked_seq_QMARK_.call(null,inst_45351);
var state_45477__$1 = state_45477;
if(inst_45353){
var statearr_45553_45619 = state_45477__$1;
(statearr_45553_45619[(1)] = (13));

} else {
var statearr_45554_45620 = state_45477__$1;
(statearr_45554_45620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (18))){
var inst_45385 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
if(cljs.core.truth_(inst_45385)){
var statearr_45555_45621 = state_45477__$1;
(statearr_45555_45621[(1)] = (19));

} else {
var statearr_45556_45622 = state_45477__$1;
(statearr_45556_45622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (42))){
var state_45477__$1 = state_45477;
var statearr_45557_45623 = state_45477__$1;
(statearr_45557_45623[(2)] = null);

(statearr_45557_45623[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (37))){
var inst_45443 = (state_45477[(2)]);
var state_45477__$1 = state_45477;
var statearr_45558_45624 = state_45477__$1;
(statearr_45558_45624[(2)] = inst_45443);

(statearr_45558_45624[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45478 === (8))){
var inst_45338 = (state_45477[(9)]);
var inst_45351 = (state_45477[(22)]);
var inst_45351__$1 = cljs.core.seq.call(null,inst_45338);
var state_45477__$1 = (function (){var statearr_45559 = state_45477;
(statearr_45559[(22)] = inst_45351__$1);

return statearr_45559;
})();
if(inst_45351__$1){
var statearr_45560_45625 = state_45477__$1;
(statearr_45560_45625[(1)] = (10));

} else {
var statearr_45561_45626 = state_45477__$1;
(statearr_45561_45626[(1)] = (11));

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
});})(c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37461__auto__,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto____0 = (function (){
var statearr_45565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45565[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto__);

(statearr_45565[(1)] = (1));

return statearr_45565;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto____1 = (function (state_45477){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_45477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e45566){if((e45566 instanceof Object)){
var ex__37465__auto__ = e45566;
var statearr_45567_45627 = state_45477;
(statearr_45567_45627[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45628 = state_45477;
state_45477 = G__45628;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto__ = function(state_45477){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto____1.call(this,state_45477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37478__auto__ = (function (){var statearr_45568 = f__37477__auto__.call(null);
(statearr_45568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_45568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,map__45323,map__45323__$1,opts,before_jsload,on_jsload,reload_dependents,map__45324,map__45324__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37476__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45631,link){
var map__45634 = p__45631;
var map__45634__$1 = ((((!((map__45634 == null)))?((((map__45634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45634):map__45634);
var file = cljs.core.get.call(null,map__45634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__45634,map__45634__$1,file){
return (function (p1__45629_SHARP_,p2__45630_SHARP_){
if(cljs.core._EQ_.call(null,p1__45629_SHARP_,p2__45630_SHARP_)){
return p1__45629_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__45634,map__45634__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45640){
var map__45641 = p__45640;
var map__45641__$1 = ((((!((map__45641 == null)))?((((map__45641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45641):map__45641);
var match_length = cljs.core.get.call(null,map__45641__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45641__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45636_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45636_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args45643 = [];
var len__32057__auto___45646 = arguments.length;
var i__32058__auto___45647 = (0);
while(true){
if((i__32058__auto___45647 < len__32057__auto___45646)){
args45643.push((arguments[i__32058__auto___45647]));

var G__45648 = (i__32058__auto___45647 + (1));
i__32058__auto___45647 = G__45648;
continue;
} else {
}
break;
}

var G__45645 = args45643.length;
switch (G__45645) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45643.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45650_SHARP_,p2__45651_SHARP_){
return cljs.core.assoc.call(null,p1__45650_SHARP_,cljs.core.get.call(null,p2__45651_SHARP_,key),p2__45651_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45652){
var map__45655 = p__45652;
var map__45655__$1 = ((((!((map__45655 == null)))?((((map__45655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45655):map__45655);
var f_data = map__45655__$1;
var file = cljs.core.get.call(null,map__45655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45657,files_msg){
var map__45664 = p__45657;
var map__45664__$1 = ((((!((map__45664 == null)))?((((map__45664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45664):map__45664);
var opts = map__45664__$1;
var on_cssload = cljs.core.get.call(null,map__45664__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45666_45670 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__45667_45671 = null;
var count__45668_45672 = (0);
var i__45669_45673 = (0);
while(true){
if((i__45669_45673 < count__45668_45672)){
var f_45674 = cljs.core._nth.call(null,chunk__45667_45671,i__45669_45673);
figwheel.client.file_reloading.reload_css_file.call(null,f_45674);

var G__45675 = seq__45666_45670;
var G__45676 = chunk__45667_45671;
var G__45677 = count__45668_45672;
var G__45678 = (i__45669_45673 + (1));
seq__45666_45670 = G__45675;
chunk__45667_45671 = G__45676;
count__45668_45672 = G__45677;
i__45669_45673 = G__45678;
continue;
} else {
var temp__4657__auto___45679 = cljs.core.seq.call(null,seq__45666_45670);
if(temp__4657__auto___45679){
var seq__45666_45680__$1 = temp__4657__auto___45679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45666_45680__$1)){
var c__31798__auto___45681 = cljs.core.chunk_first.call(null,seq__45666_45680__$1);
var G__45682 = cljs.core.chunk_rest.call(null,seq__45666_45680__$1);
var G__45683 = c__31798__auto___45681;
var G__45684 = cljs.core.count.call(null,c__31798__auto___45681);
var G__45685 = (0);
seq__45666_45670 = G__45682;
chunk__45667_45671 = G__45683;
count__45668_45672 = G__45684;
i__45669_45673 = G__45685;
continue;
} else {
var f_45686 = cljs.core.first.call(null,seq__45666_45680__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45686);

var G__45687 = cljs.core.next.call(null,seq__45666_45680__$1);
var G__45688 = null;
var G__45689 = (0);
var G__45690 = (0);
seq__45666_45670 = G__45687;
chunk__45667_45671 = G__45688;
count__45668_45672 = G__45689;
i__45669_45673 = G__45690;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__45664,map__45664__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__45664,map__45664__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1487610720233