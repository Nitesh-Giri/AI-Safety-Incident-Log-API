// controllers/incidentController.js
import Incident from "../models/Incident.js";

// create an incident
export const createIncident = async (req, res) => {

  const { title, description, severity } = req.body;

  try {
    if ( !title || !description || !["Low", "Medium", "High"].includes(severity)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const incidentData = {
      title,
      description,
      severity,
    };

    const incident = await Incident.create(incidentData);

    res.json({
      message: "Incident created successfully",
      incident,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Error creating incident" });
  }
};

// Get all incidents
export const getAllIncidents = async (req, res) => {

  try {
    const incidents = await Incident.find({});

    res.json({
      message: "Incidents retrieved successfully",
      incidents,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching incidents" });
  }
};

// Get a single incident by ID
export const getIncidentById = async (req, res) => {

  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    res.json({
      message: "Incidents retrieved successfully",
      incident,
    });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete an incident
export const deleteIncident = async (req, res) => {

  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);

    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    res.json({
      message: "incident deleted successfully",
      incident,
    });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
