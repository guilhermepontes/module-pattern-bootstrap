/*--------------------------------------------------------------------------
 * ModulePattern Bootstrap
 *
 * Created      : 21/01/2013
 * Modified     : 13/12/2015
 * Version      : 0.0.4
 * UI Developer : Guilherme Pontes
 * Notes        : Copy and reproduce as much as you want.
---------------------------------------------------------------------------*/

/**
* This is MyApp, it makes something awesome.
* It's a self invokated function that runs automatically/immediately.
*
* @class MyApp
* @constructor
*/
var MyApp = window.MyApp || (function(document, window){
  "use strict";

  /**
   * The _private variable encapsulate all PRIVATE functions
   * and properties.
   *
   * @property _private
   * @type {Object}
   * @default {Object}
   */
  var __private = {
    /**
     * The _config variable sets all properties that will be
     * handled by the app.
     *
     * @property _private
     * @type {Object}
     * @default {Object}
     */
    _config: {
      /**
       * Background options
       *
       * @property background
       * @type {Object}
       * @default {Object}
       */
      background: {
        /**
         * Background color option
         *
         * @property color
         * @type {String}
         * @default "white"
         */
        color: "white"
      }
    },

    /**
     * Makes the body element from `MyApp.body` the color setted,
     * if not setted it will be the default color
     * from {_private._config.background.color}
     *
     * @method setBGColor
     * @param {String} color A color to be an background color from body.
     * @return {Undefined}
     */
    setBGColor: function(color) {
      application.body.style.background = color || this._config.background.color;
    },

    /**
     * Makes body blue from `MyApp.init` method.
     *
     * @method makeBackgroundBlue
     * @return {Undefined}
     */
    makeBackgroundBlue: function() {
      __private.setBGColor("blue");
    },

    /**
     * Makes body red from click event at `MyApp.bind` from
     * {MyApp.makeBodyRed}.
     *
     * @method makeBackgroundRed
     * @return {Undefined}
     */
    makeBackgroundRed: function() {
      __private.setBGColor("red");
    }
  };

  /**
   * Encapsulates all PUBLIC functions
   * and properties.
   *
   * @property _private
   * @type {Object}
   * @default {Object}
   */
  var application = {

    /**
     * Initialize the project by caching variables 
     * and binding the objects. It can also initialize
     * other methods.
     *
     * @method init
     * @return {Undefined}
    */
    init: function() {
      this._cache();
      this._bind();

      _private.makeBackgroundBlue();
    },

    /**
     * Creates public properties that will be
     * handled by other methods. Caching elements is a 
     * good practice.
     *
     * @method _cache
     * @return {Undefined}
    */
    _cache: function(){
      this.body = document.body;
    },

    /**
     * Bind all cached dom elements from `MyApp._cache`.
     * It sets methods to events made by the DOM.
     *
     *
     * @method _bind
     * @return {Undefined}
    */
    _bind: function() {
      this.body.addEventListener('click', _private.makeBackgroundRed , false);
    }
  };

  // make app visible by the MyApp;
  return application;

})(document, window);
//We also can auto-initialize the app by adding a `.init()`, like this:
//})(document, window).init();

// Initialize app
MyApp.init();
