"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uri = "mongodb+srv://So:dbpass10@cluster0.medzjfo.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.connect(uri);
mongoose_1.default.connection
    .on("open", () => {
    console.log("db connecction established");
})
    .once("error", (error) => {
    console.log("failed to establish connection");
});
