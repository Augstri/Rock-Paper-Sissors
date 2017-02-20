// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.truss.impl');
goog.require('cljs.core');
goog.require('clojure.set');
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4657__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.truss.impl.nnil_QMARK_ = (function taoensso$truss$impl$nnil_QMARK_(x){
return !((x == null));
});
taoensso.truss.impl.set_STAR_ = (function taoensso$truss$impl$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});
taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});
taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});
taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_.call(null,(function (p1__32731_SHARP_){
return !((cljs.core.get.call(null,m,p1__32731_SHARP_) == null));
}),ks);
});
taoensso.truss.impl.now_dt = (function taoensso$truss$impl$now_dt(){
return (new Date());
});
taoensso.truss.impl._STAR___QMARK_data_STAR_ = null;
taoensso.truss.impl.non_throwing = (function taoensso$truss$impl$non_throwing(pred){
return (function (x){
try{return pred.call(null,x);
}catch (e32733){if((e32733 instanceof Error)){
var _ = e32733;
return null;
} else {
throw e32733;

}
}});
});
/**
 * Returns true for some common preds that are naturally non-throwing
 */
taoensso.truss.impl.non_throwing_QMARK_ = (function taoensso$truss$impl$non_throwing_QMARK_(p){
return false;
});
/**
 * Expands any special predicate forms and returns [<expanded-pred> <non-throwing?>]
 */
taoensso.truss.impl._xpred = (function taoensso$truss$impl$_xpred(pred){
if(!(cljs.core.vector_QMARK_.call(null,pred))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,taoensso.truss.impl.non_throwing_QMARK_.call(null,pred)], null);
} else {
var vec__32741 = pred;
var type = cljs.core.nth.call(null,vec__32741,(0),null);
var a1 = cljs.core.nth.call(null,vec__32741,(1),null);
var a2 = cljs.core.nth.call(null,vec__32741,(2),null);
var a3 = cljs.core.nth.call(null,vec__32741,(3),null);
if(cljs.core.truth_(a1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Special predicate [<special-type> <arg>] form w/o <arg>"),cljs.core.str("\n"),cljs.core.str("a1")].join('')));
}

var G__32742 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32742) {
case "el":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "ks-nnil?":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks-nnil?","taoensso.truss.impl/ks-nnil?",1913972845,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "ks<=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks<=","taoensso.truss.impl/ks<=",1973794033,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "ks=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks=","taoensso.truss.impl/ks=",1308270826,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "ks>=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks>=","taoensso.truss.impl/ks>=",-14177732,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "not-in":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "not-el":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "set<=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.set","subset?","clojure.set/subset?",909155479,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "set>=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.set","superset?","clojure.set/superset?",22098740,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "set=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__31821__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),false], null);

break;
default:
var self = ((function (G__32742,vec__32741,type,a1,a2,a3){
return (function (_QMARK_pred){
if(cljs.core.truth_(_QMARK_pred)){
return taoensso$truss$impl$_xpred.call(null,_QMARK_pred);
} else {
return null;
}
});})(G__32742,vec__32741,type,a1,a2,a3))
;
var vec__32743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self.call(null,a1),self.call(null,a2),self.call(null,a3)], null);
var vec__32744 = cljs.core.nth.call(null,vec__32743,(0),null);
var a1__$1 = cljs.core.nth.call(null,vec__32744,(0),null);
var nt_a1_QMARK_ = cljs.core.nth.call(null,vec__32744,(1),null);
var vec__32745 = cljs.core.nth.call(null,vec__32743,(1),null);
var a2__$1 = cljs.core.nth.call(null,vec__32745,(0),null);
var nt_a2_QMARK_ = cljs.core.nth.call(null,vec__32745,(1),null);
var vec__32746 = cljs.core.nth.call(null,vec__32743,(2),null);
var a3__$1 = cljs.core.nth.call(null,vec__32746,(0),null);
var nt_a3_QMARK_ = cljs.core.nth.call(null,vec__32746,(1),null);
var nt_a1 = (cljs.core.truth_(a1__$1)?(cljs.core.truth_(nt_a1_QMARK_)?a1__$1:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","non-throwing","taoensso.truss.impl/non-throwing",-1408931246,null)),(function (){var x__31821__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))):null);
var nt_a2 = (cljs.core.truth_(a2__$1)?(cljs.core.truth_(nt_a2_QMARK_)?a2__$1:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","non-throwing","taoensso.truss.impl/non-throwing",-1408931246,null)),(function (){var x__31821__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))):null);
var nt_a3 = (cljs.core.truth_(a3__$1)?(cljs.core.truth_(nt_a3_QMARK_)?a3__$1:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","non-throwing","taoensso.truss.impl/non-throwing",-1408931246,null)),(function (){var x__31821__auto__ = a3__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())))):null);
var nt_comp_QMARK_ = (cljs.core.truth_(a3__$1)?(function (){var and__30975__auto__ = nt_a1_QMARK_;
if(cljs.core.truth_(and__30975__auto__)){
var and__30975__auto____$1 = nt_a2_QMARK_;
if(cljs.core.truth_(and__30975__auto____$1)){
return nt_a3_QMARK_;
} else {
return and__30975__auto____$1;
}
} else {
return and__30975__auto__;
}
})():(cljs.core.truth_(a2__$1)?(function (){var and__30975__auto__ = nt_a1_QMARK_;
if(cljs.core.truth_(and__30975__auto__)){
return nt_a2_QMARK_;
} else {
return and__30975__auto__;
}
})():(cljs.core.truth_(a1__$1)?nt_a1_QMARK_:null)));
var G__32747 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32747) {
case "and":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a3__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1__$1,nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
case "or":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = nt_a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = nt_a2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = nt_a3;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),true], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = nt_a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = nt_a2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),true], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1__$1,nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
case "not":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a3__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__31821__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__31821__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__31821__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__x","__x",-467759335,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31821__auto__);
})()))),nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

}
}
});
taoensso.truss.impl._assertion_error = (function taoensso$truss$impl$_assertion_error(msg){
return (new Error(msg));
});
taoensso.truss.impl._invar_undefined_val = new cljs.core.Keyword("invariant","undefined-val","invariant/undefined-val",-906909938);
taoensso.truss.impl._invar_violation_BANG_ = (function taoensso$truss$impl$_invar_violation_BANG_(var_args){
var args32750 = [];
var len__32057__auto___32754 = arguments.length;
var i__32058__auto___32755 = (0);
while(true){
if((i__32058__auto___32755 < len__32057__auto___32754)){
args32750.push((arguments[i__32058__auto___32755]));

var G__32756 = (i__32058__auto___32755 + (1));
i__32058__auto___32755 = G__32756;
continue;
} else {
}
break;
}

var G__32752 = args32750.length;
switch (G__32752) {
case 0:
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 7:
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32750.length)].join('')));

}
});

taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
throw cljs.core.ex_info.call(null,"Invariant violation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invariant-violation?","invariant-violation?",-356256378),true], null));
});

taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (assertion_QMARK_,ns_str,_QMARK_line,form,val,_QMARK_err,_QMARK_data_fn){
var fmt_msg = (function (x1,x2,x3,x4){
return [cljs.core.str("Invariant violation in `"),cljs.core.str(x1),cljs.core.str(":"),cljs.core.str(x2),cljs.core.str("` [pred-form, val]:"),cljs.core.str("\n ["),cljs.core.str(x3),cljs.core.str(", "),cljs.core.str(x4),cljs.core.str("]")].join('');
});
var line_str = (function (){var or__30987__auto__ = _QMARK_line;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str(form)].join('');
var undefn_val_QMARK_ = cljs.core._EQ_.call(null,val,taoensso.truss.impl._invar_undefined_val);
var val_str = ((undefn_val_QMARK_)?"<undefined>":[cljs.core.str((function (){var or__30987__auto__ = val;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return "<nil>";
}
})())].join(''));
var dummy_err_QMARK_ = new cljs.core.Keyword(null,"invariant-violation?","invariant-violation?",-356256378).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,_QMARK_err));
var _QMARK_err__$1 = (cljs.core.truth_(dummy_err_QMARK_)?null:_QMARK_err);
var _QMARK_err_str = (function (){var temp__4657__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
return [cljs.core.str(_QMARK_err__$1)].join('');
} else {
return null;
}
})();
var msg = (function (){var msg = fmt_msg.call(null,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err__$1)){
return msg;
} else {
if(undefn_val_QMARK_){
return [cljs.core.str(msg),cljs.core.str("\n`val` error: "),cljs.core.str(_QMARK_err_str)].join('');
} else {
return [cljs.core.str(msg),cljs.core.str("\n`pred-form` error: "),cljs.core.str(_QMARK_err_str)].join('');

}
}
})();
var _QMARK_data = (function (){var temp__4657__auto__ = _QMARK_data_fn;
if(cljs.core.truth_(temp__4657__auto__)){
var data_fn = temp__4657__auto__;
try{return data_fn.call(null);
}catch (e32753){if((e32753 instanceof Error)){
var e = e32753;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-error","data-error",-1058016301),e], null);
} else {
throw e32753;

}
}} else {
return null;
}
})();
throw cljs.core.ex_info.call(null,msg,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"*?data*","*?data*",1047537922),new cljs.core.Keyword(null,"elidable?","elidable?",248362249),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"val-type","val-type",-279850094),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"*assert*","*assert*",-160895053),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"form-str","form-str",871608859)],[taoensso.truss.impl._STAR___QMARK_data_STAR_,assertion_QMARK_,taoensso.truss.impl.now_dt.call(null),((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):val),ns_str,((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):cljs.core.type.call(null,val)),_QMARK_err__$1,cljs.core._STAR_assert_STAR_,_QMARK_data,_QMARK_line,form_str]));
});

taoensso.truss.impl._invar_violation_BANG_.cljs$lang$maxFixedArity = 7;

//# sourceMappingURL=impl.js.map?rel=1487610699168