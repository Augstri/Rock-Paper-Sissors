// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37649 = [];
var len__32057__auto___37655 = arguments.length;
var i__32058__auto___37656 = (0);
while(true){
if((i__32058__auto___37656 < len__32057__auto___37655)){
args37649.push((arguments[i__32058__auto___37656]));

var G__37657 = (i__32058__auto___37656 + (1));
i__32058__auto___37656 = G__37657;
continue;
} else {
}
break;
}

var G__37651 = args37649.length;
switch (G__37651) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37649.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37652 = (function (f,blockable,meta37653){
this.f = f;
this.blockable = blockable;
this.meta37653 = meta37653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37654,meta37653__$1){
var self__ = this;
var _37654__$1 = this;
return (new cljs.core.async.t_cljs$core$async37652(self__.f,self__.blockable,meta37653__$1));
});

cljs.core.async.t_cljs$core$async37652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37654){
var self__ = this;
var _37654__$1 = this;
return self__.meta37653;
});


cljs.core.async.t_cljs$core$async37652.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37653","meta37653",-1468795104,null)], null);
});

cljs.core.async.t_cljs$core$async37652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37652";

cljs.core.async.t_cljs$core$async37652.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async37652");
});

cljs.core.async.__GT_t_cljs$core$async37652 = (function cljs$core$async$__GT_t_cljs$core$async37652(f__$1,blockable__$1,meta37653){
return (new cljs.core.async.t_cljs$core$async37652(f__$1,blockable__$1,meta37653));
});

}

return (new cljs.core.async.t_cljs$core$async37652(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37661 = [];
var len__32057__auto___37664 = arguments.length;
var i__32058__auto___37665 = (0);
while(true){
if((i__32058__auto___37665 < len__32057__auto___37664)){
args37661.push((arguments[i__32058__auto___37665]));

var G__37666 = (i__32058__auto___37665 + (1));
i__32058__auto___37665 = G__37666;
continue;
} else {
}
break;
}

var G__37663 = args37661.length;
switch (G__37663) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37661.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37668 = [];
var len__32057__auto___37671 = arguments.length;
var i__32058__auto___37672 = (0);
while(true){
if((i__32058__auto___37672 < len__32057__auto___37671)){
args37668.push((arguments[i__32058__auto___37672]));

var G__37673 = (i__32058__auto___37672 + (1));
i__32058__auto___37672 = G__37673;
continue;
} else {
}
break;
}

var G__37670 = args37668.length;
switch (G__37670) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37668.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37675 = [];
var len__32057__auto___37678 = arguments.length;
var i__32058__auto___37679 = (0);
while(true){
if((i__32058__auto___37679 < len__32057__auto___37678)){
args37675.push((arguments[i__32058__auto___37679]));

var G__37680 = (i__32058__auto___37679 + (1));
i__32058__auto___37679 = G__37680;
continue;
} else {
}
break;
}

var G__37677 = args37675.length;
switch (G__37677) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37675.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37682 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37682);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37682,ret){
return (function (){
return fn1.call(null,val_37682);
});})(val_37682,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37683 = [];
var len__32057__auto___37686 = arguments.length;
var i__32058__auto___37687 = (0);
while(true){
if((i__32058__auto___37687 < len__32057__auto___37686)){
args37683.push((arguments[i__32058__auto___37687]));

var G__37688 = (i__32058__auto___37687 + (1));
i__32058__auto___37687 = G__37688;
continue;
} else {
}
break;
}

var G__37685 = args37683.length;
switch (G__37685) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37683.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31902__auto___37690 = n;
var x_37691 = (0);
while(true){
if((x_37691 < n__31902__auto___37690)){
(a[x_37691] = (0));

var G__37692 = (x_37691 + (1));
x_37691 = G__37692;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37693 = (i + (1));
i = G__37693;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37697 = (function (alt_flag,flag,meta37698){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37698 = meta37698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37699,meta37698__$1){
var self__ = this;
var _37699__$1 = this;
return (new cljs.core.async.t_cljs$core$async37697(self__.alt_flag,self__.flag,meta37698__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37699){
var self__ = this;
var _37699__$1 = this;
return self__.meta37698;
});})(flag))
;


cljs.core.async.t_cljs$core$async37697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37697.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37698","meta37698",271067608,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37697";

cljs.core.async.t_cljs$core$async37697.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async37697");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37697 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37697(alt_flag__$1,flag__$1,meta37698){
return (new cljs.core.async.t_cljs$core$async37697(alt_flag__$1,flag__$1,meta37698));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37697(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37703 = (function (alt_handler,flag,cb,meta37704){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37704 = meta37704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37705,meta37704__$1){
var self__ = this;
var _37705__$1 = this;
return (new cljs.core.async.t_cljs$core$async37703(self__.alt_handler,self__.flag,self__.cb,meta37704__$1));
});

cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37705){
var self__ = this;
var _37705__$1 = this;
return self__.meta37704;
});


cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37704","meta37704",-397043428,null)], null);
});

cljs.core.async.t_cljs$core$async37703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37703";

cljs.core.async.t_cljs$core$async37703.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async37703");
});

cljs.core.async.__GT_t_cljs$core$async37703 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37703(alt_handler__$1,flag__$1,cb__$1,meta37704){
return (new cljs.core.async.t_cljs$core$async37703(alt_handler__$1,flag__$1,cb__$1,meta37704));
});

}

