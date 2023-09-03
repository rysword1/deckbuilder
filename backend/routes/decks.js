"use strict";

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const Deck = require("../models/deck");

const deckNewSchema = require("../schemas/deckNew.json");
const deckQuerySchema = require("../schemas/deckQuery.json");

// const router = new express.Router();
const router = express.Router();

router.post("/", async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, deckNewSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const deck = await Deck.create(req.body);
        return res.status(201).json({ deck });
    } catch (err) {
        return next(err);
    }
});

router.get("/", async function (req, res, next) {
    const query = req.query;
    // if (query.title !== undefined) query.title = +query.title;

    try {
        const validator = jsonschema.validate(query, deckQuerySchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        const decks = await Deck.getAll(query);
        return res.json({ decks });
    } catch (err) {
        return next(err);
    }
});

router.get("/:id", async function (req, res, next) {
    try {
        const deck = await Deck.get(req.params.id);
        return res.json({ deck });
    } catch (err) {
        return next(err);
    }
});

router.patch("/:id", async function (req, res, next) {
    try {
        const validator = jsonschema.validate(req.body, deckUpdateSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const deck = await Deck.update(req.params.handle, req.body);
        return res.jaon({ deck });
    } catch (err) {
        return next(err);
    }
});

router.delete("/:id", async function (req, res, next) {
    try {
        await Deck.remove(req.params.id);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;