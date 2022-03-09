const CurrentVisitService = require('../../Services/Regina/clinicCurrentVisit.service');

class CurrentVisitController {

  async createVisitRecord(req, res){
    if(typeof req.body.clinicID !== 'number' || typeof req.body.FIN !== 'string' || typeof req.body.issueMC !== 'boolean' || typeof req.body.mcID !== 'number' || typeof req.body.nextOfKinID !== 'number' || typeof req.body.currentDiagnosis !== 'string'){
      res.status(400);
      return res.json({message: "Incorrect data requested."});
    }

    const result = await CurrentVisitService.createVisitRecord(req.body);
    res.status(result.status);

    return res.json({data: result.data, status: result.status, message: result.message});
  }

  async findVisitRecord(req, res){
    if(typeof req.body.FIN !== 'string'){
      res.status(400);
      return res.json({message: "Incorrect data requested."});
    }

    const result = await CurrentVisitService.findVisitRecord(req.body);
    res.status(result.status);

    return res.json({data: result.data, status: result.status, message: result.message});
  }

  async updateVisitRecord(req, res){
    if(typeof req.body.issueMC !== 'boolean' || typeof req.body.currentDiagnosis !== 'string'){
      res.status(400);
      return res.json({message: "Incorrect data requested."});
    }

    const result = await CurrentVisitService.updateVisitRecord(req.body);
    res.status(result.status);
    
    return res.json({data: result.data, status: result.status, message: result.message});
  }
}

module.exports = CurrentVisitController;