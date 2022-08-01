const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router()
  .get('/', async (req, res) => {
    const episodes = await Episode.getAll();
    // const data = episodes.map((episode) =>
    //   ({ id: episode.id,
    //     detail: episode.detail,
    //     character_id: episode.character_id,
    //   }));
    res.json(episodes);
  });
