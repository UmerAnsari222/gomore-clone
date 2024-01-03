/*! For license information please see 3562-7bf0528a03d86bf3e77b.chunk.js.LICENSE.txt */
(self.webpackChunkgomore_web = self.webpackChunkgomore_web || []).push([
  [3562],
  {
    8535: function (e, t, n) {
      var r,
        i,
        o = n(9755);
      (function () {
        (function () {
          (function () {
            this.Rails = {
              linkClickSelector:
                "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
              buttonClickSelector: {
                selector:
                  "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                exclude: "form button",
              },
              inputChangeSelector:
                "select[data-remote], input[data-remote], textarea[data-remote]",
              formSubmitSelector: "form:not([data-turbo=true])",
              formInputClickSelector:
                "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
              formDisableSelector:
                "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
              formEnableSelector:
                "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
              fileInputSelector: "input[name][type=file]:not([disabled])",
              linkDisableSelector: "a[data-disable-with], a[data-disable]",
              buttonDisableSelector:
                "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            };
          }).call(this);
        }).call(this);
        var s = this.Rails;
        (function () {
          (function () {
            var e;
            (e = null),
              (s.loadCSPNonce = function () {
                var t;
                return (e =
                  null != (t = document.querySelector("meta[name=csp-nonce]"))
                    ? t.content
                    : void 0);
              }),
              (s.cspNonce = function () {
                return null != e ? e : s.loadCSPNonce();
              });
          }).call(this),
            function () {
              var e, t;
              (t =
                Element.prototype.matches ||
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector),
                (s.matches = function (e, n) {
                  return null != n.exclude
                    ? t.call(e, n.selector) && !t.call(e, n.exclude)
                    : t.call(e, n);
                }),
                (e = "_ujsData"),
                (s.getData = function (t, n) {
                  var r;
                  return null != (r = t[e]) ? r[n] : void 0;
                }),
                (s.setData = function (t, n, r) {
                  return null == t[e] && (t[e] = {}), (t[e][n] = r);
                }),
                (s.$ = function (e) {
                  return Array.prototype.slice.call(
                    document.querySelectorAll(e)
                  );
                });
            }.call(this),
            function () {
              var e, t, n;
              (e = s.$),
                (n = s.csrfToken =
                  function () {
                    var e;
                    return (
                      (e = document.querySelector("meta[name=csrf-token]")) &&
                      e.content
                    );
                  }),
                (t = s.csrfParam =
                  function () {
                    var e;
                    return (
                      (e = document.querySelector("meta[name=csrf-param]")) &&
                      e.content
                    );
                  }),
                (s.CSRFProtection = function (e) {
                  var t;
                  if (null != (t = n()))
                    return e.setRequestHeader("X-CSRF-Token", t);
                }),
                (s.refreshCSRFTokens = function () {
                  var r, i;
                  if (((i = n()), (r = t()), null != i && null != r))
                    return e('form input[name="' + r + '"]').forEach(function (
                      e
                    ) {
                      return (e.value = i);
                    });
                });
            }.call(this),
            function () {
              var e, t, n, r;
              (n = s.matches),
                "function" !== typeof (e = window.CustomEvent) &&
                  (((e = function (e, t) {
                    var n;
                    return (
                      (n = document.createEvent("CustomEvent")).initCustomEvent(
                        e,
                        t.bubbles,
                        t.cancelable,
                        t.detail
                      ),
                      n
                    );
                  }).prototype = window.Event.prototype),
                  (r = e.prototype.preventDefault),
                  (e.prototype.preventDefault = function () {
                    var e;
                    return (
                      (e = r.call(this)),
                      this.cancelable &&
                        !this.defaultPrevented &&
                        Object.defineProperty(this, "defaultPrevented", {
                          get: function () {
                            return !0;
                          },
                        }),
                      e
                    );
                  })),
                (t = s.fire =
                  function (t, n, r) {
                    var i;
                    return (
                      (i = new e(n, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: r,
                      })),
                      t.dispatchEvent(i),
                      !i.defaultPrevented
                    );
                  }),
                (s.stopEverything = function (e) {
                  return (
                    t(e.target, "ujs:everythingStopped"),
                    e.preventDefault(),
                    e.stopPropagation(),
                    e.stopImmediatePropagation()
                  );
                }),
                (s.delegate = function (e, t, r, i) {
                  return e.addEventListener(r, function (e) {
                    var r;
                    for (r = e.target; r instanceof Element && !n(r, t); )
                      r = r.parentNode;
                    if (r instanceof Element && !1 === i.call(r, e))
                      return e.preventDefault(), e.stopPropagation();
                  });
                });
            }.call(this),
            function () {
              var e, t, n, r, i, o;
              (r = s.cspNonce),
                (t = s.CSRFProtection),
                s.fire,
                (e = {
                  "*": "*/*",
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                  script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                }),
                (s.ajax = function (e) {
                  var t;
                  return (
                    (e = i(e)),
                    (t = n(e, function () {
                      var n, r;
                      return (
                        (r = o(
                          null != (n = t.response) ? n : t.responseText,
                          t.getResponseHeader("Content-Type")
                        )),
                        2 === Math.floor(t.status / 100)
                          ? "function" === typeof e.success &&
                            e.success(r, t.statusText, t)
                          : "function" === typeof e.error &&
                            e.error(r, t.statusText, t),
                        "function" === typeof e.complete
                          ? e.complete(t, t.statusText)
                          : void 0
                      );
                    })),
                    !(null != e.beforeSend && !e.beforeSend(t, e)) &&
                      (t.readyState === XMLHttpRequest.OPENED
                        ? t.send(e.data)
                        : void 0)
                  );
                }),
                (i = function (t) {
                  return (
                    (t.url = t.url || location.href),
                    (t.type = t.type.toUpperCase()),
                    "GET" === t.type &&
                      t.data &&
                      (t.url.indexOf("?") < 0
                        ? (t.url += "?" + t.data)
                        : (t.url += "&" + t.data)),
                    null == e[t.dataType] && (t.dataType = "*"),
                    (t.accept = e[t.dataType]),
                    "*" !== t.dataType && (t.accept += ", */*; q=0.01"),
                    t
                  );
                }),
                (n = function (e, n) {
                  var r;
                  return (
                    (r = new XMLHttpRequest()).open(e.type, e.url, !0),
                    r.setRequestHeader("Accept", e.accept),
                    "string" === typeof e.data &&
                      r.setRequestHeader(
                        "Content-Type",
                        "application/x-www-form-urlencoded; charset=UTF-8"
                      ),
                    e.crossDomain ||
                      (r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                      t(r)),
                    (r.withCredentials = !!e.withCredentials),
                    (r.onreadystatechange = function () {
                      if (r.readyState === XMLHttpRequest.DONE) return n(r);
                    }),
                    r
                  );
                }),
                (o = function (e, t) {
                  var n, i;
                  if ("string" === typeof e && "string" === typeof t)
                    if (t.match(/\bjson\b/))
                      try {
                        e = JSON.parse(e);
                      } catch (o) {}
                    else if (t.match(/\b(?:java|ecma)script\b/))
                      (i = document.createElement("script")).setAttribute(
                        "nonce",
                        r()
                      ),
                        (i.text = e),
                        document.head.appendChild(i).parentNode.removeChild(i);
                    else if (t.match(/\b(xml|html|svg)\b/)) {
                      (n = new DOMParser()), (t = t.replace(/;.+/, ""));
                      try {
                        e = n.parseFromString(e, t);
                      } catch (o) {}
                    }
                  return e;
                }),
                (s.href = function (e) {
                  return e.href;
                }),
                (s.isCrossDomain = function (e) {
                  var t, n;
                  ((t = document.createElement("a")).href = location.href),
                    (n = document.createElement("a"));
                  try {
                    return (
                      (n.href = e),
                      !(
                        ((!n.protocol || ":" === n.protocol) && !n.host) ||
                        t.protocol + "//" + t.host ===
                          n.protocol + "//" + n.host
                      )
                    );
                  } catch (r) {
                    return r, !0;
                  }
                });
            }.call(this),
            function () {
              var e, t;
              (e = s.matches),
                (t = function (e) {
                  return Array.prototype.slice.call(e);
                }),
                (s.serializeElement = function (n, r) {
                  var i, o;
                  return (
                    (i = [n]),
                    e(n, "form") && (i = t(n.elements)),
                    (o = []),
                    i.forEach(function (n) {
                      if (
                        n.name &&
                        !n.disabled &&
                        !e(n, "fieldset[disabled] *")
                      )
                        return e(n, "select")
                          ? t(n.options).forEach(function (e) {
                              if (e.selected)
                                return o.push({ name: n.name, value: e.value });
                            })
                          : n.checked ||
                            -1 ===
                              ["radio", "checkbox", "submit"].indexOf(n.type)
                          ? o.push({ name: n.name, value: n.value })
                          : void 0;
                    }),
                    r && o.push(r),
                    o
                      .map(function (e) {
                        return null != e.name
                          ? encodeURIComponent(e.name) +
                              "=" +
                              encodeURIComponent(e.value)
                          : e;
                      })
                      .join("&")
                  );
                }),
                (s.formElements = function (n, r) {
                  return e(n, "form")
                    ? t(n.elements).filter(function (t) {
                        return e(t, r);
                      })
                    : t(n.querySelectorAll(r));
                });
            }.call(this),
            function () {
              var e, t, n;
              (t = s.fire),
                (n = s.stopEverything),
                (s.handleConfirm = function (t) {
                  if (!e(this)) return n(t);
                }),
                (s.confirm = function (e, t) {
                  return confirm(e);
                }),
                (e = function (e) {
                  var n, r, i;
                  if (!(i = e.getAttribute("data-confirm"))) return !0;
                  if (((n = !1), t(e, "confirm"))) {
                    try {
                      n = s.confirm(i, e);
                    } catch (o) {}
                    r = t(e, "confirm:complete", [n]);
                  }
                  return n && r;
                });
            }.call(this),
            function () {
              var e, t, n, r, i, o, a, u, l, c, d, f;
              (c = s.matches),
                (u = s.getData),
                (d = s.setData),
                (f = s.stopEverything),
                (a = s.formElements),
                (s.handleDisabledElement = function (e) {
                  if ((this, this.disabled)) return f(e);
                }),
                (s.enableElement = function (e) {
                  var t;
                  if (e instanceof Event) {
                    if (l(e)) return;
                    t = e.target;
                  } else t = e;
                  return c(t, s.linkDisableSelector)
                    ? o(t)
                    : c(t, s.buttonDisableSelector) ||
                      c(t, s.formEnableSelector)
                    ? r(t)
                    : c(t, s.formSubmitSelector)
                    ? i(t)
                    : void 0;
                }),
                (s.disableElement = function (r) {
                  var i;
                  return (
                    (i = r instanceof Event ? r.target : r),
                    c(i, s.linkDisableSelector)
                      ? n(i)
                      : c(i, s.buttonDisableSelector) ||
                        c(i, s.formDisableSelector)
                      ? e(i)
                      : c(i, s.formSubmitSelector)
                      ? t(i)
                      : void 0
                  );
                }),
                (n = function (e) {
                  var t;
                  if (!u(e, "ujs:disabled"))
                    return (
                      null != (t = e.getAttribute("data-disable-with")) &&
                        (d(e, "ujs:enable-with", e.innerHTML),
                        (e.innerHTML = t)),
                      e.addEventListener("click", f),
                      d(e, "ujs:disabled", !0)
                    );
                }),
                (o = function (e) {
                  var t;
                  return (
                    null != (t = u(e, "ujs:enable-with")) &&
                      ((e.innerHTML = t), d(e, "ujs:enable-with", null)),
                    e.removeEventListener("click", f),
                    d(e, "ujs:disabled", null)
                  );
                }),
                (t = function (t) {
                  return a(t, s.formDisableSelector).forEach(e);
                }),
                (e = function (e) {
                  var t;
                  if (!u(e, "ujs:disabled"))
                    return (
                      null != (t = e.getAttribute("data-disable-with")) &&
                        (c(e, "button")
                          ? (d(e, "ujs:enable-with", e.innerHTML),
                            (e.innerHTML = t))
                          : (d(e, "ujs:enable-with", e.value), (e.value = t))),
                      (e.disabled = !0),
                      d(e, "ujs:disabled", !0)
                    );
                }),
                (i = function (e) {
                  return a(e, s.formEnableSelector).forEach(r);
                }),
                (r = function (e) {
                  var t;
                  return (
                    null != (t = u(e, "ujs:enable-with")) &&
                      (c(e, "button") ? (e.innerHTML = t) : (e.value = t),
                      d(e, "ujs:enable-with", null)),
                    (e.disabled = !1),
                    d(e, "ujs:disabled", null)
                  );
                }),
                (l = function (e) {
                  var t, n;
                  return (
                    null !=
                    (null != (n = null != (t = e.detail) ? t[0] : void 0)
                      ? n.getResponseHeader("X-Xhr-Redirect")
                      : void 0)
                  );
                });
            }.call(this),
            function () {
              var e;
              (e = s.stopEverything),
                (s.handleMethod = function (t) {
                  var n, r, i, o, a, u, l;
                  if ((l = (u = this).getAttribute("data-method")))
                    return (
                      (a = s.href(u)),
                      (r = s.csrfToken()),
                      (n = s.csrfParam()),
                      (i = document.createElement("form")),
                      (o =
                        "<input name='_method' value='" +
                        l +
                        "' type='hidden' />"),
                      null == n ||
                        null == r ||
                        s.isCrossDomain(a) ||
                        (o +=
                          "<input name='" +
                          n +
                          "' value='" +
                          r +
                          "' type='hidden' />"),
                      (o += '<input type="submit" />'),
                      (i.method = "post"),
                      (i.action = a),
                      (i.target = u.target),
                      (i.innerHTML = o),
                      (i.style.display = "none"),
                      document.body.appendChild(i),
                      i.querySelector('[type="submit"]').click(),
                      e(t)
                    );
                });
            }.call(this),
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                a,
                u,
                l,
                c = [].slice;
              (o = s.matches),
                (n = s.getData),
                (u = s.setData),
                (t = s.fire),
                (l = s.stopEverything),
                (e = s.ajax),
                (r = s.isCrossDomain),
                (a = s.serializeElement),
                (i = function (e) {
                  var t;
                  return (
                    null != (t = e.getAttribute("data-remote")) && "false" !== t
                  );
                }),
                (s.handleRemote = function (d) {
                  var f, h, m, p, y, g, v;
                  return (
                    !i((p = this)) ||
                    (t(p, "ajax:before")
                      ? ((v = p.getAttribute("data-with-credentials")),
                        (m = p.getAttribute("data-type") || "script"),
                        o(p, s.formSubmitSelector)
                          ? ((f = n(p, "ujs:submit-button")),
                            (y =
                              n(p, "ujs:submit-button-formmethod") || p.method),
                            (g =
                              n(p, "ujs:submit-button-formaction") ||
                              p.getAttribute("action") ||
                              location.href),
                            "GET" === y.toUpperCase() &&
                              (g = g.replace(/\?.*$/, "")),
                            "multipart/form-data" === p.enctype
                              ? ((h = new FormData(p)),
                                null != f && h.append(f.name, f.value))
                              : (h = a(p, f)),
                            u(p, "ujs:submit-button", null),
                            u(p, "ujs:submit-button-formmethod", null),
                            u(p, "ujs:submit-button-formaction", null))
                          : o(p, s.buttonClickSelector) ||
                            o(p, s.inputChangeSelector)
                          ? ((y = p.getAttribute("data-method")),
                            (g = p.getAttribute("data-url")),
                            (h = a(p, p.getAttribute("data-params"))))
                          : ((y = p.getAttribute("data-method")),
                            (g = s.href(p)),
                            (h = p.getAttribute("data-params"))),
                        e({
                          type: y || "GET",
                          url: g,
                          data: h,
                          dataType: m,
                          beforeSend: function (e, n) {
                            return t(p, "ajax:beforeSend", [e, n])
                              ? t(p, "ajax:send", [e])
                              : (t(p, "ajax:stopped"), !1);
                          },
                          success: function () {
                            var e;
                            return (
                              (e =
                                1 <= arguments.length
                                  ? c.call(arguments, 0)
                                  : []),
                              t(p, "ajax:success", e)
                            );
                          },
                          error: function () {
                            var e;
                            return (
                              (e =
                                1 <= arguments.length
                                  ? c.call(arguments, 0)
                                  : []),
                              t(p, "ajax:error", e)
                            );
                          },
                          complete: function () {
                            var e;
                            return (
                              (e =
                                1 <= arguments.length
                                  ? c.call(arguments, 0)
                                  : []),
                              t(p, "ajax:complete", e)
                            );
                          },
                          crossDomain: r(g),
                          withCredentials: null != v && "false" !== v,
                        }),
                        l(d))
                      : (t(p, "ajax:stopped"), !1))
                  );
                }),
                (s.formSubmitButtonClick = function (e) {
                  var t, n;
                  if ((n = (t = this).form))
                    return (
                      t.name &&
                        u(n, "ujs:submit-button", {
                          name: t.name,
                          value: t.value,
                        }),
                      u(n, "ujs:formnovalidate-button", t.formNoValidate),
                      u(
                        n,
                        "ujs:submit-button-formaction",
                        t.getAttribute("formaction")
                      ),
                      u(
                        n,
                        "ujs:submit-button-formmethod",
                        t.getAttribute("formmethod")
                      )
                    );
                }),
                (s.preventInsignificantClick = function (e) {
                  var t, n, r;
                  if (
                    (this,
                    (r = (
                      this.getAttribute("data-method") || "GET"
                    ).toUpperCase()),
                    (t = this.getAttribute("data-params")),
                    (n = (e.metaKey || e.ctrlKey) && "GET" === r && !t),
                    (null != e.button && 0 !== e.button) || n)
                  )
                    return e.stopImmediatePropagation();
                });
            }.call(this),
            function () {
              var e, t, n, r, i, a, u, l, c, d, f, h, m, p, y;
              if (
                ((a = s.fire),
                (n = s.delegate),
                (l = s.getData),
                (e = s.$),
                (y = s.refreshCSRFTokens),
                (t = s.CSRFProtection),
                (m = s.loadCSPNonce),
                (i = s.enableElement),
                (r = s.disableElement),
                (d = s.handleDisabledElement),
                (c = s.handleConfirm),
                (p = s.preventInsignificantClick),
                (h = s.handleRemote),
                (u = s.formSubmitButtonClick),
                (f = s.handleMethod),
                "undefined" !== typeof o && null !== o && null != o.ajax)
              ) {
                if (o.rails)
                  throw new Error(
                    "If you load both jquery_ujs and rails-ujs, use rails-ujs only."
                  );
                (o.rails = s),
                  o.ajaxPrefilter(function (e, n, r) {
                    if (!e.crossDomain) return t(r);
                  });
              }
              (s.start = function () {
                if (window._rails_loaded)
                  throw new Error("rails-ujs has already been loaded!");
                return (
                  window.addEventListener("pageshow", function () {
                    return (
                      e(s.formEnableSelector).forEach(function (e) {
                        if (l(e, "ujs:disabled")) return i(e);
                      }),
                      e(s.linkDisableSelector).forEach(function (e) {
                        if (l(e, "ujs:disabled")) return i(e);
                      })
                    );
                  }),
                  n(document, s.linkDisableSelector, "ajax:complete", i),
                  n(document, s.linkDisableSelector, "ajax:stopped", i),
                  n(document, s.buttonDisableSelector, "ajax:complete", i),
                  n(document, s.buttonDisableSelector, "ajax:stopped", i),
                  n(document, s.linkClickSelector, "click", p),
                  n(document, s.linkClickSelector, "click", d),
                  n(document, s.linkClickSelector, "click", c),
                  n(document, s.linkClickSelector, "click", r),
                  n(document, s.linkClickSelector, "click", h),
                  n(document, s.linkClickSelector, "click", f),
                  n(document, s.buttonClickSelector, "click", p),
                  n(document, s.buttonClickSelector, "click", d),
                  n(document, s.buttonClickSelector, "click", c),
                  n(document, s.buttonClickSelector, "click", r),
                  n(document, s.buttonClickSelector, "click", h),
                  n(document, s.inputChangeSelector, "change", d),
                  n(document, s.inputChangeSelector, "change", c),
                  n(document, s.inputChangeSelector, "change", h),
                  n(document, s.formSubmitSelector, "submit", d),
                  n(document, s.formSubmitSelector, "submit", c),
                  n(document, s.formSubmitSelector, "submit", h),
                  n(document, s.formSubmitSelector, "submit", function (e) {
                    return setTimeout(function () {
                      return r(e);
                    }, 13);
                  }),
                  n(document, s.formSubmitSelector, "ajax:send", r),
                  n(document, s.formSubmitSelector, "ajax:complete", i),
                  n(document, s.formInputClickSelector, "click", p),
                  n(document, s.formInputClickSelector, "click", d),
                  n(document, s.formInputClickSelector, "click", c),
                  n(document, s.formInputClickSelector, "click", u),
                  document.addEventListener("DOMContentLoaded", y),
                  document.addEventListener("DOMContentLoaded", m),
                  (window._rails_loaded = !0)
                );
              }),
                window.Rails === s &&
                  a(document, "rails:attachBindings") &&
                  s.start();
            }.call(this);
        }).call(this),
          e.exports
            ? (e.exports = s)
            : void 0 ===
                (i = "function" === typeof (r = s) ? r.call(t, n, t, e) : r) ||
              (e.exports = i);
      }).call(this);
    },
    9755: function (e, t) {
      var n;
      !(function (t, n) {
        "use strict";
        "object" === typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" !== typeof window ? window : this, function (r, i) {
        "use strict";
        var o = [],
          s = Object.getPrototypeOf,
          a = o.slice,
          u = o.flat
            ? function (e) {
                return o.flat.call(e);
              }
            : function (e) {
                return o.concat.apply([], e);
              },
          l = o.push,
          c = o.indexOf,
          d = {},
          f = d.toString,
          h = d.hasOwnProperty,
          m = h.toString,
          p = m.call(Object),
          y = {},
          g = function (e) {
            return (
              "function" === typeof e &&
              "number" !== typeof e.nodeType &&
              "function" !== typeof e.item
            );
          },
          v = function (e) {
            return null != e && e === e.window;
          },
          b = r.document,
          w = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function _(e, t, n) {
          var r,
            i,
            o = (n = n || b).createElement("script");
          if (((o.text = e), t))
            for (r in w)
              (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function x(e) {
          return null == e
            ? e + ""
            : "object" === typeof e || "function" === typeof e
            ? d[f.call(e)] || "object"
            : typeof e;
        }
        var k = "3.6.4",
          S = function (e, t) {
            return new S.fn.init(e, t);
          };
        function M(e) {
          var t = !!e && "length" in e && e.length,
            n = x(e);
          return (
            !g(e) &&
            !v(e) &&
            ("array" === n ||
              0 === t ||
              ("number" === typeof t && t > 0 && t - 1 in e))
          );
        }
        (S.fn = S.prototype =
          {
            jquery: k,
            constructor: S,
            length: 0,
            toArray: function () {
              return a.call(this);
            },
            get: function (e) {
              return null == e
                ? a.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = S.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return S.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                S.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: l,
            sort: o.sort,
            splice: o.splice,
          }),
          (S.extend = S.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                l = !1;
              for (
                "boolean" === typeof s &&
                  ((l = s), (s = arguments[a] || {}), a++),
                  "object" === typeof s || g(s) || (s = {}),
                  a === u && ((s = this), a--);
                a < u;
                a++
              )
                if (null != (e = arguments[a]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        s !== r &&
                        (l &&
                        r &&
                        (S.isPlainObject(r) || (i = Array.isArray(r)))
                          ? ((n = s[t]),
                            (o =
                              i && !Array.isArray(n)
                                ? []
                                : i || S.isPlainObject(n)
                                ? n
                                : {}),
                            (i = !1),
                            (s[t] = S.extend(l, o, r)))
                          : void 0 !== r && (s[t] = r));
              return s;
            }),
          S.extend({
            expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== f.call(e)) &&
                (!(t = s(e)) ||
                  ("function" ===
                    typeof (n = h.call(t, "constructor") && t.constructor) &&
                    m.call(n) === p))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              _(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (M(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (M(Object(e))
                    ? S.merge(n, "string" === typeof e ? [e] : e)
                    : l.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : c.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) !== s && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                s = [];
              if (M(e))
                for (r = e.length; o < r; o++)
                  null != (i = t(e[o], o, n)) && s.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
              return u(s);
            },
            guid: 1,
            support: y,
          }),
          "function" === typeof Symbol &&
            (S.fn[Symbol.iterator] = o[Symbol.iterator]),
          S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var T = (function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u,
            l,
            c,
            d,
            f,
            h,
            m,
            p,
            y,
            g,
            v,
            b,
            w = "sizzle" + 1 * new Date(),
            _ = e.document,
            x = 0,
            k = 0,
            S = ue(),
            M = ue(),
            T = ue(),
            D = ue(),
            O = function (e, t) {
              return e === t && (d = !0), 0;
            },
            E = {}.hasOwnProperty,
            C = [],
            N = C.pop,
            L = C.push,
            j = C.push,
            A = C.slice,
            Y = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            H =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            I =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              P +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            R =
              "\\[" +
              P +
              "*(" +
              I +
              ")(?:" +
              P +
              "*([*^$|!~]?=)" +
              P +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              P +
              "*\\]",
            F =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            q = new RegExp(
              "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
              "g"
            ),
            V = new RegExp("^" + P + "*," + P + "*"),
            z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"),
            $ = new RegExp(F),
            Z = new RegExp("^" + I + "$"),
            G = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  P +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  P +
                  "*(?:([+-]|)" +
                  P +
                  "*(\\d+)|))" +
                  P +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + H + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  P +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  P +
                  "*((?:-\\d)?\\d*)" +
                  P +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            B = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? "\0" === e
                  ? "\ufffd"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function () {
              f();
            },
            se = we(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            j.apply((C = A.call(_.childNodes)), _.childNodes),
              C[_.childNodes.length].nodeType;
          } catch (Me) {
            j = {
              apply: C.length
                ? function (e, t) {
                    L.apply(e, A.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, r, i) {
            var o,
              a,
              l,
              c,
              d,
              m,
              g,
              v = t && t.ownerDocument,
              _ = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" !== typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))
            )
              return r;
            if (!i && (f(t), (t = t || h), p)) {
              if (11 !== _ && (d = K.exec(e)))
                if ((o = d[1])) {
                  if (9 === _) {
                    if (!(l = t.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (
                    v &&
                    (l = v.getElementById(o)) &&
                    b(t, l) &&
                    l.id === o
                  )
                    return r.push(l), r;
                } else {
                  if (d[2]) return j.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = d[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return j.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !D[e + " "] &&
                (!y || !y.test(e)) &&
                (1 !== _ || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((g = e), (v = t), 1 === _ && (U.test(e) || z.test(e)))) {
                  for (
                    ((v = (ee.test(e) && ge(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute("id"))
                        ? (c = c.replace(re, ie))
                        : t.setAttribute("id", (c = w))),
                      a = (m = s(e)).length;
                    a--;

                  )
                    m[a] = (c ? "#" + c : ":scope") + " " + be(m[a]);
                  g = m.join(",");
                }
                try {
                  return j.apply(r, v.querySelectorAll(g)), r;
                } catch (x) {
                  D(e, !0);
                } finally {
                  c === w && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace(q, "$1"), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function le(e) {
            return (e[w] = !0), e;
          }
          function ce(e) {
            var t = h.createElement("fieldset");
            try {
              return !!e(t);
            } catch (Me) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function fe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function he(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function me(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function pe(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ye(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                    n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ge(e) {
            return e && "undefined" !== typeof e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (o = ae.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !B.test(t || (n && n.nodeName) || "HTML");
            }),
          (f = ae.setDocument =
            function (e) {
              var t,
                i,
                s = e ? e.ownerDocument || e : _;
              return s != h && 9 === s.nodeType && s.documentElement
                ? ((m = (h = s).documentElement),
                  (p = !o(h)),
                  _ != h &&
                    (i = h.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.scope = ce(function (e) {
                    return (
                      m.appendChild(e).appendChild(h.createElement("div")),
                      "undefined" !== typeof e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.cssHas = ce(function () {
                    try {
                      return h.querySelector(":has(*,:jqfake)"), !1;
                    } catch (Me) {
                      return !0;
                    }
                  })),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(h.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Q.test(h.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (m.appendChild(e).id = w),
                      !h.getElementsByName || !h.getElementsByName(w).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if ("undefined" !== typeof t.getElementById && p) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            "undefined" !== typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if ("undefined" !== typeof t.getElementById && p) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return "undefined" !== typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" !== typeof t.getElementsByClassName && p)
                        return t.getElementsByClassName(e);
                    }),
                  (g = []),
                  (y = []),
                  (n.qsa = Q.test(h.querySelectorAll)) &&
                    (ce(function (e) {
                      var t;
                      (m.appendChild(e).innerHTML =
                        "<a id='" +
                        w +
                        "'></a><select id='" +
                        w +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          y.push("[*^$]=" + P + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          y.push("\\[" + P + "*(?:value|" + H + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length ||
                          y.push("~="),
                        (t = h.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          y.push(
                            "\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          y.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length ||
                          y.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        y.push("[\\r\\n\\f]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = h.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          y.push("name" + P + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          y.push(":enabled", ":disabled"),
                        (m.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          y.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        y.push(",.*:");
                    })),
                  (n.matchesSelector = Q.test(
                    (v =
                      m.matches ||
                      m.webkitMatchesSelector ||
                      m.mozMatchesSelector ||
                      m.oMatchesSelector ||
                      m.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = v.call(e, "*")),
                        v.call(e, "[s!='']:x"),
                        g.push("!=", F);
                    }),
                  n.cssHas || y.push(":has"),
                  (y = y.length && new RegExp(y.join("|"))),
                  (g = g.length && new RegExp(g.join("|"))),
                  (t = Q.test(m.compareDocumentPosition)),
                  (b =
                    t || Q.test(m.contains)
                      ? function (e, t) {
                          var n = (9 === e.nodeType && e.documentElement) || e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (O = t
                    ? function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == h || (e.ownerDocument == _ && b(_, e))
                              ? -1
                              : t == h || (t.ownerDocument == _ && b(_, t))
                              ? 1
                              : c
                              ? Y(c, e) - Y(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          s = [e],
                          a = [t];
                        if (!i || !o)
                          return e == h
                            ? -1
                            : t == h
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? Y(c, e) - Y(c, t)
                            : 0;
                        if (i === o) return fe(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[r] === a[r]; ) r++;
                        return r
                          ? fe(s[r], a[r])
                          : s[r] == _
                          ? -1
                          : a[r] == _
                          ? 1
                          : 0;
                      }),
                  h)
                : h;
            }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              (f(e),
              n.matchesSelector &&
                p &&
                !D[t + " "] &&
                (!g || !g.test(t)) &&
                (!y || !y.test(t)))
            )
              try {
                var r = v.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (Me) {
                D(t, !0);
              }
            return ae(t, h, null, [e]).length > 0;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != h && f(e), b(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) != h && f(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && E.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !p)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !p
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((d = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(O),
              d)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = ae.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" === typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          (r = ae.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          $.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = S[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                      S(e, function (e) {
                        return t.test(
                          ("string" === typeof e.className && e.className) ||
                            ("undefined" !== typeof e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ae.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          d,
                          f,
                          h,
                          m,
                          p = o !== s ? "nextSibling" : "previousSibling",
                          y = t.parentNode,
                          g = a && t.nodeName.toLowerCase(),
                          v = !u && !a,
                          b = !1;
                        if (y) {
                          if (o) {
                            for (; p; ) {
                              for (f = t; (f = f[p]); )
                                if (
                                  a
                                    ? f.nodeName.toLowerCase() === g
                                    : 1 === f.nodeType
                                )
                                  return !1;
                              m = p = "only" === e && !m && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((m = [s ? y.firstChild : y.lastChild]), s && v)
                          ) {
                            for (
                              b =
                                (h =
                                  (l =
                                    (c =
                                      (d = (f = y)[w] || (f[w] = {}))[
                                        f.uniqueID
                                      ] || (d[f.uniqueID] = {}))[e] ||
                                    [])[0] === x && l[1]) && l[2],
                                f = h && y.childNodes[h];
                              (f =
                                (++h && f && f[p]) || (b = h = 0) || m.pop());

                            )
                              if (1 === f.nodeType && ++b && f === t) {
                                c[e] = [x, h, b];
                                break;
                              }
                          } else if (
                            (v &&
                              (b = h =
                                (l =
                                  (c =
                                    (d = (f = t)[w] || (f[w] = {}))[
                                      f.uniqueID
                                    ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                  x && l[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (f =
                                (++h && f && f[p]) || (b = h = 0) || m.pop()) &&
                              ((a
                                ? f.nodeName.toLowerCase() !== g
                                : 1 !== f.nodeType) ||
                                !++b ||
                                (v &&
                                  ((c =
                                    (d = f[w] || (f[w] = {}))[f.uniqueID] ||
                                    (d[f.uniqueID] = {}))[e] = [x, b]),
                                f !== t));

                            );
                          return (b -= i) === r || (b % r === 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ae.error("unsupported pseudo: " + e);
                  return i[w]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--; )
                              e[(r = Y(e, o[s]))] = !(n[r] = o[s]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(q, "$1"));
                  return r[w]
                    ? le(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    Z.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = p
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === m;
                },
                focus: function (e) {
                  return (
                    e === h.activeElement &&
                    (!h.hasFocus || h.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return X.test(e.nodeName);
                },
                input: function (e) {
                  return J.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ye(function () {
                  return [0];
                }),
                last: ye(function (e, t) {
                  return [t - 1];
                }),
                eq: ye(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ye(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ye(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ye(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: ye(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (r.pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = he(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = me(t);
          function ve() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function we(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = k++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s) return e(t, n, i);
                  return !1;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    d,
                    f = [x, a];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((c =
                            (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = c[o]) && l[0] === x && l[1] === a)
                            return (f[2] = l[2]);
                          if (((c[o] = f), (f[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function _e(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function xe(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
              (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
            return s;
          }
          function ke(e, t, n, r, i, o) {
            return (
              r && !r[w] && (r = ke(r)),
              i && !i[w] && (i = ke(i, o)),
              le(function (o, s, a, u) {
                var l,
                  c,
                  d,
                  f = [],
                  h = [],
                  m = s.length,
                  p =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  y = !e || (!o && t) ? p : xe(p, f, e, a, u),
                  g = n ? (i || (o ? e : m || r) ? [] : s) : y;
                if ((n && n(y, g, a, u), r))
                  for (l = xe(g, h), r(l, [], a, u), c = l.length; c--; )
                    (d = l[c]) && (g[h[c]] = !(y[h[c]] = d));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], c = g.length; c--; )
                        (d = g[c]) && l.push((y[c] = d));
                      i(null, (g = []), l, u);
                    }
                    for (c = g.length; c--; )
                      (d = g[c]) &&
                        (l = i ? Y(o, d) : f[c]) > -1 &&
                        (o[l] = !(s[l] = d));
                  }
                } else (g = xe(g === s ? g.splice(m, g.length) : g)), i ? i(null, s, g, u) : j.apply(s, g);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                u = s ? 1 : 0,
                c = we(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                d = we(
                  function (e) {
                    return Y(t, e) > -1;
                  },
                  a,
                  !0
                ),
                f = [
                  function (e, n, r) {
                    var i =
                      (!s && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                    return (t = null), i;
                  },
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) f = [we(_e(f), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return ke(
                    u > 1 && _e(f),
                    u > 1 &&
                      be(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(q, "$1"),
                    n,
                    u < i && Se(e.slice(u, i)),
                    i < o && Se((e = e.slice(i))),
                    i < o && be(e)
                  );
                }
                f.push(n);
              }
            return _e(f);
          }
          return (
            (ve.prototype = r.filters = r.pseudos),
            (r.setFilters = new ve()),
            (s = ae.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c = M[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, u = [], l = r.preFilter; a; ) {
                  for (s in ((n && !(i = V.exec(a))) ||
                    (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                  (n = !1),
                  (i = z.exec(a)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(q, " ") }),
                    (a = a.slice(n.length))),
                  r.filter))
                    !(i = G[s].exec(a)) ||
                      (l[s] && !(i = l[s](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: s, matches: i }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : M(e, u).slice(0);
              }),
            (a = ae.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  a = T[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = Se(t[n]))[w] ? i.push(a) : o.push(a);
                  (a = T(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, s, a, u, c) {
                          var d,
                            m,
                            y,
                            g = 0,
                            v = "0",
                            b = o && [],
                            w = [],
                            _ = l,
                            k = o || (i && r.find.TAG("*", c)),
                            S = (x += null == _ ? 1 : Math.random() || 0.1),
                            M = k.length;
                          for (
                            c && (l = s == h || s || c);
                            v !== M && null != (d = k[v]);
                            v++
                          ) {
                            if (i && d) {
                              for (
                                m = 0,
                                  s || d.ownerDocument == h || (f(d), (a = !p));
                                (y = e[m++]);

                              )
                                if (y(d, s || h, a)) {
                                  u.push(d);
                                  break;
                                }
                              c && (x = S);
                            }
                            n && ((d = !y && d) && g--, o && b.push(d));
                          }
                          if (((g += v), n && v !== g)) {
                            for (m = 0; (y = t[m++]); ) y(b, w, s, a);
                            if (o) {
                              if (g > 0)
                                for (; v--; )
                                  b[v] || w[v] || (w[v] = N.call(u));
                              w = xe(w);
                            }
                            j.apply(u, w),
                              c &&
                                !o &&
                                w.length > 0 &&
                                g + t.length > 1 &&
                                ae.uniqueSort(u);
                          }
                          return c && ((x = S), (l = _)), b;
                        };
                      return n ? le(o) : o;
                    })(o, i)
                  )),
                    (a.selector = e);
                }
                return a;
              }),
            (u = ae.select =
              function (e, t, n, i) {
                var o,
                  u,
                  l,
                  c,
                  d,
                  f = "function" === typeof e && e,
                  h = !i && s((e = f.selector || e));
                if (((n = n || []), 1 === h.length)) {
                  if (
                    (u = h[0] = h[0].slice(0)).length > 2 &&
                    "ID" === (l = u[0]).type &&
                    9 === t.nodeType &&
                    p &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    f && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  for (
                    o = G.needsContext.test(e) ? 0 : u.length;
                    o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (d = r.find[c]) &&
                      (i = d(
                        l.matches[0].replace(te, ne),
                        (ee.test(u[0].type) && ge(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(o, 1), !(e = i.length && be(u))))
                        return j.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (f || a(e, h))(
                    i,
                    t,
                    !p,
                    n,
                    !t || (ee.test(e) && ge(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = w.split("").sort(O).join("") === w),
            (n.detectDuplicates = !!d),
            f(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              de("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              de("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              de(H, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            ae
          );
        })(r);
        (S.find = T),
          (S.expr = T.selectors),
          (S.expr[":"] = S.expr.pseudos),
          (S.uniqueSort = S.unique = T.uniqueSort),
          (S.text = T.getText),
          (S.isXMLDoc = T.isXML),
          (S.contains = T.contains),
          (S.escapeSelector = T.escape);
        var D = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && S(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          O = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          E = S.expr.match.needsContext;
        function C(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var N =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function L(e, t, n) {
          return g(t)
            ? S.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? S.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" !== typeof t
            ? S.grep(e, function (e) {
                return c.call(t, e) > -1 !== n;
              })
            : S.filter(t, e, n);
        }
        (S.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? S.find.matchesSelector(r, e)
                ? [r]
                : []
              : S.find.matches(
                  e,
                  S.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          S.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" !== typeof e)
                return this.pushStack(
                  S(e).filter(function () {
                    for (t = 0; t < r; t++)
                      if (S.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++)
                S.find(e, i[t], n);
              return r > 1 ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(L(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(L(this, e || [], !0));
            },
            is: function (e) {
              return !!L(
                this,
                "string" === typeof e && E.test(e) ? S(e) : e || [],
                !1
              ).length;
            },
          });
        var j,
          A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((S.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || j), "string" === typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : A.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof S ? t[0] : t),
                S.merge(
                  this,
                  S.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : b,
                    !0
                  )
                ),
                N.test(r[1]) && S.isPlainObject(t))
              )
                for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = b.getElementById(r[2])) &&
                ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : g(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(S)
            : S.makeArray(e, this);
        }).prototype = S.fn),
          (j = S(b));
        var Y = /^(?:parents|prev(?:Until|All))/,
          H = { children: !0, contents: !0, next: !0, prev: !0 };
        function P(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        S.fn.extend({
          has: function (e) {
            var t = S(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              s = "string" !== typeof e && S(e);
            if (!E.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (s
                      ? s.index(n) > -1
                      : 1 === n.nodeType && S.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o);
          },
          index: function (e) {
            return e
              ? "string" === typeof e
                ? c.call(S(e), this[0])
                : c.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          S.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return D(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return D(e, "parentNode", n);
              },
              next: function (e) {
                return P(e, "nextSibling");
              },
              prev: function (e) {
                return P(e, "previousSibling");
              },
              nextAll: function (e) {
                return D(e, "nextSibling");
              },
              prevAll: function (e) {
                return D(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return D(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return D(e, "previousSibling", n);
              },
              siblings: function (e) {
                return O((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return O(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && s(e.contentDocument)
                  ? e.contentDocument
                  : (C(e, "template") && (e = e.content || e),
                    S.merge([], e.childNodes));
              },
            },
            function (e, t) {
              S.fn[e] = function (n, r) {
                var i = S.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" === typeof r && (i = S.filter(r, i)),
                  this.length > 1 &&
                    (H[e] || S.uniqueSort(i), Y.test(e) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var I = /[^\x20\t\r\n\f]+/g;
        function R(e) {
          return e;
        }
        function F(e) {
          throw e;
        }
        function W(e, t, n, r) {
          var i;
          try {
            e && g((i = e.promise))
              ? i.call(e).done(t).fail(n)
              : e && g((i = e.then))
              ? i.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (S.Callbacks = function (e) {
          e =
            "string" === typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    S.each(e.match(I) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : S.extend({}, e);
          var t,
            n,
            r,
            i,
            o = [],
            s = [],
            a = -1,
            u = function () {
              for (i = i || e.once, r = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < o.length; )
                  !1 === o[a].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((a = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
              add: function () {
                return (
                  o &&
                    (n && !t && ((a = o.length - 1), s.push(n)),
                    (function t(n) {
                      S.each(n, function (n, r) {
                        g(r)
                          ? (e.unique && l.has(r)) || o.push(r)
                          : r && r.length && "string" !== x(r) && t(r);
                      });
                    })(arguments),
                    n && !t && u()),
                  this
                );
              },
              remove: function () {
                return (
                  S.each(arguments, function (e, t) {
                    for (var n; (n = S.inArray(t, o, n)) > -1; )
                      o.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? S.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (i = s = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (i = s = []), n || t || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (e, n) {
                return (
                  i ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    s.push(n),
                    t || u()),
                  this
                );
              },
              fire: function () {
                return l.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return l;
        }),
          S.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    S.Callbacks("memory"),
                    S.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    S.Callbacks("once memory"),
                    S.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    S.Callbacks("once memory"),
                    S.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                i = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return S.Deferred(function (n) {
                      S.each(t, function (t, r) {
                        var i = g(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && g(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, n, i) {
                    var o = 0;
                    function s(e, t, n, i) {
                      return function () {
                        var a = this,
                          u = arguments,
                          l = function () {
                            var r, l;
                            if (!(e < o)) {
                              if ((r = n.apply(a, u)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (l =
                                r &&
                                ("object" === typeof r ||
                                  "function" === typeof r) &&
                                r.then),
                                g(l)
                                  ? i
                                    ? l.call(r, s(o, t, R, i), s(o, t, F, i))
                                    : (o++,
                                      l.call(
                                        r,
                                        s(o, t, R, i),
                                        s(o, t, F, i),
                                        s(o, t, R, t.notifyWith)
                                      ))
                                  : (n !== R && ((a = void 0), (u = [r])),
                                    (i || t.resolveWith)(a, u));
                            }
                          },
                          c = i
                            ? l
                            : function () {
                                try {
                                  l();
                                } catch (r) {
                                  S.Deferred.exceptionHook &&
                                    S.Deferred.exceptionHook(r, c.stackTrace),
                                    e + 1 >= o &&
                                      (n !== F && ((a = void 0), (u = [r])),
                                      t.rejectWith(a, u));
                                }
                              };
                        e
                          ? c()
                          : (S.Deferred.getStackHook &&
                              (c.stackTrace = S.Deferred.getStackHook()),
                            r.setTimeout(c));
                      };
                    }
                    return S.Deferred(function (r) {
                      t[0][3].add(s(0, r, g(i) ? i : R, r.notifyWith)),
                        t[1][3].add(s(0, r, g(e) ? e : R)),
                        t[2][3].add(s(0, r, g(n) ? n : F));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? S.extend(e, i) : i;
                  },
                },
                o = {};
              return (
                S.each(t, function (e, r) {
                  var s = r[2],
                    a = r[5];
                  (i[r[1]] = s.add),
                    a &&
                      s.add(
                        function () {
                          n = a;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    s.add(r[3].fire),
                    (o[r[0]] = function () {
                      return (
                        o[r[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (o[r[0] + "With"] = s.fireWith);
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = a.call(arguments),
                o = S.Deferred(),
                s = function (e) {
                  return function (n) {
                    (r[e] = this),
                      (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                      --t || o.resolveWith(r, i);
                  };
                };
              if (
                t <= 1 &&
                (W(e, o.done(s(n)).resolve, o.reject, !t),
                "pending" === o.state() || g(i[n] && i[n].then))
              )
                return o.then();
              for (; n--; ) W(i[n], s(n), o.reject);
              return o.promise();
            },
          });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (S.Deferred.exceptionHook = function (e, t) {
          r.console &&
            r.console.warn &&
            e &&
            q.test(e.name) &&
            r.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (S.readyException = function (e) {
            r.setTimeout(function () {
              throw e;
            });
          });
        var V = S.Deferred();
        function z() {
          b.removeEventListener("DOMContentLoaded", z),
            r.removeEventListener("load", z),
            S.ready();
        }
        (S.fn.ready = function (e) {
          return (
            V.then(e).catch(function (e) {
              S.readyException(e);
            }),
            this
          );
        }),
          S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --S.readyWait : S.isReady) ||
                ((S.isReady = !0),
                (!0 !== e && --S.readyWait > 0) || V.resolveWith(b, [S]));
            },
          }),
          (S.ready.then = V.then),
          "complete" === b.readyState ||
          ("loading" !== b.readyState && !b.documentElement.doScroll)
            ? r.setTimeout(S.ready)
            : (b.addEventListener("DOMContentLoaded", z),
              r.addEventListener("load", z));
        var U = function (e, t, n, r, i, o, s) {
            var a = 0,
              u = e.length,
              l = null == n;
            if ("object" === x(n))
              for (a in ((i = !0), n)) U(e, t, a, n[a], !0, o, s);
            else if (
              void 0 !== r &&
              ((i = !0),
              g(r) || (s = !0),
              l &&
                (s
                  ? (t.call(e, r), (t = null))
                  : ((l = t),
                    (t = function (e, t, n) {
                      return l.call(S(e), n);
                    }))),
              t)
            )
              for (; a < u; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
          },
          $ = /^-ms-/,
          Z = /-([a-z])/g;
        function G(e, t) {
          return t.toUpperCase();
        }
        function B(e) {
          return e.replace($, "ms-").replace(Z, G);
        }
        var J = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function X() {
          this.expando = S.expando + X.uid++;
        }
        (X.uid = 1),
          (X.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  J(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" === typeof t) i[B(t)] = n;
              else for (r in t) i[B(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][B(t)];
            },
            access: function (e, t, n) {
              return void 0 === t ||
                (t && "string" === typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(B)
                    : (t = B(t)) in r
                    ? [t]
                    : t.match(I) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || S.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !S.isEmptyObject(t);
            },
          });
        var Q = new X(),
          K = new X(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
              "string" === typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function (e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : ee.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                })(n);
              } catch (i) {}
              K.set(e, t, n);
            } else n = void 0;
          return n;
        }
        S.extend({
          hasData: function (e) {
            return K.hasData(e) || Q.hasData(e);
          },
          data: function (e, t, n) {
            return K.access(e, t, n);
          },
          removeData: function (e, t) {
            K.remove(e, t);
          },
          _data: function (e, t, n) {
            return Q.access(e, t, n);
          },
          _removeData: function (e, t) {
            Q.remove(e, t);
          },
        }),
          S.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                s = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = K.get(o)),
                  1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
                ) {
                  for (n = s.length; n--; )
                    s[n] &&
                      0 === (r = s[n].name).indexOf("data-") &&
                      ((r = B(r.slice(5))), ne(o, r, i[r]));
                  Q.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" === typeof e
                ? this.each(function () {
                    K.set(this, e);
                  })
                : U(
                    this,
                    function (t) {
                      var n;
                      if (o && void 0 === t)
                        return void 0 !== (n = K.get(o, e)) ||
                          void 0 !== (n = ne(o, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        K.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                K.remove(this, e);
              });
            },
          }),
          S.extend({
            queue: function (e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = Q.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = Q.access(e, t, S.makeArray(n)))
                      : r.push(n)),
                  r || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      S.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Q.get(e, n) ||
                Q.access(e, n, {
                  empty: S.Callbacks("once memory").add(function () {
                    Q.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          S.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" !== typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? S.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = S.queue(this, e, t);
                      S._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          S.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                S.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = S.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" !== typeof e && ((t = e), (e = void 0)), e = e || "fx";
                s--;

              )
                (n = Q.get(o[s], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(a));
              return a(), i.promise(t);
            },
          });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
          oe = ["Top", "Right", "Bottom", "Left"],
          se = b.documentElement,
          ae = function (e) {
            return S.contains(e.ownerDocument, e);
          },
          ue = { composed: !0 };
        se.getRootNode &&
          (ae = function (e) {
            return (
              S.contains(e.ownerDocument, e) ||
              e.getRootNode(ue) === e.ownerDocument
            );
          });
        var le = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ae(e) && "none" === S.css(e, "display"))
          );
        };
        function ce(e, t, n, r) {
          var i,
            o,
            s = 20,
            a = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return S.css(e, t, "");
                },
            u = a(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c =
              e.nodeType &&
              (S.cssNumber[t] || ("px" !== l && +u)) &&
              ie.exec(S.css(e, t));
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--; )
              S.style(e, t, c + l),
                (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
                (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
          }
          return (
            n &&
              ((c = +c || +u || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
          );
        }
        var de = {};
        function fe(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = de[r];
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = S.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (de[r] = i),
            i)
          );
        }
        function he(e, t) {
          for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
            (r = e[o]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((i[o] = Q.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && le(r) && (i[o] = fe(r)))
                : "none" !== n && ((i[o] = "none"), Q.set(r, "display", n)));
          for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        S.fn.extend({
          show: function () {
            return he(this, !0);
          },
          hide: function () {
            return he(this);
          },
          toggle: function (e) {
            return "boolean" === typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  le(this) ? S(this).show() : S(this).hide();
                });
          },
        });
        var me,
          pe,
          ye = /^(?:checkbox|radio)$/i,
          ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ve = /^$|^module$|\/(?:java|ecma)script/i;
        (me = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (pe = b.createElement("input")).setAttribute("type", "radio"),
          pe.setAttribute("checked", "checked"),
          pe.setAttribute("name", "t"),
          me.appendChild(pe),
          (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (me.innerHTML = "<textarea>x</textarea>"),
          (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue),
          (me.innerHTML = "<option></option>"),
          (y.option = !!me.lastChild);
        var be = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function we(e, t) {
          var n;
          return (
            (n =
              "undefined" !== typeof e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : "undefined" !== typeof e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && C(e, t)) ? S.merge([e], n) : n
          );
        }
        function _e(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
        }
        (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
          (be.th = be.td),
          y.option ||
            (be.optgroup = be.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;
        function ke(e, t, n, r, i) {
          for (
            var o,
              s,
              a,
              u,
              l,
              c,
              d = t.createDocumentFragment(),
              f = [],
              h = 0,
              m = e.length;
            h < m;
            h++
          )
            if ((o = e[h]) || 0 === o)
              if ("object" === x(o)) S.merge(f, o.nodeType ? [o] : o);
              else if (xe.test(o)) {
                for (
                  s = s || d.appendChild(t.createElement("div")),
                    a = (ge.exec(o) || ["", ""])[1].toLowerCase(),
                    u = be[a] || be._default,
                    s.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                  c--;

                )
                  s = s.lastChild;
                S.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
              } else f.push(t.createTextNode(o));
          for (d.textContent = "", h = 0; (o = f[h++]); )
            if (r && S.inArray(o, r) > -1) i && i.push(o);
            else if (
              ((l = ae(o)), (s = we(d.appendChild(o), "script")), l && _e(s), n)
            )
              for (c = 0; (o = s[c++]); ) ve.test(o.type || "") && n.push(o);
          return d;
        }
        var Se = /^([^.]*)(?:\.(.+)|)/;
        function Me() {
          return !0;
        }
        function Te() {
          return !1;
        }
        function De(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return b.activeElement;
                } catch (e) {}
              })()) ===
            ("focus" === t)
          );
        }
        function Oe(e, t, n, r, i, o) {
          var s, a;
          if ("object" === typeof t) {
            for (a in ("string" !== typeof n && ((r = r || n), (n = void 0)),
            t))
              Oe(e, a, n, r, t[a], o);
            return e;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ("string" === typeof n
                  ? ((i = r), (r = void 0))
                  : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = Te;
          else if (!i) return e;
          return (
            1 === o &&
              ((s = i),
              (i = function (e) {
                return S().off(e), s.apply(this, arguments);
              }),
              (i.guid = s.guid || (s.guid = S.guid++))),
            e.each(function () {
              S.event.add(this, t, i, r, n);
            })
          );
        }
        function Ee(e, t, n) {
          n
            ? (Q.set(e, t, !1),
              S.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    i,
                    o = Q.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (o.length)
                      (S.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((o = a.call(arguments)),
                      Q.set(this, t, o),
                      (r = n(this, t)),
                      this[t](),
                      o !== (i = Q.get(this, t)) || r
                        ? Q.set(this, t, !1)
                        : (i = {}),
                      o !== i)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i && i.value
                      );
                  } else
                    o.length &&
                      (Q.set(this, t, {
                        value: S.event.trigger(
                          S.extend(o[0], S.Event.prototype),
                          o.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === Q.get(e, t) && S.event.add(e, t, Me);
        }
        (S.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              s,
              a,
              u,
              l,
              c,
              d,
              f,
              h,
              m,
              p,
              y = Q.get(e);
            if (J(e))
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && S.find.matchesSelector(se, i),
                  n.guid || (n.guid = S.guid++),
                  (u = y.events) || (u = y.events = Object.create(null)),
                  (s = y.handle) ||
                    (s = y.handle =
                      function (t) {
                        return "undefined" !== typeof S &&
                          S.event.triggered !== t.type
                          ? S.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  l = (t = (t || "").match(I) || [""]).length;
                l--;

              )
                (h = p = (a = Se.exec(t[l]) || [])[1]),
                  (m = (a[2] || "").split(".").sort()),
                  h &&
                    ((d = S.event.special[h] || {}),
                    (h = (i ? d.delegateType : d.bindType) || h),
                    (d = S.event.special[h] || {}),
                    (c = S.extend(
                      {
                        type: h,
                        origType: p,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: m.join("."),
                      },
                      o
                    )),
                    (f = u[h]) ||
                      (((f = u[h] = []).delegateCount = 0),
                      (d.setup && !1 !== d.setup.call(e, r, m, s)) ||
                        (e.addEventListener && e.addEventListener(h, s))),
                    d.add &&
                      (d.add.call(e, c),
                      c.handler.guid || (c.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                    (S.event.global[h] = !0));
          },
          remove: function (e, t, n, r, i) {
            var o,
              s,
              a,
              u,
              l,
              c,
              d,
              f,
              h,
              m,
              p,
              y = Q.hasData(e) && Q.get(e);
            if (y && (u = y.events)) {
              for (l = (t = (t || "").match(I) || [""]).length; l--; )
                if (
                  ((h = p = (a = Se.exec(t[l]) || [])[1]),
                  (m = (a[2] || "").split(".").sort()),
                  h)
                ) {
                  for (
                    d = S.event.special[h] || {},
                      f = u[(h = (r ? d.delegateType : d.bindType) || h)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      s = o = f.length;
                    o--;

                  )
                    (c = f[o]),
                      (!i && p !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (a && !a.test(c.namespace)) ||
                        (r &&
                          r !== c.selector &&
                          ("**" !== r || !c.selector)) ||
                        (f.splice(o, 1),
                        c.selector && f.delegateCount--,
                        d.remove && d.remove.call(e, c));
                  s &&
                    !f.length &&
                    ((d.teardown && !1 !== d.teardown.call(e, m, y.handle)) ||
                      S.removeEvent(e, h, y.handle),
                    delete u[h]);
                } else for (h in u) S.event.remove(e, h + t[l], n, r, !0);
              S.isEmptyObject(u) && Q.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a = new Array(arguments.length),
              u = S.event.fix(e),
              l = (Q.get(this, "events") || Object.create(null))[u.type] || [],
              c = S.event.special[u.type] || {};
            for (a[0] = u, t = 1; t < arguments.length; t++)
              a[t] = arguments[t];
            if (
              ((u.delegateTarget = this),
              !c.preDispatch || !1 !== c.preDispatch.call(this, u))
            ) {
              for (
                s = S.event.handlers.call(this, u, l), t = 0;
                (i = s[t++]) && !u.isPropagationStopped();

              )
                for (
                  u.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                )
                  (u.rnamespace &&
                    !1 !== o.namespace &&
                    !u.rnamespace.test(o.namespace)) ||
                    ((u.handleObj = o),
                    (u.data = o.data),
                    void 0 !==
                      (r = (
                        (S.event.special[o.origType] || {}).handle || o.handler
                      ).apply(i.elem, a)) &&
                      !1 === (u.result = r) &&
                      (u.preventDefault(), u.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              s,
              a = [],
              u = t.delegateCount,
              l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ("click" !== e.type || !0 !== l.disabled)
                ) {
                  for (o = [], s = {}, n = 0; n < u; n++)
                    void 0 === s[(i = (r = t[n]).selector + " ")] &&
                      (s[i] = r.needsContext
                        ? S(i, this).index(l) > -1
                        : S.find(i, this, null, [l]).length),
                      s[i] && o.push(r);
                  o.length && a.push({ elem: l, handlers: o });
                }
            return (
              (l = this),
              u < t.length && a.push({ elem: l, handlers: t.slice(u) }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(S.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: g(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  ye.test(t.type) &&
                    t.click &&
                    C(t, "input") &&
                    Ee(t, "click", Me),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  ye.test(t.type) && t.click && C(t, "input") && Ee(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (ye.test(t.type) &&
                    t.click &&
                    C(t, "input") &&
                    Q.get(t, "click")) ||
                  C(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Me
                    : Te),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && S.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[S.expando] = !0);
          }),
          (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Me),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Me),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Me),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          S.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0,
            },
            S.event.addProp
          ),
          S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
              setup: function () {
                return Ee(this, e, De), !1;
              },
              trigger: function () {
                return Ee(this, e), !0;
              },
              _default: function (t) {
                return Q.get(t.target, e);
              },
              delegateType: t,
            };
          }),
          S.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              S.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (r && (r === this || S.contains(this, r))) ||
                      ((e.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          S.fn.extend({
            on: function (e, t, n, r) {
              return Oe(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return Oe(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  S(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" === typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 !== t && "function" !== typeof t) ||
                  ((n = t), (t = void 0)),
                !1 === n && (n = Te),
                this.each(function () {
                  S.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Ce = /<script|<style|<link/i,
          Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Le = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function je(e, t) {
          return (
            (C(e, "table") &&
              C(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              S(e).children("tbody")[0]) ||
            e
          );
        }
        function Ae(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Ye(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function He(e, t) {
          var n, r, i, o, s, a;
          if (1 === t.nodeType) {
            if (Q.hasData(e) && (a = Q.get(e).events))
              for (i in (Q.remove(t, "handle events"), a))
                for (n = 0, r = a[i].length; n < r; n++)
                  S.event.add(t, i, a[i][n]);
            K.hasData(e) &&
              ((o = K.access(e)), (s = S.extend({}, o)), K.set(t, s));
          }
        }
        function Pe(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && ye.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function Ie(e, t, n, r) {
          t = u(t);
          var i,
            o,
            s,
            a,
            l,
            c,
            d = 0,
            f = e.length,
            h = f - 1,
            m = t[0],
            p = g(m);
          if (
            p ||
            (f > 1 && "string" === typeof m && !y.checkClone && Ne.test(m))
          )
            return e.each(function (i) {
              var o = e.eq(i);
              p && (t[0] = m.call(this, i, o.html())), Ie(o, t, n, r);
            });
          if (
            f &&
            ((o = (i = ke(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
          ) {
            for (a = (s = S.map(we(i, "script"), Ae)).length; d < f; d++)
              (l = i),
                d !== h &&
                  ((l = S.clone(l, !0, !0)), a && S.merge(s, we(l, "script"))),
                n.call(e[d], l, d);
            if (a)
              for (
                c = s[s.length - 1].ownerDocument, S.map(s, Ye), d = 0;
                d < a;
                d++
              )
                (l = s[d]),
                  ve.test(l.type || "") &&
                    !Q.access(l, "globalEval") &&
                    S.contains(c, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                      ? S._evalUrl &&
                        !l.noModule &&
                        S._evalUrl(
                          l.src,
                          { nonce: l.nonce || l.getAttribute("nonce") },
                          c
                        )
                      : _(l.textContent.replace(Le, ""), l, c));
          }
          return e;
        }
        function Re(e, t, n) {
          for (
            var r, i = t ? S.filter(t, e) : e, o = 0;
            null != (r = i[o]);
            o++
          )
            n || 1 !== r.nodeType || S.cleanData(we(r)),
              r.parentNode &&
                (n && ae(r) && _e(we(r, "script")),
                r.parentNode.removeChild(r));
          return e;
        }
        S.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a = e.cloneNode(!0),
              u = ae(e);
            if (
              !y.noCloneChecked &&
              (1 === e.nodeType || 11 === e.nodeType) &&
              !S.isXMLDoc(e)
            )
              for (s = we(a), r = 0, i = (o = we(e)).length; r < i; r++)
                Pe(o[r], s[r]);
            if (t)
              if (n)
                for (
                  o = o || we(e), s = s || we(a), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  He(o[r], s[r]);
              else He(e, a);
            return (
              (s = we(a, "script")).length > 0 && _e(s, !u && we(e, "script")),
              a
            );
          },
          cleanData: function (e) {
            for (
              var t, n, r, i = S.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (J(n)) {
                if ((t = n[Q.expando])) {
                  if (t.events)
                    for (r in t.events)
                      i[r]
                        ? S.event.remove(n, r)
                        : S.removeEvent(n, r, t.handle);
                  n[Q.expando] = void 0;
                }
                n[K.expando] && (n[K.expando] = void 0);
              }
          },
        }),
          S.fn.extend({
            detach: function (e) {
              return Re(this, e, !0);
            },
            remove: function (e) {
              return Re(this, e);
            },
            text: function (e) {
              return U(
                this,
                function (e) {
                  return void 0 === e
                    ? S.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Ie(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  je(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Ie(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = je(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Ie(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (S.cleanData(we(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return S.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return U(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" === typeof e &&
                    !Ce.test(e) &&
                    !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = S.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (S.cleanData(we(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (i) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Ie(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  S.inArray(this, e) < 0 &&
                    (S.cleanData(we(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          S.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              S.fn[e] = function (e) {
                for (
                  var n, r = [], i = S(e), o = i.length - 1, s = 0;
                  s <= o;
                  s++
                )
                  (n = s === o ? this : this.clone(!0)),
                    S(i[s])[t](n),
                    l.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Fe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
          We = /^--/,
          qe = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = r), t.getComputedStyle(e);
          },
          Ve = function (e, t, n) {
            var r,
              i,
              o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
          },
          ze = new RegExp(oe.join("|"), "i"),
          Ue = "[\\x20\\t\\r\\n\\f]",
          $e = new RegExp(
            "^" + Ue + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ue + "+$",
            "g"
          );
        function Ze(e, t, n) {
          var r,
            i,
            o,
            s,
            a = We.test(t),
            u = e.style;
          return (
            (n = n || qe(e)) &&
              ((s = n.getPropertyValue(t) || n[t]),
              a && s && (s = s.replace($e, "$1") || void 0),
              "" !== s || ae(e) || (s = S.style(e, t)),
              !y.pixelBoxStyles() &&
                Fe.test(s) &&
                ze.test(t) &&
                ((r = u.width),
                (i = u.minWidth),
                (o = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = s),
                (s = n.width),
                (u.width = r),
                (u.minWidth = i),
                (u.maxWidth = o))),
            void 0 !== s ? s + "" : s
          );
        }
        function Ge(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (c) {
              (l.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (c.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                se.appendChild(l).appendChild(c);
              var e = r.getComputedStyle(c);
              (n = "1%" !== e.top),
                (u = 12 === t(e.marginLeft)),
                (c.style.right = "60%"),
                (s = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (c.style.position = "absolute"),
                (o = 12 === t(c.offsetWidth / 3)),
                se.removeChild(l),
                (c = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            i,
            o,
            s,
            a,
            u,
            l = b.createElement("div"),
            c = b.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === c.style.backgroundClip),
            S.extend(y, {
              boxSizingReliable: function () {
                return e(), i;
              },
              pixelBoxStyles: function () {
                return e(), s;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), u;
              },
              scrollboxSize: function () {
                return e(), o;
              },
              reliableTrDimensions: function () {
                var e, t, n, i;
                return (
                  null == a &&
                    ((e = b.createElement("table")),
                    (t = b.createElement("tr")),
                    (n = b.createElement("div")),
                    (e.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate"),
                    (t.style.cssText = "border:1px solid"),
                    (t.style.height = "1px"),
                    (n.style.height = "9px"),
                    (n.style.display = "block"),
                    se.appendChild(e).appendChild(t).appendChild(n),
                    (i = r.getComputedStyle(t)),
                    (a =
                      parseInt(i.height, 10) +
                        parseInt(i.borderTopWidth, 10) +
                        parseInt(i.borderBottomWidth, 10) ===
                      t.offsetHeight),
                    se.removeChild(e)),
                  a
                );
              },
            }));
        })();
        var Be = ["Webkit", "Moz", "ms"],
          Je = b.createElement("div").style,
          Xe = {};
        function Qe(e) {
          var t = S.cssProps[e] || Xe[e];
          return (
            t ||
            (e in Je
              ? e
              : (Xe[e] =
                  (function (e) {
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), n = Be.length;
                      n--;

                    )
                      if ((e = Be[n] + t) in Je) return e;
                  })(e) || e))
          );
        }
        var Ke = /^(none|table(?!-c[ea]).+)/,
          et = { position: "absolute", visibility: "hidden", display: "block" },
          tt = { letterSpacing: "0", fontWeight: "400" };
        function nt(e, t, n) {
          var r = ie.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function rt(e, t, n, r, i, o) {
          var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; s < 4; s += 2)
            "margin" === n && (u += S.css(e, n + oe[s], !0, i)),
              r
                ? ("content" === n && (u -= S.css(e, "padding" + oe[s], !0, i)),
                  "margin" !== n &&
                    (u -= S.css(e, "border" + oe[s] + "Width", !0, i)))
                : ((u += S.css(e, "padding" + oe[s], !0, i)),
                  "padding" !== n
                    ? (u += S.css(e, "border" + oe[s] + "Width", !0, i))
                    : (a += S.css(e, "border" + oe[s] + "Width", !0, i)));
          return (
            !r &&
              o >= 0 &&
              (u +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      o -
                      u -
                      a -
                      0.5
                  )
                ) || 0),
            u
          );
        }
        function it(e, t, n) {
          var r = qe(e),
            i =
              (!y.boxSizingReliable() || n) &&
              "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            s = Ze(e, t, r),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Fe.test(s)) {
            if (!n) return s;
            s = "auto";
          }
          return (
            ((!y.boxSizingReliable() && i) ||
              (!y.reliableTrDimensions() && C(e, "tr")) ||
              "auto" === s ||
              (!parseFloat(s) && "inline" === S.css(e, "display", !1, r))) &&
              e.getClientRects().length &&
              ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
              (o = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) +
              rt(e, t, n || (i ? "border" : "content"), o, r, s) +
              "px"
          );
        }
        function ot(e, t, n, r, i) {
          return new ot.prototype.init(e, t, n, r, i);
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ze(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                s,
                a = B(t),
                u = We.test(t),
                l = e.style;
              if (
                (u || (t = Qe(a)),
                (s = S.cssHooks[t] || S.cssHooks[a]),
                void 0 === n)
              )
                return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                  ? i
                  : l[t];
              "string" === (o = typeof n) &&
                (i = ie.exec(n)) &&
                i[1] &&
                ((n = ce(e, t, i)), (o = "number")),
                null != n &&
                  n === n &&
                  ("number" !== o ||
                    u ||
                    (n += (i && i[3]) || (S.cssNumber[a] ? "" : "px")),
                  y.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                    (u ? l.setProperty(t, n) : (l[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              s,
              a = B(t);
            return (
              We.test(t) || (t = Qe(a)),
              (s = S.cssHooks[t] || S.cssHooks[a]) &&
                "get" in s &&
                (i = s.get(e, !0, n)),
              void 0 === i && (i = Ze(e, t, r)),
              "normal" === i && t in tt && (i = tt[t]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          },
        }),
          S.each(["height", "width"], function (e, t) {
            S.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !Ke.test(S.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? it(e, t, r)
                    : Ve(e, et, function () {
                        return it(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var i,
                  o = qe(e),
                  s = !y.scrollboxSize() && "absolute" === o.position,
                  a = (s || r) && "border-box" === S.css(e, "boxSizing", !1, o),
                  u = r ? rt(e, t, r, a, o) : 0;
                return (
                  a &&
                    s &&
                    (u -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        rt(e, t, "border", !1, o) -
                        0.5
                    )),
                  u &&
                    (i = ie.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((e.style[t] = n), (n = S.css(e, t))),
                  nt(0, n, u)
                );
              },
            };
          }),
          (S.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ze(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    Ve(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (S.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var r = 0,
                    i = {},
                    o = "string" === typeof n ? n.split(" ") : [n];
                  r < 4;
                  r++
                )
                  i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              },
            }),
              "margin" !== e && (S.cssHooks[e + t].set = nt);
          }),
          S.fn.extend({
            css: function (e, t) {
              return U(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    s = 0;
                  if (Array.isArray(t)) {
                    for (r = qe(e), i = t.length; s < i; s++)
                      o[t[s]] = S.css(e, t[s], !1, r);
                    return o;
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (S.Tween = ot),
          (ot.prototype = {
            constructor: ot,
            init: function (e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || S.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = ot.propHooks[this.prop];
              return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = ot.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      S.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : ot.propHooks._default.set(this),
                this
              );
            },
          }),
          (ot.prototype.init.prototype = ot.prototype),
          (ot.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                S.fx.step[e.prop]
                  ? S.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : S.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (ot.propHooks.scrollTop = ot.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (S.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (S.fx = ot.prototype.init),
          (S.fx.step = {});
        var st,
          at,
          ut = /^(?:toggle|show|hide)$/,
          lt = /queueHooks$/;
        function ct() {
          at &&
            (!1 === b.hidden && r.requestAnimationFrame
              ? r.requestAnimationFrame(ct)
              : r.setTimeout(ct, S.fx.interval),
            S.fx.tick());
        }
        function dt() {
          return (
            r.setTimeout(function () {
              st = void 0;
            }),
            (st = Date.now())
          );
        }
        function ft(e, t) {
          var n,
            r = 0,
            i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function ht(e, t, n) {
          for (
            var r,
              i = (mt.tweeners[t] || []).concat(mt.tweeners["*"]),
              o = 0,
              s = i.length;
            o < s;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r;
        }
        function mt(e, t, n) {
          var r,
            i,
            o = 0,
            s = mt.prefilters.length,
            a = S.Deferred().always(function () {
              delete u.elem;
            }),
            u = function () {
              if (i) return !1;
              for (
                var t = st || dt(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  r = 1 - (n / l.duration || 0),
                  o = 0,
                  s = l.tweens.length;
                o < s;
                o++
              )
                l.tweens[o].run(r);
              return (
                a.notifyWith(e, [l, r, n]),
                r < 1 && s
                  ? n
                  : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
              );
            },
            l = a.promise({
              elem: e,
              props: S.extend({}, t),
              opts: S.extend(
                !0,
                { specialEasing: {}, easing: S.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: st || dt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = S.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing
                );
                return l.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
                    : a.rejectWith(e, [l, t]),
                  this
                );
              },
            }),
            c = l.props;
          for (
            !(function (e, t) {
              var n, r, i, o, s;
              for (n in e)
                if (
                  ((i = t[(r = B(n))]),
                  (o = e[n]),
                  Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                  n !== r && ((e[r] = o), delete e[n]),
                  (s = S.cssHooks[r]) && ("expand" in s))
                )
                  for (n in ((o = s.expand(o)), delete e[r], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(c, l.opts.specialEasing);
            o < s;
            o++
          )
            if ((r = mt.prefilters[o].call(l, e, c, l.opts)))
              return (
                g(r.stop) &&
                  (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            S.map(c, ht, l),
            g(l.opts.start) && l.opts.start.call(e, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
          );
        }
        (S.Animation = S.extend(mt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ie.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]),
                (mt.tweeners[n] = mt.tweeners[n] || []),
                mt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                l,
                c,
                d = "width" in t || "height" in t,
                f = this,
                h = {},
                m = e.style,
                p = e.nodeType && le(e),
                y = Q.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (s = S._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (a = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || a();
                  })),
                s.unqueued++,
                f.always(function () {
                  f.always(function () {
                    s.unqueued--, S.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              t))
                if (((i = t[r]), ut.test(i))) {
                  if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (p ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    p = !0;
                  }
                  h[r] = (y && y[r]) || S.style(e, r);
                }
              if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                for (r in (d &&
                  1 === e.nodeType &&
                  ((n.overflow = [m.overflow, m.overflowX, m.overflowY]),
                  null == (l = y && y.display) && (l = Q.get(e, "display")),
                  "none" === (c = S.css(e, "display")) &&
                    (l
                      ? (c = l)
                      : (he([e], !0),
                        (l = e.style.display || l),
                        (c = S.css(e, "display")),
                        he([e]))),
                  ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === S.css(e, "float") &&
                    (u ||
                      (f.done(function () {
                        m.display = l;
                      }),
                      null == l &&
                        ((c = m.display), (l = "none" === c ? "" : c))),
                    (m.display = "inline-block"))),
                n.overflow &&
                  ((m.overflow = "hidden"),
                  f.always(function () {
                    (m.overflow = n.overflow[0]),
                      (m.overflowX = n.overflow[1]),
                      (m.overflowY = n.overflow[2]);
                  })),
                (u = !1),
                h))
                  u ||
                    (y
                      ? "hidden" in y && (p = y.hidden)
                      : (y = Q.access(e, "fxshow", { display: l })),
                    o && (y.hidden = !p),
                    p && he([e], !0),
                    f.done(function () {
                      for (r in (p || he([e]), Q.remove(e, "fxshow"), h))
                        S.style(e, r, h[r]);
                    })),
                    (u = ht(p ? y[r] : 0, r, f)),
                    r in y ||
                      ((y[r] = u.start),
                      p && ((u.end = u.start), (u.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
          },
        })),
          (S.speed = function (e, t, n) {
            var r =
              e && "object" === typeof e
                ? S.extend({}, e)
                : {
                    complete: n || (!n && t) || (g(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !g(t) && t),
                  };
            return (
              S.fx.off
                ? (r.duration = 0)
                : "number" !== typeof r.duration &&
                  (r.duration in S.fx.speeds
                    ? (r.duration = S.fx.speeds[r.duration])
                    : (r.duration = S.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                g(r.old) && r.old.call(this),
                  r.queue && S.dequeue(this, r.queue);
              }),
              r
            );
          }),
          S.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(le)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = S.isEmptyObject(e),
                o = S.speed(t, n, r),
                s = function () {
                  var t = mt(this, S.extend({}, e), o);
                  (i || Q.get(this, "finish")) && t.stop(!0);
                };
              return (
                (s.finish = s),
                i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
              );
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" !== typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = S.timers,
                    s = Q.get(this);
                  if (i) s[i] && s[i].stop && r(s[i]);
                  else for (i in s) s[i] && s[i].stop && lt.test(i) && r(s[i]);
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || S.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Q.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = S.timers,
                    s = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      S.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          S.each(["toggle", "show", "hide"], function (e, t) {
            var n = S.fn[t];
            S.fn[t] = function (e, r, i) {
              return null == e || "boolean" === typeof e
                ? n.apply(this, arguments)
                : this.animate(ft(t, !0), e, r, i);
            };
          }),
          S.each(
            {
              slideDown: ft("show"),
              slideUp: ft("hide"),
              slideToggle: ft("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              S.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (S.timers = []),
          (S.fx.tick = function () {
            var e,
              t = 0,
              n = S.timers;
            for (st = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (st = void 0);
          }),
          (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
          }),
          (S.fx.interval = 13),
          (S.fx.start = function () {
            at || ((at = !0), ct());
          }),
          (S.fx.stop = function () {
            at = null;
          }),
          (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (S.fn.delay = function (e, t) {
            return (
              (e = (S.fx && S.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var i = r.setTimeout(t, e);
                n.stop = function () {
                  r.clearTimeout(i);
                };
              })
            );
          }),
          (function () {
            var e = b.createElement("input"),
              t = b
                .createElement("select")
                .appendChild(b.createElement("option"));
            (e.type = "checkbox"),
              (y.checkOn = "" !== e.value),
              (y.optSelected = t.selected),
              ((e = b.createElement("input")).value = "t"),
              (e.type = "radio"),
              (y.radioValue = "t" === e.value);
          })();
        var pt,
          yt = S.expr.attrHandle;
        S.fn.extend({
          attr: function (e, t) {
            return U(this, S.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e);
            });
          },
        }),
          S.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" === typeof e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === o && S.isXMLDoc(e)) ||
                      (i =
                        S.attrHooks[t.toLowerCase()] ||
                        (S.expr.match.bool.test(t) ? pt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void S.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : null == (r = S.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!y.radioValue && "radio" === t && C(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(I);
              if (i && 1 === e.nodeType)
                for (; (n = i[r++]); ) e.removeAttribute(n);
            },
          }),
          (pt = {
            set: function (e, t, n) {
              return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = yt[t] || S.find.attr;
            yt[t] = function (e, t, r) {
              var i,
                o,
                s = t.toLowerCase();
              return (
                r ||
                  ((o = yt[s]),
                  (yt[s] = i),
                  (i = null != n(e, t, r) ? s : null),
                  (yt[s] = o)),
                i
              );
            };
          });
        var gt = /^(?:input|select|textarea|button)$/i,
          vt = /^(?:a|area)$/i;
        function bt(e) {
          return (e.match(I) || []).join(" ");
        }
        function wt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function _t(e) {
          return Array.isArray(e)
            ? e
            : ("string" === typeof e && e.match(I)) || [];
        }
        S.fn.extend({
          prop: function (e, t) {
            return U(this, S.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[S.propFix[e] || e];
            });
          },
        }),
          S.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && S.isXMLDoc(e)) ||
                    ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = S.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          y.optSelected ||
            (S.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          S.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              S.propFix[this.toLowerCase()] = this;
            }
          ),
          S.fn.extend({
            addClass: function (e) {
              var t, n, r, i, o, s;
              return g(e)
                ? this.each(function (t) {
                    S(this).addClass(e.call(this, t, wt(this)));
                  })
                : (t = _t(e)).length
                ? this.each(function () {
                    if (
                      ((r = wt(this)),
                      (n = 1 === this.nodeType && " " + bt(r) + " "))
                    ) {
                      for (o = 0; o < t.length; o++)
                        (i = t[o]),
                          n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                      (s = bt(n)), r !== s && this.setAttribute("class", s);
                    }
                  })
                : this;
            },
            removeClass: function (e) {
              var t, n, r, i, o, s;
              return g(e)
                ? this.each(function (t) {
                    S(this).removeClass(e.call(this, t, wt(this)));
                  })
                : arguments.length
                ? (t = _t(e)).length
                  ? this.each(function () {
                      if (
                        ((r = wt(this)),
                        (n = 1 === this.nodeType && " " + bt(r) + " "))
                      ) {
                        for (o = 0; o < t.length; o++)
                          for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                            n = n.replace(" " + i + " ", " ");
                        (s = bt(n)), r !== s && this.setAttribute("class", s);
                      }
                    })
                  : this
                : this.attr("class", "");
            },
            toggleClass: function (e, t) {
              var n,
                r,
                i,
                o,
                s = typeof e,
                a = "string" === s || Array.isArray(e);
              return g(e)
                ? this.each(function (n) {
                    S(this).toggleClass(e.call(this, n, wt(this), t), t);
                  })
                : "boolean" === typeof t && a
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ((n = _t(e)),
                  this.each(function () {
                    if (a)
                      for (o = S(this), i = 0; i < n.length; i++)
                        (r = n[i]),
                          o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                    else
                      (void 0 !== e && "boolean" !== s) ||
                        ((r = wt(this)) && Q.set(this, "__className__", r),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            r || !1 === e
                              ? ""
                              : Q.get(this, "__className__") || ""
                          ));
                  }));
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (1 === n.nodeType && (" " + bt(wt(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var xt = /\r/g;
        S.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = g(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, S(this).val()) : e)
                      ? (i = "")
                      : "number" === typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = S.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      S.valHooks[this.type] ||
                      S.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
              ? (t =
                  S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" === typeof (n = i.value)
                ? n.replace(xt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          S.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = S.find.attr(e, "value");
                  return null != t ? t : bt(S.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    s = "select-one" === e.type,
                    a = s ? null : [],
                    u = s ? o + 1 : i.length;
                  for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))
                    ) {
                      if (((t = S(n).val()), s)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (
                    var n, r, i = e.options, o = S.makeArray(t), s = i.length;
                    s--;

                  )
                    ((r = i[s]).selected =
                      S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = S.inArray(S(e).val(), t) > -1);
              },
            }),
              y.checkOn ||
                (S.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (y.focusin = "onfocusin" in r);
        var kt = /^(?:focusinfocus|focusoutblur)$/,
          St = function (e) {
            e.stopPropagation();
          };
        S.extend(S.event, {
          trigger: function (e, t, n, i) {
            var o,
              s,
              a,
              u,
              l,
              c,
              d,
              f,
              m = [n || b],
              p = h.call(e, "type") ? e.type : e,
              y = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = f = a = n = n || b),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !kt.test(p + S.event.triggered) &&
                (p.indexOf(".") > -1 &&
                  ((y = p.split(".")), (p = y.shift()), y.sort()),
                (l = p.indexOf(":") < 0 && "on" + p),
                ((e = e[S.expando]
                  ? e
                  : new S.Event(p, "object" === typeof e && e)).isTrigger = i
                  ? 2
                  : 3),
                (e.namespace = y.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (d = S.event.special[p] || {}),
                i || !d.trigger || !1 !== d.trigger.apply(n, t)))
            ) {
              if (!i && !d.noBubble && !v(n)) {
                for (
                  u = d.delegateType || p, kt.test(u + p) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  m.push(s), (a = s);
                a === (n.ownerDocument || b) &&
                  m.push(a.defaultView || a.parentWindow || r);
              }
              for (o = 0; (s = m[o++]) && !e.isPropagationStopped(); )
                (f = s),
                  (e.type = o > 1 ? u : d.bindType || p),
                  (c =
                    (Q.get(s, "events") || Object.create(null))[e.type] &&
                    Q.get(s, "handle")) && c.apply(s, t),
                  (c = l && s[l]) &&
                    c.apply &&
                    J(s) &&
                    ((e.result = c.apply(s, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = p),
                i ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(m.pop(), t)) ||
                  !J(n) ||
                  (l &&
                    g(n[p]) &&
                    !v(n) &&
                    ((a = n[l]) && (n[l] = null),
                    (S.event.triggered = p),
                    e.isPropagationStopped() && f.addEventListener(p, St),
                    n[p](),
                    e.isPropagationStopped() && f.removeEventListener(p, St),
                    (S.event.triggered = void 0),
                    a && (n[l] = a))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
          },
        }),
          S.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                S.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return S.event.trigger(e, t, n, !0);
            },
          }),
          y.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                S.event.simulate(t, e.target, S.event.fix(e));
              };
              S.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = Q.access(r, t);
                  i || r.addEventListener(e, n, !0),
                    Q.access(r, t, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = Q.access(r, t) - 1;
                  i
                    ? Q.access(r, t, i)
                    : (r.removeEventListener(e, n, !0), Q.remove(r, t));
                },
              };
            });
        var Mt = r.location,
          Tt = { guid: Date.now() },
          Dt = /\?/;
        S.parseXML = function (e) {
          var t, n;
          if (!e || "string" !== typeof e) return null;
          try {
            t = new r.DOMParser().parseFromString(e, "text/xml");
          } catch (i) {}
          return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
              S.error(
                "Invalid XML: " +
                  (n
                    ? S.map(n.childNodes, function (e) {
                        return e.textContent;
                      }).join("\n")
                    : e)
              ),
            t
          );
        };
        var Ot = /\[\]$/,
          Et = /\r?\n/g,
          Ct = /^(?:submit|button|image|reset|file)$/i,
          Nt = /^(?:input|select|textarea|keygen)/i;
        function Lt(e, t, n, r) {
          var i;
          if (Array.isArray(t))
            S.each(t, function (t, i) {
              n || Ot.test(e)
                ? r(e, i)
                : Lt(
                    e +
                      "[" +
                      ("object" === typeof i && null != i ? t : "") +
                      "]",
                    i,
                    n,
                    r
                  );
            });
          else if (n || "object" !== x(t)) r(e, t);
          else for (i in t) Lt(e + "[" + i + "]", t[i], n, r);
        }
        (S.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = g(t) ? t() : t;
              r[r.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) Lt(n, e[n], t, i);
          return r.join("&");
        }),
          S.fn.extend({
            serialize: function () {
              return S.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !S(this).is(":disabled") &&
                    Nt.test(this.nodeName) &&
                    !Ct.test(e) &&
                    (this.checked || !ye.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = S(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? S.map(n, function (e) {
                        return { name: t.name, value: e.replace(Et, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Et, "\r\n") };
                })
                .get();
            },
          });
        var jt = /%20/g,
          At = /#.*$/,
          Yt = /([?&])_=[^&]*/,
          Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Pt = /^(?:GET|HEAD)$/,
          It = /^\/\//,
          Rt = {},
          Ft = {},
          Wt = "*/".concat("*"),
          qt = b.createElement("a");
        function Vt(e) {
          return function (t, n) {
            "string" !== typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(I) || [];
            if (g(n))
              for (; (r = o[i++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function zt(e, t, n, r) {
          var i = {},
            o = e === Ft;
          function s(a) {
            var u;
            return (
              (i[a] = !0),
              S.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" !== typeof l || o || i[l]
                  ? o
                    ? !(u = l)
                    : void 0
                  : (t.dataTypes.unshift(l), s(l), !1);
              }),
              u
            );
          }
          return s(t.dataTypes[0]) || (!i["*"] && s("*"));
        }
        function Ut(e, t) {
          var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && S.extend(!0, e, r), e;
        }
        (qt.href = Mt.href),
          S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Mt.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Mt.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Ut(Ut(e, S.ajaxSettings), t) : Ut(S.ajaxSettings, e);
            },
            ajaxPrefilter: Vt(Rt),
            ajaxTransport: Vt(Ft),
            ajax: function (e, t) {
              "object" === typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                i,
                o,
                s,
                a,
                u,
                l,
                c,
                d,
                f,
                h = S.ajaxSetup({}, t),
                m = h.context || h,
                p = h.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                y = S.Deferred(),
                g = S.Callbacks("once memory"),
                v = h.statusCode || {},
                w = {},
                _ = {},
                x = "canceled",
                k = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (l) {
                      if (!s)
                        for (s = {}; (t = Ht.exec(o)); )
                          s[t[1].toLowerCase() + " "] = (
                            s[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = s[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return l ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == l &&
                        ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                        (w[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == l && (h.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (l) k.always(e[k.status]);
                      else for (t in e) v[t] = [v[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || x;
                    return n && n.abort(t), M(0, t), this;
                  },
                };
              if (
                (y.promise(k),
                (h.url = ((e || h.url || Mt.href) + "").replace(
                  It,
                  Mt.protocol + "//"
                )),
                (h.type = t.method || t.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [
                  "",
                ]),
                null == h.crossDomain)
              ) {
                u = b.createElement("a");
                try {
                  (u.href = h.url),
                    (u.href = u.href),
                    (h.crossDomain =
                      qt.protocol + "//" + qt.host !==
                      u.protocol + "//" + u.host);
                } catch (T) {
                  h.crossDomain = !0;
                }
              }
              if (
                (h.data &&
                  h.processData &&
                  "string" !== typeof h.data &&
                  (h.data = S.param(h.data, h.traditional)),
                zt(Rt, h, t, k),
                l)
              )
                return k;
              for (d in ((c = S.event && h.global) &&
                0 === S.active++ &&
                S.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Pt.test(h.type)),
              (i = h.url.replace(At, "")),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (h.data = h.data.replace(jt, "+"))
                : ((f = h.url.slice(i.length)),
                  h.data &&
                    (h.processData || "string" === typeof h.data) &&
                    ((i += (Dt.test(i) ? "&" : "?") + h.data), delete h.data),
                  !1 === h.cache &&
                    ((i = i.replace(Yt, "$1")),
                    (f = (Dt.test(i) ? "&" : "?") + "_=" + Tt.guid++ + f)),
                  (h.url = i + f)),
              h.ifModified &&
                (S.lastModified[i] &&
                  k.setRequestHeader("If-Modified-Since", S.lastModified[i]),
                S.etag[i] && k.setRequestHeader("If-None-Match", S.etag[i])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                t.contentType) &&
                k.setRequestHeader("Content-Type", h.contentType),
              k.setRequestHeader(
                "Accept",
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                  : h.accepts["*"]
              ),
              h.headers))
                k.setRequestHeader(d, h.headers[d]);
              if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || l))
                return k.abort();
              if (
                ((x = "abort"),
                g.add(h.complete),
                k.done(h.success),
                k.fail(h.error),
                (n = zt(Ft, h, t, k)))
              ) {
                if (((k.readyState = 1), c && p.trigger("ajaxSend", [k, h]), l))
                  return k;
                h.async &&
                  h.timeout > 0 &&
                  (a = r.setTimeout(function () {
                    k.abort("timeout");
                  }, h.timeout));
                try {
                  (l = !1), n.send(w, M);
                } catch (T) {
                  if (l) throw T;
                  M(-1, T);
                }
              } else M(-1, "No Transport");
              function M(e, t, s, u) {
                var d,
                  f,
                  b,
                  w,
                  _,
                  x = t;
                l ||
                  ((l = !0),
                  a && r.clearTimeout(a),
                  (n = void 0),
                  (o = u || ""),
                  (k.readyState = e > 0 ? 4 : 0),
                  (d = (e >= 200 && e < 300) || 304 === e),
                  s &&
                    (w = (function (e, t, n) {
                      for (
                        var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];

                      )
                        u.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in a)
                          if (a[i] && a[i].test(r)) {
                            u.unshift(i);
                            break;
                          }
                      if (u[0] in n) o = u[0];
                      else {
                        for (i in n) {
                          if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break;
                          }
                          s || (s = i);
                        }
                        o = o || s;
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o];
                    })(h, k, s)),
                  !d &&
                    S.inArray("script", h.dataTypes) > -1 &&
                    S.inArray("json", h.dataTypes) < 0 &&
                    (h.converters["text script"] = function () {}),
                  (w = (function (e, t, n, r) {
                    var i,
                      o,
                      s,
                      a,
                      u,
                      l = {},
                      c = e.dataTypes.slice();
                    if (c[1])
                      for (s in e.converters)
                        l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (u = o),
                        (o = c.shift()))
                      )
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                          if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                              if (
                                (a = i.split(" "))[1] === o &&
                                (s = l[u + " " + a[0]] || l["* " + a[0]])
                              ) {
                                !0 === s
                                  ? (s = l[i])
                                  : !0 !== l[i] &&
                                    ((o = a[0]), c.unshift(a[1]));
                                break;
                              }
                          if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else
                              try {
                                t = s(t);
                              } catch (T) {
                                return {
                                  state: "parsererror",
                                  error: s
                                    ? T
                                    : "No conversion from " + u + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(h, w, k, d)),
                  d
                    ? (h.ifModified &&
                        ((_ = k.getResponseHeader("Last-Modified")) &&
                          (S.lastModified[i] = _),
                        (_ = k.getResponseHeader("etag")) && (S.etag[i] = _)),
                      204 === e || "HEAD" === h.type
                        ? (x = "nocontent")
                        : 304 === e
                        ? (x = "notmodified")
                        : ((x = w.state), (f = w.data), (d = !(b = w.error))))
                    : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                  (k.status = e),
                  (k.statusText = (t || x) + ""),
                  d ? y.resolveWith(m, [f, x, k]) : y.rejectWith(m, [k, x, b]),
                  k.statusCode(v),
                  (v = void 0),
                  c &&
                    p.trigger(d ? "ajaxSuccess" : "ajaxError", [
                      k,
                      h,
                      d ? f : b,
                    ]),
                  g.fireWith(m, [k, x]),
                  c &&
                    (p.trigger("ajaxComplete", [k, h]),
                    --S.active || S.event.trigger("ajaxStop")));
              }
              return k;
            },
            getJSON: function (e, t, n) {
              return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return S.get(e, void 0, t, "script");
            },
          }),
          S.each(["get", "post"], function (e, t) {
            S[t] = function (e, n, r, i) {
              return (
                g(n) && ((i = i || r), (r = n), (n = void 0)),
                S.ajax(
                  S.extend(
                    { url: e, type: t, dataType: i, data: n, success: r },
                    S.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (S._evalUrl = function (e, t, n) {
            return S.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                S.globalEval(e, t, n);
              },
            });
          }),
          S.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (g(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return g(e)
                ? this.each(function (t) {
                    S(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = S(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = g(e);
              return this.each(function (n) {
                S(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    S(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
          }),
          (S.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (S.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (e) {}
          });
        var $t = { 0: 200, 1223: 204 },
          Zt = S.ajaxSettings.xhr();
        (y.cors = !!Zt && "withCredentials" in Zt),
          (y.ajax = Zt = !!Zt),
          S.ajaxTransport(function (e) {
            var t, n;
            if (y.cors || (Zt && !e.crossDomain))
              return {
                send: function (i, o) {
                  var s,
                    a = e.xhr();
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                  for (s in (e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"),
                  i))
                    a.setRequestHeader(s, i[s]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          n =
                          a.onload =
                          a.onerror =
                          a.onabort =
                          a.ontimeout =
                          a.onreadystatechange =
                            null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                          ? "number" !== typeof a.status
                            ? o(0, "error")
                            : o(a.status, a.statusText)
                          : o(
                              $t[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                                "string" !== typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (a.onload = t()),
                    (n = a.onerror = a.ontimeout = t("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = n)
                      : (a.onreadystatechange = function () {
                          4 === a.readyState &&
                            r.setTimeout(function () {
                              t && n();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    a.send((e.hasContent && e.data) || null);
                  } catch (u) {
                    if (t) throw u;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          S.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return S.globalEval(e), e;
              },
            },
          }),
          S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          S.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, i) {
                  (t = S("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    b.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Gt,
          Bt = [],
          Jt = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Bt.pop() || S.expando + "_" + Tt.guid++;
            return (this[e] = !0), e;
          },
        }),
          S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
              o,
              s,
              a =
                !1 !== e.jsonp &&
                (Jt.test(e.url)
                  ? "url"
                  : "string" === typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Jt.test(e.data) &&
                    "data");
            if (a || "jsonp" === e.dataTypes[0])
              return (
                (i = e.jsonpCallback =
                  g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace(Jt, "$1" + i))
                  : !1 !== e.jsonp &&
                    (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function () {
                  return s || S.error(i + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = r[i]),
                (r[i] = function () {
                  s = arguments;
                }),
                n.always(function () {
                  void 0 === o ? S(r).removeProp(i) : (r[i] = o),
                    e[i] && ((e.jsonpCallback = t.jsonpCallback), Bt.push(i)),
                    s && g(o) && o(s[0]),
                    (s = o = void 0);
                }),
                "script"
              );
          }),
          (y.createHTMLDocument =
            (((Gt = b.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === Gt.childNodes.length)),
          (S.parseHTML = function (e, t, n) {
            return "string" !== typeof e
              ? []
              : ("boolean" === typeof t && ((n = t), (t = !1)),
                t ||
                  (y.createHTMLDocument
                    ? (((r = (t =
                        b.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = b.location.href),
                      t.head.appendChild(r))
                    : (t = b)),
                (o = !n && []),
                (i = N.exec(e))
                  ? [t.createElement(i[1])]
                  : ((i = ke([e], t, o)),
                    o && o.length && S(o).remove(),
                    S.merge([], i.childNodes)));
            var r, i, o;
          }),
          (S.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              s = this,
              a = e.indexOf(" ");
            return (
              a > -1 && ((r = bt(e.slice(a))), (e = e.slice(0, a))),
              g(t)
                ? ((n = t), (t = void 0))
                : t && "object" === typeof t && (i = "POST"),
              s.length > 0 &&
                S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (o = arguments),
                      s.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        s.each(function () {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (S.expr.pseudos.animated = function (e) {
            return S.grep(S.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (S.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                l = S.css(e, "position"),
                c = S(e),
                d = {};
              "static" === l && (e.style.position = "relative"),
                (a = c.offset()),
                (o = S.css(e, "top")),
                (u = S.css(e, "left")),
                ("absolute" === l || "fixed" === l) &&
                (o + u).indexOf("auto") > -1
                  ? ((s = (r = c.position()).top), (i = r.left))
                  : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                g(t) && (t = t.call(e, n, S.extend({}, a))),
                null != t.top && (d.top = t.top - a.top + s),
                null != t.left && (d.left = t.left - a.left + i),
                "using" in t ? t.using.call(e, d) : c.css(d);
            },
          }),
          S.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      S.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === S.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = S(e).offset()).top += S.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (i.left += S.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - S.css(r, "marginTop", !0),
                  left: t.left - i.left - S.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === S.css(e, "position");

                )
                  e = e.offsetParent;
                return e || se;
              });
            },
          }),
          S.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              S.fn[e] = function (r) {
                return U(
                  this,
                  function (e, r, i) {
                    var o;
                    if (
                      (v(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                      void 0 === i)
                    )
                      return o ? o[t] : e[r];
                    o
                      ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                      : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }
          ),
          S.each(["top", "left"], function (e, t) {
            S.cssHooks[t] = Ge(y.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = Ze(e, t)), Fe.test(n) ? S(e).position()[t] + "px" : n
                );
            });
          }),
          S.each({ Height: "height", Width: "width" }, function (e, t) {
            S.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, r) {
                S.fn[r] = function (i, o) {
                  var s = arguments.length && (n || "boolean" !== typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                  return U(
                    this,
                    function (t, n, i) {
                      var o;
                      return v(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            o["scroll" + e],
                            t.body["offset" + e],
                            o["offset" + e],
                            o["client" + e]
                          ))
                        : void 0 === i
                        ? S.css(t, n, a)
                        : S.style(t, n, i, a);
                    },
                    t,
                    s ? i : void 0,
                    s
                  );
                };
              }
            );
          }),
          S.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              S.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          S.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              S.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var Xt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (S.proxy = function (e, t) {
          var n, r, i;
          if (("string" === typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
            return (
              (r = a.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(a.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || S.guid++),
              i
            );
        }),
          (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
          }),
          (S.isArray = Array.isArray),
          (S.parseJSON = JSON.parse),
          (S.nodeName = C),
          (S.isFunction = g),
          (S.isWindow = v),
          (S.camelCase = B),
          (S.type = x),
          (S.now = Date.now),
          (S.isNumeric = function (e) {
            var t = S.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Xt, "$1");
          }),
          void 0 ===
            (n = function () {
              return S;
            }.apply(t, [])) || (e.exports = n);
        var Qt = r.jQuery,
          Kt = r.$;
        return (
          (S.noConflict = function (e) {
            return (
              r.$ === S && (r.$ = Kt), e && r.jQuery === S && (r.jQuery = Qt), S
            );
          }),
          "undefined" === typeof i && (r.jQuery = r.$ = S),
          S
        );
      });
    },
    8: (e, t, n) => {
      (e.exports = n(5177)).tz.load(n(8658));
    },
    5177: function (e, t, n) {
      var r, i, o;
      !(function (s, a) {
        "use strict";
        e.exports
          ? (e.exports = a(n(381)))
          : ((i = [n(381)]),
            void 0 ===
              (o = "function" === typeof (r = a) ? r.apply(t, i) : r) ||
              (e.exports = o));
      })(0, function (e) {
        "use strict";
        void 0 === e.version && e.default && (e = e.default);
        var t,
          n = {},
          r = {},
          i = {},
          o = {},
          s = {};
        (e && "string" === typeof e.version) ||
          E(
            "Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/"
          );
        var a = e.version.split("."),
          u = +a[0],
          l = +a[1];
        function c(e) {
          return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48;
        }
        function d(e) {
          var t = 0,
            n = e.split("."),
            r = n[0],
            i = n[1] || "",
            o = 1,
            s = 0,
            a = 1;
          for (45 === e.charCodeAt(0) && ((t = 1), (a = -1)); t < r.length; t++)
            s = 60 * s + c(r.charCodeAt(t));
          for (t = 0; t < i.length; t++)
            (o /= 60), (s += c(i.charCodeAt(t)) * o);
          return s * a;
        }
        function f(e) {
          for (var t = 0; t < e.length; t++) e[t] = d(e[t]);
        }
        function h(e, t) {
          var n,
            r = [];
          for (n = 0; n < t.length; n++) r[n] = e[t[n]];
          return r;
        }
        function m(e) {
          var t = e.split("|"),
            n = t[2].split(" "),
            r = t[3].split(""),
            i = t[4].split(" ");
          return (
            f(n),
            f(r),
            f(i),
            (function (e, t) {
              for (var n = 0; n < t; n++)
                e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
              e[t - 1] = 1 / 0;
            })(i, r.length),
            {
              name: t[0],
              abbrs: h(t[1].split(" "), r),
              offsets: h(n, r),
              untils: i,
              population: 0 | t[5],
            }
          );
        }
        function p(e) {
          e && this._set(m(e));
        }
        function y(e, t) {
          (this.name = e), (this.zones = t);
        }
        function g(e) {
          var t = e.toTimeString(),
            n = t.match(/\([a-z ]+\)/i);
          "GMT" ===
            (n =
              n && n[0]
                ? (n = n[0].match(/[A-Z]/g))
                  ? n.join("")
                  : void 0
                : (n = t.match(/[A-Z]{3,5}/g))
                ? n[0]
                : void 0) && (n = void 0),
            (this.at = +e),
            (this.abbr = n),
            (this.offset = e.getTimezoneOffset());
        }
        function v(e) {
          (this.zone = e), (this.offsetScore = 0), (this.abbrScore = 0);
        }
        function b(e, t) {
          for (var n, r; (r = 6e4 * (((t.at - e.at) / 12e4) | 0)); )
            (n = new g(new Date(e.at + r))).offset === e.offset
              ? (e = n)
              : (t = n);
          return e;
        }
        function w(e, t) {
          return e.offsetScore !== t.offsetScore
            ? e.offsetScore - t.offsetScore
            : e.abbrScore !== t.abbrScore
            ? e.abbrScore - t.abbrScore
            : e.zone.population !== t.zone.population
            ? t.zone.population - e.zone.population
            : t.zone.name.localeCompare(e.zone.name);
        }
        function _(e, t) {
          var n, r;
          for (f(t), n = 0; n < t.length; n++)
            (r = t[n]), (s[r] = s[r] || {}), (s[r][e] = !0);
        }
        function x(e) {
          var t,
            n,
            r,
            i = e.length,
            a = {},
            u = [];
          for (t = 0; t < i; t++)
            for (n in (r = s[e[t].offset] || {}))
              r.hasOwnProperty(n) && (a[n] = !0);
          for (t in a) a.hasOwnProperty(t) && u.push(o[t]);
          return u;
        }
        function k() {
          try {
            var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (e && e.length > 3) {
              var t = o[S(e)];
              if (t) return t;
              E(
                "Moment Timezone found " +
                  e +
                  " from the Intl api, but did not have that data loaded."
              );
            }
          } catch (c) {}
          var n,
            r,
            i,
            s = (function () {
              var e,
                t,
                n,
                r = new Date().getFullYear() - 2,
                i = new g(new Date(r, 0, 1)),
                o = [i];
              for (n = 1; n < 48; n++)
                (t = new g(new Date(r, n, 1))).offset !== i.offset &&
                  ((e = b(i, t)),
                  o.push(e),
                  o.push(new g(new Date(e.at + 6e4)))),
                  (i = t);
              for (n = 0; n < 4; n++)
                o.push(new g(new Date(r + n, 0, 1))),
                  o.push(new g(new Date(r + n, 6, 1)));
              return o;
            })(),
            a = s.length,
            u = x(s),
            l = [];
          for (r = 0; r < u.length; r++) {
            for (n = new v(T(u[r]), a), i = 0; i < a; i++)
              n.scoreOffsetAt(s[i]);
            l.push(n);
          }
          return l.sort(w), l.length > 0 ? l[0].zone.name : void 0;
        }
        function S(e) {
          return (e || "").toLowerCase().replace(/\//g, "_");
        }
        function M(e) {
          var t, r, i, s;
          for ("string" === typeof e && (e = [e]), t = 0; t < e.length; t++)
            (s = S((r = (i = e[t].split("|"))[0]))),
              (n[s] = e[t]),
              (o[s] = r),
              _(s, i[2].split(" "));
        }
        function T(e, t) {
          e = S(e);
          var i,
            s = n[e];
          return s instanceof p
            ? s
            : "string" === typeof s
            ? ((s = new p(s)), (n[e] = s), s)
            : r[e] && t !== T && (i = T(r[e], T))
            ? ((s = n[e] = new p())._set(i), (s.name = o[e]), s)
            : null;
        }
        function D(e) {
          var t, n, i, s;
          for ("string" === typeof e && (e = [e]), t = 0; t < e.length; t++)
            (i = S((n = e[t].split("|"))[0])),
              (s = S(n[1])),
              (r[i] = s),
              (o[i] = n[0]),
              (r[s] = i),
              (o[s] = n[1]);
        }
        function O(e) {
          var t = "X" === e._f || "x" === e._f;
          return !(!e._a || void 0 !== e._tzm || t);
        }
        function E(e) {
          "undefined" !== typeof console &&
            "function" === typeof console.error &&
            console.error(e);
        }
        function C(t) {
          var n = Array.prototype.slice.call(arguments, 0, -1),
            r = arguments[arguments.length - 1],
            i = T(r),
            o = e.utc.apply(null, n);
          return (
            i && !e.isMoment(t) && O(o) && o.add(i.parse(o), "minutes"),
            o.tz(r),
            o
          );
        }
        (u < 2 || (2 === u && l < 6)) &&
          E(
            "Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " +
              e.version +
              ". See momentjs.com"
          ),
          (p.prototype = {
            _set: function (e) {
              (this.name = e.name),
                (this.abbrs = e.abbrs),
                (this.untils = e.untils),
                (this.offsets = e.offsets),
                (this.population = e.population);
            },
            _index: function (e) {
              var t,
                n = +e,
                r = this.untils;
              for (t = 0; t < r.length; t++) if (n < r[t]) return t;
            },
            countries: function () {
              var e = this.name;
              return Object.keys(i).filter(function (t) {
                return -1 !== i[t].zones.indexOf(e);
              });
            },
            parse: function (e) {
              var t,
                n,
                r,
                i,
                o = +e,
                s = this.offsets,
                a = this.untils,
                u = a.length - 1;
              for (i = 0; i < u; i++)
                if (
                  ((t = s[i]),
                  (n = s[i + 1]),
                  (r = s[i ? i - 1 : i]),
                  t < n && C.moveAmbiguousForward
                    ? (t = n)
                    : t > r && C.moveInvalidForward && (t = r),
                  o < a[i] - 6e4 * t)
                )
                  return s[i];
              return s[u];
            },
            abbr: function (e) {
              return this.abbrs[this._index(e)];
            },
            offset: function (e) {
              return (
                E("zone.offset has been deprecated in favor of zone.utcOffset"),
                this.offsets[this._index(e)]
              );
            },
            utcOffset: function (e) {
              return this.offsets[this._index(e)];
            },
          }),
          (v.prototype.scoreOffsetAt = function (e) {
            (this.offsetScore += Math.abs(
              this.zone.utcOffset(e.at) - e.offset
            )),
              this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr &&
                this.abbrScore++;
          }),
          (C.version = "0.5.41"),
          (C.dataVersion = ""),
          (C._zones = n),
          (C._links = r),
          (C._names = o),
          (C._countries = i),
          (C.add = M),
          (C.link = D),
          (C.load = function (e) {
            M(e.zones),
              D(e.links),
              (function (e) {
                var t, n, r, o;
                if (e && e.length)
                  for (t = 0; t < e.length; t++)
                    (n = (o = e[t].split("|"))[0].toUpperCase()),
                      (r = o[1].split(" ")),
                      (i[n] = new y(n, r));
              })(e.countries),
              (C.dataVersion = e.version);
          }),
          (C.zone = T),
          (C.zoneExists = function e(t) {
            return (
              e.didShowError ||
                ((e.didShowError = !0),
                E(
                  "moment.tz.zoneExists('" +
                    t +
                    "') has been deprecated in favor of !moment.tz.zone('" +
                    t +
                    "')"
                )),
              !!T(t)
            );
          }),
          (C.guess = function (e) {
            return (t && !e) || (t = k()), t;
          }),
          (C.names = function () {
            var e,
              t = [];
            for (e in o)
              o.hasOwnProperty(e) && (n[e] || n[r[e]]) && o[e] && t.push(o[e]);
            return t.sort();
          }),
          (C.Zone = p),
          (C.unpack = m),
          (C.unpackBase60 = d),
          (C.needsOffset = O),
          (C.moveInvalidForward = !0),
          (C.moveAmbiguousForward = !1),
          (C.countries = function () {
            return Object.keys(i);
          }),
          (C.zonesForCountry = function (e, t) {
            var n;
            if (((n = (n = e).toUpperCase()), !(e = i[n] || null))) return null;
            var r = e.zones.sort();
            return t
              ? r.map(function (e) {
                  return { name: e, offset: T(e).utcOffset(new Date()) };
                })
              : r;
          });
        var N,
          L = e.fn;
        function j(e) {
          return function () {
            return this._z ? this._z.abbr(this) : e.call(this);
          };
        }
        function A(e) {
          return function () {
            return (this._z = null), e.apply(this, arguments);
          };
        }
        (e.tz = C),
          (e.defaultZone = null),
          (e.updateOffset = function (t, n) {
            var r,
              i = e.defaultZone;
            if (
              (void 0 === t._z &&
                (i &&
                  O(t) &&
                  !t._isUTC &&
                  ((t._d = e.utc(t._a)._d), t.utc().add(i.parse(t), "minutes")),
                (t._z = i)),
              t._z)
            )
              if (
                ((r = t._z.utcOffset(t)),
                Math.abs(r) < 16 && (r /= 60),
                void 0 !== t.utcOffset)
              ) {
                var o = t._z;
                t.utcOffset(-r, n), (t._z = o);
              } else t.zone(r, n);
          }),
          (L.tz = function (t, n) {
            if (t) {
              if ("string" !== typeof t)
                throw new Error(
                  "Time zone name must be a string, got " +
                    t +
                    " [" +
                    typeof t +
                    "]"
                );
              return (
                (this._z = T(t)),
                this._z
                  ? e.updateOffset(this, n)
                  : E(
                      "Moment Timezone has no data for " +
                        t +
                        ". See http://momentjs.com/timezone/docs/#/data-loading/."
                    ),
                this
              );
            }
            if (this._z) return this._z.name;
          }),
          (L.zoneName = j(L.zoneName)),
          (L.zoneAbbr = j(L.zoneAbbr)),
          (L.utc = A(L.utc)),
          (L.local = A(L.local)),
          (L.utcOffset =
            ((N = L.utcOffset),
            function () {
              return (
                arguments.length > 0 && (this._z = null),
                N.apply(this, arguments)
              );
            })),
          (e.tz.setDefault = function (t) {
            return (
              (u < 2 || (2 === u && l < 9)) &&
                E(
                  "Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " +
                    e.version +
                    "."
                ),
              (e.defaultZone = t ? T(t) : null),
              e
            );
          });
        var Y = e.momentProperties;
        return (
          "[object Array]" === Object.prototype.toString.call(Y)
            ? (Y.push("_z"), Y.push("_a"))
            : Y && (Y._z = null),
          e
        );
      });
    },
    4780: function (e, t, n) {
      !(function (e) {
        "use strict";
        e.defineLocale("da", {
          months:
            "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays:
            "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split(
              "_"
            ),
          weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
          weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "p\xe5 dddd [kl.] LT",
            lastDay: "[i g\xe5r kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "f\xe5 sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en m\xe5ned",
            MM: "%d m\xe5neder",
            y: "et \xe5r",
            yy: "%d \xe5r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(n(381));
    },
    9740: function (e, t, n) {
      !(function (e) {
        "use strict";
        function t(e, t, n, r) {
          var i = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"],
          };
          return t ? i[n][0] : i[n][1];
        }
        e.defineLocale("de", {
          months:
            "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_"
            ),
          monthsShort:
            "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_"
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: t,
            mm: "%d Minuten",
            h: t,
            hh: "%d Stunden",
            d: t,
            dd: t,
            w: t,
            ww: "%d Wochen",
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(n(381));
    },
    5655: function (e, t, n) {
      !(function (e) {
        "use strict";
        var t =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          r = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          i =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (e, r) {
            return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
          },
          monthsRegex: i,
          monthsShortRegex: i,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split(
              "_"
            ),
          weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return (
                "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              );
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
          invalidDate: "Fecha inv\xe1lida",
        });
      })(n(381));
    },
    1897: function (e, t, n) {
      !(function (e) {
        "use strict";
        var t =
            "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(
              " "
            ),
          n = [
            "nolla",
            "yhden",
            "kahden",
            "kolmen",
            "nelj\xe4n",
            "viiden",
            "kuuden",
            t[7],
            t[8],
            t[9],
          ];
        function r(e, t, n, r) {
          var o = "";
          switch (n) {
            case "s":
              return r ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
              o = r ? "sekunnin" : "sekuntia";
              break;
            case "m":
              return r ? "minuutin" : "minuutti";
            case "mm":
              o = r ? "minuutin" : "minuuttia";
              break;
            case "h":
              return r ? "tunnin" : "tunti";
            case "hh":
              o = r ? "tunnin" : "tuntia";
              break;
            case "d":
              return r ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
            case "dd":
              o = r ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
              break;
            case "M":
              return r ? "kuukauden" : "kuukausi";
            case "MM":
              o = r ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return r ? "vuoden" : "vuosi";
            case "yy":
              o = r ? "vuoden" : "vuotta";
          }
          return (o = i(e, r) + " " + o);
        }
        function i(e, r) {
          return e < 10 ? (r ? n[e] : t[e]) : e;
        }
        e.defineLocale("fi", {
          months:
            "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
              "_"
            ),
          monthsShort:
            "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split(
              "_"
            ),
          weekdays:
            "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
              "_"
            ),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm",
          },
          calendar: {
            sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s p\xe4\xe4st\xe4",
            past: "%s sitten",
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(n(381));
    },
    4470: function (e, t, n) {
      !(function (e) {
        "use strict";
        var t =
            /^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,
          n =
            /(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?)/i,
          r =
            /(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?|janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,
          i = [
            /^janv/i,
            /^f\xe9vr/i,
            /^mars/i,
            /^avr/i,
            /^mai/i,
            /^juin/i,
            /^juil/i,
            /^ao\xfbt/i,
            /^sept/i,
            /^oct/i,
            /^nov/i,
            /^d\xe9c/i,
          ];
        e.defineLocale("fr", {
          months:
            "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split(
              "_"
            ),
          monthsShort:
            "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split(
              "_"
            ),
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex: t,
          monthsShortStrictRegex: n,
          monthsParse: i,
          longMonthsParse: i,
          shortMonthsParse: i,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd\u2019hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            w: "une semaine",
            ww: "%d semaines",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function (e, t) {
            switch (t) {
              case "D":
                return e + (1 === e ? "er" : "");
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(381));
    },
    4924: function (e, t, n) {
      !(function (e) {
        "use strict";
        e.defineLocale("nb", {
          months:
            "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
              "_"
            ),
          monthsShort:
            "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split(
              "_"
            ),
          weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
          weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i g\xe5r kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            w: "en uke",
            ww: "%d uker",
            M: "en m\xe5ned",
            MM: "%d m\xe5neder",
            y: "ett \xe5r",
            yy: "%d \xe5r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(n(381));
    },
    8760: function (e, t, n) {
      !(function (e) {
        "use strict";
        e.defineLocale("sv", {
          months:
            "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays:
            "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split(
              "_"
            ),
          weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
          weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Ig\xe5r] LT",
            nextWeek: "[P\xe5] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "f\xf6r %s sedan",
            s: "n\xe5gra sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en m\xe5nad",
            MM: "%d m\xe5nader",
            y: "ett \xe5r",
            yy: "%d \xe5r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
          ordinal: function (e) {
            var t = e % 10;
            return (
              e +
              (1 === ~~((e % 100) / 10)
                ? ":e"
                : 1 === t || 2 === t
                ? ":a"
                : ":e")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(n(381));
    },
    381: function (e, t, n) {
      (e = n.nmd(e)).exports = (function () {
        "use strict";
        var t, r;
        function i() {
          return t.apply(null, arguments);
        }
        function o(e) {
          t = e;
        }
        function s(e) {
          return (
            e instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(e)
          );
        }
        function a(e) {
          return (
            null != e && "[object Object]" === Object.prototype.toString.call(e)
          );
        }
        function u(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function l(e) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e) if (u(e, t)) return !1;
          return !0;
        }
        function c(e) {
          return void 0 === e;
        }
        function d(e) {
          return (
            "number" === typeof e ||
            "[object Number]" === Object.prototype.toString.call(e)
          );
        }
        function f(e) {
          return (
            e instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(e)
          );
        }
        function h(e, t) {
          var n,
            r = [],
            i = e.length;
          for (n = 0; n < i; ++n) r.push(t(e[n], n));
          return r;
        }
        function m(e, t) {
          for (var n in t) u(t, n) && (e[n] = t[n]);
          return (
            u(t, "toString") && (e.toString = t.toString),
            u(t, "valueOf") && (e.valueOf = t.valueOf),
            e
          );
        }
        function p(e, t, n, r) {
          return Bn(e, t, n, r, !0).utc();
        }
        function y() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          };
        }
        function g(e) {
          return null == e._pf && (e._pf = y()), e._pf;
        }
        function v(e) {
          if (null == e._isValid) {
            var t = g(e),
              n = r.call(t.parsedDateParts, function (e) {
                return null != e;
              }),
              i =
                !isNaN(e._d.getTime()) &&
                t.overflow < 0 &&
                !t.empty &&
                !t.invalidEra &&
                !t.invalidMonth &&
                !t.invalidWeekday &&
                !t.weekdayMismatch &&
                !t.nullInput &&
                !t.invalidFormat &&
                !t.userInvalidated &&
                (!t.meridiem || (t.meridiem && n));
            if (
              (e._strict &&
                (i =
                  i &&
                  0 === t.charsLeftOver &&
                  0 === t.unusedTokens.length &&
                  void 0 === t.bigHour),
              null != Object.isFrozen && Object.isFrozen(e))
            )
              return i;
            e._isValid = i;
          }
          return e._isValid;
        }
        function b(e) {
          var t = p(NaN);
          return null != e ? m(g(t), e) : (g(t).userInvalidated = !0), t;
        }
        r = Array.prototype.some
          ? Array.prototype.some
          : function (e) {
              var t,
                n = Object(this),
                r = n.length >>> 0;
              for (t = 0; t < r; t++)
                if (t in n && e.call(this, n[t], t, n)) return !0;
              return !1;
            };
        var w = (i.momentProperties = []),
          _ = !1;
        function x(e, t) {
          var n,
            r,
            i,
            o = w.length;
          if (
            (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
            c(t._i) || (e._i = t._i),
            c(t._f) || (e._f = t._f),
            c(t._l) || (e._l = t._l),
            c(t._strict) || (e._strict = t._strict),
            c(t._tzm) || (e._tzm = t._tzm),
            c(t._isUTC) || (e._isUTC = t._isUTC),
            c(t._offset) || (e._offset = t._offset),
            c(t._pf) || (e._pf = g(t)),
            c(t._locale) || (e._locale = t._locale),
            o > 0)
          )
            for (n = 0; n < o; n++) c((i = t[(r = w[n])])) || (e[r] = i);
          return e;
        }
        function k(e) {
          x(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === _ && ((_ = !0), i.updateOffset(this), (_ = !1));
        }
        function S(e) {
          return e instanceof k || (null != e && null != e._isAMomentObject);
        }
        function M(e) {
          !1 === i.suppressDeprecationWarnings &&
            "undefined" !== typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + e);
        }
        function T(e, t) {
          var n = !0;
          return m(function () {
            if (
              (null != i.deprecationHandler && i.deprecationHandler(null, e), n)
            ) {
              var r,
                o,
                s,
                a = [],
                l = arguments.length;
              for (o = 0; o < l; o++) {
                if (((r = ""), "object" === typeof arguments[o])) {
                  for (s in ((r += "\n[" + o + "] "), arguments[0]))
                    u(arguments[0], s) &&
                      (r += s + ": " + arguments[0][s] + ", ");
                  r = r.slice(0, -2);
                } else r = arguments[o];
                a.push(r);
              }
              M(
                e +
                  "\nArguments: " +
                  Array.prototype.slice.call(a).join("") +
                  "\n" +
                  new Error().stack
              ),
                (n = !1);
            }
            return t.apply(this, arguments);
          }, t);
        }
        var D,
          O = {};
        function E(e, t) {
          null != i.deprecationHandler && i.deprecationHandler(e, t),
            O[e] || (M(t), (O[e] = !0));
        }
        function C(e) {
          return (
            ("undefined" !== typeof Function && e instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(e)
          );
        }
        function N(e) {
          var t, n;
          for (n in e)
            u(e, n) && (C((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
          (this._config = e),
            (this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source ||
                this._ordinalParse.source) +
                "|" +
                /\d{1,2}/.source
            ));
        }
        function L(e, t) {
          var n,
            r = m({}, e);
          for (n in t)
            u(t, n) &&
              (a(e[n]) && a(t[n])
                ? ((r[n] = {}), m(r[n], e[n]), m(r[n], t[n]))
                : null != t[n]
                ? (r[n] = t[n])
                : delete r[n]);
          for (n in e) u(e, n) && !u(t, n) && a(e[n]) && (r[n] = m({}, r[n]));
          return r;
        }
        function j(e) {
          null != e && this.set(e);
        }
        (i.suppressDeprecationWarnings = !1),
          (i.deprecationHandler = null),
          (D = Object.keys
            ? Object.keys
            : function (e) {
                var t,
                  n = [];
                for (t in e) u(e, t) && n.push(t);
                return n;
              });
        var A = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        };
        function Y(e, t, n) {
          var r = this._calendar[e] || this._calendar.sameElse;
          return C(r) ? r.call(t, n) : r;
        }
        function H(e, t, n) {
          var r = "" + Math.abs(e),
            i = t - r.length;
          return (
            (e >= 0 ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, i)).toString().substr(1) +
            r
          );
        }
        var P =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          R = {},
          F = {};
        function W(e, t, n, r) {
          var i = r;
          "string" === typeof r &&
            (i = function () {
              return this[r]();
            }),
            e && (F[e] = i),
            t &&
              (F[t[0]] = function () {
                return H(i.apply(this, arguments), t[1], t[2]);
              }),
            n &&
              (F[n] = function () {
                return this.localeData().ordinal(i.apply(this, arguments), e);
              });
        }
        function q(e) {
          return e.match(/\[[\s\S]/)
            ? e.replace(/^\[|\]$/g, "")
            : e.replace(/\\/g, "");
        }
        function V(e) {
          var t,
            n,
            r = e.match(P);
          for (t = 0, n = r.length; t < n; t++)
            F[r[t]] ? (r[t] = F[r[t]]) : (r[t] = q(r[t]));
          return function (t) {
            var i,
              o = "";
            for (i = 0; i < n; i++) o += C(r[i]) ? r[i].call(t, e) : r[i];
            return o;
          };
        }
        function z(e, t) {
          return e.isValid()
            ? ((t = U(t, e.localeData())), (R[t] = R[t] || V(t)), R[t](e))
            : e.localeData().invalidDate();
        }
        function U(e, t) {
          var n = 5;
          function r(e) {
            return t.longDateFormat(e) || e;
          }
          for (I.lastIndex = 0; n >= 0 && I.test(e); )
            (e = e.replace(I, r)), (I.lastIndex = 0), (n -= 1);
          return e;
        }
        var $ = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        function Z(e) {
          var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
          return t || !n
            ? t
            : ((this._longDateFormat[e] = n
                .match(P)
                .map(function (e) {
                  return "MMMM" === e ||
                    "MM" === e ||
                    "DD" === e ||
                    "dddd" === e
                    ? e.slice(1)
                    : e;
                })
                .join("")),
              this._longDateFormat[e]);
        }
        var G = "Invalid date";
        function B() {
          return this._invalidDate;
        }
        var J = "%d",
          X = /\d{1,2}/;
        function Q(e) {
          return this._ordinal.replace("%d", e);
        }
        var K = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        };
        function ee(e, t, n, r) {
          var i = this._relativeTime[n];
          return C(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
        }
        function te(e, t) {
          var n = this._relativeTime[e > 0 ? "future" : "past"];
          return C(n) ? n(t) : n.replace(/%s/i, t);
        }
        var ne = {};
        function re(e, t) {
          var n = e.toLowerCase();
          ne[n] = ne[n + "s"] = ne[t] = e;
        }
        function ie(e) {
          return "string" === typeof e ? ne[e] || ne[e.toLowerCase()] : void 0;
        }
        function oe(e) {
          var t,
            n,
            r = {};
          for (n in e) u(e, n) && (t = ie(n)) && (r[t] = e[n]);
          return r;
        }
        var se = {};
        function ae(e, t) {
          se[e] = t;
        }
        function ue(e) {
          var t,
            n = [];
          for (t in e) u(e, t) && n.push({ unit: t, priority: se[t] });
          return (
            n.sort(function (e, t) {
              return e.priority - t.priority;
            }),
            n
          );
        }
        function le(e) {
          return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
        }
        function ce(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }
        function de(e) {
          var t = +e,
            n = 0;
          return 0 !== t && isFinite(t) && (n = ce(t)), n;
        }
        function fe(e, t) {
          return function (n) {
            return null != n
              ? (me(this, e, n), i.updateOffset(this, t), this)
              : he(this, e);
          };
        }
        function he(e, t) {
          return e.isValid()
            ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            : NaN;
        }
        function me(e, t, n) {
          e.isValid() &&
            !isNaN(n) &&
            ("FullYear" === t &&
            le(e.year()) &&
            1 === e.month() &&
            29 === e.date()
              ? ((n = de(n)),
                e._d["set" + (e._isUTC ? "UTC" : "") + t](
                  n,
                  e.month(),
                  et(n, e.month())
                ))
              : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
        }
        function pe(e) {
          return C(this[(e = ie(e))]) ? this[e]() : this;
        }
        function ye(e, t) {
          if ("object" === typeof e) {
            var n,
              r = ue((e = oe(e))),
              i = r.length;
            for (n = 0; n < i; n++) this[r[n].unit](e[r[n].unit]);
          } else if (C(this[(e = ie(e))])) return this[e](t);
          return this;
        }
        var ge,
          ve = /\d/,
          be = /\d\d/,
          we = /\d{3}/,
          _e = /\d{4}/,
          xe = /[+-]?\d{6}/,
          ke = /\d\d?/,
          Se = /\d\d\d\d?/,
          Me = /\d\d\d\d\d\d?/,
          Te = /\d{1,3}/,
          De = /\d{1,4}/,
          Oe = /[+-]?\d{1,6}/,
          Ee = /\d+/,
          Ce = /[+-]?\d+/,
          Ne = /Z|[+-]\d\d:?\d\d/gi,
          Le = /Z|[+-]\d\d(?::?\d\d)?/gi,
          je = /[+-]?\d+(\.\d{1,3})?/,
          Ae =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        function Ye(e, t, n) {
          ge[e] = C(t)
            ? t
            : function (e, r) {
                return e && n ? n : t;
              };
        }
        function He(e, t) {
          return u(ge, e) ? ge[e](t._strict, t._locale) : new RegExp(Pe(e));
        }
        function Pe(e) {
          return Ie(
            e
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (e, t, n, r, i) {
                  return t || n || r || i;
                }
              )
          );
        }
        function Ie(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        ge = {};
        var Re = {};
        function Fe(e, t) {
          var n,
            r,
            i = t;
          for (
            "string" === typeof e && (e = [e]),
              d(t) &&
                (i = function (e, n) {
                  n[t] = de(e);
                }),
              r = e.length,
              n = 0;
            n < r;
            n++
          )
            Re[e[n]] = i;
        }
        function We(e, t) {
          Fe(e, function (e, n, r, i) {
            (r._w = r._w || {}), t(e, r._w, r, i);
          });
        }
        function qe(e, t, n) {
          null != t && u(Re, e) && Re[e](t, n._a, n, e);
        }
        var Ve,
          ze = 0,
          Ue = 1,
          $e = 2,
          Ze = 3,
          Ge = 4,
          Be = 5,
          Je = 6,
          Xe = 7,
          Qe = 8;
        function Ke(e, t) {
          return ((e % t) + t) % t;
        }
        function et(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;
          var n = Ke(t, 12);
          return (
            (e += (t - n) / 12),
            1 === n ? (le(e) ? 29 : 28) : 31 - ((n % 7) % 2)
          );
        }
        (Ve = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (e) {
              var t;
              for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
              return -1;
            }),
          W("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          W("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
          }),
          W("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e);
          }),
          re("month", "M"),
          ae("month", 8),
          Ye("M", ke),
          Ye("MM", ke, be),
          Ye("MMM", function (e, t) {
            return t.monthsShortRegex(e);
          }),
          Ye("MMMM", function (e, t) {
            return t.monthsRegex(e);
          }),
          Fe(["M", "MM"], function (e, t) {
            t[Ue] = de(e) - 1;
          }),
          Fe(["MMM", "MMMM"], function (e, t, n, r) {
            var i = n._locale.monthsParse(e, r, n._strict);
            null != i ? (t[Ue] = i) : (g(n).invalidMonth = e);
          });
        var tt =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          rt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          it = Ae,
          ot = Ae;
        function st(e, t) {
          return e
            ? s(this._months)
              ? this._months[e.month()]
              : this._months[
                  (this._months.isFormat || rt).test(t)
                    ? "format"
                    : "standalone"
                ][e.month()]
            : s(this._months)
            ? this._months
            : this._months.standalone;
        }
        function at(e, t) {
          return e
            ? s(this._monthsShort)
              ? this._monthsShort[e.month()]
              : this._monthsShort[rt.test(t) ? "format" : "standalone"][
                  e.month()
                ]
            : s(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort.standalone;
        }
        function ut(e, t, n) {
          var r,
            i,
            o,
            s = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                r = 0;
              r < 12;
              ++r
            )
              (o = p([2e3, r])),
                (this._shortMonthsParse[r] = this.monthsShort(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[r] = this.months(
                  o,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "MMM" === t
              ? -1 !== (i = Ve.call(this._shortMonthsParse, s))
                ? i
                : null
              : -1 !== (i = Ve.call(this._longMonthsParse, s))
              ? i
              : null
            : "MMM" === t
            ? -1 !== (i = Ve.call(this._shortMonthsParse, s)) ||
              -1 !== (i = Ve.call(this._longMonthsParse, s))
              ? i
              : null
            : -1 !== (i = Ve.call(this._longMonthsParse, s)) ||
              -1 !== (i = Ve.call(this._shortMonthsParse, s))
            ? i
            : null;
        }
        function lt(e, t, n) {
          var r, i, o;
          if (this._monthsParseExact) return ut.call(this, e, t, n);
          for (
            this._monthsParse ||
              ((this._monthsParse = []),
              (this._longMonthsParse = []),
              (this._shortMonthsParse = [])),
              r = 0;
            r < 12;
            r++
          ) {
            if (
              ((i = p([2e3, r])),
              n &&
                !this._longMonthsParse[r] &&
                ((this._longMonthsParse[r] = new RegExp(
                  "^" + this.months(i, "").replace(".", "") + "$",
                  "i"
                )),
                (this._shortMonthsParse[r] = new RegExp(
                  "^" + this.monthsShort(i, "").replace(".", "") + "$",
                  "i"
                ))),
              n ||
                this._monthsParse[r] ||
                ((o =
                  "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
                (this._monthsParse[r] = new RegExp(o.replace(".", ""), "i"))),
              n && "MMMM" === t && this._longMonthsParse[r].test(e))
            )
              return r;
            if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
            if (!n && this._monthsParse[r].test(e)) return r;
          }
        }
        function ct(e, t) {
          var n;
          if (!e.isValid()) return e;
          if ("string" === typeof t)
            if (/^\d+$/.test(t)) t = de(t);
            else if (!d((t = e.localeData().monthsParse(t)))) return e;
          return (
            (n = Math.min(e.date(), et(e.year(), t))),
            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
            e
          );
        }
        function dt(e) {
          return null != e
            ? (ct(this, e), i.updateOffset(this, !0), this)
            : he(this, "Month");
        }
        function ft() {
          return et(this.year(), this.month());
        }
        function ht(e) {
          return this._monthsParseExact
            ? (u(this, "_monthsRegex") || pt.call(this),
              e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = it),
              this._monthsShortStrictRegex && e
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex);
        }
        function mt(e) {
          return this._monthsParseExact
            ? (u(this, "_monthsRegex") || pt.call(this),
              e ? this._monthsStrictRegex : this._monthsRegex)
            : (u(this, "_monthsRegex") || (this._monthsRegex = ot),
              this._monthsStrictRegex && e
                ? this._monthsStrictRegex
                : this._monthsRegex);
        }
        function pt() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            r = [],
            i = [],
            o = [];
          for (t = 0; t < 12; t++)
            (n = p([2e3, t])),
              r.push(this.monthsShort(n, "")),
              i.push(this.months(n, "")),
              o.push(this.months(n, "")),
              o.push(this.monthsShort(n, ""));
          for (r.sort(e), i.sort(e), o.sort(e), t = 0; t < 12; t++)
            (r[t] = Ie(r[t])), (i[t] = Ie(i[t]));
          for (t = 0; t < 24; t++) o[t] = Ie(o[t]);
          (this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + i.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + r.join("|") + ")",
              "i"
            ));
        }
        function yt(e) {
          return le(e) ? 366 : 365;
        }
        W("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? H(e, 4) : "+" + e;
        }),
          W(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          W(0, ["YYYY", 4], 0, "year"),
          W(0, ["YYYYY", 5], 0, "year"),
          W(0, ["YYYYYY", 6, !0], 0, "year"),
          re("year", "y"),
          ae("year", 1),
          Ye("Y", Ce),
          Ye("YY", ke, be),
          Ye("YYYY", De, _e),
          Ye("YYYYY", Oe, xe),
          Ye("YYYYYY", Oe, xe),
          Fe(["YYYYY", "YYYYYY"], ze),
          Fe("YYYY", function (e, t) {
            t[ze] = 2 === e.length ? i.parseTwoDigitYear(e) : de(e);
          }),
          Fe("YY", function (e, t) {
            t[ze] = i.parseTwoDigitYear(e);
          }),
          Fe("Y", function (e, t) {
            t[ze] = parseInt(e, 10);
          }),
          (i.parseTwoDigitYear = function (e) {
            return de(e) + (de(e) > 68 ? 1900 : 2e3);
          });
        var gt = fe("FullYear", !0);
        function vt() {
          return le(this.year());
        }
        function bt(e, t, n, r, i, o, s) {
          var a;
          return (
            e < 100 && e >= 0
              ? ((a = new Date(e + 400, t, n, r, i, o, s)),
                isFinite(a.getFullYear()) && a.setFullYear(e))
              : (a = new Date(e, t, n, r, i, o, s)),
            a
          );
        }
        function wt(e) {
          var t, n;
          return (
            e < 100 && e >= 0
              ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, n))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
              : (t = new Date(Date.UTC.apply(null, arguments))),
            t
          );
        }
        function _t(e, t, n) {
          var r = 7 + t - n;
          return (-(7 + wt(e, 0, r).getUTCDay() - t) % 7) + r - 1;
        }
        function xt(e, t, n, r, i) {
          var o,
            s,
            a = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + _t(e, r, i);
          return (
            a <= 0
              ? (s = yt((o = e - 1)) + a)
              : a > yt(e)
              ? ((o = e + 1), (s = a - yt(e)))
              : ((o = e), (s = a)),
            { year: o, dayOfYear: s }
          );
        }
        function kt(e, t, n) {
          var r,
            i,
            o = _t(e.year(), t, n),
            s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
          return (
            s < 1
              ? (r = s + St((i = e.year() - 1), t, n))
              : s > St(e.year(), t, n)
              ? ((r = s - St(e.year(), t, n)), (i = e.year() + 1))
              : ((i = e.year()), (r = s)),
            { week: r, year: i }
          );
        }
        function St(e, t, n) {
          var r = _t(e, t, n),
            i = _t(e + 1, t, n);
          return (yt(e) - r + i) / 7;
        }
        function Mt(e) {
          return kt(e, this._week.dow, this._week.doy).week;
        }
        W("w", ["ww", 2], "wo", "week"),
          W("W", ["WW", 2], "Wo", "isoWeek"),
          re("week", "w"),
          re("isoWeek", "W"),
          ae("week", 5),
          ae("isoWeek", 5),
          Ye("w", ke),
          Ye("ww", ke, be),
          Ye("W", ke),
          Ye("WW", ke, be),
          We(["w", "ww", "W", "WW"], function (e, t, n, r) {
            t[r.substr(0, 1)] = de(e);
          });
        var Tt = { dow: 0, doy: 6 };
        function Dt() {
          return this._week.dow;
        }
        function Ot() {
          return this._week.doy;
        }
        function Et(e) {
          var t = this.localeData().week(this);
          return null == e ? t : this.add(7 * (e - t), "d");
        }
        function Ct(e) {
          var t = kt(this, 1, 4).week;
          return null == e ? t : this.add(7 * (e - t), "d");
        }
        function Nt(e, t) {
          return "string" !== typeof e
            ? e
            : isNaN(e)
            ? "number" === typeof (e = t.weekdaysParse(e))
              ? e
              : null
            : parseInt(e, 10);
        }
        function Lt(e, t) {
          return "string" === typeof e
            ? t.weekdaysParse(e) % 7 || 7
            : isNaN(e)
            ? null
            : e;
        }
        function jt(e, t) {
          return e.slice(t, 7).concat(e.slice(0, t));
        }
        W("d", 0, "do", "day"),
          W("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          W("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          W("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
          }),
          W("e", 0, 0, "weekday"),
          W("E", 0, 0, "isoWeekday"),
          re("day", "d"),
          re("weekday", "e"),
          re("isoWeekday", "E"),
          ae("day", 11),
          ae("weekday", 11),
          ae("isoWeekday", 11),
          Ye("d", ke),
          Ye("e", ke),
          Ye("E", ke),
          Ye("dd", function (e, t) {
            return t.weekdaysMinRegex(e);
          }),
          Ye("ddd", function (e, t) {
            return t.weekdaysShortRegex(e);
          }),
          Ye("dddd", function (e, t) {
            return t.weekdaysRegex(e);
          }),
          We(["dd", "ddd", "dddd"], function (e, t, n, r) {
            var i = n._locale.weekdaysParse(e, r, n._strict);
            null != i ? (t.d = i) : (g(n).invalidWeekday = e);
          }),
          We(["d", "e", "E"], function (e, t, n, r) {
            t[r] = de(e);
          });
        var At =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          Yt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Ht = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Pt = Ae,
          It = Ae,
          Rt = Ae;
        function Ft(e, t) {
          var n = s(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                e && !0 !== e && this._weekdays.isFormat.test(t)
                  ? "format"
                  : "standalone"
              ];
          return !0 === e ? jt(n, this._week.dow) : e ? n[e.day()] : n;
        }
        function Wt(e) {
          return !0 === e
            ? jt(this._weekdaysShort, this._week.dow)
            : e
            ? this._weekdaysShort[e.day()]
            : this._weekdaysShort;
        }
        function qt(e) {
          return !0 === e
            ? jt(this._weekdaysMin, this._week.dow)
            : e
            ? this._weekdaysMin[e.day()]
            : this._weekdaysMin;
        }
        function Vt(e, t, n) {
          var r,
            i,
            o,
            s = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                r = 0;
              r < 7;
              ++r
            )
              (o = p([2e3, 1]).day(r)),
                (this._minWeekdaysParse[r] = this.weekdaysMin(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[r] = this.weekdaysShort(
                  o,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[r] = this.weekdays(
                  o,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "dddd" === t
              ? -1 !== (i = Ve.call(this._weekdaysParse, s))
                ? i
                : null
              : "ddd" === t
              ? -1 !== (i = Ve.call(this._shortWeekdaysParse, s))
                ? i
                : null
              : -1 !== (i = Ve.call(this._minWeekdaysParse, s))
              ? i
              : null
            : "dddd" === t
            ? -1 !== (i = Ve.call(this._weekdaysParse, s)) ||
              -1 !== (i = Ve.call(this._shortWeekdaysParse, s)) ||
              -1 !== (i = Ve.call(this._minWeekdaysParse, s))
              ? i
              : null
            : "ddd" === t
            ? -1 !== (i = Ve.call(this._shortWeekdaysParse, s)) ||
              -1 !== (i = Ve.call(this._weekdaysParse, s)) ||
              -1 !== (i = Ve.call(this._minWeekdaysParse, s))
              ? i
              : null
            : -1 !== (i = Ve.call(this._minWeekdaysParse, s)) ||
              -1 !== (i = Ve.call(this._weekdaysParse, s)) ||
              -1 !== (i = Ve.call(this._shortWeekdaysParse, s))
            ? i
            : null;
        }
        function zt(e, t, n) {
          var r, i, o;
          if (this._weekdaysParseExact) return Vt.call(this, e, t, n);
          for (
            this._weekdaysParse ||
              ((this._weekdaysParse = []),
              (this._minWeekdaysParse = []),
              (this._shortWeekdaysParse = []),
              (this._fullWeekdaysParse = [])),
              r = 0;
            r < 7;
            r++
          ) {
            if (
              ((i = p([2e3, 1]).day(r)),
              n &&
                !this._fullWeekdaysParse[r] &&
                ((this._fullWeekdaysParse[r] = new RegExp(
                  "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
                  "i"
                )),
                (this._shortWeekdaysParse[r] = new RegExp(
                  "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
                  "i"
                )),
                (this._minWeekdaysParse[r] = new RegExp(
                  "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
                  "i"
                ))),
              this._weekdaysParse[r] ||
                ((o =
                  "^" +
                  this.weekdays(i, "") +
                  "|^" +
                  this.weekdaysShort(i, "") +
                  "|^" +
                  this.weekdaysMin(i, "")),
                (this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i"))),
              n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
            )
              return r;
            if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
              return r;
            if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
            if (!n && this._weekdaysParse[r].test(e)) return r;
          }
        }
        function Ut(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e
            ? ((e = Nt(e, this.localeData())), this.add(e - t, "d"))
            : t;
        }
        function $t(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? t : this.add(e - t, "d");
        }
        function Zt(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            var t = Lt(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7);
          }
          return this.day() || 7;
        }
        function Gt(e) {
          return this._weekdaysParseExact
            ? (u(this, "_weekdaysRegex") || Xt.call(this),
              e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Pt),
              this._weekdaysStrictRegex && e
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex);
        }
        function Bt(e) {
          return this._weekdaysParseExact
            ? (u(this, "_weekdaysRegex") || Xt.call(this),
              e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (u(this, "_weekdaysShortRegex") ||
                (this._weekdaysShortRegex = It),
              this._weekdaysShortStrictRegex && e
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex);
        }
        function Jt(e) {
          return this._weekdaysParseExact
            ? (u(this, "_weekdaysRegex") || Xt.call(this),
              e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Rt),
              this._weekdaysMinStrictRegex && e
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex);
        }
        function Xt() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            r,
            i,
            o,
            s = [],
            a = [],
            u = [],
            l = [];
          for (t = 0; t < 7; t++)
            (n = p([2e3, 1]).day(t)),
              (r = Ie(this.weekdaysMin(n, ""))),
              (i = Ie(this.weekdaysShort(n, ""))),
              (o = Ie(this.weekdays(n, ""))),
              s.push(r),
              a.push(i),
              u.push(o),
              l.push(r),
              l.push(i),
              l.push(o);
          s.sort(e),
            a.sort(e),
            u.sort(e),
            l.sort(e),
            (this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + u.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + s.join("|") + ")",
              "i"
            ));
        }
        function Qt() {
          return this.hours() % 12 || 12;
        }
        function Kt() {
          return this.hours() || 24;
        }
        function en(e, t) {
          W(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
          });
        }
        function tn(e, t) {
          return t._meridiemParse;
        }
        function nn(e) {
          return "p" === (e + "").toLowerCase().charAt(0);
        }
        W("H", ["HH", 2], 0, "hour"),
          W("h", ["hh", 2], 0, Qt),
          W("k", ["kk", 2], 0, Kt),
          W("hmm", 0, 0, function () {
            return "" + Qt.apply(this) + H(this.minutes(), 2);
          }),
          W("hmmss", 0, 0, function () {
            return (
              "" + Qt.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
            );
          }),
          W("Hmm", 0, 0, function () {
            return "" + this.hours() + H(this.minutes(), 2);
          }),
          W("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
            );
          }),
          en("a", !0),
          en("A", !1),
          re("hour", "h"),
          ae("hour", 13),
          Ye("a", tn),
          Ye("A", tn),
          Ye("H", ke),
          Ye("h", ke),
          Ye("k", ke),
          Ye("HH", ke, be),
          Ye("hh", ke, be),
          Ye("kk", ke, be),
          Ye("hmm", Se),
          Ye("hmmss", Me),
          Ye("Hmm", Se),
          Ye("Hmmss", Me),
          Fe(["H", "HH"], Ze),
          Fe(["k", "kk"], function (e, t, n) {
            var r = de(e);
            t[Ze] = 24 === r ? 0 : r;
          }),
          Fe(["a", "A"], function (e, t, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
          }),
          Fe(["h", "hh"], function (e, t, n) {
            (t[Ze] = de(e)), (g(n).bigHour = !0);
          }),
          Fe("hmm", function (e, t, n) {
            var r = e.length - 2;
            (t[Ze] = de(e.substr(0, r))),
              (t[Ge] = de(e.substr(r))),
              (g(n).bigHour = !0);
          }),
          Fe("hmmss", function (e, t, n) {
            var r = e.length - 4,
              i = e.length - 2;
            (t[Ze] = de(e.substr(0, r))),
              (t[Ge] = de(e.substr(r, 2))),
              (t[Be] = de(e.substr(i))),
              (g(n).bigHour = !0);
          }),
          Fe("Hmm", function (e, t, n) {
            var r = e.length - 2;
            (t[Ze] = de(e.substr(0, r))), (t[Ge] = de(e.substr(r)));
          }),
          Fe("Hmmss", function (e, t, n) {
            var r = e.length - 4,
              i = e.length - 2;
            (t[Ze] = de(e.substr(0, r))),
              (t[Ge] = de(e.substr(r, 2))),
              (t[Be] = de(e.substr(i)));
          });
        var rn = /[ap]\.?m?\.?/i,
          on = fe("Hours", !0);
        function sn(e, t, n) {
          return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
        }
        var an,
          un = {
            calendar: A,
            longDateFormat: $,
            invalidDate: G,
            ordinal: J,
            dayOfMonthOrdinalParse: X,
            relativeTime: K,
            months: tt,
            monthsShort: nt,
            week: Tt,
            weekdays: At,
            weekdaysMin: Ht,
            weekdaysShort: Yt,
            meridiemParse: rn,
          },
          ln = {},
          cn = {};
        function dn(e, t) {
          var n,
            r = Math.min(e.length, t.length);
          for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
          return r;
        }
        function fn(e) {
          return e ? e.toLowerCase().replace("_", "-") : e;
        }
        function hn(e) {
          for (var t, n, r, i, o = 0; o < e.length; ) {
            for (
              t = (i = fn(e[o]).split("-")).length,
                n = (n = fn(e[o + 1])) ? n.split("-") : null;
              t > 0;

            ) {
              if ((r = pn(i.slice(0, t).join("-")))) return r;
              if (n && n.length >= t && dn(i, n) >= t - 1) break;
              t--;
            }
            o++;
          }
          return an;
        }
        function mn(e) {
          return null != e.match("^[^/\\\\]*$");
        }
        function pn(t) {
          var r = null;
          if (void 0 === ln[t] && e && e.exports && mn(t))
            try {
              (r = an._abbr), n(7649)("./" + t), yn(r);
            } catch (i) {
              ln[t] = null;
            }
          return ln[t];
        }
        function yn(e, t) {
          var n;
          return (
            e &&
              ((n = c(t) ? bn(e) : gn(e, t))
                ? (an = n)
                : "undefined" !== typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + e + " not found. Did you forget to load it?"
                  )),
            an._abbr
          );
        }
        function gn(e, t) {
          if (null !== t) {
            var n,
              r = un;
            if (((t.abbr = e), null != ln[e]))
              E(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (r = ln[e]._config);
            else if (null != t.parentLocale)
              if (null != ln[t.parentLocale]) r = ln[t.parentLocale]._config;
              else {
                if (null == (n = pn(t.parentLocale)))
                  return (
                    cn[t.parentLocale] || (cn[t.parentLocale] = []),
                    cn[t.parentLocale].push({ name: e, config: t }),
                    null
                  );
                r = n._config;
              }
            return (
              (ln[e] = new j(L(r, t))),
              cn[e] &&
                cn[e].forEach(function (e) {
                  gn(e.name, e.config);
                }),
              yn(e),
              ln[e]
            );
          }
          return delete ln[e], null;
        }
        function vn(e, t) {
          if (null != t) {
            var n,
              r,
              i = un;
            null != ln[e] && null != ln[e].parentLocale
              ? ln[e].set(L(ln[e]._config, t))
              : (null != (r = pn(e)) && (i = r._config),
                (t = L(i, t)),
                null == r && (t.abbr = e),
                ((n = new j(t)).parentLocale = ln[e]),
                (ln[e] = n)),
              yn(e);
          } else
            null != ln[e] &&
              (null != ln[e].parentLocale
                ? ((ln[e] = ln[e].parentLocale), e === yn() && yn(e))
                : null != ln[e] && delete ln[e]);
          return ln[e];
        }
        function bn(e) {
          var t;
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return an;
          if (!s(e)) {
            if ((t = pn(e))) return t;
            e = [e];
          }
          return hn(e);
        }
        function wn() {
          return D(ln);
        }
        function _n(e) {
          var t,
            n = e._a;
          return (
            n &&
              -2 === g(e).overflow &&
              ((t =
                n[Ue] < 0 || n[Ue] > 11
                  ? Ue
                  : n[$e] < 1 || n[$e] > et(n[ze], n[Ue])
                  ? $e
                  : n[Ze] < 0 ||
                    n[Ze] > 24 ||
                    (24 === n[Ze] &&
                      (0 !== n[Ge] || 0 !== n[Be] || 0 !== n[Je]))
                  ? Ze
                  : n[Ge] < 0 || n[Ge] > 59
                  ? Ge
                  : n[Be] < 0 || n[Be] > 59
                  ? Be
                  : n[Je] < 0 || n[Je] > 999
                  ? Je
                  : -1),
              g(e)._overflowDayOfYear && (t < ze || t > $e) && (t = $e),
              g(e)._overflowWeeks && -1 === t && (t = Xe),
              g(e)._overflowWeekday && -1 === t && (t = Qe),
              (g(e).overflow = t)),
            e
          );
        }
        var xn =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          kn =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Sn = /Z|[+-]\d\d(?::?\d\d)?/,
          Mn = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
          ],
          Tn = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          Dn = /^\/?Date\((-?\d+)/i,
          On =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          En = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        function Cn(e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = e._i,
            u = xn.exec(a) || kn.exec(a),
            l = Mn.length,
            c = Tn.length;
          if (u) {
            for (g(e).iso = !0, t = 0, n = l; t < n; t++)
              if (Mn[t][1].exec(u[1])) {
                (i = Mn[t][0]), (r = !1 !== Mn[t][2]);
                break;
              }
            if (null == i) return void (e._isValid = !1);
            if (u[3]) {
              for (t = 0, n = c; t < n; t++)
                if (Tn[t][1].exec(u[3])) {
                  o = (u[2] || " ") + Tn[t][0];
                  break;
                }
              if (null == o) return void (e._isValid = !1);
            }
            if (!r && null != o) return void (e._isValid = !1);
            if (u[4]) {
              if (!Sn.exec(u[4])) return void (e._isValid = !1);
              s = "Z";
            }
            (e._f = i + (o || "") + (s || "")), qn(e);
          } else e._isValid = !1;
        }
        function Nn(e, t, n, r, i, o) {
          var s = [
            Ln(e),
            nt.indexOf(t),
            parseInt(n, 10),
            parseInt(r, 10),
            parseInt(i, 10),
          ];
          return o && s.push(parseInt(o, 10)), s;
        }
        function Ln(e) {
          var t = parseInt(e, 10);
          return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
        }
        function jn(e) {
          return e
            .replace(/\([^()]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        }
        function An(e, t, n) {
          return (
            !e ||
            Yt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
            ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
          );
        }
        function Yn(e, t, n) {
          if (e) return En[e];
          if (t) return 0;
          var r = parseInt(n, 10),
            i = r % 100;
          return ((r - i) / 100) * 60 + i;
        }
        function Hn(e) {
          var t,
            n = On.exec(jn(e._i));
          if (n) {
            if (((t = Nn(n[4], n[3], n[2], n[5], n[6], n[7])), !An(n[1], t, e)))
              return;
            (e._a = t),
              (e._tzm = Yn(n[8], n[9], n[10])),
              (e._d = wt.apply(null, e._a)),
              e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              (g(e).rfc2822 = !0);
          } else e._isValid = !1;
        }
        function Pn(e) {
          var t = Dn.exec(e._i);
          null === t
            ? (Cn(e),
              !1 === e._isValid &&
                (delete e._isValid,
                Hn(e),
                !1 === e._isValid &&
                  (delete e._isValid,
                  e._strict
                    ? (e._isValid = !1)
                    : i.createFromInputFallback(e))))
            : (e._d = new Date(+t[1]));
        }
        function In(e, t, n) {
          return null != e ? e : null != t ? t : n;
        }
        function Rn(e) {
          var t = new Date(i.now());
          return e._useUTC
            ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
            : [t.getFullYear(), t.getMonth(), t.getDate()];
        }
        function Fn(e) {
          var t,
            n,
            r,
            i,
            o,
            s = [];
          if (!e._d) {
            for (
              r = Rn(e),
                e._w && null == e._a[$e] && null == e._a[Ue] && Wn(e),
                null != e._dayOfYear &&
                  ((o = In(e._a[ze], r[ze])),
                  (e._dayOfYear > yt(o) || 0 === e._dayOfYear) &&
                    (g(e)._overflowDayOfYear = !0),
                  (n = wt(o, 0, e._dayOfYear)),
                  (e._a[Ue] = n.getUTCMonth()),
                  (e._a[$e] = n.getUTCDate())),
                t = 0;
              t < 3 && null == e._a[t];
              ++t
            )
              e._a[t] = s[t] = r[t];
            for (; t < 7; t++)
              e._a[t] = s[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[Ze] &&
              0 === e._a[Ge] &&
              0 === e._a[Be] &&
              0 === e._a[Je] &&
              ((e._nextDay = !0), (e._a[Ze] = 0)),
              (e._d = (e._useUTC ? wt : bt).apply(null, s)),
              (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
              null != e._tzm &&
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[Ze] = 24),
              e._w &&
                "undefined" !== typeof e._w.d &&
                e._w.d !== i &&
                (g(e).weekdayMismatch = !0);
          }
        }
        function Wn(e) {
          var t, n, r, i, o, s, a, u, l;
          null != (t = e._w).GG || null != t.W || null != t.E
            ? ((o = 1),
              (s = 4),
              (n = In(t.GG, e._a[ze], kt(Jn(), 1, 4).year)),
              (r = In(t.W, 1)),
              ((i = In(t.E, 1)) < 1 || i > 7) && (u = !0))
            : ((o = e._locale._week.dow),
              (s = e._locale._week.doy),
              (l = kt(Jn(), o, s)),
              (n = In(t.gg, e._a[ze], l.year)),
              (r = In(t.w, l.week)),
              null != t.d
                ? ((i = t.d) < 0 || i > 6) && (u = !0)
                : null != t.e
                ? ((i = t.e + o), (t.e < 0 || t.e > 6) && (u = !0))
                : (i = o)),
            r < 1 || r > St(n, o, s)
              ? (g(e)._overflowWeeks = !0)
              : null != u
              ? (g(e)._overflowWeekday = !0)
              : ((a = xt(n, r, i, o, s)),
                (e._a[ze] = a.year),
                (e._dayOfYear = a.dayOfYear));
        }
        function qn(e) {
          if (e._f !== i.ISO_8601)
            if (e._f !== i.RFC_2822) {
              (e._a = []), (g(e).empty = !0);
              var t,
                n,
                r,
                o,
                s,
                a,
                u,
                l = "" + e._i,
                c = l.length,
                d = 0;
              for (
                u = (r = U(e._f, e._locale).match(P) || []).length, t = 0;
                t < u;
                t++
              )
                (o = r[t]),
                  (n = (l.match(He(o, e)) || [])[0]) &&
                    ((s = l.substr(0, l.indexOf(n))).length > 0 &&
                      g(e).unusedInput.push(s),
                    (l = l.slice(l.indexOf(n) + n.length)),
                    (d += n.length)),
                  F[o]
                    ? (n ? (g(e).empty = !1) : g(e).unusedTokens.push(o),
                      qe(o, n, e))
                    : e._strict && !n && g(e).unusedTokens.push(o);
              (g(e).charsLeftOver = c - d),
                l.length > 0 && g(e).unusedInput.push(l),
                e._a[Ze] <= 12 &&
                  !0 === g(e).bigHour &&
                  e._a[Ze] > 0 &&
                  (g(e).bigHour = void 0),
                (g(e).parsedDateParts = e._a.slice(0)),
                (g(e).meridiem = e._meridiem),
                (e._a[Ze] = Vn(e._locale, e._a[Ze], e._meridiem)),
                null !== (a = g(e).era) &&
                  (e._a[ze] = e._locale.erasConvertYear(a, e._a[ze])),
                Fn(e),
                _n(e);
            } else Hn(e);
          else Cn(e);
        }
        function Vn(e, t, n) {
          var r;
          return null == n
            ? t
            : null != e.meridiemHour
            ? e.meridiemHour(t, n)
            : null != e.isPM
            ? ((r = e.isPM(n)) && t < 12 && (t += 12),
              r || 12 !== t || (t = 0),
              t)
            : t;
        }
        function zn(e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = !1,
            u = e._f.length;
          if (0 === u)
            return (g(e).invalidFormat = !0), void (e._d = new Date(NaN));
          for (i = 0; i < u; i++)
            (o = 0),
              (s = !1),
              (t = x({}, e)),
              null != e._useUTC && (t._useUTC = e._useUTC),
              (t._f = e._f[i]),
              qn(t),
              v(t) && (s = !0),
              (o += g(t).charsLeftOver),
              (o += 10 * g(t).unusedTokens.length),
              (g(t).score = o),
              a
                ? o < r && ((r = o), (n = t))
                : (null == r || o < r || s) &&
                  ((r = o), (n = t), s && (a = !0));
          m(e, n || t);
        }
        function Un(e) {
          if (!e._d) {
            var t = oe(e._i),
              n = void 0 === t.day ? t.date : t.day;
            (e._a = h(
              [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
              function (e) {
                return e && parseInt(e, 10);
              }
            )),
              Fn(e);
          }
        }
        function $n(e) {
          var t = new k(_n(Zn(e)));
          return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
        }
        function Zn(e) {
          var t = e._i,
            n = e._f;
          return (
            (e._locale = e._locale || bn(e._l)),
            null === t || (void 0 === n && "" === t)
              ? b({ nullInput: !0 })
              : ("string" === typeof t && (e._i = t = e._locale.preparse(t)),
                S(t)
                  ? new k(_n(t))
                  : (f(t) ? (e._d = t) : s(n) ? zn(e) : n ? qn(e) : Gn(e),
                    v(e) || (e._d = null),
                    e))
          );
        }
        function Gn(e) {
          var t = e._i;
          c(t)
            ? (e._d = new Date(i.now()))
            : f(t)
            ? (e._d = new Date(t.valueOf()))
            : "string" === typeof t
            ? Pn(e)
            : s(t)
            ? ((e._a = h(t.slice(0), function (e) {
                return parseInt(e, 10);
              })),
              Fn(e))
            : a(t)
            ? Un(e)
            : d(t)
            ? (e._d = new Date(t))
            : i.createFromInputFallback(e);
        }
        function Bn(e, t, n, r, i) {
          var o = {};
          return (
            (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
            (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
            ((a(e) && l(e)) || (s(e) && 0 === e.length)) && (e = void 0),
            (o._isAMomentObject = !0),
            (o._useUTC = o._isUTC = i),
            (o._l = n),
            (o._i = e),
            (o._f = t),
            (o._strict = r),
            $n(o)
          );
        }
        function Jn(e, t, n, r) {
          return Bn(e, t, n, r, !1);
        }
        (i.createFromInputFallback = T(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
          }
        )),
          (i.ISO_8601 = function () {}),
          (i.RFC_2822 = function () {});
        var Xn = T(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Jn.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e < this
                  ? this
                  : e
                : b();
            }
          ),
          Qn = T(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Jn.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e > this
                  ? this
                  : e
                : b();
            }
          );
        function Kn(e, t) {
          var n, r;
          if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length)) return Jn();
          for (n = t[0], r = 1; r < t.length; ++r)
            (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
          return n;
        }
        function er() {
          return Kn("isBefore", [].slice.call(arguments, 0));
        }
        function tr() {
          return Kn("isAfter", [].slice.call(arguments, 0));
        }
        var nr = function () {
            return Date.now ? Date.now() : +new Date();
          },
          rr = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
        function ir(e) {
          var t,
            n,
            r = !1,
            i = rr.length;
          for (t in e)
            if (
              u(e, t) &&
              (-1 === Ve.call(rr, t) || (null != e[t] && isNaN(e[t])))
            )
              return !1;
          for (n = 0; n < i; ++n)
            if (e[rr[n]]) {
              if (r) return !1;
              parseFloat(e[rr[n]]) !== de(e[rr[n]]) && (r = !0);
            }
          return !0;
        }
        function or() {
          return this._isValid;
        }
        function sr() {
          return Er(NaN);
        }
        function ar(e) {
          var t = oe(e),
            n = t.year || 0,
            r = t.quarter || 0,
            i = t.month || 0,
            o = t.week || t.isoWeek || 0,
            s = t.day || 0,
            a = t.hour || 0,
            u = t.minute || 0,
            l = t.second || 0,
            c = t.millisecond || 0;
          (this._isValid = ir(t)),
            (this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * a * 60 * 60),
            (this._days = +s + 7 * o),
            (this._months = +i + 3 * r + 12 * n),
            (this._data = {}),
            (this._locale = bn()),
            this._bubble();
        }
        function ur(e) {
          return e instanceof ar;
        }
        function lr(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
        }
        function cr(e, t, n) {
          var r,
            i = Math.min(e.length, t.length),
            o = Math.abs(e.length - t.length),
            s = 0;
          for (r = 0; r < i; r++)
            ((n && e[r] !== t[r]) || (!n && de(e[r]) !== de(t[r]))) && s++;
          return s + o;
        }
        function dr(e, t) {
          W(e, 0, 0, function () {
            var e = this.utcOffset(),
              n = "+";
            return (
              e < 0 && ((e = -e), (n = "-")),
              n + H(~~(e / 60), 2) + t + H(~~e % 60, 2)
            );
          });
        }
        dr("Z", ":"),
          dr("ZZ", ""),
          Ye("Z", Le),
          Ye("ZZ", Le),
          Fe(["Z", "ZZ"], function (e, t, n) {
            (n._useUTC = !0), (n._tzm = hr(Le, e));
          });
        var fr = /([\+\-]|\d\d)/gi;
        function hr(e, t) {
          var n,
            r,
            i = (t || "").match(e);
          return null === i
            ? null
            : 0 ===
              (r =
                60 *
                  (n = ((i[i.length - 1] || []) + "").match(fr) || [
                    "-",
                    0,
                    0,
                  ])[1] +
                de(n[2]))
            ? 0
            : "+" === n[0]
            ? r
            : -r;
        }
        function mr(e, t) {
          var n, r;
          return t._isUTC
            ? ((n = t.clone()),
              (r =
                (S(e) || f(e) ? e.valueOf() : Jn(e).valueOf()) - n.valueOf()),
              n._d.setTime(n._d.valueOf() + r),
              i.updateOffset(n, !1),
              n)
            : Jn(e).local();
        }
        function pr(e) {
          return -Math.round(e._d.getTimezoneOffset());
        }
        function yr(e, t, n) {
          var r,
            o = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            if ("string" === typeof e) {
              if (null === (e = hr(Le, e))) return this;
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return (
              !this._isUTC && t && (r = pr(this)),
              (this._offset = e),
              (this._isUTC = !0),
              null != r && this.add(r, "m"),
              o !== e &&
                (!t || this._changeInProgress
                  ? Ar(this, Er(e - o, "m"), 1, !1)
                  : this._changeInProgress ||
                    ((this._changeInProgress = !0),
                    i.updateOffset(this, !0),
                    (this._changeInProgress = null))),
              this
            );
          }
          return this._isUTC ? o : pr(this);
        }
        function gr(e, t) {
          return null != e
            ? ("string" !== typeof e && (e = -e), this.utcOffset(e, t), this)
            : -this.utcOffset();
        }
        function vr(e) {
          return this.utcOffset(0, e);
        }
        function br(e) {
          return (
            this._isUTC &&
              (this.utcOffset(0, e),
              (this._isUTC = !1),
              e && this.subtract(pr(this), "m")),
            this
          );
        }
        function wr() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ("string" === typeof this._i) {
            var e = hr(Ne, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
          }
          return this;
        }
        function _r(e) {
          return (
            !!this.isValid() &&
            ((e = e ? Jn(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
          );
        }
        function xr() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }
        function kr() {
          if (!c(this._isDSTShifted)) return this._isDSTShifted;
          var e,
            t = {};
          return (
            x(t, this),
            (t = Zn(t))._a
              ? ((e = t._isUTC ? p(t._a) : Jn(t._a)),
                (this._isDSTShifted =
                  this.isValid() && cr(t._a, e.toArray()) > 0))
              : (this._isDSTShifted = !1),
            this._isDSTShifted
          );
        }
        function Sr() {
          return !!this.isValid() && !this._isUTC;
        }
        function Mr() {
          return !!this.isValid() && this._isUTC;
        }
        function Tr() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        i.updateOffset = function () {};
        var Dr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Or =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Er(e, t) {
          var n,
            r,
            i,
            o = e,
            s = null;
          return (
            ur(e)
              ? (o = { ms: e._milliseconds, d: e._days, M: e._months })
              : d(e) || !isNaN(+e)
              ? ((o = {}), t ? (o[t] = +e) : (o.milliseconds = +e))
              : (s = Dr.exec(e))
              ? ((n = "-" === s[1] ? -1 : 1),
                (o = {
                  y: 0,
                  d: de(s[$e]) * n,
                  h: de(s[Ze]) * n,
                  m: de(s[Ge]) * n,
                  s: de(s[Be]) * n,
                  ms: de(lr(1e3 * s[Je])) * n,
                }))
              : (s = Or.exec(e))
              ? ((n = "-" === s[1] ? -1 : 1),
                (o = {
                  y: Cr(s[2], n),
                  M: Cr(s[3], n),
                  w: Cr(s[4], n),
                  d: Cr(s[5], n),
                  h: Cr(s[6], n),
                  m: Cr(s[7], n),
                  s: Cr(s[8], n),
                }))
              : null == o
              ? (o = {})
              : "object" === typeof o &&
                ("from" in o || "to" in o) &&
                ((i = Lr(Jn(o.from), Jn(o.to))),
                ((o = {}).ms = i.milliseconds),
                (o.M = i.months)),
            (r = new ar(o)),
            ur(e) && u(e, "_locale") && (r._locale = e._locale),
            ur(e) && u(e, "_isValid") && (r._isValid = e._isValid),
            r
          );
        }
        function Cr(e, t) {
          var n = e && parseFloat(e.replace(",", "."));
          return (isNaN(n) ? 0 : n) * t;
        }
        function Nr(e, t) {
          var n = {};
          return (
            (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e.clone().add(n.months, "M").isAfter(t) && --n.months,
            (n.milliseconds = +t - +e.clone().add(n.months, "M")),
            n
          );
        }
        function Lr(e, t) {
          var n;
          return e.isValid() && t.isValid()
            ? ((t = mr(t, e)),
              e.isBefore(t)
                ? (n = Nr(e, t))
                : (((n = Nr(t, e)).milliseconds = -n.milliseconds),
                  (n.months = -n.months)),
              n)
            : { milliseconds: 0, months: 0 };
        }
        function jr(e, t) {
          return function (n, r) {
            var i;
            return (
              null === r ||
                isNaN(+r) ||
                (E(
                  t,
                  "moment()." +
                    t +
                    "(period, number) is deprecated. Please use moment()." +
                    t +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (i = n),
                (n = r),
                (r = i)),
              Ar(this, Er(n, r), e),
              this
            );
          };
        }
        function Ar(e, t, n, r) {
          var o = t._milliseconds,
            s = lr(t._days),
            a = lr(t._months);
          e.isValid() &&
            ((r = null == r || r),
            a && ct(e, he(e, "Month") + a * n),
            s && me(e, "Date", he(e, "Date") + s * n),
            o && e._d.setTime(e._d.valueOf() + o * n),
            r && i.updateOffset(e, s || a));
        }
        (Er.fn = ar.prototype), (Er.invalid = sr);
        var Yr = jr(1, "add"),
          Hr = jr(-1, "subtract");
        function Pr(e) {
          return "string" === typeof e || e instanceof String;
        }
        function Ir(e) {
          return (
            S(e) ||
            f(e) ||
            Pr(e) ||
            d(e) ||
            Fr(e) ||
            Rr(e) ||
            null === e ||
            void 0 === e
          );
        }
        function Rr(e) {
          var t,
            n,
            r = a(e) && !l(e),
            i = !1,
            o = [
              "years",
              "year",
              "y",
              "months",
              "month",
              "M",
              "days",
              "day",
              "d",
              "dates",
              "date",
              "D",
              "hours",
              "hour",
              "h",
              "minutes",
              "minute",
              "m",
              "seconds",
              "second",
              "s",
              "milliseconds",
              "millisecond",
              "ms",
            ],
            s = o.length;
          for (t = 0; t < s; t += 1) (n = o[t]), (i = i || u(e, n));
          return r && i;
        }
        function Fr(e) {
          var t = s(e),
            n = !1;
          return (
            t &&
              (n =
                0 ===
                e.filter(function (t) {
                  return !d(t) && Pr(e);
                }).length),
            t && n
          );
        }
        function Wr(e) {
          var t,
            n,
            r = a(e) && !l(e),
            i = !1,
            o = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ];
          for (t = 0; t < o.length; t += 1) (n = o[t]), (i = i || u(e, n));
          return r && i;
        }
        function qr(e, t) {
          var n = e.diff(t, "days", !0);
          return n < -6
            ? "sameElse"
            : n < -1
            ? "lastWeek"
            : n < 0
            ? "lastDay"
            : n < 1
            ? "sameDay"
            : n < 2
            ? "nextDay"
            : n < 7
            ? "nextWeek"
            : "sameElse";
        }
        function Vr(e, t) {
          1 === arguments.length &&
            (arguments[0]
              ? Ir(arguments[0])
                ? ((e = arguments[0]), (t = void 0))
                : Wr(arguments[0]) && ((t = arguments[0]), (e = void 0))
              : ((e = void 0), (t = void 0)));
          var n = e || Jn(),
            r = mr(n, this).startOf("day"),
            o = i.calendarFormat(this, r) || "sameElse",
            s = t && (C(t[o]) ? t[o].call(this, n) : t[o]);
          return this.format(s || this.localeData().calendar(o, this, Jn(n)));
        }
        function zr() {
          return new k(this);
        }
        function Ur(e, t) {
          var n = S(e) ? e : Jn(e);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ("millisecond" === (t = ie(t) || "millisecond")
              ? this.valueOf() > n.valueOf()
              : n.valueOf() < this.clone().startOf(t).valueOf())
          );
        }
        function $r(e, t) {
          var n = S(e) ? e : Jn(e);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ("millisecond" === (t = ie(t) || "millisecond")
              ? this.valueOf() < n.valueOf()
              : this.clone().endOf(t).valueOf() < n.valueOf())
          );
        }
        function Zr(e, t, n, r) {
          var i = S(e) ? e : Jn(e),
            o = S(t) ? t : Jn(t);
          return (
            !!(this.isValid() && i.isValid() && o.isValid()) &&
            ("(" === (r = r || "()")[0]
              ? this.isAfter(i, n)
              : !this.isBefore(i, n)) &&
            (")" === r[1] ? this.isBefore(o, n) : !this.isAfter(o, n))
          );
        }
        function Gr(e, t) {
          var n,
            r = S(e) ? e : Jn(e);
          return (
            !(!this.isValid() || !r.isValid()) &&
            ("millisecond" === (t = ie(t) || "millisecond")
              ? this.valueOf() === r.valueOf()
              : ((n = r.valueOf()),
                this.clone().startOf(t).valueOf() <= n &&
                  n <= this.clone().endOf(t).valueOf()))
          );
        }
        function Br(e, t) {
          return this.isSame(e, t) || this.isAfter(e, t);
        }
        function Jr(e, t) {
          return this.isSame(e, t) || this.isBefore(e, t);
        }
        function Xr(e, t, n) {
          var r, i, o;
          if (!this.isValid()) return NaN;
          if (!(r = mr(e, this)).isValid()) return NaN;
          switch (
            ((i = 6e4 * (r.utcOffset() - this.utcOffset())), (t = ie(t)))
          ) {
            case "year":
              o = Qr(this, r) / 12;
              break;
            case "month":
              o = Qr(this, r);
              break;
            case "quarter":
              o = Qr(this, r) / 3;
              break;
            case "second":
              o = (this - r) / 1e3;
              break;
            case "minute":
              o = (this - r) / 6e4;
              break;
            case "hour":
              o = (this - r) / 36e5;
              break;
            case "day":
              o = (this - r - i) / 864e5;
              break;
            case "week":
              o = (this - r - i) / 6048e5;
              break;
            default:
              o = this - r;
          }
          return n ? o : ce(o);
        }
        function Qr(e, t) {
          if (e.date() < t.date()) return -Qr(t, e);
          var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            r = e.clone().add(n, "months");
          return (
            -(
              n +
              (t - r < 0
                ? (t - r) / (r - e.clone().add(n - 1, "months"))
                : (t - r) / (e.clone().add(n + 1, "months") - r))
            ) || 0
          );
        }
        function Kr() {
          return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function ei(e) {
          if (!this.isValid()) return null;
          var t = !0 !== e,
            n = t ? this.clone().utc() : this;
          return n.year() < 0 || n.year() > 9999
            ? z(
                n,
                t
                  ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                  : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
              )
            : C(Date.prototype.toISOString)
            ? t
              ? this.toDate().toISOString()
              : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                  .toISOString()
                  .replace("Z", z(n, "Z"))
            : z(
                n,
                t
                  ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                  : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
              );
        }
        function ti() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var e,
            t,
            n,
            r,
            i = "moment",
            o = "";
          return (
            this.isLocal() ||
              ((i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
              (o = "Z")),
            (e = "[" + i + '("]'),
            (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
            (n = "-MM-DD[T]HH:mm:ss.SSS"),
            (r = o + '[")]'),
            this.format(e + t + n + r)
          );
        }
        function ni(e) {
          e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
          var t = z(this, e);
          return this.localeData().postformat(t);
        }
        function ri(e, t) {
          return this.isValid() && ((S(e) && e.isValid()) || Jn(e).isValid())
            ? Er({ to: this, from: e }).locale(this.locale()).humanize(!t)
            : this.localeData().invalidDate();
        }
        function ii(e) {
          return this.from(Jn(), e);
        }
        function oi(e, t) {
          return this.isValid() && ((S(e) && e.isValid()) || Jn(e).isValid())
            ? Er({ from: this, to: e }).locale(this.locale()).humanize(!t)
            : this.localeData().invalidDate();
        }
        function si(e) {
          return this.to(Jn(), e);
        }
        function ai(e) {
          var t;
          return void 0 === e
            ? this._locale._abbr
            : (null != (t = bn(e)) && (this._locale = t), this);
        }
        (i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var ui = T(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (e) {
            return void 0 === e ? this.localeData() : this.locale(e);
          }
        );
        function li() {
          return this._locale;
        }
        var ci = 1e3,
          di = 60 * ci,
          fi = 60 * di,
          hi = 3506328 * fi;
        function mi(e, t) {
          return ((e % t) + t) % t;
        }
        function pi(e, t, n) {
          return e < 100 && e >= 0
            ? new Date(e + 400, t, n) - hi
            : new Date(e, t, n).valueOf();
        }
        function yi(e, t, n) {
          return e < 100 && e >= 0
            ? Date.UTC(e + 400, t, n) - hi
            : Date.UTC(e, t, n);
        }
        function gi(e) {
          var t, n;
          if (void 0 === (e = ie(e)) || "millisecond" === e || !this.isValid())
            return this;
          switch (((n = this._isUTC ? yi : pi), e)) {
            case "year":
              t = n(this.year(), 0, 1);
              break;
            case "quarter":
              t = n(this.year(), this.month() - (this.month() % 3), 1);
              break;
            case "month":
              t = n(this.year(), this.month(), 1);
              break;
            case "week":
              t = n(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              t = n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
              );
              break;
            case "day":
            case "date":
              t = n(this.year(), this.month(), this.date());
              break;
            case "hour":
              (t = this._d.valueOf()),
                (t -= mi(t + (this._isUTC ? 0 : this.utcOffset() * di), fi));
              break;
            case "minute":
              (t = this._d.valueOf()), (t -= mi(t, di));
              break;
            case "second":
              (t = this._d.valueOf()), (t -= mi(t, ci));
          }
          return this._d.setTime(t), i.updateOffset(this, !0), this;
        }
        function vi(e) {
          var t, n;
          if (void 0 === (e = ie(e)) || "millisecond" === e || !this.isValid())
            return this;
          switch (((n = this._isUTC ? yi : pi), e)) {
            case "year":
              t = n(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
              break;
            case "month":
              t = n(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              t =
                n(this.year(), this.month(), this.date() - this.weekday() + 7) -
                1;
              break;
            case "isoWeek":
              t =
                n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
              break;
            case "day":
            case "date":
              t = n(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              (t = this._d.valueOf()),
                (t +=
                  fi -
                  mi(t + (this._isUTC ? 0 : this.utcOffset() * di), fi) -
                  1);
              break;
            case "minute":
              (t = this._d.valueOf()), (t += di - mi(t, di) - 1);
              break;
            case "second":
              (t = this._d.valueOf()), (t += ci - mi(t, ci) - 1);
          }
          return this._d.setTime(t), i.updateOffset(this, !0), this;
        }
        function bi() {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }
        function wi() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function _i() {
          return new Date(this.valueOf());
        }
        function xi() {
          var e = this;
          return [
            e.year(),
            e.month(),
            e.date(),
            e.hour(),
            e.minute(),
            e.second(),
            e.millisecond(),
          ];
        }
        function ki() {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds(),
          };
        }
        function Si() {
          return this.isValid() ? this.toISOString() : null;
        }
        function Mi() {
          return v(this);
        }
        function Ti() {
          return m({}, g(this));
        }
        function Di() {
          return g(this).overflow;
        }
        function Oi() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }
        function Ei(e, t) {
          var n,
            r,
            o,
            s = this._eras || bn("en")._eras;
          for (n = 0, r = s.length; n < r; ++n)
            switch (
              ("string" === typeof s[n].since &&
                ((o = i(s[n].since).startOf("day")),
                (s[n].since = o.valueOf())),
              typeof s[n].until)
            ) {
              case "undefined":
                s[n].until = 1 / 0;
                break;
              case "string":
                (o = i(s[n].until).startOf("day").valueOf()),
                  (s[n].until = o.valueOf());
            }
          return s;
        }
        function Ci(e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            u = this.eras();
          for (e = e.toUpperCase(), r = 0, i = u.length; r < i; ++r)
            if (
              ((o = u[r].name.toUpperCase()),
              (s = u[r].abbr.toUpperCase()),
              (a = u[r].narrow.toUpperCase()),
              n)
            )
              switch (t) {
                case "N":
                case "NN":
                case "NNN":
                  if (s === e) return u[r];
                  break;
                case "NNNN":
                  if (o === e) return u[r];
                  break;
                case "NNNNN":
                  if (a === e) return u[r];
              }
            else if ([o, s, a].indexOf(e) >= 0) return u[r];
        }
        function Ni(e, t) {
          var n = e.since <= e.until ? 1 : -1;
          return void 0 === t
            ? i(e.since).year()
            : i(e.since).year() + (t - e.offset) * n;
        }
        function Li() {
          var e,
            t,
            n,
            r = this.localeData().eras();
          for (e = 0, t = r.length; e < t; ++e) {
            if (
              ((n = this.clone().startOf("day").valueOf()),
              r[e].since <= n && n <= r[e].until)
            )
              return r[e].name;
            if (r[e].until <= n && n <= r[e].since) return r[e].name;
          }
          return "";
        }
        function ji() {
          var e,
            t,
            n,
            r = this.localeData().eras();
          for (e = 0, t = r.length; e < t; ++e) {
            if (
              ((n = this.clone().startOf("day").valueOf()),
              r[e].since <= n && n <= r[e].until)
            )
              return r[e].narrow;
            if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
          }
          return "";
        }
        function Ai() {
          var e,
            t,
            n,
            r = this.localeData().eras();
          for (e = 0, t = r.length; e < t; ++e) {
            if (
              ((n = this.clone().startOf("day").valueOf()),
              r[e].since <= n && n <= r[e].until)
            )
              return r[e].abbr;
            if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
          }
          return "";
        }
        function Yi() {
          var e,
            t,
            n,
            r,
            o = this.localeData().eras();
          for (e = 0, t = o.length; e < t; ++e)
            if (
              ((n = o[e].since <= o[e].until ? 1 : -1),
              (r = this.clone().startOf("day").valueOf()),
              (o[e].since <= r && r <= o[e].until) ||
                (o[e].until <= r && r <= o[e].since))
            )
              return (this.year() - i(o[e].since).year()) * n + o[e].offset;
          return this.year();
        }
        function Hi(e) {
          return (
            u(this, "_erasNameRegex") || Vi.call(this),
            e ? this._erasNameRegex : this._erasRegex
          );
        }
        function Pi(e) {
          return (
            u(this, "_erasAbbrRegex") || Vi.call(this),
            e ? this._erasAbbrRegex : this._erasRegex
          );
        }
        function Ii(e) {
          return (
            u(this, "_erasNarrowRegex") || Vi.call(this),
            e ? this._erasNarrowRegex : this._erasRegex
          );
        }
        function Ri(e, t) {
          return t.erasAbbrRegex(e);
        }
        function Fi(e, t) {
          return t.erasNameRegex(e);
        }
        function Wi(e, t) {
          return t.erasNarrowRegex(e);
        }
        function qi(e, t) {
          return t._eraYearOrdinalRegex || Ee;
        }
        function Vi() {
          var e,
            t,
            n = [],
            r = [],
            i = [],
            o = [],
            s = this.eras();
          for (e = 0, t = s.length; e < t; ++e)
            r.push(Ie(s[e].name)),
              n.push(Ie(s[e].abbr)),
              i.push(Ie(s[e].narrow)),
              o.push(Ie(s[e].name)),
              o.push(Ie(s[e].abbr)),
              o.push(Ie(s[e].narrow));
          (this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")", "i"));
        }
        function zi(e, t) {
          W(0, [e, e.length], 0, t);
        }
        function Ui(e) {
          return Xi.call(
            this,
            e,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function $i(e) {
          return Xi.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function Zi() {
          return St(this.year(), 1, 4);
        }
        function Gi() {
          return St(this.isoWeekYear(), 1, 4);
        }
        function Bi() {
          var e = this.localeData()._week;
          return St(this.year(), e.dow, e.doy);
        }
        function Ji() {
          var e = this.localeData()._week;
          return St(this.weekYear(), e.dow, e.doy);
        }
        function Xi(e, t, n, r, i) {
          var o;
          return null == e
            ? kt(this, r, i).year
            : (t > (o = St(e, r, i)) && (t = o), Qi.call(this, e, t, n, r, i));
        }
        function Qi(e, t, n, r, i) {
          var o = xt(e, t, n, r, i),
            s = wt(o.year, 0, o.dayOfYear);
          return (
            this.year(s.getUTCFullYear()),
            this.month(s.getUTCMonth()),
            this.date(s.getUTCDate()),
            this
          );
        }
        function Ki(e) {
          return null == e
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (e - 1) + (this.month() % 3));
        }
        W("N", 0, 0, "eraAbbr"),
          W("NN", 0, 0, "eraAbbr"),
          W("NNN", 0, 0, "eraAbbr"),
          W("NNNN", 0, 0, "eraName"),
          W("NNNNN", 0, 0, "eraNarrow"),
          W("y", ["y", 1], "yo", "eraYear"),
          W("y", ["yy", 2], 0, "eraYear"),
          W("y", ["yyy", 3], 0, "eraYear"),
          W("y", ["yyyy", 4], 0, "eraYear"),
          Ye("N", Ri),
          Ye("NN", Ri),
          Ye("NNN", Ri),
          Ye("NNNN", Fi),
          Ye("NNNNN", Wi),
          Fe(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
            var i = n._locale.erasParse(e, r, n._strict);
            i ? (g(n).era = i) : (g(n).invalidEra = e);
          }),
          Ye("y", Ee),
          Ye("yy", Ee),
          Ye("yyy", Ee),
          Ye("yyyy", Ee),
          Ye("yo", qi),
          Fe(["y", "yy", "yyy", "yyyy"], ze),
          Fe(["yo"], function (e, t, n, r) {
            var i;
            n._locale._eraYearOrdinalRegex &&
              (i = e.match(n._locale._eraYearOrdinalRegex)),
              n._locale.eraYearOrdinalParse
                ? (t[ze] = n._locale.eraYearOrdinalParse(e, i))
                : (t[ze] = parseInt(e, 10));
          }),
          W(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          W(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          zi("gggg", "weekYear"),
          zi("ggggg", "weekYear"),
          zi("GGGG", "isoWeekYear"),
          zi("GGGGG", "isoWeekYear"),
          re("weekYear", "gg"),
          re("isoWeekYear", "GG"),
          ae("weekYear", 1),
          ae("isoWeekYear", 1),
          Ye("G", Ce),
          Ye("g", Ce),
          Ye("GG", ke, be),
          Ye("gg", ke, be),
          Ye("GGGG", De, _e),
          Ye("gggg", De, _e),
          Ye("GGGGG", Oe, xe),
          Ye("ggggg", Oe, xe),
          We(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
            t[r.substr(0, 2)] = de(e);
          }),
          We(["gg", "GG"], function (e, t, n, r) {
            t[r] = i.parseTwoDigitYear(e);
          }),
          W("Q", 0, "Qo", "quarter"),
          re("quarter", "Q"),
          ae("quarter", 7),
          Ye("Q", ve),
          Fe("Q", function (e, t) {
            t[Ue] = 3 * (de(e) - 1);
          }),
          W("D", ["DD", 2], "Do", "date"),
          re("date", "D"),
          ae("date", 9),
          Ye("D", ke),
          Ye("DD", ke, be),
          Ye("Do", function (e, t) {
            return e
              ? t._dayOfMonthOrdinalParse || t._ordinalParse
              : t._dayOfMonthOrdinalParseLenient;
          }),
          Fe(["D", "DD"], $e),
          Fe("Do", function (e, t) {
            t[$e] = de(e.match(ke)[0]);
          });
        var eo = fe("Date", !0);
        function to(e) {
          var t =
            Math.round(
              (this.clone().startOf("day") - this.clone().startOf("year")) /
                864e5
            ) + 1;
          return null == e ? t : this.add(e - t, "d");
        }
        W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          re("dayOfYear", "DDD"),
          ae("dayOfYear", 4),
          Ye("DDD", Te),
          Ye("DDDD", we),
          Fe(["DDD", "DDDD"], function (e, t, n) {
            n._dayOfYear = de(e);
          }),
          W("m", ["mm", 2], 0, "minute"),
          re("minute", "m"),
          ae("minute", 14),
          Ye("m", ke),
          Ye("mm", ke, be),
          Fe(["m", "mm"], Ge);
        var no = fe("Minutes", !1);
        W("s", ["ss", 2], 0, "second"),
          re("second", "s"),
          ae("second", 15),
          Ye("s", ke),
          Ye("ss", ke, be),
          Fe(["s", "ss"], Be);
        var ro,
          io,
          oo = fe("Seconds", !1);
        for (
          W("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            W(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            W(0, ["SSS", 3], 0, "millisecond"),
            W(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            W(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            W(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            W(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            W(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            W(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            re("millisecond", "ms"),
            ae("millisecond", 16),
            Ye("S", Te, ve),
            Ye("SS", Te, be),
            Ye("SSS", Te, we),
            ro = "SSSS";
          ro.length <= 9;
          ro += "S"
        )
          Ye(ro, Ee);
        function so(e, t) {
          t[Je] = de(1e3 * ("0." + e));
        }
        for (ro = "S"; ro.length <= 9; ro += "S") Fe(ro, so);
        function ao() {
          return this._isUTC ? "UTC" : "";
        }
        function uo() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        (io = fe("Milliseconds", !1)),
          W("z", 0, 0, "zoneAbbr"),
          W("zz", 0, 0, "zoneName");
        var lo = k.prototype;
        function co(e) {
          return Jn(1e3 * e);
        }
        function fo() {
          return Jn.apply(null, arguments).parseZone();
        }
        function ho(e) {
          return e;
        }
        (lo.add = Yr),
          (lo.calendar = Vr),
          (lo.clone = zr),
          (lo.diff = Xr),
          (lo.endOf = vi),
          (lo.format = ni),
          (lo.from = ri),
          (lo.fromNow = ii),
          (lo.to = oi),
          (lo.toNow = si),
          (lo.get = pe),
          (lo.invalidAt = Di),
          (lo.isAfter = Ur),
          (lo.isBefore = $r),
          (lo.isBetween = Zr),
          (lo.isSame = Gr),
          (lo.isSameOrAfter = Br),
          (lo.isSameOrBefore = Jr),
          (lo.isValid = Mi),
          (lo.lang = ui),
          (lo.locale = ai),
          (lo.localeData = li),
          (lo.max = Qn),
          (lo.min = Xn),
          (lo.parsingFlags = Ti),
          (lo.set = ye),
          (lo.startOf = gi),
          (lo.subtract = Hr),
          (lo.toArray = xi),
          (lo.toObject = ki),
          (lo.toDate = _i),
          (lo.toISOString = ei),
          (lo.inspect = ti),
          "undefined" !== typeof Symbol &&
            null != Symbol.for &&
            (lo[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (lo.toJSON = Si),
          (lo.toString = Kr),
          (lo.unix = wi),
          (lo.valueOf = bi),
          (lo.creationData = Oi),
          (lo.eraName = Li),
          (lo.eraNarrow = ji),
          (lo.eraAbbr = Ai),
          (lo.eraYear = Yi),
          (lo.year = gt),
          (lo.isLeapYear = vt),
          (lo.weekYear = Ui),
          (lo.isoWeekYear = $i),
          (lo.quarter = lo.quarters = Ki),
          (lo.month = dt),
          (lo.daysInMonth = ft),
          (lo.week = lo.weeks = Et),
          (lo.isoWeek = lo.isoWeeks = Ct),
          (lo.weeksInYear = Bi),
          (lo.weeksInWeekYear = Ji),
          (lo.isoWeeksInYear = Zi),
          (lo.isoWeeksInISOWeekYear = Gi),
          (lo.date = eo),
          (lo.day = lo.days = Ut),
          (lo.weekday = $t),
          (lo.isoWeekday = Zt),
          (lo.dayOfYear = to),
          (lo.hour = lo.hours = on),
          (lo.minute = lo.minutes = no),
          (lo.second = lo.seconds = oo),
          (lo.millisecond = lo.milliseconds = io),
          (lo.utcOffset = yr),
          (lo.utc = vr),
          (lo.local = br),
          (lo.parseZone = wr),
          (lo.hasAlignedHourOffset = _r),
          (lo.isDST = xr),
          (lo.isLocal = Sr),
          (lo.isUtcOffset = Mr),
          (lo.isUtc = Tr),
          (lo.isUTC = Tr),
          (lo.zoneAbbr = ao),
          (lo.zoneName = uo),
          (lo.dates = T("dates accessor is deprecated. Use date instead.", eo)),
          (lo.months = T(
            "months accessor is deprecated. Use month instead",
            dt
          )),
          (lo.years = T("years accessor is deprecated. Use year instead", gt)),
          (lo.zone = T(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            gr
          )),
          (lo.isDSTShifted = T(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            kr
          ));
        var mo = j.prototype;
        function po(e, t, n, r) {
          var i = bn(),
            o = p().set(r, t);
          return i[n](o, e);
        }
        function yo(e, t, n) {
          if ((d(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
            return po(e, t, n, "month");
          var r,
            i = [];
          for (r = 0; r < 12; r++) i[r] = po(e, r, n, "month");
          return i;
        }
        function go(e, t, n, r) {
          "boolean" === typeof e
            ? (d(t) && ((n = t), (t = void 0)), (t = t || ""))
            : ((n = t = e),
              (e = !1),
              d(t) && ((n = t), (t = void 0)),
              (t = t || ""));
          var i,
            o = bn(),
            s = e ? o._week.dow : 0,
            a = [];
          if (null != n) return po(t, (n + s) % 7, r, "day");
          for (i = 0; i < 7; i++) a[i] = po(t, (i + s) % 7, r, "day");
          return a;
        }
        function vo(e, t) {
          return yo(e, t, "months");
        }
        function bo(e, t) {
          return yo(e, t, "monthsShort");
        }
        function wo(e, t, n) {
          return go(e, t, n, "weekdays");
        }
        function _o(e, t, n) {
          return go(e, t, n, "weekdaysShort");
        }
        function xo(e, t, n) {
          return go(e, t, n, "weekdaysMin");
        }
        (mo.calendar = Y),
          (mo.longDateFormat = Z),
          (mo.invalidDate = B),
          (mo.ordinal = Q),
          (mo.preparse = ho),
          (mo.postformat = ho),
          (mo.relativeTime = ee),
          (mo.pastFuture = te),
          (mo.set = N),
          (mo.eras = Ei),
          (mo.erasParse = Ci),
          (mo.erasConvertYear = Ni),
          (mo.erasAbbrRegex = Pi),
          (mo.erasNameRegex = Hi),
          (mo.erasNarrowRegex = Ii),
          (mo.months = st),
          (mo.monthsShort = at),
          (mo.monthsParse = lt),
          (mo.monthsRegex = mt),
          (mo.monthsShortRegex = ht),
          (mo.week = Mt),
          (mo.firstDayOfYear = Ot),
          (mo.firstDayOfWeek = Dt),
          (mo.weekdays = Ft),
          (mo.weekdaysMin = qt),
          (mo.weekdaysShort = Wt),
          (mo.weekdaysParse = zt),
          (mo.weekdaysRegex = Gt),
          (mo.weekdaysShortRegex = Bt),
          (mo.weekdaysMinRegex = Jt),
          (mo.isPM = nn),
          (mo.meridiem = sn),
          yn("en", {
            eras: [
              {
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 === de((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
          }),
          (i.lang = T(
            "moment.lang is deprecated. Use moment.locale instead.",
            yn
          )),
          (i.langData = T(
            "moment.langData is deprecated. Use moment.localeData instead.",
            bn
          ));
        var ko = Math.abs;
        function So() {
          var e = this._data;
          return (
            (this._milliseconds = ko(this._milliseconds)),
            (this._days = ko(this._days)),
            (this._months = ko(this._months)),
            (e.milliseconds = ko(e.milliseconds)),
            (e.seconds = ko(e.seconds)),
            (e.minutes = ko(e.minutes)),
            (e.hours = ko(e.hours)),
            (e.months = ko(e.months)),
            (e.years = ko(e.years)),
            this
          );
        }
        function Mo(e, t, n, r) {
          var i = Er(t, n);
          return (
            (e._milliseconds += r * i._milliseconds),
            (e._days += r * i._days),
            (e._months += r * i._months),
            e._bubble()
          );
        }
        function To(e, t) {
          return Mo(this, e, t, 1);
        }
        function Do(e, t) {
          return Mo(this, e, t, -1);
        }
        function Oo(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e);
        }
        function Eo() {
          var e,
            t,
            n,
            r,
            i,
            o = this._milliseconds,
            s = this._days,
            a = this._months,
            u = this._data;
          return (
            (o >= 0 && s >= 0 && a >= 0) ||
              (o <= 0 && s <= 0 && a <= 0) ||
              ((o += 864e5 * Oo(No(a) + s)), (s = 0), (a = 0)),
            (u.milliseconds = o % 1e3),
            (e = ce(o / 1e3)),
            (u.seconds = e % 60),
            (t = ce(e / 60)),
            (u.minutes = t % 60),
            (n = ce(t / 60)),
            (u.hours = n % 24),
            (s += ce(n / 24)),
            (a += i = ce(Co(s))),
            (s -= Oo(No(i))),
            (r = ce(a / 12)),
            (a %= 12),
            (u.days = s),
            (u.months = a),
            (u.years = r),
            this
          );
        }
        function Co(e) {
          return (4800 * e) / 146097;
        }
        function No(e) {
          return (146097 * e) / 4800;
        }
        function Lo(e) {
          if (!this.isValid()) return NaN;
          var t,
            n,
            r = this._milliseconds;
          if ("month" === (e = ie(e)) || "quarter" === e || "year" === e)
            switch (
              ((t = this._days + r / 864e5), (n = this._months + Co(t)), e)
            ) {
              case "month":
                return n;
              case "quarter":
                return n / 3;
              case "year":
                return n / 12;
            }
          else
            switch (((t = this._days + Math.round(No(this._months))), e)) {
              case "week":
                return t / 7 + r / 6048e5;
              case "day":
                return t + r / 864e5;
              case "hour":
                return 24 * t + r / 36e5;
              case "minute":
                return 1440 * t + r / 6e4;
              case "second":
                return 86400 * t + r / 1e3;
              case "millisecond":
                return Math.floor(864e5 * t) + r;
              default:
                throw new Error("Unknown unit " + e);
            }
        }
        function jo() {
          return this.isValid()
            ? this._milliseconds +
                864e5 * this._days +
                (this._months % 12) * 2592e6 +
                31536e6 * de(this._months / 12)
            : NaN;
        }
        function Ao(e) {
          return function () {
            return this.as(e);
          };
        }
        var Yo = Ao("ms"),
          Ho = Ao("s"),
          Po = Ao("m"),
          Io = Ao("h"),
          Ro = Ao("d"),
          Fo = Ao("w"),
          Wo = Ao("M"),
          qo = Ao("Q"),
          Vo = Ao("y");
        function zo() {
          return Er(this);
        }
        function Uo(e) {
          return (e = ie(e)), this.isValid() ? this[e + "s"]() : NaN;
        }
        function $o(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN;
          };
        }
        var Zo = $o("milliseconds"),
          Go = $o("seconds"),
          Bo = $o("minutes"),
          Jo = $o("hours"),
          Xo = $o("days"),
          Qo = $o("months"),
          Ko = $o("years");
        function es() {
          return ce(this.days() / 7);
        }
        var ts = Math.round,
          ns = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function rs(e, t, n, r, i) {
          return i.relativeTime(t || 1, !!n, e, r);
        }
        function is(e, t, n, r) {
          var i = Er(e).abs(),
            o = ts(i.as("s")),
            s = ts(i.as("m")),
            a = ts(i.as("h")),
            u = ts(i.as("d")),
            l = ts(i.as("M")),
            c = ts(i.as("w")),
            d = ts(i.as("y")),
            f =
              (o <= n.ss && ["s", o]) ||
              (o < n.s && ["ss", o]) ||
              (s <= 1 && ["m"]) ||
              (s < n.m && ["mm", s]) ||
              (a <= 1 && ["h"]) ||
              (a < n.h && ["hh", a]) ||
              (u <= 1 && ["d"]) ||
              (u < n.d && ["dd", u]);
          return (
            null != n.w &&
              (f = f || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
            ((f = f ||
              (l <= 1 && ["M"]) ||
              (l < n.M && ["MM", l]) ||
              (d <= 1 && ["y"]) || ["yy", d])[2] = t),
            (f[3] = +e > 0),
            (f[4] = r),
            rs.apply(null, f)
          );
        }
        function os(e) {
          return void 0 === e ? ts : "function" === typeof e && ((ts = e), !0);
        }
        function ss(e, t) {
          return (
            void 0 !== ns[e] &&
            (void 0 === t
              ? ns[e]
              : ((ns[e] = t), "s" === e && (ns.ss = t - 1), !0))
          );
        }
        function as(e, t) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var n,
            r,
            i = !1,
            o = ns;
          return (
            "object" === typeof e && ((t = e), (e = !1)),
            "boolean" === typeof e && (i = e),
            "object" === typeof t &&
              ((o = Object.assign({}, ns, t)),
              null != t.s && null == t.ss && (o.ss = t.s - 1)),
            (r = is(this, !i, o, (n = this.localeData()))),
            i && (r = n.pastFuture(+this, r)),
            n.postformat(r)
          );
        }
        var us = Math.abs;
        function ls(e) {
          return (e > 0) - (e < 0) || +e;
        }
        function cs() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e,
            t,
            n,
            r,
            i,
            o,
            s,
            a,
            u = us(this._milliseconds) / 1e3,
            l = us(this._days),
            c = us(this._months),
            d = this.asSeconds();
          return d
            ? ((e = ce(u / 60)),
              (t = ce(e / 60)),
              (u %= 60),
              (e %= 60),
              (n = ce(c / 12)),
              (c %= 12),
              (r = u ? u.toFixed(3).replace(/\.?0+$/, "") : ""),
              (i = d < 0 ? "-" : ""),
              (o = ls(this._months) !== ls(d) ? "-" : ""),
              (s = ls(this._days) !== ls(d) ? "-" : ""),
              (a = ls(this._milliseconds) !== ls(d) ? "-" : ""),
              i +
                "P" +
                (n ? o + n + "Y" : "") +
                (c ? o + c + "M" : "") +
                (l ? s + l + "D" : "") +
                (t || e || u ? "T" : "") +
                (t ? a + t + "H" : "") +
                (e ? a + e + "M" : "") +
                (u ? a + r + "S" : ""))
            : "P0D";
        }
        var ds = ar.prototype;
        return (
          (ds.isValid = or),
          (ds.abs = So),
          (ds.add = To),
          (ds.subtract = Do),
          (ds.as = Lo),
          (ds.asMilliseconds = Yo),
          (ds.asSeconds = Ho),
          (ds.asMinutes = Po),
          (ds.asHours = Io),
          (ds.asDays = Ro),
          (ds.asWeeks = Fo),
          (ds.asMonths = Wo),
          (ds.asQuarters = qo),
          (ds.asYears = Vo),
          (ds.valueOf = jo),
          (ds._bubble = Eo),
          (ds.clone = zo),
          (ds.get = Uo),
          (ds.milliseconds = Zo),
          (ds.seconds = Go),
          (ds.minutes = Bo),
          (ds.hours = Jo),
          (ds.days = Xo),
          (ds.weeks = es),
          (ds.months = Qo),
          (ds.years = Ko),
          (ds.humanize = as),
          (ds.toISOString = cs),
          (ds.toString = cs),
          (ds.toJSON = cs),
          (ds.locale = ai),
          (ds.localeData = li),
          (ds.toIsoString = T(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            cs
          )),
          (ds.lang = ui),
          W("X", 0, 0, "unix"),
          W("x", 0, 0, "valueOf"),
          Ye("x", Ce),
          Ye("X", je),
          Fe("X", function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e));
          }),
          Fe("x", function (e, t, n) {
            n._d = new Date(de(e));
          }),
          (i.version = "2.29.4"),
          o(Jn),
          (i.fn = lo),
          (i.min = er),
          (i.max = tr),
          (i.now = nr),
          (i.utc = p),
          (i.unix = co),
          (i.months = vo),
          (i.isDate = f),
          (i.locale = yn),
          (i.invalid = b),
          (i.duration = Er),
          (i.isMoment = S),
          (i.weekdays = wo),
          (i.parseZone = fo),
          (i.localeData = bn),
          (i.isDuration = ur),
          (i.monthsShort = bo),
          (i.weekdaysMin = xo),
          (i.defineLocale = gn),
          (i.updateLocale = vn),
          (i.locales = wn),
          (i.weekdaysShort = _o),
          (i.normalizeUnits = ie),
          (i.relativeTimeRounding = os),
          (i.relativeTimeThreshold = ss),
          (i.calendarFormat = qr),
          (i.prototype = lo),
          (i.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          i
        );
      })();
    },
    1051: (e, t, n) => {
      "use strict";
      function r(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function i(e) {
        return e instanceof r(e).Element || e instanceof Element;
      }
      function o(e) {
        return e instanceof r(e).HTMLElement || e instanceof HTMLElement;
      }
      function s(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      n.d(t, { ZP: () => ht });
      var a = Math.max,
        u = Math.min,
        l = Math.round;
      function c() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function d() {
        return !/^((?!chrome|android).)*safari/i.test(c());
      }
      function f(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var s = e.getBoundingClientRect(),
          a = 1,
          u = 1;
        t &&
          o(e) &&
          ((a = (e.offsetWidth > 0 && l(s.width) / e.offsetWidth) || 1),
          (u = (e.offsetHeight > 0 && l(s.height) / e.offsetHeight) || 1));
        var c = (i(e) ? r(e) : window).visualViewport,
          f = !d() && n,
          h = (s.left + (f && c ? c.offsetLeft : 0)) / a,
          m = (s.top + (f && c ? c.offsetTop : 0)) / u,
          p = s.width / a,
          y = s.height / u;
        return {
          width: p,
          height: y,
          top: m,
          right: h + p,
          bottom: m + y,
          left: h,
          x: h,
          y: m,
        };
      }
      function h(e) {
        var t = r(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function m(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function p(e) {
        return ((i(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function y(e) {
        return f(p(e)).left + h(e).scrollLeft;
      }
      function g(e) {
        return r(e).getComputedStyle(e);
      }
      function v(e) {
        var t = g(e),
          n = t.overflow,
          r = t.overflowX,
          i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + i + r);
      }
      function b(e, t, n) {
        void 0 === n && (n = !1);
        var i,
          s,
          a = o(t),
          u =
            o(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = l(t.width) / e.offsetWidth || 1,
                r = l(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          c = p(t),
          d = f(e, u, n),
          g = { scrollLeft: 0, scrollTop: 0 },
          b = { x: 0, y: 0 };
        return (
          (a || (!a && !n)) &&
            (("body" !== m(t) || v(c)) &&
              (g =
                (i = t) !== r(i) && o(i)
                  ? { scrollLeft: (s = i).scrollLeft, scrollTop: s.scrollTop }
                  : h(i)),
            o(t)
              ? (((b = f(t, !0)).x += t.clientLeft), (b.y += t.clientTop))
              : c && (b.x = y(c))),
          {
            x: d.left + g.scrollLeft - b.x,
            y: d.top + g.scrollTop - b.y,
            width: d.width,
            height: d.height,
          }
        );
      }
      function w(e) {
        var t = f(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function _(e) {
        return "html" === m(e)
          ? e
          : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || p(e);
      }
      function x(e) {
        return ["html", "body", "#document"].indexOf(m(e)) >= 0
          ? e.ownerDocument.body
          : o(e) && v(e)
          ? e
          : x(_(e));
      }
      function k(e, t) {
        var n;
        void 0 === t && (t = []);
        var i = x(e),
          o = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = r(i),
          a = o ? [s].concat(s.visualViewport || [], v(i) ? i : []) : i,
          u = t.concat(a);
        return o ? u : u.concat(k(_(a)));
      }
      function S(e) {
        return ["table", "td", "th"].indexOf(m(e)) >= 0;
      }
      function M(e) {
        return o(e) && "fixed" !== g(e).position ? e.offsetParent : null;
      }
      function T(e) {
        for (var t = r(e), n = M(e); n && S(n) && "static" === g(n).position; )
          n = M(n);
        return n &&
          ("html" === m(n) || ("body" === m(n) && "static" === g(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(c());
                if (/Trident/i.test(c()) && o(e) && "fixed" === g(e).position)
                  return null;
                var n = _(e);
                for (
                  s(n) && (n = n.host);
                  o(n) && ["html", "body"].indexOf(m(n)) < 0;

                ) {
                  var r = g(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var D = "top",
        O = "bottom",
        E = "right",
        C = "left",
        N = "auto",
        L = [D, O, E, C],
        j = "start",
        A = "end",
        Y = "clippingParents",
        H = "viewport",
        P = "popper",
        I = "reference",
        R = L.reduce(function (e, t) {
          return e.concat([t + "-" + j, t + "-" + A]);
        }, []),
        F = [].concat(L, [N]).reduce(function (e, t) {
          return e.concat([t, t + "-" + j, t + "-" + A]);
        }, []),
        W = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function q(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function i(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && i(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || i(e);
          }),
          r
        );
      }
      var V = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function z() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function U(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          s = void 0 === o ? V : o;
        return function (e, t, n) {
          void 0 === n && (n = s);
          var o,
            a,
            u = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, V, s),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            d = {
              state: u,
              setOptions: function (n) {
                var o = "function" === typeof n ? n(u.options) : n;
                f(),
                  (u.options = Object.assign({}, s, u.options, o)),
                  (u.scrollParents = {
                    reference: i(e)
                      ? k(e)
                      : e.contextElement
                      ? k(e.contextElement)
                      : [],
                    popper: k(t),
                  });
                var a,
                  c,
                  h = (function (e) {
                    var t = q(e);
                    return W.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        })
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, u.options.modifiers)),
                    (c = a.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(c).map(function (e) {
                      return c[e];
                    }))
                  );
                return (
                  (u.orderedModifiers = h.filter(function (e) {
                    return e.enabled;
                  })),
                  u.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;
                    if ("function" === typeof i) {
                      var o = i({ state: u, name: t, instance: d, options: r }),
                        s = function () {};
                      l.push(o || s);
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = u.elements,
                    t = e.reference,
                    n = e.popper;
                  if (z(t, n)) {
                    (u.rects = {
                      reference: b(t, T(n), "fixed" === u.options.strategy),
                      popper: w(n),
                    }),
                      (u.reset = !1),
                      (u.placement = u.options.placement),
                      u.orderedModifiers.forEach(function (e) {
                        return (u.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var r = 0; r < u.orderedModifiers.length; r++)
                      if (!0 !== u.reset) {
                        var i = u.orderedModifiers[r],
                          o = i.fn,
                          s = i.options,
                          a = void 0 === s ? {} : s,
                          l = i.name;
                        "function" === typeof o &&
                          (u =
                            o({ state: u, options: a, name: l, instance: d }) ||
                            u);
                      } else (u.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    d.forceUpdate(), e(u);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0), e(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                f(), (c = !0);
              },
            };
          if (!z(e, t)) return d;
          function f() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            d.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var $ = { passive: !0 };
      function Z(e) {
        return e.split("-")[0];
      }
      function G(e) {
        return e.split("-")[1];
      }
      function B(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function J(e) {
        var t,
          n = e.reference,
          r = e.element,
          i = e.placement,
          o = i ? Z(i) : null,
          s = i ? G(i) : null,
          a = n.x + n.width / 2 - r.width / 2,
          u = n.y + n.height / 2 - r.height / 2;
        switch (o) {
          case D:
            t = { x: a, y: n.y - r.height };
            break;
          case O:
            t = { x: a, y: n.y + n.height };
            break;
          case E:
            t = { x: n.x + n.width, y: u };
            break;
          case C:
            t = { x: n.x - r.width, y: u };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var l = o ? B(o) : null;
        if (null != l) {
          var c = "y" === l ? "height" : "width";
          switch (s) {
            case j:
              t[l] = t[l] - (n[c] / 2 - r[c] / 2);
              break;
            case A:
              t[l] = t[l] + (n[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      var X = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Q(e) {
        var t,
          n = e.popper,
          i = e.popperRect,
          o = e.placement,
          s = e.variation,
          a = e.offsets,
          u = e.position,
          c = e.gpuAcceleration,
          d = e.adaptive,
          f = e.roundOffsets,
          h = e.isFixed,
          m = a.x,
          y = void 0 === m ? 0 : m,
          v = a.y,
          b = void 0 === v ? 0 : v,
          w = "function" === typeof f ? f({ x: y, y: b }) : { x: y, y: b };
        (y = w.x), (b = w.y);
        var _ = a.hasOwnProperty("x"),
          x = a.hasOwnProperty("y"),
          k = C,
          S = D,
          M = window;
        if (d) {
          var N = T(n),
            L = "clientHeight",
            j = "clientWidth";
          if (
            (N === r(n) &&
              "static" !== g((N = p(n))).position &&
              "absolute" === u &&
              ((L = "scrollHeight"), (j = "scrollWidth")),
            o === D || ((o === C || o === E) && s === A))
          )
            (S = O),
              (b -=
                (h && N === M && M.visualViewport
                  ? M.visualViewport.height
                  : N[L]) - i.height),
              (b *= c ? 1 : -1);
          if (o === C || ((o === D || o === O) && s === A))
            (k = E),
              (y -=
                (h && N === M && M.visualViewport
                  ? M.visualViewport.width
                  : N[j]) - i.width),
              (y *= c ? 1 : -1);
        }
        var Y,
          H = Object.assign({ position: u }, d && X),
          P =
            !0 === f
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    i = t.devicePixelRatio || 1;
                  return { x: l(n * i) / i || 0, y: l(r * i) / i || 0 };
                })({ x: y, y: b }, r(n))
              : { x: y, y: b };
        return (
          (y = P.x),
          (b = P.y),
          c
            ? Object.assign(
                {},
                H,
                (((Y = {})[S] = x ? "0" : ""),
                (Y[k] = _ ? "0" : ""),
                (Y.transform =
                  (M.devicePixelRatio || 1) <= 1
                    ? "translate(" + y + "px, " + b + "px)"
                    : "translate3d(" + y + "px, " + b + "px, 0)"),
                Y)
              )
            : Object.assign(
                {},
                H,
                (((t = {})[S] = x ? b + "px" : ""),
                (t[k] = _ ? y + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const K = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              r = t.attributes[e] || {},
              i = t.elements[e];
            o(i) &&
              m(i) &&
              (Object.assign(i.style, n),
              Object.keys(r).forEach(function (e) {
                var t = r[e];
                !1 === t
                  ? i.removeAttribute(e)
                  : i.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var r = t.elements[e],
                  i = t.attributes[e] || {},
                  s = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                o(r) &&
                  m(r) &&
                  (Object.assign(r.style, s),
                  Object.keys(i).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      const ee = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            i = n.offset,
            o = void 0 === i ? [0, 0] : i,
            s = F.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = Z(e),
                    i = [C, D].indexOf(r) >= 0 ? -1 : 1,
                    o =
                      "function" === typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    s = o[0],
                    a = o[1];
                  return (
                    (s = s || 0),
                    (a = (a || 0) * i),
                    [C, E].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
                  );
                })(n, t.rects, o)),
                e
              );
            }, {}),
            a = s[t.placement],
            u = a.x,
            l = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += u),
            (t.modifiersData.popperOffsets.y += l)),
            (t.modifiersData[r] = s);
        },
      };
      var te = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ne(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return te[e];
        });
      }
      var re = { start: "end", end: "start" };
      function ie(e) {
        return e.replace(/start|end/g, function (e) {
          return re[e];
        });
      }
      function oe(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && s(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function se(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ae(e, t, n) {
        return t === H
          ? se(
              (function (e, t) {
                var n = r(e),
                  i = p(e),
                  o = n.visualViewport,
                  s = i.clientWidth,
                  a = i.clientHeight,
                  u = 0,
                  l = 0;
                if (o) {
                  (s = o.width), (a = o.height);
                  var c = d();
                  (c || (!c && "fixed" === t)) &&
                    ((u = o.offsetLeft), (l = o.offsetTop));
                }
                return { width: s, height: a, x: u + y(e), y: l };
              })(e, n)
            )
          : i(t)
          ? (function (e, t) {
              var n = f(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : se(
              (function (e) {
                var t,
                  n = p(e),
                  r = h(e),
                  i = null == (t = e.ownerDocument) ? void 0 : t.body,
                  o = a(
                    n.scrollWidth,
                    n.clientWidth,
                    i ? i.scrollWidth : 0,
                    i ? i.clientWidth : 0
                  ),
                  s = a(
                    n.scrollHeight,
                    n.clientHeight,
                    i ? i.scrollHeight : 0,
                    i ? i.clientHeight : 0
                  ),
                  u = -r.scrollLeft + y(e),
                  l = -r.scrollTop;
                return (
                  "rtl" === g(i || n).direction &&
                    (u += a(n.clientWidth, i ? i.clientWidth : 0) - o),
                  { width: o, height: s, x: u, y: l }
                );
              })(p(e))
            );
      }
      function ue(e, t, n, r) {
        var s =
            "clippingParents" === t
              ? (function (e) {
                  var t = k(_(e)),
                    n =
                      ["absolute", "fixed"].indexOf(g(e).position) >= 0 && o(e)
                        ? T(e)
                        : e;
                  return i(n)
                    ? t.filter(function (e) {
                        return i(e) && oe(e, n) && "body" !== m(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          l = [].concat(s, [n]),
          c = l[0],
          d = l.reduce(function (t, n) {
            var i = ae(e, n, r);
            return (
              (t.top = a(i.top, t.top)),
              (t.right = u(i.right, t.right)),
              (t.bottom = u(i.bottom, t.bottom)),
              (t.left = a(i.left, t.left)),
              t
            );
          }, ae(e, c, r));
        return (
          (d.width = d.right - d.left),
          (d.height = d.bottom - d.top),
          (d.x = d.left),
          (d.y = d.top),
          d
        );
      }
      function le(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function ce(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function de(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          s = n.strategy,
          a = void 0 === s ? e.strategy : s,
          u = n.boundary,
          l = void 0 === u ? Y : u,
          c = n.rootBoundary,
          d = void 0 === c ? H : c,
          h = n.elementContext,
          m = void 0 === h ? P : h,
          y = n.altBoundary,
          g = void 0 !== y && y,
          v = n.padding,
          b = void 0 === v ? 0 : v,
          w = le("number" !== typeof b ? b : ce(b, L)),
          _ = m === P ? I : P,
          x = e.rects.popper,
          k = e.elements[g ? _ : m],
          S = ue(i(k) ? k : k.contextElement || p(e.elements.popper), l, d, a),
          M = f(e.elements.reference),
          T = J({
            reference: M,
            element: x,
            strategy: "absolute",
            placement: o,
          }),
          C = se(Object.assign({}, x, T)),
          N = m === P ? C : M,
          j = {
            top: S.top - N.top + w.top,
            bottom: N.bottom - S.bottom + w.bottom,
            left: S.left - N.left + w.left,
            right: N.right - S.right + w.right,
          },
          A = e.modifiersData.offset;
        if (m === P && A) {
          var R = A[o];
          Object.keys(j).forEach(function (e) {
            var t = [E, O].indexOf(e) >= 0 ? 1 : -1,
              n = [D, O].indexOf(e) >= 0 ? "y" : "x";
            j[e] += R[n] * t;
          });
        }
        return j;
      }
      function fe(e, t, n) {
        return a(e, u(t, n));
      }
      const he = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            i = n.mainAxis,
            o = void 0 === i || i,
            s = n.altAxis,
            l = void 0 !== s && s,
            c = n.boundary,
            d = n.rootBoundary,
            f = n.altBoundary,
            h = n.padding,
            m = n.tether,
            p = void 0 === m || m,
            y = n.tetherOffset,
            g = void 0 === y ? 0 : y,
            v = de(t, {
              boundary: c,
              rootBoundary: d,
              padding: h,
              altBoundary: f,
            }),
            b = Z(t.placement),
            _ = G(t.placement),
            x = !_,
            k = B(b),
            S = "x" === k ? "y" : "x",
            M = t.modifiersData.popperOffsets,
            N = t.rects.reference,
            L = t.rects.popper,
            A =
              "function" === typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            Y =
              "number" === typeof A
                ? { mainAxis: A, altAxis: A }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
            H = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            P = { x: 0, y: 0 };
          if (M) {
            if (o) {
              var I,
                R = "y" === k ? D : C,
                F = "y" === k ? O : E,
                W = "y" === k ? "height" : "width",
                q = M[k],
                V = q + v[R],
                z = q - v[F],
                U = p ? -L[W] / 2 : 0,
                $ = _ === j ? N[W] : L[W],
                J = _ === j ? -L[W] : -N[W],
                X = t.elements.arrow,
                Q = p && X ? w(X) : { width: 0, height: 0 },
                K = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                ee = K[R],
                te = K[F],
                ne = fe(0, N[W], Q[W]),
                re = x
                  ? N[W] / 2 - U - ne - ee - Y.mainAxis
                  : $ - ne - ee - Y.mainAxis,
                ie = x
                  ? -N[W] / 2 + U + ne + te + Y.mainAxis
                  : J + ne + te + Y.mainAxis,
                oe = t.elements.arrow && T(t.elements.arrow),
                se = oe
                  ? "y" === k
                    ? oe.clientTop || 0
                    : oe.clientLeft || 0
                  : 0,
                ae = null != (I = null == H ? void 0 : H[k]) ? I : 0,
                ue = q + ie - ae,
                le = fe(p ? u(V, q + re - ae - se) : V, q, p ? a(z, ue) : z);
              (M[k] = le), (P[k] = le - q);
            }
            if (l) {
              var ce,
                he = "x" === k ? D : C,
                me = "x" === k ? O : E,
                pe = M[S],
                ye = "y" === S ? "height" : "width",
                ge = pe + v[he],
                ve = pe - v[me],
                be = -1 !== [D, C].indexOf(b),
                we = null != (ce = null == H ? void 0 : H[S]) ? ce : 0,
                _e = be ? ge : pe - N[ye] - L[ye] - we + Y.altAxis,
                xe = be ? pe + N[ye] + L[ye] - we - Y.altAxis : ve,
                ke =
                  p && be
                    ? (function (e, t, n) {
                        var r = fe(e, t, n);
                        return r > n ? n : r;
                      })(_e, pe, xe)
                    : fe(p ? _e : ge, pe, p ? xe : ve);
              (M[S] = ke), (P[S] = ke - pe);
            }
            t.modifiersData[r] = P;
          }
        },
        requiresIfExists: ["offset"],
      };
      var me = function (e, t) {
        return le(
          "number" !==
            typeof (e =
              "function" === typeof e
                ? e(Object.assign({}, t.rects, { placement: t.placement }))
                : e)
            ? e
            : ce(e, L)
        );
      };
      const pe = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            i = e.options,
            o = n.elements.arrow,
            s = n.modifiersData.popperOffsets,
            a = Z(n.placement),
            u = B(a),
            l = [C, E].indexOf(a) >= 0 ? "height" : "width";
          if (o && s) {
            var c = me(i.padding, n),
              d = w(o),
              f = "y" === u ? D : C,
              h = "y" === u ? O : E,
              m =
                n.rects.reference[l] +
                n.rects.reference[u] -
                s[u] -
                n.rects.popper[l],
              p = s[u] - n.rects.reference[u],
              y = T(o),
              g = y
                ? "y" === u
                  ? y.clientHeight || 0
                  : y.clientWidth || 0
                : 0,
              v = m / 2 - p / 2,
              b = c[f],
              _ = g - d[l] - c[h],
              x = g / 2 - d[l] / 2 + v,
              k = fe(b, x, _),
              S = u;
            n.modifiersData[r] =
              (((t = {})[S] = k), (t.centerOffset = k - x), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" !== typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            oe(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function ye(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function ge(e) {
        return [D, E, O, C].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ve = U({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  n = e.instance,
                  i = e.options,
                  o = i.scroll,
                  s = void 0 === o || o,
                  a = i.resize,
                  u = void 0 === a || a,
                  l = r(t.elements.popper),
                  c = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper
                  );
                return (
                  s &&
                    c.forEach(function (e) {
                      e.addEventListener("scroll", n.update, $);
                    }),
                  u && l.addEventListener("resize", n.update, $),
                  function () {
                    s &&
                      c.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, $);
                      }),
                      u && l.removeEventListener("resize", n.update, $);
                  }
                );
              },
              data: {},
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = J({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  i = void 0 === r || r,
                  o = n.adaptive,
                  s = void 0 === o || o,
                  a = n.roundOffsets,
                  u = void 0 === a || a,
                  l = {
                    placement: Z(t.placement),
                    variation: G(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: i,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    Q(
                      Object.assign({}, l, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: s,
                        roundOffsets: u,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      Q(
                        Object.assign({}, l, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: u,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            K,
            ee,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var i = n.mainAxis,
                      o = void 0 === i || i,
                      s = n.altAxis,
                      a = void 0 === s || s,
                      u = n.fallbackPlacements,
                      l = n.padding,
                      c = n.boundary,
                      d = n.rootBoundary,
                      f = n.altBoundary,
                      h = n.flipVariations,
                      m = void 0 === h || h,
                      p = n.allowedAutoPlacements,
                      y = t.options.placement,
                      g = Z(y),
                      v =
                        u ||
                        (g === y || !m
                          ? [ne(y)]
                          : (function (e) {
                              if (Z(e) === N) return [];
                              var t = ne(e);
                              return [ie(e), t, ie(t)];
                            })(y)),
                      b = [y].concat(v).reduce(function (e, n) {
                        return e.concat(
                          Z(n) === N
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  r = n.placement,
                                  i = n.boundary,
                                  o = n.rootBoundary,
                                  s = n.padding,
                                  a = n.flipVariations,
                                  u = n.allowedAutoPlacements,
                                  l = void 0 === u ? F : u,
                                  c = G(r),
                                  d = c
                                    ? a
                                      ? R
                                      : R.filter(function (e) {
                                          return G(e) === c;
                                        })
                                    : L,
                                  f = d.filter(function (e) {
                                    return l.indexOf(e) >= 0;
                                  });
                                0 === f.length && (f = d);
                                var h = f.reduce(function (t, n) {
                                  return (
                                    (t[n] = de(e, {
                                      placement: n,
                                      boundary: i,
                                      rootBoundary: o,
                                      padding: s,
                                    })[Z(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(h).sort(function (e, t) {
                                  return h[e] - h[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: c,
                                rootBoundary: d,
                                padding: l,
                                flipVariations: m,
                                allowedAutoPlacements: p,
                              })
                            : n
                        );
                      }, []),
                      w = t.rects.reference,
                      _ = t.rects.popper,
                      x = new Map(),
                      k = !0,
                      S = b[0],
                      M = 0;
                    M < b.length;
                    M++
                  ) {
                    var T = b[M],
                      A = Z(T),
                      Y = G(T) === j,
                      H = [D, O].indexOf(A) >= 0,
                      P = H ? "width" : "height",
                      I = de(t, {
                        placement: T,
                        boundary: c,
                        rootBoundary: d,
                        altBoundary: f,
                        padding: l,
                      }),
                      W = H ? (Y ? E : C) : Y ? O : D;
                    w[P] > _[P] && (W = ne(W));
                    var q = ne(W),
                      V = [];
                    if (
                      (o && V.push(I[A] <= 0),
                      a && V.push(I[W] <= 0, I[q] <= 0),
                      V.every(function (e) {
                        return e;
                      }))
                    ) {
                      (S = T), (k = !1);
                      break;
                    }
                    x.set(T, V);
                  }
                  if (k)
                    for (
                      var z = function (e) {
                          var t = b.find(function (t) {
                            var n = x.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (S = t), "break";
                        },
                        U = m ? 3 : 1;
                      U > 0;
                      U--
                    ) {
                      if ("break" === z(U)) break;
                    }
                  t.placement !== S &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = S),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            he,
            pe,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  i = t.rects.popper,
                  o = t.modifiersData.preventOverflow,
                  s = de(t, { elementContext: "reference" }),
                  a = de(t, { altBoundary: !0 }),
                  u = ye(s, r),
                  l = ye(a, i, o),
                  c = ge(u),
                  d = ge(l);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: u,
                  popperEscapeOffsets: l,
                  isReferenceHidden: c,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": c,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
          ],
        }),
        be = "tippy-box",
        we = "tippy-content",
        _e = "tippy-backdrop",
        xe = "tippy-arrow",
        ke = "tippy-svg-arrow",
        Se = { passive: !0, capture: !0 },
        Me = function () {
          return document.body;
        };
      function Te(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function De(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function Oe(e, t) {
        return "function" === typeof e ? e.apply(void 0, t) : e;
      }
      function Ee(e, t) {
        return 0 === t
          ? e
          : function (r) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(r);
                }, t));
            };
        var n;
      }
      function Ce(e) {
        return [].concat(e);
      }
      function Ne(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Le(e) {
        return e.split("-")[0];
      }
      function je(e) {
        return [].slice.call(e);
      }
      function Ae(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function Ye() {
        return document.createElement("div");
      }
      function He(e) {
        return ["Element", "Fragment"].some(function (t) {
          return De(e, t);
        });
      }
      function Pe(e) {
        return De(e, "MouseEvent");
      }
      function Ie(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function Re(e) {
        return He(e)
          ? [e]
          : (function (e) {
              return De(e, "NodeList");
            })(e)
          ? je(e)
          : Array.isArray(e)
          ? e
          : je(document.querySelectorAll(e));
      }
      function Fe(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function We(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function qe(e) {
        var t,
          n = Ce(e)[0];
        return null != n && null != (t = n.ownerDocument) && t.body
          ? n.ownerDocument
          : document;
      }
      function Ve(e, t, n) {
        var r = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[r](t, n);
        });
      }
      function ze(e, t) {
        for (var n = t; n; ) {
          var r;
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (r = n.getRootNode())
              ? void 0
              : r.host;
        }
        return !1;
      }
      var Ue = { isTouch: !1 },
        $e = 0;
      function Ze() {
        Ue.isTouch ||
          ((Ue.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Ge));
      }
      function Ge() {
        var e = performance.now();
        e - $e < 20 &&
          ((Ue.isTouch = !1), document.removeEventListener("mousemove", Ge)),
          ($e = e);
      }
      function Be() {
        var e = document.activeElement;
        if (Ie(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var Je =
        !!("undefined" !== typeof window && "undefined" !== typeof document) &&
        !!window.msCrypto;
      var Xe = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        Qe = Object.assign(
          {
            appendTo: Me,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          Xe,
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        Ke = Object.keys(Qe);
      function et(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r,
            i = n.name,
            o = n.defaultValue;
          i && (t[i] = void 0 !== e[i] ? e[i] : null != (r = Qe[i]) ? r : o);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function tt(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: Oe(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(et(Object.assign({}, Qe, { plugins: t })))
                    : Ke
                ).reduce(function (t, n) {
                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!r) return t;
                  if ("content" === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (i) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, Qe.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      var nt = function () {
        return "innerHTML";
      };
      function rt(e, t) {
        e[nt()] = t;
      }
      function it(e) {
        var t = Ye();
        return (
          !0 === e
            ? (t.className = xe)
            : ((t.className = ke), He(e) ? t.appendChild(e) : rt(t, e)),
          t
        );
      }
      function ot(e, t) {
        He(t.content)
          ? (rt(e, ""), e.appendChild(t.content))
          : "function" !== typeof t.content &&
            (t.allowHTML ? rt(e, t.content) : (e.textContent = t.content));
      }
      function st(e) {
        var t = e.firstElementChild,
          n = je(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(we);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(xe) || e.classList.contains(ke);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(_e);
          }),
        };
      }
      function at(e) {
        var t = Ye(),
          n = Ye();
        (n.className = be),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var r = Ye();
        function i(n, r) {
          var i = st(t),
            o = i.box,
            s = i.content,
            a = i.arrow;
          r.theme
            ? o.setAttribute("data-theme", r.theme)
            : o.removeAttribute("data-theme"),
            "string" === typeof r.animation
              ? o.setAttribute("data-animation", r.animation)
              : o.removeAttribute("data-animation"),
            r.inertia
              ? o.setAttribute("data-inertia", "")
              : o.removeAttribute("data-inertia"),
            (o.style.maxWidth =
              "number" === typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
            r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"),
            (n.content === r.content && n.allowHTML === r.allowHTML) ||
              ot(s, e.props),
            r.arrow
              ? a
                ? n.arrow !== r.arrow &&
                  (o.removeChild(a), o.appendChild(it(r.arrow)))
                : o.appendChild(it(r.arrow))
              : a && o.removeChild(a);
        }
        return (
          (r.className = we),
          r.setAttribute("data-state", "hidden"),
          ot(r, e.props),
          t.appendChild(n),
          n.appendChild(r),
          i(e.props, e.props),
          { popper: t, onUpdate: i }
        );
      }
      at.$$tippy = !0;
      var ut = 1,
        lt = [],
        ct = [];
      function dt(e, t) {
        var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = tt(e, Object.assign({}, Qe, et(Ae(t)))),
          d = !1,
          f = !1,
          h = !1,
          m = !1,
          p = [],
          y = Ee(Z, c.interactiveDebounce),
          g = ut++,
          v = (l = c.plugins).filter(function (e, t) {
            return l.indexOf(e) === t;
          }),
          b = {
            id: g,
            reference: e,
            popper: Ye(),
            popperInstance: null,
            props: c,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: v,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(i);
            },
            setProps: function (t) {
              0;
              if (b.state.isDestroyed) return;
              j("onBeforeUpdate", [b, t]), U();
              var n = b.props,
                r = tt(
                  e,
                  Object.assign({}, n, Ae(t), { ignoreAttributes: !0 })
                );
              (b.props = r),
                z(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (H(), (y = Ee(Z, r.interactiveDebounce)));
              n.triggerTarget && !r.triggerTarget
                ? Ce(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : r.triggerTarget && e.removeAttribute("aria-expanded");
              Y(), L(), x && x(n, r);
              b.popperInstance &&
                (X(),
                K().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              j("onAfterUpdate", [b, t]);
            },
            setContent: function (e) {
              b.setProps({ content: e });
            },
            show: function () {
              0;
              var e = b.state.isVisible,
                t = b.state.isDestroyed,
                n = !b.state.isEnabled,
                r = Ue.isTouch && !b.props.touch,
                i = Te(b.props.duration, 0, Qe.duration);
              if (e || t || n || r) return;
              if (O().hasAttribute("disabled")) return;
              if ((j("onShow", [b], !1), !1 === b.props.onShow(b))) return;
              (b.state.isVisible = !0), D() && (_.style.visibility = "visible");
              L(), F(), b.state.isMounted || (_.style.transition = "none");
              if (D()) {
                var o = C();
                Fe([o.box, o.content], 0);
              }
              (a = function () {
                var e;
                if (b.state.isVisible && !m) {
                  if (
                    ((m = !0),
                    _.offsetHeight,
                    (_.style.transition = b.props.moveTransition),
                    D() && b.props.animation)
                  ) {
                    var t = C(),
                      n = t.box,
                      r = t.content;
                    Fe([n, r], i), We([n, r], "visible");
                  }
                  A(),
                    Y(),
                    Ne(ct, b),
                    null == (e = b.popperInstance) || e.forceUpdate(),
                    j("onMount", [b]),
                    b.props.animation &&
                      D() &&
                      (function (e, t) {
                        q(e, t);
                      })(i, function () {
                        (b.state.isShown = !0), j("onShown", [b]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = b.props.appendTo,
                    n = O();
                  e =
                    (b.props.interactive && t === Me) || "parent" === t
                      ? n.parentNode
                      : Oe(t, [n]);
                  e.contains(_) || e.appendChild(_);
                  (b.state.isMounted = !0), X(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !b.state.isVisible,
                t = b.state.isDestroyed,
                n = !b.state.isEnabled,
                r = Te(b.props.duration, 1, Qe.duration);
              if (e || t || n) return;
              if ((j("onHide", [b], !1), !1 === b.props.onHide(b))) return;
              (b.state.isVisible = !1),
                (b.state.isShown = !1),
                (m = !1),
                (d = !1),
                D() && (_.style.visibility = "hidden");
              if ((H(), W(), L(!0), D())) {
                var i = C(),
                  o = i.box,
                  s = i.content;
                b.props.animation && (Fe([o, s], r), We([o, s], "hidden"));
              }
              A(),
                Y(),
                b.props.animation
                  ? D() &&
                    (function (e, t) {
                      q(e, function () {
                        !b.state.isVisible &&
                          _.parentNode &&
                          _.parentNode.contains(_) &&
                          t();
                      });
                    })(r, b.unmount)
                  : b.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              E().addEventListener("mousemove", y), Ne(lt, y), y(e);
            },
            enable: function () {
              b.state.isEnabled = !0;
            },
            disable: function () {
              b.hide(), (b.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              b.state.isVisible && b.hide();
              if (!b.state.isMounted) return;
              Q(),
                K().forEach(function (e) {
                  e._tippy.unmount();
                }),
                _.parentNode && _.parentNode.removeChild(_);
              (ct = ct.filter(function (e) {
                return e !== b;
              })),
                (b.state.isMounted = !1),
                j("onHidden", [b]);
            },
            destroy: function () {
              0;
              if (b.state.isDestroyed) return;
              b.clearDelayTimeouts(),
                b.unmount(),
                U(),
                delete e._tippy,
                (b.state.isDestroyed = !0),
                j("onDestroy", [b]);
            },
          };
        if (!c.render) return b;
        var w = c.render(b),
          _ = w.popper,
          x = w.onUpdate;
        _.setAttribute("data-tippy-root", ""),
          (_.id = "tippy-" + b.id),
          (b.popper = _),
          (e._tippy = b),
          (_._tippy = b);
        var k = v.map(function (e) {
            return e.fn(b);
          }),
          S = e.hasAttribute("aria-expanded");
        return (
          z(),
          Y(),
          L(),
          j("onCreate", [b]),
          c.showOnCreate && ee(),
          _.addEventListener("mouseenter", function () {
            b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
          }),
          _.addEventListener("mouseleave", function () {
            b.props.interactive &&
              b.props.trigger.indexOf("mouseenter") >= 0 &&
              E().addEventListener("mousemove", y);
          }),
          b
        );
        function M() {
          var e = b.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function T() {
          return "hold" === M()[0];
        }
        function D() {
          var e;
          return !(null == (e = b.props.render) || !e.$$tippy);
        }
        function O() {
          return u || e;
        }
        function E() {
          var e = O().parentNode;
          return e ? qe(e) : document;
        }
        function C() {
          return st(_);
        }
        function N(e) {
          return (b.state.isMounted && !b.state.isVisible) ||
            Ue.isTouch ||
            (o && "focus" === o.type)
            ? 0
            : Te(b.props.delay, e ? 0 : 1, Qe.delay);
        }
        function L(e) {
          void 0 === e && (e = !1),
            (_.style.pointerEvents = b.props.interactive && !e ? "" : "none"),
            (_.style.zIndex = "" + b.props.zIndex);
        }
        function j(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          k.forEach(function (n) {
            n[e] && n[e].apply(n, t);
          }),
          n) && (r = b.props)[e].apply(r, t);
        }
        function A() {
          var t = b.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              r = _.id;
            Ce(b.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (b.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var i = t && t.replace(r, "").trim();
                i ? e.setAttribute(n, i) : e.removeAttribute(n);
              }
            });
          }
        }
        function Y() {
          !S &&
            b.props.aria.expanded &&
            Ce(b.props.triggerTarget || e).forEach(function (e) {
              b.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    b.state.isVisible && e === O() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function H() {
          E().removeEventListener("mousemove", y),
            (lt = lt.filter(function (e) {
              return e !== y;
            }));
        }
        function P(t) {
          if (!Ue.isTouch || (!h && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!b.props.interactive || !ze(_, n)) {
              if (
                Ce(b.props.triggerTarget || e).some(function (e) {
                  return ze(e, n);
                })
              ) {
                if (Ue.isTouch) return;
                if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                  return;
              } else j("onClickOutside", [b, t]);
              !0 === b.props.hideOnClick &&
                (b.clearDelayTimeouts(),
                b.hide(),
                (f = !0),
                setTimeout(function () {
                  f = !1;
                }),
                b.state.isMounted || W());
            }
          }
        }
        function I() {
          h = !0;
        }
        function R() {
          h = !1;
        }
        function F() {
          var e = E();
          e.addEventListener("mousedown", P, !0),
            e.addEventListener("touchend", P, Se),
            e.addEventListener("touchstart", R, Se),
            e.addEventListener("touchmove", I, Se);
        }
        function W() {
          var e = E();
          e.removeEventListener("mousedown", P, !0),
            e.removeEventListener("touchend", P, Se),
            e.removeEventListener("touchstart", R, Se),
            e.removeEventListener("touchmove", I, Se);
        }
        function q(e, t) {
          var n = C().box;
          function r(e) {
            e.target === n && (Ve(n, "remove", r), t());
          }
          if (0 === e) return t();
          Ve(n, "remove", s), Ve(n, "add", r), (s = r);
        }
        function V(t, n, r) {
          void 0 === r && (r = !1),
            Ce(b.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                p.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function z() {
          var e;
          T() &&
            (V("touchstart", $, { passive: !0 }),
            V("touchend", G, { passive: !0 })),
            ((e = b.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
              function (e) {
                if ("manual" !== e)
                  switch ((V(e, $), e)) {
                    case "mouseenter":
                      V("mouseleave", G);
                      break;
                    case "focus":
                      V(Je ? "focusout" : "blur", B);
                      break;
                    case "focusin":
                      V("focusout", B);
                  }
              }
            );
        }
        function U() {
          p.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              i = e.options;
            t.removeEventListener(n, r, i);
          }),
            (p = []);
        }
        function $(e) {
          var t,
            n = !1;
          if (b.state.isEnabled && !J(e) && !f) {
            var r = "focus" === (null == (t = o) ? void 0 : t.type);
            (o = e),
              (u = e.currentTarget),
              Y(),
              !b.state.isVisible &&
                Pe(e) &&
                lt.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (b.props.trigger.indexOf("mouseenter") < 0 || d) &&
              !1 !== b.props.hideOnClick &&
              b.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (d = !n),
              n && !r && te(e);
          }
        }
        function Z(e) {
          var t = e.target,
            n = O().contains(t) || _.contains(t);
          if ("mousemove" !== e.type || !n) {
            var r = K()
              .concat(_)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: c,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  i = e.popperState,
                  o = e.props.interactiveBorder,
                  s = Le(i.placement),
                  a = i.modifiersData.offset;
                if (!a) return !0;
                var u = "bottom" === s ? a.top.y : 0,
                  l = "top" === s ? a.bottom.y : 0,
                  c = "right" === s ? a.left.x : 0,
                  d = "left" === s ? a.right.x : 0,
                  f = t.top - r + u > o,
                  h = r - t.bottom - l > o,
                  m = t.left - n + c > o,
                  p = n - t.right - d > o;
                return f || h || m || p;
              });
            })(r, e) && (H(), te(e));
          }
        }
        function G(e) {
          J(e) ||
            (b.props.trigger.indexOf("click") >= 0 && d) ||
            (b.props.interactive ? b.hideWithInteractivity(e) : te(e));
        }
        function B(e) {
          (b.props.trigger.indexOf("focusin") < 0 && e.target !== O()) ||
            (b.props.interactive &&
              e.relatedTarget &&
              _.contains(e.relatedTarget)) ||
            te(e);
        }
        function J(e) {
          return !!Ue.isTouch && T() !== e.type.indexOf("touch") >= 0;
        }
        function X() {
          Q();
          var t = b.props,
            n = t.popperOptions,
            r = t.placement,
            i = t.offset,
            o = t.getReferenceClientRect,
            s = t.moveTransition,
            u = D() ? st(_).arrow : null,
            l = o
              ? {
                  getBoundingClientRect: o,
                  contextElement: o.contextElement || O(),
                }
              : e,
            c = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (D()) {
                  var n = C().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? n.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? n.setAttribute("data-" + e, "")
                        : n.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            d = [
              { name: "offset", options: { offset: i } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !s } },
              c,
            ];
          D() &&
            u &&
            d.push({ name: "arrow", options: { element: u, padding: 3 } }),
            d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
            (b.popperInstance = ve(
              l,
              _,
              Object.assign({}, n, {
                placement: r,
                onFirstUpdate: a,
                modifiers: d,
              })
            ));
        }
        function Q() {
          b.popperInstance &&
            (b.popperInstance.destroy(), (b.popperInstance = null));
        }
        function K() {
          return je(_.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          b.clearDelayTimeouts(), e && j("onTrigger", [b, e]), F();
          var t = N(!0),
            r = M(),
            i = r[0],
            o = r[1];
          Ue.isTouch && "hold" === i && o && (t = o),
            t
              ? (n = setTimeout(function () {
                  b.show();
                }, t))
              : b.show();
        }
        function te(e) {
          if (
            (b.clearDelayTimeouts(),
            j("onUntrigger", [b, e]),
            b.state.isVisible)
          ) {
            if (
              !(
                b.props.trigger.indexOf("mouseenter") >= 0 &&
                b.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                d
              )
            ) {
              var t = N(!1);
              t
                ? (r = setTimeout(function () {
                    b.state.isVisible && b.hide();
                  }, t))
                : (i = requestAnimationFrame(function () {
                    b.hide();
                  }));
            }
          } else W();
        }
      }
      function ft(e, t) {
        void 0 === t && (t = {});
        var n = Qe.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Ze, Se),
          window.addEventListener("blur", Be);
        var r = Object.assign({}, t, { plugins: n }),
          i = Re(e).reduce(function (e, t) {
            var n = t && dt(t, r);
            return n && e.push(n), e;
          }, []);
        return He(e) ? i[0] : i;
      }
      (ft.defaultProps = Qe),
        (ft.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Qe[t] = e[t];
          });
        }),
        (ft.currentInput = Ue);
      Object.assign({}, K, {
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
        },
      });
      ft.setDefaultProps({ render: at });
      const ht = ft;
    },
    7126: (e, t, n) => {
      "use strict";
      n.d(t, { ou: () => tr, kI: () => Qt, Xp: () => Xt, Zr: () => de });
      class r extends Error {}
      class i extends r {
        constructor(e) {
          super(`Invalid DateTime: ${e.toMessage()}`);
        }
      }
      class o extends r {
        constructor(e) {
          super(`Invalid Interval: ${e.toMessage()}`);
        }
      }
      class s extends r {
        constructor(e) {
          super(`Invalid Duration: ${e.toMessage()}`);
        }
      }
      class a extends r {}
      class u extends r {
        constructor(e) {
          super(`Invalid unit ${e}`);
        }
      }
      class l extends r {}
      class c extends r {
        constructor() {
          super("Zone is an abstract class");
        }
      }
      const d = "numeric",
        f = "short",
        h = "long",
        m = { year: d, month: d, day: d },
        p = { year: d, month: f, day: d },
        y = { year: d, month: f, day: d, weekday: f },
        g = { year: d, month: h, day: d },
        v = { year: d, month: h, day: d, weekday: h },
        b = { hour: d, minute: d },
        w = { hour: d, minute: d, second: d },
        _ = { hour: d, minute: d, second: d, timeZoneName: f },
        x = { hour: d, minute: d, second: d, timeZoneName: h },
        k = { hour: d, minute: d, hourCycle: "h23" },
        S = { hour: d, minute: d, second: d, hourCycle: "h23" },
        M = {
          hour: d,
          minute: d,
          second: d,
          hourCycle: "h23",
          timeZoneName: f,
        },
        T = {
          hour: d,
          minute: d,
          second: d,
          hourCycle: "h23",
          timeZoneName: h,
        },
        D = { year: d, month: d, day: d, hour: d, minute: d },
        O = { year: d, month: d, day: d, hour: d, minute: d, second: d },
        E = { year: d, month: f, day: d, hour: d, minute: d },
        C = { year: d, month: f, day: d, hour: d, minute: d, second: d },
        N = { year: d, month: f, day: d, weekday: f, hour: d, minute: d },
        L = { year: d, month: h, day: d, hour: d, minute: d, timeZoneName: f },
        j = {
          year: d,
          month: h,
          day: d,
          hour: d,
          minute: d,
          second: d,
          timeZoneName: f,
        },
        A = {
          year: d,
          month: h,
          day: d,
          weekday: h,
          hour: d,
          minute: d,
          timeZoneName: h,
        },
        Y = {
          year: d,
          month: h,
          day: d,
          weekday: h,
          hour: d,
          minute: d,
          second: d,
          timeZoneName: h,
        };
      class H {
        get type() {
          throw new c();
        }
        get name() {
          throw new c();
        }
        get ianaName() {
          return this.name;
        }
        get isUniversal() {
          throw new c();
        }
        offsetName(e, t) {
          throw new c();
        }
        formatOffset(e, t) {
          throw new c();
        }
        offset(e) {
          throw new c();
        }
        equals(e) {
          throw new c();
        }
        get isValid() {
          throw new c();
        }
      }
      let P = null;
      class I extends H {
        static get instance() {
          return null === P && (P = new I()), P;
        }
        get type() {
          return "system";
        }
        get name() {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        get isUniversal() {
          return !1;
        }
        offsetName(e, { format: t, locale: n }) {
          return Ce(e, t, n);
        }
        formatOffset(e, t) {
          return Ae(this.offset(e), t);
        }
        offset(e) {
          return -new Date(e).getTimezoneOffset();
        }
        equals(e) {
          return "system" === e.type;
        }
        get isValid() {
          return !0;
        }
      }
      let R = {};
      const F = {
        year: 0,
        month: 1,
        day: 2,
        era: 3,
        hour: 4,
        minute: 5,
        second: 6,
      };
      let W = {};
      class q extends H {
        static create(e) {
          return W[e] || (W[e] = new q(e)), W[e];
        }
        static resetCache() {
          (W = {}), (R = {});
        }
        static isValidSpecifier(e) {
          return this.isValidZone(e);
        }
        static isValidZone(e) {
          if (!e) return !1;
          try {
            return (
              new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0
            );
          } catch (t) {
            return !1;
          }
        }
        constructor(e) {
          super(), (this.zoneName = e), (this.valid = q.isValidZone(e));
        }
        get type() {
          return "iana";
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return !1;
        }
        offsetName(e, { format: t, locale: n }) {
          return Ce(e, t, n, this.name);
        }
        formatOffset(e, t) {
          return Ae(this.offset(e), t);
        }
        offset(e) {
          const t = new Date(e);
          if (isNaN(t)) return NaN;
          const n =
            ((r = this.name),
            R[r] ||
              (R[r] = new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: r,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                era: "short",
              })),
            R[r]);
          var r;
          let [i, o, s, a, u, l, c] = n.formatToParts
            ? (function (e, t) {
                const n = e.formatToParts(t),
                  r = [];
                for (let i = 0; i < n.length; i++) {
                  const { type: e, value: t } = n[i],
                    o = F[e];
                  "era" === e ? (r[o] = t) : fe(o) || (r[o] = parseInt(t, 10));
                }
                return r;
              })(n, t)
            : (function (e, t) {
                const n = e.format(t).replace(/\u200E/g, ""),
                  r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),
                  [, i, o, s, a, u, l, c] = r;
                return [s, i, o, a, u, l, c];
              })(n, t);
          "BC" === a && (i = 1 - Math.abs(i));
          let d = +t;
          const f = d % 1e3;
          return (
            (d -= f >= 0 ? f : 1e3 + f),
            (De({
              year: i,
              month: o,
              day: s,
              hour: 24 === u ? 0 : u,
              minute: l,
              second: c,
              millisecond: 0,
            }) -
              d) /
              6e4
          );
        }
        equals(e) {
          return "iana" === e.type && e.name === this.name;
        }
        get isValid() {
          return this.valid;
        }
      }
      let V = {};
      let z = {};
      function U(e, t = {}) {
        const n = JSON.stringify([e, t]);
        let r = z[n];
        return r || ((r = new Intl.DateTimeFormat(e, t)), (z[n] = r)), r;
      }
      let $ = {};
      let Z = {};
      let G = null;
      function B(e, t, n, r, i) {
        const o = e.listingMode(n);
        return "error" === o ? null : "en" === o ? r(t) : i(t);
      }
      class J {
        constructor(e, t, n) {
          (this.padTo = n.padTo || 0), (this.floor = n.floor || !1);
          const { padTo: r, floor: i, ...o } = n;
          if (!t || Object.keys(o).length > 0) {
            const t = { useGrouping: !1, ...n };
            n.padTo > 0 && (t.minimumIntegerDigits = n.padTo),
              (this.inf = (function (e, t = {}) {
                const n = JSON.stringify([e, t]);
                let r = $[n];
                return r || ((r = new Intl.NumberFormat(e, t)), ($[n] = r)), r;
              })(e, t));
          }
        }
        format(e) {
          if (this.inf) {
            const t = this.floor ? Math.floor(e) : e;
            return this.inf.format(t);
          }
          return be(this.floor ? Math.floor(e) : ke(e, 3), this.padTo);
        }
      }
      class X {
        constructor(e, t, n) {
          let r;
          if (
            ((this.opts = n), (this.originalZone = void 0), this.opts.timeZone)
          )
            this.dt = e;
          else if ("fixed" === e.zone.type) {
            const t = (e.offset / 60) * -1,
              n = t >= 0 ? `Etc/GMT+${t}` : `Etc/GMT${t}`;
            0 !== e.offset && q.create(n).valid
              ? ((r = n), (this.dt = e))
              : ((r = "UTC"),
                (this.dt =
                  0 === e.offset
                    ? e
                    : e.setZone("UTC").plus({ minutes: e.offset })),
                (this.originalZone = e.zone));
          } else
            "system" === e.zone.type
              ? (this.dt = e)
              : "iana" === e.zone.type
              ? ((this.dt = e), (r = e.zone.name))
              : ((r = "UTC"),
                (this.dt = e.setZone("UTC").plus({ minutes: e.offset })),
                (this.originalZone = e.zone));
          const i = { ...this.opts };
          (i.timeZone = i.timeZone || r), (this.dtf = U(t, i));
        }
        format() {
          return this.originalZone
            ? this.formatToParts()
                .map(({ value: e }) => e)
                .join("")
            : this.dtf.format(this.dt.toJSDate());
        }
        formatToParts() {
          const e = this.dtf.formatToParts(this.dt.toJSDate());
          return this.originalZone
            ? e.map((e) => {
                if ("timeZoneName" === e.type) {
                  const t = this.originalZone.offsetName(this.dt.ts, {
                    locale: this.dt.locale,
                    format: this.opts.timeZoneName,
                  });
                  return { ...e, value: t };
                }
                return e;
              })
            : e;
        }
        resolvedOptions() {
          return this.dtf.resolvedOptions();
        }
      }
      class Q {
        constructor(e, t, n) {
          (this.opts = { style: "long", ...n }),
            !t &&
              pe() &&
              (this.rtf = (function (e, t = {}) {
                const { base: n, ...r } = t,
                  i = JSON.stringify([e, r]);
                let o = Z[i];
                return (
                  o || ((o = new Intl.RelativeTimeFormat(e, t)), (Z[i] = o)), o
                );
              })(e, n));
        }
        format(e, t) {
          return this.rtf
            ? this.rtf.format(e, t)
            : (function (e, t, n = "always", r = !1) {
                const i = {
                    years: ["year", "yr."],
                    quarters: ["quarter", "qtr."],
                    months: ["month", "mo."],
                    weeks: ["week", "wk."],
                    days: ["day", "day", "days"],
                    hours: ["hour", "hr."],
                    minutes: ["minute", "min."],
                    seconds: ["second", "sec."],
                  },
                  o = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                if ("auto" === n && o) {
                  const n = "days" === e;
                  switch (t) {
                    case 1:
                      return n ? "tomorrow" : `next ${i[e][0]}`;
                    case -1:
                      return n ? "yesterday" : `last ${i[e][0]}`;
                    case 0:
                      return n ? "today" : `this ${i[e][0]}`;
                  }
                }
                const s = Object.is(t, -0) || t < 0,
                  a = Math.abs(t),
                  u = 1 === a,
                  l = i[e],
                  c = r ? (u ? l[1] : l[2] || l[1]) : u ? i[e][0] : e;
                return s ? `${a} ${c} ago` : `in ${a} ${c}`;
              })(t, e, this.opts.numeric, "long" !== this.opts.style);
        }
        formatToParts(e, t) {
          return this.rtf ? this.rtf.formatToParts(e, t) : [];
        }
      }
      class K {
        static fromOpts(e) {
          return K.create(
            e.locale,
            e.numberingSystem,
            e.outputCalendar,
            e.defaultToEN
          );
        }
        static create(e, t, n, r = !1) {
          const i = e || de.defaultLocale,
            o =
              i ||
              (r
                ? "en-US"
                : G ||
                  ((G = new Intl.DateTimeFormat().resolvedOptions().locale),
                  G)),
            s = t || de.defaultNumberingSystem,
            a = n || de.defaultOutputCalendar;
          return new K(o, s, a, i);
        }
        static resetCache() {
          (G = null), (z = {}), ($ = {}), (Z = {});
        }
        static fromObject({
          locale: e,
          numberingSystem: t,
          outputCalendar: n,
        } = {}) {
          return K.create(e, t, n);
        }
        constructor(e, t, n, r) {
          const [i, o, s] = (function (e) {
            const t = e.indexOf("-x-");
            -1 !== t && (e = e.substring(0, t));
            const n = e.indexOf("-u-");
            if (-1 === n) return [e];
            {
              let t, i;
              try {
                (t = U(e).resolvedOptions()), (i = e);
              } catch (r) {
                const o = e.substring(0, n);
                (t = U(o).resolvedOptions()), (i = o);
              }
              const { numberingSystem: o, calendar: s } = t;
              return [i, o, s];
            }
          })(e);
          (this.locale = i),
            (this.numberingSystem = t || o || null),
            (this.outputCalendar = n || s || null),
            (this.intl = (function (e, t, n) {
              return n || t
                ? (e.includes("-u-") || (e += "-u"),
                  n && (e += `-ca-${n}`),
                  t && (e += `-nu-${t}`),
                  e)
                : e;
            })(this.locale, this.numberingSystem, this.outputCalendar)),
            (this.weekdaysCache = { format: {}, standalone: {} }),
            (this.monthsCache = { format: {}, standalone: {} }),
            (this.meridiemCache = null),
            (this.eraCache = {}),
            (this.specifiedLocale = r),
            (this.fastNumbersCached = null);
        }
        get fastNumbers() {
          var e;
          return (
            null == this.fastNumbersCached &&
              (this.fastNumbersCached =
                (!(e = this).numberingSystem || "latn" === e.numberingSystem) &&
                ("latn" === e.numberingSystem ||
                  !e.locale ||
                  e.locale.startsWith("en") ||
                  "latn" ===
                    new Intl.DateTimeFormat(e.intl).resolvedOptions()
                      .numberingSystem)),
            this.fastNumbersCached
          );
        }
        listingMode() {
          const e = this.isEnglish(),
            t =
              (null === this.numberingSystem ||
                "latn" === this.numberingSystem) &&
              (null === this.outputCalendar ||
                "gregory" === this.outputCalendar);
          return e && t ? "en" : "intl";
        }
        clone(e) {
          return e && 0 !== Object.getOwnPropertyNames(e).length
            ? K.create(
                e.locale || this.specifiedLocale,
                e.numberingSystem || this.numberingSystem,
                e.outputCalendar || this.outputCalendar,
                e.defaultToEN || !1
              )
            : this;
        }
        redefaultToEN(e = {}) {
          return this.clone({ ...e, defaultToEN: !0 });
        }
        redefaultToSystem(e = {}) {
          return this.clone({ ...e, defaultToEN: !1 });
        }
        months(e, t = !1, n = !0) {
          return B(this, e, n, Re, () => {
            const n = t ? { month: e, day: "numeric" } : { month: e },
              r = t ? "format" : "standalone";
            return (
              this.monthsCache[r][e] ||
                (this.monthsCache[r][e] = (function (e) {
                  const t = [];
                  for (let n = 1; n <= 12; n++) {
                    const r = tr.utc(2016, n, 1);
                    t.push(e(r));
                  }
                  return t;
                })((e) => this.extract(e, n, "month"))),
              this.monthsCache[r][e]
            );
          });
        }
        weekdays(e, t = !1, n = !0) {
          return B(this, e, n, Ve, () => {
            const n = t
                ? { weekday: e, year: "numeric", month: "long", day: "numeric" }
                : { weekday: e },
              r = t ? "format" : "standalone";
            return (
              this.weekdaysCache[r][e] ||
                (this.weekdaysCache[r][e] = (function (e) {
                  const t = [];
                  for (let n = 1; n <= 7; n++) {
                    const r = tr.utc(2016, 11, 13 + n);
                    t.push(e(r));
                  }
                  return t;
                })((e) => this.extract(e, n, "weekday"))),
              this.weekdaysCache[r][e]
            );
          });
        }
        meridiems(e = !0) {
          return B(
            this,
            void 0,
            e,
            () => ze,
            () => {
              if (!this.meridiemCache) {
                const e = { hour: "numeric", hourCycle: "h12" };
                this.meridiemCache = [
                  tr.utc(2016, 11, 13, 9),
                  tr.utc(2016, 11, 13, 19),
                ].map((t) => this.extract(t, e, "dayperiod"));
              }
              return this.meridiemCache;
            }
          );
        }
        eras(e, t = !0) {
          return B(this, e, t, Ge, () => {
            const t = { era: e };
            return (
              this.eraCache[e] ||
                (this.eraCache[e] = [tr.utc(-40, 1, 1), tr.utc(2017, 1, 1)].map(
                  (e) => this.extract(e, t, "era")
                )),
              this.eraCache[e]
            );
          });
        }
        extract(e, t, n) {
          const r = this.dtFormatter(e, t)
            .formatToParts()
            .find((e) => e.type.toLowerCase() === n);
          return r ? r.value : null;
        }
        numberFormatter(e = {}) {
          return new J(this.intl, e.forceSimple || this.fastNumbers, e);
        }
        dtFormatter(e, t = {}) {
          return new X(e, this.intl, t);
        }
        relFormatter(e = {}) {
          return new Q(this.intl, this.isEnglish(), e);
        }
        listFormatter(e = {}) {
          return (function (e, t = {}) {
            const n = JSON.stringify([e, t]);
            let r = V[n];
            return r || ((r = new Intl.ListFormat(e, t)), (V[n] = r)), r;
          })(this.intl, e);
        }
        isEnglish() {
          return (
            "en" === this.locale ||
            "en-us" === this.locale.toLowerCase() ||
            new Intl.DateTimeFormat(this.intl)
              .resolvedOptions()
              .locale.startsWith("en-us")
          );
        }
        equals(e) {
          return (
            this.locale === e.locale &&
            this.numberingSystem === e.numberingSystem &&
            this.outputCalendar === e.outputCalendar
          );
        }
      }
      let ee = null;
      class te extends H {
        static get utcInstance() {
          return null === ee && (ee = new te(0)), ee;
        }
        static instance(e) {
          return 0 === e ? te.utcInstance : new te(e);
        }
        static parseSpecifier(e) {
          if (e) {
            const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (t) return new te(Ne(t[1], t[2]));
          }
          return null;
        }
        constructor(e) {
          super(), (this.fixed = e);
        }
        get type() {
          return "fixed";
        }
        get name() {
          return 0 === this.fixed ? "UTC" : `UTC${Ae(this.fixed, "narrow")}`;
        }
        get ianaName() {
          return 0 === this.fixed
            ? "Etc/UTC"
            : `Etc/GMT${Ae(-this.fixed, "narrow")}`;
        }
        offsetName() {
          return this.name;
        }
        formatOffset(e, t) {
          return Ae(this.fixed, t);
        }
        get isUniversal() {
          return !0;
        }
        offset() {
          return this.fixed;
        }
        equals(e) {
          return "fixed" === e.type && e.fixed === this.fixed;
        }
        get isValid() {
          return !0;
        }
      }
      class ne extends H {
        constructor(e) {
          super(), (this.zoneName = e);
        }
        get type() {
          return "invalid";
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return !1;
        }
        offsetName() {
          return null;
        }
        formatOffset() {
          return "";
        }
        offset() {
          return NaN;
        }
        equals() {
          return !1;
        }
        get isValid() {
          return !1;
        }
      }
      function re(e, t) {
        if (fe(e) || null === e) return t;
        if (e instanceof H) return e;
        if ("string" === typeof e) {
          const n = e.toLowerCase();
          return "default" === n
            ? t
            : "local" === n || "system" === n
            ? I.instance
            : "utc" === n || "gmt" === n
            ? te.utcInstance
            : te.parseSpecifier(n) || q.create(e);
        }
        return he(e)
          ? te.instance(e)
          : "object" === typeof e && e.offset && "number" === typeof e.offset
          ? e
          : new ne(e);
      }
      let ie,
        oe = () => Date.now(),
        se = "system",
        ae = null,
        ue = null,
        le = null,
        ce = 60;
      class de {
        static get now() {
          return oe;
        }
        static set now(e) {
          oe = e;
        }
        static set defaultZone(e) {
          se = e;
        }
        static get defaultZone() {
          return re(se, I.instance);
        }
        static get defaultLocale() {
          return ae;
        }
        static set defaultLocale(e) {
          ae = e;
        }
        static get defaultNumberingSystem() {
          return ue;
        }
        static set defaultNumberingSystem(e) {
          ue = e;
        }
        static get defaultOutputCalendar() {
          return le;
        }
        static set defaultOutputCalendar(e) {
          le = e;
        }
        static get twoDigitCutoffYear() {
          return ce;
        }
        static set twoDigitCutoffYear(e) {
          ce = e % 100;
        }
        static get throwOnInvalid() {
          return ie;
        }
        static set throwOnInvalid(e) {
          ie = e;
        }
        static resetCaches() {
          K.resetCache(), q.resetCache();
        }
      }
      function fe(e) {
        return "undefined" === typeof e;
      }
      function he(e) {
        return "number" === typeof e;
      }
      function me(e) {
        return "number" === typeof e && e % 1 === 0;
      }
      function pe() {
        try {
          return "undefined" !== typeof Intl && !!Intl.RelativeTimeFormat;
        } catch (e) {
          return !1;
        }
      }
      function ye(e, t, n) {
        if (0 !== e.length)
          return e.reduce((e, r) => {
            const i = [t(r), r];
            return e && n(e[0], i[0]) === e[0] ? e : i;
          }, null)[1];
      }
      function ge(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function ve(e, t, n) {
        return me(e) && e >= t && e <= n;
      }
      function be(e, t = 2) {
        let n;
        return (
          (n =
            e < 0
              ? "-" + ("" + -e).padStart(t, "0")
              : ("" + e).padStart(t, "0")),
          n
        );
      }
      function we(e) {
        return fe(e) || null === e || "" === e ? void 0 : parseInt(e, 10);
      }
      function _e(e) {
        return fe(e) || null === e || "" === e ? void 0 : parseFloat(e);
      }
      function xe(e) {
        if (!fe(e) && null !== e && "" !== e) {
          const t = 1e3 * parseFloat("0." + e);
          return Math.floor(t);
        }
      }
      function ke(e, t, n = !1) {
        const r = 10 ** t;
        return (n ? Math.trunc : Math.round)(e * r) / r;
      }
      function Se(e) {
        return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
      }
      function Me(e) {
        return Se(e) ? 366 : 365;
      }
      function Te(e, t) {
        const n =
          (function (e, t) {
            return e - t * Math.floor(e / t);
          })(t - 1, 12) + 1;
        return 2 === n
          ? Se(e + (t - n) / 12)
            ? 29
            : 28
          : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
      }
      function De(e) {
        let t = Date.UTC(
          e.year,
          e.month - 1,
          e.day,
          e.hour,
          e.minute,
          e.second,
          e.millisecond
        );
        return (
          e.year < 100 &&
            e.year >= 0 &&
            ((t = new Date(t)), t.setUTCFullYear(e.year, e.month - 1, e.day)),
          +t
        );
      }
      function Oe(e) {
        const t =
            (e +
              Math.floor(e / 4) -
              Math.floor(e / 100) +
              Math.floor(e / 400)) %
            7,
          n = e - 1,
          r =
            (n +
              Math.floor(n / 4) -
              Math.floor(n / 100) +
              Math.floor(n / 400)) %
            7;
        return 4 === t || 3 === r ? 53 : 52;
      }
      function Ee(e) {
        return e > 99 ? e : e > de.twoDigitCutoffYear ? 1900 + e : 2e3 + e;
      }
      function Ce(e, t, n, r = null) {
        const i = new Date(e),
          o = {
            hourCycle: "h23",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          };
        r && (o.timeZone = r);
        const s = { timeZoneName: t, ...o },
          a = new Intl.DateTimeFormat(n, s)
            .formatToParts(i)
            .find((e) => "timezonename" === e.type.toLowerCase());
        return a ? a.value : null;
      }
      function Ne(e, t) {
        let n = parseInt(e, 10);
        Number.isNaN(n) && (n = 0);
        const r = parseInt(t, 10) || 0;
        return 60 * n + (n < 0 || Object.is(n, -0) ? -r : r);
      }
      function Le(e) {
        const t = Number(e);
        if ("boolean" === typeof e || "" === e || Number.isNaN(t))
          throw new l(`Invalid unit value ${e}`);
        return t;
      }
      function je(e, t) {
        const n = {};
        for (const r in e)
          if (ge(e, r)) {
            const i = e[r];
            if (void 0 === i || null === i) continue;
            n[t(r)] = Le(i);
          }
        return n;
      }
      function Ae(e, t) {
        const n = Math.trunc(Math.abs(e / 60)),
          r = Math.trunc(Math.abs(e % 60)),
          i = e >= 0 ? "+" : "-";
        switch (t) {
          case "short":
            return `${i}${be(n, 2)}:${be(r, 2)}`;
          case "narrow":
            return `${i}${n}${r > 0 ? `:${r}` : ""}`;
          case "techie":
            return `${i}${be(n, 2)}${be(r, 2)}`;
          default:
            throw new RangeError(
              `Value format ${t} is out of range for property format`
            );
        }
      }
      function Ye(e) {
        return (function (e, t) {
          return t.reduce((t, n) => ((t[n] = e[n]), t), {});
        })(e, ["hour", "minute", "second", "millisecond"]);
      }
      const He = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        Pe = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        Ie = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function Re(e) {
        switch (e) {
          case "narrow":
            return [...Ie];
          case "short":
            return [...Pe];
          case "long":
            return [...He];
          case "numeric":
            return [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ];
          case "2-digit":
            return [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
            ];
          default:
            return null;
        }
      }
      const Fe = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        We = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        qe = ["M", "T", "W", "T", "F", "S", "S"];
      function Ve(e) {
        switch (e) {
          case "narrow":
            return [...qe];
          case "short":
            return [...We];
          case "long":
            return [...Fe];
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      const ze = ["AM", "PM"],
        Ue = ["Before Christ", "Anno Domini"],
        $e = ["BC", "AD"],
        Ze = ["B", "A"];
      function Ge(e) {
        switch (e) {
          case "narrow":
            return [...Ze];
          case "short":
            return [...$e];
          case "long":
            return [...Ue];
          default:
            return null;
        }
      }
      function Be(e, t) {
        let n = "";
        for (const r of e) r.literal ? (n += r.val) : (n += t(r.val));
        return n;
      }
      const Je = {
        D: m,
        DD: p,
        DDD: g,
        DDDD: v,
        t: b,
        tt: w,
        ttt: _,
        tttt: x,
        T: k,
        TT: S,
        TTT: M,
        TTTT: T,
        f: D,
        ff: E,
        fff: L,
        ffff: A,
        F: O,
        FF: C,
        FFF: j,
        FFFF: Y,
      };
      class Xe {
        static create(e, t = {}) {
          return new Xe(e, t);
        }
        static parseFormat(e) {
          let t = null,
            n = "",
            r = !1;
          const i = [];
          for (let o = 0; o < e.length; o++) {
            const s = e.charAt(o);
            "'" === s
              ? (n.length > 0 &&
                  i.push({ literal: r || /^\s+$/.test(n), val: n }),
                (t = null),
                (n = ""),
                (r = !r))
              : r || s === t
              ? (n += s)
              : (n.length > 0 && i.push({ literal: /^\s+$/.test(n), val: n }),
                (n = s),
                (t = s));
          }
          return (
            n.length > 0 && i.push({ literal: r || /^\s+$/.test(n), val: n }), i
          );
        }
        static macroTokenToFormatOpts(e) {
          return Je[e];
        }
        constructor(e, t) {
          (this.opts = t), (this.loc = e), (this.systemLoc = null);
        }
        formatWithSystemDefault(e, t) {
          null === this.systemLoc &&
            (this.systemLoc = this.loc.redefaultToSystem());
          return this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format();
        }
        formatDateTime(e, t = {}) {
          return this.loc.dtFormatter(e, { ...this.opts, ...t }).format();
        }
        formatDateTimeParts(e, t = {}) {
          return this.loc
            .dtFormatter(e, { ...this.opts, ...t })
            .formatToParts();
        }
        formatInterval(e, t = {}) {
          return this.loc
            .dtFormatter(e.start, { ...this.opts, ...t })
            .dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
        }
        resolvedOptions(e, t = {}) {
          return this.loc
            .dtFormatter(e, { ...this.opts, ...t })
            .resolvedOptions();
        }
        num(e, t = 0) {
          if (this.opts.forceSimple) return be(e, t);
          const n = { ...this.opts };
          return t > 0 && (n.padTo = t), this.loc.numberFormatter(n).format(e);
        }
        formatDateTimeFromString(e, t) {
          const n = "en" === this.loc.listingMode(),
            r =
              this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
            i = (t, n) => this.loc.extract(e, t, n),
            o = (t) =>
              e.isOffsetFixed && 0 === e.offset && t.allowZ
                ? "Z"
                : e.isValid
                ? e.zone.formatOffset(e.ts, t.format)
                : "",
            s = () =>
              n
                ? (function (e) {
                    return ze[e.hour < 12 ? 0 : 1];
                  })(e)
                : i({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
            a = (t, r) =>
              n
                ? (function (e, t) {
                    return Re(t)[e.month - 1];
                  })(e, t)
                : i(r ? { month: t } : { month: t, day: "numeric" }, "month"),
            u = (t, r) =>
              n
                ? (function (e, t) {
                    return Ve(t)[e.weekday - 1];
                  })(e, t)
                : i(
                    r
                      ? { weekday: t }
                      : { weekday: t, month: "long", day: "numeric" },
                    "weekday"
                  ),
            l = (t) => {
              const n = Xe.macroTokenToFormatOpts(t);
              return n ? this.formatWithSystemDefault(e, n) : t;
            },
            c = (t) =>
              n
                ? (function (e, t) {
                    return Ge(t)[e.year < 0 ? 0 : 1];
                  })(e, t)
                : i({ era: t }, "era");
          return Be(Xe.parseFormat(t), (t) => {
            switch (t) {
              case "S":
                return this.num(e.millisecond);
              case "u":
              case "SSS":
                return this.num(e.millisecond, 3);
              case "s":
                return this.num(e.second);
              case "ss":
                return this.num(e.second, 2);
              case "uu":
                return this.num(Math.floor(e.millisecond / 10), 2);
              case "uuu":
                return this.num(Math.floor(e.millisecond / 100));
              case "m":
                return this.num(e.minute);
              case "mm":
                return this.num(e.minute, 2);
              case "h":
                return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
              case "hh":
                return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
              case "H":
                return this.num(e.hour);
              case "HH":
                return this.num(e.hour, 2);
              case "Z":
                return o({ format: "narrow", allowZ: this.opts.allowZ });
              case "ZZ":
                return o({ format: "short", allowZ: this.opts.allowZ });
              case "ZZZ":
                return o({ format: "techie", allowZ: this.opts.allowZ });
              case "ZZZZ":
                return e.zone.offsetName(e.ts, {
                  format: "short",
                  locale: this.loc.locale,
                });
              case "ZZZZZ":
                return e.zone.offsetName(e.ts, {
                  format: "long",
                  locale: this.loc.locale,
                });
              case "z":
                return e.zoneName;
              case "a":
                return s();
              case "d":
                return r ? i({ day: "numeric" }, "day") : this.num(e.day);
              case "dd":
                return r ? i({ day: "2-digit" }, "day") : this.num(e.day, 2);
              case "c":
              case "E":
                return this.num(e.weekday);
              case "ccc":
                return u("short", !0);
              case "cccc":
                return u("long", !0);
              case "ccccc":
                return u("narrow", !0);
              case "EEE":
                return u("short", !1);
              case "EEEE":
                return u("long", !1);
              case "EEEEE":
                return u("narrow", !1);
              case "L":
                return r
                  ? i({ month: "numeric", day: "numeric" }, "month")
                  : this.num(e.month);
              case "LL":
                return r
                  ? i({ month: "2-digit", day: "numeric" }, "month")
                  : this.num(e.month, 2);
              case "LLL":
                return a("short", !0);
              case "LLLL":
                return a("long", !0);
              case "LLLLL":
                return a("narrow", !0);
              case "M":
                return r ? i({ month: "numeric" }, "month") : this.num(e.month);
              case "MM":
                return r
                  ? i({ month: "2-digit" }, "month")
                  : this.num(e.month, 2);
              case "MMM":
                return a("short", !1);
              case "MMMM":
                return a("long", !1);
              case "MMMMM":
                return a("narrow", !1);
              case "y":
                return r ? i({ year: "numeric" }, "year") : this.num(e.year);
              case "yy":
                return r
                  ? i({ year: "2-digit" }, "year")
                  : this.num(e.year.toString().slice(-2), 2);
              case "yyyy":
                return r ? i({ year: "numeric" }, "year") : this.num(e.year, 4);
              case "yyyyyy":
                return r ? i({ year: "numeric" }, "year") : this.num(e.year, 6);
              case "G":
                return c("short");
              case "GG":
                return c("long");
              case "GGGGG":
                return c("narrow");
              case "kk":
                return this.num(e.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return this.num(e.weekYear, 4);
              case "W":
                return this.num(e.weekNumber);
              case "WW":
                return this.num(e.weekNumber, 2);
              case "o":
                return this.num(e.ordinal);
              case "ooo":
                return this.num(e.ordinal, 3);
              case "q":
                return this.num(e.quarter);
              case "qq":
                return this.num(e.quarter, 2);
              case "X":
                return this.num(Math.floor(e.ts / 1e3));
              case "x":
                return this.num(e.ts);
              default:
                return l(t);
            }
          });
        }
        formatDurationFromString(e, t) {
          const n = (e) => {
              switch (e[0]) {
                case "S":
                  return "millisecond";
                case "s":
                  return "second";
                case "m":
                  return "minute";
                case "h":
                  return "hour";
                case "d":
                  return "day";
                case "w":
                  return "week";
                case "M":
                  return "month";
                case "y":
                  return "year";
                default:
                  return null;
              }
            },
            r = Xe.parseFormat(t),
            i = r.reduce(
              (e, { literal: t, val: n }) => (t ? e : e.concat(n)),
              []
            );
          return Be(
            r,
            ((e) => (t) => {
              const r = n(t);
              return r ? this.num(e.get(r), t.length) : t;
            })(e.shiftTo(...i.map(n).filter((e) => e)))
          );
        }
      }
      class Qe {
        constructor(e, t) {
          (this.reason = e), (this.explanation = t);
        }
        toMessage() {
          return this.explanation
            ? `${this.reason}: ${this.explanation}`
            : this.reason;
        }
      }
      const Ke =
        /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
      function et(...e) {
        const t = e.reduce((e, t) => e + t.source, "");
        return RegExp(`^${t}$`);
      }
      function tt(...e) {
        return (t) =>
          e
            .reduce(
              ([e, n, r], i) => {
                const [o, s, a] = i(t, r);
                return [{ ...e, ...o }, s || n, a];
              },
              [{}, null, 1]
            )
            .slice(0, 2);
      }
      function nt(e, ...t) {
        if (null == e) return [null, null];
        for (const [n, r] of t) {
          const t = n.exec(e);
          if (t) return r(t);
        }
        return [null, null];
      }
      function rt(...e) {
        return (t, n) => {
          const r = {};
          let i;
          for (i = 0; i < e.length; i++) r[e[i]] = we(t[n + i]);
          return [r, null, n + i];
        };
      }
      const it = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
        ot = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
        st = RegExp(
          `${ot.source}${`(?:${it.source}?(?:\\[(${Ke.source})\\])?)?`}`
        ),
        at = RegExp(`(?:T${st.source})?`),
        ut = rt("weekYear", "weekNumber", "weekDay"),
        lt = rt("year", "ordinal"),
        ct = RegExp(`${ot.source} ?(?:${it.source}|(${Ke.source}))?`),
        dt = RegExp(`(?: ${ct.source})?`);
      function ft(e, t, n) {
        const r = e[t];
        return fe(r) ? n : we(r);
      }
      function ht(e, t) {
        return [
          {
            hours: ft(e, t, 0),
            minutes: ft(e, t + 1, 0),
            seconds: ft(e, t + 2, 0),
            milliseconds: xe(e[t + 3]),
          },
          null,
          t + 4,
        ];
      }
      function mt(e, t) {
        const n = !e[t] && !e[t + 1],
          r = Ne(e[t + 1], e[t + 2]);
        return [{}, n ? null : te.instance(r), t + 3];
      }
      function pt(e, t) {
        return [{}, e[t] ? q.create(e[t]) : null, t + 1];
      }
      const yt = RegExp(`^T?${ot.source}$`),
        gt =
          /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
      function vt(e) {
        const [t, n, r, i, o, s, a, u, l] = e,
          c = "-" === t[0],
          d = u && "-" === u[0],
          f = (e, t = !1) => (void 0 !== e && (t || (e && c)) ? -e : e);
        return [
          {
            years: f(_e(n)),
            months: f(_e(r)),
            weeks: f(_e(i)),
            days: f(_e(o)),
            hours: f(_e(s)),
            minutes: f(_e(a)),
            seconds: f(_e(u), "-0" === u),
            milliseconds: f(xe(l), d),
          },
        ];
      }
      const bt = {
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
      function wt(e, t, n, r, i, o, s) {
        const a = {
          year: 2 === t.length ? Ee(we(t)) : we(t),
          month: Pe.indexOf(n) + 1,
          day: we(r),
          hour: we(i),
          minute: we(o),
        };
        return (
          s && (a.second = we(s)),
          e &&
            (a.weekday = e.length > 3 ? Fe.indexOf(e) + 1 : We.indexOf(e) + 1),
          a
        );
      }
      const _t =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function xt(e) {
        const [, t, n, r, i, o, s, a, u, l, c, d] = e,
          f = wt(t, i, r, n, o, s, a);
        let h;
        return (h = u ? bt[u] : l ? 0 : Ne(c, d)), [f, new te(h)];
      }
      const kt =
          /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
        St =
          /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
        Mt =
          /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function Tt(e) {
        const [, t, n, r, i, o, s, a] = e;
        return [wt(t, i, r, n, o, s, a), te.utcInstance];
      }
      function Dt(e) {
        const [, t, n, r, i, o, s, a] = e;
        return [wt(t, a, n, r, i, o, s), te.utcInstance];
      }
      const Ot = et(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, at),
        Et = et(/(\d{4})-?W(\d\d)(?:-?(\d))?/, at),
        Ct = et(/(\d{4})-?(\d{3})/, at),
        Nt = et(st),
        Lt = tt(
          function (e, t) {
            return [
              { year: ft(e, t), month: ft(e, t + 1, 1), day: ft(e, t + 2, 1) },
              null,
              t + 3,
            ];
          },
          ht,
          mt,
          pt
        ),
        jt = tt(ut, ht, mt, pt),
        At = tt(lt, ht, mt, pt),
        Yt = tt(ht, mt, pt);
      const Ht = tt(ht);
      const Pt = et(/(\d{4})-(\d\d)-(\d\d)/, dt),
        It = et(ct),
        Rt = tt(ht, mt, pt);
      const Ft = {
          weeks: {
            days: 7,
            hours: 168,
            minutes: 10080,
            seconds: 604800,
            milliseconds: 6048e5,
          },
          days: {
            hours: 24,
            minutes: 1440,
            seconds: 86400,
            milliseconds: 864e5,
          },
          hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
          minutes: { seconds: 60, milliseconds: 6e4 },
          seconds: { milliseconds: 1e3 },
        },
        Wt = {
          years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 8760,
            minutes: 525600,
            seconds: 31536e3,
            milliseconds: 31536e6,
          },
          quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 2184,
            minutes: 131040,
            seconds: 7862400,
            milliseconds: 78624e5,
          },
          months: {
            weeks: 4,
            days: 30,
            hours: 720,
            minutes: 43200,
            seconds: 2592e3,
            milliseconds: 2592e6,
          },
          ...Ft,
        },
        qt = 365.2425,
        Vt = 30.436875,
        zt = {
          years: {
            quarters: 4,
            months: 12,
            weeks: 52.1775,
            days: qt,
            hours: 8765.82,
            minutes: 525949.2,
            seconds: 525949.2 * 60,
            milliseconds: 525949.2 * 60 * 1e3,
          },
          quarters: {
            months: 3,
            weeks: 13.044375,
            days: 91.310625,
            hours: 2191.455,
            minutes: 131487.3,
            seconds: (525949.2 * 60) / 4,
            milliseconds: 7889237999.999999,
          },
          months: {
            weeks: 4.3481250000000005,
            days: Vt,
            hours: 730.485,
            minutes: 43829.1,
            seconds: 2629746,
            milliseconds: 2629746e3,
          },
          ...Ft,
        },
        Ut = [
          "years",
          "quarters",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
        ],
        $t = Ut.slice(0).reverse();
      function Zt(e, t, n = !1) {
        const r = {
          values: n ? t.values : { ...e.values, ...(t.values || {}) },
          loc: e.loc.clone(t.loc),
          conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
          matrix: t.matrix || e.matrix,
        };
        return new Bt(r);
      }
      function Gt(e, t, n, r, i) {
        const o = e[i][n],
          s = t[n] / o,
          a =
            !(Math.sign(s) === Math.sign(r[i])) &&
            0 !== r[i] &&
            Math.abs(s) <= 1
              ? (function (e) {
                  return e < 0 ? Math.floor(e) : Math.ceil(e);
                })(s)
              : Math.trunc(s);
        (r[i] += a), (t[n] -= a * o);
      }
      class Bt {
        constructor(e) {
          const t = "longterm" === e.conversionAccuracy || !1;
          let n = t ? zt : Wt;
          e.matrix && (n = e.matrix),
            (this.values = e.values),
            (this.loc = e.loc || K.create()),
            (this.conversionAccuracy = t ? "longterm" : "casual"),
            (this.invalid = e.invalid || null),
            (this.matrix = n),
            (this.isLuxonDuration = !0);
        }
        static fromMillis(e, t) {
          return Bt.fromObject({ milliseconds: e }, t);
        }
        static fromObject(e, t = {}) {
          if (null == e || "object" !== typeof e)
            throw new l(
              "Duration.fromObject: argument expected to be an object, got " +
                (null === e ? "null" : typeof e)
            );
          return new Bt({
            values: je(e, Bt.normalizeUnit),
            loc: K.fromObject(t),
            conversionAccuracy: t.conversionAccuracy,
            matrix: t.matrix,
          });
        }
        static fromDurationLike(e) {
          if (he(e)) return Bt.fromMillis(e);
          if (Bt.isDuration(e)) return e;
          if ("object" === typeof e) return Bt.fromObject(e);
          throw new l(`Unknown duration argument ${e} of type ${typeof e}`);
        }
        static fromISO(e, t) {
          const [n] = (function (e) {
            return nt(e, [gt, vt]);
          })(e);
          return n
            ? Bt.fromObject(n, t)
            : Bt.invalid(
                "unparsable",
                `the input "${e}" can't be parsed as ISO 8601`
              );
        }
        static fromISOTime(e, t) {
          const [n] = (function (e) {
            return nt(e, [yt, Ht]);
          })(e);
          return n
            ? Bt.fromObject(n, t)
            : Bt.invalid(
                "unparsable",
                `the input "${e}" can't be parsed as ISO 8601`
              );
        }
        static invalid(e, t = null) {
          if (!e)
            throw new l("need to specify a reason the Duration is invalid");
          const n = e instanceof Qe ? e : new Qe(e, t);
          if (de.throwOnInvalid) throw new s(n);
          return new Bt({ invalid: n });
        }
        static normalizeUnit(e) {
          const t = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds",
          }[e ? e.toLowerCase() : e];
          if (!t) throw new u(e);
          return t;
        }
        static isDuration(e) {
          return (e && e.isLuxonDuration) || !1;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        toFormat(e, t = {}) {
          const n = { ...t, floor: !1 !== t.round && !1 !== t.floor };
          return this.isValid
            ? Xe.create(this.loc, n).formatDurationFromString(this, e)
            : "Invalid Duration";
        }
        toHuman(e = {}) {
          const t = Ut.map((t) => {
            const n = this.values[t];
            return fe(n)
              ? null
              : this.loc
                  .numberFormatter({
                    style: "unit",
                    unitDisplay: "long",
                    ...e,
                    unit: t.slice(0, -1),
                  })
                  .format(n);
          }).filter((e) => e);
          return this.loc
            .listFormatter({
              type: "conjunction",
              style: e.listStyle || "narrow",
              ...e,
            })
            .format(t);
        }
        toObject() {
          return this.isValid ? { ...this.values } : {};
        }
        toISO() {
          if (!this.isValid) return null;
          let e = "P";
          return (
            0 !== this.years && (e += this.years + "Y"),
            (0 === this.months && 0 === this.quarters) ||
              (e += this.months + 3 * this.quarters + "M"),
            0 !== this.weeks && (e += this.weeks + "W"),
            0 !== this.days && (e += this.days + "D"),
            (0 === this.hours &&
              0 === this.minutes &&
              0 === this.seconds &&
              0 === this.milliseconds) ||
              (e += "T"),
            0 !== this.hours && (e += this.hours + "H"),
            0 !== this.minutes && (e += this.minutes + "M"),
            (0 === this.seconds && 0 === this.milliseconds) ||
              (e += ke(this.seconds + this.milliseconds / 1e3, 3) + "S"),
            "P" === e && (e += "T0S"),
            e
          );
        }
        toISOTime(e = {}) {
          if (!this.isValid) return null;
          const t = this.toMillis();
          if (t < 0 || t >= 864e5) return null;
          e = {
            suppressMilliseconds: !1,
            suppressSeconds: !1,
            includePrefix: !1,
            format: "extended",
            ...e,
          };
          const n = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
          let r = "basic" === e.format ? "hhmm" : "hh:mm";
          (e.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds) ||
            ((r += "basic" === e.format ? "ss" : ":ss"),
            (e.suppressMilliseconds && 0 === n.milliseconds) || (r += ".SSS"));
          let i = n.toFormat(r);
          return e.includePrefix && (i = "T" + i), i;
        }
        toJSON() {
          return this.toISO();
        }
        toString() {
          return this.toISO();
        }
        toMillis() {
          return this.as("milliseconds");
        }
        valueOf() {
          return this.toMillis();
        }
        plus(e) {
          if (!this.isValid) return this;
          const t = Bt.fromDurationLike(e),
            n = {};
          for (const r of Ut)
            (ge(t.values, r) || ge(this.values, r)) &&
              (n[r] = t.get(r) + this.get(r));
          return Zt(this, { values: n }, !0);
        }
        minus(e) {
          if (!this.isValid) return this;
          const t = Bt.fromDurationLike(e);
          return this.plus(t.negate());
        }
        mapUnits(e) {
          if (!this.isValid) return this;
          const t = {};
          for (const n of Object.keys(this.values))
            t[n] = Le(e(this.values[n], n));
          return Zt(this, { values: t }, !0);
        }
        get(e) {
          return this[Bt.normalizeUnit(e)];
        }
        set(e) {
          if (!this.isValid) return this;
          return Zt(this, {
            values: { ...this.values, ...je(e, Bt.normalizeUnit) },
          });
        }
        reconfigure({
          locale: e,
          numberingSystem: t,
          conversionAccuracy: n,
          matrix: r,
        } = {}) {
          return Zt(this, {
            loc: this.loc.clone({ locale: e, numberingSystem: t }),
            matrix: r,
            conversionAccuracy: n,
          });
        }
        as(e) {
          return this.isValid ? this.shiftTo(e).get(e) : NaN;
        }
        normalize() {
          if (!this.isValid) return this;
          const e = this.toObject();
          return (
            (function (e, t) {
              $t.reduce(
                (n, r) => (fe(t[r]) ? n : (n && Gt(e, t, n, t, r), r)),
                null
              );
            })(this.matrix, e),
            Zt(this, { values: e }, !0)
          );
        }
        rescale() {
          if (!this.isValid) return this;
          return Zt(
            this,
            {
              values: (function (e) {
                const t = {};
                for (const [n, r] of Object.entries(e)) 0 !== r && (t[n] = r);
                return t;
              })(this.normalize().shiftToAll().toObject()),
            },
            !0
          );
        }
        shiftTo(...e) {
          if (!this.isValid) return this;
          if (0 === e.length) return this;
          e = e.map((e) => Bt.normalizeUnit(e));
          const t = {},
            n = {},
            r = this.toObject();
          let i;
          for (const o of Ut)
            if (e.indexOf(o) >= 0) {
              i = o;
              let e = 0;
              for (const t in n) (e += this.matrix[t][o] * n[t]), (n[t] = 0);
              he(r[o]) && (e += r[o]);
              const s = Math.trunc(e);
              (t[o] = s), (n[o] = (1e3 * e - 1e3 * s) / 1e3);
              for (const n in r)
                Ut.indexOf(n) > Ut.indexOf(o) && Gt(this.matrix, r, n, t, o);
            } else he(r[o]) && (n[o] = r[o]);
          for (const o in n)
            0 !== n[o] && (t[i] += o === i ? n[o] : n[o] / this.matrix[i][o]);
          return Zt(this, { values: t }, !0).normalize();
        }
        shiftToAll() {
          return this.isValid
            ? this.shiftTo(
                "years",
                "months",
                "weeks",
                "days",
                "hours",
                "minutes",
                "seconds",
                "milliseconds"
              )
            : this;
        }
        negate() {
          if (!this.isValid) return this;
          const e = {};
          for (const t of Object.keys(this.values))
            e[t] = 0 === this.values[t] ? 0 : -this.values[t];
          return Zt(this, { values: e }, !0);
        }
        get years() {
          return this.isValid ? this.values.years || 0 : NaN;
        }
        get quarters() {
          return this.isValid ? this.values.quarters || 0 : NaN;
        }
        get months() {
          return this.isValid ? this.values.months || 0 : NaN;
        }
        get weeks() {
          return this.isValid ? this.values.weeks || 0 : NaN;
        }
        get days() {
          return this.isValid ? this.values.days || 0 : NaN;
        }
        get hours() {
          return this.isValid ? this.values.hours || 0 : NaN;
        }
        get minutes() {
          return this.isValid ? this.values.minutes || 0 : NaN;
        }
        get seconds() {
          return this.isValid ? this.values.seconds || 0 : NaN;
        }
        get milliseconds() {
          return this.isValid ? this.values.milliseconds || 0 : NaN;
        }
        get isValid() {
          return null === this.invalid;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        equals(e) {
          if (!this.isValid || !e.isValid) return !1;
          if (!this.loc.equals(e.loc)) return !1;
          for (const r of Ut)
            if (
              ((t = this.values[r]),
              (n = e.values[r]),
              !(void 0 === t || 0 === t ? void 0 === n || 0 === n : t === n))
            )
              return !1;
          var t, n;
          return !0;
        }
      }
      const Jt = "Invalid Interval";
      class Xt {
        constructor(e) {
          (this.s = e.start),
            (this.e = e.end),
            (this.invalid = e.invalid || null),
            (this.isLuxonInterval = !0);
        }
        static invalid(e, t = null) {
          if (!e)
            throw new l("need to specify a reason the Interval is invalid");
          const n = e instanceof Qe ? e : new Qe(e, t);
          if (de.throwOnInvalid) throw new o(n);
          return new Xt({ invalid: n });
        }
        static fromDateTimes(e, t) {
          const n = nr(e),
            r = nr(t),
            i = (function (e, t) {
              return e && e.isValid
                ? t && t.isValid
                  ? t < e
                    ? Xt.invalid(
                        "end before start",
                        `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`
                      )
                    : null
                  : Xt.invalid("missing or invalid end")
                : Xt.invalid("missing or invalid start");
            })(n, r);
          return null == i ? new Xt({ start: n, end: r }) : i;
        }
        static after(e, t) {
          const n = Bt.fromDurationLike(t),
            r = nr(e);
          return Xt.fromDateTimes(r, r.plus(n));
        }
        static before(e, t) {
          const n = Bt.fromDurationLike(t),
            r = nr(e);
          return Xt.fromDateTimes(r.minus(n), r);
        }
        static fromISO(e, t) {
          const [n, r] = (e || "").split("/", 2);
          if (n && r) {
            let e, i, o, s;
            try {
              (e = tr.fromISO(n, t)), (i = e.isValid);
            } catch (r) {
              i = !1;
            }
            try {
              (o = tr.fromISO(r, t)), (s = o.isValid);
            } catch (r) {
              s = !1;
            }
            if (i && s) return Xt.fromDateTimes(e, o);
            if (i) {
              const n = Bt.fromISO(r, t);
              if (n.isValid) return Xt.after(e, n);
            } else if (s) {
              const e = Bt.fromISO(n, t);
              if (e.isValid) return Xt.before(o, e);
            }
          }
          return Xt.invalid(
            "unparsable",
            `the input "${e}" can't be parsed as ISO 8601`
          );
        }
        static isInterval(e) {
          return (e && e.isLuxonInterval) || !1;
        }
        get start() {
          return this.isValid ? this.s : null;
        }
        get end() {
          return this.isValid ? this.e : null;
        }
        get isValid() {
          return null === this.invalidReason;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        length(e = "milliseconds") {
          return this.isValid ? this.toDuration(e).get(e) : NaN;
        }
        count(e = "milliseconds") {
          if (!this.isValid) return NaN;
          const t = this.start.startOf(e),
            n = this.end.startOf(e);
          return (
            Math.floor(n.diff(t, e).get(e)) +
            (n.valueOf() !== this.end.valueOf())
          );
        }
        hasSame(e) {
          return (
            !!this.isValid &&
            (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
          );
        }
        isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        }
        isAfter(e) {
          return !!this.isValid && this.s > e;
        }
        isBefore(e) {
          return !!this.isValid && this.e <= e;
        }
        contains(e) {
          return !!this.isValid && this.s <= e && this.e > e;
        }
        set({ start: e, end: t } = {}) {
          return this.isValid
            ? Xt.fromDateTimes(e || this.s, t || this.e)
            : this;
        }
        splitAt(...e) {
          if (!this.isValid) return [];
          const t = e
              .map(nr)
              .filter((e) => this.contains(e))
              .sort(),
            n = [];
          let { s: r } = this,
            i = 0;
          for (; r < this.e; ) {
            const e = t[i] || this.e,
              o = +e > +this.e ? this.e : e;
            n.push(Xt.fromDateTimes(r, o)), (r = o), (i += 1);
          }
          return n;
        }
        splitBy(e) {
          const t = Bt.fromDurationLike(e);
          if (!this.isValid || !t.isValid || 0 === t.as("milliseconds"))
            return [];
          let n,
            { s: r } = this,
            i = 1;
          const o = [];
          for (; r < this.e; ) {
            const e = this.start.plus(t.mapUnits((e) => e * i));
            (n = +e > +this.e ? this.e : e),
              o.push(Xt.fromDateTimes(r, n)),
              (r = n),
              (i += 1);
          }
          return o;
        }
        divideEqually(e) {
          return this.isValid
            ? this.splitBy(this.length() / e).slice(0, e)
            : [];
        }
        overlaps(e) {
          return this.e > e.s && this.s < e.e;
        }
        abutsStart(e) {
          return !!this.isValid && +this.e === +e.s;
        }
        abutsEnd(e) {
          return !!this.isValid && +e.e === +this.s;
        }
        engulfs(e) {
          return !!this.isValid && this.s <= e.s && this.e >= e.e;
        }
        equals(e) {
          return (
            !(!this.isValid || !e.isValid) &&
            this.s.equals(e.s) &&
            this.e.equals(e.e)
          );
        }
        intersection(e) {
          if (!this.isValid) return this;
          const t = this.s > e.s ? this.s : e.s,
            n = this.e < e.e ? this.e : e.e;
          return t >= n ? null : Xt.fromDateTimes(t, n);
        }
        union(e) {
          if (!this.isValid) return this;
          const t = this.s < e.s ? this.s : e.s,
            n = this.e > e.e ? this.e : e.e;
          return Xt.fromDateTimes(t, n);
        }
        static merge(e) {
          const [t, n] = e
            .sort((e, t) => e.s - t.s)
            .reduce(
              ([e, t], n) =>
                t
                  ? t.overlaps(n) || t.abutsStart(n)
                    ? [e, t.union(n)]
                    : [e.concat([t]), n]
                  : [e, n],
              [[], null]
            );
          return n && t.push(n), t;
        }
        static xor(e) {
          let t = null,
            n = 0;
          const r = [],
            i = e.map((e) => [
              { time: e.s, type: "s" },
              { time: e.e, type: "e" },
            ]),
            o = Array.prototype.concat(...i).sort((e, t) => e.time - t.time);
          for (const s of o)
            (n += "s" === s.type ? 1 : -1),
              1 === n
                ? (t = s.time)
                : (t && +t !== +s.time && r.push(Xt.fromDateTimes(t, s.time)),
                  (t = null));
          return Xt.merge(r);
        }
        difference(...e) {
          return Xt.xor([this].concat(e))
            .map((e) => this.intersection(e))
            .filter((e) => e && !e.isEmpty());
        }
        toString() {
          return this.isValid
            ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})`
            : Jt;
        }
        toLocaleString(e = m, t = {}) {
          return this.isValid
            ? Xe.create(this.s.loc.clone(t), e).formatInterval(this)
            : Jt;
        }
        toISO(e) {
          return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Jt;
        }
        toISODate() {
          return this.isValid
            ? `${this.s.toISODate()}/${this.e.toISODate()}`
            : Jt;
        }
        toISOTime(e) {
          return this.isValid
            ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`
            : Jt;
        }
        toFormat(e, { separator: t = " \u2013 " } = {}) {
          return this.isValid
            ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`
            : Jt;
        }
        toDuration(e, t) {
          return this.isValid
            ? this.e.diff(this.s, e, t)
            : Bt.invalid(this.invalidReason);
        }
        mapEndpoints(e) {
          return Xt.fromDateTimes(e(this.s), e(this.e));
        }
      }
      class Qt {
        static hasDST(e = de.defaultZone) {
          const t = tr.now().setZone(e).set({ month: 12 });
          return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
        }
        static isValidIANAZone(e) {
          return q.isValidZone(e);
        }
        static normalizeZone(e) {
          return re(e, de.defaultZone);
        }
        static months(
          e = "long",
          {
            locale: t = null,
            numberingSystem: n = null,
            locObj: r = null,
            outputCalendar: i = "gregory",
          } = {}
        ) {
          return (r || K.create(t, n, i)).months(e);
        }
        static monthsFormat(
          e = "long",
          {
            locale: t = null,
            numberingSystem: n = null,
            locObj: r = null,
            outputCalendar: i = "gregory",
          } = {}
        ) {
          return (r || K.create(t, n, i)).months(e, !0);
        }
        static weekdays(
          e = "long",
          { locale: t = null, numberingSystem: n = null, locObj: r = null } = {}
        ) {
          return (r || K.create(t, n, null)).weekdays(e);
        }
        static weekdaysFormat(
          e = "long",
          { locale: t = null, numberingSystem: n = null, locObj: r = null } = {}
        ) {
          return (r || K.create(t, n, null)).weekdays(e, !0);
        }
        static meridiems({ locale: e = null } = {}) {
          return K.create(e).meridiems();
        }
        static eras(e = "short", { locale: t = null } = {}) {
          return K.create(t, null, "gregory").eras(e);
        }
        static features() {
          return { relative: pe() };
        }
      }
      function Kt(e, t) {
        const n = (e) =>
            e.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
          r = n(t) - n(e);
        return Math.floor(Bt.fromMillis(r).as("days"));
      }
      function en(e, t, n, r) {
        let [i, o, s, a] = (function (e, t, n) {
          const r = [
              ["years", (e, t) => t.year - e.year],
              [
                "quarters",
                (e, t) => t.quarter - e.quarter + 4 * (t.year - e.year),
              ],
              ["months", (e, t) => t.month - e.month + 12 * (t.year - e.year)],
              [
                "weeks",
                (e, t) => {
                  const n = Kt(e, t);
                  return (n - (n % 7)) / 7;
                },
              ],
              ["days", Kt],
            ],
            i = {},
            o = e;
          let s, a;
          for (const [u, l] of r)
            n.indexOf(u) >= 0 &&
              ((s = u),
              (i[u] = l(e, t)),
              (a = o.plus(i)),
              a > t ? (i[u]--, (e = o.plus(i))) : (e = a));
          return [e, i, a, s];
        })(e, t, n);
        const u = t - i,
          l = n.filter(
            (e) =>
              ["hours", "minutes", "seconds", "milliseconds"].indexOf(e) >= 0
          );
        0 === l.length &&
          (s < t && (s = i.plus({ [a]: 1 })),
          s !== i && (o[a] = (o[a] || 0) + u / (s - i)));
        const c = Bt.fromObject(o, r);
        return l.length > 0
          ? Bt.fromMillis(u, r)
              .shiftTo(...l)
              .plus(c)
          : c;
      }
      const tn = {
          arab: "[\u0660-\u0669]",
          arabext: "[\u06f0-\u06f9]",
          bali: "[\u1b50-\u1b59]",
          beng: "[\u09e6-\u09ef]",
          deva: "[\u0966-\u096f]",
          fullwide: "[\uff10-\uff19]",
          gujr: "[\u0ae6-\u0aef]",
          hanidec:
            "[\u3007|\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d]",
          khmr: "[\u17e0-\u17e9]",
          knda: "[\u0ce6-\u0cef]",
          laoo: "[\u0ed0-\u0ed9]",
          limb: "[\u1946-\u194f]",
          mlym: "[\u0d66-\u0d6f]",
          mong: "[\u1810-\u1819]",
          mymr: "[\u1040-\u1049]",
          orya: "[\u0b66-\u0b6f]",
          tamldec: "[\u0be6-\u0bef]",
          telu: "[\u0c66-\u0c6f]",
          thai: "[\u0e50-\u0e59]",
          tibt: "[\u0f20-\u0f29]",
          latn: "\\d",
        },
        nn = {
          arab: [1632, 1641],
          arabext: [1776, 1785],
          bali: [6992, 7001],
          beng: [2534, 2543],
          deva: [2406, 2415],
          fullwide: [65296, 65303],
          gujr: [2790, 2799],
          khmr: [6112, 6121],
          knda: [3302, 3311],
          laoo: [3792, 3801],
          limb: [6470, 6479],
          mlym: [3430, 3439],
          mong: [6160, 6169],
          mymr: [4160, 4169],
          orya: [2918, 2927],
          tamldec: [3046, 3055],
          telu: [3174, 3183],
          thai: [3664, 3673],
          tibt: [3872, 3881],
        },
        rn = tn.hanidec.replace(/[\[|\]]/g, "").split("");
      function on({ numberingSystem: e }, t = "") {
        return new RegExp(`${tn[e || "latn"]}${t}`);
      }
      const sn = "missing Intl.DateTimeFormat.formatToParts support";
      function an(e, t = (e) => e) {
        return {
          regex: e,
          deser: ([e]) =>
            t(
              (function (e) {
                let t = parseInt(e, 10);
                if (isNaN(t)) {
                  t = "";
                  for (let n = 0; n < e.length; n++) {
                    const r = e.charCodeAt(n);
                    if (-1 !== e[n].search(tn.hanidec)) t += rn.indexOf(e[n]);
                    else
                      for (const e in nn) {
                        const [n, i] = nn[e];
                        r >= n && r <= i && (t += r - n);
                      }
                  }
                  return parseInt(t, 10);
                }
                return t;
              })(e)
            ),
        };
      }
      const un = `[ ${String.fromCharCode(160)}]`,
        ln = new RegExp(un, "g");
      function cn(e) {
        return e.replace(/\./g, "\\.?").replace(ln, un);
      }
      function dn(e) {
        return e.replace(/\./g, "").replace(ln, " ").toLowerCase();
      }
      function fn(e, t) {
        return null === e
          ? null
          : {
              regex: RegExp(e.map(cn).join("|")),
              deser: ([n]) => e.findIndex((e) => dn(n) === dn(e)) + t,
            };
      }
      function hn(e, t) {
        return { regex: e, deser: ([, e, t]) => Ne(e, t), groups: t };
      }
      function mn(e) {
        return { regex: e, deser: ([e]) => e };
      }
      const pn = {
        year: { "2-digit": "yy", numeric: "yyyyy" },
        month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
        day: { numeric: "d", "2-digit": "dd" },
        weekday: { short: "EEE", long: "EEEE" },
        dayperiod: "a",
        dayPeriod: "a",
        hour: { numeric: "h", "2-digit": "hh" },
        minute: { numeric: "m", "2-digit": "mm" },
        second: { numeric: "s", "2-digit": "ss" },
        timeZoneName: { long: "ZZZZZ", short: "ZZZ" },
      };
      let yn = null;
      function gn(e, t) {
        return Array.prototype.concat(
          ...e.map((e) =>
            (function (e, t) {
              if (e.literal) return e;
              const n = bn(Xe.macroTokenToFormatOpts(e.val), t);
              return null == n || n.includes(void 0) ? e : n;
            })(e, t)
          )
        );
      }
      function vn(e, t, n) {
        const r = gn(Xe.parseFormat(n), e),
          i = r.map((t) =>
            (function (e, t) {
              const n = on(t),
                r = on(t, "{2}"),
                i = on(t, "{3}"),
                o = on(t, "{4}"),
                s = on(t, "{6}"),
                a = on(t, "{1,2}"),
                u = on(t, "{1,3}"),
                l = on(t, "{1,6}"),
                c = on(t, "{1,9}"),
                d = on(t, "{2,4}"),
                f = on(t, "{4,6}"),
                h = (e) => {
                  return {
                    regex: RegExp(
                      ((t = e.val),
                      t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))
                    ),
                    deser: ([e]) => e,
                    literal: !0,
                  };
                  var t;
                },
                m = ((m) => {
                  if (e.literal) return h(m);
                  switch (m.val) {
                    case "G":
                      return fn(t.eras("short", !1), 0);
                    case "GG":
                      return fn(t.eras("long", !1), 0);
                    case "y":
                      return an(l);
                    case "yy":
                    case "kk":
                      return an(d, Ee);
                    case "yyyy":
                    case "kkkk":
                      return an(o);
                    case "yyyyy":
                      return an(f);
                    case "yyyyyy":
                      return an(s);
                    case "M":
                    case "L":
                    case "d":
                    case "H":
                    case "h":
                    case "m":
                    case "q":
                    case "s":
                    case "W":
                      return an(a);
                    case "MM":
                    case "LL":
                    case "dd":
                    case "HH":
                    case "hh":
                    case "mm":
                    case "qq":
                    case "ss":
                    case "WW":
                      return an(r);
                    case "MMM":
                      return fn(t.months("short", !0, !1), 1);
                    case "MMMM":
                      return fn(t.months("long", !0, !1), 1);
                    case "LLL":
                      return fn(t.months("short", !1, !1), 1);
                    case "LLLL":
                      return fn(t.months("long", !1, !1), 1);
                    case "o":
                    case "S":
                      return an(u);
                    case "ooo":
                    case "SSS":
                      return an(i);
                    case "u":
                      return mn(c);
                    case "uu":
                      return mn(a);
                    case "uuu":
                    case "E":
                    case "c":
                      return an(n);
                    case "a":
                      return fn(t.meridiems(), 0);
                    case "EEE":
                      return fn(t.weekdays("short", !1, !1), 1);
                    case "EEEE":
                      return fn(t.weekdays("long", !1, !1), 1);
                    case "ccc":
                      return fn(t.weekdays("short", !0, !1), 1);
                    case "cccc":
                      return fn(t.weekdays("long", !0, !1), 1);
                    case "Z":
                    case "ZZ":
                      return hn(
                        new RegExp(`([+-]${a.source})(?::(${r.source}))?`),
                        2
                      );
                    case "ZZZ":
                      return hn(
                        new RegExp(`([+-]${a.source})(${r.source})?`),
                        2
                      );
                    case "z":
                      return mn(/[a-z_+-/]{1,256}?/i);
                    case " ":
                      return mn(/[^\S\n\r]/);
                    default:
                      return h(m);
                  }
                })(e) || { invalidReason: sn };
              return (m.token = e), m;
            })(t, e)
          ),
          o = i.find((e) => e.invalidReason);
        if (o) return { input: t, tokens: r, invalidReason: o.invalidReason };
        {
          const [e, n] = (function (e) {
              return [
                `^${e
                  .map((e) => e.regex)
                  .reduce((e, t) => `${e}(${t.source})`, "")}$`,
                e,
              ];
            })(i),
            o = RegExp(e, "i"),
            [s, u] = (function (e, t, n) {
              const r = e.match(t);
              if (r) {
                const e = {};
                let t = 1;
                for (const i in n)
                  if (ge(n, i)) {
                    const o = n[i],
                      s = o.groups ? o.groups + 1 : 1;
                    !o.literal &&
                      o.token &&
                      (e[o.token.val[0]] = o.deser(r.slice(t, t + s))),
                      (t += s);
                  }
                return [r, e];
              }
              return [r, {}];
            })(t, o, n),
            [l, c, d] = u
              ? (function (e) {
                  let t,
                    n = null;
                  return (
                    fe(e.z) || (n = q.create(e.z)),
                    fe(e.Z) || (n || (n = new te(e.Z)), (t = e.Z)),
                    fe(e.q) || (e.M = 3 * (e.q - 1) + 1),
                    fe(e.h) ||
                      (e.h < 12 && 1 === e.a
                        ? (e.h += 12)
                        : 12 === e.h && 0 === e.a && (e.h = 0)),
                    0 === e.G && e.y && (e.y = -e.y),
                    fe(e.u) || (e.S = xe(e.u)),
                    [
                      Object.keys(e).reduce((t, n) => {
                        const r = ((e) => {
                          switch (e) {
                            case "S":
                              return "millisecond";
                            case "s":
                              return "second";
                            case "m":
                              return "minute";
                            case "h":
                            case "H":
                              return "hour";
                            case "d":
                              return "day";
                            case "o":
                              return "ordinal";
                            case "L":
                            case "M":
                              return "month";
                            case "y":
                              return "year";
                            case "E":
                            case "c":
                              return "weekday";
                            case "W":
                              return "weekNumber";
                            case "k":
                              return "weekYear";
                            case "q":
                              return "quarter";
                            default:
                              return null;
                          }
                        })(n);
                        return r && (t[r] = e[n]), t;
                      }, {}),
                      n,
                      t,
                    ]
                  );
                })(u)
              : [null, null, void 0];
          if (ge(u, "a") && ge(u, "H"))
            throw new a(
              "Can't include meridiem when specifying 24-hour format"
            );
          return {
            input: t,
            tokens: r,
            regex: o,
            rawMatches: s,
            matches: u,
            result: l,
            zone: c,
            specificOffset: d,
          };
        }
      }
      function bn(e, t) {
        if (!e) return null;
        return Xe.create(t, e)
          .formatDateTimeParts((yn || (yn = tr.fromMillis(1555555555555)), yn))
          .map((t) =>
            (function (e, t) {
              const { type: n, value: r } = e;
              if ("literal" === n) {
                const e = /^\s+$/.test(r);
                return { literal: !e, val: e ? " " : r };
              }
              const i = t[n];
              let o = pn[n];
              if (("object" === typeof o && (o = o[i]), o))
                return { literal: !1, val: o };
            })(t, e)
          );
      }
      const wn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        _n = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function xn(e, t) {
        return new Qe(
          "unit out of range",
          `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
        );
      }
      function kn(e, t, n) {
        const r = new Date(Date.UTC(e, t - 1, n));
        e < 100 && e >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
        const i = r.getUTCDay();
        return 0 === i ? 7 : i;
      }
      function Sn(e, t, n) {
        return n + (Se(e) ? _n : wn)[t - 1];
      }
      function Mn(e, t) {
        const n = Se(e) ? _n : wn,
          r = n.findIndex((e) => e < t);
        return { month: r + 1, day: t - n[r] };
      }
      function Tn(e) {
        const { year: t, month: n, day: r } = e,
          i = Sn(t, n, r),
          o = kn(t, n, r);
        let s,
          a = Math.floor((i - o + 10) / 7);
        return (
          a < 1
            ? ((s = t - 1), (a = Oe(s)))
            : a > Oe(t)
            ? ((s = t + 1), (a = 1))
            : (s = t),
          { weekYear: s, weekNumber: a, weekday: o, ...Ye(e) }
        );
      }
      function Dn(e) {
        const { weekYear: t, weekNumber: n, weekday: r } = e,
          i = kn(t, 1, 4),
          o = Me(t);
        let s,
          a = 7 * n + r - i - 3;
        a < 1
          ? ((s = t - 1), (a += Me(s)))
          : a > o
          ? ((s = t + 1), (a -= Me(t)))
          : (s = t);
        const { month: u, day: l } = Mn(s, a);
        return { year: s, month: u, day: l, ...Ye(e) };
      }
      function On(e) {
        const { year: t, month: n, day: r } = e;
        return { year: t, ordinal: Sn(t, n, r), ...Ye(e) };
      }
      function En(e) {
        const { year: t, ordinal: n } = e,
          { month: r, day: i } = Mn(t, n);
        return { year: t, month: r, day: i, ...Ye(e) };
      }
      function Cn(e) {
        const t = me(e.year),
          n = ve(e.month, 1, 12),
          r = ve(e.day, 1, Te(e.year, e.month));
        return t
          ? n
            ? !r && xn("day", e.day)
            : xn("month", e.month)
          : xn("year", e.year);
      }
      function Nn(e) {
        const { hour: t, minute: n, second: r, millisecond: i } = e,
          o = ve(t, 0, 23) || (24 === t && 0 === n && 0 === r && 0 === i),
          s = ve(n, 0, 59),
          a = ve(r, 0, 59),
          u = ve(i, 0, 999);
        return o
          ? s
            ? a
              ? !u && xn("millisecond", i)
              : xn("second", r)
            : xn("minute", n)
          : xn("hour", t);
      }
      const Ln = "Invalid DateTime",
        jn = 864e13;
      function An(e) {
        return new Qe(
          "unsupported zone",
          `the zone "${e.name}" is not supported`
        );
      }
      function Yn(e) {
        return null === e.weekData && (e.weekData = Tn(e.c)), e.weekData;
      }
      function Hn(e, t) {
        const n = {
          ts: e.ts,
          zone: e.zone,
          c: e.c,
          o: e.o,
          loc: e.loc,
          invalid: e.invalid,
        };
        return new tr({ ...n, ...t, old: n });
      }
      function Pn(e, t, n) {
        let r = e - 60 * t * 1e3;
        const i = n.offset(r);
        if (t === i) return [r, t];
        r -= 60 * (i - t) * 1e3;
        const o = n.offset(r);
        return i === o
          ? [r, i]
          : [e - 60 * Math.min(i, o) * 1e3, Math.max(i, o)];
      }
      function In(e, t) {
        const n = new Date((e += 60 * t * 1e3));
        return {
          year: n.getUTCFullYear(),
          month: n.getUTCMonth() + 1,
          day: n.getUTCDate(),
          hour: n.getUTCHours(),
          minute: n.getUTCMinutes(),
          second: n.getUTCSeconds(),
          millisecond: n.getUTCMilliseconds(),
        };
      }
      function Rn(e, t, n) {
        return Pn(De(e), t, n);
      }
      function Fn(e, t) {
        const n = e.o,
          r = e.c.year + Math.trunc(t.years),
          i = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
          o = {
            ...e.c,
            year: r,
            month: i,
            day:
              Math.min(e.c.day, Te(r, i)) +
              Math.trunc(t.days) +
              7 * Math.trunc(t.weeks),
          },
          s = Bt.fromObject({
            years: t.years - Math.trunc(t.years),
            quarters: t.quarters - Math.trunc(t.quarters),
            months: t.months - Math.trunc(t.months),
            weeks: t.weeks - Math.trunc(t.weeks),
            days: t.days - Math.trunc(t.days),
            hours: t.hours,
            minutes: t.minutes,
            seconds: t.seconds,
            milliseconds: t.milliseconds,
          }).as("milliseconds"),
          a = De(o);
        let [u, l] = Pn(a, n, e.zone);
        return 0 !== s && ((u += s), (l = e.zone.offset(u))), { ts: u, o: l };
      }
      function Wn(e, t, n, r, i, o) {
        const { setZone: s, zone: a } = n;
        if ((e && 0 !== Object.keys(e).length) || t) {
          const r = t || a,
            i = tr.fromObject(e, { ...n, zone: r, specificOffset: o });
          return s ? i : i.setZone(a);
        }
        return tr.invalid(
          new Qe("unparsable", `the input "${i}" can't be parsed as ${r}`)
        );
      }
      function qn(e, t, n = !0) {
        return e.isValid
          ? Xe.create(K.create("en-US"), {
              allowZ: n,
              forceSimple: !0,
            }).formatDateTimeFromString(e, t)
          : null;
      }
      function Vn(e, t) {
        const n = e.c.year > 9999 || e.c.year < 0;
        let r = "";
        return (
          n && e.c.year >= 0 && (r += "+"),
          (r += be(e.c.year, n ? 6 : 4)),
          t
            ? ((r += "-"), (r += be(e.c.month)), (r += "-"), (r += be(e.c.day)))
            : ((r += be(e.c.month)), (r += be(e.c.day))),
          r
        );
      }
      function zn(e, t, n, r, i, o) {
        let s = be(e.c.hour);
        return (
          t
            ? ((s += ":"),
              (s += be(e.c.minute)),
              (0 === e.c.second && n) || (s += ":"))
            : (s += be(e.c.minute)),
          (0 === e.c.second && n) ||
            ((s += be(e.c.second)),
            (0 === e.c.millisecond && r) ||
              ((s += "."), (s += be(e.c.millisecond, 3)))),
          i &&
            (e.isOffsetFixed && 0 === e.offset && !o
              ? (s += "Z")
              : e.o < 0
              ? ((s += "-"),
                (s += be(Math.trunc(-e.o / 60))),
                (s += ":"),
                (s += be(Math.trunc(-e.o % 60))))
              : ((s += "+"),
                (s += be(Math.trunc(e.o / 60))),
                (s += ":"),
                (s += be(Math.trunc(e.o % 60))))),
          o && (s += "[" + e.zone.ianaName + "]"),
          s
        );
      }
      const Un = {
          month: 1,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
        },
        $n = {
          weekNumber: 1,
          weekday: 1,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
        },
        Zn = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
        Gn = [
          "year",
          "month",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ],
        Bn = [
          "weekYear",
          "weekNumber",
          "weekday",
          "hour",
          "minute",
          "second",
          "millisecond",
        ],
        Jn = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function Xn(e) {
        const t = {
          year: "year",
          years: "year",
          month: "month",
          months: "month",
          day: "day",
          days: "day",
          hour: "hour",
          hours: "hour",
          minute: "minute",
          minutes: "minute",
          quarter: "quarter",
          quarters: "quarter",
          second: "second",
          seconds: "second",
          millisecond: "millisecond",
          milliseconds: "millisecond",
          weekday: "weekday",
          weekdays: "weekday",
          weeknumber: "weekNumber",
          weeksnumber: "weekNumber",
          weeknumbers: "weekNumber",
          weekyear: "weekYear",
          weekyears: "weekYear",
          ordinal: "ordinal",
        }[e.toLowerCase()];
        if (!t) throw new u(e);
        return t;
      }
      function Qn(e, t) {
        const n = re(t.zone, de.defaultZone),
          r = K.fromObject(t),
          i = de.now();
        let o, s;
        if (fe(e.year)) o = i;
        else {
          for (const n of Gn) fe(e[n]) && (e[n] = Un[n]);
          const t = Cn(e) || Nn(e);
          if (t) return tr.invalid(t);
          const r = n.offset(i);
          [o, s] = Rn(e, r, n);
        }
        return new tr({ ts: o, zone: n, loc: r, o: s });
      }
      function Kn(e, t, n) {
        const r = !!fe(n.round) || n.round,
          i = (e, i) => {
            e = ke(e, r || n.calendary ? 0 : 2, !0);
            return t.loc.clone(n).relFormatter(n).format(e, i);
          },
          o = (r) =>
            n.calendary
              ? t.hasSame(e, r)
                ? 0
                : t.startOf(r).diff(e.startOf(r), r).get(r)
              : t.diff(e, r).get(r);
        if (n.unit) return i(o(n.unit), n.unit);
        for (const s of n.units) {
          const e = o(s);
          if (Math.abs(e) >= 1) return i(e, s);
        }
        return i(e > t ? -0 : 0, n.units[n.units.length - 1]);
      }
      function er(e) {
        let t,
          n = {};
        return (
          e.length > 0 && "object" === typeof e[e.length - 1]
            ? ((n = e[e.length - 1]),
              (t = Array.from(e).slice(0, e.length - 1)))
            : (t = Array.from(e)),
          [n, t]
        );
      }
      class tr {
        constructor(e) {
          const t = e.zone || de.defaultZone;
          let n =
            e.invalid ||
            (Number.isNaN(e.ts) ? new Qe("invalid input") : null) ||
            (t.isValid ? null : An(t));
          this.ts = fe(e.ts) ? de.now() : e.ts;
          let r = null,
            i = null;
          if (!n) {
            if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
              [r, i] = [e.old.c, e.old.o];
            else {
              const e = t.offset(this.ts);
              (r = In(this.ts, e)),
                (n = Number.isNaN(r.year) ? new Qe("invalid input") : null),
                (r = n ? null : r),
                (i = n ? null : e);
            }
          }
          (this._zone = t),
            (this.loc = e.loc || K.create()),
            (this.invalid = n),
            (this.weekData = null),
            (this.c = r),
            (this.o = i),
            (this.isLuxonDateTime = !0);
        }
        static now() {
          return new tr({});
        }
        static local() {
          const [e, t] = er(arguments),
            [n, r, i, o, s, a, u] = t;
          return Qn(
            {
              year: n,
              month: r,
              day: i,
              hour: o,
              minute: s,
              second: a,
              millisecond: u,
            },
            e
          );
        }
        static utc() {
          const [e, t] = er(arguments),
            [n, r, i, o, s, a, u] = t;
          return (
            (e.zone = te.utcInstance),
            Qn(
              {
                year: n,
                month: r,
                day: i,
                hour: o,
                minute: s,
                second: a,
                millisecond: u,
              },
              e
            )
          );
        }
        static fromJSDate(e, t = {}) {
          const n =
            ((r = e),
            "[object Date]" === Object.prototype.toString.call(r)
              ? e.valueOf()
              : NaN);
          var r;
          if (Number.isNaN(n)) return tr.invalid("invalid input");
          const i = re(t.zone, de.defaultZone);
          return i.isValid
            ? new tr({ ts: n, zone: i, loc: K.fromObject(t) })
            : tr.invalid(An(i));
        }
        static fromMillis(e, t = {}) {
          if (he(e))
            return e < -jn || e > jn
              ? tr.invalid("Timestamp out of range")
              : new tr({
                  ts: e,
                  zone: re(t.zone, de.defaultZone),
                  loc: K.fromObject(t),
                });
          throw new l(
            `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
          );
        }
        static fromSeconds(e, t = {}) {
          if (he(e))
            return new tr({
              ts: 1e3 * e,
              zone: re(t.zone, de.defaultZone),
              loc: K.fromObject(t),
            });
          throw new l("fromSeconds requires a numerical input");
        }
        static fromObject(e, t = {}) {
          e = e || {};
          const n = re(t.zone, de.defaultZone);
          if (!n.isValid) return tr.invalid(An(n));
          const r = de.now(),
            i = fe(t.specificOffset) ? n.offset(r) : t.specificOffset,
            o = je(e, Xn),
            s = !fe(o.ordinal),
            u = !fe(o.year),
            l = !fe(o.month) || !fe(o.day),
            c = u || l,
            d = o.weekYear || o.weekNumber,
            f = K.fromObject(t);
          if ((c || s) && d)
            throw new a(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
            );
          if (l && s) throw new a("Can't mix ordinal dates with month/day");
          const h = d || (o.weekday && !c);
          let m,
            p,
            y = In(r, i);
          h
            ? ((m = Bn), (p = $n), (y = Tn(y)))
            : s
            ? ((m = Jn), (p = Zn), (y = On(y)))
            : ((m = Gn), (p = Un));
          let g = !1;
          for (const a of m) {
            fe(o[a]) ? (o[a] = g ? p[a] : y[a]) : (g = !0);
          }
          const v = h
              ? (function (e) {
                  const t = me(e.weekYear),
                    n = ve(e.weekNumber, 1, Oe(e.weekYear)),
                    r = ve(e.weekday, 1, 7);
                  return t
                    ? n
                      ? !r && xn("weekday", e.weekday)
                      : xn("week", e.week)
                    : xn("weekYear", e.weekYear);
                })(o)
              : s
              ? (function (e) {
                  const t = me(e.year),
                    n = ve(e.ordinal, 1, Me(e.year));
                  return t
                    ? !n && xn("ordinal", e.ordinal)
                    : xn("year", e.year);
                })(o)
              : Cn(o),
            b = v || Nn(o);
          if (b) return tr.invalid(b);
          const w = h ? Dn(o) : s ? En(o) : o,
            [_, x] = Rn(w, i, n),
            k = new tr({ ts: _, zone: n, o: x, loc: f });
          return o.weekday && c && e.weekday !== k.weekday
            ? tr.invalid(
                "mismatched weekday",
                `you can't specify both a weekday of ${
                  o.weekday
                } and a date of ${k.toISO()}`
              )
            : k;
        }
        static fromISO(e, t = {}) {
          const [n, r] = (function (e) {
            return nt(e, [Ot, Lt], [Et, jt], [Ct, At], [Nt, Yt]);
          })(e);
          return Wn(n, r, t, "ISO 8601", e);
        }
        static fromRFC2822(e, t = {}) {
          const [n, r] = (function (e) {
            return nt(
              (function (e) {
                return e
                  .replace(/\([^()]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .trim();
              })(e),
              [_t, xt]
            );
          })(e);
          return Wn(n, r, t, "RFC 2822", e);
        }
        static fromHTTP(e, t = {}) {
          const [n, r] = (function (e) {
            return nt(e, [kt, Tt], [St, Tt], [Mt, Dt]);
          })(e);
          return Wn(n, r, t, "HTTP", t);
        }
        static fromFormat(e, t, n = {}) {
          if (fe(e) || fe(t))
            throw new l("fromFormat requires an input string and a format");
          const { locale: r = null, numberingSystem: i = null } = n,
            o = K.fromOpts({ locale: r, numberingSystem: i, defaultToEN: !0 }),
            [s, a, u, c] = (function (e, t, n) {
              const {
                result: r,
                zone: i,
                specificOffset: o,
                invalidReason: s,
              } = vn(e, t, n);
              return [r, i, o, s];
            })(o, e, t);
          return c ? tr.invalid(c) : Wn(s, a, n, `format ${t}`, e, u);
        }
        static fromString(e, t, n = {}) {
          return tr.fromFormat(e, t, n);
        }
        static fromSQL(e, t = {}) {
          const [n, r] = (function (e) {
            return nt(e, [Pt, Lt], [It, Rt]);
          })(e);
          return Wn(n, r, t, "SQL", e);
        }
        static invalid(e, t = null) {
          if (!e)
            throw new l("need to specify a reason the DateTime is invalid");
          const n = e instanceof Qe ? e : new Qe(e, t);
          if (de.throwOnInvalid) throw new i(n);
          return new tr({ invalid: n });
        }
        static isDateTime(e) {
          return (e && e.isLuxonDateTime) || !1;
        }
        static parseFormatForOpts(e, t = {}) {
          const n = bn(e, K.fromObject(t));
          return n ? n.map((e) => (e ? e.val : null)).join("") : null;
        }
        static expandFormat(e, t = {}) {
          return gn(Xe.parseFormat(e), K.fromObject(t))
            .map((e) => e.val)
            .join("");
        }
        get(e) {
          return this[e];
        }
        get isValid() {
          return null === this.invalid;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        get outputCalendar() {
          return this.isValid ? this.loc.outputCalendar : null;
        }
        get zone() {
          return this._zone;
        }
        get zoneName() {
          return this.isValid ? this.zone.name : null;
        }
        get year() {
          return this.isValid ? this.c.year : NaN;
        }
        get quarter() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        }
        get month() {
          return this.isValid ? this.c.month : NaN;
        }
        get day() {
          return this.isValid ? this.c.day : NaN;
        }
        get hour() {
          return this.isValid ? this.c.hour : NaN;
        }
        get minute() {
          return this.isValid ? this.c.minute : NaN;
        }
        get second() {
          return this.isValid ? this.c.second : NaN;
        }
        get millisecond() {
          return this.isValid ? this.c.millisecond : NaN;
        }
        get weekYear() {
          return this.isValid ? Yn(this).weekYear : NaN;
        }
        get weekNumber() {
          return this.isValid ? Yn(this).weekNumber : NaN;
        }
        get weekday() {
          return this.isValid ? Yn(this).weekday : NaN;
        }
        get ordinal() {
          return this.isValid ? On(this.c).ordinal : NaN;
        }
        get monthShort() {
          return this.isValid
            ? Qt.months("short", { locObj: this.loc })[this.month - 1]
            : null;
        }
        get monthLong() {
          return this.isValid
            ? Qt.months("long", { locObj: this.loc })[this.month - 1]
            : null;
        }
        get weekdayShort() {
          return this.isValid
            ? Qt.weekdays("short", { locObj: this.loc })[this.weekday - 1]
            : null;
        }
        get weekdayLong() {
          return this.isValid
            ? Qt.weekdays("long", { locObj: this.loc })[this.weekday - 1]
            : null;
        }
        get offset() {
          return this.isValid ? +this.o : NaN;
        }
        get offsetNameShort() {
          return this.isValid
            ? this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale,
              })
            : null;
        }
        get offsetNameLong() {
          return this.isValid
            ? this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale,
              })
            : null;
        }
        get isOffsetFixed() {
          return this.isValid ? this.zone.isUniversal : null;
        }
        get isInDST() {
          return (
            !this.isOffsetFixed &&
            (this.offset > this.set({ month: 1, day: 1 }).offset ||
              this.offset > this.set({ month: 5 }).offset)
          );
        }
        get isInLeapYear() {
          return Se(this.year);
        }
        get daysInMonth() {
          return Te(this.year, this.month);
        }
        get daysInYear() {
          return this.isValid ? Me(this.year) : NaN;
        }
        get weeksInWeekYear() {
          return this.isValid ? Oe(this.weekYear) : NaN;
        }
        resolvedLocaleOptions(e = {}) {
          const {
            locale: t,
            numberingSystem: n,
            calendar: r,
          } = Xe.create(this.loc.clone(e), e).resolvedOptions(this);
          return { locale: t, numberingSystem: n, outputCalendar: r };
        }
        toUTC(e = 0, t = {}) {
          return this.setZone(te.instance(e), t);
        }
        toLocal() {
          return this.setZone(de.defaultZone);
        }
        setZone(e, { keepLocalTime: t = !1, keepCalendarTime: n = !1 } = {}) {
          if ((e = re(e, de.defaultZone)).equals(this.zone)) return this;
          if (e.isValid) {
            let r = this.ts;
            if (t || n) {
              const t = e.offset(this.ts),
                n = this.toObject();
              [r] = Rn(n, t, e);
            }
            return Hn(this, { ts: r, zone: e });
          }
          return tr.invalid(An(e));
        }
        reconfigure({ locale: e, numberingSystem: t, outputCalendar: n } = {}) {
          return Hn(this, {
            loc: this.loc.clone({
              locale: e,
              numberingSystem: t,
              outputCalendar: n,
            }),
          });
        }
        setLocale(e) {
          return this.reconfigure({ locale: e });
        }
        set(e) {
          if (!this.isValid) return this;
          const t = je(e, Xn),
            n = !fe(t.weekYear) || !fe(t.weekNumber) || !fe(t.weekday),
            r = !fe(t.ordinal),
            i = !fe(t.year),
            o = !fe(t.month) || !fe(t.day),
            s = i || o,
            u = t.weekYear || t.weekNumber;
          if ((s || r) && u)
            throw new a(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
            );
          if (o && r) throw new a("Can't mix ordinal dates with month/day");
          let l;
          n
            ? (l = Dn({ ...Tn(this.c), ...t }))
            : fe(t.ordinal)
            ? ((l = { ...this.toObject(), ...t }),
              fe(t.day) && (l.day = Math.min(Te(l.year, l.month), l.day)))
            : (l = En({ ...On(this.c), ...t }));
          const [c, d] = Rn(l, this.o, this.zone);
          return Hn(this, { ts: c, o: d });
        }
        plus(e) {
          if (!this.isValid) return this;
          return Hn(this, Fn(this, Bt.fromDurationLike(e)));
        }
        minus(e) {
          if (!this.isValid) return this;
          return Hn(this, Fn(this, Bt.fromDurationLike(e).negate()));
        }
        startOf(e) {
          if (!this.isValid) return this;
          const t = {},
            n = Bt.normalizeUnit(e);
          switch (n) {
            case "years":
              t.month = 1;
            case "quarters":
            case "months":
              t.day = 1;
            case "weeks":
            case "days":
              t.hour = 0;
            case "hours":
              t.minute = 0;
            case "minutes":
              t.second = 0;
            case "seconds":
              t.millisecond = 0;
          }
          if (("weeks" === n && (t.weekday = 1), "quarters" === n)) {
            const e = Math.ceil(this.month / 3);
            t.month = 3 * (e - 1) + 1;
          }
          return this.set(t);
        }
        endOf(e) {
          return this.isValid
            ? this.plus({ [e]: 1 })
                .startOf(e)
                .minus(1)
            : this;
        }
        toFormat(e, t = {}) {
          return this.isValid
            ? Xe.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(
                this,
                e
              )
            : Ln;
        }
        toLocaleString(e = m, t = {}) {
          return this.isValid
            ? Xe.create(this.loc.clone(t), e).formatDateTime(this)
            : Ln;
        }
        toLocaleParts(e = {}) {
          return this.isValid
            ? Xe.create(this.loc.clone(e), e).formatDateTimeParts(this)
            : [];
        }
        toISO({
          format: e = "extended",
          suppressSeconds: t = !1,
          suppressMilliseconds: n = !1,
          includeOffset: r = !0,
          extendedZone: i = !1,
        } = {}) {
          if (!this.isValid) return null;
          const o = "extended" === e;
          let s = Vn(this, o);
          return (s += "T"), (s += zn(this, o, t, n, r, i)), s;
        }
        toISODate({ format: e = "extended" } = {}) {
          return this.isValid ? Vn(this, "extended" === e) : null;
        }
        toISOWeekDate() {
          return qn(this, "kkkk-'W'WW-c");
        }
        toISOTime({
          suppressMilliseconds: e = !1,
          suppressSeconds: t = !1,
          includeOffset: n = !0,
          includePrefix: r = !1,
          extendedZone: i = !1,
          format: o = "extended",
        } = {}) {
          if (!this.isValid) return null;
          return (r ? "T" : "") + zn(this, "extended" === o, t, e, n, i);
        }
        toRFC2822() {
          return qn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
        }
        toHTTP() {
          return qn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }
        toSQLDate() {
          return this.isValid ? Vn(this, !0) : null;
        }
        toSQLTime({
          includeOffset: e = !0,
          includeZone: t = !1,
          includeOffsetSpace: n = !0,
        } = {}) {
          let r = "HH:mm:ss.SSS";
          return (
            (t || e) && (n && (r += " "), t ? (r += "z") : e && (r += "ZZ")),
            qn(this, r, !0)
          );
        }
        toSQL(e = {}) {
          return this.isValid
            ? `${this.toSQLDate()} ${this.toSQLTime(e)}`
            : null;
        }
        toString() {
          return this.isValid ? this.toISO() : Ln;
        }
        valueOf() {
          return this.toMillis();
        }
        toMillis() {
          return this.isValid ? this.ts : NaN;
        }
        toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }
        toUnixInteger() {
          return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        }
        toJSON() {
          return this.toISO();
        }
        toBSON() {
          return this.toJSDate();
        }
        toObject(e = {}) {
          if (!this.isValid) return {};
          const t = { ...this.c };
          return (
            e.includeConfig &&
              ((t.outputCalendar = this.outputCalendar),
              (t.numberingSystem = this.loc.numberingSystem),
              (t.locale = this.loc.locale)),
            t
          );
        }
        toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        }
        diff(e, t = "milliseconds", n = {}) {
          if (!this.isValid || !e.isValid)
            return Bt.invalid("created by diffing an invalid DateTime");
          const r = {
              locale: this.locale,
              numberingSystem: this.numberingSystem,
              ...n,
            },
            i = ((a = t), Array.isArray(a) ? a : [a]).map(Bt.normalizeUnit),
            o = e.valueOf() > this.valueOf(),
            s = en(o ? this : e, o ? e : this, i, r);
          var a;
          return o ? s.negate() : s;
        }
        diffNow(e = "milliseconds", t = {}) {
          return this.diff(tr.now(), e, t);
        }
        until(e) {
          return this.isValid ? Xt.fromDateTimes(this, e) : this;
        }
        hasSame(e, t) {
          if (!this.isValid) return !1;
          const n = e.valueOf(),
            r = this.setZone(e.zone, { keepLocalTime: !0 });
          return r.startOf(t) <= n && n <= r.endOf(t);
        }
        equals(e) {
          return (
            this.isValid &&
            e.isValid &&
            this.valueOf() === e.valueOf() &&
            this.zone.equals(e.zone) &&
            this.loc.equals(e.loc)
          );
        }
        toRelative(e = {}) {
          if (!this.isValid) return null;
          const t = e.base || tr.fromObject({}, { zone: this.zone }),
            n = e.padding ? (this < t ? -e.padding : e.padding) : 0;
          let r = ["years", "months", "days", "hours", "minutes", "seconds"],
            i = e.unit;
          return (
            Array.isArray(e.unit) && ((r = e.unit), (i = void 0)),
            Kn(t, this.plus(n), { ...e, numeric: "always", units: r, unit: i })
          );
        }
        toRelativeCalendar(e = {}) {
          return this.isValid
            ? Kn(e.base || tr.fromObject({}, { zone: this.zone }), this, {
                ...e,
                numeric: "auto",
                units: ["years", "months", "days"],
                calendary: !0,
              })
            : null;
        }
        static min(...e) {
          if (!e.every(tr.isDateTime))
            throw new l("min requires all arguments be DateTimes");
          return ye(e, (e) => e.valueOf(), Math.min);
        }
        static max(...e) {
          if (!e.every(tr.isDateTime))
            throw new l("max requires all arguments be DateTimes");
          return ye(e, (e) => e.valueOf(), Math.max);
        }
        static fromFormatExplain(e, t, n = {}) {
          const { locale: r = null, numberingSystem: i = null } = n;
          return vn(
            K.fromOpts({ locale: r, numberingSystem: i, defaultToEN: !0 }),
            e,
            t
          );
        }
        static fromStringExplain(e, t, n = {}) {
          return tr.fromFormatExplain(e, t, n);
        }
        static get DATE_SHORT() {
          return m;
        }
        static get DATE_MED() {
          return p;
        }
        static get DATE_MED_WITH_WEEKDAY() {
          return y;
        }
        static get DATE_FULL() {
          return g;
        }
        static get DATE_HUGE() {
          return v;
        }
        static get TIME_SIMPLE() {
          return b;
        }
        static get TIME_WITH_SECONDS() {
          return w;
        }
        static get TIME_WITH_SHORT_OFFSET() {
          return _;
        }
        static get TIME_WITH_LONG_OFFSET() {
          return x;
        }
        static get TIME_24_SIMPLE() {
          return k;
        }
        static get TIME_24_WITH_SECONDS() {
          return S;
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
          return M;
        }
        static get TIME_24_WITH_LONG_OFFSET() {
          return T;
        }
        static get DATETIME_SHORT() {
          return D;
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
          return O;
        }
        static get DATETIME_MED() {
          return E;
        }
        static get DATETIME_MED_WITH_SECONDS() {
          return C;
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
          return N;
        }
        static get DATETIME_FULL() {
          return L;
        }
        static get DATETIME_FULL_WITH_SECONDS() {
          return j;
        }
        static get DATETIME_HUGE() {
          return A;
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
          return Y;
        }
      }
      function nr(e) {
        if (tr.isDateTime(e)) return e;
        if (e && e.valueOf && he(e.valueOf())) return tr.fromJSDate(e);
        if (e && "object" === typeof e) return tr.fromObject(e);
        throw new l(`Unknown datetime argument: ${e}, of type ${typeof e}`);
      }
    },
    8658: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"version":"2022g","zones":["Europe/Madrid|CET CEST|-10 -20|0101010101010101010101010101010101010101010|1Ji10 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|62e5","Atlantic/Canary|WET WEST|0 -10|0101010101010101010101010101010101010101010|1Ji10 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|54e4","Europe/Helsinki|EET EEST|-20 -30|0101010101010101010101010101010101010101010|1Ji10 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|12e5"],"links":["Europe/Madrid|Africa/Ceuta","Europe/Madrid|Europe/Berlin","Europe/Madrid|Europe/Copenhagen","Europe/Madrid|Europe/Stockholm","Europe/Madrid|Europe/Vienna","Europe/Madrid|Europe/Zurich"],"countries":["AT|Europe/Vienna","CH|Europe/Zurich","DK|Europe/Berlin Europe/Copenhagen","ES|Europe/Madrid Africa/Ceuta Atlantic/Canary","FI|Europe/Helsinki","SE|Europe/Berlin Europe/Stockholm"]}'
      );
    },
  },
]);
