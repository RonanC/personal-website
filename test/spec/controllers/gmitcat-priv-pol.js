'use strict';

describe('Controller: GmitcatPrivPolCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var GmitcatPrivPolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GmitcatPrivPolCtrl = $controller('GmitcatPrivPolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GmitcatPrivPolCtrl.awesomeThings.length).toBe(3);
  });
});
