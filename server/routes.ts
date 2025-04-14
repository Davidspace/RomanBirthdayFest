import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // RSVP submission endpoint
  app.post("/api/rsvps", async (req, res) => {
    try {
      const rsvpData = insertRsvpSchema.parse(req.body);
      const newRsvp = await storage.createRsvp(rsvpData);
      return res.status(201).json(newRsvp);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: fromZodError(error).message 
        });
      }
      return res.status(500).json({ 
        message: "An error occurred while processing your RSVP" 
      });
    }
  });

  // Get all RSVPs
  app.get("/api/rsvps", async (req, res) => {
    try {
      const rsvps = await storage.getAllRsvps();
      return res.json(rsvps);
    } catch (error) {
      return res.status(500).json({ 
        message: "An error occurred while retrieving RSVPs" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
