/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'cursoExtJs.Application',

    name: 'cursoExtJs',

    requires: [
        // This will automatically load all classes in the cursoExtJs namespace
        // so that application classes do not need to require each other.
        'cursoExtJs.*'
    ],

    // The name of the initial view to create.
    mainView: 'cursoExtJs.view.main.Main'
});
