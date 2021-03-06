/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojknockout'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("JET Table Selection Demo");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");
      
      // Router configuration
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
      self.router = oj.Router.rootInstance;
      self.router.configure({
          'department': { label: 'Departments', value: 'department', isDefault: true },
          'employee': { label: 'Employees', value: 'employee' }
      });

     }

     return new ControllerViewModel();
  }
);
