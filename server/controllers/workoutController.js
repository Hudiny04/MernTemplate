const Workout = require('../modules/workoutModel')



const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getWorkout = async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json({ message: "No such workout" });
    }
}


const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({
            title,
            reps,
            load
        });
        res.status(201).json(workout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, {
            title,
            reps,
            load
        }, { new: true });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteWorkout = async (req, res) => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}