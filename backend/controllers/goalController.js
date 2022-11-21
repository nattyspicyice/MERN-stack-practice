const asyncHandler = require('express-async-handler')
//@desc GET GOALS
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get goals'})
})

//@desc SET GOAL
//@route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'set goal'})
})

//@desc UPDATE GOALS
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

//@desc DELETE GOALS
//@route Delete /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}