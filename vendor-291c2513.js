<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/ico+xml" href="//assets-cdn.kahoot.it/controller/v2/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="google" content="notranslate" />
    <meta
      name="description"
      content="Join a game of kahoot here. Kahoot! is a free game-based learning platform that makes it fun to learn – any subject, in any language, on any device, for all ages!"
    />
    <meta
      name="keywords"
      content="education, platform, smart phone, tablet, mobile, social, inclusive, HTML5, classroom, engagement, play, game, fun, quiz, multi-player, pedagogy, learning model, learn, gamification."
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://cdn.amplitude.com" />

    <title>Kahoot!</title>
    <script type="module" crossorigin src="//assets-cdn.kahoot.it/controller/v2/assets/index-5f129414.js"></script>
    <link rel="modulepreload" crossorigin href="//assets-cdn.kahoot.it/controller/v2/assets/vendor-fdfcf3c5.js">
    <link rel="stylesheet" href="//assets-cdn.kahoot.it/controller/v2/assets/index-7d575a9a.css">
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.global = window;
    </script>
    
    <script>
      (function (e, t) {
        var n = e.amplitude || { _q: [], _iq: {} };
        var r = t.createElement('script');
        r.type = 'text/javascript';
        r.integrity = 'sha384-a+mq7tiLwde/00Oc7avFHLn/ttGfdAq1rtZc7u97SEzIiyYoT2IsOKWCkAThwdEu';
        r.crossOrigin = 'anonymous';
        r.async = true;
        r.src = 'https://cdn.amplitude.com/libs/amplitude-5.3.0-min.gz.js';
        r.onload = function () {
          if (!e.amplitude.runQueuedFunctions) {
            console.log('[Amplitude] Error: could not load SDK');
          }
        };
        var i = t.getElementsByTagName('script')[0];
        i.parentNode.insertBefore(r, i);
        function s(e, t) {
          e.prototype[t] = function () {
            this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
            return this;
          };
        }
        var o = function () {
          this._q = [];
          return this;
        };
        var a = ['add', 'append', 'clearAll', 'prepend', 'set', 'setOnce', 'unset'];
        for (var u = 0; u < a.length; u++) {
          s(o, a[u]);
        }
        n.Identify = o;
        var c = function () {
          this._q = [];
          return this;
        };
        var l = ['setProductId', 'setQuantity', 'setPrice', 'setRevenueType', 'setEventProperties'];
        for (var p = 0; p < l.length; p++) {
          s(c, l[p]);
        }
        n.Revenue = c;
        var d = [
          'init',
          'logEvent',
          'logRevenue',
          'setUserId',
          'setUserProperties',
          'setOptOut',
          'setVersionName',
          'setDomain',
          'setDeviceId',
          'setGlobalUserProperties',
          'identify',
          'clearUserProperties',
          'setGroup',
          'logRevenueV2',
          'regenerateDeviceId',
          'groupIdentify',
          'onInit',
          'logEventWithTimestamp',
          'logEventWithGroups',
          'setSessionId',
          'resetSessionId',
        ];
        function v(e) {
          function t(t) {
            e[t] = function () {
              e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
            };
          }
          for (var n = 0; n < d.length; n++) {
            t(d[n]);
          }
        }
        v(n);
        n.getInstance = function (e) {
          e = (!e || e.length === 0 ? '$default_instance' : e).toLowerCase();
          if (!n._iq.hasOwnProperty(e)) {
            n._iq[e] = { _q: [] };
            v(n._iq[e]);
          }
          return n._iq[e];
        };
        e.amplitude = n;
      })(window, document);
      // When running inside the app, this function will be injected and called by the app.
      // To avoid race conditions, we pre-define it here
      function sendGameStats() {}
    </script>
    <script>
      (function (m, a, z, e) {
        var s, t;
        try {
          t = m.sessionStorage.getItem('maze-us');
        } catch (err) { }

        if (!t) {
          t = new Date().getTime();
          try {
            m.sessionStorage.setItem('maze-us', t);
          } catch (err) { }
        }

        s = a.createElement('script');
        s.src = z + '?t=' + t + '&apiKey=' + e;
        s.async = true;
        a.getElementsByTagName('head')[0].appendChild(s);
        m.mazeUniversalSnippetApiKey = e;
      })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '12b8fe1a-c990-4ff7-84b0-ceb7fa595b51');
    </script>
  </body>
</html>
