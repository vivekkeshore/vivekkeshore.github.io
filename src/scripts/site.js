(function () {
    "use strict";

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var finePointer = window.matchMedia("(pointer: fine)").matches;
    var root = document.documentElement;

    function clamp(v, min, max) {
        return Math.min(max, Math.max(min, v));
    }

    function onVisible(el, callback, threshold) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: threshold || 0.15 });
        io.observe(el);
    }

    // ---------- Reveal on scroll ----------

    document.querySelectorAll(".reveal, .role").forEach(function (el) {
        onVisible(el, function (target) {
            target.classList.add("is-visible");
        });
    });

    // ---------- Scroll-driven effects ----------

    var nav = document.getElementById("nav");
    var progress = document.querySelector(".scroll-progress");
    var stackCards = Array.prototype.slice.call(document.querySelectorAll(".stack-card"));
    var timeline = document.querySelector(".timeline");
    var ticking = false;

    function updateStack(vh) {
        var sticky = stackCards.length && getComputedStyle(stackCards[0]).position === "sticky";
        for (var i = 0; i < stackCards.length - 1; i++) {
            var inner = stackCards[i].firstElementChild;
            if (!sticky) {
                inner.style.transform = "";
                inner.style.removeProperty("--dim");
                continue;
            }
            var stickyTop = parseFloat(getComputedStyle(stackCards[i]).top) || 0;
            var nextTop = stackCards[i + 1].getBoundingClientRect().top;
            var p = clamp((vh - nextTop) / (vh - stickyTop), 0, 1);
            inner.style.transform = "scale(" + (1 - p * 0.06) + ")";
            inner.style.setProperty("--dim", p.toFixed(3));
        }
    }

    function updateTimeline(vh) {
        var box = timeline.getBoundingClientRect();
        var fill = clamp((vh * 0.6 - box.top) / box.height, 0, 1);
        timeline.style.setProperty("--fill", fill.toFixed(3));
    }

    function onScroll() {
        var vh = window.innerHeight;
        var max = root.scrollHeight - vh;
        progress.style.setProperty("--progress", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
        nav.classList.toggle("is-scrolled", window.scrollY > 40);
        if (!reduceMotion) updateStack(vh);
        updateTimeline(vh);
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(onScroll);
        }
    }, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    // ---------- Nav: sliding active indicator ----------

    var navLinks = document.querySelector(".nav__links");
    var indicator = navLinks.querySelector(".nav__indicator");
    var links = navLinks.querySelectorAll("a");

    function moveIndicator(link) {
        links.forEach(function (l) {
            l.classList.toggle("is-active", l === link);
        });
        if (!link) {
            indicator.style.setProperty("--o", 0);
            return;
        }
        indicator.style.setProperty("--x", link.offsetLeft + "px");
        indicator.style.setProperty("--w", link.offsetWidth + "px");
        indicator.style.setProperty("--o", 1);
    }

    var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var match = null;
            links.forEach(function (link) {
                if (link.hash === "#" + entry.target.id) match = link;
            });
            moveIndicator(match);
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main > section[id]").forEach(function (section) {
        spy.observe(section);
    });

    // ---------- Hero: rotating words ----------

    var rotator = document.querySelector(".rotator");
    if (rotator && !reduceMotion) {
        var words = rotator.children;
        var current = 0;
        setInterval(function () {
            var prev = words[current];
            current = (current + 1) % words.length;
            prev.classList.remove("is-active");
            prev.classList.add("is-leaving");
            words[current].classList.remove("is-leaving");
            words[current].classList.add("is-active");
            setTimeout(function () {
                prev.classList.remove("is-leaving");
            }, 600);
        }, 2600);
    }

    // ---------- Hero: typewriter code ----------

    var code = document.querySelector("[data-typewriter]");
    if (code && !reduceMotion) {
        var pre = code.parentElement;
        pre.style.minHeight = pre.offsetHeight + "px";

        var walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT);
        var parts = [];
        while (walker.nextNode()) {
            parts.push({ node: walker.currentNode, text: walker.currentNode.textContent });
            walker.currentNode.textContent = "";
        }
        var caret = document.createElement("span");
        caret.className = "caret";
        code.appendChild(caret);

        onVisible(code.closest(".code-window"), function () {
            var part = 0;
            var char = 0;
            setTimeout(function type() {
                if (part >= parts.length) return;
                var item = parts[part];
                var ch = item.text.charAt(char);
                item.node.textContent += ch;
                item.node.parentNode.insertBefore(caret, item.node.nextSibling);
                char++;
                if (char >= item.text.length) {
                    part++;
                    char = 0;
                }
                setTimeout(type, ch === "\n" ? 140 : 18 + Math.random() * 28);
            }, 700);
        }, 0.3);
    }

    // ---------- Stats count-up ----------

    document.querySelectorAll("[data-count]").forEach(function (el) {
        if (reduceMotion) return;
        var target = parseInt(el.dataset.count, 10);
        el.textContent = "0";
        onVisible(el, function () {
            var start = performance.now();
            var duration = 1600;
            requestAnimationFrame(function step(now) {
                var t = clamp((now - start) / duration, 0, 1);
                var eased = 1 - Math.pow(2, -10 * t);
                el.textContent = Math.round(target * (t === 1 ? 1 : eased)).toLocaleString("en-US");
                if (t < 1) requestAnimationFrame(step);
            });
        }, 0.6);
    });

    // ---------- Pointer: spotlight, tilt, ambient parallax ----------

    if (finePointer && !reduceMotion) {
        var ambient = document.querySelector(".ambient");
        var pending = null;

        document.addEventListener("pointermove", function (event) {
            var glass = event.target.closest && event.target.closest(".glass--interactive");
            if (glass) {
                var box = glass.getBoundingClientRect();
                glass.style.setProperty("--mx", event.clientX - box.left + "px");
                glass.style.setProperty("--my", event.clientY - box.top + "px");
            }
            if (!pending) {
                pending = requestAnimationFrame(function () {
                    ambient.style.setProperty("--px", (event.clientX / window.innerWidth - 0.5).toFixed(3));
                    ambient.style.setProperty("--py", (event.clientY / window.innerHeight - 0.5).toFixed(3));
                    pending = null;
                });
            }
        }, { passive: true });

        document.querySelectorAll(".tilt").forEach(function (el) {
            el.addEventListener("pointermove", function (event) {
                var box = el.getBoundingClientRect();
                var x = (event.clientX - box.left) / box.width - 0.5;
                var y = (event.clientY - box.top) / box.height - 0.5;
                el.style.setProperty("--rx", (-y * 5).toFixed(2) + "deg");
                el.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
            });
            el.addEventListener("pointerleave", function () {
                el.style.setProperty("--rx", "0deg");
                el.style.setProperty("--ry", "0deg");
            });
        });
    }

    // ---------- Skills marquee: duplicate for a seamless loop ----------

    document.querySelectorAll(".marquee__track").forEach(function (track) {
        Array.prototype.slice.call(track.children).forEach(function (child) {
            track.appendChild(child.cloneNode(true));
        });
    });

    // ---------- Chip filters (shared by Talks and Gallery) ----------

    function chipFilter(bar, onChange) {
        var buttons = bar.querySelectorAll("[data-filter]");
        var indicator = bar.querySelector(".chip-filters__indicator");
        var place = function (button) {
            indicator.style.setProperty("--x", button.offsetLeft + "px");
            indicator.style.setProperty("--w", button.offsetWidth + "px");
        };
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                buttons.forEach(function (b) {
                    b.setAttribute("aria-pressed", b === button ? "true" : "false");
                });
                place(button);
                onChange(button.dataset.filter);
            });
        });
        place(buttons[0]);
        window.addEventListener("resize", function () {
            place(bar.querySelector('[aria-pressed="true"]'));
        });
    }

    // Replays the entry animation on items that were hidden and are shown again.
    function showItem(el, show) {
        var wasHidden = el.classList.contains("is-filtered");
        el.classList.toggle("is-filtered", !show);
        if (!show) return;
        el.classList.add("is-visible");
        if (wasHidden && !reduceMotion) {
            el.classList.remove("is-entering");
            void el.offsetWidth;
            el.classList.add("is-entering");
        }
    }

    // ---------- Project cards: diagram / screenshot toggle ----------

    document.querySelectorAll("[data-media-switch]").forEach(function (box) {
        var panes = box.querySelectorAll(".media-switch__pane");
        chipFilter(box.querySelector(".chip-filters"), function (key) {
            panes.forEach(function (pane, i) {
                var active = String(i) === key;
                pane.classList.toggle("is-active", active);
                pane.setAttribute("aria-hidden", active ? "false" : "true");
            });
        });
    });

    // ---------- Talks ----------

    var talkBar = document.querySelector("[data-talk-filters]");
    if (talkBar) {
        var talkCards = document.querySelectorAll(".talk");
        var talkYears = document.querySelectorAll(".talk-year");
        var talkEmpty = document.querySelector(".talk-empty");

        chipFilter(talkBar, function (key) {
            var shown = 0;
            talkCards.forEach(function (card) {
                var match = key === "all" || card.dataset.tags.split(" ").indexOf(key) !== -1;
                showItem(card, match);
                if (match) shown++;
            });
            talkYears.forEach(function (year) {
                year.hidden = !year.querySelector(".talk:not(.is-filtered)");
            });
            talkEmpty.hidden = shown > 0;
        });
    }

    // ---------- Gallery: two-row reel ----------

    var reel = document.querySelector("[data-reel]");
    if (reel) {
        var tracks = reel.querySelectorAll(".reel__track");
        var photos = Array.prototype.slice.call(reel.querySelectorAll(".g-item"));

        // Fresh random order on every visit, dealt alternately into the two rows.
        for (var s = photos.length - 1; s > 0; s--) {
            var r = Math.floor(Math.random() * (s + 1));
            var tmp = photos[s];
            photos[s] = photos[r];
            photos[r] = tmp;
        }
        photos.forEach(function (photo, i) {
            photo.dataset.idx = i;
            tracks[i % 2].appendChild(photo);
        });

        if (!reduceMotion) {
            // A second copy of each row makes the loop seamless (the animation moves exactly half the track).
            tracks.forEach(function (track) {
                Array.prototype.slice.call(track.children).forEach(function (photo) {
                    var copy = photo.cloneNode(true);
                    copy.setAttribute("aria-hidden", "true");
                    copy.tabIndex = -1;
                    track.appendChild(copy);
                });
            });

            // Constant speed regardless of how many photos a row has.
            var setSpeed = function () {
                tracks.forEach(function (track) {
                    track.style.setProperty("--duration", track.scrollWidth / 2 / 40 + "s");
                });
            };
            setSpeed();
            window.addEventListener("resize", setSpeed);
            window.addEventListener("load", setSpeed);

            // Stop animating while the section is off screen.
            new IntersectionObserver(function (entries) {
                reel.classList.toggle("is-offscreen", !entries[0].isIntersecting);
            }).observe(reel);
        }

        // Lightbox, browsing the shuffled order.
        var lightbox = document.getElementById("lightbox");
        var lbImg = lightbox.querySelector(".lightbox__img");
        var lbEvent = lightbox.querySelector(".lightbox__event");
        var lbText = lightbox.querySelector(".lightbox__text");
        var lbCount = lightbox.querySelector(".lightbox__count");
        var lbIndex = 0;

        // Largest rendition from the thumbnail's srcset, e.g. "a.webp 400w, b.webp 1600w".
        var fullSrc = function (photo) {
            var img = photo.querySelector("img");
            var best = { url: img.currentSrc || img.src, w: 0 };
            (img.getAttribute("srcset") || "").split(",").forEach(function (entry) {
                var parts = entry.trim().split(/\s+/);
                var w = parseInt(parts[1], 10);
                if (w > best.w) best = { url: parts[0], w: w };
            });
            return best.url;
        };

        var showSlide = function (index) {
            lbIndex = (index + photos.length) % photos.length;
            var photo = photos[lbIndex];
            lightbox.classList.add("is-loading");
            lbImg.onload = function () {
                lightbox.classList.remove("is-loading");
            };
            lbImg.src = fullSrc(photo);
            lbImg.alt = photo.dataset.caption + " — " + photo.dataset.event;
            lbEvent.textContent = photo.dataset.event;
            lbText.textContent = photo.dataset.caption;
            lbCount.textContent = lbIndex + 1 + " / " + photos.length;
            [lbIndex + 1, lbIndex - 1].forEach(function (n) {
                new Image().src = fullSrc(photos[(n + photos.length) % photos.length]);
            });
        };

        reel.addEventListener("click", function (event) {
            var photo = event.target.closest(".g-item");
            if (!photo) return;
            lightbox.showModal();
            reel.classList.add("is-paused");
            showSlide(Number(photo.dataset.idx));
        });

        lightbox.addEventListener("click", function (event) {
            var action = event.target.closest("[data-lightbox]");
            if (action) {
                var name = action.dataset.lightbox;
                if (name === "close") lightbox.close();
                else showSlide(lbIndex + (name === "next" ? 1 : -1));
            } else if (event.target === lightbox || event.target.classList.contains("lightbox__stage")) {
                lightbox.close();
            }
        });

        lightbox.addEventListener("keydown", function (event) {
            if (event.key === "ArrowRight") showSlide(lbIndex + 1);
            if (event.key === "ArrowLeft") showSlide(lbIndex - 1);
        });

        var touchX = null;
        lightbox.addEventListener("touchstart", function (event) {
            touchX = event.touches[0].clientX;
        }, { passive: true });
        lightbox.addEventListener("touchend", function (event) {
            if (touchX === null) return;
            var dx = event.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) showSlide(lbIndex + (dx < 0 ? 1 : -1));
            touchX = null;
        });

        lightbox.addEventListener("close", function () {
            lbImg.removeAttribute("src");
            reel.classList.remove("is-paused");
        });
    }

    // ---------- Testimonials: rotating spotlight ----------

    var tst = document.querySelector("[data-tst]");
    if (tst) {
        var tstSlides = tst.querySelectorAll(".tst__slide");
        var tstTabs = tst.querySelectorAll(".tst__tab");
        var tstIndex = 0;
        var TST_DELAY = 9000;
        var tstTimer = null;
        var tstHover = false;
        var tstInView = false;

        var tstBox = tst.querySelector(".tst__slides");
        var tstFit = function () {
            tstBox.style.height = tstSlides[tstIndex].offsetHeight + "px";
        };

        var tstGo = function (index, fromUser) {
            tstIndex = (index + tstSlides.length) % tstSlides.length;
            tstSlides.forEach(function (slide, i) {
                var active = i === tstIndex;
                slide.classList.toggle("is-active", active);
                slide.setAttribute("aria-hidden", active ? "false" : "true");
            });
            tstTabs.forEach(function (tab, i) {
                var active = i === tstIndex;
                tab.setAttribute("aria-selected", active ? "true" : "false");
                tab.tabIndex = active ? 0 : -1;
                // Restart the progress ring on the active tab.
                tab.classList.remove("is-running");
            });
            if (fromUser) tstTabs[tstIndex].focus({ preventScroll: true });
            tstFit();
            tstSchedule();
        };

        // Autoplay only while visible, not hovered, and no side panel is open.
        var tstSchedule = function () {
            clearTimeout(tstTimer);
            var tab = tstTabs[tstIndex];
            var run = !reduceMotion && tstInView && !tstHover && !document.querySelector("dialog[open]");
            tst.classList.toggle("is-playing", run);
            if (!run) return;
            void tab.offsetWidth;
            tab.classList.add("is-running");
            tstTimer = setTimeout(function () {
                tstGo(tstIndex + 1);
            }, TST_DELAY);
        };

        tstTabs.forEach(function (tab, i) {
            tab.addEventListener("click", function () {
                tstGo(i);
            });
            tab.addEventListener("keydown", function (event) {
                if (event.key === "ArrowRight") tstGo(tstIndex + 1, true);
                if (event.key === "ArrowLeft") tstGo(tstIndex - 1, true);
            });
        });

        tst.querySelectorAll("[data-tst-step]").forEach(function (button) {
            button.addEventListener("click", function () {
                tstGo(tstIndex + Number(button.dataset.tstStep));
            });
        });

        tst.addEventListener("mouseenter", function () {
            tstHover = true;
            tstSchedule();
        });
        tst.addEventListener("mouseleave", function () {
            tstHover = false;
            tstSchedule();
        });

        var tstTouchX = null;
        tst.addEventListener("touchstart", function (event) {
            tstTouchX = event.touches[0].clientX;
        }, { passive: true });
        tst.addEventListener("touchend", function (event) {
            if (tstTouchX === null) return;
            var dx = event.changedTouches[0].clientX - tstTouchX;
            if (Math.abs(dx) > 50) tstGo(tstIndex + (dx < 0 ? 1 : -1));
            tstTouchX = null;
        });

        tstFit();
        window.addEventListener("resize", tstFit);
        window.addEventListener("load", tstFit);

        new IntersectionObserver(function (entries) {
            tstInView = entries[0].isIntersecting;
            tstSchedule();
        }, { threshold: 0.4 }).observe(tst);

        // Resume once a "Read full" panel closes.
        document.querySelectorAll("dialog").forEach(function (dialog) {
            dialog.addEventListener("close", tstSchedule);
        });
        tst.addEventListener("click", function (event) {
            if (event.target.closest("[data-drawer]")) setTimeout(tstSchedule, 0);
        });
    }

    // ---------- Drawers ----------

    document.querySelectorAll("[data-drawer]").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            document.getElementById(trigger.dataset.drawer).showModal();
        });
    });
    document.querySelectorAll("dialog.drawer").forEach(function (drawer) {
        drawer.addEventListener("click", function (event) {
            if (event.target.closest("[data-close]")) {
                drawer.close();
                return;
            }
            var box = drawer.getBoundingClientRect();
            var outside = event.clientX < box.left || event.clientX > box.right ||
                event.clientY < box.top || event.clientY > box.bottom;
            if (outside) drawer.close();
        });
    });

    // ---------- Copy email ----------

    var toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
    var toastTimer;

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("is-visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.classList.remove("is-visible");
        }, 2200);
    }

    document.querySelectorAll("[data-copy]").forEach(function (button) {
        button.addEventListener("click", function () {
            var value = button.dataset.copy;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(value).then(function () {
                    showToast("Email copied to clipboard");
                    button.textContent = "Copied";
                    setTimeout(function () {
                        button.textContent = "Copy";
                    }, 2200);
                }, function () {
                    showToast(value);
                });
            } else {
                showToast(value);
            }
        });
    });

    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
})();
