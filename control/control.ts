import todoModel from "../model/model";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allTasks = await todoModel.find();
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
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      data: error,
    });
  }
};

const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const oneTask = await todoModel.findById(req.params.id);
    return res.status(201).json({
      message: "particular task gotten",
      data: oneTask,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      data: error,
    });
  }
};

const postOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { task, description } = req.body;
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();
    const newTask = await todoModel.create({
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
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      data: error,
    });
  }
};

const updateOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { status } = req.body;
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();
    const newTask = await todoModel.findByIdAndUpdate(
      req.params.id,
      {
        task: req.params.task,
        description: req.params.description,
        status,
        started: `${date} ${time}`,
        ended: `pending...`,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "task status updated",
      data: newTask,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      data: error,
    });
  }
};

const deleteOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const unWanted = await todoModel.findByIdAndDelete(req.params.id);
    return res.status(201).json({
      message: "particular task deleted",
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      data: error,
    });
  }
};

const deleteAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const unWanted = await todoModel.deleteMany();
    return res.status(201).json({
      message: "all tasks deleted",
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      data: error,
    });
  }
};

export { getAll, getOne, postOne, updateOne, deleteOne, deleteAll };