return (new cljs.core.async.t_cljs$core$async37703(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37706_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37706_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37707_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37707_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30987__auto__ = wport;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37708 = (i + (1));
i = G__37708;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30987__auto__ = ret;
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30975__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30975__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30975__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___37714 = arguments.length;
var i__32058__auto___37715 = (0);
while(true){
if((i__32058__auto___37715 < len__32057__auto___37714)){
args__32064__auto__.push((arguments[i__32058__auto___37715]));

var G__37716 = (i__32058__auto___37715 + (1));
i__32058__auto___37715 = G__37716;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((1) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32065__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37711){
var map__37712 = p__37711;
var map__37712__$1 = ((((!((map__37712 == null)))?((((map__37712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37712):map__37712);
var opts = map__37712__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37709){
var G__37710 = cljs.core.first.call(null,seq37709);
var seq37709__$1 = cljs.core.next.call(null,seq37709);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37710,seq37709__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37717 = [];
var len__32057__auto___37767 = arguments.length;
var i__32058__auto___37768 = (0);
while(true){
if((i__32058__auto___37768 < len__32057__auto___37767)){
args37717.push((arguments[i__32058__auto___37768]));

var G__37769 = (i__32058__auto___37768 + (1));
i__32058__auto___37768 = G__37769;
continue;
} else {
}
break;
}

var G__37719 = args37717.length;
switch (G__37719) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37717.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37476__auto___37771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___37771){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___37771){
return (function (state_37743){
var state_val_37744 = (state_37743[(1)]);
if((state_val_37744 === (7))){
var inst_37739 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
var statearr_37745_37772 = state_37743__$1;
(statearr_37745_37772[(2)] = inst_37739);

(statearr_37745_37772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (1))){
var state_37743__$1 = state_37743;
var statearr_37746_37773 = state_37743__$1;
(statearr_37746_37773[(2)] = null);

(statearr_37746_37773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (4))){
var inst_37722 = (state_37743[(7)]);
var inst_37722__$1 = (state_37743[(2)]);
var inst_37723 = (inst_37722__$1 == null);
var state_37743__$1 = (function (){var statearr_37747 = state_37743;
(statearr_37747[(7)] = inst_37722__$1);

return statearr_37747;
})();
if(cljs.core.truth_(inst_37723)){
var statearr_37748_37774 = state_37743__$1;
(statearr_37748_37774[(1)] = (5));

} else {
var statearr_37749_37775 = state_37743__$1;
(statearr_37749_37775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (13))){
var state_37743__$1 = state_37743;
var statearr_37750_37776 = state_37743__$1;
(statearr_37750_37776[(2)] = null);

(statearr_37750_37776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (6))){
var inst_37722 = (state_37743[(7)]);
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37743__$1,(11),to,inst_37722);
} else {
if((state_val_37744 === (3))){
var inst_37741 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37743__$1,inst_37741);
} else {
if((state_val_37744 === (12))){
var state_37743__$1 = state_37743;
var statearr_37751_37777 = state_37743__$1;
(statearr_37751_37777[(2)] = null);

(statearr_37751_37777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (2))){
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37743__$1,(4),from);
} else {
if((state_val_37744 === (11))){
var inst_37732 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
if(cljs.core.truth_(inst_37732)){
var statearr_37752_37778 = state_37743__$1;
(statearr_37752_37778[(1)] = (12));

} else {
var statearr_37753_37779 = state_37743__$1;
(statearr_37753_37779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (9))){
var state_37743__$1 = state_37743;
var statearr_37754_37780 = state_37743__$1;
(statearr_37754_37780[(2)] = null);

(statearr_37754_37780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (5))){
var state_37743__$1 = state_37743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37755_37781 = state_37743__$1;
(statearr_37755_37781[(1)] = (8));

} else {
var statearr_37756_37782 = state_37743__$1;
(statearr_37756_37782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (14))){
var inst_37737 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
var statearr_37757_37783 = state_37743__$1;
(statearr_37757_37783[(2)] = inst_37737);

(statearr_37757_37783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (10))){
var inst_37729 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
var statearr_37758_37784 = state_37743__$1;
(statearr_37758_37784[(2)] = inst_37729);

(statearr_37758_37784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (8))){
var inst_37726 = cljs.core.async.close_BANG_.call(null,to);
var state_37743__$1 = state_37743;
var statearr_37759_37785 = state_37743__$1;
(statearr_37759_37785[(2)] = inst_37726);

(statearr_37759_37785[(1)] = (10));


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
});})(c__37476__auto___37771))
;
return ((function (switch__37461__auto__,c__37476__auto___37771){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_37763 = [null,null,null,null,null,null,null,null];
(statearr_37763[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_37763[(1)] = (1));

return statearr_37763;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_37743){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_37743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e37764){if((e37764 instanceof Object)){
var ex__37465__auto__ = e37764;
var statearr_37765_37786 = state_37743;
(statearr_37765_37786[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37787 = state_37743;
state_37743 = G__37787;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_37743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_37743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___37771))
})();
var state__37478__auto__ = (function (){var statearr_37766 = f__37477__auto__.call(null);
(statearr_37766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___37771);

return statearr_37766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___37771))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37971){
var vec__37972 = p__37971;
var v = cljs.core.nth.call(null,vec__37972,(0),null);
var p = cljs.core.nth.call(null,vec__37972,(1),null);
var job = vec__37972;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37476__auto___38154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38154,res,vec__37972,v,p,job,jobs,results){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___38154,res,vec__37972,v,p,job,jobs,results){
return (function (state_37977){
var state_val_37978 = (state_37977[(1)]);
if((state_val_37978 === (1))){
var state_37977__$1 = state_37977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37977__$1,(2),res,v);
} else {
if((state_val_37978 === (2))){
var inst_37974 = (state_37977[(2)]);
var inst_37975 = cljs.core.async.close_BANG_.call(null,res);
var state_37977__$1 = (function (){var statearr_37979 = state_37977;
(statearr_37979[(7)] = inst_37974);

return statearr_37979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37977__$1,inst_37975);
} else {
return null;
}
}
});})(c__37476__auto___38154,res,vec__37972,v,p,job,jobs,results))
;
return ((function (switch__37461__auto__,c__37476__auto___38154,res,vec__37972,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0 = (function (){
var statearr_37983 = [null,null,null,null,null,null,null,null];
(statearr_37983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__);

(statearr_37983[(1)] = (1));

return statearr_37983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1 = (function (state_37977){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_37977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e37984){if((e37984 instanceof Object)){
var ex__37465__auto__ = e37984;
var statearr_37985_38155 = state_37977;
(statearr_37985_38155[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38156 = state_37977;
state_37977 = G__38156;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = function(state_37977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1.call(this,state_37977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___38154,res,vec__37972,v,p,job,jobs,results))
})();
var state__37478__auto__ = (function (){var statearr_37986 = f__37477__auto__.call(null);
(statearr_37986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___38154);

return statearr_37986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38154,res,vec__37972,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37987){
var vec__37988 = p__37987;
var v = cljs.core.nth.call(null,vec__37988,(0),null);
var p = cljs.core.nth.call(null,vec__37988,(1),null);
var job = vec__37988;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31902__auto___38157 = n;
var __38158 = (0);
while(true){
if((__38158 < n__31902__auto___38157)){
var G__37989_38159 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37989_38159) {
case "compute":
var c__37476__auto___38161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38158,c__37476__auto___38161,G__37989_38159,n__31902__auto___38157,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (__38158,c__37476__auto___38161,G__37989_38159,n__31902__auto___38157,jobs,results,process,async){
return (function (state_38002){
var state_val_38003 = (state_38002[(1)]);
if((state_val_38003 === (1))){
var state_38002__$1 = state_38002;
var statearr_38004_38162 = state_38002__$1;
(statearr_38004_38162[(2)] = null);

(statearr_38004_38162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (2))){
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38002__$1,(4),jobs);
} else {
if((state_val_38003 === (3))){
var inst_38000 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38002__$1,inst_38000);
} else {
if((state_val_38003 === (4))){
var inst_37992 = (state_38002[(2)]);
var inst_37993 = process.call(null,inst_37992);
var state_38002__$1 = state_38002;
if(cljs.core.truth_(inst_37993)){
var statearr_38005_38163 = state_38002__$1;
(statearr_38005_38163[(1)] = (5));

} else {
var statearr_38006_38164 = state_38002__$1;
(statearr_38006_38164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (5))){
var state_38002__$1 = state_38002;
var statearr_38007_38165 = state_38002__$1;
(statearr_38007_38165[(2)] = null);

(statearr_38007_38165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (6))){
var state_38002__$1 = state_38002;
var statearr_38008_38166 = state_38002__$1;
(statearr_38008_38166[(2)] = null);

(statearr_38008_38166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (7))){
var inst_37998 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38009_38167 = state_38002__$1;
(statearr_38009_38167[(2)] = inst_37998);

(statearr_38009_38167[(1)] = (3));


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
});})(__38158,c__37476__auto___38161,G__37989_38159,n__31902__auto___38157,jobs,results,process,async))
;
return ((function (__38158,switch__37461__auto__,c__37476__auto___38161,G__37989_38159,n__31902__auto___38157,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0 = (function (){
var statearr_38013 = [null,null,null,null,null,null,null];
(statearr_38013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__);

(statearr_38013[(1)] = (1));

return statearr_38013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1 = (function (state_38002){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38014){if((e38014 instanceof Object)){
var ex__37465__auto__ = e38014;
var statearr_38015_38168 = state_38002;
(statearr_38015_38168[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38169 = state_38002;
state_38002 = G__38169;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = function(state_38002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1.call(this,state_38002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__;
})()
;})(__38158,switch__37461__auto__,c__37476__auto___38161,G__37989_38159,n__31902__auto___38157,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_38016 = f__37477__auto__.call(null);
(statearr_38016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___38161);

return statearr_38016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(__38158,c__37476__auto___38161,G__37989_38159,n__31902__auto___38157,jobs,results,process,async))
);


break;
case "async":
var c__37476__auto___38170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38158,c__37476__auto___38170,G__37989_38159,n__31902__auto___38157,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (__38158,c__37476__auto___38170,G__37989_38159,n__31902__auto___38157,jobs,results,process,async){
return (function (state_38029){
var state_val_38030 = (state_38029[(1)]);
if((state_val_38030 === (1))){
var state_38029__$1 = state_38029;
var statearr_38031_38171 = state_38029__$1;
(statearr_38031_38171[(2)] = null);

(statearr_38031_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (2))){
var state_38029__$1 = state_38029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38029__$1,(4),jobs);
} else {
if((state_val_38030 === (3))){
var inst_38027 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38029__$1,inst_38027);
} else {
if((state_val_38030 === (4))){
var inst_38019 = (state_38029[(2)]);
var inst_38020 = async.call(null,inst_38019);
var state_38029__$1 = state_38029;
if(cljs.core.truth_(inst_38020)){
var statearr_38032_38172 = state_38029__$1;
(statearr_38032_38172[(1)] = (5));

} else {
var statearr_38033_38173 = state_38029__$1;
(statearr_38033_38173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (5))){
var state_38029__$1 = state_38029;
var statearr_38034_38174 = state_38029__$1;
(statearr_38034_38174[(2)] = null);

(statearr_38034_38174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (6))){
var state_38029__$1 = state_38029;
var statearr_38035_38175 = state_38029__$1;
(statearr_38035_38175[(2)] = null);

(statearr_38035_38175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (7))){
var inst_38025 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38036_38176 = state_38029__$1;
(statearr_38036_38176[(2)] = inst_38025);

(statearr_38036_38176[(1)] = (3));


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
});})(__38158,c__37476__auto___38170,G__37989_38159,n__31902__auto___38157,jobs,results,process,async))
;
return ((function (__38158,switch__37461__auto__,c__37476__auto___38170,G__37989_38159,n__31902__auto___38157,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0 = (function (){
var statearr_38040 = [null,null,null,null,null,null,null];
(statearr_38040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__);

(statearr_38040[(1)] = (1));

return statearr_38040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1 = (function (state_38029){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38041){if((e38041 instanceof Object)){
var ex__37465__auto__ = e38041;
var statearr_38042_38177 = state_38029;
(statearr_38042_38177[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38178 = state_38029;
state_38029 = G__38178;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = function(state_38029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1.call(this,state_38029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__;
})()
;})(__38158,switch__37461__auto__,c__37476__auto___38170,G__37989_38159,n__31902__auto___38157,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_38043 = f__37477__auto__.call(null);
(statearr_38043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___38170);

return statearr_38043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(__38158,c__37476__auto___38170,G__37989_38159,n__31902__auto___38157,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38179 = (__38158 + (1));
__38158 = G__38179;
continue;
} else {
}
break;
}

var c__37476__auto___38180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38180,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___38180,jobs,results,process,async){
return (function (state_38065){
var state_val_38066 = (state_38065[(1)]);
if((state_val_38066 === (1))){
var state_38065__$1 = state_38065;
var statearr_38067_38181 = state_38065__$1;
(statearr_38067_38181[(2)] = null);

(statearr_38067_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (2))){
var state_38065__$1 = state_38065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38065__$1,(4),from);
} else {
if((state_val_38066 === (3))){
var inst_38063 = (state_38065[(2)]);
var state_38065__$1 = state_38065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38065__$1,inst_38063);
} else {
if((state_val_38066 === (4))){
var inst_38046 = (state_38065[(7)]);
var inst_38046__$1 = (state_38065[(2)]);
var inst_38047 = (inst_38046__$1 == null);
var state_38065__$1 = (function (){var statearr_38068 = state_38065;
(statearr_38068[(7)] = inst_38046__$1);

return statearr_38068;
})();
if(cljs.core.truth_(inst_38047)){
var statearr_38069_38182 = state_38065__$1;
(statearr_38069_38182[(1)] = (5));

} else {
var statearr_38070_38183 = state_38065__$1;
(statearr_38070_38183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (5))){
var inst_38049 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38065__$1 = state_38065;
var statearr_38071_38184 = state_38065__$1;
(statearr_38071_38184[(2)] = inst_38049);

(statearr_38071_38184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (6))){
var inst_38046 = (state_38065[(7)]);
var inst_38051 = (state_38065[(8)]);
var inst_38051__$1 = cljs.core.async.chan.call(null,(1));
var inst_38052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38053 = [inst_38046,inst_38051__$1];
var inst_38054 = (new cljs.core.PersistentVector(null,2,(5),inst_38052,inst_38053,null));
var state_38065__$1 = (function (){var statearr_38072 = state_38065;
(statearr_38072[(8)] = inst_38051__$1);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38065__$1,(8),jobs,inst_38054);
} else {
if((state_val_38066 === (7))){
var inst_38061 = (state_38065[(2)]);
var state_38065__$1 = state_38065;
var statearr_38073_38185 = state_38065__$1;
(statearr_38073_38185[(2)] = inst_38061);

(statearr_38073_38185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38066 === (8))){
var inst_38051 = (state_38065[(8)]);
var inst_38056 = (state_38065[(2)]);
var state_38065__$1 = (function (){var statearr_38074 = state_38065;
(statearr_38074[(9)] = inst_38056);

return statearr_38074;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38065__$1,(9),results,inst_38051);
} else {
if((state_val_38066 === (9))){
var inst_38058 = (state_38065[(2)]);
var state_38065__$1 = (function (){var statearr_38075 = state_38065;
(statearr_38075[(10)] = inst_38058);

return statearr_38075;
})();
var statearr_38076_38186 = state_38065__$1;
(statearr_38076_38186[(2)] = null);

(statearr_38076_38186[(1)] = (2));


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
});})(c__37476__auto___38180,jobs,results,process,async))
;
return ((function (switch__37461__auto__,c__37476__auto___38180,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0 = (function (){
var statearr_38080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__);

(statearr_38080[(1)] = (1));

return statearr_38080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1 = (function (state_38065){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38081){if((e38081 instanceof Object)){
var ex__37465__auto__ = e38081;
var statearr_38082_38187 = state_38065;
(statearr_38082_38187[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38188 = state_38065;
state_38065 = G__38188;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = function(state_38065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1.call(this,state_38065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___38180,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_38083 = f__37477__auto__.call(null);
(statearr_38083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___38180);

return statearr_38083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38180,jobs,results,process,async))
);


var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,jobs,results,process,async){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__,jobs,results,process,async){
return (function (state_38121){
var state_val_38122 = (state_38121[(1)]);
if((state_val_38122 === (7))){
var inst_38117 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
var statearr_38123_38189 = state_38121__$1;
(statearr_38123_38189[(2)] = inst_38117);

(statearr_38123_38189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (20))){
var state_38121__$1 = state_38121;
var statearr_38124_38190 = state_38121__$1;
(statearr_38124_38190[(2)] = null);

(statearr_38124_38190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (1))){
var state_38121__$1 = state_38121;
var statearr_38125_38191 = state_38121__$1;
(statearr_38125_38191[(2)] = null);

(statearr_38125_38191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (4))){
var inst_38086 = (state_38121[(7)]);
var inst_38086__$1 = (state_38121[(2)]);
var inst_38087 = (inst_38086__$1 == null);
var state_38121__$1 = (function (){var statearr_38126 = state_38121;
(statearr_38126[(7)] = inst_38086__$1);

return statearr_38126;
})();
if(cljs.core.truth_(inst_38087)){
var statearr_38127_38192 = state_38121__$1;
(statearr_38127_38192[(1)] = (5));

} else {
var statearr_38128_38193 = state_38121__$1;
(statearr_38128_38193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (15))){
var inst_38099 = (state_38121[(8)]);
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38121__$1,(18),to,inst_38099);
} else {
if((state_val_38122 === (21))){
var inst_38112 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
var statearr_38129_38194 = state_38121__$1;
(statearr_38129_38194[(2)] = inst_38112);

(statearr_38129_38194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (13))){
var inst_38114 = (state_38121[(2)]);
var state_38121__$1 = (function (){var statearr_38130 = state_38121;
(statearr_38130[(9)] = inst_38114);

return statearr_38130;
})();
var statearr_38131_38195 = state_38121__$1;
(statearr_38131_38195[(2)] = null);

(statearr_38131_38195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (6))){
var inst_38086 = (state_38121[(7)]);
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38121__$1,(11),inst_38086);
} else {
if((state_val_38122 === (17))){
var inst_38107 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
if(cljs.core.truth_(inst_38107)){
var statearr_38132_38196 = state_38121__$1;
(statearr_38132_38196[(1)] = (19));

} else {
var statearr_38133_38197 = state_38121__$1;
(statearr_38133_38197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (3))){
var inst_38119 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38121__$1,inst_38119);
} else {
if((state_val_38122 === (12))){
var inst_38096 = (state_38121[(10)]);
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38121__$1,(14),inst_38096);
} else {
if((state_val_38122 === (2))){
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38121__$1,(4),results);
} else {
if((state_val_38122 === (19))){
var state_38121__$1 = state_38121;
var statearr_38134_38198 = state_38121__$1;
(statearr_38134_38198[(2)] = null);

(statearr_38134_38198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (11))){
var inst_38096 = (state_38121[(2)]);
var state_38121__$1 = (function (){var statearr_38135 = state_38121;
(statearr_38135[(10)] = inst_38096);

return statearr_38135;
})();
var statearr_38136_38199 = state_38121__$1;
(statearr_38136_38199[(2)] = null);

(statearr_38136_38199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (9))){
var state_38121__$1 = state_38121;
var statearr_38137_38200 = state_38121__$1;
(statearr_38137_38200[(2)] = null);

(statearr_38137_38200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (5))){
var state_38121__$1 = state_38121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38138_38201 = state_38121__$1;
(statearr_38138_38201[(1)] = (8));

} else {
var statearr_38139_38202 = state_38121__$1;
(statearr_38139_38202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (14))){
var inst_38101 = (state_38121[(11)]);
var inst_38099 = (state_38121[(8)]);
var inst_38099__$1 = (state_38121[(2)]);
var inst_38100 = (inst_38099__$1 == null);
var inst_38101__$1 = cljs.core.not.call(null,inst_38100);
var state_38121__$1 = (function (){var statearr_38140 = state_38121;
(statearr_38140[(11)] = inst_38101__$1);

(statearr_38140[(8)] = inst_38099__$1);

return statearr_38140;
})();
if(inst_38101__$1){
var statearr_38141_38203 = state_38121__$1;
(statearr_38141_38203[(1)] = (15));

} else {
var statearr_38142_38204 = state_38121__$1;
(statearr_38142_38204[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (16))){
var inst_38101 = (state_38121[(11)]);
var state_38121__$1 = state_38121;
var statearr_38143_38205 = state_38121__$1;
(statearr_38143_38205[(2)] = inst_38101);

(statearr_38143_38205[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (10))){
var inst_38093 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
var statearr_38144_38206 = state_38121__$1;
(statearr_38144_38206[(2)] = inst_38093);

(statearr_38144_38206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (18))){
var inst_38104 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
var statearr_38145_38207 = state_38121__$1;
(statearr_38145_38207[(2)] = inst_38104);

(statearr_38145_38207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (8))){
var inst_38090 = cljs.core.async.close_BANG_.call(null,to);
var state_38121__$1 = state_38121;
var statearr_38146_38208 = state_38121__$1;
(statearr_38146_38208[(2)] = inst_38090);

(statearr_38146_38208[(1)] = (10));


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
});})(c__37476__auto__,jobs,results,process,async))
;
return ((function (switch__37461__auto__,c__37476__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0 = (function (){
var statearr_38150 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__);

(statearr_38150[(1)] = (1));

return statearr_38150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1 = (function (state_38121){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38151){if((e38151 instanceof Object)){
var ex__37465__auto__ = e38151;
var statearr_38152_38209 = state_38121;
(statearr_38152_38209[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38210 = state_38121;
state_38121 = G__38210;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__ = function(state_38121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1.call(this,state_38121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37462__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__,jobs,results,process,async))
})();
var state__37478__auto__ = (function (){var statearr_38153 = f__37477__auto__.call(null);
(statearr_38153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_38153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,jobs,results,process,async))
);

return c__37476__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args38211 = [];
var len__32057__auto___38214 = arguments.length;
var i__32058__auto___38215 = (0);
while(true){
if((i__32058__auto___38215 < len__32057__auto___38214)){
args38211.push((arguments[i__32058__auto___38215]));

var G__38216 = (i__32058__auto___38215 + (1));
i__32058__auto___38215 = G__38216;
continue;
} else {
}
break;
}

var G__38213 = args38211.length;
switch (G__38213) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38211.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args38218 = [];
var len__32057__auto___38221 = arguments.length;
var i__32058__auto___38222 = (0);
while(true){
if((i__32058__auto___38222 < len__32057__auto___38221)){
args38218.push((arguments[i__32058__auto___38222]));

var G__38223 = (i__32058__auto___38222 + (1));
i__32058__auto___38222 = G__38223;
continue;
} else {
}
break;
}

var G__38220 = args38218.length;
switch (G__38220) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38218.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args38225 = [];
var len__32057__auto___38278 = arguments.length;
var i__32058__auto___38279 = (0);
while(true){
if((i__32058__auto___38279 < len__32057__auto___38278)){
args38225.push((arguments[i__32058__auto___38279]));

var G__38280 = (i__32058__auto___38279 + (1));
i__32058__auto___38279 = G__38280;
continue;
} else {
}
break;
}

var G__38227 = args38225.length;
switch (G__38227) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38225.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37476__auto___38282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38282,tc,fc){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___38282,tc,fc){
return (function (state_38253){
var state_val_38254 = (state_38253[(1)]);
if((state_val_38254 === (7))){
var inst_38249 = (state_38253[(2)]);
var state_38253__$1 = state_38253;
var statearr_38255_38283 = state_38253__$1;
(statearr_38255_38283[(2)] = inst_38249);

(statearr_38255_38283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (1))){
var state_38253__$1 = state_38253;
var statearr_38256_38284 = state_38253__$1;
(statearr_38256_38284[(2)] = null);

(statearr_38256_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (4))){
var inst_38230 = (state_38253[(7)]);
var inst_38230__$1 = (state_38253[(2)]);
var inst_38231 = (inst_38230__$1 == null);
var state_38253__$1 = (function (){var statearr_38257 = state_38253;
(statearr_38257[(7)] = inst_38230__$1);

return statearr_38257;
})();
if(cljs.core.truth_(inst_38231)){
var statearr_38258_38285 = state_38253__$1;
(statearr_38258_38285[(1)] = (5));

} else {
var statearr_38259_38286 = state_38253__$1;
(statearr_38259_38286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (13))){
var state_38253__$1 = state_38253;
var statearr_38260_38287 = state_38253__$1;
(statearr_38260_38287[(2)] = null);

(statearr_38260_38287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (6))){
var inst_38230 = (state_38253[(7)]);
var inst_38236 = p.call(null,inst_38230);
var state_38253__$1 = state_38253;
if(cljs.core.truth_(inst_38236)){
var statearr_38261_38288 = state_38253__$1;
(statearr_38261_38288[(1)] = (9));

} else {
var statearr_38262_38289 = state_38253__$1;
(statearr_38262_38289[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (3))){
var inst_38251 = (state_38253[(2)]);
var state_38253__$1 = state_38253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38253__$1,inst_38251);
} else {
if((state_val_38254 === (12))){
var state_38253__$1 = state_38253;
var statearr_38263_38290 = state_38253__$1;
(statearr_38263_38290[(2)] = null);

(statearr_38263_38290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (2))){
var state_38253__$1 = state_38253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38253__$1,(4),ch);
} else {
if((state_val_38254 === (11))){
var inst_38230 = (state_38253[(7)]);
var inst_38240 = (state_38253[(2)]);
var state_38253__$1 = state_38253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38253__$1,(8),inst_38240,inst_38230);
} else {
if((state_val_38254 === (9))){
var state_38253__$1 = state_38253;
var statearr_38264_38291 = state_38253__$1;
(statearr_38264_38291[(2)] = tc);

(statearr_38264_38291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (5))){
var inst_38233 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38234 = cljs.core.async.close_BANG_.call(null,fc);
var state_38253__$1 = (function (){var statearr_38265 = state_38253;
(statearr_38265[(8)] = inst_38233);

return statearr_38265;
})();
var statearr_38266_38292 = state_38253__$1;
(statearr_38266_38292[(2)] = inst_38234);

(statearr_38266_38292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (14))){
var inst_38247 = (state_38253[(2)]);
var state_38253__$1 = state_38253;
var statearr_38267_38293 = state_38253__$1;
(statearr_38267_38293[(2)] = inst_38247);

(statearr_38267_38293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (10))){
var state_38253__$1 = state_38253;
var statearr_38268_38294 = state_38253__$1;
(statearr_38268_38294[(2)] = fc);

(statearr_38268_38294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38254 === (8))){
var inst_38242 = (state_38253[(2)]);
var state_38253__$1 = state_38253;
if(cljs.core.truth_(inst_38242)){
var statearr_38269_38295 = state_38253__$1;
(statearr_38269_38295[(1)] = (12));

} else {
var statearr_38270_38296 = state_38253__$1;
(statearr_38270_38296[(1)] = (13));

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
});})(c__37476__auto___38282,tc,fc))
;
return ((function (switch__37461__auto__,c__37476__auto___38282,tc,fc){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_38274 = [null,null,null,null,null,null,null,null,null];
(statearr_38274[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_38274[(1)] = (1));

return statearr_38274;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_38253){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38275){if((e38275 instanceof Object)){
var ex__37465__auto__ = e38275;
var statearr_38276_38297 = state_38253;
(statearr_38276_38297[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38298 = state_38253;
state_38253 = G__38298;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_38253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_38253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___38282,tc,fc))
})();
var state__37478__auto__ = (function (){var statearr_38277 = f__37477__auto__.call(null);
(statearr_38277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___38282);

return statearr_38277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38282,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_38362){
var state_val_38363 = (state_38362[(1)]);
if((state_val_38363 === (7))){
var inst_38358 = (state_38362[(2)]);
var state_38362__$1 = state_38362;
var statearr_38364_38385 = state_38362__$1;
(statearr_38364_38385[(2)] = inst_38358);

(statearr_38364_38385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38363 === (1))){
var inst_38342 = init;
var state_38362__$1 = (function (){var statearr_38365 = state_38362;
(statearr_38365[(7)] = inst_38342);

return statearr_38365;
})();
var statearr_38366_38386 = state_38362__$1;
(statearr_38366_38386[(2)] = null);

(statearr_38366_38386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38363 === (4))){
var inst_38345 = (state_38362[(8)]);
var inst_38345__$1 = (state_38362[(2)]);
var inst_38346 = (inst_38345__$1 == null);
var state_38362__$1 = (function (){var statearr_38367 = state_38362;
(statearr_38367[(8)] = inst_38345__$1);

return statearr_38367;
})();
if(cljs.core.truth_(inst_38346)){
var statearr_38368_38387 = state_38362__$1;
(statearr_38368_38387[(1)] = (5));

} else {
var statearr_38369_38388 = state_38362__$1;
(statearr_38369_38388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38363 === (6))){
var inst_38345 = (state_38362[(8)]);
var inst_38342 = (state_38362[(7)]);
var inst_38349 = (state_38362[(9)]);
var inst_38349__$1 = f.call(null,inst_38342,inst_38345);
var inst_38350 = cljs.core.reduced_QMARK_.call(null,inst_38349__$1);
var state_38362__$1 = (function (){var statearr_38370 = state_38362;
(statearr_38370[(9)] = inst_38349__$1);

return statearr_38370;
})();
if(inst_38350){
var statearr_38371_38389 = state_38362__$1;
(statearr_38371_38389[(1)] = (8));

} else {
var statearr_38372_38390 = state_38362__$1;
(statearr_38372_38390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38363 === (3))){
var inst_38360 = (state_38362[(2)]);
var state_38362__$1 = state_38362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38362__$1,inst_38360);
} else {
if((state_val_38363 === (2))){
var state_38362__$1 = state_38362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38362__$1,(4),ch);
} else {
if((state_val_38363 === (9))){
var inst_38349 = (state_38362[(9)]);
var inst_38342 = inst_38349;
var state_38362__$1 = (function (){var statearr_38373 = state_38362;
(statearr_38373[(7)] = inst_38342);

return statearr_38373;
})();
var statearr_38374_38391 = state_38362__$1;
(statearr_38374_38391[(2)] = null);

(statearr_38374_38391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38363 === (5))){
var inst_38342 = (state_38362[(7)]);
var state_38362__$1 = state_38362;
var statearr_38375_38392 = state_38362__$1;
(statearr_38375_38392[(2)] = inst_38342);

(statearr_38375_38392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38363 === (10))){
var inst_38356 = (state_38362[(2)]);
var state_38362__$1 = state_38362;
var statearr_38376_38393 = state_38362__$1;
(statearr_38376_38393[(2)] = inst_38356);

(statearr_38376_38393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38363 === (8))){
var inst_38349 = (state_38362[(9)]);
var inst_38352 = cljs.core.deref.call(null,inst_38349);
var state_38362__$1 = state_38362;
var statearr_38377_38394 = state_38362__$1;
(statearr_38377_38394[(2)] = inst_38352);

(statearr_38377_38394[(1)] = (10));


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
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37462__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37462__auto____0 = (function (){
var statearr_38381 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38381[(0)] = cljs$core$async$reduce_$_state_machine__37462__auto__);

(statearr_38381[(1)] = (1));

return statearr_38381;
});
var cljs$core$async$reduce_$_state_machine__37462__auto____1 = (function (state_38362){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38382){if((e38382 instanceof Object)){
var ex__37465__auto__ = e38382;
var statearr_38383_38395 = state_38362;
(statearr_38383_38395[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38396 = state_38362;
state_38362 = G__38396;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37462__auto__ = function(state_38362){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37462__auto____1.call(this,state_38362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37462__auto____0;
cljs$core$async$reduce_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37462__auto____1;
return cljs$core$async$reduce_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_38384 = f__37477__auto__.call(null);
(statearr_38384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_38384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38397 = [];
var len__32057__auto___38449 = arguments.length;
var i__32058__auto___38450 = (0);
while(true){
if((i__32058__auto___38450 < len__32057__auto___38449)){
args38397.push((arguments[i__32058__auto___38450]));

var G__38451 = (i__32058__auto___38450 + (1));
i__32058__auto___38450 = G__38451;
continue;
} else {
}
break;
}

var G__38399 = args38397.length;
switch (G__38399) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38397.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_38424){
var state_val_38425 = (state_38424[(1)]);
if((state_val_38425 === (7))){
var inst_38406 = (state_38424[(2)]);
var state_38424__$1 = state_38424;
var statearr_38426_38453 = state_38424__$1;
(statearr_38426_38453[(2)] = inst_38406);

(statearr_38426_38453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (1))){
var inst_38400 = cljs.core.seq.call(null,coll);
var inst_38401 = inst_38400;
var state_38424__$1 = (function (){var statearr_38427 = state_38424;
(statearr_38427[(7)] = inst_38401);

return statearr_38427;
})();
var statearr_38428_38454 = state_38424__$1;
(statearr_38428_38454[(2)] = null);

(statearr_38428_38454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (4))){
var inst_38401 = (state_38424[(7)]);
var inst_38404 = cljs.core.first.call(null,inst_38401);
var state_38424__$1 = state_38424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38424__$1,(7),ch,inst_38404);
} else {
if((state_val_38425 === (13))){
var inst_38418 = (state_38424[(2)]);
var state_38424__$1 = state_38424;
var statearr_38429_38455 = state_38424__$1;
(statearr_38429_38455[(2)] = inst_38418);

(statearr_38429_38455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (6))){
var inst_38409 = (state_38424[(2)]);
var state_38424__$1 = state_38424;
if(cljs.core.truth_(inst_38409)){
var statearr_38430_38456 = state_38424__$1;
(statearr_38430_38456[(1)] = (8));

} else {
var statearr_38431_38457 = state_38424__$1;
(statearr_38431_38457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (3))){
var inst_38422 = (state_38424[(2)]);
var state_38424__$1 = state_38424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38424__$1,inst_38422);
} else {
if((state_val_38425 === (12))){
var state_38424__$1 = state_38424;
var statearr_38432_38458 = state_38424__$1;
(statearr_38432_38458[(2)] = null);

(statearr_38432_38458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (2))){
var inst_38401 = (state_38424[(7)]);
var state_38424__$1 = state_38424;
if(cljs.core.truth_(inst_38401)){
var statearr_38433_38459 = state_38424__$1;
(statearr_38433_38459[(1)] = (4));

} else {
var statearr_38434_38460 = state_38424__$1;
(statearr_38434_38460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (11))){
var inst_38415 = cljs.core.async.close_BANG_.call(null,ch);
var state_38424__$1 = state_38424;
var statearr_38435_38461 = state_38424__$1;
(statearr_38435_38461[(2)] = inst_38415);

(statearr_38435_38461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (9))){
var state_38424__$1 = state_38424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38436_38462 = state_38424__$1;
(statearr_38436_38462[(1)] = (11));

} else {
var statearr_38437_38463 = state_38424__$1;
(statearr_38437_38463[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (5))){
var inst_38401 = (state_38424[(7)]);
var state_38424__$1 = state_38424;
var statearr_38438_38464 = state_38424__$1;
(statearr_38438_38464[(2)] = inst_38401);

(statearr_38438_38464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (10))){
var inst_38420 = (state_38424[(2)]);
var state_38424__$1 = state_38424;
var statearr_38439_38465 = state_38424__$1;
(statearr_38439_38465[(2)] = inst_38420);

(statearr_38439_38465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38425 === (8))){
var inst_38401 = (state_38424[(7)]);
var inst_38411 = cljs.core.next.call(null,inst_38401);
var inst_38401__$1 = inst_38411;
var state_38424__$1 = (function (){var statearr_38440 = state_38424;
(statearr_38440[(7)] = inst_38401__$1);

return statearr_38440;
})();
var statearr_38441_38466 = state_38424__$1;
(statearr_38441_38466[(2)] = null);

(statearr_38441_38466[(1)] = (2));


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
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_38445 = [null,null,null,null,null,null,null,null];
(statearr_38445[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_38445[(1)] = (1));

return statearr_38445;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_38424){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38446){if((e38446 instanceof Object)){
var ex__37465__auto__ = e38446;
var statearr_38447_38467 = state_38424;
(statearr_38447_38467[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38468 = state_38424;
state_38424 = G__38468;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_38424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_38424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_38448 = f__37477__auto__.call(null);
(statearr_38448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_38448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__31650__auto__ = (((_ == null))?null:_);
var m__31651__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,_);
} else {
var m__31651__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31651__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m,ch);
} else {
var m__31651__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m);
} else {
var m__31651__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38690 = (function (mult,ch,cs,meta38691){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38691 = meta38691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38692,meta38691__$1){
var self__ = this;
var _38692__$1 = this;
return (new cljs.core.async.t_cljs$core$async38690(self__.mult,self__.ch,self__.cs,meta38691__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38692){
var self__ = this;
var _38692__$1 = this;
return self__.meta38691;
});})(cs))
;


cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38690.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38691","meta38691",-1637390478,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38690";

cljs.core.async.t_cljs$core$async38690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async38690");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38690 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38690(mult__$1,ch__$1,cs__$1,meta38691){
return (new cljs.core.async.t_cljs$core$async38690(mult__$1,ch__$1,cs__$1,meta38691));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38690(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37476__auto___38911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___38911,cs,m,dchan,dctr,done){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___38911,cs,m,dchan,dctr,done){
return (function (state_38823){
var state_val_38824 = (state_38823[(1)]);
if((state_val_38824 === (7))){
var inst_38819 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38825_38912 = state_38823__$1;
(statearr_38825_38912[(2)] = inst_38819);

(statearr_38825_38912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (20))){
var inst_38724 = (state_38823[(7)]);
var inst_38734 = cljs.core.first.call(null,inst_38724);
var inst_38735 = cljs.core.nth.call(null,inst_38734,(0),null);
var inst_38736 = cljs.core.nth.call(null,inst_38734,(1),null);
var state_38823__$1 = (function (){var statearr_38826 = state_38823;
(statearr_38826[(8)] = inst_38735);

return statearr_38826;
})();
if(cljs.core.truth_(inst_38736)){
var statearr_38827_38913 = state_38823__$1;
(statearr_38827_38913[(1)] = (22));

} else {
var statearr_38828_38914 = state_38823__$1;
(statearr_38828_38914[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (27))){
var inst_38695 = (state_38823[(9)]);
var inst_38764 = (state_38823[(10)]);
var inst_38766 = (state_38823[(11)]);
var inst_38771 = (state_38823[(12)]);
var inst_38771__$1 = cljs.core._nth.call(null,inst_38764,inst_38766);
var inst_38772 = cljs.core.async.put_BANG_.call(null,inst_38771__$1,inst_38695,done);
var state_38823__$1 = (function (){var statearr_38829 = state_38823;
(statearr_38829[(12)] = inst_38771__$1);

return statearr_38829;
})();
if(cljs.core.truth_(inst_38772)){
var statearr_38830_38915 = state_38823__$1;
(statearr_38830_38915[(1)] = (30));

} else {
var statearr_38831_38916 = state_38823__$1;
(statearr_38831_38916[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (1))){
var state_38823__$1 = state_38823;
var statearr_38832_38917 = state_38823__$1;
(statearr_38832_38917[(2)] = null);

(statearr_38832_38917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (24))){
var inst_38724 = (state_38823[(7)]);
var inst_38741 = (state_38823[(2)]);
var inst_38742 = cljs.core.next.call(null,inst_38724);
var inst_38704 = inst_38742;
var inst_38705 = null;
var inst_38706 = (0);
var inst_38707 = (0);
var state_38823__$1 = (function (){var statearr_38833 = state_38823;
(statearr_38833[(13)] = inst_38706);

(statearr_38833[(14)] = inst_38741);

(statearr_38833[(15)] = inst_38704);

(statearr_38833[(16)] = inst_38707);

(statearr_38833[(17)] = inst_38705);

return statearr_38833;
})();
var statearr_38834_38918 = state_38823__$1;
(statearr_38834_38918[(2)] = null);

(statearr_38834_38918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (39))){
var state_38823__$1 = state_38823;
var statearr_38838_38919 = state_38823__$1;
(statearr_38838_38919[(2)] = null);

(statearr_38838_38919[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (4))){
var inst_38695 = (state_38823[(9)]);
var inst_38695__$1 = (state_38823[(2)]);
var inst_38696 = (inst_38695__$1 == null);
var state_38823__$1 = (function (){var statearr_38839 = state_38823;
(statearr_38839[(9)] = inst_38695__$1);

return statearr_38839;
})();
if(cljs.core.truth_(inst_38696)){
var statearr_38840_38920 = state_38823__$1;
(statearr_38840_38920[(1)] = (5));

} else {
var statearr_38841_38921 = state_38823__$1;
(statearr_38841_38921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (15))){
var inst_38706 = (state_38823[(13)]);
var inst_38704 = (state_38823[(15)]);
var inst_38707 = (state_38823[(16)]);
var inst_38705 = (state_38823[(17)]);
var inst_38720 = (state_38823[(2)]);
var inst_38721 = (inst_38707 + (1));
var tmp38835 = inst_38706;
var tmp38836 = inst_38704;
var tmp38837 = inst_38705;
var inst_38704__$1 = tmp38836;
var inst_38705__$1 = tmp38837;
var inst_38706__$1 = tmp38835;
var inst_38707__$1 = inst_38721;
var state_38823__$1 = (function (){var statearr_38842 = state_38823;
(statearr_38842[(13)] = inst_38706__$1);

(statearr_38842[(15)] = inst_38704__$1);

(statearr_38842[(16)] = inst_38707__$1);

(statearr_38842[(17)] = inst_38705__$1);

(statearr_38842[(18)] = inst_38720);

return statearr_38842;
})();
var statearr_38843_38922 = state_38823__$1;
(statearr_38843_38922[(2)] = null);

(statearr_38843_38922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (21))){
var inst_38745 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38847_38923 = state_38823__$1;
(statearr_38847_38923[(2)] = inst_38745);

(statearr_38847_38923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (31))){
var inst_38771 = (state_38823[(12)]);
var inst_38775 = done.call(null,null);
var inst_38776 = cljs.core.async.untap_STAR_.call(null,m,inst_38771);
var state_38823__$1 = (function (){var statearr_38848 = state_38823;
(statearr_38848[(19)] = inst_38775);

return statearr_38848;
})();
var statearr_38849_38924 = state_38823__$1;
(statearr_38849_38924[(2)] = inst_38776);

(statearr_38849_38924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (32))){
var inst_38763 = (state_38823[(20)]);
var inst_38764 = (state_38823[(10)]);
var inst_38766 = (state_38823[(11)]);
var inst_38765 = (state_38823[(21)]);
var inst_38778 = (state_38823[(2)]);
var inst_38779 = (inst_38766 + (1));
var tmp38844 = inst_38763;
var tmp38845 = inst_38764;
var tmp38846 = inst_38765;
var inst_38763__$1 = tmp38844;
var inst_38764__$1 = tmp38845;
var inst_38765__$1 = tmp38846;
var inst_38766__$1 = inst_38779;
var state_38823__$1 = (function (){var statearr_38850 = state_38823;
(statearr_38850[(22)] = inst_38778);

(statearr_38850[(20)] = inst_38763__$1);

(statearr_38850[(10)] = inst_38764__$1);

(statearr_38850[(11)] = inst_38766__$1);

(statearr_38850[(21)] = inst_38765__$1);

return statearr_38850;
})();
var statearr_38851_38925 = state_38823__$1;
(statearr_38851_38925[(2)] = null);

(statearr_38851_38925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (40))){
var inst_38791 = (state_38823[(23)]);
var inst_38795 = done.call(null,null);
var inst_38796 = cljs.core.async.untap_STAR_.call(null,m,inst_38791);
var state_38823__$1 = (function (){var statearr_38852 = state_38823;
(statearr_38852[(24)] = inst_38795);

return statearr_38852;
})();
var statearr_38853_38926 = state_38823__$1;
(statearr_38853_38926[(2)] = inst_38796);

(statearr_38853_38926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (33))){
var inst_38782 = (state_38823[(25)]);
var inst_38784 = cljs.core.chunked_seq_QMARK_.call(null,inst_38782);
var state_38823__$1 = state_38823;
if(inst_38784){
var statearr_38854_38927 = state_38823__$1;
(statearr_38854_38927[(1)] = (36));

} else {
var statearr_38855_38928 = state_38823__$1;
(statearr_38855_38928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (13))){
var inst_38714 = (state_38823[(26)]);
var inst_38717 = cljs.core.async.close_BANG_.call(null,inst_38714);
var state_38823__$1 = state_38823;
var statearr_38856_38929 = state_38823__$1;
(statearr_38856_38929[(2)] = inst_38717);

(statearr_38856_38929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (22))){
var inst_38735 = (state_38823[(8)]);
var inst_38738 = cljs.core.async.close_BANG_.call(null,inst_38735);
var state_38823__$1 = state_38823;
var statearr_38857_38930 = state_38823__$1;
(statearr_38857_38930[(2)] = inst_38738);

(statearr_38857_38930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (36))){
var inst_38782 = (state_38823[(25)]);
var inst_38786 = cljs.core.chunk_first.call(null,inst_38782);
var inst_38787 = cljs.core.chunk_rest.call(null,inst_38782);
var inst_38788 = cljs.core.count.call(null,inst_38786);
var inst_38763 = inst_38787;
var inst_38764 = inst_38786;
var inst_38765 = inst_38788;
var inst_38766 = (0);
var state_38823__$1 = (function (){var statearr_38858 = state_38823;
(statearr_38858[(20)] = inst_38763);

(statearr_38858[(10)] = inst_38764);

(statearr_38858[(11)] = inst_38766);

(statearr_38858[(21)] = inst_38765);

return statearr_38858;
})();
var statearr_38859_38931 = state_38823__$1;
(statearr_38859_38931[(2)] = null);

(statearr_38859_38931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (41))){
var inst_38782 = (state_38823[(25)]);
var inst_38798 = (state_38823[(2)]);
var inst_38799 = cljs.core.next.call(null,inst_38782);
var inst_38763 = inst_38799;
var inst_38764 = null;
var inst_38765 = (0);
var inst_38766 = (0);
var state_38823__$1 = (function (){var statearr_38860 = state_38823;
(statearr_38860[(20)] = inst_38763);

(statearr_38860[(10)] = inst_38764);

(statearr_38860[(11)] = inst_38766);

(statearr_38860[(27)] = inst_38798);

(statearr_38860[(21)] = inst_38765);

return statearr_38860;
})();
var statearr_38861_38932 = state_38823__$1;
(statearr_38861_38932[(2)] = null);

(statearr_38861_38932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (43))){
var state_38823__$1 = state_38823;
var statearr_38862_38933 = state_38823__$1;
(statearr_38862_38933[(2)] = null);

(statearr_38862_38933[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (29))){
var inst_38807 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38863_38934 = state_38823__$1;
(statearr_38863_38934[(2)] = inst_38807);

(statearr_38863_38934[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (44))){
var inst_38816 = (state_38823[(2)]);
var state_38823__$1 = (function (){var statearr_38864 = state_38823;
(statearr_38864[(28)] = inst_38816);

return statearr_38864;
})();
var statearr_38865_38935 = state_38823__$1;
(statearr_38865_38935[(2)] = null);

(statearr_38865_38935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (6))){
var inst_38755 = (state_38823[(29)]);
var inst_38754 = cljs.core.deref.call(null,cs);
var inst_38755__$1 = cljs.core.keys.call(null,inst_38754);
var inst_38756 = cljs.core.count.call(null,inst_38755__$1);
var inst_38757 = cljs.core.reset_BANG_.call(null,dctr,inst_38756);
var inst_38762 = cljs.core.seq.call(null,inst_38755__$1);
var inst_38763 = inst_38762;
var inst_38764 = null;
var inst_38765 = (0);
var inst_38766 = (0);
var state_38823__$1 = (function (){var statearr_38866 = state_38823;
(statearr_38866[(30)] = inst_38757);

(statearr_38866[(29)] = inst_38755__$1);

(statearr_38866[(20)] = inst_38763);

(statearr_38866[(10)] = inst_38764);

(statearr_38866[(11)] = inst_38766);

(statearr_38866[(21)] = inst_38765);

return statearr_38866;
})();
var statearr_38867_38936 = state_38823__$1;
(statearr_38867_38936[(2)] = null);

(statearr_38867_38936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (28))){
var inst_38763 = (state_38823[(20)]);
var inst_38782 = (state_38823[(25)]);
var inst_38782__$1 = cljs.core.seq.call(null,inst_38763);
var state_38823__$1 = (function (){var statearr_38868 = state_38823;
(statearr_38868[(25)] = inst_38782__$1);

return statearr_38868;
})();
if(inst_38782__$1){
var statearr_38869_38937 = state_38823__$1;
(statearr_38869_38937[(1)] = (33));

} else {
var statearr_38870_38938 = state_38823__$1;
(statearr_38870_38938[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (25))){
var inst_38766 = (state_38823[(11)]);
var inst_38765 = (state_38823[(21)]);
var inst_38768 = (inst_38766 < inst_38765);
var inst_38769 = inst_38768;
var state_38823__$1 = state_38823;
if(cljs.core.truth_(inst_38769)){
var statearr_38871_38939 = state_38823__$1;
(statearr_38871_38939[(1)] = (27));

} else {
var statearr_38872_38940 = state_38823__$1;
(statearr_38872_38940[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (34))){
var state_38823__$1 = state_38823;
var statearr_38873_38941 = state_38823__$1;
(statearr_38873_38941[(2)] = null);

(statearr_38873_38941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (17))){
var state_38823__$1 = state_38823;
var statearr_38874_38942 = state_38823__$1;
(statearr_38874_38942[(2)] = null);

(statearr_38874_38942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (3))){
var inst_38821 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38823__$1,inst_38821);
} else {
if((state_val_38824 === (12))){
var inst_38750 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38875_38943 = state_38823__$1;
(statearr_38875_38943[(2)] = inst_38750);

(statearr_38875_38943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (2))){
var state_38823__$1 = state_38823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38823__$1,(4),ch);
} else {
if((state_val_38824 === (23))){
var state_38823__$1 = state_38823;
var statearr_38876_38944 = state_38823__$1;
(statearr_38876_38944[(2)] = null);

(statearr_38876_38944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (35))){
var inst_38805 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38877_38945 = state_38823__$1;
(statearr_38877_38945[(2)] = inst_38805);

(statearr_38877_38945[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (19))){
var inst_38724 = (state_38823[(7)]);
var inst_38728 = cljs.core.chunk_first.call(null,inst_38724);
var inst_38729 = cljs.core.chunk_rest.call(null,inst_38724);
var inst_38730 = cljs.core.count.call(null,inst_38728);
var inst_38704 = inst_38729;
var inst_38705 = inst_38728;
var inst_38706 = inst_38730;
var inst_38707 = (0);
var state_38823__$1 = (function (){var statearr_38878 = state_38823;
(statearr_38878[(13)] = inst_38706);

(statearr_38878[(15)] = inst_38704);

(statearr_38878[(16)] = inst_38707);

(statearr_38878[(17)] = inst_38705);

return statearr_38878;
})();
var statearr_38879_38946 = state_38823__$1;
(statearr_38879_38946[(2)] = null);

(statearr_38879_38946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (11))){
var inst_38704 = (state_38823[(15)]);
var inst_38724 = (state_38823[(7)]);
var inst_38724__$1 = cljs.core.seq.call(null,inst_38704);
var state_38823__$1 = (function (){var statearr_38880 = state_38823;
(statearr_38880[(7)] = inst_38724__$1);

return statearr_38880;
})();
if(inst_38724__$1){
var statearr_38881_38947 = state_38823__$1;
(statearr_38881_38947[(1)] = (16));

} else {
var statearr_38882_38948 = state_38823__$1;
(statearr_38882_38948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (9))){
var inst_38752 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38883_38949 = state_38823__$1;
(statearr_38883_38949[(2)] = inst_38752);

(statearr_38883_38949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (5))){
var inst_38702 = cljs.core.deref.call(null,cs);
var inst_38703 = cljs.core.seq.call(null,inst_38702);
var inst_38704 = inst_38703;
var inst_38705 = null;
var inst_38706 = (0);
var inst_38707 = (0);
var state_38823__$1 = (function (){var statearr_38884 = state_38823;
(statearr_38884[(13)] = inst_38706);

(statearr_38884[(15)] = inst_38704);

(statearr_38884[(16)] = inst_38707);

(statearr_38884[(17)] = inst_38705);

return statearr_38884;
})();
var statearr_38885_38950 = state_38823__$1;
(statearr_38885_38950[(2)] = null);

(statearr_38885_38950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (14))){
var state_38823__$1 = state_38823;
var statearr_38886_38951 = state_38823__$1;
(statearr_38886_38951[(2)] = null);

(statearr_38886_38951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (45))){
var inst_38813 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38887_38952 = state_38823__$1;
(statearr_38887_38952[(2)] = inst_38813);

(statearr_38887_38952[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (26))){
var inst_38755 = (state_38823[(29)]);
var inst_38809 = (state_38823[(2)]);
var inst_38810 = cljs.core.seq.call(null,inst_38755);
var state_38823__$1 = (function (){var statearr_38888 = state_38823;
(statearr_38888[(31)] = inst_38809);

return statearr_38888;
})();
if(inst_38810){
var statearr_38889_38953 = state_38823__$1;
(statearr_38889_38953[(1)] = (42));

} else {
var statearr_38890_38954 = state_38823__$1;
(statearr_38890_38954[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (16))){
var inst_38724 = (state_38823[(7)]);
var inst_38726 = cljs.core.chunked_seq_QMARK_.call(null,inst_38724);
var state_38823__$1 = state_38823;
if(inst_38726){
var statearr_38891_38955 = state_38823__$1;
(statearr_38891_38955[(1)] = (19));

} else {
var statearr_38892_38956 = state_38823__$1;
(statearr_38892_38956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (38))){
var inst_38802 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38893_38957 = state_38823__$1;
(statearr_38893_38957[(2)] = inst_38802);

(statearr_38893_38957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (30))){
var state_38823__$1 = state_38823;
var statearr_38894_38958 = state_38823__$1;
(statearr_38894_38958[(2)] = null);

(statearr_38894_38958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (10))){
var inst_38707 = (state_38823[(16)]);
var inst_38705 = (state_38823[(17)]);
var inst_38713 = cljs.core._nth.call(null,inst_38705,inst_38707);
var inst_38714 = cljs.core.nth.call(null,inst_38713,(0),null);
var inst_38715 = cljs.core.nth.call(null,inst_38713,(1),null);
var state_38823__$1 = (function (){var statearr_38895 = state_38823;
(statearr_38895[(26)] = inst_38714);

return statearr_38895;
})();
if(cljs.core.truth_(inst_38715)){
var statearr_38896_38959 = state_38823__$1;
(statearr_38896_38959[(1)] = (13));

} else {
var statearr_38897_38960 = state_38823__$1;
(statearr_38897_38960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (18))){
var inst_38748 = (state_38823[(2)]);
var state_38823__$1 = state_38823;
var statearr_38898_38961 = state_38823__$1;
(statearr_38898_38961[(2)] = inst_38748);

(statearr_38898_38961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (42))){
var state_38823__$1 = state_38823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38823__$1,(45),dchan);
} else {
if((state_val_38824 === (37))){
var inst_38791 = (state_38823[(23)]);
var inst_38695 = (state_38823[(9)]);
var inst_38782 = (state_38823[(25)]);
var inst_38791__$1 = cljs.core.first.call(null,inst_38782);
var inst_38792 = cljs.core.async.put_BANG_.call(null,inst_38791__$1,inst_38695,done);
var state_38823__$1 = (function (){var statearr_38899 = state_38823;
(statearr_38899[(23)] = inst_38791__$1);

return statearr_38899;
})();
if(cljs.core.truth_(inst_38792)){
var statearr_38900_38962 = state_38823__$1;
(statearr_38900_38962[(1)] = (39));

} else {
var statearr_38901_38963 = state_38823__$1;
(statearr_38901_38963[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38824 === (8))){
var inst_38706 = (state_38823[(13)]);
var inst_38707 = (state_38823[(16)]);
var inst_38709 = (inst_38707 < inst_38706);
var inst_38710 = inst_38709;
var state_38823__$1 = state_38823;
if(cljs.core.truth_(inst_38710)){
var statearr_38902_38964 = state_38823__$1;
(statearr_38902_38964[(1)] = (10));

} else {
var statearr_38903_38965 = state_38823__$1;
(statearr_38903_38965[(1)] = (11));

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
});})(c__37476__auto___38911,cs,m,dchan,dctr,done))
;
return ((function (switch__37461__auto__,c__37476__auto___38911,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37462__auto__ = null;
var cljs$core$async$mult_$_state_machine__37462__auto____0 = (function (){
var statearr_38907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38907[(0)] = cljs$core$async$mult_$_state_machine__37462__auto__);

(statearr_38907[(1)] = (1));

return statearr_38907;
});
var cljs$core$async$mult_$_state_machine__37462__auto____1 = (function (state_38823){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_38823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e38908){if((e38908 instanceof Object)){
var ex__37465__auto__ = e38908;
var statearr_38909_38966 = state_38823;
(statearr_38909_38966[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38967 = state_38823;
state_38823 = G__38967;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37462__auto__ = function(state_38823){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37462__auto____1.call(this,state_38823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37462__auto____0;
cljs$core$async$mult_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37462__auto____1;
return cljs$core$async$mult_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___38911,cs,m,dchan,dctr,done))
})();
var state__37478__auto__ = (function (){var statearr_38910 = f__37477__auto__.call(null);
(statearr_38910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___38911);

return statearr_38910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___38911,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38968 = [];
var len__32057__auto___38971 = arguments.length;
var i__32058__auto___38972 = (0);
while(true){
if((i__32058__auto___38972 < len__32057__auto___38971)){
args38968.push((arguments[i__32058__auto___38972]));

var G__38973 = (i__32058__auto___38972 + (1));
i__32058__auto___38972 = G__38973;
continue;
} else {
}
break;
}

var G__38970 = args38968.length;
switch (G__38970) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38968.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m,ch);
} else {
var m__31651__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m,ch);
} else {
var m__31651__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m);
} else {
var m__31651__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m,state_map);
} else {
var m__31651__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31650__auto__ = (((m == null))?null:m);
var m__31651__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,m,mode);
} else {
var m__31651__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32064__auto__ = [];
var len__32057__auto___38985 = arguments.length;
var i__32058__auto___38986 = (0);
while(true){
if((i__32058__auto___38986 < len__32057__auto___38985)){
args__32064__auto__.push((arguments[i__32058__auto___38986]));

var G__38987 = (i__32058__auto___38986 + (1));
i__32058__auto___38986 = G__38987;
continue;
} else {
}
break;
}

var argseq__32065__auto__ = ((((3) < args__32064__auto__.length))?(new cljs.core.IndexedSeq(args__32064__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32065__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38979){
var map__38980 = p__38979;
var map__38980__$1 = ((((!((map__38980 == null)))?((((map__38980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38980):map__38980);
var opts = map__38980__$1;
var statearr_38982_38988 = state;
(statearr_38982_38988[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38980,map__38980__$1,opts){
return (function (val){
var statearr_38983_38989 = state;
(statearr_38983_38989[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38980,map__38980__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38984_38990 = state;
(statearr_38984_38990[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38975){
var G__38976 = cljs.core.first.call(null,seq38975);
var seq38975__$1 = cljs.core.next.call(null,seq38975);
var G__38977 = cljs.core.first.call(null,seq38975__$1);
var seq38975__$2 = cljs.core.next.call(null,seq38975__$1);
var G__38978 = cljs.core.first.call(null,seq38975__$2);
var seq38975__$3 = cljs.core.next.call(null,seq38975__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38976,G__38977,G__38978,seq38975__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39154 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39155){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39155 = meta39155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39156,meta39155__$1){
var self__ = this;
var _39156__$1 = this;
return (new cljs.core.async.t_cljs$core$async39154(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39155__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39156){
var self__ = this;
var _39156__$1 = this;
return self__.meta39155;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39154.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39154.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39155","meta39155",1478796569,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39154";

cljs.core.async.t_cljs$core$async39154.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async39154");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39154 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39154(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39155){
return (new cljs.core.async.t_cljs$core$async39154(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39155));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39154(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37476__auto___39317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___39317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39254){
var state_val_39255 = (state_39254[(1)]);
if((state_val_39255 === (7))){
var inst_39172 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39256_39318 = state_39254__$1;
(statearr_39256_39318[(2)] = inst_39172);

(statearr_39256_39318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (20))){
var inst_39184 = (state_39254[(7)]);
var state_39254__$1 = state_39254;
var statearr_39257_39319 = state_39254__$1;
(statearr_39257_39319[(2)] = inst_39184);

(statearr_39257_39319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (27))){
var state_39254__$1 = state_39254;
var statearr_39258_39320 = state_39254__$1;
(statearr_39258_39320[(2)] = null);

(statearr_39258_39320[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (1))){
var inst_39160 = (state_39254[(8)]);
var inst_39160__$1 = calc_state.call(null);
var inst_39162 = (inst_39160__$1 == null);
var inst_39163 = cljs.core.not.call(null,inst_39162);
var state_39254__$1 = (function (){var statearr_39259 = state_39254;
(statearr_39259[(8)] = inst_39160__$1);

return statearr_39259;
})();
if(inst_39163){
var statearr_39260_39321 = state_39254__$1;
(statearr_39260_39321[(1)] = (2));

} else {
var statearr_39261_39322 = state_39254__$1;
(statearr_39261_39322[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (24))){
var inst_39228 = (state_39254[(9)]);
var inst_39207 = (state_39254[(10)]);
var inst_39214 = (state_39254[(11)]);
var inst_39228__$1 = inst_39207.call(null,inst_39214);
var state_39254__$1 = (function (){var statearr_39262 = state_39254;
(statearr_39262[(9)] = inst_39228__$1);

return statearr_39262;
})();
if(cljs.core.truth_(inst_39228__$1)){
var statearr_39263_39323 = state_39254__$1;
(statearr_39263_39323[(1)] = (29));

} else {
var statearr_39264_39324 = state_39254__$1;
(statearr_39264_39324[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (4))){
var inst_39175 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39175)){
var statearr_39265_39325 = state_39254__$1;
(statearr_39265_39325[(1)] = (8));

} else {
var statearr_39266_39326 = state_39254__$1;
(statearr_39266_39326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (15))){
var inst_39201 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39201)){
var statearr_39267_39327 = state_39254__$1;
(statearr_39267_39327[(1)] = (19));

} else {
var statearr_39268_39328 = state_39254__$1;
(statearr_39268_39328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (21))){
var inst_39206 = (state_39254[(12)]);
var inst_39206__$1 = (state_39254[(2)]);
var inst_39207 = cljs.core.get.call(null,inst_39206__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39208 = cljs.core.get.call(null,inst_39206__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39209 = cljs.core.get.call(null,inst_39206__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39254__$1 = (function (){var statearr_39269 = state_39254;
(statearr_39269[(12)] = inst_39206__$1);

(statearr_39269[(13)] = inst_39208);

(statearr_39269[(10)] = inst_39207);

return statearr_39269;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39254__$1,(22),inst_39209);
} else {
if((state_val_39255 === (31))){
var inst_39236 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39236)){
var statearr_39270_39329 = state_39254__$1;
(statearr_39270_39329[(1)] = (32));

} else {
var statearr_39271_39330 = state_39254__$1;
(statearr_39271_39330[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (32))){
var inst_39213 = (state_39254[(14)]);
var state_39254__$1 = state_39254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39254__$1,(35),out,inst_39213);
} else {
if((state_val_39255 === (33))){
var inst_39206 = (state_39254[(12)]);
var inst_39184 = inst_39206;
var state_39254__$1 = (function (){var statearr_39272 = state_39254;
(statearr_39272[(7)] = inst_39184);

return statearr_39272;
})();
var statearr_39273_39331 = state_39254__$1;
(statearr_39273_39331[(2)] = null);

(statearr_39273_39331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (13))){
var inst_39184 = (state_39254[(7)]);
var inst_39191 = inst_39184.cljs$lang$protocol_mask$partition0$;
var inst_39192 = (inst_39191 & (64));
var inst_39193 = inst_39184.cljs$core$ISeq$;
var inst_39194 = (inst_39192) || (inst_39193);
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39194)){
var statearr_39274_39332 = state_39254__$1;
(statearr_39274_39332[(1)] = (16));

} else {
var statearr_39275_39333 = state_39254__$1;
(statearr_39275_39333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (22))){
var inst_39213 = (state_39254[(14)]);
var inst_39214 = (state_39254[(11)]);
var inst_39212 = (state_39254[(2)]);
var inst_39213__$1 = cljs.core.nth.call(null,inst_39212,(0),null);
var inst_39214__$1 = cljs.core.nth.call(null,inst_39212,(1),null);
var inst_39215 = (inst_39213__$1 == null);
var inst_39216 = cljs.core._EQ_.call(null,inst_39214__$1,change);
var inst_39217 = (inst_39215) || (inst_39216);
var state_39254__$1 = (function (){var statearr_39276 = state_39254;
(statearr_39276[(14)] = inst_39213__$1);

(statearr_39276[(11)] = inst_39214__$1);

return statearr_39276;
})();
if(cljs.core.truth_(inst_39217)){
var statearr_39277_39334 = state_39254__$1;
(statearr_39277_39334[(1)] = (23));

} else {
var statearr_39278_39335 = state_39254__$1;
(statearr_39278_39335[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (36))){
var inst_39206 = (state_39254[(12)]);
var inst_39184 = inst_39206;
var state_39254__$1 = (function (){var statearr_39279 = state_39254;
(statearr_39279[(7)] = inst_39184);

return statearr_39279;
})();
var statearr_39280_39336 = state_39254__$1;
(statearr_39280_39336[(2)] = null);

(statearr_39280_39336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (29))){
var inst_39228 = (state_39254[(9)]);
var state_39254__$1 = state_39254;
var statearr_39281_39337 = state_39254__$1;
(statearr_39281_39337[(2)] = inst_39228);

(statearr_39281_39337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (6))){
var state_39254__$1 = state_39254;
var statearr_39282_39338 = state_39254__$1;
(statearr_39282_39338[(2)] = false);

(statearr_39282_39338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (28))){
var inst_39224 = (state_39254[(2)]);
var inst_39225 = calc_state.call(null);
var inst_39184 = inst_39225;
var state_39254__$1 = (function (){var statearr_39283 = state_39254;
(statearr_39283[(7)] = inst_39184);

(statearr_39283[(15)] = inst_39224);

return statearr_39283;
})();
var statearr_39284_39339 = state_39254__$1;
(statearr_39284_39339[(2)] = null);

(statearr_39284_39339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (25))){
var inst_39250 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39285_39340 = state_39254__$1;
(statearr_39285_39340[(2)] = inst_39250);

(statearr_39285_39340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (34))){
var inst_39248 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39286_39341 = state_39254__$1;
(statearr_39286_39341[(2)] = inst_39248);

(statearr_39286_39341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (17))){
var state_39254__$1 = state_39254;
var statearr_39287_39342 = state_39254__$1;
(statearr_39287_39342[(2)] = false);

(statearr_39287_39342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (3))){
var state_39254__$1 = state_39254;
var statearr_39288_39343 = state_39254__$1;
(statearr_39288_39343[(2)] = false);

(statearr_39288_39343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (12))){
var inst_39252 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39254__$1,inst_39252);
} else {
if((state_val_39255 === (2))){
var inst_39160 = (state_39254[(8)]);
var inst_39165 = inst_39160.cljs$lang$protocol_mask$partition0$;
var inst_39166 = (inst_39165 & (64));
var inst_39167 = inst_39160.cljs$core$ISeq$;
var inst_39168 = (inst_39166) || (inst_39167);
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39168)){
var statearr_39289_39344 = state_39254__$1;
(statearr_39289_39344[(1)] = (5));

} else {
var statearr_39290_39345 = state_39254__$1;
(statearr_39290_39345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (23))){
var inst_39213 = (state_39254[(14)]);
var inst_39219 = (inst_39213 == null);
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39219)){
var statearr_39291_39346 = state_39254__$1;
(statearr_39291_39346[(1)] = (26));

} else {
var statearr_39292_39347 = state_39254__$1;
(statearr_39292_39347[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (35))){
var inst_39239 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
if(cljs.core.truth_(inst_39239)){
var statearr_39293_39348 = state_39254__$1;
(statearr_39293_39348[(1)] = (36));

} else {
var statearr_39294_39349 = state_39254__$1;
(statearr_39294_39349[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (19))){
var inst_39184 = (state_39254[(7)]);
var inst_39203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39184);
var state_39254__$1 = state_39254;
var statearr_39295_39350 = state_39254__$1;
(statearr_39295_39350[(2)] = inst_39203);

(statearr_39295_39350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (11))){
var inst_39184 = (state_39254[(7)]);
var inst_39188 = (inst_39184 == null);
var inst_39189 = cljs.core.not.call(null,inst_39188);
var state_39254__$1 = state_39254;
if(inst_39189){
var statearr_39296_39351 = state_39254__$1;
(statearr_39296_39351[(1)] = (13));

} else {
var statearr_39297_39352 = state_39254__$1;
(statearr_39297_39352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (9))){
var inst_39160 = (state_39254[(8)]);
var state_39254__$1 = state_39254;
var statearr_39298_39353 = state_39254__$1;
(statearr_39298_39353[(2)] = inst_39160);

(statearr_39298_39353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (5))){
var state_39254__$1 = state_39254;
var statearr_39299_39354 = state_39254__$1;
(statearr_39299_39354[(2)] = true);

(statearr_39299_39354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (14))){
var state_39254__$1 = state_39254;
var statearr_39300_39355 = state_39254__$1;
(statearr_39300_39355[(2)] = false);

(statearr_39300_39355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (26))){
var inst_39214 = (state_39254[(11)]);
var inst_39221 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39214);
var state_39254__$1 = state_39254;
var statearr_39301_39356 = state_39254__$1;
(statearr_39301_39356[(2)] = inst_39221);

(statearr_39301_39356[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (16))){
var state_39254__$1 = state_39254;
var statearr_39302_39357 = state_39254__$1;
(statearr_39302_39357[(2)] = true);

(statearr_39302_39357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (38))){
var inst_39244 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39303_39358 = state_39254__$1;
(statearr_39303_39358[(2)] = inst_39244);

(statearr_39303_39358[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (30))){
var inst_39208 = (state_39254[(13)]);
var inst_39207 = (state_39254[(10)]);
var inst_39214 = (state_39254[(11)]);
var inst_39231 = cljs.core.empty_QMARK_.call(null,inst_39207);
var inst_39232 = inst_39208.call(null,inst_39214);
var inst_39233 = cljs.core.not.call(null,inst_39232);
var inst_39234 = (inst_39231) && (inst_39233);
var state_39254__$1 = state_39254;
var statearr_39304_39359 = state_39254__$1;
(statearr_39304_39359[(2)] = inst_39234);

(statearr_39304_39359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (10))){
var inst_39160 = (state_39254[(8)]);
var inst_39180 = (state_39254[(2)]);
var inst_39181 = cljs.core.get.call(null,inst_39180,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39182 = cljs.core.get.call(null,inst_39180,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39183 = cljs.core.get.call(null,inst_39180,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39184 = inst_39160;
var state_39254__$1 = (function (){var statearr_39305 = state_39254;
(statearr_39305[(16)] = inst_39183);

(statearr_39305[(17)] = inst_39182);

(statearr_39305[(7)] = inst_39184);

(statearr_39305[(18)] = inst_39181);

return statearr_39305;
})();
var statearr_39306_39360 = state_39254__$1;
(statearr_39306_39360[(2)] = null);

(statearr_39306_39360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (18))){
var inst_39198 = (state_39254[(2)]);
var state_39254__$1 = state_39254;
var statearr_39307_39361 = state_39254__$1;
(statearr_39307_39361[(2)] = inst_39198);

(statearr_39307_39361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (37))){
var state_39254__$1 = state_39254;
var statearr_39308_39362 = state_39254__$1;
(statearr_39308_39362[(2)] = null);

(statearr_39308_39362[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39255 === (8))){
var inst_39160 = (state_39254[(8)]);
var inst_39177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39160);
var state_39254__$1 = state_39254;
var statearr_39309_39363 = state_39254__$1;
(statearr_39309_39363[(2)] = inst_39177);

(statearr_39309_39363[(1)] = (10));


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
});})(c__37476__auto___39317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37461__auto__,c__37476__auto___39317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37462__auto__ = null;
var cljs$core$async$mix_$_state_machine__37462__auto____0 = (function (){
var statearr_39313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39313[(0)] = cljs$core$async$mix_$_state_machine__37462__auto__);

(statearr_39313[(1)] = (1));

return statearr_39313;
});
var cljs$core$async$mix_$_state_machine__37462__auto____1 = (function (state_39254){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_39254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e39314){if((e39314 instanceof Object)){
var ex__37465__auto__ = e39314;
var statearr_39315_39364 = state_39254;
(statearr_39315_39364[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39365 = state_39254;
state_39254 = G__39365;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37462__auto__ = function(state_39254){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37462__auto____1.call(this,state_39254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37462__auto____0;
cljs$core$async$mix_$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37462__auto____1;
return cljs$core$async$mix_$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___39317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37478__auto__ = (function (){var statearr_39316 = f__37477__auto__.call(null);
(statearr_39316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___39317);

return statearr_39316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39317,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31650__auto__ = (((p == null))?null:p);
var m__31651__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31651__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31650__auto__ = (((p == null))?null:p);
var m__31651__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,p,v,ch);
} else {
var m__31651__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39366 = [];
var len__32057__auto___39369 = arguments.length;
var i__32058__auto___39370 = (0);
while(true){
if((i__32058__auto___39370 < len__32057__auto___39369)){
args39366.push((arguments[i__32058__auto___39370]));

var G__39371 = (i__32058__auto___39370 + (1));
i__32058__auto___39370 = G__39371;
continue;
} else {
}
break;
}

var G__39368 = args39366.length;
switch (G__39368) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39366.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31650__auto__ = (((p == null))?null:p);
var m__31651__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,p);
} else {
var m__31651__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31650__auto__ = (((p == null))?null:p);
var m__31651__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31650__auto__)]);
if(!((m__31651__auto__ == null))){
return m__31651__auto__.call(null,p,v);
} else {
var m__31651__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31651__auto____$1 == null))){
return m__31651__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args39374 = [];
var len__32057__auto___39499 = arguments.length;
var i__32058__auto___39500 = (0);
while(true){
if((i__32058__auto___39500 < len__32057__auto___39499)){
args39374.push((arguments[i__32058__auto___39500]));

var G__39501 = (i__32058__auto___39500 + (1));
i__32058__auto___39500 = G__39501;
continue;
} else {
}
break;
}

var G__39376 = args39374.length;
switch (G__39376) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39374.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30987__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30987__auto__)){
return or__30987__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30987__auto__,mults){
return (function (p1__39373_SHARP_){
if(cljs.core.truth_(p1__39373_SHARP_.call(null,topic))){
return p1__39373_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39373_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30987__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39377 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39378){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39378 = meta39378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39379,meta39378__$1){
var self__ = this;
var _39379__$1 = this;
return (new cljs.core.async.t_cljs$core$async39377(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39378__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39379){
var self__ = this;
var _39379__$1 = this;
return self__.meta39378;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39377.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39377.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39378","meta39378",576055231,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39377";

cljs.core.async.t_cljs$core$async39377.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async39377");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39377 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39377(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39378){
return (new cljs.core.async.t_cljs$core$async39377(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39378));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39377(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37476__auto___39503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39503,mults,ensure_mult,p){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___39503,mults,ensure_mult,p){
return (function (state_39451){
var state_val_39452 = (state_39451[(1)]);
if((state_val_39452 === (7))){
var inst_39447 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39453_39504 = state_39451__$1;
(statearr_39453_39504[(2)] = inst_39447);

(statearr_39453_39504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (20))){
var state_39451__$1 = state_39451;
var statearr_39454_39505 = state_39451__$1;
(statearr_39454_39505[(2)] = null);

(statearr_39454_39505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (1))){
var state_39451__$1 = state_39451;
var statearr_39455_39506 = state_39451__$1;
(statearr_39455_39506[(2)] = null);

(statearr_39455_39506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (24))){
var inst_39430 = (state_39451[(7)]);
var inst_39439 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39430);
var state_39451__$1 = state_39451;
var statearr_39456_39507 = state_39451__$1;
(statearr_39456_39507[(2)] = inst_39439);

(statearr_39456_39507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (4))){
var inst_39382 = (state_39451[(8)]);
var inst_39382__$1 = (state_39451[(2)]);
var inst_39383 = (inst_39382__$1 == null);
var state_39451__$1 = (function (){var statearr_39457 = state_39451;
(statearr_39457[(8)] = inst_39382__$1);

return statearr_39457;
})();
if(cljs.core.truth_(inst_39383)){
var statearr_39458_39508 = state_39451__$1;
(statearr_39458_39508[(1)] = (5));

} else {
var statearr_39459_39509 = state_39451__$1;
(statearr_39459_39509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (15))){
var inst_39424 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39460_39510 = state_39451__$1;
(statearr_39460_39510[(2)] = inst_39424);

(statearr_39460_39510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (21))){
var inst_39444 = (state_39451[(2)]);
var state_39451__$1 = (function (){var statearr_39461 = state_39451;
(statearr_39461[(9)] = inst_39444);

return statearr_39461;
})();
var statearr_39462_39511 = state_39451__$1;
(statearr_39462_39511[(2)] = null);

(statearr_39462_39511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (13))){
var inst_39406 = (state_39451[(10)]);
var inst_39408 = cljs.core.chunked_seq_QMARK_.call(null,inst_39406);
var state_39451__$1 = state_39451;
if(inst_39408){
var statearr_39463_39512 = state_39451__$1;
(statearr_39463_39512[(1)] = (16));

} else {
var statearr_39464_39513 = state_39451__$1;
(statearr_39464_39513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (22))){
var inst_39436 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
if(cljs.core.truth_(inst_39436)){
var statearr_39465_39514 = state_39451__$1;
(statearr_39465_39514[(1)] = (23));

} else {
var statearr_39466_39515 = state_39451__$1;
(statearr_39466_39515[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (6))){
var inst_39432 = (state_39451[(11)]);
var inst_39430 = (state_39451[(7)]);
var inst_39382 = (state_39451[(8)]);
var inst_39430__$1 = topic_fn.call(null,inst_39382);
var inst_39431 = cljs.core.deref.call(null,mults);
var inst_39432__$1 = cljs.core.get.call(null,inst_39431,inst_39430__$1);
var state_39451__$1 = (function (){var statearr_39467 = state_39451;
(statearr_39467[(11)] = inst_39432__$1);

(statearr_39467[(7)] = inst_39430__$1);

return statearr_39467;
})();
if(cljs.core.truth_(inst_39432__$1)){
var statearr_39468_39516 = state_39451__$1;
(statearr_39468_39516[(1)] = (19));

} else {
var statearr_39469_39517 = state_39451__$1;
(statearr_39469_39517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (25))){
var inst_39441 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39470_39518 = state_39451__$1;
(statearr_39470_39518[(2)] = inst_39441);

(statearr_39470_39518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (17))){
var inst_39406 = (state_39451[(10)]);
var inst_39415 = cljs.core.first.call(null,inst_39406);
var inst_39416 = cljs.core.async.muxch_STAR_.call(null,inst_39415);
var inst_39417 = cljs.core.async.close_BANG_.call(null,inst_39416);
var inst_39418 = cljs.core.next.call(null,inst_39406);
var inst_39392 = inst_39418;
var inst_39393 = null;
var inst_39394 = (0);
var inst_39395 = (0);
var state_39451__$1 = (function (){var statearr_39471 = state_39451;
(statearr_39471[(12)] = inst_39394);

(statearr_39471[(13)] = inst_39392);

(statearr_39471[(14)] = inst_39395);

(statearr_39471[(15)] = inst_39393);

(statearr_39471[(16)] = inst_39417);

return statearr_39471;
})();
var statearr_39472_39519 = state_39451__$1;
(statearr_39472_39519[(2)] = null);

(statearr_39472_39519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (3))){
var inst_39449 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39451__$1,inst_39449);
} else {
if((state_val_39452 === (12))){
var inst_39426 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39473_39520 = state_39451__$1;
(statearr_39473_39520[(2)] = inst_39426);

(statearr_39473_39520[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (2))){
var state_39451__$1 = state_39451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39451__$1,(4),ch);
} else {
if((state_val_39452 === (23))){
var state_39451__$1 = state_39451;
var statearr_39474_39521 = state_39451__$1;
(statearr_39474_39521[(2)] = null);

(statearr_39474_39521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (19))){
var inst_39432 = (state_39451[(11)]);
var inst_39382 = (state_39451[(8)]);
var inst_39434 = cljs.core.async.muxch_STAR_.call(null,inst_39432);
var state_39451__$1 = state_39451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39451__$1,(22),inst_39434,inst_39382);
} else {
if((state_val_39452 === (11))){
var inst_39392 = (state_39451[(13)]);
var inst_39406 = (state_39451[(10)]);
var inst_39406__$1 = cljs.core.seq.call(null,inst_39392);
var state_39451__$1 = (function (){var statearr_39475 = state_39451;
(statearr_39475[(10)] = inst_39406__$1);

return statearr_39475;
})();
if(inst_39406__$1){
var statearr_39476_39522 = state_39451__$1;
(statearr_39476_39522[(1)] = (13));

} else {
var statearr_39477_39523 = state_39451__$1;
(statearr_39477_39523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (9))){
var inst_39428 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39478_39524 = state_39451__$1;
(statearr_39478_39524[(2)] = inst_39428);

(statearr_39478_39524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (5))){
var inst_39389 = cljs.core.deref.call(null,mults);
var inst_39390 = cljs.core.vals.call(null,inst_39389);
var inst_39391 = cljs.core.seq.call(null,inst_39390);
var inst_39392 = inst_39391;
var inst_39393 = null;
var inst_39394 = (0);
var inst_39395 = (0);
var state_39451__$1 = (function (){var statearr_39479 = state_39451;
(statearr_39479[(12)] = inst_39394);

(statearr_39479[(13)] = inst_39392);

(statearr_39479[(14)] = inst_39395);

(statearr_39479[(15)] = inst_39393);

return statearr_39479;
})();
var statearr_39480_39525 = state_39451__$1;
(statearr_39480_39525[(2)] = null);

(statearr_39480_39525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (14))){
var state_39451__$1 = state_39451;
var statearr_39484_39526 = state_39451__$1;
(statearr_39484_39526[(2)] = null);

(statearr_39484_39526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (16))){
var inst_39406 = (state_39451[(10)]);
var inst_39410 = cljs.core.chunk_first.call(null,inst_39406);
var inst_39411 = cljs.core.chunk_rest.call(null,inst_39406);
var inst_39412 = cljs.core.count.call(null,inst_39410);
var inst_39392 = inst_39411;
var inst_39393 = inst_39410;
var inst_39394 = inst_39412;
var inst_39395 = (0);
var state_39451__$1 = (function (){var statearr_39485 = state_39451;
(statearr_39485[(12)] = inst_39394);

(statearr_39485[(13)] = inst_39392);

(statearr_39485[(14)] = inst_39395);

(statearr_39485[(15)] = inst_39393);

return statearr_39485;
})();
var statearr_39486_39527 = state_39451__$1;
(statearr_39486_39527[(2)] = null);

(statearr_39486_39527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (10))){
var inst_39394 = (state_39451[(12)]);
var inst_39392 = (state_39451[(13)]);
var inst_39395 = (state_39451[(14)]);
var inst_39393 = (state_39451[(15)]);
var inst_39400 = cljs.core._nth.call(null,inst_39393,inst_39395);
var inst_39401 = cljs.core.async.muxch_STAR_.call(null,inst_39400);
var inst_39402 = cljs.core.async.close_BANG_.call(null,inst_39401);
var inst_39403 = (inst_39395 + (1));
var tmp39481 = inst_39394;
var tmp39482 = inst_39392;
var tmp39483 = inst_39393;
var inst_39392__$1 = tmp39482;
var inst_39393__$1 = tmp39483;
var inst_39394__$1 = tmp39481;
var inst_39395__$1 = inst_39403;
var state_39451__$1 = (function (){var statearr_39487 = state_39451;
(statearr_39487[(17)] = inst_39402);

(statearr_39487[(12)] = inst_39394__$1);

(statearr_39487[(13)] = inst_39392__$1);

(statearr_39487[(14)] = inst_39395__$1);

(statearr_39487[(15)] = inst_39393__$1);

return statearr_39487;
})();
var statearr_39488_39528 = state_39451__$1;
(statearr_39488_39528[(2)] = null);

(statearr_39488_39528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (18))){
var inst_39421 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39489_39529 = state_39451__$1;
(statearr_39489_39529[(2)] = inst_39421);

(statearr_39489_39529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (8))){
var inst_39394 = (state_39451[(12)]);
var inst_39395 = (state_39451[(14)]);
var inst_39397 = (inst_39395 < inst_39394);
var inst_39398 = inst_39397;
var state_39451__$1 = state_39451;
if(cljs.core.truth_(inst_39398)){
var statearr_39490_39530 = state_39451__$1;
(statearr_39490_39530[(1)] = (10));

} else {
var statearr_39491_39531 = state_39451__$1;
(statearr_39491_39531[(1)] = (11));

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
});})(c__37476__auto___39503,mults,ensure_mult,p))
;
return ((function (switch__37461__auto__,c__37476__auto___39503,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_39495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39495[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_39495[(1)] = (1));

return statearr_39495;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_39451){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_39451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e39496){if((e39496 instanceof Object)){
var ex__37465__auto__ = e39496;
var statearr_39497_39532 = state_39451;
(statearr_39497_39532[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39533 = state_39451;
state_39451 = G__39533;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_39451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_39451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___39503,mults,ensure_mult,p))
})();
var state__37478__auto__ = (function (){var statearr_39498 = f__37477__auto__.call(null);
(statearr_39498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___39503);

return statearr_39498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39503,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39534 = [];
var len__32057__auto___39537 = arguments.length;
var i__32058__auto___39538 = (0);
while(true){
if((i__32058__auto___39538 < len__32057__auto___39537)){
args39534.push((arguments[i__32058__auto___39538]));

var G__39539 = (i__32058__auto___39538 + (1));
i__32058__auto___39538 = G__39539;
continue;
} else {
}
break;
}

var G__39536 = args39534.length;
switch (G__39536) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39534.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39541 = [];
var len__32057__auto___39544 = arguments.length;
var i__32058__auto___39545 = (0);
while(true){
if((i__32058__auto___39545 < len__32057__auto___39544)){
args39541.push((arguments[i__32058__auto___39545]));

var G__39546 = (i__32058__auto___39545 + (1));
i__32058__auto___39545 = G__39546;
continue;
} else {
}
break;
}

var G__39543 = args39541.length;
switch (G__39543) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39541.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39548 = [];
var len__32057__auto___39619 = arguments.length;
var i__32058__auto___39620 = (0);
while(true){
if((i__32058__auto___39620 < len__32057__auto___39619)){
args39548.push((arguments[i__32058__auto___39620]));

var G__39621 = (i__32058__auto___39620 + (1));
i__32058__auto___39620 = G__39621;
continue;
} else {
}
break;
}

var G__39550 = args39548.length;
switch (G__39550) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39548.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37476__auto___39623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39623,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___39623,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39589){
var state_val_39590 = (state_39589[(1)]);
if((state_val_39590 === (7))){
var state_39589__$1 = state_39589;
var statearr_39591_39624 = state_39589__$1;
(statearr_39591_39624[(2)] = null);

(statearr_39591_39624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (1))){
var state_39589__$1 = state_39589;
var statearr_39592_39625 = state_39589__$1;
(statearr_39592_39625[(2)] = null);

(statearr_39592_39625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (4))){
var inst_39553 = (state_39589[(7)]);
var inst_39555 = (inst_39553 < cnt);
var state_39589__$1 = state_39589;
if(cljs.core.truth_(inst_39555)){
var statearr_39593_39626 = state_39589__$1;
(statearr_39593_39626[(1)] = (6));

} else {
var statearr_39594_39627 = state_39589__$1;
(statearr_39594_39627[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (15))){
var inst_39585 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39595_39628 = state_39589__$1;
(statearr_39595_39628[(2)] = inst_39585);

(statearr_39595_39628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (13))){
var inst_39578 = cljs.core.async.close_BANG_.call(null,out);
var state_39589__$1 = state_39589;
var statearr_39596_39629 = state_39589__$1;
(statearr_39596_39629[(2)] = inst_39578);

(statearr_39596_39629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (6))){
var state_39589__$1 = state_39589;
var statearr_39597_39630 = state_39589__$1;
(statearr_39597_39630[(2)] = null);

(statearr_39597_39630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (3))){
var inst_39587 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39589__$1,inst_39587);
} else {
if((state_val_39590 === (12))){
var inst_39575 = (state_39589[(8)]);
var inst_39575__$1 = (state_39589[(2)]);
var inst_39576 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39575__$1);
var state_39589__$1 = (function (){var statearr_39598 = state_39589;
(statearr_39598[(8)] = inst_39575__$1);

return statearr_39598;
})();
if(cljs.core.truth_(inst_39576)){
var statearr_39599_39631 = state_39589__$1;
(statearr_39599_39631[(1)] = (13));

} else {
var statearr_39600_39632 = state_39589__$1;
(statearr_39600_39632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (2))){
var inst_39552 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39553 = (0);
var state_39589__$1 = (function (){var statearr_39601 = state_39589;
(statearr_39601[(7)] = inst_39553);

(statearr_39601[(9)] = inst_39552);

return statearr_39601;
})();
var statearr_39602_39633 = state_39589__$1;
(statearr_39602_39633[(2)] = null);

(statearr_39602_39633[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (11))){
var inst_39553 = (state_39589[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39589,(10),Object,null,(9));
var inst_39562 = chs__$1.call(null,inst_39553);
var inst_39563 = done.call(null,inst_39553);
var inst_39564 = cljs.core.async.take_BANG_.call(null,inst_39562,inst_39563);
var state_39589__$1 = state_39589;
var statearr_39603_39634 = state_39589__$1;
(statearr_39603_39634[(2)] = inst_39564);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39589__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (9))){
var inst_39553 = (state_39589[(7)]);
var inst_39566 = (state_39589[(2)]);
var inst_39567 = (inst_39553 + (1));
var inst_39553__$1 = inst_39567;
var state_39589__$1 = (function (){var statearr_39604 = state_39589;
(statearr_39604[(10)] = inst_39566);

(statearr_39604[(7)] = inst_39553__$1);

return statearr_39604;
})();
var statearr_39605_39635 = state_39589__$1;
(statearr_39605_39635[(2)] = null);

(statearr_39605_39635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (5))){
var inst_39573 = (state_39589[(2)]);
var state_39589__$1 = (function (){var statearr_39606 = state_39589;
(statearr_39606[(11)] = inst_39573);

return statearr_39606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39589__$1,(12),dchan);
} else {
if((state_val_39590 === (14))){
var inst_39575 = (state_39589[(8)]);
var inst_39580 = cljs.core.apply.call(null,f,inst_39575);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39589__$1,(16),out,inst_39580);
} else {
if((state_val_39590 === (16))){
var inst_39582 = (state_39589[(2)]);
var state_39589__$1 = (function (){var statearr_39607 = state_39589;
(statearr_39607[(12)] = inst_39582);

return statearr_39607;
})();
var statearr_39608_39636 = state_39589__$1;
(statearr_39608_39636[(2)] = null);

(statearr_39608_39636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (10))){
var inst_39557 = (state_39589[(2)]);
var inst_39558 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39589__$1 = (function (){var statearr_39609 = state_39589;
(statearr_39609[(13)] = inst_39557);

return statearr_39609;
})();
var statearr_39610_39637 = state_39589__$1;
(statearr_39610_39637[(2)] = inst_39558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39589__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (8))){
var inst_39571 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39611_39638 = state_39589__$1;
(statearr_39611_39638[(2)] = inst_39571);

(statearr_39611_39638[(1)] = (5));


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
});})(c__37476__auto___39623,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37461__auto__,c__37476__auto___39623,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_39615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39615[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_39615[(1)] = (1));

return statearr_39615;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_39589){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_39589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e39616){if((e39616 instanceof Object)){
var ex__37465__auto__ = e39616;
var statearr_39617_39639 = state_39589;
(statearr_39617_39639[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39640 = state_39589;
state_39589 = G__39640;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_39589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_39589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___39623,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37478__auto__ = (function (){var statearr_39618 = f__37477__auto__.call(null);
(statearr_39618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___39623);

return statearr_39618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39623,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39642 = [];
var len__32057__auto___39698 = arguments.length;
var i__32058__auto___39699 = (0);
while(true){
if((i__32058__auto___39699 < len__32057__auto___39698)){
args39642.push((arguments[i__32058__auto___39699]));

var G__39700 = (i__32058__auto___39699 + (1));
i__32058__auto___39699 = G__39700;
continue;
} else {
}
break;
}

var G__39644 = args39642.length;
switch (G__39644) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39642.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___39702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39702,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___39702,out){
return (function (state_39674){
var state_val_39675 = (state_39674[(1)]);
if((state_val_39675 === (7))){
var inst_39653 = (state_39674[(7)]);
var inst_39654 = (state_39674[(8)]);
var inst_39653__$1 = (state_39674[(2)]);
var inst_39654__$1 = cljs.core.nth.call(null,inst_39653__$1,(0),null);
var inst_39655 = cljs.core.nth.call(null,inst_39653__$1,(1),null);
var inst_39656 = (inst_39654__$1 == null);
var state_39674__$1 = (function (){var statearr_39676 = state_39674;
(statearr_39676[(7)] = inst_39653__$1);

(statearr_39676[(8)] = inst_39654__$1);

(statearr_39676[(9)] = inst_39655);

return statearr_39676;
})();
if(cljs.core.truth_(inst_39656)){
var statearr_39677_39703 = state_39674__$1;
(statearr_39677_39703[(1)] = (8));

} else {
var statearr_39678_39704 = state_39674__$1;
(statearr_39678_39704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (1))){
var inst_39645 = cljs.core.vec.call(null,chs);
var inst_39646 = inst_39645;
var state_39674__$1 = (function (){var statearr_39679 = state_39674;
(statearr_39679[(10)] = inst_39646);

return statearr_39679;
})();
var statearr_39680_39705 = state_39674__$1;
(statearr_39680_39705[(2)] = null);

(statearr_39680_39705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (4))){
var inst_39646 = (state_39674[(10)]);
var state_39674__$1 = state_39674;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39674__$1,(7),inst_39646);
} else {
if((state_val_39675 === (6))){
var inst_39670 = (state_39674[(2)]);
var state_39674__$1 = state_39674;
var statearr_39681_39706 = state_39674__$1;
(statearr_39681_39706[(2)] = inst_39670);

(statearr_39681_39706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (3))){
var inst_39672 = (state_39674[(2)]);
var state_39674__$1 = state_39674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39674__$1,inst_39672);
} else {
if((state_val_39675 === (2))){
var inst_39646 = (state_39674[(10)]);
var inst_39648 = cljs.core.count.call(null,inst_39646);
var inst_39649 = (inst_39648 > (0));
var state_39674__$1 = state_39674;
if(cljs.core.truth_(inst_39649)){
var statearr_39683_39707 = state_39674__$1;
(statearr_39683_39707[(1)] = (4));

} else {
var statearr_39684_39708 = state_39674__$1;
(statearr_39684_39708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (11))){
var inst_39646 = (state_39674[(10)]);
var inst_39663 = (state_39674[(2)]);
var tmp39682 = inst_39646;
var inst_39646__$1 = tmp39682;
var state_39674__$1 = (function (){var statearr_39685 = state_39674;
(statearr_39685[(10)] = inst_39646__$1);

(statearr_39685[(11)] = inst_39663);

return statearr_39685;
})();
var statearr_39686_39709 = state_39674__$1;
(statearr_39686_39709[(2)] = null);

(statearr_39686_39709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (9))){
var inst_39654 = (state_39674[(8)]);
var state_39674__$1 = state_39674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39674__$1,(11),out,inst_39654);
} else {
if((state_val_39675 === (5))){
var inst_39668 = cljs.core.async.close_BANG_.call(null,out);
var state_39674__$1 = state_39674;
var statearr_39687_39710 = state_39674__$1;
(statearr_39687_39710[(2)] = inst_39668);

(statearr_39687_39710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (10))){
var inst_39666 = (state_39674[(2)]);
var state_39674__$1 = state_39674;
var statearr_39688_39711 = state_39674__$1;
(statearr_39688_39711[(2)] = inst_39666);

(statearr_39688_39711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39675 === (8))){
var inst_39653 = (state_39674[(7)]);
var inst_39654 = (state_39674[(8)]);
var inst_39655 = (state_39674[(9)]);
var inst_39646 = (state_39674[(10)]);
var inst_39658 = (function (){var cs = inst_39646;
var vec__39651 = inst_39653;
var v = inst_39654;
var c = inst_39655;
return ((function (cs,vec__39651,v,c,inst_39653,inst_39654,inst_39655,inst_39646,state_val_39675,c__37476__auto___39702,out){
return (function (p1__39641_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39641_SHARP_);
});
;})(cs,vec__39651,v,c,inst_39653,inst_39654,inst_39655,inst_39646,state_val_39675,c__37476__auto___39702,out))
})();
var inst_39659 = cljs.core.filterv.call(null,inst_39658,inst_39646);
var inst_39646__$1 = inst_39659;
var state_39674__$1 = (function (){var statearr_39689 = state_39674;
(statearr_39689[(10)] = inst_39646__$1);

return statearr_39689;
})();
var statearr_39690_39712 = state_39674__$1;
(statearr_39690_39712[(2)] = null);

(statearr_39690_39712[(1)] = (2));


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
});})(c__37476__auto___39702,out))
;
return ((function (switch__37461__auto__,c__37476__auto___39702,out){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_39694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39694[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_39694[(1)] = (1));

return statearr_39694;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_39674){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_39674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e39695){if((e39695 instanceof Object)){
var ex__37465__auto__ = e39695;
var statearr_39696_39713 = state_39674;
(statearr_39696_39713[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39714 = state_39674;
state_39674 = G__39714;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_39674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_39674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___39702,out))
})();
var state__37478__auto__ = (function (){var statearr_39697 = f__37477__auto__.call(null);
(statearr_39697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___39702);

return statearr_39697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39702,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39715 = [];
var len__32057__auto___39764 = arguments.length;
var i__32058__auto___39765 = (0);
while(true){
if((i__32058__auto___39765 < len__32057__auto___39764)){
args39715.push((arguments[i__32058__auto___39765]));

var G__39766 = (i__32058__auto___39765 + (1));
i__32058__auto___39765 = G__39766;
continue;
} else {
}
break;
}

var G__39717 = args39715.length;
switch (G__39717) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39715.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___39768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39768,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___39768,out){
return (function (state_39741){
var state_val_39742 = (state_39741[(1)]);
if((state_val_39742 === (7))){
var inst_39723 = (state_39741[(7)]);
var inst_39723__$1 = (state_39741[(2)]);
var inst_39724 = (inst_39723__$1 == null);
var inst_39725 = cljs.core.not.call(null,inst_39724);
var state_39741__$1 = (function (){var statearr_39743 = state_39741;
(statearr_39743[(7)] = inst_39723__$1);

return statearr_39743;
})();
if(inst_39725){
var statearr_39744_39769 = state_39741__$1;
(statearr_39744_39769[(1)] = (8));

} else {
var statearr_39745_39770 = state_39741__$1;
(statearr_39745_39770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (1))){
var inst_39718 = (0);
var state_39741__$1 = (function (){var statearr_39746 = state_39741;
(statearr_39746[(8)] = inst_39718);

return statearr_39746;
})();
var statearr_39747_39771 = state_39741__$1;
(statearr_39747_39771[(2)] = null);

(statearr_39747_39771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (4))){
var state_39741__$1 = state_39741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39741__$1,(7),ch);
} else {
if((state_val_39742 === (6))){
var inst_39736 = (state_39741[(2)]);
var state_39741__$1 = state_39741;
var statearr_39748_39772 = state_39741__$1;
(statearr_39748_39772[(2)] = inst_39736);

(statearr_39748_39772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (3))){
var inst_39738 = (state_39741[(2)]);
var inst_39739 = cljs.core.async.close_BANG_.call(null,out);
var state_39741__$1 = (function (){var statearr_39749 = state_39741;
(statearr_39749[(9)] = inst_39738);

return statearr_39749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39741__$1,inst_39739);
} else {
if((state_val_39742 === (2))){
var inst_39718 = (state_39741[(8)]);
var inst_39720 = (inst_39718 < n);
var state_39741__$1 = state_39741;
if(cljs.core.truth_(inst_39720)){
var statearr_39750_39773 = state_39741__$1;
(statearr_39750_39773[(1)] = (4));

} else {
var statearr_39751_39774 = state_39741__$1;
(statearr_39751_39774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (11))){
var inst_39718 = (state_39741[(8)]);
var inst_39728 = (state_39741[(2)]);
var inst_39729 = (inst_39718 + (1));
var inst_39718__$1 = inst_39729;
var state_39741__$1 = (function (){var statearr_39752 = state_39741;
(statearr_39752[(10)] = inst_39728);

(statearr_39752[(8)] = inst_39718__$1);

return statearr_39752;
})();
var statearr_39753_39775 = state_39741__$1;
(statearr_39753_39775[(2)] = null);

(statearr_39753_39775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (9))){
var state_39741__$1 = state_39741;
var statearr_39754_39776 = state_39741__$1;
(statearr_39754_39776[(2)] = null);

(statearr_39754_39776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (5))){
var state_39741__$1 = state_39741;
var statearr_39755_39777 = state_39741__$1;
(statearr_39755_39777[(2)] = null);

(statearr_39755_39777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (10))){
var inst_39733 = (state_39741[(2)]);
var state_39741__$1 = state_39741;
var statearr_39756_39778 = state_39741__$1;
(statearr_39756_39778[(2)] = inst_39733);

(statearr_39756_39778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39742 === (8))){
var inst_39723 = (state_39741[(7)]);
var state_39741__$1 = state_39741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39741__$1,(11),out,inst_39723);
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
});})(c__37476__auto___39768,out))
;
return ((function (switch__37461__auto__,c__37476__auto___39768,out){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_39760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39760[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_39760[(1)] = (1));

return statearr_39760;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_39741){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_39741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e39761){if((e39761 instanceof Object)){
var ex__37465__auto__ = e39761;
var statearr_39762_39779 = state_39741;
(statearr_39762_39779[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39780 = state_39741;
state_39741 = G__39780;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_39741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_39741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___39768,out))
})();
var state__37478__auto__ = (function (){var statearr_39763 = f__37477__auto__.call(null);
(statearr_39763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___39768);

return statearr_39763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39768,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39788 = (function (map_LT_,f,ch,meta39789){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39789 = meta39789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39790,meta39789__$1){
var self__ = this;
var _39790__$1 = this;
return (new cljs.core.async.t_cljs$core$async39788(self__.map_LT_,self__.f,self__.ch,meta39789__$1));
});

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39790){
var self__ = this;
var _39790__$1 = this;
return self__.meta39789;
});


cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39791 = (function (map_LT_,f,ch,meta39789,_,fn1,meta39792){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39789 = meta39789;
this._ = _;
this.fn1 = fn1;
this.meta39792 = meta39792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39793,meta39792__$1){
var self__ = this;
var _39793__$1 = this;
return (new cljs.core.async.t_cljs$core$async39791(self__.map_LT_,self__.f,self__.ch,self__.meta39789,self__._,self__.fn1,meta39792__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39793){
var self__ = this;
var _39793__$1 = this;
return self__.meta39792;
});})(___$1))
;


cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39781_SHARP_){
return f1.call(null,(((p1__39781_SHARP_ == null))?null:self__.f.call(null,p1__39781_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39791.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39789","meta39789",1294407054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39788","cljs.core.async/t_cljs$core$async39788",1547023428,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39792","meta39792",-1866763133,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39791";

cljs.core.async.t_cljs$core$async39791.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async39791");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39791 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39791(map_LT___$1,f__$1,ch__$1,meta39789__$1,___$2,fn1__$1,meta39792){
return (new cljs.core.async.t_cljs$core$async39791(map_LT___$1,f__$1,ch__$1,meta39789__$1,___$2,fn1__$1,meta39792));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39791(self__.map_LT_,self__.f,self__.ch,self__.meta39789,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30975__auto__ = ret;
if(cljs.core.truth_(and__30975__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30975__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39789","meta39789",1294407054,null)], null);
});

cljs.core.async.t_cljs$core$async39788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39788";

cljs.core.async.t_cljs$core$async39788.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async39788");
});

cljs.core.async.__GT_t_cljs$core$async39788 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39788(map_LT___$1,f__$1,ch__$1,meta39789){
return (new cljs.core.async.t_cljs$core$async39788(map_LT___$1,f__$1,ch__$1,meta39789));
});

}

return (new cljs.core.async.t_cljs$core$async39788(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39797 = (function (map_GT_,f,ch,meta39798){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39798 = meta39798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39799,meta39798__$1){
var self__ = this;
var _39799__$1 = this;
return (new cljs.core.async.t_cljs$core$async39797(self__.map_GT_,self__.f,self__.ch,meta39798__$1));
});

cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39799){
var self__ = this;
var _39799__$1 = this;
return self__.meta39798;
});


cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39798","meta39798",-235460324,null)], null);
});

cljs.core.async.t_cljs$core$async39797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39797";

cljs.core.async.t_cljs$core$async39797.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async39797");
});

cljs.core.async.__GT_t_cljs$core$async39797 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39797(map_GT___$1,f__$1,ch__$1,meta39798){
return (new cljs.core.async.t_cljs$core$async39797(map_GT___$1,f__$1,ch__$1,meta39798));
});

}

return (new cljs.core.async.t_cljs$core$async39797(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39803 = (function (filter_GT_,p,ch,meta39804){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39804 = meta39804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39805,meta39804__$1){
var self__ = this;
var _39805__$1 = this;
return (new cljs.core.async.t_cljs$core$async39803(self__.filter_GT_,self__.p,self__.ch,meta39804__$1));
});

cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39805){
var self__ = this;
var _39805__$1 = this;
return self__.meta39804;
});


cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39804","meta39804",-1256963653,null)], null);
});

cljs.core.async.t_cljs$core$async39803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39803";

cljs.core.async.t_cljs$core$async39803.cljs$lang$ctorPrWriter = (function (this__31593__auto__,writer__31594__auto__,opt__31595__auto__){
return cljs.core._write.call(null,writer__31594__auto__,"cljs.core.async/t_cljs$core$async39803");
});

cljs.core.async.__GT_t_cljs$core$async39803 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39803(filter_GT___$1,p__$1,ch__$1,meta39804){
return (new cljs.core.async.t_cljs$core$async39803(filter_GT___$1,p__$1,ch__$1,meta39804));
});

}

return (new cljs.core.async.t_cljs$core$async39803(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39806 = [];
var len__32057__auto___39850 = arguments.length;
var i__32058__auto___39851 = (0);
while(true){
if((i__32058__auto___39851 < len__32057__auto___39850)){
args39806.push((arguments[i__32058__auto___39851]));

var G__39852 = (i__32058__auto___39851 + (1));
i__32058__auto___39851 = G__39852;
continue;
} else {
}
break;
}

var G__39808 = args39806.length;
switch (G__39808) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39806.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___39854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___39854,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___39854,out){
return (function (state_39829){
var state_val_39830 = (state_39829[(1)]);
if((state_val_39830 === (7))){
var inst_39825 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39831_39855 = state_39829__$1;
(statearr_39831_39855[(2)] = inst_39825);

(statearr_39831_39855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (1))){
var state_39829__$1 = state_39829;
var statearr_39832_39856 = state_39829__$1;
(statearr_39832_39856[(2)] = null);

(statearr_39832_39856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (4))){
var inst_39811 = (state_39829[(7)]);
var inst_39811__$1 = (state_39829[(2)]);
var inst_39812 = (inst_39811__$1 == null);
var state_39829__$1 = (function (){var statearr_39833 = state_39829;
(statearr_39833[(7)] = inst_39811__$1);

return statearr_39833;
})();
if(cljs.core.truth_(inst_39812)){
var statearr_39834_39857 = state_39829__$1;
(statearr_39834_39857[(1)] = (5));

} else {
var statearr_39835_39858 = state_39829__$1;
(statearr_39835_39858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (6))){
var inst_39811 = (state_39829[(7)]);
var inst_39816 = p.call(null,inst_39811);
var state_39829__$1 = state_39829;
if(cljs.core.truth_(inst_39816)){
var statearr_39836_39859 = state_39829__$1;
(statearr_39836_39859[(1)] = (8));

} else {
var statearr_39837_39860 = state_39829__$1;
(statearr_39837_39860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (3))){
var inst_39827 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39829__$1,inst_39827);
} else {
if((state_val_39830 === (2))){
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39829__$1,(4),ch);
} else {
if((state_val_39830 === (11))){
var inst_39819 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39838_39861 = state_39829__$1;
(statearr_39838_39861[(2)] = inst_39819);

(statearr_39838_39861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (9))){
var state_39829__$1 = state_39829;
var statearr_39839_39862 = state_39829__$1;
(statearr_39839_39862[(2)] = null);

(statearr_39839_39862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (5))){
var inst_39814 = cljs.core.async.close_BANG_.call(null,out);
var state_39829__$1 = state_39829;
var statearr_39840_39863 = state_39829__$1;
(statearr_39840_39863[(2)] = inst_39814);

(statearr_39840_39863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (10))){
var inst_39822 = (state_39829[(2)]);
var state_39829__$1 = (function (){var statearr_39841 = state_39829;
(statearr_39841[(8)] = inst_39822);

return statearr_39841;
})();
var statearr_39842_39864 = state_39829__$1;
(statearr_39842_39864[(2)] = null);

(statearr_39842_39864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (8))){
var inst_39811 = (state_39829[(7)]);
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39829__$1,(11),out,inst_39811);
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
});})(c__37476__auto___39854,out))
;
return ((function (switch__37461__auto__,c__37476__auto___39854,out){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_39846 = [null,null,null,null,null,null,null,null,null];
(statearr_39846[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_39846[(1)] = (1));

return statearr_39846;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_39829){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_39829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e39847){if((e39847 instanceof Object)){
var ex__37465__auto__ = e39847;
var statearr_39848_39865 = state_39829;
(statearr_39848_39865[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39866 = state_39829;
state_39829 = G__39866;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_39829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_39829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___39854,out))
})();
var state__37478__auto__ = (function (){var statearr_39849 = f__37477__auto__.call(null);
(statearr_39849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___39854);

return statearr_39849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___39854,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39867 = [];
var len__32057__auto___39870 = arguments.length;
var i__32058__auto___39871 = (0);
while(true){
if((i__32058__auto___39871 < len__32057__auto___39870)){
args39867.push((arguments[i__32058__auto___39871]));

var G__39872 = (i__32058__auto___39871 + (1));
i__32058__auto___39871 = G__39872;
continue;
} else {
}
break;
}

var G__39869 = args39867.length;
switch (G__39869) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39867.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto__){
return (function (state_40039){
var state_val_40040 = (state_40039[(1)]);
if((state_val_40040 === (7))){
var inst_40035 = (state_40039[(2)]);
var state_40039__$1 = state_40039;
var statearr_40041_40082 = state_40039__$1;
(statearr_40041_40082[(2)] = inst_40035);

(statearr_40041_40082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (20))){
var inst_40005 = (state_40039[(7)]);
var inst_40016 = (state_40039[(2)]);
var inst_40017 = cljs.core.next.call(null,inst_40005);
var inst_39991 = inst_40017;
var inst_39992 = null;
var inst_39993 = (0);
var inst_39994 = (0);
var state_40039__$1 = (function (){var statearr_40042 = state_40039;
(statearr_40042[(8)] = inst_39992);

(statearr_40042[(9)] = inst_40016);

(statearr_40042[(10)] = inst_39991);

(statearr_40042[(11)] = inst_39993);

(statearr_40042[(12)] = inst_39994);

return statearr_40042;
})();
var statearr_40043_40083 = state_40039__$1;
(statearr_40043_40083[(2)] = null);

(statearr_40043_40083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (1))){
var state_40039__$1 = state_40039;
var statearr_40044_40084 = state_40039__$1;
(statearr_40044_40084[(2)] = null);

(statearr_40044_40084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (4))){
var inst_39980 = (state_40039[(13)]);
var inst_39980__$1 = (state_40039[(2)]);
var inst_39981 = (inst_39980__$1 == null);
var state_40039__$1 = (function (){var statearr_40045 = state_40039;
(statearr_40045[(13)] = inst_39980__$1);

return statearr_40045;
})();
if(cljs.core.truth_(inst_39981)){
var statearr_40046_40085 = state_40039__$1;
(statearr_40046_40085[(1)] = (5));

} else {
var statearr_40047_40086 = state_40039__$1;
(statearr_40047_40086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (15))){
var state_40039__$1 = state_40039;
var statearr_40051_40087 = state_40039__$1;
(statearr_40051_40087[(2)] = null);

(statearr_40051_40087[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (21))){
var state_40039__$1 = state_40039;
var statearr_40052_40088 = state_40039__$1;
(statearr_40052_40088[(2)] = null);

(statearr_40052_40088[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (13))){
var inst_39992 = (state_40039[(8)]);
var inst_39991 = (state_40039[(10)]);
var inst_39993 = (state_40039[(11)]);
var inst_39994 = (state_40039[(12)]);
var inst_40001 = (state_40039[(2)]);
var inst_40002 = (inst_39994 + (1));
var tmp40048 = inst_39992;
var tmp40049 = inst_39991;
var tmp40050 = inst_39993;
var inst_39991__$1 = tmp40049;
var inst_39992__$1 = tmp40048;
var inst_39993__$1 = tmp40050;
var inst_39994__$1 = inst_40002;
var state_40039__$1 = (function (){var statearr_40053 = state_40039;
(statearr_40053[(8)] = inst_39992__$1);

(statearr_40053[(10)] = inst_39991__$1);

(statearr_40053[(11)] = inst_39993__$1);

(statearr_40053[(14)] = inst_40001);

(statearr_40053[(12)] = inst_39994__$1);

return statearr_40053;
})();
var statearr_40054_40089 = state_40039__$1;
(statearr_40054_40089[(2)] = null);

(statearr_40054_40089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (22))){
var state_40039__$1 = state_40039;
var statearr_40055_40090 = state_40039__$1;
(statearr_40055_40090[(2)] = null);

(statearr_40055_40090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (6))){
var inst_39980 = (state_40039[(13)]);
var inst_39989 = f.call(null,inst_39980);
var inst_39990 = cljs.core.seq.call(null,inst_39989);
var inst_39991 = inst_39990;
var inst_39992 = null;
var inst_39993 = (0);
var inst_39994 = (0);
var state_40039__$1 = (function (){var statearr_40056 = state_40039;
(statearr_40056[(8)] = inst_39992);

(statearr_40056[(10)] = inst_39991);

(statearr_40056[(11)] = inst_39993);

(statearr_40056[(12)] = inst_39994);

return statearr_40056;
})();
var statearr_40057_40091 = state_40039__$1;
(statearr_40057_40091[(2)] = null);

(statearr_40057_40091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (17))){
var inst_40005 = (state_40039[(7)]);
var inst_40009 = cljs.core.chunk_first.call(null,inst_40005);
var inst_40010 = cljs.core.chunk_rest.call(null,inst_40005);
var inst_40011 = cljs.core.count.call(null,inst_40009);
var inst_39991 = inst_40010;
var inst_39992 = inst_40009;
var inst_39993 = inst_40011;
var inst_39994 = (0);
var state_40039__$1 = (function (){var statearr_40058 = state_40039;
(statearr_40058[(8)] = inst_39992);

(statearr_40058[(10)] = inst_39991);

(statearr_40058[(11)] = inst_39993);

(statearr_40058[(12)] = inst_39994);

return statearr_40058;
})();
var statearr_40059_40092 = state_40039__$1;
(statearr_40059_40092[(2)] = null);

(statearr_40059_40092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (3))){
var inst_40037 = (state_40039[(2)]);
var state_40039__$1 = state_40039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40039__$1,inst_40037);
} else {
if((state_val_40040 === (12))){
var inst_40025 = (state_40039[(2)]);
var state_40039__$1 = state_40039;
var statearr_40060_40093 = state_40039__$1;
(statearr_40060_40093[(2)] = inst_40025);

(statearr_40060_40093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (2))){
var state_40039__$1 = state_40039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40039__$1,(4),in$);
} else {
if((state_val_40040 === (23))){
var inst_40033 = (state_40039[(2)]);
var state_40039__$1 = state_40039;
var statearr_40061_40094 = state_40039__$1;
(statearr_40061_40094[(2)] = inst_40033);

(statearr_40061_40094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (19))){
var inst_40020 = (state_40039[(2)]);
var state_40039__$1 = state_40039;
var statearr_40062_40095 = state_40039__$1;
(statearr_40062_40095[(2)] = inst_40020);

(statearr_40062_40095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (11))){
var inst_40005 = (state_40039[(7)]);
var inst_39991 = (state_40039[(10)]);
var inst_40005__$1 = cljs.core.seq.call(null,inst_39991);
var state_40039__$1 = (function (){var statearr_40063 = state_40039;
(statearr_40063[(7)] = inst_40005__$1);

return statearr_40063;
})();
if(inst_40005__$1){
var statearr_40064_40096 = state_40039__$1;
(statearr_40064_40096[(1)] = (14));

} else {
var statearr_40065_40097 = state_40039__$1;
(statearr_40065_40097[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (9))){
var inst_40027 = (state_40039[(2)]);
var inst_40028 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40039__$1 = (function (){var statearr_40066 = state_40039;
(statearr_40066[(15)] = inst_40027);

return statearr_40066;
})();
if(cljs.core.truth_(inst_40028)){
var statearr_40067_40098 = state_40039__$1;
(statearr_40067_40098[(1)] = (21));

} else {
var statearr_40068_40099 = state_40039__$1;
(statearr_40068_40099[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (5))){
var inst_39983 = cljs.core.async.close_BANG_.call(null,out);
var state_40039__$1 = state_40039;
var statearr_40069_40100 = state_40039__$1;
(statearr_40069_40100[(2)] = inst_39983);

(statearr_40069_40100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (14))){
var inst_40005 = (state_40039[(7)]);
var inst_40007 = cljs.core.chunked_seq_QMARK_.call(null,inst_40005);
var state_40039__$1 = state_40039;
if(inst_40007){
var statearr_40070_40101 = state_40039__$1;
(statearr_40070_40101[(1)] = (17));

} else {
var statearr_40071_40102 = state_40039__$1;
(statearr_40071_40102[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (16))){
var inst_40023 = (state_40039[(2)]);
var state_40039__$1 = state_40039;
var statearr_40072_40103 = state_40039__$1;
(statearr_40072_40103[(2)] = inst_40023);

(statearr_40072_40103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40040 === (10))){
var inst_39992 = (state_40039[(8)]);
var inst_39994 = (state_40039[(12)]);
var inst_39999 = cljs.core._nth.call(null,inst_39992,inst_39994);
var state_40039__$1 = state_40039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40039__$1,(13),out,inst_39999);
} else {
if((state_val_40040 === (18))){
var inst_40005 = (state_40039[(7)]);
var inst_40014 = cljs.core.first.call(null,inst_40005);
var state_40039__$1 = state_40039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40039__$1,(20),out,inst_40014);
} else {
if((state_val_40040 === (8))){
var inst_39993 = (state_40039[(11)]);
var inst_39994 = (state_40039[(12)]);
var inst_39996 = (inst_39994 < inst_39993);
var inst_39997 = inst_39996;
var state_40039__$1 = state_40039;
if(cljs.core.truth_(inst_39997)){
var statearr_40073_40104 = state_40039__$1;
(statearr_40073_40104[(1)] = (10));

} else {
var statearr_40074_40105 = state_40039__$1;
(statearr_40074_40105[(1)] = (11));

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
});})(c__37476__auto__))
;
return ((function (switch__37461__auto__,c__37476__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37462__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37462__auto____0 = (function (){
var statearr_40078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40078[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37462__auto__);

(statearr_40078[(1)] = (1));

return statearr_40078;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37462__auto____1 = (function (state_40039){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40079){if((e40079 instanceof Object)){
var ex__37465__auto__ = e40079;
var statearr_40080_40106 = state_40039;
(statearr_40080_40106[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40107 = state_40039;
state_40039 = G__40107;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37462__auto__ = function(state_40039){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37462__auto____1.call(this,state_40039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37462__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37462__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_40081 = f__37477__auto__.call(null);
(statearr_40081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto__);

return statearr_40081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40108 = [];
var len__32057__auto___40111 = arguments.length;
var i__32058__auto___40112 = (0);
while(true){
if((i__32058__auto___40112 < len__32057__auto___40111)){
args40108.push((arguments[i__32058__auto___40112]));

var G__40113 = (i__32058__auto___40112 + (1));
i__32058__auto___40112 = G__40113;
continue;
} else {
}
break;
}

var G__40110 = args40108.length;
switch (G__40110) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40108.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args40115 = [];
var len__32057__auto___40118 = arguments.length;
var i__32058__auto___40119 = (0);
while(true){
if((i__32058__auto___40119 < len__32057__auto___40118)){
args40115.push((arguments[i__32058__auto___40119]));

var G__40120 = (i__32058__auto___40119 + (1));
i__32058__auto___40119 = G__40120;
continue;
} else {
}
break;
}

var G__40117 = args40115.length;
switch (G__40117) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40115.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args40122 = [];
var len__32057__auto___40173 = arguments.length;
var i__32058__auto___40174 = (0);
while(true){
if((i__32058__auto___40174 < len__32057__auto___40173)){
args40122.push((arguments[i__32058__auto___40174]));

var G__40175 = (i__32058__auto___40174 + (1));
i__32058__auto___40174 = G__40175;
continue;
} else {
}
break;
}

var G__40124 = args40122.length;
switch (G__40124) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40122.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___40177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___40177,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___40177,out){
return (function (state_40148){
var state_val_40149 = (state_40148[(1)]);
if((state_val_40149 === (7))){
var inst_40143 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40150_40178 = state_40148__$1;
(statearr_40150_40178[(2)] = inst_40143);

(statearr_40150_40178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (1))){
var inst_40125 = null;
var state_40148__$1 = (function (){var statearr_40151 = state_40148;
(statearr_40151[(7)] = inst_40125);

return statearr_40151;
})();
var statearr_40152_40179 = state_40148__$1;
(statearr_40152_40179[(2)] = null);

(statearr_40152_40179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (4))){
var inst_40128 = (state_40148[(8)]);
var inst_40128__$1 = (state_40148[(2)]);
var inst_40129 = (inst_40128__$1 == null);
var inst_40130 = cljs.core.not.call(null,inst_40129);
var state_40148__$1 = (function (){var statearr_40153 = state_40148;
(statearr_40153[(8)] = inst_40128__$1);

return statearr_40153;
})();
if(inst_40130){
var statearr_40154_40180 = state_40148__$1;
(statearr_40154_40180[(1)] = (5));

} else {
var statearr_40155_40181 = state_40148__$1;
(statearr_40155_40181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (6))){
var state_40148__$1 = state_40148;
var statearr_40156_40182 = state_40148__$1;
(statearr_40156_40182[(2)] = null);

(statearr_40156_40182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (3))){
var inst_40145 = (state_40148[(2)]);
var inst_40146 = cljs.core.async.close_BANG_.call(null,out);
var state_40148__$1 = (function (){var statearr_40157 = state_40148;
(statearr_40157[(9)] = inst_40145);

return statearr_40157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40148__$1,inst_40146);
} else {
if((state_val_40149 === (2))){
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40148__$1,(4),ch);
} else {
if((state_val_40149 === (11))){
var inst_40128 = (state_40148[(8)]);
var inst_40137 = (state_40148[(2)]);
var inst_40125 = inst_40128;
var state_40148__$1 = (function (){var statearr_40158 = state_40148;
(statearr_40158[(7)] = inst_40125);

(statearr_40158[(10)] = inst_40137);

return statearr_40158;
})();
var statearr_40159_40183 = state_40148__$1;
(statearr_40159_40183[(2)] = null);

(statearr_40159_40183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (9))){
var inst_40128 = (state_40148[(8)]);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40148__$1,(11),out,inst_40128);
} else {
if((state_val_40149 === (5))){
var inst_40128 = (state_40148[(8)]);
var inst_40125 = (state_40148[(7)]);
var inst_40132 = cljs.core._EQ_.call(null,inst_40128,inst_40125);
var state_40148__$1 = state_40148;
if(inst_40132){
var statearr_40161_40184 = state_40148__$1;
(statearr_40161_40184[(1)] = (8));

} else {
var statearr_40162_40185 = state_40148__$1;
(statearr_40162_40185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (10))){
var inst_40140 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40163_40186 = state_40148__$1;
(statearr_40163_40186[(2)] = inst_40140);

(statearr_40163_40186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (8))){
var inst_40125 = (state_40148[(7)]);
var tmp40160 = inst_40125;
var inst_40125__$1 = tmp40160;
var state_40148__$1 = (function (){var statearr_40164 = state_40148;
(statearr_40164[(7)] = inst_40125__$1);

return statearr_40164;
})();
var statearr_40165_40187 = state_40148__$1;
(statearr_40165_40187[(2)] = null);

(statearr_40165_40187[(1)] = (2));


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
});})(c__37476__auto___40177,out))
;
return ((function (switch__37461__auto__,c__37476__auto___40177,out){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_40169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40169[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_40169[(1)] = (1));

return statearr_40169;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_40148){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40170){if((e40170 instanceof Object)){
var ex__37465__auto__ = e40170;
var statearr_40171_40188 = state_40148;
(statearr_40171_40188[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40189 = state_40148;
state_40148 = G__40189;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_40148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_40148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___40177,out))
})();
var state__37478__auto__ = (function (){var statearr_40172 = f__37477__auto__.call(null);
(statearr_40172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___40177);

return statearr_40172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___40177,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40190 = [];
var len__32057__auto___40260 = arguments.length;
var i__32058__auto___40261 = (0);
while(true){
if((i__32058__auto___40261 < len__32057__auto___40260)){
args40190.push((arguments[i__32058__auto___40261]));

var G__40262 = (i__32058__auto___40261 + (1));
i__32058__auto___40261 = G__40262;
continue;
} else {
}
break;
}

var G__40192 = args40190.length;
switch (G__40192) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40190.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___40264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___40264,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___40264,out){
return (function (state_40230){
var state_val_40231 = (state_40230[(1)]);
if((state_val_40231 === (7))){
var inst_40226 = (state_40230[(2)]);
var state_40230__$1 = state_40230;
var statearr_40232_40265 = state_40230__$1;
(statearr_40232_40265[(2)] = inst_40226);

(statearr_40232_40265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (1))){
var inst_40193 = (new Array(n));
var inst_40194 = inst_40193;
var inst_40195 = (0);
var state_40230__$1 = (function (){var statearr_40233 = state_40230;
(statearr_40233[(7)] = inst_40195);

(statearr_40233[(8)] = inst_40194);

return statearr_40233;
})();
var statearr_40234_40266 = state_40230__$1;
(statearr_40234_40266[(2)] = null);

(statearr_40234_40266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (4))){
var inst_40198 = (state_40230[(9)]);
var inst_40198__$1 = (state_40230[(2)]);
var inst_40199 = (inst_40198__$1 == null);
var inst_40200 = cljs.core.not.call(null,inst_40199);
var state_40230__$1 = (function (){var statearr_40235 = state_40230;
(statearr_40235[(9)] = inst_40198__$1);

return statearr_40235;
})();
if(inst_40200){
var statearr_40236_40267 = state_40230__$1;
(statearr_40236_40267[(1)] = (5));

} else {
var statearr_40237_40268 = state_40230__$1;
(statearr_40237_40268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (15))){
var inst_40220 = (state_40230[(2)]);
var state_40230__$1 = state_40230;
var statearr_40238_40269 = state_40230__$1;
(statearr_40238_40269[(2)] = inst_40220);

(statearr_40238_40269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (13))){
var state_40230__$1 = state_40230;
var statearr_40239_40270 = state_40230__$1;
(statearr_40239_40270[(2)] = null);

(statearr_40239_40270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (6))){
var inst_40195 = (state_40230[(7)]);
var inst_40216 = (inst_40195 > (0));
var state_40230__$1 = state_40230;
if(cljs.core.truth_(inst_40216)){
var statearr_40240_40271 = state_40230__$1;
(statearr_40240_40271[(1)] = (12));

} else {
var statearr_40241_40272 = state_40230__$1;
(statearr_40241_40272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (3))){
var inst_40228 = (state_40230[(2)]);
var state_40230__$1 = state_40230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40230__$1,inst_40228);
} else {
if((state_val_40231 === (12))){
var inst_40194 = (state_40230[(8)]);
var inst_40218 = cljs.core.vec.call(null,inst_40194);
var state_40230__$1 = state_40230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40230__$1,(15),out,inst_40218);
} else {
if((state_val_40231 === (2))){
var state_40230__$1 = state_40230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40230__$1,(4),ch);
} else {
if((state_val_40231 === (11))){
var inst_40210 = (state_40230[(2)]);
var inst_40211 = (new Array(n));
var inst_40194 = inst_40211;
var inst_40195 = (0);
var state_40230__$1 = (function (){var statearr_40242 = state_40230;
(statearr_40242[(7)] = inst_40195);

(statearr_40242[(8)] = inst_40194);

(statearr_40242[(10)] = inst_40210);

return statearr_40242;
})();
var statearr_40243_40273 = state_40230__$1;
(statearr_40243_40273[(2)] = null);

(statearr_40243_40273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (9))){
var inst_40194 = (state_40230[(8)]);
var inst_40208 = cljs.core.vec.call(null,inst_40194);
var state_40230__$1 = state_40230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40230__$1,(11),out,inst_40208);
} else {
if((state_val_40231 === (5))){
var inst_40203 = (state_40230[(11)]);
var inst_40195 = (state_40230[(7)]);
var inst_40198 = (state_40230[(9)]);
var inst_40194 = (state_40230[(8)]);
var inst_40202 = (inst_40194[inst_40195] = inst_40198);
var inst_40203__$1 = (inst_40195 + (1));
var inst_40204 = (inst_40203__$1 < n);
var state_40230__$1 = (function (){var statearr_40244 = state_40230;
(statearr_40244[(11)] = inst_40203__$1);

(statearr_40244[(12)] = inst_40202);

return statearr_40244;
})();
if(cljs.core.truth_(inst_40204)){
var statearr_40245_40274 = state_40230__$1;
(statearr_40245_40274[(1)] = (8));

} else {
var statearr_40246_40275 = state_40230__$1;
(statearr_40246_40275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (14))){
var inst_40223 = (state_40230[(2)]);
var inst_40224 = cljs.core.async.close_BANG_.call(null,out);
var state_40230__$1 = (function (){var statearr_40248 = state_40230;
(statearr_40248[(13)] = inst_40223);

return statearr_40248;
})();
var statearr_40249_40276 = state_40230__$1;
(statearr_40249_40276[(2)] = inst_40224);

(statearr_40249_40276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (10))){
var inst_40214 = (state_40230[(2)]);
var state_40230__$1 = state_40230;
var statearr_40250_40277 = state_40230__$1;
(statearr_40250_40277[(2)] = inst_40214);

(statearr_40250_40277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40231 === (8))){
var inst_40203 = (state_40230[(11)]);
var inst_40194 = (state_40230[(8)]);
var tmp40247 = inst_40194;
var inst_40194__$1 = tmp40247;
var inst_40195 = inst_40203;
var state_40230__$1 = (function (){var statearr_40251 = state_40230;
(statearr_40251[(7)] = inst_40195);

(statearr_40251[(8)] = inst_40194__$1);

return statearr_40251;
})();
var statearr_40252_40278 = state_40230__$1;
(statearr_40252_40278[(2)] = null);

(statearr_40252_40278[(1)] = (2));


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
});})(c__37476__auto___40264,out))
;
return ((function (switch__37461__auto__,c__37476__auto___40264,out){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_40256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40256[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_40256[(1)] = (1));

return statearr_40256;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_40230){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40257){if((e40257 instanceof Object)){
var ex__37465__auto__ = e40257;
var statearr_40258_40279 = state_40230;
(statearr_40258_40279[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40280 = state_40230;
state_40230 = G__40280;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_40230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_40230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___40264,out))
})();
var state__37478__auto__ = (function (){var statearr_40259 = f__37477__auto__.call(null);
(statearr_40259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___40264);

return statearr_40259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___40264,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40281 = [];
var len__32057__auto___40355 = arguments.length;
var i__32058__auto___40356 = (0);
while(true){
if((i__32058__auto___40356 < len__32057__auto___40355)){
args40281.push((arguments[i__32058__auto___40356]));

var G__40357 = (i__32058__auto___40356 + (1));
i__32058__auto___40356 = G__40357;
continue;
} else {
}
break;
}

var G__40283 = args40281.length;
switch (G__40283) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40281.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37476__auto___40359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___40359,out){
return (function (){
var f__37477__auto__ = (function (){var switch__37461__auto__ = ((function (c__37476__auto___40359,out){
return (function (state_40325){
var state_val_40326 = (state_40325[(1)]);
if((state_val_40326 === (7))){
var inst_40321 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
var statearr_40327_40360 = state_40325__$1;
(statearr_40327_40360[(2)] = inst_40321);

(statearr_40327_40360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (1))){
var inst_40284 = [];
var inst_40285 = inst_40284;
var inst_40286 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40325__$1 = (function (){var statearr_40328 = state_40325;
(statearr_40328[(7)] = inst_40285);

(statearr_40328[(8)] = inst_40286);

return statearr_40328;
})();
var statearr_40329_40361 = state_40325__$1;
(statearr_40329_40361[(2)] = null);

(statearr_40329_40361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (4))){
var inst_40289 = (state_40325[(9)]);
var inst_40289__$1 = (state_40325[(2)]);
var inst_40290 = (inst_40289__$1 == null);
var inst_40291 = cljs.core.not.call(null,inst_40290);
var state_40325__$1 = (function (){var statearr_40330 = state_40325;
(statearr_40330[(9)] = inst_40289__$1);

return statearr_40330;
})();
if(inst_40291){
var statearr_40331_40362 = state_40325__$1;
(statearr_40331_40362[(1)] = (5));

} else {
var statearr_40332_40363 = state_40325__$1;
(statearr_40332_40363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (15))){
var inst_40315 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
var statearr_40333_40364 = state_40325__$1;
(statearr_40333_40364[(2)] = inst_40315);

(statearr_40333_40364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (13))){
var state_40325__$1 = state_40325;
var statearr_40334_40365 = state_40325__$1;
(statearr_40334_40365[(2)] = null);

(statearr_40334_40365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (6))){
var inst_40285 = (state_40325[(7)]);
var inst_40310 = inst_40285.length;
var inst_40311 = (inst_40310 > (0));
var state_40325__$1 = state_40325;
if(cljs.core.truth_(inst_40311)){
var statearr_40335_40366 = state_40325__$1;
(statearr_40335_40366[(1)] = (12));

} else {
var statearr_40336_40367 = state_40325__$1;
(statearr_40336_40367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (3))){
var inst_40323 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40325__$1,inst_40323);
} else {
if((state_val_40326 === (12))){
var inst_40285 = (state_40325[(7)]);
var inst_40313 = cljs.core.vec.call(null,inst_40285);
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40325__$1,(15),out,inst_40313);
} else {
if((state_val_40326 === (2))){
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40325__$1,(4),ch);
} else {
if((state_val_40326 === (11))){
var inst_40289 = (state_40325[(9)]);
var inst_40293 = (state_40325[(10)]);
var inst_40303 = (state_40325[(2)]);
var inst_40304 = [];
var inst_40305 = inst_40304.push(inst_40289);
var inst_40285 = inst_40304;
var inst_40286 = inst_40293;
var state_40325__$1 = (function (){var statearr_40337 = state_40325;
(statearr_40337[(11)] = inst_40305);

(statearr_40337[(7)] = inst_40285);

(statearr_40337[(8)] = inst_40286);

(statearr_40337[(12)] = inst_40303);

return statearr_40337;
})();
var statearr_40338_40368 = state_40325__$1;
(statearr_40338_40368[(2)] = null);

(statearr_40338_40368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (9))){
var inst_40285 = (state_40325[(7)]);
var inst_40301 = cljs.core.vec.call(null,inst_40285);
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40325__$1,(11),out,inst_40301);
} else {
if((state_val_40326 === (5))){
var inst_40289 = (state_40325[(9)]);
var inst_40286 = (state_40325[(8)]);
var inst_40293 = (state_40325[(10)]);
var inst_40293__$1 = f.call(null,inst_40289);
var inst_40294 = cljs.core._EQ_.call(null,inst_40293__$1,inst_40286);
var inst_40295 = cljs.core.keyword_identical_QMARK_.call(null,inst_40286,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40296 = (inst_40294) || (inst_40295);
var state_40325__$1 = (function (){var statearr_40339 = state_40325;
(statearr_40339[(10)] = inst_40293__$1);

return statearr_40339;
})();
if(cljs.core.truth_(inst_40296)){
var statearr_40340_40369 = state_40325__$1;
(statearr_40340_40369[(1)] = (8));

} else {
var statearr_40341_40370 = state_40325__$1;
(statearr_40341_40370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (14))){
var inst_40318 = (state_40325[(2)]);
var inst_40319 = cljs.core.async.close_BANG_.call(null,out);
var state_40325__$1 = (function (){var statearr_40343 = state_40325;
(statearr_40343[(13)] = inst_40318);

return statearr_40343;
})();
var statearr_40344_40371 = state_40325__$1;
(statearr_40344_40371[(2)] = inst_40319);

(statearr_40344_40371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (10))){
var inst_40308 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
var statearr_40345_40372 = state_40325__$1;
(statearr_40345_40372[(2)] = inst_40308);

(statearr_40345_40372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (8))){
var inst_40289 = (state_40325[(9)]);
var inst_40285 = (state_40325[(7)]);
var inst_40293 = (state_40325[(10)]);
var inst_40298 = inst_40285.push(inst_40289);
var tmp40342 = inst_40285;
var inst_40285__$1 = tmp40342;
var inst_40286 = inst_40293;
var state_40325__$1 = (function (){var statearr_40346 = state_40325;
(statearr_40346[(7)] = inst_40285__$1);

(statearr_40346[(8)] = inst_40286);

(statearr_40346[(14)] = inst_40298);

return statearr_40346;
})();
var statearr_40347_40373 = state_40325__$1;
(statearr_40347_40373[(2)] = null);

(statearr_40347_40373[(1)] = (2));


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
});})(c__37476__auto___40359,out))
;
return ((function (switch__37461__auto__,c__37476__auto___40359,out){
return (function() {
var cljs$core$async$state_machine__37462__auto__ = null;
var cljs$core$async$state_machine__37462__auto____0 = (function (){
var statearr_40351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40351[(0)] = cljs$core$async$state_machine__37462__auto__);

(statearr_40351[(1)] = (1));

return statearr_40351;
});
var cljs$core$async$state_machine__37462__auto____1 = (function (state_40325){
while(true){
var ret_value__37463__auto__ = (function (){try{while(true){
var result__37464__auto__ = switch__37461__auto__.call(null,state_40325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37464__auto__;
}
break;
}
}catch (e40352){if((e40352 instanceof Object)){
var ex__37465__auto__ = e40352;
var statearr_40353_40374 = state_40325;
(statearr_40353_40374[(5)] = ex__37465__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40375 = state_40325;
state_40325 = G__40375;
continue;
} else {
return ret_value__37463__auto__;
}
break;
}
});
cljs$core$async$state_machine__37462__auto__ = function(state_40325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37462__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37462__auto____1.call(this,state_40325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37462__auto____0;
cljs$core$async$state_machine__37462__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37462__auto____1;
return cljs$core$async$state_machine__37462__auto__;
})()
;})(switch__37461__auto__,c__37476__auto___40359,out))
})();
var state__37478__auto__ = (function (){var statearr_40354 = f__37477__auto__.call(null);
(statearr_40354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37476__auto___40359);

return statearr_40354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___40359,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1487610713115