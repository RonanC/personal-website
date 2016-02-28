'use strict';

describe('Controller: TweetsCtrl', function () {

  // load the controller's module
  beforeEach(module('personalWebsiteApp'));

  var TweetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TweetsCtrl = $controller('TweetsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TweetsCtrl.awesomeThings.length).toBe(3);
  });
});
