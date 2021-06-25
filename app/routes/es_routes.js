module.exports = function(app, clients) {
  app.get("/", (req, res) => {
    res.json({ message: "node js rest api" });
  });

  app.get('/es/:id', async (req, res) => {
    console.log('req.params', req.params)
    const id = req.params.id
    const nodeInfo = await clients.get(id).nodes.info({nodeId: '_local'})
    res.json(nodeInfo.body)
  });

  app.post('/es/:id', (req, res) => {
    // path 
    console.log('req.params', req.params)
    // query string
    console.log('req.query', req.query)
    // body
    console.log('req.body', req.body)
    res.json({message: 'post'})
  });

};

