//const ttsService = require('../service/admin')

async function postScript (req, res) {
  console.log('key', process.env.ELEVENLABS_API_KEY)
  // const { start, end } = req.query
  //  const bestProfession = await adminService.getBestProfessionByTotalEarned(start, end)
  res.send('testing')
}

module.exports = {
  postScript
}
