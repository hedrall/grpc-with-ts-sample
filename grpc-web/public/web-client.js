(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module2, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module2) => {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // node_modules/grpc-web/index.js
  var require_grpc_web = __commonJS({
    "node_modules/grpc-web/index.js"(exports2, module2) {
      var n;
      function aa(a2) {
        var b2 = 0;
        return function() {
          return b2 < a2.length ? { done: false, value: a2[b2++] } : { done: true };
        };
      }
      var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a2, b2, c2) {
        a2 != Array.prototype && a2 != Object.prototype && (a2[b2] = c2.value);
      };
      function ca(a2) {
        a2 = [typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global, a2];
        for (var b2 = 0; b2 < a2.length; ++b2) {
          var c2 = a2[b2];
          if (c2 && c2.Math == Math)
            return c2;
        }
        throw Error("Cannot find global object");
      }
      var r = ca(exports2);
      function t() {
        t = function() {
        };
        r.Symbol || (r.Symbol = da);
      }
      function ea(a2, b2) {
        this.a = a2;
        ba(this, "description", { configurable: true, writable: true, value: b2 });
      }
      ea.prototype.toString = function() {
        return this.a;
      };
      var da = function() {
        function a2(c2) {
          if (this instanceof a2)
            throw new TypeError("Symbol is not a constructor");
          return new ea("jscomp_symbol_" + (c2 || "") + "_" + b2++, c2);
        }
        var b2 = 0;
        return a2;
      }();
      function u() {
        t();
        var a2 = r.Symbol.iterator;
        a2 || (a2 = r.Symbol.iterator = r.Symbol("Symbol.iterator"));
        typeof Array.prototype[a2] != "function" && ba(Array.prototype, a2, { configurable: true, writable: true, value: function() {
          return fa(aa(this));
        } });
        u = function() {
        };
      }
      function fa(a2) {
        u();
        a2 = { next: a2 };
        a2[r.Symbol.iterator] = function() {
          return this;
        };
        return a2;
      }
      function ha(a2) {
        var b2 = typeof Symbol != "undefined" && Symbol.iterator && a2[Symbol.iterator];
        return b2 ? b2.call(a2) : { next: aa(a2) };
      }
      var ia = typeof Object.create == "function" ? Object.create : function(a2) {
        function b2() {
        }
        b2.prototype = a2;
        return new b2();
      };
      var ja;
      if (typeof Object.setPrototypeOf == "function")
        ja = Object.setPrototypeOf;
      else {
        a: {
          la = { V: true }, ma = {};
          try {
            ma.__proto__ = la;
            ka = ma.V;
            break a;
          } catch (a2) {
          }
          ka = false;
        }
        ja = ka ? function(a2, b2) {
          a2.__proto__ = b2;
          if (a2.__proto__ !== b2)
            throw new TypeError(a2 + " is not extensible");
          return a2;
        } : null;
      }
      var ka;
      var la;
      var ma;
      var na = ja;
      function oa(a2, b2) {
        a2.prototype = ia(b2.prototype);
        a2.prototype.constructor = a2;
        if (na)
          na(a2, b2);
        else
          for (var c2 in b2)
            if (c2 != "prototype")
              if (Object.defineProperties) {
                var d2 = Object.getOwnPropertyDescriptor(b2, c2);
                d2 && Object.defineProperty(a2, c2, d2);
              } else
                a2[c2] = b2[c2];
        a2.O = b2.prototype;
      }
      function pa(a2, b2) {
        u();
        a2 instanceof String && (a2 += "");
        var c2 = 0, d2 = { next: function() {
          if (c2 < a2.length) {
            var f2 = c2++;
            return { value: b2(f2, a2[f2]), done: false };
          }
          d2.next = function() {
            return { done: true, value: void 0 };
          };
          return d2.next();
        } };
        d2[Symbol.iterator] = function() {
          return d2;
        };
        return d2;
      }
      function v(a2, b2) {
        if (b2) {
          var c2 = r;
          a2 = a2.split(".");
          for (var d2 = 0; d2 < a2.length - 1; d2++) {
            var f2 = a2[d2];
            f2 in c2 || (c2[f2] = {});
            c2 = c2[f2];
          }
          a2 = a2[a2.length - 1];
          d2 = c2[a2];
          b2 = b2(d2);
          b2 != d2 && b2 != null && ba(c2, a2, { configurable: true, writable: true, value: b2 });
        }
      }
      v("Array.prototype.keys", function(a2) {
        return a2 ? a2 : function() {
          return pa(this, function(b2) {
            return b2;
          });
        };
      });
      v("Array.prototype.find", function(a2) {
        return a2 ? a2 : function(b2, c2) {
          a: {
            var d2 = this;
            d2 instanceof String && (d2 = String(d2));
            for (var f2 = d2.length, g = 0; g < f2; g++) {
              var e2 = d2[g];
              if (b2.call(c2, e2, g, d2)) {
                b2 = e2;
                break a;
              }
            }
            b2 = void 0;
          }
          return b2;
        };
      });
      v("Object.is", function(a2) {
        return a2 ? a2 : function(b2, c2) {
          return b2 === c2 ? b2 !== 0 || 1 / b2 === 1 / c2 : b2 !== b2 && c2 !== c2;
        };
      });
      v("Array.prototype.includes", function(a2) {
        return a2 ? a2 : function(b2, c2) {
          var d2 = this;
          d2 instanceof String && (d2 = String(d2));
          var f2 = d2.length;
          c2 = c2 || 0;
          for (0 > c2 && (c2 = Math.max(c2 + f2, 0)); c2 < f2; c2++) {
            var g = d2[c2];
            if (g === b2 || Object.is(g, b2))
              return true;
          }
          return false;
        };
      });
      v("Promise", function(a2) {
        function b2(e2) {
          this.b = 0;
          this.c = void 0;
          this.a = [];
          var h = this.f();
          try {
            e2(h.resolve, h.reject);
          } catch (k) {
            h.reject(k);
          }
        }
        function c2() {
          this.a = null;
        }
        function d2(e2) {
          return e2 instanceof b2 ? e2 : new b2(function(h) {
            h(e2);
          });
        }
        if (a2)
          return a2;
        c2.prototype.b = function(e2) {
          if (this.a == null) {
            this.a = [];
            var h = this;
            this.c(function() {
              h.g();
            });
          }
          this.a.push(e2);
        };
        var f2 = r.setTimeout;
        c2.prototype.c = function(e2) {
          f2(e2, 0);
        };
        c2.prototype.g = function() {
          for (; this.a && this.a.length; ) {
            var e2 = this.a;
            this.a = [];
            for (var h = 0; h < e2.length; ++h) {
              var k = e2[h];
              e2[h] = null;
              try {
                k();
              } catch (l) {
                this.f(l);
              }
            }
          }
          this.a = null;
        };
        c2.prototype.f = function(e2) {
          this.c(function() {
            throw e2;
          });
        };
        b2.prototype.f = function() {
          function e2(l) {
            return function(m) {
              k || (k = true, l.call(h, m));
            };
          }
          var h = this, k = false;
          return { resolve: e2(this.s), reject: e2(this.g) };
        };
        b2.prototype.s = function(e2) {
          if (e2 === this)
            this.g(new TypeError("A Promise cannot resolve to itself"));
          else if (e2 instanceof b2)
            this.v(e2);
          else {
            a:
              switch (typeof e2) {
                case "object":
                  var h = e2 != null;
                  break a;
                case "function":
                  h = true;
                  break a;
                default:
                  h = false;
              }
            h ? this.m(e2) : this.h(e2);
          }
        };
        b2.prototype.m = function(e2) {
          var h = void 0;
          try {
            h = e2.then;
          } catch (k) {
            this.g(k);
            return;
          }
          typeof h == "function" ? this.w(h, e2) : this.h(e2);
        };
        b2.prototype.g = function(e2) {
          this.i(2, e2);
        };
        b2.prototype.h = function(e2) {
          this.i(1, e2);
        };
        b2.prototype.i = function(e2, h) {
          if (this.b != 0)
            throw Error("Cannot settle(" + e2 + ", " + h + "): Promise already settled in state" + this.b);
          this.b = e2;
          this.c = h;
          this.l();
        };
        b2.prototype.l = function() {
          if (this.a != null) {
            for (var e2 = 0; e2 < this.a.length; ++e2)
              g.b(this.a[e2]);
            this.a = null;
          }
        };
        var g = new c2();
        b2.prototype.v = function(e2) {
          var h = this.f();
          e2.F(h.resolve, h.reject);
        };
        b2.prototype.w = function(e2, h) {
          var k = this.f();
          try {
            e2.call(h, k.resolve, k.reject);
          } catch (l) {
            k.reject(l);
          }
        };
        b2.prototype.then = function(e2, h) {
          function k(q, w) {
            return typeof q == "function" ? function(y) {
              try {
                l(q(y));
              } catch (M) {
                m(M);
              }
            } : w;
          }
          var l, m, p = new b2(function(q, w) {
            l = q;
            m = w;
          });
          this.F(k(e2, l), k(h, m));
          return p;
        };
        b2.prototype.catch = function(e2) {
          return this.then(void 0, e2);
        };
        b2.prototype.F = function(e2, h) {
          function k() {
            switch (l.b) {
              case 1:
                e2(l.c);
                break;
              case 2:
                h(l.c);
                break;
              default:
                throw Error("Unexpected state: " + l.b);
            }
          }
          var l = this;
          this.a == null ? g.b(k) : this.a.push(k);
        };
        b2.resolve = d2;
        b2.reject = function(e2) {
          return new b2(function(h, k) {
            k(e2);
          });
        };
        b2.race = function(e2) {
          return new b2(function(h, k) {
            for (var l = ha(e2), m = l.next(); !m.done; m = l.next())
              d2(m.value).F(h, k);
          });
        };
        b2.all = function(e2) {
          var h = ha(e2), k = h.next();
          return k.done ? d2([]) : new b2(function(l, m) {
            function p(y) {
              return function(M) {
                q[y] = M;
                w--;
                w == 0 && l(q);
              };
            }
            var q = [], w = 0;
            do
              q.push(void 0), w++, d2(k.value).F(p(q.length - 1), m), k = h.next();
            while (!k.done);
          });
        };
        return b2;
      });
      var qa = qa || {};
      var x = exports2 || self;
      function z(a2, b2) {
        a2 = a2.split(".");
        b2 = b2 || x;
        for (var c2 = 0; c2 < a2.length; c2++)
          if (b2 = b2[a2[c2]], b2 == null)
            return null;
        return b2;
      }
      function ra() {
      }
      function sa(a2) {
        var b2 = typeof a2;
        return b2 == "object" && a2 != null || b2 == "function";
      }
      var ta = "closure_uid_" + (1e9 * Math.random() >>> 0);
      var ua = 0;
      function va(a2, b2, c2) {
        return a2.call.apply(a2.bind, arguments);
      }
      function wa(a2, b2, c2) {
        if (!a2)
          throw Error();
        if (2 < arguments.length) {
          var d2 = Array.prototype.slice.call(arguments, 2);
          return function() {
            var f2 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(f2, d2);
            return a2.apply(b2, f2);
          };
        }
        return function() {
          return a2.apply(b2, arguments);
        };
      }
      function A(a2, b2, c2) {
        Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? A = va : A = wa;
        return A.apply(null, arguments);
      }
      function B(a2, b2) {
        function c2() {
        }
        c2.prototype = b2.prototype;
        a2.O = b2.prototype;
        a2.prototype = new c2();
        a2.prototype.constructor = a2;
      }
      function xa() {
        this.a = {};
      }
      xa.prototype.get = function(a2) {
        return this.a[a2];
      };
      xa.prototype.G = function() {
        return Object.keys(this.a);
      };
      function C(a2, b2, c2, d2) {
        this.f = a2;
        this.c = b2;
        this.b = c2;
        this.a = d2;
      }
      C.prototype.getRequestMessage = function() {
        return this.f;
      };
      C.prototype.getMethodDescriptor = function() {
        return this.c;
      };
      C.prototype.getMetadata = function() {
        return this.b;
      };
      C.prototype.getCallOptions = function() {
        return this.a;
      };
      function D(a2, b2, c2, d2) {
        c2 = c2 === void 0 ? {} : c2;
        this.c = a2;
        this.a = c2;
        this.b = b2;
        this.f = d2 === void 0 ? null : d2;
      }
      D.prototype.getResponseMessage = function() {
        return this.c;
      };
      D.prototype.getMetadata = function() {
        return this.a;
      };
      D.prototype.getMethodDescriptor = function() {
        return this.b;
      };
      D.prototype.getStatus = function() {
        return this.f;
      };
      function ya(a2, b2, c2) {
        c2 = c2 === void 0 ? {} : c2;
        var d2 = d2 === void 0 ? new xa() : d2;
        return new C(b2, a2, c2, d2);
      }
      function za(a2) {
        switch (a2) {
          case 200:
            return 0;
          case 400:
            return 3;
          case 401:
            return 16;
          case 403:
            return 7;
          case 404:
            return 5;
          case 409:
            return 10;
          case 412:
            return 9;
          case 429:
            return 8;
          case 499:
            return 1;
          case 500:
            return 2;
          case 501:
            return 12;
          case 503:
            return 14;
          case 504:
            return 4;
          default:
            return 2;
        }
      }
      function E(a2, b2, c2) {
        c2 = c2 === void 0 ? {} : c2;
        b2 = Error.call(this, b2);
        this.message = b2.message;
        "stack" in b2 && (this.stack = b2.stack);
        this.code = a2;
        this.metadata = c2;
      }
      oa(E, Error);
      E.prototype.name = "RpcError";
      function Aa(a2) {
        this.a = a2;
      }
      Aa.prototype.on = function(a2, b2) {
        return a2 == "data" || a2 == "error" ? this : this.a.on(a2, b2);
      };
      Aa.prototype.removeListener = function(a2, b2) {
        return this.a.removeListener(a2, b2);
      };
      Aa.prototype.cancel = function() {
        this.a.cancel();
      };
      function Ba(a2) {
        switch (a2) {
          case 0:
            return "No Error";
          case 1:
            return "Access denied to content document";
          case 2:
            return "File not found";
          case 3:
            return "Firefox silently errored";
          case 4:
            return "Application custom error";
          case 5:
            return "An exception occurred";
          case 6:
            return "Http response at 400 or 500 level";
          case 7:
            return "Request was aborted";
          case 8:
            return "Request timed out";
          case 9:
            return "The resource is not available offline";
          default:
            return "Unrecognized error code";
        }
      }
      function F(a2) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, F);
        else {
          var b2 = Error().stack;
          b2 && (this.stack = b2);
        }
        a2 && (this.message = String(a2));
      }
      B(F, Error);
      F.prototype.name = "CustomError";
      function Ca(a2, b2) {
        a2 = a2.split("%s");
        for (var c2 = "", d2 = a2.length - 1, f2 = 0; f2 < d2; f2++)
          c2 += a2[f2] + (f2 < b2.length ? b2[f2] : "%s");
        F.call(this, c2 + a2[d2]);
      }
      B(Ca, F);
      Ca.prototype.name = "AssertionError";
      function Da(a2, b2) {
        throw new Ca("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1));
      }
      function Ea() {
        this.l = null;
        this.i = [];
        this.m = 0;
        this.b = Fa;
        this.f = this.a = this.h = 0;
        this.c = null;
        this.g = 0;
      }
      function Ga(a2, b2) {
        function c2(l) {
          l == Ha ? e2.h = l : l == G ? e2.h = l : Ia(e2, h, k, "invalid frame byte");
          e2.b = Ja;
          e2.a = 0;
          e2.f = 0;
        }
        function d2(l) {
          e2.f++;
          e2.a = (e2.a << 8) + l;
          e2.f == 4 && (e2.b = Ka, e2.g = 0, typeof Uint8Array !== "undefined" ? e2.c = new Uint8Array(e2.a) : e2.c = Array(e2.a), e2.a == 0 && g());
        }
        function f2(l) {
          e2.c[e2.g++] = l;
          e2.g == e2.a && g();
        }
        function g() {
          var l = {};
          l[e2.h] = e2.c;
          e2.i.push(l);
          e2.b = Fa;
        }
        var e2 = a2, h, k = 0;
        for (b2 instanceof Uint8Array || b2 instanceof Array ? h = b2 : h = new Uint8Array(b2); k < h.length; ) {
          switch (e2.b) {
            case La:
              Ia(e2, h, k, "stream already broken");
              break;
            case Fa:
              c2(h[k]);
              break;
            case Ja:
              d2(h[k]);
              break;
            case Ka:
              f2(h[k]);
              break;
            default:
              throw Error("unexpected parser state: " + e2.b);
          }
          e2.m++;
          k++;
        }
        a2 = e2.i;
        e2.i = [];
        return 0 < a2.length ? a2 : null;
      }
      var Fa = 0;
      var Ja = 1;
      var Ka = 2;
      var La = 3;
      var Ha = 0;
      var G = 128;
      function Ia(a2, b2, c2, d2) {
        a2.b = La;
        a2.l = "The stream is broken @" + a2.m + "/" + c2 + ". Error: " + d2 + ". With input:\n" + b2;
        throw Error(a2.l);
      }
      var Ma = Array.prototype.indexOf ? function(a2, b2) {
        return Array.prototype.indexOf.call(a2, b2, void 0);
      } : function(a2, b2) {
        if (typeof a2 === "string")
          return typeof b2 !== "string" || b2.length != 1 ? -1 : a2.indexOf(b2, 0);
        for (var c2 = 0; c2 < a2.length; c2++)
          if (c2 in a2 && a2[c2] === b2)
            return c2;
        return -1;
      };
      var Na = String.prototype.trim ? function(a2) {
        return a2.trim();
      } : function(a2) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
      };
      function H(a2, b2) {
        return a2.indexOf(b2) != -1;
      }
      function Oa(a2, b2) {
        return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
      }
      var I;
      a: {
        Pa = x.navigator;
        if (Pa) {
          Qa = Pa.userAgent;
          if (Qa) {
            I = Qa;
            break a;
          }
        }
        I = "";
      }
      var Pa;
      var Qa;
      function Ra(a2, b2) {
        for (var c2 in a2)
          b2.call(void 0, a2[c2], c2, a2);
      }
      function Sa(a2, b2) {
        var c2 = {}, d2;
        for (d2 in a2)
          c2[d2] = b2.call(void 0, a2[d2], d2, a2);
        return c2;
      }
      var Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      function Ua(a2, b2) {
        for (var c2, d2, f2 = 1; f2 < arguments.length; f2++) {
          d2 = arguments[f2];
          for (c2 in d2)
            a2[c2] = d2[c2];
          for (var g = 0; g < Ta.length; g++)
            c2 = Ta[g], Object.prototype.hasOwnProperty.call(d2, c2) && (a2[c2] = d2[c2]);
        }
      }
      function Va(a2) {
        var b2 = 1;
        a2 = a2.split(":");
        for (var c2 = []; 0 < b2 && a2.length; )
          c2.push(a2.shift()), b2--;
        a2.length && c2.push(a2.join(":"));
        return c2;
      }
      function Wa(a2) {
        Wa[" "](a2);
        return a2;
      }
      Wa[" "] = ra;
      function Xa(a2) {
        var b2 = Ya;
        return Object.prototype.hasOwnProperty.call(b2, 9) ? b2[9] : b2[9] = a2(9);
      }
      var Za = H(I, "Opera");
      var $a = H(I, "Trident") || H(I, "MSIE");
      var ab = H(I, "Edge");
      var bb = H(I, "Gecko") && !(H(I.toLowerCase(), "webkit") && !H(I, "Edge")) && !(H(I, "Trident") || H(I, "MSIE")) && !H(I, "Edge");
      var cb = H(I.toLowerCase(), "webkit") && !H(I, "Edge");
      var db;
      a: {
        eb = "", fb = function() {
          var a2 = I;
          if (bb)
            return /rv:([^\);]+)(\)|;)/.exec(a2);
          if (ab)
            return /Edge\/([\d\.]+)/.exec(a2);
          if ($a)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
          if (cb)
            return /WebKit\/(\S+)/.exec(a2);
          if (Za)
            return /(?:Version)[ \/]?(\S+)/.exec(a2);
        }();
        fb && (eb = fb ? fb[1] : "");
        if ($a) {
          hb = x.document;
          gb = hb ? hb.documentMode : void 0;
          if (gb != null && gb > parseFloat(eb)) {
            db = String(gb);
            break a;
          }
        }
        db = eb;
      }
      var eb;
      var fb;
      var gb;
      var hb;
      var Ya = {};
      function ib() {
        return Xa(function() {
          for (var a2 = 0, b2 = Na(String(db)).split("."), c2 = Na("9").split("."), d2 = Math.max(b2.length, c2.length), f2 = 0; a2 == 0 && f2 < d2; f2++) {
            var g = b2[f2] || "", e2 = c2[f2] || "";
            do {
              g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
              e2 = /(\d*)(\D*)(.*)/.exec(e2) || ["", "", "", ""];
              if (g[0].length == 0 && e2[0].length == 0)
                break;
              a2 = Oa(g[1].length == 0 ? 0 : parseInt(g[1], 10), e2[1].length == 0 ? 0 : parseInt(e2[1], 10)) || Oa(g[2].length == 0, e2[2].length == 0) || Oa(g[2], e2[2]);
              g = g[3];
              e2 = e2[3];
            } while (a2 == 0);
          }
          return 0 <= a2;
        });
      }
      function jb() {
        kb != 0 && (Object.prototype.hasOwnProperty.call(this, ta) && this[ta] || (this[ta] = ++ua));
        this.K = this.K;
      }
      var kb = 0;
      jb.prototype.K = false;
      var lb = Object.freeze || function(a2) {
        return a2;
      };
      function J(a2, b2) {
        this.type = a2;
        this.a = this.target = b2;
        this.defaultPrevented = false;
      }
      J.prototype.b = function() {
        this.defaultPrevented = true;
      };
      var mb = function() {
        if (!x.addEventListener || !Object.defineProperty)
          return false;
        var a2 = false, b2 = Object.defineProperty({}, "passive", { get: function() {
          a2 = true;
        } });
        try {
          x.addEventListener("test", ra, b2), x.removeEventListener("test", ra, b2);
        } catch (c2) {
        }
        return a2;
      }();
      function K(a2, b2) {
        J.call(this, a2 ? a2.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
        this.pointerId = 0;
        this.pointerType = "";
        this.c = null;
        if (a2) {
          var c2 = this.type = a2.type, d2 = a2.changedTouches && a2.changedTouches.length ? a2.changedTouches[0] : null;
          this.target = a2.target || a2.srcElement;
          this.a = b2;
          if (b2 = a2.relatedTarget) {
            if (bb) {
              a: {
                try {
                  Wa(b2.nodeName);
                  var f2 = true;
                  break a;
                } catch (g) {
                }
                f2 = false;
              }
              f2 || (b2 = null);
            }
          } else
            c2 == "mouseover" ? b2 = a2.fromElement : c2 == "mouseout" && (b2 = a2.toElement);
          this.relatedTarget = b2;
          d2 ? (this.clientX = d2.clientX !== void 0 ? d2.clientX : d2.pageX, this.clientY = d2.clientY !== void 0 ? d2.clientY : d2.pageY, this.screenX = d2.screenX || 0, this.screenY = d2.screenY || 0) : (this.clientX = a2.clientX !== void 0 ? a2.clientX : a2.pageX, this.clientY = a2.clientY !== void 0 ? a2.clientY : a2.pageY, this.screenX = a2.screenX || 0, this.screenY = a2.screenY || 0);
          this.button = a2.button;
          this.key = a2.key || "";
          this.ctrlKey = a2.ctrlKey;
          this.altKey = a2.altKey;
          this.shiftKey = a2.shiftKey;
          this.metaKey = a2.metaKey;
          this.pointerId = a2.pointerId || 0;
          this.pointerType = typeof a2.pointerType === "string" ? a2.pointerType : nb[a2.pointerType] || "";
          this.c = a2;
          a2.defaultPrevented && K.O.b.call(this);
        }
      }
      B(K, J);
      var nb = lb({ 2: "touch", 3: "pen", 4: "mouse" });
      K.prototype.b = function() {
        K.O.b.call(this);
        var a2 = this.c;
        a2.preventDefault ? a2.preventDefault() : a2.returnValue = false;
      };
      var L = "closure_listenable_" + (1e6 * Math.random() | 0);
      var ob = 0;
      function pb(a2, b2, c2, d2, f2) {
        this.listener = a2;
        this.proxy = null;
        this.src = b2;
        this.type = c2;
        this.capture = !!d2;
        this.H = f2;
        this.key = ++ob;
        this.A = this.D = false;
      }
      function qb(a2) {
        a2.A = true;
        a2.listener = null;
        a2.proxy = null;
        a2.src = null;
        a2.H = null;
      }
      function rb(a2) {
        this.src = a2;
        this.a = {};
        this.b = 0;
      }
      rb.prototype.add = function(a2, b2, c2, d2, f2) {
        var g = a2.toString();
        a2 = this.a[g];
        a2 || (a2 = this.a[g] = [], this.b++);
        var e2 = sb(a2, b2, d2, f2);
        -1 < e2 ? (b2 = a2[e2], c2 || (b2.D = false)) : (b2 = new pb(b2, this.src, g, !!d2, f2), b2.D = c2, a2.push(b2));
        return b2;
      };
      rb.prototype.remove = function(a2, b2, c2, d2) {
        a2 = a2.toString();
        if (!(a2 in this.a))
          return false;
        var f2 = this.a[a2];
        b2 = sb(f2, b2, c2, d2);
        return -1 < b2 ? (qb(f2[b2]), Array.prototype.splice.call(f2, b2, 1), f2.length == 0 && (delete this.a[a2], this.b--), true) : false;
      };
      function tb(a2, b2) {
        var c2 = b2.type;
        if (c2 in a2.a) {
          var d2 = a2.a[c2], f2 = Ma(d2, b2), g;
          (g = 0 <= f2) && Array.prototype.splice.call(d2, f2, 1);
          g && (qb(b2), a2.a[c2].length == 0 && (delete a2.a[c2], a2.b--));
        }
      }
      function sb(a2, b2, c2, d2) {
        for (var f2 = 0; f2 < a2.length; ++f2) {
          var g = a2[f2];
          if (!g.A && g.listener == b2 && g.capture == !!c2 && g.H == d2)
            return f2;
        }
        return -1;
      }
      var ub = "closure_lm_" + (1e6 * Math.random() | 0);
      var vb = {};
      var wb = 0;
      function xb(a2, b2, c2, d2, f2) {
        if (d2 && d2.once)
          yb(a2, b2, c2, d2, f2);
        else if (Array.isArray(b2))
          for (var g = 0; g < b2.length; g++)
            xb(a2, b2[g], c2, d2, f2);
        else
          c2 = zb(c2), a2 && a2[L] ? a2.f.add(String(b2), c2, false, sa(d2) ? !!d2.capture : !!d2, f2) : Ab(a2, b2, c2, false, d2, f2);
      }
      function Ab(a2, b2, c2, d2, f2, g) {
        if (!b2)
          throw Error("Invalid event type");
        var e2 = sa(f2) ? !!f2.capture : !!f2, h = Bb(a2);
        h || (a2[ub] = h = new rb(a2));
        c2 = h.add(b2, c2, d2, e2, g);
        if (!c2.proxy) {
          d2 = Cb();
          c2.proxy = d2;
          d2.src = a2;
          d2.listener = c2;
          if (a2.addEventListener)
            mb || (f2 = e2), f2 === void 0 && (f2 = false), a2.addEventListener(b2.toString(), d2, f2);
          else if (a2.attachEvent)
            a2.attachEvent(Db(b2.toString()), d2);
          else if (a2.addListener && a2.removeListener)
            a2.addListener(d2);
          else
            throw Error("addEventListener and attachEvent are unavailable.");
          wb++;
        }
      }
      function Cb() {
        function a2(c2) {
          return b2.call(a2.src, a2.listener, c2);
        }
        var b2 = Eb;
        return a2;
      }
      function yb(a2, b2, c2, d2, f2) {
        if (Array.isArray(b2))
          for (var g = 0; g < b2.length; g++)
            yb(a2, b2[g], c2, d2, f2);
        else
          c2 = zb(c2), a2 && a2[L] ? a2.f.add(String(b2), c2, true, sa(d2) ? !!d2.capture : !!d2, f2) : Ab(a2, b2, c2, true, d2, f2);
      }
      function Fb(a2, b2, c2, d2, f2) {
        if (Array.isArray(b2))
          for (var g = 0; g < b2.length; g++)
            Fb(a2, b2[g], c2, d2, f2);
        else
          (d2 = sa(d2) ? !!d2.capture : !!d2, c2 = zb(c2), a2 && a2[L]) ? a2.f.remove(String(b2), c2, d2, f2) : a2 && (a2 = Bb(a2)) && (b2 = a2.a[b2.toString()], a2 = -1, b2 && (a2 = sb(b2, c2, d2, f2)), (c2 = -1 < a2 ? b2[a2] : null) && Gb(c2));
      }
      function Gb(a2) {
        if (typeof a2 !== "number" && a2 && !a2.A) {
          var b2 = a2.src;
          if (b2 && b2[L])
            tb(b2.f, a2);
          else {
            var c2 = a2.type, d2 = a2.proxy;
            b2.removeEventListener ? b2.removeEventListener(c2, d2, a2.capture) : b2.detachEvent ? b2.detachEvent(Db(c2), d2) : b2.addListener && b2.removeListener && b2.removeListener(d2);
            wb--;
            (c2 = Bb(b2)) ? (tb(c2, a2), c2.b == 0 && (c2.src = null, b2[ub] = null)) : qb(a2);
          }
        }
      }
      function Db(a2) {
        return a2 in vb ? vb[a2] : vb[a2] = "on" + a2;
      }
      function Eb(a2, b2) {
        if (a2.A)
          a2 = true;
        else {
          b2 = new K(b2, this);
          var c2 = a2.listener, d2 = a2.H || a2.src;
          a2.D && Gb(a2);
          a2 = c2.call(d2, b2);
        }
        return a2;
      }
      function Bb(a2) {
        a2 = a2[ub];
        return a2 instanceof rb ? a2 : null;
      }
      var Hb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
      function zb(a2) {
        if (typeof a2 === "function")
          return a2;
        a2[Hb] || (a2[Hb] = function(b2) {
          return a2.handleEvent(b2);
        });
        return a2[Hb];
      }
      function N() {
        jb.call(this);
        this.f = new rb(this);
        this.U = this;
      }
      B(N, jb);
      N.prototype[L] = true;
      N.prototype.addEventListener = function(a2, b2, c2, d2) {
        xb(this, a2, b2, c2, d2);
      };
      N.prototype.removeEventListener = function(a2, b2, c2, d2) {
        Fb(this, a2, b2, c2, d2);
      };
      function O(a2, b2) {
        a2 = a2.U;
        var c2 = b2.type || b2;
        if (typeof b2 === "string")
          b2 = new J(b2, a2);
        else if (b2 instanceof J)
          b2.target = b2.target || a2;
        else {
          var d2 = b2;
          b2 = new J(c2, a2);
          Ua(b2, d2);
        }
        a2 = b2.a = a2;
        Ib(a2, c2, true, b2);
        Ib(a2, c2, false, b2);
      }
      function Ib(a2, b2, c2, d2) {
        if (b2 = a2.f.a[String(b2)]) {
          b2 = b2.concat();
          for (var f2 = true, g = 0; g < b2.length; ++g) {
            var e2 = b2[g];
            if (e2 && !e2.A && e2.capture == c2) {
              var h = e2.listener, k = e2.H || e2.src;
              e2.D && tb(a2.f, e2);
              f2 = h.call(k, d2) !== false && f2;
            }
          }
        }
      }
      function Jb(a2, b2, c2) {
        if (typeof a2 === "function")
          c2 && (a2 = A(a2, c2));
        else if (a2 && typeof a2.handleEvent == "function")
          a2 = A(a2.handleEvent, a2);
        else
          throw Error("Invalid listener argument");
        return 2147483647 < Number(b2) ? -1 : x.setTimeout(a2, b2 || 0);
      }
      function Kb(a2, b2) {
        this.name = a2;
        this.value = b2;
      }
      Kb.prototype.toString = function() {
        return this.name;
      };
      var Lb = new Kb("OFF", Infinity);
      var Mb = new Kb("SEVERE", 1e3);
      var Nb = new Kb("CONFIG", 700);
      var Ob = new Kb("FINE", 500);
      function Pb() {
        this.clear();
      }
      var Qb;
      Pb.prototype.clear = function() {
      };
      function Sb(a2, b2, c2) {
        this.reset(a2 || Lb, b2, c2, void 0, void 0);
      }
      Sb.prototype.reset = function() {
      };
      function Tb(a2, b2) {
        this.a = null;
        this.f = [];
        this.b = (b2 === void 0 ? null : b2) || null;
        this.c = [];
        this.g = { a: function() {
          return a2;
        } };
      }
      function Ub(a2) {
        if (a2.a)
          return a2.a;
        if (a2.b)
          return Ub(a2.b);
        Da("Root logger has no level set.");
        return Lb;
      }
      function Vb(a2, b2) {
        for (; a2; )
          a2.f.forEach(function(c2) {
            c2(b2);
          }), a2 = a2.b;
      }
      function Wb() {
        this.entries = {};
        var a2 = new Tb("");
        a2.a = Nb;
        this.entries[""] = a2;
      }
      var Xb;
      function Yb(a2, b2, c2) {
        var d2 = a2.entries[b2];
        if (d2)
          return c2 !== void 0 && (d2.a = c2), d2;
        d2 = Yb(a2, b2.substr(0, b2.lastIndexOf(".")));
        var f2 = new Tb(b2, d2);
        a2.entries[b2] = f2;
        d2.c.push(f2);
        c2 !== void 0 && (f2.a = c2);
        return f2;
      }
      function Zb() {
        Xb || (Xb = new Wb());
        return Xb;
      }
      function $b(a2, b2, c2) {
        var d2;
        if (d2 = a2) {
          if (d2 = a2 && b2) {
            d2 = b2.value;
            var f2 = a2 ? Ub(Yb(Zb(), a2.a())) : Lb;
            d2 = d2 >= f2.value;
          }
        }
        d2 && (b2 = b2 || Lb, d2 = Yb(Zb(), a2.a()), typeof c2 === "function" && (c2 = c2()), Qb || (Qb = new Pb()), a2 = new Sb(b2, c2, a2.a()), Vb(d2, a2));
      }
      function P(a2, b2) {
        a2 && $b(a2, Ob, b2);
      }
      function ac() {
      }
      ac.prototype.a = null;
      function bc(a2) {
        var b2;
        (b2 = a2.a) || (b2 = {}, cc(a2) && (b2[0] = true, b2[1] = true), b2 = a2.a = b2);
        return b2;
      }
      var dc;
      function ec() {
      }
      B(ec, ac);
      function fc(a2) {
        return (a2 = cc(a2)) ? new ActiveXObject(a2) : new XMLHttpRequest();
      }
      function cc(a2) {
        if (!a2.b && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
          for (var b2 = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c2 = 0; c2 < b2.length; c2++) {
            var d2 = b2[c2];
            try {
              return new ActiveXObject(d2), a2.b = d2;
            } catch (f2) {
            }
          }
          throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a2.b;
      }
      dc = new ec();
      t();
      u();
      function gc(a2, b2) {
        this.b = a2[x.Symbol.iterator]();
        this.c = b2;
        this.f = 0;
      }
      gc.prototype[Symbol.iterator] = function() {
        return this;
      };
      gc.prototype.next = function() {
        var a2 = this.b.next();
        return { value: a2.done ? void 0 : this.c.call(void 0, a2.value, this.f++), done: a2.done };
      };
      function hc(a2, b2) {
        return new gc(a2, b2);
      }
      t();
      u();
      t();
      u();
      var ic = "StopIteration" in x ? x.StopIteration : { message: "StopIteration", stack: "" };
      function Q() {
      }
      Q.prototype.next = function() {
        return Q.prototype.a.call(this);
      };
      Q.prototype.a = function() {
        throw ic;
      };
      Q.prototype.u = function() {
        return this;
      };
      function jc(a2) {
        if (a2 instanceof R || a2 instanceof S || a2 instanceof T)
          return a2;
        if (typeof a2.next == "function")
          return new R(function() {
            return kc(a2);
          });
        t();
        u();
        if (typeof a2[Symbol.iterator] == "function")
          return t(), u(), new R(function() {
            return a2[Symbol.iterator]();
          });
        if (typeof a2.u == "function")
          return new R(function() {
            return kc(a2.u());
          });
        throw Error("Not an iterator or iterable.");
      }
      function kc(a2) {
        if (!(a2 instanceof Q))
          return a2;
        var b2 = false;
        return { next: function() {
          for (var c2; !b2; )
            try {
              c2 = a2.a();
              break;
            } catch (d2) {
              if (d2 !== ic)
                throw d2;
              b2 = true;
            }
          return { value: c2, done: b2 };
        } };
      }
      t();
      u();
      function R(a2) {
        this.b = a2;
      }
      R.prototype.u = function() {
        return new S(this.b());
      };
      R.prototype[Symbol.iterator] = function() {
        return new T(this.b());
      };
      R.prototype.c = function() {
        return new T(this.b());
      };
      t();
      u();
      function S(a2) {
        this.b = a2;
      }
      oa(S, Q);
      S.prototype.a = function() {
        var a2 = this.b.next();
        if (a2.done)
          throw ic;
        return a2.value;
      };
      S.prototype.next = function() {
        return S.prototype.a.call(this);
      };
      S.prototype[Symbol.iterator] = function() {
        return new T(this.b);
      };
      S.prototype.c = function() {
        return new T(this.b);
      };
      function T(a2) {
        R.call(this, function() {
          return a2;
        });
        this.f = a2;
      }
      oa(T, R);
      T.prototype.next = function() {
        return this.f.next();
      };
      function lc(a2, b2) {
        this.o = {};
        this.j = [];
        this.B = this.size = 0;
        var c2 = arguments.length;
        if (1 < c2) {
          if (c2 % 2)
            throw Error("Uneven number of arguments");
          for (var d2 = 0; d2 < c2; d2 += 2)
            this.set(arguments[d2], arguments[d2 + 1]);
        } else
          a2 && this.addAll(a2);
      }
      n = lc.prototype;
      n.G = function() {
        mc(this);
        return this.j.concat();
      };
      n.has = function(a2) {
        return U(this.o, a2);
      };
      n.clear = function() {
        this.o = {};
        this.B = this.size = this.j.length = 0;
      };
      n.remove = function(a2) {
        return this.delete(a2);
      };
      n.delete = function(a2) {
        return U(this.o, a2) ? (delete this.o[a2], --this.size, this.B++, this.j.length > 2 * this.size && mc(this), true) : false;
      };
      function mc(a2) {
        if (a2.size != a2.j.length) {
          for (var b2 = 0, c2 = 0; b2 < a2.j.length; ) {
            var d2 = a2.j[b2];
            U(a2.o, d2) && (a2.j[c2++] = d2);
            b2++;
          }
          a2.j.length = c2;
        }
        if (a2.size != a2.j.length) {
          var f2 = {};
          for (c2 = b2 = 0; b2 < a2.j.length; )
            d2 = a2.j[b2], U(f2, d2) || (a2.j[c2++] = d2, f2[d2] = 1), b2++;
          a2.j.length = c2;
        }
      }
      n.get = function(a2, b2) {
        return U(this.o, a2) ? this.o[a2] : b2;
      };
      n.set = function(a2, b2) {
        U(this.o, a2) || (this.size += 1, this.j.push(a2), this.B++);
        this.o[a2] = b2;
      };
      n.addAll = function(a2) {
        if (a2 instanceof lc)
          for (var b2 = a2.G(), c2 = 0; c2 < b2.length; c2++)
            this.set(b2[c2], a2.get(b2[c2]));
        else
          for (b2 in a2)
            this.set(b2, a2[b2]);
      };
      n.forEach = function(a2, b2) {
        for (var c2 = this.G(), d2 = 0; d2 < c2.length; d2++) {
          var f2 = c2[d2], g = this.get(f2);
          a2.call(b2, g, f2, this);
        }
      };
      n.clone = function() {
        return new lc(this);
      };
      n.keys = function() {
        return jc(this.u(true)).c();
      };
      n.values = function() {
        return jc(this.u(false)).c();
      };
      n.entries = function() {
        var a2 = this;
        return hc(this.keys(), function(b2) {
          return [b2, a2.get(b2)];
        });
      };
      n.u = function(a2) {
        mc(this);
        var b2 = 0, c2 = this.B, d2 = this, f2 = new Q();
        f2.a = function() {
          if (c2 != d2.B)
            throw Error("The map has changed since the iterator was created");
          if (b2 >= d2.j.length)
            throw ic;
          var g = d2.j[b2++];
          return a2 ? g : d2.o[g];
        };
        f2.next = f2.a.bind(f2);
        return f2;
      };
      function U(a2, b2) {
        return Object.prototype.hasOwnProperty.call(a2, b2);
      }
      var nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      function oc(a2) {
        N.call(this);
        this.headers = new lc();
        this.C = a2 || null;
        this.c = false;
        this.J = this.a = null;
        this.P = this.v = "";
        this.g = 0;
        this.l = "";
        this.i = this.N = this.s = this.L = false;
        this.h = 0;
        this.w = null;
        this.m = pc;
        this.I = this.M = false;
      }
      B(oc, N);
      var pc = "";
      oc.prototype.b = Yb(Zb(), "goog.net.XhrIo", void 0).g;
      var qc = /^https?$/i;
      var rc = ["POST", "PUT"];
      function sc(a2, b2, c2) {
        if (a2.a)
          throw Error("[goog.net.XhrIo] Object is active with another request=" + a2.v + "; newUri=" + b2);
        a2.v = b2;
        a2.l = "";
        a2.g = 0;
        a2.P = "POST";
        a2.L = false;
        a2.c = true;
        a2.a = a2.C ? fc(a2.C) : fc(dc);
        a2.J = a2.C ? bc(a2.C) : bc(dc);
        a2.a.onreadystatechange = A(a2.R, a2);
        try {
          P(a2.b, V(a2, "Opening Xhr")), a2.N = true, a2.a.open("POST", String(b2), true), a2.N = false;
        } catch (g) {
          P(a2.b, V(a2, "Error opening Xhr: " + g.message));
          tc(a2, g);
          return;
        }
        b2 = c2 || "";
        c2 = a2.headers.clone();
        var d2 = c2.G().find(function(g) {
          return g.toLowerCase() == "content-type";
        }), f2 = x.FormData && b2 instanceof x.FormData;
        !(0 <= Ma(rc, "POST")) || d2 || f2 || c2.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c2.forEach(function(g, e2) {
          this.a.setRequestHeader(e2, g);
        }, a2);
        a2.m && (a2.a.responseType = a2.m);
        "withCredentials" in a2.a && a2.a.withCredentials !== a2.M && (a2.a.withCredentials = a2.M);
        try {
          uc(a2), 0 < a2.h && (a2.I = vc(a2.a), P(a2.b, V(a2, "Will abort after " + a2.h + "ms if incomplete, xhr2 " + a2.I)), a2.I ? (a2.a.timeout = a2.h, a2.a.ontimeout = A(a2.T, a2)) : a2.w = Jb(a2.T, a2.h, a2)), P(a2.b, V(a2, "Sending request")), a2.s = true, a2.a.send(b2), a2.s = false;
        } catch (g) {
          P(a2.b, V(a2, "Send error: " + g.message)), tc(a2, g);
        }
      }
      function vc(a2) {
        return $a && ib() && typeof a2.timeout === "number" && a2.ontimeout !== void 0;
      }
      n = oc.prototype;
      n.T = function() {
        typeof qa != "undefined" && this.a && (this.l = "Timed out after " + this.h + "ms, aborting", this.g = 8, P(this.b, V(this, this.l)), O(this, "timeout"), this.abort(8));
      };
      function tc(a2, b2) {
        a2.c = false;
        a2.a && (a2.i = true, a2.a.abort(), a2.i = false);
        a2.l = b2;
        a2.g = 5;
        wc(a2);
        xc(a2);
      }
      function wc(a2) {
        a2.L || (a2.L = true, O(a2, "complete"), O(a2, "error"));
      }
      n.abort = function(a2) {
        this.a && this.c && (P(this.b, V(this, "Aborting")), this.c = false, this.i = true, this.a.abort(), this.i = false, this.g = a2 || 7, O(this, "complete"), O(this, "abort"), xc(this));
      };
      n.R = function() {
        this.K || (this.N || this.s || this.i ? yc(this) : this.W());
      };
      n.W = function() {
        yc(this);
      };
      function yc(a2) {
        if (a2.c && typeof qa != "undefined") {
          if (a2.J[1] && W(a2) == 4 && a2.getStatus() == 2)
            P(a2.b, V(a2, "Local request error detected and ignored"));
          else if (a2.s && W(a2) == 4)
            Jb(a2.R, 0, a2);
          else if (O(a2, "readystatechange"), W(a2) == 4) {
            P(a2.b, V(a2, "Request complete"));
            a2.c = false;
            try {
              var b2 = a2.getStatus();
              a:
                switch (b2) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var c2 = true;
                    break a;
                  default:
                    c2 = false;
                }
              var d2;
              if (!(d2 = c2)) {
                var f2;
                if (f2 = b2 === 0) {
                  var g = String(a2.v).match(nc)[1] || null;
                  if (!g && x.self && x.self.location) {
                    var e2 = x.self.location.protocol;
                    g = e2.substr(0, e2.length - 1);
                  }
                  f2 = !qc.test(g ? g.toLowerCase() : "");
                }
                d2 = f2;
              }
              if (d2)
                O(a2, "complete"), O(a2, "success");
              else {
                a2.g = 6;
                try {
                  var h = 2 < W(a2) ? a2.a.statusText : "";
                } catch (k) {
                  P(a2.b, "Can not get status: " + k.message), h = "";
                }
                a2.l = h + " [" + a2.getStatus() + "]";
                wc(a2);
              }
            } finally {
              xc(a2);
            }
          }
        }
      }
      function xc(a2) {
        if (a2.a) {
          uc(a2);
          var b2 = a2.a, c2 = a2.J[0] ? ra : null;
          a2.a = null;
          a2.J = null;
          O(a2, "ready");
          try {
            b2.onreadystatechange = c2;
          } catch (d2) {
            (a2 = a2.b) && $b(a2, Mb, "Problem encountered resetting onreadystatechange: " + d2.message);
          }
        }
      }
      function uc(a2) {
        a2.a && a2.I && (a2.a.ontimeout = null);
        a2.w && (x.clearTimeout(a2.w), a2.w = null);
      }
      function W(a2) {
        return a2.a ? a2.a.readyState : 0;
      }
      n.getStatus = function() {
        try {
          return 2 < W(this) ? this.a.status : -1;
        } catch (a2) {
          return -1;
        }
      };
      function zc(a2) {
        try {
          if (!a2.a)
            return null;
          if ("response" in a2.a)
            return a2.a.response;
          switch (a2.m) {
            case pc:
            case "text":
              return a2.a.responseText;
            case "arraybuffer":
              if ("mozResponseArrayBuffer" in a2.a)
                return a2.a.mozResponseArrayBuffer;
          }
          var b2 = a2.b;
          b2 && $b(b2, Mb, "Response type " + a2.m + " is not supported on this browser");
          return null;
        } catch (c2) {
          return P(a2.b, "Can not get response: " + c2.message), null;
        }
      }
      function Ac(a2, b2) {
        if (a2.a && W(a2) == 4)
          return a2 = a2.a.getResponseHeader(b2), a2 === null ? void 0 : a2;
      }
      function Bc(a2) {
        var b2 = {};
        a2 = (a2.a && W(a2) == 4 ? a2.a.getAllResponseHeaders() || "" : "").split("\r\n");
        for (var c2 = 0; c2 < a2.length; c2++)
          if (!/^[\s\xa0]*$/.test(a2[c2])) {
            var d2 = Va(a2[c2]), f2 = d2[0];
            d2 = d2[1];
            if (typeof d2 === "string") {
              d2 = d2.trim();
              var g = b2[f2] || [];
              b2[f2] = g;
              g.push(d2);
            }
          }
        return Sa(b2, function(e2) {
          return e2.join(", ");
        });
      }
      function V(a2, b2) {
        return b2 + " [" + a2.P + " " + a2.v + " " + a2.getStatus() + "]";
      }
      var Cc = {};
      var Dc = null;
      function Ec(a2) {
        var b2 = a2.length, c2 = 3 * b2 / 4;
        c2 % 3 ? c2 = Math.floor(c2) : H("=.", a2[b2 - 1]) && (c2 = H("=.", a2[b2 - 2]) ? c2 - 2 : c2 - 1);
        var d2 = new Uint8Array(c2), f2 = 0;
        Fc(a2, function(g) {
          d2[f2++] = g;
        });
        return d2.subarray(0, f2);
      }
      function Fc(a2, b2) {
        function c2(k) {
          for (; d2 < a2.length; ) {
            var l = a2.charAt(d2++), m = Dc[l];
            if (m != null)
              return m;
            if (!/^[\s\xa0]*$/.test(l))
              throw Error("Unknown base64 encoding at char: " + l);
          }
          return k;
        }
        Gc();
        for (var d2 = 0; ; ) {
          var f2 = c2(-1), g = c2(0), e2 = c2(64), h = c2(64);
          if (h === 64 && f2 === -1)
            break;
          b2(f2 << 2 | g >> 4);
          e2 != 64 && (b2(g << 4 & 240 | e2 >> 2), h != 64 && b2(e2 << 6 & 192 | h));
        }
      }
      function Gc() {
        if (!Dc) {
          Dc = {};
          for (var a2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c2 = 0; 5 > c2; c2++) {
            var d2 = a2.concat(b2[c2].split(""));
            Cc[c2] = d2;
            for (var f2 = 0; f2 < d2.length; f2++) {
              var g = d2[f2];
              Dc[g] === void 0 && (Dc[g] = f2);
            }
          }
        }
      }
      var Hc = ["content-type", "grpc-status", "grpc-message"];
      function X(a2) {
        this.a = a2.Z;
        this.m = null;
        this.b = [];
        this.h = [];
        this.g = [];
        this.f = [];
        this.c = [];
        this.l = false;
        this.i = 0;
        this.s = new Ea();
        var b2 = this;
        xb(this.a, "readystatechange", function() {
          var c2 = b2.a;
          if (c2 = c2.a ? c2.a.getResponseHeader("Content-Type") : null) {
            c2 = c2.toLowerCase();
            if (c2.lastIndexOf("application/grpc-web-text", 0) == 0) {
              c2 = b2.a;
              try {
                var d2 = c2.a ? c2.a.responseText : "";
              } catch (k) {
                P(c2.b, "Can not get responseText: " + k.message), d2 = "";
              }
              c2 = d2 || "";
              d2 = c2.length - c2.length % 4;
              c2 = c2.substr(b2.i, d2 - b2.i);
              if (c2.length == 0)
                return;
              b2.i = d2;
              c2 = Ec(c2);
            } else if (c2.lastIndexOf("application/grpc", 0) == 0)
              c2 = new Uint8Array(zc(b2.a));
            else {
              Y(b2, new E(2, "Unknown Content-type received."));
              return;
            }
            d2 = null;
            try {
              d2 = Ga(b2.s, c2);
            } catch (k) {
              Y(b2, new E(2, "Error in parsing response body"));
            }
            if (d2)
              for (c2 = 0; c2 < d2.length; c2++) {
                if (Ha in d2[c2]) {
                  var f2 = d2[c2][Ha];
                  if (f2) {
                    var g = void 0;
                    try {
                      g = b2.m(f2);
                    } catch (k) {
                      Y(b2, new E(13, "Error when deserializing response data: " + g));
                    }
                    if (g) {
                      f2 = b2;
                      for (var e2 = 0; e2 < f2.b.length; e2++)
                        f2.b[e2](g);
                    }
                  }
                }
                if (G in d2[c2] && 0 < d2[c2][G].length) {
                  f2 = "";
                  for (g = 0; g < d2[c2][G].length; g++)
                    f2 += String.fromCharCode(d2[c2][G][g]);
                  f2 = f2.trim().split("\r\n");
                  g = {};
                  for (e2 = 0; e2 < f2.length; e2++) {
                    var h = f2[e2].indexOf(":");
                    g[f2[e2].substring(0, h).trim()] = f2[e2].substring(h + 1).trim();
                  }
                  f2 = g;
                  g = 0;
                  e2 = "";
                  "grpc-status" in f2 && (g = Number(f2["grpc-status"]), delete f2["grpc-status"]);
                  "grpc-message" in f2 && (e2 = f2["grpc-message"], delete f2["grpc-message"]);
                  Y(b2, new E(g, e2, f2));
                }
              }
          }
        });
        xb(this.a, "complete", function() {
          var c2 = b2.a.g, d2 = 2, f2 = "", g = {}, e2 = Bc(b2.a);
          Object.keys(e2).forEach(function(h) {
            Hc.includes(h) || (g[h] = e2[h]);
          });
          Ic(b2, g);
          if (c2 != 0) {
            switch (c2) {
              case 7:
                d2 = 10;
                break;
              case 8:
                d2 = 4;
                break;
              case 6:
                d2 = za(b2.a.getStatus());
                break;
              default:
                d2 = 14;
            }
            d2 == 10 && b2.l || Y(b2, new E(d2, Ba(c2)));
          } else
            c2 = false, "grpc-status" in e2 && (d2 = Number(Ac(b2.a, "grpc-status")), "grpc-message" in e2 && (f2 = Ac(b2.a, "grpc-message")), d2 != 0 && (Y(b2, new E(d2, f2 || "", e2)), c2 = true)), c2 || Jc(b2);
        });
      }
      X.prototype.on = function(a2, b2) {
        a2 == "data" ? this.b.push(b2) : a2 == "status" ? this.h.push(b2) : a2 == "metadata" ? this.g.push(b2) : a2 == "end" ? this.c.push(b2) : a2 == "error" && this.f.push(b2);
        return this;
      };
      function Kc(a2, b2) {
        b2 = a2.indexOf(b2);
        -1 < b2 && a2.splice(b2, 1);
      }
      X.prototype.removeListener = function(a2, b2) {
        a2 == "data" ? Kc(this.b, b2) : a2 == "status" ? Kc(this.h, b2) : a2 == "metadata" ? Kc(this.g, b2) : a2 == "end" ? Kc(this.c, b2) : a2 == "error" && Kc(this.f, b2);
        return this;
      };
      X.prototype.cancel = function() {
        this.l = true;
        this.a.abort();
      };
      function Y(a2, b2) {
        if (b2.code != 0)
          for (var c2 = new E(b2.code, decodeURIComponent(b2.message || ""), b2.metadata), d2 = 0; d2 < a2.f.length; d2++)
            a2.f[d2](c2);
        b2 = { code: b2.code, details: decodeURIComponent(b2.message || ""), metadata: b2.metadata };
        for (c2 = 0; c2 < a2.h.length; c2++)
          a2.h[c2](b2);
      }
      function Ic(a2, b2) {
        for (var c2 = 0; c2 < a2.g.length; c2++)
          a2.g[c2](b2);
      }
      function Jc(a2) {
        for (var b2 = 0; b2 < a2.c.length; b2++)
          a2.c[b2]();
      }
      X.prototype.cancel = X.prototype.cancel;
      X.prototype.removeListener = X.prototype.removeListener;
      X.prototype.on = X.prototype.on;
      function Lc(a2) {
        var b2 = "";
        Ra(a2, function(c2, d2) {
          b2 += d2;
          b2 += ":";
          b2 += c2;
          b2 += "\r\n";
        });
        return b2;
      }
      function Z(a2, b2) {
        a2 = a2 === void 0 ? {} : a2;
        this.a = a2.format || z("format", a2) || "text";
        this.g = a2.aa || z("suppressCorsPreflight", a2) || false;
        this.f = a2.withCredentials || z("withCredentials", a2) || false;
        this.b = a2.$ || z("streamInterceptors", a2) || [];
        this.h = a2.ba || z("unaryInterceptors", a2) || [];
        this.c = b2 || null;
      }
      Z.prototype.X = function(a2, b2, c2, d2, f2) {
        var g = this, e2 = a2.substr(0, a2.length - d2.name.length);
        a2 = Mc(function(h) {
          return Nc(g, h, e2);
        }, this.b).call(this, ya(d2, b2, c2));
        Oc(a2, f2, false);
        return new Aa(a2);
      };
      Z.prototype.S = function(a2, b2, c2, d2) {
        var f2 = this, g = a2.substr(0, a2.length - d2.name.length);
        return Mc(function(e2) {
          return new Promise(function(h, k) {
            var l = Nc(f2, e2, g), m, p, q;
            Oc(l, function(w, y, M, Rb) {
              w ? k(w) : y ? q = y : M ? p = M : Rb ? m = Rb : (w = e2.getMethodDescriptor(), y = m, y = y === void 0 ? {} : y, h(new D(q, w, y, p === void 0 ? null : p)));
            }, true);
          });
        }, this.h).call(this, ya(d2, b2, c2)).then(function(e2) {
          return e2.getResponseMessage();
        });
      };
      Z.prototype.unaryCall = function(a2, b2, c2, d2) {
        return this.S(a2, b2, c2, d2);
      };
      Z.prototype.Y = function(a2, b2, c2, d2) {
        var f2 = this, g = a2.substr(0, a2.length - d2.name.length);
        return Mc(function(e2) {
          return Nc(f2, e2, g);
        }, this.b).call(this, ya(d2, b2, c2));
      };
      function Nc(a2, b2, c2) {
        var d2 = b2.getMethodDescriptor(), f2 = c2 + d2.name;
        c2 = a2.c ? a2.c : new oc();
        c2.M = a2.f;
        var g = new X({ Z: c2 });
        g.m = d2.b;
        var e2 = b2.getMetadata();
        for (h in e2)
          c2.headers.set(h, e2[h]);
        a2.a == "text" ? (c2.headers.set("Content-Type", "application/grpc-web-text"), c2.headers.set("Accept", "application/grpc-web-text")) : c2.headers.set("Content-Type", "application/grpc-web+proto");
        c2.headers.set("X-User-Agent", "grpc-web-javascript/0.1");
        c2.headers.set("X-Grpc-Web", "1");
        if (c2.headers.has("deadline")) {
          var h = Number(c2.headers.get("deadline"));
          h = Math.ceil(h - new Date().getTime());
          c2.headers.delete("deadline");
          h === Infinity && (h = 0);
          0 < h && (c2.headers.set("grpc-timeout", h + "m"), c2.h = Math.max(0, Math.max(1e3, Math.ceil(1.1 * h))));
        }
        if (a2.g) {
          e2 = c2.headers;
          h = {};
          for (var k = ha(e2.keys()), l = k.next(); !l.done; l = k.next())
            l = l.value, h[l] = e2.get(l);
          c2.headers.clear();
          b: {
            for (m in h) {
              var m = false;
              break b;
            }
            m = true;
          }
          if (!m)
            if (h = Lc(h), typeof f2 === "string") {
              if (m = encodeURIComponent("$httpHeaders"), h = h != null ? "=" + encodeURIComponent(String(h)) : "", m += h)
                h = f2.indexOf("#"), 0 > h && (h = f2.length), e2 = f2.indexOf("?"), 0 > e2 || e2 > h ? (e2 = h, k = "") : k = f2.substring(e2 + 1, h), f2 = [f2.substr(0, e2), k, f2.substr(h)], h = f2[1], f2[1] = m ? h ? h + "&" + m : m : h, f2 = f2[0] + (f2[1] ? "?" + f2[1] : "") + f2[2];
            } else
              f2.a("$httpHeaders", h);
        }
        b2 = (0, d2.a)(b2.getRequestMessage());
        d2 = b2.length;
        m = [0, 0, 0, 0];
        h = new Uint8Array(5 + d2);
        for (e2 = 3; 0 <= e2; e2--)
          m[e2] = d2 % 256, d2 >>>= 8;
        h.set(new Uint8Array(m), 1);
        h.set(b2, 5);
        b2 = h;
        if (a2.a == "text") {
          a2 = b2;
          var p;
          p === void 0 && (p = 0);
          Gc();
          p = Cc[p];
          b2 = Array(Math.floor(a2.length / 3));
          d2 = p[64] || "";
          for (m = h = 0; h < a2.length - 2; h += 3) {
            l = a2[h];
            var q = a2[h + 1];
            k = a2[h + 2];
            e2 = p[l >> 2];
            l = p[(l & 3) << 4 | q >> 4];
            q = p[(q & 15) << 2 | k >> 6];
            k = p[k & 63];
            b2[m++] = e2 + l + q + k;
          }
          e2 = 0;
          k = d2;
          switch (a2.length - h) {
            case 2:
              e2 = a2[h + 1], k = p[(e2 & 15) << 2] || d2;
            case 1:
              a2 = a2[h], b2[m] = p[a2 >> 2] + p[(a2 & 3) << 4 | e2 >> 4] + k + d2;
          }
          b2 = b2.join("");
        } else
          a2.a == "binary" && (c2.m = "arraybuffer");
        sc(c2, f2, b2);
        return g;
      }
      function Oc(a2, b2, c2) {
        var d2 = false, f2 = null, g = false;
        a2.on("data", function(e2) {
          d2 = true;
          f2 = e2;
        });
        a2.on("error", function(e2) {
          e2.code == 0 || g || (g = true, b2(e2, null));
        });
        a2.on("status", function(e2) {
          e2.code == 0 || g ? c2 && b2(null, null, e2) : (g = true, b2({ code: e2.code, message: e2.details, metadata: e2.metadata }, null));
        });
        if (c2)
          a2.on("metadata", function(e2) {
            b2(null, null, null, e2);
          });
        a2.on("end", function() {
          g || (d2 ? b2(null, f2) : b2({ code: 2, message: "Incomplete response" }));
          c2 && b2(null, null);
        });
      }
      function Mc(a2, b2) {
        var c2 = a2;
        b2.forEach(function(d2) {
          var f2 = c2;
          c2 = function(g) {
            return d2.intercept(g, f2);
          };
        });
        return c2;
      }
      Z.prototype.serverStreaming = Z.prototype.Y;
      Z.prototype.unaryCall = Z.prototype.unaryCall;
      Z.prototype.thenableCall = Z.prototype.S;
      Z.prototype.rpcCall = Z.prototype.X;
      module2.exports.GrpcWebClientBase = Z;
      module2.exports.StatusCode = { OK: 0, CANCELLED: 1, UNKNOWN: 2, INVALID_ARGUMENT: 3, DEADLINE_EXCEEDED: 4, NOT_FOUND: 5, ALREADY_EXISTS: 6, PERMISSION_DENIED: 7, UNAUTHENTICATED: 16, RESOURCE_EXHAUSTED: 8, FAILED_PRECONDITION: 9, ABORTED: 10, OUT_OF_RANGE: 11, UNIMPLEMENTED: 12, INTERNAL: 13, UNAVAILABLE: 14, DATA_LOSS: 15 };
      module2.exports.MethodDescriptor = function(a2, b2, c2, d2, f2, g) {
        this.name = a2;
        this.a = f2;
        this.b = g;
      };
      module2.exports.MethodType = { UNARY: "unary", SERVER_STREAMING: "server_streaming", BIDI_STREAMING: "bidi_streaming" };
    }
  });

  // node_modules/google-protobuf/google-protobuf.js
  var require_google_protobuf = __commonJS({
    "node_modules/google-protobuf/google-protobuf.js"(exports, module) {
      var $jscomp = $jscomp || {};
      $jscomp.scope = {};
      $jscomp.findInternal = function(a2, b2, c2) {
        a2 instanceof String && (a2 = String(a2));
        for (var d2 = a2.length, e2 = 0; e2 < d2; e2++) {
          var f2 = a2[e2];
          if (b2.call(c2, f2, e2, a2))
            return { i: e2, v: f2 };
        }
        return { i: -1, v: void 0 };
      };
      $jscomp.ASSUME_ES5 = false;
      $jscomp.ASSUME_NO_NATIVE_MAP = false;
      $jscomp.ASSUME_NO_NATIVE_SET = false;
      $jscomp.SIMPLE_FROUND_POLYFILL = false;
      $jscomp.defineProperty = $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function(a2, b2, c2) {
        a2 != Array.prototype && a2 != Object.prototype && (a2[b2] = c2.value);
      };
      $jscomp.getGlobal = function(a2) {
        return typeof window != "undefined" && window === a2 ? a2 : typeof global != "undefined" && global != null ? global : a2;
      };
      $jscomp.global = $jscomp.getGlobal(exports);
      $jscomp.polyfill = function(a2, b2, c2, d2) {
        if (b2) {
          c2 = $jscomp.global;
          a2 = a2.split(".");
          for (d2 = 0; d2 < a2.length - 1; d2++) {
            var e2 = a2[d2];
            e2 in c2 || (c2[e2] = {});
            c2 = c2[e2];
          }
          a2 = a2[a2.length - 1];
          d2 = c2[a2];
          b2 = b2(d2);
          b2 != d2 && b2 != null && $jscomp.defineProperty(c2, a2, { configurable: true, writable: true, value: b2 });
        }
      };
      $jscomp.polyfill("Array.prototype.findIndex", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          return $jscomp.findInternal(this, a3, c2).i;
        };
      }, "es6", "es3");
      $jscomp.checkStringArgs = function(a2, b2, c2) {
        if (a2 == null)
          throw new TypeError("The 'this' value for String.prototype." + c2 + " must not be null or undefined");
        if (b2 instanceof RegExp)
          throw new TypeError("First argument to String.prototype." + c2 + " must not be a regular expression");
        return a2 + "";
      };
      $jscomp.polyfill("String.prototype.endsWith", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          var b2 = $jscomp.checkStringArgs(this, a3, "endsWith");
          a3 += "";
          c2 === void 0 && (c2 = b2.length);
          c2 = Math.max(0, Math.min(c2 | 0, b2.length));
          for (var e2 = a3.length; 0 < e2 && 0 < c2; )
            if (b2[--c2] != a3[--e2])
              return false;
          return 0 >= e2;
        };
      }, "es6", "es3");
      $jscomp.polyfill("Array.prototype.find", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          return $jscomp.findInternal(this, a3, c2).v;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.startsWith", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          var b2 = $jscomp.checkStringArgs(this, a3, "startsWith");
          a3 += "";
          var e2 = b2.length, f2 = a3.length;
          c2 = Math.max(0, Math.min(c2 | 0, b2.length));
          for (var g = 0; g < f2 && c2 < e2; )
            if (b2[c2++] != a3[g++])
              return false;
          return g >= f2;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.repeat", function(a2) {
        return a2 ? a2 : function(a3) {
          var b2 = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > a3 || 1342177279 < a3)
            throw new RangeError("Invalid count value");
          a3 |= 0;
          for (var d2 = ""; a3; )
            if (a3 & 1 && (d2 += b2), a3 >>>= 1)
              b2 += b2;
          return d2;
        };
      }, "es6", "es3");
      var COMPILED = true;
      var goog = goog || {};
      goog.global = exports || self;
      goog.isDef = function(a2) {
        return a2 !== void 0;
      };
      goog.isString = function(a2) {
        return typeof a2 == "string";
      };
      goog.isBoolean = function(a2) {
        return typeof a2 == "boolean";
      };
      goog.isNumber = function(a2) {
        return typeof a2 == "number";
      };
      goog.exportPath_ = function(a2, b2, c2) {
        a2 = a2.split(".");
        c2 = c2 || goog.global;
        a2[0] in c2 || typeof c2.execScript == "undefined" || c2.execScript("var " + a2[0]);
        for (var d2; a2.length && (d2 = a2.shift()); )
          !a2.length && goog.isDef(b2) ? c2[d2] = b2 : c2 = c2[d2] && c2[d2] !== Object.prototype[d2] ? c2[d2] : c2[d2] = {};
      };
      goog.define = function(a2, b2) {
        if (!COMPILED) {
          var c2 = goog.global.CLOSURE_UNCOMPILED_DEFINES, d2 = goog.global.CLOSURE_DEFINES;
          c2 && c2.nodeType === void 0 && Object.prototype.hasOwnProperty.call(c2, a2) ? b2 = c2[a2] : d2 && d2.nodeType === void 0 && Object.prototype.hasOwnProperty.call(d2, a2) && (b2 = d2[a2]);
        }
        return b2;
      };
      goog.FEATURESET_YEAR = 2012;
      goog.DEBUG = true;
      goog.LOCALE = "en";
      goog.TRUSTED_SITE = true;
      goog.STRICT_MODE_COMPATIBLE = false;
      goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
      goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
      goog.provide = function(a2) {
        if (goog.isInModuleLoader_())
          throw Error("goog.provide cannot be used within a module.");
        if (!COMPILED && goog.isProvided_(a2))
          throw Error('Namespace "' + a2 + '" already declared.');
        goog.constructNamespace_(a2);
      };
      goog.constructNamespace_ = function(a2, b2) {
        if (!COMPILED) {
          delete goog.implicitNamespaces_[a2];
          for (var c2 = a2; (c2 = c2.substring(0, c2.lastIndexOf("."))) && !goog.getObjectByName(c2); )
            goog.implicitNamespaces_[c2] = true;
        }
        goog.exportPath_(a2, b2);
      };
      goog.getScriptNonce = function(a2) {
        if (a2 && a2 != goog.global)
          return goog.getScriptNonce_(a2.document);
        goog.cspNonce_ === null && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
        return goog.cspNonce_;
      };
      goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
      goog.cspNonce_ = null;
      goog.getScriptNonce_ = function(a2) {
        return (a2 = a2.querySelector && a2.querySelector("script[nonce]")) && (a2 = a2.nonce || a2.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a2) ? a2 : "";
      };
      goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
      goog.module = function(a2) {
        if (!goog.isString(a2) || !a2 || a2.search(goog.VALID_MODULE_RE_) == -1)
          throw Error("Invalid module identifier");
        if (!goog.isInGoogModuleLoader_())
          throw Error("Module " + a2 + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (goog.moduleLoaderState_.moduleName)
          throw Error("goog.module may only be called once per module.");
        goog.moduleLoaderState_.moduleName = a2;
        if (!COMPILED) {
          if (goog.isProvided_(a2))
            throw Error('Namespace "' + a2 + '" already declared.');
          delete goog.implicitNamespaces_[a2];
        }
      };
      goog.module.get = function(a2) {
        return goog.module.getInternal_(a2);
      };
      goog.module.getInternal_ = function(a2) {
        if (!COMPILED) {
          if (a2 in goog.loadedModules_)
            return goog.loadedModules_[a2].exports;
          if (!goog.implicitNamespaces_[a2])
            return a2 = goog.getObjectByName(a2), a2 != null ? a2 : null;
        }
        return null;
      };
      goog.ModuleType = { ES6: "es6", GOOG: "goog" };
      goog.moduleLoaderState_ = null;
      goog.isInModuleLoader_ = function() {
        return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
      };
      goog.isInGoogModuleLoader_ = function() {
        return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
      };
      goog.isInEs6ModuleLoader_ = function() {
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
          return true;
        var a2 = goog.global.$jscomp;
        return a2 ? typeof a2.getCurrentModulePath != "function" ? false : !!a2.getCurrentModulePath() : false;
      };
      goog.module.declareLegacyNamespace = function() {
        if (!COMPILED && !goog.isInGoogModuleLoader_())
          throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
        if (!COMPILED && !goog.moduleLoaderState_.moduleName)
          throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
        goog.moduleLoaderState_.declareLegacyNamespace = true;
      };
      goog.declareModuleId = function(a2) {
        if (!COMPILED) {
          if (!goog.isInEs6ModuleLoader_())
            throw Error("goog.declareModuleId may only be called from within an ES6 module");
          if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
            throw Error("goog.declareModuleId may only be called once per module.");
          if (a2 in goog.loadedModules_)
            throw Error('Module with namespace "' + a2 + '" already exists.');
        }
        if (goog.moduleLoaderState_)
          goog.moduleLoaderState_.moduleName = a2;
        else {
          var b2 = goog.global.$jscomp;
          if (!b2 || typeof b2.getCurrentModulePath != "function")
            throw Error('Module with namespace "' + a2 + '" has been loaded incorrectly.');
          b2 = b2.require(b2.getCurrentModulePath());
          goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: a2 };
        }
      };
      goog.setTestOnly = function(a2) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
          throw a2 = a2 || "", Error("Importing test-only code into non-debug environment" + (a2 ? ": " + a2 : "."));
      };
      goog.forwardDeclare = function(a2) {
      };
      COMPILED || (goog.isProvided_ = function(a2) {
        return a2 in goog.loadedModules_ || !goog.implicitNamespaces_[a2] && goog.isDefAndNotNull(goog.getObjectByName(a2));
      }, goog.implicitNamespaces_ = { "goog.module": true });
      goog.getObjectByName = function(a2, b2) {
        a2 = a2.split(".");
        b2 = b2 || goog.global;
        for (var c2 = 0; c2 < a2.length; c2++)
          if (b2 = b2[a2[c2]], !goog.isDefAndNotNull(b2))
            return null;
        return b2;
      };
      goog.globalize = function(a2, b2) {
        b2 = b2 || goog.global;
        for (var c2 in a2)
          b2[c2] = a2[c2];
      };
      goog.addDependency = function(a2, b2, c2, d2) {
        !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a2, b2, c2, d2);
      };
      goog.ENABLE_DEBUG_LOADER = true;
      goog.logToConsole_ = function(a2) {
        goog.global.console && goog.global.console.error(a2);
      };
      goog.require = function(a2) {
        if (!COMPILED) {
          goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a2);
          if (goog.isProvided_(a2)) {
            if (goog.isInModuleLoader_())
              return goog.module.getInternal_(a2);
          } else if (goog.ENABLE_DEBUG_LOADER) {
            var b2 = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
              goog.debugLoader_.load_(a2);
            } finally {
              goog.moduleLoaderState_ = b2;
            }
          }
          return null;
        }
      };
      goog.requireType = function(a2) {
        return {};
      };
      goog.basePath = "";
      goog.nullFunction = function() {
      };
      goog.abstractMethod = function() {
        throw Error("unimplemented abstract method");
      };
      goog.addSingletonGetter = function(a2) {
        a2.instance_ = void 0;
        a2.getInstance = function() {
          if (a2.instance_)
            return a2.instance_;
          goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a2);
          return a2.instance_ = new a2();
        };
      };
      goog.instantiatedSingletons_ = [];
      goog.LOAD_MODULE_USING_EVAL = true;
      goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
      goog.loadedModules_ = {};
      goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
      goog.TRANSPILE = "detect";
      goog.ASSUME_ES_MODULES_TRANSPILED = false;
      goog.TRANSPILE_TO_LANGUAGE = "";
      goog.TRANSPILER = "transpile.js";
      goog.hasBadLetScoping = null;
      goog.useSafari10Workaround = function() {
        if (goog.hasBadLetScoping == null) {
          try {
            var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
          } catch (b2) {
            a = false;
          }
          goog.hasBadLetScoping = a;
        }
        return goog.hasBadLetScoping;
      };
      goog.workaroundSafari10EvalBug = function(a2) {
        return "(function(){" + a2 + "\n;})();\n";
      };
      goog.loadModule = function(a2) {
        var b2 = goog.moduleLoaderState_;
        try {
          goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
          if (goog.isFunction(a2))
            var c2 = a2.call(void 0, {});
          else if (goog.isString(a2))
            goog.useSafari10Workaround() && (a2 = goog.workaroundSafari10EvalBug(a2)), c2 = goog.loadModuleFromSource_.call(void 0, a2);
          else
            throw Error("Invalid module definition");
          var d2 = goog.moduleLoaderState_.moduleName;
          if (goog.isString(d2) && d2)
            goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d2, c2) : goog.SEAL_MODULE_EXPORTS && Object.seal && typeof c2 == "object" && c2 != null && Object.seal(c2), goog.loadedModules_[d2] = { exports: c2, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
          else
            throw Error('Invalid module name "' + d2 + '"');
        } finally {
          goog.moduleLoaderState_ = b2;
        }
      };
      goog.loadModuleFromSource_ = function(a) {
        eval(a);
        return {};
      };
      goog.normalizePath_ = function(a2) {
        a2 = a2.split("/");
        for (var b2 = 0; b2 < a2.length; )
          a2[b2] == "." ? a2.splice(b2, 1) : b2 && a2[b2] == ".." && a2[b2 - 1] && a2[b2 - 1] != ".." ? a2.splice(--b2, 2) : b2++;
        return a2.join("/");
      };
      goog.loadFileSync_ = function(a2) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC)
          return goog.global.CLOSURE_LOAD_FILE_SYNC(a2);
        try {
          var b2 = new goog.global.XMLHttpRequest();
          b2.open("get", a2, false);
          b2.send();
          return b2.status == 0 || b2.status == 200 ? b2.responseText : null;
        } catch (c2) {
          return null;
        }
      };
      goog.transpile_ = function(a2, b2, c2) {
        var d2 = goog.global.$jscomp;
        d2 || (goog.global.$jscomp = d2 = {});
        var e2 = d2.transpile;
        if (!e2) {
          var f2 = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f2);
          if (g) {
            (function() {
              (0, eval)(g + "\n//# sourceURL=" + f2);
            }).call(goog.global);
            if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
              throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
            goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
            d2 = goog.global.$jscomp;
            e2 = d2.transpile;
          }
        }
        e2 || (e2 = d2.transpile = function(a3, b3) {
          goog.logToConsole_(b3 + " requires transpilation but no transpiler was found.");
          return a3;
        });
        return e2(a2, b2, c2);
      };
      goog.typeOf = function(a2) {
        var b2 = typeof a2;
        if (b2 == "object")
          if (a2) {
            if (a2 instanceof Array)
              return "array";
            if (a2 instanceof Object)
              return b2;
            var c2 = Object.prototype.toString.call(a2);
            if (c2 == "[object Window]")
              return "object";
            if (c2 == "[object Array]" || typeof a2.length == "number" && typeof a2.splice != "undefined" && typeof a2.propertyIsEnumerable != "undefined" && !a2.propertyIsEnumerable("splice"))
              return "array";
            if (c2 == "[object Function]" || typeof a2.call != "undefined" && typeof a2.propertyIsEnumerable != "undefined" && !a2.propertyIsEnumerable("call"))
              return "function";
          } else
            return "null";
        else if (b2 == "function" && typeof a2.call == "undefined")
          return "object";
        return b2;
      };
      goog.isNull = function(a2) {
        return a2 === null;
      };
      goog.isDefAndNotNull = function(a2) {
        return a2 != null;
      };
      goog.isArray = function(a2) {
        return goog.typeOf(a2) == "array";
      };
      goog.isArrayLike = function(a2) {
        var b2 = goog.typeOf(a2);
        return b2 == "array" || b2 == "object" && typeof a2.length == "number";
      };
      goog.isDateLike = function(a2) {
        return goog.isObject(a2) && typeof a2.getFullYear == "function";
      };
      goog.isFunction = function(a2) {
        return goog.typeOf(a2) == "function";
      };
      goog.isObject = function(a2) {
        var b2 = typeof a2;
        return b2 == "object" && a2 != null || b2 == "function";
      };
      goog.getUid = function(a2) {
        return a2[goog.UID_PROPERTY_] || (a2[goog.UID_PROPERTY_] = ++goog.uidCounter_);
      };
      goog.hasUid = function(a2) {
        return !!a2[goog.UID_PROPERTY_];
      };
      goog.removeUid = function(a2) {
        a2 !== null && "removeAttribute" in a2 && a2.removeAttribute(goog.UID_PROPERTY_);
        try {
          delete a2[goog.UID_PROPERTY_];
        } catch (b2) {
        }
      };
      goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
      goog.uidCounter_ = 0;
      goog.getHashCode = goog.getUid;
      goog.removeHashCode = goog.removeUid;
      goog.cloneObject = function(a2) {
        var b2 = goog.typeOf(a2);
        if (b2 == "object" || b2 == "array") {
          if (typeof a2.clone === "function")
            return a2.clone();
          b2 = b2 == "array" ? [] : {};
          for (var c2 in a2)
            b2[c2] = goog.cloneObject(a2[c2]);
          return b2;
        }
        return a2;
      };
      goog.bindNative_ = function(a2, b2, c2) {
        return a2.call.apply(a2.bind, arguments);
      };
      goog.bindJs_ = function(a2, b2, c2) {
        if (!a2)
          throw Error();
        if (2 < arguments.length) {
          var d2 = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c3 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c3, d2);
            return a2.apply(b2, c3);
          };
        }
        return function() {
          return a2.apply(b2, arguments);
        };
      };
      goog.bind = function(a2, b2, c2) {
        Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
        return goog.bind.apply(null, arguments);
      };
      goog.partial = function(a2, b2) {
        var c2 = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b3 = c2.slice();
          b3.push.apply(b3, arguments);
          return a2.apply(this, b3);
        };
      };
      goog.mixin = function(a2, b2) {
        for (var c2 in b2)
          a2[c2] = b2[c2];
      };
      goog.now = goog.TRUSTED_SITE && Date.now || function() {
        return +new Date();
      };
      goog.globalEval = function(a2) {
        if (goog.global.execScript)
          goog.global.execScript(a2, "JavaScript");
        else if (goog.global.eval) {
          if (goog.evalWorksForGlobals_ == null) {
            try {
              goog.global.eval("var _evalTest_ = 1;");
            } catch (d2) {
            }
            if (typeof goog.global._evalTest_ != "undefined") {
              try {
                delete goog.global._evalTest_;
              } catch (d2) {
              }
              goog.evalWorksForGlobals_ = true;
            } else
              goog.evalWorksForGlobals_ = false;
          }
          if (goog.evalWorksForGlobals_)
            goog.global.eval(a2);
          else {
            var b2 = goog.global.document, c2 = b2.createElement("SCRIPT");
            c2.type = "text/javascript";
            c2.defer = false;
            c2.appendChild(b2.createTextNode(a2));
            b2.head.appendChild(c2);
            b2.head.removeChild(c2);
          }
        } else
          throw Error("goog.globalEval not available");
      };
      goog.evalWorksForGlobals_ = null;
      goog.getCssName = function(a2, b2) {
        if (String(a2).charAt(0) == ".")
          throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a2);
        var c2 = function(a3) {
          return goog.cssNameMapping_[a3] || a3;
        }, d2 = function(a3) {
          a3 = a3.split("-");
          for (var b3 = [], d3 = 0; d3 < a3.length; d3++)
            b3.push(c2(a3[d3]));
          return b3.join("-");
        };
        d2 = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? c2 : d2 : function(a3) {
          return a3;
        };
        a2 = b2 ? a2 + "-" + d2(b2) : d2(a2);
        return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a2) : a2;
      };
      goog.setCssNameMapping = function(a2, b2) {
        goog.cssNameMapping_ = a2;
        goog.cssNameMappingStyle_ = b2;
      };
      !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
      goog.getMsg = function(a2, b2, c2) {
        c2 && c2.html && (a2 = a2.replace(/</g, "&lt;"));
        b2 && (a2 = a2.replace(/\{\$([^}]+)}/g, function(a3, c3) {
          return b2 != null && c3 in b2 ? b2[c3] : a3;
        }));
        return a2;
      };
      goog.getMsgWithFallback = function(a2, b2) {
        return a2;
      };
      goog.exportSymbol = function(a2, b2, c2) {
        goog.exportPath_(a2, b2, c2);
      };
      goog.exportProperty = function(a2, b2, c2) {
        a2[b2] = c2;
      };
      goog.inherits = function(a2, b2) {
        function c2() {
        }
        c2.prototype = b2.prototype;
        a2.superClass_ = b2.prototype;
        a2.prototype = new c2();
        a2.prototype.constructor = a2;
        a2.base = function(a3, c3, f2) {
          for (var d2 = Array(arguments.length - 2), e2 = 2; e2 < arguments.length; e2++)
            d2[e2 - 2] = arguments[e2];
          return b2.prototype[c3].apply(a3, d2);
        };
      };
      goog.base = function(a2, b2, c2) {
        var d2 = arguments.callee.caller;
        if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d2)
          throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (typeof d2.superClass_ !== "undefined") {
          for (var e2 = Array(arguments.length - 1), f2 = 1; f2 < arguments.length; f2++)
            e2[f2 - 1] = arguments[f2];
          return d2.superClass_.constructor.apply(a2, e2);
        }
        if (typeof b2 != "string" && typeof b2 != "symbol")
          throw Error("method names provided to goog.base must be a string or a symbol");
        e2 = Array(arguments.length - 2);
        for (f2 = 2; f2 < arguments.length; f2++)
          e2[f2 - 2] = arguments[f2];
        f2 = false;
        for (var g = a2.constructor.prototype; g; g = Object.getPrototypeOf(g))
          if (g[b2] === d2)
            f2 = true;
          else if (f2)
            return g[b2].apply(a2, e2);
        if (a2[b2] === d2)
          return a2.constructor.prototype[b2].apply(a2, e2);
        throw Error("goog.base called from a method of one name to a method of a different name");
      };
      goog.scope = function(a2) {
        if (goog.isInModuleLoader_())
          throw Error("goog.scope is not supported within a module.");
        a2.call(goog.global);
      };
      COMPILED || (goog.global.COMPILED = COMPILED);
      goog.defineClass = function(a2, b2) {
        var c2 = b2.constructor, d2 = b2.statics;
        c2 && c2 != Object.prototype.constructor || (c2 = function() {
          throw Error("cannot instantiate an interface (no constructor defined).");
        });
        c2 = goog.defineClass.createSealingConstructor_(c2, a2);
        a2 && goog.inherits(c2, a2);
        delete b2.constructor;
        delete b2.statics;
        goog.defineClass.applyProperties_(c2.prototype, b2);
        d2 != null && (d2 instanceof Function ? d2(c2) : goog.defineClass.applyProperties_(c2, d2));
        return c2;
      };
      goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
      goog.defineClass.createSealingConstructor_ = function(a2, b2) {
        if (!goog.defineClass.SEAL_CLASS_INSTANCES)
          return a2;
        var c2 = !goog.defineClass.isUnsealable_(b2), d2 = function() {
          var b3 = a2.apply(this, arguments) || this;
          b3[goog.UID_PROPERTY_] = b3[goog.UID_PROPERTY_];
          this.constructor === d2 && c2 && Object.seal instanceof Function && Object.seal(b3);
          return b3;
        };
        return d2;
      };
      goog.defineClass.isUnsealable_ = function(a2) {
        return a2 && a2.prototype && a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
      };
      goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.defineClass.applyProperties_ = function(a2, b2) {
        for (var c2 in b2)
          Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
        for (var d2 = 0; d2 < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d2++)
          c2 = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d2], Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
      };
      goog.tagUnsealableClass = function(a2) {
        !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
      };
      goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
      !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
        var a2 = goog.global.document;
        return a2 != null && "write" in a2;
      }, goog.isDocumentLoading_ = function() {
        var a2 = goog.global.document;
        return a2.attachEvent ? a2.readyState != "complete" : a2.readyState == "loading";
      }, goog.findBasePath_ = function() {
        if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH))
          goog.basePath = goog.global.CLOSURE_BASE_PATH;
        else if (goog.inHtmlDocument_()) {
          var a2 = goog.global.document, b2 = a2.currentScript;
          a2 = b2 ? [b2] : a2.getElementsByTagName("SCRIPT");
          for (b2 = a2.length - 1; 0 <= b2; --b2) {
            var c2 = a2[b2].src, d2 = c2.lastIndexOf("?");
            d2 = d2 == -1 ? c2.length : d2;
            if (c2.substr(d2 - 7, 7) == "base.js") {
              goog.basePath = c2.substr(0, d2 - 7);
              break;
            }
          }
        }
      }, goog.findBasePath_(), goog.Transpiler = function() {
        this.requiresTranspilation_ = null;
        this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
      }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
        function a(a2, b2) {
          e ? d[a2] = true : b2() ? (c = a2, d[a2] = false) : e = d[a2] = true;
        }
        function b(a) {
          try {
            return !!eval(a);
          } catch (h) {
            return false;
          }
        }
        var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
        a("es5", function() {
          return b("[1,].length==1");
        });
        a("es6", function() {
          return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
        });
        a("es7", function() {
          return b("2 ** 2 == 4");
        });
        a("es8", function() {
          return b("async () => 1, true");
        });
        a("es9", function() {
          return b("({...rest} = {}), true");
        });
        a("es_next", function() {
          return false;
        });
        return { target: c, map: d };
      }, goog.Transpiler.prototype.needsTranspile = function(a2, b2) {
        if (goog.TRANSPILE == "always")
          return true;
        if (goog.TRANSPILE == "never")
          return false;
        if (!this.requiresTranspilation_) {
          var c2 = this.createRequiresTranspilation_();
          this.requiresTranspilation_ = c2.map;
          this.transpilationTarget_ = this.transpilationTarget_ || c2.target;
        }
        if (a2 in this.requiresTranspilation_)
          return this.requiresTranspilation_[a2] ? true : !goog.inHtmlDocument_() || b2 != "es6" || "noModule" in goog.global.document.createElement("script") ? false : true;
        throw Error("Unknown language mode: " + a2);
      }, goog.Transpiler.prototype.transpile = function(a2, b2) {
        return goog.transpile_(a2, b2, this.transpilationTarget_);
      }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a2) {
        return a2.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
      }, goog.DebugLoader_ = function() {
        this.dependencies_ = {};
        this.idToPath_ = {};
        this.written_ = {};
        this.loadingDeps_ = [];
        this.depsToLoad_ = [];
        this.paused_ = false;
        this.factory_ = new goog.DependencyFactory(goog.transpiler_);
        this.deferredCallbacks_ = {};
        this.deferredQueue_ = [];
      }, goog.DebugLoader_.prototype.bootstrap = function(a2, b2) {
        function c2() {
          d2 && (goog.global.setTimeout(d2, 0), d2 = null);
        }
        var d2 = b2;
        if (a2.length) {
          b2 = [];
          for (var e2 = 0; e2 < a2.length; e2++) {
            var f2 = this.getPathFromDeps_(a2[e2]);
            if (!f2)
              throw Error("Unregonized namespace: " + a2[e2]);
            b2.push(this.dependencies_[f2]);
          }
          f2 = goog.require;
          var g = 0;
          for (e2 = 0; e2 < a2.length; e2++)
            f2(a2[e2]), b2[e2].onLoad(function() {
              ++g == a2.length && c2();
            });
        } else
          c2();
      }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
        this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
        this.loadDeps_();
      }, goog.DebugLoader_.prototype.requested = function(a2, b2) {
        (a2 = this.getPathFromDeps_(a2)) && (b2 || this.areDepsLoaded_(this.dependencies_[a2].requires)) && (b2 = this.deferredCallbacks_[a2]) && (delete this.deferredCallbacks_[a2], b2());
      }, goog.DebugLoader_.prototype.setDependencyFactory = function(a2) {
        this.factory_ = a2;
      }, goog.DebugLoader_.prototype.load_ = function(a2) {
        if (this.getPathFromDeps_(a2)) {
          var b2 = this, c2 = [], d2 = function(a3) {
            var e2 = b2.getPathFromDeps_(a3);
            if (!e2)
              throw Error("Bad dependency path or symbol: " + a3);
            if (!b2.written_[e2]) {
              b2.written_[e2] = true;
              a3 = b2.dependencies_[e2];
              for (e2 = 0; e2 < a3.requires.length; e2++)
                goog.isProvided_(a3.requires[e2]) || d2(a3.requires[e2]);
              c2.push(a3);
            }
          };
          d2(a2);
          a2 = !!this.depsToLoad_.length;
          this.depsToLoad_ = this.depsToLoad_.concat(c2);
          this.paused_ || a2 || this.loadDeps_();
        } else
          throw a2 = "goog.require could not find: " + a2, goog.logToConsole_(a2), Error(a2);
      }, goog.DebugLoader_.prototype.loadDeps_ = function() {
        for (var a2 = this, b2 = this.paused_; this.depsToLoad_.length && !b2; )
          (function() {
            var c2 = false, d2 = a2.depsToLoad_.shift(), e2 = false;
            a2.loading_(d2);
            var f2 = { pause: function() {
              if (c2)
                throw Error("Cannot call pause after the call to load.");
              b2 = true;
            }, resume: function() {
              c2 ? a2.resume_() : b2 = false;
            }, loaded: function() {
              if (e2)
                throw Error("Double call to loaded.");
              e2 = true;
              a2.loaded_(d2);
            }, pending: function() {
              for (var b3 = [], c3 = 0; c3 < a2.loadingDeps_.length; c3++)
                b3.push(a2.loadingDeps_[c3]);
              return b3;
            }, setModuleState: function(a3) {
              goog.moduleLoaderState_ = { type: a3, moduleName: "", declareLegacyNamespace: false };
            }, registerEs6ModuleExports: function(a3, b3, c3) {
              c3 && (goog.loadedModules_[c3] = { exports: b3, type: goog.ModuleType.ES6, moduleId: c3 || "" });
            }, registerGoogModuleExports: function(a3, b3) {
              goog.loadedModules_[a3] = { exports: b3, type: goog.ModuleType.GOOG, moduleId: a3 };
            }, clearModuleState: function() {
              goog.moduleLoaderState_ = null;
            }, defer: function(b3) {
              if (c2)
                throw Error("Cannot register with defer after the call to load.");
              a2.defer_(d2, b3);
            }, areDepsLoaded: function() {
              return a2.areDepsLoaded_(d2.requires);
            } };
            try {
              d2.load(f2);
            } finally {
              c2 = true;
            }
          })();
        b2 && this.pause_();
      }, goog.DebugLoader_.prototype.pause_ = function() {
        this.paused_ = true;
      }, goog.DebugLoader_.prototype.resume_ = function() {
        this.paused_ && (this.paused_ = false, this.loadDeps_());
      }, goog.DebugLoader_.prototype.loading_ = function(a2) {
        this.loadingDeps_.push(a2);
      }, goog.DebugLoader_.prototype.loaded_ = function(a2) {
        for (var b2 = 0; b2 < this.loadingDeps_.length; b2++)
          if (this.loadingDeps_[b2] == a2) {
            this.loadingDeps_.splice(b2, 1);
            break;
          }
        for (b2 = 0; b2 < this.deferredQueue_.length; b2++)
          if (this.deferredQueue_[b2] == a2.path) {
            this.deferredQueue_.splice(b2, 1);
            break;
          }
        if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
          for (; this.deferredQueue_.length; )
            this.requested(this.deferredQueue_.shift(), true);
        a2.loaded();
      }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a2) {
        for (var b2 = 0; b2 < a2.length; b2++) {
          var c2 = this.getPathFromDeps_(a2[b2]);
          if (!c2 || !(c2 in this.deferredCallbacks_ || goog.isProvided_(a2[b2])))
            return false;
        }
        return true;
      }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a2) {
        return a2 in this.idToPath_ ? this.idToPath_[a2] : a2 in this.dependencies_ ? a2 : null;
      }, goog.DebugLoader_.prototype.defer_ = function(a2, b2) {
        this.deferredCallbacks_[a2.path] = b2;
        this.deferredQueue_.push(a2.path);
      }, goog.LoadController = function() {
      }, goog.LoadController.prototype.pause = function() {
      }, goog.LoadController.prototype.resume = function() {
      }, goog.LoadController.prototype.loaded = function() {
      }, goog.LoadController.prototype.pending = function() {
      }, goog.LoadController.prototype.registerEs6ModuleExports = function(a2, b2, c2) {
      }, goog.LoadController.prototype.setModuleState = function(a2) {
      }, goog.LoadController.prototype.clearModuleState = function() {
      }, goog.LoadController.prototype.defer = function(a2) {
      }, goog.LoadController.prototype.areDepsLoaded = function() {
      }, goog.Dependency = function(a2, b2, c2, d2, e2) {
        this.path = a2;
        this.relativePath = b2;
        this.provides = c2;
        this.requires = d2;
        this.loadFlags = e2;
        this.loaded_ = false;
        this.loadCallbacks_ = [];
      }, goog.Dependency.prototype.getPathName = function() {
        var a2 = this.path, b2 = a2.indexOf("://");
        0 <= b2 && (a2 = a2.substring(b2 + 3), b2 = a2.indexOf("/"), 0 <= b2 && (a2 = a2.substring(b2 + 1)));
        return a2;
      }, goog.Dependency.prototype.onLoad = function(a2) {
        this.loaded_ ? a2() : this.loadCallbacks_.push(a2);
      }, goog.Dependency.prototype.loaded = function() {
        this.loaded_ = true;
        var a2 = this.loadCallbacks_;
        this.loadCallbacks_ = [];
        for (var b2 = 0; b2 < a2.length; b2++)
          a2[b2]();
      }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a2) {
        var b2 = Math.random().toString(32);
        goog.Dependency.callbackMap_[b2] = a2;
        return b2;
      }, goog.Dependency.unregisterCallback_ = function(a2) {
        delete goog.Dependency.callbackMap_[a2];
      }, goog.Dependency.callback_ = function(a2, b2) {
        if (a2 in goog.Dependency.callbackMap_) {
          for (var c2 = goog.Dependency.callbackMap_[a2], d2 = [], e2 = 1; e2 < arguments.length; e2++)
            d2.push(arguments[e2]);
          c2.apply(void 0, d2);
        } else
          throw Error("Callback key " + a2 + " does not exist (was base.js loaded more than once?).");
      }, goog.Dependency.prototype.load = function(a2) {
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
        else if (goog.inHtmlDocument_()) {
          var b2 = goog.global.document;
          if (b2.readyState == "complete" && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
            if (/\bdeps.js$/.test(this.path)) {
              a2.loaded();
              return;
            }
            throw Error('Cannot write "' + this.path + '" after document load');
          }
          if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
            var c2 = goog.Dependency.registerCallback_(function(b3) {
              goog.DebugLoader_.IS_OLD_IE_ && b3.readyState != "complete" || (goog.Dependency.unregisterCallback_(c2), a2.loaded());
            }), d2 = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
            d2 = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + `="goog.Dependency.callback_('` + c2 + `', this)" type="text/javascript" ` + (goog.Dependency.defer_ ? "defer" : "") + d2 + "><\/script>";
            b2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d2) : d2);
          } else {
            var e2 = b2.createElement("script");
            e2.defer = goog.Dependency.defer_;
            e2.async = false;
            e2.type = "text/javascript";
            (d2 = goog.getScriptNonce()) && e2.setAttribute("nonce", d2);
            goog.DebugLoader_.IS_OLD_IE_ ? (a2.pause(), e2.onreadystatechange = function() {
              if (e2.readyState == "loaded" || e2.readyState == "complete")
                a2.loaded(), a2.resume();
            }) : e2.onload = function() {
              e2.onload = null;
              a2.loaded();
            };
            e2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
            b2.head.appendChild(e2);
          }
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), this.relativePath == "deps.js" ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a2.loaded()) : a2.pause();
      }, goog.Es6ModuleDependency = function(a2, b2, c2, d2, e2) {
        goog.Dependency.call(this, a2, b2, c2, d2, e2);
      }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a2) {
        function b2(a3, b3) {
          a3 = b3 ? '<script type="module" crossorigin>' + b3 + "<\/script>" : '<script type="module" crossorigin src="' + a3 + '"><\/script>';
          d2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a3) : a3);
        }
        function c2(a3, b3) {
          var c3 = d2.createElement("script");
          c3.defer = true;
          c3.async = false;
          c3.type = "module";
          c3.setAttribute("crossorigin", true);
          var e3 = goog.getScriptNonce();
          e3 && c3.setAttribute("nonce", e3);
          b3 ? c3.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b3) : b3 : c3.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a3) : a3;
          d2.head.appendChild(c3);
        }
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
        else if (goog.inHtmlDocument_()) {
          var d2 = goog.global.document, e2 = this;
          if (goog.isDocumentLoading_()) {
            var f2 = b2;
            goog.Dependency.defer_ = true;
          } else
            f2 = c2;
          var g = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(g);
            a2.setModuleState(goog.ModuleType.ES6);
          });
          f2(void 0, 'goog.Dependency.callback_("' + g + '")');
          f2(this.path, void 0);
          var h = goog.Dependency.registerCallback_(function(b3) {
            goog.Dependency.unregisterCallback_(h);
            a2.registerEs6ModuleExports(e2.path, b3, goog.moduleLoaderState_.moduleName);
          });
          f2(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
          var k = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(k);
            a2.clearModuleState();
            a2.loaded();
          });
          f2(void 0, 'goog.Dependency.callback_("' + k + '")');
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a2.pause();
      }, goog.TransformedDependency = function(a2, b2, c2, d2, e2) {
        goog.Dependency.call(this, a2, b2, c2, d2, e2);
        this.contents_ = null;
        this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
      }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a2) {
        function b2() {
          e2.contents_ = goog.loadFileSync_(e2.path);
          e2.contents_ && (e2.contents_ = e2.transform(e2.contents_), e2.contents_ && (e2.contents_ += "\n//# sourceURL=" + e2.path));
        }
        function c2() {
          e2.lazyFetch_ && b2();
          if (e2.contents_) {
            f2 && a2.setModuleState(goog.ModuleType.ES6);
            try {
              var c3 = e2.contents_;
              e2.contents_ = null;
              goog.globalEval(c3);
              if (f2)
                var d3 = goog.moduleLoaderState_.moduleName;
            } finally {
              f2 && a2.clearModuleState();
            }
            f2 && goog.global.$jscomp.require.ensure([e2.getPathName()], function() {
              a2.registerEs6ModuleExports(e2.path, goog.global.$jscomp.require(e2.getPathName()), d3);
            });
            a2.loaded();
          }
        }
        function d2() {
          var a3 = goog.global.document, b3 = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(b3);
            c2();
          }), d3 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b3 + '");') + "<\/script>";
          a3.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d3) : d3);
        }
        var e2 = this;
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          b2(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a2.loaded()) : a2.pause();
        else {
          var f2 = this.loadFlags.module == goog.ModuleType.ES6;
          this.lazyFetch_ || b2();
          var g = 1 < a2.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
          g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
          if (h || g)
            a2.defer(function() {
              c2();
            });
          else {
            var k = goog.global.document;
            h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
            if (f2 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
              goog.Dependency.defer_ = true;
              a2.pause();
              var l = k.onreadystatechange;
              k.onreadystatechange = function() {
                k.readyState == "interactive" && (k.onreadystatechange = l, c2(), a2.resume());
                goog.isFunction(l) && l.apply(void 0, arguments);
              };
            } else
              !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d2() : c2();
          }
        }
      }, goog.TransformedDependency.prototype.transform = function(a2) {
      }, goog.TranspiledDependency = function(a2, b2, c2, d2, e2, f2) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
        this.transpiler = f2;
      }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a2) {
        return this.transpiler.transpile(a2, this.getPathName());
      }, goog.PreTranspiledEs6ModuleDependency = function(a2, b2, c2, d2, e2) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
      }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a2) {
        return a2;
      }, goog.GoogModuleDependency = function(a2, b2, c2, d2, e2, f2, g) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
        this.needsTranspile_ = f2;
        this.transpiler_ = g;
      }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a2) {
        this.needsTranspile_ && (a2 = this.transpiler_.transpile(a2, this.getPathName()));
        return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(a2 + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a2 + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
      }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a2, b2, c2, d2) {
        b2 = b2 || [];
        a2 = a2.replace(/\\/g, "/");
        var e2 = goog.normalizePath_(goog.basePath + a2);
        d2 && typeof d2 !== "boolean" || (d2 = d2 ? { module: goog.ModuleType.GOOG } : {});
        c2 = this.factory_.createDependency(e2, a2, b2, c2, d2, goog.transpiler_.needsTranspile(d2.lang || "es3", d2.module));
        this.dependencies_[e2] = c2;
        for (c2 = 0; c2 < b2.length; c2++)
          this.idToPath_[b2[c2]] = e2;
        this.idToPath_[a2] = e2;
      }, goog.DependencyFactory = function(a2) {
        this.transpiler = a2;
      }, goog.DependencyFactory.prototype.createDependency = function(a2, b2, c2, d2, e2, f2) {
        return e2.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a2, b2, c2, d2, e2, f2, this.transpiler) : f2 ? new goog.TranspiledDependency(a2, b2, c2, d2, e2, this.transpiler) : e2.module == goog.ModuleType.ES6 ? goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Es6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Dependency(a2, b2, c2, d2, e2);
      }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
        goog.debugLoader_.loadClosureDeps();
      }, goog.setDependencyFactory = function(a2) {
        goog.debugLoader_.setDependencyFactory(a2);
      }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a2, b2) {
        goog.debugLoader_.bootstrap(a2, b2);
      });
      goog.TRUSTED_TYPES_POLICY_NAME = "";
      goog.identity_ = function(a2) {
        return a2;
      };
      goog.createTrustedTypesPolicy = function(a2) {
        var b2 = null;
        if (typeof TrustedTypes === "undefined" || !TrustedTypes.createPolicy)
          return b2;
        try {
          b2 = TrustedTypes.createPolicy(a2, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_, createURL: goog.identity_ });
        } catch (c2) {
          goog.logToConsole_(c2.message);
        }
        return b2;
      };
      goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
      goog.object = {};
      goog.object.is = function(a2, b2) {
        return a2 === b2 ? a2 !== 0 || 1 / a2 === 1 / b2 : a2 !== a2 && b2 !== b2;
      };
      goog.object.forEach = function(a2, b2, c2) {
        for (var d2 in a2)
          b2.call(c2, a2[d2], d2, a2);
      };
      goog.object.filter = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          b2.call(c2, a2[e2], e2, a2) && (d2[e2] = a2[e2]);
        return d2;
      };
      goog.object.map = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          d2[e2] = b2.call(c2, a2[e2], e2, a2);
        return d2;
      };
      goog.object.some = function(a2, b2, c2) {
        for (var d2 in a2)
          if (b2.call(c2, a2[d2], d2, a2))
            return true;
        return false;
      };
      goog.object.every = function(a2, b2, c2) {
        for (var d2 in a2)
          if (!b2.call(c2, a2[d2], d2, a2))
            return false;
        return true;
      };
      goog.object.getCount = function(a2) {
        var b2 = 0, c2;
        for (c2 in a2)
          b2++;
        return b2;
      };
      goog.object.getAnyKey = function(a2) {
        for (var b2 in a2)
          return b2;
      };
      goog.object.getAnyValue = function(a2) {
        for (var b2 in a2)
          return a2[b2];
      };
      goog.object.contains = function(a2, b2) {
        return goog.object.containsValue(a2, b2);
      };
      goog.object.getValues = function(a2) {
        var b2 = [], c2 = 0, d2;
        for (d2 in a2)
          b2[c2++] = a2[d2];
        return b2;
      };
      goog.object.getKeys = function(a2) {
        var b2 = [], c2 = 0, d2;
        for (d2 in a2)
          b2[c2++] = d2;
        return b2;
      };
      goog.object.getValueByKeys = function(a2, b2) {
        var c2 = goog.isArrayLike(b2), d2 = c2 ? b2 : arguments;
        for (c2 = c2 ? 0 : 1; c2 < d2.length; c2++) {
          if (a2 == null)
            return;
          a2 = a2[d2[c2]];
        }
        return a2;
      };
      goog.object.containsKey = function(a2, b2) {
        return a2 !== null && b2 in a2;
      };
      goog.object.containsValue = function(a2, b2) {
        for (var c2 in a2)
          if (a2[c2] == b2)
            return true;
        return false;
      };
      goog.object.findKey = function(a2, b2, c2) {
        for (var d2 in a2)
          if (b2.call(c2, a2[d2], d2, a2))
            return d2;
      };
      goog.object.findValue = function(a2, b2, c2) {
        return (b2 = goog.object.findKey(a2, b2, c2)) && a2[b2];
      };
      goog.object.isEmpty = function(a2) {
        for (var b2 in a2)
          return false;
        return true;
      };
      goog.object.clear = function(a2) {
        for (var b2 in a2)
          delete a2[b2];
      };
      goog.object.remove = function(a2, b2) {
        var c2;
        (c2 = b2 in a2) && delete a2[b2];
        return c2;
      };
      goog.object.add = function(a2, b2, c2) {
        if (a2 !== null && b2 in a2)
          throw Error('The object already contains the key "' + b2 + '"');
        goog.object.set(a2, b2, c2);
      };
      goog.object.get = function(a2, b2, c2) {
        return a2 !== null && b2 in a2 ? a2[b2] : c2;
      };
      goog.object.set = function(a2, b2, c2) {
        a2[b2] = c2;
      };
      goog.object.setIfUndefined = function(a2, b2, c2) {
        return b2 in a2 ? a2[b2] : a2[b2] = c2;
      };
      goog.object.setWithReturnValueIfNotSet = function(a2, b2, c2) {
        if (b2 in a2)
          return a2[b2];
        c2 = c2();
        return a2[b2] = c2;
      };
      goog.object.equals = function(a2, b2) {
        for (var c2 in a2)
          if (!(c2 in b2) || a2[c2] !== b2[c2])
            return false;
        for (var d2 in b2)
          if (!(d2 in a2))
            return false;
        return true;
      };
      goog.object.clone = function(a2) {
        var b2 = {}, c2;
        for (c2 in a2)
          b2[c2] = a2[c2];
        return b2;
      };
      goog.object.unsafeClone = function(a2) {
        var b2 = goog.typeOf(a2);
        if (b2 == "object" || b2 == "array") {
          if (goog.isFunction(a2.clone))
            return a2.clone();
          b2 = b2 == "array" ? [] : {};
          for (var c2 in a2)
            b2[c2] = goog.object.unsafeClone(a2[c2]);
          return b2;
        }
        return a2;
      };
      goog.object.transpose = function(a2) {
        var b2 = {}, c2;
        for (c2 in a2)
          b2[a2[c2]] = c2;
        return b2;
      };
      goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.object.extend = function(a2, b2) {
        for (var c2, d2, e2 = 1; e2 < arguments.length; e2++) {
          d2 = arguments[e2];
          for (c2 in d2)
            a2[c2] = d2[c2];
          for (var f2 = 0; f2 < goog.object.PROTOTYPE_FIELDS_.length; f2++)
            c2 = goog.object.PROTOTYPE_FIELDS_[f2], Object.prototype.hasOwnProperty.call(d2, c2) && (a2[c2] = d2[c2]);
        }
      };
      goog.object.create = function(a2) {
        var b2 = arguments.length;
        if (b2 == 1 && goog.isArray(arguments[0]))
          return goog.object.create.apply(null, arguments[0]);
        if (b2 % 2)
          throw Error("Uneven number of arguments");
        for (var c2 = {}, d2 = 0; d2 < b2; d2 += 2)
          c2[arguments[d2]] = arguments[d2 + 1];
        return c2;
      };
      goog.object.createSet = function(a2) {
        var b2 = arguments.length;
        if (b2 == 1 && goog.isArray(arguments[0]))
          return goog.object.createSet.apply(null, arguments[0]);
        for (var c2 = {}, d2 = 0; d2 < b2; d2++)
          c2[arguments[d2]] = true;
        return c2;
      };
      goog.object.createImmutableView = function(a2) {
        var b2 = a2;
        Object.isFrozen && !Object.isFrozen(a2) && (b2 = Object.create(a2), Object.freeze(b2));
        return b2;
      };
      goog.object.isImmutableView = function(a2) {
        return !!Object.isFrozen && Object.isFrozen(a2);
      };
      goog.object.getAllPropertyNames = function(a2, b2, c2) {
        if (!a2)
          return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
          return goog.object.getKeys(a2);
        for (var d2 = {}; a2 && (a2 !== Object.prototype || b2) && (a2 !== Function.prototype || c2); ) {
          for (var e2 = Object.getOwnPropertyNames(a2), f2 = 0; f2 < e2.length; f2++)
            d2[e2[f2]] = true;
          a2 = Object.getPrototypeOf(a2);
        }
        return goog.object.getKeys(d2);
      };
      goog.object.getSuperClass = function(a2) {
        return (a2 = Object.getPrototypeOf(a2.prototype)) && a2.constructor;
      };
      goog.debug = {};
      goog.debug.Error = function(a2) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, goog.debug.Error);
        else {
          var b2 = Error().stack;
          b2 && (this.stack = b2);
        }
        a2 && (this.message = String(a2));
        this.reportErrorToServer = true;
      };
      goog.inherits(goog.debug.Error, Error);
      goog.debug.Error.prototype.name = "CustomError";
      goog.dom = {};
      goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
      goog.asserts = {};
      goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
      goog.asserts.AssertionError = function(a2, b2) {
        goog.debug.Error.call(this, goog.asserts.subs_(a2, b2));
        this.messagePattern = a2;
      };
      goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
      goog.asserts.AssertionError.prototype.name = "AssertionError";
      goog.asserts.DEFAULT_ERROR_HANDLER = function(a2) {
        throw a2;
      };
      goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
      goog.asserts.subs_ = function(a2, b2) {
        a2 = a2.split("%s");
        for (var c2 = "", d2 = a2.length - 1, e2 = 0; e2 < d2; e2++)
          c2 += a2[e2] + (e2 < b2.length ? b2[e2] : "%s");
        return c2 + a2[d2];
      };
      goog.asserts.doAssertFailure_ = function(a2, b2, c2, d2) {
        var e2 = "Assertion failed";
        if (c2) {
          e2 += ": " + c2;
          var f2 = d2;
        } else
          a2 && (e2 += ": " + a2, f2 = b2);
        a2 = new goog.asserts.AssertionError("" + e2, f2 || []);
        goog.asserts.errorHandler_(a2);
      };
      goog.asserts.setErrorHandler = function(a2) {
        goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a2);
      };
      goog.asserts.assert = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !a2 && goog.asserts.doAssertFailure_("", null, b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertExists = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && a2 == null && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.fail = function(a2, b2) {
        goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1)));
      };
      goog.asserts.assertNumber = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a2) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertString = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isString(a2) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertFunction = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a2) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertObject = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isObject(a2) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertArray = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isArray(a2) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertBoolean = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a2) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertElement = function(a2, b2, c2) {
        !goog.asserts.ENABLE_ASSERTS || goog.isObject(a2) && a2.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertInstanceof = function(a2, b2, c2, d2) {
        !goog.asserts.ENABLE_ASSERTS || a2 instanceof b2 || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b2), goog.asserts.getType_(a2)], c2, Array.prototype.slice.call(arguments, 3));
        return a2;
      };
      goog.asserts.assertFinite = function(a2, b2, c2) {
        !goog.asserts.ENABLE_ASSERTS || typeof a2 == "number" && isFinite(a2) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertObjectPrototypeIsIntact = function() {
        for (var a2 in Object.prototype)
          goog.asserts.fail(a2 + " should not be enumerable in Object.prototype.");
      };
      goog.asserts.getType_ = function(a2) {
        return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : a2 === null ? "null" : typeof a2;
      };
      var jspb = { BinaryConstants: {}, ConstBinaryMessage: function() {
      }, BinaryMessage: function() {
      } };
      jspb.BinaryConstants.FieldType = { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18, FHASH64: 30, VHASH64: 31 };
      jspb.BinaryConstants.WireType = { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 };
      jspb.BinaryConstants.FieldTypeToWireType = function(a2) {
        var b2 = jspb.BinaryConstants.FieldType, c2 = jspb.BinaryConstants.WireType;
        switch (a2) {
          case b2.INT32:
          case b2.INT64:
          case b2.UINT32:
          case b2.UINT64:
          case b2.SINT32:
          case b2.SINT64:
          case b2.BOOL:
          case b2.ENUM:
          case b2.VHASH64:
            return c2.VARINT;
          case b2.DOUBLE:
          case b2.FIXED64:
          case b2.SFIXED64:
          case b2.FHASH64:
            return c2.FIXED64;
          case b2.STRING:
          case b2.MESSAGE:
          case b2.BYTES:
            return c2.DELIMITED;
          case b2.FLOAT:
          case b2.FIXED32:
          case b2.SFIXED32:
            return c2.FIXED32;
          default:
            return c2.INVALID;
        }
      };
      jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
      jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
      jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
      jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
      jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
      jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
      jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
      jspb.BinaryConstants.TWO_TO_20 = 1048576;
      jspb.BinaryConstants.TWO_TO_23 = 8388608;
      jspb.BinaryConstants.TWO_TO_31 = 2147483648;
      jspb.BinaryConstants.TWO_TO_32 = 4294967296;
      jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
      jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
      jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
      jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
      goog.array = {};
      goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
      goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
      goog.array.peek = function(a2) {
        return a2[a2.length - 1];
      };
      goog.array.last = goog.array.peek;
      goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.indexOf.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        c2 = c2 == null ? 0 : 0 > c2 ? Math.max(0, a2.length + c2) : c2;
        if (goog.isString(a2))
          return goog.isString(b2) && b2.length == 1 ? a2.indexOf(b2, c2) : -1;
        for (; c2 < a2.length; c2++)
          if (c2 in a2 && a2[c2] === b2)
            return c2;
        return -1;
      };
      goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.lastIndexOf.call(a2, b2, c2 == null ? a2.length - 1 : c2);
      } : function(a2, b2, c2) {
        c2 = c2 == null ? a2.length - 1 : c2;
        0 > c2 && (c2 = Math.max(0, a2.length + c2));
        if (goog.isString(a2))
          return goog.isString(b2) && b2.length == 1 ? a2.lastIndexOf(b2, c2) : -1;
        for (; 0 <= c2; c2--)
          if (c2 in a2 && a2[c2] === b2)
            return c2;
        return -1;
      };
      goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        Array.prototype.forEach.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          f2 in e2 && b2.call(c2, e2[f2], f2, a2);
      };
      goog.array.forEachRight = function(a2, b2, c2) {
        var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2;
        for (--d2; 0 <= d2; --d2)
          d2 in e2 && b2.call(c2, e2[d2], d2, a2);
      };
      goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.filter.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = [], f2 = 0, g = goog.isString(a2) ? a2.split("") : a2, h = 0; h < d2; h++)
          if (h in g) {
            var k = g[h];
            b2.call(c2, k, h, a2) && (e2[f2++] = k);
          }
        return e2;
      };
      goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.map.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = Array(d2), f2 = goog.isString(a2) ? a2.split("") : a2, g = 0; g < d2; g++)
          g in f2 && (e2[g] = b2.call(c2, f2[g], g, a2));
        return e2;
      };
      goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a2, b2, c2, d2) {
        goog.asserts.assert(a2.length != null);
        d2 && (b2 = goog.bind(b2, d2));
        return Array.prototype.reduce.call(a2, b2, c2);
      } : function(a2, b2, c2, d2) {
        var e2 = c2;
        goog.array.forEach(a2, function(c3, g) {
          e2 = b2.call(d2, e2, c3, g, a2);
        });
        return e2;
      };
      goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a2, b2, c2, d2) {
        goog.asserts.assert(a2.length != null);
        goog.asserts.assert(b2 != null);
        d2 && (b2 = goog.bind(b2, d2));
        return Array.prototype.reduceRight.call(a2, b2, c2);
      } : function(a2, b2, c2, d2) {
        var e2 = c2;
        goog.array.forEachRight(a2, function(c3, g) {
          e2 = b2.call(d2, e2, c3, g, a2);
        });
        return e2;
      };
      goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.some.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
            return true;
        return false;
      };
      goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.every.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && !b2.call(c2, e2[f2], f2, a2))
            return false;
        return true;
      };
      goog.array.count = function(a2, b2, c2) {
        var d2 = 0;
        goog.array.forEach(a2, function(a3, f2, g) {
          b2.call(c2, a3, f2, g) && ++d2;
        }, c2);
        return d2;
      };
      goog.array.find = function(a2, b2, c2) {
        b2 = goog.array.findIndex(a2, b2, c2);
        return 0 > b2 ? null : goog.isString(a2) ? a2.charAt(b2) : a2[b2];
      };
      goog.array.findIndex = function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
            return f2;
        return -1;
      };
      goog.array.findRight = function(a2, b2, c2) {
        b2 = goog.array.findIndexRight(a2, b2, c2);
        return 0 > b2 ? null : goog.isString(a2) ? a2.charAt(b2) : a2[b2];
      };
      goog.array.findIndexRight = function(a2, b2, c2) {
        var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2;
        for (--d2; 0 <= d2; d2--)
          if (d2 in e2 && b2.call(c2, e2[d2], d2, a2))
            return d2;
        return -1;
      };
      goog.array.contains = function(a2, b2) {
        return 0 <= goog.array.indexOf(a2, b2);
      };
      goog.array.isEmpty = function(a2) {
        return a2.length == 0;
      };
      goog.array.clear = function(a2) {
        if (!goog.isArray(a2))
          for (var b2 = a2.length - 1; 0 <= b2; b2--)
            delete a2[b2];
        a2.length = 0;
      };
      goog.array.insert = function(a2, b2) {
        goog.array.contains(a2, b2) || a2.push(b2);
      };
      goog.array.insertAt = function(a2, b2, c2) {
        goog.array.splice(a2, c2, 0, b2);
      };
      goog.array.insertArrayAt = function(a2, b2, c2) {
        goog.partial(goog.array.splice, a2, c2, 0).apply(null, b2);
      };
      goog.array.insertBefore = function(a2, b2, c2) {
        var d2;
        arguments.length == 2 || 0 > (d2 = goog.array.indexOf(a2, c2)) ? a2.push(b2) : goog.array.insertAt(a2, b2, d2);
      };
      goog.array.remove = function(a2, b2) {
        b2 = goog.array.indexOf(a2, b2);
        var c2;
        (c2 = 0 <= b2) && goog.array.removeAt(a2, b2);
        return c2;
      };
      goog.array.removeLast = function(a2, b2) {
        b2 = goog.array.lastIndexOf(a2, b2);
        return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
      };
      goog.array.removeAt = function(a2, b2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.splice.call(a2, b2, 1).length == 1;
      };
      goog.array.removeIf = function(a2, b2, c2) {
        b2 = goog.array.findIndex(a2, b2, c2);
        return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
      };
      goog.array.removeAllIf = function(a2, b2, c2) {
        var d2 = 0;
        goog.array.forEachRight(a2, function(e2, f2) {
          b2.call(c2, e2, f2, a2) && goog.array.removeAt(a2, f2) && d2++;
        });
        return d2;
      };
      goog.array.concat = function(a2) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.join = function(a2) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.toArray = function(a2) {
        var b2 = a2.length;
        if (0 < b2) {
          for (var c2 = Array(b2), d2 = 0; d2 < b2; d2++)
            c2[d2] = a2[d2];
          return c2;
        }
        return [];
      };
      goog.array.clone = goog.array.toArray;
      goog.array.extend = function(a2, b2) {
        for (var c2 = 1; c2 < arguments.length; c2++) {
          var d2 = arguments[c2];
          if (goog.isArrayLike(d2)) {
            var e2 = a2.length || 0, f2 = d2.length || 0;
            a2.length = e2 + f2;
            for (var g = 0; g < f2; g++)
              a2[e2 + g] = d2[g];
          } else
            a2.push(d2);
        }
      };
      goog.array.splice = function(a2, b2, c2, d2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.splice.apply(a2, goog.array.slice(arguments, 1));
      };
      goog.array.slice = function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return 2 >= arguments.length ? Array.prototype.slice.call(a2, b2) : Array.prototype.slice.call(a2, b2, c2);
      };
      goog.array.removeDuplicates = function(a2, b2, c2) {
        b2 = b2 || a2;
        var d2 = function(a3) {
          return goog.isObject(a3) ? "o" + goog.getUid(a3) : (typeof a3).charAt(0) + a3;
        };
        c2 = c2 || d2;
        d2 = {};
        for (var e2 = 0, f2 = 0; f2 < a2.length; ) {
          var g = a2[f2++], h = c2(g);
          Object.prototype.hasOwnProperty.call(d2, h) || (d2[h] = true, b2[e2++] = g);
        }
        b2.length = e2;
      };
      goog.array.binarySearch = function(a2, b2, c2) {
        return goog.array.binarySearch_(a2, c2 || goog.array.defaultCompare, false, b2);
      };
      goog.array.binarySelect = function(a2, b2, c2) {
        return goog.array.binarySearch_(a2, b2, true, void 0, c2);
      };
      goog.array.binarySearch_ = function(a2, b2, c2, d2, e2) {
        for (var f2 = 0, g = a2.length, h; f2 < g; ) {
          var k = f2 + g >> 1;
          var l = c2 ? b2.call(e2, a2[k], k, a2) : b2(d2, a2[k]);
          0 < l ? f2 = k + 1 : (g = k, h = !l);
        }
        return h ? f2 : ~f2;
      };
      goog.array.sort = function(a2, b2) {
        a2.sort(b2 || goog.array.defaultCompare);
      };
      goog.array.stableSort = function(a2, b2) {
        for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
          c2[d2] = { index: d2, value: a2[d2] };
        var e2 = b2 || goog.array.defaultCompare;
        goog.array.sort(c2, function(a3, b3) {
          return e2(a3.value, b3.value) || a3.index - b3.index;
        });
        for (d2 = 0; d2 < a2.length; d2++)
          a2[d2] = c2[d2].value;
      };
      goog.array.sortByKey = function(a2, b2, c2) {
        var d2 = c2 || goog.array.defaultCompare;
        goog.array.sort(a2, function(a3, c3) {
          return d2(b2(a3), b2(c3));
        });
      };
      goog.array.sortObjectsByKey = function(a2, b2, c2) {
        goog.array.sortByKey(a2, function(a3) {
          return a3[b2];
        }, c2);
      };
      goog.array.isSorted = function(a2, b2, c2) {
        b2 = b2 || goog.array.defaultCompare;
        for (var d2 = 1; d2 < a2.length; d2++) {
          var e2 = b2(a2[d2 - 1], a2[d2]);
          if (0 < e2 || e2 == 0 && c2)
            return false;
        }
        return true;
      };
      goog.array.equals = function(a2, b2, c2) {
        if (!goog.isArrayLike(a2) || !goog.isArrayLike(b2) || a2.length != b2.length)
          return false;
        var d2 = a2.length;
        c2 = c2 || goog.array.defaultCompareEquality;
        for (var e2 = 0; e2 < d2; e2++)
          if (!c2(a2[e2], b2[e2]))
            return false;
        return true;
      };
      goog.array.compare3 = function(a2, b2, c2) {
        c2 = c2 || goog.array.defaultCompare;
        for (var d2 = Math.min(a2.length, b2.length), e2 = 0; e2 < d2; e2++) {
          var f2 = c2(a2[e2], b2[e2]);
          if (f2 != 0)
            return f2;
        }
        return goog.array.defaultCompare(a2.length, b2.length);
      };
      goog.array.defaultCompare = function(a2, b2) {
        return a2 > b2 ? 1 : a2 < b2 ? -1 : 0;
      };
      goog.array.inverseDefaultCompare = function(a2, b2) {
        return -goog.array.defaultCompare(a2, b2);
      };
      goog.array.defaultCompareEquality = function(a2, b2) {
        return a2 === b2;
      };
      goog.array.binaryInsert = function(a2, b2, c2) {
        c2 = goog.array.binarySearch(a2, b2, c2);
        return 0 > c2 ? (goog.array.insertAt(a2, b2, -(c2 + 1)), true) : false;
      };
      goog.array.binaryRemove = function(a2, b2, c2) {
        b2 = goog.array.binarySearch(a2, b2, c2);
        return 0 <= b2 ? goog.array.removeAt(a2, b2) : false;
      };
      goog.array.bucket = function(a2, b2, c2) {
        for (var d2 = {}, e2 = 0; e2 < a2.length; e2++) {
          var f2 = a2[e2], g = b2.call(c2, f2, e2, a2);
          goog.isDef(g) && (d2[g] || (d2[g] = [])).push(f2);
        }
        return d2;
      };
      goog.array.toObject = function(a2, b2, c2) {
        var d2 = {};
        goog.array.forEach(a2, function(e2, f2) {
          d2[b2.call(c2, e2, f2, a2)] = e2;
        });
        return d2;
      };
      goog.array.range = function(a2, b2, c2) {
        var d2 = [], e2 = 0, f2 = a2;
        c2 = c2 || 1;
        b2 !== void 0 && (e2 = a2, f2 = b2);
        if (0 > c2 * (f2 - e2))
          return [];
        if (0 < c2)
          for (a2 = e2; a2 < f2; a2 += c2)
            d2.push(a2);
        else
          for (a2 = e2; a2 > f2; a2 += c2)
            d2.push(a2);
        return d2;
      };
      goog.array.repeat = function(a2, b2) {
        for (var c2 = [], d2 = 0; d2 < b2; d2++)
          c2[d2] = a2;
        return c2;
      };
      goog.array.flatten = function(a2) {
        for (var b2 = [], c2 = 0; c2 < arguments.length; c2++) {
          var d2 = arguments[c2];
          if (goog.isArray(d2))
            for (var e2 = 0; e2 < d2.length; e2 += 8192) {
              var f2 = goog.array.slice(d2, e2, e2 + 8192);
              f2 = goog.array.flatten.apply(null, f2);
              for (var g = 0; g < f2.length; g++)
                b2.push(f2[g]);
            }
          else
            b2.push(d2);
        }
        return b2;
      };
      goog.array.rotate = function(a2, b2) {
        goog.asserts.assert(a2.length != null);
        a2.length && (b2 %= a2.length, 0 < b2 ? Array.prototype.unshift.apply(a2, a2.splice(-b2, b2)) : 0 > b2 && Array.prototype.push.apply(a2, a2.splice(0, -b2)));
        return a2;
      };
      goog.array.moveItem = function(a2, b2, c2) {
        goog.asserts.assert(0 <= b2 && b2 < a2.length);
        goog.asserts.assert(0 <= c2 && c2 < a2.length);
        b2 = Array.prototype.splice.call(a2, b2, 1);
        Array.prototype.splice.call(a2, c2, 0, b2[0]);
      };
      goog.array.zip = function(a2) {
        if (!arguments.length)
          return [];
        for (var b2 = [], c2 = arguments[0].length, d2 = 1; d2 < arguments.length; d2++)
          arguments[d2].length < c2 && (c2 = arguments[d2].length);
        for (d2 = 0; d2 < c2; d2++) {
          for (var e2 = [], f2 = 0; f2 < arguments.length; f2++)
            e2.push(arguments[f2][d2]);
          b2.push(e2);
        }
        return b2;
      };
      goog.array.shuffle = function(a2, b2) {
        b2 = b2 || Math.random;
        for (var c2 = a2.length - 1; 0 < c2; c2--) {
          var d2 = Math.floor(b2() * (c2 + 1)), e2 = a2[c2];
          a2[c2] = a2[d2];
          a2[d2] = e2;
        }
      };
      goog.array.copyByIndex = function(a2, b2) {
        var c2 = [];
        goog.array.forEach(b2, function(b3) {
          c2.push(a2[b3]);
        });
        return c2;
      };
      goog.array.concatMap = function(a2, b2, c2) {
        return goog.array.concat.apply([], goog.array.map(a2, b2, c2));
      };
      goog.crypt = {};
      goog.crypt.stringToByteArray = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charCodeAt(d2);
          255 < e2 && (b2[c2++] = e2 & 255, e2 >>= 8);
          b2[c2++] = e2;
        }
        return b2;
      };
      goog.crypt.byteArrayToString = function(a2) {
        if (8192 >= a2.length)
          return String.fromCharCode.apply(null, a2);
        for (var b2 = "", c2 = 0; c2 < a2.length; c2 += 8192) {
          var d2 = goog.array.slice(a2, c2, c2 + 8192);
          b2 += String.fromCharCode.apply(null, d2);
        }
        return b2;
      };
      goog.crypt.byteArrayToHex = function(a2, b2) {
        return goog.array.map(a2, function(a3) {
          a3 = a3.toString(16);
          return 1 < a3.length ? a3 : "0" + a3;
        }).join(b2 || "");
      };
      goog.crypt.hexToByteArray = function(a2) {
        goog.asserts.assert(a2.length % 2 == 0, "Key string length must be multiple of 2");
        for (var b2 = [], c2 = 0; c2 < a2.length; c2 += 2)
          b2.push(parseInt(a2.substring(c2, c2 + 2), 16));
        return b2;
      };
      goog.crypt.stringToUtf8ByteArray = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charCodeAt(d2);
          128 > e2 ? b2[c2++] = e2 : (2048 > e2 ? b2[c2++] = e2 >> 6 | 192 : ((e2 & 64512) == 55296 && d2 + 1 < a2.length && (a2.charCodeAt(d2 + 1) & 64512) == 56320 ? (e2 = 65536 + ((e2 & 1023) << 10) + (a2.charCodeAt(++d2) & 1023), b2[c2++] = e2 >> 18 | 240, b2[c2++] = e2 >> 12 & 63 | 128) : b2[c2++] = e2 >> 12 | 224, b2[c2++] = e2 >> 6 & 63 | 128), b2[c2++] = e2 & 63 | 128);
        }
        return b2;
      };
      goog.crypt.utf8ByteArrayToString = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; c2 < a2.length; ) {
          var e2 = a2[c2++];
          if (128 > e2)
            b2[d2++] = String.fromCharCode(e2);
          else if (191 < e2 && 224 > e2) {
            var f2 = a2[c2++];
            b2[d2++] = String.fromCharCode((e2 & 31) << 6 | f2 & 63);
          } else if (239 < e2 && 365 > e2) {
            f2 = a2[c2++];
            var g = a2[c2++], h = a2[c2++];
            e2 = ((e2 & 7) << 18 | (f2 & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
            b2[d2++] = String.fromCharCode(55296 + (e2 >> 10));
            b2[d2++] = String.fromCharCode(56320 + (e2 & 1023));
          } else
            f2 = a2[c2++], g = a2[c2++], b2[d2++] = String.fromCharCode((e2 & 15) << 12 | (f2 & 63) << 6 | g & 63);
        }
        return b2.join("");
      };
      goog.crypt.xorByteArray = function(a2, b2) {
        goog.asserts.assert(a2.length == b2.length, "XOR array lengths must match");
        for (var c2 = [], d2 = 0; d2 < a2.length; d2++)
          c2.push(a2[d2] ^ b2[d2]);
        return c2;
      };
      goog.dom.asserts = {};
      goog.dom.asserts.assertIsLocation = function(a2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var b2 = goog.dom.asserts.getWindow_(a2);
          b2 && (!a2 || !(a2 instanceof b2.Location) && a2 instanceof b2.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a2));
        }
        return a2;
      };
      goog.dom.asserts.assertIsElementType_ = function(a2, b2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c2 = goog.dom.asserts.getWindow_(a2);
          c2 && typeof c2[b2] != "undefined" && (a2 && (a2 instanceof c2[b2] || !(a2 instanceof c2.Location || a2 instanceof c2.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, goog.dom.asserts.debugStringForType_(a2)));
        }
        return a2;
      };
      goog.dom.asserts.assertIsHTMLAnchorElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLAnchorElement");
      };
      goog.dom.asserts.assertIsHTMLButtonElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLButtonElement");
      };
      goog.dom.asserts.assertIsHTMLLinkElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLLinkElement");
      };
      goog.dom.asserts.assertIsHTMLImageElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLImageElement");
      };
      goog.dom.asserts.assertIsHTMLAudioElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLAudioElement");
      };
      goog.dom.asserts.assertIsHTMLVideoElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLVideoElement");
      };
      goog.dom.asserts.assertIsHTMLInputElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLInputElement");
      };
      goog.dom.asserts.assertIsHTMLTextAreaElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLTextAreaElement");
      };
      goog.dom.asserts.assertIsHTMLCanvasElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLCanvasElement");
      };
      goog.dom.asserts.assertIsHTMLEmbedElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLEmbedElement");
      };
      goog.dom.asserts.assertIsHTMLFormElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLFormElement");
      };
      goog.dom.asserts.assertIsHTMLFrameElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLFrameElement");
      };
      goog.dom.asserts.assertIsHTMLIFrameElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLIFrameElement");
      };
      goog.dom.asserts.assertIsHTMLObjectElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLObjectElement");
      };
      goog.dom.asserts.assertIsHTMLScriptElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLScriptElement");
      };
      goog.dom.asserts.debugStringForType_ = function(a2) {
        if (goog.isObject(a2))
          try {
            return a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2);
          } catch (b2) {
            return "<object could not be stringified>";
          }
        else
          return a2 === void 0 ? "undefined" : a2 === null ? "null" : typeof a2;
      };
      goog.dom.asserts.getWindow_ = function(a2) {
        try {
          var b2 = a2 && a2.ownerDocument, c2 = b2 && (b2.defaultView || b2.parentWindow);
          c2 = c2 || goog.global;
          if (c2.Element && c2.Location)
            return c2;
        } catch (d2) {
        }
        return null;
      };
      goog.functions = {};
      goog.functions.constant = function(a2) {
        return function() {
          return a2;
        };
      };
      goog.functions.FALSE = function() {
        return false;
      };
      goog.functions.TRUE = function() {
        return true;
      };
      goog.functions.NULL = function() {
        return null;
      };
      goog.functions.identity = function(a2, b2) {
        return a2;
      };
      goog.functions.error = function(a2) {
        return function() {
          throw Error(a2);
        };
      };
      goog.functions.fail = function(a2) {
        return function() {
          throw a2;
        };
      };
      goog.functions.lock = function(a2, b2) {
        b2 = b2 || 0;
        return function() {
          return a2.apply(this, Array.prototype.slice.call(arguments, 0, b2));
        };
      };
      goog.functions.nth = function(a2) {
        return function() {
          return arguments[a2];
        };
      };
      goog.functions.partialRight = function(a2, b2) {
        var c2 = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b3 = Array.prototype.slice.call(arguments);
          b3.push.apply(b3, c2);
          return a2.apply(this, b3);
        };
      };
      goog.functions.withReturnValue = function(a2, b2) {
        return goog.functions.sequence(a2, goog.functions.constant(b2));
      };
      goog.functions.equalTo = function(a2, b2) {
        return function(c2) {
          return b2 ? a2 == c2 : a2 === c2;
        };
      };
      goog.functions.compose = function(a2, b2) {
        var c2 = arguments, d2 = c2.length;
        return function() {
          var a3;
          d2 && (a3 = c2[d2 - 1].apply(this, arguments));
          for (var b3 = d2 - 2; 0 <= b3; b3--)
            a3 = c2[b3].call(this, a3);
          return a3;
        };
      };
      goog.functions.sequence = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3, e2 = 0; e2 < c2; e2++)
            a3 = b2[e2].apply(this, arguments);
          return a3;
        };
      };
      goog.functions.and = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3 = 0; a3 < c2; a3++)
            if (!b2[a3].apply(this, arguments))
              return false;
          return true;
        };
      };
      goog.functions.or = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3 = 0; a3 < c2; a3++)
            if (b2[a3].apply(this, arguments))
              return true;
          return false;
        };
      };
      goog.functions.not = function(a2) {
        return function() {
          return !a2.apply(this, arguments);
        };
      };
      goog.functions.create = function(a2, b2) {
        var c2 = function() {
        };
        c2.prototype = a2.prototype;
        c2 = new c2();
        a2.apply(c2, Array.prototype.slice.call(arguments, 1));
        return c2;
      };
      goog.functions.CACHE_RETURN_VALUE = true;
      goog.functions.cacheReturnValue = function(a2) {
        var b2 = false, c2;
        return function() {
          if (!goog.functions.CACHE_RETURN_VALUE)
            return a2();
          b2 || (c2 = a2(), b2 = true);
          return c2;
        };
      };
      goog.functions.once = function(a2) {
        var b2 = a2;
        return function() {
          if (b2) {
            var a3 = b2;
            b2 = null;
            a3();
          }
        };
      };
      goog.functions.debounce = function(a2, b2, c2) {
        var d2 = 0;
        return function(e2) {
          goog.global.clearTimeout(d2);
          var f2 = arguments;
          d2 = goog.global.setTimeout(function() {
            a2.apply(c2, f2);
          }, b2);
        };
      };
      goog.functions.throttle = function(a2, b2, c2) {
        var d2 = 0, e2 = false, f2 = [], g = function() {
          d2 = 0;
          e2 && (e2 = false, h());
        }, h = function() {
          d2 = goog.global.setTimeout(g, b2);
          a2.apply(c2, f2);
        };
        return function(a3) {
          f2 = arguments;
          d2 ? e2 = true : h();
        };
      };
      goog.functions.rateLimit = function(a2, b2, c2) {
        var d2 = 0, e2 = function() {
          d2 = 0;
        };
        return function(f2) {
          d2 || (d2 = goog.global.setTimeout(e2, b2), a2.apply(c2, arguments));
        };
      };
      goog.dom.HtmlElement = function() {
      };
      goog.dom.TagName = function(a2) {
        this.tagName_ = a2;
      };
      goog.dom.TagName.prototype.toString = function() {
        return this.tagName_;
      };
      goog.dom.TagName.A = new goog.dom.TagName("A");
      goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
      goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
      goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
      goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
      goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
      goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
      goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
      goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
      goog.dom.TagName.B = new goog.dom.TagName("B");
      goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
      goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
      goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
      goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
      goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
      goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
      goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
      goog.dom.TagName.BR = new goog.dom.TagName("BR");
      goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
      goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
      goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
      goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
      goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
      goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
      goog.dom.TagName.COL = new goog.dom.TagName("COL");
      goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
      goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
      goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
      goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
      goog.dom.TagName.DD = new goog.dom.TagName("DD");
      goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
      goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
      goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
      goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
      goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
      goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
      goog.dom.TagName.DL = new goog.dom.TagName("DL");
      goog.dom.TagName.DT = new goog.dom.TagName("DT");
      goog.dom.TagName.EM = new goog.dom.TagName("EM");
      goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
      goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
      goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
      goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
      goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
      goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
      goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
      goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
      goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
      goog.dom.TagName.H1 = new goog.dom.TagName("H1");
      goog.dom.TagName.H2 = new goog.dom.TagName("H2");
      goog.dom.TagName.H3 = new goog.dom.TagName("H3");
      goog.dom.TagName.H4 = new goog.dom.TagName("H4");
      goog.dom.TagName.H5 = new goog.dom.TagName("H5");
      goog.dom.TagName.H6 = new goog.dom.TagName("H6");
      goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
      goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
      goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
      goog.dom.TagName.HR = new goog.dom.TagName("HR");
      goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
      goog.dom.TagName.I = new goog.dom.TagName("I");
      goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
      goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
      goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
      goog.dom.TagName.INS = new goog.dom.TagName("INS");
      goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
      goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
      goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
      goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
      goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
      goog.dom.TagName.LI = new goog.dom.TagName("LI");
      goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
      goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
      goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
      goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
      goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
      goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
      goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
      goog.dom.TagName.META = new goog.dom.TagName("META");
      goog.dom.TagName.METER = new goog.dom.TagName("METER");
      goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
      goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
      goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
      goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
      goog.dom.TagName.OL = new goog.dom.TagName("OL");
      goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
      goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
      goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
      goog.dom.TagName.P = new goog.dom.TagName("P");
      goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
      goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
      goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
      goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
      goog.dom.TagName.Q = new goog.dom.TagName("Q");
      goog.dom.TagName.RP = new goog.dom.TagName("RP");
      goog.dom.TagName.RT = new goog.dom.TagName("RT");
      goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
      goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
      goog.dom.TagName.S = new goog.dom.TagName("S");
      goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
      goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
      goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
      goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
      goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
      goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
      goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
      goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
      goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
      goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
      goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
      goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
      goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
      goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
      goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
      goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
      goog.dom.TagName.TD = new goog.dom.TagName("TD");
      goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
      goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
      goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
      goog.dom.TagName.TH = new goog.dom.TagName("TH");
      goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
      goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
      goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
      goog.dom.TagName.TR = new goog.dom.TagName("TR");
      goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
      goog.dom.TagName.TT = new goog.dom.TagName("TT");
      goog.dom.TagName.U = new goog.dom.TagName("U");
      goog.dom.TagName.UL = new goog.dom.TagName("UL");
      goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
      goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
      goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
      goog.dom.tags = {};
      goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      goog.dom.tags.isVoidTag = function(a2) {
        return goog.dom.tags.VOID_TAGS_[a2] === true;
      };
      goog.html = {};
      goog.html.trustedtypes = {};
      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
      goog.string = {};
      goog.string.TypedString = function() {
      };
      goog.string.Const = function(a2, b2) {
        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a2 === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
        this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
      };
      goog.string.Const.prototype.implementsGoogStringTypedString = true;
      goog.string.Const.prototype.getTypedStringValue = function() {
        return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      };
      goog.string.Const.prototype.toString = function() {
        return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
      };
      goog.string.Const.unwrap = function(a2) {
        if (a2 instanceof goog.string.Const && a2.constructor === goog.string.Const && a2.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
          return a2.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
        goog.asserts.fail("expected object of type Const, got '" + a2 + "'");
        return "type_error:Const";
      };
      goog.string.Const.from = function(a2) {
        return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a2);
      };
      goog.string.Const.TYPE_MARKER_ = {};
      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
      goog.string.Const.EMPTY = goog.string.Const.from("");
      goog.html.SafeScript = function() {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
        this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeScript.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        return a2.length === 0 ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeScript.fromConstantAndArgs = function(a2, b2) {
        for (var c2 = [], d2 = 1; d2 < arguments.length; d2++)
          c2.push(goog.html.SafeScript.stringify_(arguments[d2]));
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a2) + ")(" + c2.join(", ") + ");");
      };
      goog.html.SafeScript.fromJson = function(a2) {
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a2));
      };
      goog.html.SafeScript.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
        return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
      });
      goog.html.SafeScript.unwrap = function(a2) {
        return goog.html.SafeScript.unwrapTrustedScript(a2).toString();
      };
      goog.html.SafeScript.unwrapTrustedScript = function(a2) {
        if (a2 instanceof goog.html.SafeScript && a2.constructor === goog.html.SafeScript && a2.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeScriptWrappedValue_;
        goog.asserts.fail("expected object of type SafeScript, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeScript";
      };
      goog.html.SafeScript.stringify_ = function(a2) {
        return JSON.stringify(a2).replace(/</g, "\\x3c");
      };
      goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a2) : a2;
        return this;
      };
      goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
      goog.fs = {};
      goog.fs.url = {};
      goog.fs.url.createObjectUrl = function(a2) {
        return goog.fs.url.getUrlObject_().createObjectURL(a2);
      };
      goog.fs.url.revokeObjectUrl = function(a2) {
        goog.fs.url.getUrlObject_().revokeObjectURL(a2);
      };
      goog.fs.url.getUrlObject_ = function() {
        var a2 = goog.fs.url.findUrlObject_();
        if (a2 != null)
          return a2;
        throw Error("This browser doesn't seem to support blob URLs");
      };
      goog.fs.url.findUrlObject_ = function() {
        return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null;
      };
      goog.fs.url.browserSupportsObjectUrls = function() {
        return goog.fs.url.findUrlObject_() != null;
      };
      goog.i18n = {};
      goog.i18n.bidi = {};
      goog.i18n.bidi.FORCE_RTL = false;
      goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == "ar" || goog.LOCALE.substring(0, 2).toLowerCase() == "fa" || goog.LOCALE.substring(0, 2).toLowerCase() == "he" || goog.LOCALE.substring(0, 2).toLowerCase() == "iw" || goog.LOCALE.substring(0, 2).toLowerCase() == "ps" || goog.LOCALE.substring(0, 2).toLowerCase() == "sd" || goog.LOCALE.substring(0, 2).toLowerCase() == "ug" || goog.LOCALE.substring(0, 2).toLowerCase() == "ur" || goog.LOCALE.substring(0, 2).toLowerCase() == "yi") && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") || 3 <= goog.LOCALE.length && goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") || 7 <= goog.LOCALE.length && (goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") && (goog.LOCALE.substring(3, 7).toLowerCase() == "adlm" || goog.LOCALE.substring(3, 7).toLowerCase() == "arab" || goog.LOCALE.substring(3, 7).toLowerCase() == "hebr" || goog.LOCALE.substring(3, 7).toLowerCase() == "nkoo" || goog.LOCALE.substring(3, 7).toLowerCase() == "rohg" || goog.LOCALE.substring(3, 7).toLowerCase() == "thaa") || 8 <= goog.LOCALE.length && (goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") && (goog.LOCALE.substring(4, 8).toLowerCase() == "adlm" || goog.LOCALE.substring(4, 8).toLowerCase() == "arab" || goog.LOCALE.substring(4, 8).toLowerCase() == "hebr" || goog.LOCALE.substring(4, 8).toLowerCase() == "nkoo" || goog.LOCALE.substring(4, 8).toLowerCase() == "rohg" || goog.LOCALE.substring(4, 8).toLowerCase() == "thaa");
      goog.i18n.bidi.Format = { LRE: "\u202A", RLE: "\u202B", PDF: "\u202C", LRM: "\u200E", RLM: "\u200F" };
      goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
      goog.i18n.bidi.RIGHT = "right";
      goog.i18n.bidi.LEFT = "left";
      goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
      goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
      goog.i18n.bidi.toDir = function(a2, b2) {
        return typeof a2 == "number" ? 0 < a2 ? goog.i18n.bidi.Dir.LTR : 0 > a2 ? goog.i18n.bidi.Dir.RTL : b2 ? null : goog.i18n.bidi.Dir.NEUTRAL : a2 == null ? null : a2 ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.ltrChars_ = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0900-\u1FFF\u200E\u2C00-\uD801\uD804-\uD839\uD83C-\uDBFF\uF900-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
      goog.i18n.bidi.rtlChars_ = "\u0591-\u06EF\u06FA-\u08FF\u200F\uD802-\uD803\uD83A-\uD83B\uFB1D-\uFDFF\uFE70-\uFEFC";
      goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
      goog.i18n.bidi.stripHtmlIfNeeded_ = function(a2, b2) {
        return b2 ? a2.replace(goog.i18n.bidi.htmlSkipReg_, "") : a2;
      };
      goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.hasAnyRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
      goog.i18n.bidi.hasAnyLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.isRtlChar = function(a2) {
        return goog.i18n.bidi.rtlRe_.test(a2);
      };
      goog.i18n.bidi.isLtrChar = function(a2) {
        return goog.i18n.bidi.ltrRe_.test(a2);
      };
      goog.i18n.bidi.isNeutralChar = function(a2) {
        return !goog.i18n.bidi.isLtrChar(a2) && !goog.i18n.bidi.isRtlChar(a2);
      };
      goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.startsWithRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
      goog.i18n.bidi.startsWithLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
      goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
      goog.i18n.bidi.isNeutralText = function(a2, b2) {
        a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2);
        return goog.i18n.bidi.isRequiredLtrRe_.test(a2) || !goog.i18n.bidi.hasAnyLtr(a2) && !goog.i18n.bidi.hasAnyRtl(a2);
      };
      goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
      goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
      goog.i18n.bidi.endsWithLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
      goog.i18n.bidi.endsWithRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
      goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      goog.i18n.bidi.isRtlLanguage = function(a2) {
        return goog.i18n.bidi.rtlLocalesRe_.test(a2);
      };
      goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
      goog.i18n.bidi.guardBracketInText = function(a2, b2) {
        b2 = (b2 === void 0 ? goog.i18n.bidi.hasAnyRtl(a2) : b2) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
        return a2.replace(goog.i18n.bidi.bracketGuardTextRe_, b2 + "$&" + b2);
      };
      goog.i18n.bidi.enforceRtlInHtml = function(a2) {
        return a2.charAt(0) == "<" ? a2.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a2 + "</span>";
      };
      goog.i18n.bidi.enforceRtlInText = function(a2) {
        return goog.i18n.bidi.Format.RLE + a2 + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.enforceLtrInHtml = function(a2) {
        return a2.charAt(0) == "<" ? a2.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a2 + "</span>";
      };
      goog.i18n.bidi.enforceLtrInText = function(a2) {
        return goog.i18n.bidi.Format.LRE + a2 + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
      goog.i18n.bidi.leftRe_ = /left/gi;
      goog.i18n.bidi.rightRe_ = /right/gi;
      goog.i18n.bidi.tempRe_ = /%%%%/g;
      goog.i18n.bidi.mirrorCSS = function(a2) {
        return a2.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
      };
      goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
      goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
      goog.i18n.bidi.normalizeHebrewQuote = function(a2) {
        return a2.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05F4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05F3");
      };
      goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
      goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
      goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
      goog.i18n.bidi.estimateDirection = function(a2, b2) {
        var c2 = 0, d2 = 0, e2 = false;
        a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2).split(goog.i18n.bidi.wordSeparatorRe_);
        for (b2 = 0; b2 < a2.length; b2++) {
          var f2 = a2[b2];
          goog.i18n.bidi.startsWithRtl(f2) ? (c2++, d2++) : goog.i18n.bidi.isRequiredLtrRe_.test(f2) ? e2 = true : goog.i18n.bidi.hasAnyLtr(f2) ? d2++ : goog.i18n.bidi.hasNumeralsRe_.test(f2) && (e2 = true);
        }
        return d2 == 0 ? e2 ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c2 / d2 > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.detectRtlDirectionality = function(a2, b2) {
        return goog.i18n.bidi.estimateDirection(a2, b2) == goog.i18n.bidi.Dir.RTL;
      };
      goog.i18n.bidi.setElementDirAndAlign = function(a2, b2) {
        a2 && (b2 = goog.i18n.bidi.toDir(b2)) && (a2.style.textAlign = b2 == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a2.dir = b2 == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
      };
      goog.i18n.bidi.setElementDirByTextDirectionality = function(a2, b2) {
        switch (goog.i18n.bidi.estimateDirection(b2)) {
          case goog.i18n.bidi.Dir.LTR:
            a2.dir = "ltr";
            break;
          case goog.i18n.bidi.Dir.RTL:
            a2.dir = "rtl";
            break;
          default:
            a2.removeAttribute("dir");
        }
      };
      goog.i18n.bidi.DirectionalString = function() {
      };
      goog.html.TrustedResourceUrl = function() {
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
        this.trustedURL_ = null;
        this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.TrustedResourceUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a2, b2) {
        var c2 = goog.html.TrustedResourceUrl.unwrap(this);
        c2 = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c2);
        var d2 = c2[3] || "";
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c2[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c2[2] || "", a2) + goog.html.TrustedResourceUrl.stringifyParams_("#", d2, b2));
      };
      goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
      });
      goog.html.TrustedResourceUrl.unwrap = function(a2) {
        return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a2).toString();
      };
      goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a2) {
        if (a2 instanceof goog.html.TrustedResourceUrl && a2.constructor === goog.html.TrustedResourceUrl && a2.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
        goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:TrustedResourceUrl";
      };
      goog.html.TrustedResourceUrl.unwrapTrustedURL = function(a2) {
        return a2.trustedURL_ ? a2.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(a2);
      };
      goog.html.TrustedResourceUrl.format = function(a2, b2) {
        var c2 = goog.string.Const.unwrap(a2);
        if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c2))
          throw Error("Invalid TrustedResourceUrl format: " + c2);
        a2 = c2.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a3, e2) {
          if (!Object.prototype.hasOwnProperty.call(b2, e2))
            throw Error('Found marker, "' + e2 + '", in format string, "' + c2 + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
          a3 = b2[e2];
          return a3 instanceof goog.string.Const ? goog.string.Const.unwrap(a3) : encodeURIComponent(String(a3));
        });
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
      goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
      goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
      goog.html.TrustedResourceUrl.formatWithParams = function(a2, b2, c2, d2) {
        return goog.html.TrustedResourceUrl.format(a2, b2).cloneWithParams(c2, d2);
      };
      goog.html.TrustedResourceUrl.fromConstant = function(a2) {
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
      };
      goog.html.TrustedResourceUrl.fromConstants = function(a2) {
        for (var b2 = "", c2 = 0; c2 < a2.length; c2++)
          b2 += goog.string.Const.unwrap(a2[c2]);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
        var b2 = new goog.html.TrustedResourceUrl();
        b2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a2) : a2;
        goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY && (b2.trustedURL_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a2));
        return b2;
      };
      goog.html.TrustedResourceUrl.stringifyParams_ = function(a2, b2, c2) {
        if (c2 == null)
          return b2;
        if (goog.isString(c2))
          return c2 ? a2 + encodeURIComponent(c2) : "";
        for (var d2 in c2) {
          var e2 = c2[d2];
          e2 = goog.isArray(e2) ? e2 : [e2];
          for (var f2 = 0; f2 < e2.length; f2++) {
            var g = e2[f2];
            g != null && (b2 || (b2 = a2), b2 += (b2.length > a2.length ? "&" : "") + encodeURIComponent(d2) + "=" + encodeURIComponent(String(g)));
          }
        }
        return b2;
      };
      goog.string.internal = {};
      goog.string.internal.startsWith = function(a2, b2) {
        return a2.lastIndexOf(b2, 0) == 0;
      };
      goog.string.internal.endsWith = function(a2, b2) {
        var c2 = a2.length - b2.length;
        return 0 <= c2 && a2.indexOf(b2, c2) == c2;
      };
      goog.string.internal.caseInsensitiveStartsWith = function(a2, b2) {
        return goog.string.internal.caseInsensitiveCompare(b2, a2.substr(0, b2.length)) == 0;
      };
      goog.string.internal.caseInsensitiveEndsWith = function(a2, b2) {
        return goog.string.internal.caseInsensitiveCompare(b2, a2.substr(a2.length - b2.length, b2.length)) == 0;
      };
      goog.string.internal.caseInsensitiveEquals = function(a2, b2) {
        return a2.toLowerCase() == b2.toLowerCase();
      };
      goog.string.internal.isEmptyOrWhitespace = function(a2) {
        return /^[\s\xa0]*$/.test(a2);
      };
      goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a2) {
        return a2.trim();
      } : function(a2) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
      };
      goog.string.internal.caseInsensitiveCompare = function(a2, b2) {
        a2 = String(a2).toLowerCase();
        b2 = String(b2).toLowerCase();
        return a2 < b2 ? -1 : a2 == b2 ? 0 : 1;
      };
      goog.string.internal.newLineToBr = function(a2, b2) {
        return a2.replace(/(\r\n|\r|\n)/g, b2 ? "<br />" : "<br>");
      };
      goog.string.internal.htmlEscape = function(a2, b2) {
        if (b2)
          a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
        else {
          if (!goog.string.internal.ALL_RE_.test(a2))
            return a2;
          a2.indexOf("&") != -1 && (a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;"));
          a2.indexOf("<") != -1 && (a2 = a2.replace(goog.string.internal.LT_RE_, "&lt;"));
          a2.indexOf(">") != -1 && (a2 = a2.replace(goog.string.internal.GT_RE_, "&gt;"));
          a2.indexOf('"') != -1 && (a2 = a2.replace(goog.string.internal.QUOT_RE_, "&quot;"));
          a2.indexOf("'") != -1 && (a2 = a2.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
          a2.indexOf("\0") != -1 && (a2 = a2.replace(goog.string.internal.NULL_RE_, "&#0;"));
        }
        return a2;
      };
      goog.string.internal.AMP_RE_ = /&/g;
      goog.string.internal.LT_RE_ = /</g;
      goog.string.internal.GT_RE_ = />/g;
      goog.string.internal.QUOT_RE_ = /"/g;
      goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
      goog.string.internal.NULL_RE_ = /\x00/g;
      goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
      goog.string.internal.whitespaceEscape = function(a2, b2) {
        return goog.string.internal.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
      };
      goog.string.internal.contains = function(a2, b2) {
        return a2.indexOf(b2) != -1;
      };
      goog.string.internal.caseInsensitiveContains = function(a2, b2) {
        return goog.string.internal.contains(a2.toLowerCase(), b2.toLowerCase());
      };
      goog.string.internal.compareVersions = function(a2, b2) {
        var c2 = 0;
        a2 = goog.string.internal.trim(String(a2)).split(".");
        b2 = goog.string.internal.trim(String(b2)).split(".");
        for (var d2 = Math.max(a2.length, b2.length), e2 = 0; c2 == 0 && e2 < d2; e2++) {
          var f2 = a2[e2] || "", g = b2[e2] || "";
          do {
            f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (f2[0].length == 0 && g[0].length == 0)
              break;
            c2 = f2[1].length == 0 ? 0 : parseInt(f2[1], 10);
            var h = g[1].length == 0 ? 0 : parseInt(g[1], 10);
            c2 = goog.string.internal.compareElements_(c2, h) || goog.string.internal.compareElements_(f2[2].length == 0, g[2].length == 0) || goog.string.internal.compareElements_(f2[2], g[2]);
            f2 = f2[3];
            g = g[3];
          } while (c2 == 0);
        }
        return c2;
      };
      goog.string.internal.compareElements_ = function(a2, b2) {
        return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
      };
      goog.html.SafeUrl = function() {
        this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = "";
        this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
      goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
      };
      goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
        return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
      });
      goog.html.SafeUrl.unwrap = function(a2) {
        return goog.html.SafeUrl.unwrapTrustedURL(a2).toString();
      };
      goog.html.SafeUrl.unwrapTrustedURL = function(a2) {
        if (a2 instanceof goog.html.SafeUrl && a2.constructor === goog.html.SafeUrl && a2.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeUrlWrappedValue_;
        goog.asserts.fail("expected object of type SafeUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeUrl";
      };
      goog.html.SafeUrl.fromConstant = function(a2) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
      };
      goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
      goog.html.SafeUrl.isSafeMimeType = function(a2) {
        return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2);
      };
      goog.html.SafeUrl.fromBlob = function(a2) {
        a2 = goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2.type) ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
      goog.html.SafeUrl.fromDataUrl = function(a2) {
        a2 = a2.replace(/(%0A|%0D)/g, "");
        var b2 = a2.match(goog.html.DATA_URL_PATTERN_);
        b2 = b2 && goog.html.SAFE_MIME_TYPE_PATTERN_.test(b2[1]);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2 ? a2 : goog.html.SafeUrl.INNOCUOUS_STRING);
      };
      goog.html.SafeUrl.fromTelUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "tel:") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
      goog.html.SafeUrl.fromSipUrl = function(a2) {
        goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a2)) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromFacebookMessengerUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "fb-messenger://share") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromWhatsAppUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "whatsapp://send") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromSmsUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a2) {
        var b2 = a2.indexOf("#");
        0 < b2 && (a2 = a2.substring(0, b2));
        b2 = a2.match(/[?&]body=/gi);
        if (!b2)
          return true;
        if (1 < b2.length)
          return false;
        a2 = a2.match(/[?&]body=([^&]*)/)[1];
        if (!a2)
          return true;
        try {
          decodeURIComponent(a2);
        } catch (c2) {
          return false;
        }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a2);
      };
      goog.html.SafeUrl.fromSshUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "ssh://") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a2, b2, c2) {
        (a2 = a2.exec(b2)) ? (a2 = a2[1], (c2 instanceof goog.string.Const ? [goog.string.Const.unwrap(c2)] : c2.map(function(a3) {
          return goog.string.Const.unwrap(a3);
        })).indexOf(a2) == -1 && (b2 = goog.html.SafeUrl.INNOCUOUS_STRING)) : b2 = goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.SafeUrl.fromTrustedResourceUrl = function(a2) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a2));
      };
      goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
      goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
      goog.html.SafeUrl.sanitize = function(a2) {
        if (a2 instanceof goog.html.SafeUrl)
          return a2;
        a2 = typeof a2 == "object" && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        goog.html.SAFE_URL_PATTERN_.test(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.sanitizeAssertUnchanged = function(a2, b2) {
        if (a2 instanceof goog.html.SafeUrl)
          return a2;
        a2 = typeof a2 == "object" && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        if (b2 && /^data:/i.test(a2) && (b2 = goog.html.SafeUrl.fromDataUrl(a2), b2.getTypedStringValue() == a2))
          return b2;
        goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
        var b2 = new goog.html.SafeUrl();
        b2.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a2) : a2;
        return b2;
      };
      goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
      goog.html.SafeStyle = function() {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
        this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyle.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        if (a2.length === 0)
          return goog.html.SafeStyle.EMPTY;
        goog.asserts.assert(goog.string.internal.endsWith(a2, ";"), "Last character of style string is not ';': " + a2);
        goog.asserts.assert(goog.string.internal.contains(a2, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a2);
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyle.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
        return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
      });
      goog.html.SafeStyle.unwrap = function(a2) {
        if (a2 instanceof goog.html.SafeStyle && a2.constructor === goog.html.SafeStyle && a2.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeStyleWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyle, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeStyle";
      };
      goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a2;
        return this;
      };
      goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
      goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
      goog.html.SafeStyle.create = function(a2) {
        var b2 = "", c2;
        for (c2 in a2) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c2))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c2);
          var d2 = a2[c2];
          d2 != null && (d2 = goog.isArray(d2) ? goog.array.map(d2, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d2), b2 += c2 + ":" + d2 + ";");
        }
        return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeStyle.sanitizePropertyValue_ = function(a2) {
        if (a2 instanceof goog.html.SafeUrl)
          return 'url("' + goog.html.SafeUrl.unwrap(a2).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a2 = a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a2));
        if (/[{;}]/.test(a2))
          throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a2]);
        return a2;
      };
      goog.html.SafeStyle.sanitizePropertyValueString_ = function(a2) {
        var b2 = a2.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
        if (goog.html.SafeStyle.VALUE_RE_.test(b2)) {
          if (goog.html.SafeStyle.COMMENT_RE_.test(a2))
            return goog.asserts.fail("String value disallows comments, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedQuotes_(a2))
            return goog.asserts.fail("String value requires balanced quotes, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a2))
            return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        } else
          return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        return goog.html.SafeStyle.sanitizeUrl_(a2);
      };
      goog.html.SafeStyle.hasBalancedQuotes_ = function(a2) {
        for (var b2 = true, c2 = true, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charAt(d2);
          e2 == "'" && c2 ? b2 = !b2 : e2 == '"' && b2 && (c2 = !c2);
        }
        return b2 && c2;
      };
      goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a2) {
        for (var b2 = true, c2 = /^[-_a-zA-Z0-9]$/, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charAt(d2);
          if (e2 == "]") {
            if (b2)
              return false;
            b2 = true;
          } else if (e2 == "[") {
            if (!b2)
              return false;
            b2 = false;
          } else if (!b2 && !c2.test(e2))
            return false;
        }
        return b2;
      };
      goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
      goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
      goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
      goog.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
      goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
      goog.html.SafeStyle.sanitizeUrl_ = function(a2) {
        return a2.replace(goog.html.SafeStyle.URL_RE_, function(a3, c2, d2, e2) {
          var b2 = "";
          d2 = d2.replace(/^(['"])(.*)\1$/, function(a4, c3, d3) {
            b2 = c3;
            return d3;
          });
          a3 = goog.html.SafeUrl.sanitize(d2).getTypedStringValue();
          return c2 + b2 + a3 + b2 + e2;
        });
      };
      goog.html.SafeStyle.concat = function(a2) {
        var b2 = "", c2 = function(a3) {
          goog.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyle.unwrap(a3);
        };
        goog.array.forEach(arguments, c2);
        return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeStyleSheet = function() {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
        this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyleSheet.createRule = function(a2, b2) {
        if (goog.string.internal.contains(a2, "<"))
          throw Error("Selector does not allow '<', got: " + a2);
        var c2 = a2.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c2))
          throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a2);
        if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c2))
          throw Error("() and [] in selector must be balanced, got: " + a2);
        b2 instanceof goog.html.SafeStyle || (b2 = goog.html.SafeStyle.create(b2));
        a2 = a2 + "{" + goog.html.SafeStyle.unwrap(b2).replace(/</g, "\\3C ") + "}";
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a2) {
        for (var b2 = { "(": ")", "[": "]" }, c2 = [], d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2[d2];
          if (b2[e2])
            c2.push(b2[e2]);
          else if (goog.object.contains(b2, e2) && c2.pop() != e2)
            return false;
        }
        return c2.length == 0;
      };
      goog.html.SafeStyleSheet.concat = function(a2) {
        var b2 = "", c2 = function(a3) {
          goog.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyleSheet.unwrap(a3);
        };
        goog.array.forEach(arguments, c2);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.SafeStyleSheet.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        if (a2.length === 0)
          return goog.html.SafeStyleSheet.EMPTY;
        goog.asserts.assert(!goog.string.internal.contains(a2, "<"), "Forbidden '<' character in style sheet string: " + a2);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
        return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
      });
      goog.html.SafeStyleSheet.unwrap = function(a2) {
        if (a2 instanceof goog.html.SafeStyleSheet && a2.constructor === goog.html.SafeStyleSheet && a2.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeStyleSheet";
      };
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a2;
        return this;
      };
      goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
      goog.labs = {};
      goog.labs.userAgent = {};
      goog.labs.userAgent.util = {};
      goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
        var a2 = goog.labs.userAgent.util.getNavigator_();
        return a2 && (a2 = a2.userAgent) ? a2 : "";
      };
      goog.labs.userAgent.util.getNavigator_ = function() {
        return goog.global.navigator;
      };
      goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
      goog.labs.userAgent.util.setUserAgent = function(a2) {
        goog.labs.userAgent.util.userAgent_ = a2 || goog.labs.userAgent.util.getNativeUserAgentString_();
      };
      goog.labs.userAgent.util.getUserAgent = function() {
        return goog.labs.userAgent.util.userAgent_;
      };
      goog.labs.userAgent.util.matchUserAgent = function(a2) {
        var b2 = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.contains(b2, a2);
      };
      goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a2) {
        var b2 = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.caseInsensitiveContains(b2, a2);
      };
      goog.labs.userAgent.util.extractVersionTuples = function(a2) {
        for (var b2 = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c2 = [], d2; d2 = b2.exec(a2); )
          c2.push([d2[1], d2[2], d2[3] || void 0]);
        return c2;
      };
      goog.labs.userAgent.browser = {};
      goog.labs.userAgent.browser.matchOpera_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Opera");
      };
      goog.labs.userAgent.browser.matchIE_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edg/");
      };
      goog.labs.userAgent.browser.matchOperaChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("OPR");
      };
      goog.labs.userAgent.browser.matchFirefox_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
      };
      goog.labs.userAgent.browser.matchSafari_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
      };
      goog.labs.userAgent.browser.matchCoast_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Coast");
      };
      goog.labs.userAgent.browser.matchIosWebview_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
      };
      goog.labs.userAgent.browser.matchChrome_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
      };
      goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
      };
      goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
      goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
      goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
      goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
      goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
      goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
      goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
      goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
      goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
      goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
      goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
      goog.labs.userAgent.browser.isSilk = function() {
        return goog.labs.userAgent.util.matchUserAgent("Silk");
      };
      goog.labs.userAgent.browser.getVersion = function() {
        function a2(a3) {
          a3 = goog.array.find(a3, d2);
          return c2[a3] || "";
        }
        var b2 = goog.labs.userAgent.util.getUserAgent();
        if (goog.labs.userAgent.browser.isIE())
          return goog.labs.userAgent.browser.getIEVersion_(b2);
        b2 = goog.labs.userAgent.util.extractVersionTuples(b2);
        var c2 = {};
        goog.array.forEach(b2, function(a3) {
          c2[a3[0]] = a3[1];
        });
        var d2 = goog.partial(goog.object.containsKey, c2);
        return goog.labs.userAgent.browser.isOpera() ? a2(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a2(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a2(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a2(["Chrome", "CriOS"]) : (b2 = b2[2]) && b2[1] || "";
      };
      goog.labs.userAgent.browser.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a2);
      };
      goog.labs.userAgent.browser.getIEVersion_ = function(a2) {
        var b2 = /rv: *([\d\.]*)/.exec(a2);
        if (b2 && b2[1])
          return b2[1];
        b2 = "";
        var c2 = /MSIE +([\d\.]+)/.exec(a2);
        if (c2 && c2[1])
          if (a2 = /Trident\/(\d.\d)/.exec(a2), c2[1] == "7.0")
            if (a2 && a2[1])
              switch (a2[1]) {
                case "4.0":
                  b2 = "8.0";
                  break;
                case "5.0":
                  b2 = "9.0";
                  break;
                case "6.0":
                  b2 = "10.0";
                  break;
                case "7.0":
                  b2 = "11.0";
              }
            else
              b2 = "7.0";
          else
            b2 = c2[1];
        return b2;
      };
      goog.html.SafeHtml = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
        this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
        this.dir_ = null;
      };
      goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeHtml.prototype.getDirection = function() {
        return this.dir_;
      };
      goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeHtml.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
        return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
      });
      goog.html.SafeHtml.unwrap = function(a2) {
        return goog.html.SafeHtml.unwrapTrustedHTML(a2).toString();
      };
      goog.html.SafeHtml.unwrapTrustedHTML = function(a2) {
        if (a2 instanceof goog.html.SafeHtml && a2.constructor === goog.html.SafeHtml && a2.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
        goog.asserts.fail("expected object of type SafeHtml, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeHtml";
      };
      goog.html.SafeHtml.htmlEscape = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        var b2 = typeof a2 == "object", c2 = null;
        b2 && a2.implementsGoogI18nBidiDirectionalString && (c2 = a2.getDirection());
        a2 = b2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a2), c2);
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
      };
      goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
      goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
      goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
      goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = { APPLET: true, BASE: true, EMBED: true, IFRAME: true, LINK: true, MATH: true, META: true, OBJECT: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.html.SafeHtml.create = function(a2, b2, c2) {
        goog.html.SafeHtml.verifyTagName(String(a2));
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a2), b2, c2);
      };
      goog.html.SafeHtml.verifyTagName = function(a2) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a2))
          throw Error("Invalid tag name <" + a2 + ">.");
        if (a2.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
          throw Error("Tag name <" + a2 + "> is not allowed for SafeHtml.");
      };
      goog.html.SafeHtml.createIframe = function(a2, b2, c2, d2) {
        a2 && goog.html.TrustedResourceUrl.unwrap(a2);
        var e2 = {};
        e2.src = a2 || null;
        e2.srcdoc = b2 && goog.html.SafeHtml.unwrap(b2);
        a2 = goog.html.SafeHtml.combineAttributes(e2, { sandbox: "" }, c2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
      };
      goog.html.SafeHtml.createSandboxIframe = function(a2, b2, c2, d2) {
        if (!goog.html.SafeHtml.canUseSandboxIframe())
          throw Error("The browser does not support sandboxed iframes.");
        var e2 = {};
        e2.src = a2 ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2)) : null;
        e2.srcdoc = b2 || null;
        e2.sandbox = "";
        a2 = goog.html.SafeHtml.combineAttributes(e2, {}, c2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
      };
      goog.html.SafeHtml.canUseSandboxIframe = function() {
        return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
      };
      goog.html.SafeHtml.createScriptSrc = function(a2, b2) {
        goog.html.TrustedResourceUrl.unwrap(a2);
        a2 = goog.html.SafeHtml.combineAttributes({ src: a2 }, {}, b2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a2);
      };
      goog.html.SafeHtml.createScript = function(a2, b2) {
        for (var c2 in b2) {
          var d2 = c2.toLowerCase();
          if (d2 == "language" || d2 == "src" || d2 == "text" || d2 == "type")
            throw Error('Cannot set "' + d2 + '" attribute');
        }
        c2 = "";
        a2 = goog.array.concat(a2);
        for (d2 = 0; d2 < a2.length; d2++)
          c2 += goog.html.SafeScript.unwrap(a2[d2]);
        a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b2, a2);
      };
      goog.html.SafeHtml.createStyle = function(a2, b2) {
        b2 = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b2);
        var c2 = "";
        a2 = goog.array.concat(a2);
        for (var d2 = 0; d2 < a2.length; d2++)
          c2 += goog.html.SafeStyleSheet.unwrap(a2[d2]);
        a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b2, a2);
      };
      goog.html.SafeHtml.createMetaRefresh = function(a2, b2) {
        a2 = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2));
        (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a2, ";") && (a2 = "'" + a2.replace(/'/g, "%27") + "'");
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b2 || 0) + "; url=" + a2 });
      };
      goog.html.SafeHtml.getAttrNameAndValue_ = function(a2, b2, c2) {
        if (c2 instanceof goog.string.Const)
          c2 = goog.string.Const.unwrap(c2);
        else if (b2.toLowerCase() == "style")
          c2 = goog.html.SafeHtml.getStyleValue_(c2);
        else {
          if (/^on/i.test(b2))
            throw Error('Attribute "' + b2 + '" requires goog.string.Const value, "' + c2 + '" given.');
          if (b2.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
            if (c2 instanceof goog.html.TrustedResourceUrl)
              c2 = goog.html.TrustedResourceUrl.unwrap(c2);
            else if (c2 instanceof goog.html.SafeUrl)
              c2 = goog.html.SafeUrl.unwrap(c2);
            else if (goog.isString(c2))
              c2 = goog.html.SafeUrl.sanitize(c2).getTypedStringValue();
            else
              throw Error('Attribute "' + b2 + '" on tag "' + a2 + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c2 + '" given.');
        }
        c2.implementsGoogStringTypedString && (c2 = c2.getTypedStringValue());
        goog.asserts.assert(goog.isString(c2) || goog.isNumber(c2), "String or number value expected, got " + typeof c2 + " with value: " + c2);
        return b2 + '="' + goog.string.internal.htmlEscape(String(c2)) + '"';
      };
      goog.html.SafeHtml.getStyleValue_ = function(a2) {
        if (!goog.isObject(a2))
          throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a2 + " given: " + a2);
        a2 instanceof goog.html.SafeStyle || (a2 = goog.html.SafeStyle.create(a2));
        return goog.html.SafeStyle.unwrap(a2);
      };
      goog.html.SafeHtml.createWithDir = function(a2, b2, c2, d2) {
        b2 = goog.html.SafeHtml.create(b2, c2, d2);
        b2.dir_ = a2;
        return b2;
      };
      goog.html.SafeHtml.join = function(a2, b2) {
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        var c2 = a2.getDirection(), d2 = [], e2 = function(a3) {
          goog.isArray(a3) ? goog.array.forEach(a3, e2) : (a3 = goog.html.SafeHtml.htmlEscape(a3), d2.push(goog.html.SafeHtml.unwrap(a3)), a3 = a3.getDirection(), c2 == goog.i18n.bidi.Dir.NEUTRAL ? c2 = a3 : a3 != goog.i18n.bidi.Dir.NEUTRAL && c2 != a3 && (c2 = null));
        };
        goog.array.forEach(b2, e2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d2.join(goog.html.SafeHtml.unwrap(a2)), c2);
      };
      goog.html.SafeHtml.concat = function(a2) {
        return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
      };
      goog.html.SafeHtml.concatWithDir = function(a2, b2) {
        var c2 = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
        c2.dir_ = a2;
        return c2;
      };
      goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a2, b2) {
        return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a2, b2);
      };
      goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2, b2) {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a2) : a2;
        this.dir_ = b2;
        return this;
      };
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a2, b2, c2) {
        var d2 = null;
        var e2 = "<" + a2 + goog.html.SafeHtml.stringifyAttributes(a2, b2);
        goog.isDefAndNotNull(c2) ? goog.isArray(c2) || (c2 = [c2]) : c2 = [];
        goog.dom.tags.isVoidTag(a2.toLowerCase()) ? (goog.asserts.assert(!c2.length, "Void tag <" + a2 + "> does not allow content."), e2 += ">") : (d2 = goog.html.SafeHtml.concat(c2), e2 += ">" + goog.html.SafeHtml.unwrap(d2) + "</" + a2 + ">", d2 = d2.getDirection());
        (a2 = b2 && b2.dir) && (d2 = /^(ltr|rtl|auto)$/i.test(a2) ? goog.i18n.bidi.Dir.NEUTRAL : null);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e2, d2);
      };
      goog.html.SafeHtml.stringifyAttributes = function(a2, b2) {
        var c2 = "";
        if (b2)
          for (var d2 in b2) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d2))
              throw Error('Invalid attribute name "' + d2 + '".');
            var e2 = b2[d2];
            goog.isDefAndNotNull(e2) && (c2 += " " + goog.html.SafeHtml.getAttrNameAndValue_(a2, d2, e2));
          }
        return c2;
      };
      goog.html.SafeHtml.combineAttributes = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = a2[e2];
        for (e2 in b2)
          goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = b2[e2];
        for (e2 in c2) {
          var f2 = e2.toLowerCase();
          if (f2 in a2)
            throw Error('Cannot override "' + f2 + '" attribute, got "' + e2 + '" with value "' + c2[e2] + '"');
          f2 in b2 && delete d2[f2];
          d2[e2] = c2[e2];
        }
        return d2;
      };
      goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.uncheckedconversions = {};
      goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a2, b2, c2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b2, c2 || null);
      };
      goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.dom.safe = {};
      goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
      goog.dom.safe.insertAdjacentHtml = function(a2, b2, c2) {
        a2.insertAdjacentHTML(b2, goog.html.SafeHtml.unwrapTrustedHTML(c2));
      };
      goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
        if (goog.DEBUG && typeof document === "undefined")
          return false;
        var a2 = document.createElement("div"), b2 = document.createElement("div");
        b2.appendChild(document.createElement("div"));
        a2.appendChild(b2);
        if (goog.DEBUG && !a2.firstChild)
          return false;
        b2 = a2.firstChild.firstChild;
        a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
        return !b2.parentElement;
      });
      goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a2, b2) {
        if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
          for (; a2.lastChild; )
            a2.removeChild(a2.lastChild);
        a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setInnerHtml = function(a2, b2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c2 = a2.tagName.toUpperCase();
          if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c2])
            throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a2.tagName + ".");
        }
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a2, b2);
      };
      goog.dom.safe.setOuterHtml = function(a2, b2) {
        a2.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setFormElementAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLFormElement(a2).action = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setButtonFormAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLButtonElement(a2).formAction = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setInputFormAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLInputElement(a2).formAction = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setStyle = function(a2, b2) {
        a2.style.cssText = goog.html.SafeStyle.unwrap(b2);
      };
      goog.dom.safe.documentWrite = function(a2, b2) {
        a2.write(goog.html.SafeHtml.unwrapTrustedHTML(b2));
      };
      goog.dom.safe.setAnchorHref = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLAnchorElement(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.href = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setImageSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLImageElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:image\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setAudioSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLAudioElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:audio\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setVideoSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLVideoElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:video\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setEmbedSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLEmbedElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
      };
      goog.dom.safe.setFrameSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLFrameElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setIframeSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setIframeSrcdoc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a2);
        a2.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setLinkHrefAndRel = function(a2, b2, c2) {
        goog.dom.asserts.assertIsHTMLLinkElement(a2);
        a2.rel = c2;
        goog.string.internal.caseInsensitiveContains(c2, "stylesheet") ? (goog.asserts.assert(b2 instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a2.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(b2)) : a2.href = b2 instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrapTrustedURL(b2) : b2 instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrapTrustedURL(b2) : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(b2));
      };
      goog.dom.safe.setObjectData = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLObjectElement(a2);
        a2.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
      };
      goog.dom.safe.setScriptSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLScriptElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
        (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
      };
      goog.dom.safe.setScriptContent = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLScriptElement(a2);
        a2.text = goog.html.SafeScript.unwrapTrustedScript(b2);
        (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
      };
      goog.dom.safe.setLocationHref = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.href = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.assignLocation = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.assign(goog.html.SafeUrl.unwrapTrustedURL(b2));
      };
      goog.dom.safe.replaceLocation = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.replace(goog.html.SafeUrl.unwrapTrustedURL(b2));
      };
      goog.dom.safe.openInWindow = function(a2, b2, c2, d2, e2) {
        a2 = a2 instanceof goog.html.SafeUrl ? a2 : goog.html.SafeUrl.sanitizeAssertUnchanged(a2);
        return (b2 || goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(a2), c2 ? goog.string.Const.unwrap(c2) : "", d2, e2);
      };
      goog.dom.safe.parseFromStringHtml = function(a2, b2) {
        return goog.dom.safe.parseFromString(a2, b2, "text/html");
      };
      goog.dom.safe.parseFromString = function(a2, b2, c2) {
        return a2.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b2), c2);
      };
      goog.dom.safe.createImageFromBlob = function(a2) {
        if (!/^image\/.*/g.test(a2.type))
          throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
        var b2 = goog.global.URL.createObjectURL(a2);
        a2 = new goog.global.Image();
        a2.onload = function() {
          goog.global.URL.revokeObjectURL(b2);
        };
        goog.dom.safe.setImageSrc(a2, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b2));
        return a2;
      };
      goog.string.DETECT_DOUBLE_ESCAPING = false;
      goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
      goog.string.Unicode = { NBSP: "\xA0" };
      goog.string.startsWith = goog.string.internal.startsWith;
      goog.string.endsWith = goog.string.internal.endsWith;
      goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
      goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
      goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
      goog.string.subs = function(a2, b2) {
        for (var c2 = a2.split("%s"), d2 = "", e2 = Array.prototype.slice.call(arguments, 1); e2.length && 1 < c2.length; )
          d2 += c2.shift() + e2.shift();
        return d2 + c2.join("%s");
      };
      goog.string.collapseWhitespace = function(a2) {
        return a2.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
      };
      goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
      goog.string.isEmptyString = function(a2) {
        return a2.length == 0;
      };
      goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
      goog.string.isEmptyOrWhitespaceSafe = function(a2) {
        return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a2));
      };
      goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
      goog.string.isBreakingWhitespace = function(a2) {
        return !/[^\t\n\r ]/.test(a2);
      };
      goog.string.isAlpha = function(a2) {
        return !/[^a-zA-Z]/.test(a2);
      };
      goog.string.isNumeric = function(a2) {
        return !/[^0-9]/.test(a2);
      };
      goog.string.isAlphaNumeric = function(a2) {
        return !/[^a-zA-Z0-9]/.test(a2);
      };
      goog.string.isSpace = function(a2) {
        return a2 == " ";
      };
      goog.string.isUnicodeChar = function(a2) {
        return a2.length == 1 && " " <= a2 && "~" >= a2 || "\x80" <= a2 && "\uFFFD" >= a2;
      };
      goog.string.stripNewlines = function(a2) {
        return a2.replace(/(\r\n|\r|\n)+/g, " ");
      };
      goog.string.canonicalizeNewlines = function(a2) {
        return a2.replace(/(\r\n|\r|\n)/g, "\n");
      };
      goog.string.normalizeWhitespace = function(a2) {
        return a2.replace(/\xa0|\s/g, " ");
      };
      goog.string.normalizeSpaces = function(a2) {
        return a2.replace(/\xa0|[ \t]+/g, " ");
      };
      goog.string.collapseBreakingSpaces = function(a2) {
        return a2.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
      };
      goog.string.trim = goog.string.internal.trim;
      goog.string.trimLeft = function(a2) {
        return a2.replace(/^[\s\xa0]+/, "");
      };
      goog.string.trimRight = function(a2) {
        return a2.replace(/[\s\xa0]+$/, "");
      };
      goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
      goog.string.numberAwareCompare_ = function(a2, b2, c2) {
        if (a2 == b2)
          return 0;
        if (!a2)
          return -1;
        if (!b2)
          return 1;
        for (var d2 = a2.toLowerCase().match(c2), e2 = b2.toLowerCase().match(c2), f2 = Math.min(d2.length, e2.length), g = 0; g < f2; g++) {
          c2 = d2[g];
          var h = e2[g];
          if (c2 != h)
            return a2 = parseInt(c2, 10), !isNaN(a2) && (b2 = parseInt(h, 10), !isNaN(b2) && a2 - b2) ? a2 - b2 : c2 < h ? -1 : 1;
        }
        return d2.length != e2.length ? d2.length - e2.length : a2 < b2 ? -1 : 1;
      };
      goog.string.intAwareCompare = function(a2, b2) {
        return goog.string.numberAwareCompare_(a2, b2, /\d+|\D+/g);
      };
      goog.string.floatAwareCompare = function(a2, b2) {
        return goog.string.numberAwareCompare_(a2, b2, /\d+|\.\d+|\D+/g);
      };
      goog.string.numerateCompare = goog.string.floatAwareCompare;
      goog.string.urlEncode = function(a2) {
        return encodeURIComponent(String(a2));
      };
      goog.string.urlDecode = function(a2) {
        return decodeURIComponent(a2.replace(/\+/g, " "));
      };
      goog.string.newLineToBr = goog.string.internal.newLineToBr;
      goog.string.htmlEscape = function(a2, b2) {
        a2 = goog.string.internal.htmlEscape(a2, b2);
        goog.string.DETECT_DOUBLE_ESCAPING && (a2 = a2.replace(goog.string.E_RE_, "&#101;"));
        return a2;
      };
      goog.string.E_RE_ = /e/g;
      goog.string.unescapeEntities = function(a2) {
        return goog.string.contains(a2, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a2) : goog.string.unescapePureXmlEntities_(a2) : a2;
      };
      goog.string.unescapeEntitiesWithDocument = function(a2, b2) {
        return goog.string.contains(a2, "&") ? goog.string.unescapeEntitiesUsingDom_(a2, b2) : a2;
      };
      goog.string.unescapeEntitiesUsingDom_ = function(a2, b2) {
        var c2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
        var d2 = b2 ? b2.createElement("div") : goog.global.document.createElement("div");
        return a2.replace(goog.string.HTML_ENTITY_PATTERN_, function(a3, b3) {
          var e2 = c2[a3];
          if (e2)
            return e2;
          b3.charAt(0) == "#" && (b3 = Number("0" + b3.substr(1)), isNaN(b3) || (e2 = String.fromCharCode(b3)));
          e2 || (goog.dom.safe.setInnerHtml(d2, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), a3 + " ")), e2 = d2.firstChild.nodeValue.slice(0, -1));
          return c2[a3] = e2;
        });
      };
      goog.string.unescapePureXmlEntities_ = function(a2) {
        return a2.replace(/&([^;]+);/g, function(a3, c2) {
          switch (c2) {
            case "amp":
              return "&";
            case "lt":
              return "<";
            case "gt":
              return ">";
            case "quot":
              return '"';
            default:
              return c2.charAt(0) != "#" || (c2 = Number("0" + c2.substr(1)), isNaN(c2)) ? a3 : String.fromCharCode(c2);
          }
        });
      };
      goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
      goog.string.whitespaceEscape = function(a2, b2) {
        return goog.string.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
      };
      goog.string.preserveSpaces = function(a2) {
        return a2.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
      };
      goog.string.stripQuotes = function(a2, b2) {
        for (var c2 = b2.length, d2 = 0; d2 < c2; d2++) {
          var e2 = c2 == 1 ? b2 : b2.charAt(d2);
          if (a2.charAt(0) == e2 && a2.charAt(a2.length - 1) == e2)
            return a2.substring(1, a2.length - 1);
        }
        return a2;
      };
      goog.string.truncate = function(a2, b2, c2) {
        c2 && (a2 = goog.string.unescapeEntities(a2));
        a2.length > b2 && (a2 = a2.substring(0, b2 - 3) + "...");
        c2 && (a2 = goog.string.htmlEscape(a2));
        return a2;
      };
      goog.string.truncateMiddle = function(a2, b2, c2, d2) {
        c2 && (a2 = goog.string.unescapeEntities(a2));
        if (d2 && a2.length > b2) {
          d2 > b2 && (d2 = b2);
          var e2 = a2.length - d2;
          a2 = a2.substring(0, b2 - d2) + "..." + a2.substring(e2);
        } else
          a2.length > b2 && (d2 = Math.floor(b2 / 2), e2 = a2.length - d2, a2 = a2.substring(0, d2 + b2 % 2) + "..." + a2.substring(e2));
        c2 && (a2 = goog.string.htmlEscape(a2));
        return a2;
      };
      goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
      goog.string.jsEscapeCache_ = { "'": "\\'" };
      goog.string.quote = function(a2) {
        a2 = String(a2);
        for (var b2 = ['"'], c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charAt(c2), e2 = d2.charCodeAt(0);
          b2[c2 + 1] = goog.string.specialEscapeChars_[d2] || (31 < e2 && 127 > e2 ? d2 : goog.string.escapeChar(d2));
        }
        b2.push('"');
        return b2.join("");
      };
      goog.string.escapeString = function(a2) {
        for (var b2 = [], c2 = 0; c2 < a2.length; c2++)
          b2[c2] = goog.string.escapeChar(a2.charAt(c2));
        return b2.join("");
      };
      goog.string.escapeChar = function(a2) {
        if (a2 in goog.string.jsEscapeCache_)
          return goog.string.jsEscapeCache_[a2];
        if (a2 in goog.string.specialEscapeChars_)
          return goog.string.jsEscapeCache_[a2] = goog.string.specialEscapeChars_[a2];
        var b2 = a2.charCodeAt(0);
        if (31 < b2 && 127 > b2)
          var c2 = a2;
        else {
          if (256 > b2) {
            if (c2 = "\\x", 16 > b2 || 256 < b2)
              c2 += "0";
          } else
            c2 = "\\u", 4096 > b2 && (c2 += "0");
          c2 += b2.toString(16).toUpperCase();
        }
        return goog.string.jsEscapeCache_[a2] = c2;
      };
      goog.string.contains = goog.string.internal.contains;
      goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
      goog.string.countOf = function(a2, b2) {
        return a2 && b2 ? a2.split(b2).length - 1 : 0;
      };
      goog.string.removeAt = function(a2, b2, c2) {
        var d2 = a2;
        0 <= b2 && b2 < a2.length && 0 < c2 && (d2 = a2.substr(0, b2) + a2.substr(b2 + c2, a2.length - b2 - c2));
        return d2;
      };
      goog.string.remove = function(a2, b2) {
        return a2.replace(b2, "");
      };
      goog.string.removeAll = function(a2, b2) {
        b2 = new RegExp(goog.string.regExpEscape(b2), "g");
        return a2.replace(b2, "");
      };
      goog.string.replaceAll = function(a2, b2, c2) {
        b2 = new RegExp(goog.string.regExpEscape(b2), "g");
        return a2.replace(b2, c2.replace(/\$/g, "$$$$"));
      };
      goog.string.regExpEscape = function(a2) {
        return String(a2).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
      };
      goog.string.repeat = String.prototype.repeat ? function(a2, b2) {
        return a2.repeat(b2);
      } : function(a2, b2) {
        return Array(b2 + 1).join(a2);
      };
      goog.string.padNumber = function(a2, b2, c2) {
        a2 = goog.isDef(c2) ? a2.toFixed(c2) : String(a2);
        c2 = a2.indexOf(".");
        c2 == -1 && (c2 = a2.length);
        return goog.string.repeat("0", Math.max(0, b2 - c2)) + a2;
      };
      goog.string.makeSafe = function(a2) {
        return a2 == null ? "" : String(a2);
      };
      goog.string.buildString = function(a2) {
        return Array.prototype.join.call(arguments, "");
      };
      goog.string.getRandomString = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
      };
      goog.string.compareVersions = goog.string.internal.compareVersions;
      goog.string.hashCode = function(a2) {
        for (var b2 = 0, c2 = 0; c2 < a2.length; ++c2)
          b2 = 31 * b2 + a2.charCodeAt(c2) >>> 0;
        return b2;
      };
      goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
      goog.string.createUniqueString = function() {
        return "goog_" + goog.string.uniqueStringCounter_++;
      };
      goog.string.toNumber = function(a2) {
        var b2 = Number(a2);
        return b2 == 0 && goog.string.isEmptyOrWhitespace(a2) ? NaN : b2;
      };
      goog.string.isLowerCamelCase = function(a2) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(a2);
      };
      goog.string.isUpperCamelCase = function(a2) {
        return /^([A-Z][a-z]*)+$/.test(a2);
      };
      goog.string.toCamelCase = function(a2) {
        return String(a2).replace(/\-([a-z])/g, function(a3, c2) {
          return c2.toUpperCase();
        });
      };
      goog.string.toSelectorCase = function(a2) {
        return String(a2).replace(/([A-Z])/g, "-$1").toLowerCase();
      };
      goog.string.toTitleCase = function(a2, b2) {
        b2 = goog.isString(b2) ? goog.string.regExpEscape(b2) : "\\s";
        return a2.replace(new RegExp("(^" + (b2 ? "|[" + b2 + "]+" : "") + ")([a-z])", "g"), function(a3, b3, e2) {
          return b3 + e2.toUpperCase();
        });
      };
      goog.string.capitalize = function(a2) {
        return String(a2.charAt(0)).toUpperCase() + String(a2.substr(1)).toLowerCase();
      };
      goog.string.parseInt = function(a2) {
        isFinite(a2) && (a2 = String(a2));
        return goog.isString(a2) ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
      };
      goog.string.splitLimit = function(a2, b2, c2) {
        a2 = a2.split(b2);
        for (var d2 = []; 0 < c2 && a2.length; )
          d2.push(a2.shift()), c2--;
        a2.length && d2.push(a2.join(b2));
        return d2;
      };
      goog.string.lastComponent = function(a2, b2) {
        if (b2)
          typeof b2 == "string" && (b2 = [b2]);
        else
          return a2;
        for (var c2 = -1, d2 = 0; d2 < b2.length; d2++)
          if (b2[d2] != "") {
            var e2 = a2.lastIndexOf(b2[d2]);
            e2 > c2 && (c2 = e2);
          }
        return c2 == -1 ? a2 : a2.slice(c2 + 1);
      };
      goog.string.editDistance = function(a2, b2) {
        var c2 = [], d2 = [];
        if (a2 == b2)
          return 0;
        if (!a2.length || !b2.length)
          return Math.max(a2.length, b2.length);
        for (var e2 = 0; e2 < b2.length + 1; e2++)
          c2[e2] = e2;
        for (e2 = 0; e2 < a2.length; e2++) {
          d2[0] = e2 + 1;
          for (var f2 = 0; f2 < b2.length; f2++)
            d2[f2 + 1] = Math.min(d2[f2] + 1, c2[f2 + 1] + 1, c2[f2] + Number(a2[e2] != b2[f2]));
          for (f2 = 0; f2 < c2.length; f2++)
            c2[f2] = d2[f2];
        }
        return d2[b2.length];
      };
      goog.labs.userAgent.engine = {};
      goog.labs.userAgent.engine.isPresto = function() {
        return goog.labs.userAgent.util.matchUserAgent("Presto");
      };
      goog.labs.userAgent.engine.isTrident = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.engine.isEdge = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.engine.isWebKit = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.isGecko = function() {
        return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.getVersion = function() {
        var a2 = goog.labs.userAgent.util.getUserAgent();
        if (a2) {
          a2 = goog.labs.userAgent.util.extractVersionTuples(a2);
          var b2 = goog.labs.userAgent.engine.getEngineTuple_(a2);
          if (b2)
            return b2[0] == "Gecko" ? goog.labs.userAgent.engine.getVersionForKey_(a2, "Firefox") : b2[1];
          a2 = a2[0];
          var c2;
          if (a2 && (c2 = a2[2]) && (c2 = /Trident\/([^\s;]+)/.exec(c2)))
            return c2[1];
        }
        return "";
      };
      goog.labs.userAgent.engine.getEngineTuple_ = function(a2) {
        if (!goog.labs.userAgent.engine.isEdge())
          return a2[1];
        for (var b2 = 0; b2 < a2.length; b2++) {
          var c2 = a2[b2];
          if (c2[0] == "Edge")
            return c2;
        }
      };
      goog.labs.userAgent.engine.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a2);
      };
      goog.labs.userAgent.engine.getVersionForKey_ = function(a2, b2) {
        return (a2 = goog.array.find(a2, function(a3) {
          return b2 == a3[0];
        })) && a2[1] || "";
      };
      goog.labs.userAgent.platform = {};
      goog.labs.userAgent.platform.isAndroid = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android");
      };
      goog.labs.userAgent.platform.isIpod = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPod");
      };
      goog.labs.userAgent.platform.isIphone = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIpad = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIos = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
      };
      goog.labs.userAgent.platform.isMacintosh = function() {
        return goog.labs.userAgent.util.matchUserAgent("Macintosh");
      };
      goog.labs.userAgent.platform.isLinux = function() {
        return goog.labs.userAgent.util.matchUserAgent("Linux");
      };
      goog.labs.userAgent.platform.isWindows = function() {
        return goog.labs.userAgent.util.matchUserAgent("Windows");
      };
      goog.labs.userAgent.platform.isChromeOS = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrOS");
      };
      goog.labs.userAgent.platform.isChromecast = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrKey");
      };
      goog.labs.userAgent.platform.isKaiOS = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
      };
      goog.labs.userAgent.platform.isGo2Phone = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP");
      };
      goog.labs.userAgent.platform.getVersion = function() {
        var a2 = goog.labs.userAgent.util.getUserAgent(), b2 = "";
        goog.labs.userAgent.platform.isWindows() ? (b2 = /Windows (?:NT|Phone) ([0-9.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b2 = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b2 = (a2 = b2.exec(a2)) && a2[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b2 = /Mac OS X ([0-9_.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b2 = /(?:KaiOS)\/(\S+)/i, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isAndroid() ? (b2 = /Android\s+([^\);]+)(\)|;)/, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isChromeOS() && (b2 = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b2 = (a2 = b2.exec(a2)) && a2[1]);
        return b2 || "";
      };
      goog.labs.userAgent.platform.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a2);
      };
      goog.reflect = {};
      goog.reflect.object = function(a2, b2) {
        return b2;
      };
      goog.reflect.objectProperty = function(a2, b2) {
        return a2;
      };
      goog.reflect.sinkValue = function(a2) {
        goog.reflect.sinkValue[" "](a2);
        return a2;
      };
      goog.reflect.sinkValue[" "] = goog.nullFunction;
      goog.reflect.canAccessProperty = function(a2, b2) {
        try {
          return goog.reflect.sinkValue(a2[b2]), true;
        } catch (c2) {
        }
        return false;
      };
      goog.reflect.cache = function(a2, b2, c2, d2) {
        d2 = d2 ? d2(b2) : b2;
        return Object.prototype.hasOwnProperty.call(a2, d2) ? a2[d2] : a2[d2] = c2(b2);
      };
      goog.userAgent = {};
      goog.userAgent.ASSUME_IE = false;
      goog.userAgent.ASSUME_EDGE = false;
      goog.userAgent.ASSUME_GECKO = false;
      goog.userAgent.ASSUME_WEBKIT = false;
      goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
      goog.userAgent.ASSUME_OPERA = false;
      goog.userAgent.ASSUME_ANY_VERSION = false;
      goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
      goog.userAgent.getUserAgentString = function() {
        return goog.labs.userAgent.util.getUserAgent();
      };
      goog.userAgent.getNavigatorTyped = function() {
        return goog.global.navigator || null;
      };
      goog.userAgent.getNavigator = function() {
        return goog.userAgent.getNavigatorTyped();
      };
      goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
      goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
      goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
      goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
      goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
      goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
      goog.userAgent.isMobile_ = function() {
        return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
      };
      goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
      goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
      goog.userAgent.determinePlatform_ = function() {
        var a2 = goog.userAgent.getNavigatorTyped();
        return a2 && a2.platform || "";
      };
      goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
      goog.userAgent.ASSUME_MAC = false;
      goog.userAgent.ASSUME_WINDOWS = false;
      goog.userAgent.ASSUME_LINUX = false;
      goog.userAgent.ASSUME_X11 = false;
      goog.userAgent.ASSUME_ANDROID = false;
      goog.userAgent.ASSUME_IPHONE = false;
      goog.userAgent.ASSUME_IPAD = false;
      goog.userAgent.ASSUME_IPOD = false;
      goog.userAgent.ASSUME_KAIOS = false;
      goog.userAgent.ASSUME_GO2PHONE = false;
      goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
      goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
      goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
      goog.userAgent.isLegacyLinux_ = function() {
        return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
      };
      goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
      goog.userAgent.isX11_ = function() {
        var a2 = goog.userAgent.getNavigatorTyped();
        return !!a2 && goog.string.contains(a2.appVersion || "", "X11");
      };
      goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
      goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
      goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
      goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
      goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
      goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
      goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone();
      goog.userAgent.determineVersion_ = function() {
        var a2 = "", b2 = goog.userAgent.getVersionRegexResult_();
        b2 && (a2 = b2 ? b2[1] : "");
        return goog.userAgent.IE && (b2 = goog.userAgent.getDocumentMode_(), b2 != null && b2 > parseFloat(a2)) ? String(b2) : a2;
      };
      goog.userAgent.getVersionRegexResult_ = function() {
        var a2 = goog.userAgent.getUserAgentString();
        if (goog.userAgent.GECKO)
          return /rv:([^\);]+)(\)|;)/.exec(a2);
        if (goog.userAgent.EDGE)
          return /Edge\/([\d\.]+)/.exec(a2);
        if (goog.userAgent.IE)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
        if (goog.userAgent.WEBKIT)
          return /WebKit\/(\S+)/.exec(a2);
        if (goog.userAgent.OPERA)
          return /(?:Version)[ \/]?(\S+)/.exec(a2);
      };
      goog.userAgent.getDocumentMode_ = function() {
        var a2 = goog.global.document;
        return a2 ? a2.documentMode : void 0;
      };
      goog.userAgent.VERSION = goog.userAgent.determineVersion_();
      goog.userAgent.compare = function(a2, b2) {
        return goog.string.compareVersions(a2, b2);
      };
      goog.userAgent.isVersionOrHigherCache_ = {};
      goog.userAgent.isVersionOrHigher = function(a2) {
        return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a2, function() {
          return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a2);
        });
      };
      goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
      goog.userAgent.isDocumentModeOrHigher = function(a2) {
        return Number(goog.userAgent.DOCUMENT_MODE) >= a2;
      };
      goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
      goog.userAgent.DOCUMENT_MODE = function() {
        if (goog.global.document && goog.userAgent.IE)
          return goog.userAgent.getDocumentMode_();
      }();
      goog.userAgent.product = {};
      goog.userAgent.product.ASSUME_FIREFOX = false;
      goog.userAgent.product.ASSUME_IPHONE = false;
      goog.userAgent.product.ASSUME_IPAD = false;
      goog.userAgent.product.ASSUME_ANDROID = false;
      goog.userAgent.product.ASSUME_CHROME = false;
      goog.userAgent.product.ASSUME_SAFARI = false;
      goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
      goog.userAgent.product.OPERA = goog.userAgent.OPERA;
      goog.userAgent.product.IE = goog.userAgent.IE;
      goog.userAgent.product.EDGE = goog.userAgent.EDGE;
      goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
      goog.userAgent.product.isIphoneOrIpod_ = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
      };
      goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
      goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
      goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
      goog.userAgent.product.isSafariDesktop_ = function() {
        return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
      };
      goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
      goog.crypt.base64 = {};
      goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
      goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
      goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
      goog.crypt.base64.paddingChars_ = "=.";
      goog.crypt.base64.isPadding_ = function(a2) {
        return goog.string.contains(goog.crypt.base64.paddingChars_, a2);
      };
      goog.crypt.base64.byteToCharMaps_ = {};
      goog.crypt.base64.charToByteMap_ = null;
      goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
      goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
      goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
      goog.crypt.base64.encodeByteArray = function(a2, b2) {
        goog.asserts.assert(goog.isArrayLike(a2), "encodeByteArray takes an array as a parameter");
        b2 === void 0 && (b2 = goog.crypt.base64.Alphabet.DEFAULT);
        goog.crypt.base64.init_();
        b2 = goog.crypt.base64.byteToCharMaps_[b2];
        for (var c2 = [], d2 = 0; d2 < a2.length; d2 += 3) {
          var e2 = a2[d2], f2 = d2 + 1 < a2.length, g = f2 ? a2[d2 + 1] : 0, h = d2 + 2 < a2.length, k = h ? a2[d2 + 2] : 0, l = e2 >> 2;
          e2 = (e2 & 3) << 4 | g >> 4;
          g = (g & 15) << 2 | k >> 6;
          k &= 63;
          h || (k = 64, f2 || (g = 64));
          c2.push(b2[l], b2[e2], b2[g] || "", b2[k] || "");
        }
        return c2.join("");
      };
      goog.crypt.base64.encodeString = function(a2, b2) {
        return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b2 ? goog.global.btoa(a2) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a2), b2);
      };
      goog.crypt.base64.decodeString = function(a2, b2) {
        if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b2)
          return goog.global.atob(a2);
        var c2 = "";
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          c2 += String.fromCharCode(a3);
        });
        return c2;
      };
      goog.crypt.base64.decodeStringToByteArray = function(a2, b2) {
        var c2 = [];
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          c2.push(a3);
        });
        return c2;
      };
      goog.crypt.base64.decodeStringToUint8Array = function(a2) {
        goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
        var b2 = a2.length, c2 = 3 * b2 / 4;
        c2 % 3 ? c2 = Math.floor(c2) : goog.crypt.base64.isPadding_(a2[b2 - 1]) && (c2 = goog.crypt.base64.isPadding_(a2[b2 - 2]) ? c2 - 2 : c2 - 1);
        var d2 = new Uint8Array(c2), e2 = 0;
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          d2[e2++] = a3;
        });
        return d2.subarray(0, e2);
      };
      goog.crypt.base64.decodeStringInternal_ = function(a2, b2) {
        function c2(b3) {
          for (; d2 < a2.length; ) {
            var c3 = a2.charAt(d2++), e3 = goog.crypt.base64.charToByteMap_[c3];
            if (e3 != null)
              return e3;
            if (!goog.string.isEmptyOrWhitespace(c3))
              throw Error("Unknown base64 encoding at char: " + c3);
          }
          return b3;
        }
        goog.crypt.base64.init_();
        for (var d2 = 0; ; ) {
          var e2 = c2(-1), f2 = c2(0), g = c2(64), h = c2(64);
          if (h === 64 && e2 === -1)
            break;
          b2(e2 << 2 | f2 >> 4);
          g != 64 && (b2(f2 << 4 & 240 | g >> 2), h != 64 && b2(g << 6 & 192 | h));
        }
      };
      goog.crypt.base64.init_ = function() {
        if (!goog.crypt.base64.charToByteMap_) {
          goog.crypt.base64.charToByteMap_ = {};
          for (var a2 = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c2 = 0; 5 > c2; c2++) {
            var d2 = a2.concat(b2[c2].split(""));
            goog.crypt.base64.byteToCharMaps_[c2] = d2;
            for (var e2 = 0; e2 < d2.length; e2++) {
              var f2 = d2[e2], g = goog.crypt.base64.charToByteMap_[f2];
              g === void 0 ? goog.crypt.base64.charToByteMap_[f2] = e2 : goog.asserts.assert(g === e2);
            }
          }
        }
      };
      jspb.utils = {};
      jspb.utils.split64Low = 0;
      jspb.utils.split64High = 0;
      jspb.utils.splitUint64 = function(a2) {
        var b2 = a2 >>> 0;
        a2 = Math.floor((a2 - b2) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
        jspb.utils.split64Low = b2;
        jspb.utils.split64High = a2;
      };
      jspb.utils.splitInt64 = function(a2) {
        var b2 = 0 > a2;
        a2 = Math.abs(a2);
        var c2 = a2 >>> 0;
        a2 = Math.floor((a2 - c2) / jspb.BinaryConstants.TWO_TO_32);
        a2 >>>= 0;
        b2 && (a2 = ~a2 >>> 0, c2 = (~c2 >>> 0) + 1, 4294967295 < c2 && (c2 = 0, a2++, 4294967295 < a2 && (a2 = 0)));
        jspb.utils.split64Low = c2;
        jspb.utils.split64High = a2;
      };
      jspb.utils.splitZigzag64 = function(a2) {
        var b2 = 0 > a2;
        a2 = 2 * Math.abs(a2);
        jspb.utils.splitUint64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        b2 && (a2 == 0 ? c2 == 0 ? c2 = a2 = 4294967295 : (c2--, a2 = 4294967295) : a2--);
        jspb.utils.split64Low = a2;
        jspb.utils.split64High = c2;
      };
      jspb.utils.splitFloat32 = function(a2) {
        var b2 = 0 > a2 ? 1 : 0;
        a2 = b2 ? -a2 : a2;
        if (a2 === 0)
          0 < 1 / a2 ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
        else if (isNaN(a2))
          jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
        else if (a2 > jspb.BinaryConstants.FLOAT32_MAX)
          jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | 2139095040) >>> 0;
        else if (a2 < jspb.BinaryConstants.FLOAT32_MIN)
          a2 = Math.round(a2 / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | a2) >>> 0;
        else {
          var c2 = Math.floor(Math.log(a2) / Math.LN2);
          a2 *= Math.pow(2, -c2);
          a2 = Math.round(a2 * jspb.BinaryConstants.TWO_TO_23);
          16777216 <= a2 && ++c2;
          jspb.utils.split64High = 0;
          jspb.utils.split64Low = (b2 << 31 | c2 + 127 << 23 | a2 & 8388607) >>> 0;
        }
      };
      jspb.utils.splitFloat64 = function(a2) {
        var b2 = 0 > a2 ? 1 : 0;
        a2 = b2 ? -a2 : a2;
        if (a2 === 0)
          jspb.utils.split64High = 0 < 1 / a2 ? 0 : 2147483648, jspb.utils.split64Low = 0;
        else if (isNaN(a2))
          jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
        else if (a2 > jspb.BinaryConstants.FLOAT64_MAX)
          jspb.utils.split64High = (b2 << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
        else if (a2 < jspb.BinaryConstants.FLOAT64_MIN) {
          var c2 = a2 / Math.pow(2, -1074);
          a2 = c2 / jspb.BinaryConstants.TWO_TO_32;
          jspb.utils.split64High = (b2 << 31 | a2) >>> 0;
          jspb.utils.split64Low = c2 >>> 0;
        } else {
          c2 = a2;
          var d2 = 0;
          if (2 <= c2)
            for (; 2 <= c2 && 1023 > d2; )
              d2++, c2 /= 2;
          else
            for (; 1 > c2 && -1022 < d2; )
              c2 *= 2, d2--;
          c2 = a2 * Math.pow(2, -d2);
          a2 = c2 * jspb.BinaryConstants.TWO_TO_20 & 1048575;
          c2 = c2 * jspb.BinaryConstants.TWO_TO_52 >>> 0;
          jspb.utils.split64High = (b2 << 31 | d2 + 1023 << 20 | a2) >>> 0;
          jspb.utils.split64Low = c2;
        }
      };
      jspb.utils.splitHash64 = function(a2) {
        var b2 = a2.charCodeAt(0), c2 = a2.charCodeAt(1), d2 = a2.charCodeAt(2), e2 = a2.charCodeAt(3), f2 = a2.charCodeAt(4), g = a2.charCodeAt(5), h = a2.charCodeAt(6);
        a2 = a2.charCodeAt(7);
        jspb.utils.split64Low = b2 + (c2 << 8) + (d2 << 16) + (e2 << 24) >>> 0;
        jspb.utils.split64High = f2 + (g << 8) + (h << 16) + (a2 << 24) >>> 0;
      };
      jspb.utils.joinUint64 = function(a2, b2) {
        return b2 * jspb.BinaryConstants.TWO_TO_32 + (a2 >>> 0);
      };
      jspb.utils.joinInt64 = function(a2, b2) {
        var c2 = b2 & 2147483648;
        c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 >>> 0, a2 == 0 && (b2 = b2 + 1 >>> 0));
        a2 = jspb.utils.joinUint64(a2, b2);
        return c2 ? -a2 : a2;
      };
      jspb.utils.toZigzag64 = function(a2, b2, c2) {
        var d2 = b2 >> 31;
        return c2(a2 << 1 ^ d2, (b2 << 1 | a2 >>> 31) ^ d2);
      };
      jspb.utils.joinZigzag64 = function(a2, b2) {
        return jspb.utils.fromZigzag64(a2, b2, jspb.utils.joinInt64);
      };
      jspb.utils.fromZigzag64 = function(a2, b2, c2) {
        var d2 = -(a2 & 1);
        return c2((a2 >>> 1 | b2 << 31) ^ d2, b2 >>> 1 ^ d2);
      };
      jspb.utils.joinFloat32 = function(a2, b2) {
        b2 = 2 * (a2 >> 31) + 1;
        var c2 = a2 >>> 23 & 255;
        a2 &= 8388607;
        return c2 == 255 ? a2 ? NaN : Infinity * b2 : c2 == 0 ? b2 * Math.pow(2, -149) * a2 : b2 * Math.pow(2, c2 - 150) * (a2 + Math.pow(2, 23));
      };
      jspb.utils.joinFloat64 = function(a2, b2) {
        var c2 = 2 * (b2 >> 31) + 1, d2 = b2 >>> 20 & 2047;
        a2 = jspb.BinaryConstants.TWO_TO_32 * (b2 & 1048575) + a2;
        return d2 == 2047 ? a2 ? NaN : Infinity * c2 : d2 == 0 ? c2 * Math.pow(2, -1074) * a2 : c2 * Math.pow(2, d2 - 1075) * (a2 + jspb.BinaryConstants.TWO_TO_52);
      };
      jspb.utils.joinHash64 = function(a2, b2) {
        return String.fromCharCode(a2 >>> 0 & 255, a2 >>> 8 & 255, a2 >>> 16 & 255, a2 >>> 24 & 255, b2 >>> 0 & 255, b2 >>> 8 & 255, b2 >>> 16 & 255, b2 >>> 24 & 255);
      };
      jspb.utils.DIGITS = "0123456789abcdef".split("");
      jspb.utils.ZERO_CHAR_CODE_ = 48;
      jspb.utils.A_CHAR_CODE_ = 97;
      jspb.utils.joinUnsignedDecimalString = function(a2, b2) {
        function c2(a3, b3) {
          a3 = a3 ? String(a3) : "";
          return b3 ? "0000000".slice(a3.length) + a3 : a3;
        }
        if (2097151 >= b2)
          return "" + jspb.utils.joinUint64(a2, b2);
        var d2 = (a2 >>> 24 | b2 << 8) >>> 0 & 16777215;
        b2 = b2 >> 16 & 65535;
        a2 = (a2 & 16777215) + 6777216 * d2 + 6710656 * b2;
        d2 += 8147497 * b2;
        b2 *= 2;
        1e7 <= a2 && (d2 += Math.floor(a2 / 1e7), a2 %= 1e7);
        1e7 <= d2 && (b2 += Math.floor(d2 / 1e7), d2 %= 1e7);
        return c2(b2, 0) + c2(d2, b2) + c2(a2, 1);
      };
      jspb.utils.joinSignedDecimalString = function(a2, b2) {
        var c2 = b2 & 2147483648;
        c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 + (a2 == 0 ? 1 : 0) >>> 0);
        a2 = jspb.utils.joinUnsignedDecimalString(a2, b2);
        return c2 ? "-" + a2 : a2;
      };
      jspb.utils.hash64ToDecimalString = function(a2, b2) {
        jspb.utils.splitHash64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        return b2 ? jspb.utils.joinSignedDecimalString(a2, c2) : jspb.utils.joinUnsignedDecimalString(a2, c2);
      };
      jspb.utils.hash64ArrayToDecimalStrings = function(a2, b2) {
        for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
          c2[d2] = jspb.utils.hash64ToDecimalString(a2[d2], b2);
        return c2;
      };
      jspb.utils.decimalStringToHash64 = function(a2) {
        function b2(a3, b3) {
          for (var c3 = 0; 8 > c3 && (a3 !== 1 || 0 < b3); c3++)
            b3 = a3 * e2[c3] + b3, e2[c3] = b3 & 255, b3 >>>= 8;
        }
        function c2() {
          for (var a3 = 0; 8 > a3; a3++)
            e2[a3] = ~e2[a3] & 255;
        }
        goog.asserts.assert(0 < a2.length);
        var d2 = false;
        a2[0] === "-" && (d2 = true, a2 = a2.slice(1));
        for (var e2 = [0, 0, 0, 0, 0, 0, 0, 0], f2 = 0; f2 < a2.length; f2++)
          b2(10, a2.charCodeAt(f2) - jspb.utils.ZERO_CHAR_CODE_);
        d2 && (c2(), b2(1, 1));
        return goog.crypt.byteArrayToString(e2);
      };
      jspb.utils.splitDecimalString = function(a2) {
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
      };
      jspb.utils.toHexDigit_ = function(a2) {
        return String.fromCharCode(10 > a2 ? jspb.utils.ZERO_CHAR_CODE_ + a2 : jspb.utils.A_CHAR_CODE_ - 10 + a2);
      };
      jspb.utils.fromHexCharCode_ = function(a2) {
        return a2 >= jspb.utils.A_CHAR_CODE_ ? a2 - jspb.utils.A_CHAR_CODE_ + 10 : a2 - jspb.utils.ZERO_CHAR_CODE_;
      };
      jspb.utils.hash64ToHexString = function(a2) {
        var b2 = Array(18);
        b2[0] = "0";
        b2[1] = "x";
        for (var c2 = 0; 8 > c2; c2++) {
          var d2 = a2.charCodeAt(7 - c2);
          b2[2 * c2 + 2] = jspb.utils.toHexDigit_(d2 >> 4);
          b2[2 * c2 + 3] = jspb.utils.toHexDigit_(d2 & 15);
        }
        return b2.join("");
      };
      jspb.utils.hexStringToHash64 = function(a2) {
        a2 = a2.toLowerCase();
        goog.asserts.assert(a2.length == 18);
        goog.asserts.assert(a2[0] == "0");
        goog.asserts.assert(a2[1] == "x");
        for (var b2 = "", c2 = 0; 8 > c2; c2++) {
          var d2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 2)), e2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 3));
          b2 = String.fromCharCode(16 * d2 + e2) + b2;
        }
        return b2;
      };
      jspb.utils.hash64ToNumber = function(a2, b2) {
        jspb.utils.splitHash64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        return b2 ? jspb.utils.joinInt64(a2, c2) : jspb.utils.joinUint64(a2, c2);
      };
      jspb.utils.numberToHash64 = function(a2) {
        jspb.utils.splitInt64(a2);
        return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.utils.countVarints = function(a2, b2, c2) {
        for (var d2 = 0, e2 = b2; e2 < c2; e2++)
          d2 += a2[e2] >> 7;
        return c2 - b2 - d2;
      };
      jspb.utils.countVarintFields = function(a2, b2, c2, d2) {
        var e2 = 0;
        d2 = 8 * d2 + jspb.BinaryConstants.WireType.VARINT;
        if (128 > d2)
          for (; b2 < c2 && a2[b2++] == d2; )
            for (e2++; ; ) {
              var f2 = a2[b2++];
              if ((f2 & 128) == 0)
                break;
            }
        else
          for (; b2 < c2; ) {
            for (f2 = d2; 128 < f2; ) {
              if (a2[b2] != (f2 & 127 | 128))
                return e2;
              b2++;
              f2 >>= 7;
            }
            if (a2[b2++] != f2)
              break;
            for (e2++; f2 = a2[b2++], (f2 & 128) != 0; )
              ;
          }
        return e2;
      };
      jspb.utils.countFixedFields_ = function(a2, b2, c2, d2, e2) {
        var f2 = 0;
        if (128 > d2)
          for (; b2 < c2 && a2[b2++] == d2; )
            f2++, b2 += e2;
        else
          for (; b2 < c2; ) {
            for (var g = d2; 128 < g; ) {
              if (a2[b2++] != (g & 127 | 128))
                return f2;
              g >>= 7;
            }
            if (a2[b2++] != g)
              break;
            f2++;
            b2 += e2;
          }
        return f2;
      };
      jspb.utils.countFixed32Fields = function(a2, b2, c2, d2) {
        return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED32, 4);
      };
      jspb.utils.countFixed64Fields = function(a2, b2, c2, d2) {
        return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED64, 8);
      };
      jspb.utils.countDelimitedFields = function(a2, b2, c2, d2) {
        var e2 = 0;
        for (d2 = 8 * d2 + jspb.BinaryConstants.WireType.DELIMITED; b2 < c2; ) {
          for (var f2 = d2; 128 < f2; ) {
            if (a2[b2++] != (f2 & 127 | 128))
              return e2;
            f2 >>= 7;
          }
          if (a2[b2++] != f2)
            break;
          e2++;
          for (var g = 0, h = 1; f2 = a2[b2++], g += (f2 & 127) * h, h *= 128, (f2 & 128) != 0; )
            ;
          b2 += g;
        }
        return e2;
      };
      jspb.utils.debugBytesToTextFormat = function(a2) {
        var b2 = '"';
        if (a2) {
          a2 = jspb.utils.byteSourceToUint8Array(a2);
          for (var c2 = 0; c2 < a2.length; c2++)
            b2 += "\\x", 16 > a2[c2] && (b2 += "0"), b2 += a2[c2].toString(16);
        }
        return b2 + '"';
      };
      jspb.utils.debugScalarToTextFormat = function(a2) {
        return typeof a2 === "string" ? goog.string.quote(a2) : a2.toString();
      };
      jspb.utils.stringToByteArray = function(a2) {
        for (var b2 = new Uint8Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charCodeAt(c2);
          if (255 < d2)
            throw Error("Conversion error: string contains codepoint outside of byte range");
          b2[c2] = d2;
        }
        return b2;
      };
      jspb.utils.byteSourceToUint8Array = function(a2) {
        if (a2.constructor === Uint8Array)
          return a2;
        if (a2.constructor === ArrayBuffer || typeof Buffer != "undefined" && a2.constructor === Buffer || a2.constructor === Array)
          return new Uint8Array(a2);
        if (a2.constructor === String)
          return goog.crypt.base64.decodeStringToUint8Array(a2);
        goog.asserts.fail("Type not convertible to Uint8Array.");
        return new Uint8Array(0);
      };
      jspb.BinaryDecoder = function(a2, b2, c2) {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
        a2 && this.setBlock(a2, b2, c2);
      };
      jspb.BinaryDecoder.instanceCache_ = [];
      jspb.BinaryDecoder.alloc = function(a2, b2, c2) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
          var d2 = jspb.BinaryDecoder.instanceCache_.pop();
          a2 && d2.setBlock(a2, b2, c2);
          return d2;
        }
        return new jspb.BinaryDecoder(a2, b2, c2);
      };
      jspb.BinaryDecoder.prototype.free = function() {
        this.clear();
        100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
      };
      jspb.BinaryDecoder.prototype.clone = function() {
        return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
      };
      jspb.BinaryDecoder.prototype.clear = function() {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
      };
      jspb.BinaryDecoder.prototype.getBuffer = function() {
        return this.bytes_;
      };
      jspb.BinaryDecoder.prototype.setBlock = function(a2, b2, c2) {
        this.bytes_ = jspb.utils.byteSourceToUint8Array(a2);
        this.start_ = b2 !== void 0 ? b2 : 0;
        this.end_ = c2 !== void 0 ? this.start_ + c2 : this.bytes_.length;
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getEnd = function() {
        return this.end_;
      };
      jspb.BinaryDecoder.prototype.setEnd = function(a2) {
        this.end_ = a2;
      };
      jspb.BinaryDecoder.prototype.reset = function() {
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getCursor = function() {
        return this.cursor_;
      };
      jspb.BinaryDecoder.prototype.setCursor = function(a2) {
        this.cursor_ = a2;
      };
      jspb.BinaryDecoder.prototype.advance = function(a2) {
        this.cursor_ += a2;
        goog.asserts.assert(this.cursor_ <= this.end_);
      };
      jspb.BinaryDecoder.prototype.atEnd = function() {
        return this.cursor_ == this.end_;
      };
      jspb.BinaryDecoder.prototype.pastEnd = function() {
        return this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.getError = function() {
        return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a2) {
        for (var b2 = 128, c2 = 0, d2 = 0, e2 = 0; 4 > e2 && 128 <= b2; e2++)
          b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 7 * e2;
        128 <= b2 && (b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 28, d2 |= (b2 & 127) >> 4);
        if (128 <= b2)
          for (e2 = 0; 5 > e2 && 128 <= b2; e2++)
            b2 = this.bytes_[this.cursor_++], d2 |= (b2 & 127) << 7 * e2 + 3;
        if (128 > b2)
          return a2(c2 >>> 0, d2 >>> 0);
        goog.asserts.fail("Failed to read varint, encoding is invalid.");
        this.error_ = true;
      };
      jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a2) {
        return this.readSplitVarint64(function(b2, c2) {
          return jspb.utils.fromZigzag64(b2, c2, a2);
        });
      };
      jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a2) {
        var b2 = this.bytes_, c2 = this.cursor_;
        this.cursor_ += 8;
        for (var d2 = 0, e2 = 0, f2 = c2 + 7; f2 >= c2; f2--)
          d2 = d2 << 8 | b2[f2], e2 = e2 << 8 | b2[f2 + 4];
        return a2(d2, e2);
      };
      jspb.BinaryDecoder.prototype.skipVarint = function() {
        for (; this.bytes_[this.cursor_] & 128; )
          this.cursor_++;
        this.cursor_++;
      };
      jspb.BinaryDecoder.prototype.unskipVarint = function(a2) {
        for (; 128 < a2; )
          this.cursor_--, a2 >>>= 7;
        this.cursor_--;
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
        var a2 = this.bytes_;
        var b2 = a2[this.cursor_ + 0];
        var c2 = b2 & 127;
        if (128 > b2)
          return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 1];
        c2 |= (b2 & 127) << 7;
        if (128 > b2)
          return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 2];
        c2 |= (b2 & 127) << 14;
        if (128 > b2)
          return this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 3];
        c2 |= (b2 & 127) << 21;
        if (128 > b2)
          return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 4];
        c2 |= (b2 & 15) << 28;
        if (128 > b2)
          return this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), c2 >>> 0;
        this.cursor_ += 5;
        128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && goog.asserts.assert(false);
        goog.asserts.assert(this.cursor_ <= this.end_);
        return c2;
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32;
      jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
        return this.readUnsignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
        return this.readSignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
        var a2 = this.readUnsignedVarint32();
        return a2 >>> 1 ^ -(a2 & 1);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinUint64);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinInt64);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinZigzag64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readUint8 = function() {
        var a2 = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2;
      };
      jspb.BinaryDecoder.prototype.readUint16 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 0 | b2 << 8;
      };
      jspb.BinaryDecoder.prototype.readUint32 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return (a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24) >>> 0;
      };
      jspb.BinaryDecoder.prototype.readUint64 = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinUint64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readUint64String = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinUnsignedDecimalString(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readInt8 = function() {
        var a2 = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 24 >> 24;
      };
      jspb.BinaryDecoder.prototype.readInt16 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return (a2 << 0 | b2 << 8) << 16 >> 16;
      };
      jspb.BinaryDecoder.prototype.readInt32 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24;
      };
      jspb.BinaryDecoder.prototype.readInt64 = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinInt64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readInt64String = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinSignedDecimalString(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readFloat = function() {
        var a2 = this.readUint32();
        return jspb.utils.joinFloat32(a2, 0);
      };
      jspb.BinaryDecoder.prototype.readDouble = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinFloat64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readBool = function() {
        return !!this.bytes_[this.cursor_++];
      };
      jspb.BinaryDecoder.prototype.readEnum = function() {
        return this.readSignedVarint32();
      };
      jspb.BinaryDecoder.prototype.readString = function(a2) {
        var b2 = this.bytes_, c2 = this.cursor_;
        a2 = c2 + a2;
        for (var d2 = [], e2 = ""; c2 < a2; ) {
          var f2 = b2[c2++];
          if (128 > f2)
            d2.push(f2);
          else if (192 > f2)
            continue;
          else if (224 > f2) {
            var g = b2[c2++];
            d2.push((f2 & 31) << 6 | g & 63);
          } else if (240 > f2) {
            g = b2[c2++];
            var h = b2[c2++];
            d2.push((f2 & 15) << 12 | (g & 63) << 6 | h & 63);
          } else if (248 > f2) {
            g = b2[c2++];
            h = b2[c2++];
            var k = b2[c2++];
            f2 = (f2 & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
            f2 -= 65536;
            d2.push((f2 >> 10 & 1023) + 55296, (f2 & 1023) + 56320);
          }
          8192 <= d2.length && (e2 += String.fromCharCode.apply(null, d2), d2.length = 0);
        }
        e2 += goog.crypt.byteArrayToString(d2);
        this.cursor_ = c2;
        return e2;
      };
      jspb.BinaryDecoder.prototype.readStringWithLength = function() {
        var a2 = this.readUnsignedVarint32();
        return this.readString(a2);
      };
      jspb.BinaryDecoder.prototype.readBytes = function(a2) {
        if (0 > a2 || this.cursor_ + a2 > this.bytes_.length)
          return this.error_ = true, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
        var b2 = this.bytes_.subarray(this.cursor_, this.cursor_ + a2);
        this.cursor_ += a2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return b2;
      };
      jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
        return this.readSplitVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
        var a2 = this.bytes_, b2 = this.cursor_, c2 = a2[b2 + 0], d2 = a2[b2 + 1], e2 = a2[b2 + 2], f2 = a2[b2 + 3], g = a2[b2 + 4], h = a2[b2 + 5], k = a2[b2 + 6];
        a2 = a2[b2 + 7];
        this.cursor_ += 8;
        return String.fromCharCode(c2, d2, e2, f2, g, h, k, a2);
      };
      jspb.BinaryReader = function(a2, b2, c2) {
        this.decoder_ = jspb.BinaryDecoder.alloc(a2, b2, c2);
        this.fieldCursor_ = this.decoder_.getCursor();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
      };
      jspb.BinaryReader.instanceCache_ = [];
      jspb.BinaryReader.alloc = function(a2, b2, c2) {
        if (jspb.BinaryReader.instanceCache_.length) {
          var d2 = jspb.BinaryReader.instanceCache_.pop();
          a2 && d2.decoder_.setBlock(a2, b2, c2);
          return d2;
        }
        return new jspb.BinaryReader(a2, b2, c2);
      };
      jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
      jspb.BinaryReader.prototype.free = function() {
        this.decoder_.clear();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
        100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
      };
      jspb.BinaryReader.prototype.getFieldCursor = function() {
        return this.fieldCursor_;
      };
      jspb.BinaryReader.prototype.getCursor = function() {
        return this.decoder_.getCursor();
      };
      jspb.BinaryReader.prototype.getBuffer = function() {
        return this.decoder_.getBuffer();
      };
      jspb.BinaryReader.prototype.getFieldNumber = function() {
        return this.nextField_;
      };
      jspb.BinaryReader.prototype.getWireType = function() {
        return this.nextWireType_;
      };
      jspb.BinaryReader.prototype.isDelimited = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
      };
      jspb.BinaryReader.prototype.isEndGroup = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
      };
      jspb.BinaryReader.prototype.getError = function() {
        return this.error_ || this.decoder_.getError();
      };
      jspb.BinaryReader.prototype.setBlock = function(a2, b2, c2) {
        this.decoder_.setBlock(a2, b2, c2);
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.reset = function() {
        this.decoder_.reset();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.advance = function(a2) {
        this.decoder_.advance(a2);
      };
      jspb.BinaryReader.prototype.nextField = function() {
        if (this.decoder_.atEnd())
          return false;
        if (this.getError())
          return goog.asserts.fail("Decoder hit an error"), false;
        this.fieldCursor_ = this.decoder_.getCursor();
        var a2 = this.decoder_.readUnsignedVarint32(), b2 = a2 >>> 3;
        a2 &= 7;
        if (a2 != jspb.BinaryConstants.WireType.VARINT && a2 != jspb.BinaryConstants.WireType.FIXED32 && a2 != jspb.BinaryConstants.WireType.FIXED64 && a2 != jspb.BinaryConstants.WireType.DELIMITED && a2 != jspb.BinaryConstants.WireType.START_GROUP && a2 != jspb.BinaryConstants.WireType.END_GROUP)
          return goog.asserts.fail("Invalid wire type: %s (at position %s)", a2, this.fieldCursor_), this.error_ = true, false;
        this.nextField_ = b2;
        this.nextWireType_ = a2;
        return true;
      };
      jspb.BinaryReader.prototype.unskipHeader = function() {
        this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
      };
      jspb.BinaryReader.prototype.skipMatchingFields = function() {
        var a2 = this.nextField_;
        for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == a2; )
          this.skipField();
        this.decoder_.atEnd() || this.unskipHeader();
      };
      jspb.BinaryReader.prototype.skipVarintField = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
      };
      jspb.BinaryReader.prototype.skipDelimitedField = function() {
        if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
          goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
        else {
          var a2 = this.decoder_.readUnsignedVarint32();
          this.decoder_.advance(a2);
        }
      };
      jspb.BinaryReader.prototype.skipFixed32Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
      };
      jspb.BinaryReader.prototype.skipFixed64Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
      };
      jspb.BinaryReader.prototype.skipGroup = function() {
        var a2 = this.nextField_;
        do {
          if (!this.nextField()) {
            goog.asserts.fail("Unmatched start-group tag: stream EOF");
            this.error_ = true;
            break;
          }
          if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != a2 && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = true);
            break;
          }
          this.skipField();
        } while (1);
      };
      jspb.BinaryReader.prototype.skipField = function() {
        switch (this.nextWireType_) {
          case jspb.BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
          case jspb.BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
          case jspb.BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
          case jspb.BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
          case jspb.BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
          default:
            goog.asserts.fail("Invalid wire encoding for field.");
        }
      };
      jspb.BinaryReader.prototype.registerReadCallback = function(a2, b2) {
        this.readCallbacks_ === null && (this.readCallbacks_ = {});
        goog.asserts.assert(!this.readCallbacks_[a2]);
        this.readCallbacks_[a2] = b2;
      };
      jspb.BinaryReader.prototype.runReadCallback = function(a2) {
        goog.asserts.assert(this.readCallbacks_ !== null);
        a2 = this.readCallbacks_[a2];
        goog.asserts.assert(a2);
        return a2(this);
      };
      jspb.BinaryReader.prototype.readAny = function(a2) {
        this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a2);
        var b2 = jspb.BinaryConstants.FieldType;
        switch (a2) {
          case b2.DOUBLE:
            return this.readDouble();
          case b2.FLOAT:
            return this.readFloat();
          case b2.INT64:
            return this.readInt64();
          case b2.UINT64:
            return this.readUint64();
          case b2.INT32:
            return this.readInt32();
          case b2.FIXED64:
            return this.readFixed64();
          case b2.FIXED32:
            return this.readFixed32();
          case b2.BOOL:
            return this.readBool();
          case b2.STRING:
            return this.readString();
          case b2.GROUP:
            goog.asserts.fail("Group field type not supported in readAny()");
          case b2.MESSAGE:
            goog.asserts.fail("Message field type not supported in readAny()");
          case b2.BYTES:
            return this.readBytes();
          case b2.UINT32:
            return this.readUint32();
          case b2.ENUM:
            return this.readEnum();
          case b2.SFIXED32:
            return this.readSfixed32();
          case b2.SFIXED64:
            return this.readSfixed64();
          case b2.SINT32:
            return this.readSint32();
          case b2.SINT64:
            return this.readSint64();
          case b2.FHASH64:
            return this.readFixedHash64();
          case b2.VHASH64:
            return this.readVarintHash64();
          default:
            goog.asserts.fail("Invalid field type in readAny()");
        }
        return 0;
      };
      jspb.BinaryReader.prototype.readMessage = function(a2, b2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var c2 = this.decoder_.getEnd(), d2 = this.decoder_.readUnsignedVarint32();
        d2 = this.decoder_.getCursor() + d2;
        this.decoder_.setEnd(d2);
        b2(a2, this);
        this.decoder_.setCursor(d2);
        this.decoder_.setEnd(c2);
      };
      jspb.BinaryReader.prototype.readGroup = function(a2, b2, c2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
        goog.asserts.assert(this.nextField_ == a2);
        c2(b2, this);
        this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
      };
      jspb.BinaryReader.prototype.getFieldDecoder = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32(), b2 = this.decoder_.getCursor(), c2 = b2 + a2;
        a2 = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b2, a2);
        this.decoder_.setCursor(c2);
        return a2;
      };
      jspb.BinaryReader.prototype.readInt32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32();
      };
      jspb.BinaryReader.prototype.readInt32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32String();
      };
      jspb.BinaryReader.prototype.readInt64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      jspb.BinaryReader.prototype.readInt64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64String();
      };
      jspb.BinaryReader.prototype.readUint32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32();
      };
      jspb.BinaryReader.prototype.readUint32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32String();
      };
      jspb.BinaryReader.prototype.readUint64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64();
      };
      jspb.BinaryReader.prototype.readUint64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64String();
      };
      jspb.BinaryReader.prototype.readSint32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint32();
      };
      jspb.BinaryReader.prototype.readSint64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64();
      };
      jspb.BinaryReader.prototype.readSint64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64String();
      };
      jspb.BinaryReader.prototype.readFixed32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readUint32();
      };
      jspb.BinaryReader.prototype.readFixed64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64();
      };
      jspb.BinaryReader.prototype.readFixed64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64String();
      };
      jspb.BinaryReader.prototype.readSfixed32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32();
      };
      jspb.BinaryReader.prototype.readSfixed32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32().toString();
      };
      jspb.BinaryReader.prototype.readSfixed64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64();
      };
      jspb.BinaryReader.prototype.readSfixed64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64String();
      };
      jspb.BinaryReader.prototype.readFloat = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readFloat();
      };
      jspb.BinaryReader.prototype.readDouble = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readDouble();
      };
      jspb.BinaryReader.prototype.readBool = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return !!this.decoder_.readUnsignedVarint32();
      };
      jspb.BinaryReader.prototype.readEnum = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      jspb.BinaryReader.prototype.readString = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readString(a2);
      };
      jspb.BinaryReader.prototype.readBytes = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readBytes(a2);
      };
      jspb.BinaryReader.prototype.readVarintHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readVarintHash64();
      };
      jspb.BinaryReader.prototype.readSintHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarintHash64();
      };
      jspb.BinaryReader.prototype.readSplitVarint64 = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(a2);
      };
      jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(function(b2, c2) {
          return jspb.utils.fromZigzag64(b2, c2, a2);
        });
      };
      jspb.BinaryReader.prototype.readFixedHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readFixedHash64();
      };
      jspb.BinaryReader.prototype.readSplitFixed64 = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readSplitFixed64(a2);
      };
      jspb.BinaryReader.prototype.readPackedField_ = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var b2 = this.decoder_.readUnsignedVarint32();
        b2 = this.decoder_.getCursor() + b2;
        for (var c2 = []; this.decoder_.getCursor() < b2; )
          c2.push(a2.call(this.decoder_));
        return c2;
      };
      jspb.BinaryReader.prototype.readPackedInt32 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32);
      };
      jspb.BinaryReader.prototype.readPackedInt32String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedInt64 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64);
      };
      jspb.BinaryReader.prototype.readPackedInt64String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedUint32 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32);
      };
      jspb.BinaryReader.prototype.readPackedUint32String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedUint64 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64);
      };
      jspb.BinaryReader.prototype.readPackedUint64String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedSint32 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint32);
      };
      jspb.BinaryReader.prototype.readPackedSint64 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64);
      };
      jspb.BinaryReader.prototype.readPackedSint64String = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedFixed32 = function() {
        return this.readPackedField_(this.decoder_.readUint32);
      };
      jspb.BinaryReader.prototype.readPackedFixed64 = function() {
        return this.readPackedField_(this.decoder_.readUint64);
      };
      jspb.BinaryReader.prototype.readPackedFixed64String = function() {
        return this.readPackedField_(this.decoder_.readUint64String);
      };
      jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
        return this.readPackedField_(this.decoder_.readInt32);
      };
      jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
        return this.readPackedField_(this.decoder_.readInt64);
      };
      jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
        return this.readPackedField_(this.decoder_.readInt64String);
      };
      jspb.BinaryReader.prototype.readPackedFloat = function() {
        return this.readPackedField_(this.decoder_.readFloat);
      };
      jspb.BinaryReader.prototype.readPackedDouble = function() {
        return this.readPackedField_(this.decoder_.readDouble);
      };
      jspb.BinaryReader.prototype.readPackedBool = function() {
        return this.readPackedField_(this.decoder_.readBool);
      };
      jspb.BinaryReader.prototype.readPackedEnum = function() {
        return this.readPackedField_(this.decoder_.readEnum);
      };
      jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
        return this.readPackedField_(this.decoder_.readVarintHash64);
      };
      jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
        return this.readPackedField_(this.decoder_.readFixedHash64);
      };
      jspb.BinaryEncoder = function() {
        this.buffer_ = [];
      };
      jspb.BinaryEncoder.prototype.length = function() {
        return this.buffer_.length;
      };
      jspb.BinaryEncoder.prototype.end = function() {
        var a2 = this.buffer_;
        this.buffer_ = [];
        return a2;
      };
      jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a2, b2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(b2 == Math.floor(b2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        for (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32); 0 < b2 || 127 < a2; )
          this.buffer_.push(a2 & 127 | 128), a2 = (a2 >>> 7 | b2 << 25) >>> 0, b2 >>>= 7;
        this.buffer_.push(a2);
      };
      jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a2, b2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(b2 == Math.floor(b2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32);
        this.writeUint32(a2);
        this.writeUint32(b2);
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        for (goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32); 127 < a2; )
          this.buffer_.push(a2 & 127 | 128), a2 >>>= 7;
        this.buffer_.push(a2);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        if (0 <= a2)
          this.writeUnsignedVarint32(a2);
        else {
          for (var b2 = 0; 9 > b2; b2++)
            this.buffer_.push(a2 & 127 | 128), a2 >>= 7;
          this.buffer_.push(1);
        }
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitInt64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.writeUnsignedVarint32((a2 << 1 ^ a2 >> 31) >>> 0);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitZigzag64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a2) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a2));
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a2) {
        var b2 = this;
        jspb.utils.splitHash64(a2);
        jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a3, d2) {
          b2.writeSplitVarint64(a3 >>> 0, d2 >>> 0);
        });
      };
      jspb.BinaryEncoder.prototype.writeUint8 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && 256 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint16 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && 65536 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
        this.buffer_.push(a2 >>> 16 & 255);
        this.buffer_.push(a2 >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitUint64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt8 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(-128 <= a2 && 128 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt16 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(-32768 <= a2 && 32768 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
        this.buffer_.push(a2 >>> 16 & 255);
        this.buffer_.push(a2 >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a2);
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt64String = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(+a2 >= -jspb.BinaryConstants.TWO_TO_63 && +a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFloat = function(a2) {
        goog.asserts.assert(a2 === Infinity || a2 === -Infinity || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT32_MAX && a2 <= jspb.BinaryConstants.FLOAT32_MAX);
        jspb.utils.splitFloat32(a2);
        this.writeUint32(jspb.utils.split64Low);
      };
      jspb.BinaryEncoder.prototype.writeDouble = function(a2) {
        goog.asserts.assert(a2 === Infinity || a2 === -Infinity || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT64_MAX && a2 <= jspb.BinaryConstants.FLOAT64_MAX);
        jspb.utils.splitFloat64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeBool = function(a2) {
        goog.asserts.assert(typeof a2 === "boolean" || typeof a2 === "number");
        this.buffer_.push(a2 ? 1 : 0);
      };
      jspb.BinaryEncoder.prototype.writeEnum = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.writeSignedVarint32(a2);
      };
      jspb.BinaryEncoder.prototype.writeBytes = function(a2) {
        this.buffer_.push.apply(this.buffer_, a2);
      };
      jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a2) {
        jspb.utils.splitHash64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a2) {
        jspb.utils.splitHash64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeString = function(a2) {
        for (var b2 = this.buffer_.length, c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charCodeAt(c2);
          if (128 > d2)
            this.buffer_.push(d2);
          else if (2048 > d2)
            this.buffer_.push(d2 >> 6 | 192), this.buffer_.push(d2 & 63 | 128);
          else if (65536 > d2)
            if (55296 <= d2 && 56319 >= d2 && c2 + 1 < a2.length) {
              var e2 = a2.charCodeAt(c2 + 1);
              56320 <= e2 && 57343 >= e2 && (d2 = 1024 * (d2 - 55296) + e2 - 56320 + 65536, this.buffer_.push(d2 >> 18 | 240), this.buffer_.push(d2 >> 12 & 63 | 128), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128), c2++);
            } else
              this.buffer_.push(d2 >> 12 | 224), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128);
        }
        return this.buffer_.length - b2;
      };
      jspb.arith = {};
      jspb.arith.UInt64 = function(a2, b2) {
        this.lo = a2;
        this.hi = b2;
      };
      jspb.arith.UInt64.prototype.cmp = function(a2) {
        return this.hi < a2.hi || this.hi == a2.hi && this.lo < a2.lo ? -1 : this.hi == a2.hi && this.lo == a2.lo ? 0 : 1;
      };
      jspb.arith.UInt64.prototype.rightShift = function() {
        return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
      };
      jspb.arith.UInt64.prototype.leftShift = function() {
        return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
      };
      jspb.arith.UInt64.prototype.msb = function() {
        return !!(this.hi & 2147483648);
      };
      jspb.arith.UInt64.prototype.lsb = function() {
        return !!(this.lo & 1);
      };
      jspb.arith.UInt64.prototype.zero = function() {
        return this.lo == 0 && this.hi == 0;
      };
      jspb.arith.UInt64.prototype.add = function(a2) {
        return new jspb.arith.UInt64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.prototype.sub = function(a2) {
        return new jspb.arith.UInt64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.mul32x32 = function(a2, b2) {
        var c2 = a2 & 65535;
        a2 >>>= 16;
        var d2 = b2 & 65535, e2 = b2 >>> 16;
        b2 = c2 * d2 + 65536 * (c2 * e2 & 65535) + 65536 * (a2 * d2 & 65535);
        for (c2 = a2 * e2 + (c2 * e2 >>> 16) + (a2 * d2 >>> 16); 4294967296 <= b2; )
          b2 -= 4294967296, c2 += 1;
        return new jspb.arith.UInt64(b2 >>> 0, c2 >>> 0);
      };
      jspb.arith.UInt64.prototype.mul = function(a2) {
        var b2 = jspb.arith.UInt64.mul32x32(this.lo, a2);
        a2 = jspb.arith.UInt64.mul32x32(this.hi, a2);
        a2.hi = a2.lo;
        a2.lo = 0;
        return b2.add(a2);
      };
      jspb.arith.UInt64.prototype.div = function(a2) {
        if (a2 == 0)
          return [];
        var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(this.lo, this.hi);
        a2 = new jspb.arith.UInt64(a2, 0);
        for (var d2 = new jspb.arith.UInt64(1, 0); !a2.msb(); )
          a2 = a2.leftShift(), d2 = d2.leftShift();
        for (; !d2.zero(); )
          0 >= a2.cmp(c2) && (b2 = b2.add(d2), c2 = c2.sub(a2)), a2 = a2.rightShift(), d2 = d2.rightShift();
        return [b2, c2];
      };
      jspb.arith.UInt64.prototype.toString = function() {
        for (var a2 = "", b2 = this; !b2.zero(); ) {
          b2 = b2.div(10);
          var c2 = b2[0];
          a2 = b2[1].lo + a2;
          b2 = c2;
        }
        a2 == "" && (a2 = "0");
        return a2;
      };
      jspb.arith.UInt64.fromString = function(a2) {
        for (var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(0, 0), d2 = 0; d2 < a2.length; d2++) {
          if ("0" > a2[d2] || "9" < a2[d2])
            return null;
          var e2 = parseInt(a2[d2], 10);
          c2.lo = e2;
          b2 = b2.mul(10).add(c2);
        }
        return b2;
      };
      jspb.arith.UInt64.prototype.clone = function() {
        return new jspb.arith.UInt64(this.lo, this.hi);
      };
      jspb.arith.Int64 = function(a2, b2) {
        this.lo = a2;
        this.hi = b2;
      };
      jspb.arith.Int64.prototype.add = function(a2) {
        return new jspb.arith.Int64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.sub = function(a2) {
        return new jspb.arith.Int64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.clone = function() {
        return new jspb.arith.Int64(this.lo, this.hi);
      };
      jspb.arith.Int64.prototype.toString = function() {
        var a2 = (this.hi & 2147483648) != 0, b2 = new jspb.arith.UInt64(this.lo, this.hi);
        a2 && (b2 = new jspb.arith.UInt64(0, 0).sub(b2));
        return (a2 ? "-" : "") + b2.toString();
      };
      jspb.arith.Int64.fromString = function(a2) {
        var b2 = 0 < a2.length && a2[0] == "-";
        b2 && (a2 = a2.substring(1));
        a2 = jspb.arith.UInt64.fromString(a2);
        if (a2 === null)
          return null;
        b2 && (a2 = new jspb.arith.UInt64(0, 0).sub(a2));
        return new jspb.arith.Int64(a2.lo, a2.hi);
      };
      jspb.BinaryWriter = function() {
        this.blocks_ = [];
        this.totalLength_ = 0;
        this.encoder_ = new jspb.BinaryEncoder();
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.appendUint8Array_ = function(a2) {
        var b2 = this.encoder_.end();
        this.blocks_.push(b2);
        this.blocks_.push(a2);
        this.totalLength_ += b2.length + a2.length;
      };
      jspb.BinaryWriter.prototype.beginDelimited_ = function(a2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED);
        a2 = this.encoder_.end();
        this.blocks_.push(a2);
        this.totalLength_ += a2.length;
        a2.push(this.totalLength_);
        return a2;
      };
      jspb.BinaryWriter.prototype.endDelimited_ = function(a2) {
        var b2 = a2.pop();
        b2 = this.totalLength_ + this.encoder_.length() - b2;
        for (goog.asserts.assert(0 <= b2); 127 < b2; )
          a2.push(b2 & 127 | 128), b2 >>>= 7, this.totalLength_++;
        a2.push(b2);
        this.totalLength_++;
      };
      jspb.BinaryWriter.prototype.writeSerializedMessage = function(a2, b2, c2) {
        this.appendUint8Array_(a2.subarray(b2, c2));
      };
      jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a2, b2, c2) {
        a2 != null && b2 != null && c2 != null && this.writeSerializedMessage(a2, b2, c2);
      };
      jspb.BinaryWriter.prototype.reset = function() {
        this.blocks_ = [];
        this.encoder_.end();
        this.totalLength_ = 0;
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.getResultBuffer = function() {
        goog.asserts.assert(this.bookmarks_.length == 0);
        for (var a2 = new Uint8Array(this.totalLength_ + this.encoder_.length()), b2 = this.blocks_, c2 = b2.length, d2 = 0, e2 = 0; e2 < c2; e2++) {
          var f2 = b2[e2];
          a2.set(f2, d2);
          d2 += f2.length;
        }
        b2 = this.encoder_.end();
        a2.set(b2, d2);
        d2 += b2.length;
        goog.asserts.assert(d2 == a2.length);
        this.blocks_ = [a2];
        return a2;
      };
      jspb.BinaryWriter.prototype.getResultBase64String = function(a2) {
        return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a2);
      };
      jspb.BinaryWriter.prototype.beginSubMessage = function(a2) {
        this.bookmarks_.push(this.beginDelimited_(a2));
      };
      jspb.BinaryWriter.prototype.endSubMessage = function() {
        goog.asserts.assert(0 <= this.bookmarks_.length);
        this.endDelimited_(this.bookmarks_.pop());
      };
      jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a2, b2) {
        goog.asserts.assert(1 <= a2 && a2 == Math.floor(a2));
        this.encoder_.writeUnsignedVarint32(8 * a2 + b2);
      };
      jspb.BinaryWriter.prototype.writeAny = function(a2, b2, c2) {
        var d2 = jspb.BinaryConstants.FieldType;
        switch (a2) {
          case d2.DOUBLE:
            this.writeDouble(b2, c2);
            break;
          case d2.FLOAT:
            this.writeFloat(b2, c2);
            break;
          case d2.INT64:
            this.writeInt64(b2, c2);
            break;
          case d2.UINT64:
            this.writeUint64(b2, c2);
            break;
          case d2.INT32:
            this.writeInt32(b2, c2);
            break;
          case d2.FIXED64:
            this.writeFixed64(b2, c2);
            break;
          case d2.FIXED32:
            this.writeFixed32(b2, c2);
            break;
          case d2.BOOL:
            this.writeBool(b2, c2);
            break;
          case d2.STRING:
            this.writeString(b2, c2);
            break;
          case d2.GROUP:
            goog.asserts.fail("Group field type not supported in writeAny()");
            break;
          case d2.MESSAGE:
            goog.asserts.fail("Message field type not supported in writeAny()");
            break;
          case d2.BYTES:
            this.writeBytes(b2, c2);
            break;
          case d2.UINT32:
            this.writeUint32(b2, c2);
            break;
          case d2.ENUM:
            this.writeEnum(b2, c2);
            break;
          case d2.SFIXED32:
            this.writeSfixed32(b2, c2);
            break;
          case d2.SFIXED64:
            this.writeSfixed64(b2, c2);
            break;
          case d2.SINT32:
            this.writeSint32(b2, c2);
            break;
          case d2.SINT64:
            this.writeSint64(b2, c2);
            break;
          case d2.FHASH64:
            this.writeFixedHash64(b2, c2);
            break;
          case d2.VHASH64:
            this.writeVarintHash64(b2, c2);
            break;
          default:
            goog.asserts.fail("Invalid field type in writeAny()");
        }
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeInt32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeInt32String = function(a2, b2) {
        b2 != null && (b2 = parseInt(b2, 10), goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeInt64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeInt64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeUint32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeUint32String = function(a2, b2) {
        b2 != null && (b2 = parseInt(b2, 10), goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeUint64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeUint64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeSint32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeSint64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeSintHash64 = function(a2, b2) {
        b2 != null && this.writeZigzagVarintHash64_(a2, b2);
      };
      jspb.BinaryWriter.prototype.writeSint64String = function(a2, b2) {
        b2 != null && this.writeZigzagVarint64String_(a2, b2);
      };
      jspb.BinaryWriter.prototype.writeFixed32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b2));
      };
      jspb.BinaryWriter.prototype.writeFixed64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b2));
      };
      jspb.BinaryWriter.prototype.writeFixed64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeSfixed32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b2));
      };
      jspb.BinaryWriter.prototype.writeSfixed64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b2));
      };
      jspb.BinaryWriter.prototype.writeSfixed64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeFloat = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b2));
      };
      jspb.BinaryWriter.prototype.writeDouble = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b2));
      };
      jspb.BinaryWriter.prototype.writeBool = function(a2, b2) {
        b2 != null && (goog.asserts.assert(typeof b2 === "boolean" || typeof b2 === "number"), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b2));
      };
      jspb.BinaryWriter.prototype.writeEnum = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeString = function(a2, b2) {
        b2 != null && (a2 = this.beginDelimited_(a2), this.encoder_.writeString(b2), this.endDelimited_(a2));
      };
      jspb.BinaryWriter.prototype.writeBytes = function(a2, b2) {
        b2 != null && (b2 = jspb.utils.byteSourceToUint8Array(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), this.appendUint8Array_(b2));
      };
      jspb.BinaryWriter.prototype.writeMessage = function(a2, b2, c2) {
        b2 != null && (a2 = this.beginDelimited_(a2), c2(b2, this), this.endDelimited_(a2));
      };
      jspb.BinaryWriter.prototype.writeMessageSet = function(a2, b2, c2) {
        b2 != null && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a2), a2 = this.beginDelimited_(3), c2(b2, this), this.endDelimited_(a2), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
      };
      jspb.BinaryWriter.prototype.writeGroup = function(a2, b2, c2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2, this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP));
      };
      jspb.BinaryWriter.prototype.writeFixedHash64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2.length == 8), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeVarintHash64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2.length == 8), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64);
        this.encoder_.writeSplitFixed64(b2, c2);
      };
      jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
        this.encoder_.writeSplitVarint64(b2, c2);
      };
      jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
        var d2 = this.encoder_;
        jspb.utils.toZigzag64(b2, c2, function(a3, b3) {
          d2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
        });
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSignedVarint32_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeInt32String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSignedVarint64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a2, b2, c2, d2) {
        if (b2 != null)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitFixed64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitVarint64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitZigzagVarint64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeInt64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUnsignedVarint32_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUint32String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUnsignedVarint64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUint64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint32_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint64String_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarintHash64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed32(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed32(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFloat(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeDouble(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedBool = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeBool(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeEnum(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedString = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeString(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeBytes(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a2, b2, c2) {
        if (b2 != null)
          for (var d2 = 0; d2 < b2.length; d2++) {
            var e2 = this.beginDelimited_(a2);
            c2(b2[d2], this);
            this.endDelimited_(e2);
          }
      };
      jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a2, b2, c2) {
        if (b2 != null)
          for (var d2 = 0; d2 < b2.length; d2++)
            this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2[d2], this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixedHash64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeVarintHash64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writePackedInt32 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt32String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint32(parseInt(b2[c2], 10));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a2, b2, c2, d2) {
        if (b2 != null) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = 0; e2 < b2.length; e2++)
            this.encoder_.writeSplitFixed64(c2(b2[e2]), d2(b2[e2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = 0; e2 < b2.length; e2++)
            this.encoder_.writeSplitVarint64(c2(b2[e2]), d2(b2[e2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = this.encoder_, f2 = 0; f2 < b2.length; f2++)
            jspb.utils.toZigzag64(c2(b2[f2]), d2(b2[f2]), function(a3, b3) {
              e2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
            });
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++) {
            var d2 = jspb.arith.Int64.fromString(b2[c2]);
            this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
          }
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint32 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint32String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint32(parseInt(b2[c2], 10));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint64String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++) {
            var d2 = jspb.arith.UInt64.fromString(b2[c2]);
            this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
          }
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint32 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint64String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b2[c2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarintHash64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedFixed32 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeUint32(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedFixed64 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeUint64(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedFixed64String = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++) {
            var c2 = jspb.arith.UInt64.fromString(b2[a2]);
            this.encoder_.writeSplitFixed64(c2.lo, c2.hi);
          }
      };
      jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt32(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt64(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt64String(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedFloat = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeFloat(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedDouble = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeDouble(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedBool = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeBool(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedEnum = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeEnum(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeFixedHash64(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeVarintHash64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.Map = function(a2, b2) {
        this.arr_ = a2;
        this.valueCtor_ = b2;
        this.map_ = {};
        this.arrClean = true;
        0 < this.arr_.length && this.loadFromArray_();
      };
      jspb.Map.prototype.loadFromArray_ = function() {
        for (var a2 = 0; a2 < this.arr_.length; a2++) {
          var b2 = this.arr_[a2], c2 = b2[0];
          this.map_[c2.toString()] = new jspb.Map.Entry_(c2, b2[1]);
        }
        this.arrClean = true;
      };
      jspb.Map.prototype.toArray = function() {
        if (this.arrClean) {
          if (this.valueCtor_) {
            var a2 = this.map_, b2;
            for (b2 in a2)
              if (Object.prototype.hasOwnProperty.call(a2, b2)) {
                var c2 = a2[b2].valueWrapper;
                c2 && c2.toArray();
              }
          }
        } else {
          this.arr_.length = 0;
          a2 = this.stringKeys_();
          a2.sort();
          for (b2 = 0; b2 < a2.length; b2++) {
            var d2 = this.map_[a2[b2]];
            (c2 = d2.valueWrapper) && c2.toArray();
            this.arr_.push([d2.key, d2.value]);
          }
          this.arrClean = true;
        }
        return this.arr_;
      };
      jspb.Map.prototype.toObject = function(a2, b2) {
        for (var c2 = this.toArray(), d2 = [], e2 = 0; e2 < c2.length; e2++) {
          var f2 = this.map_[c2[e2][0].toString()];
          this.wrapEntry_(f2);
          var g = f2.valueWrapper;
          g ? (goog.asserts.assert(b2), d2.push([f2.key, b2(a2, g)])) : d2.push([f2.key, f2.value]);
        }
        return d2;
      };
      jspb.Map.fromObject = function(a2, b2, c2) {
        b2 = new jspb.Map([], b2);
        for (var d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2[d2][0], f2 = c2(a2[d2][1]);
          b2.set(e2, f2);
        }
        return b2;
      };
      jspb.Map.ArrayIteratorIterable_ = function(a2) {
        this.idx_ = 0;
        this.arr_ = a2;
      };
      jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
        return this.idx_ < this.arr_.length ? { done: false, value: this.arr_[this.idx_++] } : { done: true, value: void 0 };
      };
      typeof Symbol != "undefined" && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
        return this;
      });
      jspb.Map.prototype.getLength = function() {
        return this.stringKeys_().length;
      };
      jspb.Map.prototype.clear = function() {
        this.map_ = {};
        this.arrClean = false;
      };
      jspb.Map.prototype.del = function(a2) {
        a2 = a2.toString();
        var b2 = this.map_.hasOwnProperty(a2);
        delete this.map_[a2];
        this.arrClean = false;
        return b2;
      };
      jspb.Map.prototype.getEntryList = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = this.map_[b2[c2]];
          a2.push([d2.key, d2.value]);
        }
        return a2;
      };
      jspb.Map.prototype.entries = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = this.map_[b2[c2]];
          a2.push([d2.key, this.wrapEntry_(d2)]);
        }
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      jspb.Map.prototype.keys = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++)
          a2.push(this.map_[b2[c2]].key);
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      jspb.Map.prototype.values = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++)
          a2.push(this.wrapEntry_(this.map_[b2[c2]]));
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      jspb.Map.prototype.forEach = function(a2, b2) {
        var c2 = this.stringKeys_();
        c2.sort();
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = this.map_[c2[d2]];
          a2.call(b2, this.wrapEntry_(e2), e2.key, this);
        }
      };
      jspb.Map.prototype.set = function(a2, b2) {
        var c2 = new jspb.Map.Entry_(a2);
        this.valueCtor_ ? (c2.valueWrapper = b2, c2.value = b2.toArray()) : c2.value = b2;
        this.map_[a2.toString()] = c2;
        this.arrClean = false;
        return this;
      };
      jspb.Map.prototype.wrapEntry_ = function(a2) {
        return this.valueCtor_ ? (a2.valueWrapper || (a2.valueWrapper = new this.valueCtor_(a2.value)), a2.valueWrapper) : a2.value;
      };
      jspb.Map.prototype.get = function(a2) {
        if (a2 = this.map_[a2.toString()])
          return this.wrapEntry_(a2);
      };
      jspb.Map.prototype.has = function(a2) {
        return a2.toString() in this.map_;
      };
      jspb.Map.prototype.serializeBinary = function(a2, b2, c2, d2, e2) {
        var f2 = this.stringKeys_();
        f2.sort();
        for (var g = 0; g < f2.length; g++) {
          var h = this.map_[f2[g]];
          b2.beginSubMessage(a2);
          c2.call(b2, 1, h.key);
          this.valueCtor_ ? d2.call(b2, 2, this.wrapEntry_(h), e2) : d2.call(b2, 2, h.value);
          b2.endSubMessage();
        }
      };
      jspb.Map.deserializeBinary = function(a2, b2, c2, d2, e2, f2, g) {
        for (; b2.nextField() && !b2.isEndGroup(); ) {
          var h = b2.getFieldNumber();
          h == 1 ? f2 = c2.call(b2) : h == 2 && (a2.valueCtor_ ? (goog.asserts.assert(e2), g || (g = new a2.valueCtor_()), d2.call(b2, g, e2)) : g = d2.call(b2));
        }
        goog.asserts.assert(f2 != void 0);
        goog.asserts.assert(g != void 0);
        a2.set(f2, g);
      };
      jspb.Map.prototype.stringKeys_ = function() {
        var a2 = this.map_, b2 = [], c2;
        for (c2 in a2)
          Object.prototype.hasOwnProperty.call(a2, c2) && b2.push(c2);
        return b2;
      };
      jspb.Map.Entry_ = function(a2, b2) {
        this.key = a2;
        this.value = b2;
        this.valueWrapper = void 0;
      };
      jspb.ExtensionFieldInfo = function(a2, b2, c2, d2, e2) {
        this.fieldIndex = a2;
        this.fieldName = b2;
        this.ctor = c2;
        this.toObjectFn = d2;
        this.isRepeated = e2;
      };
      jspb.ExtensionFieldBinaryInfo = function(a2, b2, c2, d2, e2, f2) {
        this.fieldInfo = a2;
        this.binaryReaderFn = b2;
        this.binaryWriterFn = c2;
        this.binaryMessageSerializeFn = d2;
        this.binaryMessageDeserializeFn = e2;
        this.isPacked = f2;
      };
      jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
        return !!this.ctor;
      };
      jspb.Message = function() {
      };
      jspb.Message.GENERATE_TO_OBJECT = true;
      jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
      jspb.Message.GENERATE_TO_STRING = true;
      jspb.Message.ASSUME_LOCAL_ARRAYS = false;
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
      jspb.Message.SUPPORTS_UINT8ARRAY_ = typeof Uint8Array == "function";
      jspb.Message.prototype.getJsPbMessageId = function() {
        return this.messageId_;
      };
      jspb.Message.getIndex_ = function(a2, b2) {
        return b2 + a2.arrayIndexOffset_;
      };
      jspb.Message.hiddenES6Property_ = function() {
      };
      jspb.Message.getFieldNumber_ = function(a2, b2) {
        return b2 - a2.arrayIndexOffset_;
      };
      jspb.Message.initialize = function(a2, b2, c2, d2, e2, f2) {
        a2.wrappers_ = null;
        b2 || (b2 = c2 ? [c2] : []);
        a2.messageId_ = c2 ? String(c2) : void 0;
        a2.arrayIndexOffset_ = c2 === 0 ? -1 : 0;
        a2.array = b2;
        jspb.Message.initPivotAndExtensionObject_(a2, d2);
        a2.convertedPrimitiveFields_ = {};
        jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a2.repeatedFields = e2);
        if (e2)
          for (b2 = 0; b2 < e2.length; b2++)
            c2 = e2[b2], c2 < a2.pivot_ ? (c2 = jspb.Message.getIndex_(a2, c2), a2.array[c2] = a2.array[c2] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[c2] = a2.extensionObject_[c2] || jspb.Message.EMPTY_LIST_SENTINEL_);
        if (f2 && f2.length)
          for (b2 = 0; b2 < f2.length; b2++)
            jspb.Message.computeOneofCase(a2, f2[b2]);
      };
      jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
      jspb.Message.isArray_ = function(a2) {
        return jspb.Message.ASSUME_LOCAL_ARRAYS ? a2 instanceof Array : Array.isArray(a2);
      };
      jspb.Message.isExtensionObject_ = function(a2) {
        return a2 !== null && typeof a2 == "object" && !jspb.Message.isArray_(a2) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array);
      };
      jspb.Message.initPivotAndExtensionObject_ = function(a2, b2) {
        var c2 = a2.array.length, d2 = -1;
        if (c2 && (d2 = c2 - 1, c2 = a2.array[d2], jspb.Message.isExtensionObject_(c2))) {
          a2.pivot_ = jspb.Message.getFieldNumber_(a2, d2);
          a2.extensionObject_ = c2;
          return;
        }
        -1 < b2 ? (a2.pivot_ = Math.max(b2, jspb.Message.getFieldNumber_(a2, d2 + 1)), a2.extensionObject_ = null) : a2.pivot_ = Number.MAX_VALUE;
      };
      jspb.Message.maybeInitEmptyExtensionObject_ = function(a2) {
        var b2 = jspb.Message.getIndex_(a2, a2.pivot_);
        a2.array[b2] || (a2.extensionObject_ = a2.array[b2] = {});
      };
      jspb.Message.toObjectList = function(a2, b2, c2) {
        for (var d2 = [], e2 = 0; e2 < a2.length; e2++)
          d2[e2] = b2.call(a2[e2], c2, a2[e2]);
        return d2;
      };
      jspb.Message.toObjectExtension = function(a2, b2, c2, d2, e2) {
        for (var f2 in c2) {
          var g = c2[f2], h = d2.call(a2, g);
          if (h != null) {
            for (var k in g.fieldName)
              if (g.fieldName.hasOwnProperty(k))
                break;
            b2[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e2) : g.toObjectFn(e2, h) : h;
          }
        }
      };
      jspb.Message.serializeBinaryExtensions = function(a2, b2, c2, d2) {
        for (var e2 in c2) {
          var f2 = c2[e2], g = f2.fieldInfo;
          if (!f2.binaryWriterFn)
            throw Error("Message extension present that was generated without binary serialization support");
          var h = d2.call(a2, g);
          if (h != null)
            if (g.isMessageType())
              if (f2.binaryMessageSerializeFn)
                f2.binaryWriterFn.call(b2, g.fieldIndex, h, f2.binaryMessageSerializeFn);
              else
                throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
            else
              f2.binaryWriterFn.call(b2, g.fieldIndex, h);
        }
      };
      jspb.Message.readBinaryExtension = function(a2, b2, c2, d2, e2) {
        var f2 = c2[b2.getFieldNumber()];
        if (f2) {
          c2 = f2.fieldInfo;
          if (!f2.binaryReaderFn)
            throw Error("Deserializing extension whose generated code does not support binary format");
          if (c2.isMessageType()) {
            var g = new c2.ctor();
            f2.binaryReaderFn.call(b2, g, f2.binaryMessageDeserializeFn);
          } else
            g = f2.binaryReaderFn.call(b2);
          c2.isRepeated && !f2.isPacked ? (b2 = d2.call(a2, c2)) ? b2.push(g) : e2.call(a2, c2, [g]) : e2.call(a2, c2, g);
        } else
          b2.skipField();
      };
      jspb.Message.getField = function(a2, b2) {
        if (b2 < a2.pivot_) {
          b2 = jspb.Message.getIndex_(a2, b2);
          var c2 = a2.array[b2];
          return c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.array[b2] = [] : c2;
        }
        if (a2.extensionObject_)
          return c2 = a2.extensionObject_[b2], c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.extensionObject_[b2] = [] : c2;
      };
      jspb.Message.getRepeatedField = function(a2, b2) {
        return jspb.Message.getField(a2, b2);
      };
      jspb.Message.getOptionalFloatingPointField = function(a2, b2) {
        a2 = jspb.Message.getField(a2, b2);
        return a2 == null ? a2 : +a2;
      };
      jspb.Message.getBooleanField = function(a2, b2) {
        a2 = jspb.Message.getField(a2, b2);
        return a2 == null ? a2 : !!a2;
      };
      jspb.Message.getRepeatedFloatingPointField = function(a2, b2) {
        var c2 = jspb.Message.getRepeatedField(a2, b2);
        a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
        if (!a2.convertedPrimitiveFields_[b2]) {
          for (var d2 = 0; d2 < c2.length; d2++)
            c2[d2] = +c2[d2];
          a2.convertedPrimitiveFields_[b2] = true;
        }
        return c2;
      };
      jspb.Message.getRepeatedBooleanField = function(a2, b2) {
        var c2 = jspb.Message.getRepeatedField(a2, b2);
        a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
        if (!a2.convertedPrimitiveFields_[b2]) {
          for (var d2 = 0; d2 < c2.length; d2++)
            c2[d2] = !!c2[d2];
          a2.convertedPrimitiveFields_[b2] = true;
        }
        return c2;
      };
      jspb.Message.bytesAsB64 = function(a2) {
        if (a2 == null || typeof a2 === "string")
          return a2;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
          return goog.crypt.base64.encodeByteArray(a2);
        goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a2));
        return null;
      };
      jspb.Message.bytesAsU8 = function(a2) {
        if (a2 == null || a2 instanceof Uint8Array)
          return a2;
        if (typeof a2 === "string")
          return goog.crypt.base64.decodeStringToUint8Array(a2);
        goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a2));
        return null;
      };
      jspb.Message.bytesListAsB64 = function(a2) {
        jspb.Message.assertConsistentTypes_(a2);
        return a2.length && typeof a2[0] !== "string" ? goog.array.map(a2, jspb.Message.bytesAsB64) : a2;
      };
      jspb.Message.bytesListAsU8 = function(a2) {
        jspb.Message.assertConsistentTypes_(a2);
        return !a2.length || a2[0] instanceof Uint8Array ? a2 : goog.array.map(a2, jspb.Message.bytesAsU8);
      };
      jspb.Message.assertConsistentTypes_ = function(a2) {
        if (goog.DEBUG && a2 && 1 < a2.length) {
          var b2 = goog.typeOf(a2[0]);
          goog.array.forEach(a2, function(a3) {
            goog.typeOf(a3) != b2 && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a3) + " expected " + b2);
          });
        }
      };
      jspb.Message.getFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getField(a2, b2);
        return a2 == null ? c2 : a2;
      };
      jspb.Message.getBooleanFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getBooleanField(a2, b2);
        return a2 == null ? c2 : a2;
      };
      jspb.Message.getFloatingPointFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getOptionalFloatingPointField(a2, b2);
        return a2 == null ? c2 : a2;
      };
      jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
      jspb.Message.getMapField = function(a2, b2, c2, d2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (b2 in a2.wrappers_)
          return a2.wrappers_[b2];
        var e2 = jspb.Message.getField(a2, b2);
        if (!e2) {
          if (c2)
            return;
          e2 = [];
          jspb.Message.setField(a2, b2, e2);
        }
        return a2.wrappers_[b2] = new jspb.Map(e2, d2);
      };
      jspb.Message.setField = function(a2, b2, c2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = c2 : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[b2] = c2);
        return a2;
      };
      jspb.Message.setProto3IntField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      jspb.Message.setProto3FloatField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      jspb.Message.setProto3BooleanField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, false);
      };
      jspb.Message.setProto3StringField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
      };
      jspb.Message.setProto3BytesField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
      };
      jspb.Message.setProto3EnumField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      jspb.Message.setProto3StringIntField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "0");
      };
      jspb.Message.setFieldIgnoringDefault_ = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        c2 !== d2 ? jspb.Message.setField(a2, b2, c2) : b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a2), delete a2.extensionObject_[b2]);
        return a2;
      };
      jspb.Message.addToRepeatedField = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        b2 = jspb.Message.getRepeatedField(a2, b2);
        d2 != void 0 ? b2.splice(d2, 0, c2) : b2.push(c2);
        return a2;
      };
      jspb.Message.setOneofField = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        (c2 = jspb.Message.computeOneofCase(a2, c2)) && c2 !== b2 && d2 !== void 0 && (a2.wrappers_ && c2 in a2.wrappers_ && (a2.wrappers_[c2] = void 0), jspb.Message.setField(a2, c2, void 0));
        return jspb.Message.setField(a2, b2, d2);
      };
      jspb.Message.computeOneofCase = function(a2, b2) {
        for (var c2, d2, e2 = 0; e2 < b2.length; e2++) {
          var f2 = b2[e2], g = jspb.Message.getField(a2, f2);
          g != null && (c2 = f2, d2 = g, jspb.Message.setField(a2, f2, void 0));
        }
        return c2 ? (jspb.Message.setField(a2, c2, d2), c2) : 0;
      };
      jspb.Message.getWrapperField = function(a2, b2, c2, d2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (!a2.wrappers_[c2]) {
          var e2 = jspb.Message.getField(a2, c2);
          if (d2 || e2)
            a2.wrappers_[c2] = new b2(e2);
        }
        return a2.wrappers_[c2];
      };
      jspb.Message.getRepeatedWrapperField = function(a2, b2, c2) {
        jspb.Message.wrapRepeatedField_(a2, b2, c2);
        b2 = a2.wrappers_[c2];
        b2 == jspb.Message.EMPTY_LIST_SENTINEL_ && (b2 = a2.wrappers_[c2] = []);
        return b2;
      };
      jspb.Message.wrapRepeatedField_ = function(a2, b2, c2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (!a2.wrappers_[c2]) {
          for (var d2 = jspb.Message.getRepeatedField(a2, c2), e2 = [], f2 = 0; f2 < d2.length; f2++)
            e2[f2] = new b2(d2[f2]);
          a2.wrappers_[c2] = e2;
        }
      };
      jspb.Message.setWrapperField = function(a2, b2, c2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        var d2 = c2 ? c2.toArray() : c2;
        a2.wrappers_[b2] = c2;
        return jspb.Message.setField(a2, b2, d2);
      };
      jspb.Message.setOneofWrapperField = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        var e2 = d2 ? d2.toArray() : d2;
        a2.wrappers_[b2] = d2;
        return jspb.Message.setOneofField(a2, b2, c2, e2);
      };
      jspb.Message.setRepeatedWrapperField = function(a2, b2, c2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        c2 = c2 || [];
        for (var d2 = [], e2 = 0; e2 < c2.length; e2++)
          d2[e2] = c2[e2].toArray();
        a2.wrappers_[b2] = c2;
        return jspb.Message.setField(a2, b2, d2);
      };
      jspb.Message.addToRepeatedWrapperField = function(a2, b2, c2, d2, e2) {
        jspb.Message.wrapRepeatedField_(a2, d2, b2);
        var f2 = a2.wrappers_[b2];
        f2 || (f2 = a2.wrappers_[b2] = []);
        c2 = c2 ? c2 : new d2();
        a2 = jspb.Message.getRepeatedField(a2, b2);
        e2 != void 0 ? (f2.splice(e2, 0, c2), a2.splice(e2, 0, c2.toArray())) : (f2.push(c2), a2.push(c2.toArray()));
        return c2;
      };
      jspb.Message.toMap = function(a2, b2, c2, d2) {
        for (var e2 = {}, f2 = 0; f2 < a2.length; f2++)
          e2[b2.call(a2[f2])] = c2 ? c2.call(a2[f2], d2, a2[f2]) : a2[f2];
        return e2;
      };
      jspb.Message.prototype.syncMapFields_ = function() {
        if (this.wrappers_)
          for (var a2 in this.wrappers_) {
            var b2 = this.wrappers_[a2];
            if (Array.isArray(b2))
              for (var c2 = 0; c2 < b2.length; c2++)
                b2[c2] && b2[c2].toArray();
            else
              b2 && b2.toArray();
          }
      };
      jspb.Message.prototype.toArray = function() {
        this.syncMapFields_();
        return this.array;
      };
      jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
        this.syncMapFields_();
        return this.array.toString();
      });
      jspb.Message.prototype.getExtension = function(a2) {
        if (this.extensionObject_) {
          this.wrappers_ || (this.wrappers_ = {});
          var b2 = a2.fieldIndex;
          if (a2.isRepeated) {
            if (a2.isMessageType())
              return this.wrappers_[b2] || (this.wrappers_[b2] = goog.array.map(this.extensionObject_[b2] || [], function(b3) {
                return new a2.ctor(b3);
              })), this.wrappers_[b2];
          } else if (a2.isMessageType())
            return !this.wrappers_[b2] && this.extensionObject_[b2] && (this.wrappers_[b2] = new a2.ctor(this.extensionObject_[b2])), this.wrappers_[b2];
          return this.extensionObject_[b2];
        }
      };
      jspb.Message.prototype.setExtension = function(a2, b2) {
        this.wrappers_ || (this.wrappers_ = {});
        jspb.Message.maybeInitEmptyExtensionObject_(this);
        var c2 = a2.fieldIndex;
        a2.isRepeated ? (b2 = b2 || [], a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = goog.array.map(b2, function(a3) {
          return a3.toArray();
        })) : this.extensionObject_[c2] = b2) : a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = b2 ? b2.toArray() : b2) : this.extensionObject_[c2] = b2;
        return this;
      };
      jspb.Message.difference = function(a2, b2) {
        if (!(a2 instanceof b2.constructor))
          throw Error("Messages have different types.");
        var c2 = a2.toArray();
        b2 = b2.toArray();
        var d2 = [], e2 = 0, f2 = c2.length > b2.length ? c2.length : b2.length;
        a2.getJsPbMessageId() && (d2[0] = a2.getJsPbMessageId(), e2 = 1);
        for (; e2 < f2; e2++)
          jspb.Message.compareFields(c2[e2], b2[e2]) || (d2[e2] = b2[e2]);
        return new a2.constructor(d2);
      };
      jspb.Message.equals = function(a2, b2) {
        return a2 == b2 || !(!a2 || !b2) && a2 instanceof b2.constructor && jspb.Message.compareFields(a2.toArray(), b2.toArray());
      };
      jspb.Message.compareExtensions = function(a2, b2) {
        a2 = a2 || {};
        b2 = b2 || {};
        var c2 = {}, d2;
        for (d2 in a2)
          c2[d2] = 0;
        for (d2 in b2)
          c2[d2] = 0;
        for (d2 in c2)
          if (!jspb.Message.compareFields(a2[d2], b2[d2]))
            return false;
        return true;
      };
      jspb.Message.compareFields = function(a2, b2) {
        if (a2 == b2)
          return true;
        if (!goog.isObject(a2) || !goog.isObject(b2))
          return typeof a2 === "number" && isNaN(a2) || typeof b2 === "number" && isNaN(b2) ? String(a2) == String(b2) : false;
        if (a2.constructor != b2.constructor)
          return false;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2.constructor === Uint8Array) {
          if (a2.length != b2.length)
            return false;
          for (var c2 = 0; c2 < a2.length; c2++)
            if (a2[c2] != b2[c2])
              return false;
          return true;
        }
        if (a2.constructor === Array) {
          var d2 = void 0, e2 = void 0, f2 = Math.max(a2.length, b2.length);
          for (c2 = 0; c2 < f2; c2++) {
            var g = a2[c2], h = b2[c2];
            g && g.constructor == Object && (goog.asserts.assert(d2 === void 0), goog.asserts.assert(c2 === a2.length - 1), d2 = g, g = void 0);
            h && h.constructor == Object && (goog.asserts.assert(e2 === void 0), goog.asserts.assert(c2 === b2.length - 1), e2 = h, h = void 0);
            if (!jspb.Message.compareFields(g, h))
              return false;
          }
          return d2 || e2 ? (d2 = d2 || {}, e2 = e2 || {}, jspb.Message.compareExtensions(d2, e2)) : true;
        }
        if (a2.constructor === Object)
          return jspb.Message.compareExtensions(a2, b2);
        throw Error("Invalid type in JSPB array");
      };
      jspb.Message.prototype.cloneMessage = function() {
        return jspb.Message.cloneMessage(this);
      };
      jspb.Message.prototype.clone = function() {
        return jspb.Message.cloneMessage(this);
      };
      jspb.Message.clone = function(a2) {
        return jspb.Message.cloneMessage(a2);
      };
      jspb.Message.cloneMessage = function(a2) {
        return new a2.constructor(jspb.Message.clone_(a2.toArray()));
      };
      jspb.Message.copyInto = function(a2, b2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        goog.asserts.assertInstanceof(b2, jspb.Message);
        goog.asserts.assert(a2.constructor == b2.constructor, "Copy source and target message should have the same type.");
        a2 = jspb.Message.clone(a2);
        for (var c2 = b2.toArray(), d2 = a2.toArray(), e2 = c2.length = 0; e2 < d2.length; e2++)
          c2[e2] = d2[e2];
        b2.wrappers_ = a2.wrappers_;
        b2.extensionObject_ = a2.extensionObject_;
      };
      jspb.Message.clone_ = function(a2) {
        if (Array.isArray(a2)) {
          for (var b2 = Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
            var d2 = a2[c2];
            d2 != null && (b2[c2] = typeof d2 == "object" ? jspb.Message.clone_(goog.asserts.assert(d2)) : d2);
          }
          return b2;
        }
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
          return new Uint8Array(a2);
        b2 = {};
        for (c2 in a2)
          d2 = a2[c2], d2 != null && (b2[c2] = typeof d2 == "object" ? jspb.Message.clone_(goog.asserts.assert(d2)) : d2);
        return b2;
      };
      jspb.Message.registerMessageType = function(a2, b2) {
        b2.messageId = a2;
      };
      jspb.Message.messageSetExtensions = {};
      jspb.Message.messageSetExtensionsBinary = {};
      jspb.Export = {};
      typeof exports === "object" && (exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = { extend: goog.object.extend }, exports.typeOf = goog.typeOf);
    }
  });

  // node_modules/google-protobuf/google/protobuf/timestamp_pb.js
  var require_timestamp_pb = __commonJS({
    "node_modules/google-protobuf/google/protobuf/timestamp_pb.js"(exports2) {
      var jspb2 = require_google_protobuf();
      var goog2 = jspb2;
      var global2 = function() {
        if (this) {
          return this;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof global2 !== "undefined") {
          return global2;
        }
        if (typeof self !== "undefined") {
          return self;
        }
        return Function("return this")();
      }.call(null);
      goog2.exportSymbol("proto.google.protobuf.Timestamp", null, global2);
      proto.google.protobuf.Timestamp = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.google.protobuf.Timestamp, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.google.protobuf.Timestamp.displayName = "proto.google.protobuf.Timestamp";
      }
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.google.protobuf.Timestamp.prototype.toObject = function(opt_includeInstance) {
          return proto.google.protobuf.Timestamp.toObject(opt_includeInstance, this);
        };
        proto.google.protobuf.Timestamp.toObject = function(includeInstance, msg) {
          var f2, obj = {
            seconds: jspb2.Message.getFieldWithDefault(msg, 1, 0),
            nanos: jspb2.Message.getFieldWithDefault(msg, 2, 0)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.google.protobuf.Timestamp.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.google.protobuf.Timestamp();
        return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(msg, reader);
      };
      proto.google.protobuf.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readInt64();
              msg.setSeconds(value);
              break;
            case 2:
              var value = reader.readInt32();
              msg.setNanos(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.google.protobuf.Timestamp.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.google.protobuf.Timestamp.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.google.protobuf.Timestamp.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getSeconds();
        if (f2 !== 0) {
          writer.writeInt64(1, f2);
        }
        f2 = message.getNanos();
        if (f2 !== 0) {
          writer.writeInt32(2, f2);
        }
      };
      proto.google.protobuf.Timestamp.prototype.getSeconds = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, 0);
      };
      proto.google.protobuf.Timestamp.prototype.setSeconds = function(value) {
        return jspb2.Message.setProto3IntField(this, 1, value);
      };
      proto.google.protobuf.Timestamp.prototype.getNanos = function() {
        return jspb2.Message.getFieldWithDefault(this, 2, 0);
      };
      proto.google.protobuf.Timestamp.prototype.setNanos = function(value) {
        return jspb2.Message.setProto3IntField(this, 2, value);
      };
      goog2.object.extend(exports2, proto.google.protobuf);
      proto.google.protobuf.Timestamp.prototype.toDate = function() {
        var seconds = this.getSeconds();
        var nanos = this.getNanos();
        return new Date(seconds * 1e3 + nanos / 1e6);
      };
      proto.google.protobuf.Timestamp.prototype.fromDate = function(value) {
        this.setSeconds(Math.floor(value.getTime() / 1e3));
        this.setNanos(value.getMilliseconds() * 1e6);
      };
      proto.google.protobuf.Timestamp.fromDate = function(value) {
        var timestamp = new proto.google.protobuf.Timestamp();
        timestamp.fromDate(value);
        return timestamp;
      };
    }
  });

  // gen/proto/shop_pb.js
  var require_shop_pb = __commonJS({
    "gen/proto/shop_pb.js"(exports2) {
      var jspb2 = require_google_protobuf();
      var goog2 = jspb2;
      var global2 = Function("return this")();
      var google_protobuf_timestamp_pb = require_timestamp_pb();
      goog2.object.extend(proto, google_protobuf_timestamp_pb);
      goog2.exportSymbol("proto.shop.CreateOrderRequest", null, global2);
      goog2.exportSymbol("proto.shop.CreateOrderResponse", null, global2);
      goog2.exportSymbol("proto.shop.ListOrderRequest", null, global2);
      goog2.exportSymbol("proto.shop.ListOrderResponse", null, global2);
      goog2.exportSymbol("proto.shop.Order", null, global2);
      goog2.exportSymbol("proto.shop.Order.PaymentMethod", null, global2);
      proto.shop.Order = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.Order, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.Order.displayName = "proto.shop.Order";
      }
      proto.shop.CreateOrderRequest = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.CreateOrderRequest, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.CreateOrderRequest.displayName = "proto.shop.CreateOrderRequest";
      }
      proto.shop.CreateOrderResponse = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.CreateOrderResponse, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.CreateOrderResponse.displayName = "proto.shop.CreateOrderResponse";
      }
      proto.shop.ListOrderRequest = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.ListOrderRequest, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.ListOrderRequest.displayName = "proto.shop.ListOrderRequest";
      }
      proto.shop.ListOrderResponse = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, proto.shop.ListOrderResponse.repeatedFields_, null);
      };
      goog2.inherits(proto.shop.ListOrderResponse, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.ListOrderResponse.displayName = "proto.shop.ListOrderResponse";
      }
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.Order.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.Order.toObject(opt_includeInstance, this);
        };
        proto.shop.Order.toObject = function(includeInstance, msg) {
          var f2, obj = {
            productId: jspb2.Message.getFieldWithDefault(msg, 1, ""),
            price: jspb2.Message.getFieldWithDefault(msg, 2, 0),
            paymentMethod: jspb2.Message.getFieldWithDefault(msg, 3, 0),
            by: jspb2.Message.getFieldWithDefault(msg, 4, ""),
            at: (f2 = msg.getAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f2)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.Order.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.Order();
        return proto.shop.Order.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.Order.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readString();
              msg.setProductId(value);
              break;
            case 2:
              var value = reader.readInt32();
              msg.setPrice(value);
              break;
            case 3:
              var value = reader.readEnum();
              msg.setPaymentMethod(value);
              break;
            case 4:
              var value = reader.readString();
              msg.setBy(value);
              break;
            case 15:
              var value = new google_protobuf_timestamp_pb.Timestamp();
              reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
              msg.setAt(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.Order.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.Order.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.Order.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getProductId();
        if (f2.length > 0) {
          writer.writeString(1, f2);
        }
        f2 = message.getPrice();
        if (f2 !== 0) {
          writer.writeInt32(2, f2);
        }
        f2 = message.getPaymentMethod();
        if (f2 !== 0) {
          writer.writeEnum(3, f2);
        }
        f2 = message.getBy();
        if (f2.length > 0) {
          writer.writeString(4, f2);
        }
        f2 = message.getAt();
        if (f2 != null) {
          writer.writeMessage(15, f2, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
        }
      };
      proto.shop.Order.PaymentMethod = {
        UNKNOWN: 0,
        CACHE: 1,
        CREDIT_CARD: 2,
        QR_CODE: 3
      };
      proto.shop.Order.prototype.getProductId = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, "");
      };
      proto.shop.Order.prototype.setProductId = function(value) {
        return jspb2.Message.setProto3StringField(this, 1, value);
      };
      proto.shop.Order.prototype.getPrice = function() {
        return jspb2.Message.getFieldWithDefault(this, 2, 0);
      };
      proto.shop.Order.prototype.setPrice = function(value) {
        return jspb2.Message.setProto3IntField(this, 2, value);
      };
      proto.shop.Order.prototype.getPaymentMethod = function() {
        return jspb2.Message.getFieldWithDefault(this, 3, 0);
      };
      proto.shop.Order.prototype.setPaymentMethod = function(value) {
        return jspb2.Message.setProto3EnumField(this, 3, value);
      };
      proto.shop.Order.prototype.getBy = function() {
        return jspb2.Message.getFieldWithDefault(this, 4, "");
      };
      proto.shop.Order.prototype.setBy = function(value) {
        return jspb2.Message.setProto3StringField(this, 4, value);
      };
      proto.shop.Order.prototype.getAt = function() {
        return jspb2.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15);
      };
      proto.shop.Order.prototype.setAt = function(value) {
        return jspb2.Message.setWrapperField(this, 15, value);
      };
      proto.shop.Order.prototype.clearAt = function() {
        return this.setAt(void 0);
      };
      proto.shop.Order.prototype.hasAt = function() {
        return jspb2.Message.getField(this, 15) != null;
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.CreateOrderRequest.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.CreateOrderRequest.toObject(opt_includeInstance, this);
        };
        proto.shop.CreateOrderRequest.toObject = function(includeInstance, msg) {
          var f2, obj = {
            productId: jspb2.Message.getFieldWithDefault(msg, 1, ""),
            paymentMethod: jspb2.Message.getFieldWithDefault(msg, 2, 0)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.CreateOrderRequest.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.CreateOrderRequest();
        return proto.shop.CreateOrderRequest.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.CreateOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readString();
              msg.setProductId(value);
              break;
            case 2:
              var value = reader.readEnum();
              msg.setPaymentMethod(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.CreateOrderRequest.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.CreateOrderRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.CreateOrderRequest.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getProductId();
        if (f2.length > 0) {
          writer.writeString(1, f2);
        }
        f2 = message.getPaymentMethod();
        if (f2 !== 0) {
          writer.writeEnum(2, f2);
        }
      };
      proto.shop.CreateOrderRequest.prototype.getProductId = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, "");
      };
      proto.shop.CreateOrderRequest.prototype.setProductId = function(value) {
        return jspb2.Message.setProto3StringField(this, 1, value);
      };
      proto.shop.CreateOrderRequest.prototype.getPaymentMethod = function() {
        return jspb2.Message.getFieldWithDefault(this, 2, 0);
      };
      proto.shop.CreateOrderRequest.prototype.setPaymentMethod = function(value) {
        return jspb2.Message.setProto3EnumField(this, 2, value);
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.CreateOrderResponse.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.CreateOrderResponse.toObject(opt_includeInstance, this);
        };
        proto.shop.CreateOrderResponse.toObject = function(includeInstance, msg) {
          var f2, obj = {
            order: (f2 = msg.getOrder()) && proto.shop.Order.toObject(includeInstance, f2)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.CreateOrderResponse.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.CreateOrderResponse();
        return proto.shop.CreateOrderResponse.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.CreateOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = new proto.shop.Order();
              reader.readMessage(value, proto.shop.Order.deserializeBinaryFromReader);
              msg.setOrder(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.CreateOrderResponse.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.CreateOrderResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.CreateOrderResponse.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getOrder();
        if (f2 != null) {
          writer.writeMessage(1, f2, proto.shop.Order.serializeBinaryToWriter);
        }
      };
      proto.shop.CreateOrderResponse.prototype.getOrder = function() {
        return jspb2.Message.getWrapperField(this, proto.shop.Order, 1);
      };
      proto.shop.CreateOrderResponse.prototype.setOrder = function(value) {
        return jspb2.Message.setWrapperField(this, 1, value);
      };
      proto.shop.CreateOrderResponse.prototype.clearOrder = function() {
        return this.setOrder(void 0);
      };
      proto.shop.CreateOrderResponse.prototype.hasOrder = function() {
        return jspb2.Message.getField(this, 1) != null;
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.ListOrderRequest.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.ListOrderRequest.toObject(opt_includeInstance, this);
        };
        proto.shop.ListOrderRequest.toObject = function(includeInstance, msg) {
          var f2, obj = {
            userName: jspb2.Message.getFieldWithDefault(msg, 1, "")
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.ListOrderRequest.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.ListOrderRequest();
        return proto.shop.ListOrderRequest.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.ListOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readString();
              msg.setUserName(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.ListOrderRequest.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.ListOrderRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.ListOrderRequest.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getUserName();
        if (f2.length > 0) {
          writer.writeString(1, f2);
        }
      };
      proto.shop.ListOrderRequest.prototype.getUserName = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, "");
      };
      proto.shop.ListOrderRequest.prototype.setUserName = function(value) {
        return jspb2.Message.setProto3StringField(this, 1, value);
      };
      proto.shop.ListOrderResponse.repeatedFields_ = [1];
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.ListOrderResponse.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.ListOrderResponse.toObject(opt_includeInstance, this);
        };
        proto.shop.ListOrderResponse.toObject = function(includeInstance, msg) {
          var f2, obj = {
            ordersList: jspb2.Message.toObjectList(msg.getOrdersList(), proto.shop.Order.toObject, includeInstance)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.ListOrderResponse.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.ListOrderResponse();
        return proto.shop.ListOrderResponse.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.ListOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = new proto.shop.Order();
              reader.readMessage(value, proto.shop.Order.deserializeBinaryFromReader);
              msg.addOrders(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.ListOrderResponse.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.ListOrderResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.ListOrderResponse.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getOrdersList();
        if (f2.length > 0) {
          writer.writeRepeatedMessage(1, f2, proto.shop.Order.serializeBinaryToWriter);
        }
      };
      proto.shop.ListOrderResponse.prototype.getOrdersList = function() {
        return jspb2.Message.getRepeatedWrapperField(this, proto.shop.Order, 1);
      };
      proto.shop.ListOrderResponse.prototype.setOrdersList = function(value) {
        return jspb2.Message.setRepeatedWrapperField(this, 1, value);
      };
      proto.shop.ListOrderResponse.prototype.addOrders = function(opt_value, opt_index) {
        return jspb2.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.shop.Order, opt_index);
      };
      proto.shop.ListOrderResponse.prototype.clearOrdersList = function() {
        return this.setOrdersList([]);
      };
      goog2.object.extend(exports2, proto.shop);
    }
  });

  // ../ts-protoc-gen/node_modules/google-protobuf/google-protobuf.js
  var require_google_protobuf2 = __commonJS({
    "../ts-protoc-gen/node_modules/google-protobuf/google-protobuf.js"(exports, module) {
      var $jscomp = $jscomp || {};
      $jscomp.scope = {};
      $jscomp.findInternal = function(a2, b2, c2) {
        a2 instanceof String && (a2 = String(a2));
        for (var d2 = a2.length, e2 = 0; e2 < d2; e2++) {
          var f2 = a2[e2];
          if (b2.call(c2, f2, e2, a2))
            return { i: e2, v: f2 };
        }
        return { i: -1, v: void 0 };
      };
      $jscomp.ASSUME_ES5 = false;
      $jscomp.ASSUME_NO_NATIVE_MAP = false;
      $jscomp.ASSUME_NO_NATIVE_SET = false;
      $jscomp.SIMPLE_FROUND_POLYFILL = false;
      $jscomp.defineProperty = $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function(a2, b2, c2) {
        a2 != Array.prototype && a2 != Object.prototype && (a2[b2] = c2.value);
      };
      $jscomp.getGlobal = function(a2) {
        return typeof window != "undefined" && window === a2 ? a2 : typeof global != "undefined" && global != null ? global : a2;
      };
      $jscomp.global = $jscomp.getGlobal(exports);
      $jscomp.polyfill = function(a2, b2, c2, d2) {
        if (b2) {
          c2 = $jscomp.global;
          a2 = a2.split(".");
          for (d2 = 0; d2 < a2.length - 1; d2++) {
            var e2 = a2[d2];
            e2 in c2 || (c2[e2] = {});
            c2 = c2[e2];
          }
          a2 = a2[a2.length - 1];
          d2 = c2[a2];
          b2 = b2(d2);
          b2 != d2 && b2 != null && $jscomp.defineProperty(c2, a2, { configurable: true, writable: true, value: b2 });
        }
      };
      $jscomp.polyfill("Array.prototype.findIndex", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          return $jscomp.findInternal(this, a3, c2).i;
        };
      }, "es6", "es3");
      $jscomp.checkStringArgs = function(a2, b2, c2) {
        if (a2 == null)
          throw new TypeError("The 'this' value for String.prototype." + c2 + " must not be null or undefined");
        if (b2 instanceof RegExp)
          throw new TypeError("First argument to String.prototype." + c2 + " must not be a regular expression");
        return a2 + "";
      };
      $jscomp.polyfill("String.prototype.endsWith", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          var b2 = $jscomp.checkStringArgs(this, a3, "endsWith");
          a3 += "";
          c2 === void 0 && (c2 = b2.length);
          c2 = Math.max(0, Math.min(c2 | 0, b2.length));
          for (var e2 = a3.length; 0 < e2 && 0 < c2; )
            if (b2[--c2] != a3[--e2])
              return false;
          return 0 >= e2;
        };
      }, "es6", "es3");
      $jscomp.polyfill("Array.prototype.find", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          return $jscomp.findInternal(this, a3, c2).v;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.startsWith", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          var b2 = $jscomp.checkStringArgs(this, a3, "startsWith");
          a3 += "";
          var e2 = b2.length, f2 = a3.length;
          c2 = Math.max(0, Math.min(c2 | 0, b2.length));
          for (var g = 0; g < f2 && c2 < e2; )
            if (b2[c2++] != a3[g++])
              return false;
          return g >= f2;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.repeat", function(a2) {
        return a2 ? a2 : function(a3) {
          var b2 = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > a3 || 1342177279 < a3)
            throw new RangeError("Invalid count value");
          a3 |= 0;
          for (var d2 = ""; a3; )
            if (a3 & 1 && (d2 += b2), a3 >>>= 1)
              b2 += b2;
          return d2;
        };
      }, "es6", "es3");
      var COMPILED = true;
      var goog = goog || {};
      goog.global = exports || self;
      goog.isDef = function(a2) {
        return a2 !== void 0;
      };
      goog.isString = function(a2) {
        return typeof a2 == "string";
      };
      goog.isBoolean = function(a2) {
        return typeof a2 == "boolean";
      };
      goog.isNumber = function(a2) {
        return typeof a2 == "number";
      };
      goog.exportPath_ = function(a2, b2, c2) {
        a2 = a2.split(".");
        c2 = c2 || goog.global;
        a2[0] in c2 || typeof c2.execScript == "undefined" || c2.execScript("var " + a2[0]);
        for (var d2; a2.length && (d2 = a2.shift()); )
          !a2.length && goog.isDef(b2) ? c2[d2] = b2 : c2 = c2[d2] && c2[d2] !== Object.prototype[d2] ? c2[d2] : c2[d2] = {};
      };
      goog.define = function(a2, b2) {
        if (!COMPILED) {
          var c2 = goog.global.CLOSURE_UNCOMPILED_DEFINES, d2 = goog.global.CLOSURE_DEFINES;
          c2 && c2.nodeType === void 0 && Object.prototype.hasOwnProperty.call(c2, a2) ? b2 = c2[a2] : d2 && d2.nodeType === void 0 && Object.prototype.hasOwnProperty.call(d2, a2) && (b2 = d2[a2]);
        }
        return b2;
      };
      goog.FEATURESET_YEAR = 2012;
      goog.DEBUG = true;
      goog.LOCALE = "en";
      goog.TRUSTED_SITE = true;
      goog.STRICT_MODE_COMPATIBLE = false;
      goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
      goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
      goog.provide = function(a2) {
        if (goog.isInModuleLoader_())
          throw Error("goog.provide cannot be used within a module.");
        if (!COMPILED && goog.isProvided_(a2))
          throw Error('Namespace "' + a2 + '" already declared.');
        goog.constructNamespace_(a2);
      };
      goog.constructNamespace_ = function(a2, b2) {
        if (!COMPILED) {
          delete goog.implicitNamespaces_[a2];
          for (var c2 = a2; (c2 = c2.substring(0, c2.lastIndexOf("."))) && !goog.getObjectByName(c2); )
            goog.implicitNamespaces_[c2] = true;
        }
        goog.exportPath_(a2, b2);
      };
      goog.getScriptNonce = function(a2) {
        if (a2 && a2 != goog.global)
          return goog.getScriptNonce_(a2.document);
        goog.cspNonce_ === null && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
        return goog.cspNonce_;
      };
      goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
      goog.cspNonce_ = null;
      goog.getScriptNonce_ = function(a2) {
        return (a2 = a2.querySelector && a2.querySelector("script[nonce]")) && (a2 = a2.nonce || a2.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a2) ? a2 : "";
      };
      goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
      goog.module = function(a2) {
        if (!goog.isString(a2) || !a2 || a2.search(goog.VALID_MODULE_RE_) == -1)
          throw Error("Invalid module identifier");
        if (!goog.isInGoogModuleLoader_())
          throw Error("Module " + a2 + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (goog.moduleLoaderState_.moduleName)
          throw Error("goog.module may only be called once per module.");
        goog.moduleLoaderState_.moduleName = a2;
        if (!COMPILED) {
          if (goog.isProvided_(a2))
            throw Error('Namespace "' + a2 + '" already declared.');
          delete goog.implicitNamespaces_[a2];
        }
      };
      goog.module.get = function(a2) {
        return goog.module.getInternal_(a2);
      };
      goog.module.getInternal_ = function(a2) {
        if (!COMPILED) {
          if (a2 in goog.loadedModules_)
            return goog.loadedModules_[a2].exports;
          if (!goog.implicitNamespaces_[a2])
            return a2 = goog.getObjectByName(a2), a2 != null ? a2 : null;
        }
        return null;
      };
      goog.ModuleType = { ES6: "es6", GOOG: "goog" };
      goog.moduleLoaderState_ = null;
      goog.isInModuleLoader_ = function() {
        return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
      };
      goog.isInGoogModuleLoader_ = function() {
        return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
      };
      goog.isInEs6ModuleLoader_ = function() {
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
          return true;
        var a2 = goog.global.$jscomp;
        return a2 ? typeof a2.getCurrentModulePath != "function" ? false : !!a2.getCurrentModulePath() : false;
      };
      goog.module.declareLegacyNamespace = function() {
        if (!COMPILED && !goog.isInGoogModuleLoader_())
          throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
        if (!COMPILED && !goog.moduleLoaderState_.moduleName)
          throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
        goog.moduleLoaderState_.declareLegacyNamespace = true;
      };
      goog.declareModuleId = function(a2) {
        if (!COMPILED) {
          if (!goog.isInEs6ModuleLoader_())
            throw Error("goog.declareModuleId may only be called from within an ES6 module");
          if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
            throw Error("goog.declareModuleId may only be called once per module.");
          if (a2 in goog.loadedModules_)
            throw Error('Module with namespace "' + a2 + '" already exists.');
        }
        if (goog.moduleLoaderState_)
          goog.moduleLoaderState_.moduleName = a2;
        else {
          var b2 = goog.global.$jscomp;
          if (!b2 || typeof b2.getCurrentModulePath != "function")
            throw Error('Module with namespace "' + a2 + '" has been loaded incorrectly.');
          b2 = b2.require(b2.getCurrentModulePath());
          goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: a2 };
        }
      };
      goog.setTestOnly = function(a2) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
          throw a2 = a2 || "", Error("Importing test-only code into non-debug environment" + (a2 ? ": " + a2 : "."));
      };
      goog.forwardDeclare = function(a2) {
      };
      COMPILED || (goog.isProvided_ = function(a2) {
        return a2 in goog.loadedModules_ || !goog.implicitNamespaces_[a2] && goog.isDefAndNotNull(goog.getObjectByName(a2));
      }, goog.implicitNamespaces_ = { "goog.module": true });
      goog.getObjectByName = function(a2, b2) {
        a2 = a2.split(".");
        b2 = b2 || goog.global;
        for (var c2 = 0; c2 < a2.length; c2++)
          if (b2 = b2[a2[c2]], !goog.isDefAndNotNull(b2))
            return null;
        return b2;
      };
      goog.globalize = function(a2, b2) {
        b2 = b2 || goog.global;
        for (var c2 in a2)
          b2[c2] = a2[c2];
      };
      goog.addDependency = function(a2, b2, c2, d2) {
        !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a2, b2, c2, d2);
      };
      goog.ENABLE_DEBUG_LOADER = true;
      goog.logToConsole_ = function(a2) {
        goog.global.console && goog.global.console.error(a2);
      };
      goog.require = function(a2) {
        if (!COMPILED) {
          goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a2);
          if (goog.isProvided_(a2)) {
            if (goog.isInModuleLoader_())
              return goog.module.getInternal_(a2);
          } else if (goog.ENABLE_DEBUG_LOADER) {
            var b2 = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
              goog.debugLoader_.load_(a2);
            } finally {
              goog.moduleLoaderState_ = b2;
            }
          }
          return null;
        }
      };
      goog.requireType = function(a2) {
        return {};
      };
      goog.basePath = "";
      goog.nullFunction = function() {
      };
      goog.abstractMethod = function() {
        throw Error("unimplemented abstract method");
      };
      goog.addSingletonGetter = function(a2) {
        a2.instance_ = void 0;
        a2.getInstance = function() {
          if (a2.instance_)
            return a2.instance_;
          goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a2);
          return a2.instance_ = new a2();
        };
      };
      goog.instantiatedSingletons_ = [];
      goog.LOAD_MODULE_USING_EVAL = true;
      goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
      goog.loadedModules_ = {};
      goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
      goog.TRANSPILE = "detect";
      goog.ASSUME_ES_MODULES_TRANSPILED = false;
      goog.TRANSPILE_TO_LANGUAGE = "";
      goog.TRANSPILER = "transpile.js";
      goog.hasBadLetScoping = null;
      goog.useSafari10Workaround = function() {
        if (goog.hasBadLetScoping == null) {
          try {
            var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
          } catch (b2) {
            a = false;
          }
          goog.hasBadLetScoping = a;
        }
        return goog.hasBadLetScoping;
      };
      goog.workaroundSafari10EvalBug = function(a2) {
        return "(function(){" + a2 + "\n;})();\n";
      };
      goog.loadModule = function(a2) {
        var b2 = goog.moduleLoaderState_;
        try {
          goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
          if (goog.isFunction(a2))
            var c2 = a2.call(void 0, {});
          else if (goog.isString(a2))
            goog.useSafari10Workaround() && (a2 = goog.workaroundSafari10EvalBug(a2)), c2 = goog.loadModuleFromSource_.call(void 0, a2);
          else
            throw Error("Invalid module definition");
          var d2 = goog.moduleLoaderState_.moduleName;
          if (goog.isString(d2) && d2)
            goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d2, c2) : goog.SEAL_MODULE_EXPORTS && Object.seal && typeof c2 == "object" && c2 != null && Object.seal(c2), goog.loadedModules_[d2] = { exports: c2, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
          else
            throw Error('Invalid module name "' + d2 + '"');
        } finally {
          goog.moduleLoaderState_ = b2;
        }
      };
      goog.loadModuleFromSource_ = function(a) {
        eval(a);
        return {};
      };
      goog.normalizePath_ = function(a2) {
        a2 = a2.split("/");
        for (var b2 = 0; b2 < a2.length; )
          a2[b2] == "." ? a2.splice(b2, 1) : b2 && a2[b2] == ".." && a2[b2 - 1] && a2[b2 - 1] != ".." ? a2.splice(--b2, 2) : b2++;
        return a2.join("/");
      };
      goog.loadFileSync_ = function(a2) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC)
          return goog.global.CLOSURE_LOAD_FILE_SYNC(a2);
        try {
          var b2 = new goog.global.XMLHttpRequest();
          b2.open("get", a2, false);
          b2.send();
          return b2.status == 0 || b2.status == 200 ? b2.responseText : null;
        } catch (c2) {
          return null;
        }
      };
      goog.transpile_ = function(a2, b2, c2) {
        var d2 = goog.global.$jscomp;
        d2 || (goog.global.$jscomp = d2 = {});
        var e2 = d2.transpile;
        if (!e2) {
          var f2 = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f2);
          if (g) {
            (function() {
              (0, eval)(g + "\n//# sourceURL=" + f2);
            }).call(goog.global);
            if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
              throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
            goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
            d2 = goog.global.$jscomp;
            e2 = d2.transpile;
          }
        }
        e2 || (e2 = d2.transpile = function(a3, b3) {
          goog.logToConsole_(b3 + " requires transpilation but no transpiler was found.");
          return a3;
        });
        return e2(a2, b2, c2);
      };
      goog.typeOf = function(a2) {
        var b2 = typeof a2;
        if (b2 == "object")
          if (a2) {
            if (a2 instanceof Array)
              return "array";
            if (a2 instanceof Object)
              return b2;
            var c2 = Object.prototype.toString.call(a2);
            if (c2 == "[object Window]")
              return "object";
            if (c2 == "[object Array]" || typeof a2.length == "number" && typeof a2.splice != "undefined" && typeof a2.propertyIsEnumerable != "undefined" && !a2.propertyIsEnumerable("splice"))
              return "array";
            if (c2 == "[object Function]" || typeof a2.call != "undefined" && typeof a2.propertyIsEnumerable != "undefined" && !a2.propertyIsEnumerable("call"))
              return "function";
          } else
            return "null";
        else if (b2 == "function" && typeof a2.call == "undefined")
          return "object";
        return b2;
      };
      goog.isNull = function(a2) {
        return a2 === null;
      };
      goog.isDefAndNotNull = function(a2) {
        return a2 != null;
      };
      goog.isArray = function(a2) {
        return goog.typeOf(a2) == "array";
      };
      goog.isArrayLike = function(a2) {
        var b2 = goog.typeOf(a2);
        return b2 == "array" || b2 == "object" && typeof a2.length == "number";
      };
      goog.isDateLike = function(a2) {
        return goog.isObject(a2) && typeof a2.getFullYear == "function";
      };
      goog.isFunction = function(a2) {
        return goog.typeOf(a2) == "function";
      };
      goog.isObject = function(a2) {
        var b2 = typeof a2;
        return b2 == "object" && a2 != null || b2 == "function";
      };
      goog.getUid = function(a2) {
        return a2[goog.UID_PROPERTY_] || (a2[goog.UID_PROPERTY_] = ++goog.uidCounter_);
      };
      goog.hasUid = function(a2) {
        return !!a2[goog.UID_PROPERTY_];
      };
      goog.removeUid = function(a2) {
        a2 !== null && "removeAttribute" in a2 && a2.removeAttribute(goog.UID_PROPERTY_);
        try {
          delete a2[goog.UID_PROPERTY_];
        } catch (b2) {
        }
      };
      goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
      goog.uidCounter_ = 0;
      goog.getHashCode = goog.getUid;
      goog.removeHashCode = goog.removeUid;
      goog.cloneObject = function(a2) {
        var b2 = goog.typeOf(a2);
        if (b2 == "object" || b2 == "array") {
          if (typeof a2.clone === "function")
            return a2.clone();
          b2 = b2 == "array" ? [] : {};
          for (var c2 in a2)
            b2[c2] = goog.cloneObject(a2[c2]);
          return b2;
        }
        return a2;
      };
      goog.bindNative_ = function(a2, b2, c2) {
        return a2.call.apply(a2.bind, arguments);
      };
      goog.bindJs_ = function(a2, b2, c2) {
        if (!a2)
          throw Error();
        if (2 < arguments.length) {
          var d2 = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c3 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c3, d2);
            return a2.apply(b2, c3);
          };
        }
        return function() {
          return a2.apply(b2, arguments);
        };
      };
      goog.bind = function(a2, b2, c2) {
        Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
        return goog.bind.apply(null, arguments);
      };
      goog.partial = function(a2, b2) {
        var c2 = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b3 = c2.slice();
          b3.push.apply(b3, arguments);
          return a2.apply(this, b3);
        };
      };
      goog.mixin = function(a2, b2) {
        for (var c2 in b2)
          a2[c2] = b2[c2];
      };
      goog.now = goog.TRUSTED_SITE && Date.now || function() {
        return +new Date();
      };
      goog.globalEval = function(a2) {
        if (goog.global.execScript)
          goog.global.execScript(a2, "JavaScript");
        else if (goog.global.eval) {
          if (goog.evalWorksForGlobals_ == null) {
            try {
              goog.global.eval("var _evalTest_ = 1;");
            } catch (d2) {
            }
            if (typeof goog.global._evalTest_ != "undefined") {
              try {
                delete goog.global._evalTest_;
              } catch (d2) {
              }
              goog.evalWorksForGlobals_ = true;
            } else
              goog.evalWorksForGlobals_ = false;
          }
          if (goog.evalWorksForGlobals_)
            goog.global.eval(a2);
          else {
            var b2 = goog.global.document, c2 = b2.createElement("SCRIPT");
            c2.type = "text/javascript";
            c2.defer = false;
            c2.appendChild(b2.createTextNode(a2));
            b2.head.appendChild(c2);
            b2.head.removeChild(c2);
          }
        } else
          throw Error("goog.globalEval not available");
      };
      goog.evalWorksForGlobals_ = null;
      goog.getCssName = function(a2, b2) {
        if (String(a2).charAt(0) == ".")
          throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a2);
        var c2 = function(a3) {
          return goog.cssNameMapping_[a3] || a3;
        }, d2 = function(a3) {
          a3 = a3.split("-");
          for (var b3 = [], d3 = 0; d3 < a3.length; d3++)
            b3.push(c2(a3[d3]));
          return b3.join("-");
        };
        d2 = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? c2 : d2 : function(a3) {
          return a3;
        };
        a2 = b2 ? a2 + "-" + d2(b2) : d2(a2);
        return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a2) : a2;
      };
      goog.setCssNameMapping = function(a2, b2) {
        goog.cssNameMapping_ = a2;
        goog.cssNameMappingStyle_ = b2;
      };
      !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
      goog.getMsg = function(a2, b2, c2) {
        c2 && c2.html && (a2 = a2.replace(/</g, "&lt;"));
        b2 && (a2 = a2.replace(/\{\$([^}]+)}/g, function(a3, c3) {
          return b2 != null && c3 in b2 ? b2[c3] : a3;
        }));
        return a2;
      };
      goog.getMsgWithFallback = function(a2, b2) {
        return a2;
      };
      goog.exportSymbol = function(a2, b2, c2) {
        goog.exportPath_(a2, b2, c2);
      };
      goog.exportProperty = function(a2, b2, c2) {
        a2[b2] = c2;
      };
      goog.inherits = function(a2, b2) {
        function c2() {
        }
        c2.prototype = b2.prototype;
        a2.superClass_ = b2.prototype;
        a2.prototype = new c2();
        a2.prototype.constructor = a2;
        a2.base = function(a3, c3, f2) {
          for (var d2 = Array(arguments.length - 2), e2 = 2; e2 < arguments.length; e2++)
            d2[e2 - 2] = arguments[e2];
          return b2.prototype[c3].apply(a3, d2);
        };
      };
      goog.base = function(a2, b2, c2) {
        var d2 = arguments.callee.caller;
        if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d2)
          throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (typeof d2.superClass_ !== "undefined") {
          for (var e2 = Array(arguments.length - 1), f2 = 1; f2 < arguments.length; f2++)
            e2[f2 - 1] = arguments[f2];
          return d2.superClass_.constructor.apply(a2, e2);
        }
        if (typeof b2 != "string" && typeof b2 != "symbol")
          throw Error("method names provided to goog.base must be a string or a symbol");
        e2 = Array(arguments.length - 2);
        for (f2 = 2; f2 < arguments.length; f2++)
          e2[f2 - 2] = arguments[f2];
        f2 = false;
        for (var g = a2.constructor.prototype; g; g = Object.getPrototypeOf(g))
          if (g[b2] === d2)
            f2 = true;
          else if (f2)
            return g[b2].apply(a2, e2);
        if (a2[b2] === d2)
          return a2.constructor.prototype[b2].apply(a2, e2);
        throw Error("goog.base called from a method of one name to a method of a different name");
      };
      goog.scope = function(a2) {
        if (goog.isInModuleLoader_())
          throw Error("goog.scope is not supported within a module.");
        a2.call(goog.global);
      };
      COMPILED || (goog.global.COMPILED = COMPILED);
      goog.defineClass = function(a2, b2) {
        var c2 = b2.constructor, d2 = b2.statics;
        c2 && c2 != Object.prototype.constructor || (c2 = function() {
          throw Error("cannot instantiate an interface (no constructor defined).");
        });
        c2 = goog.defineClass.createSealingConstructor_(c2, a2);
        a2 && goog.inherits(c2, a2);
        delete b2.constructor;
        delete b2.statics;
        goog.defineClass.applyProperties_(c2.prototype, b2);
        d2 != null && (d2 instanceof Function ? d2(c2) : goog.defineClass.applyProperties_(c2, d2));
        return c2;
      };
      goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
      goog.defineClass.createSealingConstructor_ = function(a2, b2) {
        if (!goog.defineClass.SEAL_CLASS_INSTANCES)
          return a2;
        var c2 = !goog.defineClass.isUnsealable_(b2), d2 = function() {
          var b3 = a2.apply(this, arguments) || this;
          b3[goog.UID_PROPERTY_] = b3[goog.UID_PROPERTY_];
          this.constructor === d2 && c2 && Object.seal instanceof Function && Object.seal(b3);
          return b3;
        };
        return d2;
      };
      goog.defineClass.isUnsealable_ = function(a2) {
        return a2 && a2.prototype && a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
      };
      goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.defineClass.applyProperties_ = function(a2, b2) {
        for (var c2 in b2)
          Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
        for (var d2 = 0; d2 < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d2++)
          c2 = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d2], Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
      };
      goog.tagUnsealableClass = function(a2) {
        !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
      };
      goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
      !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
        var a2 = goog.global.document;
        return a2 != null && "write" in a2;
      }, goog.isDocumentLoading_ = function() {
        var a2 = goog.global.document;
        return a2.attachEvent ? a2.readyState != "complete" : a2.readyState == "loading";
      }, goog.findBasePath_ = function() {
        if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH))
          goog.basePath = goog.global.CLOSURE_BASE_PATH;
        else if (goog.inHtmlDocument_()) {
          var a2 = goog.global.document, b2 = a2.currentScript;
          a2 = b2 ? [b2] : a2.getElementsByTagName("SCRIPT");
          for (b2 = a2.length - 1; 0 <= b2; --b2) {
            var c2 = a2[b2].src, d2 = c2.lastIndexOf("?");
            d2 = d2 == -1 ? c2.length : d2;
            if (c2.substr(d2 - 7, 7) == "base.js") {
              goog.basePath = c2.substr(0, d2 - 7);
              break;
            }
          }
        }
      }, goog.findBasePath_(), goog.Transpiler = function() {
        this.requiresTranspilation_ = null;
        this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
      }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
        function a(a2, b2) {
          e ? d[a2] = true : b2() ? (c = a2, d[a2] = false) : e = d[a2] = true;
        }
        function b(a) {
          try {
            return !!eval(a);
          } catch (h) {
            return false;
          }
        }
        var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
        a("es5", function() {
          return b("[1,].length==1");
        });
        a("es6", function() {
          return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
        });
        a("es7", function() {
          return b("2 ** 2 == 4");
        });
        a("es8", function() {
          return b("async () => 1, true");
        });
        a("es9", function() {
          return b("({...rest} = {}), true");
        });
        a("es_next", function() {
          return false;
        });
        return { target: c, map: d };
      }, goog.Transpiler.prototype.needsTranspile = function(a2, b2) {
        if (goog.TRANSPILE == "always")
          return true;
        if (goog.TRANSPILE == "never")
          return false;
        if (!this.requiresTranspilation_) {
          var c2 = this.createRequiresTranspilation_();
          this.requiresTranspilation_ = c2.map;
          this.transpilationTarget_ = this.transpilationTarget_ || c2.target;
        }
        if (a2 in this.requiresTranspilation_)
          return this.requiresTranspilation_[a2] ? true : !goog.inHtmlDocument_() || b2 != "es6" || "noModule" in goog.global.document.createElement("script") ? false : true;
        throw Error("Unknown language mode: " + a2);
      }, goog.Transpiler.prototype.transpile = function(a2, b2) {
        return goog.transpile_(a2, b2, this.transpilationTarget_);
      }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a2) {
        return a2.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
      }, goog.DebugLoader_ = function() {
        this.dependencies_ = {};
        this.idToPath_ = {};
        this.written_ = {};
        this.loadingDeps_ = [];
        this.depsToLoad_ = [];
        this.paused_ = false;
        this.factory_ = new goog.DependencyFactory(goog.transpiler_);
        this.deferredCallbacks_ = {};
        this.deferredQueue_ = [];
      }, goog.DebugLoader_.prototype.bootstrap = function(a2, b2) {
        function c2() {
          d2 && (goog.global.setTimeout(d2, 0), d2 = null);
        }
        var d2 = b2;
        if (a2.length) {
          b2 = [];
          for (var e2 = 0; e2 < a2.length; e2++) {
            var f2 = this.getPathFromDeps_(a2[e2]);
            if (!f2)
              throw Error("Unregonized namespace: " + a2[e2]);
            b2.push(this.dependencies_[f2]);
          }
          f2 = goog.require;
          var g = 0;
          for (e2 = 0; e2 < a2.length; e2++)
            f2(a2[e2]), b2[e2].onLoad(function() {
              ++g == a2.length && c2();
            });
        } else
          c2();
      }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
        this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
        this.loadDeps_();
      }, goog.DebugLoader_.prototype.requested = function(a2, b2) {
        (a2 = this.getPathFromDeps_(a2)) && (b2 || this.areDepsLoaded_(this.dependencies_[a2].requires)) && (b2 = this.deferredCallbacks_[a2]) && (delete this.deferredCallbacks_[a2], b2());
      }, goog.DebugLoader_.prototype.setDependencyFactory = function(a2) {
        this.factory_ = a2;
      }, goog.DebugLoader_.prototype.load_ = function(a2) {
        if (this.getPathFromDeps_(a2)) {
          var b2 = this, c2 = [], d2 = function(a3) {
            var e2 = b2.getPathFromDeps_(a3);
            if (!e2)
              throw Error("Bad dependency path or symbol: " + a3);
            if (!b2.written_[e2]) {
              b2.written_[e2] = true;
              a3 = b2.dependencies_[e2];
              for (e2 = 0; e2 < a3.requires.length; e2++)
                goog.isProvided_(a3.requires[e2]) || d2(a3.requires[e2]);
              c2.push(a3);
            }
          };
          d2(a2);
          a2 = !!this.depsToLoad_.length;
          this.depsToLoad_ = this.depsToLoad_.concat(c2);
          this.paused_ || a2 || this.loadDeps_();
        } else
          throw a2 = "goog.require could not find: " + a2, goog.logToConsole_(a2), Error(a2);
      }, goog.DebugLoader_.prototype.loadDeps_ = function() {
        for (var a2 = this, b2 = this.paused_; this.depsToLoad_.length && !b2; )
          (function() {
            var c2 = false, d2 = a2.depsToLoad_.shift(), e2 = false;
            a2.loading_(d2);
            var f2 = { pause: function() {
              if (c2)
                throw Error("Cannot call pause after the call to load.");
              b2 = true;
            }, resume: function() {
              c2 ? a2.resume_() : b2 = false;
            }, loaded: function() {
              if (e2)
                throw Error("Double call to loaded.");
              e2 = true;
              a2.loaded_(d2);
            }, pending: function() {
              for (var b3 = [], c3 = 0; c3 < a2.loadingDeps_.length; c3++)
                b3.push(a2.loadingDeps_[c3]);
              return b3;
            }, setModuleState: function(a3) {
              goog.moduleLoaderState_ = { type: a3, moduleName: "", declareLegacyNamespace: false };
            }, registerEs6ModuleExports: function(a3, b3, c3) {
              c3 && (goog.loadedModules_[c3] = { exports: b3, type: goog.ModuleType.ES6, moduleId: c3 || "" });
            }, registerGoogModuleExports: function(a3, b3) {
              goog.loadedModules_[a3] = { exports: b3, type: goog.ModuleType.GOOG, moduleId: a3 };
            }, clearModuleState: function() {
              goog.moduleLoaderState_ = null;
            }, defer: function(b3) {
              if (c2)
                throw Error("Cannot register with defer after the call to load.");
              a2.defer_(d2, b3);
            }, areDepsLoaded: function() {
              return a2.areDepsLoaded_(d2.requires);
            } };
            try {
              d2.load(f2);
            } finally {
              c2 = true;
            }
          })();
        b2 && this.pause_();
      }, goog.DebugLoader_.prototype.pause_ = function() {
        this.paused_ = true;
      }, goog.DebugLoader_.prototype.resume_ = function() {
        this.paused_ && (this.paused_ = false, this.loadDeps_());
      }, goog.DebugLoader_.prototype.loading_ = function(a2) {
        this.loadingDeps_.push(a2);
      }, goog.DebugLoader_.prototype.loaded_ = function(a2) {
        for (var b2 = 0; b2 < this.loadingDeps_.length; b2++)
          if (this.loadingDeps_[b2] == a2) {
            this.loadingDeps_.splice(b2, 1);
            break;
          }
        for (b2 = 0; b2 < this.deferredQueue_.length; b2++)
          if (this.deferredQueue_[b2] == a2.path) {
            this.deferredQueue_.splice(b2, 1);
            break;
          }
        if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
          for (; this.deferredQueue_.length; )
            this.requested(this.deferredQueue_.shift(), true);
        a2.loaded();
      }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a2) {
        for (var b2 = 0; b2 < a2.length; b2++) {
          var c2 = this.getPathFromDeps_(a2[b2]);
          if (!c2 || !(c2 in this.deferredCallbacks_ || goog.isProvided_(a2[b2])))
            return false;
        }
        return true;
      }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a2) {
        return a2 in this.idToPath_ ? this.idToPath_[a2] : a2 in this.dependencies_ ? a2 : null;
      }, goog.DebugLoader_.prototype.defer_ = function(a2, b2) {
        this.deferredCallbacks_[a2.path] = b2;
        this.deferredQueue_.push(a2.path);
      }, goog.LoadController = function() {
      }, goog.LoadController.prototype.pause = function() {
      }, goog.LoadController.prototype.resume = function() {
      }, goog.LoadController.prototype.loaded = function() {
      }, goog.LoadController.prototype.pending = function() {
      }, goog.LoadController.prototype.registerEs6ModuleExports = function(a2, b2, c2) {
      }, goog.LoadController.prototype.setModuleState = function(a2) {
      }, goog.LoadController.prototype.clearModuleState = function() {
      }, goog.LoadController.prototype.defer = function(a2) {
      }, goog.LoadController.prototype.areDepsLoaded = function() {
      }, goog.Dependency = function(a2, b2, c2, d2, e2) {
        this.path = a2;
        this.relativePath = b2;
        this.provides = c2;
        this.requires = d2;
        this.loadFlags = e2;
        this.loaded_ = false;
        this.loadCallbacks_ = [];
      }, goog.Dependency.prototype.getPathName = function() {
        var a2 = this.path, b2 = a2.indexOf("://");
        0 <= b2 && (a2 = a2.substring(b2 + 3), b2 = a2.indexOf("/"), 0 <= b2 && (a2 = a2.substring(b2 + 1)));
        return a2;
      }, goog.Dependency.prototype.onLoad = function(a2) {
        this.loaded_ ? a2() : this.loadCallbacks_.push(a2);
      }, goog.Dependency.prototype.loaded = function() {
        this.loaded_ = true;
        var a2 = this.loadCallbacks_;
        this.loadCallbacks_ = [];
        for (var b2 = 0; b2 < a2.length; b2++)
          a2[b2]();
      }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a2) {
        var b2 = Math.random().toString(32);
        goog.Dependency.callbackMap_[b2] = a2;
        return b2;
      }, goog.Dependency.unregisterCallback_ = function(a2) {
        delete goog.Dependency.callbackMap_[a2];
      }, goog.Dependency.callback_ = function(a2, b2) {
        if (a2 in goog.Dependency.callbackMap_) {
          for (var c2 = goog.Dependency.callbackMap_[a2], d2 = [], e2 = 1; e2 < arguments.length; e2++)
            d2.push(arguments[e2]);
          c2.apply(void 0, d2);
        } else
          throw Error("Callback key " + a2 + " does not exist (was base.js loaded more than once?).");
      }, goog.Dependency.prototype.load = function(a2) {
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
        else if (goog.inHtmlDocument_()) {
          var b2 = goog.global.document;
          if (b2.readyState == "complete" && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
            if (/\bdeps.js$/.test(this.path)) {
              a2.loaded();
              return;
            }
            throw Error('Cannot write "' + this.path + '" after document load');
          }
          if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
            var c2 = goog.Dependency.registerCallback_(function(b3) {
              goog.DebugLoader_.IS_OLD_IE_ && b3.readyState != "complete" || (goog.Dependency.unregisterCallback_(c2), a2.loaded());
            }), d2 = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
            d2 = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + `="goog.Dependency.callback_('` + c2 + `', this)" type="text/javascript" ` + (goog.Dependency.defer_ ? "defer" : "") + d2 + "><\/script>";
            b2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d2) : d2);
          } else {
            var e2 = b2.createElement("script");
            e2.defer = goog.Dependency.defer_;
            e2.async = false;
            e2.type = "text/javascript";
            (d2 = goog.getScriptNonce()) && e2.setAttribute("nonce", d2);
            goog.DebugLoader_.IS_OLD_IE_ ? (a2.pause(), e2.onreadystatechange = function() {
              if (e2.readyState == "loaded" || e2.readyState == "complete")
                a2.loaded(), a2.resume();
            }) : e2.onload = function() {
              e2.onload = null;
              a2.loaded();
            };
            e2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
            b2.head.appendChild(e2);
          }
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), this.relativePath == "deps.js" ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a2.loaded()) : a2.pause();
      }, goog.Es6ModuleDependency = function(a2, b2, c2, d2, e2) {
        goog.Dependency.call(this, a2, b2, c2, d2, e2);
      }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a2) {
        function b2(a3, b3) {
          a3 = b3 ? '<script type="module" crossorigin>' + b3 + "<\/script>" : '<script type="module" crossorigin src="' + a3 + '"><\/script>';
          d2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a3) : a3);
        }
        function c2(a3, b3) {
          var c3 = d2.createElement("script");
          c3.defer = true;
          c3.async = false;
          c3.type = "module";
          c3.setAttribute("crossorigin", true);
          var e3 = goog.getScriptNonce();
          e3 && c3.setAttribute("nonce", e3);
          b3 ? c3.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b3) : b3 : c3.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a3) : a3;
          d2.head.appendChild(c3);
        }
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
        else if (goog.inHtmlDocument_()) {
          var d2 = goog.global.document, e2 = this;
          if (goog.isDocumentLoading_()) {
            var f2 = b2;
            goog.Dependency.defer_ = true;
          } else
            f2 = c2;
          var g = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(g);
            a2.setModuleState(goog.ModuleType.ES6);
          });
          f2(void 0, 'goog.Dependency.callback_("' + g + '")');
          f2(this.path, void 0);
          var h = goog.Dependency.registerCallback_(function(b3) {
            goog.Dependency.unregisterCallback_(h);
            a2.registerEs6ModuleExports(e2.path, b3, goog.moduleLoaderState_.moduleName);
          });
          f2(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
          var k = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(k);
            a2.clearModuleState();
            a2.loaded();
          });
          f2(void 0, 'goog.Dependency.callback_("' + k + '")');
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a2.pause();
      }, goog.TransformedDependency = function(a2, b2, c2, d2, e2) {
        goog.Dependency.call(this, a2, b2, c2, d2, e2);
        this.contents_ = null;
        this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
      }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a2) {
        function b2() {
          e2.contents_ = goog.loadFileSync_(e2.path);
          e2.contents_ && (e2.contents_ = e2.transform(e2.contents_), e2.contents_ && (e2.contents_ += "\n//# sourceURL=" + e2.path));
        }
        function c2() {
          e2.lazyFetch_ && b2();
          if (e2.contents_) {
            f2 && a2.setModuleState(goog.ModuleType.ES6);
            try {
              var c3 = e2.contents_;
              e2.contents_ = null;
              goog.globalEval(c3);
              if (f2)
                var d3 = goog.moduleLoaderState_.moduleName;
            } finally {
              f2 && a2.clearModuleState();
            }
            f2 && goog.global.$jscomp.require.ensure([e2.getPathName()], function() {
              a2.registerEs6ModuleExports(e2.path, goog.global.$jscomp.require(e2.getPathName()), d3);
            });
            a2.loaded();
          }
        }
        function d2() {
          var a3 = goog.global.document, b3 = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(b3);
            c2();
          }), d3 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b3 + '");') + "<\/script>";
          a3.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d3) : d3);
        }
        var e2 = this;
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          b2(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a2.loaded()) : a2.pause();
        else {
          var f2 = this.loadFlags.module == goog.ModuleType.ES6;
          this.lazyFetch_ || b2();
          var g = 1 < a2.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
          g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
          if (h || g)
            a2.defer(function() {
              c2();
            });
          else {
            var k = goog.global.document;
            h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
            if (f2 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
              goog.Dependency.defer_ = true;
              a2.pause();
              var l = k.onreadystatechange;
              k.onreadystatechange = function() {
                k.readyState == "interactive" && (k.onreadystatechange = l, c2(), a2.resume());
                goog.isFunction(l) && l.apply(void 0, arguments);
              };
            } else
              !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d2() : c2();
          }
        }
      }, goog.TransformedDependency.prototype.transform = function(a2) {
      }, goog.TranspiledDependency = function(a2, b2, c2, d2, e2, f2) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
        this.transpiler = f2;
      }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a2) {
        return this.transpiler.transpile(a2, this.getPathName());
      }, goog.PreTranspiledEs6ModuleDependency = function(a2, b2, c2, d2, e2) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
      }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a2) {
        return a2;
      }, goog.GoogModuleDependency = function(a2, b2, c2, d2, e2, f2, g) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
        this.needsTranspile_ = f2;
        this.transpiler_ = g;
      }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a2) {
        this.needsTranspile_ && (a2 = this.transpiler_.transpile(a2, this.getPathName()));
        return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(a2 + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a2 + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
      }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a2, b2, c2, d2) {
        b2 = b2 || [];
        a2 = a2.replace(/\\/g, "/");
        var e2 = goog.normalizePath_(goog.basePath + a2);
        d2 && typeof d2 !== "boolean" || (d2 = d2 ? { module: goog.ModuleType.GOOG } : {});
        c2 = this.factory_.createDependency(e2, a2, b2, c2, d2, goog.transpiler_.needsTranspile(d2.lang || "es3", d2.module));
        this.dependencies_[e2] = c2;
        for (c2 = 0; c2 < b2.length; c2++)
          this.idToPath_[b2[c2]] = e2;
        this.idToPath_[a2] = e2;
      }, goog.DependencyFactory = function(a2) {
        this.transpiler = a2;
      }, goog.DependencyFactory.prototype.createDependency = function(a2, b2, c2, d2, e2, f2) {
        return e2.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a2, b2, c2, d2, e2, f2, this.transpiler) : f2 ? new goog.TranspiledDependency(a2, b2, c2, d2, e2, this.transpiler) : e2.module == goog.ModuleType.ES6 ? goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Es6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Dependency(a2, b2, c2, d2, e2);
      }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
        goog.debugLoader_.loadClosureDeps();
      }, goog.setDependencyFactory = function(a2) {
        goog.debugLoader_.setDependencyFactory(a2);
      }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a2, b2) {
        goog.debugLoader_.bootstrap(a2, b2);
      });
      goog.TRUSTED_TYPES_POLICY_NAME = "";
      goog.identity_ = function(a2) {
        return a2;
      };
      goog.createTrustedTypesPolicy = function(a2) {
        var b2 = null;
        if (typeof TrustedTypes === "undefined" || !TrustedTypes.createPolicy)
          return b2;
        try {
          b2 = TrustedTypes.createPolicy(a2, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_, createURL: goog.identity_ });
        } catch (c2) {
          goog.logToConsole_(c2.message);
        }
        return b2;
      };
      goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
      goog.object = {};
      goog.object.is = function(a2, b2) {
        return a2 === b2 ? a2 !== 0 || 1 / a2 === 1 / b2 : a2 !== a2 && b2 !== b2;
      };
      goog.object.forEach = function(a2, b2, c2) {
        for (var d2 in a2)
          b2.call(c2, a2[d2], d2, a2);
      };
      goog.object.filter = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          b2.call(c2, a2[e2], e2, a2) && (d2[e2] = a2[e2]);
        return d2;
      };
      goog.object.map = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          d2[e2] = b2.call(c2, a2[e2], e2, a2);
        return d2;
      };
      goog.object.some = function(a2, b2, c2) {
        for (var d2 in a2)
          if (b2.call(c2, a2[d2], d2, a2))
            return true;
        return false;
      };
      goog.object.every = function(a2, b2, c2) {
        for (var d2 in a2)
          if (!b2.call(c2, a2[d2], d2, a2))
            return false;
        return true;
      };
      goog.object.getCount = function(a2) {
        var b2 = 0, c2;
        for (c2 in a2)
          b2++;
        return b2;
      };
      goog.object.getAnyKey = function(a2) {
        for (var b2 in a2)
          return b2;
      };
      goog.object.getAnyValue = function(a2) {
        for (var b2 in a2)
          return a2[b2];
      };
      goog.object.contains = function(a2, b2) {
        return goog.object.containsValue(a2, b2);
      };
      goog.object.getValues = function(a2) {
        var b2 = [], c2 = 0, d2;
        for (d2 in a2)
          b2[c2++] = a2[d2];
        return b2;
      };
      goog.object.getKeys = function(a2) {
        var b2 = [], c2 = 0, d2;
        for (d2 in a2)
          b2[c2++] = d2;
        return b2;
      };
      goog.object.getValueByKeys = function(a2, b2) {
        var c2 = goog.isArrayLike(b2), d2 = c2 ? b2 : arguments;
        for (c2 = c2 ? 0 : 1; c2 < d2.length; c2++) {
          if (a2 == null)
            return;
          a2 = a2[d2[c2]];
        }
        return a2;
      };
      goog.object.containsKey = function(a2, b2) {
        return a2 !== null && b2 in a2;
      };
      goog.object.containsValue = function(a2, b2) {
        for (var c2 in a2)
          if (a2[c2] == b2)
            return true;
        return false;
      };
      goog.object.findKey = function(a2, b2, c2) {
        for (var d2 in a2)
          if (b2.call(c2, a2[d2], d2, a2))
            return d2;
      };
      goog.object.findValue = function(a2, b2, c2) {
        return (b2 = goog.object.findKey(a2, b2, c2)) && a2[b2];
      };
      goog.object.isEmpty = function(a2) {
        for (var b2 in a2)
          return false;
        return true;
      };
      goog.object.clear = function(a2) {
        for (var b2 in a2)
          delete a2[b2];
      };
      goog.object.remove = function(a2, b2) {
        var c2;
        (c2 = b2 in a2) && delete a2[b2];
        return c2;
      };
      goog.object.add = function(a2, b2, c2) {
        if (a2 !== null && b2 in a2)
          throw Error('The object already contains the key "' + b2 + '"');
        goog.object.set(a2, b2, c2);
      };
      goog.object.get = function(a2, b2, c2) {
        return a2 !== null && b2 in a2 ? a2[b2] : c2;
      };
      goog.object.set = function(a2, b2, c2) {
        a2[b2] = c2;
      };
      goog.object.setIfUndefined = function(a2, b2, c2) {
        return b2 in a2 ? a2[b2] : a2[b2] = c2;
      };
      goog.object.setWithReturnValueIfNotSet = function(a2, b2, c2) {
        if (b2 in a2)
          return a2[b2];
        c2 = c2();
        return a2[b2] = c2;
      };
      goog.object.equals = function(a2, b2) {
        for (var c2 in a2)
          if (!(c2 in b2) || a2[c2] !== b2[c2])
            return false;
        for (var d2 in b2)
          if (!(d2 in a2))
            return false;
        return true;
      };
      goog.object.clone = function(a2) {
        var b2 = {}, c2;
        for (c2 in a2)
          b2[c2] = a2[c2];
        return b2;
      };
      goog.object.unsafeClone = function(a2) {
        var b2 = goog.typeOf(a2);
        if (b2 == "object" || b2 == "array") {
          if (goog.isFunction(a2.clone))
            return a2.clone();
          b2 = b2 == "array" ? [] : {};
          for (var c2 in a2)
            b2[c2] = goog.object.unsafeClone(a2[c2]);
          return b2;
        }
        return a2;
      };
      goog.object.transpose = function(a2) {
        var b2 = {}, c2;
        for (c2 in a2)
          b2[a2[c2]] = c2;
        return b2;
      };
      goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.object.extend = function(a2, b2) {
        for (var c2, d2, e2 = 1; e2 < arguments.length; e2++) {
          d2 = arguments[e2];
          for (c2 in d2)
            a2[c2] = d2[c2];
          for (var f2 = 0; f2 < goog.object.PROTOTYPE_FIELDS_.length; f2++)
            c2 = goog.object.PROTOTYPE_FIELDS_[f2], Object.prototype.hasOwnProperty.call(d2, c2) && (a2[c2] = d2[c2]);
        }
      };
      goog.object.create = function(a2) {
        var b2 = arguments.length;
        if (b2 == 1 && goog.isArray(arguments[0]))
          return goog.object.create.apply(null, arguments[0]);
        if (b2 % 2)
          throw Error("Uneven number of arguments");
        for (var c2 = {}, d2 = 0; d2 < b2; d2 += 2)
          c2[arguments[d2]] = arguments[d2 + 1];
        return c2;
      };
      goog.object.createSet = function(a2) {
        var b2 = arguments.length;
        if (b2 == 1 && goog.isArray(arguments[0]))
          return goog.object.createSet.apply(null, arguments[0]);
        for (var c2 = {}, d2 = 0; d2 < b2; d2++)
          c2[arguments[d2]] = true;
        return c2;
      };
      goog.object.createImmutableView = function(a2) {
        var b2 = a2;
        Object.isFrozen && !Object.isFrozen(a2) && (b2 = Object.create(a2), Object.freeze(b2));
        return b2;
      };
      goog.object.isImmutableView = function(a2) {
        return !!Object.isFrozen && Object.isFrozen(a2);
      };
      goog.object.getAllPropertyNames = function(a2, b2, c2) {
        if (!a2)
          return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
          return goog.object.getKeys(a2);
        for (var d2 = {}; a2 && (a2 !== Object.prototype || b2) && (a2 !== Function.prototype || c2); ) {
          for (var e2 = Object.getOwnPropertyNames(a2), f2 = 0; f2 < e2.length; f2++)
            d2[e2[f2]] = true;
          a2 = Object.getPrototypeOf(a2);
        }
        return goog.object.getKeys(d2);
      };
      goog.object.getSuperClass = function(a2) {
        return (a2 = Object.getPrototypeOf(a2.prototype)) && a2.constructor;
      };
      goog.debug = {};
      goog.debug.Error = function(a2) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, goog.debug.Error);
        else {
          var b2 = Error().stack;
          b2 && (this.stack = b2);
        }
        a2 && (this.message = String(a2));
        this.reportErrorToServer = true;
      };
      goog.inherits(goog.debug.Error, Error);
      goog.debug.Error.prototype.name = "CustomError";
      goog.dom = {};
      goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
      goog.asserts = {};
      goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
      goog.asserts.AssertionError = function(a2, b2) {
        goog.debug.Error.call(this, goog.asserts.subs_(a2, b2));
        this.messagePattern = a2;
      };
      goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
      goog.asserts.AssertionError.prototype.name = "AssertionError";
      goog.asserts.DEFAULT_ERROR_HANDLER = function(a2) {
        throw a2;
      };
      goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
      goog.asserts.subs_ = function(a2, b2) {
        a2 = a2.split("%s");
        for (var c2 = "", d2 = a2.length - 1, e2 = 0; e2 < d2; e2++)
          c2 += a2[e2] + (e2 < b2.length ? b2[e2] : "%s");
        return c2 + a2[d2];
      };
      goog.asserts.doAssertFailure_ = function(a2, b2, c2, d2) {
        var e2 = "Assertion failed";
        if (c2) {
          e2 += ": " + c2;
          var f2 = d2;
        } else
          a2 && (e2 += ": " + a2, f2 = b2);
        a2 = new goog.asserts.AssertionError("" + e2, f2 || []);
        goog.asserts.errorHandler_(a2);
      };
      goog.asserts.setErrorHandler = function(a2) {
        goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a2);
      };
      goog.asserts.assert = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !a2 && goog.asserts.doAssertFailure_("", null, b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertExists = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && a2 == null && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.fail = function(a2, b2) {
        goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1)));
      };
      goog.asserts.assertNumber = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a2) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertString = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isString(a2) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertFunction = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a2) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertObject = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isObject(a2) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertArray = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isArray(a2) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertBoolean = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a2) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertElement = function(a2, b2, c2) {
        !goog.asserts.ENABLE_ASSERTS || goog.isObject(a2) && a2.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertInstanceof = function(a2, b2, c2, d2) {
        !goog.asserts.ENABLE_ASSERTS || a2 instanceof b2 || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b2), goog.asserts.getType_(a2)], c2, Array.prototype.slice.call(arguments, 3));
        return a2;
      };
      goog.asserts.assertFinite = function(a2, b2, c2) {
        !goog.asserts.ENABLE_ASSERTS || typeof a2 == "number" && isFinite(a2) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertObjectPrototypeIsIntact = function() {
        for (var a2 in Object.prototype)
          goog.asserts.fail(a2 + " should not be enumerable in Object.prototype.");
      };
      goog.asserts.getType_ = function(a2) {
        return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : a2 === null ? "null" : typeof a2;
      };
      var jspb = { BinaryConstants: {}, ConstBinaryMessage: function() {
      }, BinaryMessage: function() {
      } };
      jspb.BinaryConstants.FieldType = { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18, FHASH64: 30, VHASH64: 31 };
      jspb.BinaryConstants.WireType = { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 };
      jspb.BinaryConstants.FieldTypeToWireType = function(a2) {
        var b2 = jspb.BinaryConstants.FieldType, c2 = jspb.BinaryConstants.WireType;
        switch (a2) {
          case b2.INT32:
          case b2.INT64:
          case b2.UINT32:
          case b2.UINT64:
          case b2.SINT32:
          case b2.SINT64:
          case b2.BOOL:
          case b2.ENUM:
          case b2.VHASH64:
            return c2.VARINT;
          case b2.DOUBLE:
          case b2.FIXED64:
          case b2.SFIXED64:
          case b2.FHASH64:
            return c2.FIXED64;
          case b2.STRING:
          case b2.MESSAGE:
          case b2.BYTES:
            return c2.DELIMITED;
          case b2.FLOAT:
          case b2.FIXED32:
          case b2.SFIXED32:
            return c2.FIXED32;
          default:
            return c2.INVALID;
        }
      };
      jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
      jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
      jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
      jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
      jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
      jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
      jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
      jspb.BinaryConstants.TWO_TO_20 = 1048576;
      jspb.BinaryConstants.TWO_TO_23 = 8388608;
      jspb.BinaryConstants.TWO_TO_31 = 2147483648;
      jspb.BinaryConstants.TWO_TO_32 = 4294967296;
      jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
      jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
      jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
      jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
      goog.array = {};
      goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
      goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
      goog.array.peek = function(a2) {
        return a2[a2.length - 1];
      };
      goog.array.last = goog.array.peek;
      goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.indexOf.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        c2 = c2 == null ? 0 : 0 > c2 ? Math.max(0, a2.length + c2) : c2;
        if (goog.isString(a2))
          return goog.isString(b2) && b2.length == 1 ? a2.indexOf(b2, c2) : -1;
        for (; c2 < a2.length; c2++)
          if (c2 in a2 && a2[c2] === b2)
            return c2;
        return -1;
      };
      goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.lastIndexOf.call(a2, b2, c2 == null ? a2.length - 1 : c2);
      } : function(a2, b2, c2) {
        c2 = c2 == null ? a2.length - 1 : c2;
        0 > c2 && (c2 = Math.max(0, a2.length + c2));
        if (goog.isString(a2))
          return goog.isString(b2) && b2.length == 1 ? a2.lastIndexOf(b2, c2) : -1;
        for (; 0 <= c2; c2--)
          if (c2 in a2 && a2[c2] === b2)
            return c2;
        return -1;
      };
      goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        Array.prototype.forEach.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          f2 in e2 && b2.call(c2, e2[f2], f2, a2);
      };
      goog.array.forEachRight = function(a2, b2, c2) {
        var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2;
        for (--d2; 0 <= d2; --d2)
          d2 in e2 && b2.call(c2, e2[d2], d2, a2);
      };
      goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.filter.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = [], f2 = 0, g = goog.isString(a2) ? a2.split("") : a2, h = 0; h < d2; h++)
          if (h in g) {
            var k = g[h];
            b2.call(c2, k, h, a2) && (e2[f2++] = k);
          }
        return e2;
      };
      goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.map.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = Array(d2), f2 = goog.isString(a2) ? a2.split("") : a2, g = 0; g < d2; g++)
          g in f2 && (e2[g] = b2.call(c2, f2[g], g, a2));
        return e2;
      };
      goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a2, b2, c2, d2) {
        goog.asserts.assert(a2.length != null);
        d2 && (b2 = goog.bind(b2, d2));
        return Array.prototype.reduce.call(a2, b2, c2);
      } : function(a2, b2, c2, d2) {
        var e2 = c2;
        goog.array.forEach(a2, function(c3, g) {
          e2 = b2.call(d2, e2, c3, g, a2);
        });
        return e2;
      };
      goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a2, b2, c2, d2) {
        goog.asserts.assert(a2.length != null);
        goog.asserts.assert(b2 != null);
        d2 && (b2 = goog.bind(b2, d2));
        return Array.prototype.reduceRight.call(a2, b2, c2);
      } : function(a2, b2, c2, d2) {
        var e2 = c2;
        goog.array.forEachRight(a2, function(c3, g) {
          e2 = b2.call(d2, e2, c3, g, a2);
        });
        return e2;
      };
      goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.some.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
            return true;
        return false;
      };
      goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.every.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && !b2.call(c2, e2[f2], f2, a2))
            return false;
        return true;
      };
      goog.array.count = function(a2, b2, c2) {
        var d2 = 0;
        goog.array.forEach(a2, function(a3, f2, g) {
          b2.call(c2, a3, f2, g) && ++d2;
        }, c2);
        return d2;
      };
      goog.array.find = function(a2, b2, c2) {
        b2 = goog.array.findIndex(a2, b2, c2);
        return 0 > b2 ? null : goog.isString(a2) ? a2.charAt(b2) : a2[b2];
      };
      goog.array.findIndex = function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
            return f2;
        return -1;
      };
      goog.array.findRight = function(a2, b2, c2) {
        b2 = goog.array.findIndexRight(a2, b2, c2);
        return 0 > b2 ? null : goog.isString(a2) ? a2.charAt(b2) : a2[b2];
      };
      goog.array.findIndexRight = function(a2, b2, c2) {
        var d2 = a2.length, e2 = goog.isString(a2) ? a2.split("") : a2;
        for (--d2; 0 <= d2; d2--)
          if (d2 in e2 && b2.call(c2, e2[d2], d2, a2))
            return d2;
        return -1;
      };
      goog.array.contains = function(a2, b2) {
        return 0 <= goog.array.indexOf(a2, b2);
      };
      goog.array.isEmpty = function(a2) {
        return a2.length == 0;
      };
      goog.array.clear = function(a2) {
        if (!goog.isArray(a2))
          for (var b2 = a2.length - 1; 0 <= b2; b2--)
            delete a2[b2];
        a2.length = 0;
      };
      goog.array.insert = function(a2, b2) {
        goog.array.contains(a2, b2) || a2.push(b2);
      };
      goog.array.insertAt = function(a2, b2, c2) {
        goog.array.splice(a2, c2, 0, b2);
      };
      goog.array.insertArrayAt = function(a2, b2, c2) {
        goog.partial(goog.array.splice, a2, c2, 0).apply(null, b2);
      };
      goog.array.insertBefore = function(a2, b2, c2) {
        var d2;
        arguments.length == 2 || 0 > (d2 = goog.array.indexOf(a2, c2)) ? a2.push(b2) : goog.array.insertAt(a2, b2, d2);
      };
      goog.array.remove = function(a2, b2) {
        b2 = goog.array.indexOf(a2, b2);
        var c2;
        (c2 = 0 <= b2) && goog.array.removeAt(a2, b2);
        return c2;
      };
      goog.array.removeLast = function(a2, b2) {
        b2 = goog.array.lastIndexOf(a2, b2);
        return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
      };
      goog.array.removeAt = function(a2, b2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.splice.call(a2, b2, 1).length == 1;
      };
      goog.array.removeIf = function(a2, b2, c2) {
        b2 = goog.array.findIndex(a2, b2, c2);
        return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
      };
      goog.array.removeAllIf = function(a2, b2, c2) {
        var d2 = 0;
        goog.array.forEachRight(a2, function(e2, f2) {
          b2.call(c2, e2, f2, a2) && goog.array.removeAt(a2, f2) && d2++;
        });
        return d2;
      };
      goog.array.concat = function(a2) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.join = function(a2) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.toArray = function(a2) {
        var b2 = a2.length;
        if (0 < b2) {
          for (var c2 = Array(b2), d2 = 0; d2 < b2; d2++)
            c2[d2] = a2[d2];
          return c2;
        }
        return [];
      };
      goog.array.clone = goog.array.toArray;
      goog.array.extend = function(a2, b2) {
        for (var c2 = 1; c2 < arguments.length; c2++) {
          var d2 = arguments[c2];
          if (goog.isArrayLike(d2)) {
            var e2 = a2.length || 0, f2 = d2.length || 0;
            a2.length = e2 + f2;
            for (var g = 0; g < f2; g++)
              a2[e2 + g] = d2[g];
          } else
            a2.push(d2);
        }
      };
      goog.array.splice = function(a2, b2, c2, d2) {
        goog.asserts.assert(a2.length != null);
        return Array.prototype.splice.apply(a2, goog.array.slice(arguments, 1));
      };
      goog.array.slice = function(a2, b2, c2) {
        goog.asserts.assert(a2.length != null);
        return 2 >= arguments.length ? Array.prototype.slice.call(a2, b2) : Array.prototype.slice.call(a2, b2, c2);
      };
      goog.array.removeDuplicates = function(a2, b2, c2) {
        b2 = b2 || a2;
        var d2 = function(a3) {
          return goog.isObject(a3) ? "o" + goog.getUid(a3) : (typeof a3).charAt(0) + a3;
        };
        c2 = c2 || d2;
        d2 = {};
        for (var e2 = 0, f2 = 0; f2 < a2.length; ) {
          var g = a2[f2++], h = c2(g);
          Object.prototype.hasOwnProperty.call(d2, h) || (d2[h] = true, b2[e2++] = g);
        }
        b2.length = e2;
      };
      goog.array.binarySearch = function(a2, b2, c2) {
        return goog.array.binarySearch_(a2, c2 || goog.array.defaultCompare, false, b2);
      };
      goog.array.binarySelect = function(a2, b2, c2) {
        return goog.array.binarySearch_(a2, b2, true, void 0, c2);
      };
      goog.array.binarySearch_ = function(a2, b2, c2, d2, e2) {
        for (var f2 = 0, g = a2.length, h; f2 < g; ) {
          var k = f2 + g >> 1;
          var l = c2 ? b2.call(e2, a2[k], k, a2) : b2(d2, a2[k]);
          0 < l ? f2 = k + 1 : (g = k, h = !l);
        }
        return h ? f2 : ~f2;
      };
      goog.array.sort = function(a2, b2) {
        a2.sort(b2 || goog.array.defaultCompare);
      };
      goog.array.stableSort = function(a2, b2) {
        for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
          c2[d2] = { index: d2, value: a2[d2] };
        var e2 = b2 || goog.array.defaultCompare;
        goog.array.sort(c2, function(a3, b3) {
          return e2(a3.value, b3.value) || a3.index - b3.index;
        });
        for (d2 = 0; d2 < a2.length; d2++)
          a2[d2] = c2[d2].value;
      };
      goog.array.sortByKey = function(a2, b2, c2) {
        var d2 = c2 || goog.array.defaultCompare;
        goog.array.sort(a2, function(a3, c3) {
          return d2(b2(a3), b2(c3));
        });
      };
      goog.array.sortObjectsByKey = function(a2, b2, c2) {
        goog.array.sortByKey(a2, function(a3) {
          return a3[b2];
        }, c2);
      };
      goog.array.isSorted = function(a2, b2, c2) {
        b2 = b2 || goog.array.defaultCompare;
        for (var d2 = 1; d2 < a2.length; d2++) {
          var e2 = b2(a2[d2 - 1], a2[d2]);
          if (0 < e2 || e2 == 0 && c2)
            return false;
        }
        return true;
      };
      goog.array.equals = function(a2, b2, c2) {
        if (!goog.isArrayLike(a2) || !goog.isArrayLike(b2) || a2.length != b2.length)
          return false;
        var d2 = a2.length;
        c2 = c2 || goog.array.defaultCompareEquality;
        for (var e2 = 0; e2 < d2; e2++)
          if (!c2(a2[e2], b2[e2]))
            return false;
        return true;
      };
      goog.array.compare3 = function(a2, b2, c2) {
        c2 = c2 || goog.array.defaultCompare;
        for (var d2 = Math.min(a2.length, b2.length), e2 = 0; e2 < d2; e2++) {
          var f2 = c2(a2[e2], b2[e2]);
          if (f2 != 0)
            return f2;
        }
        return goog.array.defaultCompare(a2.length, b2.length);
      };
      goog.array.defaultCompare = function(a2, b2) {
        return a2 > b2 ? 1 : a2 < b2 ? -1 : 0;
      };
      goog.array.inverseDefaultCompare = function(a2, b2) {
        return -goog.array.defaultCompare(a2, b2);
      };
      goog.array.defaultCompareEquality = function(a2, b2) {
        return a2 === b2;
      };
      goog.array.binaryInsert = function(a2, b2, c2) {
        c2 = goog.array.binarySearch(a2, b2, c2);
        return 0 > c2 ? (goog.array.insertAt(a2, b2, -(c2 + 1)), true) : false;
      };
      goog.array.binaryRemove = function(a2, b2, c2) {
        b2 = goog.array.binarySearch(a2, b2, c2);
        return 0 <= b2 ? goog.array.removeAt(a2, b2) : false;
      };
      goog.array.bucket = function(a2, b2, c2) {
        for (var d2 = {}, e2 = 0; e2 < a2.length; e2++) {
          var f2 = a2[e2], g = b2.call(c2, f2, e2, a2);
          goog.isDef(g) && (d2[g] || (d2[g] = [])).push(f2);
        }
        return d2;
      };
      goog.array.toObject = function(a2, b2, c2) {
        var d2 = {};
        goog.array.forEach(a2, function(e2, f2) {
          d2[b2.call(c2, e2, f2, a2)] = e2;
        });
        return d2;
      };
      goog.array.range = function(a2, b2, c2) {
        var d2 = [], e2 = 0, f2 = a2;
        c2 = c2 || 1;
        b2 !== void 0 && (e2 = a2, f2 = b2);
        if (0 > c2 * (f2 - e2))
          return [];
        if (0 < c2)
          for (a2 = e2; a2 < f2; a2 += c2)
            d2.push(a2);
        else
          for (a2 = e2; a2 > f2; a2 += c2)
            d2.push(a2);
        return d2;
      };
      goog.array.repeat = function(a2, b2) {
        for (var c2 = [], d2 = 0; d2 < b2; d2++)
          c2[d2] = a2;
        return c2;
      };
      goog.array.flatten = function(a2) {
        for (var b2 = [], c2 = 0; c2 < arguments.length; c2++) {
          var d2 = arguments[c2];
          if (goog.isArray(d2))
            for (var e2 = 0; e2 < d2.length; e2 += 8192) {
              var f2 = goog.array.slice(d2, e2, e2 + 8192);
              f2 = goog.array.flatten.apply(null, f2);
              for (var g = 0; g < f2.length; g++)
                b2.push(f2[g]);
            }
          else
            b2.push(d2);
        }
        return b2;
      };
      goog.array.rotate = function(a2, b2) {
        goog.asserts.assert(a2.length != null);
        a2.length && (b2 %= a2.length, 0 < b2 ? Array.prototype.unshift.apply(a2, a2.splice(-b2, b2)) : 0 > b2 && Array.prototype.push.apply(a2, a2.splice(0, -b2)));
        return a2;
      };
      goog.array.moveItem = function(a2, b2, c2) {
        goog.asserts.assert(0 <= b2 && b2 < a2.length);
        goog.asserts.assert(0 <= c2 && c2 < a2.length);
        b2 = Array.prototype.splice.call(a2, b2, 1);
        Array.prototype.splice.call(a2, c2, 0, b2[0]);
      };
      goog.array.zip = function(a2) {
        if (!arguments.length)
          return [];
        for (var b2 = [], c2 = arguments[0].length, d2 = 1; d2 < arguments.length; d2++)
          arguments[d2].length < c2 && (c2 = arguments[d2].length);
        for (d2 = 0; d2 < c2; d2++) {
          for (var e2 = [], f2 = 0; f2 < arguments.length; f2++)
            e2.push(arguments[f2][d2]);
          b2.push(e2);
        }
        return b2;
      };
      goog.array.shuffle = function(a2, b2) {
        b2 = b2 || Math.random;
        for (var c2 = a2.length - 1; 0 < c2; c2--) {
          var d2 = Math.floor(b2() * (c2 + 1)), e2 = a2[c2];
          a2[c2] = a2[d2];
          a2[d2] = e2;
        }
      };
      goog.array.copyByIndex = function(a2, b2) {
        var c2 = [];
        goog.array.forEach(b2, function(b3) {
          c2.push(a2[b3]);
        });
        return c2;
      };
      goog.array.concatMap = function(a2, b2, c2) {
        return goog.array.concat.apply([], goog.array.map(a2, b2, c2));
      };
      goog.crypt = {};
      goog.crypt.stringToByteArray = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charCodeAt(d2);
          255 < e2 && (b2[c2++] = e2 & 255, e2 >>= 8);
          b2[c2++] = e2;
        }
        return b2;
      };
      goog.crypt.byteArrayToString = function(a2) {
        if (8192 >= a2.length)
          return String.fromCharCode.apply(null, a2);
        for (var b2 = "", c2 = 0; c2 < a2.length; c2 += 8192) {
          var d2 = goog.array.slice(a2, c2, c2 + 8192);
          b2 += String.fromCharCode.apply(null, d2);
        }
        return b2;
      };
      goog.crypt.byteArrayToHex = function(a2, b2) {
        return goog.array.map(a2, function(a3) {
          a3 = a3.toString(16);
          return 1 < a3.length ? a3 : "0" + a3;
        }).join(b2 || "");
      };
      goog.crypt.hexToByteArray = function(a2) {
        goog.asserts.assert(a2.length % 2 == 0, "Key string length must be multiple of 2");
        for (var b2 = [], c2 = 0; c2 < a2.length; c2 += 2)
          b2.push(parseInt(a2.substring(c2, c2 + 2), 16));
        return b2;
      };
      goog.crypt.stringToUtf8ByteArray = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charCodeAt(d2);
          128 > e2 ? b2[c2++] = e2 : (2048 > e2 ? b2[c2++] = e2 >> 6 | 192 : ((e2 & 64512) == 55296 && d2 + 1 < a2.length && (a2.charCodeAt(d2 + 1) & 64512) == 56320 ? (e2 = 65536 + ((e2 & 1023) << 10) + (a2.charCodeAt(++d2) & 1023), b2[c2++] = e2 >> 18 | 240, b2[c2++] = e2 >> 12 & 63 | 128) : b2[c2++] = e2 >> 12 | 224, b2[c2++] = e2 >> 6 & 63 | 128), b2[c2++] = e2 & 63 | 128);
        }
        return b2;
      };
      goog.crypt.utf8ByteArrayToString = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; c2 < a2.length; ) {
          var e2 = a2[c2++];
          if (128 > e2)
            b2[d2++] = String.fromCharCode(e2);
          else if (191 < e2 && 224 > e2) {
            var f2 = a2[c2++];
            b2[d2++] = String.fromCharCode((e2 & 31) << 6 | f2 & 63);
          } else if (239 < e2 && 365 > e2) {
            f2 = a2[c2++];
            var g = a2[c2++], h = a2[c2++];
            e2 = ((e2 & 7) << 18 | (f2 & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
            b2[d2++] = String.fromCharCode(55296 + (e2 >> 10));
            b2[d2++] = String.fromCharCode(56320 + (e2 & 1023));
          } else
            f2 = a2[c2++], g = a2[c2++], b2[d2++] = String.fromCharCode((e2 & 15) << 12 | (f2 & 63) << 6 | g & 63);
        }
        return b2.join("");
      };
      goog.crypt.xorByteArray = function(a2, b2) {
        goog.asserts.assert(a2.length == b2.length, "XOR array lengths must match");
        for (var c2 = [], d2 = 0; d2 < a2.length; d2++)
          c2.push(a2[d2] ^ b2[d2]);
        return c2;
      };
      goog.dom.asserts = {};
      goog.dom.asserts.assertIsLocation = function(a2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var b2 = goog.dom.asserts.getWindow_(a2);
          b2 && (!a2 || !(a2 instanceof b2.Location) && a2 instanceof b2.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a2));
        }
        return a2;
      };
      goog.dom.asserts.assertIsElementType_ = function(a2, b2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c2 = goog.dom.asserts.getWindow_(a2);
          c2 && typeof c2[b2] != "undefined" && (a2 && (a2 instanceof c2[b2] || !(a2 instanceof c2.Location || a2 instanceof c2.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, goog.dom.asserts.debugStringForType_(a2)));
        }
        return a2;
      };
      goog.dom.asserts.assertIsHTMLAnchorElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLAnchorElement");
      };
      goog.dom.asserts.assertIsHTMLButtonElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLButtonElement");
      };
      goog.dom.asserts.assertIsHTMLLinkElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLLinkElement");
      };
      goog.dom.asserts.assertIsHTMLImageElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLImageElement");
      };
      goog.dom.asserts.assertIsHTMLAudioElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLAudioElement");
      };
      goog.dom.asserts.assertIsHTMLVideoElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLVideoElement");
      };
      goog.dom.asserts.assertIsHTMLInputElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLInputElement");
      };
      goog.dom.asserts.assertIsHTMLTextAreaElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLTextAreaElement");
      };
      goog.dom.asserts.assertIsHTMLCanvasElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLCanvasElement");
      };
      goog.dom.asserts.assertIsHTMLEmbedElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLEmbedElement");
      };
      goog.dom.asserts.assertIsHTMLFormElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLFormElement");
      };
      goog.dom.asserts.assertIsHTMLFrameElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLFrameElement");
      };
      goog.dom.asserts.assertIsHTMLIFrameElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLIFrameElement");
      };
      goog.dom.asserts.assertIsHTMLObjectElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLObjectElement");
      };
      goog.dom.asserts.assertIsHTMLScriptElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLScriptElement");
      };
      goog.dom.asserts.debugStringForType_ = function(a2) {
        if (goog.isObject(a2))
          try {
            return a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2);
          } catch (b2) {
            return "<object could not be stringified>";
          }
        else
          return a2 === void 0 ? "undefined" : a2 === null ? "null" : typeof a2;
      };
      goog.dom.asserts.getWindow_ = function(a2) {
        try {
          var b2 = a2 && a2.ownerDocument, c2 = b2 && (b2.defaultView || b2.parentWindow);
          c2 = c2 || goog.global;
          if (c2.Element && c2.Location)
            return c2;
        } catch (d2) {
        }
        return null;
      };
      goog.functions = {};
      goog.functions.constant = function(a2) {
        return function() {
          return a2;
        };
      };
      goog.functions.FALSE = function() {
        return false;
      };
      goog.functions.TRUE = function() {
        return true;
      };
      goog.functions.NULL = function() {
        return null;
      };
      goog.functions.identity = function(a2, b2) {
        return a2;
      };
      goog.functions.error = function(a2) {
        return function() {
          throw Error(a2);
        };
      };
      goog.functions.fail = function(a2) {
        return function() {
          throw a2;
        };
      };
      goog.functions.lock = function(a2, b2) {
        b2 = b2 || 0;
        return function() {
          return a2.apply(this, Array.prototype.slice.call(arguments, 0, b2));
        };
      };
      goog.functions.nth = function(a2) {
        return function() {
          return arguments[a2];
        };
      };
      goog.functions.partialRight = function(a2, b2) {
        var c2 = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b3 = Array.prototype.slice.call(arguments);
          b3.push.apply(b3, c2);
          return a2.apply(this, b3);
        };
      };
      goog.functions.withReturnValue = function(a2, b2) {
        return goog.functions.sequence(a2, goog.functions.constant(b2));
      };
      goog.functions.equalTo = function(a2, b2) {
        return function(c2) {
          return b2 ? a2 == c2 : a2 === c2;
        };
      };
      goog.functions.compose = function(a2, b2) {
        var c2 = arguments, d2 = c2.length;
        return function() {
          var a3;
          d2 && (a3 = c2[d2 - 1].apply(this, arguments));
          for (var b3 = d2 - 2; 0 <= b3; b3--)
            a3 = c2[b3].call(this, a3);
          return a3;
        };
      };
      goog.functions.sequence = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3, e2 = 0; e2 < c2; e2++)
            a3 = b2[e2].apply(this, arguments);
          return a3;
        };
      };
      goog.functions.and = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3 = 0; a3 < c2; a3++)
            if (!b2[a3].apply(this, arguments))
              return false;
          return true;
        };
      };
      goog.functions.or = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3 = 0; a3 < c2; a3++)
            if (b2[a3].apply(this, arguments))
              return true;
          return false;
        };
      };
      goog.functions.not = function(a2) {
        return function() {
          return !a2.apply(this, arguments);
        };
      };
      goog.functions.create = function(a2, b2) {
        var c2 = function() {
        };
        c2.prototype = a2.prototype;
        c2 = new c2();
        a2.apply(c2, Array.prototype.slice.call(arguments, 1));
        return c2;
      };
      goog.functions.CACHE_RETURN_VALUE = true;
      goog.functions.cacheReturnValue = function(a2) {
        var b2 = false, c2;
        return function() {
          if (!goog.functions.CACHE_RETURN_VALUE)
            return a2();
          b2 || (c2 = a2(), b2 = true);
          return c2;
        };
      };
      goog.functions.once = function(a2) {
        var b2 = a2;
        return function() {
          if (b2) {
            var a3 = b2;
            b2 = null;
            a3();
          }
        };
      };
      goog.functions.debounce = function(a2, b2, c2) {
        var d2 = 0;
        return function(e2) {
          goog.global.clearTimeout(d2);
          var f2 = arguments;
          d2 = goog.global.setTimeout(function() {
            a2.apply(c2, f2);
          }, b2);
        };
      };
      goog.functions.throttle = function(a2, b2, c2) {
        var d2 = 0, e2 = false, f2 = [], g = function() {
          d2 = 0;
          e2 && (e2 = false, h());
        }, h = function() {
          d2 = goog.global.setTimeout(g, b2);
          a2.apply(c2, f2);
        };
        return function(a3) {
          f2 = arguments;
          d2 ? e2 = true : h();
        };
      };
      goog.functions.rateLimit = function(a2, b2, c2) {
        var d2 = 0, e2 = function() {
          d2 = 0;
        };
        return function(f2) {
          d2 || (d2 = goog.global.setTimeout(e2, b2), a2.apply(c2, arguments));
        };
      };
      goog.dom.HtmlElement = function() {
      };
      goog.dom.TagName = function(a2) {
        this.tagName_ = a2;
      };
      goog.dom.TagName.prototype.toString = function() {
        return this.tagName_;
      };
      goog.dom.TagName.A = new goog.dom.TagName("A");
      goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
      goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
      goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
      goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
      goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
      goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
      goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
      goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
      goog.dom.TagName.B = new goog.dom.TagName("B");
      goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
      goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
      goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
      goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
      goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
      goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
      goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
      goog.dom.TagName.BR = new goog.dom.TagName("BR");
      goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
      goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
      goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
      goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
      goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
      goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
      goog.dom.TagName.COL = new goog.dom.TagName("COL");
      goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
      goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
      goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
      goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
      goog.dom.TagName.DD = new goog.dom.TagName("DD");
      goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
      goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
      goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
      goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
      goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
      goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
      goog.dom.TagName.DL = new goog.dom.TagName("DL");
      goog.dom.TagName.DT = new goog.dom.TagName("DT");
      goog.dom.TagName.EM = new goog.dom.TagName("EM");
      goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
      goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
      goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
      goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
      goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
      goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
      goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
      goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
      goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
      goog.dom.TagName.H1 = new goog.dom.TagName("H1");
      goog.dom.TagName.H2 = new goog.dom.TagName("H2");
      goog.dom.TagName.H3 = new goog.dom.TagName("H3");
      goog.dom.TagName.H4 = new goog.dom.TagName("H4");
      goog.dom.TagName.H5 = new goog.dom.TagName("H5");
      goog.dom.TagName.H6 = new goog.dom.TagName("H6");
      goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
      goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
      goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
      goog.dom.TagName.HR = new goog.dom.TagName("HR");
      goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
      goog.dom.TagName.I = new goog.dom.TagName("I");
      goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
      goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
      goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
      goog.dom.TagName.INS = new goog.dom.TagName("INS");
      goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
      goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
      goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
      goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
      goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
      goog.dom.TagName.LI = new goog.dom.TagName("LI");
      goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
      goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
      goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
      goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
      goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
      goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
      goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
      goog.dom.TagName.META = new goog.dom.TagName("META");
      goog.dom.TagName.METER = new goog.dom.TagName("METER");
      goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
      goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
      goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
      goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
      goog.dom.TagName.OL = new goog.dom.TagName("OL");
      goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
      goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
      goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
      goog.dom.TagName.P = new goog.dom.TagName("P");
      goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
      goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
      goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
      goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
      goog.dom.TagName.Q = new goog.dom.TagName("Q");
      goog.dom.TagName.RP = new goog.dom.TagName("RP");
      goog.dom.TagName.RT = new goog.dom.TagName("RT");
      goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
      goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
      goog.dom.TagName.S = new goog.dom.TagName("S");
      goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
      goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
      goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
      goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
      goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
      goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
      goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
      goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
      goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
      goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
      goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
      goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
      goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
      goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
      goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
      goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
      goog.dom.TagName.TD = new goog.dom.TagName("TD");
      goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
      goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
      goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
      goog.dom.TagName.TH = new goog.dom.TagName("TH");
      goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
      goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
      goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
      goog.dom.TagName.TR = new goog.dom.TagName("TR");
      goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
      goog.dom.TagName.TT = new goog.dom.TagName("TT");
      goog.dom.TagName.U = new goog.dom.TagName("U");
      goog.dom.TagName.UL = new goog.dom.TagName("UL");
      goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
      goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
      goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
      goog.dom.tags = {};
      goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      goog.dom.tags.isVoidTag = function(a2) {
        return goog.dom.tags.VOID_TAGS_[a2] === true;
      };
      goog.html = {};
      goog.html.trustedtypes = {};
      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
      goog.string = {};
      goog.string.TypedString = function() {
      };
      goog.string.Const = function(a2, b2) {
        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a2 === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
        this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
      };
      goog.string.Const.prototype.implementsGoogStringTypedString = true;
      goog.string.Const.prototype.getTypedStringValue = function() {
        return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      };
      goog.string.Const.prototype.toString = function() {
        return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
      };
      goog.string.Const.unwrap = function(a2) {
        if (a2 instanceof goog.string.Const && a2.constructor === goog.string.Const && a2.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
          return a2.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
        goog.asserts.fail("expected object of type Const, got '" + a2 + "'");
        return "type_error:Const";
      };
      goog.string.Const.from = function(a2) {
        return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a2);
      };
      goog.string.Const.TYPE_MARKER_ = {};
      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
      goog.string.Const.EMPTY = goog.string.Const.from("");
      goog.html.SafeScript = function() {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
        this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeScript.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        return a2.length === 0 ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeScript.fromConstantAndArgs = function(a2, b2) {
        for (var c2 = [], d2 = 1; d2 < arguments.length; d2++)
          c2.push(goog.html.SafeScript.stringify_(arguments[d2]));
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a2) + ")(" + c2.join(", ") + ");");
      };
      goog.html.SafeScript.fromJson = function(a2) {
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a2));
      };
      goog.html.SafeScript.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
        return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
      });
      goog.html.SafeScript.unwrap = function(a2) {
        return goog.html.SafeScript.unwrapTrustedScript(a2).toString();
      };
      goog.html.SafeScript.unwrapTrustedScript = function(a2) {
        if (a2 instanceof goog.html.SafeScript && a2.constructor === goog.html.SafeScript && a2.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeScriptWrappedValue_;
        goog.asserts.fail("expected object of type SafeScript, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeScript";
      };
      goog.html.SafeScript.stringify_ = function(a2) {
        return JSON.stringify(a2).replace(/</g, "\\x3c");
      };
      goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a2) : a2;
        return this;
      };
      goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
      goog.fs = {};
      goog.fs.url = {};
      goog.fs.url.createObjectUrl = function(a2) {
        return goog.fs.url.getUrlObject_().createObjectURL(a2);
      };
      goog.fs.url.revokeObjectUrl = function(a2) {
        goog.fs.url.getUrlObject_().revokeObjectURL(a2);
      };
      goog.fs.url.getUrlObject_ = function() {
        var a2 = goog.fs.url.findUrlObject_();
        if (a2 != null)
          return a2;
        throw Error("This browser doesn't seem to support blob URLs");
      };
      goog.fs.url.findUrlObject_ = function() {
        return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null;
      };
      goog.fs.url.browserSupportsObjectUrls = function() {
        return goog.fs.url.findUrlObject_() != null;
      };
      goog.i18n = {};
      goog.i18n.bidi = {};
      goog.i18n.bidi.FORCE_RTL = false;
      goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == "ar" || goog.LOCALE.substring(0, 2).toLowerCase() == "fa" || goog.LOCALE.substring(0, 2).toLowerCase() == "he" || goog.LOCALE.substring(0, 2).toLowerCase() == "iw" || goog.LOCALE.substring(0, 2).toLowerCase() == "ps" || goog.LOCALE.substring(0, 2).toLowerCase() == "sd" || goog.LOCALE.substring(0, 2).toLowerCase() == "ug" || goog.LOCALE.substring(0, 2).toLowerCase() == "ur" || goog.LOCALE.substring(0, 2).toLowerCase() == "yi") && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") || 3 <= goog.LOCALE.length && goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") || 7 <= goog.LOCALE.length && (goog.LOCALE.substring(2, 3) == "-" || goog.LOCALE.substring(2, 3) == "_") && (goog.LOCALE.substring(3, 7).toLowerCase() == "adlm" || goog.LOCALE.substring(3, 7).toLowerCase() == "arab" || goog.LOCALE.substring(3, 7).toLowerCase() == "hebr" || goog.LOCALE.substring(3, 7).toLowerCase() == "nkoo" || goog.LOCALE.substring(3, 7).toLowerCase() == "rohg" || goog.LOCALE.substring(3, 7).toLowerCase() == "thaa") || 8 <= goog.LOCALE.length && (goog.LOCALE.substring(3, 4) == "-" || goog.LOCALE.substring(3, 4) == "_") && (goog.LOCALE.substring(4, 8).toLowerCase() == "adlm" || goog.LOCALE.substring(4, 8).toLowerCase() == "arab" || goog.LOCALE.substring(4, 8).toLowerCase() == "hebr" || goog.LOCALE.substring(4, 8).toLowerCase() == "nkoo" || goog.LOCALE.substring(4, 8).toLowerCase() == "rohg" || goog.LOCALE.substring(4, 8).toLowerCase() == "thaa");
      goog.i18n.bidi.Format = { LRE: "\u202A", RLE: "\u202B", PDF: "\u202C", LRM: "\u200E", RLM: "\u200F" };
      goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
      goog.i18n.bidi.RIGHT = "right";
      goog.i18n.bidi.LEFT = "left";
      goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
      goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
      goog.i18n.bidi.toDir = function(a2, b2) {
        return typeof a2 == "number" ? 0 < a2 ? goog.i18n.bidi.Dir.LTR : 0 > a2 ? goog.i18n.bidi.Dir.RTL : b2 ? null : goog.i18n.bidi.Dir.NEUTRAL : a2 == null ? null : a2 ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.ltrChars_ = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0900-\u1FFF\u200E\u2C00-\uD801\uD804-\uD839\uD83C-\uDBFF\uF900-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
      goog.i18n.bidi.rtlChars_ = "\u0591-\u06EF\u06FA-\u08FF\u200F\uD802-\uD803\uD83A-\uD83B\uFB1D-\uFDFF\uFE70-\uFEFC";
      goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
      goog.i18n.bidi.stripHtmlIfNeeded_ = function(a2, b2) {
        return b2 ? a2.replace(goog.i18n.bidi.htmlSkipReg_, "") : a2;
      };
      goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.hasAnyRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
      goog.i18n.bidi.hasAnyLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.isRtlChar = function(a2) {
        return goog.i18n.bidi.rtlRe_.test(a2);
      };
      goog.i18n.bidi.isLtrChar = function(a2) {
        return goog.i18n.bidi.ltrRe_.test(a2);
      };
      goog.i18n.bidi.isNeutralChar = function(a2) {
        return !goog.i18n.bidi.isLtrChar(a2) && !goog.i18n.bidi.isRtlChar(a2);
      };
      goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.startsWithRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
      goog.i18n.bidi.startsWithLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
      goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
      goog.i18n.bidi.isNeutralText = function(a2, b2) {
        a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2);
        return goog.i18n.bidi.isRequiredLtrRe_.test(a2) || !goog.i18n.bidi.hasAnyLtr(a2) && !goog.i18n.bidi.hasAnyRtl(a2);
      };
      goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
      goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
      goog.i18n.bidi.endsWithLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
      goog.i18n.bidi.endsWithRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
      goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      goog.i18n.bidi.isRtlLanguage = function(a2) {
        return goog.i18n.bidi.rtlLocalesRe_.test(a2);
      };
      goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
      goog.i18n.bidi.guardBracketInText = function(a2, b2) {
        b2 = (b2 === void 0 ? goog.i18n.bidi.hasAnyRtl(a2) : b2) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
        return a2.replace(goog.i18n.bidi.bracketGuardTextRe_, b2 + "$&" + b2);
      };
      goog.i18n.bidi.enforceRtlInHtml = function(a2) {
        return a2.charAt(0) == "<" ? a2.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a2 + "</span>";
      };
      goog.i18n.bidi.enforceRtlInText = function(a2) {
        return goog.i18n.bidi.Format.RLE + a2 + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.enforceLtrInHtml = function(a2) {
        return a2.charAt(0) == "<" ? a2.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a2 + "</span>";
      };
      goog.i18n.bidi.enforceLtrInText = function(a2) {
        return goog.i18n.bidi.Format.LRE + a2 + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
      goog.i18n.bidi.leftRe_ = /left/gi;
      goog.i18n.bidi.rightRe_ = /right/gi;
      goog.i18n.bidi.tempRe_ = /%%%%/g;
      goog.i18n.bidi.mirrorCSS = function(a2) {
        return a2.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
      };
      goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
      goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
      goog.i18n.bidi.normalizeHebrewQuote = function(a2) {
        return a2.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05F4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05F3");
      };
      goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
      goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
      goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
      goog.i18n.bidi.estimateDirection = function(a2, b2) {
        var c2 = 0, d2 = 0, e2 = false;
        a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2).split(goog.i18n.bidi.wordSeparatorRe_);
        for (b2 = 0; b2 < a2.length; b2++) {
          var f2 = a2[b2];
          goog.i18n.bidi.startsWithRtl(f2) ? (c2++, d2++) : goog.i18n.bidi.isRequiredLtrRe_.test(f2) ? e2 = true : goog.i18n.bidi.hasAnyLtr(f2) ? d2++ : goog.i18n.bidi.hasNumeralsRe_.test(f2) && (e2 = true);
        }
        return d2 == 0 ? e2 ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c2 / d2 > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.detectRtlDirectionality = function(a2, b2) {
        return goog.i18n.bidi.estimateDirection(a2, b2) == goog.i18n.bidi.Dir.RTL;
      };
      goog.i18n.bidi.setElementDirAndAlign = function(a2, b2) {
        a2 && (b2 = goog.i18n.bidi.toDir(b2)) && (a2.style.textAlign = b2 == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a2.dir = b2 == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
      };
      goog.i18n.bidi.setElementDirByTextDirectionality = function(a2, b2) {
        switch (goog.i18n.bidi.estimateDirection(b2)) {
          case goog.i18n.bidi.Dir.LTR:
            a2.dir = "ltr";
            break;
          case goog.i18n.bidi.Dir.RTL:
            a2.dir = "rtl";
            break;
          default:
            a2.removeAttribute("dir");
        }
      };
      goog.i18n.bidi.DirectionalString = function() {
      };
      goog.html.TrustedResourceUrl = function() {
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
        this.trustedURL_ = null;
        this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.TrustedResourceUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a2, b2) {
        var c2 = goog.html.TrustedResourceUrl.unwrap(this);
        c2 = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c2);
        var d2 = c2[3] || "";
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c2[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c2[2] || "", a2) + goog.html.TrustedResourceUrl.stringifyParams_("#", d2, b2));
      };
      goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
      });
      goog.html.TrustedResourceUrl.unwrap = function(a2) {
        return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a2).toString();
      };
      goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a2) {
        if (a2 instanceof goog.html.TrustedResourceUrl && a2.constructor === goog.html.TrustedResourceUrl && a2.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
        goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:TrustedResourceUrl";
      };
      goog.html.TrustedResourceUrl.unwrapTrustedURL = function(a2) {
        return a2.trustedURL_ ? a2.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(a2);
      };
      goog.html.TrustedResourceUrl.format = function(a2, b2) {
        var c2 = goog.string.Const.unwrap(a2);
        if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c2))
          throw Error("Invalid TrustedResourceUrl format: " + c2);
        a2 = c2.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a3, e2) {
          if (!Object.prototype.hasOwnProperty.call(b2, e2))
            throw Error('Found marker, "' + e2 + '", in format string, "' + c2 + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
          a3 = b2[e2];
          return a3 instanceof goog.string.Const ? goog.string.Const.unwrap(a3) : encodeURIComponent(String(a3));
        });
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
      goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
      goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
      goog.html.TrustedResourceUrl.formatWithParams = function(a2, b2, c2, d2) {
        return goog.html.TrustedResourceUrl.format(a2, b2).cloneWithParams(c2, d2);
      };
      goog.html.TrustedResourceUrl.fromConstant = function(a2) {
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
      };
      goog.html.TrustedResourceUrl.fromConstants = function(a2) {
        for (var b2 = "", c2 = 0; c2 < a2.length; c2++)
          b2 += goog.string.Const.unwrap(a2[c2]);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
        var b2 = new goog.html.TrustedResourceUrl();
        b2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a2) : a2;
        goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY && (b2.trustedURL_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a2));
        return b2;
      };
      goog.html.TrustedResourceUrl.stringifyParams_ = function(a2, b2, c2) {
        if (c2 == null)
          return b2;
        if (goog.isString(c2))
          return c2 ? a2 + encodeURIComponent(c2) : "";
        for (var d2 in c2) {
          var e2 = c2[d2];
          e2 = goog.isArray(e2) ? e2 : [e2];
          for (var f2 = 0; f2 < e2.length; f2++) {
            var g = e2[f2];
            g != null && (b2 || (b2 = a2), b2 += (b2.length > a2.length ? "&" : "") + encodeURIComponent(d2) + "=" + encodeURIComponent(String(g)));
          }
        }
        return b2;
      };
      goog.string.internal = {};
      goog.string.internal.startsWith = function(a2, b2) {
        return a2.lastIndexOf(b2, 0) == 0;
      };
      goog.string.internal.endsWith = function(a2, b2) {
        var c2 = a2.length - b2.length;
        return 0 <= c2 && a2.indexOf(b2, c2) == c2;
      };
      goog.string.internal.caseInsensitiveStartsWith = function(a2, b2) {
        return goog.string.internal.caseInsensitiveCompare(b2, a2.substr(0, b2.length)) == 0;
      };
      goog.string.internal.caseInsensitiveEndsWith = function(a2, b2) {
        return goog.string.internal.caseInsensitiveCompare(b2, a2.substr(a2.length - b2.length, b2.length)) == 0;
      };
      goog.string.internal.caseInsensitiveEquals = function(a2, b2) {
        return a2.toLowerCase() == b2.toLowerCase();
      };
      goog.string.internal.isEmptyOrWhitespace = function(a2) {
        return /^[\s\xa0]*$/.test(a2);
      };
      goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a2) {
        return a2.trim();
      } : function(a2) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
      };
      goog.string.internal.caseInsensitiveCompare = function(a2, b2) {
        a2 = String(a2).toLowerCase();
        b2 = String(b2).toLowerCase();
        return a2 < b2 ? -1 : a2 == b2 ? 0 : 1;
      };
      goog.string.internal.newLineToBr = function(a2, b2) {
        return a2.replace(/(\r\n|\r|\n)/g, b2 ? "<br />" : "<br>");
      };
      goog.string.internal.htmlEscape = function(a2, b2) {
        if (b2)
          a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
        else {
          if (!goog.string.internal.ALL_RE_.test(a2))
            return a2;
          a2.indexOf("&") != -1 && (a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;"));
          a2.indexOf("<") != -1 && (a2 = a2.replace(goog.string.internal.LT_RE_, "&lt;"));
          a2.indexOf(">") != -1 && (a2 = a2.replace(goog.string.internal.GT_RE_, "&gt;"));
          a2.indexOf('"') != -1 && (a2 = a2.replace(goog.string.internal.QUOT_RE_, "&quot;"));
          a2.indexOf("'") != -1 && (a2 = a2.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
          a2.indexOf("\0") != -1 && (a2 = a2.replace(goog.string.internal.NULL_RE_, "&#0;"));
        }
        return a2;
      };
      goog.string.internal.AMP_RE_ = /&/g;
      goog.string.internal.LT_RE_ = /</g;
      goog.string.internal.GT_RE_ = />/g;
      goog.string.internal.QUOT_RE_ = /"/g;
      goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
      goog.string.internal.NULL_RE_ = /\x00/g;
      goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
      goog.string.internal.whitespaceEscape = function(a2, b2) {
        return goog.string.internal.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
      };
      goog.string.internal.contains = function(a2, b2) {
        return a2.indexOf(b2) != -1;
      };
      goog.string.internal.caseInsensitiveContains = function(a2, b2) {
        return goog.string.internal.contains(a2.toLowerCase(), b2.toLowerCase());
      };
      goog.string.internal.compareVersions = function(a2, b2) {
        var c2 = 0;
        a2 = goog.string.internal.trim(String(a2)).split(".");
        b2 = goog.string.internal.trim(String(b2)).split(".");
        for (var d2 = Math.max(a2.length, b2.length), e2 = 0; c2 == 0 && e2 < d2; e2++) {
          var f2 = a2[e2] || "", g = b2[e2] || "";
          do {
            f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (f2[0].length == 0 && g[0].length == 0)
              break;
            c2 = f2[1].length == 0 ? 0 : parseInt(f2[1], 10);
            var h = g[1].length == 0 ? 0 : parseInt(g[1], 10);
            c2 = goog.string.internal.compareElements_(c2, h) || goog.string.internal.compareElements_(f2[2].length == 0, g[2].length == 0) || goog.string.internal.compareElements_(f2[2], g[2]);
            f2 = f2[3];
            g = g[3];
          } while (c2 == 0);
        }
        return c2;
      };
      goog.string.internal.compareElements_ = function(a2, b2) {
        return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
      };
      goog.html.SafeUrl = function() {
        this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = "";
        this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
      goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
      };
      goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
        return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
      });
      goog.html.SafeUrl.unwrap = function(a2) {
        return goog.html.SafeUrl.unwrapTrustedURL(a2).toString();
      };
      goog.html.SafeUrl.unwrapTrustedURL = function(a2) {
        if (a2 instanceof goog.html.SafeUrl && a2.constructor === goog.html.SafeUrl && a2.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeUrlWrappedValue_;
        goog.asserts.fail("expected object of type SafeUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeUrl";
      };
      goog.html.SafeUrl.fromConstant = function(a2) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
      };
      goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
      goog.html.SafeUrl.isSafeMimeType = function(a2) {
        return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2);
      };
      goog.html.SafeUrl.fromBlob = function(a2) {
        a2 = goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2.type) ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
      goog.html.SafeUrl.fromDataUrl = function(a2) {
        a2 = a2.replace(/(%0A|%0D)/g, "");
        var b2 = a2.match(goog.html.DATA_URL_PATTERN_);
        b2 = b2 && goog.html.SAFE_MIME_TYPE_PATTERN_.test(b2[1]);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2 ? a2 : goog.html.SafeUrl.INNOCUOUS_STRING);
      };
      goog.html.SafeUrl.fromTelUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "tel:") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
      goog.html.SafeUrl.fromSipUrl = function(a2) {
        goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a2)) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromFacebookMessengerUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "fb-messenger://share") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromWhatsAppUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "whatsapp://send") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromSmsUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a2) {
        var b2 = a2.indexOf("#");
        0 < b2 && (a2 = a2.substring(0, b2));
        b2 = a2.match(/[?&]body=/gi);
        if (!b2)
          return true;
        if (1 < b2.length)
          return false;
        a2 = a2.match(/[?&]body=([^&]*)/)[1];
        if (!a2)
          return true;
        try {
          decodeURIComponent(a2);
        } catch (c2) {
          return false;
        }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a2);
      };
      goog.html.SafeUrl.fromSshUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "ssh://") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a2, b2, c2) {
        (a2 = a2.exec(b2)) ? (a2 = a2[1], (c2 instanceof goog.string.Const ? [goog.string.Const.unwrap(c2)] : c2.map(function(a3) {
          return goog.string.Const.unwrap(a3);
        })).indexOf(a2) == -1 && (b2 = goog.html.SafeUrl.INNOCUOUS_STRING)) : b2 = goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.SafeUrl.fromTrustedResourceUrl = function(a2) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a2));
      };
      goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
      goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
      goog.html.SafeUrl.sanitize = function(a2) {
        if (a2 instanceof goog.html.SafeUrl)
          return a2;
        a2 = typeof a2 == "object" && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        goog.html.SAFE_URL_PATTERN_.test(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.sanitizeAssertUnchanged = function(a2, b2) {
        if (a2 instanceof goog.html.SafeUrl)
          return a2;
        a2 = typeof a2 == "object" && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        if (b2 && /^data:/i.test(a2) && (b2 = goog.html.SafeUrl.fromDataUrl(a2), b2.getTypedStringValue() == a2))
          return b2;
        goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
        var b2 = new goog.html.SafeUrl();
        b2.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a2) : a2;
        return b2;
      };
      goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
      goog.html.SafeStyle = function() {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
        this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyle.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        if (a2.length === 0)
          return goog.html.SafeStyle.EMPTY;
        goog.asserts.assert(goog.string.internal.endsWith(a2, ";"), "Last character of style string is not ';': " + a2);
        goog.asserts.assert(goog.string.internal.contains(a2, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a2);
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyle.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
        return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
      });
      goog.html.SafeStyle.unwrap = function(a2) {
        if (a2 instanceof goog.html.SafeStyle && a2.constructor === goog.html.SafeStyle && a2.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeStyleWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyle, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeStyle";
      };
      goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a2;
        return this;
      };
      goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
      goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
      goog.html.SafeStyle.create = function(a2) {
        var b2 = "", c2;
        for (c2 in a2) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c2))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c2);
          var d2 = a2[c2];
          d2 != null && (d2 = goog.isArray(d2) ? goog.array.map(d2, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d2), b2 += c2 + ":" + d2 + ";");
        }
        return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeStyle.sanitizePropertyValue_ = function(a2) {
        if (a2 instanceof goog.html.SafeUrl)
          return 'url("' + goog.html.SafeUrl.unwrap(a2).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a2 = a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a2));
        if (/[{;}]/.test(a2))
          throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a2]);
        return a2;
      };
      goog.html.SafeStyle.sanitizePropertyValueString_ = function(a2) {
        var b2 = a2.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
        if (goog.html.SafeStyle.VALUE_RE_.test(b2)) {
          if (goog.html.SafeStyle.COMMENT_RE_.test(a2))
            return goog.asserts.fail("String value disallows comments, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedQuotes_(a2))
            return goog.asserts.fail("String value requires balanced quotes, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a2))
            return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        } else
          return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        return goog.html.SafeStyle.sanitizeUrl_(a2);
      };
      goog.html.SafeStyle.hasBalancedQuotes_ = function(a2) {
        for (var b2 = true, c2 = true, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charAt(d2);
          e2 == "'" && c2 ? b2 = !b2 : e2 == '"' && b2 && (c2 = !c2);
        }
        return b2 && c2;
      };
      goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a2) {
        for (var b2 = true, c2 = /^[-_a-zA-Z0-9]$/, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charAt(d2);
          if (e2 == "]") {
            if (b2)
              return false;
            b2 = true;
          } else if (e2 == "[") {
            if (!b2)
              return false;
            b2 = false;
          } else if (!b2 && !c2.test(e2))
            return false;
        }
        return b2;
      };
      goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
      goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
      goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
      goog.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
      goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
      goog.html.SafeStyle.sanitizeUrl_ = function(a2) {
        return a2.replace(goog.html.SafeStyle.URL_RE_, function(a3, c2, d2, e2) {
          var b2 = "";
          d2 = d2.replace(/^(['"])(.*)\1$/, function(a4, c3, d3) {
            b2 = c3;
            return d3;
          });
          a3 = goog.html.SafeUrl.sanitize(d2).getTypedStringValue();
          return c2 + b2 + a3 + b2 + e2;
        });
      };
      goog.html.SafeStyle.concat = function(a2) {
        var b2 = "", c2 = function(a3) {
          goog.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyle.unwrap(a3);
        };
        goog.array.forEach(arguments, c2);
        return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeStyleSheet = function() {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
        this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyleSheet.createRule = function(a2, b2) {
        if (goog.string.internal.contains(a2, "<"))
          throw Error("Selector does not allow '<', got: " + a2);
        var c2 = a2.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c2))
          throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a2);
        if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c2))
          throw Error("() and [] in selector must be balanced, got: " + a2);
        b2 instanceof goog.html.SafeStyle || (b2 = goog.html.SafeStyle.create(b2));
        a2 = a2 + "{" + goog.html.SafeStyle.unwrap(b2).replace(/</g, "\\3C ") + "}";
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a2) {
        for (var b2 = { "(": ")", "[": "]" }, c2 = [], d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2[d2];
          if (b2[e2])
            c2.push(b2[e2]);
          else if (goog.object.contains(b2, e2) && c2.pop() != e2)
            return false;
        }
        return c2.length == 0;
      };
      goog.html.SafeStyleSheet.concat = function(a2) {
        var b2 = "", c2 = function(a3) {
          goog.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyleSheet.unwrap(a3);
        };
        goog.array.forEach(arguments, c2);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.SafeStyleSheet.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        if (a2.length === 0)
          return goog.html.SafeStyleSheet.EMPTY;
        goog.asserts.assert(!goog.string.internal.contains(a2, "<"), "Forbidden '<' character in style sheet string: " + a2);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
        return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
      });
      goog.html.SafeStyleSheet.unwrap = function(a2) {
        if (a2 instanceof goog.html.SafeStyleSheet && a2.constructor === goog.html.SafeStyleSheet && a2.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeStyleSheet";
      };
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a2;
        return this;
      };
      goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
      goog.labs = {};
      goog.labs.userAgent = {};
      goog.labs.userAgent.util = {};
      goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
        var a2 = goog.labs.userAgent.util.getNavigator_();
        return a2 && (a2 = a2.userAgent) ? a2 : "";
      };
      goog.labs.userAgent.util.getNavigator_ = function() {
        return goog.global.navigator;
      };
      goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
      goog.labs.userAgent.util.setUserAgent = function(a2) {
        goog.labs.userAgent.util.userAgent_ = a2 || goog.labs.userAgent.util.getNativeUserAgentString_();
      };
      goog.labs.userAgent.util.getUserAgent = function() {
        return goog.labs.userAgent.util.userAgent_;
      };
      goog.labs.userAgent.util.matchUserAgent = function(a2) {
        var b2 = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.contains(b2, a2);
      };
      goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a2) {
        var b2 = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.caseInsensitiveContains(b2, a2);
      };
      goog.labs.userAgent.util.extractVersionTuples = function(a2) {
        for (var b2 = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c2 = [], d2; d2 = b2.exec(a2); )
          c2.push([d2[1], d2[2], d2[3] || void 0]);
        return c2;
      };
      goog.labs.userAgent.browser = {};
      goog.labs.userAgent.browser.matchOpera_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Opera");
      };
      goog.labs.userAgent.browser.matchIE_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edg/");
      };
      goog.labs.userAgent.browser.matchOperaChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("OPR");
      };
      goog.labs.userAgent.browser.matchFirefox_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
      };
      goog.labs.userAgent.browser.matchSafari_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
      };
      goog.labs.userAgent.browser.matchCoast_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Coast");
      };
      goog.labs.userAgent.browser.matchIosWebview_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
      };
      goog.labs.userAgent.browser.matchChrome_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
      };
      goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
      };
      goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
      goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
      goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
      goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
      goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
      goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
      goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
      goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
      goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
      goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
      goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
      goog.labs.userAgent.browser.isSilk = function() {
        return goog.labs.userAgent.util.matchUserAgent("Silk");
      };
      goog.labs.userAgent.browser.getVersion = function() {
        function a2(a3) {
          a3 = goog.array.find(a3, d2);
          return c2[a3] || "";
        }
        var b2 = goog.labs.userAgent.util.getUserAgent();
        if (goog.labs.userAgent.browser.isIE())
          return goog.labs.userAgent.browser.getIEVersion_(b2);
        b2 = goog.labs.userAgent.util.extractVersionTuples(b2);
        var c2 = {};
        goog.array.forEach(b2, function(a3) {
          c2[a3[0]] = a3[1];
        });
        var d2 = goog.partial(goog.object.containsKey, c2);
        return goog.labs.userAgent.browser.isOpera() ? a2(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a2(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a2(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a2(["Chrome", "CriOS"]) : (b2 = b2[2]) && b2[1] || "";
      };
      goog.labs.userAgent.browser.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a2);
      };
      goog.labs.userAgent.browser.getIEVersion_ = function(a2) {
        var b2 = /rv: *([\d\.]*)/.exec(a2);
        if (b2 && b2[1])
          return b2[1];
        b2 = "";
        var c2 = /MSIE +([\d\.]+)/.exec(a2);
        if (c2 && c2[1])
          if (a2 = /Trident\/(\d.\d)/.exec(a2), c2[1] == "7.0")
            if (a2 && a2[1])
              switch (a2[1]) {
                case "4.0":
                  b2 = "8.0";
                  break;
                case "5.0":
                  b2 = "9.0";
                  break;
                case "6.0":
                  b2 = "10.0";
                  break;
                case "7.0":
                  b2 = "11.0";
              }
            else
              b2 = "7.0";
          else
            b2 = c2[1];
        return b2;
      };
      goog.html.SafeHtml = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
        this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
        this.dir_ = null;
      };
      goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeHtml.prototype.getDirection = function() {
        return this.dir_;
      };
      goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeHtml.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
        return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
      });
      goog.html.SafeHtml.unwrap = function(a2) {
        return goog.html.SafeHtml.unwrapTrustedHTML(a2).toString();
      };
      goog.html.SafeHtml.unwrapTrustedHTML = function(a2) {
        if (a2 instanceof goog.html.SafeHtml && a2.constructor === goog.html.SafeHtml && a2.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
        goog.asserts.fail("expected object of type SafeHtml, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeHtml";
      };
      goog.html.SafeHtml.htmlEscape = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        var b2 = typeof a2 == "object", c2 = null;
        b2 && a2.implementsGoogI18nBidiDirectionalString && (c2 = a2.getDirection());
        a2 = b2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a2), c2);
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
      };
      goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
      goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
      goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
      goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = { APPLET: true, BASE: true, EMBED: true, IFRAME: true, LINK: true, MATH: true, META: true, OBJECT: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.html.SafeHtml.create = function(a2, b2, c2) {
        goog.html.SafeHtml.verifyTagName(String(a2));
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a2), b2, c2);
      };
      goog.html.SafeHtml.verifyTagName = function(a2) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a2))
          throw Error("Invalid tag name <" + a2 + ">.");
        if (a2.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
          throw Error("Tag name <" + a2 + "> is not allowed for SafeHtml.");
      };
      goog.html.SafeHtml.createIframe = function(a2, b2, c2, d2) {
        a2 && goog.html.TrustedResourceUrl.unwrap(a2);
        var e2 = {};
        e2.src = a2 || null;
        e2.srcdoc = b2 && goog.html.SafeHtml.unwrap(b2);
        a2 = goog.html.SafeHtml.combineAttributes(e2, { sandbox: "" }, c2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
      };
      goog.html.SafeHtml.createSandboxIframe = function(a2, b2, c2, d2) {
        if (!goog.html.SafeHtml.canUseSandboxIframe())
          throw Error("The browser does not support sandboxed iframes.");
        var e2 = {};
        e2.src = a2 ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2)) : null;
        e2.srcdoc = b2 || null;
        e2.sandbox = "";
        a2 = goog.html.SafeHtml.combineAttributes(e2, {}, c2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
      };
      goog.html.SafeHtml.canUseSandboxIframe = function() {
        return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
      };
      goog.html.SafeHtml.createScriptSrc = function(a2, b2) {
        goog.html.TrustedResourceUrl.unwrap(a2);
        a2 = goog.html.SafeHtml.combineAttributes({ src: a2 }, {}, b2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a2);
      };
      goog.html.SafeHtml.createScript = function(a2, b2) {
        for (var c2 in b2) {
          var d2 = c2.toLowerCase();
          if (d2 == "language" || d2 == "src" || d2 == "text" || d2 == "type")
            throw Error('Cannot set "' + d2 + '" attribute');
        }
        c2 = "";
        a2 = goog.array.concat(a2);
        for (d2 = 0; d2 < a2.length; d2++)
          c2 += goog.html.SafeScript.unwrap(a2[d2]);
        a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b2, a2);
      };
      goog.html.SafeHtml.createStyle = function(a2, b2) {
        b2 = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b2);
        var c2 = "";
        a2 = goog.array.concat(a2);
        for (var d2 = 0; d2 < a2.length; d2++)
          c2 += goog.html.SafeStyleSheet.unwrap(a2[d2]);
        a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b2, a2);
      };
      goog.html.SafeHtml.createMetaRefresh = function(a2, b2) {
        a2 = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2));
        (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a2, ";") && (a2 = "'" + a2.replace(/'/g, "%27") + "'");
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b2 || 0) + "; url=" + a2 });
      };
      goog.html.SafeHtml.getAttrNameAndValue_ = function(a2, b2, c2) {
        if (c2 instanceof goog.string.Const)
          c2 = goog.string.Const.unwrap(c2);
        else if (b2.toLowerCase() == "style")
          c2 = goog.html.SafeHtml.getStyleValue_(c2);
        else {
          if (/^on/i.test(b2))
            throw Error('Attribute "' + b2 + '" requires goog.string.Const value, "' + c2 + '" given.');
          if (b2.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
            if (c2 instanceof goog.html.TrustedResourceUrl)
              c2 = goog.html.TrustedResourceUrl.unwrap(c2);
            else if (c2 instanceof goog.html.SafeUrl)
              c2 = goog.html.SafeUrl.unwrap(c2);
            else if (goog.isString(c2))
              c2 = goog.html.SafeUrl.sanitize(c2).getTypedStringValue();
            else
              throw Error('Attribute "' + b2 + '" on tag "' + a2 + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c2 + '" given.');
        }
        c2.implementsGoogStringTypedString && (c2 = c2.getTypedStringValue());
        goog.asserts.assert(goog.isString(c2) || goog.isNumber(c2), "String or number value expected, got " + typeof c2 + " with value: " + c2);
        return b2 + '="' + goog.string.internal.htmlEscape(String(c2)) + '"';
      };
      goog.html.SafeHtml.getStyleValue_ = function(a2) {
        if (!goog.isObject(a2))
          throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a2 + " given: " + a2);
        a2 instanceof goog.html.SafeStyle || (a2 = goog.html.SafeStyle.create(a2));
        return goog.html.SafeStyle.unwrap(a2);
      };
      goog.html.SafeHtml.createWithDir = function(a2, b2, c2, d2) {
        b2 = goog.html.SafeHtml.create(b2, c2, d2);
        b2.dir_ = a2;
        return b2;
      };
      goog.html.SafeHtml.join = function(a2, b2) {
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        var c2 = a2.getDirection(), d2 = [], e2 = function(a3) {
          goog.isArray(a3) ? goog.array.forEach(a3, e2) : (a3 = goog.html.SafeHtml.htmlEscape(a3), d2.push(goog.html.SafeHtml.unwrap(a3)), a3 = a3.getDirection(), c2 == goog.i18n.bidi.Dir.NEUTRAL ? c2 = a3 : a3 != goog.i18n.bidi.Dir.NEUTRAL && c2 != a3 && (c2 = null));
        };
        goog.array.forEach(b2, e2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d2.join(goog.html.SafeHtml.unwrap(a2)), c2);
      };
      goog.html.SafeHtml.concat = function(a2) {
        return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
      };
      goog.html.SafeHtml.concatWithDir = function(a2, b2) {
        var c2 = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
        c2.dir_ = a2;
        return c2;
      };
      goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a2, b2) {
        return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a2, b2);
      };
      goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2, b2) {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a2) : a2;
        this.dir_ = b2;
        return this;
      };
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a2, b2, c2) {
        var d2 = null;
        var e2 = "<" + a2 + goog.html.SafeHtml.stringifyAttributes(a2, b2);
        goog.isDefAndNotNull(c2) ? goog.isArray(c2) || (c2 = [c2]) : c2 = [];
        goog.dom.tags.isVoidTag(a2.toLowerCase()) ? (goog.asserts.assert(!c2.length, "Void tag <" + a2 + "> does not allow content."), e2 += ">") : (d2 = goog.html.SafeHtml.concat(c2), e2 += ">" + goog.html.SafeHtml.unwrap(d2) + "</" + a2 + ">", d2 = d2.getDirection());
        (a2 = b2 && b2.dir) && (d2 = /^(ltr|rtl|auto)$/i.test(a2) ? goog.i18n.bidi.Dir.NEUTRAL : null);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e2, d2);
      };
      goog.html.SafeHtml.stringifyAttributes = function(a2, b2) {
        var c2 = "";
        if (b2)
          for (var d2 in b2) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d2))
              throw Error('Invalid attribute name "' + d2 + '".');
            var e2 = b2[d2];
            goog.isDefAndNotNull(e2) && (c2 += " " + goog.html.SafeHtml.getAttrNameAndValue_(a2, d2, e2));
          }
        return c2;
      };
      goog.html.SafeHtml.combineAttributes = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = a2[e2];
        for (e2 in b2)
          goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = b2[e2];
        for (e2 in c2) {
          var f2 = e2.toLowerCase();
          if (f2 in a2)
            throw Error('Cannot override "' + f2 + '" attribute, got "' + e2 + '" with value "' + c2[e2] + '"');
          f2 in b2 && delete d2[f2];
          d2[e2] = c2[e2];
        }
        return d2;
      };
      goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.uncheckedconversions = {};
      goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a2, b2, c2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b2, c2 || null);
      };
      goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.dom.safe = {};
      goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
      goog.dom.safe.insertAdjacentHtml = function(a2, b2, c2) {
        a2.insertAdjacentHTML(b2, goog.html.SafeHtml.unwrapTrustedHTML(c2));
      };
      goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
        if (goog.DEBUG && typeof document === "undefined")
          return false;
        var a2 = document.createElement("div"), b2 = document.createElement("div");
        b2.appendChild(document.createElement("div"));
        a2.appendChild(b2);
        if (goog.DEBUG && !a2.firstChild)
          return false;
        b2 = a2.firstChild.firstChild;
        a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
        return !b2.parentElement;
      });
      goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a2, b2) {
        if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
          for (; a2.lastChild; )
            a2.removeChild(a2.lastChild);
        a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setInnerHtml = function(a2, b2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c2 = a2.tagName.toUpperCase();
          if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c2])
            throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a2.tagName + ".");
        }
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a2, b2);
      };
      goog.dom.safe.setOuterHtml = function(a2, b2) {
        a2.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setFormElementAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLFormElement(a2).action = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setButtonFormAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLButtonElement(a2).formAction = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setInputFormAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLInputElement(a2).formAction = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setStyle = function(a2, b2) {
        a2.style.cssText = goog.html.SafeStyle.unwrap(b2);
      };
      goog.dom.safe.documentWrite = function(a2, b2) {
        a2.write(goog.html.SafeHtml.unwrapTrustedHTML(b2));
      };
      goog.dom.safe.setAnchorHref = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLAnchorElement(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.href = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setImageSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLImageElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:image\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setAudioSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLAudioElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:audio\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setVideoSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLVideoElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:video\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setEmbedSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLEmbedElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
      };
      goog.dom.safe.setFrameSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLFrameElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setIframeSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.setIframeSrcdoc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a2);
        a2.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setLinkHrefAndRel = function(a2, b2, c2) {
        goog.dom.asserts.assertIsHTMLLinkElement(a2);
        a2.rel = c2;
        goog.string.internal.caseInsensitiveContains(c2, "stylesheet") ? (goog.asserts.assert(b2 instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a2.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(b2)) : a2.href = b2 instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrapTrustedURL(b2) : b2 instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrapTrustedURL(b2) : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(b2));
      };
      goog.dom.safe.setObjectData = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLObjectElement(a2);
        a2.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
      };
      goog.dom.safe.setScriptSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLScriptElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
        (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
      };
      goog.dom.safe.setScriptContent = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLScriptElement(a2);
        a2.text = goog.html.SafeScript.unwrapTrustedScript(b2);
        (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
      };
      goog.dom.safe.setLocationHref = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.href = goog.html.SafeUrl.unwrapTrustedURL(b2);
      };
      goog.dom.safe.assignLocation = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.assign(goog.html.SafeUrl.unwrapTrustedURL(b2));
      };
      goog.dom.safe.replaceLocation = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.replace(goog.html.SafeUrl.unwrapTrustedURL(b2));
      };
      goog.dom.safe.openInWindow = function(a2, b2, c2, d2, e2) {
        a2 = a2 instanceof goog.html.SafeUrl ? a2 : goog.html.SafeUrl.sanitizeAssertUnchanged(a2);
        return (b2 || goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(a2), c2 ? goog.string.Const.unwrap(c2) : "", d2, e2);
      };
      goog.dom.safe.parseFromStringHtml = function(a2, b2) {
        return goog.dom.safe.parseFromString(a2, b2, "text/html");
      };
      goog.dom.safe.parseFromString = function(a2, b2, c2) {
        return a2.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b2), c2);
      };
      goog.dom.safe.createImageFromBlob = function(a2) {
        if (!/^image\/.*/g.test(a2.type))
          throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
        var b2 = goog.global.URL.createObjectURL(a2);
        a2 = new goog.global.Image();
        a2.onload = function() {
          goog.global.URL.revokeObjectURL(b2);
        };
        goog.dom.safe.setImageSrc(a2, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b2));
        return a2;
      };
      goog.string.DETECT_DOUBLE_ESCAPING = false;
      goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
      goog.string.Unicode = { NBSP: "\xA0" };
      goog.string.startsWith = goog.string.internal.startsWith;
      goog.string.endsWith = goog.string.internal.endsWith;
      goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
      goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
      goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
      goog.string.subs = function(a2, b2) {
        for (var c2 = a2.split("%s"), d2 = "", e2 = Array.prototype.slice.call(arguments, 1); e2.length && 1 < c2.length; )
          d2 += c2.shift() + e2.shift();
        return d2 + c2.join("%s");
      };
      goog.string.collapseWhitespace = function(a2) {
        return a2.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
      };
      goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
      goog.string.isEmptyString = function(a2) {
        return a2.length == 0;
      };
      goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
      goog.string.isEmptyOrWhitespaceSafe = function(a2) {
        return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a2));
      };
      goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
      goog.string.isBreakingWhitespace = function(a2) {
        return !/[^\t\n\r ]/.test(a2);
      };
      goog.string.isAlpha = function(a2) {
        return !/[^a-zA-Z]/.test(a2);
      };
      goog.string.isNumeric = function(a2) {
        return !/[^0-9]/.test(a2);
      };
      goog.string.isAlphaNumeric = function(a2) {
        return !/[^a-zA-Z0-9]/.test(a2);
      };
      goog.string.isSpace = function(a2) {
        return a2 == " ";
      };
      goog.string.isUnicodeChar = function(a2) {
        return a2.length == 1 && " " <= a2 && "~" >= a2 || "\x80" <= a2 && "\uFFFD" >= a2;
      };
      goog.string.stripNewlines = function(a2) {
        return a2.replace(/(\r\n|\r|\n)+/g, " ");
      };
      goog.string.canonicalizeNewlines = function(a2) {
        return a2.replace(/(\r\n|\r|\n)/g, "\n");
      };
      goog.string.normalizeWhitespace = function(a2) {
        return a2.replace(/\xa0|\s/g, " ");
      };
      goog.string.normalizeSpaces = function(a2) {
        return a2.replace(/\xa0|[ \t]+/g, " ");
      };
      goog.string.collapseBreakingSpaces = function(a2) {
        return a2.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
      };
      goog.string.trim = goog.string.internal.trim;
      goog.string.trimLeft = function(a2) {
        return a2.replace(/^[\s\xa0]+/, "");
      };
      goog.string.trimRight = function(a2) {
        return a2.replace(/[\s\xa0]+$/, "");
      };
      goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
      goog.string.numberAwareCompare_ = function(a2, b2, c2) {
        if (a2 == b2)
          return 0;
        if (!a2)
          return -1;
        if (!b2)
          return 1;
        for (var d2 = a2.toLowerCase().match(c2), e2 = b2.toLowerCase().match(c2), f2 = Math.min(d2.length, e2.length), g = 0; g < f2; g++) {
          c2 = d2[g];
          var h = e2[g];
          if (c2 != h)
            return a2 = parseInt(c2, 10), !isNaN(a2) && (b2 = parseInt(h, 10), !isNaN(b2) && a2 - b2) ? a2 - b2 : c2 < h ? -1 : 1;
        }
        return d2.length != e2.length ? d2.length - e2.length : a2 < b2 ? -1 : 1;
      };
      goog.string.intAwareCompare = function(a2, b2) {
        return goog.string.numberAwareCompare_(a2, b2, /\d+|\D+/g);
      };
      goog.string.floatAwareCompare = function(a2, b2) {
        return goog.string.numberAwareCompare_(a2, b2, /\d+|\.\d+|\D+/g);
      };
      goog.string.numerateCompare = goog.string.floatAwareCompare;
      goog.string.urlEncode = function(a2) {
        return encodeURIComponent(String(a2));
      };
      goog.string.urlDecode = function(a2) {
        return decodeURIComponent(a2.replace(/\+/g, " "));
      };
      goog.string.newLineToBr = goog.string.internal.newLineToBr;
      goog.string.htmlEscape = function(a2, b2) {
        a2 = goog.string.internal.htmlEscape(a2, b2);
        goog.string.DETECT_DOUBLE_ESCAPING && (a2 = a2.replace(goog.string.E_RE_, "&#101;"));
        return a2;
      };
      goog.string.E_RE_ = /e/g;
      goog.string.unescapeEntities = function(a2) {
        return goog.string.contains(a2, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a2) : goog.string.unescapePureXmlEntities_(a2) : a2;
      };
      goog.string.unescapeEntitiesWithDocument = function(a2, b2) {
        return goog.string.contains(a2, "&") ? goog.string.unescapeEntitiesUsingDom_(a2, b2) : a2;
      };
      goog.string.unescapeEntitiesUsingDom_ = function(a2, b2) {
        var c2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
        var d2 = b2 ? b2.createElement("div") : goog.global.document.createElement("div");
        return a2.replace(goog.string.HTML_ENTITY_PATTERN_, function(a3, b3) {
          var e2 = c2[a3];
          if (e2)
            return e2;
          b3.charAt(0) == "#" && (b3 = Number("0" + b3.substr(1)), isNaN(b3) || (e2 = String.fromCharCode(b3)));
          e2 || (goog.dom.safe.setInnerHtml(d2, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), a3 + " ")), e2 = d2.firstChild.nodeValue.slice(0, -1));
          return c2[a3] = e2;
        });
      };
      goog.string.unescapePureXmlEntities_ = function(a2) {
        return a2.replace(/&([^;]+);/g, function(a3, c2) {
          switch (c2) {
            case "amp":
              return "&";
            case "lt":
              return "<";
            case "gt":
              return ">";
            case "quot":
              return '"';
            default:
              return c2.charAt(0) != "#" || (c2 = Number("0" + c2.substr(1)), isNaN(c2)) ? a3 : String.fromCharCode(c2);
          }
        });
      };
      goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
      goog.string.whitespaceEscape = function(a2, b2) {
        return goog.string.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
      };
      goog.string.preserveSpaces = function(a2) {
        return a2.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
      };
      goog.string.stripQuotes = function(a2, b2) {
        for (var c2 = b2.length, d2 = 0; d2 < c2; d2++) {
          var e2 = c2 == 1 ? b2 : b2.charAt(d2);
          if (a2.charAt(0) == e2 && a2.charAt(a2.length - 1) == e2)
            return a2.substring(1, a2.length - 1);
        }
        return a2;
      };
      goog.string.truncate = function(a2, b2, c2) {
        c2 && (a2 = goog.string.unescapeEntities(a2));
        a2.length > b2 && (a2 = a2.substring(0, b2 - 3) + "...");
        c2 && (a2 = goog.string.htmlEscape(a2));
        return a2;
      };
      goog.string.truncateMiddle = function(a2, b2, c2, d2) {
        c2 && (a2 = goog.string.unescapeEntities(a2));
        if (d2 && a2.length > b2) {
          d2 > b2 && (d2 = b2);
          var e2 = a2.length - d2;
          a2 = a2.substring(0, b2 - d2) + "..." + a2.substring(e2);
        } else
          a2.length > b2 && (d2 = Math.floor(b2 / 2), e2 = a2.length - d2, a2 = a2.substring(0, d2 + b2 % 2) + "..." + a2.substring(e2));
        c2 && (a2 = goog.string.htmlEscape(a2));
        return a2;
      };
      goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
      goog.string.jsEscapeCache_ = { "'": "\\'" };
      goog.string.quote = function(a2) {
        a2 = String(a2);
        for (var b2 = ['"'], c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charAt(c2), e2 = d2.charCodeAt(0);
          b2[c2 + 1] = goog.string.specialEscapeChars_[d2] || (31 < e2 && 127 > e2 ? d2 : goog.string.escapeChar(d2));
        }
        b2.push('"');
        return b2.join("");
      };
      goog.string.escapeString = function(a2) {
        for (var b2 = [], c2 = 0; c2 < a2.length; c2++)
          b2[c2] = goog.string.escapeChar(a2.charAt(c2));
        return b2.join("");
      };
      goog.string.escapeChar = function(a2) {
        if (a2 in goog.string.jsEscapeCache_)
          return goog.string.jsEscapeCache_[a2];
        if (a2 in goog.string.specialEscapeChars_)
          return goog.string.jsEscapeCache_[a2] = goog.string.specialEscapeChars_[a2];
        var b2 = a2.charCodeAt(0);
        if (31 < b2 && 127 > b2)
          var c2 = a2;
        else {
          if (256 > b2) {
            if (c2 = "\\x", 16 > b2 || 256 < b2)
              c2 += "0";
          } else
            c2 = "\\u", 4096 > b2 && (c2 += "0");
          c2 += b2.toString(16).toUpperCase();
        }
        return goog.string.jsEscapeCache_[a2] = c2;
      };
      goog.string.contains = goog.string.internal.contains;
      goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
      goog.string.countOf = function(a2, b2) {
        return a2 && b2 ? a2.split(b2).length - 1 : 0;
      };
      goog.string.removeAt = function(a2, b2, c2) {
        var d2 = a2;
        0 <= b2 && b2 < a2.length && 0 < c2 && (d2 = a2.substr(0, b2) + a2.substr(b2 + c2, a2.length - b2 - c2));
        return d2;
      };
      goog.string.remove = function(a2, b2) {
        return a2.replace(b2, "");
      };
      goog.string.removeAll = function(a2, b2) {
        b2 = new RegExp(goog.string.regExpEscape(b2), "g");
        return a2.replace(b2, "");
      };
      goog.string.replaceAll = function(a2, b2, c2) {
        b2 = new RegExp(goog.string.regExpEscape(b2), "g");
        return a2.replace(b2, c2.replace(/\$/g, "$$$$"));
      };
      goog.string.regExpEscape = function(a2) {
        return String(a2).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
      };
      goog.string.repeat = String.prototype.repeat ? function(a2, b2) {
        return a2.repeat(b2);
      } : function(a2, b2) {
        return Array(b2 + 1).join(a2);
      };
      goog.string.padNumber = function(a2, b2, c2) {
        a2 = goog.isDef(c2) ? a2.toFixed(c2) : String(a2);
        c2 = a2.indexOf(".");
        c2 == -1 && (c2 = a2.length);
        return goog.string.repeat("0", Math.max(0, b2 - c2)) + a2;
      };
      goog.string.makeSafe = function(a2) {
        return a2 == null ? "" : String(a2);
      };
      goog.string.buildString = function(a2) {
        return Array.prototype.join.call(arguments, "");
      };
      goog.string.getRandomString = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
      };
      goog.string.compareVersions = goog.string.internal.compareVersions;
      goog.string.hashCode = function(a2) {
        for (var b2 = 0, c2 = 0; c2 < a2.length; ++c2)
          b2 = 31 * b2 + a2.charCodeAt(c2) >>> 0;
        return b2;
      };
      goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
      goog.string.createUniqueString = function() {
        return "goog_" + goog.string.uniqueStringCounter_++;
      };
      goog.string.toNumber = function(a2) {
        var b2 = Number(a2);
        return b2 == 0 && goog.string.isEmptyOrWhitespace(a2) ? NaN : b2;
      };
      goog.string.isLowerCamelCase = function(a2) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(a2);
      };
      goog.string.isUpperCamelCase = function(a2) {
        return /^([A-Z][a-z]*)+$/.test(a2);
      };
      goog.string.toCamelCase = function(a2) {
        return String(a2).replace(/\-([a-z])/g, function(a3, c2) {
          return c2.toUpperCase();
        });
      };
      goog.string.toSelectorCase = function(a2) {
        return String(a2).replace(/([A-Z])/g, "-$1").toLowerCase();
      };
      goog.string.toTitleCase = function(a2, b2) {
        b2 = goog.isString(b2) ? goog.string.regExpEscape(b2) : "\\s";
        return a2.replace(new RegExp("(^" + (b2 ? "|[" + b2 + "]+" : "") + ")([a-z])", "g"), function(a3, b3, e2) {
          return b3 + e2.toUpperCase();
        });
      };
      goog.string.capitalize = function(a2) {
        return String(a2.charAt(0)).toUpperCase() + String(a2.substr(1)).toLowerCase();
      };
      goog.string.parseInt = function(a2) {
        isFinite(a2) && (a2 = String(a2));
        return goog.isString(a2) ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
      };
      goog.string.splitLimit = function(a2, b2, c2) {
        a2 = a2.split(b2);
        for (var d2 = []; 0 < c2 && a2.length; )
          d2.push(a2.shift()), c2--;
        a2.length && d2.push(a2.join(b2));
        return d2;
      };
      goog.string.lastComponent = function(a2, b2) {
        if (b2)
          typeof b2 == "string" && (b2 = [b2]);
        else
          return a2;
        for (var c2 = -1, d2 = 0; d2 < b2.length; d2++)
          if (b2[d2] != "") {
            var e2 = a2.lastIndexOf(b2[d2]);
            e2 > c2 && (c2 = e2);
          }
        return c2 == -1 ? a2 : a2.slice(c2 + 1);
      };
      goog.string.editDistance = function(a2, b2) {
        var c2 = [], d2 = [];
        if (a2 == b2)
          return 0;
        if (!a2.length || !b2.length)
          return Math.max(a2.length, b2.length);
        for (var e2 = 0; e2 < b2.length + 1; e2++)
          c2[e2] = e2;
        for (e2 = 0; e2 < a2.length; e2++) {
          d2[0] = e2 + 1;
          for (var f2 = 0; f2 < b2.length; f2++)
            d2[f2 + 1] = Math.min(d2[f2] + 1, c2[f2 + 1] + 1, c2[f2] + Number(a2[e2] != b2[f2]));
          for (f2 = 0; f2 < c2.length; f2++)
            c2[f2] = d2[f2];
        }
        return d2[b2.length];
      };
      goog.labs.userAgent.engine = {};
      goog.labs.userAgent.engine.isPresto = function() {
        return goog.labs.userAgent.util.matchUserAgent("Presto");
      };
      goog.labs.userAgent.engine.isTrident = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.engine.isEdge = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.engine.isWebKit = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.isGecko = function() {
        return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.getVersion = function() {
        var a2 = goog.labs.userAgent.util.getUserAgent();
        if (a2) {
          a2 = goog.labs.userAgent.util.extractVersionTuples(a2);
          var b2 = goog.labs.userAgent.engine.getEngineTuple_(a2);
          if (b2)
            return b2[0] == "Gecko" ? goog.labs.userAgent.engine.getVersionForKey_(a2, "Firefox") : b2[1];
          a2 = a2[0];
          var c2;
          if (a2 && (c2 = a2[2]) && (c2 = /Trident\/([^\s;]+)/.exec(c2)))
            return c2[1];
        }
        return "";
      };
      goog.labs.userAgent.engine.getEngineTuple_ = function(a2) {
        if (!goog.labs.userAgent.engine.isEdge())
          return a2[1];
        for (var b2 = 0; b2 < a2.length; b2++) {
          var c2 = a2[b2];
          if (c2[0] == "Edge")
            return c2;
        }
      };
      goog.labs.userAgent.engine.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a2);
      };
      goog.labs.userAgent.engine.getVersionForKey_ = function(a2, b2) {
        return (a2 = goog.array.find(a2, function(a3) {
          return b2 == a3[0];
        })) && a2[1] || "";
      };
      goog.labs.userAgent.platform = {};
      goog.labs.userAgent.platform.isAndroid = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android");
      };
      goog.labs.userAgent.platform.isIpod = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPod");
      };
      goog.labs.userAgent.platform.isIphone = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIpad = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIos = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
      };
      goog.labs.userAgent.platform.isMacintosh = function() {
        return goog.labs.userAgent.util.matchUserAgent("Macintosh");
      };
      goog.labs.userAgent.platform.isLinux = function() {
        return goog.labs.userAgent.util.matchUserAgent("Linux");
      };
      goog.labs.userAgent.platform.isWindows = function() {
        return goog.labs.userAgent.util.matchUserAgent("Windows");
      };
      goog.labs.userAgent.platform.isChromeOS = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrOS");
      };
      goog.labs.userAgent.platform.isChromecast = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrKey");
      };
      goog.labs.userAgent.platform.isKaiOS = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
      };
      goog.labs.userAgent.platform.isGo2Phone = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP");
      };
      goog.labs.userAgent.platform.getVersion = function() {
        var a2 = goog.labs.userAgent.util.getUserAgent(), b2 = "";
        goog.labs.userAgent.platform.isWindows() ? (b2 = /Windows (?:NT|Phone) ([0-9.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b2 = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b2 = (a2 = b2.exec(a2)) && a2[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b2 = /Mac OS X ([0-9_.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b2 = /(?:KaiOS)\/(\S+)/i, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isAndroid() ? (b2 = /Android\s+([^\);]+)(\)|;)/, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isChromeOS() && (b2 = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b2 = (a2 = b2.exec(a2)) && a2[1]);
        return b2 || "";
      };
      goog.labs.userAgent.platform.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a2);
      };
      goog.reflect = {};
      goog.reflect.object = function(a2, b2) {
        return b2;
      };
      goog.reflect.objectProperty = function(a2, b2) {
        return a2;
      };
      goog.reflect.sinkValue = function(a2) {
        goog.reflect.sinkValue[" "](a2);
        return a2;
      };
      goog.reflect.sinkValue[" "] = goog.nullFunction;
      goog.reflect.canAccessProperty = function(a2, b2) {
        try {
          return goog.reflect.sinkValue(a2[b2]), true;
        } catch (c2) {
        }
        return false;
      };
      goog.reflect.cache = function(a2, b2, c2, d2) {
        d2 = d2 ? d2(b2) : b2;
        return Object.prototype.hasOwnProperty.call(a2, d2) ? a2[d2] : a2[d2] = c2(b2);
      };
      goog.userAgent = {};
      goog.userAgent.ASSUME_IE = false;
      goog.userAgent.ASSUME_EDGE = false;
      goog.userAgent.ASSUME_GECKO = false;
      goog.userAgent.ASSUME_WEBKIT = false;
      goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
      goog.userAgent.ASSUME_OPERA = false;
      goog.userAgent.ASSUME_ANY_VERSION = false;
      goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
      goog.userAgent.getUserAgentString = function() {
        return goog.labs.userAgent.util.getUserAgent();
      };
      goog.userAgent.getNavigatorTyped = function() {
        return goog.global.navigator || null;
      };
      goog.userAgent.getNavigator = function() {
        return goog.userAgent.getNavigatorTyped();
      };
      goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
      goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
      goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
      goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
      goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
      goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
      goog.userAgent.isMobile_ = function() {
        return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
      };
      goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
      goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
      goog.userAgent.determinePlatform_ = function() {
        var a2 = goog.userAgent.getNavigatorTyped();
        return a2 && a2.platform || "";
      };
      goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
      goog.userAgent.ASSUME_MAC = false;
      goog.userAgent.ASSUME_WINDOWS = false;
      goog.userAgent.ASSUME_LINUX = false;
      goog.userAgent.ASSUME_X11 = false;
      goog.userAgent.ASSUME_ANDROID = false;
      goog.userAgent.ASSUME_IPHONE = false;
      goog.userAgent.ASSUME_IPAD = false;
      goog.userAgent.ASSUME_IPOD = false;
      goog.userAgent.ASSUME_KAIOS = false;
      goog.userAgent.ASSUME_GO2PHONE = false;
      goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
      goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
      goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
      goog.userAgent.isLegacyLinux_ = function() {
        return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
      };
      goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
      goog.userAgent.isX11_ = function() {
        var a2 = goog.userAgent.getNavigatorTyped();
        return !!a2 && goog.string.contains(a2.appVersion || "", "X11");
      };
      goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
      goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
      goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
      goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
      goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
      goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
      goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone();
      goog.userAgent.determineVersion_ = function() {
        var a2 = "", b2 = goog.userAgent.getVersionRegexResult_();
        b2 && (a2 = b2 ? b2[1] : "");
        return goog.userAgent.IE && (b2 = goog.userAgent.getDocumentMode_(), b2 != null && b2 > parseFloat(a2)) ? String(b2) : a2;
      };
      goog.userAgent.getVersionRegexResult_ = function() {
        var a2 = goog.userAgent.getUserAgentString();
        if (goog.userAgent.GECKO)
          return /rv:([^\);]+)(\)|;)/.exec(a2);
        if (goog.userAgent.EDGE)
          return /Edge\/([\d\.]+)/.exec(a2);
        if (goog.userAgent.IE)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
        if (goog.userAgent.WEBKIT)
          return /WebKit\/(\S+)/.exec(a2);
        if (goog.userAgent.OPERA)
          return /(?:Version)[ \/]?(\S+)/.exec(a2);
      };
      goog.userAgent.getDocumentMode_ = function() {
        var a2 = goog.global.document;
        return a2 ? a2.documentMode : void 0;
      };
      goog.userAgent.VERSION = goog.userAgent.determineVersion_();
      goog.userAgent.compare = function(a2, b2) {
        return goog.string.compareVersions(a2, b2);
      };
      goog.userAgent.isVersionOrHigherCache_ = {};
      goog.userAgent.isVersionOrHigher = function(a2) {
        return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a2, function() {
          return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a2);
        });
      };
      goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
      goog.userAgent.isDocumentModeOrHigher = function(a2) {
        return Number(goog.userAgent.DOCUMENT_MODE) >= a2;
      };
      goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
      goog.userAgent.DOCUMENT_MODE = function() {
        if (goog.global.document && goog.userAgent.IE)
          return goog.userAgent.getDocumentMode_();
      }();
      goog.userAgent.product = {};
      goog.userAgent.product.ASSUME_FIREFOX = false;
      goog.userAgent.product.ASSUME_IPHONE = false;
      goog.userAgent.product.ASSUME_IPAD = false;
      goog.userAgent.product.ASSUME_ANDROID = false;
      goog.userAgent.product.ASSUME_CHROME = false;
      goog.userAgent.product.ASSUME_SAFARI = false;
      goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
      goog.userAgent.product.OPERA = goog.userAgent.OPERA;
      goog.userAgent.product.IE = goog.userAgent.IE;
      goog.userAgent.product.EDGE = goog.userAgent.EDGE;
      goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
      goog.userAgent.product.isIphoneOrIpod_ = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
      };
      goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
      goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
      goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
      goog.userAgent.product.isSafariDesktop_ = function() {
        return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
      };
      goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
      goog.crypt.base64 = {};
      goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
      goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
      goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
      goog.crypt.base64.paddingChars_ = "=.";
      goog.crypt.base64.isPadding_ = function(a2) {
        return goog.string.contains(goog.crypt.base64.paddingChars_, a2);
      };
      goog.crypt.base64.byteToCharMaps_ = {};
      goog.crypt.base64.charToByteMap_ = null;
      goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
      goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
      goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
      goog.crypt.base64.encodeByteArray = function(a2, b2) {
        goog.asserts.assert(goog.isArrayLike(a2), "encodeByteArray takes an array as a parameter");
        b2 === void 0 && (b2 = goog.crypt.base64.Alphabet.DEFAULT);
        goog.crypt.base64.init_();
        b2 = goog.crypt.base64.byteToCharMaps_[b2];
        for (var c2 = [], d2 = 0; d2 < a2.length; d2 += 3) {
          var e2 = a2[d2], f2 = d2 + 1 < a2.length, g = f2 ? a2[d2 + 1] : 0, h = d2 + 2 < a2.length, k = h ? a2[d2 + 2] : 0, l = e2 >> 2;
          e2 = (e2 & 3) << 4 | g >> 4;
          g = (g & 15) << 2 | k >> 6;
          k &= 63;
          h || (k = 64, f2 || (g = 64));
          c2.push(b2[l], b2[e2], b2[g] || "", b2[k] || "");
        }
        return c2.join("");
      };
      goog.crypt.base64.encodeString = function(a2, b2) {
        return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b2 ? goog.global.btoa(a2) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a2), b2);
      };
      goog.crypt.base64.decodeString = function(a2, b2) {
        if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b2)
          return goog.global.atob(a2);
        var c2 = "";
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          c2 += String.fromCharCode(a3);
        });
        return c2;
      };
      goog.crypt.base64.decodeStringToByteArray = function(a2, b2) {
        var c2 = [];
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          c2.push(a3);
        });
        return c2;
      };
      goog.crypt.base64.decodeStringToUint8Array = function(a2) {
        goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
        var b2 = a2.length, c2 = 3 * b2 / 4;
        c2 % 3 ? c2 = Math.floor(c2) : goog.crypt.base64.isPadding_(a2[b2 - 1]) && (c2 = goog.crypt.base64.isPadding_(a2[b2 - 2]) ? c2 - 2 : c2 - 1);
        var d2 = new Uint8Array(c2), e2 = 0;
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          d2[e2++] = a3;
        });
        return d2.subarray(0, e2);
      };
      goog.crypt.base64.decodeStringInternal_ = function(a2, b2) {
        function c2(b3) {
          for (; d2 < a2.length; ) {
            var c3 = a2.charAt(d2++), e3 = goog.crypt.base64.charToByteMap_[c3];
            if (e3 != null)
              return e3;
            if (!goog.string.isEmptyOrWhitespace(c3))
              throw Error("Unknown base64 encoding at char: " + c3);
          }
          return b3;
        }
        goog.crypt.base64.init_();
        for (var d2 = 0; ; ) {
          var e2 = c2(-1), f2 = c2(0), g = c2(64), h = c2(64);
          if (h === 64 && e2 === -1)
            break;
          b2(e2 << 2 | f2 >> 4);
          g != 64 && (b2(f2 << 4 & 240 | g >> 2), h != 64 && b2(g << 6 & 192 | h));
        }
      };
      goog.crypt.base64.init_ = function() {
        if (!goog.crypt.base64.charToByteMap_) {
          goog.crypt.base64.charToByteMap_ = {};
          for (var a2 = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c2 = 0; 5 > c2; c2++) {
            var d2 = a2.concat(b2[c2].split(""));
            goog.crypt.base64.byteToCharMaps_[c2] = d2;
            for (var e2 = 0; e2 < d2.length; e2++) {
              var f2 = d2[e2], g = goog.crypt.base64.charToByteMap_[f2];
              g === void 0 ? goog.crypt.base64.charToByteMap_[f2] = e2 : goog.asserts.assert(g === e2);
            }
          }
        }
      };
      jspb.utils = {};
      jspb.utils.split64Low = 0;
      jspb.utils.split64High = 0;
      jspb.utils.splitUint64 = function(a2) {
        var b2 = a2 >>> 0;
        a2 = Math.floor((a2 - b2) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
        jspb.utils.split64Low = b2;
        jspb.utils.split64High = a2;
      };
      jspb.utils.splitInt64 = function(a2) {
        var b2 = 0 > a2;
        a2 = Math.abs(a2);
        var c2 = a2 >>> 0;
        a2 = Math.floor((a2 - c2) / jspb.BinaryConstants.TWO_TO_32);
        a2 >>>= 0;
        b2 && (a2 = ~a2 >>> 0, c2 = (~c2 >>> 0) + 1, 4294967295 < c2 && (c2 = 0, a2++, 4294967295 < a2 && (a2 = 0)));
        jspb.utils.split64Low = c2;
        jspb.utils.split64High = a2;
      };
      jspb.utils.splitZigzag64 = function(a2) {
        var b2 = 0 > a2;
        a2 = 2 * Math.abs(a2);
        jspb.utils.splitUint64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        b2 && (a2 == 0 ? c2 == 0 ? c2 = a2 = 4294967295 : (c2--, a2 = 4294967295) : a2--);
        jspb.utils.split64Low = a2;
        jspb.utils.split64High = c2;
      };
      jspb.utils.splitFloat32 = function(a2) {
        var b2 = 0 > a2 ? 1 : 0;
        a2 = b2 ? -a2 : a2;
        if (a2 === 0)
          0 < 1 / a2 ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
        else if (isNaN(a2))
          jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
        else if (a2 > jspb.BinaryConstants.FLOAT32_MAX)
          jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | 2139095040) >>> 0;
        else if (a2 < jspb.BinaryConstants.FLOAT32_MIN)
          a2 = Math.round(a2 / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | a2) >>> 0;
        else {
          var c2 = Math.floor(Math.log(a2) / Math.LN2);
          a2 *= Math.pow(2, -c2);
          a2 = Math.round(a2 * jspb.BinaryConstants.TWO_TO_23);
          16777216 <= a2 && ++c2;
          jspb.utils.split64High = 0;
          jspb.utils.split64Low = (b2 << 31 | c2 + 127 << 23 | a2 & 8388607) >>> 0;
        }
      };
      jspb.utils.splitFloat64 = function(a2) {
        var b2 = 0 > a2 ? 1 : 0;
        a2 = b2 ? -a2 : a2;
        if (a2 === 0)
          jspb.utils.split64High = 0 < 1 / a2 ? 0 : 2147483648, jspb.utils.split64Low = 0;
        else if (isNaN(a2))
          jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
        else if (a2 > jspb.BinaryConstants.FLOAT64_MAX)
          jspb.utils.split64High = (b2 << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
        else if (a2 < jspb.BinaryConstants.FLOAT64_MIN) {
          var c2 = a2 / Math.pow(2, -1074);
          a2 = c2 / jspb.BinaryConstants.TWO_TO_32;
          jspb.utils.split64High = (b2 << 31 | a2) >>> 0;
          jspb.utils.split64Low = c2 >>> 0;
        } else {
          c2 = a2;
          var d2 = 0;
          if (2 <= c2)
            for (; 2 <= c2 && 1023 > d2; )
              d2++, c2 /= 2;
          else
            for (; 1 > c2 && -1022 < d2; )
              c2 *= 2, d2--;
          c2 = a2 * Math.pow(2, -d2);
          a2 = c2 * jspb.BinaryConstants.TWO_TO_20 & 1048575;
          c2 = c2 * jspb.BinaryConstants.TWO_TO_52 >>> 0;
          jspb.utils.split64High = (b2 << 31 | d2 + 1023 << 20 | a2) >>> 0;
          jspb.utils.split64Low = c2;
        }
      };
      jspb.utils.splitHash64 = function(a2) {
        var b2 = a2.charCodeAt(0), c2 = a2.charCodeAt(1), d2 = a2.charCodeAt(2), e2 = a2.charCodeAt(3), f2 = a2.charCodeAt(4), g = a2.charCodeAt(5), h = a2.charCodeAt(6);
        a2 = a2.charCodeAt(7);
        jspb.utils.split64Low = b2 + (c2 << 8) + (d2 << 16) + (e2 << 24) >>> 0;
        jspb.utils.split64High = f2 + (g << 8) + (h << 16) + (a2 << 24) >>> 0;
      };
      jspb.utils.joinUint64 = function(a2, b2) {
        return b2 * jspb.BinaryConstants.TWO_TO_32 + (a2 >>> 0);
      };
      jspb.utils.joinInt64 = function(a2, b2) {
        var c2 = b2 & 2147483648;
        c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 >>> 0, a2 == 0 && (b2 = b2 + 1 >>> 0));
        a2 = jspb.utils.joinUint64(a2, b2);
        return c2 ? -a2 : a2;
      };
      jspb.utils.toZigzag64 = function(a2, b2, c2) {
        var d2 = b2 >> 31;
        return c2(a2 << 1 ^ d2, (b2 << 1 | a2 >>> 31) ^ d2);
      };
      jspb.utils.joinZigzag64 = function(a2, b2) {
        return jspb.utils.fromZigzag64(a2, b2, jspb.utils.joinInt64);
      };
      jspb.utils.fromZigzag64 = function(a2, b2, c2) {
        var d2 = -(a2 & 1);
        return c2((a2 >>> 1 | b2 << 31) ^ d2, b2 >>> 1 ^ d2);
      };
      jspb.utils.joinFloat32 = function(a2, b2) {
        b2 = 2 * (a2 >> 31) + 1;
        var c2 = a2 >>> 23 & 255;
        a2 &= 8388607;
        return c2 == 255 ? a2 ? NaN : Infinity * b2 : c2 == 0 ? b2 * Math.pow(2, -149) * a2 : b2 * Math.pow(2, c2 - 150) * (a2 + Math.pow(2, 23));
      };
      jspb.utils.joinFloat64 = function(a2, b2) {
        var c2 = 2 * (b2 >> 31) + 1, d2 = b2 >>> 20 & 2047;
        a2 = jspb.BinaryConstants.TWO_TO_32 * (b2 & 1048575) + a2;
        return d2 == 2047 ? a2 ? NaN : Infinity * c2 : d2 == 0 ? c2 * Math.pow(2, -1074) * a2 : c2 * Math.pow(2, d2 - 1075) * (a2 + jspb.BinaryConstants.TWO_TO_52);
      };
      jspb.utils.joinHash64 = function(a2, b2) {
        return String.fromCharCode(a2 >>> 0 & 255, a2 >>> 8 & 255, a2 >>> 16 & 255, a2 >>> 24 & 255, b2 >>> 0 & 255, b2 >>> 8 & 255, b2 >>> 16 & 255, b2 >>> 24 & 255);
      };
      jspb.utils.DIGITS = "0123456789abcdef".split("");
      jspb.utils.ZERO_CHAR_CODE_ = 48;
      jspb.utils.A_CHAR_CODE_ = 97;
      jspb.utils.joinUnsignedDecimalString = function(a2, b2) {
        function c2(a3, b3) {
          a3 = a3 ? String(a3) : "";
          return b3 ? "0000000".slice(a3.length) + a3 : a3;
        }
        if (2097151 >= b2)
          return "" + jspb.utils.joinUint64(a2, b2);
        var d2 = (a2 >>> 24 | b2 << 8) >>> 0 & 16777215;
        b2 = b2 >> 16 & 65535;
        a2 = (a2 & 16777215) + 6777216 * d2 + 6710656 * b2;
        d2 += 8147497 * b2;
        b2 *= 2;
        1e7 <= a2 && (d2 += Math.floor(a2 / 1e7), a2 %= 1e7);
        1e7 <= d2 && (b2 += Math.floor(d2 / 1e7), d2 %= 1e7);
        return c2(b2, 0) + c2(d2, b2) + c2(a2, 1);
      };
      jspb.utils.joinSignedDecimalString = function(a2, b2) {
        var c2 = b2 & 2147483648;
        c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 + (a2 == 0 ? 1 : 0) >>> 0);
        a2 = jspb.utils.joinUnsignedDecimalString(a2, b2);
        return c2 ? "-" + a2 : a2;
      };
      jspb.utils.hash64ToDecimalString = function(a2, b2) {
        jspb.utils.splitHash64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        return b2 ? jspb.utils.joinSignedDecimalString(a2, c2) : jspb.utils.joinUnsignedDecimalString(a2, c2);
      };
      jspb.utils.hash64ArrayToDecimalStrings = function(a2, b2) {
        for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
          c2[d2] = jspb.utils.hash64ToDecimalString(a2[d2], b2);
        return c2;
      };
      jspb.utils.decimalStringToHash64 = function(a2) {
        function b2(a3, b3) {
          for (var c3 = 0; 8 > c3 && (a3 !== 1 || 0 < b3); c3++)
            b3 = a3 * e2[c3] + b3, e2[c3] = b3 & 255, b3 >>>= 8;
        }
        function c2() {
          for (var a3 = 0; 8 > a3; a3++)
            e2[a3] = ~e2[a3] & 255;
        }
        goog.asserts.assert(0 < a2.length);
        var d2 = false;
        a2[0] === "-" && (d2 = true, a2 = a2.slice(1));
        for (var e2 = [0, 0, 0, 0, 0, 0, 0, 0], f2 = 0; f2 < a2.length; f2++)
          b2(10, a2.charCodeAt(f2) - jspb.utils.ZERO_CHAR_CODE_);
        d2 && (c2(), b2(1, 1));
        return goog.crypt.byteArrayToString(e2);
      };
      jspb.utils.splitDecimalString = function(a2) {
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
      };
      jspb.utils.toHexDigit_ = function(a2) {
        return String.fromCharCode(10 > a2 ? jspb.utils.ZERO_CHAR_CODE_ + a2 : jspb.utils.A_CHAR_CODE_ - 10 + a2);
      };
      jspb.utils.fromHexCharCode_ = function(a2) {
        return a2 >= jspb.utils.A_CHAR_CODE_ ? a2 - jspb.utils.A_CHAR_CODE_ + 10 : a2 - jspb.utils.ZERO_CHAR_CODE_;
      };
      jspb.utils.hash64ToHexString = function(a2) {
        var b2 = Array(18);
        b2[0] = "0";
        b2[1] = "x";
        for (var c2 = 0; 8 > c2; c2++) {
          var d2 = a2.charCodeAt(7 - c2);
          b2[2 * c2 + 2] = jspb.utils.toHexDigit_(d2 >> 4);
          b2[2 * c2 + 3] = jspb.utils.toHexDigit_(d2 & 15);
        }
        return b2.join("");
      };
      jspb.utils.hexStringToHash64 = function(a2) {
        a2 = a2.toLowerCase();
        goog.asserts.assert(a2.length == 18);
        goog.asserts.assert(a2[0] == "0");
        goog.asserts.assert(a2[1] == "x");
        for (var b2 = "", c2 = 0; 8 > c2; c2++) {
          var d2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 2)), e2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 3));
          b2 = String.fromCharCode(16 * d2 + e2) + b2;
        }
        return b2;
      };
      jspb.utils.hash64ToNumber = function(a2, b2) {
        jspb.utils.splitHash64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        return b2 ? jspb.utils.joinInt64(a2, c2) : jspb.utils.joinUint64(a2, c2);
      };
      jspb.utils.numberToHash64 = function(a2) {
        jspb.utils.splitInt64(a2);
        return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.utils.countVarints = function(a2, b2, c2) {
        for (var d2 = 0, e2 = b2; e2 < c2; e2++)
          d2 += a2[e2] >> 7;
        return c2 - b2 - d2;
      };
      jspb.utils.countVarintFields = function(a2, b2, c2, d2) {
        var e2 = 0;
        d2 = 8 * d2 + jspb.BinaryConstants.WireType.VARINT;
        if (128 > d2)
          for (; b2 < c2 && a2[b2++] == d2; )
            for (e2++; ; ) {
              var f2 = a2[b2++];
              if ((f2 & 128) == 0)
                break;
            }
        else
          for (; b2 < c2; ) {
            for (f2 = d2; 128 < f2; ) {
              if (a2[b2] != (f2 & 127 | 128))
                return e2;
              b2++;
              f2 >>= 7;
            }
            if (a2[b2++] != f2)
              break;
            for (e2++; f2 = a2[b2++], (f2 & 128) != 0; )
              ;
          }
        return e2;
      };
      jspb.utils.countFixedFields_ = function(a2, b2, c2, d2, e2) {
        var f2 = 0;
        if (128 > d2)
          for (; b2 < c2 && a2[b2++] == d2; )
            f2++, b2 += e2;
        else
          for (; b2 < c2; ) {
            for (var g = d2; 128 < g; ) {
              if (a2[b2++] != (g & 127 | 128))
                return f2;
              g >>= 7;
            }
            if (a2[b2++] != g)
              break;
            f2++;
            b2 += e2;
          }
        return f2;
      };
      jspb.utils.countFixed32Fields = function(a2, b2, c2, d2) {
        return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED32, 4);
      };
      jspb.utils.countFixed64Fields = function(a2, b2, c2, d2) {
        return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED64, 8);
      };
      jspb.utils.countDelimitedFields = function(a2, b2, c2, d2) {
        var e2 = 0;
        for (d2 = 8 * d2 + jspb.BinaryConstants.WireType.DELIMITED; b2 < c2; ) {
          for (var f2 = d2; 128 < f2; ) {
            if (a2[b2++] != (f2 & 127 | 128))
              return e2;
            f2 >>= 7;
          }
          if (a2[b2++] != f2)
            break;
          e2++;
          for (var g = 0, h = 1; f2 = a2[b2++], g += (f2 & 127) * h, h *= 128, (f2 & 128) != 0; )
            ;
          b2 += g;
        }
        return e2;
      };
      jspb.utils.debugBytesToTextFormat = function(a2) {
        var b2 = '"';
        if (a2) {
          a2 = jspb.utils.byteSourceToUint8Array(a2);
          for (var c2 = 0; c2 < a2.length; c2++)
            b2 += "\\x", 16 > a2[c2] && (b2 += "0"), b2 += a2[c2].toString(16);
        }
        return b2 + '"';
      };
      jspb.utils.debugScalarToTextFormat = function(a2) {
        return typeof a2 === "string" ? goog.string.quote(a2) : a2.toString();
      };
      jspb.utils.stringToByteArray = function(a2) {
        for (var b2 = new Uint8Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charCodeAt(c2);
          if (255 < d2)
            throw Error("Conversion error: string contains codepoint outside of byte range");
          b2[c2] = d2;
        }
        return b2;
      };
      jspb.utils.byteSourceToUint8Array = function(a2) {
        if (a2.constructor === Uint8Array)
          return a2;
        if (a2.constructor === ArrayBuffer || typeof Buffer != "undefined" && a2.constructor === Buffer || a2.constructor === Array)
          return new Uint8Array(a2);
        if (a2.constructor === String)
          return goog.crypt.base64.decodeStringToUint8Array(a2);
        goog.asserts.fail("Type not convertible to Uint8Array.");
        return new Uint8Array(0);
      };
      jspb.BinaryDecoder = function(a2, b2, c2) {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
        a2 && this.setBlock(a2, b2, c2);
      };
      jspb.BinaryDecoder.instanceCache_ = [];
      jspb.BinaryDecoder.alloc = function(a2, b2, c2) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
          var d2 = jspb.BinaryDecoder.instanceCache_.pop();
          a2 && d2.setBlock(a2, b2, c2);
          return d2;
        }
        return new jspb.BinaryDecoder(a2, b2, c2);
      };
      jspb.BinaryDecoder.prototype.free = function() {
        this.clear();
        100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
      };
      jspb.BinaryDecoder.prototype.clone = function() {
        return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
      };
      jspb.BinaryDecoder.prototype.clear = function() {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
      };
      jspb.BinaryDecoder.prototype.getBuffer = function() {
        return this.bytes_;
      };
      jspb.BinaryDecoder.prototype.setBlock = function(a2, b2, c2) {
        this.bytes_ = jspb.utils.byteSourceToUint8Array(a2);
        this.start_ = b2 !== void 0 ? b2 : 0;
        this.end_ = c2 !== void 0 ? this.start_ + c2 : this.bytes_.length;
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getEnd = function() {
        return this.end_;
      };
      jspb.BinaryDecoder.prototype.setEnd = function(a2) {
        this.end_ = a2;
      };
      jspb.BinaryDecoder.prototype.reset = function() {
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getCursor = function() {
        return this.cursor_;
      };
      jspb.BinaryDecoder.prototype.setCursor = function(a2) {
        this.cursor_ = a2;
      };
      jspb.BinaryDecoder.prototype.advance = function(a2) {
        this.cursor_ += a2;
        goog.asserts.assert(this.cursor_ <= this.end_);
      };
      jspb.BinaryDecoder.prototype.atEnd = function() {
        return this.cursor_ == this.end_;
      };
      jspb.BinaryDecoder.prototype.pastEnd = function() {
        return this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.getError = function() {
        return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a2) {
        for (var b2 = 128, c2 = 0, d2 = 0, e2 = 0; 4 > e2 && 128 <= b2; e2++)
          b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 7 * e2;
        128 <= b2 && (b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 28, d2 |= (b2 & 127) >> 4);
        if (128 <= b2)
          for (e2 = 0; 5 > e2 && 128 <= b2; e2++)
            b2 = this.bytes_[this.cursor_++], d2 |= (b2 & 127) << 7 * e2 + 3;
        if (128 > b2)
          return a2(c2 >>> 0, d2 >>> 0);
        goog.asserts.fail("Failed to read varint, encoding is invalid.");
        this.error_ = true;
      };
      jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a2) {
        return this.readSplitVarint64(function(b2, c2) {
          return jspb.utils.fromZigzag64(b2, c2, a2);
        });
      };
      jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a2) {
        var b2 = this.bytes_, c2 = this.cursor_;
        this.cursor_ += 8;
        for (var d2 = 0, e2 = 0, f2 = c2 + 7; f2 >= c2; f2--)
          d2 = d2 << 8 | b2[f2], e2 = e2 << 8 | b2[f2 + 4];
        return a2(d2, e2);
      };
      jspb.BinaryDecoder.prototype.skipVarint = function() {
        for (; this.bytes_[this.cursor_] & 128; )
          this.cursor_++;
        this.cursor_++;
      };
      jspb.BinaryDecoder.prototype.unskipVarint = function(a2) {
        for (; 128 < a2; )
          this.cursor_--, a2 >>>= 7;
        this.cursor_--;
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
        var a2 = this.bytes_;
        var b2 = a2[this.cursor_ + 0];
        var c2 = b2 & 127;
        if (128 > b2)
          return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 1];
        c2 |= (b2 & 127) << 7;
        if (128 > b2)
          return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 2];
        c2 |= (b2 & 127) << 14;
        if (128 > b2)
          return this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 3];
        c2 |= (b2 & 127) << 21;
        if (128 > b2)
          return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 4];
        c2 |= (b2 & 15) << 28;
        if (128 > b2)
          return this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), c2 >>> 0;
        this.cursor_ += 5;
        128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && goog.asserts.assert(false);
        goog.asserts.assert(this.cursor_ <= this.end_);
        return c2;
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32;
      jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
        return this.readUnsignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
        return this.readSignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
        var a2 = this.readUnsignedVarint32();
        return a2 >>> 1 ^ -(a2 & 1);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinUint64);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinInt64);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinZigzag64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readUint8 = function() {
        var a2 = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2;
      };
      jspb.BinaryDecoder.prototype.readUint16 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 0 | b2 << 8;
      };
      jspb.BinaryDecoder.prototype.readUint32 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return (a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24) >>> 0;
      };
      jspb.BinaryDecoder.prototype.readUint64 = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinUint64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readUint64String = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinUnsignedDecimalString(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readInt8 = function() {
        var a2 = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 24 >> 24;
      };
      jspb.BinaryDecoder.prototype.readInt16 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return (a2 << 0 | b2 << 8) << 16 >> 16;
      };
      jspb.BinaryDecoder.prototype.readInt32 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24;
      };
      jspb.BinaryDecoder.prototype.readInt64 = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinInt64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readInt64String = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinSignedDecimalString(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readFloat = function() {
        var a2 = this.readUint32();
        return jspb.utils.joinFloat32(a2, 0);
      };
      jspb.BinaryDecoder.prototype.readDouble = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinFloat64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readBool = function() {
        return !!this.bytes_[this.cursor_++];
      };
      jspb.BinaryDecoder.prototype.readEnum = function() {
        return this.readSignedVarint32();
      };
      jspb.BinaryDecoder.prototype.readString = function(a2) {
        var b2 = this.bytes_, c2 = this.cursor_;
        a2 = c2 + a2;
        for (var d2 = [], e2 = ""; c2 < a2; ) {
          var f2 = b2[c2++];
          if (128 > f2)
            d2.push(f2);
          else if (192 > f2)
            continue;
          else if (224 > f2) {
            var g = b2[c2++];
            d2.push((f2 & 31) << 6 | g & 63);
          } else if (240 > f2) {
            g = b2[c2++];
            var h = b2[c2++];
            d2.push((f2 & 15) << 12 | (g & 63) << 6 | h & 63);
          } else if (248 > f2) {
            g = b2[c2++];
            h = b2[c2++];
            var k = b2[c2++];
            f2 = (f2 & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
            f2 -= 65536;
            d2.push((f2 >> 10 & 1023) + 55296, (f2 & 1023) + 56320);
          }
          8192 <= d2.length && (e2 += String.fromCharCode.apply(null, d2), d2.length = 0);
        }
        e2 += goog.crypt.byteArrayToString(d2);
        this.cursor_ = c2;
        return e2;
      };
      jspb.BinaryDecoder.prototype.readStringWithLength = function() {
        var a2 = this.readUnsignedVarint32();
        return this.readString(a2);
      };
      jspb.BinaryDecoder.prototype.readBytes = function(a2) {
        if (0 > a2 || this.cursor_ + a2 > this.bytes_.length)
          return this.error_ = true, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
        var b2 = this.bytes_.subarray(this.cursor_, this.cursor_ + a2);
        this.cursor_ += a2;
        goog.asserts.assert(this.cursor_ <= this.end_);
        return b2;
      };
      jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
        return this.readSplitVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
        var a2 = this.bytes_, b2 = this.cursor_, c2 = a2[b2 + 0], d2 = a2[b2 + 1], e2 = a2[b2 + 2], f2 = a2[b2 + 3], g = a2[b2 + 4], h = a2[b2 + 5], k = a2[b2 + 6];
        a2 = a2[b2 + 7];
        this.cursor_ += 8;
        return String.fromCharCode(c2, d2, e2, f2, g, h, k, a2);
      };
      jspb.BinaryReader = function(a2, b2, c2) {
        this.decoder_ = jspb.BinaryDecoder.alloc(a2, b2, c2);
        this.fieldCursor_ = this.decoder_.getCursor();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
      };
      jspb.BinaryReader.instanceCache_ = [];
      jspb.BinaryReader.alloc = function(a2, b2, c2) {
        if (jspb.BinaryReader.instanceCache_.length) {
          var d2 = jspb.BinaryReader.instanceCache_.pop();
          a2 && d2.decoder_.setBlock(a2, b2, c2);
          return d2;
        }
        return new jspb.BinaryReader(a2, b2, c2);
      };
      jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
      jspb.BinaryReader.prototype.free = function() {
        this.decoder_.clear();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
        100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
      };
      jspb.BinaryReader.prototype.getFieldCursor = function() {
        return this.fieldCursor_;
      };
      jspb.BinaryReader.prototype.getCursor = function() {
        return this.decoder_.getCursor();
      };
      jspb.BinaryReader.prototype.getBuffer = function() {
        return this.decoder_.getBuffer();
      };
      jspb.BinaryReader.prototype.getFieldNumber = function() {
        return this.nextField_;
      };
      jspb.BinaryReader.prototype.getWireType = function() {
        return this.nextWireType_;
      };
      jspb.BinaryReader.prototype.isDelimited = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
      };
      jspb.BinaryReader.prototype.isEndGroup = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
      };
      jspb.BinaryReader.prototype.getError = function() {
        return this.error_ || this.decoder_.getError();
      };
      jspb.BinaryReader.prototype.setBlock = function(a2, b2, c2) {
        this.decoder_.setBlock(a2, b2, c2);
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.reset = function() {
        this.decoder_.reset();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.advance = function(a2) {
        this.decoder_.advance(a2);
      };
      jspb.BinaryReader.prototype.nextField = function() {
        if (this.decoder_.atEnd())
          return false;
        if (this.getError())
          return goog.asserts.fail("Decoder hit an error"), false;
        this.fieldCursor_ = this.decoder_.getCursor();
        var a2 = this.decoder_.readUnsignedVarint32(), b2 = a2 >>> 3;
        a2 &= 7;
        if (a2 != jspb.BinaryConstants.WireType.VARINT && a2 != jspb.BinaryConstants.WireType.FIXED32 && a2 != jspb.BinaryConstants.WireType.FIXED64 && a2 != jspb.BinaryConstants.WireType.DELIMITED && a2 != jspb.BinaryConstants.WireType.START_GROUP && a2 != jspb.BinaryConstants.WireType.END_GROUP)
          return goog.asserts.fail("Invalid wire type: %s (at position %s)", a2, this.fieldCursor_), this.error_ = true, false;
        this.nextField_ = b2;
        this.nextWireType_ = a2;
        return true;
      };
      jspb.BinaryReader.prototype.unskipHeader = function() {
        this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
      };
      jspb.BinaryReader.prototype.skipMatchingFields = function() {
        var a2 = this.nextField_;
        for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == a2; )
          this.skipField();
        this.decoder_.atEnd() || this.unskipHeader();
      };
      jspb.BinaryReader.prototype.skipVarintField = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
      };
      jspb.BinaryReader.prototype.skipDelimitedField = function() {
        if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
          goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
        else {
          var a2 = this.decoder_.readUnsignedVarint32();
          this.decoder_.advance(a2);
        }
      };
      jspb.BinaryReader.prototype.skipFixed32Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
      };
      jspb.BinaryReader.prototype.skipFixed64Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
      };
      jspb.BinaryReader.prototype.skipGroup = function() {
        var a2 = this.nextField_;
        do {
          if (!this.nextField()) {
            goog.asserts.fail("Unmatched start-group tag: stream EOF");
            this.error_ = true;
            break;
          }
          if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != a2 && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = true);
            break;
          }
          this.skipField();
        } while (1);
      };
      jspb.BinaryReader.prototype.skipField = function() {
        switch (this.nextWireType_) {
          case jspb.BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
          case jspb.BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
          case jspb.BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
          case jspb.BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
          case jspb.BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
          default:
            goog.asserts.fail("Invalid wire encoding for field.");
        }
      };
      jspb.BinaryReader.prototype.registerReadCallback = function(a2, b2) {
        this.readCallbacks_ === null && (this.readCallbacks_ = {});
        goog.asserts.assert(!this.readCallbacks_[a2]);
        this.readCallbacks_[a2] = b2;
      };
      jspb.BinaryReader.prototype.runReadCallback = function(a2) {
        goog.asserts.assert(this.readCallbacks_ !== null);
        a2 = this.readCallbacks_[a2];
        goog.asserts.assert(a2);
        return a2(this);
      };
      jspb.BinaryReader.prototype.readAny = function(a2) {
        this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a2);
        var b2 = jspb.BinaryConstants.FieldType;
        switch (a2) {
          case b2.DOUBLE:
            return this.readDouble();
          case b2.FLOAT:
            return this.readFloat();
          case b2.INT64:
            return this.readInt64();
          case b2.UINT64:
            return this.readUint64();
          case b2.INT32:
            return this.readInt32();
          case b2.FIXED64:
            return this.readFixed64();
          case b2.FIXED32:
            return this.readFixed32();
          case b2.BOOL:
            return this.readBool();
          case b2.STRING:
            return this.readString();
          case b2.GROUP:
            goog.asserts.fail("Group field type not supported in readAny()");
          case b2.MESSAGE:
            goog.asserts.fail("Message field type not supported in readAny()");
          case b2.BYTES:
            return this.readBytes();
          case b2.UINT32:
            return this.readUint32();
          case b2.ENUM:
            return this.readEnum();
          case b2.SFIXED32:
            return this.readSfixed32();
          case b2.SFIXED64:
            return this.readSfixed64();
          case b2.SINT32:
            return this.readSint32();
          case b2.SINT64:
            return this.readSint64();
          case b2.FHASH64:
            return this.readFixedHash64();
          case b2.VHASH64:
            return this.readVarintHash64();
          default:
            goog.asserts.fail("Invalid field type in readAny()");
        }
        return 0;
      };
      jspb.BinaryReader.prototype.readMessage = function(a2, b2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var c2 = this.decoder_.getEnd(), d2 = this.decoder_.readUnsignedVarint32();
        d2 = this.decoder_.getCursor() + d2;
        this.decoder_.setEnd(d2);
        b2(a2, this);
        this.decoder_.setCursor(d2);
        this.decoder_.setEnd(c2);
      };
      jspb.BinaryReader.prototype.readGroup = function(a2, b2, c2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
        goog.asserts.assert(this.nextField_ == a2);
        c2(b2, this);
        this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
      };
      jspb.BinaryReader.prototype.getFieldDecoder = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32(), b2 = this.decoder_.getCursor(), c2 = b2 + a2;
        a2 = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b2, a2);
        this.decoder_.setCursor(c2);
        return a2;
      };
      jspb.BinaryReader.prototype.readInt32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32();
      };
      jspb.BinaryReader.prototype.readInt32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32String();
      };
      jspb.BinaryReader.prototype.readInt64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      jspb.BinaryReader.prototype.readInt64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64String();
      };
      jspb.BinaryReader.prototype.readUint32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32();
      };
      jspb.BinaryReader.prototype.readUint32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32String();
      };
      jspb.BinaryReader.prototype.readUint64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64();
      };
      jspb.BinaryReader.prototype.readUint64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64String();
      };
      jspb.BinaryReader.prototype.readSint32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint32();
      };
      jspb.BinaryReader.prototype.readSint64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64();
      };
      jspb.BinaryReader.prototype.readSint64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64String();
      };
      jspb.BinaryReader.prototype.readFixed32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readUint32();
      };
      jspb.BinaryReader.prototype.readFixed64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64();
      };
      jspb.BinaryReader.prototype.readFixed64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64String();
      };
      jspb.BinaryReader.prototype.readSfixed32 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32();
      };
      jspb.BinaryReader.prototype.readSfixed32String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32().toString();
      };
      jspb.BinaryReader.prototype.readSfixed64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64();
      };
      jspb.BinaryReader.prototype.readSfixed64String = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64String();
      };
      jspb.BinaryReader.prototype.readFloat = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readFloat();
      };
      jspb.BinaryReader.prototype.readDouble = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readDouble();
      };
      jspb.BinaryReader.prototype.readBool = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return !!this.decoder_.readUnsignedVarint32();
      };
      jspb.BinaryReader.prototype.readEnum = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      jspb.BinaryReader.prototype.readString = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readString(a2);
      };
      jspb.BinaryReader.prototype.readBytes = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readBytes(a2);
      };
      jspb.BinaryReader.prototype.readVarintHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readVarintHash64();
      };
      jspb.BinaryReader.prototype.readSintHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarintHash64();
      };
      jspb.BinaryReader.prototype.readSplitVarint64 = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(a2);
      };
      jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(function(b2, c2) {
          return jspb.utils.fromZigzag64(b2, c2, a2);
        });
      };
      jspb.BinaryReader.prototype.readFixedHash64 = function() {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readFixedHash64();
      };
      jspb.BinaryReader.prototype.readSplitFixed64 = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readSplitFixed64(a2);
      };
      jspb.BinaryReader.prototype.readPackedField_ = function(a2) {
        goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var b2 = this.decoder_.readUnsignedVarint32();
        b2 = this.decoder_.getCursor() + b2;
        for (var c2 = []; this.decoder_.getCursor() < b2; )
          c2.push(a2.call(this.decoder_));
        return c2;
      };
      jspb.BinaryReader.prototype.readPackedInt32 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32);
      };
      jspb.BinaryReader.prototype.readPackedInt32String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedInt64 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64);
      };
      jspb.BinaryReader.prototype.readPackedInt64String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedUint32 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32);
      };
      jspb.BinaryReader.prototype.readPackedUint32String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedUint64 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64);
      };
      jspb.BinaryReader.prototype.readPackedUint64String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedSint32 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint32);
      };
      jspb.BinaryReader.prototype.readPackedSint64 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64);
      };
      jspb.BinaryReader.prototype.readPackedSint64String = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedFixed32 = function() {
        return this.readPackedField_(this.decoder_.readUint32);
      };
      jspb.BinaryReader.prototype.readPackedFixed64 = function() {
        return this.readPackedField_(this.decoder_.readUint64);
      };
      jspb.BinaryReader.prototype.readPackedFixed64String = function() {
        return this.readPackedField_(this.decoder_.readUint64String);
      };
      jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
        return this.readPackedField_(this.decoder_.readInt32);
      };
      jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
        return this.readPackedField_(this.decoder_.readInt64);
      };
      jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
        return this.readPackedField_(this.decoder_.readInt64String);
      };
      jspb.BinaryReader.prototype.readPackedFloat = function() {
        return this.readPackedField_(this.decoder_.readFloat);
      };
      jspb.BinaryReader.prototype.readPackedDouble = function() {
        return this.readPackedField_(this.decoder_.readDouble);
      };
      jspb.BinaryReader.prototype.readPackedBool = function() {
        return this.readPackedField_(this.decoder_.readBool);
      };
      jspb.BinaryReader.prototype.readPackedEnum = function() {
        return this.readPackedField_(this.decoder_.readEnum);
      };
      jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
        return this.readPackedField_(this.decoder_.readVarintHash64);
      };
      jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
        return this.readPackedField_(this.decoder_.readFixedHash64);
      };
      jspb.BinaryEncoder = function() {
        this.buffer_ = [];
      };
      jspb.BinaryEncoder.prototype.length = function() {
        return this.buffer_.length;
      };
      jspb.BinaryEncoder.prototype.end = function() {
        var a2 = this.buffer_;
        this.buffer_ = [];
        return a2;
      };
      jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a2, b2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(b2 == Math.floor(b2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        for (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32); 0 < b2 || 127 < a2; )
          this.buffer_.push(a2 & 127 | 128), a2 = (a2 >>> 7 | b2 << 25) >>> 0, b2 >>>= 7;
        this.buffer_.push(a2);
      };
      jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a2, b2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(b2 == Math.floor(b2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32);
        this.writeUint32(a2);
        this.writeUint32(b2);
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        for (goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32); 127 < a2; )
          this.buffer_.push(a2 & 127 | 128), a2 >>>= 7;
        this.buffer_.push(a2);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        if (0 <= a2)
          this.writeUnsignedVarint32(a2);
        else {
          for (var b2 = 0; 9 > b2; b2++)
            this.buffer_.push(a2 & 127 | 128), a2 >>= 7;
          this.buffer_.push(1);
        }
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitInt64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.writeUnsignedVarint32((a2 << 1 ^ a2 >> 31) >>> 0);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitZigzag64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a2) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a2));
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a2) {
        var b2 = this;
        jspb.utils.splitHash64(a2);
        jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a3, d2) {
          b2.writeSplitVarint64(a3 >>> 0, d2 >>> 0);
        });
      };
      jspb.BinaryEncoder.prototype.writeUint8 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && 256 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint16 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && 65536 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
        this.buffer_.push(a2 >>> 16 & 255);
        this.buffer_.push(a2 >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitUint64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt8 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(-128 <= a2 && 128 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt16 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(-32768 <= a2 && 32768 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt32 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
        this.buffer_.push(a2 >>> 16 & 255);
        this.buffer_.push(a2 >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt64 = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a2);
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt64String = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(+a2 >= -jspb.BinaryConstants.TWO_TO_63 && +a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFloat = function(a2) {
        goog.asserts.assert(a2 === Infinity || a2 === -Infinity || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT32_MAX && a2 <= jspb.BinaryConstants.FLOAT32_MAX);
        jspb.utils.splitFloat32(a2);
        this.writeUint32(jspb.utils.split64Low);
      };
      jspb.BinaryEncoder.prototype.writeDouble = function(a2) {
        goog.asserts.assert(a2 === Infinity || a2 === -Infinity || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT64_MAX && a2 <= jspb.BinaryConstants.FLOAT64_MAX);
        jspb.utils.splitFloat64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeBool = function(a2) {
        goog.asserts.assert(typeof a2 === "boolean" || typeof a2 === "number");
        this.buffer_.push(a2 ? 1 : 0);
      };
      jspb.BinaryEncoder.prototype.writeEnum = function(a2) {
        goog.asserts.assert(a2 == Math.floor(a2));
        goog.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.writeSignedVarint32(a2);
      };
      jspb.BinaryEncoder.prototype.writeBytes = function(a2) {
        this.buffer_.push.apply(this.buffer_, a2);
      };
      jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a2) {
        jspb.utils.splitHash64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a2) {
        jspb.utils.splitHash64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeString = function(a2) {
        for (var b2 = this.buffer_.length, c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charCodeAt(c2);
          if (128 > d2)
            this.buffer_.push(d2);
          else if (2048 > d2)
            this.buffer_.push(d2 >> 6 | 192), this.buffer_.push(d2 & 63 | 128);
          else if (65536 > d2)
            if (55296 <= d2 && 56319 >= d2 && c2 + 1 < a2.length) {
              var e2 = a2.charCodeAt(c2 + 1);
              56320 <= e2 && 57343 >= e2 && (d2 = 1024 * (d2 - 55296) + e2 - 56320 + 65536, this.buffer_.push(d2 >> 18 | 240), this.buffer_.push(d2 >> 12 & 63 | 128), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128), c2++);
            } else
              this.buffer_.push(d2 >> 12 | 224), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128);
        }
        return this.buffer_.length - b2;
      };
      jspb.arith = {};
      jspb.arith.UInt64 = function(a2, b2) {
        this.lo = a2;
        this.hi = b2;
      };
      jspb.arith.UInt64.prototype.cmp = function(a2) {
        return this.hi < a2.hi || this.hi == a2.hi && this.lo < a2.lo ? -1 : this.hi == a2.hi && this.lo == a2.lo ? 0 : 1;
      };
      jspb.arith.UInt64.prototype.rightShift = function() {
        return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
      };
      jspb.arith.UInt64.prototype.leftShift = function() {
        return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
      };
      jspb.arith.UInt64.prototype.msb = function() {
        return !!(this.hi & 2147483648);
      };
      jspb.arith.UInt64.prototype.lsb = function() {
        return !!(this.lo & 1);
      };
      jspb.arith.UInt64.prototype.zero = function() {
        return this.lo == 0 && this.hi == 0;
      };
      jspb.arith.UInt64.prototype.add = function(a2) {
        return new jspb.arith.UInt64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.prototype.sub = function(a2) {
        return new jspb.arith.UInt64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.mul32x32 = function(a2, b2) {
        var c2 = a2 & 65535;
        a2 >>>= 16;
        var d2 = b2 & 65535, e2 = b2 >>> 16;
        b2 = c2 * d2 + 65536 * (c2 * e2 & 65535) + 65536 * (a2 * d2 & 65535);
        for (c2 = a2 * e2 + (c2 * e2 >>> 16) + (a2 * d2 >>> 16); 4294967296 <= b2; )
          b2 -= 4294967296, c2 += 1;
        return new jspb.arith.UInt64(b2 >>> 0, c2 >>> 0);
      };
      jspb.arith.UInt64.prototype.mul = function(a2) {
        var b2 = jspb.arith.UInt64.mul32x32(this.lo, a2);
        a2 = jspb.arith.UInt64.mul32x32(this.hi, a2);
        a2.hi = a2.lo;
        a2.lo = 0;
        return b2.add(a2);
      };
      jspb.arith.UInt64.prototype.div = function(a2) {
        if (a2 == 0)
          return [];
        var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(this.lo, this.hi);
        a2 = new jspb.arith.UInt64(a2, 0);
        for (var d2 = new jspb.arith.UInt64(1, 0); !a2.msb(); )
          a2 = a2.leftShift(), d2 = d2.leftShift();
        for (; !d2.zero(); )
          0 >= a2.cmp(c2) && (b2 = b2.add(d2), c2 = c2.sub(a2)), a2 = a2.rightShift(), d2 = d2.rightShift();
        return [b2, c2];
      };
      jspb.arith.UInt64.prototype.toString = function() {
        for (var a2 = "", b2 = this; !b2.zero(); ) {
          b2 = b2.div(10);
          var c2 = b2[0];
          a2 = b2[1].lo + a2;
          b2 = c2;
        }
        a2 == "" && (a2 = "0");
        return a2;
      };
      jspb.arith.UInt64.fromString = function(a2) {
        for (var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(0, 0), d2 = 0; d2 < a2.length; d2++) {
          if ("0" > a2[d2] || "9" < a2[d2])
            return null;
          var e2 = parseInt(a2[d2], 10);
          c2.lo = e2;
          b2 = b2.mul(10).add(c2);
        }
        return b2;
      };
      jspb.arith.UInt64.prototype.clone = function() {
        return new jspb.arith.UInt64(this.lo, this.hi);
      };
      jspb.arith.Int64 = function(a2, b2) {
        this.lo = a2;
        this.hi = b2;
      };
      jspb.arith.Int64.prototype.add = function(a2) {
        return new jspb.arith.Int64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.sub = function(a2) {
        return new jspb.arith.Int64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.clone = function() {
        return new jspb.arith.Int64(this.lo, this.hi);
      };
      jspb.arith.Int64.prototype.toString = function() {
        var a2 = (this.hi & 2147483648) != 0, b2 = new jspb.arith.UInt64(this.lo, this.hi);
        a2 && (b2 = new jspb.arith.UInt64(0, 0).sub(b2));
        return (a2 ? "-" : "") + b2.toString();
      };
      jspb.arith.Int64.fromString = function(a2) {
        var b2 = 0 < a2.length && a2[0] == "-";
        b2 && (a2 = a2.substring(1));
        a2 = jspb.arith.UInt64.fromString(a2);
        if (a2 === null)
          return null;
        b2 && (a2 = new jspb.arith.UInt64(0, 0).sub(a2));
        return new jspb.arith.Int64(a2.lo, a2.hi);
      };
      jspb.BinaryWriter = function() {
        this.blocks_ = [];
        this.totalLength_ = 0;
        this.encoder_ = new jspb.BinaryEncoder();
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.appendUint8Array_ = function(a2) {
        var b2 = this.encoder_.end();
        this.blocks_.push(b2);
        this.blocks_.push(a2);
        this.totalLength_ += b2.length + a2.length;
      };
      jspb.BinaryWriter.prototype.beginDelimited_ = function(a2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED);
        a2 = this.encoder_.end();
        this.blocks_.push(a2);
        this.totalLength_ += a2.length;
        a2.push(this.totalLength_);
        return a2;
      };
      jspb.BinaryWriter.prototype.endDelimited_ = function(a2) {
        var b2 = a2.pop();
        b2 = this.totalLength_ + this.encoder_.length() - b2;
        for (goog.asserts.assert(0 <= b2); 127 < b2; )
          a2.push(b2 & 127 | 128), b2 >>>= 7, this.totalLength_++;
        a2.push(b2);
        this.totalLength_++;
      };
      jspb.BinaryWriter.prototype.writeSerializedMessage = function(a2, b2, c2) {
        this.appendUint8Array_(a2.subarray(b2, c2));
      };
      jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a2, b2, c2) {
        a2 != null && b2 != null && c2 != null && this.writeSerializedMessage(a2, b2, c2);
      };
      jspb.BinaryWriter.prototype.reset = function() {
        this.blocks_ = [];
        this.encoder_.end();
        this.totalLength_ = 0;
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.getResultBuffer = function() {
        goog.asserts.assert(this.bookmarks_.length == 0);
        for (var a2 = new Uint8Array(this.totalLength_ + this.encoder_.length()), b2 = this.blocks_, c2 = b2.length, d2 = 0, e2 = 0; e2 < c2; e2++) {
          var f2 = b2[e2];
          a2.set(f2, d2);
          d2 += f2.length;
        }
        b2 = this.encoder_.end();
        a2.set(b2, d2);
        d2 += b2.length;
        goog.asserts.assert(d2 == a2.length);
        this.blocks_ = [a2];
        return a2;
      };
      jspb.BinaryWriter.prototype.getResultBase64String = function(a2) {
        return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a2);
      };
      jspb.BinaryWriter.prototype.beginSubMessage = function(a2) {
        this.bookmarks_.push(this.beginDelimited_(a2));
      };
      jspb.BinaryWriter.prototype.endSubMessage = function() {
        goog.asserts.assert(0 <= this.bookmarks_.length);
        this.endDelimited_(this.bookmarks_.pop());
      };
      jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a2, b2) {
        goog.asserts.assert(1 <= a2 && a2 == Math.floor(a2));
        this.encoder_.writeUnsignedVarint32(8 * a2 + b2);
      };
      jspb.BinaryWriter.prototype.writeAny = function(a2, b2, c2) {
        var d2 = jspb.BinaryConstants.FieldType;
        switch (a2) {
          case d2.DOUBLE:
            this.writeDouble(b2, c2);
            break;
          case d2.FLOAT:
            this.writeFloat(b2, c2);
            break;
          case d2.INT64:
            this.writeInt64(b2, c2);
            break;
          case d2.UINT64:
            this.writeUint64(b2, c2);
            break;
          case d2.INT32:
            this.writeInt32(b2, c2);
            break;
          case d2.FIXED64:
            this.writeFixed64(b2, c2);
            break;
          case d2.FIXED32:
            this.writeFixed32(b2, c2);
            break;
          case d2.BOOL:
            this.writeBool(b2, c2);
            break;
          case d2.STRING:
            this.writeString(b2, c2);
            break;
          case d2.GROUP:
            goog.asserts.fail("Group field type not supported in writeAny()");
            break;
          case d2.MESSAGE:
            goog.asserts.fail("Message field type not supported in writeAny()");
            break;
          case d2.BYTES:
            this.writeBytes(b2, c2);
            break;
          case d2.UINT32:
            this.writeUint32(b2, c2);
            break;
          case d2.ENUM:
            this.writeEnum(b2, c2);
            break;
          case d2.SFIXED32:
            this.writeSfixed32(b2, c2);
            break;
          case d2.SFIXED64:
            this.writeSfixed64(b2, c2);
            break;
          case d2.SINT32:
            this.writeSint32(b2, c2);
            break;
          case d2.SINT64:
            this.writeSint64(b2, c2);
            break;
          case d2.FHASH64:
            this.writeFixedHash64(b2, c2);
            break;
          case d2.VHASH64:
            this.writeVarintHash64(b2, c2);
            break;
          default:
            goog.asserts.fail("Invalid field type in writeAny()");
        }
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeInt32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeInt32String = function(a2, b2) {
        b2 != null && (b2 = parseInt(b2, 10), goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeInt64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeInt64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeUint32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeUint32String = function(a2, b2) {
        b2 != null && (b2 = parseInt(b2, 10), goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeUint64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeUint64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeSint32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeSint64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeSintHash64 = function(a2, b2) {
        b2 != null && this.writeZigzagVarintHash64_(a2, b2);
      };
      jspb.BinaryWriter.prototype.writeSint64String = function(a2, b2) {
        b2 != null && this.writeZigzagVarint64String_(a2, b2);
      };
      jspb.BinaryWriter.prototype.writeFixed32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b2));
      };
      jspb.BinaryWriter.prototype.writeFixed64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b2));
      };
      jspb.BinaryWriter.prototype.writeFixed64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeSfixed32 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b2));
      };
      jspb.BinaryWriter.prototype.writeSfixed64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b2));
      };
      jspb.BinaryWriter.prototype.writeSfixed64String = function(a2, b2) {
        b2 != null && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeFloat = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b2));
      };
      jspb.BinaryWriter.prototype.writeDouble = function(a2, b2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b2));
      };
      jspb.BinaryWriter.prototype.writeBool = function(a2, b2) {
        b2 != null && (goog.asserts.assert(typeof b2 === "boolean" || typeof b2 === "number"), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b2));
      };
      jspb.BinaryWriter.prototype.writeEnum = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeString = function(a2, b2) {
        b2 != null && (a2 = this.beginDelimited_(a2), this.encoder_.writeString(b2), this.endDelimited_(a2));
      };
      jspb.BinaryWriter.prototype.writeBytes = function(a2, b2) {
        b2 != null && (b2 = jspb.utils.byteSourceToUint8Array(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), this.appendUint8Array_(b2));
      };
      jspb.BinaryWriter.prototype.writeMessage = function(a2, b2, c2) {
        b2 != null && (a2 = this.beginDelimited_(a2), c2(b2, this), this.endDelimited_(a2));
      };
      jspb.BinaryWriter.prototype.writeMessageSet = function(a2, b2, c2) {
        b2 != null && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a2), a2 = this.beginDelimited_(3), c2(b2, this), this.endDelimited_(a2), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
      };
      jspb.BinaryWriter.prototype.writeGroup = function(a2, b2, c2) {
        b2 != null && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2, this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP));
      };
      jspb.BinaryWriter.prototype.writeFixedHash64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2.length == 8), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeVarintHash64 = function(a2, b2) {
        b2 != null && (goog.asserts.assert(b2.length == 8), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64);
        this.encoder_.writeSplitFixed64(b2, c2);
      };
      jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
        this.encoder_.writeSplitVarint64(b2, c2);
      };
      jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
        var d2 = this.encoder_;
        jspb.utils.toZigzag64(b2, c2, function(a3, b3) {
          d2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
        });
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSignedVarint32_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeInt32String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSignedVarint64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a2, b2, c2, d2) {
        if (b2 != null)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitFixed64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitVarint64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitZigzagVarint64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeInt64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUnsignedVarint32_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUint32String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUnsignedVarint64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUint64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint32_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint64String_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarintHash64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed32(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed32(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFloat(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeDouble(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedBool = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeBool(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeEnum(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedString = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeString(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeBytes(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a2, b2, c2) {
        if (b2 != null)
          for (var d2 = 0; d2 < b2.length; d2++) {
            var e2 = this.beginDelimited_(a2);
            c2(b2[d2], this);
            this.endDelimited_(e2);
          }
      };
      jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a2, b2, c2) {
        if (b2 != null)
          for (var d2 = 0; d2 < b2.length; d2++)
            this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2[d2], this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixedHash64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a2, b2) {
        if (b2 != null)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeVarintHash64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writePackedInt32 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt32String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint32(parseInt(b2[c2], 10));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a2, b2, c2, d2) {
        if (b2 != null) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = 0; e2 < b2.length; e2++)
            this.encoder_.writeSplitFixed64(c2(b2[e2]), d2(b2[e2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = 0; e2 < b2.length; e2++)
            this.encoder_.writeSplitVarint64(c2(b2[e2]), d2(b2[e2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
        if (b2 != null) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = this.encoder_, f2 = 0; f2 < b2.length; f2++)
            jspb.utils.toZigzag64(c2(b2[f2]), d2(b2[f2]), function(a3, b3) {
              e2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
            });
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++) {
            var d2 = jspb.arith.Int64.fromString(b2[c2]);
            this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
          }
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint32 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint32String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint32(parseInt(b2[c2], 10));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint64String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++) {
            var d2 = jspb.arith.UInt64.fromString(b2[c2]);
            this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
          }
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint32 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint64String = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b2[c2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarintHash64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedFixed32 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeUint32(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedFixed64 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeUint64(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedFixed64String = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++) {
            var c2 = jspb.arith.UInt64.fromString(b2[a2]);
            this.encoder_.writeSplitFixed64(c2.lo, c2.hi);
          }
      };
      jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt32(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt64(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt64String(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedFloat = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeFloat(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedDouble = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeDouble(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedBool = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeBool(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedEnum = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeEnum(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a2, b2) {
        if (b2 != null && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeFixedHash64(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a2, b2) {
        if (b2 != null && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeVarintHash64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.Map = function(a2, b2) {
        this.arr_ = a2;
        this.valueCtor_ = b2;
        this.map_ = {};
        this.arrClean = true;
        0 < this.arr_.length && this.loadFromArray_();
      };
      jspb.Map.prototype.loadFromArray_ = function() {
        for (var a2 = 0; a2 < this.arr_.length; a2++) {
          var b2 = this.arr_[a2], c2 = b2[0];
          this.map_[c2.toString()] = new jspb.Map.Entry_(c2, b2[1]);
        }
        this.arrClean = true;
      };
      jspb.Map.prototype.toArray = function() {
        if (this.arrClean) {
          if (this.valueCtor_) {
            var a2 = this.map_, b2;
            for (b2 in a2)
              if (Object.prototype.hasOwnProperty.call(a2, b2)) {
                var c2 = a2[b2].valueWrapper;
                c2 && c2.toArray();
              }
          }
        } else {
          this.arr_.length = 0;
          a2 = this.stringKeys_();
          a2.sort();
          for (b2 = 0; b2 < a2.length; b2++) {
            var d2 = this.map_[a2[b2]];
            (c2 = d2.valueWrapper) && c2.toArray();
            this.arr_.push([d2.key, d2.value]);
          }
          this.arrClean = true;
        }
        return this.arr_;
      };
      jspb.Map.prototype.toObject = function(a2, b2) {
        for (var c2 = this.toArray(), d2 = [], e2 = 0; e2 < c2.length; e2++) {
          var f2 = this.map_[c2[e2][0].toString()];
          this.wrapEntry_(f2);
          var g = f2.valueWrapper;
          g ? (goog.asserts.assert(b2), d2.push([f2.key, b2(a2, g)])) : d2.push([f2.key, f2.value]);
        }
        return d2;
      };
      jspb.Map.fromObject = function(a2, b2, c2) {
        b2 = new jspb.Map([], b2);
        for (var d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2[d2][0], f2 = c2(a2[d2][1]);
          b2.set(e2, f2);
        }
        return b2;
      };
      jspb.Map.ArrayIteratorIterable_ = function(a2) {
        this.idx_ = 0;
        this.arr_ = a2;
      };
      jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
        return this.idx_ < this.arr_.length ? { done: false, value: this.arr_[this.idx_++] } : { done: true, value: void 0 };
      };
      typeof Symbol != "undefined" && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
        return this;
      });
      jspb.Map.prototype.getLength = function() {
        return this.stringKeys_().length;
      };
      jspb.Map.prototype.clear = function() {
        this.map_ = {};
        this.arrClean = false;
      };
      jspb.Map.prototype.del = function(a2) {
        a2 = a2.toString();
        var b2 = this.map_.hasOwnProperty(a2);
        delete this.map_[a2];
        this.arrClean = false;
        return b2;
      };
      jspb.Map.prototype.getEntryList = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = this.map_[b2[c2]];
          a2.push([d2.key, d2.value]);
        }
        return a2;
      };
      jspb.Map.prototype.entries = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = this.map_[b2[c2]];
          a2.push([d2.key, this.wrapEntry_(d2)]);
        }
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      jspb.Map.prototype.keys = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++)
          a2.push(this.map_[b2[c2]].key);
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      jspb.Map.prototype.values = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++)
          a2.push(this.wrapEntry_(this.map_[b2[c2]]));
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      jspb.Map.prototype.forEach = function(a2, b2) {
        var c2 = this.stringKeys_();
        c2.sort();
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = this.map_[c2[d2]];
          a2.call(b2, this.wrapEntry_(e2), e2.key, this);
        }
      };
      jspb.Map.prototype.set = function(a2, b2) {
        var c2 = new jspb.Map.Entry_(a2);
        this.valueCtor_ ? (c2.valueWrapper = b2, c2.value = b2.toArray()) : c2.value = b2;
        this.map_[a2.toString()] = c2;
        this.arrClean = false;
        return this;
      };
      jspb.Map.prototype.wrapEntry_ = function(a2) {
        return this.valueCtor_ ? (a2.valueWrapper || (a2.valueWrapper = new this.valueCtor_(a2.value)), a2.valueWrapper) : a2.value;
      };
      jspb.Map.prototype.get = function(a2) {
        if (a2 = this.map_[a2.toString()])
          return this.wrapEntry_(a2);
      };
      jspb.Map.prototype.has = function(a2) {
        return a2.toString() in this.map_;
      };
      jspb.Map.prototype.serializeBinary = function(a2, b2, c2, d2, e2) {
        var f2 = this.stringKeys_();
        f2.sort();
        for (var g = 0; g < f2.length; g++) {
          var h = this.map_[f2[g]];
          b2.beginSubMessage(a2);
          c2.call(b2, 1, h.key);
          this.valueCtor_ ? d2.call(b2, 2, this.wrapEntry_(h), e2) : d2.call(b2, 2, h.value);
          b2.endSubMessage();
        }
      };
      jspb.Map.deserializeBinary = function(a2, b2, c2, d2, e2, f2, g) {
        for (; b2.nextField() && !b2.isEndGroup(); ) {
          var h = b2.getFieldNumber();
          h == 1 ? f2 = c2.call(b2) : h == 2 && (a2.valueCtor_ ? (goog.asserts.assert(e2), g || (g = new a2.valueCtor_()), d2.call(b2, g, e2)) : g = d2.call(b2));
        }
        goog.asserts.assert(f2 != void 0);
        goog.asserts.assert(g != void 0);
        a2.set(f2, g);
      };
      jspb.Map.prototype.stringKeys_ = function() {
        var a2 = this.map_, b2 = [], c2;
        for (c2 in a2)
          Object.prototype.hasOwnProperty.call(a2, c2) && b2.push(c2);
        return b2;
      };
      jspb.Map.Entry_ = function(a2, b2) {
        this.key = a2;
        this.value = b2;
        this.valueWrapper = void 0;
      };
      jspb.ExtensionFieldInfo = function(a2, b2, c2, d2, e2) {
        this.fieldIndex = a2;
        this.fieldName = b2;
        this.ctor = c2;
        this.toObjectFn = d2;
        this.isRepeated = e2;
      };
      jspb.ExtensionFieldBinaryInfo = function(a2, b2, c2, d2, e2, f2) {
        this.fieldInfo = a2;
        this.binaryReaderFn = b2;
        this.binaryWriterFn = c2;
        this.binaryMessageSerializeFn = d2;
        this.binaryMessageDeserializeFn = e2;
        this.isPacked = f2;
      };
      jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
        return !!this.ctor;
      };
      jspb.Message = function() {
      };
      jspb.Message.GENERATE_TO_OBJECT = true;
      jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
      jspb.Message.GENERATE_TO_STRING = true;
      jspb.Message.ASSUME_LOCAL_ARRAYS = false;
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
      jspb.Message.SUPPORTS_UINT8ARRAY_ = typeof Uint8Array == "function";
      jspb.Message.prototype.getJsPbMessageId = function() {
        return this.messageId_;
      };
      jspb.Message.getIndex_ = function(a2, b2) {
        return b2 + a2.arrayIndexOffset_;
      };
      jspb.Message.hiddenES6Property_ = function() {
      };
      jspb.Message.getFieldNumber_ = function(a2, b2) {
        return b2 - a2.arrayIndexOffset_;
      };
      jspb.Message.initialize = function(a2, b2, c2, d2, e2, f2) {
        a2.wrappers_ = null;
        b2 || (b2 = c2 ? [c2] : []);
        a2.messageId_ = c2 ? String(c2) : void 0;
        a2.arrayIndexOffset_ = c2 === 0 ? -1 : 0;
        a2.array = b2;
        jspb.Message.initPivotAndExtensionObject_(a2, d2);
        a2.convertedPrimitiveFields_ = {};
        jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a2.repeatedFields = e2);
        if (e2)
          for (b2 = 0; b2 < e2.length; b2++)
            c2 = e2[b2], c2 < a2.pivot_ ? (c2 = jspb.Message.getIndex_(a2, c2), a2.array[c2] = a2.array[c2] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[c2] = a2.extensionObject_[c2] || jspb.Message.EMPTY_LIST_SENTINEL_);
        if (f2 && f2.length)
          for (b2 = 0; b2 < f2.length; b2++)
            jspb.Message.computeOneofCase(a2, f2[b2]);
      };
      jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
      jspb.Message.isArray_ = function(a2) {
        return jspb.Message.ASSUME_LOCAL_ARRAYS ? a2 instanceof Array : Array.isArray(a2);
      };
      jspb.Message.isExtensionObject_ = function(a2) {
        return a2 !== null && typeof a2 == "object" && !jspb.Message.isArray_(a2) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array);
      };
      jspb.Message.initPivotAndExtensionObject_ = function(a2, b2) {
        var c2 = a2.array.length, d2 = -1;
        if (c2 && (d2 = c2 - 1, c2 = a2.array[d2], jspb.Message.isExtensionObject_(c2))) {
          a2.pivot_ = jspb.Message.getFieldNumber_(a2, d2);
          a2.extensionObject_ = c2;
          return;
        }
        -1 < b2 ? (a2.pivot_ = Math.max(b2, jspb.Message.getFieldNumber_(a2, d2 + 1)), a2.extensionObject_ = null) : a2.pivot_ = Number.MAX_VALUE;
      };
      jspb.Message.maybeInitEmptyExtensionObject_ = function(a2) {
        var b2 = jspb.Message.getIndex_(a2, a2.pivot_);
        a2.array[b2] || (a2.extensionObject_ = a2.array[b2] = {});
      };
      jspb.Message.toObjectList = function(a2, b2, c2) {
        for (var d2 = [], e2 = 0; e2 < a2.length; e2++)
          d2[e2] = b2.call(a2[e2], c2, a2[e2]);
        return d2;
      };
      jspb.Message.toObjectExtension = function(a2, b2, c2, d2, e2) {
        for (var f2 in c2) {
          var g = c2[f2], h = d2.call(a2, g);
          if (h != null) {
            for (var k in g.fieldName)
              if (g.fieldName.hasOwnProperty(k))
                break;
            b2[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e2) : g.toObjectFn(e2, h) : h;
          }
        }
      };
      jspb.Message.serializeBinaryExtensions = function(a2, b2, c2, d2) {
        for (var e2 in c2) {
          var f2 = c2[e2], g = f2.fieldInfo;
          if (!f2.binaryWriterFn)
            throw Error("Message extension present that was generated without binary serialization support");
          var h = d2.call(a2, g);
          if (h != null)
            if (g.isMessageType())
              if (f2.binaryMessageSerializeFn)
                f2.binaryWriterFn.call(b2, g.fieldIndex, h, f2.binaryMessageSerializeFn);
              else
                throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
            else
              f2.binaryWriterFn.call(b2, g.fieldIndex, h);
        }
      };
      jspb.Message.readBinaryExtension = function(a2, b2, c2, d2, e2) {
        var f2 = c2[b2.getFieldNumber()];
        if (f2) {
          c2 = f2.fieldInfo;
          if (!f2.binaryReaderFn)
            throw Error("Deserializing extension whose generated code does not support binary format");
          if (c2.isMessageType()) {
            var g = new c2.ctor();
            f2.binaryReaderFn.call(b2, g, f2.binaryMessageDeserializeFn);
          } else
            g = f2.binaryReaderFn.call(b2);
          c2.isRepeated && !f2.isPacked ? (b2 = d2.call(a2, c2)) ? b2.push(g) : e2.call(a2, c2, [g]) : e2.call(a2, c2, g);
        } else
          b2.skipField();
      };
      jspb.Message.getField = function(a2, b2) {
        if (b2 < a2.pivot_) {
          b2 = jspb.Message.getIndex_(a2, b2);
          var c2 = a2.array[b2];
          return c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.array[b2] = [] : c2;
        }
        if (a2.extensionObject_)
          return c2 = a2.extensionObject_[b2], c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.extensionObject_[b2] = [] : c2;
      };
      jspb.Message.getRepeatedField = function(a2, b2) {
        return jspb.Message.getField(a2, b2);
      };
      jspb.Message.getOptionalFloatingPointField = function(a2, b2) {
        a2 = jspb.Message.getField(a2, b2);
        return a2 == null ? a2 : +a2;
      };
      jspb.Message.getBooleanField = function(a2, b2) {
        a2 = jspb.Message.getField(a2, b2);
        return a2 == null ? a2 : !!a2;
      };
      jspb.Message.getRepeatedFloatingPointField = function(a2, b2) {
        var c2 = jspb.Message.getRepeatedField(a2, b2);
        a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
        if (!a2.convertedPrimitiveFields_[b2]) {
          for (var d2 = 0; d2 < c2.length; d2++)
            c2[d2] = +c2[d2];
          a2.convertedPrimitiveFields_[b2] = true;
        }
        return c2;
      };
      jspb.Message.getRepeatedBooleanField = function(a2, b2) {
        var c2 = jspb.Message.getRepeatedField(a2, b2);
        a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
        if (!a2.convertedPrimitiveFields_[b2]) {
          for (var d2 = 0; d2 < c2.length; d2++)
            c2[d2] = !!c2[d2];
          a2.convertedPrimitiveFields_[b2] = true;
        }
        return c2;
      };
      jspb.Message.bytesAsB64 = function(a2) {
        if (a2 == null || typeof a2 === "string")
          return a2;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
          return goog.crypt.base64.encodeByteArray(a2);
        goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a2));
        return null;
      };
      jspb.Message.bytesAsU8 = function(a2) {
        if (a2 == null || a2 instanceof Uint8Array)
          return a2;
        if (typeof a2 === "string")
          return goog.crypt.base64.decodeStringToUint8Array(a2);
        goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a2));
        return null;
      };
      jspb.Message.bytesListAsB64 = function(a2) {
        jspb.Message.assertConsistentTypes_(a2);
        return a2.length && typeof a2[0] !== "string" ? goog.array.map(a2, jspb.Message.bytesAsB64) : a2;
      };
      jspb.Message.bytesListAsU8 = function(a2) {
        jspb.Message.assertConsistentTypes_(a2);
        return !a2.length || a2[0] instanceof Uint8Array ? a2 : goog.array.map(a2, jspb.Message.bytesAsU8);
      };
      jspb.Message.assertConsistentTypes_ = function(a2) {
        if (goog.DEBUG && a2 && 1 < a2.length) {
          var b2 = goog.typeOf(a2[0]);
          goog.array.forEach(a2, function(a3) {
            goog.typeOf(a3) != b2 && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a3) + " expected " + b2);
          });
        }
      };
      jspb.Message.getFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getField(a2, b2);
        return a2 == null ? c2 : a2;
      };
      jspb.Message.getBooleanFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getBooleanField(a2, b2);
        return a2 == null ? c2 : a2;
      };
      jspb.Message.getFloatingPointFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getOptionalFloatingPointField(a2, b2);
        return a2 == null ? c2 : a2;
      };
      jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
      jspb.Message.getMapField = function(a2, b2, c2, d2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (b2 in a2.wrappers_)
          return a2.wrappers_[b2];
        var e2 = jspb.Message.getField(a2, b2);
        if (!e2) {
          if (c2)
            return;
          e2 = [];
          jspb.Message.setField(a2, b2, e2);
        }
        return a2.wrappers_[b2] = new jspb.Map(e2, d2);
      };
      jspb.Message.setField = function(a2, b2, c2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = c2 : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[b2] = c2);
        return a2;
      };
      jspb.Message.setProto3IntField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      jspb.Message.setProto3FloatField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      jspb.Message.setProto3BooleanField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, false);
      };
      jspb.Message.setProto3StringField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
      };
      jspb.Message.setProto3BytesField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
      };
      jspb.Message.setProto3EnumField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      jspb.Message.setProto3StringIntField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "0");
      };
      jspb.Message.setFieldIgnoringDefault_ = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        c2 !== d2 ? jspb.Message.setField(a2, b2, c2) : b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a2), delete a2.extensionObject_[b2]);
        return a2;
      };
      jspb.Message.addToRepeatedField = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        b2 = jspb.Message.getRepeatedField(a2, b2);
        d2 != void 0 ? b2.splice(d2, 0, c2) : b2.push(c2);
        return a2;
      };
      jspb.Message.setOneofField = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        (c2 = jspb.Message.computeOneofCase(a2, c2)) && c2 !== b2 && d2 !== void 0 && (a2.wrappers_ && c2 in a2.wrappers_ && (a2.wrappers_[c2] = void 0), jspb.Message.setField(a2, c2, void 0));
        return jspb.Message.setField(a2, b2, d2);
      };
      jspb.Message.computeOneofCase = function(a2, b2) {
        for (var c2, d2, e2 = 0; e2 < b2.length; e2++) {
          var f2 = b2[e2], g = jspb.Message.getField(a2, f2);
          g != null && (c2 = f2, d2 = g, jspb.Message.setField(a2, f2, void 0));
        }
        return c2 ? (jspb.Message.setField(a2, c2, d2), c2) : 0;
      };
      jspb.Message.getWrapperField = function(a2, b2, c2, d2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (!a2.wrappers_[c2]) {
          var e2 = jspb.Message.getField(a2, c2);
          if (d2 || e2)
            a2.wrappers_[c2] = new b2(e2);
        }
        return a2.wrappers_[c2];
      };
      jspb.Message.getRepeatedWrapperField = function(a2, b2, c2) {
        jspb.Message.wrapRepeatedField_(a2, b2, c2);
        b2 = a2.wrappers_[c2];
        b2 == jspb.Message.EMPTY_LIST_SENTINEL_ && (b2 = a2.wrappers_[c2] = []);
        return b2;
      };
      jspb.Message.wrapRepeatedField_ = function(a2, b2, c2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (!a2.wrappers_[c2]) {
          for (var d2 = jspb.Message.getRepeatedField(a2, c2), e2 = [], f2 = 0; f2 < d2.length; f2++)
            e2[f2] = new b2(d2[f2]);
          a2.wrappers_[c2] = e2;
        }
      };
      jspb.Message.setWrapperField = function(a2, b2, c2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        var d2 = c2 ? c2.toArray() : c2;
        a2.wrappers_[b2] = c2;
        return jspb.Message.setField(a2, b2, d2);
      };
      jspb.Message.setOneofWrapperField = function(a2, b2, c2, d2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        var e2 = d2 ? d2.toArray() : d2;
        a2.wrappers_[b2] = d2;
        return jspb.Message.setOneofField(a2, b2, c2, e2);
      };
      jspb.Message.setRepeatedWrapperField = function(a2, b2, c2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        c2 = c2 || [];
        for (var d2 = [], e2 = 0; e2 < c2.length; e2++)
          d2[e2] = c2[e2].toArray();
        a2.wrappers_[b2] = c2;
        return jspb.Message.setField(a2, b2, d2);
      };
      jspb.Message.addToRepeatedWrapperField = function(a2, b2, c2, d2, e2) {
        jspb.Message.wrapRepeatedField_(a2, d2, b2);
        var f2 = a2.wrappers_[b2];
        f2 || (f2 = a2.wrappers_[b2] = []);
        c2 = c2 ? c2 : new d2();
        a2 = jspb.Message.getRepeatedField(a2, b2);
        e2 != void 0 ? (f2.splice(e2, 0, c2), a2.splice(e2, 0, c2.toArray())) : (f2.push(c2), a2.push(c2.toArray()));
        return c2;
      };
      jspb.Message.toMap = function(a2, b2, c2, d2) {
        for (var e2 = {}, f2 = 0; f2 < a2.length; f2++)
          e2[b2.call(a2[f2])] = c2 ? c2.call(a2[f2], d2, a2[f2]) : a2[f2];
        return e2;
      };
      jspb.Message.prototype.syncMapFields_ = function() {
        if (this.wrappers_)
          for (var a2 in this.wrappers_) {
            var b2 = this.wrappers_[a2];
            if (Array.isArray(b2))
              for (var c2 = 0; c2 < b2.length; c2++)
                b2[c2] && b2[c2].toArray();
            else
              b2 && b2.toArray();
          }
      };
      jspb.Message.prototype.toArray = function() {
        this.syncMapFields_();
        return this.array;
      };
      jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
        this.syncMapFields_();
        return this.array.toString();
      });
      jspb.Message.prototype.getExtension = function(a2) {
        if (this.extensionObject_) {
          this.wrappers_ || (this.wrappers_ = {});
          var b2 = a2.fieldIndex;
          if (a2.isRepeated) {
            if (a2.isMessageType())
              return this.wrappers_[b2] || (this.wrappers_[b2] = goog.array.map(this.extensionObject_[b2] || [], function(b3) {
                return new a2.ctor(b3);
              })), this.wrappers_[b2];
          } else if (a2.isMessageType())
            return !this.wrappers_[b2] && this.extensionObject_[b2] && (this.wrappers_[b2] = new a2.ctor(this.extensionObject_[b2])), this.wrappers_[b2];
          return this.extensionObject_[b2];
        }
      };
      jspb.Message.prototype.setExtension = function(a2, b2) {
        this.wrappers_ || (this.wrappers_ = {});
        jspb.Message.maybeInitEmptyExtensionObject_(this);
        var c2 = a2.fieldIndex;
        a2.isRepeated ? (b2 = b2 || [], a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = goog.array.map(b2, function(a3) {
          return a3.toArray();
        })) : this.extensionObject_[c2] = b2) : a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = b2 ? b2.toArray() : b2) : this.extensionObject_[c2] = b2;
        return this;
      };
      jspb.Message.difference = function(a2, b2) {
        if (!(a2 instanceof b2.constructor))
          throw Error("Messages have different types.");
        var c2 = a2.toArray();
        b2 = b2.toArray();
        var d2 = [], e2 = 0, f2 = c2.length > b2.length ? c2.length : b2.length;
        a2.getJsPbMessageId() && (d2[0] = a2.getJsPbMessageId(), e2 = 1);
        for (; e2 < f2; e2++)
          jspb.Message.compareFields(c2[e2], b2[e2]) || (d2[e2] = b2[e2]);
        return new a2.constructor(d2);
      };
      jspb.Message.equals = function(a2, b2) {
        return a2 == b2 || !(!a2 || !b2) && a2 instanceof b2.constructor && jspb.Message.compareFields(a2.toArray(), b2.toArray());
      };
      jspb.Message.compareExtensions = function(a2, b2) {
        a2 = a2 || {};
        b2 = b2 || {};
        var c2 = {}, d2;
        for (d2 in a2)
          c2[d2] = 0;
        for (d2 in b2)
          c2[d2] = 0;
        for (d2 in c2)
          if (!jspb.Message.compareFields(a2[d2], b2[d2]))
            return false;
        return true;
      };
      jspb.Message.compareFields = function(a2, b2) {
        if (a2 == b2)
          return true;
        if (!goog.isObject(a2) || !goog.isObject(b2))
          return typeof a2 === "number" && isNaN(a2) || typeof b2 === "number" && isNaN(b2) ? String(a2) == String(b2) : false;
        if (a2.constructor != b2.constructor)
          return false;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2.constructor === Uint8Array) {
          if (a2.length != b2.length)
            return false;
          for (var c2 = 0; c2 < a2.length; c2++)
            if (a2[c2] != b2[c2])
              return false;
          return true;
        }
        if (a2.constructor === Array) {
          var d2 = void 0, e2 = void 0, f2 = Math.max(a2.length, b2.length);
          for (c2 = 0; c2 < f2; c2++) {
            var g = a2[c2], h = b2[c2];
            g && g.constructor == Object && (goog.asserts.assert(d2 === void 0), goog.asserts.assert(c2 === a2.length - 1), d2 = g, g = void 0);
            h && h.constructor == Object && (goog.asserts.assert(e2 === void 0), goog.asserts.assert(c2 === b2.length - 1), e2 = h, h = void 0);
            if (!jspb.Message.compareFields(g, h))
              return false;
          }
          return d2 || e2 ? (d2 = d2 || {}, e2 = e2 || {}, jspb.Message.compareExtensions(d2, e2)) : true;
        }
        if (a2.constructor === Object)
          return jspb.Message.compareExtensions(a2, b2);
        throw Error("Invalid type in JSPB array");
      };
      jspb.Message.prototype.cloneMessage = function() {
        return jspb.Message.cloneMessage(this);
      };
      jspb.Message.prototype.clone = function() {
        return jspb.Message.cloneMessage(this);
      };
      jspb.Message.clone = function(a2) {
        return jspb.Message.cloneMessage(a2);
      };
      jspb.Message.cloneMessage = function(a2) {
        return new a2.constructor(jspb.Message.clone_(a2.toArray()));
      };
      jspb.Message.copyInto = function(a2, b2) {
        goog.asserts.assertInstanceof(a2, jspb.Message);
        goog.asserts.assertInstanceof(b2, jspb.Message);
        goog.asserts.assert(a2.constructor == b2.constructor, "Copy source and target message should have the same type.");
        a2 = jspb.Message.clone(a2);
        for (var c2 = b2.toArray(), d2 = a2.toArray(), e2 = c2.length = 0; e2 < d2.length; e2++)
          c2[e2] = d2[e2];
        b2.wrappers_ = a2.wrappers_;
        b2.extensionObject_ = a2.extensionObject_;
      };
      jspb.Message.clone_ = function(a2) {
        if (Array.isArray(a2)) {
          for (var b2 = Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
            var d2 = a2[c2];
            d2 != null && (b2[c2] = typeof d2 == "object" ? jspb.Message.clone_(goog.asserts.assert(d2)) : d2);
          }
          return b2;
        }
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
          return new Uint8Array(a2);
        b2 = {};
        for (c2 in a2)
          d2 = a2[c2], d2 != null && (b2[c2] = typeof d2 == "object" ? jspb.Message.clone_(goog.asserts.assert(d2)) : d2);
        return b2;
      };
      jspb.Message.registerMessageType = function(a2, b2) {
        b2.messageId = a2;
      };
      jspb.Message.messageSetExtensions = {};
      jspb.Message.messageSetExtensionsBinary = {};
      jspb.Export = {};
      typeof exports === "object" && (exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = { extend: goog.object.extend }, exports.typeOf = goog.typeOf);
    }
  });

  // ../ts-protoc-gen/node_modules/google-protobuf/google/protobuf/timestamp_pb.js
  var require_timestamp_pb2 = __commonJS({
    "../ts-protoc-gen/node_modules/google-protobuf/google/protobuf/timestamp_pb.js"(exports2) {
      var jspb2 = require_google_protobuf2();
      var goog2 = jspb2;
      var global2 = function() {
        if (this) {
          return this;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof global2 !== "undefined") {
          return global2;
        }
        if (typeof self !== "undefined") {
          return self;
        }
        return Function("return this")();
      }.call(null);
      goog2.exportSymbol("proto.google.protobuf.Timestamp", null, global2);
      proto.google.protobuf.Timestamp = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.google.protobuf.Timestamp, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.google.protobuf.Timestamp.displayName = "proto.google.protobuf.Timestamp";
      }
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.google.protobuf.Timestamp.prototype.toObject = function(opt_includeInstance) {
          return proto.google.protobuf.Timestamp.toObject(opt_includeInstance, this);
        };
        proto.google.protobuf.Timestamp.toObject = function(includeInstance, msg) {
          var f2, obj = {
            seconds: jspb2.Message.getFieldWithDefault(msg, 1, 0),
            nanos: jspb2.Message.getFieldWithDefault(msg, 2, 0)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.google.protobuf.Timestamp.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.google.protobuf.Timestamp();
        return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(msg, reader);
      };
      proto.google.protobuf.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readInt64();
              msg.setSeconds(value);
              break;
            case 2:
              var value = reader.readInt32();
              msg.setNanos(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.google.protobuf.Timestamp.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.google.protobuf.Timestamp.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.google.protobuf.Timestamp.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getSeconds();
        if (f2 !== 0) {
          writer.writeInt64(1, f2);
        }
        f2 = message.getNanos();
        if (f2 !== 0) {
          writer.writeInt32(2, f2);
        }
      };
      proto.google.protobuf.Timestamp.prototype.getSeconds = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, 0);
      };
      proto.google.protobuf.Timestamp.prototype.setSeconds = function(value) {
        return jspb2.Message.setProto3IntField(this, 1, value);
      };
      proto.google.protobuf.Timestamp.prototype.getNanos = function() {
        return jspb2.Message.getFieldWithDefault(this, 2, 0);
      };
      proto.google.protobuf.Timestamp.prototype.setNanos = function(value) {
        return jspb2.Message.setProto3IntField(this, 2, value);
      };
      goog2.object.extend(exports2, proto.google.protobuf);
      proto.google.protobuf.Timestamp.prototype.toDate = function() {
        var seconds = this.getSeconds();
        var nanos = this.getNanos();
        return new Date(seconds * 1e3 + nanos / 1e6);
      };
      proto.google.protobuf.Timestamp.prototype.fromDate = function(value) {
        this.setSeconds(Math.floor(value.getTime() / 1e3));
        this.setNanos(value.getMilliseconds() * 1e6);
      };
      proto.google.protobuf.Timestamp.fromDate = function(value) {
        var timestamp = new proto.google.protobuf.Timestamp();
        timestamp.fromDate(value);
        return timestamp;
      };
    }
  });

  // ../ts-protoc-gen/gen/proto/shop_pb.js
  var require_shop_pb2 = __commonJS({
    "../ts-protoc-gen/gen/proto/shop_pb.js"(exports2) {
      var jspb2 = require_google_protobuf2();
      var goog2 = jspb2;
      var global2 = Function("return this")();
      var google_protobuf_timestamp_pb = require_timestamp_pb2();
      goog2.object.extend(proto, google_protobuf_timestamp_pb);
      goog2.exportSymbol("proto.shop.CreateOrderRequest", null, global2);
      goog2.exportSymbol("proto.shop.CreateOrderResponse", null, global2);
      goog2.exportSymbol("proto.shop.ListOrderRequest", null, global2);
      goog2.exportSymbol("proto.shop.ListOrderResponse", null, global2);
      goog2.exportSymbol("proto.shop.Order", null, global2);
      goog2.exportSymbol("proto.shop.Order.PaymentMethod", null, global2);
      proto.shop.Order = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.Order, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.Order.displayName = "proto.shop.Order";
      }
      proto.shop.CreateOrderRequest = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.CreateOrderRequest, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.CreateOrderRequest.displayName = "proto.shop.CreateOrderRequest";
      }
      proto.shop.CreateOrderResponse = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.CreateOrderResponse, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.CreateOrderResponse.displayName = "proto.shop.CreateOrderResponse";
      }
      proto.shop.ListOrderRequest = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.shop.ListOrderRequest, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.ListOrderRequest.displayName = "proto.shop.ListOrderRequest";
      }
      proto.shop.ListOrderResponse = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, proto.shop.ListOrderResponse.repeatedFields_, null);
      };
      goog2.inherits(proto.shop.ListOrderResponse, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.shop.ListOrderResponse.displayName = "proto.shop.ListOrderResponse";
      }
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.Order.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.Order.toObject(opt_includeInstance, this);
        };
        proto.shop.Order.toObject = function(includeInstance, msg) {
          var f2, obj = {
            productId: jspb2.Message.getFieldWithDefault(msg, 1, ""),
            price: jspb2.Message.getFieldWithDefault(msg, 2, 0),
            paymentMethod: jspb2.Message.getFieldWithDefault(msg, 3, 0),
            by: jspb2.Message.getFieldWithDefault(msg, 4, ""),
            at: (f2 = msg.getAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f2)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.Order.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.Order();
        return proto.shop.Order.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.Order.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readString();
              msg.setProductId(value);
              break;
            case 2:
              var value = reader.readInt32();
              msg.setPrice(value);
              break;
            case 3:
              var value = reader.readEnum();
              msg.setPaymentMethod(value);
              break;
            case 4:
              var value = reader.readString();
              msg.setBy(value);
              break;
            case 15:
              var value = new google_protobuf_timestamp_pb.Timestamp();
              reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
              msg.setAt(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.Order.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.Order.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.Order.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getProductId();
        if (f2.length > 0) {
          writer.writeString(1, f2);
        }
        f2 = message.getPrice();
        if (f2 !== 0) {
          writer.writeInt32(2, f2);
        }
        f2 = message.getPaymentMethod();
        if (f2 !== 0) {
          writer.writeEnum(3, f2);
        }
        f2 = message.getBy();
        if (f2.length > 0) {
          writer.writeString(4, f2);
        }
        f2 = message.getAt();
        if (f2 != null) {
          writer.writeMessage(15, f2, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
        }
      };
      proto.shop.Order.PaymentMethod = {
        UNKNOWN: 0,
        CACHE: 1,
        CREDIT_CARD: 2,
        QR_CODE: 3
      };
      proto.shop.Order.prototype.getProductId = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, "");
      };
      proto.shop.Order.prototype.setProductId = function(value) {
        return jspb2.Message.setProto3StringField(this, 1, value);
      };
      proto.shop.Order.prototype.getPrice = function() {
        return jspb2.Message.getFieldWithDefault(this, 2, 0);
      };
      proto.shop.Order.prototype.setPrice = function(value) {
        return jspb2.Message.setProto3IntField(this, 2, value);
      };
      proto.shop.Order.prototype.getPaymentMethod = function() {
        return jspb2.Message.getFieldWithDefault(this, 3, 0);
      };
      proto.shop.Order.prototype.setPaymentMethod = function(value) {
        return jspb2.Message.setProto3EnumField(this, 3, value);
      };
      proto.shop.Order.prototype.getBy = function() {
        return jspb2.Message.getFieldWithDefault(this, 4, "");
      };
      proto.shop.Order.prototype.setBy = function(value) {
        return jspb2.Message.setProto3StringField(this, 4, value);
      };
      proto.shop.Order.prototype.getAt = function() {
        return jspb2.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15);
      };
      proto.shop.Order.prototype.setAt = function(value) {
        return jspb2.Message.setWrapperField(this, 15, value);
      };
      proto.shop.Order.prototype.clearAt = function() {
        return this.setAt(void 0);
      };
      proto.shop.Order.prototype.hasAt = function() {
        return jspb2.Message.getField(this, 15) != null;
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.CreateOrderRequest.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.CreateOrderRequest.toObject(opt_includeInstance, this);
        };
        proto.shop.CreateOrderRequest.toObject = function(includeInstance, msg) {
          var f2, obj = {
            productId: jspb2.Message.getFieldWithDefault(msg, 1, ""),
            paymentMethod: jspb2.Message.getFieldWithDefault(msg, 2, 0)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.CreateOrderRequest.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.CreateOrderRequest();
        return proto.shop.CreateOrderRequest.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.CreateOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readString();
              msg.setProductId(value);
              break;
            case 2:
              var value = reader.readEnum();
              msg.setPaymentMethod(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.CreateOrderRequest.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.CreateOrderRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.CreateOrderRequest.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getProductId();
        if (f2.length > 0) {
          writer.writeString(1, f2);
        }
        f2 = message.getPaymentMethod();
        if (f2 !== 0) {
          writer.writeEnum(2, f2);
        }
      };
      proto.shop.CreateOrderRequest.prototype.getProductId = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, "");
      };
      proto.shop.CreateOrderRequest.prototype.setProductId = function(value) {
        return jspb2.Message.setProto3StringField(this, 1, value);
      };
      proto.shop.CreateOrderRequest.prototype.getPaymentMethod = function() {
        return jspb2.Message.getFieldWithDefault(this, 2, 0);
      };
      proto.shop.CreateOrderRequest.prototype.setPaymentMethod = function(value) {
        return jspb2.Message.setProto3EnumField(this, 2, value);
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.CreateOrderResponse.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.CreateOrderResponse.toObject(opt_includeInstance, this);
        };
        proto.shop.CreateOrderResponse.toObject = function(includeInstance, msg) {
          var f2, obj = {
            order: (f2 = msg.getOrder()) && proto.shop.Order.toObject(includeInstance, f2)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.CreateOrderResponse.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.CreateOrderResponse();
        return proto.shop.CreateOrderResponse.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.CreateOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = new proto.shop.Order();
              reader.readMessage(value, proto.shop.Order.deserializeBinaryFromReader);
              msg.setOrder(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.CreateOrderResponse.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.CreateOrderResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.CreateOrderResponse.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getOrder();
        if (f2 != null) {
          writer.writeMessage(1, f2, proto.shop.Order.serializeBinaryToWriter);
        }
      };
      proto.shop.CreateOrderResponse.prototype.getOrder = function() {
        return jspb2.Message.getWrapperField(this, proto.shop.Order, 1);
      };
      proto.shop.CreateOrderResponse.prototype.setOrder = function(value) {
        return jspb2.Message.setWrapperField(this, 1, value);
      };
      proto.shop.CreateOrderResponse.prototype.clearOrder = function() {
        return this.setOrder(void 0);
      };
      proto.shop.CreateOrderResponse.prototype.hasOrder = function() {
        return jspb2.Message.getField(this, 1) != null;
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.ListOrderRequest.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.ListOrderRequest.toObject(opt_includeInstance, this);
        };
        proto.shop.ListOrderRequest.toObject = function(includeInstance, msg) {
          var f2, obj = {
            userName: jspb2.Message.getFieldWithDefault(msg, 1, "")
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.ListOrderRequest.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.ListOrderRequest();
        return proto.shop.ListOrderRequest.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.ListOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = reader.readString();
              msg.setUserName(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.ListOrderRequest.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.ListOrderRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.ListOrderRequest.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getUserName();
        if (f2.length > 0) {
          writer.writeString(1, f2);
        }
      };
      proto.shop.ListOrderRequest.prototype.getUserName = function() {
        return jspb2.Message.getFieldWithDefault(this, 1, "");
      };
      proto.shop.ListOrderRequest.prototype.setUserName = function(value) {
        return jspb2.Message.setProto3StringField(this, 1, value);
      };
      proto.shop.ListOrderResponse.repeatedFields_ = [1];
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.shop.ListOrderResponse.prototype.toObject = function(opt_includeInstance) {
          return proto.shop.ListOrderResponse.toObject(opt_includeInstance, this);
        };
        proto.shop.ListOrderResponse.toObject = function(includeInstance, msg) {
          var f2, obj = {
            ordersList: jspb2.Message.toObjectList(msg.getOrdersList(), proto.shop.Order.toObject, includeInstance)
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.shop.ListOrderResponse.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.shop.ListOrderResponse();
        return proto.shop.ListOrderResponse.deserializeBinaryFromReader(msg, reader);
      };
      proto.shop.ListOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = new proto.shop.Order();
              reader.readMessage(value, proto.shop.Order.deserializeBinaryFromReader);
              msg.addOrders(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.shop.ListOrderResponse.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.shop.ListOrderResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.shop.ListOrderResponse.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getOrdersList();
        if (f2.length > 0) {
          writer.writeRepeatedMessage(1, f2, proto.shop.Order.serializeBinaryToWriter);
        }
      };
      proto.shop.ListOrderResponse.prototype.getOrdersList = function() {
        return jspb2.Message.getRepeatedWrapperField(this, proto.shop.Order, 1);
      };
      proto.shop.ListOrderResponse.prototype.setOrdersList = function(value) {
        return jspb2.Message.setRepeatedWrapperField(this, 1, value);
      };
      proto.shop.ListOrderResponse.prototype.addOrders = function(opt_value, opt_index) {
        return jspb2.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.shop.Order, opt_index);
      };
      proto.shop.ListOrderResponse.prototype.clearOrdersList = function() {
        return this.setOrdersList([]);
      };
      goog2.object.extend(exports2, proto.shop);
    }
  });

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
      !function(t, e2) {
        typeof exports2 == "object" && typeof module2 != "undefined" ? module2.exports = e2() : typeof define == "function" && define.amd ? define(e2) : (t = typeof globalThis != "undefined" ? globalThis : t || self).dayjs = e2();
      }(exports2, function() {
        "use strict";
        var t = 1e3, e2 = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a2 = "day", o = "week", f2 = "month", h = "quarter", c2 = "year", d2 = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e3, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e3 ? t2 : "" + Array(e3 + 1 - r2.length).join(n2) + t2;
        }, g = { s: m, z: function(t2) {
          var e3 = -t2.utcOffset(), n2 = Math.abs(e3), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e3 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e3, n2) {
          if (e3.date() < n2.date())
            return -t2(n2, e3);
          var r2 = 12 * (n2.year() - e3.year()) + (n2.month() - e3.month()), i2 = e3.clone().add(r2, f2), s2 = n2 - i2 < 0, u2 = e3.clone().add(r2 + (s2 ? -1 : 1), f2);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: f2, y: c2, w: o, d: a2, D: d2, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return t2 === void 0;
        } }, D = "en", v = {};
        v[D] = M;
        var p = function(t2) {
          return t2 instanceof _;
        }, S = function(t2, e3, n2) {
          var r2;
          if (!t2)
            return D;
          if (typeof t2 == "string")
            v[t2] && (r2 = t2), e3 && (v[t2] = e3, r2 = t2);
          else {
            var i2 = t2.name;
            v[i2] = t2, r2 = i2;
          }
          return !n2 && r2 && (D = r2), r2 || !n2 && D;
        }, w = function(t2, e3) {
          if (p(t2))
            return t2.clone();
          var n2 = typeof e3 == "object" ? e3 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, O = g;
        O.l = S, O.i = p, O.w = function(t2, e3) {
          return w(t2, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = S(t2.locale, null, true), this.parse(t2);
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e3 = t3.date, n2 = t3.utc;
              if (e3 === null)
                return new Date(NaN);
              if (O.u(e3))
                return new Date();
              if (e3 instanceof Date)
                return new Date(e3);
              if (typeof e3 == "string" && !/Z$/i.test(e3)) {
                var r2 = e3.match(l);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e3);
            }(t2), this.$x = t2.x || {}, this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return O;
          }, m2.isValid = function() {
            return !(this.$d.toString() === $);
          }, m2.isSame = function(t2, e3) {
            var n2 = w(t2);
            return this.startOf(e3) <= n2 && n2 <= this.endOf(e3);
          }, m2.isAfter = function(t2, e3) {
            return w(t2) < this.startOf(e3);
          }, m2.isBefore = function(t2, e3) {
            return this.endOf(e3) < w(t2);
          }, m2.$g = function(t2, e3, n2) {
            return O.u(t2) ? this[e3] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e3) {
            var n2 = this, r2 = !!O.u(e3) || e3, h2 = O.p(t2), $2 = function(t3, e4) {
              var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e4, t3) : new Date(n2.$y, e4, t3), n2);
              return r2 ? i2 : i2.endOf(a2);
            }, l2 = function(t3, e4) {
              return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
            switch (h2) {
              case c2:
                return r2 ? $2(1, 0) : $2(31, 11);
              case f2:
                return r2 ? $2(1, M3) : $2(0, M3 + 1);
              case o:
                var D2 = this.$locale().weekStart || 0, v2 = (y2 < D2 ? y2 + 7 : y2) - D2;
                return $2(r2 ? m3 - v2 : m3 + (6 - v2), M3);
              case a2:
              case d2:
                return l2(g2 + "Hours", 0);
              case u:
                return l2(g2 + "Minutes", 1);
              case s:
                return l2(g2 + "Seconds", 2);
              case i:
                return l2(g2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e3) {
            var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a2] = h2 + "Date", n2[d2] = h2 + "Date", n2[f2] = h2 + "Month", n2[c2] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], l2 = o2 === a2 ? this.$D + (e3 - this.$W) : e3;
            if (o2 === f2 || o2 === c2) {
              var y2 = this.clone().set(d2, 1);
              y2.$d[$2](l2), y2.init(), this.$d = y2.set(d2, Math.min(this.$D, y2.daysInMonth())).$d;
            } else
              $2 && this.$d[$2](l2);
            return this.init(), this;
          }, m2.set = function(t2, e3) {
            return this.clone().$set(t2, e3);
          }, m2.get = function(t2) {
            return this[O.p(t2)]();
          }, m2.add = function(r2, h2) {
            var d3, $2 = this;
            r2 = Number(r2);
            var l2 = O.p(h2), y2 = function(t2) {
              var e3 = w($2);
              return O.w(e3.date(e3.date() + Math.round(t2 * r2)), $2);
            };
            if (l2 === f2)
              return this.set(f2, this.$M + r2);
            if (l2 === c2)
              return this.set(c2, this.$y + r2);
            if (l2 === a2)
              return y2(1);
            if (l2 === o)
              return y2(7);
            var M3 = (d3 = {}, d3[s] = e2, d3[u] = n, d3[i] = t, d3)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return O.w(m3, this);
          }, m2.subtract = function(t2, e3) {
            return this.add(-1 * t2, e3);
          }, m2.format = function(t2) {
            var e3 = this, n2 = this.$locale();
            if (!this.isValid())
              return n2.invalidDate || $;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a3 = this.$M, o2 = n2.weekdays, f3 = n2.months, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e3, r2)) || i3[n3].substr(0, s3);
            }, c3 = function(t3) {
              return O.s(s2 % 12 || 12, t3, "0");
            }, d3 = n2.meridiem || function(t3, e4, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: O.s(a3 + 1, 2, "0"), MMM: h2(n2.monthsShort, a3, f3, 3), MMMM: h2(f3, a3), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c3(1), hh: c3(2), a: d3(s2, u2, true), A: d3(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
            return r2.replace(y, function(t3, e4) {
              return e4 || l2[t3] || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d3, $2) {
            var l2, y2 = O.p(d3), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e2, g2 = this - M3, D2 = O.m(this, M3);
            return D2 = (l2 = {}, l2[c2] = D2 / 12, l2[f2] = D2, l2[h] = D2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a2] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e2, l2[i] = g2 / t, l2)[y2] || g2, $2 ? D2 : O.a(D2);
          }, m2.daysInMonth = function() {
            return this.endOf(f2).$D;
          }, m2.$locale = function() {
            return v[this.$L];
          }, m2.locale = function(t2, e3) {
            if (!t2)
              return this.$L;
            var n2 = this.clone(), r2 = S(t2, e3, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return O.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), b2 = _.prototype;
        return w.prototype = b2, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a2], ["$M", f2], ["$y", c2], ["$D", d2]].forEach(function(t2) {
          b2[t2[1]] = function(e3) {
            return this.$g(e3, t2[0], t2[1]);
          };
        }), w.extend = function(t2, e3) {
          return t2.$i || (t2(e3, _, w), t2.$i = true), w;
        }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
          return w(1e3 * t2);
        }, w.en = v[D], w.Ls = v, w.p = {}, w;
      });
    }
  });

  // gen/proto/ShopServiceClientPb.ts
  var grpcWeb = __toModule(require_grpc_web());
  var proto_shop_pb = __toModule(require_shop_pb());
  var ShopServiceClient = class {
    constructor(hostname, credentials, options) {
      this.methodDescriptorCreateOrder = new grpcWeb.MethodDescriptor("/shop.ShopService/CreateOrder", grpcWeb.MethodType.UNARY, proto_shop_pb.CreateOrderRequest, proto_shop_pb.CreateOrderResponse, (request) => {
        return request.serializeBinary();
      }, proto_shop_pb.CreateOrderResponse.deserializeBinary);
      this.methodDescriptorListOrder = new grpcWeb.MethodDescriptor("/shop.ShopService/ListOrder", grpcWeb.MethodType.UNARY, proto_shop_pb.ListOrderRequest, proto_shop_pb.ListOrderResponse, (request) => {
        return request.serializeBinary();
      }, proto_shop_pb.ListOrderResponse.deserializeBinary);
      if (!options)
        options = {};
      if (!credentials)
        credentials = {};
      options["format"] = "text";
      this.client_ = new grpcWeb.GrpcWebClientBase(options);
      this.hostname_ = hostname;
      this.credentials_ = credentials;
      this.options_ = options;
    }
    createOrder(request, metadata, callback) {
      if (callback !== void 0) {
        return this.client_.rpcCall(this.hostname_ + "/shop.ShopService/CreateOrder", request, metadata || {}, this.methodDescriptorCreateOrder, callback);
      }
      return this.client_.unaryCall(this.hostname_ + "/shop.ShopService/CreateOrder", request, metadata || {}, this.methodDescriptorCreateOrder);
    }
    listOrder(request, metadata, callback) {
      if (callback !== void 0) {
        return this.client_.rpcCall(this.hostname_ + "/shop.ShopService/ListOrder", request, metadata || {}, this.methodDescriptorListOrder, callback);
      }
      return this.client_.unaryCall(this.hostname_ + "/shop.ShopService/ListOrder", request, metadata || {}, this.methodDescriptorListOrder);
    }
  };

  // web-client.ts
  var import_shop_pb = __toModule(require_shop_pb());
  var import_shop_pb2 = __toModule(require_shop_pb2());
  var dayjs = require_dayjs_min();
  var createClient = () => {
    return new ShopServiceClient("http://localhost:8081");
  };
  var createOrderRequest = async (client) => {
    const request = new import_shop_pb.CreateOrderRequest();
    request.setProductId("dummy-product-id");
    request.setPaymentMethod(import_shop_pb2.Order.PaymentMethod.CREDIT_CARD);
    const response = await client.createOrder(request, null);
    const resultElem = document.querySelector(".order-result");
    if (resultElem) {
      resultElem.textContent = JSON.stringify(response.getOrder().toObject(), null, "  ");
    }
  };
  var listOrderRequest = async (client) => {
    const request = new import_shop_pb.ListOrderRequest();
    request.setUserName("dummy-user-name");
    const response = await client.listOrder(request, null);
    const resultElem = document.querySelector(".list-result");
    if (resultElem) {
      const table = response.getOrdersList().map((_) => _.toObject()).map((_) => __spreadProps(__spreadValues({}, _), {
        at: dayjs.unix(_.at.seconds).format()
      }));
      resultElem.textContent = `total: ${table.length}\u4EF6
` + JSON.stringify(table, null, "  ");
    }
  };
  window.addEventListener("load", () => {
    const client = createClient();
    document.querySelector("button.order").addEventListener("click", async () => {
      await createOrderRequest(client);
    });
    document.querySelector("button.list").addEventListener("click", async () => {
      await listOrderRequest(client);
    });
  });
})();
//# sourceMappingURL=web-client.js.map
