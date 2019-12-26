const express = require('express')
const router = express.Router();
const { checkAuthenticated, checkNotAuthenticated} = require("../middleware/auth");
const FeedbackController = require('../controllers/FeedbackController')

// view feedback Page
router.get('/feedback/view', checkNotAuthenticated, FeedbackController.viewFeedbackPage);

// Check feedback from user Id
router.post('/feedback/view',checkNotAuthenticated ,FeedbackController.checkFeedback);


module.exports = router