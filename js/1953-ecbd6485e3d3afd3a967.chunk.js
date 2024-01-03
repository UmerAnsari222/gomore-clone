"use strict";
(self.webpackChunkgomore_web = self.webpackChunkgomore_web || []).push([
  [1953],
  {
    3780: (e, i, t) => {
      t.d(i, { Z: () => n });
      const n = {
        onVisibleOnScreen(e, i, t) {
          let n = {};
          if (
            ("string" === typeof t ? (n.rootMargin = t) : (n.threshold = t),
            "IntersectionObserver" in window)
          ) {
            new IntersectionObserver((e, t) => {
              e.forEach((e) => {
                0 !== e.intersectionRatio && (i(), t.unobserve(e.target));
              });
            }, n).observe(e);
          } else i();
        },
      };
    },
    2638: (e, i, t) => {
      var n = t(6665),
        s = t(9755);
      n.R.register("alertSiteWide", function () {
        const e = s("body"),
          i = s(".js-alert-site-wide"),
          t = s(".js-accept-pfa"),
          n = s(".js-alert-site-wide-close"),
          a = s(".js-dismiss-site-banner"),
          r = i.outerHeight(),
          o = document.querySelector(".js-referral-banner-fixed");
        let l = 0;
        o && o.classList.remove("hidden");
        document.addEventListener(
          "scroll",
          function () {
            o &&
              ((l = window.scrollY),
              l > r
                ? o.classList.remove("translate-y-negative-100%")
                : o.classList.add("translate-y-negative-100%"));
          },
          { passive: !0 }
        );
        const c = function () {
          e.css({
            "will-change": "transform",
            transition: "transform 400ms",
            transform: `translateY(-${r}px)`,
          }),
            e.one("transitionend", d);
        };
        var d = function () {
          i.trigger("remove").remove(),
            e.css({ "will-change": "", transition: "0s", transform: "" });
        };
        n.on("click", function (e) {
          e.preventDefault(),
            c(),
            new Gomore.Api.Client().suppressUserValidationSiteWideAlert();
        }),
          t.on("click", function (e) {
            e.preventDefault(),
              c(),
              new Gomore.Api.Client().acceptPfa({
                success: () =>
                  Gomore.Lib.FlashAlerts.notice(
                    I18n.t(
                      "shared.alert.site_wide.payment_facilitator_agreement.success"
                    ),
                    2e3
                  ),
                error: () =>
                  Gomore.Lib.FlashAlerts.alert(
                    I18n.t(
                      "shared.alert.site_wide.payment_facilitator_agreement.error"
                    ),
                    2e3
                  ),
              });
          }),
          a.on("click", function (e) {
            e.preventDefault();
            new Gomore.Api.Client().dismissSiteBanner(), c();
          });
      });
    },
    114: (e, i, t) => {
      var n = t(6665),
        s = t(9755);
      n.R.register("footer", function () {
        s(".js-balloon-car-footer").click(function (e) {
          e.preventDefault(),
            s(this).addClass("inflate-1"),
            s(".inflate-1").click(function (e) {
              e.preventDefault(),
                s(this).addClass("inflate-2"),
                s(".inflate-2").click(function (e) {
                  e.preventDefault(),
                    s(this).addClass("popped"),
                    setTimeout(() => {
                      s(this).addClass("hidden");
                    }, 2e3);
                });
            });
        });
      });
    },
    1965: (e, i, t) => {
      var n = t(6665),
        s = t(9755);
      n.R.register("globalSessionModals", function () {
        s("body").on("click", ".js-login-link", async function (e) {
          e.preventDefault();
          const { showUserSignupModal: i } = await Promise.all([
            t.e(4780),
            t.e(9050),
            t.e(6918),
            t.e(991),
            t.e(829),
            t.e(8624),
            t.e(6393),
          ]).then(t.bind(t, 3469));
          i();
        });
      });
    },
    4535: (e, i, t) => {
      var n = t(6665),
        s = (t(9247), t(9755));
      n.R.register("navigationMember", function () {
        new Gomore.Api.Client().improvableCarIds({
          callback: function (e) {
            let i = e.responseJSON?.data;
            if (i && i.improvable_car_ids && i.improvable_car_ids.length > 0) {
              let e = s(".js-improve-your-car-link"),
                t = s(".js-improve-your-car-item");
              if (0 == e.length || 0 == t.length) return;
              let n = e.attr("href").replace(":id", i.improvable_car_ids[0]);
              e.attr("href", n), t.removeClass("hidden");
            }
          },
        });
      });
    },
    143: (e, i, t) => {
      var n = t(6665),
        s = t(9755);
      n.R.register("navigationMobile", function () {
        const e = s(".nav-icon"),
          i = s(".js-nav-mobile"),
          t = s(".js-nav-collapse"),
          n = s(".js-nav-mobile-overlay"),
          a = s(".js-open-nav"),
          r = s(".js-notification-count"),
          o = s("body"),
          l = s(".js-accordion"),
          c = "chat-hide",
          d = !o.hasClass(c),
          f = new Gomore.Api.Client();
        i.css("transition", "visibility 0.3s linear");
        const p = function () {
          e.removeClass("open"),
            r.removeClass("hidden"),
            i.removeClass("is-open"),
            o.removeClass("w-100% overflow-hidden"),
            d && o.removeClass(c),
            i.addClass("invisible");
        };
        a.click(function (t) {
          i.hasClass("is-open")
            ? p()
            : (e.addClass("open"),
              i.addClass("is-open"),
              r.addClass("hidden"),
              o.addClass("w-100% overflow-hidden " + c),
              i.removeClass("invisible"));
        }),
          n.click((e) => p()),
          t.click((e) => l.collapse("hide"));
        const v = function (e) {
          let i = e.responseJSON?.data;
          if (i && i.improvable_car_ids && i.improvable_car_ids.length > 0) {
            let e = s(".js-improve-your-car-link-mobile");
            if (0 == e.length) return;
            let t = e.attr("href").replace(":id", i.improvable_car_ids[0]);
            e.attr("href", t), e.removeClass("hidden");
          }
        };
        s(".js-improve-your-car-link-mobile").length &&
          f.improvableCarIds({ callback: v });
      });
    },
    9212: (e, i, t) => {
      var n = t(6665);
      n.R.register("newsletterModal", function () {
        Promise.all([t.e(4780), t.e(6918), t.e(2201), t.e(7880)]).then(
          t.bind(t, 6020)
        );
      }),
        n.R.register("newsletterModalWithPhoneVerification", async function () {
          const { showPhoneVerificationModal: e } = await Promise.all([
            t.e(4780),
            t.e(9050),
            t.e(6918),
            t.e(991),
            t.e(829),
            t.e(8624),
            t.e(6393),
          ]).then(t.bind(t, 3469));
          await e(),
            Promise.all([t.e(4780), t.e(6918), t.e(2201), t.e(7880)]).then(
              t.bind(t, 6020)
            );
        });
    },
    1953: (e, i, t) => {
      t.r(i);
      t(4028), t(1546), t(4083), t(8903), t(281);
      var n = t(3780),
        s = t(6665),
        a = (t(114), t(4535), t(143), t(1965), t(2638), t(9212), t(9755));
      s.R.register("homepageShow", function () {
        Promise.all([t.e(4780), t.e(9050), t.e(5460), t.e(6065)]).then(
          t.bind(t, 6065)
        );
        new Gomore.Api.Client().mixpanelTrack({
          event: "homepage_search_widget_viewed",
        }),
          a(".js-balloon-car").click(function (e) {
            e.preventDefault(),
              a(this).addClass("inflate-1"),
              a(".inflate-1").click(function (e) {
                e.preventDefault(),
                  a(this).addClass("inflate-2"),
                  a(".inflate-2").click(function (e) {
                    e.preventDefault(),
                      a(this).addClass("popped"),
                      setTimeout(() => {
                        a(this).addClass("hidden");
                      }, 2e3);
                  });
              });
          }),
          a(".js-homepage-bird").click(function (e) {
            e.preventDefault(),
              a(this).addClass("drill"),
              setTimeout(() => {
                a(this).removeClass("drill");
              }, 2e3);
          }),
          n.Z.onVisibleOnScreen(
            a(".apps-illustration")[0],
            () => {
              a(".apps-illustration").addClass("bg-app-illustration");
            },
            "800px"
          );
      });
    },
  },
]);
