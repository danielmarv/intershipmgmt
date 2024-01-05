import { connectedToDB } from '@utils/database';
import MarkSheet from '@models/markSheet';

export const POST = async (req) => {

    try {
        connectedToDB();
        const { student, supervisor, marks } = req.body;

        const newMarkSheet = new MarkSheet({
            student,
            supervisor,
            marks,
        });

        const savedMarkSheet = await newMarkSheet.save();
        return new Response(JSON.stringify(savedMarkSheet), {
            status: 201,
        });

    } catch (error) {
        console.error('Error creating mark sheet:', error);
        return new Response("Failed to create a new mark",(error.message || error), {
            status: 500,
        });
    }
}
