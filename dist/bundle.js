(() => {
  var t = {
      810: (t, e, n) => {
        const { init: o, h: r } = n(468),
          i = o([]);
        let l,
          a = { count: 0 };
        const d = (t) => {
          (a = { ...a, ...t }), l && l();
        };
        t.exports = {
          mount: (t, e) => {
            (l = e),
              i(
                t,
                ((t, e) =>
                  r("div", [
                    r("h1", t.count),
                    r(
                      "button",
                      { on: { click: () => e({ count: t.count + 1 }) } },
                      "Add"
                    ),
                  ]))(a, d)
              ),
              console.log("Component Mounted");
          },
        };
      },
      468: (t, e, n) => {
        "use strict";
        function o(t) {
          if (r(t)) {
            for (; t && r(t); ) t = i(t).parent;
            return null != t ? t : null;
          }
          return t.parentNode;
        }
        function r(t) {
          return 11 === t.nodeType;
        }
        function i(t, e) {
          var n, o, r;
          const i = t;
          return (
            (null !== (n = i.parent) && void 0 !== n) ||
              (i.parent = null != e ? e : null),
            (null !== (o = i.firstChildNode) && void 0 !== o) ||
              (i.firstChildNode = t.firstChild),
            (null !== (r = i.lastChildNode) && void 0 !== r) ||
              (i.lastChildNode = t.lastChild),
            i
          );
        }
        n.r(e),
          n.d(e, {
            Fragment: () => Q,
            array: () => d,
            attachTo: () => D,
            attributesModule: () => j,
            classModule: () => M,
            datasetModule: () => V,
            eventListenersModule: () => _,
            fragment: () => C,
            h: () => x,
            htmlDomApi: () => l,
            init: () => g,
            jsx: () => U,
            primitive: () => s,
            propsModule: () => X,
            styleModule: () => K,
            thunk: () => A,
            toVNode: () => L,
            vnode: () => a,
          });
        const l = {
          createElement: function (t, e) {
            return document.createElement(t, e);
          },
          createElementNS: function (t, e, n) {
            return document.createElementNS(t, e, n);
          },
          createTextNode: function (t) {
            return document.createTextNode(t);
          },
          createDocumentFragment: function () {
            return i(document.createDocumentFragment());
          },
          createComment: function (t) {
            return document.createComment(t);
          },
          insertBefore: function (t, e, n) {
            if (r(t)) {
              let e = t;
              for (; e && r(e); ) e = i(e).parent;
              t = null != e ? e : t;
            }
            r(e) && (e = i(e, t)),
              n && r(n) && (n = i(n).firstChildNode),
              t.insertBefore(e, n);
          },
          removeChild: function (t, e) {
            t.removeChild(e);
          },
          appendChild: function (t, e) {
            r(e) && (e = i(e, t)), t.appendChild(e);
          },
          parentNode: o,
          nextSibling: function (t) {
            var e;
            if (r(t)) {
              const n = i(t),
                r = o(n);
              if (r && n.lastChildNode) {
                const t = Array.from(r.childNodes),
                  o = t.indexOf(n.lastChildNode);
                return null !== (e = t[o + 1]) && void 0 !== e ? e : null;
              }
              return null;
            }
            return t.nextSibling;
          },
          tagName: function (t) {
            return t.tagName;
          },
          setTextContent: function (t, e) {
            t.textContent = e;
          },
          getTextContent: function (t) {
            return t.textContent;
          },
          isElement: function (t) {
            return 1 === t.nodeType;
          },
          isText: function (t) {
            return 3 === t.nodeType;
          },
          isComment: function (t) {
            return 8 === t.nodeType;
          },
          isDocumentFragment: r,
        };
        function a(t, e, n, o, r) {
          return {
            sel: t,
            data: e,
            children: n,
            text: o,
            elm: r,
            key: void 0 === e ? void 0 : e.key,
          };
        }
        const d = Array.isArray;
        function s(t) {
          return (
            "string" == typeof t ||
            "number" == typeof t ||
            t instanceof String ||
            t instanceof Number
          );
        }
        function c(t) {
          return void 0 === t;
        }
        function u(t) {
          return void 0 !== t;
        }
        const f = a("", {}, [], void 0, void 0);
        function v(t, e) {
          var n, o;
          const r = t.key === e.key,
            i =
              (null === (n = t.data) || void 0 === n ? void 0 : n.is) ===
              (null === (o = e.data) || void 0 === o ? void 0 : o.is),
            l = t.sel === e.sel,
            a = !(!t.sel && t.sel === e.sel) || typeof t.text == typeof e.text;
          return l && r && i && a;
        }
        function m() {
          throw new Error(
            "The document fragment is not supported on this platform."
          );
        }
        function h(t, e, n) {
          var o;
          const r = {};
          for (let i = e; i <= n; ++i) {
            const e = null === (o = t[i]) || void 0 === o ? void 0 : o.key;
            void 0 !== e && (r[e] = i);
          }
          return r;
        }
        const p = ["create", "update", "remove", "destroy", "pre", "post"];
        function g(t, e, n) {
          const o = {
              create: [],
              update: [],
              remove: [],
              destroy: [],
              pre: [],
              post: [],
            },
            r = void 0 !== e ? e : l;
          for (const e of p)
            for (const n of t) {
              const t = n[e];
              void 0 !== t && o[e].push(t);
            }
          function i(t) {
            const e = t.id ? "#" + t.id : "",
              n = t.getAttribute("class"),
              o = n ? "." + n.split(" ").join(".") : "";
            return a(r.tagName(t).toLowerCase() + e + o, {}, [], void 0, t);
          }
          function g(t) {
            return a(void 0, {}, [], void 0, t);
          }
          function y(t, e) {
            return function () {
              if (0 == --e) {
                const e = r.parentNode(t);
                null !== e && r.removeChild(e, t);
              }
            };
          }
          function x(t, e) {
            var i, l, a, v;
            let h,
              p = t.data;
            if (void 0 !== p) {
              const e = null === (i = p.hook) || void 0 === i ? void 0 : i.init;
              u(e) && (e(t), (p = t.data));
            }
            const g = t.children,
              y = t.sel;
            if ("!" === y)
              c(t.text) && (t.text = ""), (t.elm = r.createComment(t.text));
            else if ("" === y) t.elm = r.createTextNode(t.text);
            else if (void 0 !== y) {
              const n = y.indexOf("#"),
                i = y.indexOf(".", n),
                a = n > 0 ? n : y.length,
                c = i > 0 ? i : y.length,
                v = -1 !== n || -1 !== i ? y.slice(0, Math.min(a, c)) : y,
                m = (t.elm =
                  u(p) && u((h = p.ns))
                    ? r.createElementNS(h, v, p)
                    : r.createElement(v, p));
              for (
                a < c && m.setAttribute("id", y.slice(a + 1, c)),
                  i > 0 &&
                    m.setAttribute("class", y.slice(c + 1).replace(/\./g, " ")),
                  h = 0;
                h < o.create.length;
                ++h
              )
                o.create[h](f, t);
              if (
                (!s(t.text) ||
                  (d(g) && 0 !== g.length) ||
                  r.appendChild(m, r.createTextNode(t.text)),
                d(g))
              )
                for (h = 0; h < g.length; ++h) {
                  const t = g[h];
                  null != t && r.appendChild(m, x(t, e));
                }
              const C = t.data.hook;
              u(C) &&
                (null === (l = C.create) || void 0 === l || l.call(C, f, t),
                C.insert && e.push(t));
            } else if (
              (null === (a = null == n ? void 0 : n.experimental) ||
              void 0 === a
                ? void 0
                : a.fragments) &&
              t.children
            ) {
              for (
                t.elm = (
                  null !== (v = r.createDocumentFragment) && void 0 !== v
                    ? v
                    : m
                )(),
                  h = 0;
                h < o.create.length;
                ++h
              )
                o.create[h](f, t);
              for (h = 0; h < t.children.length; ++h) {
                const n = t.children[h];
                null != n && r.appendChild(t.elm, x(n, e));
              }
            } else t.elm = r.createTextNode(t.text);
            return t.elm;
          }
          function C(t, e, n, o, i, l) {
            for (; o <= i; ++o) {
              const i = n[o];
              null != i && r.insertBefore(t, x(i, l), e);
            }
          }
          function b(t) {
            var e, n;
            const r = t.data;
            if (void 0 !== r) {
              null ===
                (n =
                  null === (e = null == r ? void 0 : r.hook) || void 0 === e
                    ? void 0
                    : e.destroy) ||
                void 0 === n ||
                n.call(e, t);
              for (let e = 0; e < o.destroy.length; ++e) o.destroy[e](t);
              if (void 0 !== t.children)
                for (let e = 0; e < t.children.length; ++e) {
                  const n = t.children[e];
                  null != n && "string" != typeof n && b(n);
                }
            }
          }
          function w(t, e, n, i) {
            for (var l, a; n <= i; ++n) {
              let i, d;
              const s = e[n];
              if (null != s)
                if (u(s.sel)) {
                  b(s), (i = o.remove.length + 1), (d = y(s.elm, i));
                  for (let t = 0; t < o.remove.length; ++t) o.remove[t](s, d);
                  const t =
                    null ===
                      (a =
                        null === (l = null == s ? void 0 : s.data) ||
                        void 0 === l
                          ? void 0
                          : l.hook) || void 0 === a
                      ? void 0
                      : a.remove;
                  u(t) ? t(s, d) : d();
                } else
                  s.children
                    ? (b(s), w(t, s.children, 0, s.children.length - 1))
                    : r.removeChild(t, s.elm);
            }
          }
          function N(t, e, n) {
            var i, l, a, d, s, f, m, p;
            const g = null === (i = e.data) || void 0 === i ? void 0 : i.hook;
            null === (l = null == g ? void 0 : g.prepatch) ||
              void 0 === l ||
              l.call(g, t, e);
            const y = (e.elm = t.elm);
            if (t === e) return;
            if (void 0 !== e.data || (u(e.text) && e.text !== t.text)) {
              (null !== (a = e.data) && void 0 !== a) || (e.data = {}),
                (null !== (d = t.data) && void 0 !== d) || (t.data = {});
              for (let n = 0; n < o.update.length; ++n) o.update[n](t, e);
              null ===
                (m =
                  null ===
                    (f =
                      null === (s = e.data) || void 0 === s
                        ? void 0
                        : s.hook) || void 0 === f
                    ? void 0
                    : f.update) ||
                void 0 === m ||
                m.call(f, t, e);
            }
            const b = t.children,
              A = e.children;
            c(e.text)
              ? u(b) && u(A)
                ? b !== A &&
                  (function (t, e, n, o) {
                    let i,
                      l,
                      a,
                      d,
                      s = 0,
                      u = 0,
                      f = e.length - 1,
                      m = e[0],
                      p = e[f],
                      g = n.length - 1,
                      y = n[0],
                      b = n[g];
                    for (; s <= f && u <= g; )
                      null == m
                        ? (m = e[++s])
                        : null == p
                        ? (p = e[--f])
                        : null == y
                        ? (y = n[++u])
                        : null == b
                        ? (b = n[--g])
                        : v(m, y)
                        ? (N(m, y, o), (m = e[++s]), (y = n[++u]))
                        : v(p, b)
                        ? (N(p, b, o), (p = e[--f]), (b = n[--g]))
                        : v(m, b)
                        ? (N(m, b, o),
                          r.insertBefore(t, m.elm, r.nextSibling(p.elm)),
                          (m = e[++s]),
                          (b = n[--g]))
                        : v(p, y)
                        ? (N(p, y, o),
                          r.insertBefore(t, p.elm, m.elm),
                          (p = e[--f]),
                          (y = n[++u]))
                        : (void 0 === i && (i = h(e, s, f)),
                          (l = i[y.key]),
                          c(l)
                            ? (r.insertBefore(t, x(y, o), m.elm), (y = n[++u]))
                            : c(i[b.key])
                            ? (r.insertBefore(t, x(b, o), r.nextSibling(p.elm)),
                              (b = n[--g]))
                            : ((a = e[l]),
                              a.sel !== y.sel
                                ? r.insertBefore(t, x(y, o), m.elm)
                                : (N(a, y, o),
                                  (e[l] = void 0),
                                  r.insertBefore(t, a.elm, m.elm)),
                              (y = n[++u])));
                    u <= g &&
                      ((d = null == n[g + 1] ? null : n[g + 1].elm),
                      C(t, d, n, u, g, o)),
                      s <= f && w(t, e, s, f);
                  })(y, b, A, n)
                : u(A)
                ? (u(t.text) && r.setTextContent(y, ""),
                  C(y, null, A, 0, A.length - 1, n))
                : u(b)
                ? w(y, b, 0, b.length - 1)
                : u(t.text) && r.setTextContent(y, "")
              : t.text !== e.text &&
                (u(b) && w(y, b, 0, b.length - 1), r.setTextContent(y, e.text)),
              null === (p = null == g ? void 0 : g.postpatch) ||
                void 0 === p ||
                p.call(g, t, e);
          }
          return function (t, e) {
            let n, l, a;
            const d = [];
            for (n = 0; n < o.pre.length; ++n) o.pre[n]();
            for (
              (function (t, e) {
                return t.isElement(e);
              })(r, t)
                ? (t = i(t))
                : (function (t, e) {
                    return t.isDocumentFragment(e);
                  })(r, t) && (t = g(t)),
                v(t, e)
                  ? N(t, e, d)
                  : ((l = t.elm),
                    (a = r.parentNode(l)),
                    x(e, d),
                    null !== a &&
                      (r.insertBefore(a, e.elm, r.nextSibling(l)),
                      w(a, [t], 0, 0))),
                n = 0;
              n < d.length;
              ++n
            )
              d[n].data.hook.insert(d[n]);
            for (n = 0; n < o.post.length; ++n) o.post[n]();
            return e;
          };
        }
        function y(t, e, n) {
          if (
            ((t.ns = "http://www.w3.org/2000/svg"),
            "foreignObject" !== n && void 0 !== e)
          )
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              if ("string" == typeof n) continue;
              const o = n.data;
              void 0 !== o && y(o, n.children, n.sel);
            }
        }
        function x(t, e, n) {
          let o,
            r,
            i,
            l = {};
          if (
            (void 0 !== n
              ? (null !== e && (l = e),
                d(n)
                  ? (o = n)
                  : s(n)
                  ? (r = n.toString())
                  : n && n.sel && (o = [n]))
              : null != e &&
                (d(e)
                  ? (o = e)
                  : s(e)
                  ? (r = e.toString())
                  : e && e.sel
                  ? (o = [e])
                  : (l = e)),
            void 0 !== o)
          )
            for (i = 0; i < o.length; ++i)
              s(o[i]) && (o[i] = a(void 0, void 0, void 0, o[i], void 0));
          return (
            !t.startsWith("svg") ||
              (3 !== t.length && "." !== t[3] && "#" !== t[3]) ||
              y(l, o, t),
            a(t, l, o, r, void 0)
          );
        }
        function C(t) {
          let e, n;
          if (
            (d(t) ? (e = t) : s(e) ? (n = t) : e && e.sel && (e = [t]),
            void 0 !== e)
          )
            for (let t = 0; t < e.length; ++t)
              s(e[t]) && (e[t] = a(void 0, void 0, void 0, e[t], void 0));
          return a(void 0, {}, e, n, void 0);
        }
        function b(t, e) {
          var n;
          const o = null === (n = e.data) || void 0 === n ? void 0 : n.ns;
          (t.data.fn = e.data.fn),
            (t.data.args = e.data.args),
            (e.data = t.data),
            (e.children = t.children),
            (e.text = t.text),
            (e.elm = t.elm),
            o && y(e.data, e.children, e.sel);
        }
        function w(t) {
          const e = t.data;
          b(e.fn(...e.args), t);
        }
        function N(t, e) {
          let n;
          const o = t.data,
            r = e.data,
            i = o.args,
            l = r.args;
          if (o.fn === r.fn && i.length === l.length) {
            for (n = 0; n < l.length; ++n)
              if (i[n] !== l[n]) return void b(r.fn(...l), e);
            b(t, e);
          } else b(r.fn(...l), e);
        }
        const A = function (t, e, n, o) {
          return (
            void 0 === o && ((o = n), (n = e), (e = void 0)),
            x(t, { key: e, hook: { init: w, prepatch: N }, fn: n, args: o })
          );
        };
        function k(t, e) {
          const n = t.data.attachData;
          (e.data.attachData.placeholder = n.placeholder),
            (e.data.attachData.real = n.real),
            (t.elm = t.data.attachData.real);
        }
        function T(t, e) {
          e.elm = e.data.attachData.placeholder;
        }
        function S(t) {
          void 0 !== t.elm && t.elm.parentNode.removeChild(t.elm),
            (t.elm = t.data.attachData.real);
        }
        function E(t, e) {
          const n = e.elm,
            o = e.data.attachData,
            r = document.createElement("span");
          (e.elm = r),
            o.target.appendChild(n),
            (o.real = n),
            (o.placeholder = r);
        }
        function D(t, e) {
          void 0 === e.data && (e.data = {}),
            void 0 === e.data.hook && (e.data.hook = {});
          const n = e.data,
            o = e.data.hook;
          return (
            (n.attachData = { target: t, placeholder: void 0, real: void 0 }),
            (o.create = E),
            (o.prepatch = k),
            (o.postpatch = T),
            (o.destroy = S),
            e
          );
        }
        function L(t, e) {
          const n = void 0 !== e ? e : l;
          let o;
          if (n.isElement(t)) {
            const o = t.id ? "#" + t.id : "",
              r = t.getAttribute("class"),
              i = r ? "." + r.split(" ").join(".") : "",
              l = n.tagName(t).toLowerCase() + o + i,
              d = {},
              s = {},
              c = {},
              u = [];
            let f, v, m;
            const h = t.attributes,
              p = t.childNodes;
            for (v = 0, m = h.length; v < m; v++)
              (f = h[v].nodeName),
                f.startsWith("data-")
                  ? (s[f.slice(5)] = h[v].nodeValue || "")
                  : "id" !== f && "class" !== f && (d[f] = h[v].nodeValue);
            for (v = 0, m = p.length; v < m; v++) u.push(L(p[v], e));
            return (
              Object.keys(d).length > 0 && (c.attrs = d),
              Object.keys(s).length > 0 && (c.dataset = s),
              !l.startsWith("svg") ||
                (3 !== l.length && "." !== l[3] && "#" !== l[3]) ||
                y(c, u, l),
              a(l, c, u, void 0, t)
            );
          }
          return n.isText(t)
            ? ((o = n.getTextContent(t)), a(void 0, void 0, void 0, o, t))
            : n.isComment(t)
            ? ((o = n.getTextContent(t)), a("!", {}, [], o, t))
            : a("", {}, [], void 0, t);
        }
        function O(t, e) {
          let n;
          const o = e.elm;
          let r = t.data.attrs,
            i = e.data.attrs;
          if ((r || i) && r !== i) {
            for (n in ((r = r || {}), (i = i || {}), i)) {
              const t = i[n];
              r[n] !== t &&
                (!0 === t
                  ? o.setAttribute(n, "")
                  : !1 === t
                  ? o.removeAttribute(n)
                  : 120 !== n.charCodeAt(0)
                  ? o.setAttribute(n, t)
                  : 58 === n.charCodeAt(3)
                  ? o.setAttributeNS(
                      "http://www.w3.org/XML/1998/namespace",
                      n,
                      t
                    )
                  : 58 === n.charCodeAt(5)
                  ? 109 === n.charCodeAt(1)
                    ? o.setAttributeNS("http://www.w3.org/2000/xmlns/", n, t)
                    : o.setAttributeNS("http://www.w3.org/1999/xlink", n, t)
                  : o.setAttribute(n, t));
            }
            for (n in r) n in i || o.removeAttribute(n);
          }
        }
        const j = { create: O, update: O };
        function B(t, e) {
          let n, o;
          const r = e.elm;
          let i = t.data.class,
            l = e.data.class;
          if ((i || l) && i !== l) {
            for (o in ((i = i || {}), (l = l || {}), i))
              i[o] &&
                !Object.prototype.hasOwnProperty.call(l, o) &&
                r.classList.remove(o);
            for (o in l)
              (n = l[o]), n !== i[o] && r.classList[n ? "add" : "remove"](o);
          }
        }
        const M = { create: B, update: B },
          F = /[A-Z]/g;
        function P(t, e) {
          const n = e.elm;
          let o,
            r = t.data.dataset,
            i = e.data.dataset;
          if (!r && !i) return;
          if (r === i) return;
          (r = r || {}), (i = i || {});
          const l = n.dataset;
          for (o in r)
            o in i ||
              (l
                ? o in l && delete l[o]
                : n.removeAttribute(
                    "data-" + o.replace(F, "-$&").toLowerCase()
                  ));
          for (o in i)
            r[o] !== i[o] &&
              (l
                ? (l[o] = i[o])
                : n.setAttribute(
                    "data-" + o.replace(F, "-$&").toLowerCase(),
                    i[o]
                  ));
        }
        const V = { create: P, update: P };
        function W(t, e, n) {
          if ("function" == typeof t) t.call(e, n, e);
          else if ("object" == typeof t)
            for (let o = 0; o < t.length; o++) W(t[o], e, n);
        }
        function q(t, e) {
          const n = t.type,
            o = e.data.on;
          o && o[n] && W(o[n], e, t);
        }
        function $(t, e) {
          const n = t.data.on,
            o = t.listener,
            r = t.elm,
            i = e && e.data.on,
            l = e && e.elm;
          let a;
          if (n !== i) {
            if (n && o)
              if (i) for (a in n) i[a] || r.removeEventListener(a, o, !1);
              else for (a in n) r.removeEventListener(a, o, !1);
            if (i) {
              const o = (e.listener =
                t.listener ||
                function t(e) {
                  q(e, t.vnode);
                });
              if (((o.vnode = e), n))
                for (a in i) n[a] || l.addEventListener(a, o, !1);
              else for (a in i) l.addEventListener(a, o, !1);
            }
          }
        }
        const _ = { create: $, update: $, destroy: $ };
        function I(t, e) {
          let n, o, r;
          const i = e.elm;
          let l = t.data.props,
            a = e.data.props;
          if ((l || a) && l !== a)
            for (n in ((l = l || {}), (a = a || {}), a))
              (o = a[n]),
                (r = l[n]),
                r === o || ("value" === n && i[n] === o) || (i[n] = o);
        }
        const X = { create: I, update: I },
          Z =
            "function" ==
            typeof (null === window || void 0 === window
              ? void 0
              : window.requestAnimationFrame)
              ? window.requestAnimationFrame.bind(window)
              : setTimeout,
          z = function (t) {
            Z(function () {
              Z(t);
            });
          };
        let G = !1;
        function H(t, e, n) {
          z(function () {
            t[e] = n;
          });
        }
        function J(t, e) {
          let n, o;
          const r = e.elm;
          let i = t.data.style,
            l = e.data.style;
          if (!i && !l) return;
          if (i === l) return;
          (i = i || {}), (l = l || {});
          const a = "delayed" in i;
          for (o in i)
            o in l ||
              ("-" === o[0] && "-" === o[1]
                ? r.style.removeProperty(o)
                : (r.style[o] = ""));
          for (o in l)
            if (((n = l[o]), "delayed" === o && l.delayed))
              for (const t in l.delayed)
                (n = l.delayed[t]),
                  (a && n === i.delayed[t]) || H(r.style, t, n);
            else
              "remove" !== o &&
                n !== i[o] &&
                ("-" === o[0] && "-" === o[1]
                  ? r.style.setProperty(o, n)
                  : (r.style[o] = n));
        }
        const K = {
          pre: function () {
            G = !1;
          },
          create: J,
          update: J,
          destroy: function (t) {
            let e, n;
            const o = t.elm,
              r = t.data.style;
            if (r && (e = r.destroy)) for (n in e) o.style[n] = e[n];
          },
          remove: function (t, e) {
            const n = t.data.style;
            if (!n || !n.remove) return void e();
            let o;
            G || (t.elm.offsetLeft, (G = !0));
            const r = t.elm;
            let i = 0;
            const l = n.remove;
            let a = 0;
            const d = [];
            for (o in l) d.push(o), (r.style[o] = l[o]);
            const s = getComputedStyle(r)["transition-property"].split(", ");
            for (; i < s.length; ++i) -1 !== d.indexOf(s[i]) && a++;
            r.addEventListener("transitionend", function (t) {
              t.target === r && --a, 0 === a && e();
            });
          },
        };
        function Q(t, ...e) {
          const n = R(e, []);
          return 1 === n.length && !n[0].sel && n[0].text
            ? a(void 0, void 0, void 0, n[0].text, void 0)
            : a(void 0, null != t ? t : {}, n, void 0, void 0);
        }
        function R(t, e) {
          for (const n of t)
            null != n &&
              !1 !== n &&
              "" !== n &&
              (Array.isArray(n)
                ? R(n, e)
                : "string" == typeof n ||
                  "number" == typeof n ||
                  "boolean" == typeof n
                ? e.push(a(void 0, void 0, void 0, String(n), void 0))
                : e.push(n));
          return e;
        }
        function U(t, e, ...n) {
          const o = R(n, []);
          return "function" == typeof t
            ? t(e, o)
            : 1 === o.length && !o[0].sel && o[0].text
            ? x(t, e, o[0].text)
            : x(t, e, o);
        }
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { exports: {} });
    return t[o](i, i.exports, n), i.exports;
  }
  (n.d = (t, e) => {
    for (var o in e)
      n.o(e, o) &&
        !n.o(t, o) &&
        Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
  }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      const { mount: t } = n(810);
      t(document.getElementById("app"), () => {
        console.log("State Changed:", { count: state.count });
      });
    })();
})();
