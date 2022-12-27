"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes/routes"));
const cors_1 = __importDefault(require("cors"));
const port = process.env.port || 2032;
const app = (0, express_1.default)();
app.use(express_1.default.json());
require("../config/db");
app.use((0, cors_1.default)({ origin: "*" }));
app.get("/", (req, res) => {
    try {
        return res.status(200).json({
            message: "server is running",
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "something went wrong",
            data: error,
        });
    }
});
app.use("/api", routes_1.default);
app.listen(port, () => {
    console.log(`port ${port} is running`);
});
