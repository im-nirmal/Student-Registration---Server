const users = require('../Models/userModel')

//register
exports.register = async(req,res)=>{
    console.log("inside register");
    const{firstName,lastName,address,email,gender,mobile,password,dob,course} = req.body

    try{
        const exUser = await users.findOne({email})
        if(exUser){
            res.status(406).json("Student exists")
        } else{
            const newUser = new users({
                firstName,lastName,address,email,gender,mobile,password,dob,course
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }

    }


//get students
exports.getStudents = async(req,res)=>{
    console.log("inside get students");
    try{
        const students = await users.find()
        res.status(200).json(students)

    }catch(err){
        res.status(200).json(newUser)
    }
}
