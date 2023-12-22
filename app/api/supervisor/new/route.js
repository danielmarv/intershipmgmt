import Supervisor from '@models/internshipSupervisor';
import { connectedToDB } from '@utils/database';

export const POST = async (req) => {
    try {
      await connectedToDB();
      const {
        fullName,
        district 
      } = await req.json();
      const newSupervisor = new Supervisor({
        fullName,
        district,
      });

      await newSupervisor.save();
      return new Response(JSON.stringify(newSupervisor), {
        status: 201,
      });
    } catch (error) {
      return new Response(JSON.stringify('Internal Server Error', error), {
        status: 500,
      });
    }
  }
