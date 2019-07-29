const {forwardTo} = require('prisma-binding');

const Query = {
  //items:forwardTo('db'),
  items:forwardTo('db'),
  item:forwardTo('db'),
  itemsConnection:forwardTo('db')
 /*items:function(parents,arg,cxt,info){
   const allItems = cxt.db.query.items();

   return allItems;
 }*/
};

module.exports = Query;
