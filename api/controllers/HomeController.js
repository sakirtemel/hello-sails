module.exports = {

  /**
   * CommentController.create()
   */
  index: function (req, res) {
  	var os = require("os");
    return res.view({
      todo: os.hostname()
    });
  }
};