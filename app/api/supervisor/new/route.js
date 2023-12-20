import InternshipSupervisor from '@models/internshipSupervisor';
import { connectedToDB } from '@utils/database';

export const POST = async (req) => {
    try {
        connectedToDB()
      const { fullName, district } = req.body;
      const newSupervisor = new InternshipSupervisor({
        fullName,
        district,
      });

      const savedSupervisor = await newSupervisor.save();
      return new Response(JSON.stringify(savedSupervisor), {
        status: 201,
    });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
