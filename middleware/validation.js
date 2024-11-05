const validationForm = (req,res,next)=> {

    const {fullName , number , email, message} = req.body;

    if(!fullName || !number || !email || !message){
        return res.status(400).json({ error: 'Please fill all the fields' });
    }

    if(!fullName || typeof fullName !== 'string'){
        return res.status(400).json({ error: 'Name is required' });
    }

    if(!number){
        return res.status(400).json({ error: 'Number is required' });
    }

    if(!email){
        return res.status(400).json({ error: 'Email is required' });
    }


    if(!message){
        return res.status(400).json({ error: 'Message is required' });
    }

    next();
}

module.exports = validationForm;