/**
 * coon.js
 * lib-cn_simmanager
 * Copyright (C) 2020 Thorsten Suckow-Homberg https://github.com/coon-js/lib-cn_simmanager
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


const harness = new Siesta.Harness.Browser.ExtJS();

let isModern = window.location.href.indexOf("toolkit=modern") !== -1;

harness.configure({
    title          : 'lib-cn_simmanager',
    disableCaching : true,
    loaderPath     : {

        /**
         * ux
         */
        'Ext.ux' : "../../../../ext/packages/ux/src/",

        /**
         * Universal
         */
        'coon.simmanager.app' : '../src/app',


        /**
         * Requirements
         */
        'coon.core'        : '../../lib-cn_core/src'
    },
    preload        : [
        coon.tests.config.paths.extjs.css.url,
        coon.tests.config.paths.extjs.js.url
    ]
});

harness.start({
    group : 'universal',
    items : [{
        group : 'app',
        items : [
            'src/app/PackageControllerTest.js'
        ]
    }]
});
