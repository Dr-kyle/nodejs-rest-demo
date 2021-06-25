module.exports = function(app, clients) {
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to node.js rest api application. Created for learning purposes by Christos Ploutarchou" });
  });

  app.get('/es/:id', async (req, res) => {
    console.log('req.params', req.params)
    const id = req.params.id
    const nodeInfo = await clients.get(id).nodes.info({nodeId: '_local'})
    res.json(nodeInfo.body)
  });

  app.post('/es/:id', (req, res) => {
    console.log('req.params', req.params)
    console.log('req.body', req.body)
    res.json({message: 'post'})
  });

};

