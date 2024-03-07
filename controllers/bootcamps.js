//@desc  Get all bootcamps
//@route Get /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" });
}

//@desc  Get single bootcamps
//@route Get /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

//@desc  create new bootcamp
//@route POST /api/v1/bootcamps/
//@access Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "create new bootcamp" });
}

//@desc  update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });
}

//@desc  delete bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` });
}