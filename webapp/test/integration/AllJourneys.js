/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/mit/web/products/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/mit/web/products/test/integration/pages/Worklist",
	"com/sap/mit/web/products/test/integration/pages/Object",
	"com/sap/mit/web/products/test/integration/pages/NotFound",
	"com/sap/mit/web/products/test/integration/pages/Browser",
	"com/sap/mit/web/products/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.mit.web.products.view."
	});

	sap.ui.require([
		"com/sap/mit/web/products/test/integration/WorklistJourney",
		"com/sap/mit/web/products/test/integration/ObjectJourney",
		"com/sap/mit/web/products/test/integration/NavigationJourney",
		"com/sap/mit/web/products/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});