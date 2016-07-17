import { Meteor } from 'meteor/meteor';
import {Links} from '../imports/collections/links';
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {

  Meteor.publish('links', function(){
    return Links.find({});
  });

});

const onRoute = (req, res, next) => {
  const link = Links.findOne({token: req.params.token});
  if(link){
    Links.update({token: link.token}, {$inc: {clicks: 1}});
    res.writeHead(307, {'Location': link.url});
    res.end();
  } else {
    next();
  }
}

const middleware = ConnectRoute(function(router){
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
