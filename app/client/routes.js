FlowRouter.route('/', {
  name: 'home',
  action: function(param, query_params) {
    Tracker.autorun(function() {
      if(!Meteor.userId()) {
        BlazeLayout.render("home");
      } else {
        FlowRouter.go('/dashboard');
      }
    });
  }
});

// Routes for logged in users.
FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action: function(param, query_params) {
    BlazeLayout.render('dashboard_summary', {
      profile_widget: 'profile_summary',
      grant_widget: 'grant_summary',
      publication_widget: 'publication_summary',
      network_widget: 'network_summary'
    });
  }
});

FlowRouter.route('/profile/all', {
  name: 'profile_all',
  action: function(param, query_params) {
    BlazeLayout.render('profile_all');
  }
});
FlowRouter.route('/profile/:user_id', {
  name: 'profile',
  action: function(param, query_params) {
    BlazeLayout.render('profile');
  }
});

FlowRouter.route('/grant/all', {
  name: 'grant_all',
  action: function(param, query_params) {
    BlazeLayout.render('grant_all');
  }
});
FlowRouter.route('/grant/:grant_id', {
  name: 'grant',
  action: function(param, query_params) {
    BlazeLayout.render('grant');
  }
});

FlowRouter.route('/publication/all', {
  name: 'publication_all',
  action: function(param, query_params) {
    BlazeLayout.render('publication_all');
  }
});
FlowRouter.route('/publication/:publication_id', {
  name: 'publication',
  action: function(param, query_params) {
    BlazeLayout.render('publication');
  }
});

FlowRouter.route('/network/all', {
  name: 'network_all',
  action: function(param, query_params) {
    BlazeLayout.render('network_all');
  }
});
FlowRouter.route('/network/:network_id', {
  name: 'network',
  action: function(param, query_params) {
    BlazeLayout.render('network');
  }
});
