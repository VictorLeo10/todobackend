"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAll = exports.deleteOne = exports.updateOne = exports.postOne = exports.getOne = exports.getAll = void 0;
const model_1 = __importDefault(require("../model/model"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTasks = yield model_1.default.find();
        // const sortinfo = (x: any) => {
        //   return (a: any, b: any) => {
        //     if (a[x] < b[x]) {
        //       return a[x];
        //     } else if (a[x] > b[x]) {
        //       return -1;
        //     }
        //     // return 0;
        //   };
        // };
        // const sorted = await sortinfo(allTasks);
        return res.status(201).json({
            message: "all tasks gotten",
            data: allTasks.reverse(),
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "something went wrong",
            data: error,
        });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneTask = yield model_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "particular task gotten",
            data: oneTask,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "something went wrong",
            data: error,
        });
    }
});
exports.getOne = getOne;
const postOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, description } = req.body;
        const date = new Date().toDateString();
        const time = new Date().toLocaleTimeString();
        const newTask = yield model_1.default.create({
            task,
            description,
            status: false,
            started: `${date} ${time}`,
            ended: `pending...`,
        });
        return res.status(201).json({
            message: "new task added",
            data: newTask,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "something went wrong",
            data: error,
        });
    }
});
exports.postOne = postOne;
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.body;
        const date = new Date().toDateString();
        const time = new Date().toLocaleTimeString();
        const newTask = yield model_1.default.findByIdAndUpdate(req.params.id, {
            task: req.params.task,
            description: req.params.description,
            status,
            started: `${date} ${time}`,
            ended: `pending...`,
        }, { new: true });
        return res.status(201).json({
            message: "task status updated",
            data: newTask,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "something went wrong",
            data: error,
        });
    }
});
exports.updateOne = updateOne;
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const unWanted = yield model_1.default.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            message: "particular task deleted",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "something went wrong",
            data: error,
        });
    }
});
exports.deleteOne = deleteOne;
const deleteAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const unWanted = yield model_1.default.deleteMany();
        return res.status(201).json({
            message: "all tasks deleted",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "something went wrong",
            data: error,
        });
    }
});
exports.deleteAll = deleteAll;
