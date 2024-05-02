const Tasks = require("../models/TaskData");

module.exports = {
  async create(request, response) {
    const { dayexec, hrexec, description, status } = request.body;
    if (!dayexec || !hrexec || !description || !status) {
      return response
        .status(400)
        .json({ error: "Necessário um dia/hr/descrição/status!" });
    }
    const taskCreated = await Tasks.create({
      dayexec,
      hrexec,
      description,
      status,
    });

    return response.json({
      taskCreated,
    });
  },

  async read(request, response) {
    const taskReaded = await Tasks.find();
    return response.json({ taskReaded });
  },

  async update(request, response) {
    const { id } = request.params;
    const { hrexec, description } = request.body;
    const taskUpdated = await Tasks.findOne({ _id: id });

    if (taskUpdated) {
      taskUpdated.hrexec = hrexec;
      taskUpdated.description = description;
      taskUpdated.save();
    }

    return response.json({ taskUpdated });
  },

  async updatestatus(request, response) {
    const { id } = request.params;
    const { status } = request.body;
    const taskStatusUpdated = await Tasks.findOne({ _id: id });

    if (taskStatusUpdated) {
      taskStatusUpdated.status = status;
      taskStatusUpdated.save();
    }

    return response.json({ taskStatusUpdated });
  },

  async delete(request, response) {
    const { id } = request.params;
    console.log(id);

    const taskDeleted = await Tasks.findOneAndDelete({ _id: id });
    if (!taskDeleted) {
      return response
        .status(401)
        .json({ error: "Não foi encontrado o registro para deletar!" });
    }

    return response.json({ taskDeleted });
  },
};
