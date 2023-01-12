function handleError(error, req, res, next) {
    if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
        let errors = error.errors.map(el => {
            return el.message
        })
        res.status(400).json(errors)
    } else if (error.name === "EmailOrPasswordRequired") {
        res.status(400).json({ message: "Email or Password Required" })
    } else if (error.name === "PasswordInValid") {
        res.status(401).json({ message: "Email or Password Invalid" })
    }else if (error.name === "Unauthenticated") {
        console.log(error, 'ini handeleeeeeeeeeeee')
        res.status(401).json({ message: "validation error please login" })
    }else if (error.name === "Forbidden") {
        res.status(403).json({ message: "Not access URL" })
    }else if (error.name === "NotFound") {
        res.status(404).json({ message: "Data not found" })
    }else {
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = { handleError }