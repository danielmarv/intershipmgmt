import InternshipSupervisor from '@models/internshipSupervisor';
import { connectedToDB } from '@utils/database';

export const POST = async (req) => {
  const {
    fullName,
    district 
  } = await req.json();
    try {
      await connectedToDB();
      const newSupervisor = new InternshipSupervisor({
        fullName,
        district,
      });

      await newSupervisor.save();
      return new Response(JSON.stringify(newSupervisor), {
        status: 201,
    });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
      });
    }
  }
