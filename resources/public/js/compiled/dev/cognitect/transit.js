// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__33630_33634 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__33631_33635 = null;
var count__33632_33636 = (0);
var i__33633_33637 = (0);
while(true){
if((i__33633_33637 < count__33632_33636)){
var k_33638 = cljs.core._nth.call(null,chunk__33631_33635,i__33633_33637);
var v_33639 = (b[k_33638]);
(a[k_33638] = v_33639);

var G__33640 = seq__33630_33634;
var G__33641 = chunk__33631_33635;
var G__33642 = count__33632_33636;
var G__33643 = (i__33633_33637 + (1));
seq__33630_33634 = G__33640;
chunk__33631_33635 = G__33641;
count__33632_33636 = G__33642;
i__33633_33637 = G__33643;
continue;
} else {
var temp__4657__auto___33644 = cljs.core.seq.call(null,seq__33630_33634);
if(temp__4657__auto___33644){
var seq__33630_33645__$1 = temp__4657__auto___33644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33630_33645__$1)){
var c__31798__auto___33646 = cljs.core.chunk_first.call(null,seq__33630_33645__$1);
var G__33647 = cljs.core.chunk_rest.call(null,seq__33630_33645__$1);
var G__33648 = c__31798__auto___33646;
var G__33649 = cljs.core.count.call(null,c__31798__auto___33646);
var G__33650 = (0);
seq__33630_33634 = G__33647;
chunk__33631_33635 = G__33648;
count__33632_33636 = G__33649;
i__33633_33637 = G__33650;
continue;
} else {
var k_33651 = cljs.core.first.call(null,seq__33630_33645__$1);
var v_33652 = (b[k_33651]);
(a[k_33651] = v_33652);

var G__33653 = cljs.core.next.call(null,seq__33630_33645__$1);
var G__33654 = null;
var G__33655 = (0);
var G__33656 = (0);
seq__33630_33634 = G__33653;
chunk__33631_33635 = G__33654;
count__33632_33636 = G__33655;
i__33633_33637 = G__33656;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args33657 = [];
var len__32057__auto___33660 = arguments.length;
var i__32058__auto___33661 = (0);
while(true){
if((i__32058__auto___33661 < len__32057__auto___33660)){
args33657.push((arguments[i__32058__auto___33661]));

var G__33662 = (i__32058__auto___33661 + (1));
i__32058__auto___33661 = G__33662;
continue;
} else {
}
break;
}

var G__33659 = args33657.length;
switch (G__33659) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33657.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__33664 = (i + (2));
var G__33665 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__33664;
ret = G__33665;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33666_33670 = cljs.core.seq.call(null,v);
var chunk__33667_33671 = null;
var count__33668_33672 = (0);
var i__33669_33673 = (0);
while(true){
if((i__33669_33673 < count__33668_33672)){
var x_33674 = cljs.core._nth.call(null,chunk__33667_33671,i__33669_33673);
ret.push(x_33674);

var G__33675 = seq__33666_33670;
var G__33676 = chunk__33667_33671;
var G__33677 = count__33668_33672;
var G__33678 = (i__33669_33673 + (1));
seq__33666_33670 = G__33675;
chunk__33667_33671 = G__33676;
count__33668_33672 = G__33677;
i__33669_33673 = G__33678;
continue;
} else {
var temp__4657__auto___33679 = cljs.core.seq.call(null,seq__33666_33670);
if(temp__4657__auto___33679){
var seq__33666_33680__$1 = temp__4657__auto___33679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33666_33680__$1)){
var c__31798__auto___33681 = cljs.core.chunk_first.call(null,seq__33666_33680__$1);
var G__33682 = cljs.core.chunk_rest.call(null,seq__33666_33680__$1);
var G__33683 = c__31798__auto___33681;
var G__33684 = cljs.core.count.call(null,c__31798__auto___33681);
var G__33685 = (0);
seq__33666_33670 = G__33682;
chunk__33667_33671 = G__33683;
count__33668_33672 = G__33684;
i__33669_33673 = G__33685;
continue;
} else {
var x_33686 = cljs.core.first.call(null,seq__33666_33680__$1);
ret.push(x_33686);

var G__33687 = cljs.core.next.call(null,seq__33666_33680__$1);
var G__33688 = null;
var G__33689 = (0);
var G__33690 = (0);
seq__33666_33670 = G__33687;
chunk__33667_33671 = G__33688;
count__33668_33672 = G__33689;
i__33669_33673 = G__33690;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33691_33695 = cljs.core.seq.call(null,v);
var chunk__33692_33696 = null;
var count__33693_33697 = (0);
var i__33694_33698 = (0);
while(true){
if((i__33694_33698 < count__33693_33697)){
var x_33699 = cljs.core._nth.call(null,chunk__33692_33696,i__33694_33698);
ret.push(x_33699);

var G__33700 = seq__33691_33695;
var G__33701 = chunk__33692_33696;
var G__33702 = count__33693_33697;
var G__33703 = (i__33694_33698 + (1));
seq__33691_33695 = G__33700;
chunk__33692_33696 = G__33701;
count__33693_33697 = G__33702;
i__33694_33698 = G__33703;
continue;
} else {
var temp__4657__auto___33704 = cljs.core.seq.call(null,seq__33691_33695);
if(temp__4657__auto___33704){
var seq__33691_33705__$1 = temp__4657__auto___33704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33691_33705__$1)){
var c__31798__auto___33706 = cljs.core.chunk_first.call(null,seq__33691_33705__$1);
var G__33707 = cljs.core.chunk_rest.call(null,seq__33691_33705__$1);
var G__33708 = c__31798__auto___33706;
var G__33709 = cljs.core.count.call(null,c__31798__auto___33706);
var G__33710 = (0);
seq__33691_33695 = G__33707;
chunk__33692_33696 = G__33708;
count__33693_33697 = G__33709;
i__33694_33698 = G__33710;
continue;
} else {
var x_33711 = cljs.core.first.call(null,seq__33691_33705__$1);
ret.push(x_33711);

var G__33712 = cljs.core.next.call(null,seq__33691_33705__$1);
var G__33713 = null;
var G__33714 = (0);
var G__33715 = (0);
seq__33691_33695 = G__33712;
chunk__33692_33696 = G__33713;
count__33693_33697 = G__33714;
i__33694_33698 = G__33715;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__33716_33720 = cljs.core.seq.call(null,v);
var chunk__33717_33721 = null;
var count__33718_33722 = (0);
var i__33719_33723 = (0);
while(true){
if((i__33719_33723 < count__33718_33722)){
var x_33724 = cljs.core._nth.call(null,chunk__33717_33721,i__33719_33723);
ret.push(x_33724);

var G__33725 = seq__33716_33720;
var G__33726 = chunk__33717_33721;
var G__33727 = count__33718_33722;
var G__33728 = (i__33719_33723 + (1));
seq__33716_33720 = G__33725;
chunk__33717_33721 = G__33726;
count__33718_33722 = G__33727;
i__33719_33723 = G__33728;
continue;
} else {
var temp__4657__auto___33729 = cljs.core.seq.call(null,seq__33716_33720);
if(temp__4657__auto___33729){
var seq__33716_33730__$1 = temp__4657__auto___33729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33716_33730__$1)){
var c__31798__auto___33731 = cljs.core.chunk_first.call(null,seq__33716_33730__$1);
var G__33732 = cljs.core.chunk_rest.call(null,seq__33716_33730__$1);
var G__33733 = c__31798__auto___33731;
var G__33734 = cljs.core.count.call(null,c__31798__auto___33731);
var G__33735 = (0);
seq__33716_33720 = G__33732;
chunk__33717_33721 = G__33733;
count__33718_33722 = G__33734;
i__33719_33723 = G__33735;
continue;
} else {
var x_33736 = cljs.core.first.call(null,seq__33716_33730__$1);
ret.push(x_33736);

var G__33737 = cljs.core.next.call(null,seq__33716_33730__$1);
var G__33738 = null;
var G__33739 = (0);
var G__33740 = (0);
seq__33716_33720 = G__33737;
chunk__33717_33721 = G__33738;
count__33718_33722 = G__33739;
i__33719_33723 = G__33740;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args33741 = [];
var len__32057__auto___33752 = arguments.length;
var i__32058__auto___33753 = (0);
while(true){
if((i__32058__auto___33753 < len__32057__auto___33752)){
args33741.push((arguments[i__32058__auto___33753]));

var G__33754 = (i__32058__auto___33753 + (1));
i__32058__auto___33753 = G__33754;
continue;
} else {
}
break;
}

var G__33743 = args33741.length;
switch (G__33743) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33741.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__33744 = obj;
G__33744.push(kfn.call(null,k),vfn.call(null,v));

return G__33744;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x33745 = cljs.core.clone.call(null,handlers);
x33745.forEach = ((function (x33745,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__33746 = cljs.core.seq.call(null,coll);
var chunk__33747 = null;
var count__33748 = (0);
var i__33749 = (0);
while(true){
if((i__33749 < count__33748)){
var vec__33750 = cljs.core._nth.call(null,chunk__33747,i__33749);
var k = cljs.core.nth.call(null,vec__33750,(0),null);
var v = cljs.core.nth.call(null,vec__33750,(1),null);
f.call(null,v,k);

var G__33756 = seq__33746;
var G__33757 = chunk__33747;
var G__33758 = count__33748;
var G__33759 = (i__33749 + (1));
seq__33746 = G__33756;
chunk__33747 = G__33757;
count__33748 = G__33758;
i__33749 = G__33759;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33746);
if(temp__4657__auto__){
var seq__33746__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33746__$1)){
var c__31798__auto__ = cljs.core.chunk_first.call(null,seq__33746__$1);
var G__33760 = cljs.core.chunk_rest.call(null,seq__33746__$1);
var G__33761 = c__31798__auto__;
var G__33762 = cljs.core.count.call(null,c__31798__auto__);
var G__33763 = (0);
seq__33746 = G__33760;
chunk__33747 = G__33761;
count__33748 = G__33762;
i__33749 = G__33763;
continue;
} else {
var vec__33751 = cljs.core.first.call(null,seq__33746__$1);
var k = cljs.core.nth.call(null,vec__33751,(0),null);
var v = cljs.core.nth.call(null,vec__33751,(1),null);
f.call(null,v,k);

var G__33764 = cljs.core.next.call(null,seq__33746__$1);
var G__33765 = null;
var G__33766 = (0);
var G__33767 = (0);
seq__33746 = G__33764;
chunk__33747 = G__33765;
count__33748 = G__33766;
i__33749 = G__33767;
continue;
}
} else {
return null;
}
}
break;
}
});})(x33745,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x33745;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args33768 = [];
var len__32057__auto___33774 = arguments.length;
var i__32058__auto___33775 = (0);
while(true){
if((i__32058__auto___33775 < len__32057__auto___33774)){
args33768.push((arguments[i__32058__auto___33775]));

var G__33776 = (i__32058__auto___33775 + (1));
i__32058__auto___33775 = G__33776;
continue;
} else {
}
break;
}

var G__33770 = args33768.length;
switch (G__33770) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33768.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit33771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit33771 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta33772){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta33772 = meta33772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit33771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33773,meta33772__$1){
var self__ = this;
var _33773__$1 = this;
return (new cognitect.transit.t_cognitect$transit33771(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta33772__$1));
});

cognitect.transit.t_cognitect$transit33771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33773){
var self__ = this;
var _33773__$1 = this;
return self__.meta33772;
});

cognitect.transit.t_cognitect$transit33771.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit33771.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit33771.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit33771.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit33771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta33772","meta33772",2127395031,null)], null);
});

cognitect.transit.t_cognitect$transit33771.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit33771.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit33771";

cognitect.transit.t_cognitect$transit33771.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cognitect.transit/t_cognitect$transit33771");
});

cognitect.transit.__GT_t_cognitect$transit33771 = (function cognitect$transit$__GT_t_cognitect$transit33771(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta33772){
return (new cognitect.transit.t_cognitect$transit33771(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta33772));
});

}

return (new cognitect.transit.t_cognitect$transit33771(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__30987__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1487610702154