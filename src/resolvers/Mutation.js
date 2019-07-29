
const Mutations = {
  createItem: async function(parent,args,cxt,info){
    const res = await cxt.db.mutation.createItem({
      data:{
        ...args
      }
    },info);

    return res;
  },

 async deleteItem(parent,args,cxt,info){
   const where= {id:args.id};
   //const queryItem = cxt.db.query.item({where},`{id title}`);

   return await cxt.db.mutation.deleteItem({where:{id:args.id}},info);
 },

  async updateItem(parent,args,cxt,info){
    const inputs = {...args};
    const where = {id:args.id};
    delete inputs.id;

    return await cxt.db.mutation.updateItem({
      data:inputs,
      where
    },info);
  }
}




module.exports = Mutations;
