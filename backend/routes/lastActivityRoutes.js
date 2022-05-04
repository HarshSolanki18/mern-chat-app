const express=require('express');
const { getLastSeen, addLastSeen } = require('../controllers/lastActivityController');
const { protect } = require('../middleware/authMiddleware');
const router=express.Router();

router.route('/:id').get(protect,getLastSeen).post(addLastSeen);
module.exports=router;