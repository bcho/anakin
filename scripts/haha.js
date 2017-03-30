module.exports = (robot) => {
  robot.hear(/haha/i, (res) => {
    res.reply('SAY AGAIN?');
  });
}
