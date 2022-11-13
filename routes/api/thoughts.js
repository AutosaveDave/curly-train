const router = require("express").Router();

const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction } = require("../../controllers/thoughtController.js");

// /api/videos
router.route("/").get(getAllThoughts).post(createThought);
// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought);
// /api/thoughts/:thoughtId/responses
router.route("/:videoId/responses").post(addReaction);
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
