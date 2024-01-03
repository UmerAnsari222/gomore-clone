/*! For license information please see 3752-03528cf760c21114c51e.chunk.js.LICENSE.txt */
(self.webpackChunkgomore_web = self.webpackChunkgomore_web || []).push([
  [3752],
  {
    9247: (t, e, n) => {
      "use strict";
      n(1546);
      var a = n(9755);
      Gomore.Api.Client = class {
        constructor() {
          const t = Gomore.jsOptions.apiToken;
          t && a.ajaxSetup({ headers: { "X-Access-Token": t } });
        }
        tokenExists() {
          return Gomore.jsOptions.apiToken;
        }
        acceptRental(t) {
          return a.ajax({
            url: "/rest/rental_process/accept",
            type: "PATCH",
            complete: t.callback,
            data: { rental_id: t.rentalId },
          });
        }
        extendRental(t) {
          return a.ajax({
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/rental/${t.rentalId}/extension/price`,
            type: "GET",
            complete: t.callback,
            data: { rental_id: t.rentalId, end_date_time: t.end_date_time },
          });
        }
        cancelRentalRequest(t) {
          return a.ajax({
            url: `/api/v2/rentals/${t.rentalId}/cancel`,
            type: "PATCH",
            data: { message: t.message },
          });
        }
        respondToBooking(t, e) {
          if (!["accept", "reject"].includes(t))
            throw new Error(`Bad action: ${t}`);
          return a.ajax({
            url: `/api/v2/bookings/${e.bookingId}/${t}`,
            type: "PATCH",
            complete: e.complete,
            success: e.success,
            error: e.error,
          });
        }
        rentalAdPeriodPrice(t) {
          return a.ajax({
            url: `/api/v2/rental_ads/${t.rentalAdId}/period_prices`,
            success: t.callback,
            data: { daily_rate: t.price },
          });
        }
        rentalAdsSearch(t) {
          const e = t.callback;
          return (
            delete t.callback,
            a.ajax({
              url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/rental_ads/search`,
              success: e,
              data: t,
            })
          );
        }
        rentalAdsProbe(t) {
          const e = t.callback;
          return (
            delete t.callback,
            a.ajax({
              url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/rental_ads/probe`,
              success: e,
              data: t,
            })
          );
        }
        rejectRental(t) {
          return a.ajax({
            url: `/rest/rentals/${t.rentalId}/reject`,
            type: "POST",
            success: t.callback,
            error: t.error,
            data: {
              redirect_to_calendar: t.redirectToCalendar,
              from: t.from,
              to: t.to,
            },
          });
        }
        emailAvailable(t) {
          return a.ajax({
            url: `/rest/users/check_email_availability?email=${encodeURIComponent(
              t.email
            )}`,
            type: "GET",
            success() {
              t.callback(!0);
            },
            error() {
              t.callback(!1);
            },
          });
        }
        saveAvatar(t) {
          return a.ajax({
            type: "POST",
            url: "/rest/users/avatar",
            data: t.formData,
            processData: !1,
            contentType: !1,
          });
        }
        deleteAvatar(t) {
          return a.ajax({ type: "DELETE", url: "/rest/users/avatar" });
        }
        suppressUserValidationSiteWideAlert() {
          return a.ajax({
            url: "/rest/user_validation/suppress_site_wide_alert",
            type: "DELETE",
          });
        }
        sendStreamMessage(t) {
          return a.ajax({
            type: "POST",
            url: "/rest/streams/add_message",
            data: {
              message: t.message,
              add_flash_confirmation: t.add_flash_confirmation,
              target_type: t.targetType,
              target_id: t.targetId,
            },
            success: t.callback,
          });
        }
        checkApprovalChange(t) {
          return a.ajax({
            type: "POST",
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/users/approval/check`,
            contentType: "application/json",
            data: JSON.stringify(t.profileData),
            success: t.callback,
            error: t.error,
          });
        }
        acceptPfa(t) {
          return a.ajax({
            type: "POST",
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/accept_pfa`,
            contentType: "application/json",
            success: t.success,
            error: t.error,
          });
        }
        dismissSiteBanner(t) {
          return a.ajax({
            type: "PATCH",
            url: "/rest/users/dismiss_site_banner",
          });
        }
        googleGeocodeCache(t, e, n) {
          return a.ajax({
            type: "GET",
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/google/geocode_cache?place_id=${t}&vertical=${e}`,
            success: n,
          });
        }
        registerTranslationHit(t) {
          return a.ajax({
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/translation_hit`,
            type: "POST",
            data: { keys: t.keys.join(",") },
          });
        }
        updateNewsletterConsent(t, e) {
          return a.ajax({
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/users/update_newsletter_consent`,
            type: "POST",
            data: { consent: t, source: e },
          });
        }
        mixpanelTrack(t) {
          return a.ajax({
            url: "/api/v2/event/register",
            type: "POST",
            data: {
              event: t.event,
              payload: t.payload,
              country_id: Gomore.jsOptions.countryId,
              mixpanel_guest_token: Gomore.jsOptions.mixpanelGuestToken,
              properties: t.properties,
            },
          });
        }
        smartcarConnect(t, e, n) {
          return a.ajax({
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/rental_ads/${t}/smartcar_connect`,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ code: e, redirect_uri: n }),
          });
        }
        smartcarAgreementAccepted(t) {
          return a.ajax({
            url: `/your-cars/${t}/smartcar_agreement_accepted`,
            type: "POST",
            contentType: "application/json",
            data: "",
          });
        }
        sendToAllPassengers(t) {
          return a.ajax({
            url: `/api/v2/messages/ride/${t.rideId}`,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ text: t.text }),
            success() {
              t.callback(!0);
            },
            error(e, n) {
              t.callback(!1, n);
            },
          });
        }
        improvableCarIds(t) {
          return a.ajax({
            url: `/api/javascript/v${Gomore.jsOptions.apiVersion}/account/cars/recommendations`,
            type: "GET",
            complete: t.callback,
          });
        }
      };
    },
    4083: (t, e, n) => {
      "use strict";
      n(1546);
      var a = n(6665),
        s = n(9755);
      (Gomore.jsOptions = JSON.parse(s("#controller-options").attr("content"))),
        (window.currentCountry = window.countriesJSON.find(
          (t) => t.id === window.currentCountryId
        )),
        (window.currencyById = function (t) {
          return window.currenciesJSON.find((e) => e.id === t);
        }),
        (window.currencyByCode = function (t) {
          return window.currenciesJSON.find((e) => e.code === t);
        }),
        (window.initialization = a.R);
    },
    1546: () => {
      window.Gomore = { jsOptions: {}, Lib: {}, Api: {} };
    },
    6472: (t, e, n) => {
      "use strict";
      n.d(e, {
        G4: () => a,
        MT: () => r,
        No: () => o,
        O1: () => i,
        yu: () => s,
      });
      const a = function () {
          let t = I18n.t("date.month_names"),
            e = [];
          for (let n = 1; n <= 12; n++) e.push(t[n]);
          return e;
        },
        s = () => a().map((t) => t.substr(0, 3)),
        i = () => I18n.t("date.abbr_day_names").map((t) => t.substr(0, 2)),
        o = () => I18n.t("date.abbr_day_names"),
        r = () => I18n.t("date.day_names");
    },
    8903: (t, e, n) => {
      "use strict";
      var a = n(8),
        s = n.n(a),
        i = n(7126),
        o = n(6013),
        r = n.n(o),
        l = n(6472);
      n(9247);
      (r().locale = window.i18nLocale),
        (r().globalOptions = window.i18nOptions);
      var d = {
        en: "en",
        da: "da",
        de: "de",
        no: "nb",
        sv: "sv",
        es: "es",
        fr: "fr",
        fi: "fi",
        et: "et",
      }[r().locale];
      d || "de_at" != r().locale || (d = "de"),
        s().updateLocale(d, {
          months: l.G4(),
          monthsShort: l.yu(),
          weekdaysMin: l.O1(),
          weekdaysShort: l.No(),
          weekdays: l.MT(),
        }),
        (i.Zr.defaultLocale = d);
      let c = {
          prevText: r().t("datepicker.previous"),
          nextText: r().t("datepicker.next"),
          dateFormat: (function () {
            let t = r().t("date.formats.full_numeric").replace("%d", "dd");
            return (t = t.replace("%m", "mm")), (t = t.replace("%Y", "yy")), t;
          })(),
          monthNames: l.G4(),
          monthNamesShort: l.yu(),
          dayNamesShort: l.No(),
          dayNames: l.MT(),
          dayNamesMin: l.O1(),
          firstDay: 1,
        },
        p = "disabled" === window.railsEnv,
        u = [],
        h = [];
      function f() {
        let t = h.splice(0, 16);
        if (0 === t.length) return;
        let e = new Gomore.Api.Client();
        new Promise(function () {
          e.registerTranslationHit({ keys: t });
        }),
          u.length > 0 && setTimeout(f, 500);
      }
      let m = r().translate;
      (r().translate = function (t, e) {
        var n;
        return (
          p &&
            ((n = t),
            u.includes(n) || (u.push(n), h.push(n), setTimeout(f, 500))),
          (c = Object.assign({}, this.globalOptions)),
          (c = Object.assign(c, { defaults: [{ scope: "js." + t }] })),
          (c = Object.assign(c, e)),
          m.call(r(), t, c)
        );
      }),
        (r().t = r().translate);
    },
    6665: (t, e, n) => {
      "use strict";
      n.d(e, { R: () => i });
      const a = class {
        constructor() {
          this.map = {};
        }
        register(t, e) {
          this.map[t] && new Error("Initializer key already used."),
            (this.map[t] = e);
        }
        execute(t) {
          t in this.map
            ? this.map[t]()
            : console.log(`Missing initialiser ${t}`);
        }
        onReady() {
          Array.from(window.initJsKeys).map((t) => this.execute(t));
        }
      };
      var s = n(9755);
      const i = new a();
      s(function () {
        i.onReady();
      });
    },
    281: (t, e, n) => {
      "use strict";
      var a = n(8535),
        s = n.n(a),
        i = (n(6044), n(1051));
      let o = function () {
        (0, i.ZP)("[data-tippy-content]", { theme: "gomore" }),
          (0, i.ZP)("a[rel=tooltip]", { theme: "gomore" });
      };
      var r = n(9755);
      r(document).ready(function () {
        function t(t, e) {
          t.dispatchEvent(new Event(e));
        }
        s().start(),
          r("a.disabled").click(function (t) {
            t.preventDefault();
          }),
          r("a.js-link-disabled").click(function (t) {
            t.preventDefault();
          }),
          r("a.modal-loader").click(function (t) {
            t.preventDefault();
            var e = r("#" + r(this).data("modal")),
              n = r(this).data("url");
            e.on("shown.bs.modal", o),
              e.load(n, function () {
                e.modal("show");
              });
          }),
          r("#js-flash-notice,#js-flash-alert").each(function () {
            var t = r(this);
            setTimeout(function () {
              t.addClass("active");
            }, 500),
              setTimeout(function () {
                t.removeClass("active");
              }, 5e3),
              r(".js-flash-notice-close").on("click", function (e) {
                e.preventDefault(), t.removeClass("active");
              });
          }),
          r(".anchor").click(function () {
            return (
              r("html, body").animate(
                { scrollTop: r(r(this).attr("href")).offset().top - "32" },
                { duration: 450 }
              ),
              !1
            );
          }),
          document.addEventListener(
            "scroll",
            (e) => {
              e.srcElement === document &&
                document.querySelectorAll(".sticky").forEach((e) => {
                  const n = e.getBoundingClientRect(),
                    a = window.innerHeight,
                    s = parseInt(n.top),
                    i = a - parseInt(n.bottom);
                  t(e, s <= 3 ? "stuckTop" : "unstuckTop"),
                    t(e, i <= 3 ? "stuckBottom" : "unstuckBottom");
                });
            },
            { passive: !0 }
          );
      }),
        r(window).on("load", function (t) {
          "#_=_" === window.location.hash &&
            ((window.location.hash = ""),
            history.pushState("", document.title, window.location.pathname),
            t.preventDefault());
        }),
        r(".language-select-modal").on("click", function (t) {
          t.preventDefault(), r("#language-select-modal").modal("show");
        }),
        o();
    },
    6044: (t, e, n) => {
      var a = n(9755);
      if ("undefined" === typeof a)
        throw new Error("Bootstrap's JavaScript requires jQuery");
      !(function (t) {
        "use strict";
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 == e[0] && 9 == e[1] && e[2] < 1) ||
          e[0] > 3
        )
          throw new Error(
            "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
          );
      })(a),
        (function (t) {
          "use strict";
          var e = '[data-dismiss="alert"]',
            n = function (n) {
              t(n).on("click", e, this.close);
            };
          (n.VERSION = "3.4.1"),
            (n.TRANSITION_DURATION = 150),
            (n.prototype.close = function (e) {
              var a = t(this),
                s = a.attr("data-target");
              s ||
                (s = (s = a.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")),
                (s = "#" === s ? [] : s);
              var i = t(document).find(s);
              function o() {
                i.detach().trigger("closed.bs.alert").remove();
              }
              e && e.preventDefault(),
                i.length || (i = a.closest(".alert")),
                i.trigger((e = t.Event("close.bs.alert"))),
                e.isDefaultPrevented() ||
                  (i.removeClass("in"),
                  t.support.transition && i.hasClass("fade")
                    ? i
                        .one("bsTransitionEnd", o)
                        .emulateTransitionEnd(n.TRANSITION_DURATION)
                    : o());
            });
          var a = t.fn.alert;
          (t.fn.alert = function (e) {
            return this.each(function () {
              var a = t(this),
                s = a.data("bs.alert");
              s || a.data("bs.alert", (s = new n(this))),
                "string" == typeof e && s[e].call(a);
            });
          }),
            (t.fn.alert.Constructor = n),
            (t.fn.alert.noConflict = function () {
              return (t.fn.alert = a), this;
            }),
            t(document).on("click.bs.alert.data-api", e, n.prototype.close);
        })(a),
        (function (t) {
          "use strict";
          var e = function (n, a) {
            (this.$element = t(n)),
              (this.options = t.extend({}, e.DEFAULTS, a)),
              (this.isLoading = !1);
          };
          function n(n) {
            return this.each(function () {
              var a = t(this),
                s = a.data("bs.button"),
                i = "object" == typeof n && n;
              s || a.data("bs.button", (s = new e(this, i))),
                "toggle" == n ? s.toggle() : n && s.setState(n);
            });
          }
          (e.VERSION = "3.4.1"),
            (e.DEFAULTS = { loadingText: "loading..." }),
            (e.prototype.setState = function (e) {
              var n = "disabled",
                a = this.$element,
                s = a.is("input") ? "val" : "html",
                i = a.data();
              (e += "Text"),
                null == i.resetText && a.data("resetText", a[s]()),
                setTimeout(
                  t.proxy(function () {
                    a[s](null == i[e] ? this.options[e] : i[e]),
                      "loadingText" == e
                        ? ((this.isLoading = !0),
                          a.addClass(n).attr(n, n).prop(n, !0))
                        : this.isLoading &&
                          ((this.isLoading = !1),
                          a.removeClass(n).removeAttr(n).prop(n, !1));
                  }, this),
                  0
                );
            }),
            (e.prototype.toggle = function () {
              var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
              if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type")
                  ? (n.prop("checked") && (t = !1),
                    e.find(".active").removeClass("active"),
                    this.$element.addClass("active"))
                  : "checkbox" == n.prop("type") &&
                    (n.prop("checked") !== this.$element.hasClass("active") &&
                      (t = !1),
                    this.$element.toggleClass("active")),
                  n.prop("checked", this.$element.hasClass("active")),
                  t && n.trigger("change");
              } else
                this.$element.attr(
                  "aria-pressed",
                  !this.$element.hasClass("active")
                ),
                  this.$element.toggleClass("active");
            });
          var a = t.fn.button;
          (t.fn.button = n),
            (t.fn.button.Constructor = e),
            (t.fn.button.noConflict = function () {
              return (t.fn.button = a), this;
            }),
            t(document)
              .on(
                "click.bs.button.data-api",
                '[data-toggle^="button"]',
                function (e) {
                  var a = t(e.target).closest(".btn");
                  n.call(a, "toggle"),
                    t(e.target).is(
                      'input[type="radio"], input[type="checkbox"]'
                    ) ||
                      (e.preventDefault(),
                      a.is("input,button")
                        ? a.trigger("focus")
                        : a
                            .find("input:visible,button:visible")
                            .first()
                            .trigger("focus"));
                }
              )
              .on(
                "focus.bs.button.data-api blur.bs.button.data-api",
                '[data-toggle^="button"]',
                function (e) {
                  t(e.target)
                    .closest(".btn")
                    .toggleClass("focus", /^focus(in)?$/.test(e.type));
                }
              );
        })(a),
        (function (t) {
          "use strict";
          var e = ".dropdown-backdrop",
            n = '[data-toggle="dropdown"]',
            a = function (e) {
              t(e).on("click.bs.dropdown", this.toggle);
            };
          function s(e) {
            var n = e.attr("data-target");
            n ||
              (n =
                (n = e.attr("href")) &&
                /#[A-Za-z]/.test(n) &&
                n.replace(/.*(?=#[^\s]*$)/, ""));
            var a = "#" !== n ? t(document).find(n) : null;
            return a && a.length ? a : e.parent();
          }
          function i(a) {
            (a && 3 === a.which) ||
              (t(e).remove(),
              t(n).each(function () {
                var e = t(this),
                  n = s(e),
                  i = { relatedTarget: this };
                n.hasClass("open") &&
                  ((a &&
                    "click" == a.type &&
                    /input|textarea/i.test(a.target.tagName) &&
                    t.contains(n[0], a.target)) ||
                    (n.trigger((a = t.Event("hide.bs.dropdown", i))),
                    a.isDefaultPrevented() ||
                      (e.attr("aria-expanded", "false"),
                      n
                        .removeClass("open")
                        .trigger(t.Event("hidden.bs.dropdown", i)))));
              }));
          }
          (a.VERSION = "3.4.1"),
            (a.prototype.toggle = function (e) {
              var n = t(this);
              if (!n.is(".disabled, :disabled")) {
                var a = s(n),
                  o = a.hasClass("open");
                if ((i(), !o)) {
                  "ontouchstart" in document.documentElement &&
                    !a.closest(".navbar-nav").length &&
                    t(document.createElement("div"))
                      .addClass("dropdown-backdrop")
                      .insertAfter(t(this))
                      .on("click", i);
                  var r = { relatedTarget: this };
                  if (
                    (a.trigger((e = t.Event("show.bs.dropdown", r))),
                    e.isDefaultPrevented())
                  )
                    return;
                  n.trigger("focus").attr("aria-expanded", "true"),
                    a
                      .toggleClass("open")
                      .trigger(t.Event("shown.bs.dropdown", r));
                }
                return !1;
              }
            }),
            (a.prototype.keydown = function (e) {
              if (
                /(38|40|27|32)/.test(e.which) &&
                !/input|textarea/i.test(e.target.tagName)
              ) {
                var a = t(this);
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  !a.is(".disabled, :disabled"))
                ) {
                  var i = s(a),
                    o = i.hasClass("open");
                  if ((!o && 27 != e.which) || (o && 27 == e.which))
                    return (
                      27 == e.which && i.find(n).trigger("focus"),
                      a.trigger("click")
                    );
                  var r = i.find(".dropdown-menu li:not(.disabled):visible a");
                  if (r.length) {
                    var l = r.index(e.target);
                    38 == e.which && l > 0 && l--,
                      40 == e.which && l < r.length - 1 && l++,
                      ~l || (l = 0),
                      r.eq(l).trigger("focus");
                  }
                }
              }
            });
          var o = t.fn.dropdown;
          (t.fn.dropdown = function (e) {
            return this.each(function () {
              var n = t(this),
                s = n.data("bs.dropdown");
              s || n.data("bs.dropdown", (s = new a(this))),
                "string" == typeof e && s[e].call(n);
            });
          }),
            (t.fn.dropdown.Constructor = a),
            (t.fn.dropdown.noConflict = function () {
              return (t.fn.dropdown = o), this;
            }),
            t(document)
              .on("click.bs.dropdown.data-api", i)
              .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                t.stopPropagation();
              })
              .on("click.bs.dropdown.data-api", n, a.prototype.toggle)
              .on("keydown.bs.dropdown.data-api", n, a.prototype.keydown)
              .on(
                "keydown.bs.dropdown.data-api",
                ".dropdown-menu",
                a.prototype.keydown
              );
        })(a),
        (function (t) {
          "use strict";
          var e = function (e, n) {
            (this.options = n),
              (this.$body = t(document.body)),
              (this.$element = t(e)),
              (this.$dialog = this.$element.find(".modal-dialog")),
              (this.$backdrop = null),
              (this.isShown = null),
              (this.originalBodyPad = null),
              (this.scrollbarWidth = 0),
              (this.ignoreBackdropClick = !1),
              (this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom"),
              this.options.remote &&
                this.$element.find(".modal-content").load(
                  this.options.remote,
                  t.proxy(function () {
                    this.$element.trigger("loaded.bs.modal");
                  }, this)
                );
          };
          function n(n, a) {
            return this.each(function () {
              var s = t(this),
                i = s.data("bs.modal"),
                o = t.extend(
                  {},
                  e.DEFAULTS,
                  s.data(),
                  "object" == typeof n && n
                );
              i || s.data("bs.modal", (i = new e(this, o))),
                "string" == typeof n ? i[n](a) : o.show && i.show(a);
            });
          }
          (e.VERSION = "3.4.1"),
            (e.TRANSITION_DURATION = 300),
            (e.BACKDROP_TRANSITION_DURATION = 150),
            (e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (e.prototype.toggle = function (t) {
              return this.isShown ? this.hide() : this.show(t);
            }),
            (e.prototype.show = function (n) {
              var a = this,
                s = t.Event("show.bs.modal", { relatedTarget: n });
              this.$element.trigger(s),
                this.isShown ||
                  s.isDefaultPrevented() ||
                  ((this.isShown = !0),
                  this.checkScrollbar(),
                  this.setScrollbar(),
                  this.$body.addClass("modal-open"),
                  this.escape(),
                  this.resize(),
                  this.$element.on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    t.proxy(this.hide, this)
                  ),
                  this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    a.$element.one("mouseup.dismiss.bs.modal", function (e) {
                      t(e.target).is(a.$element) &&
                        (a.ignoreBackdropClick = !0);
                    });
                  }),
                  this.backdrop(function () {
                    var s = t.support.transition && a.$element.hasClass("fade");
                    a.$element.parent().length || a.$element.appendTo(a.$body),
                      a.$element.show().scrollTop(0),
                      a.adjustDialog(),
                      s && a.$element[0].offsetWidth,
                      a.$element.addClass("in"),
                      a.enforceFocus();
                    var i = t.Event("shown.bs.modal", { relatedTarget: n });
                    s
                      ? a.$dialog
                          .one("bsTransitionEnd", function () {
                            a.$element.trigger("focus").trigger(i);
                          })
                          .emulateTransitionEnd(e.TRANSITION_DURATION)
                      : a.$element.trigger("focus").trigger(i);
                  }));
            }),
            (e.prototype.hide = function (n) {
              n && n.preventDefault(),
                (n = t.Event("hide.bs.modal")),
                this.$element.trigger(n),
                this.isShown &&
                  !n.isDefaultPrevented() &&
                  ((this.isShown = !1),
                  this.escape(),
                  this.resize(),
                  t(document).off("focusin.bs.modal"),
                  this.$element
                    .removeClass("in")
                    .off("click.dismiss.bs.modal")
                    .off("mouseup.dismiss.bs.modal"),
                  this.$dialog.off("mousedown.dismiss.bs.modal"),
                  t.support.transition && this.$element.hasClass("fade")
                    ? this.$element
                        .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                        .emulateTransitionEnd(e.TRANSITION_DURATION)
                    : this.hideModal());
            }),
            (e.prototype.enforceFocus = function () {
              t(document)
                .off("focusin.bs.modal")
                .on(
                  "focusin.bs.modal",
                  t.proxy(function (t) {
                    document === t.target ||
                      this.$element[0] === t.target ||
                      this.$element.has(t.target).length ||
                      this.$element.trigger("focus");
                  }, this)
                );
            }),
            (e.prototype.escape = function () {
              this.isShown && this.options.keyboard
                ? this.$element.on(
                    "keydown.dismiss.bs.modal",
                    t.proxy(function (t) {
                      27 == t.which && this.hide();
                    }, this)
                  )
                : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }),
            (e.prototype.resize = function () {
              this.isShown
                ? t(window).on(
                    "resize.bs.modal",
                    t.proxy(this.handleUpdate, this)
                  )
                : t(window).off("resize.bs.modal");
            }),
            (e.prototype.hideModal = function () {
              var t = this;
              this.$element.hide(),
                this.backdrop(function () {
                  t.$body.removeClass("modal-open"),
                    t.resetAdjustments(),
                    t.resetScrollbar(),
                    t.$element.trigger("hidden.bs.modal");
                });
            }),
            (e.prototype.removeBackdrop = function () {
              this.$backdrop && this.$backdrop.remove(),
                (this.$backdrop = null);
            }),
            (e.prototype.backdrop = function (n) {
              var a = this,
                s = this.$element.hasClass("fade") ? "fade" : "";
              if (this.isShown && this.options.backdrop) {
                var i = t.support.transition && s;
                if (
                  ((this.$backdrop = t(document.createElement("div"))
                    .addClass("modal-backdrop " + s)
                    .appendTo(this.$body)),
                  this.$element.on(
                    "click.dismiss.bs.modal",
                    t.proxy(function (t) {
                      this.ignoreBackdropClick
                        ? (this.ignoreBackdropClick = !1)
                        : t.target === t.currentTarget &&
                          ("static" == this.options.backdrop
                            ? this.$element[0].focus()
                            : this.hide());
                    }, this)
                  ),
                  i && this.$backdrop[0].offsetWidth,
                  this.$backdrop.addClass("in"),
                  !n)
                )
                  return;
                i
                  ? this.$backdrop
                      .one("bsTransitionEnd", n)
                      .emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
                  : n();
              } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function () {
                  a.removeBackdrop(), n && n();
                };
                t.support.transition && this.$element.hasClass("fade")
                  ? this.$backdrop
                      .one("bsTransitionEnd", o)
                      .emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
                  : o();
              } else n && n();
            }),
            (e.prototype.handleUpdate = function () {
              this.adjustDialog();
            }),
            (e.prototype.adjustDialog = function () {
              var t =
                this.$element[0].scrollHeight >
                document.documentElement.clientHeight;
              this.$element.css({
                paddingLeft:
                  !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight:
                  this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
              });
            }),
            (e.prototype.resetAdjustments = function () {
              this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (e.prototype.checkScrollbar = function () {
              var t = window.innerWidth;
              if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left);
              }
              (this.bodyIsOverflowing = document.body.clientWidth < t),
                (this.scrollbarWidth = this.measureScrollbar());
            }),
            (e.prototype.setScrollbar = function () {
              var e = parseInt(this.$body.css("padding-right") || 0, 10);
              this.originalBodyPad = document.body.style.paddingRight || "";
              var n = this.scrollbarWidth;
              this.bodyIsOverflowing &&
                (this.$body.css("padding-right", e + n),
                t(this.fixedContent).each(function (e, a) {
                  var s = a.style.paddingRight,
                    i = t(a).css("padding-right");
                  t(a)
                    .data("padding-right", s)
                    .css("padding-right", parseFloat(i) + n + "px");
                }));
            }),
            (e.prototype.resetScrollbar = function () {
              this.$body.css("padding-right", this.originalBodyPad),
                t(this.fixedContent).each(function (e, n) {
                  var a = t(n).data("padding-right");
                  t(n).removeData("padding-right"),
                    (n.style.paddingRight = a || "");
                });
            }),
            (e.prototype.measureScrollbar = function () {
              var t = document.createElement("div");
              (t.className = "modal-scrollbar-measure"), this.$body.append(t);
              var e = t.offsetWidth - t.clientWidth;
              return this.$body[0].removeChild(t), e;
            });
          var a = t.fn.modal;
          (t.fn.modal = n),
            (t.fn.modal.Constructor = e),
            (t.fn.modal.noConflict = function () {
              return (t.fn.modal = a), this;
            }),
            t(document).on(
              "click.bs.modal.data-api",
              '[data-toggle="modal"]',
              function (e) {
                var a = t(this),
                  s = a.attr("href"),
                  i =
                    a.attr("data-target") ||
                    (s && s.replace(/.*(?=#[^\s]+$)/, "")),
                  o = t(document).find(i),
                  r = o.data("bs.modal")
                    ? "toggle"
                    : t.extend(
                        { remote: !/#/.test(s) && s },
                        o.data(),
                        a.data()
                      );
                a.is("a") && e.preventDefault(),
                  o.one("show.bs.modal", function (t) {
                    t.isDefaultPrevented() ||
                      o.one("hidden.bs.modal", function () {
                        a.is(":visible") && a.trigger("focus");
                      });
                  }),
                  n.call(o, r, this);
              }
            );
        })(a),
        (function (t) {
          "use strict";
          var e = function (n, a) {
            (this.$element = t(n)),
              (this.options = t.extend({}, e.DEFAULTS, a)),
              (this.$trigger = t(
                '[data-toggle="collapse"][href="#' +
                  n.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  n.id +
                  '"]'
              )),
              (this.transitioning = null),
              this.options.parent
                ? (this.$parent = this.getParent())
                : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
              this.options.toggle && this.toggle();
          };
          function n(e) {
            var n,
              a =
                e.attr("data-target") ||
                ((n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            return t(document).find(a);
          }
          function a(n) {
            return this.each(function () {
              var a = t(this),
                s = a.data("bs.collapse"),
                i = t.extend(
                  {},
                  e.DEFAULTS,
                  a.data(),
                  "object" == typeof n && n
                );
              !s && i.toggle && /show|hide/.test(n) && (i.toggle = !1),
                s || a.data("bs.collapse", (s = new e(this, i))),
                "string" == typeof n && s[n]();
            });
          }
          (e.VERSION = "3.4.1"),
            (e.TRANSITION_DURATION = 350),
            (e.DEFAULTS = { toggle: !0 }),
            (e.prototype.dimension = function () {
              return this.$element.hasClass("width") ? "width" : "height";
            }),
            (e.prototype.show = function () {
              if (!this.transitioning && !this.$element.hasClass("in")) {
                var n,
                  s =
                    this.$parent &&
                    this.$parent
                      .children(".panel")
                      .children(".in, .collapsing");
                if (
                  !(
                    s &&
                    s.length &&
                    (n = s.data("bs.collapse")) &&
                    n.transitioning
                  )
                ) {
                  var i = t.Event("show.bs.collapse");
                  if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
                    s &&
                      s.length &&
                      (a.call(s, "hide"), n || s.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element
                      .removeClass("collapse")
                      .addClass("collapsing")
                      [o](0)
                      .attr("aria-expanded", !0),
                      this.$trigger
                        .removeClass("collapsed")
                        .attr("aria-expanded", !0),
                      (this.transitioning = 1);
                    var r = function () {
                      this.$element
                        .removeClass("collapsing")
                        .addClass("collapse in")
                        [o](""),
                        (this.transitioning = 0),
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element
                      .one("bsTransitionEnd", t.proxy(r, this))
                      .emulateTransitionEnd(e.TRANSITION_DURATION)
                      [o](this.$element[0][l]);
                  }
                }
              }
            }),
            (e.prototype.hide = function () {
              if (!this.transitioning && this.$element.hasClass("in")) {
                var n = t.Event("hide.bs.collapse");
                if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
                  var a = this.dimension();
                  this.$element[a](this.$element[a]())[0].offsetHeight,
                    this.$element
                      .addClass("collapsing")
                      .removeClass("collapse in")
                      .attr("aria-expanded", !1),
                    this.$trigger
                      .addClass("collapsed")
                      .attr("aria-expanded", !1),
                    (this.transitioning = 1);
                  var s = function () {
                    (this.transitioning = 0),
                      this.$element
                        .removeClass("collapsing")
                        .addClass("collapse")
                        .trigger("hidden.bs.collapse");
                  };
                  if (!t.support.transition) return s.call(this);
                  this.$element[a](0)
                    .one("bsTransitionEnd", t.proxy(s, this))
                    .emulateTransitionEnd(e.TRANSITION_DURATION);
                }
              }
            }),
            (e.prototype.toggle = function () {
              this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (e.prototype.getParent = function () {
              return t(document)
                .find(this.options.parent)
                .find(
                  '[data-toggle="collapse"][data-parent="' +
                    this.options.parent +
                    '"]'
                )
                .each(
                  t.proxy(function (e, a) {
                    var s = t(a);
                    this.addAriaAndCollapsedClass(n(s), s);
                  }, this)
                )
                .end();
            }),
            (e.prototype.addAriaAndCollapsedClass = function (t, e) {
              var n = t.hasClass("in");
              t.attr("aria-expanded", n),
                e.toggleClass("collapsed", !n).attr("aria-expanded", n);
            });
          var s = t.fn.collapse;
          (t.fn.collapse = a),
            (t.fn.collapse.Constructor = e),
            (t.fn.collapse.noConflict = function () {
              return (t.fn.collapse = s), this;
            }),
            t(document).on(
              "click.bs.collapse.data-api",
              '[data-toggle="collapse"]',
              function (e) {
                var s = t(this);
                s.attr("data-target") || e.preventDefault();
                var i = n(s),
                  o = i.data("bs.collapse") ? "toggle" : s.data();
                a.call(i, o);
              }
            );
        })(a),
        (function (t) {
          "use strict";
          (t.fn.emulateTransitionEnd = function (e) {
            var n = !1,
              a = this;
            t(this).one("bsTransitionEnd", function () {
              n = !0;
            });
            return (
              setTimeout(function () {
                n || t(a).trigger(t.support.transition.end);
              }, e),
              this
            );
          }),
            t(function () {
              (t.support.transition = (function () {
                var t = document.createElement("bootstrap"),
                  e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend",
                  };
                for (var n in e)
                  if (void 0 !== t.style[n]) return { end: e[n] };
                return !1;
              })()),
                t.support.transition &&
                  (t.event.special.bsTransitionEnd = {
                    bindType: t.support.transition.end,
                    delegateType: t.support.transition.end,
                    handle: function (e) {
                      if (t(e.target).is(this))
                        return e.handleObj.handler.apply(this, arguments);
                    },
                  });
            });
        })(a);
    },
    7649: (t, e, n) => {
      var a = {
        "./da": 4780,
        "./da.js": 4780,
        "./de": 9740,
        "./de.js": 9740,
        "./es": 5655,
        "./es.js": 5655,
        "./fi": 1897,
        "./fi.js": 1897,
        "./fr": 4470,
        "./fr.js": 4470,
        "./nb": 4924,
        "./nb.js": 4924,
        "./sv": 8760,
        "./sv.js": 8760,
      };
      function s(t) {
        var e = i(t);
        return n(e);
      }
      function i(t) {
        if (!n.o(a, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return a[t];
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.resolve = i),
        (t.exports = s),
        (s.id = 7649);
    },
  },
]);
