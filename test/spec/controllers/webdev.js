'use strict';

describe('Controller: WebdevCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var WebdevCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebdevCtrl = $controller('WebdevCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WebdevCtrl.awesomeThings.length).toBe(3);
  });
});
