import Student from '@models/students';
import { connectedToDB } from '@utils/database';

export const POST = async (req) => {
    const {
        fullName,
        campusName,
        schoolName,
        townName,
        districtName,
        kilometers,
        schoolPractices,
        moneyPaid,
        regNo, 
        emailId,
        year, 
        phoneNum
    } = await req.json();

    try {
        await connectedToDB();

        const newStudent = new Student({
            fullName,
            campusName,
            schoolName,
            townName,
            districtName,
            kilometers,
            schoolPractices,
            moneyPaid,
            regNo, 
            emailId,
            year, 
            phoneNum
        });

        await newStudent.save();

        return new Response(JSON.stringify(newStudent), {
            status: 201,
        });
    } catch (error) {
        return new Response("Failed to create a new Student",(error.message || error), {
            status: 500,
        });
    }
}