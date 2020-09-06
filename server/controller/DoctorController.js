const { Doctor, City, Field, Hospital, HospitalDoctor } = require("../models");

class DoctorController {
  static getData(req, res) {
    Doctor.findAll({
      include: [City, Field, Hospital],
    })
      .then((datas) => {
        const doctor = [];
        datas.forEach((data) => {
          if (data.City.name === req.params.city) {
            doctor.push(data);
          }
        });
        res.status(200).json(doctor);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getDataById(req, res) {
    Doctor.findOne({
      where: {
        id: req.params.id,
      },
      include: [City, Field, Hospital],
    })
      .then((datas) => {
        res.status(200).json(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = DoctorController;
