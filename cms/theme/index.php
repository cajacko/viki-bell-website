<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Viki Bell</title>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

    <style>
      body {
        margin: 0;
        padding: 0;
      }

      .loadingDiv {
        opacity: 0;
        transition: 1s opacity;
        flex: 1;
        align-items: center;
        justify-content: center;
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999999;
      }

      .hide {
        display: none;
      }

      .background {
        background: #2597a1;
      }

      .loadingDiv.loading {
        opacity: 1;
      }

      .noJavascript {
        display: none;
      }

      .spinner {
        margin: 100px auto 0;
        width: 100%;
        text-align: center;
      }

      .spinner > div {
        width: 40px;
        height: 40px;
        background-color: white;

        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      }

      .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }

      .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }

      @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0) }
        40% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bouncedelay {
        0%, 80%, 100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        } 40% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
        }
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <div id="loading" class="loadingDiv loading background">
      <script>
        document.getElementById('loading').classList.remove('background');
      </script>
      <div id="spinner" class="spinner noJavascript">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>

      <div id="noJavascript">
        <script>
          document.getElementById('noJavascript').classList.add('hide');
        </script>
        <div>
          <h1>VikiBell.com requires JavaScript to be enabled to work</h1>
          <p>Please enable Javascript or read content through my RSS feed</p>
          <a>RSS Feed</a>
        </div>
        <div>
          <h2>Follow and contact me on:</h2>
          <ul>
            <li><a>Twitter</a></li>
          </ul>
        </div>
      </div>
      <script>
        document.getElementById('noJavascript').remove();
        window.noLoading = true;

        setTimeout(function() {
          if (!window.initialRender) {
            window.startTime = Math.floor(Date.now());
            window.noLoading = false;
            document.getElementById('loading').classList.add('background');
            var noJavascriptClass = document.querySelector('.noJavascript');
            noJavascriptClass.classList.remove('noJavascript');
          }
        }, 500);
      </script>
    </div>
    <script type="text/javascript"><?php include(__DIR__ . '/js/manifest.js'); ?></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri() . '/js/vendor.js' ; ?>"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri() . '/js/main.js' ; ?>"></script>
  </body>
</html>
