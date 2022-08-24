const { successResponse, sendError } = require("../helpers/response");
const crudService = require("../services/crud_service");
const { checkFields, isValidDate } = require("../utils/validation");
const { makeDate } = require("../utils/dateTime");

exports.getUsers = async (req, res) => {
  try {
    const result = await crudService.fetch("*", "users", 1);
    successResponse(res, result);
  } catch (e) {
    sendError(res, e);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const result = await crudService.fetch("*", "tasks", 1);
    successResponse(res, result);
  } catch (e) {
    sendError(res, e);
  }
};

exports.addTask = async (req, res) => {
  try {
    const body = req.body;
    const checkStatus = await checkFields("task", body);
    if (!checkStatus.status) {
      throw {
        name: "INVALID",
        message: `${checkStatus.field} Field is missing`,
        code: 400,
      };
    }
    body.Important = parseInt(body.Important);
    await crudService.insert("tasks", body);
    successResponse(res, body);
  } catch (e) {
    sendError(res, e);
  }
};
