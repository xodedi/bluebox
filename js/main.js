const jo = {};
! function() {
    var e, t = window,
        a = document,
        n = setTimeout,
        o = (clearTimeout, Date),
        r = Math,
        i = parseInt,
        l = (btoa, escape, unescape, encodeURIComponent),
        s = (decodeURIComponent, RegExp),
        c = XMLHttpRequest,
        d = (alert, localStorage),
        u = JSON,
        f = Image,
        g = (setInterval, clearInterval, "innerHTML"),
        p = "getElementById",
        m = "querySelector",
        h = "querySelectorAll",
        b = "createElement",
        y = "className",
        A = "replace",
        v = "EventListener",
        w = "add",
        k = "remove",
        x = "key",
        I = "length",
        D = "push",
        j = "Attribute",
        $ = "set",
        P = "get",
        S = "checked",
        C = "appendChild",
        _ = "insert",
        E = "Before",
        M = "match",
        R = "href",
        z = "target",
        B = "location",
        T = "split",
        L = "trim",
        U = "random",
        O = "parentElement",
        q = "preventDefault",
        F = "substr",
        H = "title",
        N = "ceil",
        G = "floor",
        Y = "Item",
        J = "false",
        W = "scroll",
        Q = "click",
        X = "mousemove",
        V = "touchstart",
        K = "change",
        Z = "undefined",
        ee = "function",
        te = "pagination",
        ae = "loadCustomPosts",
        ne = "custom_posts",
        oe = "adsbygoogle",
        re = "https://",
        ie = "www.blogger.com/",
        le = typeof isPreview !== Z && isPreview,
        se = typeof siteUrl !== Z ? siteUrl[F](0, siteUrl[I] - 1)[A](/(^\w+:|^)\/\//, "") : "",
        ce = re + se,
        de = typeof currentUrl !== Z ? currentUrl : "",
        ue = typeof blogId !== Z ? blogId : "",
        fe = typeof blogTitle !== Z ? blogTitle : "",
        ge = typeof titleSeparator !== Z ? titleSeparator : " - ",
        pe = typeof pageTitle !== Z ? pageTitle : "Page",
        me = typeof analyticId !== Z && analyticId,
        he = typeof caPubAdsense !== Z && caPubAdsense[A](/^\D+/g, ""),
        be = !!he && "ca-pub-" + he,
        ye = typeof innerAdsDelimiter !== Z ? innerAdsDelimiter : "p,br,div",
        Ae = typeof ignoreAdsDelimiter !== Z ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
        ve = typeof Callback === ee && Callback;

    function we(e, t) {
        return -1 < (" " + e[y] + " ").indexOf(" " + t + " ")
    }

    function ke(e, t) {
        var a;
        we(e, t) || ("" != (a = e[y]) && (t = " " + t), e[y] = a + t)
    }

    function xe(e, t) {
        e[y] = e[y][A](new s("(?:^|\\s)" + t + "(?!\\S)"), "")[L]()
    }

    function Ie(e, t, a) {
        xe(e, t), n((function() {
            xe(e, "d-block")
        }), a || 300)
    }

    function De(e, t) {
        for (var a = 0; a < e[I]; a++)
            if (e[a] === t) return !0;
        return !1
    }

    function je(e, t) {
        return !!(e = new s("[?&]" + e + "=([^&#=]*)")).test(t) && t[M](e)[1]
    }

    function $e(e) {
        try {
            return u.parse(e)
        } catch (e) {
            return !1
        }
    }(e = new f).onload = e.onerror = function() {
        ! function(e) {
            e || ""
        }(2 == e.height)
    }, e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    var Pe = a[p]("header"),
        Se = a[p]("search-toggle"),
        Ce = a[p]("search-header"),
        _e = a[p]("navbar-toggle"),
        Ee = a[p]("navbar"),
        Me = a[p]("back-to-top"),
        Re = a[p]("dark-toggler"),
        ze = a[m]("html"),
        Be = a[p]("comment-button"),
        Te = a[p]("threaded-comment-form"),
        Le = a[p]("comment-editor"),
        Ue = a[p]("comment-editor-src"),
        Oe = a[p]("comment-script"),
        qe = a[h](".comment-reply"),
        Fe = a[h](".entry-text noscript"),
        He = a[h](".contact-form-blogger"),
        Ne = a[p]("ads-post"),
        Ge = a[p]("post-body"),
        Ye = a[m](".related-posts"),
        Je = a[m](".related-inline"),
        We = je("page", de),
        Qe = null !== d && 1 == d[P + Y]("lazy"),
        Xe = function(e) {
            if ("IMG" !== e.tagName) return;
            let t = e.getAttribute("data-src");
            if (!t) return;
            if (t = t.replace(/(https?:)?\/\/blogger\.googleusercontent\.com\//g, location.origin + "/cdn/data/").replace(/(https?:)?\/\/[1-4]\.bp\.blogspot\.com\//g, location.origin + "/cdn/image/"), /(img\.youtube|i\.ytimg)/.test(t)) return t = t.substring(0, t.indexOf("/")) + "/mqdefault.jpg", void e.setAttribute("data-src", t);
            const a = e.parentElement || e,
                n = a.getBoundingClientRect();
            let o = n.width || e.offsetWidth || 1600,
                r = n.height || e.offsetHeight || 1200;
            const i = ((a.getAttribute("class") || "") + " " + (e.getAttribute("class") || "")).match(/ratio-(\d+)x(\d+)/);
            if (i) {
                const e = parseInt(i[1], 10),
                    t = parseInt(i[2], 10);
                e && t && (r = o * t / e)
            }
            const l = window.devicePixelRatio > 1 ? 2 : 1,
                s = Math.max(1, o * l | 0),
                c = Math.max(1, r * l | 0),
                d = i ? `w${s}-h${c}-c` : `s${s}`,
                u = /\/s\d{2,}((?:-[a-z]+)*)\//i,
                f = /\/w\d{2,}-h\d{2,}-c((?:-[a-z]+)*)\//i,
                g = /\/w\d{2,}-h\d{2,}((?:-[a-z]+)*)\//i,
                p = /=s\d{2,}((?:-[a-z]+)*)/i,
                m = e => {
                    if (!e) return d;
                    let t = e;
                    return /-c\b/i.test(d) && (t = t.replace(/-c\b/i, "")), d + t
                };
            f.test(t) ? t = t.replace(f, ((e, t) => `/${m(t)}/`)) : g.test(t) ? t = t.replace(g, ((e, t) => `/${m(t)}/`)) : u.test(t) ? t = t.replace(u, ((e, t) => `/${m(t)}/`)) : p.test(t) && (t = t.replace(p, ((e, t) => `=${m(t)}`))), e.setAttribute("data-src", t)
        };
    async function Ve(e, t) {
        try {
            console.log("Fetching:", e);
            const o = await fetch(e);
            if (!o.ok) throw new Error("Status: " + o.status);
            const r = await o.text();
            console.log("Len:", r.length);
            const i = /<title>\s*(.*?)\s*<\/title>/i,
                l = r[M](i);
            if (l && l[1]) {
                var a = l[1][L](),
                    n = ge + fe; - 1 !== a.indexOf(n) ? t[g] = a[A](n, "") : t[g] = a, console.log("Title:", t[g])
            } else console.warn("No match:", r[F](0, 200)), t[g] = "Judul Default"
        } catch (e) {
            console.error("Err:", e), t[g] = "Error Fetch"
        }
    }

    function Ke() {
        (Se && Se[S] || _e && _e[S] ? xe : ke)(Pe, "header-animate")
    }

    function Ze(e, t) {
        function n(a) {
            e.contains(a[z]) || (t(), o())
        }
        var o = function() {
            a[k + v](Q, n)
        };
        a[w + v](Q, n)
    }

    function et(e) {
        e != Ue[R] && (ke(Te, "loader"), Ue[R] = e, Le.src = e), we(Te, "d-none") && (xe(Te, "d-none"), e = Oe.value[M](/<script.*?src='(.*?)'/)[1], Defer.js(e, "comment-js", 500, (function() {
            BLOG_CMT_createIframe(re + ie + "rpc_relay.html")
        })))
    }
    jo[ae] = function(e) {
        var a = (r[U]() + 1).toString(36)[F](7),
            n = e[P + j]("data-label"),
            s = e[P + j]("data-widget-title"),
            c = e[P + j]("data-items"),
            d = e[P + j]("data-shuffle"),
            u = e[P + j]("data-no-item"),
            f = e[P + j]("data-func"),
            p = e[P + j]("data-callback"),
            m = u ? i(c) + 1 : c,
            h = n || e[g],
            b = (h[T](","), []);
        if (h = (h || "").replace(/[\r\n\t]+/g, " ")[L]())
            for (var y = h[T](","), A = 0; A < y[I]; A++) {
                var v = (y[A] || "")[L]();
                "" !== v && b[D](v)
            }
        n = b[I] > 1 ? "-/" + l(b[r[G](r[U]() * b[I])]) + "/?" : h && h !== J && "" !== h ? "-/" + l(h) + "/?" : "?";
        var w = e.getAttribute("data-orderby") || "",
            k = w ? "orderby=" + w + "&sortorder=descending&" : "";
        Defer.js(ce + "/feeds/posts/summary/" + n + k + "alt=json&callback=jo." + ne + "_" + x + "_" + a + "&max-results=" + m), jo[ne + "_" + x + "_" + a] = function(n) {
            var l = i(n.feed.openSearch$totalResults.$t),
                m = n.feed.category;
            if (0 < l) {
                for (var h = {
                        title: s,
                        posts: [],
                        categories: m
                    }, b = n.feed.entry, y = 0, A = 0; A < b[I]; ++A) {
                    var v, w, k = b[A],
                        x = k.link[k.link[I] - 1][R];
                    if (y == c) break;
                    x != u && (y++, (v = {}).grup_id = a, v.url = x, v.title = k[H].$t, v.summary = k.summary.$t[L](), v.img = k.media$thumbnail && k.media$thumbnail.url, v.author = k.author[0].name.$t, v.comment = k.thr$total && k.thr$total.$t, v.label = k.category, w = k.published.$t, pub = new o(w), v.date_published = pub[P + "Date"]() + "/" + (pub[P + "Month"]() + 1) + "/" + pub[P + "FullYear"](), w = k.updated.$t, upd = new o(w), v.date_updated = upd[P + "Date"]() + "/" + (upd[P + "Month"]() + 1) + "/" + upd[P + "FullYear"](), h.posts[D](v))
                }
                typeof(n = t[f]) === ee && 0 < h.posts[I] && (d && (h.posts = function(e) {
                    for (var t = e.slice(), a = t[I] - 1; 0 < a; a--) {
                        var n = r[G](r[U]() * (a + 1)),
                            o = t[a];
                        t[a] = t[n], t[n] = o
                    }
                    return t
                }(h.posts).slice(0, d)), e[g] = n(h)[L](), xe(e, "visually-hidden"), Defer.dom(".lazy-" + a, 1, "loaded", Xe), !p || typeof(n = t[p]) === ee && n())
            }
        }
    }, Se && Se[w + v](K, (function() {
        Ke(), this[S] && n((function() {
            a[p]("search-input").focus()
        }), 100), Ze(Ce, (function() {
            Se[S] = !1, Ke()
        }))
    })), _e && _e[w + v](K, (function() {
        Ke(), this[S] ? (function(e, t) {
            ke(e, "d-block"), n((function() {
                ke(e, "show")
            }), 100)
        }(Ee), Ze(Ee, (function() {
            _e[S] = !1, Ke(), Ie(Ee, "show")
        }))) : Ie(Ee, "show")
    })), Re && Re[w + v](Q, (function(e) {
        e[q](),
            function(e, t) {
                (we(e, t) ? xe : ke)(e, t)
            }(ze, "dark-mode"), null !== d && d[$ + Y]("theme", we(ze, "dark-mode") ? "dark" : "light")
    })), t[w + v](W, (function() {
    const backToTop = a[p]('back-to-top');
    if (this.pageYOffset > 650) {
        backToTop.classList[w]('show');
    } else {
        backToTop.classList[k]('show');
    }
    }), !1), Le && Le[w + v]("load", (function(e) {
        xe(Te, "loader")
    })), Be && Be[w + v](Q, (function(e) {
        e[q](), et(this[R]), "add-comment" != Te[O].id && a[p]("add-comment")[C](Te)
    }));
    for (var tt = 0; tt < qe[I]; ++tt) qe[tt][w + v](Q, (function(e) {
        e[q](), e = this[P + j]("data-comment-id"), et(this[R]), Te[O].id != "c" + e && a[p]("c" + e)[C](Te)
    }));
    for (tt = 0; tt < He[I]; ++tt) He[tt][w + v]("submit", (function(e) {
        e[q]();
        var t = e[z];
        ke(t, "loading");
        var a = new FormData(t),
            n = "blogID=" + ue;
        a.forEach((function(e, t) {
            n += "&" + l(t) + "=" + l(e)
        })), e = re + ie + "contact-form.do", (a = new c).open("post", e), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.send(n), a.onreadystatechange = function() {
            var e;
            xe(t, "loading"), 4 === this.readyState && 200 === this.status && "" != this.response && ((e = $e(this.responseText[L]())) && "true" == e.details.emailSentStatus ? (t.reset(), xe(t, "send-error"), ke(t, "send-success")) : (xe(t, "send-success"), ke(t, "send-error")))
        }
    }));

    function at(e) {
        if (e && (a[k + v](X, at), a[k + v](V, at), a[k + v](W, at)), Defer.dom(".custom-posts", 1, null, jo[ae], null, {
                rootMargin: "200%"
            }), 0 < Fe[I]) {
            for (var t = 0; t < Fe[I]; ++t) {
                var n = Fe[t],
                    o = n[g],
                    i = a[b]("textarea");
                i[g] = o[A](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'), (o = a[b]("div"))[g] = i.value, 0 == t && ke(o, "feature-image full-width"), n[O][_ + E](o, n)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", Xe, null, {
                rootMargin: "200%"
            })
        }
        if (null !== Ge && (null !== Ye && null !== Je && (Je[g] = Ye[g], Je[$ + j]("data-no-item", Ye[P + j]("data-no-item"))), null !== Ne)) {
            var l, s = Ge[h](ye + "," + Ae),
                c = Ne.childNodes,
                d = c[I],
                u = [];
            for (t = 0; t < s[I]; t++) {
                var f = s[t].closest(Ae);
                f && s[t] != f || u[D](s[t])
            }
            for (t = 0; t < d; t++) t == d - 1 ? Ge[C](c[0]) : (l = t == d - 1 ? u[I] - 1 : r.round(u[I] / d) * t, (l = 0 == t ? u[0] : u[l].nextSibling) && l[O][_ + E](c[0], l))
        }
        le || (be && (typeof adsbygoogle === Z && (adsbygoogle = []), Defer.js(re + "pagead2.googlesyndication.com/pagead/js/" + oe + ".js?client=" + be, oe, 100)), me && me != J && Defer.js(re + "www.googletagmanager.com/gtag/js?id=" + me, "analytics", 100, (function() {
            function e() {
                dataLayer[D](arguments)
            }
            e("js", new Date), e("config", me)
        })), ve && ve())
    }
    We && (a[H] = a[H][A](ge, ge + pe + " " + We + ge)), Defer.dom(".lazyload", 1, "loaded", Xe), Defer.dom("#post-pager", 1, null, (function(e) {
        for (var t = e[h]("a"), n = 0; n < t[I]; ++n) {
            var o = t[n],
                r = o[R],
                i = a[b]("span");
            ke(i, "d-block fw-bold pt-2 text-primary"), o[C](i), Ve(r, i)
        }
    }), null, {
        rootMargin: "200%"
    }), Defer.dom("#pagination", 1, null, (function(e) {
        var n, o, s, c, d, u, f, p;

        function m(e, r, i) {
            var l = a[b]("li"),
                d = a[b]("span");
            return ke(d, "btn btn-sm rounded-pill "), d[g] = i || e, d[$ + j]("data-page", e), e == r ? ke(d, "btn-primary") : (ke(d, "btn-light hover-btn-primary"), d[w + v](Q, (function(e) {
                var a;
                e[q](), 1 == (p = d[P + j]("data-page")) ? (a = o ? ce + "/blog" + c + "?max-results=" + n + "&page=" + p : ce, t[B][R] = a) : (a = (p - 1) * n, Defer.js(ce + "/feeds/posts/summary/" + s + "?start-index=" + a + "&alt=json&callback=jo." + te + "_date&max-results=1"))
            }))), l[C](d), l
        }
        e[P + j]("data-pagination") != J ? (n = e[P + j]("data-posts"), o = e[P + j]("data-label"), s = (o = l(o)) ? "-/" + o + "/" : "", c = o ? "/label/" + o : "", Defer.js(ce + "/feeds/posts/summary/" + s + "?alt=json&callback=jo." + te + "_" + x + "&max-results=1"), d = je("max-results", de), u = je("page", de), f = d || n, p = u || 1, jo[te + "_" + x] = function(t) {
            var o = t.feed,
                l = i(o.openSearch$totalResults.$t);
            if (n < l) {
                t = function(e, t, a, n) {
                    e = i(e), t = i(t), a = i(a), n = i(n);
                    var o, l, s = r[N](e / a);
                    t < 1 ? t = 1 : s < t && (t = s), l = s <= n ? (o = 1, s) : (e = r[G](n / 2), a = r[N](n / 2) - 1, t <= e ? (o = 1, n) : s <= t + a ? (o = s - n + 1, s) : (o = t - e, t + a));
                    for (var c = (t - 1) * a, d = (n = r.min(c + a - 1, e - 1), []), u = 0; u < l + 1 - o; u++) d[D](u);
                    return d = d.map((function(e) {
                        return o + e
                    })), {
                        totalItems: e,
                        currentPage: t,
                        pageSize: a,
                        totalPages: s,
                        startPage: o,
                        endPage: l,
                        startIndex: c,
                        endIndex: n,
                        pages: d
                    }
                }(l, p, f, 5);
                var s = a[b]("ul");
                o = t.totalPages, 1 != t.currentPage && (l = m(t.currentPage - 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-l"/></svg>'), s[C](l)), De(t.pages, 1) || (d = m(1, t.currentPage, "1 . ."), s[C](d));
                for (var c = 0; c < t.pages[I]; c++) {
                    var d = m(t.pages[c], t.currentPage);
                    s[C](d)
                }
                De(t.pages, o) || (d = m(o, t.currentPage, ". . " + o), s[C](d)), t.currentPage != o && (o = m(t.currentPage + 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-r"/></svg>'), s[C](o)), e[g] = "", ke(s, "pagination mb-0"), e[C](s), xe(e, "visually-hidden")
            }
        }, jo[te + "_date"] = function(e) {
            e = (e = (e = e.feed.entry[0]).published.$t[F](0, 19) + e.published.$t[F](23, 29))[A]("+", "%2B"), e = ce + "/blog" + c + "?updated-max=" + e + "&max-results=" + f + "&page=" + p, t[B][R] = e
        }) : xe(e, "visually-hidden")
    }), null, {
        rootMargin: "200%"
    }), Qe ? at(!1) : (null !== d && d[$ + Y]("lazy", 1), a[w + v](X, at), a[w + v](V, at), a[w + v](W, at))
}();
