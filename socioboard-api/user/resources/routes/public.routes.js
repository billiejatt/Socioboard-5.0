import socialAccount from '../../core/socialAccount/socialAccount.routes.js';
import authenticate from '../../middleware/authentication.middleware.js';
import recentVisited from '../../middleware/recent.visited.middleware.js'
import team from '../../core/team/team.routes.js';
import OpenRoutes from './open.routes.js';
import unauthorized from '../../core/unAuthorized/unAuthorized.routes.js';
import socialCallback from '../../core/socialCallback/socialCallback.routes.js';
import authorized from '../../core/authorized/authorized.routes.js';
import recentVistedRoutes from '../../core/recentVisited/recentVisted.routes.js'
import teamReport from '../../core/teamReport/teamReport.routes.js'

class Routes {
  constructor(app) {
    this.configureCors(app);
    // new OpenRoutes('/v1/', app);
    app.use('/v1/', unauthorized);
    app.use('/v1/', socialCallback);
    // SecuredRoutes;
    app.use(authenticate);
    app.use('/v1/recentvisited/', recentVistedRoutes)
    app.use('/v1/user/', authorized);
    app.use(recentVisited);
    app.use('/v1/team/', team);
    app.use('/v1/teamreport', teamReport)
    app.use('/v1/socialaccount', socialAccount);
  }

  configureCors(app) {
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
      res.setHeader('Cache-Control', 'no-cache');
      next();
    });
  }
}
export default Routes;
