"use strict";

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const User = require("../models/user");

// const { createToken } = require("../helpers/tokens");

const userNewSchema = require("../schemas/userNew.json");
const userUpdateSchema = require("../schemas/userUpdate.json");

const router = express.Router();

router.post("/", async function (req, res, next) {
    try {
        const newUser = req.body;
        const validator = jsonschema.validate(newUser, userNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
    } catch (err) {
        return next(err);
    }
});

router.get("/", async function (req, res, next) {
    try {
        const users = await User.getAll();
        return res.json({ users });
    } catch (err) {
        return next(err);
    }
});

router.get("/:username", async function(req, res, next) {
    try {
        const user = await User.get(req.params.username);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
});

router.put("/:username", async function (req, res, next) {
    try{
        const validator = jsonschema.validate(req.body, userUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        
        const user = await User.update(req.params.username, req.body);
        return res.json({ user });
        } catch (err) {
        return next(err);
    }
});

router.delete("/:username", async function (req, res, next) {
    const user = req.params.username;
    try {
        await User.remove(user);
        return res.json({ user });
    } catch (err) {
        return new(err);
    }
});

module.exports = router;